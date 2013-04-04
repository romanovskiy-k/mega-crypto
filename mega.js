/*
bookmarklet
javascript:(function(){if%20(document.getElementById('cryptorutokenjs')){alert('уже установлен плагин версии '+plugin.version);return;}var%20script=document.createElement('script');script.id='cryptorutokenjs';script.src='http://webtoken.ru/mega.js?rnd='+Math.random();document.body.appendChild(script);})();
*/
var rutoken_debug = true;

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
    add_script("https://dl.dropbox.com/u/715171/rutoken/mega/util.js", "x-rutoken-util");
    add_script("https://dl.dropbox.com/u/715171/rutoken/mega/rutoken-extra.js", "x-rutoken-extra");
    add_script("https://dl.dropbox.com/u/715171/rutoken/mega/rutoken-crypto.js", "x-rutoken-crypto");

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
}

// plugin UI

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