// redefined and new methods
// page-altering functions and UI dispatchers

function redefine_extras()
{
    parsepage = rt_parsepage;
}

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

redefine_extras();