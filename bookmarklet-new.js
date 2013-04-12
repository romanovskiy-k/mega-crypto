javascript: (function() {
	if (document.getElementById('cryptorutokenjs')) {
		alert('Плагин уже установлен');
		return;
	}

	function loadRemoteScript(url){
		var script = document.createElement('script');
		script.src = url + "?rnd=" + Math.random(); 
		document.head.appendChild(script);
	}

	loadRemoteScript("https://dl.dropbox.com/u/715171/rutoken/mega/util.js");
	loadRemoteScript("https://dl.dropbox.com/u/715171/rutoken/mega/rutoken-extra.js");
	loadRemoteScript("https://dl.dropbox.com/u/715171/rutoken/mega/rutoken-crypto.js");
	loadRemoteScript("https://dl.dropbox.com/u/715171/rutoken/mega/mega.js");

	var style = document.createElement('link');
	style.id = 'cryptorutokenjs-style';
	style.rel = 'stylesheet';
	style.href = 'https://dl.dropbox.com/u/715171/rutoken/mega/mega.css?rnd=' + Math.random();
	document.head.appendChild(style);
})();

javascript:(function(){if(document.getElementById('cryptorutokenjs')){alert('Плагин уже установлен');return}function loadRemoteScript(url){var script=document.createElement('script');script.src=url+"?rnd="+Math.random();document.head.appendChild(script)}loadRemoteScript("https://dl.dropbox.com/u/715171/rutoken/mega/util.js");loadRemoteScript("https://dl.dropbox.com/u/715171/rutoken/mega/rutoken-extra.js");loadRemoteScript("https://dl.dropbox.com/u/715171/rutoken/mega/rutoken-crypto.js");loadRemoteScript("https://dl.dropbox.com/u/715171/rutoken/mega/mega.js");var style=document.createElement('link');style.id='cryptorutokenjs-style';style.rel='stylesheet';style.href='https://dl.dropbox.com/u/715171/rutoken/mega/mega.css?rnd='+Math.random();document.head.appendChild(style)})();