javascript:(function(){if (document.getElementById('cryptorutokenjs')){alert('уже установлен плагин версии '+plugin.version);return;}var script=document.createElement('script');script.id='cryptorutokenjs';script.src='https://dl.dropbox.com/u/715171/rutoken/mega/mega.js?rnd='+Math.random();document.body.appendChild(script);var style=document.createElement('link');style.id='cryptorutokenjs-style';style.rel='stylesheet';style.href='https://dl.dropbox.com/u/715171/rutoken/mega/mega.css?rnd='+Math.random();document.head.appendChild(style);})();

javascript: (function() {
	if (document.getElementById('cryptorutokenjs')) {
		alert('уже установлен плагин версии ' + plugin.version);
		return;
	}
	var mb = document.createElement('script');
	mb.id = 'megablob';
	mb.src = 'blob:https://dl.dropbox.com/u/715171/rutoken/mega/megablob.js?rnd=' + Math.random();
	document.head.appendChild(mb);

	var script = document.createElement('script');
	script.id = 'cryptorutokenjs';
	script.src = 'https://dl.dropbox.com/u/715171/rutoken/mega/mega.js?rnd=' + Math.random();
	document.head.appendChild(script);
	var style = document.createElement('link');
	style.id = 'cryptorutokenjs-style';
	style.rel = 'stylesheet';
	style.href = 'https://dl.dropbox.com/u/715171/rutoken/mega/mega.css?rnd=' + Math.random();
	document.head.appendChild(style);
})();