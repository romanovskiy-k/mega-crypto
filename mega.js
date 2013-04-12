/*
bookmarklet
javascript:(function(){if%20(document.getElementById('cryptorutokenjs')){alert('уже установлен плагин версии '+plugin.version);return;}var%20script=document.createElement('script');script.id='cryptorutokenjs';script.src='http://webtoken.ru/mega.js?rnd='+Math.random();document.body.appendChild(script);})();
*/
var rutoken_debug = true;
var ui, plugin;
// var d = 1;

function add_script(js_src, id) {
    var script = document.createElement('script');
    script.src = js_src;
    script.id = id;
    document.head.appendChild(script);
}

function add_style(hrf) {
    var st = document.createElement("link");
    st.setAttribute("rel", "stylesheet");
    st.setAttribute("href", hrf);
    document.body.appendChild(st);
}

function init_rutoken() {
    // load additional scripts
    // add_script("https://dl.dropbox.com/u/715171/rutoken/mega/util.js", "x-rutoken-util");
    // add_script("https://dl.dropbox.com/u/715171/rutoken/mega/rutoken-extra.js", "x-rutoken-extra");
    // add_script("https://dl.dropbox.com/u/715171/rutoken/mega/rutoken-crypto.js", "x-rutoken-crypto");

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

    var loginDialogMarkup =
        "<div id=\"rt_login_dialog\" class=\"tokenpin modal\" style=\"opacity: 1; display: hidden;\">\n" +
        "   <div class=\"what_to_do\">Введите PIN-код вашего токена\n" +
        "       <span>X</span>\n" +
        "   </div>\n" +
        "   <div class=\"display\">\n" +
        "       <input id=\"device_pin\"type=\"password\" name=\"pincode\">\n" +
        "       <b class=\"enter\" id=\"pinenter\"></b>\n" +
        "   </div>\n" +
        "   <div class=\"tokenid\"></div>\n" +
        "   <div class=\"tokenloginstatus\"></div>\n" +
        "</div>\n";
    var login_div = document.createElement('div');
    login_div.innerHTML = loginDialogMarkup;
    document.body.appendChild(login_div);
}

// plugin UI

function pluginUi(useConsole) {
    this.controls = new uiControls();
    this.console = console;

    this.useConsole = (useConsole === undefined) ? true : useConsole;
}

function uiControls() {
    this.deviceList = $("#device-list");
    this.refreshDeviceListButton = $("#refresh-dev");
    this.loginDialog = $("#rt_login_dialog");
    this.loginButton = $("#pinenter");
    // this.logoutButton = $("#logout");
    this.pinInput = $("#device_pin");
}

uiControls.prototype = {
    deviceList: null,
    keyList: null,
    certificateList: null,

    refreshDeviceListButton: null,
    refreshKeyListButton: null,
    refreshCertificateListButton: null,
    loginDialog: null,
    loginButton: null,
    logoutButton: null,

    pinInput: null,
    useHw: null,
    detachedSign: null
};

pluginUi.prototype = {
    controls: null,
    console: null,
    useConsole: null,

    clear: function() {
        this.console.empty();
    },
    device: function() {
        var deviceId = Number(this.controls.deviceList.val());
        if (isNaN(deviceId)) throw "Нет доступных устройств";
        return deviceId;
    },
    pin: function() {
        return this.controls.pinInput.val();
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

    registerEvents: function() {
        this.controls.refreshDeviceListButton.click($.proxy(function() {
            try {
                plugin.enumerateDevices();
            } catch (error) {
                this.writeln(error.toString());
                this.clearDeviceList(error.toString());
            }
        }, this));

        this.controls.loginButton.click($.proxy(function() {
            try {
                plugin.login();
            } catch (error) {
                this.writeln(error.toString());
            }
        }, this));

        this.controls.deviceList.change($.proxy(function() {}, this));
    },

    printError: function(code) {
        if (this.useConsole) {
            console.trace();
            console.debug(arguments);
        }
        this.writeln("Ошибка: " + plugin.errorDescription[code] + "\n");
    },

    printResult: function(message) {
        if (this.useConsole) {
            console.trace();
            console.debug(arguments);
        }
    },

    initLogin: function(onClickHandler) {
        ui.controls.pinInput.val('');
        this.controls.loginDialog.show();
        ui.controls.pinInput.focus();
        this.controls.loginButton.click(onClickHandler);
    }
}

function cryptoPlugin(pluginObject, noAutoRefresh) {
    this.isLoggedIn = false;
    this.autoRefresh = noAutoRefresh ? false : true;
    this.methods = ["enumerateDevices", "getDeviceLabel", "getDeviceModel", "getDeviceType", "login", "logout"];

    this.constants = ["TOKEN_TYPE_RUTOKEN_ECP", "TOKEN_TYPE_RUTOKEN_WEB", "TOKEN_TYPE_RUTOKEN_PINPAD_IN", "TOKEN_TYPE_UNKNOWN"];

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
    }
}

cryptoPlugin.prototype = {
    pluginObject: null,
    errorCodes: null,
    errorDescription: [],
    methods: null,
    constants: null,
    autoRefresh: null,
    isLoggedIn: null,

    delayedReport: function(message) {
        setTimeout(function() {
            console.log(message + "\n")
        }, 0)
    },
    enumerateDevices: function() {
        ui.clearDeviceList("Список обновляется...");
        this.pluginObject.enumerateDevices($.proxy(function(devices) {
            if (devices.length == 0) {
                ui.clearDeviceList("Нет доступных устройств");
                return;
            }
            ui.clearDeviceList();

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

    login: function() {
        loginSucceeded = function() {
            console.log("Вход выполнен\n");
        }
        this.pluginObject.login(ui.device(), ui.pin(), $.proxy(loginSucceeded, this), $.proxy(ui.printError, ui));
    },
    logout: function() {
        logoutSucceeded = function() {
            console.log("Выход выполнен\n");
        }

        this.pluginObject.logout(ui.device(), $.proxy(logoutSucceeded, this), $.proxy(ui.printError, ui));
    },
}

function onPluginLoaded(pluginObject) {
    var pluginLoadTimer;
    var uiLoadTimer;
    var noAutoRefresh = (document.location.search.indexOf("noauto") !== -1);
    var useConsole = (document.location.search.indexOf("log") !== -1);

    function plugin_loader () {
        if(!window.jQuery) return;
        window.clearInterval(uiLoadTimer);

        ui = new pluginUi(true);
        plugin = new cryptoPlugin(pluginObject, noAutoRefresh);
        ui.registerEvents();
    }

    function mega_loader() {
        if (typeof(rt_changepw) != "function" && typeof(rt_api_getsid2) != "function" && typeof(rt_api_completeupload2) != "function" && typeof(rt_loadfm_callback) != "function" && typeof(rt_processpacket) != "function" && typeof(rt_parsepage) != "function" && typeof(rt_dologin) != "function") return;
        if (typeof(rt_initupload3) != "function" && typeof(rt_startdownload) != "function") return;
        window.clearInterval(pluginLoadTimer);

        changepw = rt_changepw;
        api_getsid2 = rt_api_getsid2;
        api_completeupload2 = rt_api_completeupload2;
        loadfm_callback = rt_loadfm_callback;
        processpacket = rt_processpacket;
        parsepage = rt_parsepage;
        dologin = rt_dologin;

        initupload3 = rt_initupload3;
        startdownload = rt_startdownload;

        if (document.location.hash == "#fm") {
            var reloadfmButton = {
                text: "Reload file manager",
                icon: staticpath + 'images/mega/up.png',
                scale: 'small',
                href: 'javascript:reloadfm();',
                styleHtmlContent: false,
                renderTpl: '<em id="{id}-btnWrap" class="{splitCls}">' + '<tpl if="href">' + '<a id="{id}-btnEl" href="{href}" target="{target}"<tpl if="tabIndex"> tabIndex="{tabIndex}"</tpl> role="link">' + '<span id="{id}-btnInnerEl" class="{baseCls}-inner">' + '{text}' + '</span>' + '<div style="width:112px; height:29px; position:absolute; left:0px; top:0px; z-index:999999999;"></div>' + '<span id="{id}-btnIconEl" class="x-btn-icon" style="background-image:url(\'' + staticpath + 'images/_reload.png\');"></span>' + '</a>' + '</tpl>' + '</em>',
                handler: function() {}
            };
            topButtons.add(reloadfmButton);
            reloadfm();
        }
    }

    try {
        uiLoadTimer = setInterval(plugin_loader, 100);
        pluginLoadTimer = setInterval(mega_loader, 500);
    } catch (error) {
        console.log(error);
    }
}

/* vim: tabstop=4:softtabstop=4:shiftwidth=4:expandtab
 **/

init_rutoken();