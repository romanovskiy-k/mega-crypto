function redefine_crypto () {
    // redefine some functions
    changepw = rt_changepw;
    api_getsid2 = rt_api_getsid2;
    api_completeupload2 = rt_api_completeupload2;
    loadfm_callback = rt_loadfm_callback;
    processpacket = rt_processpacket;	
}

function rt_changemaster(currentpw, ctx) {
	// assuming that current master key is encrypted only with aes
	// TODO: implement token migration
	// uploads plugin-encrypted master key to the server
	// u_k -> plugin.encrypt -> aes(currentpw) -> api_send
	var pw_aes = new sjcl.cipher.aes(prepare_key_pw(currentpw));
	plugin.pluginObject.encrypt(0, a32_to_byteStringArray(prepare_key_pw(currentpw)), a32_to_byteStringArray(u_k), function(cipherText) {
		var encrypted_u_k = byteStringArray_to_a32(cipherText);
		var aes_u_k = encrypt_key(pw_aes, encrypted_u_k);
		var current_key = [];
		if ($('#acc_checkbox2').prop('checked')) current_key = encrypt_key(pw_aes, u_k);
		else current_key = encrypt_key(pw_aes, encrypted_u_k);

		api_req([{
			a: 'up',
			currk: a32_to_base64(current_key),
			k: a32_to_base64(encrypt_key(pw_aes, encrypted_u_k)),
			uh: stringhash(u_attr['email'].toLowerCase(), pw_aes)
		}], ctx);
	},

	function(err) {
		console.log(err);
	});
}

function rt_fixmaster() {
	// allows to upload new master key on the server
	// use only in case of emergency
	return false;
	// var local_ctx = {
	// 	callback: function(res) {
	// 		console.log('fixmaster local api callback', res);
	// 		if (res[0] == EACCESS) {
	// 			console.log(l[724]);
	// 		} else if ((typeof res[0] == 'number') && (res[0] < 0)) console.log(l[200]);
	// 		else {
	// 			console.log(l[725], l[726]);
	// 		}
	// 	}
	// };
	// // what is returned on login
	// var serverside_key = [997652571, 593851720, 1282069927, -1879291363];
	// // aes.encrypt(u_k on password)
	// var new_server_key = [405728526, -720442280, 998371926, 1735031587];
	// var pw_aes = new sjcl.cipher.aes(prepare_key_pw(''));
	// api_req([{
	// 	a: 'up',
	// 	currk: a32_to_base64(serverside_key),
	// 	k: a32_to_base64(new_server_key),
	// 	uh: stringhash(u_attr['email'].toLowerCase(), pw_aes)
	// }], local_ctx);
}

function rt_changepw(currentpw, newpw, ctx) {
	function onPluginError(errorCode) {
		console.log(errorCode);
	}

	function encryptMasterOnNewPwCallback(cipherText) {
		var pw_aes = new sjcl.cipher.aes(prepare_key_pw(newpw));
		npw_encrypted_uk = byteStringArray_to_a32(cipherText);
		api_req([{
			a: 'up',
			currk: a32_to_base64(encrypt_key(new sjcl.cipher.aes(prepare_key_pw(currentpw)), cpw_encrypted_uk)),
			k: a32_to_base64(encrypt_key(pw_aes, npw_encrypted_uk)),
			uh: stringhash(u_attr['email'].toLowerCase(), pw_aes)
		}], ctx);

	}

	function encryptMasterOnCurrentPwCallback(cipherText) {
		cpw_encrypted_uk = byteStringArray_to_a32(cipherText);
		plugin.pluginObject.encrypt(0, a32_to_byteStringArray(prepare_key_pw(newpw)), a32_to_byteStringArray(u_k), encryptMasterOnNewPwCallback, onPluginError);
	}

	var cpw_encrypted_uk = [];
	var npw_encrypted_uk = [];
	plugin.pluginObject.encrypt(0, a32_to_byteStringArray(prepare_key_pw(currentpw)), a32_to_byteStringArray(u_k), encryptMasterOnCurrentPwCallback, onPluginError);
}

function rt_api_getsid2(res, ctx) {
	function rt_api_getsid2_final(ctx, r, pluginErrorCode) {
		console.log(new Date().getTime());
		if (pluginErrorCode) console.log('plugin error #', pluginErrorCode);
		ctx.result(ctx, r);
	}

	function getsid_decryptCallback(decryptedKey) {
		var k = byteStringArray_to_a32(decryptedKey);
		var t;
		var r = false;
		var aes = new sjcl.cipher.aes(k);
		if (typeof res[0].tsid == 'string') {
			t = base64urldecode(res[0].tsid);
			if (a32_to_str(encrypt_key(aes, str_to_a32(t.substr(0, 16)))) == t.substr(-16)) r = [k, res[0].tsid];
		} else if (typeof res[0].csid == 'string') {
			var t = mpi2b(base64urldecode(res[0].csid));
			var privk = a32_to_str(decrypt_key(aes, base64_to_a32(res[0].privk)));
			var rsa_privk = Array(4);

			// decompose private key
			for (var i = 0; i < 4; i++) {
				var l = ((privk.charCodeAt(0) * 256 + privk.charCodeAt(1) + 7) >> 3) + 2;
				rsa_privk[i] = mpi2b(privk.substr(0, l));
				if (typeof rsa_privk[i] == 'number') break;
				privk = privk.substr(l);
			}
			// check format
			if (i == 4 && privk.length < 16) {
				r = [k, base64urlencode(crypto_rsadecrypt(t, rsa_privk).substr(0, 43)), rsa_privk];
			}
		}
		rt_api_getsid2_final(ctx, r);
	}

	console.log(new Date().getTime());
	var k;
	var r = false;

	if (typeof res == 'object') {
		var aes = new sjcl.cipher.aes(ctx.passwordkey);
		// decrypt master key
		if (typeof res[0].k == 'string') {
			k = base64_to_a32(res[0].k);

			if (k.length == 4) {
				k = decrypt_key(aes, k);
				plugin.pluginObject.decrypt(0, a32_to_byteStringArray(ctx.passwordkey), a32_to_byteStringArray(k), function(plainText) {
					getsid_decryptCallback(plainText);
				},

				function(err) {
					rt_api_getsid2_final(ctx, r, err);
				});
			} else rt_api_getsid2_final(ctx, r);
		} else rt_api_getsid2_final(ctx, r);
	} else rt_api_getsid2_final(ctx, r);
}

function rt_api_completeupload2(ctx, ut) {
	// key used to encrypt file attributes
	// it will be encrypted and sent to the server
	var file_key = ctx.k;

	function encryptCallback(cipherText) {
		var req = {
			a: 'p',
			t: ut,
			n: [{
				h: ctx.t,
				t: 0,
				a: ab_to_base64(ea[0]),
				k: a32_to_base64(byteStringArray_to_a32(cipherText)),
				fa: ctx.fa
			}]
		};

		if (ut) {
			// a target has been supplied: encrypt to all relevant shares
			var sn = fm_getsharenodes(ut);
			if (sn.length) {
				req.cr = crypto_makecr([file_key], sn, false);
				req.cr[1][0] = ctx.t;
			}
		}
		api_req([req], ctx.ctx);
	}

	function onPluginError(errorCode) {
		console.log(errorCode);
	}
	var p;
	if (ctx.path && ctx.path != ctx.n && (p = ctx.path.indexOf('/')) > 0) {
		var pc = ctx.path.substr(0, p);
		ctx.path = ctx.path.substr(p + 1);
		fm_requestfolderid(ut, pc, ctx);
	} else {
		a = {
			n: ctx.n
		};
		if (d) console.log(file_key);
		var ea = enc_attr(a, file_key);
		if (d) console.log(ea);
		plugin.pluginObject.encrypt(0, a32_to_byteStringArray(u_k), a32_to_byteStringArray(encrypt_key(u_k_aes, file_key)), encryptCallback, onPluginError);
	}
}

function rt_loadfm_callback(json, res) {
	function decryptCallback(plainText) {
		decryptedFileCount++;
		var decryptedKey = byteStringArray_to_a32(plainText);
		jsonFileArray[this.fileIndex].k = jsonFileArray[this.fileIndex].k.replace(this.encryptedKey, a32_to_base64(decryptedKey));
		if (decryptedFileCount == fileCount) {
			rt_loadfm_callback_final();
		}
	}

	function onPluginError(errorCode) {
		console.log(errorCode);
	}

	function rt_loadfm_callback_final() {
		farray[fi] = new Object;
		farray[fi].f = jsonFileArray;
		process_f(fi, false, callback);
		fi++;
	}

	if (((typeof json == 'number') && (json < 0)) && (pfid)) {
		document.getElementById('pageholder').style.display = 'none';
		document.getElementById('loading').style.display = 'none';
		document.getElementById('fmholder').style.display = '';
		page = 'download';
		parsepage(pages['download']);
		document.getElementById('download_unavailable').style.display = '';
		document.getElementById('download_page').style.display = 'none';
		return false;
	}

	if (pfkey) {
		if ((json[0]) && (json[0].f) && (json[0].f[0])) {
			u_sharekeys[json[0].f[0].h] = base64_to_a32(pfkey);
			RootID = json[0].f[0].h;
			folderlink = pfid;
			if (dirtree) dirtree.setTitle(l[808]);
		}
	} else {
		folderlink = false;
		if (dirtree) dirtree.setTitle(l[106]);
	}

	if ((typeof json[0] == 'number') && (json[0] < 0)) {
		parsepage(pages['login']);
		init_login();
		alert(l[200]);
		return false;
	}

	init_anoupload = false;
	Ext.suspendLayouts();
	extlayouts = false;
	FileStore.suspendEvents();

	json = json[0];
	if (d) console.log(json);
	if (json.u) process_u(json.u, false);
	if (json.ok) process_ok(json.ok);

	if (json.s) {
		for (i in json.s) {
			if (u_sharekeys[json.s[i].h]) {
				sharingData.push({
					id: json.s[i].h + '_' + json.s[i].u,
					userid: json.s[i].u,
					folderid: json.s[i].h,
					rights: json.s[i].r,
					date: json.s[i].ts
				});
				sharednodes[json.s[i].h] = true;
			}
		}
	}

	SharingStore.loadData(sharingData);
	NetworkID = 'NETWORK';
	maxaction = json.sn;
	var callback = new Object;
	if (json.cr) callback.cr = json.cr;
	if (json.sr) callback.sr = json.sr;
	callback.fn = function(cb) {
		if (cb.cr) crypto_procmcr(cb.cr);
		if (cb.sr) crypto_procsr(cb.sr);
		// find share-root-nodes, and plug them to the user-node in "contacts":     
		FileStore.filterBy(function(record, id) {
			if ((record.get('folder') == 1) && (record.get('su') != '')) return true
		});
		FileStore.each(function(obj) {
			if (!globalfolderids[obj.get('parentid')]) {
				obj.set('parentid', obj.get('su'));
				obj.commit();
			}
		});
		getsc();
		ul_completepending();

		FileStore.resumeEvents();

		document.getElementById('pageholder').style.display = 'none';
		document.getElementById('loading').style.display = 'none';

		if (mobileversion) {
			document.getElementById('mobilefmholder').style.display = '';
		} else document.getElementById('fmholder').style.display = '';
		if (mainpanel) mainpanel.doComponentLayout();
		init_l = false;
		var start_ul;
		if (res) start_ul = res.start_ul;
		initializefm(res, start_ul);
		Ext.resumeLayouts(true);
		extlayouts = true;
		if (termsDialog.hidden) loadingDialog.hide();
		if (window.File && window.FileList && window.FileReader) InitFileDrag();
	}

	var jsonFileArray = json.f;
	var fileCount = getValidFileCount(jsonFileArray);
	var decryptedFileCount = 0;
	for (var fileIndex = 0; fileIndex < jsonFileArray.length; fileIndex++) {
		var keyString = jsonFileArray[fileIndex].k;
		var p = keyString.indexOf(u_handle + ':');
		var pp = keyString.indexOf('/', p);
		if (pp < 0) pp = keyString.length;
		p += u_handle.length + 1;
		var encryptedKey = keyString.substr(p, pp - p);
		// we have found a suitable key: decrypt!
		if (encryptedKey.length < 46) {
			// short keys: AES
			var k = base64_to_a32(encryptedKey);
			// check for permitted key lengths (4 == folder, 8 == file)
			if (k.length == 4 || k.length == 8) {
				// TODO: cache sharekeys in aes
				// plugin.decrypt
				var context = new Object;
				context.fileIndex = fileIndex;
				context.encryptedKey = encryptedKey;
				plugin.pluginObject.decrypt(0, a32_to_byteStringArray(u_k), a32_to_byteStringArray(k), $.proxy(decryptCallback, context), onPluginError);
			}
		}
	};
}

function rt_processpacket() {
	function decryptCallback(plainText) {
		decryptedFileCount++;
		var decryptedKey = byteStringArray_to_a32(plainText);
		packetFileArray[this.fileIndex].k = packetFileArray[this.fileIndex].k.replace(this.encryptedKey, a32_to_base64(decryptedKey));
		if (decryptedFileCount == fileCount) {
			rt_processpacket_callback_final();
		}
	}

	function onPluginError(errorCode) {
		console.log(errorCode);
	}

	function rt_processpacket_callback_final() {
		farray[fi] = new Object;
		farray[fi].f = packetFileArray;
		process_f(fi, true, {
			fn: function() {
				actioni++;
				processpacket();
			}
		});
		fi++;		
	}

	if (!apackets[actioni]) {
		packetcomplete();
		return false;
	}
	var packet = apackets[actioni];
	if (d) console.log('action packet[' + actioni + ']');
	if (packet.i == requesti) {
		if (d) console.log('OWN ACTION PACKET; IGNORE');
	} else if (packet.a == 'fa') {
		if (packet.n) var node = FileStore.getById(packet.n);
		if ((node) && (packet.fa)) node.set('fa', packet.fa);
	} else if ((packet.a == 's') && (!folderlink)) {
		var prockey = false;
		if ((typeof u_sharekeys[packet.n] == 'undefined') && (typeof packet.k != 'undefined')) {
			if (!u_sharekeys[packet.n]) {
				u_sharekeys[packet.n] = crypto_process_sharekey(packet.n, packet.k);
				prockey = true;
			}
		}
		if (packet.o == currentuser) {
			if (typeof packet.r == "undefined") {
				// I deleted my share
				var node = SharingStore.getById(packet.n + '_' + packet.u);
				if (node) {
					SharingStore.remove(node);
					if (sharecount(packet.n) == 0) {
						sharednodes[packet.n] = false
						replacefoldericon(packet.n, 'folder');
					}
				} else if (d) console.log('could not find node ?!');
			} else if (SharingStore.getById(packet.n + '_' + packet.u)) {
				// I update the share							
				var node = SharingStore.getById(packet.n + '_' + packet.u);
				if (node) {
					node.set('rights', packet.r);
					node.commit();
				}
			} else if (packet.ha == crypto_handleauth(packet.n)) {
				var sdata = [];
				// I make a new share
				sdata.push({
					id: packet.n + '_' + packet.u,
					userid: packet.u,
					folderid: packet.n,
					rights: packet.r,
					date: packet.ts
				});
				sharednodes[packet.n] = true;
				SharingStore.loadData(sdata, true);
				replacefoldericon(packet.n, 'sharedfolder');
			} else {
				if (d) console.log('RECEIVED FAKE SHARE NODE ' + packet.n);
				if (d) console.log(packet);
			}
		} else if (typeof packet.o != 'undefined') {
			if (typeof packet.r == "undefined") {
				// delete a share:		
				var node = FileStore.getById(packet.n);

				if (node) {
					if (node.get('parentid').length != 11) {
						// remove sub-share by update:
						node.set('r', 0);
						node.set('su', "");
						node.commit();
					} else process_d(packet.n, false, true, false);
				} else process_d(packet.n, false, true, false);

				delete u_sharekeys[packet.n];
			} else {
				// I receive a share, prepare for receiving tree packet
				var node = FileStore.getById(packet.n);
				if (node) {
					// update rights:
					node.set('r', packet.r);
					node.set('su', packet.o);
					node.commit();
				} else {
					// look up other root-share-nodes from this user:
					if (d) console.log('look up other root-share-nodes from this user:');
					var treenode = dirroot.getNodeById(packet.o);
					if (treenode) {
						treenode.eachChild(function(tnode) {
							rootsharenodes[tnode.data.id] = 1;
						});
					}
					tparentid = packet.o;
					trights = packet.r;
				}
			}
		} else if (prockey) {
			var nodes = fm_getnodes2(packet.n);
			for (var i in nodes) {
				var node = FileStore.getById(nodes[i]);
				if (node) {
					var file = new Object;
					file.a = node.get('attrs');
					file.h = nodes[i];
					crypto_processkey(u_handle, u_k_aes, file);
					node.set('name', file.name);
					node.set('key', file.key);
					node.commit();
					delete file;
				}
			}
			refreshtree = true;
			refreshtopmenu = true;
			refreshgr = true;
		}

		crypto_share_rsa2aes();
	} else if ((packet.a == 'k') && (!folderlink)) {
		if (packet.sr) {
			crypto_procsr(packet.sr);
		} else if (packet.cr) {
			crypto_proccr(packet.cr);
		} else {
			var cr = crypto_makecr(packet.n, [packet.h], true);
			if (d) console.log(cr);
			var ops = [];
			ops.a = 'k';
			ops.cr = cr;
			if (d) console.log('ops:');
			if (d) console.log(ops);
			api_req([ops]);
		}
	} else if (packet.a == 't') {
		if (tparentid) {
			for (var b in packet.t.f) {
				if (rootsharenodes[packet.t.f[b].h]) {
					packet.t.f[b].r = FileStore.getById(packet.t.f[b].h).get('r');
					packet.t.f[b].su = FileStore.getById(packet.t.f[b].h).get('su');
					process_d(packet.t.f[b].h);
				}
			}
			var node2 = FileStore.getById(packet.t.f[0].p);
			if (!node2) {
				packet.t.f[0].p = tparentid;
			}
			packet.t.f[0].su = tparentid;
			packet.t.f[0].r = trights;
			tparentid = false;
			trights = false;
			rootsharenodes = [];
		}
		if (tmoveid) {
			// handle as move						
			node = FileStore.getById(tmoveid);
			if (node) {
				if (node.data.parentid !== packet.t.f[0].p) {
					var movefromid = node.get('parentid');
					moveitem(node, packet.t.f[0].p, false);
					if ((packet.t.f[0].p == TrashbinID) && (!trashbinfull)) {
						trashbinfull = true;
						replacefoldericon(TrashbinID, 'trashbinfull');
					}
					var treenode = dirroot.getNodeById(tmoveid);
					if (treenode) {
						if (dirtree) dirtree.expandPath(treenode.getPath());
						refreshdirsort = true;
					}
					var currentpath = dirroot.getNodeById(currentdirid).getPath();
					if (d) console.log('current path:' + currentpath);

					if ((currentpath.indexOf(packet.t.f[0].p) > -1) || (currentpath.indexOf(movefromid) > -1)) {
						refreshgr = true;
						refreshtopmenu = true;
					} else if (currentdirid == tmoveid) refreshtopmenu = true;

					if (refreshtree) {
						refreshtree = false;
						refreshtreepanel();
					}
				}
			}
			tmoveid = false;
		}
		process_u(packet.t.u, true);
		var packetFileArray = packet.t.f;
		var fileCount = getValidFileCount(packetFileArray);
		var decryptedFileCount = 0;
		for (var fileIndex = 0; fileIndex < packetFileArray.length; fileIndex++) {
			var keyString = packetFileArray[fileIndex].k;
			var p = keyString.indexOf(u_handle + ':');
			var pp = keyString.indexOf('/', p);
			if (pp < 0) pp = keyString.length;
			p += u_handle.length + 1;
			var encryptedKey = keyString.substr(p, pp - p);
			// we have found a suitable key: decrypt!
			if (encryptedKey.length < 46) {
				// short keys: AES
				var k = base64_to_a32(encryptedKey);
				// check for permitted key lengths (4 == folder, 8 == file)
				if (k.length == 4 || k.length == 8) {
					var context = new Object;
					context.fileIndex = fileIndex;
					context.encryptedKey = encryptedKey;
					plugin.pluginObject.decrypt(0, a32_to_byteStringArray(u_k), a32_to_byteStringArray(k), $.proxy(decryptCallback, context), onPluginError);
				}
			}
		};		
		return false;
	} else if ((packet.a == 'c') && (!folderlink)) {
		FileStore.suspendEvents();
		// new contacts:		
		process_u(packet.u, true);
		FileStore.resumeEvents();
	} else if (packet.a == 'd') {
		// delete node:					
		if (apackets[parseInt(i) + 1]) {
			if (apackets[parseInt(i) + 1].a == 't') {
				if (apackets[parseInt(i) + 1].t.f[0].h == packet.n) {
					tmoveid = packet.n;
					if (d) console.log('handle as move');
				}
			}
		}
		// if this is not a move, then delete:					
		if (!tmoveid) process_d(packet.n, false);
	} else if ((packet.a == 'u') && (!folderlink)) {
		if (d) console.log('update packet');
		var node = FileStore.getById(packet.n);
		if (node) {
			if (d) console.log('node');
			var file = new Object;
			file.h = packet.n;
			file.k = packet.k;
			file.a = packet.at;
			u_nodekeys[packet.n] = file.key;
			crypto_processkey(u_handle, u_k_aes, file);
			var icontype = node.get('folder');
			if (sharednodes[packet.n]) icontype = 2;
			if (d) console.log(file);
			node.set('name', file.name);
			node.set('key', file.key);
			node.set('attrs', file.a);
			node.set('type', filetype(file.name, node.get('folder')));
			node.set('icon', fileicon(file.name, icontype));
			node.commit();
			if (packet.cr) {
				if (d) console.log('crypto_proccr');
				if (d) console.log(packet.cr);
				crypto_proccr(packet.cr);
			}
			if (d) console.log('node committed');
			if (node.data.folder > 0) refreshtree = true;
			if (node.data.parentid == currentdirid) refreshgr = true;
		}
	}
	actioni++;
	processpacket();
}

function rt_initupload3() {
	function encryptCallback(cipherText) {
		var encryptedKey = byteStringArray_to_a32(cipherText);
		ul_keyNonce = JSON.stringify(encryptedKey);
		console.log(ul_keyNonce);
		onUploadStart(ul_queue_num);
		ul_dispatch_chain();
	}

	function onPluginError(errorCode) {
		console.log(errorCode);
	}

	ul_uploadurl = ul_queue[ul_queue_num].posturl;

	if (!ul_uploadurl) {
		// TODO: upload over quota reporting
		return;
	}

	ul_macs = [];
	totalbytessent = 0;
	ul_readq = [];

	if (ul_queue[ul_queue_num].size) {
		p = 0;
		for (i = 1; i <= 8 && p < ul_queue[ul_queue_num].size - i * 131072; i++) {
			ul_readq[p] = i * 131072;
			pp = p;
			p += ul_readq[p];
		}

		while (p < ul_queue[ul_queue_num].size) {
			ul_readq[p] = 1048576;
			pp = p;
			p += ul_readq[p];
		}
		if (!(ul_readq[pp] = ul_queue[ul_queue_num].size - pp) && ul_queue[ul_queue_num].size) delete ul_readq[pp];
	} else ul_readq[0] = 0;

	ul_plainq = {};
	ul_intransit = 0;
	ul_inflight = {};
	ul_sendchunks = {};
	ul_lastreason = 0;
	ul_errors = 0;
	ul_progress = Array(ul_maxSlots);
	ul_lastactive = Array(ul_maxSlots);
	ul_lastcompletion = 0;

	if (use_workers) {
		ul_workers = Array(ul_max_workers);
		ul_workerbusy = Array(ul_max_workers);
		for (var id = ul_max_workers; id--;) ul_workerbusy[id] = 0;
	}
	ul_xhrs = Array(ul_maxSlots);
	ul_xhrbusy = Array(ul_maxSlots);

	if (chromehack) ul_sendbuf = Array(ul_maxSlots);

	for (var slot = ul_maxSlots; slot--;) {
		ul_xhrbusy[slot] = 0;
		ul_progress[slot] = 0;
		if (chromehack) ul_sendbuf[slot] = new ArrayBuffer(1048576);
	}

	ul_key = Array(6);
	// generate ul_key and nonce
	for (i = 6; i--;) ul_key[i] = rand(0x100000000);
	ul_aes = new sjcl.cipher.aes([ul_key[0], ul_key[1], ul_key[2], ul_key[3]]);

	if (is_image(ul_queue[ul_queue_num].name)) {
		ul_queue[ul_queue_num].faid = ++ul_faid;
		if (have_ab) createthumbnail(ul_queue[ul_queue_num], ul_aes, ul_faid);
	}
	plugin.pluginObject.encrypt(0, a32_to_byteStringArray(u_k), a32_to_byteStringArray(ul_key), encryptCallback, onPluginError);
}

function rt_startdownload() {
	function encryptCallback(cipherText) {
		var encryptedKey = byteStringArray_to_a32(cipherText);
		dl_keyNonce = JSON.stringify(encryptedKey);
		dl_write_position = 0;
		dl_getsourceurl(startdownload2);
	}

	function onPluginError(errorCode) {
		console.log(errorCode);
	}

	if (dl_queue.length == 0) return false;
	else if (dl_req_storage) return false;

	dl_settimer(-1);

	if (downloading) {
		if (d) console.log("startdownload() called with active download");
		return;
	}

	if (dl_queue_num >= dl_queue.length) dl_queue_num = dl_queue.length - 1;

	if (dl_queue_num < 0) {
		if (d) console.log("startdownload() called with dl_queue_num == -1");
		return;
	}

	var dl_queue_num_start = dl_queue_num;
	var t;
	var retryin = -1;

	for (;;) {
		if (dl_queue[dl_queue_num]) {
			if (!dl_queue[dl_queue_num].retryafter) break;

			if (!t) t = new Date().getTime();

			if (t >= dl_queue[dl_queue_num].retryafter) break;

			if (retryin < 0 || (dl_queue[dl_queue_num].retryafter - t < retryin)) {
				retryin = dl_queue[dl_queue_num].retryafter - t;
				if (retryin < 0) retryin = 0;
			}
		}

		dl_queue_num++;

		if (dl_queue_num >= dl_queue.length) {
			if (d) console.log('Reached end of dl_queue, starting from 0');
			dl_queue_num = 0;
		}

		if (dl_queue_num == dl_queue_num_start) {
			if (d) console.log('Looped through all downloads, nothing left');
			dl_settimer(retryin, startdownload);

			if (retryin < 0) {
				if (d) console.log('Nothing left to retry, clearing dl_queue');
				dl_queue = [];
				dl_queue_num = 0;
			}
			return;
		}
	}

	downloading = true;

	dl_macs = {};
	dl_filesize = -1;
	dl_cipherq = [];
	dl_cipherqlen = 0;
	dl_plainq = [];
	dl_plainqlen = 0;
	dl_lastquotawarning = 0;

	dl_pos = Array(dl_maxSlots);
	dl_progress = Array(dl_maxSlots);
	dl_lastactive = Array(dl_maxSlots);

	if (!dl_legacy_ie) {
		dl_xhrs = Array(dl_maxSlots);

		for (var slot = dl_maxSlots; slot--;) {
			dl_xhrs[slot] = new XMLHttpRequest;

			if (dl_xhrs[slot].overrideMimeType) dl_xhrs[slot].overrideMimeType('text/plain; charset=x-user-defined');

			dl_xhrs[slot].slot = slot;
			dl_pos[slot] = -1;
			dl_progress[slot] = 0;
		}
	} else {
		dl_flash_connections = 0;
		dl_flash_progress = {};
	}

	dl_key = dl_queue[dl_queue_num].key;
	if (dl_queue[dl_queue_num].ph) dl_id = dl_queue[dl_queue_num].ph;
	else dl_id = dl_queue[dl_queue_num].id;

	dl_geturl = '';

	dl_bytesreceived = 0;
	dl_chunksizes = [];

	if (use_workers) {
		dl_workers = new Array(dl_maxWorkers);
		dl_workerbusy = new Array(dl_maxWorkers);

		for (var id = dl_maxWorkers; id--;) dl_workerbusy[id] = 0;
	} else dl_aes = new sjcl.cipher.aes([dl_key[0] ^ dl_key[4], dl_key[1] ^ dl_key[5], dl_key[2] ^ dl_key[6], dl_key[3] ^ dl_key[7]]);
	var real_ul_key = [dl_key[0] ^ dl_key[4], dl_key[1] ^ dl_key[5], dl_key[2] ^ dl_key[6], dl_key[3] ^ dl_key[7], dl_key[4], dl_key[5]];
	plugin.pluginObject.encrypt(0, a32_to_byteStringArray(u_k), a32_to_byteStringArray(real_ul_key), encryptCallback, onPluginError);

}

redefine_crypto();