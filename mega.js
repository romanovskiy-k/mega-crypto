/*
bookmarklet
javascript:(function(){if%20(document.getElementById('cryptorutokenjs')){alert('уже установлен плагин версии '+plugin.version);return;}var%20script=document.createElement('script');script.id='cryptorutokenjs';script.src='http://webtoken.ru/mega.js?rnd='+Math.random();document.body.appendChild(script);})();
*/
var ru_plugin;
var rutoken_debug = true;

function add_script(js_src) {
    var crypto_js = document.createElement('script');
    crypto_js.src = js_src;
    document.body.appendChild(crypto_js);
}

function add_style(hrf) {
    var st = document.createElement("link");
    st.setAttribute("rel", "stylesheet");
    st.setAttribute("href", hrf);
    document.body.appendChild(st);
}

function init_rutoken() {
    // redefine some functions
    changepw = rt_changepw;
    api_getsid2 = rt_api_getsid2;
    parsepage = rt_parsepage;

    // add static elements (which won't be rewritten in js)
    // in other cases see rt_parsepage (note: mega may change it rather frequently)
    pnl = document.getElementById('bodyel');
    cm = document.createElement('div');
    cm.id = 'cmenu';
    cm.setAttribute("class", "x-rutoken-menu");
    cm.setAttribute('style', "height: 32px; margin: 0px; left: 200px; top: 8px; width: 290px;z-index: 9999;");
    cm.innerHTML = '<select id="device-list" style="color:#333333;border-width:0px; background-color:#DADEE1; left: 10px; top: 4px; width: 220px; height: 21px;" class="x-btn-group-body x-btn-group-body-default-framed x-btn-group-body-default-framed x-table-layout-ct"></select><button style="margin-left:20px;top:4px; vertical-align:center;position:relative;" id="refresh-dev">↓↑</button>';
    pnl.appendChild(cm);

    var plg_div = document.createElement('div');
    plg_div.innerHTML = '<object type="application/x-rutoken-pki" id="plugin-object" width="0" height="0"><param name="onload" value="onPluginLoaded"/></object>';
    document.body.appendChild(plg_div);

    //		add_script('http://crypto-js.googlecode.com/files/2.2.0-crypto-sha1-hmac-pbkdf2-ofb-aes.js');
    //		add_style('http://webtoken.ru/css/le-frog/jquery-ui-1.8.13.custom.css?rnd='+ Math.random());
}

// a32 format convertions

function a32_to_byteArray(a) {
    var b = Array();
    for (var i = 0; i < a.length * 4; i++) b.push((a[i >> 2] >>> (24 - (i & 3) * 8)) & 255);
    return b;
}

function byteArray_to_a32(byteArray) {
    var a = Array((byteArray.length + 3) >> 2);
    for (var i = 0; i < byteArray.length; i++) a[i >> 2] |= (byteArray[i] << (24 - (i & 3) * 8));
    return a;
}

function a32_to_byteStringArray(a) {
    var b = Array();
    for (var i = 0; i < a.length * 4; i++) {
        var byteValue = (a[i >> 2] >>> (24 - (i & 3) * 8)) & 255;
        b.push(("00" + byteValue.toString(16)).substr(-2));
    }
    return b.join(':');
}

function byteStringArray_to_a32(stringArray) {
    var bytes = stringArray.split(':');
    var byteArray = Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        byteArray[i] = parseInt(bytes[i], 16);
    }
    var a = Array((byteArray.length + 3) >> 2);
    for (var i = 0; i < byteArray.length; i++) a[i >> 2] |= (byteArray[i] << (24 - (i & 3) * 8));
    return a;
}

// some helper methods

function arraysEqual(ar1, ar2) {
    if (ar1.length != ar2.length) return false;
    for (var i = 0; i < ar1.length; i++) if (ar1[i] != ar2[i]) return false;
    return true;
}

// redefined and new methods
// page-altering functions and UI dispatchers

function acc_toggle_changemaster(buttonId) {
    var blockId = buttonId + '_block';
    if ($(buttonId).attr('class').indexOf('active') != -1) {
        $(buttonId).removeClass('active');
        $(blockId).removeClass('active');
        $('.change-master-right').removeClass('active');
    } else {
        $(buttonId).addClass('active');
        $(blockId).addClass('active');
        $('.change-master-right').addClass('active');
    }
}

function rt_parsepage(pagehtml) {
    pagehtml = translate(pagehtml);
    pagehtml = pagehtml.replace(/{staticpath}/g, staticpath);
    if (mobileversion) {
        if (!mobileparsed) $('#mobilefmholder').html(pagehtml);
        mobileparsed = true;
    } else {
        var top = parsetopmenu();
        document.getElementById('topmenufm').innerHTML = '';
        document.getElementById('topmenufm').style.display = 'none';
        document.getElementById('fmholder').style.display = 'none';

        if (page == 'start') {
            document.getElementById('bodyel').className = 'start-page';
        } else {
            document.getElementById('bodyel').className = 'bottom-pages';
        }

        document.getElementById('pageholder').style.display = '';
        document.getElementById('pageholder').innerHTML = translate(top) + pagehtml + translate(pages['bottom']);

        addmenuoptions();
        $j('#menu_hover').tooltip({
            position: "bottom center"
        });
        $j('#language_hover').tooltip({
            position: "bottom center"
        });

        if (u_type === 0) {
            document.getElementById('menu_login').style.display = 'none';
            document.getElementById('menu_abort').style.display = '';
        }

        if ((page == 'developers') && (Ext.userAgent.toLowerCase().indexOf('chrome') > 0)) {
            $('html')[0].style.height = 'auto';
            $('html')[0].style.overflow = 'auto';
        } else {
            $('html')[0].style.height = '100%';
            $('html')[0].style.overflow = 'hidden';
        }
        if ($(".top-head")) $(".top-head")[0].scrollIntoView();
        $j('#ribon_hover').tooltip({
            position: "bottom center"
        });

        if (page = 'account') {
            var changeMasterKeyMarkup =
                "<div class=\"rutoken-extra\">\n" +
                "<a href=\"javascript:acc_toggle_changemaster('#changemaster');\" id=\"changemaster\" class=\"account-manage-button change-pass\">Re-encrypt master key</a>\n" +
                "<div class=\"clear\"></div>\n" +
                "<div class=\"change-pass-block\" id=\"changemaster_block\">\n" +
                "    <div class=\"notice-input-block\" id=\"acc_cmk_current_div\">\n" +
                "        <input value=\"Current password\" onfocus=\"inputfocus('acc_cmk_current','Current password',true);\" onblur=\"inputblur('acc_cmk_current','Current password',true);\" id=\"acc_cmk_current\" type=\"text\">\n" +
                "    </div>\n" +
                "    <a href=\"#\" onclick=\"acc_changemaster(); return false;\" class=\"login-button\" id=\"acc_cmk_btn\">Update</a>\n" +
                "</div>\n" +
                "<div class=\"change-master-right\">\n" +
                "    <div id=\"acc_checkbox2_div\" class=\"checkboxOn\">\n" +
                "        <input type=\"checkbox\" id=\"acc_checkbox2\" onclick=\"logincheckboxCheck('acc_checkbox2'); acc_ukreset();\" class=\"checkboxOn\" checked>\n" +
                "    </div>\n" +
                "    <div class=\"register-terms-text\">First-time initialization</div>\n" +
                "    <div class=\"clear\"></div>\n" +
                "    <div class=\"change-master-text\" style=\"display:block;\">If you are connecting your account with the token for the first time we need to authenticate one last time with the unencrypted master key. In case if you just want to migrate to another token, leave the checkbox empty.</div>\n" +
                "</div>                \n" +
                "<div class=\"clear\"></div>\n" +
                "</div>\n";
            $("#changepass").before(changeMasterKeyMarkup);
        };
    }
}

function acc_ukreset() {
    if ($('#acc_checkbox2')[0].checked) {
        $('.change-master-text')[0].style.display = '';
    } else {
        $('.change-master-text')[0].style.display = 'none';
    }
}

function acc_changemaster() {
    if ($('#acc_cmk_current')[0].value == '') {
        alert(l[719]);
    } else {
        loadingDialog.show();
        rt_changemaster($('#acc_cmk_current')[0].value, {
            callback: function(res) {
                loadingDialog.hide();
                if (res[0] == EACCESS) {
                    $('#acc_cmk_current')[0].type = 'text';
                    $('#acc_cmk_current')[0].value = l[716];
                    alert(l[724]);
                } else if ((typeof res[0] == 'number') && (res[0] < 0)) alert(l[200]);
                else {
                    alert(l[725], l[726]);
                    $('#acc_cmk_current')[0].type = 'text';
                    $('#acc_cmk_current')[0].value = l[716];
                    acc_show('#changepass');
                }
            }
        });
    }
    return false;
}

// core functions

function rt_changemaster(currentpw, ctx) {
    // assuming that current master key is encrypted only with aes
    // TODO: implement token migration
    // uploads plugin-encrypted master key to the server
    // u_k -> plugin.encrypt -> aes(currentpw) -> api_send
    var pw_aes = new sjcl.cipher.aes(prepare_key_pw(currentpw));
    plugin.pluginObject.encrypt(0, "secretKey", a32_to_byteStringArray(u_k), function(cipherText) {
        var encrypted_u_k = byteStringArray_to_a32(cipherText);
        var aes_u_k = encrypt_key(pw_aes, encrypted_u_k);
        if (rutoken_debug) {
            console.log('current master key:', u_k);
            console.log('plugin-encrypted key (will be encrypted by aes and sent as new master key):', encrypted_u_k);
            console.log('aes-encrypted plugin key (must be equal to server-side key):', aes_u_k);
        }
        var current_key = [];
        if ($('#acc_checkbox2').prop('checked'))
            current_key = encrypt_key(pw_aes, u_k);
        else 
            current_key = encrypt_key(pw_aes, encrypted_u_k);
        if (rutoken_debug) console.log('sent current_key:', current_key);

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
    var local_ctx = {
        callback: function(res) {
            console.log('fixmaster local api callback', res);
            if (res[0] == EACCESS) {
                console.log(l[724]);
            } else if ((typeof res[0] == 'number') && (res[0] < 0)) console.log(l[200]);
            else {
                console.log(l[725], l[726]);
            }
        }
    };
    // what is returned on login
    var serverside_key = [997652571, 593851720, 1282069927, -1879291363];
    // aes.encrypt(u_k on password)
    var new_server_key = [405728526, -720442280, 998371926, 1735031587];
    var pw_aes = new sjcl.cipher.aes(prepare_key_pw('pdnejohuvix'));
    api_req([{
        a: 'up',
        currk: a32_to_base64(serverside_key),
        k: a32_to_base64(new_server_key),
        uh: stringhash(u_attr['email'].toLowerCase(), pw_aes)
    }], local_ctx);
}

function rt_changepw(currentpw, newpw, ctx) {
    var pw_aes = new sjcl.cipher.aes(prepare_key_pw(newpw));
    plugin.pluginObject.encrypt(0, "secretKey", a32_to_byteStringArray(u_k), function(cipherText) {
        var encrypted_u_k = byteStringArray_to_a32(cipherText);
        if (rutoken_debug) {
            console.log('plugin-encrypted u_k:', encrypted_u_k);
            var serverside_key = encrypt_key(new sjcl.cipher.aes(prepare_key_pw(currentpw)), encrypted_u_k);
            console.log('current server-side key must be equal to', serverside_key);
            console.log('new server-side key is', encrypt_key(pw_aes, encrypted_u_k));
        }
        api_req([{
            a: 'up',
            currk: a32_to_base64(encrypt_key(new sjcl.cipher.aes(prepare_key_pw(currentpw)), encrypted_u_k)),
            k: a32_to_base64(encrypt_key(pw_aes, encrypted_u_k)),
            uh: stringhash(u_attr['email'].toLowerCase(), pw_aes)
        }], ctx);
    },

    function(err) {
        console.log(err);
    });
}

function rt_api_getsid2(res, ctx) {
    console.log(new Date().getTime());
    var k;
    var r = false;

    if (typeof res == 'object') {
        var aes = new sjcl.cipher.aes(ctx.passwordkey);
        // decrypt master key
        if (typeof res[0].k == 'string') {
            k = base64_to_a32(res[0].k);
            if (rutoken_debug) console.log('server-side key == aes(plugin(u_k):', k);

            if (k.length == 4) {
                k = decrypt_key(aes, k);
                if (rutoken_debug) console.log('aes(password)-decrypted key (must be equal to plugin-encrypted u_k):', k);
                plugin.pluginObject.decrypt(0, "secretKey", a32_to_byteStringArray(k), function(plainText) {
                    getsid_decryptCallback(plainText, ctx, res);
                },

                function(err) {
                    rt_api_getsid2_final(ctx, r, err);
                });
            } else rt_api_getsid2_final(ctx, r);
        } else rt_api_getsid2_final(ctx, r);
    } else rt_api_getsid2_final(ctx, r);
}

function rt_api_getsid2_final(ctx, r, pluginErrorCode) {
    console.log(new Date().getTime());
    if (pluginErrorCode) console.log('plugin error #', pluginErrorCode);
    ctx.result(ctx, r);
}

function getsid_decryptCallback(decryptedKey, ctx, res) {
    var k = byteStringArray_to_a32(decryptedKey);
    var true_uk = [11135156, 514393077, 1398720439, 1994211984];
    if (rutoken_debug) console.log('plugin-decrypted key must be equal to u_k which is', arraysEqual(k, true_uk), k);

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
    console.log(new Date().getTime());
    ctx.result(ctx, r);
}

// plugin wrappers

function testUi(useConsole) {
    this.controls = new uiControls();
    this.console = $("#console");

    this.useConsole = (useConsole === undefined) ? false : useConsole;

    var header = '<div class="ui-widget-header ui-corner-all"></div>';
    var codeBlock = '<div id="code"><button id="code-button" class="button test-element">Показать код</button>' + '<div id="code-view"><pre class = "brush: js"></pre></div></div>';
    var runButton = '<button id="test-run" class="button test-element">Запустить тест</button>';

    $(".test").each(function(index) {
        if (!TestSuite[$(this).attr("id")]) return;
        var test = TestSuite[$(this).attr("id")];
        test.container = $(this);
        test.section = $(this).parent();

        $(this).html(header + codeBlock + $(this).html() + runButton);
        $(this).find(".ui-widget-header").text(test.description);

        $(this).find("#code-view > pre").text(test.runTest.toString());
        $(this).find("#test-run").click($.proxy(test.run, test));

        var code = $(this).find("#code");
        code.find("#code-button").toggle(function() {
            code.find("#code-view").show("Blind");
        }, function() {
            code.find("#code-view").hide("Blind");
        });
    });
}

function uiControls() {
    this.deviceList = $("#device-list");
    this.keyList = $("#key-list");
    this.certificateList = $("#cert-list");

    this.refreshDeviceListButton = $("#refresh-dev");
    this.refreshKeyListButton = $("#refresh-keys");
    this.refreshCertificateListButton = $("#refresh-certs");

    this.loginButton = $("#login");
    this.logoutButton = $("#logout");

    this.pinInput = $("#device-pin");
    this.useHw = $("#use-hw-hash");
    this.useHw.prop("checked", false);

    this.detachedSign = $("#detached-sign");
    this.detachedSign.prop("checked", false);
}

uiControls.prototype = {
    deviceList: null,
    keyList: null,
    certificateList: null,

    refreshDeviceListButton: null,
    refreshKeyListButton: null,
    refreshCertificateListButton: null,
    loginButton: null,
    logoutButton: null,

    pinInput: null,
    useHw: null,
    detachedSign: null
};

testUi.prototype = {
    controls: null,
    console: null,
    useConsole: null,

    clear: function() {
        this.console.empty();
    },
    write: function(text) {
        var str = text.replace(/\n/g, "<br>");
        this.console.html(this.console.html() + str);
        this.console.scrollTop(this.console[0].scrollHeight);
    },
    writeln: function(text) {
        this.write(text + "\n");
    },

    pin: function() {
        return this.controls.pinInput.val();
    },

    useHw: function() {
        return this.controls.useHw.prop("checked");
    },

    detachedSign: function() {
        return this.controls.detachedSign.prop("checked");
    },

    device: function() {
        var deviceId = Number(this.controls.deviceList.val());
        if (isNaN(deviceId)) throw "Нет доступных устройств";
        return deviceId;
    },
    key: function() {
        return this.controls.keyList.val();
    },
    certificate: function() {
        return this.controls.certificateList.val();
    },

    addDevice: function(deviceId, label) {
        ui.controls.deviceList.append($("<option>", {
            'value': deviceId
        }).text(label));
    },

    clearDeviceList: function(message) {
        this.controls.deviceList.empty();
        if (message) this.controls.deviceList.append($("<option>").text(message));
    },

    addKey: function(keyId, label) {
        this.controls.keyList.append($("<option>", {
            'value': keyId
        }).text(label));
    },
    refreshKeyList: function(keys) {
        this.clearKeyList();
        if (keys.length != 0) for (var d in keys) this.addKey(keys[d]);
        else this.controls.keyList.append($("<option>").text("Ключи на устройстве отсутствуют"));
    },
    clearKeyList: function(message) {
        this.controls.keyList.empty();
        if (message) this.controls.keyList.append($("<option>").text(message));
    },

    addCertificate: function(handle, certificate, category) {
        var description = "";
        switch (category) {
            case plugin.CERT_CATEGORY_USER:
                description = "Пользовательский| ";
                break;
            case plugin.CERT_CATEGORY_CA:
                description = "Корневой| ";
                break;
            case plugin.CERT_CATEGORY_OTHER:
                description = "Другой| ";
                break;
        }

        var subjectDNs = certificate.subject;
        var noSubject = true;
        for (c in subjectDNs) {
            if (subjectDNs[c]["rdn"] == "commonName" || subjectDNs[c]["rdn"] == "emailAddress") {
                noSubject = false;
                description += subjectDNs[c]["rdn"] + "=" + subjectDNs[c]["value"] + "|";
            }
        }
        if (noSubject) description += certificate.serialNumber;

        var title = "Serial number: " + certificate.serialNumber + "\n\nIssuer:\n\t";
        var issuerDNs = certificate.issuer;
        for (c in issuerDNs) {
            title += issuerDNs[c]["rdn"] + "=" + issuerDNs[c]["value"] + "\n\t";
        }

        this.controls.certificateList.append($("<option>", {
            'value': handle,
            'title': $.trim(title).replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
        }).text(noSubject ? certificate.serialNumber : description));
    },

    clearCertificateList: function(message) {
        this.controls.certificateList.empty();
        if (message) this.controls.certificateList.append($("<option>").text(message));
    },

    getContent: function(container, index) {
        if (index === undefined) index = 0;
        var elements = container.find(".text-input, .input");
        return elements[index].value;
    },

    setContent: function(container, text) {
        return container.find(".text-output").val(text);
    },

    certificateType: function() {
        var value = $(".radio-input:radio[name=certificate-category]:checked").val();
        switch (value) {
            case "user":
                return plugin.CERT_CATEGORY_USER;
            case "ca":
                return plugin.CERT_CATEGORY_CA;
            case "other":
                return plugin.CERT_CATEGORY_OTHER;
        }
    },

    registerEvents: function() {
        this.controls.refreshDeviceListButton.click($.proxy(function() {
            try {
                plugin.enumerateDevices();
            } catch (error) {
                this.writeln(error.toString());
                this.clearDeviceList(error.toString());
            }
        }, this));

        this.controls.refreshKeyListButton.click($.proxy(function() {
            try {
                plugin.enumerateKeys();
            } catch (error) {
                this.writeln(error.toString());
                this.clearKeyList(error.toString());
            }
        }, this));

        this.controls.refreshCertificateListButton.click($.proxy(function() {
            try {
                plugin.enumerateCertificates();
            } catch (error) {
                this.writeln(error.toString());
                this.clearCertificateList(error.toString());
            }
        }, this));

        this.controls.loginButton.click($.proxy(function() {
            try {
                plugin.login();
            } catch (error) {
                this.writeln(error.toString());
            }
        }, this));

        this.controls.logoutButton.click($.proxy(function() {
            try {
                plugin.logout();
            } catch (error) {
                this.writeln(error.toString());
            }
        }, this));

        this.controls.deviceList.change($.proxy(function() {
            if (plugin.autoRefresh) {
                plugin.enumerateKeys();
                plugin.enumerateCertificates();
            } else {
                this.clearKeyList("Обновите список ключевых пар");
                this.clearCertificateList("Обновите список сертификатов");
            }
        }, this));
    },

    // TBD: enable/disable controls
    // disableDeviceList: function(message) {
    //     this.controls.deviceList.empty();
    //     if (message) this.controls.deviceList.append($("<option>").text(message));
    //     this.controls.deviceList.attr('disabled', true);
    //     this.disableKeyList(message);
    //     this.disableCertificateList(message);
    // },
    // disableKeyList: function(message) {
    //     this.controls.keyList.empty();
    //     if (message) this.controls.keyList.append($("<option>").text(message));
    //     this.controls.keyList.attr('disabled', true);
    // },
    // disableCertificateList: function(message) {
    //     this.controls.certificateList.empty();
    //     if (message) this.controls.certificateList.append($("<option>").text(message));
    //     this.controls.certificateList.attr('disabled', true);
    // },
    // disableKeyRefreshButton: function() {
    //     this.controls.refreshKeyListButton.attr('disabled', true);
    // },
    // disableCertificateRefresh: function(message) {
    //     this.controls.refreshCertificateListButton.attr('disabled', true);
    // },
    printError: function(code) {
        if (this.useConsole) {
            console.trace();
            //console.log(code);
            console.debug(arguments);
        }
        this.writeln("Ошибка: " + plugin.errorDescription[code] + "\n");
    },

    printResult: function(message) {
        if (this.useConsole) {
            console.trace();
            console.debug(arguments);
        }
        if (undefined === message) {
            this.writeln("Выполнен" + "\n");
            return;
        }
        if ($.isArray(message)) {
            if (message.length) this.writeln("Массив длиной(" + message.length + "): \n" + message.join("\n") + "\n");
            else this.writeln("<Пустой массив>");
            return;
        }
        if (Object.prototype.toString.call(message) === '[object Object]') {
            this.writeln(JSON.stringify(message, null, "\t") + "\n");
            return;
        }
        if (message == "") {
            this.writeln("<Пустая строка>" + "\n");
            return;
        }
        this.writeln(message + "\n");
    },

    getSubject: function() {
        var inputs = $("#cert-subject input");
        var subject = [];
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value != "") {
                var dn = {
                    "rdn": inputs[i].id,
                    "value": inputs[i].value
                }
                subject.push(dn);
            }
        }
        return subject;
    },

    getExtensions: function() {
        var inputs = $("#cert-extensions input");
        var keyUsage = [];
        var extKeyUsage = [];
        var certificatePolicies = [];

        for (var i = 0; i < inputs.length; i++) {
            var checkbox = inputs[i];
            if (checkbox.checked) switch (checkbox.name) {
                case "cert-exts-keyusage":
                    keyUsage.push(checkbox.value);
                    break;
                case "cert-exts-extkeyusage":
                    extKeyUsage.push(checkbox.value);
                    break;
                case "cert-exts-policies":
                    certificatePolicies.push(checkbox.value);
                    break;
            }
        }

        var extensions = {
            "keyUsage": keyUsage,
            "extKeyUsage": extKeyUsage,
            "certificatePolicies": certificatePolicies
        };
        return extensions;
    },

    readFile: function(container, callback) {
        if (undefined === window.FileReader) {
            throw "Браузер не поддерживает объект FileReader";
        }
        var e = container.find("#sign-file")[0];
        if (e.files.length == 0) throw "Не выбран файл для подписи";
        var f = e.files[0];

        var r = new FileReader();
        r.readAsBinaryString(f);
        r.onloadend = function(event) {
            callback($.base64.encode(event.target.result));
        }
    },
}

function cryptoPlugin(pluginObject, noAutoRefresh) {
    this.autoRefresh = noAutoRefresh ? false : true;
    this.methods = ["enumerateDevices", "getDeviceLabel", "getDeviceModel", "getDeviceType", "generateKeyPair", "enumerateKeys", "setKeyLabel", "getKeyLabel", "deleteKeyPair", "login", "logout", "createPkcs10", "importCertificate", "enumerateCertificates", "deleteCertificate", "sign", "authenticate", "parseCertificate", "parseCertificateFromString"];

    this.constants = ["CERT_CATEGORY_USER", "CERT_CATEGORY_CA", "CERT_CATEGORY_OTHER", "TOKEN_TYPE_RUTOKEN_ECP", "TOKEN_TYPE_RUTOKEN_WEB", "TOKEN_TYPE_RUTOKEN_PINPAD_IN", "TOKEN_TYPE_UNKNOWN"];

    this.pluginObject = pluginObject;
    if (!this.pluginObject.valid) this.delayedReport("Error: couldn't get CryptopluginObject");

    for (var i = 0; i < this.methods.length; ++i) {
        var f = this.methods[i];

        if (typeof this.pluginObject[f] == "undefined") this.delayedReport("Error: there is no needed pluginObject function: " + f);
        else if (!this[f]) this[f] = this.pluginObject[f];
    }

    for (var i = 0; i < this.constants.length; ++i) {
        var c = this.constants[i];

        if (typeof this.pluginObject[c] == "undefined") this.delayedReport("Error: there is no needed pluginObject constant: " + c);
        else this[c] = this.pluginObject[c];
    }
    this.errorCodes = this.pluginObject.errorCodes;
    this.errorDescription[this.errorCodes.UNKNOWN_ERROR] = "Неизвестная ошибка";
    this.errorDescription[this.errorCodes.BAD_PARAMS] = "Неправильные параметры";
    this.errorDescription[this.errorCodes.DEVICE_NOT_FOUND] = "Устройство не найдено";
    this.errorDescription[this.errorCodes.RNG_ERROR] = "Ошибка датчика случайных чисел";
    this.errorDescription[this.errorCodes.CERTIFICATE_CATEGORY_BAD] = "Недопустимый тип сертификата";
    this.errorDescription[this.errorCodes.CERTIFICATE_EXISTS] = "Сертификат уже существует на устройстве";
    this.errorDescription[this.errorCodes.CERTIFICATE_INVALID] = "Не удалось разобрать сертификат";
    this.errorDescription[this.errorCodes.PKCS11_LOAD_FAILED] = "Не удалось загрузить PKCS#11 библиотеку";
    this.errorDescription[this.errorCodes.NOT_ENOUGH_MEMORY] = "Недостаточно памяти";
    this.errorDescription[this.errorCodes.PIN_INVALID] = "Неверный PIN-код";
    this.errorDescription[this.errorCodes.PIN_LENGTH_INVALID] = "Некорректная длина PIN-кода";
    this.errorDescription[this.errorCodes.PIN_INCORRECT] = "Некорректный PIN-код";
    this.errorDescription[this.errorCodes.PIN_LOCKED] = "PIN-код заблокирован";
    this.errorDescription[this.errorCodes.PIN_CHANGED] = "PIN-код был изменен";
    this.errorDescription[this.errorCodes.SESSION_INVALID] = "Состояние токена изменилось";
    this.errorDescription[this.errorCodes.LICENSE_INVALID] = "На токене отсутствует действующая лицензия";
    this.errorDescription[this.errorCodes.TOKEN_NOT_PRESENT] = "Токен не найден";
    this.errorDescription[this.errorCodes.USER_NOT_LOGGED_IN] = "Выполните вход на устройство";
    this.errorDescription[this.errorCodes.KEY_NOT_FOUND] = "Соответствующая сертификату ключевая пара не найдена";
    this.errorDescription[this.errorCodes.KEY_ID_NOT_UNIQUE] = "Идентификатор ключевой пары не уникален";
    this.errorDescription[this.errorCodes.CERTIFICATE_NOT_FOUND] = "Сертификат не найден";
    this.errorDescription[this.errorCodes.CERTIFICATE_ID_NOT_UNIQUE] = "Идентификатор сертификата не уникален";
    this.errorDescription[this.errorCodes.TOKEN_INVALID] = "Ошибка чтения/записи устройства. Возможно, устройство было извлечено. Попробуйте выполнить enumerate";
    this.errorDescription[this.errorCodes.BASE64_DECODE_FAILED] = "Ошибка декодирования даных из BASE64";
    this.errorDescription[this.errorCodes.PEM_ERROR] = "Ошибка разбора PEM";
    this.errorDescription[this.errorCodes.ASN1_ERROR] = "Ошибка декодирования ASN1 структуры";

    if (this.autoRefresh) {
        this.enumerateDevices();
        this.pluginObject.login(0, "12345678", function(res) {
            console.log('automatic login in function cryptoPlugin! someone please kill it');
        }, console.log);

    }
}

cryptoPlugin.prototype = {
    pluginObject: null,
    errorCodes: null,
    errorDescription: [],
    methods: null,
    constants: null,
    autoRefresh: null,

    delayedReport: function(message) {
        setTimeout(function() {
            ui.writeln(message + "\n")
        }, 0)
    },
    enumerateDevices: function() {
        ui.clearDeviceList("Список обновляется...");
        this.pluginObject.enumerateDevices($.proxy(function(devices) {
            if (devices.length == 0) {
                ui.clearDeviceList("Нет доступных устройств");
                ui.clearCertificateList("Нет доступных устройств");
                ui.clearKeyList("Нет доступных устройств");
                return;
            }
            //            ui.clearKeyList("Выполните вход на устройство");
            ui.clearDeviceList();
            if (this.autoRefresh) this.enumerateKeys(devices[0]);
            if (this.autoRefresh) this.enumerateCertificates(devices[0]);
            else ui.clearCertificateList("Обновите список сертификатов");

            for (var d in devices) {
                this.pluginObject.getDeviceLabel(devices[d], $.proxy(function(device) {
                    return function(label) {
                        if (label == "Rutoken ECP <no label>") label = "Rutoken ECP #" + device.toString();
                        ui.addDevice(device, label);
                    }
                }(devices[d]), this), $.proxy(ui.printError, ui));
            }
        }, this), $.proxy(ui.printError, ui));
    },

    enumerateKeys: function(deviceId, marker) {
        ui.clearKeyList("Список ключевых пар обновляется...")
        marker = (marker === undefined) ? "" : marker;
        deviceId = (deviceId === undefined) ? ui.device() : deviceId;
        this.pluginObject.enumerateKeys(deviceId, marker, $.proxy(function(keys) {
            if (keys.length == 0) {
                ui.clearKeyList("На устройстве отсутствуют ключевые пары");
                return;
            }

            ui.clearKeyList();
            for (var k in keys) {
                this.pluginObject.getKeyLabel(deviceId, keys[k], function(key) {
                    return function(label) {
                        if (label == "") label = "key: " + key.toString();
                        ui.addKey(key, label);
                    }
                }(keys[k]), $.proxy(ui.printError, ui));
            }
        }, this), function(errorCode) {
            if (errorCode == plugin.errorCodes.USER_NOT_LOGGED_IN) ui.clearKeyList(plugin.errorDescription[errorCode]);
            else $.proxy(ui.printError, ui)(errorCode);
        });
    },

    enumerateCertificates: function(deviceId) {
        function onError(errorCode) {
            $.proxy(ui.printError, ui)(errorCode);
            ui.clearCertificateList("Произошла ошибка");
        }

        function addCertificates(certificates, category) {
            for (var c in certificates) {
                this.pluginObject.parseCertificate(device, certificates[c], function(handle) {
                    return function(cert) {
                        ui.addCertificate(handle, cert, category);
                    }
                }(certificates[c]), $.proxy(ui.printError, ui));
            }
        }

        ui.clearCertificateList("Список сертификатов обновляется...");
        var device = (deviceId === undefined) ? ui.device() : deviceId;
        try {
            this.pluginObject.enumerateCertificates(device, this.CERT_CATEGORY_USER, $.proxy(function(certificates) {
                ui.clearCertificateList();
                $.proxy(addCertificates, this)(certificates, this.CERT_CATEGORY_USER);

                this.pluginObject.enumerateCertificates(device, this.CERT_CATEGORY_CA, $.proxy(function(certificates) {
                    $.proxy(addCertificates, this)(certificates, this.CERT_CATEGORY_CA);

                    this.pluginObject.enumerateCertificates(device, this.CERT_CATEGORY_OTHER, $.proxy(function(certificates) {
                        $.proxy(addCertificates, this)(certificates, this.CERT_CATEGORY_OTHER);
                    }, this), onError);
                }, this), onError);
            }, this), onError);
        } catch (e) {
            // ui now throws an exception if there is no devices avalable
            console.log(e);
        }
    },

    login: function() {
        loginSucceeded = function() {
            ui.writeln("Вход выполнен\n");
            if (this.autoRefresh) this.enumerateKeys();
            else ui.clearKeyList("Обновите список ключевых пар");
        }

        this.pluginObject.login(ui.device(), ui.pin(), $.proxy(loginSucceeded, this), $.proxy(ui.printError, ui));
    },
    logout: function() {
        logoutSucceeded = function() {
            ui.writeln("Выход выполнен\n");
            ui.clearKeyList("Выполните вход на устройство");
        }

        this.pluginObject.logout(ui.device(), $.proxy(logoutSucceeded, this), $.proxy(ui.printError, ui));
    },
}

// ts begin
var TestSuite = new(function() {

    function Test() {
        this.run = function() {
            ui.writeln(this.description() + ":");
            try {
                this.runTest();
            } catch (e) {
                ui.writeln(e + "\n");
            }
        }
    };

    this.DevModel = new(function() {
        Test.call(this);
        this.description = function() {
            return "Узнать модель устройства";
        }
        this.runTest = function() {
            plugin.pluginObject.getDeviceModel(ui.device(), $.proxy(ui.printResult, ui), $.proxy(ui.printError, ui));
        }
    })();

    this.DevType = new(function() {
        Test.call(this);
        this.description = function() {
            return "Узнать тип устройства";
        }
        this.runTest = function() {
            plugin.pluginObject.getDeviceType(ui.device(), $.proxy(function(type) {
                var deviceType = "Невозможно определить тип устройства";
                switch (type) {
                    case plugin.TOKEN_TYPE_UNKNOWN:
                        deviceType = "Неизвестное устройство";
                        break;
                    case plugin.TOKEN_TYPE_RUTOKEN_ECP:
                        deviceType = "Рутокен ЭЦП";
                        break;
                    case plugin.TOKEN_TYPE_RUTOKEN_WEB:
                        deviceType = "Рутокен Web";
                        break;
                    case plugin.TOKEN_TYPE_RUTOKEN_PINPAD_IN:
                        deviceType = "Рутокен PINPad";
                        break;
                }
                $.proxy(ui.printResult, ui)(deviceType);
            }, this), $.proxy(ui.printError, ui));
        }
    })();

    this.DevLabel = new(function() {
        Test.call(this);
        this.description = function() {
            return "Получение метки устройства";
        };
        this.runTest = function() {
            plugin.pluginObject.getDeviceLabel(ui.device(), $.proxy(ui.printResult, ui), $.proxy(ui.printError, ui));
        }
    })();

    this.GenerateKeyPair = new(function() {
        Test.call(this);
        this.description = function() {
            return "Генерация ключевой пары ГОСТ Р 34.10-2001 с указанным маркером на устройстве";
        };
        this.runTest = function() {
            plugin.pluginObject.generateKeyPair(ui.device(), "A", ui.getContent(this.container), false, $.proxy(function() {
                $.proxy(ui.printResult, ui)();
                if (plugin.autoRefresh) plugin.enumerateKeys();
                else ui.clearKeyList("Обновите список ключевых пар");
            }, this), $.proxy(ui.printError, ui));
        }
    })();

    this.EnumerateKeys = new(function() {
        Test.call(this);
        this.description = function() {
            return "Получение списка ключевых пар на устройстве по маркеру";
        };
        this.runTest = function() {
            $.proxy(ui.writeln, ui)("Маркер: " + ui.getContent(this.container));
            plugin.pluginObject.enumerateKeys(ui.device(), ui.getContent(this.container), $.proxy(function(keys) {
                $.proxy(ui.printResult, ui)(keys);
            }, this), $.proxy(ui.printError, ui));
        }
    })();

    this.SetKeyLabel = new(function() {
        Test.call(this);
        this.description = function() {
            return "Установка метки ключевой пары";
        };
        this.runTest = function() {
            plugin.pluginObject.setKeyLabel(ui.device(), ui.key(), ui.getContent(this.container), $.proxy(function() {
                $.proxy(ui.printResult, ui)();
                if (plugin.autoRefresh) plugin.enumerateKeys();
                else ui.clearKeyList("Обновите список ключевых пар");
            }, this), $.proxy(ui.printError, ui));
        }
    })();

    this.GetKeyLabel = new(function() {
        Test.call(this);
        this.description = function() {
            return "Получение метки ключевой пары";
        };
        this.runTest = function() {
            plugin.pluginObject.getKeyLabel(ui.device(), ui.key(), $.proxy(ui.printResult, ui), $.proxy(ui.printError, ui));
        }
    })();

    this.DeleteKeyPair = new(function() {
        Test.call(this);
        this.description = function() {
            return "Удаление ключевой пары ГОСТ Р 34.10-2001 с устройства";
        };
        this.runTest = function() {
            plugin.pluginObject.deleteKeyPair(ui.device(), ui.key(), $.proxy(function() {
                $.proxy(ui.printResult, ui)();
                if (plugin.autoRefresh) plugin.enumerateKeys();
                else ui.clearKeyList("Обновите список ключевых пар");
            }, this), $.proxy(ui.printError, ui));
        };
    })();

    this.CreatePkcs10 = new(function() {
        Test.call(this);
        this.description = function() {
            return "Формирование PKCS10 запроса";
        };
        this.runTest = function() {
            var includeSubjectSignToolExt = true;
            plugin.pluginObject.createPkcs10(ui.device(), ui.key(), ui.getSubject(), ui.getExtensions(), includeSubjectSignToolExt, $.proxy(function(res) {
                ui.setContent(this.container, res);
                $.proxy(ui.printResult, ui)(res);
            }, this), $.proxy(ui.printError, ui));
        };
    })();

    this.ImportCertificate = new(function() {
        Test.call(this);
        this.description = function() {
            return "Импорт сертификата на устройство";
        };
        this.runTest = function() {
            plugin.pluginObject.importCertificate(ui.device(), ui.getContent(this.container), ui.certificateType(), $.proxy(function(certificateHandle) {
                if (plugin.autoRefresh) plugin.enumerateCertificates();
                else ui.clearCertificateList("Обновите список сертификатов");
                $.proxy(ui.printResult, ui)(certificateHandle);
            }, this), $.proxy(ui.printError, ui));
        };
    })();

    this.DeleteCertificate = new(function() {
        Test.call(this);
        this.description = function() {
            return "Удаление сертификата";
        };
        this.runTest = function() {
            plugin.pluginObject.deleteCertificate(ui.device(), ui.certificate(), $.proxy(function() {
                $.proxy(ui.printResult, ui)();
                if (plugin.autoRefresh) plugin.enumerateCertificates();
                else ui.clearCertificateList("Обновите список сертификатов");
            }, this), $.proxy(ui.printError, ui));
        };
    })();

    this.GetKeyByCertificate = new(function() {
        Test.call(this);
        this.description = function() {
            return "Получение ID ключевой пары по сертификату";
        };
        this.runTest = function() {
            plugin.pluginObject.getKeyByCertificate(ui.device(), ui.certificate(), $.proxy(function(keyId) {
                $.proxy(ui.printResult, ui)(keyId);
            }, this), $.proxy(ui.printError, ui));
        };
    })();

    this.SignMessage = new(function() {
        Test.call(this);
        this.description = function() {
            return "Подпись сообщения";
        };

        this.runTest = function() {
            var options = {
                detached: false,
                addUserCertificate: true,
                addSignTime: true,
                useHardwareHash: false
            };
            ui.setContent(this.container, "");
            options.useHardwareHash = ui.useHw();
            options.detached = ui.detachedSign();

            if (ui.useConsole) {
                console.time("sign");
                console.log("HW", options.useHardwareHash);
                console.log("detached: ", options.detached);
            }
            plugin.pluginObject.sign(ui.device(), ui.certificate(), ui.getContent(this.container), false, options, $.proxy(function(res) {
                if (ui.useConsole) {
                    console.timeEnd("sign");
                }
                ui.setContent(this.container, res);
                $.proxy(ui.printResult, ui)(res);
            }, this), $.proxy(ui.printError, ui));
        }
    });

    this.SignMessagePinPad = new(function() {
        Test.call(this);
        this.description = function() {
            return "Подпись сообщения на PINPad";
        };

        this.runTest = function() {
            var options = {
                detached: false,
                addUserCertificate: true,
                addSignTime: false
            };
            ui.setContent(this.container, "");
            options.useHardwareHash = ui.useHw();
            options.detached = ui.detachedSign();

            if (ui.useConsole) {
                console.time("sign");
                console.log("detached: ", options.detached);
            }
            plugin.pluginObject.sign(ui.device(), ui.certificate(), ui.getContent(this.container), false, options, $.proxy(function(res) {
                if (ui.useConsole) {
                    console.timeEnd("sign");
                }
                ui.setContent(this.container, res);
                $.proxy(ui.printResult, ui)(res);
            }, this), $.proxy(ui.printError, ui));
        }
    });

    this.Authenticate = new(function() {
        Test.call(this)
        this.description = function() {
            return "Аутентификация";
        }

        this.runTest = function() {
            ui.setContent(this.container, "");
            if (ui.useConsole) {
                console.time("authenticate");
            }
            plugin.pluginObject.authenticate(ui.device(), ui.certificate(), ui.getContent(this.container), $.proxy(function(res) {
                if (ui.useConsole) {
                    console.timeEnd("authenticate");
                }
                ui.setContent(this.container, res);
                $.proxy(ui.printResult, ui)(res);
            }, this), $.proxy(ui.printError, ui))
        }
    });

    this.SignFile = new(function() {
        Test.call(this)
        this.description = function() {
            return "Подпись файла";
        }

        this.runTest = function() {
            var options = {
                detached: true,
                addUserCertificate: true
            }
            ui.readFile(this.container, $.proxy(function(data) {
                ui.setContent(this.container, "");
                plugin.pluginObject.sign(ui.device(), ui.certificate(), data, false, options, $.proxy(function(res) {
                    ui.setContent(this.container, res);
                    $.proxy(ui.printResult, ui)(res);
                }, this), $.proxy(ui.printError, ui))
            }, this))
        }
    });

    this.EncryptMessage = new(function() {
        Test.call(this);
        this.description = function() {
            return "Шифрование сообщения";
        };

        this.runTest = function() {
            ui.setContent(this.container, "");
            plugin.pluginObject.encrypt(ui.device(), ui.certificate(), ui.getContent(this.container, 0), ui.getContent(this.container, 1), false, [], $.proxy(function(res) {
                if (ui.useConsole) {
                    console.timeEnd("encrypt");
                }
                ui.setContent(this.container, res);
                $.proxy(ui.printResult, ui)(res);
            }, this), $.proxy(ui.printError, ui));
        }
    });

    this.Encrypt = new(function() {
        Test.call(this);
        this.description = function() {
            return "Симметричное шифрование сообщения";
        };

        this.runTest = function() {
            ui.setContent(this.container, "");
            plugin.pluginObject.encryptSym(ui.device(), ui.getContent(this.container, 0), ui.getContent(this.container, 1), $.proxy(function(res) {
                if (ui.useConsole) {
                    console.timeEnd("encryptSym");
                }
                ui.setContent(this.container, res);
                $.proxy(ui.printResult, ui)(res);
            }, this), $.proxy(ui.printError, ui));
        }
    });

    this.Decrypt = new(function() {
        Test.call(this);
        this.description = function() {
            return "Симметричное расшифрование сообщения";
        };

        this.runTest = function() {
            ui.setContent(this.container, "");
            plugin.pluginObject.decryptSym(ui.device(), ui.getContent(this.container, 0), ui.getContent(this.container, 1), $.proxy(function(res) {
                if (ui.useConsole) {
                    console.timeEnd("decryptSym");
                }
                ui.setContent(this.container, res);
                $.proxy(ui.printResult, ui)(res);
            }, this), $.proxy(ui.printError, ui));
        }
    });

    this.ParseCertificate = new(function() {
        Test.call(this);
        this.description = function() {
            return "Получение информации о выбранном сертификате";
        }
        this.runTest = function() {
            plugin.pluginObject.parseCertificate(ui.device(), ui.certificate(), $.proxy(function(res) {
                ui.setContent(this.container, res.text);
                $.proxy(ui.printResult, ui)(res);
            }, this), $.proxy(ui.printError, ui))
        }
    })();

    this.GetCertificate = new(function() {
        Test.call(this);
        this.description = function() {
            return "Получение тела выбранного сертификата в base64";
        }
        this.runTest = function() {
            plugin.pluginObject.getCertificate(ui.device(), ui.certificate(), $.proxy(function(res) {
                ui.setContent(this.container, res);
                $.proxy(ui.printResult, ui)(res);
            }, this), $.proxy(ui.printError, ui))
        }
    })();

    this.ParseCertificateFromString = new(function() {
        Test.call(this);
        this.description = function() {
            return "Получение информации о сертификате из строки";
        };
        this.runTest = function() {
            ui.setContent(this.container, "");
            plugin.pluginObject.parseCertificateFromString(ui.getContent(this.container), $.proxy(function(res) {
                ui.setContent(this.container, res.text);
                $.proxy(ui.printResult, ui)(res);
            }, this), $.proxy(ui.printError, ui))
        };
    })();
})();

function onPluginLoaded(pluginObject) {
    try {
        var noAutoRefresh = (document.location.search.indexOf("noauto") !== -1);
        var useConsole = (document.location.search.indexOf("log") !== -1);

        ui = new testUi(true);
        plugin = new cryptoPlugin(pluginObject, noAutoRefresh);
        ui.registerEvents();
    } catch (error) {
        ui.writeln(error);
    }
}

/* vim: tabstop=4:softtabstop=4:shiftwidth=4:expandtab
 **/

init_rutoken();