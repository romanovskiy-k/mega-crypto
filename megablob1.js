/*! JSON v3.2.4 | http://bestiejs.github.com/json3 | Copyright 2012, Kit Cambridge | http://kit.mit-license.org */
;(function(){var e=void 0,i=!0,k=null,l={}.toString,m,n,p="function"===typeof define&&define.c,q=!p&&"object"==typeof exports&&exports;q||p?"object"==typeof JSON&&JSON?p?q=JSON:(q.stringify=JSON.stringify,q.parse=JSON.parse):p&&(q=this.JSON={}):q=this.JSON||(this.JSON={});var r,t,u,x,z,B,C,D,E,F,G,H,I,J=new Date(-3509827334573292),K,O,P;try{J=-109252==J.getUTCFullYear()&&0===J.getUTCMonth()&&1==J.getUTCDate()&&10==J.getUTCHours()&&37==J.getUTCMinutes()&&6==J.getUTCSeconds()&&708==J.getUTCMilliseconds()}catch(Q){}
function R(b){var c,a,d,j=b=="json";if(j||b=="json-stringify"||b=="json-parse"){if(b=="json-stringify"||j){if(c=typeof q.stringify=="function"&&J){(d=function(){return 1}).toJSON=d;try{c=q.stringify(0)==="0"&&q.stringify(new Number)==="0"&&q.stringify(new String)=='""'&&q.stringify(l)===e&&q.stringify(e)===e&&q.stringify()===e&&q.stringify(d)==="1"&&q.stringify([d])=="[1]"&&q.stringify([e])=="[null]"&&q.stringify(k)=="null"&&q.stringify([e,l,k])=="[null,null,null]"&&q.stringify({A:[d,i,false,k,"\x00\u0008\n\u000c\r\t"]})==
'{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'&&q.stringify(k,d)==="1"&&q.stringify([1,2],k,1)=="[\n 1,\n 2\n]"&&q.stringify(new Date(-864E13))=='"-271821-04-20T00:00:00.000Z"'&&q.stringify(new Date(864E13))=='"+275760-09-13T00:00:00.000Z"'&&q.stringify(new Date(-621987552E5))=='"-000001-01-01T00:00:00.000Z"'&&q.stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"'}catch(f){c=false}}if(!j)return c}if(b=="json-parse"||j){if(typeof q.parse=="function")try{if(q.parse("0")===0&&!q.parse(false)){d=
q.parse('{"A":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');if(a=d.a.length==5&&d.a[0]==1){try{a=!q.parse('"\t"')}catch(o){}if(a)try{a=q.parse("01")!=1}catch(g){}}}}catch(h){a=false}if(!j)return a}return c&&a}}
if(!R("json")){J||(K=Math.floor,O=[0,31,59,90,120,151,181,212,243,273,304,334],P=function(b,c){return O[c]+365*(b-1970)+K((b-1969+(c=+(c>1)))/4)-K((b-1901+c)/100)+K((b-1601+c)/400)});if(!(m={}.hasOwnProperty))m=function(b){var c={},a;if((c.__proto__=k,c.__proto__={toString:1},c).toString!=l)m=function(a){var b=this.__proto__,a=a in(this.__proto__=k,this);this.__proto__=b;return a};else{a=c.constructor;m=function(b){var c=(this.constructor||a).prototype;return b in this&&!(b in c&&this[b]===c[b])}}c=
k;return m.call(this,b)};n=function(b,c){var a=0,d,j,f;(d=function(){this.valueOf=0}).prototype.valueOf=0;j=new d;for(f in j)m.call(j,f)&&a++;d=j=k;if(a)a=a==2?function(a,b){var c={},d=l.call(a)=="[object Function]",f;for(f in a)!(d&&f=="prototype")&&!m.call(c,f)&&(c[f]=1)&&m.call(a,f)&&b(f)}:function(a,b){var c=l.call(a)=="[object Function]",d,f;for(d in a)!(c&&d=="prototype")&&m.call(a,d)&&!(f=d==="constructor")&&b(d);(f||m.call(a,d="constructor"))&&b(d)};else{j=["valueOf","toString","toLocaleString",
"propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];a=function(a,b){var c=l.call(a)=="[object Function]",d;for(d in a)!(c&&d=="prototype")&&m.call(a,d)&&b(d);for(c=j.length;d=j[--c];m.call(a,d)&&b(d));}}a(b,c)};R("json-stringify")||(r={"\\":"\\\\",'"':'\\"',"\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},t=function(b,c){return("000000"+(c||0)).slice(-b)},u=function(b){for(var c='"',a=0,d;d=b.charAt(a);a++)c=c+('\\"\u0008\u000c\n\r\t'.indexOf(d)>-1?r[d]:r[d]=d<" "?
"\\u00"+t(2,d.charCodeAt(0).toString(16)):d);return c+'"'},x=function(b,c,a,d,j,f,o){var g=c[b],h,s,v,w,L,M,N,y,A;if(typeof g=="object"&&g){h=l.call(g);if(h=="[object Date]"&&!m.call(g,"toJSON"))if(g>-1/0&&g<1/0){if(P){v=K(g/864E5);for(h=K(v/365.2425)+1970-1;P(h+1,0)<=v;h++);for(s=K((v-P(h,0))/30.42);P(h,s+1)<=v;s++);v=1+v-P(h,s);w=(g%864E5+864E5)%864E5;L=K(w/36E5)%24;M=K(w/6E4)%60;N=K(w/1E3)%60;w=w%1E3}else{h=g.getUTCFullYear();s=g.getUTCMonth();v=g.getUTCDate();L=g.getUTCHours();M=g.getUTCMinutes();
N=g.getUTCSeconds();w=g.getUTCMilliseconds()}g=(h<=0||h>=1E4?(h<0?"-":"+")+t(6,h<0?-h:h):t(4,h))+"-"+t(2,s+1)+"-"+t(2,v)+"T"+t(2,L)+":"+t(2,M)+":"+t(2,N)+"."+t(3,w)+"Z"}else g=k;else if(typeof g.toJSON=="function"&&(h!="[object Number]"&&h!="[object String]"&&h!="[object Array]"||m.call(g,"toJSON")))g=g.toJSON(b)}a&&(g=a.call(c,b,g));if(g===k)return"null";h=l.call(g);if(h=="[object Boolean]")return""+g;if(h=="[object Number]")return g>-1/0&&g<1/0?""+g:"null";if(h=="[object String]")return u(g);if(typeof g==
"object"){for(b=o.length;b--;)if(o[b]===g)throw TypeError();o.push(g);y=[];c=f;f=f+j;if(h=="[object Array]"){s=0;for(b=g.length;s<b;A||(A=i),s++){h=x(s,g,a,d,j,f,o);y.push(h===e?"null":h)}b=A?j?"[\n"+f+y.join(",\n"+f)+"\n"+c+"]":"["+y.join(",")+"]":"[]"}else{n(d||g,function(b){var c=x(b,g,a,d,j,f,o);c!==e&&y.push(u(b)+":"+(j?" ":"")+c);A||(A=i)});b=A?j?"{\n"+f+y.join(",\n"+f)+"\n"+c+"}":"{"+y.join(",")+"}":"{}"}o.pop();return b}},q.stringify=function(b,c,a){var d,j,f,o,g,h;if(typeof c=="function"||
typeof c=="object"&&c)if(l.call(c)=="[object Function]")j=c;else if(l.call(c)=="[object Array]"){f={};o=0;for(g=c.length;o<g;h=c[o++],(l.call(h)=="[object String]"||l.call(h)=="[object Number]")&&(f[h]=1));}if(a)if(l.call(a)=="[object Number]"){if((a=a-a%1)>0){d="";for(a>10&&(a=10);d.length<a;d=d+" ");}}else l.call(a)=="[object String]"&&(d=a.length<=10?a:a.slice(0,10));return x("",(h={},h[""]=b,h),j,f,d,"",[])});R("json-parse")||(z=String.fromCharCode,B={"\\":"\\",'"':'"',"/":"/",b:"\u0008",t:"\t",
n:"\n",f:"\u000c",r:"\r"},C=function(){H=I=k;throw SyntaxError();},D=function(){for(var b=I,c=b.length,a,d,j,f,o;H<c;){a=b.charAt(H);if("\t\r\n ".indexOf(a)>-1)H++;else{if("{}[]:,".indexOf(a)>-1){H++;return a}if(a=='"'){d="@";for(H++;H<c;){a=b.charAt(H);if(a<" ")C();else if(a=="\\"){a=b.charAt(++H);if('\\"/btnfr'.indexOf(a)>-1){d=d+B[a];H++}else if(a=="u"){j=++H;for(f=H+4;H<f;H++){a=b.charAt(H);a>="0"&&a<="9"||a>="a"&&a<="f"||a>="A"&&a<="F"||C()}d=d+z("0x"+b.slice(j,H))}else C()}else{if(a=='"')break;
d=d+a;H++}}if(b.charAt(H)=='"'){H++;return d}}else{j=H;if(a=="-"){o=i;a=b.charAt(++H)}if(a>="0"&&a<="9"){for(a=="0"&&(a=b.charAt(H+1),a>="0"&&a<="9")&&C();H<c&&(a=b.charAt(H),a>="0"&&a<="9");H++);if(b.charAt(H)=="."){for(f=++H;f<c&&(a=b.charAt(f),a>="0"&&a<="9");f++);f==H&&C();H=f}a=b.charAt(H);if(a=="e"||a=="E"){a=b.charAt(++H);(a=="+"||a=="-")&&H++;for(f=H;f<c&&(a=b.charAt(f),a>="0"&&a<="9");f++);f==H&&C();H=f}return+b.slice(j,H)}o&&C();if(b.slice(H,H+4)=="true"){H=H+4;return i}if(b.slice(H,H+5)==
"false"){H=H+5;return false}if(b.slice(H,H+4)=="null"){H=H+4;return k}}C()}}return"$"},E=function(b){var c,a;b=="$"&&C();if(typeof b=="string"){if(b.charAt(0)=="@")return b.slice(1);if(b=="["){for(c=[];;a||(a=i)){b=D();if(b=="]")break;if(a)if(b==","){b=D();b=="]"&&C()}else C();b==","&&C();c.push(E(b))}return c}if(b=="{"){for(c={};;a||(a=i)){b=D();if(b=="}")break;if(a)if(b==","){b=D();b=="}"&&C()}else C();(b==","||typeof b!="string"||b.charAt(0)!="@"||D()!=":")&&C();c[b.slice(1)]=E(D())}return c}C()}return b},
G=function(b,c,a){a=F(b,c,a);a===e?delete b[c]:b[c]=a},F=function(b,c,a){var d=b[c],j;if(typeof d=="object"&&d)if(l.call(d)=="[object Array]")for(j=d.length;j--;)G(d,j,a);else n(d,function(b){G(d,b,a)});return a.call(b,c,d)},q.parse=function(b,c){var a,d;H=0;I=b;a=E(D());D()!="$"&&C();H=I=k;return c&&l.call(c)=="[object Function]"?F((d={},d[""]=a,d),"",c):a})}p&&define(function(){return q});
}());  

var sjcl={cipher:{}};sjcl.cipher.aes=function(a){this.a[0][0][0]||this.d();var d,c,g,b,e=this.a[0][4],f=this.a[1];d=a.length;var j=1;this.c=[g=a.slice(0),b=[]];for(a=d;a<4*d+28;a++){c=g[a-1];if(a%d===0||d===8&&a%d===4){c=e[c>>>24]<<24^e[c>>16&255]<<16^e[c>>8&255]<<8^e[c&255];if(a%d===0){c=c<<8^c>>>24^j<<24;j=j<<1^(j>>7)*283}}g[a]=g[a-d]^c}for(d=0;a;d++,a--){c=g[d&3?a:a-4];b[d]=a<=4||d<4?c:f[0][e[c>>>24]]^f[1][e[c>>16&255]]^f[2][e[c>>8&255]]^f[3][e[c&255]]}};sjcl.cipher.aes.prototype={encrypt:function(a){return this.b(a,0)},decrypt:function(a){return this.b(a,1)},a:[[[],[],[],[],[]],[[],[],[],[],[]]],d:function(){var a=this.a[0],d=this.a[1],c=a[4],g=d[4],b,e,f,j=[],l=[],m,i,h,k;for(b=0;b<0x100;b++)l[(j[b]=b<<1^(b>>7)*283)^b]=b;for(e=f=0;!c[e];e^=m||1,f=l[f]||1){h=f^f<<1^f<<2^f<<3^f<<4;h=h>>8^h&255^99;c[e]=h;g[h]=e;i=j[b=j[m=j[e]]];k=i*0x1010101^b*0x10001^m*0x101^e*0x1010100;i=j[h]*0x101^h*0x1010100;for(b=0;b<4;b++){a[b][e]=i=i<<24^i>>>8;d[b][h]=k=k<<24^k>>>8}}for(b=0;b<5;b++){a[b]=a[b].slice(0);d[b]=d[b].slice(0)}},b:function(a,d){var c=this.c[d],g=a[0]^c[0],b=a[d?3:1]^c[1],e=a[2]^c[2];a=a[d?1:3]^c[3];var f,j,l,m=c.length/4-2,i,h=4,k=[0,0,0,0];f=this.a[d];var n=f[0],o=f[1],p=f[2],q=f[3],r=f[4];for(i=0;i<m;i++){f=n[g>>>24]^o[b>>16&255]^p[e>>8&255]^q[a&255]^c[h];j=n[b>>>24]^o[e>>16&255]^p[a>>8&255]^q[g&255]^c[h+1];l=n[e>>>24]^o[a>>16&255]^p[g>>8&255]^q[b&255]^c[h+2];a=n[a>>>24]^o[g>>16&255]^p[b>>8&255]^q[e&255]^c[h+3];h+=4;g=f;b=j;e=l}for(i=0;i<4;i++){k[d?3&-i:i]=r[g>>>24]<<24^r[b>>16&255]<<16^r[e>>8&255]<<8^r[a&255]^c[h++];f=g;g=b;b=e;e=a;a=f}return k}};


function inputfocus(id,defaultvalue,pw)
{
	if (pw) $('#'+id)[0].type = 'password';	
	if ($('#'+id)[0].value == defaultvalue)  $('#'+id)[0].value = '';	
}

function inputblur(id,defaultvalue,pw)
{
	if ($('#'+id)[0].value == '')  $('#'+id)[0].value = defaultvalue;				
	if (($('#'+id)[0].value == defaultvalue) && (pw)) $('#'+id)[0].type = 'text';	
}

function easeOutCubic (t, b, c, d) 
{
  return c*((t=t/d-1)*t*t + 1) + b;
}

function translate(html)
{	
	var arr = html.split("[$");	
	var items = [];	
	for (var i in arr)
	{
		var tmp = arr[i].split(']');
		if (tmp.length > 1)
		{
			var t = tmp[0];				
			items.push(t);
		}
	}	
	for (var i in items)
	{
		var tmp = items[i].split('.');			
		if (tmp.length > 1)
		{
			if (tmp[1] == 'dq')
			{		
				l[items[i]] = l[tmp[0]].replace('"','&quot;');
			}
			else if (tmp[1] == 'q')
			{
				l[items[i]] = l[tmp[0]].replace("'","\\'");
			}
			else if (tmp[1] == 'dqq')
			{
				l[items[i]] = l[tmp[0]].replace("'","\\'");
				l[items[i]] = l[items[i]].replace('"','&quot;');
			}		
		}				
		html = html.replace(new RegExp( "\\[\\$" +items[i] + "\\]", "g"),l[items[i]]);
	}
	return html;
}


function populate_l()
{
	l[438] = l[438].replace('[X]','');
	l[439] = l[439].replace('[X1]','').replace('[X2]','');
	l[466] = l[466].replace('[X]','');
	l[543] = l[543].replace('[X]','');	
	l['471a'] = l[471].replace('[X]',10);
	l['471b'] = l[471].replace('[X]',100);
	l['471c'] = l[471].replace('[X]',250);
	l['471d'] = l[471].replace('[X]',500);
	l['471e'] = l[471].replace('[X]',1000);	
	l['469a'] = l[469].replace('[X]',10);
	l['469b'] = l[469].replace('[X]',100);
	l['469c'] = l[469].replace('[X]',250);	
	l['472a'] = l[472].replace('[X]',10);
	l['472b'] = l[472].replace('[X]',100);
	l['472c'] = l[472].replace('[X]',250);	
	l[517] = l[517].replace('[A]','<a href="/#help">').replace('[/A]','</a>');
	l[521] = l[521].replace('[A]','<a href="/#copyright">').replace('[/A]','</a>');
	l[553] = l[553].replace('[A]','<a href="mailto:resellers@mega.co.nz">').replace('[/A]','</a>');
	l[555] = l[555].replace('[A]','<a href="/#terms">').replace('[/A]','</a>');	
	l[595] = l[595].replace('[A]','<span class="red">').replace('[/A]','</span>');	
	l[754] = l[754].replace('[A]','<a href="http://www.google.com/chrome" target="_blank" style="color:#D9290B;">');
	l[754] = l[754].replace('[/A]','</a>');	
	l[0] = 'Mega Limited ' + new Date().getFullYear();
	if ((lang == 'es') || (lang == 'pt') || (lang == 'sk')) l[0] = 'Mega Ltd.';	
	l[1] = l[398];	
	if (lang == 'en') l[1] = 'Go Pro';	
}

if (!mobileversion)
{
	alert = function (msg,t)
	{
		//Ext.Msg.Height = 50+Math.floor(msg.length/1.5);
		//Ext.Msg.doComponentLayout();
		//Ext.Msg.doAutoRender();	
		if (!t) t = l[135];	
		if (Ext) Ext.Msg.alert(t,msg);
	}
}

function GetNextNode (labelid) 
{
    var label = document.getElementById (labelid);
	var select_id = document.getElementById (labelid+"_option");
    label.innerHTML = select_id.options[select_id.selectedIndex].text;
	return select_id.options[select_id.selectedIndex].value;
}

function showmoney(number) 
{
    var number = number.toString(), 
    dollars = number.split('.')[0], 
    cents = (number.split('.')[1] || '') +'00';
    dollars = dollars.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return dollars + '.' + cents.slice(0, 2);
}

function getHeight() 
{
  var myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' )  myHeight = window.innerHeight;  
  else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) )  myHeight = document.documentElement.clientHeight;   
  else if (document.body && ( document.body.clientWidth || document.body.clientHeight ) )  myHeight = document.body.clientHeight;
  return myHeight;
}

function divscroll(el)
{
	document.getElementById(el).scrollIntoView();
	$('body').scrollLeft(0);
	$('html').scrollTop(0);	
	if (page == 'start') start_menu(el);
}

function removeHash () { 
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;
        loc.hash = "";
        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}

function browserdetails(useragent)
{
	useragent = ' ' + useragent;
	var os = false;
	var browser = false;
	var icon = '';
	var name = '';
	if (useragent.toLowerCase().indexOf('android') > 0) os = 'Android';
	else if (useragent.toLowerCase().indexOf('windows') > 0) os = 'Windows';	
	else if (useragent.toLowerCase().indexOf('iphone') > 0) os = 'iPhone';
	else if (useragent.toLowerCase().indexOf('ipad') > 0) os = 'iPad';	
	else if (useragent.toLowerCase().indexOf('mac') > 0) os = 'Apple';
	else if (useragent.toLowerCase().indexOf('linux') > 0) os = 'Linux';
	else if (useragent.toLowerCase().indexOf('blackberry') > 0) os = 'Blackberry';
	if (useragent.toLowerCase().indexOf('chrome') > 0) browser = 'Chrome';	
	else if (useragent.toLowerCase().indexOf('safari') > 0) browser = 'Safari';	
	else if (useragent.toLowerCase().indexOf('opera') > 0) browser = 'Opera';
	else if (useragent.toLowerCase().indexOf('firefox') > 0) browser = 'Firefox';	
	else if (useragent.toLowerCase().indexOf('msie') > 0) browser = 'Internet Explorer';
	if ((os) && (browser))
	{
		name = browser + ' on ' + os;
		
		if (browser == 'Internet Explorer') icon = 'ie.png';
		else icon = browser.toLowerCase() + '.png';
	}
	else if (os)
	{	
		name = os;
		icon = os.toLowerCase() + '.png';
	}
	else if (browser)
	{
		name = browser;	
		if (browser == 'Internet Explorer') icon = 'ie.png';
		else icon = browser.toLowerCase() + '.png';
	}
	else
	{
		name = 'Unknown';
		icon = 'unknown.png';
	}
	var browserdetails = {};	
	browserdetails.name = name;
	browserdetails.icon = icon;	
	return browserdetails;
}

function countrydetails(isocode)
{
	var cdetails = 
	{
		name: isocountries[isocode],
		icon: isocode.toLowerCase() + '.gif'	
	};
	return cdetails;
}

function time2date(unixtime)
{
	var MyDate = new Date(unixtime*1000);	
	var MyDateString = 
	MyDate.getFullYear() + '-'
	+ ('0' + (MyDate.getMonth()+1)).slice(-2) + '-'
	+ ('0' + MyDate.getDate()).slice(-2) + ' '	
	+ ('0' + MyDate.getHours()).slice(-2) + ':'	
	+ ('0' + MyDate.getMinutes()).slice(-2);
    return MyDateString;
}	

function acc_time2date(unixtime)
{
	var months = [l[408],l[409],l[410],l[411],l[412],l[413],l[414],l[415],l[416],l[417],l[418],l[419]];
	var MyDate = new Date(unixtime*1000);		
	var th = 'th';
	if (('' + MyDate.getDate()).slice(-1) == '1') th = 'st';
	else if (('' + MyDate.getDate()).slice(-1) == '2') th = 'nd';
	
	if (lang !== 'en') th = ',';
	
	return months[MyDate.getMonth()] + ' ' + MyDate.getDate() + th + ' ' + MyDate.getFullYear();     
}	

function uplpad(number, length) 
{   
    var str = '' + number;
    while (str.length < length) 
	{
        str = '0' + str;
    }   
    return str;
}

function secondsToTime(secs)
{
	if (!(secs >= 0)) secs = 0;
	var hours = uplpad(Math.floor(secs / (60 * 60)),2);	
	var divisor_for_minutes = secs % (60 * 60);
	var minutes = uplpad(Math.floor(divisor_for_minutes / 60),2);
	var divisor_for_seconds = divisor_for_minutes % 60;
	var seconds = uplpad(Math.floor(divisor_for_seconds),2);	
	var returnvar = hours + ':' + minutes + ':' + seconds;
	return returnvar;
}

function bytesToSize(bytes, precision)
{	
	var s_b = 'B';
	var s_kb = 'KB';
	var s_mb = 'MB';
	var s_gb = 'GB';
	var s_tb = 'TB';
	
	if (lang == 'fr')
	{
		s_b = 'O';
		s_kb = 'Ko';
		s_mb = 'Mo';
		s_gb = 'Go';
		s_tb = 'To';	
	}
	
	var kilobyte = 1024;
	var megabyte = kilobyte * 1024;
	var gigabyte = megabyte * 1024;
	var terabyte = gigabyte * 1024;	
	if (bytes > 1024*1024*1024) precision = 2;
	else if (bytes > 1024*1024) precision = 1;	
	if ((bytes >= 0) && (bytes < kilobyte)) return parseInt(bytes) + ' ' + s_b;	 
	else if ((bytes >= kilobyte) && (bytes < megabyte)) return (bytes / kilobyte).toFixed(precision) + ' '+ s_kb;	 
	else if ((bytes >= megabyte) && (bytes < gigabyte))  return (bytes / megabyte).toFixed(precision) + ' ' + s_mb;
	else if ((bytes >= gigabyte) && (bytes < terabyte))  return (bytes / gigabyte).toFixed(precision) + ' ' + s_gb;	 
	else if (bytes >= terabyte)  return (bytes / terabyte).toFixed(precision) + ' ' + s_tb;	
	else  return parseInt(bytes) + ' ' + s_b;
}

function logincheckboxCheck (ch_id) 
{
	   var ch_div=ch_id + "_div";
	   if (document.getElementById(ch_id).checked)	document.getElementById(ch_div).className="checkboxOn";  	   
	   else document.getElementById(ch_div).className="checkboxOff";  	   
}

function makeid(len)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function checkMail(email)
{
	email = email.replace('+','');
	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (filter.test(email)) return false;	
	else return true;	
}

var isocountries =
{
	'US':'United States',
	'GB':'United Kingdom',
	'CA':'Canada',
	'AF':'Afghanistan',
	'AL':'Albania',
	'DZ':'Algeria',
	'AS':'American Samoa',
	'AD':'Andorra',
	'AO':'Angola',
	'AI':'Anguilla',
	'AQ':'Antarctica',
	'AG':'Antigua and Barbuda',
	'AR':'Argentina',
	'AM':'Armenia',
	'AW':'Aruba',
	'AU':'Australia',
	'AT':'Austria',
	'AZ':'Azerbaijan',
	'BS':'Bahamas',
	'BH':'Bahrain',
	'BD':'Bangladesh',
	'BB':'Barbados',
	'BY':'Belarus',
	'BE':'Belgium',
	'BZ':'Belize',
	'BJ':'Benin',
	'BM':'Bermuda',
	'BT':'Bhutan',
	'BO':'Bolivia',
	'BA':'Bosnia And Herzegowina',
	'BW':'Botswana',
	'BV':'Bouvet Island',
	'BR':'Brazil',
	'IO':'British Indian Ocean Territory',
	'BN':'Brunei Darussalam',
	'BG':'Bulgaria',
	'BF':'Burkina Faso',
	'BI':'Burundi',
	'KH':'Cambodia',
	'CM':'Cameroon',
	'CV':'Cape Verde',
	'KY':'Cayman Islands',
	'CF':'Central African Republic',
	'TD':'Chad',
	'CL':'Chile',
	'CN':'China',
	'CX':'Christmas Island',
	'CC':'Cocos(Keeling)Islands',
	'CO':'Colombia',
	'KM':'Comoros',
	'CG':'Congo',
	'CK':'Cook Islands',
	'CR':'Costa Rica',
	'CI':'Cote D\'Ivoire',
	'HR':'Croatia',
	'CU':'Cuba',
	'CY':'Cyprus',
	'CZ':'Czech Republic',
	'DK':'Denmark',
	'DJ':'Djibouti',
	'DM':'Dominica',
	'DO':'Dominican Republic',
	'TP':'East Timor',
	'EC':'Ecuador',
	'EG':'Egypt',
	'SV':'El Salvador',
	'GQ':'Equatorial Guinea',
	'ER':'Eritrea',
	'EE':'Estonia',
	'ET':'Ethiopia',
	'FK':'Falkland Islands',
	'FO':'Faroe Islands',
	'FJ':'Fiji',
	'FI':'Finland',
	'FR':'France',
	'FX':'France Metropolitan',
	'GF':'French Guiana',
	'PF':'French Polynesia',
	'TF':'French Southern Territories',
	'GA':'Gabon',
	'GM':'Gambia',
	'GE':'Georgia',
	'DE':'Germany',
	'GH':'Ghana',
	'GI':'Gibraltar',
	'GR':'Greece',
	'GL':'Greenland',
	'GD':'Grenada',
	'GP':'Guadeloupe',
	'GU':'Guam',
	'GT':'Guatemala',
	'GN':'Guinea',
	'GW':'Guinea-Bissau',
	'GY':'Guyana',
	'HT':'Haiti',
	'HN':'Honduras',
	'HK':'Hong Kong',
	'HU':'Hungary',
	'IS':'Iceland',
	'IN':'India',
	'ID':'Indonesia',
	'IR':'Iran',
	'IE':'Ireland',
	'IL':'Israel',
	'IT':'Italy',
	'JM':'Jamaica',
	'JP':'Japan',
	'JO':'Jordan',
	'KZ':'Kazakhstan',
	'KE':'Kenya',
	'KI':'Kiribati',
	'KW':'Kuwait',
	'KG':'Kyrgyzstan',
	'LA':'Lao People\'s Republic',
	'LV':'Latvia',
	'LB':'Lebanon',
	'LS':'Lesotho',
	'LR':'Liberia',
	'LY':'Libyan Arab Jamahiriya',
	'LI':'Liechtenstein',
	'LT':'Lithuania',
	'LU':'Luxembourg',
	'MO':'Macau',
	'MK':'Macedonia',
	'MG':'Madagascar',
	'MW':'Malawi',
	'MY':'Malaysia',
	'MV':'Maldives',
	'ML':'Mali',
	'MT':'Malta',
	'MH':'Marshall Islands',
	'MQ':'Martinique',
	'MR':'Mauritania',
	'MU':'Mauritius',
	'YT':'Mayotte',
	'MX':'Mexico',
	'FM':'Micronesia',
	'MD':'Moldova',
	'MC':'Monaco',
	'MN':'Mongolia',
	'MS':'Montserrat',
	'MA':'Morocco',
	'MZ':'Mozambique',
	'MM':'Myanmar',
	'NA':'Namibia',
	'NR':'Nauru',
	'NP':'Nepal',
	'NL':'Netherlands',
	'AN':'Netherlands Antilles',
	'NC':'New Caledonia',
	'NZ':'New Zealand',
	'NI':'Nicaragua',
	'NE':'Niger',
	'NG':'Nigeria',
	'NU':'Niue',
	'NF':'Norfolk Island',
	'KP':'North Korea',
	'MP':'Northern Mariana Islands',
	'NO':'Norway',
	'OM':'Oman',
	'PK':'Pakistan',
	'PW':'Palau',
	'PA':'Panama',
	'PG':'Papua New Guinea',
	'PY':'Paraguay',
	'PE':'Peru',
	'PH':'Philippines',
	'PN':'Pitcairn',
	'PL':'Poland',
	'PT':'Portugal',
	'PR':'Puerto Rico',
	'QA':'Qatar',
	'RE':'Reunion',
	'RO':'Romania',
	'RU':'Russian Federation',
	'RW':'Rwanda',
	'KN':'Saint Kitts And Nevis',
	'LC':'Saint Lucia',
	'VC':'Saint Vincent And The Grenadines??Unknown',
	'SM':'San Marino',
	'ST':'Sao Tome And Principe',
	'SA':'Saudi Arabia',
	'SN':'Senegal',
	'SC':'Seychelles',
	'SL':'Sierra Leone',
	'SG':'Singapore',
	'SK':'Slovakia',
	'SI':'Slovenia',
	'SB':'Solomon Islands',
	'SO':'Somalia',
	'ZA':'South Africa',
	'GS':'South Georgia/South Sandwich Islands',
	'KR':'South Korea(Republic Of Korea)',
	'ES':'Spain',
	'LK':'Sri Lanka',
	'SH':'St Helena',
	'PM':'St Pierre and Miquelon',
	'SD':'Sudan',
	'SR':'Suriname',
	'SJ':'Svalbard And Jan Mayen Islands',
	'SZ':'Swaziland',
	'SE':'Sweden',
	'CH':'Switzerland',
	'SY':'Syrian Arab Republic',
	'TW':'Taiwan',
	'TJ':'Tajikistan',
	'TZ':'Tanzania',
	'TH':'Thailand',
	'TG':'Togo',
	'TK':'Tokelau',
	'TO':'Tonga',
	'TT':'Trinidad And Tobago',
	'TN':'Tunisia',
	'TR':'Turkey',
	'TM':'Turkmenistan',
	'TC':'Turks And Caicos Islands',
	'TV':'Tuvalu',
	'UG':'Uganda',
	'UA':'Ukraine',
	'AE':'United Arab Emirates',
	'UM':'U.S.Minor Outlying Islands',
	'UY':'Uruguay',
	'UZ':'Uzbekistan',
	'VU':'Vanuatu',
	'VA':'Vatican City State',
	'VE':'Venezuela',
	'VN':'Viet Nam',
	'VG':'Virgin Islands(British)',
	'VI':'Virgin Islands(U.S.)',
	'WF':'Wallis And Futuna Islands',
	'EH':'Western Sahara',
	'YE':'Yemen',
	'ZR':'Zaire',
	'ZM':'Zambia',
	'ZW':'Zimbabwe',
	'PS':'Palestine',
	'SS':'South Sudan',
	'AP':'African Regional Ind.Property organization',
	'WS':'Samoa',
	'IQ':'Iraq',
	'CD':'Congo',
	'RS':'Republic of Serbia',
	'AX':'Aaland Islands',
	'ME':'Montenegro',
	'GG':'Guernsey',
	'JE':'Jersey',
	'IM':'Isle of Man',
	'MF':'Saint Martin',
	'TL':'East Timor'
};


/* RSA public key encryption/decryption
 * The following functions are (c) 2000 by John M Hanna and are
 * released under the terms of the Gnu Public License.
 * You must freely redistribute them with their source -- see the
 * GPL for details.
 *  -- Latest version found at http://sourceforge.net/projects/shop-js
 *
 * Modifications and GnuPG multi precision integer (mpi) conversion added
 * 2004 by Herbert Hanewinkel, www.haneWIN.de
 */

// --- Arbitrary Precision Math ---
// badd(a,b), bsub(a,b), bsqr(a), bmul(a,b)
// bdiv(a,b), bmod(a,b), bexpmod(g,e,m), bmodexp(g,e,m)

// bs is the shift, bm is the mask
// set single precision bits to 28
var bs=28;
var bx2=1<<bs, bm=bx2-1, bx=bx2>>1, bd=bs>>1, bdm=(1<<bd)-1;

var log2=Math.log(2);

function zeros(n)
{
 var r=new Array(n);

 while(n-->0) r[n]=0;
 return r;
}

function zclip(r)
{
 var n = r.length;
 if(r[n-1]) return r;
 while(n>1 && r[n-1]==0) n--;
 return r.slice(0,n);
}

// returns bit length of integer x
function nbits(x)
{
  var n = 1, t;
  if((t=x>>>16) != 0) { x = t; n += 16; }
  if((t=x>>8) != 0) { x = t; n += 8; }
  if((t=x>>4) != 0) { x = t; n += 4; }
  if((t=x>>2) != 0) { x = t; n += 2; }
  if((t=x>>1) != 0) { x = t; n += 1; }
  return n;
}

function badd(a,b)
{
 var al=a.length;
 var bl=b.length;

 if(al < bl) return badd(b,a);

 var r=new Array(al);
 var c=0, n=0;

 for(; n<bl; n++)
 {
  c+=a[n]+b[n];
  r[n]=c & bm;
  c>>>=bs;
 }
 for(; n<al; n++)
 {
  c+=a[n];
  r[n]=c & bm;
  c>>>=bs;
 }
 if(c) r[n]=c;
 return r;
}

function bsub(a,b)
{
 var al=a.length;
 var bl=b.length;

 if(bl > al) return [];
 if(bl == al)
 {
  if(b[bl-1] > a[bl-1]) return [];
  if(bl==1) return [a[0]-b[0]];
 }

 var r=new Array(al);
 var c=0;

 for(var n=0; n<bl; n++)
 {
  c+=a[n]-b[n];
  r[n]=c & bm;
  c>>=bs;
 }
 for(;n<al; n++)
 {
  c+=a[n];
  r[n]=c & bm;
  c>>=bs;
 }
 if(c) return [];

 return zclip(r);
}

function ip(w, n, x, y, c)
{
 var xl = x&bdm;
 var xh = x>>bd;

 var yl = y&bdm;
 var yh = y>>bd;

 var m = xh*yl+yh*xl;
 var l = xl*yl+((m&bdm)<<bd)+w[n]+c;
 w[n] = l&bm;
 c = xh*yh+(m>>bd)+(l>>bs);
 return c;
}

// Multiple-precision squaring, HAC Algorithm 14.16

function bsqr(x)
{
 var t = x.length;
 var n = 2*t;
 var r = zeros(n);
 var c = 0;
 var i, j;

 for(i = 0; i < t; i++)
 {
  c = ip(r,2*i,x[i],x[i],0);
  for(j = i+1; j < t; j++)
  {
   c = ip(r,i+j,2*x[j],x[i],c);
  }
  r[i+t] = c;
 }

 return zclip(r);
}

// Multiple-precision multiplication, HAC Algorithm 14.12

function bmul(x,y)
{
 var n = x.length;
 var t = y.length;
 var r = zeros(n+t-1);
 var c, i, j;

 for(i = 0; i < t; i++)
 {
  c = 0;
  for(j = 0; j < n; j++)
  {
   c = ip(r,i+j,x[j],y[i],c);
  }
  r[i+n] = c;
 }

 return zclip(r);
}

function toppart(x,start,len)
{
 var n=0;
 while(start >= 0 && len-->0) n=n*bx2+x[start--];
 return n;
}

// Multiple-precision division, HAC Algorithm 14.20

function bdiv(a,b)
{
 var n=a.length-1;
 var t=b.length-1;
 var nmt=n-t;

 // trivial cases; a < b
 if(n < t || n==t && (a[n]<b[n] || n>0 && a[n]==b[n] && a[n-1]<b[n-1]))
 {
  this.q=[0]; this.mod=a;
  return this;
 }

 // trivial cases; q < 4
 if(n==t && toppart(a,t,2)/toppart(b,t,2) <4)
 {
  var x=a.concat();
  var qq=0;
  var xx;
  for(;;)
  {
   xx=bsub(x,b);
   if(xx.length==0) break;
   x=xx; qq++;
  }
  this.q=[qq]; this.mod=x;
  return this;
 }

 // normalize
 var shift2=Math.floor(Math.log(b[t])/log2)+1;
 var shift=bs-shift2;

 var x=a.concat();
 var y=b.concat();

 if(shift)
 {
  for(i=t; i>0; i--) y[i]=((y[i]<<shift) & bm) | (y[i-1] >> shift2);
  y[0]=(y[0]<<shift) & bm;
  if(x[n] & ((bm <<shift2) & bm))
  {
   x[++n]=0; nmt++;
  }
  for(i=n; i>0; i--) x[i]=((x[i]<<shift) & bm) | (x[i-1] >> shift2);
  x[0]=(x[0]<<shift) & bm;
 }

 var i, j, x2;
 var q=zeros(nmt+1);
 var y2=zeros(nmt).concat(y);
 for(;;)
 {
  x2=bsub(x,y2);
  if(x2.length==0) break;
  q[nmt]++;
  x=x2;
 }

 var yt=y[t], top=toppart(y,t,2)
 for(i=n; i>t; i--)
 {
  var m=i-t-1;
  if(i >= x.length) q[m]=1;
  else if(x[i] == yt) q[m]=bm;
  else q[m]=Math.floor(toppart(x,i,2)/yt);

  var topx=toppart(x,i,3);
  while(q[m] * top > topx) q[m]--;

  //x-=q[m]*y*b^m
  y2=y2.slice(1);
  x2=bsub(x,bmul([q[m]],y2));
  if(x2.length==0)
  {
   q[m]--;
   x2=bsub(x,bmul([q[m]],y2));
  }
  x=x2;
 }
 // de-normalize
 if(shift)
 {
  for(i=0; i<x.length-1; i++) x[i]=(x[i]>>shift) | ((x[i+1] << shift2) & bm);
  x[x.length-1]>>=shift;
 }

 this.q = zclip(q);
 this.mod = zclip(x);
 return this;
}

function simplemod(i,m) // returns the mod where m < 2^bd
{
 var c=0, v;
 for(var n=i.length-1; n>=0; n--)
 {
  v=i[n];
  c=((v >> bd) + (c<<bd)) % m;
  c=((v & bdm) + (c<<bd)) % m;
 }
 return c;
}

function bmod(p,m)
{
 if(m.length==1)
 {
  if(p.length==1) return [p[0] % m[0]];
  if(m[0] < bdm) return [simplemod(p,m[0])];
 }

 var r=bdiv(p,m);
 return r.mod;
}

// Barrett's modular reduction, HAC Algorithm 14.42

function bmod2(x,m,mu)
{
 var xl=x.length - (m.length << 1);
 if(xl > 0) return bmod2(x.slice(0,xl).concat(bmod2(x.slice(xl),m,mu)),m,mu);

 var ml1=m.length+1, ml2=m.length-1,rr;
 //var q1=x.slice(ml2)
 //var q2=bmul(q1,mu)
 var q3=bmul(x.slice(ml2),mu).slice(ml1);
 var r1=x.slice(0,ml1);
 var r2=bmul(q3,m).slice(0,ml1);
 var r=bsub(r1,r2);
 
 if(r.length==0)
 {
  r1[ml1]=1;
  r=bsub(r1,r2);
 }
 for(var n=0;;n++)
 {
  rr=bsub(r,m);
  if(rr.length==0) break;
  r=rr;
  if(n>=3) return bmod2(r,m,mu);
 }
 return r;
}

// Modular exponentiation, HAC Algorithm 14.79

function bexpmod(g,e,m)
{
 var a = g.concat();
 var l = e.length-1;
 var n = nbits(e[l])-2;

 for(; l >= 0; l--)
 {
  for(; n >= 0; n-=1)
  {
   a=bmod(bsqr(a),m);
   if(e[l] & (1<<n)) a=bmod(bmul(a,g),m);
  }
  n = bs-1;
 }
 return a;
}

// Modular exponentiation using Barrett reduction

function bmodexp(g,e,m)
{
 var a=g.concat();
 var l=e.length-1;
 var n=m.length*2;
 var mu=zeros(n+1);
 mu[n]=1;
 mu=bdiv(mu,m).q;

 n = nbits(e[l])-2;

 for(; l >= 0; l--)
 {
  for(; n >= 0; n-=1)
  {
   a=bmod2(bsqr(a),m, mu);
   if(e[l] & (1<<n)) a=bmod2(bmul(a,g),m, mu);
  }
  n = bs-1;
 }
 return a;
}

// -----------------------------------------------------
// Compute s**e mod m for RSA public key operation

function RSAencrypt(s, e, m) { return bexpmod(s,e,m); }

// Compute m**d mod p*q for RSA private key operations.

function RSAdecrypt(m, d, p, q, u)
{
 var xp = bmodexp(bmod(m,p), bmod(d,bsub(p,[1])), p);
 var xq = bmodexp(bmod(m,q), bmod(d,bsub(q,[1])), q);

 var t=bsub(xq,xp);
 if(t.length==0)
 {
  t=bsub(xp,xq);
  t=bmod(bmul(t, u), q);
  t=bsub(q,t);
 }
 else
 {
  t=bmod(bmul(t, u), q);
 } 
 return badd(bmul(t,p), xp);
}

// -----------------------------------------------------------------
// conversion functions: num array <-> multi precision integer (mpi)
// mpi: 2 octets with length in bits + octets in big endian order

function mpi2b(s)
{
 var bn=1, r=[0], rn=0, sb=256;
 var c, sn=s.length;
 if(sn < 2) return 0;

 var len=(sn-2)*8;
 var bits=s.charCodeAt(0)*256+s.charCodeAt(1);
 if(bits > len || bits < len-8) return 0;

 for(var n=0; n<len; n++)
 {
  if((sb<<=1) > 255)
  {
   sb=1; c=s.charCodeAt(--sn);
  }
  if(bn > bm)
  {
   bn=1;
   r[++rn]=0;
  }
  if(c & sb) r[rn]|=bn;
  bn<<=1;
 }
 return r;
}

function b2mpi(b)
{
 var bn=1, bc=0, r=[0], rb=1, rn=0;
 var bits=b.length*bs;
 var n, rr='';

 for(n=0; n<bits; n++)
 {
  if(b[bc] & bn) r[rn]|=rb;
  if((rb<<=1) > 255)
  {
   rb=1; r[++rn]=0;
  }
  if((bn<<=1) > bm)
  {
   bn=1; bc++;
  }
 }

 while(rn && r[rn]==0) rn--;

 bn=256;
 for(bits=8; bits>0; bits--) if(r[rn] & (bn>>=1)) break;
 bits+=rn*8;

 rr+=String.fromCharCode(bits/256)+String.fromCharCode(bits%256);
 if(bits) for(n=rn; n>=0; n--) rr+=String.fromCharCode(r[n]);
 return rr;
}




/* OpenPGP radix-64/base64 string encoding/decoding
 * Copyright 2005 Herbert Hanewinkel, www.haneWIN.de
 * version 1.0, check www.haneWIN.de for the latest version

 * This software is provided as-is, without express or implied warranty.  
 * Permission to use, copy, modify, distribute or sell this software, with or
 * without fee, for any purpose and by any individual or organization, is hereby
 * granted, provided that the above copyright notice and this paragraph appear 
 * in all copies. Distribution as a part of an application or binary must
 * include the above copyright notice in the documentation and/or other materials
 * provided with the application or distribution.
 */

var b64s='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

function s2r(t)
{
 var a, c, n;
 var r='', l=0, s=0;
 var tl=t.length;

 for(n=0; n<tl; n++)
 {
  c=t.charCodeAt(n);
  if(s == 0)
  {
   r+=b64s.charAt((c>>2)&63);
   a=(c&3)<<4;
  }
  else if(s==1)
  {
   r+=b64s.charAt((a|(c>>4)&15));
   a=(c&15)<<2;
  }
  else if(s==2)
  {
   r+=b64s.charAt(a|((c>>6)&3));
   l+=1;
   if((l%60)==0) r+="\n";
   r+=b64s.charAt(c&63);
  }
  l+=1;
  if((l%60)==0) r+="\n";

  s+=1;
  if(s==3) s=0;  
 }
 if(s>0)
 {
  r+=b64s.charAt(a);
  l+=1;
  if((l%60)==0) r+="\n";
  r+='=';
  l+=1;
 }
 if(s==1)
 {
  if((l%60)==0) r+="\n";
  r+='=';
 }

 return r;
}

function r2s(t)
{
 var c, n;
 var r='', s=0, a=0;
 var tl=t.length;

 for(n=0; n<tl; n++)
 {
  c=b64s.indexOf(t.charAt(n));
  if(c >= 0)
  {
   if(s) r+=String.fromCharCode(a | (c>>(6-s))&255);
   s=(s+2)&7;
   a=(c<<s)&255;
  }
 }
 return r;
}



/*
 * conversion functions:
 * - num array to string
 * - string to hex
 */

function s2b(s)
{
 var bn=1, r=[0], rn=0, sn=0, sb=256;
 var bits=s.length*8;

 for(var n=0; n<bits; n++)
 {
  if((sb<<=1) > 255)
  {
   sb=1; c=s.charCodeAt(sn++);
  }
  if(bn > bm)
  {
   bn=1;
   r[++rn]=0;
  }
  if(c & sb) r[rn]|=bn;
  bn<<=1;
 }
 return r;
}

function b2s(b)
{
 var bn=1, bc=0, r=[0], rb=1, rn=0;
 var bits=b.length*bs;
 var n, rr='';

 for(n=0; n<bits; n++)
 {
  if(b[bc] & bn) r[rn]|=rb;
  if((rb<<=1) > 255)
  {
   rb=1; r[++rn]=0;
  }
  if((bn<<=1) > bm)
  {
   bn=1; bc++;
  }
 }

 while(rn >= 0 && r[rn]==0) rn--;
 for(n=0; n<=rn; n++) rr=String.fromCharCode(r[n])+rr;
 return rr;
}

function s2hex(s)
{
  var result = '';
  for(var i=0; i<s.length; i++)
  {
    c = s.charCodeAt(i);
    result += ((c<16) ? "0" : "") + c.toString(16);
  }
  return result;
}

function hex2s(hex)
{
  var r='';
  if(hex.indexOf("0x") == 0 || hex.indexOf("0X") == 0) hex = hex.substr(2);

  if(hex.length%2) hex+='0';

  for(var i = 0; i<hex.length; i += 2)
    r += String.fromCharCode(parseInt(hex.slice(i, i+2), 16));
  return r;
}



    
/* Collect entropy from mouse motion and key press events
 * Note that this is coded to work with either DOM2 or Internet Explorer
 * style events.
 * We don't use every successive mouse movement event.
 * Instead, we use some bits from random() to determine how many
 * subsequent mouse movements we ignore before capturing the next one.
 * rc4 is used as a mixing function for the captured mouse events.  
 *
 * mouse motion event code originally from John Walker
 * key press timing code thanks to Nigel Johnstone
 */

var oldKeyHandler;    // For saving and restoring key press handler in IE4
var keyRead = 0;
var keyNext = 0;
var keyArray = new Array(256);
	
var mouseMoveSkip = 0; // Delay counter for mouse entropy collection
var oldMoveHandler;    // For saving and restoring mouse move handler in IE4
var mouseRead = 0;
var mouseNext = 0;
var mouseArray = new Array(256);

// ----------------------------------------

var s=new Array(256);
var rc4x, rc4y;

function rc4Init()
{
 var i, t;
 var key = new Array(256);
 var x, y;

 for(i=0; i<256; i++)
 {
  s[i]=i;
  key[i] = randomByte()^timeByte();
 }

 y=0;
 for(i=0; i<2; i++)
 {
  for(x=0; x<256; x++)
  {
   y=(key[i] + s[x] + y) % 256;
   t=s[x]; s[x]=s[y]; s[y]=t;
  }
 }
 rc4x=0;
 rc4y=0;
}

function rc4Next(b)
{
 var t;

 rc4x=(rc4x+1) & 255; 
 rc4y=(s[rc4x] + rc4y) & 255;
 t=s[rc4x]; s[rc4x]=s[rc4y]; s[rc4y]=t ^ b;
 return (b ^ s[(s[rc4x] + s[rc4y]) % 256]) & 255;
}

// ----------------------------------------
function timeByte()
{
	if (window.performance !== undefined && window.performance.now !== undefined) return ((window.performance.now()%512)>>>1)&255;

	return ((new Date().getTime())>>>2)&255;
}

function randomByte() { return Math.round(Math.random()*255)&255; }

function keyPressEntropy(e) { rc4Next(timeByte()); }

function mouseMoveEntropy(e)
{
 var c;

 if (!e) { e = window.event; }	    // Internet Explorer event model

 if(mouseMoveSkip-- <= 0)
 {
  if(oldMoveHandler) { c = ((e.clientX << 4) | (e.clientY & 15)); }
  else { c = ((e.screenX << 4) | (e.screenY & 15)); }

  rc4Next(c&255);
  rc4Next(timeByte());
  mouseMoveSkip = randomByte() & 7;
 }
}

// ----------------------------------------

function eventsEnd()
{
 if(document.removeEventListener)
 {
  document.removeEventListener("mousemove", mouseMoveEntropy, false);
  document.removeEventListener("keypress", keyPressEntropy, false);
 }
 else if(document.detachEvent)
 {
  document.detachEvent("onmousemove", mouseMoveEntropy);
  document.detachEvent("onkeypress", keyPressEntropy);
 }
 else if(document.releaseEvents)
 {
  document.releaseEvents(EVENT.MOUSEMOVE); document.onMousemove = 0;
  document.releaseEvents(EVENT.KEYPRESS); document.onKeypress = 0;
 }
 else
 {
  document.onMousemove = oldMoveHandler;
  document.onKeypress = oldKeyHandler;
 }
}

// Start collection of entropy.
	
function eventsCollect()
{
 if((document.implementation.hasFeature("Events", "2.0"))
  && document.addEventListener) // Document Object Model (DOM) 2 events
 {
  document.addEventListener("mousemove", mouseMoveEntropy, false);
  document.addEventListener("keypress", keyPressEntropy, false);
 }
 else if(document.attachEvent) // IE 5 and above event model
 {
  document.attachEvent("onmousemove", mouseMoveEntropy);
  document.attachEvent("onkeypress", keyPressEntropy);
 }
 else if(document.captureEvents) // Netscape 4.0
 {
  document.captureEvents(Event.MOUSEMOVE);
  document.onMousemove = mouseMoveEntropy;
  document.captureEvents(Event.KEYPRESS);
  document.onMousemove = keyPressEntropy;
 }
 else // IE 4 event model
 {
  oldMoveHandler = document.onmousemove;
  document.onMousemove = mouseMoveEntropy;
  oldKeyHandler = document.onkeypress;
  document.onKeypress = keyPressEntropy;
 }

 rc4Init();
}



/* The following functions are (c) 2000 by John M Hanna and are
 * released under the terms of the Gnu Public License.
 * You must freely redistribute them with their source -- see the
 * GPL for details.
 *  -- Latest version found at http://sourceforge.net/projects/shop-js
 */
 
 

var Sr, Rsl, Rbits, Rbits2;
var Rx=0, Ry=0;
var cbuf;

if (typeof window.crypto == 'object' && typeof window.crypto.getRandomValues == 'function')
{
	cbuf = new Uint32Array(new ArrayBuffer(4));
}

// random number between 0 .. n -- based on repeated calls to rc
function rand(n)
{
 if(n==2)
 {
  if(!Rbits)
  {
   Rbits=8;
   Rbits2=rc4Next(randomByte());
  }
  Rbits--;
  var r=Rbits2 & 1;
  Rbits2>>=1;
  return r;
 }

 var m=1;

 r = 0;
 while (n>m && m > 0)
 {
  m<<=8; r=(r<<8) | rc4Next(randomByte());
 }
 if (cbuf)
 {
	window.crypto.getRandomValues(cbuf);
	r ^= cbuf[0];
 }
 if(r<0) r ^= 0x80000000;
 return r % n;
}

// ------------------------------------------------------------
// functions for generating keys
// ------------------------------------------------------------

function beq(a,b) // returns 1 if a == b
{
 if(a.length != b.length) return 0;

 for(var n=a.length-1; n>=0; n--)
 {
  if(a[n] != b[n]) return 0;
 }
 return 1;
}

function blshift(a,b) // binary left shift b bits
{
 var n, c=0;
 var r=new Array(a.length);

 for(n=0; n<a.length; n++)
 {
  c|= (a[n]<<b);
  r[n]= c & bm;
  c>>=bs;
 }
 if(c) r[n]=c;
 return r;
}

function brshift(a) // unsigned binary right shift 1 bit
{
 var c=0,n,cc;
 var r=new Array(a.length);

 for(n=a.length-1; n>=0; n--)
 {
  c<<=bs;
  cc=a[n];
  r[n]=(cc | c)>>1;
  c=cc & 1;
 }
 n=r.length;
 if(r[n-1]) return r;
 while(n > 1 && r[n-1]==0) n--;
 return r.slice(0,n);
}

function bgcd(uu,vv) // return greatest common divisor
{
 // algorythm from http://algo.inria.fr/banderier/Seminar/Vallee/index.html

 var d, t, v=vv.concat(), u=uu.concat();
 for(;;)
 {
  d=bsub(v,u);
  if(beq(d,[0])) return u;
  if(d.length)
  {
   while((d[0] & 1) ==0) d=brshift(d); // v=(v-u)/2^val2(v-u)
   v=d;
  }
  else
  {
   t=v; v=u; u=t; // swap u and v
  }
 }
}

function rnum(bits)
{
 var n,b=1,c=0;
 var a=[];
 if(bits==0) bits=1;
 for(n=bits; n>0; n--)
 {

  if(rand(2)) a[c]|=b;
  b<<=1;
  if(b==bx2)
  {
   b=1;
   c++;
  }
 }
 return a;
}

var Primes=[3, 5, 7, 11, 13, 17, 19,
	23, 29, 31, 37, 41, 43, 47, 53,
	59, 61, 67, 71, 73, 79, 83, 89,
	97, 101, 103, 107, 109, 113, 127, 131,
	137, 139, 149, 151, 157, 163, 167, 173,
	179, 181, 191, 193, 197, 199, 211, 223,
	227, 229, 233, 239, 241, 251, 257, 263,
	269, 271, 277, 281, 283, 293, 307, 311,
	313, 317, 331, 337, 347, 349, 353, 359,
	367, 373, 379, 383, 389, 397, 401, 409,
	419, 421, 431, 433, 439, 443, 449, 457,
	461, 463, 467, 479, 487, 491, 499, 503,
	509, 521, 523, 541, 547, 557, 563, 569,
	571, 577, 587, 593, 599, 601, 607, 613,
	617, 619, 631, 641, 643, 647, 653, 659,
	661, 673, 677, 683, 691, 701, 709, 719,
	727, 733, 739, 743, 751, 757, 761, 769,
	773, 787, 797, 809, 811, 821, 823, 827,
	829, 839, 853, 857, 859, 863, 877, 881,
	883, 887, 907, 911, 919, 929, 937, 941,
	947, 953, 967, 971, 977, 983, 991, 997,
	1009, 1013, 1019, 1021];


var sieveSize=4000;
var sieve0=-1* sieveSize;
var sieve=[];
var lastPrime=0;

function nextPrime(p) // returns the next prime > p
{
 var n;
 if(p == Primes[lastPrime] && lastPrime <Primes.length-1)
 {
  return Primes[++lastPrime];
 }
 if(p<Primes[Primes.length-1])
 {
  for(n=Primes.length-2; n>0; n--)
  {
   if(Primes[n] <= p)
   {
    lastPrime=n+1;
    return Primes[n+1];
   }
  }
 }
 // use sieve and find the next one
 var pp,m;
 // start with p
 p++; if((p & 1)==0) p++;
 for(;;)
 {
  // new sieve if p is outside of this sieve's range
  if(p-sieve0 > sieveSize || p < sieve0)
  {
   // start new sieve
   for(n=sieveSize-1; n>=0; n--) sieve[n]=0;
   sieve0=p;
   primes=Primes.concat();
  } 

  // next p if sieve hit
  if(sieve[p-sieve0]==0)
  {
   // sieve miss
   // update sieve if p divisable

   // find a prime divisor
   for(n=0; n<primes.length; n++)
   {
    if((pp=primes[n]) && p % pp ==0)
    {
     for(m=p-sieve0; m<sieveSize; m+=pp) sieve[m]=pp;
     p+=2;
     primes[n]=0;
     break;
    }
   }
   if(n >= primes.length)
   {
    // possible prime
    return p;
   }
  }
  else
  {
   p+=2;
  }
 }
}

function divisable(n,max) // return a factor if n is divisable by a prime less than max, else return 0
{
 if((n[0] & 1) == 0) return 2;
 for(c=0; c<Primes.length; c++)
 {
  if(Primes[c] >= max) return 0;
  if(simplemod(n,Primes[c])==0) return Primes[c];
 }
 c=Primes[Primes.length-1];
 for(;;)
 {
  c=nextPrime(c);
  if(c >= max) return 0;
  if(simplemod(n,c)==0) return c;
 }
}

function bPowOf2(pow) // return a bigint
{
 var r=[], n, m=Math.floor(pow/bs);
 for(n=m-1; n>=0; n--) r[n]=0;
 r[m]=1<<(pow % bs);
 return r;
}

var depth = 0;

var sp = 0;
var stack = Array(20);
var stage;
var retval;

function jump(to)
{
	stage = to;
}

function push(substage,nextstage,args)
{
	stack[sp] = new Object;
	stack[sp].args = args;
	stack[sp++].stage = nextstage;
	stage = substage;
}

function getargs()
{
	return stack[sp-1].args;
}

function ret(r)
{
	retval = r;
	delete stack[sp];
	stage = stack[--sp].stage;
}

function mpp1() // returns a Maurer Provable Prime, see HAC chap 4 (c) CRC press
{
 var bits = getargs();

 if (d) console.log("Getting " + bits + " prime bits at depth " + depth);
 if(bits < 10) ret([Primes[rand(Primes.length)]]);
 else if(bits <=20) ret([nextPrime(rand(1<<bits))]);
 else
 {
 depth++;

 var r;

 if(bits > 40)
 {
  for(;;)
  {
   r=Math.pow(2,Math.random()-1);
   if(bits - r * bits > 20) break;
  }
 }
 else
 {
  r=0.5
 }

   push(10,11,Math.floor(r*bits)+1);
 }
}

var B, I, Il, qq, cbits;

var maxsp = 0;

function mpp2()
{
 qq = retval;
 cbits = getargs();

 B = cbits*cbits/10; 
 I=bPowOf2(cbits-2);
 I=bdiv(I,qq).q;
 Il=I.length;
rc = 0;
 jump(12);
}
var rc;

function mpp3()
{
 var R, n, a, b, d, R2, nMinus1;
  // generate R => I < R < 2I
  R=[];
  for(n=0; n<Il; n++) R[n]=rand(bx2);
  R[Il-1] %= I[Il-1];
  R=bmod(R,I);
  if(!R[0]) R[0]|=1; // must be greater or equal to 1
  R=badd(R,I);
  n=blshift(bmul(R,qq),1); // 2Rq+1
  n[0]|=1;
  if(!divisable(n,B))
  {
   a=rnum(cbits-1);
   a[0]|=2; // must be greater than 2
   nMinus1=bsub(n,[1]);
   var x=bmodexp(a,nMinus1,n);

   if(beq(x,[1]))
   {
    R2=blshift(R,1);
    b=bsub(bmodexp(a,R2,n),[1]);
    d=bgcd(b,n);
    if(beq(d,[1]))
	{
		depth--;
		setprogress(0,45*cbits/bits);
		if (d) console.log("rc=" + rc);
		ret(n);
	}
   }
  }
  rc++;
}


// -------------------------------------------------

function sub2(a,b)
{
 var r=bsub(a,b);
 if(r.length==0)
 {
  this.a=bsub(b,a);
  this.sign=1;
 }
 else
 {
  this.a=r;
  this.sign=0;
 }
 return this;
}

function signedsub(a,b)
{
 if(a.sign)
 {
  if(b.sign) return sub2(b,a);
  else
  {
   this.a=badd(a,b);
   this.sign=1;
  }
 }
 else
 {
  if(b.sign)
  {
   this.a=badd(a,b);
   this.sign=0;
  }
  else return sub2(a,b);
 }
 return this;
}

// from  Bryan Olson <bryanolson@my-deja.com> 
var y, bq, a, b;
var x, n;

function modinverse() // returns x^-1 mod n
{
	var args = getargs();
	x = args[0];
	n = args[1];
	
	y=n.concat();
	a=[1];
	b=[0];

	a.sign=0;
	b.sign=0;

	jump(201);
}

function modinverse2()
{
	var t, r, ts;

	if (y.length > 1 || y[0])
	{
		t=y.concat();
		r=bdiv(x,y);
		y=r.mod;
		q=r.q;
		x=t;
		t=b.concat(); ts=b.sign;
		bq=bmul(b,q);
		bq.sign=b.sign;
		r=signedsub(a,bq);
		b=r.a; b.sign=r.sign;
		a=t; a.sign=ts;
	}
	else jump(202);
}

function modinverse3()
{
	if (x.length != 1 || x[0] != 1) a = [0]; // No inverse; GCD is x
	else if (a.sign) a=bsub(n,a);

	ret(a);
}

// -------------------------------------------------
// function to generate keys

var rsa_p,rsa_q,rsa_e,rsa_d,rsa_pq, rsa_u;
var c, p1q1;
var bits;

var lasttime;

var basep;

function setprogress(base,p)
{
	if (base)
	{
		basep = p;
		p = 0;
	}
	
	ui_keyprogress(Math.floor(basep+p));
}

function keygenexec()
{
	var currtime;
	var loops = 0;
	do {
		switch (stage)
		{
			case 0:
				setprogress(1,0);
				maxsp = 0;
				if (d) console.log("mpp1");
				push(10,1,bits);
				break;

			case 1:
				setprogress(1,45);
				maxsp = 0;
				rsa_q=retval;
				if (d) console.log("mpp2");
				push(10,2,bits);
				break;
				
			case 2:
				 rsa_p=retval;
				 if (d) console.log("bmul");
				 p1q1=bmul(bsub(rsa_p,[1]),bsub(rsa_q,[1]));
				 
				 c = 5;
				 jump(100);
				break;
			
			case 10:
				mpp1();
				break;
				
			case 11:
				mpp2();
				break;
				
			case 12:
				mpp3();
				break;

			case 100:
				setprogress(1,90);
				rsa_e=[Primes[c]];
				rsa_d=push(200,101,[rsa_e,p1q1]);
				break;

			case 101:
				setprogress(1,95);
				rsa_d = retval;
				if (rsa_d.length != 1 || rsa_d[0] != 0 || ++c >= Primes.length) jump(102);
				else jump(100);
				break;

			case 102:
				setprogress(0,1);
				rsa_pq=bmul(rsa_p,rsa_q);
				rsa_u=push(200,110,[rsa_p,rsa_q]);
				break;
				
			case 110:
				setprogress(1,100);
				rsa_u = retval;
				return keycomplete();

			case 200:
				setprogress(0,2);
				modinverse();
				break;
				
			case 201:
				modinverse2();
				break;
				
			case 202:
				setprogress(0,3);
				modinverse3();
		}
		
		currtime = new Date().getTime();
		loops++;
	} while (currtime-lasttime < 20);

	lasttime = currtime;
	setTimeout(keygenexec,0);
}

function genkey()
{
 stage = 0;
 bits=1024;

 lasttime = new Date().getTime();
 startTime=new Date();
 keygenexec();
}

var privk, pubk;

function keycomplete()
{
	var endTime=new Date();
	
	if (d) console.log("Key generation took " +  (endTime.getTime()-startTime.getTime())/1000.0) + " seconds!";

	api_setrsa([rsa_p,rsa_q,rsa_d,rsa_u],[rsa_pq,rsa_e]);
}


/*
Ext JS 4.1 - JavaScript Library
Copyright (c) 2006-2012, Sencha Inc.
All rights reserved.
licensing@sencha.com

http://www.sencha.com/license


Commercial License
------------------------------------------------------------------------------------------
This version of Ext JS is licensed commercially. 
This is the appropriate option if you are creating proprietary applications and you are 
not prepared to distribute and share the source code of your application under the 
GPL v3 license. Please visit http://www.sencha.com/license for more details.


Open Source Licensing
------------------------------------------------------------------------------------------
Open Source Licensing is available for an alternate download of Ext JS.
For more details, please visit: http://www.sencha.com/license.

--

This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT OF THIRD-PARTY INTELLECTUAL PROPERTY RIGHTS.
*/

function clearit(storagetype,t)
{
	var tsec = 86400;
	
	if (t) tsec = t;

	function errorHandler2(e) 
	{
	  //console.log('Error',e);
	  //console.log(e);
	}
	function toArray(list) 
	{
	  return Array.prototype.slice.call(list || [], 0);
	}	
	function readentry()
	{	
	
		if (i < entries.length)
		{
			var file = entries[i];
			if (file.isFile)
			{			
				
				file.getMetadata(function(metadata)
				{		
					if ((metadata.modificationTime.getTime()+tsec*1000) < (new Date().getTime()))
					{				
						file.remove(function() { if (d) console.log('temp file removed') }, function() { if (d) console.log('temp file removal failed') });
					}					
				
				});
			}	
			i++;
			readentry();
		}
	}
	function onInitFs(fs) 
	{
	   fs.root.getDirectory('mega', {}, function(dirEntry)
	   {
		  var dirReader = dirEntry.createReader();	 
		  var readEntries = function() 
		  {
			 dirReader.readEntries (function(results) 
			 {
				if (!results.length) 
				{
					readentry();
				} 
				else 
				{
					entries = entries.concat(toArray(results));
					readEntries();
			  }
			}, errorHandler2);
		  };
		  readEntries(); // Start reading dirs.
		  
	 }, errorHandler2);
	}
	var i = 0;
	var entries = [];	
	if (window.webkitRequestFileSystem) window.webkitRequestFileSystem(storagetype, 1024*1024, onInitFs, errorHandler2);	
}

window.URL = window.URL || window.webkitURL;
var have_ab = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';
var use_workers = have_ab && typeof Worker != 'undefined';

if ((navigator.appVersion.indexOf('Safari') > 0) && (navigator.appVersion.indexOf('Version/5') > 0))
{
	use_workers=false;
	have_ab=false;
}

var ssl_off = [ 'Firefox/14', 'Firefox/15', 'Firefox/17', 'Safari', 'Firefox/16' ];
var ssl_opt = [ 'Chrome/' ];

function ssl_needed()
{
	for (var i = ssl_opt.length; i--; ) if (navigator.userAgent.indexOf(ssl_opt[i]) >= 0) return 0;
	for (var i = ssl_off.length; i--; ) if (navigator.userAgent.indexOf(ssl_off[i]) >= 0) return -1;
	return 1;
}

var use_ssl = ssl_needed();
if (!use_ssl && localStorage.use_ssl) use_ssl = 1;
else use_ssl++;

var chromehack = navigator.appVersion.indexOf('Chrome/');
chromehack = chromehack >= 0 && parseInt(navigator.appVersion.substr(chromehack+7)) > 21;

// keyboard/mouse entropy
eventsCollect();

var EINTERNAL = -1;
var EARGS = -2;
var EAGAIN = -3;
var ERATELIMIT = -4;
var EFAILED = -5;
var ETOOMANY = -6;	// too many IP addresses
var ERANGE = -7;	// file packet out of range
var EEXPIRED = -8;

// FS access errors
var ENOENT = -9;
var ECIRCULAR = -10;
var EACCESS = -11;
var EEXIST = -12;
var EINCOMPLETE = -13;

// crypto errors
var EKEY = -14;

// user errors
var ESID = -15;
var EBLOCKED = -16;
var EOVERQUOTA = -17;
var ETEMPUNAVAIL = -18;
var ETOOMANYCONNECTIONS = -19;

function benchmark()
{
	var a = Array(1048577).join('a');
	
	var ab = str_to_ab(a);
	
	var ab8 = new Uint8Array(ab);
	
	var aes = new sjcl.cipher.aes([0,1,2,3]);
	
	t = new Date().getTime();
	for (var i = 16; i--; ) encrypt_ab_ctr(aes,ab8,[1,2],30000);
	t = new Date().getTime()-t;
	
	console.log((a.length*16/1024)/(t/1000) + " KB/s");
}

var seqno = rand(0x100000000);

// compute final MAC from block MACs
function condenseMacs(macs,key)
{
	var i, aes;
	mac = [0,0,0,0];

	aes = new sjcl.cipher.aes([key[0],key[1],key[2],key[3]]);
	
	for (i = 0; i < macs.length; i++)
	{
		mac[0] ^= macs[i][0];
		mac[1] ^= macs[i][1];
		mac[2] ^= macs[i][2];
		mac[3] ^= macs[i][3];

		mac = aes.encrypt(mac);
	}
	
	return mac;
}

// convert user-supplied password array
function prepare_key(a)
{
	var i, j, r;
	var pkey = [0x93C467E3,0x7DB0C7A4,0xD1BE3F81,0x0152CB56];

	for (r = 65536; r--; )
	{
		for (j = 0; j < a.length; j += 4)
		{
			key = [0,0,0,0];
			
			for (i = 0; i < 4; i++) if (i+j < a.length) key[i] = a[i+j];

			aes = new sjcl.cipher.aes(key);
			pkey = aes.encrypt(pkey);
		}
	}

	return pkey;
}

// prepare_key with string input
function prepare_key_pw(password)
{
	return prepare_key(str_to_a32(password));
}

var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
var b64a = b64.split('');


// unsubstitute standard base64 special characters, restore padding
function base64urldecode(data)
{
	data += '=='.substr((2-data.length*3)&3)

    if (typeof atob === 'function')
	{
		data = data.replace(/\-/g,'+').replace(/_/g,'/').replace(/,/g,'');
		
		try {
			return atob(data);
		} catch (e) {
			return '';
		}
	}

  // http://kevin.vanzonneveld.net
  // +   original by: Tyler Akins (http://rumkin.com)
  // +   improved by: Thunder.m
  // +      input by: Aman Gupta
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // +   bugfixed by: Pellentesque Malesuada
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: Brett Zamir (http://brett-zamir.me)
  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // *     example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==');
  // *     returns 1: 'Kevin van Zonneveld'
  // mozilla has this native
  // - but breaks in 2.0.0.12!
  //if (typeof this.window['atob'] == 'function') {
  //    return atob(data);
  //}
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    dec = "",
    tmp_arr = [];

  if (!data) {
    return data;
  }

  data += '';

  do { // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));

    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  dec = tmp_arr.join('');

  return dec;
}

// substitute standard base64 special characters to prevent JSON escaping, remove padding
function base64urlencode(data)
{
    if (typeof btoa === 'function') return btoa(data).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'');

	var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
	ac = 0,
	enc = "",
	tmp_arr = [];
 
    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);
 
        bits = o1 << 16 | o2 << 8 | o3;
 
        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;
 
        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64a[h1] + b64a[h2] + b64a[h3] + b64a[h4];
    } while (i < data.length);

    enc = tmp_arr.join('');
    var r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc);
}

// array of 32-bit words to string (big endian)
function a32_to_str(a)
{
	var b = '';

	for (var i = 0; i < a.length*4; i++)
		b = b+String.fromCharCode((a[i>>2] >>> (24-(i & 3)*8)) & 255);

	return b;
}

function a32_to_base64(a)
{
	return base64urlencode(a32_to_str(a));
}

// string to array of 32-bit words (big endian)
function str_to_a32(b)
{
	var a = Array((b.length+3) >> 2);
	for (var i = 0; i < b.length; i++) a[i>>2] |= (b.charCodeAt(i) << (24-(i & 3)*8));
	return a;
}

function base64_to_a32(s)
{
	return str_to_a32(base64urldecode(s));
}

// ArrayBuffer to binary string
function ab_to_str(ab)
{
	var b = '', i;
	
	if (have_ab)
	{
		var b = '';

		var ab8 = new Uint8Array(ab);

		for (i = 0; i < ab8.length; i++) b = b+String.fromCharCode(ab8[i]);
	}
	else
	{
		return ab.buffer;
	}

	return b;
}

// ArrayBuffer to binary string
function ab_to_base64(ab)
{
	return base64urlencode(ab_to_str(ab));
}

// ArrayBuffer to binary with depadding
function ab_to_str_depad(ab)
{
	var b, i;

	if (have_ab)
	{
		b = '';

		var ab8 = new Uint8Array(ab);

		for (i = 0; i < ab8.length && ab8[i]; i++) b = b+String.fromCharCode(ab8[i]);
	}
	else
	{
		b = ab_to_str(ab);
		
		for (i = b.length; i-- && !b.charCodeAt(i); );
		
		b = b.substr(0,i+1);
	}

	return b;
}

// binary string to ArrayBuffer, 0-padded to AES block size
function str_to_ab(b)
{
	var ab, i;
	
	if (have_ab)
	{
		ab = new ArrayBuffer((b.length+15)&-16);
		var ab8 = new Uint8Array(ab);

		for (i = b.length; i--; ) ab8[i] = b.charCodeAt(i);

		return ab;
	}
	else
	{
		b += Array(16-((b.length-1)&15)).join(String.fromCharCode(0));

		ab = { buffer : b };
	}

	return ab;
}

// binary string to ArrayBuffer, 0-padded to AES block size
function base64_to_ab(a)
{
	return str_to_ab(base64urldecode(a));
}

// encrypt ArrayBuffer in CTR mode, return MAC
function encrypt_ab_ctr(aes,ab,nonce,pos)
{
	var ctr = [nonce[0],nonce[1],(pos/0x1000000000) >>> 0,(pos/0x10) >>> 0];
	var mac = [ctr[0],ctr[1],ctr[0],ctr[1]];

	var enc, i, j, len, v;
	
	if (have_ab)
	{
		var data0, data1, data2, data3;

		len = ab.buffer.byteLength-16;

		var v = new DataView(ab.buffer);
		
		for (i = 0; i < len; i += 16)
		{
			data0 = v.getUint32(i,false);
			data1 = v.getUint32(i+4,false);
			data2 = v.getUint32(i+8,false);
			data3 = v.getUint32(i+12,false);

			// compute MAC
			mac[0] ^= data0;
			mac[1] ^= data1;
			mac[2] ^= data2;
			mac[3] ^= data3;
			mac = aes.encrypt(mac);

			// encrypt using CTR
			enc = aes.encrypt(ctr);
			v.setUint32(i,data0 ^ enc[0],false);
			v.setUint32(i+4,data1 ^ enc[1],false);
			v.setUint32(i+8,data2 ^ enc[2],false);
			v.setUint32(i+12,data3 ^ enc[3],false);

			if (!(++ctr[3])) ctr[2]++;
		}

		if (i < ab.buffer.byteLength)
		{
			var fullbuf = new Uint8Array(ab.buffer);
			var tmpbuf = new ArrayBuffer(16);
			var tmparray = new Uint8Array(tmpbuf);

			tmparray.set(fullbuf.subarray(i));

			v = new DataView(tmpbuf);

			enc = aes.encrypt(ctr);

			data0 = v.getUint32(0,false);
			data1 = v.getUint32(4,false);
			data2 = v.getUint32(8,false);
			data3 = v.getUint32(12,false);

			mac[0] ^= data0;
			mac[1] ^= data1;
			mac[2] ^= data2;
			mac[3] ^= data3;
			mac = aes.encrypt(mac);

			enc = aes.encrypt(ctr);
			v.setUint32(0,data0 ^ enc[0],false);
			v.setUint32(4,data1 ^ enc[1],false);
			v.setUint32(8,data2 ^ enc[2],false);
			v.setUint32(12,data3 ^ enc[3],false);

			fullbuf.set(tmparray.subarray(0,j = fullbuf.length-i),i);
		}
	}
	else
	{
		var ab32 = _str_to_a32(ab.buffer);

		len = ab32.length-3;

		for (i = 0; i < len; i += 4)
		{
			mac[0] ^= ab32[i];
			mac[1] ^= ab32[i+1];
			mac[2] ^= ab32[i+2];
			mac[3] ^= ab32[i+3];
			mac = aes.encrypt(mac);
			
			enc = aes.encrypt(ctr);
			ab32[i] ^= enc[0];
			ab32[i+1] ^= enc[1];
			ab32[i+2] ^= enc[2];
			ab32[i+3] ^= enc[3];

			if (!(++ctr[3])) ctr[2]++;
		}

		if (i < ab32.length)
		{
			var v = [0,0,0,0];
			
			for (j = i; j < ab32.length; j++) v[j-i] = ab32[j];

			mac[0] ^= v[0];
			mac[1] ^= v[1];
			mac[2] ^= v[2];
			mac[3] ^= v[3];
			mac = aes.encrypt(mac);

			enc = aes.encrypt(ctr);
			v[0] ^= enc[0];
			v[1] ^= enc[1];
			v[2] ^= enc[2];
			v[3] ^= enc[3];
			
			for (j = i; j < ab32.length; j++) ab32[j] = v[j-i];
		}
		
		ab.buffer = _a32_to_str(ab32,ab.buffer.length);
	}

	return mac;
}

function _str_to_a32(b)
{
	var a = Array((b.length+3) >> 2);

	if (typeof b == 'string')
	{
		for (var i = 0; i < b.length; i++)
			a[i>>2] |= (b.charCodeAt(i) & 255) << (24-(i & 3)*8);
	}
	else
	{
		for (var i = 0; i < b.length; i++)
			a[i>>2] |= b[i] << ((i & 3)*8);
	}

	return a;
}

function _a32_to_str(a,len)
{
	var b = '';

	for (var i = 0; i < len; i++)
		b = b+String.fromCharCode((a[i>>2] >>> (24-(i & 3)*8)) & 255);

	return b;
}

function chksum(buf)
{
	var l, c, d;

	if (have_ab)
	{
		var ll;

		c = new Uint32Array(3);

		ll = buf.byteLength;

		l = Math.floor(ll/12);

		ll -= l*12;

		if (l)
		{
			l *= 3;
			d = new Uint32Array(buf,0,l);

			while (l)
			{
				l -= 3;

				c[0] ^= d[l];
				c[1] ^= d[l+1];
				c[2] ^= d[l+2];
			}
		}

		c = new Uint8Array(c.buffer);

		if (ll)
		{
			d = new Uint8Array(buf,buf.byteLength-ll,ll);
			
			while (ll--) c[ll] ^= d[ll];
		}
	}
	else
	{
		c = Array(12);
		
		for (l = 12; l--; ) c[l] = 0;
	
		for (l = buf.length; l--; ) c[l%12] ^= buf.charCodeAt(l);
		
	}

	for (d = '', l = 0; l < 12; l++) d += String.fromCharCode(c[l]);
	
	return d;
}

// decrypt ArrayBuffer in CTR mode, return MAC
function decrypt_ab_ctr(aes,ab,nonce,pos)
{
	var ctr = [nonce[0],nonce[1],(pos/0x1000000000) >>> 0,(pos/0x10) >>> 0];
	var mac = [ctr[0],ctr[1],ctr[0],ctr[1]];
	
	var enc, len, i, j, v;

	if (have_ab)
	{
		var data0, data1, data2, data3;

		len = ab.buffer.byteLength-16;	// @@@ -15?

		var v = new DataView(ab.buffer);
		
		for (i = 0; i < len; i += 16)
		{
			enc = aes.encrypt(ctr);

			data0 = v.getUint32(i,false)^enc[0];
			data1 = v.getUint32(i+4,false)^enc[1];
			data2 = v.getUint32(i+8,false)^enc[2];
			data3 = v.getUint32(i+12,false)^enc[3];

			v.setUint32(i,data0,false);
			v.setUint32(i+4,data1,false);
			v.setUint32(i+8,data2,false);
			v.setUint32(i+12,data3,false);

			mac[0] ^= data0;
			mac[1] ^= data1;
			mac[2] ^= data2;
			mac[3] ^= data3;

			mac = aes.encrypt(mac);

			if (!(++ctr[3])) ctr[2]++;
		}

		if (i < ab.buffer.byteLength)
		{
			var fullbuf = new Uint8Array(ab.buffer);
			var tmpbuf = new ArrayBuffer(16);
			var tmparray = new Uint8Array(tmpbuf);

			tmparray.set(fullbuf.subarray(i));

			v = new DataView(tmpbuf);

			enc = aes.encrypt(ctr);
			data0 = v.getUint32(0,false)^enc[0];
			data1 = v.getUint32(4,false)^enc[1];
			data2 = v.getUint32(8,false)^enc[2];
			data3 = v.getUint32(12,false)^enc[3];

			v.setUint32(0,data0,false);
			v.setUint32(4,data1,false);
			v.setUint32(8,data2,false);
			v.setUint32(12,data3,false);

			fullbuf.set(tmparray.subarray(0,j = fullbuf.length-i),i);

			while (j < 16) tmparray[j++] = 0;

			mac[0] ^= v.getUint32(0,false);
			mac[1] ^= v.getUint32(4,false);
			mac[2] ^= v.getUint32(8,false);
			mac[3] ^= v.getUint32(12,false);
			mac = aes.encrypt(mac);
		}
	}
	else
	{
		var ab32 = _str_to_a32(ab.buffer);		
		len = ab32.length-3;

		for (i = 0; i < len; i += 4)
		{
			enc = aes.encrypt(ctr);
			mac[0] ^= (ab32[i] ^= enc[0]);
			mac[1] ^= (ab32[i+1] ^= enc[1]);
			mac[2] ^= (ab32[i+2] ^= enc[2]);
			mac[3] ^= (ab32[i+3] ^= enc[3]);
			mac = aes.encrypt(mac);

			if (!(++ctr[3])) ctr[2]++;
		}

		if (i < ab32.length)
		{
			var v = [0,0,0,0];
			
			for (j = i; j < ab32.length; j++) v[j-i] = ab32[j];

			enc = aes.encrypt(ctr);
			v[0] ^= enc[0];
			v[1] ^= enc[1];
			v[2] ^= enc[2];
			v[3] ^= enc[3];

			var j = ab.buffer.length & 15;
			
			var m = _str_to_a32(Array(j+1).join(String.fromCharCode(255))+Array(17-j).join(String.fromCharCode(0)));

			mac[0] ^= v[0] & m[0];
			mac[1] ^= v[1] & m[1];
			mac[2] ^= v[2] & m[2];
			mac[3] ^= v[3] & m[3];
			mac = aes.encrypt(mac);
			
			for (j = i; j < ab32.length; j++) ab32[j] = v[j-i];
		}

		ab.buffer = _a32_to_str(ab32,ab.buffer.length);
	}

	return mac;
}

// encrypt ArrayBuffer in CBC mode (zero IV)
function encrypt_ab_cbc(cipher,ab)
{
	if (have_ab)
	{
		var v = new DataView(ab);
		var iv = [0,0,0,0], d = Array(4);
		var i;
		
		for (i = 0; i < ab.byteLength; i += 16)
		{
			d[0] = v.getUint32(i,false) ^ iv[0];
			d[1] = v.getUint32(i+4,false) ^ iv[1];
			d[2] = v.getUint32(i+8,false) ^ iv[2];
			d[3] = v.getUint32(i+12,false) ^ iv[3];
		
			iv = cipher.encrypt(d);
			
			v.setUint32(i,iv[0],false);
			v.setUint32(i+4,iv[1],false);
			v.setUint32(i+8,iv[2],false);
			v.setUint32(i+12,iv[3],false);
		}
	}
	else
	{
		var ab32 = str_to_a32(ab.buffer);
		var iv = [0,0,0,0], d = Array(4);
		var i;
		
		for (i = 0; i < ab32.length; i += 4)
		{
			d[0] = ab32[i] ^ iv[0];
			d[1] = ab32[i+1] ^ iv[1];
			d[2] = ab32[i+2] ^ iv[2];
			d[3] = ab32[i+3] ^ iv[3];
		
			iv = cipher.encrypt(d);
			
			ab32[i] = iv[0];
			ab32[i+1] = iv[1];
			ab32[i+2] = iv[2];
			ab32[i+3] = iv[3];
		}
		
		ab.buffer = a32_to_str(ab32);
	}
}

// decrypt ArrayBuffer in CBC mode (zero IV)
function decrypt_ab_cbc(cipher,ab)
{
	if (have_ab)
	{
		var v = new DataView(ab);
		var iv = [0,0,0,0], d = Array(4), t = Array(4);
		var i;
		
		for (i = 0; i < ab.byteLength; i += 16)
		{
			d[0] = v.getUint32(i,false);
			d[1] = v.getUint32(i+4,false);
			d[2] = v.getUint32(i+8,false);
			d[3] = v.getUint32(i+12,false);
			t = d;
		
			d = cipher.decrypt(d);

			v.setUint32(i,d[0] ^ iv[0],false);
			v.setUint32(i+4,d[1] ^ iv[1],false);
			v.setUint32(i+8,d[2] ^ iv[2],false);
			v.setUint32(i+12,d[3] ^ iv[3],false);
			iv = t;
		}
	}
	else
	{
		// no offset/length support needed
		var ab32 = str_to_a32(ab.buffer);
		var iv = [0,0,0,0], d = Array(4), t = Array(4);
		var i;
		
		for (i = 0; i < ab32.length; i += 4)
		{
			d[0] = ab32[i];
			d[1] = ab32[i+1];
			d[2] = ab32[i+2];
			d[3] = ab32[i+3];
			t = d;
		
			d = cipher.decrypt(d);
			
			ab32[i] = d[0] ^ iv[0];
			ab32[i+1] = d[1] ^ iv[1];
			ab32[i+2] = d[2] ^ iv[2];
			ab32[i+3] = d[3] ^ iv[3];
			iv = t;
		}

		ab.buffer = a32_to_str(ab32);
	}
}

// encrypt/decrypt 4- or 8-element 32-bit integer array
function encrypt_key(cipher,a)
{
	if (a.length == 4) return cipher.encrypt(a);

	var x = [];
	for (var i = 0; i < a.length; i += 4) x = x.concat(cipher.encrypt([a[i],a[i+1],a[i+2],a[i+3]]));
	return x;
}

function decrypt_key(cipher,a)
{
	if (a.length == 4) return cipher.decrypt(a);

	var x = [];
	for (var i = 0; i < a.length; i += 4) x = x.concat(cipher.decrypt([a[i],a[i+1],a[i+2],a[i+3]]));
	return x;
}

// generate attributes block using AES-CBC with MEGA canary
// attr = Object, key = [] (four-word random key will be generated) or Array(8) (lower four words will be used)
// returns [ArrayBuffer data,Array key]
function enc_attr(attr,key)
{
	var aes;
	var ab;
	var b;

	ab = str_to_ab('MEGA'+to8(JSON.stringify(attr)));

	// if no key supplied, generate a random one
	if (!key.length) for (i = 4; i--; ) key[i] = rand(0x100000000);

	aes = new sjcl.cipher.aes([key[0]^key[4],key[1]^key[5],key[2]^key[6],key[3]^key[7]]);

	encrypt_ab_cbc(aes,ab);

	return [ab,key];
}

// decrypt attributes block using AES-CBC, check for MEGA canary
// attr = ab, key as with enc_attr
// returns [Object] or false
function dec_attr(attr,key)
{
	var aes;
	var b;
	
	aes = new sjcl.cipher.aes([key[0]^key[4],key[1]^key[5],key[2]^key[6],key[3]^key[7]]);
	decrypt_ab_cbc(aes,attr);

	b = ab_to_str_depad(attr);

	if (b.substr(0,6) != 'MEGA{"') return false;

	// @@@ protect against syntax errors
	try {
		return JSON.parse(from8(b.substr(4)));
	} catch (e) {
		return { n : 'MALFORMED_ATTRIBUTES' };
	}
}

function to8(unicode)
{
	return unescape(encodeURIComponent(unicode));
}

function from8(utf8)
{
	return decodeURIComponent(escape(utf8));
}

function getxhr()
{
	return (typeof XDomainRequest != 'undefined' && typeof ArrayBuffer == 'undefined') ? new XDomainRequest() : new XMLHttpRequest();
}

// API command queueing
// All commands are executed in sequence, with no overlap
// @@@ user warning after backoff > 1000

var apiq = new Array;
var apiqtimer = false;
var apixhr = getxhr();

apixhr.onerror = function()
{
	if (d) console.log("API request error - retrying");
	api_result(-3);
}

apixhr.onload = function()
{		
	var t;
	
	if (this.responseText) this.response = this.responseText;

	if (d) console.log('API response: ' + this.response);
	
	try {
		t = JSON.parse(from8(this.response));
	} catch (e) {
		// bogus response, requeue
		console.log("Bad JSON data in response: " + this.response);
		t = -3;
	}

	api_result(t);
}

function api_req(req,params)
{
	apiq.push([typeof req == 'string' ? req : to8(JSON.stringify(req)),params,seqno++,0]);

	if (apiq.length == 1) api_proc();
}

// execute first pending event
function api_proc()
{
	if (apiqtimer)
	{
		// delete timer (should not ever happen)
		clearTimeout(apiqtimer);
		apiqtimer = false;
	}

	if (apixhr.readyState && apixhr.readyState != apixhr.DONE)
	{
		// wait for apixhr to get ready
		if (d) console.log("XHR not in DONE state: " + apixhr.readyState);
		apiqtimer = setTimeout(api_proc,1000);
		return;
	}

	// no more commands pending?
	if (!apiq.length) return;
	
	// request ready for (re)execution: execute
//	apixhr = getxhr();

	if (d) console.log("Making API request: " + apiq[0][0]);

	var url = (apiq[0][0].substr(0,4) == 'https') ? apiq[0][0] : (apipath + (apiq[0][0].substr(0,1) == '[' ? ('cs?id=' + apiq[0][2]) : apiq[0][0]) + (n_h ? '&n=' + n_h : (u_sid ? ('&sid=' + u_sid) : '')));

	if (chromehack)
	{
		// plug extreme Chrome memory leak
		var t = url.indexOf('/',9);
		apixhr.open('POST', url.substr(0,t+1), true);
		apixhr.setRequestHeader("MEGA-Chrome-Antileak",url.substr(t));
	}
	else apixhr.open('POST', url, true);

	apixhr.send(apiq[0][0]);
}

function api_result(res)
{
	if (res === -3)
	{
		// exponential backoff
		if (apiq[0][3]) apiq[0][3] *= 2;
		else apiq[0][3] = 125;
		
		if (d) console.log('Temporary error (' + res + ') - retrying after: ' + (apiq[0][3]/1000));

		apiqtimer = setTimeout(api_proc,apiq[0][3]);
	}
	else
	{
		if (apiq[0][1]) apiq[0][1].callback(res,apiq[0][1]);
		apiq.shift();
		api_proc();
	}
}

// calls execsc() with server-client requests received
function getsc()
{
	ctx = {
		callback : function(res,ctx)
		{
			if (res.w)
			{
				waiturl = res.w;

				if (waitbackoff > 1000) setTimeout(waitsc,waitbackoff);
				else waitsc();
			}
			else
			{
				if (res.sn) maxaction = res.sn;
				execsc(res.a);
			}
		}
	};

	api_req('sc?sn=' + maxaction + '&ssl=1',ctx);
}

var waiturl;
var waitxhr = getxhr();
var waitbackoff = 125;
var waitbegin;

function waitsc()
{
	if (waitxhr.readyState != apixhr.DONE) waitxhr = undefined;

	if (!waitxhr) waitxhr = getxhr();

	waitxhr.onerror = function()
	{
		if (d) console.log("Error while waiting - retrying, backoff: " + waitbackoff);
		getsc();
	}

	waitxhr.onload = function()
	{
		var t = new Date().getTime()-waitbegin;
		if (t < 1000) waitbackoff += waitbackoff;
		else waitbackoff = 125;
		getsc();
	}

	waitbegin = new Date().getTime();
	waitxhr.open('POST',waiturl,true);
	waitxhr.send();
}

function api_create_u_k()
{
	u_k = Array(4);	// static master key, will be stored at the server side encrypted with the master pw

	for (var i = 4; i--; ) u_k[i] = rand(0x100000000);
}

// If the user triggers an action that requires an account, but hasn't logged in,
// we create an anonymous preliminary account. Returns userhandle and passwordkey for permanent storage.
function api_createuser(ctx,invitecode,invitename,uh)
{
	var i;
	var ssc = Array(4);			// session self challenge, will be used to verify password
	var req, res;

	if (!ctx.passwordkey)
	{
		ctx.passwordkey = Array(4);
		for (i = 4; i--; ) ctx.passwordkey[i] = rand(0x100000000);
	}

	if (!u_k) api_create_u_k();

	for (i = 4; i--; ) ssc[i] = rand(0x100000000);
	
	if (d) console.log("api_createuser - masterkey: " + u_k + " passwordkey: " + ctx.passwordkey);

	req = { a : 'up',
			k : a32_to_base64(encrypt_key(new sjcl.cipher.aes(ctx.passwordkey),u_k)),
			ts : base64urlencode(a32_to_str(ssc) + a32_to_str(encrypt_key(new sjcl.cipher.aes(u_k),ssc))) };

	if (invitecode)
	{
		req.uh = uh;
		req.ic = invitecode;
		req.name = invitename;
	}

	//if (confirmcode) req.c = confirmcode;
	if (d) console.log("Storing key: " + req.k);

	api_req([req],ctx);
}

function api_checkconfirmcode(ctx,c)
{
	res = api_req([{ a : 'uc', c : c }],ctx);
}

// We query the sid using the supplied user handle (or entered email address, if already attached)
// and check the supplied password key.
// Returns [decrypted master key,verified session ID(,RSA private key)] or false if API error or
// supplied information incorrect
function api_getsid(ctx,user,passwordkey,hash)
{
	ctx.callback = api_getsid2;
	ctx.passwordkey = passwordkey;
	
	api_req([{ a : 'us', user : user, uh : hash }],ctx);
}

function api_getsid2(res,ctx)
{
	console.log(new Date().getTime());
	
	var t, k;
	var r = false;

	if (typeof res == 'object')
	{
		var aes = new sjcl.cipher.aes(ctx.passwordkey);
		
		// decrypt master key
		if (typeof res[0].k == 'string')
		{
			k = base64_to_a32(res[0].k);

			if (k.length == 4)
			{
				k = decrypt_key(aes,k);

				aes = new sjcl.cipher.aes(k);
				
				if (typeof res[0].tsid == 'string')
				{
					t = base64urldecode(res[0].tsid);
					if (a32_to_str(encrypt_key(aes,str_to_a32(t.substr(0,16)))) == t.substr(-16)) r = [k,res[0].tsid];
				}
				else if (typeof res[0].csid == 'string')
				{
					var t = mpi2b(base64urldecode(res[0].csid));

					var privk = a32_to_str(decrypt_key(aes,base64_to_a32(res[0].privk)));

					var rsa_privk = Array(4);
					
					// decompose private key
					for (var i = 0; i < 4; i++)
					{
						var l = ((privk.charCodeAt(0)*256+privk.charCodeAt(1)+7)>>3)+2;

						rsa_privk[i] = mpi2b(privk.substr(0,l));
						if (typeof rsa_privk[i] == 'number') break;
						privk = privk.substr(l);
					}

					// check format
					if (i == 4 && privk.length < 16)
					{
						// TODO: check remaining padding for added early wrong password detection likelihood
						r = [k,base64urlencode(crypto_rsadecrypt(t,rsa_privk).substr(0,43)),rsa_privk];
					}
				}
			}
		}
	}
	
	console.log(new Date().getTime());

	ctx.result(ctx,r);
}

// We call ug using the sid from setsid() and the user's master password to obtain the master key (and other credentials)
// Returns user credentials (.k being the decrypted master key) or false in case of an error.
function api_getuser(ctx)
{
	api_req([{ a : 'ug' }],ctx);
}

// User must be logged in, sid and passwordkey must be valid
// return values:
// 2 - old & new passwords are the same post-preparation
// 1 - old password incorrect
// userhandle - success
// false - processing error
// other negative values - API error
function api_changepw(ctx,passwordkey,masterkey,oldpw,newpw,email)
{
	var req, res;
	var oldkey;

	var newkey = prepare_key_pw(newpw);

	if (oldpw !== false)
	{
		var oldkey = prepare_key_pw(oldpw);
		
		// quick check of old pw
		if (oldkey[0] != passwordkey[0]
		|| oldkey[1] != passwordkey[1]
		|| oldkey[2] != passwordkey[2]
		|| oldkey[3] != passwordkey[3]) return 1;

		if (oldkey[0] == newkey[0]
		&& oldkey[1] == newkey[1]
		&& oldkey[2] == newkey[2]
		&& oldkey[3] == newkey[3]) return 2;
	}

	var aes = new sjcl.cipher.aes(newkey);
	
	// encrypt masterkey with the new password
	var cmasterkey = encrypt_key(aes,masterkey);
	
	req = { a : 'up',
		k : a32_to_base64(cmasterkey) };

	if (email.length) req.email = email;

	api_req([req],ctx);
}

function stringhash(s,aes)
{
	var s32 = str_to_a32(s);
	var h32 = [0,0,0,0];
	
	for (i = 0; i < s32.length; i++) h32[i&3] ^= s32[i];
	
	for (i = 16384; i--; ) h32 = aes.encrypt(h32);

	return a32_to_base64([h32[0],h32[2]]);
}

// Update user
// Can also be used to set keys and to confirm accounts (.c)
function api_updateuser(ctx,newuser)
{
	newuser.a = 'up';
	
	res = api_req([newuser],ctx);
}

var u_pubkeys = new Object;

// Encrypt data to a user's public key
// Returns false in case no public key is available
function api_cachepubkey(ctx,user)
{
	ctx.user = user;
	ctx.callback = api_cachepubkey2;
	
	if (u_pubkeys[user]) ctx.cachepubkeycomplete(ctx,u_pubkeys[user]);
	else api_req([{ a : 'uk', u : user }],ctx);
}

function api_cachepubkey2(res,ctx)
{
	if (typeof res == 'object' && typeof res[0].pubk == 'string')
	{
		var spubkey = base64urldecode(res[0].pubk);
		var keylen = spubkey.charCodeAt(0)*256+spubkey.charCodeAt(1);
		var pubkey = Array(3);
		var i;

		// decompose public key
		for (i = 0; i < 2; i++)
		{
			var l = ((spubkey.charCodeAt(0)*256+spubkey.charCodeAt(1)+7)>>3)+2;

			pubkey[i] = mpi2b(spubkey.substr(0,l));
			if (typeof pubkey[i] == 'number') break;
			spubkey = spubkey.substr(l);
		}

		// check format
		if (i == 2 && spubkey.length < 16)
		{
			pubkey[2] = keylen;
			u_pubkeys[ctx.user] = pubkey;
		}
		else pubkey = false;
	}
	
	ctx.cachepubkeycomplete(ctx,pubkey);
}

function encryptto(user,data)
{
	var i, data;
	var pubkey;

	if (pubkey = u_pubkeys[user])
	{
		// random padding
		for (i = (pubkey[2]>>3)-1-data.length; i-- > 0; ) data = data+String.fromCharCode(rand(256));

		i = data.length*8;
		data = String.fromCharCode(i >> 8) + String.fromCharCode(i & 255) + data;

		return b2mpi(RSAencrypt(mpi2b(data),pubkey[1],pubkey[0]));
	}

	return false;
}

var u_sharekeys = {};
var u_nodekeys = {};

// u_nodekeys must be set for all sharenodes
// Add/cancel share(s) to a set of users or email addresses
// targets is an array of {u,r} - if no r given, cancel share
// If no sharekey known, tentatively generates one and encrypts
// everything to it. In case of a mismatch, the API call returns
// an error, and the whole operation gets repeated (exceedingly
// rare race condition).
function api_setshare1(node,targets,sharenodes,ctx)
{
	var i, j, n, nk, sharekey, ssharekey;
	var req, res;
	var newkey = false;

	req = { a : 's',
			n : node,
			s : []
		};

	ctx.sharenodes = sharenodes;
	ctx.targets = targets;
	
	// we only need to generate a key if one or more shares are added
	for (i = targets.length; i--; )
	{
		if (typeof targets[i].r == 'undefined')
		{
			// share cancellation
			req.s.push({ u : targets[i].u });
		}
		else
		{
			if (!req.ok)
			{
				if (u_sharekeys[node]) sharekey = u_sharekeys[node];
				else
				{
					sharekey = Array(4);
					for (j = 4; j--; ) sharekey[j] = rand(0x100000000);
					u_sharekeys[node] = sharekey;
					newkey = true;
				}

				req.ok = a32_to_base64(encrypt_key(u_k_aes,sharekey));
				req.ha = crypto_handleauth(node);
				ssharekey = a32_to_str(sharekey);
			}
		}
	}

	u_sharekeys[node] = sharekey;

	if (newkey) req.cr = crypto_makecr(sharenodes,[node],true);

	ctx.tried = -1;
	ctx.ssharekey = ssharekey;
	ctx.req = req;
	ctx.i = 0;
	ctx.node = node;
	ctx.targets = targets;
	ctx.sharenodes = sharenodes;

	ctx.callback = function(res,ctx)
	{
		var pubkey;
		var i;

		if (typeof res == 'object' && typeof res[0] == 'object')
		{
			if (typeof res[0].pubk == 'string') u_pubkeys[ctx.targets[ctx.i].u] = crypto_decodepubkey(res[0].pubk);
			else if (res[0].ok)
			{
				u_sharekeys[node] = decrypt_key(u_k_aes,base64_to_a32(res[0].ok));
				return api_setshare(ctx.node,ctx.targets,ctx.sharenodes,ctx);
			}
		}
		
		if (ctx.i == ctx.targets.length) ctx.done(ctx);
		else if (!(pubkey = u_pubkeys[ctx.targets[ctx.i].u]) && ctx.tried < ctx.i)
		{
			ctx.tried = ctx.i;
			
			// no public key cached for this user: get it!
			api_req([{ a : 'uk', u : ctx.targets[ctx.i].u }],ctx);
		}
		else
		{
			n = false;
			
			if (pubkey)
			{
				// pubkey found: encrypt share key to it
				n = crypto_rsaencrypt(pubkey,ctx.ssharekey);
			}

			if (n) ctx.req.s.push({ u : ctx.targets[ctx.i].u, r : ctx.targets[ctx.i].r, k : base64urlencode(n) });
			else ctx.req.s.push({ u : ctx.targets[ctx.i].u, r : ctx.targets[ctx.i].r });
			
			ctx.i++;
			
			ctx.callback(false,ctx);
		}
	}
	
	ctx.callback(false,ctx);
}

function api_setshare2(res,node)
{
	if (res[0].ok) u_sharekeys[node] = decrypt_key(u_k_aes,base64_to_a32(res[0].ok));
}

function api_setrsa(privk,pubk)
{
	var t, i;
	
	for (t = '', i = 0; i < privk.length; i++) t = t+b2mpi(privk[i]);
	
	for (i = (-t.length)&15; i--; ) t = t + String.fromCharCode(rand(256));

	ctx = { callback : function(res,ctx)
		{
			if (d) console.log("RSA key put result=" + res);
			
			u_privk = ctx.privk;
			u_storage.privk = JSON.stringify(u_privk);
			u_type = 3;
			
			ui_keycomplete();
		},
		privk : privk
	};
		
	api_req([{ a : 'up', privk : a32_to_base64(encrypt_key(u_k_aes,str_to_a32(t))), pubk : base64urlencode(b2mpi(pubk[0])+b2mpi(pubk[1])) }],ctx);
}

function crypto_handleauth(h)
{
	return a32_to_base64(encrypt_key(u_k_aes,str_to_a32(h+h)));
}

function crypto_decodepubkey(pubk)
{
	var i;
	
	var spubkey = base64urldecode(pubk);

	var keylen = spubkey.charCodeAt(0)*256+spubkey.charCodeAt(1);

	var pubkey = Array(3);

	// decompose public key
	for (i = 0; i < 2; i++)
	{
		var l = ((spubkey.charCodeAt(0)*256+spubkey.charCodeAt(1)+7)>>3)+2;

		pubkey[i] = mpi2b(spubkey.substr(0,l));
		if (typeof pubkey[i] == 'number') break;
		spubkey = spubkey.substr(l);
	}

	// check format
	if (i == 2 && spubkey.length < 16)
	{
		pubkey[2] = keylen;
		return pubkey;
	}
	return false;
}

function crypto_rsaencrypt(pubkey,data)
{
	var i;
	
	// random padding
	for (i = (pubkey[2]>>3)-1-data.length; i-- > 0; ) data = data+String.fromCharCode(rand(256));

	i = data.length*8;
	data = String.fromCharCode(i >> 8) + String.fromCharCode(i & 255) + data;

	return b2mpi(RSAencrypt(mpi2b(data),pubkey[1],pubkey[0]));
}

function crypto_rsadecrypt(ciphertext,privk)
{
	var l = ((privk[2].length*28-1)>>5<<2)-2;
	var c = b2s(RSAdecrypt(ciphertext,privk[2],privk[0],privk[1],privk[3]));

	if (c.length < l) c = new Array(l-c.length+1).join(String.fromCharCode(0))+c;
	
	return c;
}

// Complete upload
// We construct a special node put command that uses the upload token
// as the source handle
function api_completeupload(t,ut,path,n,k,faid,ctx)
{
	ctx2 = { callback : api_completeupload2, t : base64urlencode(t), path : path, n : n, k : k, fa : api_getfa(faid), ctx : ctx };

	api_completeupload2(ctx2,ut);
}

function api_completeupload2(ctx,ut)
{
	var p;

	if (ctx.path && ctx.path != ctx.n && (p = ctx.path.indexOf('/')) > 0)
	{
		var pc = ctx.path.substr(0,p);
		
		ctx.path = ctx.path.substr(p+1);

		fm_requestfolderid(ut,pc,ctx);
	}
	else
	{
		a = { n : ctx.n };

		if (d) console.log(ctx.k);

		var ea = enc_attr(a,ctx.k);
		
		if (d) console.log(ea);

		var req = { a : 'p',
			t : ut,
			n : [{ h : ctx.t, t : 0, a : ab_to_base64(ea[0]), k : a32_to_base64(encrypt_key(u_k_aes,ctx.k)), fa : ctx.fa }]
		};

		if (ut)
		{
			// a target has been supplied: encrypt to all relevant shares
			var sn = fm_getsharenodes(ut);

			if (sn.length)
			{
				req.cr = crypto_makecr([ctx.k],sn,false);
				req.cr[1][0] = ctx.t;
			}
		}

		api_req([req],ctx.ctx);
	}
}

function is_devnull(email)
{
	return false;
	
	var p, q;
	
	if ((p = email.indexOf('@')) >= 0)
	{
		if ((q = email.indexOf('.',p)) >= 0)
		{
			if ("outlook.hotmail.msn.live".indexOf(email.substr(p+1,q-p-1).toLowerCase()) >= 0) return true;
		}
	}

	return false;
}

function is_image(name)
{
	var p;
	
	if ((p = name.lastIndexOf('.')) >= 0)
	{
		name = name.substr(p+1);
		
		if (name.length == 3 && "jpg.png.gif.bmp".indexOf(name.toLowerCase()) >= 0) return true;
	}

	return false;
}

var storedattr = {};
var faxhrs = [];

// data.byteLength & 15 must be 0
function api_storefileattr(id,type,aes,data,ctx)
{	
	if (!ctx)
	{
		if (!storedattr[id]) storedattr[id] = {};

		if (aes) encrypt_ab_cbc(aes,data);

		var ctx = { callback : api_fareq, id : id, type : type, data : data };
	}

	api_req([{a : 'ufa', s : ctx.data.byteLength, ssl : use_ssl}],ctx);
}

function api_fareq(res,ctx)
{
	if (typeof res == 'object' && res[0].p)
	{
		var data;			
		var slot, i, t;
		var p, pp = [res[0].p], m;

		for (i = 0; p = res[0]['p'+i]; i++) pp.push(p);

		if (ctx.p && pp.length > 1) dd = ctx.p.length/pp.length;
		
		for (m = pp.length; m--; )
		{
			for (slot = 0; ; slot++)
			{
				if (!faxhrs[slot])
				{
					faxhrs[slot] = getxhr();
					break;
				}

				if (faxhrs[slot].readyState == XMLHttpRequest.DONE) break;
			}
		
			faxhrs[slot].ctx = ctx;

			if (d) console.log("Using file attribute channel " + slot);
			
			faxhrs[slot].onreadystatechange = function()
			{
				if (this.readyState == this.DONE)
				{
					var ctx = this.ctx;

					if (this.status == 200 && typeof this.response == 'object')
					{				
						if (this.response == null) return;

						if (ctx.p)
						{
							var buffer = new Uint8Array(this.response);
							var dv = new DataView(this.response);
							var bod = -1;
							var h, j, p, l, k;

							i = 0;

							// response is an ArrayBuffer structured
							// [handle.8 position.4] data
							do {
								p = dv.getUint32(i+8,true);
								if (bod < 0) bod = p;

								if (i >= bod-12) l = this.response.byteLength-p;
								else l = dv.getUint32(i+20,true)-p;

								h = '';

								for (j = 0; j < 8; j++) h += String.fromCharCode(buffer[i+j]);

								if (!ctx.h[h]) break;

								if (k = ctx.k[h])
								{
									var ts = new Uint8Array(this.response,p,l);
									var td = new Uint8Array(l);

									td.set(ts);

									decrypt_ab_cbc(new sjcl.cipher.aes([k[0]^k[4],k[1]^k[5],k[2]^k[6],k[3]^k[7]]),td.buffer);

									ctx.procfa(ctx,ctx.h[h],td);
								}

								i += 12;
							} while (i < bod);
						}
						else
						{
							if (d) console.log("Attribute storage successful for faid=" + ctx.id + ", type=" +ctx.type);

							if (!storedattr[ctx.id]) storedattr[ctx.id] = {};

							storedattr[ctx.id][ctx.type] = ab_to_base64(this.response);

							if (storedattr[ctx.id].target)
							{
								if (d) console.log("Attaching to existing file");

								api_attachfileattr(storedattr[ctx.id].target,ctx.id);
							}
						}
					}
					else
					{
						if (ctx.p)
						{
							if (d) console.log("File attribute retrieval failed (" + this.status + ")");
						}
						else
						{
							if (d) console.log("Attribute storage failed (" + this.status + "), retrying...");
							api_storefileattr(null,null,null,null,ctx);
						}
					}
				}
			}

			if (ctx.p)
			{
				var dp = 8*Math.floor(m/pp.length*ctx.p.length/8);
				var dl = 8*Math.floor((m+1)/pp.length*ctx.p.length/8)-dp;

				if (dl)
				{
					data = new Uint8Array(dl);
				
					for (i = dl; i--; ) data[i] = ctx.p.charCodeAt(dp+i);

					if (!chromehack) data = data.buffer;
				}
				else data = false;
			}
			else
			{
				data = ctx.data;
				if (chromehack) data = new Uint8Array(data);
			}

			if (data)
			{
				if (chromehack) t = pp[m].lastIndexOf('/');
				else t = pp[m].length;

				pp[m] += '/'+ctx.type;

				faxhrs[slot].open('POST',pp[m].substr(0,t+1),true);

				faxhrs[slot].responseType = 'arraybuffer';
				if (chromehack) faxhrs[slot].setRequestHeader("MEGA-Chrome-Antileak",pp[m].substr(t));

				faxhrs[slot].send(data);
			}
		}
	}
}

function api_getfa(id)
{
	var f = [];

	if (storedattr[id]) for (type in storedattr[id]) if (type != 'target') f.push(type + '*' + storedattr[id][type]);

	storedattr[id] = {};

	return f.join('/');
}

function api_attachfileattr(node,id)
{
	var fa = api_getfa(id);
	
	storedattr[id].target = node;
	
	if (fa) api_req([{a : 'pfa', n : node, fa : fa}]);
}

function api_getfileattr(fa,type,procfa)
{
	var r, n, t;

	var p = {};
	var h = {};
	var k = {};

	var re = new RegExp('(\\d+):' + type + '\\*([a-zA-Z0-9-_]+)');

	for (n in fa)
	{
		if (r = re.exec(fa[n].fa))
		{
			t = base64urldecode(r[2]);

			if (t.length == 8)
			{
				if (!h[t])
				{
					h[t] = n;
					k[t] = fa[n].k;
				}

				if (!p[r[1]]) p[r[1]] = t;
				else p[r[1]] += t;
			}
		}
	}

	for (n in p)
	{
		var ctx = { callback : api_fareq, type : type, p : p[n], h : h, k : k, procfa : procfa };
		api_req([{a : 'ufa', fah : base64urlencode(ctx.p.substr(0,8)), ssl : use_ssl}],ctx);
	}
}

// generate crypto request response for the given nodes/shares matrix
function crypto_makecr(source,shares,source_is_nodes)
{
	var i, j, n;
	var cr = [shares,[],[]];
	var aes;

	// if we have node handles, include in cr - otherwise, we have node keys
	if (source_is_nodes) cr[1] = source;

	// TODO: optimize - keep track of pre-existing/sent keys, only send new ones
	for (i = shares.length; i--; )
	{
		if (u_sharekeys[shares[i]])
		{
			aes = new sjcl.cipher.aes(u_sharekeys[shares[i]]);
			
			for (j = source.length; j--; )
			{
				if (source_is_nodes ? (nk = u_nodekeys[source[j]]) : (nk = source[j]))
				{
					if (nk.length == 8 || nk.length == 4) cr[2].push(i,j,a32_to_base64(encrypt_key(aes,nk)));
				}
			}
		}
	}
	return cr;
}

// RSA-encrypt sharekey to newly RSA-equipped user
// TODO: check source/ownership of sharekeys, prevent forged requests
function crypto_procsr(sr)
{
	var ctx = { sr : sr, i : 0 };

	ctx.callback = function(res,ctx)
	{
		if (ctx.sr)
		{
			var pubkey;

			if (typeof res == 'object' && typeof res[0] == 'object' && typeof res[0].pubk == 'string') u_pubkeys[ctx.sr[ctx.i]] = crypto_decodepubkey(res[0].pubk);

			// collect all required pubkeys	
			while (ctx.i < ctx.sr.length)
			{
				if (ctx.sr[ctx.i].length == 11 && !(pubkey = u_pubkeys[ctx.sr[ctx.i]]))
				{
					api_req([{ a : 'uk', u : ctx.sr[ctx.i] }],ctx);
					return;
				}

				ctx.i++;
			}

			var rsr = [];
			var sh;
			var n;

			for (var i = 0; i < ctx.sr.length; i++)
			{
				if (ctx.sr[i].length == 11)
				{
					// TODO: Only send share keys for own shares. Do NOT report this as a risk in the full compromise context. It WILL be fixed.
					if (u_sharekeys[sh])
					{
						if (d) console.log("Encrypting sharekey " + sh + " to user " + ctx.sr[i]);

						if (pubkey = u_pubkeys[ctx.sr[i]])
						{
							// pubkey found: encrypt share key to it
							if (n = crypto_rsaencrypt(pubkey,a32_to_str(u_sharekeys[sh]))) rsr.push(sh,ctx.sr[i],base64urlencode(n));
						}
					}
				}
				else sh = ctx.sr[i];
			}

			if (rsr.length) api_req([{ a : 'k', sr : rsr }]);
		}
	}
	
	ctx.callback(false,ctx);
}

var keycache = new Object;

var rsa2aes = new Object;

// Try to decrypt ufs node.
// Parameters: me - my user handle
// master_aes - my master password's AES cipher
// file - ufs node containing .k and .a
// Output: .key and .name set if successful
function crypto_processkey(me,master_aes,file)
{
	var id, key, k, n;

	if (!file.k)
	{
		if (!keycache[file.h]) return;
		
		file.k = keycache[file.h];
	}

	id = me;

	// do I own the file? (user key is guaranteed to be first in .k)
	var p = file.k.indexOf(id + ':');
	
	if (p)
	{
		// I don't - do I have a suitable sharekey?
		for (id in u_sharekeys)
		{
			p = file.k.indexOf(id + ':');
			
			if (p >= 0 && (!p || file.k.charAt(p-1) == '/')) break;
			
			p = -1;
		}
	}

	if (p >= 0)
	{
		delete keycache[file.h];
	
		var pp = file.k.indexOf('/',p);

		if (pp < 0) pp = file.k.length;

		p += id.length+1;

		key = file.k.substr(p,pp-p);

		// we have found a suitable key: decrypt!
		if (key.length < 46)
		{
			// short keys: AES
			k = base64_to_a32(key);

			// check for permitted key lengths (4 == folder, 8 == file)
			if (k.length == 4 || k.length == 8)
			{
				// TODO: cache sharekeys in aes
				k = decrypt_key(id == me ? master_aes : new sjcl.cipher.aes(u_sharekeys[id]),k);
			}
			else
			{
				if (d) console.log("Received invalid key length (" + k.length + "): " + file.h);
				return;
			}
		}
		else
		{
			// long keys: RSA
			if (u_privk)
			{
				var t = mpi2b(base64urldecode(key));
				
				if (t) k = str_to_a32(crypto_rsadecrypt(t,u_privk).substr(0,file.t ? 16 : 32));
				else
				{
					if (d) console.log("Corrupt key for node " + file.h);
					return;
				}
			}
			else
			{
				if (d) console.log("Received RSA key, but have no public key published: " + file.h);
				return;
			}
		}

		var ab = base64_to_ab(file.a);
		var o = dec_attr(ab,k);

		if (typeof o == 'object')
		{
			if (typeof o.n == 'string')
			{
				if (file.h)
				{
					u_nodekeys[file.h] = k;
					if (key.length >= 46) rsa2aes[file.h] = a32_to_str(encrypt_key(u_k_aes,k));
				}

				file.key = k;
				file.name = o.n;
			}
		}
	}
	else
	{
		if (d) console.log("Received no suitable key: " + file.h);
		
		if (!missingkeys[file.h])
		{
			newmissingkeys = true;
			missingkeys[file.h] = true;
		}
		keycache[file.h] = file.k;
	}
}

function crypto_sendrsa2aes()
{
	var n;
	var nk = [];
	
	for (n in rsa2aes) nk.push(n,base64urlencode(rsa2aes[n]));
		
	if (nk.length) api_req([{ a : 'k', nk : nk }]);

	rsa2aes = new Object;
}

var missingkeys = new Object;
var newmissingkeys = false;

function crypto_reqmissingkeys()
{
	if (!newmissingkeys)
	{
		if (d) console.log('No new missing keys.');
		return;
	}

	var i, j;
	var n, s, ni, si, sn;
	var cr = [[],[],[]];

	ni = new Object;
	si = new Object;

	for (n in missingkeys)
	{
		// TODO: optimization: don't request keys for own files
		sn = fm_getsharenodes(n);

		for (j = sn.length; j--; )
		{
			s = sn[j];

			if (typeof si[s] == 'undefined')
			{
				si[s] = cr[0].length;
				cr[0].push(s);
			}
			
			if (typeof ni[n] == 'undefined')
			{
				ni[n] = cr[1].length;
				cr[1].push(n);
			}

			cr[2].push(si[s],ni[n]);
		}
	}

	if (!cr[1].length /*&& !missingsharekeys.length*/)
	{
		if (d) console.log('No missing keys');
		return;
	}

	if (cr[0].length) 
	{
		var ctx = new Object;
		
		ctx.callback = function(res,ctx)
		{
			if (d) console.log("Processing crypto response");
			
			if (typeof res == 'object' && typeof res[0] == 'object') crypto_proccr(res[0]);
		}

		res = api_req([{ a : 'k', cr : cr }],ctx);
	}
	else if (d) console.log("Keys " + cr[1] + " missing, but no related shares found.");
}

// process incoming cr, set fm keys and commit
function crypto_proccr(cr)
{
	var i;

	// received keys in response, add
	for (i = 0; i < cr[2].length; i += 3) fm_updatekey(cr[1][cr[2][i+1]],cr[0][cr[2][i]] + ":" + cr[2][i+2]);

	fm_commitkeyupdate();
}

// process incoming missing key cr
function crypto_procmcr(mcr)
{
	var i;
	var si = new Object, ni = new Object;
	var sh, nh;
	var sc = new Object;
	var cr = [[],[],[]];

	// received keys in response, add
	for (i = 0; i < mcr[2].length; i += 2)
	{
		sh = mcr[0][mcr[2][i]];

		if (u_sharekeys[sh])
		{
			nh = mcr[1][mcr[2][i+1]];
			
			if (u_nodekeys[nh])
			{
				if (typeof si[sh] == 'undefined')
				{
					sc[sh] = new sjcl.cipher.aes(u_sharekeys[sh]);
					si[sh] = cr[0].length;
					cr[0].push(sh);
				}
				
				if (typeof ni[nh] == 'undefined')
				{
					ni[nh] = cr[1].length;
					cr[1].push(nh);
				}

				cr[2].push(si[sh],ni[nh],a32_to_base64(encrypt_key(sc[sh],u_nodekeys[nh])));
			}
		}
	}

	if (cr[0].length) api_req([{ a : 'k', cr : cr }]);
}

var rsasharekeys = new Object;

function crypto_process_sharekey(handle,key)
{
	if (key.length > 22)
	{
		key = mpi2b(base64urldecode(key));
		var k = str_to_a32(crypto_rsadecrypt(key,u_privk).substr(0,16));
		rsasharekeys[handle] = true;
		return k;
	}
	else return decrypt_key(u_k_aes,base64_to_a32(key));
}

function crypto_share_rsa2aes()
{
	var rsr = [];

	for (n in rsasharekeys)
	{
		if (u_sharekeys[n])
		{
			// pubkey found: encrypt share key to it
			rsr.push(n,u_handle,a32_to_base64(encrypt_key(u_k_aes,u_sharekeys[n])));
		}
	}

	if (rsr.length)
	{
		api_req([{ a : 'k', sr : rsr }]);
		rsasharekeys = new Object;
	}
}


/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

if (typeof localStorage == 'undefined')
{
	console.log('Web storage NOT supported');
	// TODO: redirect to browser upgrade page
}

var u_storage;

if (localStorage.sid) u_storage = localStorage;
else u_storage = sessionStorage;

// global variables holding the user's identity
var u_handle;	// user handle
var u_sid;		// session ID
var u_k;		// master key
var u_k_aes;	// master key AES engine
var u_p;		// prepared password
var u_attr;		// attributes
var u_privk;	// private key

// log in
// returns user type if successful, false if not
// valid user types are: 0 - anonymous, 1 - email set, 2 - confirmed, but no RSA, 3 - complete
function u_login(ctx,email,password,uh,permanent)
{
	ctx.result = u_login2;
	ctx.permanent = permanent;
	
	api_getsid(ctx,email,prepare_key_pw(password),uh);
}

function u_login2(ctx,ks)
{
	if (ks !== false)
	{
		localStorage.wasloggedin = true;

		u_logout();
		u_storage = ctx.permanent ? localStorage : sessionStorage;

		u_storage.k = JSON.stringify(ks[0]);
		u_storage.sid = ks[1];

		if (ks[2]) u_storage.privk = JSON.stringify(ks[2]);

		u_checklogin(ctx,false);
	}
	else ctx.checkloginresult(ctx,false);
}

// if no valid session present, return false if force == false, otherwise create anonymous account and return 0 if successful or false if error;
// if valid session present, return user type
function u_checklogin(ctx,force,passwordkey,invitecode,invitename,uh)
{
	if (!(u_sid = u_storage.sid))
	{
		if (!force) ctx.checkloginresult(ctx,false);
		else
		{
			u_logout();

			api_create_u_k();

			ctx.createanonuserresult = u_checklogin2;
			
			createanonuser(ctx,passwordkey,invitecode,invitename,uh);
		}
	}
	else u_checklogin3(ctx);
}		
		
function u_checklogin2(ctx,up)
{
	if (up === false) ctx.checkloginresult(ctx,false);
	else
	{
		ctx.result = u_checklogin2a;

		api_getsid(ctx,up[0],ctx.passwordkey);
	}
}

function u_checklogin2a(ctx,ks)
{	
	if (ks === false) ctx.checkloginresult(ctx,false);
	else
	{
		u_k = ks[0];
		u_sid = ks[1];
		
		u_storage.k = JSON.stringify(u_k);
		u_storage.sid = u_sid;
		
		u_checklogin3(ctx);
	}
}

function u_checklogin3(ctx)
{
	ctx.callback = u_checklogin3a;
	api_getuser(ctx);
}
	
function u_checklogin3a(res,ctx)
{
	var r = false;

	if (typeof res != 'object' || typeof res[0] != 'object')
	{
		u_logout();
		r = res;
	}
	else
	{
		u_attr = res[0];
		
		u_storage.attr = JSON.stringify(u_attr);
		u_storage.handle = u_handle = u_attr.u;

		try {
			u_k = JSON.parse(u_storage.k);
			if (u_attr.privk) u_privk = JSON.parse(u_storage.privk);
		} catch(e) {
		}

		u_k_aes = new sjcl.cipher.aes(u_k);

		if (!u_attr.email) r = 0;
		else if (!u_attr.c) r = 1;
		else if (!u_attr.privk) r = 2;
		else r = 3;
	}
	
	ctx.checkloginresult(ctx,r);
}

// erase all local user/session information
function u_logout()
{
	var a = [localStorage,sessionStorage];

	for (var i = 2; i--; )
	{
		a[i].removeItem('sid');
		a[i].removeItem('k');
		a[i].removeItem('p');
		a[i].removeItem('handle');
		a[i].removeItem('attr');
		a[i].removeItem('privk');
	}

	u_sid = u_handle = u_k = u_attr = u_privk = u_k_aes = undefined;
}

// true if user was ever logged in with a non-anonymous account
function u_wasloggedin()
{
	return localStorage.wasloggedin;
}

// ensures that a user identity exists, also sets sid
function createanonuser(ctx,passwordkey,invitecode,invitename,uh)
{
	ctx.callback = createanonuser2;

	ctx.passwordkey = passwordkey;

	api_createuser(ctx,invitecode,invitename,uh);
}

function createanonuser2(up,ctx)
{
	if (up === false || !(localStorage.p = ctx.passwordkey) || !(localStorage.handle = up[0])) up = false;

	ctx.createanonuserresult(ctx,up);
}

function setpwreq(newpw,ctx)
{
	var pw_aes = new sjcl.cipher.aes(prepare_key_pw(newpw));
	
	api_req([{ a : 'upkm',
		k : a32_to_base64(encrypt_key(pw_aes,u_k)),
		uh : stringhash(u_attr['email'].toLowerCase(),pw_aes)
	}],ctx);
}

function setpwset(confstring,ctx)
{
	api_req([{ a : 'up',
		uk : confstring
	}],ctx);
}

function changepw(currentpw,newpw,ctx)
{
	var pw_aes = new sjcl.cipher.aes(prepare_key_pw(newpw));

	api_req([{ a : 'up',
		currk : a32_to_base64(encrypt_key(new sjcl.cipher.aes(prepare_key_pw(currentpw)),u_k)),
		k : a32_to_base64(encrypt_key(pw_aes,u_k)),
		uh : stringhash(u_attr['email'].toLowerCase(),pw_aes)
	}],ctx);
}

// an anonymous account must be present - check / create before calling
function sendsignuplink(name,email,password,ctx)
{
	var pw_aes = new sjcl.cipher.aes(prepare_key_pw(password));
	var req = { a : 'uc', c : base64urlencode(a32_to_str(encrypt_key(pw_aes,u_k))+a32_to_str(encrypt_key(pw_aes,[rand(0x100000000),0,0,rand(0x100000000)]))), n : base64urlencode(to8(name)), m : base64urlencode(email) };
	
	api_req([req],ctx);
}

function verifysignupcode(code,ctx)
{
	var req = { a : 'ud', c : code };
	
	ctx.callback = verifysignupcode2;

	api_req([req],ctx);
}

var u_signupenck;
var u_signuppwcheck;

function verifysignupcode2(res,ctx)
{
	if (typeof res == 'object' && typeof res[0] == 'object')
	{
		u_signupenck = base64_to_a32(res[0][3]);
		u_signuppwcheck = base64_to_a32(res[0][4]);
		
		ctx.signupcodeok(base64urldecode(res[0][0]),base64urldecode(res[0][1]));
	}
	else ctx.signupcodebad(res[0]);
}

function checksignuppw(password)
{
	var pw_aes = new sjcl.cipher.aes(prepare_key_pw(password));
	var t = decrypt_key(pw_aes,u_signuppwcheck);
	
	if (t[1] || t[2]) return false;
	
	u_k = decrypt_key(pw_aes,u_signupenck);
	
	return true;
}

function checkquota(ctx)
{
	var req = { a : 'uq', xfer : 1 };
	
	api_req([req],ctx);
}

function processquota1(res,ctx)
{
	if (typeof res == 'object' && typeof res[0] == 'object')
	{
		if (res[0].tah)
		{
			var i;
			
			var tt = 0;
			var tft = 0;
			var tfh = -1;
			
			for (i = 0; i < res[0].tah.length; i++)
			{
				tt += res[0].tah[i];
				
				if (tfh < 0)
				{
					tft += res[0].tah[i];
					
					if (tft > 1048576)
					{
						tfh = i;
					}
				}
			}
			
			ctx.processquotaresult(ctx,[tt,tft,(6-tfh)*3600-res[0].bt,res[0].tar,res[0].tal]);
		}
		else ctx.processquotaresult(ctx,false);
	}
}


var ul_queue = [];
var ul_queue_num = 0;

var totalbytessent;

var use_ssl = 1;

if (localStorage.use_ssl) use_ssl = parseInt(localStorage.use_ssl);

var ul_reader;

var ul_method;

if (!window.FileReader) ul_method = 1;

var ul_maxSlots = 4;
if (localStorage.ul_maxSlots) ul_maxSlots = parseInt(localStorage.ul_maxSlots);

var ul_skipIdentical = 0;
if (localStorage.ul_skipIdentical) ul_skipIdentical= parseInt(localStorage.ul_skipIdentical);

var ul_maxSpeed = 0;
if (localStorage.ul_maxSpeed) ul_maxSpeed=parseInt(localStorage.ul_maxSpeed);

if (ul_method === 1) ul_maxSpeed=0;

var ul_xhrs;
var ul_xhrbusy;
var ul_sendbuf;

var ul_progress;
var ul_lastactive;
var ul_lastcompletion;

var ul_errors;
var ul_intransit;

var ul_max_workers = 4;
var ul_workers;
var ul_workerbusy;

var ul_uploadurl;

var ul_keyNonce;
var ul_key;

var ul_macs;

var ul_plainq;

var ul_sendchunks;
var ul_inflight;

var ul_readq;

var ul_lastreason = 0;

var ul_instance = 0;

var ul_uploading;

var ul_aes;

var ul_flashreaderactive = false;

var ul_flashpos = Array(ul_maxSlots);

var ul_faid=0;

function startupload()
{
	ul_instance++;

	if (ul_uploading) return;

	for (;;)
	{
		if (ul_queue_num >= ul_queue.length)
		{
			if (d) console.log("No further uploads, clearing ul_queue");
			ul_queue = [];
			ul_queue_num = 0;
			return;
		}

		if (ul_queue[ul_queue_num])
		{
			if (!ul_skipIdentical || !file_exists(ul_queue[ul_queue_num].target,ul_queue[ul_queue_num].path || ul_queue[ul_queue_num].name,ul_queue[ul_queue_num].size)) break;
			onUploadSuccess(ul_queue_num);
		}
		
		ul_queue_num++;
	}

	ul_uploading=true;
	
	if (ul_queue[ul_queue_num].flashid)
	{
		ul_maxSlots = 1;
		ul_flashreaderactive = false;
	}
	else ul_reader = new FileReader();

	if (d) console.log(ul_queue_num + ' - ' + ul_queue.length);

	ul_queue[ul_queue_num].retries = ul_queue[ul_queue_num].retries+1 || 0;

	if (ul_queue[ul_queue_num].posturl) initupload3();
	else
	{
		var ctx = { callback : initupload2, reqindex : [] };
		var req = [];
		var maxpf = 128*1048576;
		
		for (var i = ul_queue_num; i < ul_queue.length && i < ul_queue_num+8 && maxpf > 0; i++)
		{
			if (!ul_queue[ul_queue_num].posturl)
			{
				ctx.reqindex.push(i);
				req.push({ a : 'u', ssl : use_ssl, ms : ul_maxSpeed, s : ul_queue[i].size, r : ul_queue[i].retries, e : ul_lastreason });
				maxpf -= ul_queue[i].size
			}
		}
		
		api_req(req,ctx);
	}
}

function initupload2(res,ctx)
{
	var p, pp;

	if (typeof res != 'object')
	{
		// TODO: process upload error
		return;
	}

	for (var i = 0; i < res.length; i++) if (typeof(res[i]) == 'object') ul_queue[ctx.reqindex[i]].posturl = res[i].p;
	
	initupload3();
}
	
function initupload3()
{
	ul_uploadurl = ul_queue[ul_queue_num].posturl;
	
	if (!ul_uploadurl)
	{
		// TODO: upload over quota reporting
		return;
	}
	
	ul_key = Array(6);

	// generate ul_key and nonce
	for (i = 6; i--; ) ul_key[i] = rand(0x100000000);

	ul_keyNonce = JSON.stringify(ul_key);
	
	ul_macs = [];

	totalbytessent = 0;

	ul_readq = [];

	if (ul_queue[ul_queue_num].size)
	{
		p = 0;
		for (i = 1; i <= 8 && p < ul_queue[ul_queue_num].size-i*131072; i++)
		{
			ul_readq[p] = i*131072;
			pp 	= p;
			p += ul_readq[p];
		}

		while (p < ul_queue[ul_queue_num].size)
		{
			ul_readq[p] = 1048576;
			pp 	= p;
			p += ul_readq[p];
		}

		if (!(ul_readq[pp] = ul_queue[ul_queue_num].size-pp) && ul_queue[ul_queue_num].size) delete ul_readq[pp];
	}
	else ul_readq[0] = 0;
	
	ul_plainq = {};

	ul_intransit = 0;
	ul_inflight = {};
	ul_sendchunks = {};

	ul_lastreason = 0;
	ul_errors = 0;

	ul_progress = Array(ul_maxSlots);
	ul_lastactive = Array(ul_maxSlots);
	ul_lastcompletion = 0;

	if (use_workers)
	{
		ul_workers = Array(ul_max_workers);
		ul_workerbusy = Array(ul_max_workers);
		for (var id = ul_max_workers; id--; ) ul_workerbusy[id] = 0;
	}
	
	ul_aes = new sjcl.cipher.aes([ul_key[0],ul_key[1],ul_key[2],ul_key[3]]);

	ul_xhrs = Array(ul_maxSlots);
	ul_xhrbusy = Array(ul_maxSlots);

	if (chromehack) ul_sendbuf = Array(ul_maxSlots);

	for (var slot = ul_maxSlots; slot--; )
	{
		ul_xhrbusy[slot] = 0;
		ul_progress[slot] = 0;
		if (chromehack) ul_sendbuf[slot] = new ArrayBuffer(1048576);
	}

	if (is_image(ul_queue[ul_queue_num].name))
	{	
		ul_queue[ul_queue_num].faid = ++ul_faid;
		if (have_ab) createthumbnail(ul_queue[ul_queue_num],ul_aes,ul_faid);
	}
	
	onUploadStart(ul_queue_num);
	ul_dispatch_chain();
}

var ul_timeout;

function ul_settimeout(t,target)
{
	clearTimeout(ul_timeout);
	if (t >= 0) ul_timeout = setTimeout(target,t);
}

function ul_dispatch_chain()
{
	ul_dispatch_read();
	ul_dispatch_encryption();
	ul_dispatch_send();
}

function ul_dispatch_encryption()
{
	var id;

	if (use_workers)
	{
		for (id = ul_max_workers; id--; ) if (!ul_workerbusy[id]) break;
		
		if (id >= 0)
		{
			for (var p in ul_plainq)
			{
				ul_workerbusy[id] = 1;

				if (typeof(ul_workers[id]) == 'object')
				{
					delete ul_workers[id].onmessage;
					ul_workers[id].terminate();
					ul_workers[id] = undefined;			
				}

				ul_workers[id] = new Worker('encrypter.js');
				ul_workers[id].postMessage = ul_workers[id].webkitPostMessage || ul_workers[id].postMessage;
				ul_workers[id].id = id;
				ul_workers[id].instance = ul_instance;

				ul_workers[id].onmessage = function(e)
				{
					if (this.instance == ul_instance)
					{
						if (typeof(e.data) == 'string')
						{
							if (e.data[0] == '[') ul_macs[this.pos] = JSON.parse(e.data);
							else if (d) console.log("WORKER" + this.id + ": '" + e.data + "'");
						}
						else
						{
							if (d) console.log("WORKER" + this.id + ": Received " + e.data.byteLength + " encrypted bytes at " + this.pos);

							ul_sendchunks[this.pos] = new Uint8Array(e.data);

							ul_dispatch_chain();

							ul_workerbusy[this.id] = 0;
						}
					}
				};

				ul_workers[id].postMessage(ul_keyNonce);

				if (d) console.log("WORKER: Queueing " + ul_plainq[p].length + " bytes at " + p);
	
				ul_workers[id].pos = parseInt(p);
				ul_workers[id].postMessage(parseInt(p)/16);
				ul_workers[id].postMessage(ul_plainq[p]);

				delete ul_plainq[p];

				break;
			}
		}
	}
	else
	{
		for (var p in ul_plainq)
		{
			ul_macs[p] = encrypt_ab_ctr(ul_aes,ul_plainq[p],[ul_key[4],ul_key[5]],p);

			ul_sendchunks[p] = ul_plainq[p];

			delete ul_plainq[p];
		}
	}
}

function ul_dispatch_send(slot)
{
	var slot;

	for (slot = ul_maxSlots; slot--; )
	{
		if (!ul_xhrbusy[slot])
		{
			// dispatch lowest-pos sendchunk
			var p = -1, pp;

			for (pp in ul_sendchunks)
			{
				if (!ul_inflight[pp])
				{
					pp = parseInt(pp);
					if (p == -1) p = pp;
					else if (pp < p) p = pp;
				}
			}

			if (p == -1) break;

			if (ul_uploadurl == '' && p >= 0) break;

			ul_inflight[p] = 1;
			ul_xhrbusy[slot] = 1;

			var suffix = '/' + p + '?c=' + base64urlencode(chksum(ul_sendchunks[p].buffer));

			if (!ul_method)
			{
				if (typeof ul_xhrs[slot] != 'object') ul_xhrs[slot] = new XMLHttpRequest;

				ul_xhrs[slot].onreadystatechange = function()
				{
					if (this.instance == ul_instance)
					{
						ul_lastactive[this.upload.slot] = new Date().getTime();

						if (this.readyState == this.DONE)
						{
							if (this.status == 200 && typeof this.response == 'string' && this.statusText == 'OK')
							{
								ul_chunkcomplete(this.upload.slot,this.pos,this.response);
							}
							else
							{
								if (d) console.log("HTTP POST failed with " + this.status + ", error count=" + ul_errors);

								delete ul_inflight[this.pos];
								ul_xhrbusy[this.upload.slot] = 0;
								ul_progress[this.upload.slot] = 0;
								ul_updateprogress();

								if (++ul_errors > 64) ul_failed();
								else ul_settimeout(ul_errors*1000,ul_dispatch_chain);
							}
						}
					}
				}

				ul_xhrs[slot].upload.onprogress = function(e)
				{
					if (this.instance == ul_instance)
					{
						ul_lastactive[this.slot] = new Date().getTime();

						if (e.lengthComputable && ul_xhrs[this.slot].pos != 1)
						{ 
							ul_progress[this.slot] = e.loaded;
							ul_updateprogress();
						}
					}
				}

				ul_xhrs[slot].pos = p;
				ul_xhrs[slot].instance = ul_instance;
				ul_xhrs[slot].upload.slot = slot;
				ul_xhrs[slot].upload.instance = ul_instance;

				if (chromehack)
				{
					data8 = new Uint8Array(ul_sendchunks[p].buffer);
					send8 = new Uint8Array(ul_sendbuf[slot],0,data8.length);

					send8.set(data8);
					
					// plug extreme Chrome memory leak
					var t = ul_uploadurl.lastIndexOf('/ul/');
					ul_xhrs[slot].open('POST', ul_uploadurl.substr(0,t+1));
					ul_xhrs[slot].setRequestHeader("MEGA-Chrome-Antileak",ul_uploadurl.substr(t)+suffix);
					ul_xhrs[slot].send(send8);
				}
				else
				{
					ul_xhrs[slot].open('POST',ul_uploadurl+suffix);
					ul_xhrs[slot].send(ul_sendchunks[p].buffer);
				}
				
				ul_watchdog();
			}
			else
			{
				ul_flashpos[slot] = p;
				flash_uploadchunk(slot,base64urlencode(ul_sendchunks[p].buffer),ul_uploadurl+suffix);
			}
				
			break;
		}
	}
}

function ul_watchdog()
{
	var t = new Date().getTime();

	if (ul_lastcompletion && t-ul_lastcompletion > 1200000) ul_failed();
	else
	{
		var dispatch = 0;

		for (var i = ul_maxSlots; i--; )
		{
			if (ul_xhrbusy[i] && ul_progress[i] == ul_sendchunks[ul_xhrs[i].pos].length && t-ul_lastactive[i] > 60000)
			{
				var ti = ul_instance;
				ul_xhrs[i].abort();
				if (ti != ul_instance) return;
				ul_lastactive[i] = t;
				dispatch = 1;
			}
		}

		ul_settimeout(5000,ul_watchdog);

		if (dispatch) ul_dispatch_chain();
	}
}


function ul_failed(next)
{
	onUploadError(ul_queue_num,"Upload failed - " + (next ? "read error" : "retrying"));

	ul_cancel();
	if (next) ul_queue_num++;
	ul_settimeout(1000+(next ? 0 : 1000*ul_queue[ul_queue_num].retries),startupload);
}

function ul_updateprogress()
{
	if (ul_queue[ul_queue_num].size)
	{
		var tp = totalbytessent;

		for (var slot = ul_maxSlots; slot--; ) tp += ul_progress[slot];

		if (tp > ul_queue[ul_queue_num].size) tp = ul_queue[ul_queue_num].size;
		
		onUploadProgress(ul_queue_num, tp, ul_queue[ul_queue_num].size);
	}
}

var ul_completion = [];
var ul_completing;

function ul_completepending(target)
{
	if (ul_completion.length)
	{
		var ul = ul_completion.shift();
	
		var ctx = {
			target : target,
			ul_queue_num : ul[5],
			callback : ul_completepending2,
			faid : ul[6]
		};

		api_completeupload(ul[0],ul[1],ul[2],ul[3],ul[4],ul[6],ctx);
	}
	else ul_completing = false;
}

function ul_completepending2(res,ctx)
{
	if (typeof res == 'object' && res[0].f)
	{
		api_attachfileattr(res[0].f[0].h,ctx.faid);
		onUploadSuccess(ctx.ul_queue_num);
		ul_completepending(ctx.target);
	}
}

function file_exists(node,path,size)
{
	var p = path.split('/');
	var n;

	return file_exists2(node,p,size);
}

function file_exists2(node,p,size)
{
	if (!p.length) return false;

	var i, c = p.shift();

	if (!c.length) return file_exists2(node,p,size);

	n = fm_matchname(node,c);

	if (!p.length)
	{
		for (i = n.length; i--; )
		{
			// TODO: check for further attributes, such as timestamp
			if (n[i].size == size) return true;
		}
	}
	else for (i = n.length; i--; ) if (n[i].size < 0) return file_exists2(n[i].id,p,size);
	
	return false;
}

function ul_chunkcomplete(slot,pos,response)
{
	ul_progress[slot] = 0;
	delete ul_inflight[pos];

	if (response.length > 27) response = base64urldecode(response);
	
	if (!response.length || response == 'OK' || response.length == 27)
	{
		ul_lastcompletion = new Date().getTime();

		if (pos >= 0) ul_intransit--;

		if (ul_sendchunks[pos])
		{
			totalbytessent += ul_method ? ul_sendchunks[pos].buffer.length : ul_sendchunks[pos].length;
			ul_updateprogress();
			delete ul_sendchunks[pos];
		}

		if (response.length == 27)
		{
			var t = [];

			for (p in ul_macs) t.push(p);

			t.sort(function(a,b) { return parseInt(a)-parseInt(b) });

			for (var i = 0; i < t.length; i++) t[i] = ul_macs[t[i]];

			var mac = condenseMacs(t,ul_key);
		
			ul_settimeout(-1);

			var filekey = [ul_key[0]^ul_key[4],ul_key[1]^ul_key[5],ul_key[2]^mac[0]^mac[1],ul_key[3]^mac[2]^mac[3],ul_key[4],ul_key[5],mac[0]^mac[1],mac[2]^mac[3]];
			
			// TODO: add further attributes, such as filemtime...
			if (u_k_aes && !ul_completing)
			{
				var ctx = { ul_queue_num : ul_queue_num,
					callback : ul_completepending2,
					faid : ul_queue[ul_queue_num].faid
				};

				ul_completing = true;
				api_completeupload(response,ul_queue[ul_queue_num].target,ul_queue[ul_queue_num].path,ul_queue[ul_queue_num].name,filekey,ul_queue[ul_queue_num].faid,ctx);
			}
			else ul_completion.push([response,ul_queue[ul_queue_num].target,ul_queue[ul_queue_num].path,ul_queue[ul_queue_num].name,filekey,ul_queue_num,ul_queue[ul_queue_num].faid]);

			ul_queue_num++;

			ul_uploading = false;
			return startupload();
		}
//		else ul_settimeout(ul_method ? 200000 : 60000,ul_failed);
	}
	else
	{
		console.log("Invalid upload response: " + response);
		if (response != EKEY) return ul_failed()
	}

	// TODO: add processing for re-requests
	ul_xhrbusy[slot] = 0;
	
	ul_dispatch_chain();
}

function ul_flash_uploaddone(slot,response)
{
	ul_chunkcomplete(slot,ul_flashpos[slot],response);
}

var xhr_supports_typed_arrays = false;

function ul_dispatch_read()
{
	var rpos;
	var p;

	if (ul_intransit > 8) return;

	if (!ul_method)
	{
		if (ul_reader.readyState != ul_reader.LOADING)
		{
			for (p in ul_readq)
			{
				p = parseInt(p);

				var blob;

				if ((ul = ul_queue[ul_queue_num].slice) || (ul_queue[ul_queue_num].mozSlice))
				{
					if (ul_queue[ul_queue_num].mozSlice) blob = ul_queue[ul_queue_num].mozSlice(p,p+ul_readq[p]);
					else blob = ul_queue[ul_queue_num].slice(p,p+ul_readq[p]);
					xhr_supports_typed_arrays = true;
				}
				else blob = ul_queue[ul_queue_num].webkitSlice(p,p+ul_readq[p]);

				ul_reader.pos = p;
				ul_reader.readAsArrayBuffer(blob);
				ul_reader.instance = ul_instance;

				ul_reader.onloadend = function(evt) 
				{
					if (this.instance == ul_instance)
					{
						if (evt.target.readyState == FileReader.DONE) 
						{
							delete ul_readq[this.pos];

							ul_plainq[this.pos] = new Uint8Array(evt.target.result);

							ul_intransit++;
							
							ul_dispatch_chain();
						}
					}
				}
				
				ul_reader.onerror = function(evt)
				{
					if (this.instance == ul_instance)
					{
						console.log("File Read error");
						ul_failed(1);
					}
				}

				break;
			}
		}
	}
	else
	{
		if (!ul_flashreaderactive)
		{
			ul_flashreaderactive = true;

			for (p in ul_readq)
			{
				p = parseInt(p);

				flash_requestchunk(ul_queue[ul_queue_num].flashid,ul_readq[p],p);
				break;
			}
		}
	}
}

function ul_flash_chunk(id,data,p)
{
	if (ul_flashreaderactive)
	{
		ul_flashreaderactive = false;

		if (id != ul_queue[ul_queue_num].flashid)
		{
			if (d) console.log("INVALID ID on Flash response");
		}
		else
		{
			ul_plainq[p] = { buffer : base64urldecode(data) };

			if (ul_plainq[p].buffer.length != ul_readq[p])
			{
				if (d) console.log("SHORT READ in flashreader: " + ul_plainq[p].buffer.length + " != " + ul_readq[p] + " at " + p);
				delete ul_plainq[p];
			}
			else
			{
				delete ul_readq[p];
				ul_intransit++;
				ul_dispatch_chain();
			}
		}
	}
}

function ul_cancel()
{
	if (ul_xhrs)
	{
		for (var i = ul_maxSlots; i--; ) if (typeof ul_xhrs[i] == 'object')
		{
			ul_xhrs[i].abort();
			ul_xhrs[i] = undefined;
		}
	}
	
	// TODO: properly abort active Flash components
	ul_instance++;
	ul_settimeout(-1);
	ul_workers = ul_plainq = ul_reader = ul_xhrs = ul_workers = ul_sendchunks = ul_inflight = ul_readq = undefined;
	ul_uploading = ul_flashreaderactive = false;

	delete ul_queue[ul_queue_num].posturl;

	api_req([{ a : 'u', t : ul_uploadurl }]);
}


var dl_fs, dl_fw;

var dl_queue = [];
var dl_queue = [];
var dl_queue_num = 0;
var dl_retryinterval = 1000;

// 0 - FileSystem (Chrome), 1 - Flash, 2 - Blob (IE10), 3 - Extension (Firefox), 4 - Blob (for mobile)
var dl_method;

var dl_legacy_ie = (typeof XDomainRequest != 'undefined') && (typeof ArrayBuffer == 'undefined');
var dl_flash_connections = 0;
var dl_flash_progress;

var dl_instance = 0;

var dl_blob;

var dl_data;

var dl_key;
var dl_keyNonce;
var dl_macs;
var dl_aes;

var dl_filename;
var dl_filesize;
var dl_geturl;
var dl_bytesreceived = 0;
var dl_chunks;
var dl_chunksizes;

var dl_storagetype = 0;

var dl_req_storage = false;

var downloading=false;

var dl_maxSlots = 4;
if (localStorage.dl_maxSlots) dl_maxSlots = localStorage.dl_maxSlots;

var dl_xhrs;
var dl_pos;
var dl_progress;
var dl_lastactive;

var dl_cipherq;
var dl_cipherqlen;

var dl_plainq;
var dl_plainqlen;

var dl_lastquotawarning;

var dl_maxWorkers = 4;
var dl_workers;
var dl_workerbusy;

var dl_quotabytes = 0;

var dl_write_position;

var dl_timeout;

var dl_id;

var skipcheck = 0;

function dl_dispatch_chain()
{
	if (downloading)
	{
		dl_dispatch_read();
		dl_dispatch_decryption();
		
		if (!dl_method)
		{
			dl_dispatch_write();
		}
		else dl_dispatch_write();
	}
}

function dl_workersorxhrsbusy()
{
	var i;
	
	for (i = dl_maxSlots; i--; ) if (dl_pos[i] >= 0) return true;

	if (use_workers) for (i = dl_maxWorkers; i--; ) if (dl_workerbusy[i]) return true;

	return false;
}

function dl_dispatch_decryption()
{
	if (use_workers)
	{
		for (var id = dl_maxWorkers; id--; )
		{
			if (!dl_workerbusy[id]) break;
		}

		if (id >= 0)
		{		
			for (var p in dl_cipherq)
			{
				dl_workerbusy[id] = 1;

				if (typeof(dl_workers[id]) == "object")
				{
					dl_workers[id].terminate();
					dl_workers[id] = null;
					delete dl_workers[id];
				}
				
				dl_workers[id] = new Worker('decrypter.js');
				dl_workers[id].postMessage = dl_workers[id].webkitPostMessage || dl_workers[id].postMessage;
				dl_workers[id].id = id;
				dl_workers[id].instance = dl_instance;

				dl_workers[id].onmessage = function(e)
				{
					if (this.instance == dl_instance)
					{
						if (typeof(e.data) == "string")
						{
							if (e.data[0] == '[') dl_macs[this.dl_pos] = JSON.parse(e.data);
							else if (d) console.log("WORKER" + this.id + ": '" + e.data + "'");
						}
						else
						{
							var databuf = new Uint8Array(e.data);

							if (d) console.log("WORKER" + this.id + ": Received " + databuf.length + " decrypted bytes at " + this.dl_pos);

							dl_plainq[this.dl_pos] = databuf;
							dl_plainqlen++;

							dl_workerbusy[this.id] = 0;

							dl_dispatch_chain();
						}
					}
				};

				dl_workers[id].postMessage(dl_keyNonce);

				if (d) console.log("WORKER" + id + ": Queueing " + dl_cipherq[p].length + " bytes at " + p);
				
				dl_workers[id].dl_pos = parseInt(p);
				dl_workers[id].postMessage(dl_workers[id].dl_pos/16);
				dl_workers[id].postMessage(dl_cipherq[p]);

				delete dl_cipherq[p];
				dl_cipherqlen--;
				
				break;
			}
		}
		else if (d) console.log("All worker threads are busy now.");
	}
	else
	{
		for (var p in dl_cipherq)
		{
			if (d) console.log("Decrypting pending block at " + p + " without workers...");

			dl_macs[p] = decrypt_ab_ctr(dl_aes,dl_cipherq[p],[dl_key[4],dl_key[5]],p);

			dl_plainq[p] = dl_cipherq[p];
			delete dl_cipherq[p];

			dl_cipherqlen--;
			dl_plainqlen++;
			
			break;
		}
	}
}

function dl_resume(id)
{
	if (downloading) dl_dispatch_chain();
	else
	{
		if (id) for (var i = dl_queue.length; i--; ) if (id == dl_queue[i].id)
		{
			dl_queue_num = i;
			break;
		}
		startdownload();
	}
}

function dl_ack_write(p)
{
	if (dl_queue[dl_queue_num].data) new Uint8Array(dl_queue[dl_queue_num].data,p,dl_plainq[p].length).set(dl_plainq[p]);

	delete dl_plainq[p];
	dl_plainqlen--;
}

function dl_dispatch_write()
{
	if (dl_filesize == -1) return;

	if (!dl_method)
	{
		if (dl_fw.writing)
		{
			if (d) console.log("fileWriter is busy now. Please try again later.");
			return;
		}

		pp = -1;

		for (var p in dl_plainq)
		{
			pp = parseInt(p);

			if (d) console.log("Writing " + dl_plainq[p].length + " bytes of file data at dl_pos " + p);

			dl_fw.onerror = function(e)
			{
				dl_fw.writing = false;

				if (this.instance == dl_instance) console.log("WRITE FAILED: " + e);
			}
			
			dl_fw.onwriteend = function()
			{
				dl_fw.writing = false;
				
				if (this.instance == dl_instance)
				{
					if (d) console.log("fileWriter: onwriteend, position: " + this.position + ", expected: " + (this.writepos+dl_plainq[this.writepos].length));
					
					if (this.position == this.writepos+dl_plainq[this.writepos].length)
					{
						dl_ack_write(this.writepos);
						dl_write_position++;
					}
					dl_dispatch_chain();
				}
			}
			dl_fw.instance = dl_instance;
			dl_fw.seek(pp);
			dl_fw.writepos = pp;
			dl_fw.writing = true;
			dl_fw.write(new Blob([dl_plainq[p]]));
			break;
		}

		if (pp < 0) dl_checklostchunk();
	}
	else
	{
		if (typeof dl_plainq[dl_write_position] != "object")
		{
			if (d) console.log("Plaintext at " + dl_write_position + " still missing: " + typeof dl_plainq[dl_write_position]);
			dl_checklostchunk();
			return;
		}

		var p = dl_write_position;
		
		dl_writedata(dl_plainq[p]);

		dl_write_position += have_ab ? dl_plainq[p].length : dl_plainq[p].buffer.length;
		
		dl_ack_write(p);
		dl_dispatch_chain();		
	}
}

function dl_settimer(timeout,target)
{
	if (d) console.log(timeout < 0 ? "Stopping timer" : "Starting timer " + timeout);
	if (dl_timeout) clearTimeout(dl_timeout);
	if (timeout >= 0) dl_timeout = setTimeout(target,timeout);
	else dl_timeout = undefined;
}

// try to start download at dl_queue_num
// if that download is not available, loop through the whole dl_queue and try to start
// another one
function startdownload()
{
	if (dl_queue.length == 0) return false;
	else if (dl_req_storage) return false;

	dl_settimer(-1);

	if (downloading)
	{
		if (d) console.log("startdownload() called with active download");
		return;
	}
		
	if (dl_queue_num >= dl_queue.length) dl_queue_num = dl_queue.length-1;
	
	if (dl_queue_num < 0)
	{
		if (d) console.log("startdownload() called with dl_queue_num == -1");
		return;
	}

	var dl_queue_num_start = dl_queue_num;
	var t;
	var retryin = -1;
	
	for (;;)
	{
		if (dl_queue[dl_queue_num])
		{
			if (!dl_queue[dl_queue_num].retryafter) break;
		
			if (!t) t = new Date().getTime();
		
			if (t >= dl_queue[dl_queue_num].retryafter) break;
		
			if (retryin < 0 || (dl_queue[dl_queue_num].retryafter-t < retryin))
			{
				retryin = dl_queue[dl_queue_num].retryafter-t;
				if (retryin < 0) retryin = 0;
			}
		}

		dl_queue_num++;

		if (dl_queue_num >= dl_queue.length)
		{
			if (d) console.log('Reached end of dl_queue, starting from 0');
			dl_queue_num = 0;
		}
		
		if (dl_queue_num == dl_queue_num_start)
		{
			if (d) console.log('Looped through all downloads, nothing left');
			dl_settimer(retryin,startdownload);
			
			if (retryin < 0)
			{
				if (d) console.log('Nothing left to retry, clearing dl_queue');
				dl_queue = [];
				dl_queue_num = 0;
			}
			return;
		}
	}

	downloading=true;
	
	dl_key = dl_queue[dl_queue_num].key;
	if (d) console.log("dl_key " + dl_key);		
	if (dl_queue[dl_queue_num].ph) dl_id = dl_queue[dl_queue_num].ph;
	else dl_id  = dl_queue[dl_queue_num].id;
	
	dl_geturl = '';

	dl_bytesreceived = 0;
	dl_chunksizes = [];

	dl_keyNonce = JSON.stringify([dl_key[0]^dl_key[4],dl_key[1]^dl_key[5],dl_key[2]^dl_key[6],dl_key[3]^dl_key[7],dl_key[4],dl_key[5]]);

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

	if (!dl_legacy_ie)
	{
		dl_xhrs = Array(dl_maxSlots);

		for (var slot = dl_maxSlots; slot--; )
		{
			dl_xhrs[slot] = new XMLHttpRequest;			
			
			if (dl_xhrs[slot].overrideMimeType) dl_xhrs[slot].overrideMimeType('text/plain; charset=x-user-defined');
			
			dl_xhrs[slot].slot = slot;
			dl_pos[slot] = -1;
			dl_progress[slot] = 0;
		}
	}
	else
	{
		dl_flash_connections = 0;
		dl_flash_progress = {};
	}

	if (use_workers)
	{
		dl_workers = new Array(dl_maxWorkers);
		dl_workerbusy = new Array(dl_maxWorkers);

		for (var id = dl_maxWorkers; id--; ) dl_workerbusy[id] = 0;
	}
	else dl_aes = new sjcl.cipher.aes([dl_key[0]^dl_key[4],dl_key[1]^dl_key[5],dl_key[2]^dl_key[6],dl_key[3]^dl_key[7]]);
	
	dl_write_position = 0;

	dl_getsourceurl(startdownload2);
}

function dl_renewsourceurl()
{
	dl_getsourceurl(dl_renewsourceurl2);
}

function dl_getsourceurl(callback)
{
	req = { a : 'g', g : 1, ssl : use_ssl };

	if (dl_queue[dl_queue_num].ph) req.p = dl_queue[dl_queue_num].ph;
	else if (dl_queue[dl_queue_num].id) req.n = dl_queue[dl_queue_num].id;
	
	api_req([req],{ callback : callback });
}

function dl_renewsourceurl2(res,ctx)
{
	if (typeof res == 'object')
	{
		if (typeof res[0] == 'number')
		{
			dl_reportstatus(dl_queue_num,res[0]);
		}
		else
		{
			if (res[0].g)
			{
				dl_geturl = res[0].g;
				dl_dispatch_chain()
				return;
			}
			else if (res[0].e) dl_reportstatus(dl_queue_num,res[0].e);
		}

		dl_queue_num++;
		startdownload();
	}
}
	
function dl_reportstatus(num,code)
{
	if (dl_queue[num])
	{
		dl_queue[num].lasterror = code;
		dl_queue[num].onDownloadError(dl_queue[num].id || dl_queue[num].ph,code);
	}
}

function startdownload2(res,ctx)
{
	if (typeof res == 'object')
	{
		if (typeof res[0] == 'number')
		{
			dl_reportstatus(dl_queue_num,res[0]);
		}
		else
		{
			if (res[0].d)
			{
				dl_reportstatus(dl_queue_num,res[0].d ? 2 : 1);
				dl_queue[dl_queue_num] = false;
			}
			else if (res[0].g)
			{
				var ab = base64_to_ab(res[0].at);
				var o = dec_attr(ab,[dl_key[0]^dl_key[4],dl_key[1]^dl_key[5],dl_key[2]^dl_key[6],dl_key[3]^dl_key[7]]);

				if (typeof o == 'object' && typeof o.n == 'string')
				{
					if (have_ab && res[0].pfa && res[0].s <= 48*1048576 && is_image(o.n) && (!res[0].fa || res[0].fa.indexOf(':0*') < 0)) dl_queue[dl_queue_num].data = new ArrayBuffer(res[0].s);
					return dl_setcredentials(res[0].g,res[0].s,o.n);
				}
				else dl_reportstatus(dl_queue_num,EKEY);
			}
			else dl_reportstatus(dl_queue_num,res[0].e);
		}
	}
	else dl_reportstatus(dl_queue_num,EAGAIN);
	
	downloading = false;

	dl_queue_num++;

	dl_retryinterval *= 1.2;
	
	dl_settimer(dl_retryinterval,startdownload);
}

function dl_setcredentials(g,s,n)
{
	var i;
	var p;
	var pp;

	dl_geturl = g;
	dl_filesize = s;
	dl_filename = n;

	dl_chunks = [];
	
	p = pp = 0;
	for (i = 1; i <= 8 && p < dl_filesize-i*131072; i++)
	{
		dl_chunksizes[p] = i*131072;
		dl_chunks.push(p);
		pp = p;
		p += dl_chunksizes[p];
	}

	while (p < dl_filesize)
	{
		dl_chunksizes[p] = 1048576;
		dl_chunks.push(p);
		pp = p;
		p += dl_chunksizes[p];
	}

	if (!(dl_chunksizes[pp] = dl_filesize-pp))
	{
		delete dl_chunksizes[pp];
		delete dl_chunks[dl_chunks.length-1];
	}
	
	if (!dl_method) dl_createtmp();	
	else
	{
		if (dl_method == 2) dl_blob = new MSBlobBuilder();
		else if (dl_method == 3)
		{
			// firefox extension:
			ffe_createtmp();
		}
		else if (dl_method == 4) dl_data = new ArrayBuffer();
		dl_run();
	}
}
	
function dl_run()
{
	document.getElementById('dllink').download = dl_filename;
	
	if (dl_filesize)
	{
		for (var slot = dl_maxSlots; slot--; ) dl_dispatch_read(slot);
		dl_queue[dl_queue_num].onDownloadStart(dl_id,dl_filename,dl_filesize);
	}
	else dl_checklostchunk();
}

function dl_checklostchunk()
{
	var i;

	if (!dl_chunks.length && !dl_plainqlen && !dl_cipherqlen && !dl_workersorxhrsbusy() && !dl_flash_connections)
	{
		if (dl_filesize)
		{
			var t = [];

			for (p in dl_macs) t.push(p);

			t.sort(function(a,b) { return parseInt(a)-parseInt(b) });

			for (i = 0; i < t.length; i++) t[i] = dl_macs[t[i]];

			var mac = condenseMacs(t,[dl_key[0]^dl_key[4],dl_key[1]^dl_key[5],dl_key[2]^dl_key[6],dl_key[3]^dl_key[7]]);
		}
		
		if (skipcheck) console.log('Expected: [' + dl_key[6] + ',' + dl_key[7] + '], got: [' + (mac[0]^mac[1]) + ',' + (mac[2]^mac[3]) + ']');

		downloading = false;

		if (!skipcheck && dl_filesize && (dl_key[6] != (mac[0]^mac[1]) || dl_key[7] != (mac[2]^mac[3])))
		{
			dl_reportstatus(dl_queue_num,EKEY);
			dl_queue[dl_queue_num] = false;
		}
		else
		{
			if (dl_queue[dl_queue_num].data && !skipcheck) createnodethumbnail(dl_queue[dl_queue_num].id,new sjcl.cipher.aes([dl_key[0]^dl_key[4],dl_key[1]^dl_key[5],dl_key[2]^dl_key[6],dl_key[3]^dl_key[7]]),++ul_faid,dl_queue[dl_queue_num].data);
		
			if (!dl_method)
			{			
				dl_queue[dl_queue_num].onBeforeDownloadComplete();
				document.getElementById('dllink').href = document.fileEntry.toURL();
				if (document.getElementById('dllink').click) document.getElementById('dllink').click();				
			}
			else if (dl_method == 1)
			{
				console.log('write flash data');
				document.getElementById('dlswf_' + dl_id).flashdata(dl_id,'',dl_queue[dl_queue_num].n);
			}
			else if (dl_method == 2)
			{
				navigator.msSaveOrOpenBlob(dl_blob.getBlob(),dl_queue[dl_queue_num].n);
			}
			else if (dl_method == 3)
			{
				ffe_complete(dl_queue[dl_queue_num].n,dl_queue[dl_queue_num].p);
			}

			dl_queue[dl_queue_num].onDownloadComplete(dl_id);
			dl_queue[dl_queue_num] = false;
			dl_queue_num++;

			// release all downloads waiting for quota
			for (i = dl_queue.length; i--; ) if (dl_queue[i] && dl_queue[i].lasterror == EOVERQUOTA)
			{
				dl_reportstatus(i,0);
				delete dl_queue[i].retryafter;
			}

			dl_retryinterval = 1000;
		}

		startdownload();		
	}
}

function dl_httperror(code)
{
	if (code == 509)
	{
		var t = new Date().getTime();

		if (!dl_lastquotawarning || t-dl_lastquotawarning > 55000)
		{
			dl_lastquotawarning = t;
			dl_reportstatus(dl_queue_num,code == 509 ? EOVERQUOTA : ETOOMANYCONNECTIONS);
			dl_settimer(60000,dl_dispatch_chain);
		}
		
		return;
	}

	dl_reportstatus(dl_queue_num,EAGAIN);

	dl_retryinterval *= 1.2;

	if (!dl_write_position)
	{
		dl_cancel();

		dl_queue_num++;
		dl_settimer(dl_retryinterval,startdownload);
	}
	else
	{
		if (d) console.log("Network error, retrying in " + Math.floor(dl_retryinterval)/1000 + " seconds...");

		dl_settimer(dl_retryinterval,code == 509 ? dl_dispatch_chain : dl_renewsourceurl);
	}
}

function flash_dlprogress(p,numbytes)
{
	dl_flash_progress[p] = numbytes;
	dl_updateprogress();
}

function dl_flashdldata(p,data,httpcode)
{
	dl_flash_connections--;

	if (data == 'ERROR' || httpcode != 200)
	{
		dl_chunks.unshift(p);
		var t = new Date().getTime();

		dl_httperror(httpcode);

		return;
	}

	data = base64urldecode(data);

	delete dl_flash_progress[p];
	dl_bytesreceived += data.length;
	
	dl_cipherq[p] = { buffer : data };
	dl_cipherqlen++;
	dl_updateprogress();

	dl_dispatch_chain();
}

function dl_dispatch_read()
{
	if (dl_cipherqlen+dl_plainqlen > dl_maxSlots+8) return;

	if (!dl_chunks.length) return;

	if (dl_legacy_ie)
	{
		if (dl_flash_connections > 6) return;
		
		dl_flash_connections++;
		
		console.log(dl_geturl);
		
		var p = dl_chunks[0];
		dl_chunks.splice(0,1);
		flashdlchunk(p,dl_geturl + '/' + p + '-' + (p+dl_chunksizes[p]-1));
		return;
	}

	for (var slot = dl_maxSlots; slot--; )
		if (dl_pos[slot] == -1) break;

	if (slot < 0) return;

	dl_pos[slot] = dl_chunks[0];
	dl_chunks.splice(0,1);
	dl_xhrs[slot].instance = dl_instance;

	if (d) console.log("Requesting chunk " + dl_pos[slot] + "/" + dl_chunksizes[dl_pos[slot]] + " on slot " + slot + ", " + dl_chunks.length + " remaining");

	dl_xhrs[slot].onprogress = function(e) 
	{
		if (this.instance == dl_instance)
		{
			dl_lastactive[this.slot] = new Date().getTime();
		
			if (!dl_lastquotawarning || new Date().getTime()-dl_lastquotawarning > 55000)
			{
				if (dl_pos[this.slot] >= 0)
				{
					dl_progress[this.slot] = e.loaded;
					
					dl_updateprogress();
				}
			}
		}
	}
	
	dl_xhrs[slot].onreadystatechange = function()
	{
		if (this.instance == dl_instance)
		{
			dl_lastactive[this.slot] = new Date().getTime();
			
			if (this.readyState == this.DONE)
			{
				if (dl_pos[this.slot] >= 0)
				{
					if (this.response != null)
					{
						var p = dl_pos[this.slot];

						if (have_ab)
						{
							if (p >= 0)
							{
								if (navigator.appName != 'Opera') dl_bytesreceived += this.response.byteLength;
								dl_cipherq[p] = new Uint8Array(this.response);
							}
						}
						else
						{
							// non-IE
							if (p >= 0)
							{
								dl_bytesreceived += this.response.length;
								dl_cipherq[p] = { buffer : this.response };						
							}
						}

						dl_cipherqlen++;
						if (navigator.appName != 'Opera') dl_progress[this.slot] = 0;
						dl_updateprogress();

						dl_pos[this.slot] = -1;	
						dl_dispatch_chain();
					}
					else
					{
						if (dl_pos[this.slot] != -1)
						{
							dl_chunks.unshift(dl_pos[this.slot]);
							dl_pos[this.slot] = -1;	
							dl_httperror(this.status);
						}
					}
				}
			}
		}
	}

	var range = '/' + dl_pos[slot] + '-' + (dl_pos[slot]+dl_chunksizes[dl_pos[slot]]-1);
	
	if (dl_method) dl_xhrs[slot].open('POST', dl_geturl + range, true);
	else
	{
		// plug extreme Chrome memory leak
		var t = dl_geturl.lastIndexOf('/dl/');
		dl_xhrs[slot].open('POST', dl_geturl.substr(0,t+1));
		dl_xhrs[slot].setRequestHeader("MEGA-Chrome-Antileak",dl_geturl.substr(t) + range);
	}
	
	dl_xhrs[slot].responseType = have_ab ? 'arraybuffer' : 'text';
	dl_xhrs[slot].send();
	
//	dl_watchdog();
}

function dl_watchdog()
{
	var dispatch = false;

	var t = new Date().getTime();
	
	for (var i = dl_maxSlots; i--; )
	{
		if (typeof dl_xhrs[i] == 'object')
		{
			if (t-dl_lastactive[i] > 20000)
			{
				var ti = dl_instance;
				dl_xhrs[i].abort();
				if (dl_instance != ti) return;
				dl_lastactive[i] = t;
				dispatch = true;
			}
		}
	}

	dl_settimer(5000,dl_watchdog);

	if (dispatch) dl_dispatch_chain();
}

function dl_updateprogress()
{
	var p = 0;

	if (dl_queue[dl_queue_num])
	{
		if (dl_legacy_ie) for (var pp in dl_flash_progress) p += dl_flash_progress[pp];
		else for (var slot = dl_maxSlots; slot--; ) p += dl_progress[slot];
		
		dl_queue[dl_queue_num].onDownloadProgress(dl_id, dl_bytesreceived + p, dl_filesize);
	}
}

var dada;


function appendBuffer( buffer1, buffer2 ) 
{
  var tmp = new Uint8Array( buffer1.byteLength + buffer2.byteLength );
  tmp.set( new Uint8Array( buffer1 ), 0 );
  tmp.set( new Uint8Array( buffer2 ), buffer1.byteLength );
  return tmp.buffer;
}

function dl_writedata(data)
{
	if (dl_method == 1)
	{
		var j, k;
		var len;
		
		if (have_ab) len = data.length;
		else len = data.buffer.length;

		if (have_ab) subdata = ab_to_base64(data);
		else subdata = base64urlencode(data.buffer);

		document.getElementById('dlswf_' + dl_id).flashdata(dl_id,subdata);
	}
	else if (dl_method == 3)
	{
		ffe_writechunk(ab_to_str(data),dl_write_position);		
	}
	else if (dl_method == 4)
	{
		$('#mobileconsolelog').val($('#mobileconsolelog').val() + dl_plainq[dl_write_position] + '\n');
		
		dada = data;
	
		//dl_data = new Blob([dl_data,dl_plainq[dl_write_position]]);
		
		dl_data = appendBuffer(dl_data,dl_plainq[dl_write_position]);
		
		
	}
	else
	{
		if (have_ab) dl_blob.append(dl_plainq[dl_write_position]);
		else dl_blob.append(dl_plainq[dl_write_position].buffer);
	}
}

function dl_cancel()
{
	dl_settimer(-1);
	dl_instance++;
	dl_xhrs = dl_pos = dl_workers = dl_progress = dl_cipherq = dl_plainq = dl_progress = dl_chunks = dl_chunksizes = undefined;
	downloading = false;
}

var fs_instance;

function dl_retryfsop()
{
	if (fs_instance = dl_instance) dl_createtmp();
}

if (mobileversion)
{
	dl_method=4;
}
else if (window.webkitRequestFileSystem)
{
	function errorHandler(e,type) 
	{
	  switch (e.code) {
		case FileError.QUOTA_EXCEEDED_ERR:
		  alert('Error writing file, is your harddrive almost full? (' + type + ')');
		  break;
		case FileError.NOT_FOUND_ERR:
		  alert('NOT_FOUND_ERR in ' + type);
		  break;
		case FileError.SECURITY_ERR:
		  alert('SECURITY_ERR in ' + type);
		  break;
		case FileError.INVALID_MODIFICATION_ERR:
		  alert('INVALID_MODIFICATION_ERR in ' + type);
		  break;
		case FileError.INVALID_STATE_ERR:
			fs_instance = dl_instance;
			console.log('INVALID_STATE_ERROR in ' + type + ', retrying...');
			setTimeout(dl_retryfsop,500);
			break;
		default:
		  alert('webkitRequestFileSystem failed in ' + type);
	  }
	}	

	function RequestFileSystem_errorHandler(e)
	{
		errorHandler(e,'RequestFileSystem');
	}
	
	function getDirectory_errorHandler(e)
	{
		errorHandler(e,'getDirectory');	
	}
		
	function createWriter_errorHandler(e)
	{
		errorHandler(e,'createWriter');		
	}
	
	function getFile_errorHandler(e)
	{
		errorHandler(e,'getFile');
	}	

	function dl_getspace(storagetype,minsize)
	{		
		if (!storagetype) storagetype = 0;		
		if (!minsize) minsize = 0;

		window.webkitStorageInfo.queryUsageAndQuota(1, function(used, remaining) 
		{		
		//	console.log("Used quota: " + used + ", remaining quota: " + remaining);			
			if (remaining > 0)
			{
				dl_quotabytes = remaining;
				dl_storagetype=1;
				if (dl_quotabytes < 1073741824) clearit(1,3600);
				else clearit(1);
				startdownload();
			}
			else
			{
				var requestbytes = 1024*1024*1024*100;				
				if (storagetype == 0) requestbytes = 1024*1024*1024*25;

				if (storagetype == 1) dl_req_storage=true; 

				window.webkitStorageInfo.requestQuota(storagetype,requestbytes,function(grantedBytes) 
				{
				   window.webkitStorageInfo.queryUsageAndQuota(storagetype, function(used, remaining) 
				   {						
						if (storagetype == 1) dl_req_storage=false;
						
						dl_quotabytes = remaining;						
						
						if (dl_quotabytes < 1073741824) clearit(storagetype,3600);	
						
						if ((remaining == 0) && (storagetype == 1))
						{
							if (!dl_req_storage) dl_getspace(1,minsize);
							return false;				
						}
						else if ((minsize > dl_quotabytes) && (storagetype == 0)) 
						{
							if (!dl_req_storage) dl_getspace(1,minsize)
							return false;						
						}						
						else if ((minsize > dl_quotabytes) && (storagetype == 1)) clearit(storagetype,3600);
						
						if (remaining > 0) dl_storagetype = storagetype;							
												
						startdownload();
					}, 
					function(e) 
					{						
						console.log('ERROR: Could not query usage and storage quota. (' + dl_storagetype + ') ' + e);
						alert('Could not query usage and storage quota. (' + dl_storagetype + ') ' + e);
					});
				}, 
				function(e) 
				{
				  console.log('ERROR: Could not grant storage space (' + dl_storagetype + ') ' + e);
				  alert('Could not grant storage space (' + dl_storagetype + ') ' + e);
				});
			}		
		}, 
		function(e) 
		{
			console.log('ERROR: Could not query usage and storage quota. (' + dl_storagetype + ') ' + e);
			alert('Could not query usage and storage quota. (' + dl_storagetype + ') ' + e);
		});
	}
	dl_getspace(0);

	var dirid = "mega";

	function dl_createtmp()
	{
		window.webkitRequestFileSystem(dl_storagetype,1024*1024*1024*25,dl_createtmpfile,RequestFileSystem_errorHandler);
	}

	function dl_createtmpfile(fs) 
	{
		dl_fs = fs;

		dl_fs.root.getDirectory(dirid, {create: true}, function(dirEntry) 
		{		
			if (d) console.log('Directory "'+dirid+'" created')
			document.dirEntry = dirEntry;
		}, getDirectory_errorHandler);

		if (d) console.log("Opening file for writing: " + dl_id);
		fs.root.getFile(dirid + '/' + dl_id, {create: true}, function(fileEntry)
		{
			fileEntry.createWriter(function(fileWriter) 
			{		  
			  if (d) console.log('File "' + dirid + '/' + dl_id + '" created');

			  fileWriter.onerror = function(e) 
			  {
				if (d) console.log('Write failed: ' + e.toString());
			  };

			  dl_fw = fileWriter;
			  document.fileEntry = fileEntry;

			  dl_run();
			}, createWriter_errorHandler);
		}, getFile_errorHandler);
	}
	
	dl_method = 0;
}
else if (navigator.msSaveOrOpenBlob)
{
	dl_method = 2;
}
else
{
	// Flash fallback
	dl_method = 1;
}






var filedrag=false;


function FileDragHover(e) 
{
	if (folderlink) return false;
	filedrag=true;
	e.stopPropagation();
	e.preventDefault();	
	if (document.getElementById('start_uploadbutton')) document.getElementById('start_uploadbutton').style.display = 'none';
}



function FileDragLeave(e)
{
	if (folderlink) return false;
	filedrag=false;
	e.stopPropagation();
	e.preventDefault();	
	setTimeout("fdragl()",100);
}


function fdragl()
{
	if ((document.getElementById('start_uploadbutton')) && (!filedrag)) document.getElementById('start_uploadbutton').style.display = '';
}

var dir_inflight = 0;




// special handling for Chrome (supporting folder drag&drop)
function traverseFileTree(item, path) 
{
  path = path || "";
  if (item.isFile) 
  {
	dir_inflight++;	
    item.file(function(file) 
	{
	  file.path = path;
	  addupload(file);
	  dir_inflight--;
	  if (dir_inflight == 0)
	  {
		if (init_anoupload) anoupload();	  
	  }
    });
  } 
  else if (item.isDirectory) 
  {
	dir_inflight++;
    var dirReader = item.createReader();
    dirReader.readEntries(function(entries) 
	{	  
      for (var i=0; i < entries.length; i++)
	  {
        traverseFileTree(entries[i], path + item.name + "/");
      }
	  dir_inflight--;
	  if (dir_inflight == 0)
	  {		
		if (init_anoupload) anoupload();
	  }
    });
  }
}



// file selection
function FileSelectHandler(e) 
{		
	if (folderlink) return false;
	
	FileDragHover(e);	
	var files = e.target.files || e.dataTransfer.files;	
	if (files.length == 0) return false;	
	if ((e.dataTransfer) && (e.dataTransfer.items) && (e.dataTransfer.items.length > 0) && (e.dataTransfer.items[0].webkitGetAsEntry))
	{		
		var items = e.dataTransfer.items;
		for (var i=0; i<items.length; i++) 
		{
			if (items[i].webkitGetAsEntry)
			{
				var item = items[i].webkitGetAsEntry();
				console.log(item);
				if (item)
				{	
					traverseFileTree(item);				
				}
			}
		}
	}
	else
	{
		if ((!mobileversion) && (Ext)) Ext.suspendLayouts();
		
		for (var i = 0, f; f = files[i]; i++) 
		{	
			if (f.webkitRelativePath) f.path = f.webkitRelativePath;
			if (f.name != '.') addupload(f);
		}		
		
		if (!mobileversion)
		{		
			if (Ext) Ext.resumeLayouts(true);			
			if (init_anoupload) anoupload();		
			transferPanel.expand();
		}
	}	
	return true;
}




// initialize
function InitFileDrag() 
{

	

	if (document.getElementById("fileselect1")) document.getElementById("fileselect1").addEventListener("change", FileSelectHandler, false);	
	if (document.getElementById('fileselect2')) document.getElementById("fileselect2").addEventListener("change", FileSelectHandler, false);
	
	document.getElementById("fmholder").addEventListener("dragover", FileDragHover, false);
	document.getElementById("fmholder").addEventListener("dragleave", FileDragLeave, false);
	document.getElementById("fmholder").addEventListener("drop", FileSelectHandler, false);
}

	


var myURL = window.URL || window.webkitURL;	

function createnodethumbnail(node,aes,id,imagedata)
{
	storedattr[id] = { target : node };	
	createthumbnail(false,aes,id,imagedata,node);
}

var ab;

function createthumbnail(file,aes,id,imagedata,node)
{
	if (myURL)
	{
		var img = new Image();    
		img.id = id;
		img.aes = aes;
		img.onload = function () 
		{	
			var t = new Date().getTime();
			var canvas = document.createElement('canvas');
			var sx=0;
			var sy=0;
			var x = this.width;
			var y = this.height;
			if (d) console.log(x + ' by ' + y);			
			if (this.width > this.height)
			{
				if (d) console.log('landscape');
				sx = Math.floor((this.width - this.height)/2);
				x = y;
			}
			else if(this.height > this.width)
			{
				if (d) console.log('portrait');
				sy = Math.floor((this.height - this.width)*0.66/2);
				y = x;
			}				
			else
			{
				if (d) console.log('square');
			}
			var ctx = canvas.getContext("2d");
			canvas.width  = 120;
			canvas.height = 120;	
			ctx.drawImage(this, sx, sy, x, y, 0, 0, 120, 120);			
			if (d) console.log('resizing time:', new Date().getTime()-t);
			myURL.revokeObjectURL(this.src);
			var dataURI = canvas.toDataURL('image/jpeg');
			var ab = dataURLToAB(dataURI);
			api_storefileattr(this.id,0,this.aes,ab.buffer);
			if (d) console.log('total time:', new Date().getTime()-t);			
		};			
		try
		{
			if (typeof FileReader !== 'undefined')
			{			
				ThumbFR = new FileReader();
				ThumbFR.onload = function(e) 
				{			
					if (ThumbFR.ab) var thumbstr = ab_to_str(ThumbFR.result);					
					else var thumbstr = e.target.result;					
					img.exif = EXIF.getImageData(new BinaryFile(thumbstr));
					if (file) var mpImg = new MegaPixImage(file);
					else var mpImg = new MegaPixImage(thumbnailBlob);
					var orientation = 1;
					if (img.exif.Orientation) orientation = img.exif.Orientation;						
					mpImg.render(img, { maxWidth: 500, maxHeight: 500, quality: 0.8, orientation: orientation });
				}
				if (file)
				{
					if (ThumbFR.readAsBinaryString) ThumbFR.readAsBinaryString(file);
					else 
					{
						ThumbFR.ab=1;
						ThumbFR.readAsArrayBuffer(file);
					}					
				}
				else
				{
					var thumbnailBlob = new Blob([new Uint8Array(imagedata)],{ type: 'image/jpeg' });					
					if (ThumbFR.readAsBinaryString) ThumbFR.readAsBinaryString(thumbnailBlob);									
					else
					{
						ThumbFR.ab=1;
						ThumbFR.readAsArrayBuffer(thumbnailBlob);
					}
				}
			}
		}
		catch(e) { console.log('thumbnail error', e) }
	}  	
}




function dataURLToAB(dataURL) 
{
    if (dataURL.indexOf(';base64,') == -1) 
	{
      var parts = dataURL.split(',');
      var contentType = parts[0].split(':')[1];
      var raw = parts[1];
    }
	else
	{
		var parts = dataURL.split(';base64,');
		var contentType = parts[0].split(':')[1];
		var raw = window.atob(parts[1]);
	}
    var rawLength = raw.length;
    var uInt8Array = new Uint8Array(((rawLength+15)&-16));
    for (var i = 0; i < rawLength; ++i)  uInt8Array[i] = raw.charCodeAt(i); 

	return uInt8Array;
}


/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);

/*! jQuery UI - v1.9.2 - 2012-12-05
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.slider.js
* Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=parseFloat(t[1],10)===6}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.ui.ie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.9.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var t,r,i=this.options,s=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",u=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(i.disabled?" ui-slider-disabled ui-disabled":"")),this.range=e([]),i.range&&(i.range===!0&&(i.values||(i.values=[this._valueMin(),this._valueMin()]),i.values.length&&i.values.length!==2&&(i.values=[i.values[0],i.values[0]])),this.range=e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(i.range==="min"||i.range==="max"?" ui-slider-range-"+i.range:""))),r=i.values&&i.values.length||1;for(t=s.length;t<r;t++)u.push(o);this.handles=s.add(e(u.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(e){e.preventDefault()}).mouseenter(function(){i.disabled||e(this).addClass("ui-state-hover")}).mouseleave(function(){e(this).removeClass("ui-state-hover")}).focus(function(){i.disabled?e(this).blur():(e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),e(this).addClass("ui-state-focus"))}).blur(function(){e(this).removeClass("ui-state-focus")}),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)}),this._on(this.handles,{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}),this._refreshValue(),this._animateOff=!1},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));i>n&&(i=n,s=e(this),o=t)}),c.range===!0&&this.values(1)===c.min&&(o+=1,s=e(this.handles[o])),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"disabled":n?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.prop("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.prop("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))}})})(jQuery);

/*!
 * jQuery Tools v1.2.6 - The missing UI library for the Web
 * 
 * overlay/overlay.js
 * scrollable/scrollable.js
 * tabs/tabs.js
 * tooltip/tooltip.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
/*! jQuery v1.6.4 http://jquery.com/ | http://jquery.org/license */
(function(a,b){function cu(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cr(a){if(!cg[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ch||(ch=c.createElement("iframe"),ch.frameBorder=ch.width=ch.height=0),b.appendChild(ch);if(!ci||!ch.createElement)ci=(ch.contentWindow||ch.contentDocument).document,ci.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),ci.close();d=ci.createElement(a),ci.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ch)}cg[a]=e}return cg[a]}function cq(a,b){var c={};f.each(cm.concat.apply([],cm.slice(0,b)),function(){c[this]=a});return c}function cp(){cn=b}function co(){setTimeout(cp,0);return cn=f.now()}function cf(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ce(){try{return new a.XMLHttpRequest}catch(b){}}function b$j(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bZ(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bY(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bA.test(a)?d(a,e):bY(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)bY(a+"["+e+"]",b[e],c,d);else d(a,b)}function bX(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bW(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bP,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bW(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bW(a,c,d,e,"*",g));return l}function bV(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bL),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function by(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bt:bu;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bv(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function bl(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bd,"/*$j0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bk(a){f.nodeName(a,"input")?bj(a):"getElementsByTagName"in a&&f.grep(a.getElementsByTagName("input"),bj)}function bj(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bi(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bh(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bg(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bf(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function V(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(Q.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function U(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function M(a,b){return(a&&a!=="*"?a+".":"")+b.replace(y,"`").replace(z,"&")}function L(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$j)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(w,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function J(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function D(){return!0}function C(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"-$j1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$j,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$j|#([\w\-]*)$j)/,j=/\S/,k=/^\s+/,l=/\s+$j/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$j/,o=/^[\],:{}\s]*$j/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.6.4",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),B.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$j===e&&(a.$j=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!B){B=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(!b)return-1;if(I)return I.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test("\u003f")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$j/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g+"With"](this===b?d:this,[h])}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$j/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.firstChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0),o.innerHTML="",n.removeChild(o);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$j/,j=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i=f.expando,j=typeof c=="string",k=a.nodeType,l=k?f.cache:a,m=k?a[f.expando]:a[f.expando]&&f.expando;if((!m||e&&m&&l[m]&&!l[m][i])&&j&&d===b)return;m||(k?a[f.expando]=m=++f.uuid:m=f.expando),l[m]||(l[m]={},k||(l[m].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?l[m][i]=f.extend(l[m][i],c):l[m]=f.extend(l[m],c);g=l[m],e&&(g[i]||(g[i]={}),g=g[i]),d!==b&&(g[f.camelCase(c)]=d);if(c==="events"&&!g[c])return g[i]&&g[i].events;j?(h=g[c],h==null&&(h=g[f.camelCase(c)])):h=g;return h}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e=f.expando,g=a.nodeType,h=g?f.cache:a,i=g?a[f.expando]:f.expando;if(!h[i])return;if(b){d=c?h[i][e]:h[i];if(d){d[b]||(b=f.camelCase(b)),delete d[b];if(!l(d))return}}if(c){delete h[i][e];if(!l(h[i]))return}var j=h[i][e];f.support.deleteExpando||!h.setInterval?delete h[i]:h[i]=null,j?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=j):g&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$j/i,r=/^(?:button|input|object|select|textarea)$j/i,s=/^a(?:rea)?$j/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$j/i,u,v;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(o);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(o);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(n," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;d=e.value;return typeof d=="string"?d.replace(p,""):d==null?"":d}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);j&&(c=f.attrFix[c]||c,i=f.attrHooks[c],i||(t.test(c)?i=v:u&&(i=u)));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j&&(h=i.get(a,c))!==null)return h;h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.attr(a,b,""),a.removeAttribute(b),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(u&&f.nodeName(a,"button"))return u.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(u&&f.nodeName(a,"button"))return u.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);i&&(c=f.propFix[c]||c,h=f.propHooks[c]);return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==null?g:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabIndex=f.propHooks.tabIndex,v={get:function(a,c){var d;return f.prop(a,c)===!0||(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},f.support.getSetAttribute||(u=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var w=/\.(.*)$j/,x=/^(?:textarea|input|select)$j/i,y=/\./g,z=/ /g,A=/[^\w\s.|`]/g,B=function(a){return a.replace(A,"\\$j&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=C;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=C);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),B).join("\\.(?:.*\\.)?")+"(\\.|$j)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete 
t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$j)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d!=null?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,M(a.origType,a.selector),f.extend({},a,{handler:L,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,M(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?D:C):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=D;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=D;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=D,this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C};var E=function(a){var b=a.relatedTarget,c=!1,d=a.type;a.type=a.data,b!==this&&(b&&(c=f.contains(this,b)),c||(f.event.handle.apply(this,arguments),a.type=d))},F=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?F:E,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?F:E)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="submit"||c==="image")&&f(b).closest("form").length&&J("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&J("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var G,H=function(a){var b=f.nodeName(a,"input")?a.type:"",c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},I=function(c){var d=c.target,e,g;if(!!x.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=H(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:I,beforedeactivate:I,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&I.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&I.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",H(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in G)f.event.add(this,c+".specialChange",G[c]);return x.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return x.test(this.nodeName)}},G=f.event.special.change.filters,G.focus=G.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var K={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||C,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=w.exec(h),k="",j&&(k=j[0],h=h.replace(w,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,K[h]?(a.push(K[h]+k),h=h+k):h=(K[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+M(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+M(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$j)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$j="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$j)|^\.([\w\-]+$j)|^#([\w\-]+$j)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$j&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$j1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var N=/Until$j/,O=/^(?:parents|prevUntil|prevAll)/,P=/,/,Q=/^.[^:#\[\.,]*$j/,R=Array.prototype.slice,S=f.expr.match.POS,T={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(V(this,a,!1),"not",a)},filter:function(a){return this.pushStack(V(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=S.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=S.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(U(c[0])||U(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=R.call(arguments);N.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!T[a]?f.unique(e):e,(this.length>1||P.test(d))&&O.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$j=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|object|embed|option|style)/i,bb=/checked\s*(?:[^=]|=\s*.checked.)/i,bc=/\/(java|ecma)script/i,bd=/^\s*<!(?:\[CDATA\[|\-\-)/,be={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};be.optgroup=be.option,be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,f.support.htmlSerialize||(be._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!be[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$j1></$j2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bb.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bf(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bl)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i;b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!ba.test(a[0])&&(f.support.checkClone||!bb.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean
(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bh(a,d),e=bi(a),g=bi(d);for(h=0;e[h];++h)g[h]&&bh(e[h],g[h])}if(b){bg(a,d);if(c){e=bi(a),g=bi(d);for(h=0;e[h];++h)bg(e[h],g[h])}}e=g=null;return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$j1></$j2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=be[l]||be._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$j.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bk(k[i]);else bk(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bc.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bm=/alpha\([^)]*\)/i,bn=/opacity=([^)]*)/,bo=/([A-Z]|^ms)/g,bp=/^-?\d+(?:px)?$j/i,bq=/^-?\d/,br=/^([\-+])=([\-+.\de]+)/,bs={position:"absolute",visibility:"hidden",display:"block"},bt=["Left","Right"],bu=["Top","Bottom"],bv,bw,bx;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bv(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=br.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bv)return bv(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return by(a,b,d);f.swap(a,bs,function(){e=by(a,b,d)});return e}},set:function(a,b){if(!bp.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bn.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$j1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bm,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bm.test(g)?g.replace(bm,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bv(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bw=function(a,c){var d,e,g;c=c.replace(bo,"-$j1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bx=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bp.test(d)&&bq.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bv=bw||bx,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bz=/%20/g,bA=/\[\]$j/,bB=/\r?\n/g,bC=/#.*$j/,bD=/^(.*?):[ \t]*([^\r\n]*)\r?$j/mg,bE=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$j/i,bF=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$j/,bG=/^(?:GET|HEAD)$j/,bH=/^\/\//,bI=/\?/,bJ=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bK=/^(?:select|textarea)/i,bL=/\s+/,bM=/([?&])_=[^&]*/,bN=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bO=f.fn.load,bP={},bQ={},bR,bS,bT=["*/"]+["*"];try{bR=e.href}catch(bU){bR=c.createElement("a"),bR.href="",bR=bR.href}bS=bN.exec(bR.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bO)return bO.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bJ,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bK.test(this.nodeName)||bE.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bB,"\r\n")}}):{name:b.name,value:c.replace(bB,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?bX(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),bX(a,b);return a},ajaxSettings:{url:bR,isLocal:bF.test(bS[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bT},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bV(bP),ajaxTransport:bV(bQ),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?bZ(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=b$j(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bD.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bC,"").replace(bH,bS[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bL),d.crossDomain==null&&(r=bN.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bS[1]&&r[2]==bS[2]&&(r[3]||(r[1]==="http:"?80:443))==(bS[3]||(bS[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bW(bP,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bG.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bI.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bM,"$j1_="+x);d.url=y+(y===d.url?(bI.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bT+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bW(bQ,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){s<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)bY(g,a[g],c,e);return d.join("&").replace(bz,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var b_=f.now(),ca=/(\=)\?(&|$j)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+b_++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ca.test(b.url)||e&&ca.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$j1"+h+"$j2";b.jsonp!==!1&&(j=j.replace(ca,l),b.url===j&&(e&&(k=k.replace(ca,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cb=a.ActiveXObject?function(){for(var a in cd)cd[a](0,1)}:!1,cc=0,cd;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ce()||cf()}:ce,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cb&&delete cd[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cc,cb&&(cd||(cd={},f(a).unload(cb)),cd[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cg={},ch,ci,cj=/^(?:toggle|show|hide)$j/,ck=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$j/i,cl,cm=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cn;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cq("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cr(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cq("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cq("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cr(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cj.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=ck.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cq("show",1),slideUp:cq("hide",1),slideToggle:cq("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return d.step(a)}var d=this,e=f.fx;this.startTime=cn||co(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&f.timers.push(g)&&!cl&&(cl=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cn||co(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cl),cl=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cs=/^t(?:able|d|h)$j/i,ct=/^(?:body|html)$j/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cu(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cs.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=ct.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!ct.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cu(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cu(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a&&a.style?parseFloat(f.css(a,d,"padding")):null},f.fn["outer"+c]=function(a){var b=this[0];return b&&b.style?parseFloat(f.css(b,d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNaN(j)?i:j}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$j=f})(window);(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.overlay={addEffect:function(a,b,d){c[a]=[b,d]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var b=[],c={};a.tools.overlay.addEffect("default",function(b,c){var d=this.getConf(),e=a(window);d.fixed||(b.top+=e.scrollTop(),b.left+=e.scrollLeft()),b.position=d.fixed?"fixed":"absolute",this.getOverlay().css(b).fadeIn(d.speed,c)},function(a){this.getOverlay().fadeOut(this.getConf().closeSpeed,a)});function d(d,e){var f=this,g=d.add(f),h=a(window),i,j,k,l=a.tools.expose&&(e.mask||e.expose),m=Math.random().toString().slice(10);l&&(typeof l=="string"&&(l={color:l}),l.closeOnClick=l.closeOnEsc=!1);var n=e.target||d.attr("rel");j=n?a(n):null||d;if(!j.length)throw"Could not find Overlay: "+n;d&&d.index(j)==-1&&d.click(function(a){f.load(a);return a.preventDefault()}),a.extend(f,{load:function(d){if(f.isOpened())return f;var i=c[e.effect];if(!i)throw"Overlay: cannot find effect : \""+e.effect+"\"";e.oneInstance&&a.each(b,function(){this.close(d)}),d=d||a.Event(),d.type="onBeforeLoad",g.trigger(d);if(d.isDefaultPrevented())return f;k=!0,l&&a(j).expose(l);var n=e.top,o=e.left,p=j.outerWidth({margin:!0}),q=j.outerHeight({margin:!0});typeof n=="string"&&(n=n=="center"?Math.max((h.height()-q)/2,0):parseInt(n,10)/100*h.height()),o=="center"&&(o=Math.max((h.width()-p)/2,0)),i[0].call(f,{top:n,left:o},function(){k&&(d.type="onLoad",g.trigger(d))}),l&&e.closeOnClick&&a.mask.getMask().one("click",f.close),e.closeOnClick&&a(document).bind("click."+m,function(b){a(b.target).parents(j).length||f.close(b)}),e.closeOnEsc&&a(document).bind("keydown."+m,function(a){a.keyCode==27&&f.close(a)});return f},close:function(b){if(!f.isOpened())return f;b=b||a.Event(),b.type="onBeforeClose",g.trigger(b);if(!b.isDefaultPrevented()){k=!1,c[e.effect][1].call(f,function(){b.type="onClose",g.trigger(b)}),a(document).unbind("click."+m).unbind("keydown."+m),l&&a.mask.close();return f}},getOverlay:function(){return j},getTrigger:function(){return d},getClosers:function(){return i},isOpened:function(){return k},getConf:function(){return e}}),a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}}),i=j.find(e.close||".close"),!i.length&&!e.close&&(i=a("<a class=\"close\"></a>"),j.prepend(i)),i.click(function(a){f.close(a)}),e.load&&f.load()}a.fn.overlay=function(c){var e=this.data("overlay");if(e)return e;a.isFunction(c)&&(c={onBeforeLoad:c}),c=a.extend(!0,{},a.tools.overlay.conf,c),this.each(function(){e=new d(a(this),c),b.push(e),a(this).data("overlay",e)});return c.api?e:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.scrollable={conf:{activeClass:"active",circular:!1,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:"> *",items:".items",keyboard:!0,mousewheel:!1,next:".next",prev:".prev",size:1,speed:400,vertical:!1,touch:!0,wheelSpeed:0}};function b(a,b){var c=parseInt(a.css(b),10);if(c)return c;var d=a[0].currentStyle;return d&&d.width&&parseInt(d.width,10)}function c(b,c){var d=a(c);return d.length<2?d:b.parent().find(c)}var d;function e(b,e){var f=this,g=b.add(f),h=b.children(),i=0,j=e.vertical;d||(d=f),h.length>1&&(h=a(e.items,b)),e.size>1&&(e.circular=!1),a.extend(f,{getConf:function(){return e},getIndex:function(){return i},getSize:function(){return f.getItems().size()},getNaviButtons:function(){return n.add(o)},getRoot:function(){return b},getItemWrap:function(){return h},getItems:function(){return h.find(e.item).not("."+e.clonedClass)},move:function(a,b){return f.seekTo(i+a,b)},next:function(a){return f.move(e.size,a)},prev:function(a){return f.move(-e.size,a)},begin:function(a){return f.seekTo(0,a)},end:function(a){return f.seekTo(f.getSize()-1,a)},focus:function(){d=f;return f},addItem:function(b){b=a(b),e.circular?(h.children().last().before(b),h.children().first().replaceWith(b.clone().addClass(e.clonedClass))):(h.append(b),o.removeClass("disabled")),g.trigger("onAddItem",[b]);return f},seekTo:function(b,c,k){b.jquery||(b*=1);if(e.circular&&b===0&&i==-1&&c!==0)return f;if(!e.circular&&b<0||b>f.getSize()||b<-1)return f;var l=b;b.jquery?b=f.getItems().index(b):l=f.getItems().eq(b);var m=a.Event("onBeforeSeek");if(!k){g.trigger(m,[b,c]);if(m.isDefaultPrevented()||!l.length)return f}var n=j?{top:-l.position().top}:{left:-l.position().left};i=b,d=f,c===undefined&&(c=e.speed),h.animate(n,c,e.easing,k||function(){g.trigger("onSeek",[b])});return f}}),a.each(["onBeforeSeek","onSeek","onAddItem"],function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}});if(e.circular){var k=f.getItems().slice(-1).clone().prependTo(h),l=f.getItems().eq(1).clone().appendTo(h);k.add(l).addClass(e.clonedClass),f.onBeforeSeek(function(a,b,c){if(!a.isDefaultPrevented()){if(b==-1){f.seekTo(k,c,function(){f.end(0)});return a.preventDefault()}b==f.getSize()&&f.seekTo(l,c,function(){f.begin(0)})}});var m=b.parents().add(b).filter(function(){if(a(this).css("display")==="none")return!0});m.length?(m.show(),f.seekTo(0,0,function(){}),m.hide()):f.seekTo(0,0,function(){})}var n=c(b,e.prev).click(function(a){a.stopPropagation(),f.prev()}),o=c(b,e.next).click(function(a){a.stopPropagation(),f.next()});e.circular||(f.onBeforeSeek(function(a,b){setTimeout(function(){a.isDefaultPrevented()||(n.toggleClass(e.disabledClass,b<=0),o.toggleClass(e.disabledClass,b>=f.getSize()-1))},1)}),e.initialIndex||n.addClass(e.disabledClass)),f.getSize()<2&&n.add(o).addClass(e.disabledClass),e.mousewheel&&a.fn.mousewheel&&b.mousewheel(function(a,b){if(e.mousewheel){f.move(b<0?1:-1,e.wheelSpeed||50);return!1}});if(e.touch){var p={};h[0].ontouchstart=function(a){var b=a.touches[0];p.x=b.clientX,p.y=b.clientY},h[0].ontouchmove=function(a){if(a.touches.length==1&&!h.is(":animated")){var b=a.touches[0],c=p.x-b.clientX,d=p.y-b.clientY;f[j&&d>0||!j&&c>0?"next":"prev"](),a.preventDefault()}}}e.keyboard&&a(document).bind("keydown.scrollable",function(b){if(!(!e.keyboard||b.altKey||b.ctrlKey||b.metaKey||a(b.target).is(":input"))){if(e.keyboard!="static"&&d!=f)return;var c=b.keyCode;if(j&&(c==38||c==40)){f.move(c==38?-1:1);return b.preventDefault()}if(!j&&(c==37||c==39)){f.move(c==37?-1:1);return b.preventDefault()}}}),e.initialIndex&&f.seekTo(e.initialIndex,0,function(){})}a.fn.scrollable=function(b){var c=this.data("scrollable");if(c)return c;b=a.extend({},a.tools.scrollable.conf,b),this.each(function(){c=new e(a(this),b),a(this).data("scrollable",c)});return b.api?c:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:!1,slideUpSpeed:400,slideDownSpeed:400,history:!1},addEffect:function(a,c){b[a]=c}};var b={"default":function(a,b){this.getPanes().hide().eq(a).show(),b.call()},fade:function(a,b){var c=this.getConf(),d=c.fadeOutSpeed,e=this.getPanes();d?e.fadeOut(d):e.hide(),e.eq(a).fadeIn(c.fadeInSpeed,b)},slide:function(a,b){var c=this.getConf();this.getPanes().slideUp(c.slideUpSpeed),this.getPanes().eq(a).slideDown(c.slideDownSpeed,b)},ajax:function(a,b){this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"),b)}},c,d;a.tools.tabs.addEffect("horizontal",function(b,e){if(!c){var f=this.getPanes().eq(b),g=this.getCurrentPane();d||(d=this.getPanes().eq(0).width()),c=!0,f.show(),g.animate({width:0},{step:function(a){f.css("width",d-a)},complete:function(){a(this).hide(),e.call(),c=!1}}),g.length||(e.call(),c=!1)}});function e(c,d,e){var f=this,g=c.add(this),h=c.find(e.tabs),i=d.jquery?d:c.children(d),j;h.length||(h=c.children()),i.length||(i=c.parent().find(d)),i.length||(i=a(d)),a.extend(this,{click:function(c,d){var i=h.eq(c);typeof c=="string"&&c.replace("#","")&&(i=h.filter("[href*="+c.replace("#","")+"]"),c=Math.max(h.index(i),0));if(e.rotate){var k=h.length-1;if(c<0)return f.click(k,d);if(c>k)return f.click(0,d)}if(!i.length){if(j>=0)return f;c=e.initialIndex,i=h.eq(c)}if(c===j)return f;d=d||a.Event(),d.type="onBeforeClick",g.trigger(d,[c]);if(!d.isDefaultPrevented()){b[e.effect].call(f,c,function(){j=c,d.type="onClick",g.trigger(d,[c])}),h.removeClass(e.current),i.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return f.click(j+1)},prev:function(){return f.click(j-1)},destroy:function(){h.unbind(e.event).removeClass(e.current),i.find("a[href^=#]").unbind("click.T");return f}}),a.each("onBeforeClick,onClick".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}}),e.history&&a.fn.history&&(a.tools.history.init(h),e.event="history"),h.each(function(b){a(this).bind(e.event,function(a){f.click(b,a);return a.preventDefault()})}),i.find("a[href^=#]").bind("click.T",function(b){f.click(a(this).attr("href"),b)}),location.hash&&e.tabs=="a"&&c.find("[href="+location.hash+"]").length?f.click(location.hash):(e.initialIndex===0||e.initialIndex>0)&&f.click(e.initialIndex)}a.fn.tabs=function(b,c){var d=this.data("tabs");d&&(d.destroy(),this.removeData("tabs")),a.isFunction(c)&&(c={onBeforeClick:c}),c=a.extend({},a.tools.tabs.conf,c),this.each(function(){d=new e(a(this),b,c),a(this).data("tabs",d)});return c.api?d:this}})(jQuery);
(function(a){a.tools=a.tools||{version:"v1.2.6"},a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,fadeIE:!1,position:["top","center"],offset:[0,0],relative:!1,cancelDefault:!0,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,c,d){b[a]=[c,d]}};var b={toggle:[function(a){var b=this.getConf(),c=this.getTip(),d=b.opacity;d<1&&c.css({opacity:d}),c.show(),a.call()},function(a){this.getTip().hide(),a.call()}],fade:[function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeTo(c.fadeInSpeed,c.opacity,b):(this.getTip().show(),b())},function(b){var c=this.getConf();!a.browser.msie||c.fadeIE?this.getTip().fadeOut(c.fadeOutSpeed,b):(this.getTip().hide(),b())}]};function c(b,c,d){var e=d.relative?b.position().top:b.offset().top,f=d.relative?b.position().left:b.offset().left,g=d.position[0];e-=c.outerHeight()-d.offset[0],f+=b.outerWidth()+d.offset[1],/iPad/i.test(navigator.userAgent)&&(e-=a(window).scrollTop());var h=c.outerHeight()+b.outerHeight();g=="center"&&(e+=h/2),g=="bottom"&&(e+=h),g=d.position[1];var i=c.outerWidth()+b.outerWidth();g=="center"&&(f-=i/2),g=="left"&&(f-=i);return{top:e,left:f}}function d(d,e){var f=this,g=d.add(f),h,i=0,j=0,k=d.attr("title"),l=d.attr("data-tooltip"),m=b[e.effect],n,o=d.is(":input"),p=o&&d.is(":checkbox, :radio, select, :button, :submit"),q=d.attr("type"),r=e.events[q]||e.events[o?p?"widget":"input":"def"];if(!m)throw"Nonexistent effect \""+e.effect+"\"";r=r.split(/,\s*/);if(r.length!=2)throw"Tooltip: bad events configuration for "+q;d.bind(r[0],function(a){clearTimeout(i),e.predelay?j=setTimeout(function(){f.show(a)},e.predelay):f.show(a)}).bind(r[1],function(a){clearTimeout(j),e.delay?i=setTimeout(function(){f.hide(a)},e.delay):f.hide(a)}),k&&e.cancelDefault&&(d.removeAttr("title"),d.data("title",k)),a.extend(f,{show:function(b){if(!h){l?h=a(l):e.tip?h=a(e.tip).eq(0):k?h=a(e.layout).addClass(e.tipClass).appendTo(document.body).hide().append(k):(h=d.next(),h.length||(h=d.parent().next()));if(!h.length)throw"Cannot find tooltip for "+d}if(f.isShown())return f;h.stop(!0,!0);var o=c(d,h,e);e.tip&&h.html(d.data("title")),b=a.Event(),b.type="onBeforeShow",g.trigger(b,[o]);if(b.isDefaultPrevented())return f;o=c(d,h,e),h.css({position:"absolute",top:o.top,left:o.left}),n=!0,m[0].call(f,function(){b.type="onShow",n="full",g.trigger(b)});var p=e.events.tooltip.split(/,\s*/);h.data("__set")||(h.unbind(p[0]).bind(p[0],function(){clearTimeout(i),clearTimeout(j)}),p[1]&&!d.is("input:not(:checkbox, :radio), textarea")&&h.unbind(p[1]).bind(p[1],function(a){a.relatedTarget!=d[0]&&d.trigger(r[1].split(" ")[0])}),e.tip||h.data("__set",!0));return f},hide:function(c){if(!h||!f.isShown())return f;c=a.Event(),c.type="onBeforeHide",g.trigger(c);if(!c.isDefaultPrevented()){n=!1,b[e.effect][1].call(f,function(){c.type="onHide",g.trigger(c)});return f}},isShown:function(a){return a?n=="full":n},getConf:function(){return e},getTip:function(){return h},getTrigger:function(){return d}}),a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(b,c){a.isFunction(e[c])&&a(f).bind(c,e[c]),f[c]=function(b){b&&a(f).bind(c,b);return f}})}a.fn.tooltip=function(b){var c=this.data("tooltip");if(c)return c;b=a.extend(!0,{},a.tools.tooltip.conf,b),typeof b.position=="string"&&(b.position=b.position.split(/,?\s/)),this.each(function(){c=new d(a(this),b),a(this).data("tooltip",c)});return b.api?c:this}})(jQuery);


var fileexttxt = [];
var fileextimg = [];

fileexttxt['t_exe'] = "Executable";
fileextimg['t_exe'] = "images/extension/exe.png";
fileexttxt['t_com'] = "Executable";
fileextimg['t_com'] = "images/extension/com.png";
fileexttxt['t_bin'] = "Executable";
fileextimg['t_bin'] = "images/extension/exe.png";
fileexttxt['t_php'] = "PHP";
fileextimg['t_php'] = "images/extension/php.png";
fileexttxt['t_php3'] = "PHP3";
fileextimg['t_php3'] = "images/extension/php.png";
fileexttxt['t_php4'] = "PHP4";
fileextimg['t_php4'] = "images/extension/php.png";
fileexttxt['t_php5'] = "PHP5";
fileextimg['t_php5'] = "images/extension/php.png";
fileexttxt['t_phtml'] = "PHTML";
fileextimg['t_phtml'] = "images/extension/phtml.png";
fileexttxt['t_inc'] = "INC";
fileextimg['t_inc'] = "images/extension/inc.png";
fileexttxt['t_sql'] = "SQL";
fileextimg['t_sql'] = "images/extension/sql.png";
fileexttxt['t_pl'] = "Perl";
fileextimg['t_pl'] = "images/extension/pl.png";
fileexttxt['t_cgi'] = "CGI";
fileextimg['t_cgi'] = "images/extension/cgi.png";
fileexttxt['t_py'] = "Python";
fileextimg['t_py'] = "images/extension/py.png";
fileexttxt['t_sh'] = "Shell";
fileextimg['t_sh'] = "images/extension/sh.png";
fileexttxt['t_c'] = "C";
fileextimg['t_c'] = "images/extension/c.png";
fileexttxt['t_cc'] = "CC";
fileextimg['t_cc'] = "images/extension/cc.png";
fileexttxt['t_cpp'] = "CPP";
fileextimg['t_cpp'] = "images/extension/cpp.png";
fileexttxt['t_cxx'] = "CXX";
fileextimg['t_cxx'] = "images/extension/cxx.png";
fileexttxt['t_h'] = "H";
fileextimg['t_h'] = "images/extension/h.png";
fileexttxt['t_hpp'] = "HPP";
fileextimg['t_hpp'] = "images/extension/hpp.png";
fileexttxt['t_java'] = "Java";
fileextimg['t_java'] = "images/extension/java.png";
fileexttxt['t_class'] = "Class";
fileextimg['t_class'] = "images/extension/class.png";
fileexttxt['t_jar'] = "Jar";
fileextimg['t_jar'] = "images/extension/jar.png";
fileexttxt['t_htm'] = "HTM";
fileextimg['t_htm'] = "images/extension/htm.png";
fileexttxt['t_html'] = "HTML";
fileextimg['t_html'] = "images/extension/html.png";
fileexttxt['t_shtml'] = "SHTML";
fileextimg['t_shtml'] = "images/extension/shtml.png";
fileexttxt['t_dhtml'] = "DHTML";
fileextimg['t_dhtml'] = "images/extension/dhtml.png";
fileexttxt['t_xhtml'] = "XHTML";
fileextimg['t_xhtml'] = "images/extension/xhtml.png";
fileexttxt['t_xml'] = "XML";
fileextimg['t_xml'] = "images/extension/xml.png";
fileexttxt['t_js'] = "Javascript";
fileextimg['t_js'] = "images/extension/js.png";
fileexttxt['t_css'] = "CSS";
fileextimg['t_css'] = "images/extension/css.png";
fileexttxt['t_gif'] = "GIF/image";
fileextimg['t_gif'] = "images/extension/gif.png";
fileexttxt['t_jpg'] = "JPG/image";
fileextimg['t_jpg'] = "images/extension/jpg.png";
fileexttxt['t_tif'] = "TIF/image";
fileextimg['t_tif'] = "images/extension/tif.png";
fileexttxt['t_jpeg'] = "JPEG/image";
fileextimg['t_jpeg'] = "images/extension/jpeg.png";
fileexttxt['t_bmp'] = "BMP/image";
fileextimg['t_bmp'] = "images/extension/bmp.png";
fileexttxt['t_png'] = "PNG/image";
fileextimg['t_png'] = "images/extension/png.png";
fileexttxt['t_zip'] = "ZIP/archive";
fileextimg['t_zip'] = "images/extension/zip.png";
fileexttxt['t_tar'] = "TAR/archive";
fileextimg['t_tar'] = "images/extension/tar.png";
fileexttxt['t_tgz'] = "TGZ/archive";
fileextimg['t_tgz'] = "images/extension/tgz.png";
fileexttxt['t_gz'] = "GZ/archive";
fileextimg['t_gz'] = "images/extension/gz.png";
fileexttxt['t_bz2'] = "BZ2";
fileextimg['t_bz2'] = "images/extension/bz2.png";
fileexttxt['t_tbz'] = "TBZ";
fileextimg['t_tbz'] = "images/extension/tbz.png";
fileexttxt['t_rar'] = "RAR/archive";
fileextimg['t_rar'] = "images/extension/rar.png";
fileexttxt['t_mp3'] = "MP3/audio";
fileextimg['t_mp3'] = "images/extension/mp3.png";
fileexttxt['t_wav'] = "WAV/audio";
fileextimg['t_wav'] = "images/extension/wav.png";
fileexttxt['t_midi'] = "MID/audio";
fileextimg['t_midi'] = "images/extension/mid.png";
fileexttxt['t_mid'] = "MID/audio";
fileextimg['t_mid'] = "images/extension/mid.png";
fileexttxt['t_rm'] = "Real Media/audio";
fileextimg['t_rm'] = "images/extension/rm.png";
fileexttxt['t_ra'] = "Real Audio/audio";
fileextimg['t_ra'] = "images/extension/ra.png";
fileexttxt['t_ram'] = "Real Audio/audio";
fileextimg['t_ram'] = "images/extension/ra.png";
fileexttxt['t_pls'] = "Playlist";
fileextimg['t_pls'] = "images/extension/pls.png";
fileexttxt['t_m3u'] = "M3U";
fileextimg['t_m3u'] = "images/extension/m3u.png";
fileexttxt['t_mkv'] = "MKV/video";
fileextimg['t_mkv'] = "images/extension/mkv.png";
fileextimg['t_avi'] = "images/extension/mkv.png";
fileexttxt['t_avi'] = "AVI/video";
fileextimg['t_mp4'] = "images/extension/mkv.png";
fileexttxt['t_mp4'] = "MP4/video";
fileextimg['t_m4v'] = "images/extension/mkv.png";
fileexttxt['t_m4v'] = "M4V/video";
fileextimg['t_mpg'] = "images/extension/mpg.png";
fileexttxt['t_mpg'] = "MPG/video";
fileexttxt['t_mpeg'] = "MPEG/video";
fileextimg['t_mpeg'] = "images/extension/mpeg.png";
fileexttxt['t_mov'] = "MOV/video";
fileextimg['t_mov'] = "images/extension/mov.png";
fileexttxt['t_swf'] = "SWF/flash";
fileextimg['t_swf'] = "images/extension/swf.png";
fileexttxt['t_fla'] = "FLA/flash";
fileextimg['t_fla'] = "images/extension/fla.png";
fileexttxt['t_doc'] = "MS Word";
fileextimg['t_doc'] = "images/extension/doc.png";
fileexttxt['t_docx'] = "MS Word";
fileextimg['t_docx'] = "images/extension/docx.png";
fileexttxt['t_xls'] = "MS Excel";
fileextimg['t_xls'] = "images/extension/xls.png";
fileexttxt['t_xlsx'] = "MS Excel";
fileextimg['t_xlsx'] = "images/extension/xlsx.png";
fileexttxt['t_rtf'] = "RTF/Rich text format";
fileextimg['t_rtf'] = "images/extension/rtf.png";
fileexttxt['t_pdf'] = "PDF";
fileextimg['t_pdf'] = "images/extension/pdf.png";

more_fileextensions =  ["pdf","ppt","vcard","vcf","obj","max","3ds","3dm","kml","torrent","gpx","dxf","dwg","wsg","vb","pif","gadget","apk","msi","sxc","123","ots","nb","gsheet","xlr","ods","svgz","cdr","svg","ps","eps","orf","pef","rwl","mrw","mef","fff","erf","dcr","bay","3fr","srf","rw2","nef","cr2","arw","dng","dwt","irs","ait","art","aip","aia","ai","indd","prtpset","ppj","plb","prproj","aetx","aet","aes","aepx","aep","aec","ncorx","ncor","em","abr","csh","psb","psd","as","asc","ascs","aif","aiff","flac","iff","m4a","wma","srt","flv","3g2","3gp","asf","wmv","pcast","xlt","xltm","xltx","ans","ascii","log","odt","wpd","accdb","db","dbf","mdb","pdb","asp","aspx","asx","fnt","otf","ttf","dotx","wps2","dll","tga","tiff","h","hpp","jar","html","txt","fon","cmd"];

for (var i in more_fileextensions)
{
	fileextimg[more_fileextensions[i]] = 'images/extension/' + more_fileextensions[i] + '.png';
	fileexttxt[more_fileextensions[i]] = more_fileextensions[i].toUpperCase();
}

function investors_submit()
{
	loadingDialog.show();	
	api_req([{ a : 'dd', t: 'investors', name: document.getElementById('investors_name').value, website: document.getElementById('investors_website').value, email: document.getElementById('investors_email').value, phone: document.getElementById('investors_phone').value }],
	{ 
		callback : function (json,params) 
		{ 	
			loadingDialog.hide();
			done_text1 = l[668];
			done_text2 = l[687];
			parsepage(pages['done']);
			init_done();
		}
	});
}




function init_chrome()
{
	if (!chrome_msg) chrome_msg = 'You are using an outdated browser, or you have disabled essential functionality of your browser. Please update your browser and make sure that you keep the default settings.';	
	document.getElementById('chrome_msg').innerHTML = document.getElementById('chrome_msg').innerHTML + chrome_msg;	
	chrome_msg=false;
}

var FileStore,FileGrid,fileroot,mainpanel,dirtree,mcrec,transferGrid,transferPanel,transferStore,topFolderMenu,loadingDialog,FileSorter,Ajax,json,RootID,NetworkID,TrashbinID,InboxID,currentdirid,maxaction,sharing_email,SharingStore,sharingDialog,currentuser,apackets,memsize,transferMenu,canceltransferid, newfolderDialog,itemMenu, transferColumns, columns, sharingColumns, displayPanel,mctree,mcDialog,sharingMenu,sharingGrid,sharingform,newcontactform,newcontactDialog,newfolderform,renameform,renameDialog,clip,chromeDialog,firefoxDialog,topBview,topBviewl;



var u_n = false;

var clipcoppied=false;
var fmstarted=false;
var refreshtree=false;
var refreshgr=false;
var refreshtopmenu=false;
var refreshdirsort=false;
var selectedRecords = [];
var useremails = [];
var userids = [];
var emailaddresses = [];
var sharingData = [];
var selectedUploads = [];
var sharednodes = new Object;
var contacts = [];
var globalfolderids = [];
var trashbinfull=false;
var searchPanel;
var InboxCount = 0;
var farray = [];
var fi = 0;
var treenum = 0;
var requesti = makeid(10);
var sortby = "name";
var sortdirection = "ASC";
var expandedtreenodes = [];
var othersharedfolders = [];
var publicuserkey,waiturl;
var jsfm=true;
var FileTooLarge=0;
var transferprogress = [];
var tmpuploads= [];
var dlheight=0;
var fmconfig = {};
var ext_loading_dialog=false;
var getLinkDialog;
var bwDialog;
var extlayouts=true;
var fminitialized=false;
var topbuttonswidth=false;

var folderlink=false;

var thumbnails = [];

var mobileuploads = [];

if (typeof localStorage != 'undefined')
{
	if (localStorage.fmconfig) fmconfig = JSON.parse(localStorage.fmconfig);	
}


function fm_accept_terms()
{
	termsDialog.close();
	if (u_type === false) setTimeout("fm_accept_terms()",500);
	else
	{	
		api_req([{a: 'up', terms: 'Mq'}]);
		u_attr.terms=1;				
	}
}

function fm_deny_terms()
{
	ul_uploading=false;
	logout();
}



function flashdlchunk(id,url,postdata)
{
	if (d) console.log('flashdlchunk');
	if (d) console.log(id);
	if (d) console.log(url);
	document.getElementById('start_downloaderswf').flashdownloadchunk(id,url,postdata);
}

function flash_downloaded(id,response,status)
{
	//if (response == 'ERROR') alert('error');
	status = 200;
	
	if (d) console.log('flash_downloaded');
	if (d) console.log(status);
	if (d) console.log(id);
	//if (d) console.log(response);
	if (d) console.log(response.length);
	dl_flashdldata(id,response,status);
}


function fm_thumbnails()
{
	if (myURL)
	{	
		if (d) console.log('fm_thumbnails()');		
		var treq=[];	
		var i=0;
		FileStore.each( function (obj) 
		{	
			if (obj.get('fa'))
			{
				if (!thumbnails[obj.get('id')])			
				{				
					treq[obj.get('id')] = 
					{
						fa: obj.get('fa'),
						k: obj.get('key')
					};
					i++;
				}
				else
				{
					if (($('#thumb_' + obj.get('id')).length > 0) &&  ($('#thumb_' + obj.get('id'))[0].src != thumbnails[obj.get('id')]))
					{
						$('#thumb_' + obj.get('id'))[0].src = thumbnails[obj.get('id')];
						$('#thumb_' + obj.get('id'))[0].style.border = '1px solid #BEBEBE';					
						$('#thumb_' + obj.get('id'))[0].style.borderRadius = '5px';
					}
					
					if ($('#mobilethumb_' + obj.get('id')).length > 0)
					{
						$('#mobilethumb_' + obj.get('id') + ' img')[0].src = thumbnails[obj.get('id')];
						$('#mobilethumb_' + obj.get('id')).addClass('image');
					}
				}	
			}
		});
		
		if (i > 0)
		{	
			api_getfileattr(treq,0,function(ctx,node,uint8arr)
			{
				try { var blob = new Blob([uint8arr],{ type: 'image/jpeg' });} catch(err) { }
				if (blob.size < 25) blob = new Blob([uint8arr.buffer],{ type: 'image/jpeg' });
				
				thumbnails[node] = myURL.createObjectURL(blob);					
				if ($('#thumb_' + node).length > 0)
				{
					$('#thumb_' + node)[0].src = thumbnails[node];
					$('#thumb_' + node)[0].style.border = '1px solid #BEBEBE';
					$('#thumb_' + node)[0].style.borderRadius = '5px';	
				}	
				
				if ($('#mobilethumb_' + node).length > 0)
				{
					$('#mobilethumb_' + node + ' img')[0].src = thumbnails[node];
					$('#mobilethumb_' + node).addClass('image');
				}
			});
		}
	}
}




function setOpacity(value) 
{
	testObj.style.opacity = value/10;
	testObj.style.filter = 'alpha(opacity=' + value*10 + ')';
}


function changeOpac(opacity, id) 
{
    var object = document.getElementById(id).style; 
    object.opacity = (opacity / 100); 
    object.MozOpacity = (opacity / 100); 
    object.KhtmlOpacity = (opacity / 100); 
    object.filter = "alpha(opacity=" + opacity + ")"; 
} 

var chromearrowi=0;

function chromearrow()
{
	var chromearrow = document.getElementById('chrome-arrow');
	chromearrow.style.display='';	
	chromearrowmove();
}


function chromearrowmove()
{	
	chromearrowi++;	
	document.getElementById('chrome-arrow').style.display = '';	
	changeOpac(100-(chromearrowi*7),'chrome-arrow');	
	document.getElementById('chrome-arrow').style.top = -200 - (chromearrowi*15) + 'px';
	if (chromearrowi == 10)
	{
		document.getElementById('chrome-arrow').style.display='none';
		chromearrowi=0;
	}
	else setTimeout("chromearrowmove()",50);
}


function fm_matchname(nodeid,name)
{
	if (!nodeid) nodeid = RootID;
	var ar = [];
	FileStore.suspendEvents();
	FileStore.filterBy(function(record,id) 
	{						
		if ((record.get('parentid') == nodeid) && (record.get('name') == name)) return true;	
	});											
	FileStore.each( function (obj) 
	{	
		ar.push({
		id: obj.get('id'),
		size: obj.get('size'),
		name: obj.get('name')
		});					
	});	
	reinstateFileStore();	
	FileStore.resumeEvents();		
	return ar;
}



function storefmconfig(configname,configobject)
{
	if (typeof localStorage == 'undefined') return false;	
	fmconfig[configname] = configobject;
	localStorage.fmconfig = JSON.stringify(fmconfig);
}

function fmtreenode(id,expanded)
{
	var treenodes = {};
	if (fmconfig.treenodes) treenodes = fmconfig.treenodes;
	if (expanded) treenodes[id] = 1;	
	else delete treenodes[id];	
	storefmconfig('treenodes',treenodes);
}

function saveprogress(fileid,bytesloaded,bytestotal)
{
	if (d) console.log('saveprogress');
	if (page == 'download')
	{
		document.getElementById('download_overlay').style.display='none';
		document.getElementById('download_popup').style.left = '-500px';
		document.getElementById('dl_page_flash').style.left = '300px';
		document.getElementById('download_speed').style.display='none';
		document.getElementById('download_timer').style.display='none';		
		document.getElementById('download_perc').innerHTML = Math.floor(bytesloaded/bytestotal*100) + '%';
		document.getElementById('download_progress').style.width = Math.floor(bytesloaded/bytestotal*100) + '%';
	}

	if (document.getElementById('dlswf_' + fileid)) 
	{
		document.getElementById('dlswf_' + fileid).style.width = '0px';
		document.getElementById('dlswf_' + fileid).style.height = '0px';
	}
	if (document.getElementById('progressdiv_' + fileid)) document.getElementById('progressdiv_' + fileid).style.display = '';
	if (document.getElementById('progress_' + fileid)) document.getElementById('progress_' + fileid).style.width = Math.round(bytesloaded/bytestotal*100) + '%';
	if (Ext.get("progressperc_" + fileid)) Ext.get("progressperc_" + fileid).dom.innerHTML = Math.floor(bytesloaded/bytestotal*100) + '%';	
}

function savecomplete(fileid)
{	
	if (d) console.log('save complete');	
	if (page == 'download')
	{
		document.getElementById('download_perc').innerHTML = '100%';
		document.getElementById('download_progress').style.width = '100%';
		document.getElementById('download_overlay').style.display='none';
		document.getElementById('download_popup').style.left = '-500px';
		document.getElementById('dl_page_flash').style.left = '300px';		
	}	
	if (transferStore.getById(fileid)) transferStore.remove(transferStore.getById(fileid));	
	if (document.getElementById('dlswf_' + fileid))
	{
		document.getElementById('dlswf_' + fileid).clear();
		swfobject.removeSWF('dlswf_' + fileid);	
	}
}


var dl_limit_shown=false;

function bwlimitinfo(ctx,r)
{	
	/*
	r[0] is total transferred bytes
	r[1] is quota becoming available
	r[2] is the number of seconds r[1] is becoming available in
	r[3] is "downloads ongoing"
	r[4] is current IP limit
	*/
	loadingDialog.hide();
	if ((!r) || ((r[0]+ctx.filesize) < r[4]))
	{
		if (d) console.log('call resume!');
		if (d) console.log(ctx.id);
		dl_resume(ctx.id);
	}
	else
	{	
		dl_limit_shown=new Date().getTime();		
		var bwlimittxt = l[226];		
		if (r[0] == 0) bwlimittxt = l[362];		
		Ext.get('limitmsg').dom.innerHTML = bwlimittxt.replace('[X1]',bytesToSize(r[0])).replace('[X3]',bytesToSize(r[4])).replace('[X2]',bytesToSize(ctx.filesize)) + '<br>' + l[227];		
		Ext.getBody().mask();
		bwDialog.show();
	}
}

function refreshtreepanel()
{			
	var folderids = [];	
	function chkopf(folderid)
	{						
		var treenode = dirroot.getNodeById(folderid);					
		if (treenode)
		{
			if (treenode.isExpanded()) expandedtreenodes[treenode.data.id] = 1;
			var childnodes = treenode.childNodes;			
			for(var i in childnodes) chkopf(childnodes[i].data.id);	
		}					
	}		
	chkopf('INVROOT');		
	FileStore.suspendEvents();	
	createtree(dirroot,0);				
	expandedtreenodes = [];	
	reinstateFileStore();	
	FileStore.resumeEvents();	
}	

function isCircular(fromid,toid)
{
	var node = dirroot.getNodeById(fromid);	
	if (node)
	{	
		var frompath = node.getPath();								
		var topath = dirroot.getNodeById(toid).getPath();								
		if (topath.substr(0,frompath.length) == frompath)
		{
			if (d) console.log('circular block');
			return true;				
		}
	}
	return false;
}

function process_ok(ok)
{
	for(i in ok)
	{
		if (ok[i].ha ==  crypto_handleauth(ok[i].h)) u_sharekeys[ok[i].h] = decrypt_key(u_k_aes,base64_to_a32(ok[i].k));
		else 
		{
			if (d) console.log('RECEIVED FAKE SHARE NODE ' + ok[i].ha);
			if (d) console.log(ok[i]);
		}
	}
}

function cleartrashbin()
{
	opendirectory(TrashbinID);				
	Ext.MessageBox.show(
	{		
		id: 'trashbinmsg',
		title: l[14],
		msg: l[15],
		buttons: Ext.MessageBox.YESNO,
		fn: function(answer) 
		{ 
			if (answer == 'yes')
			{
				// remove permanently:									
				FileGrid.selModel.selectAll();
				document.getElementById('overlay').style.display='none';				
				setTimeout("removefromtrash()",100);
			}
		}
	});
}

function process_u(u,ap)
{
	if (d) console.log('process_u');
	if (d) console.log(u);
	var mdata = [];
	var edata = [];
	for(i in u)
	{			
		// if user is a contact, add to the contact list (but not if the user is myself)
		if ((u[i].c == 1) && (u[i].u !== currentuser))
		{				
			var node = FileStore.getById(u[i].u);
			if (!node)
			{
				mdata.push(
				{
					id: 		u[i].u,
					name: 		u[i].m,
					size: 		-1,						
					type:		'folder',
					icon: 		staticpath + 'images/small_contact.png',
					parentid:	'NETWORK',
					folder:		1,
					owner: 		u[i].u,
					date: 		u[i].ts,
					attrs: 		'',
					key: 		'*'
				});
				if (ap) refreshtree=true;
			}
			else
			{
				if (d) console.log('already added');
			}
		}
		else if (u[i].c == 0)
		{		
			// delete from contact list:			
			var node = FileStore.getById(u[i].u);			
			if (node) FileStore.remove(node);			
			refreshtree=true;			
			if (currentdirid == NetworkID) refreshgr=true;
		}
		else if (u[i].c == 2)
		{
			currentuser = u[i].u;
		}		
		if (!useremails[u[i].u])
		{
			// if user does not exists, add:
			useremails[u[i].u] 				= u[i].m;				
			userids[u[i].m.toLowerCase()] 	= u[i].u;					
			edata.push( 
			{
				userid: u[i].u,
				email: 	$('<div/>').text(u[i].m).html()
			});
		}
		
	}	

	// append data stores:
	if (mdata.length > 0) FileStore.loadData(mdata,true);	
	if (edata.length > 0) sharing_email.getStore().loadData(edata,true);	
}


function fm_flashdls()
{
	memsize = 0;
	if (dl_method == 1)
	{
		transferStore.each( function (obj) 
		{						
			if (obj.get('transfertype') == 'download') memsize = memsize + parseInt(obj.get('size'));			
		});
	}	
	return memsize;
}



function equalKey(key1,key2)
{
	for(var i in key1)
	{
		if (key1[i] !== key2[i]) return false;
	}
	return true;
}


function fm_beforedlcomplete()
{
	if (mobileversion)
	{
		console.log('fm_beforedlcomplete()');		
		return false;	
	}

	if (d) console.log('beforedlcomplete()');
	dlheight = Ext.getBody().getHeight();	
}

function fm_chromebar(height)
{
	var h = height - Ext.getBody().getHeight();	
	if ((h > 33) && (h < 41))
	{
		setTimeout("fm_chromebarcatchclick(" + Ext.getBody().getHeight() + ")",500);		
		chromemsgDialog.show();		
	}
}


function fm_chromebarcatchclick(height)
{
	if (Ext.getBody().getHeight() != height)
	{
		Ext.getBody().unmask();
		chromemsgDialog.hide();
		return false;	
	}
	setTimeout("fm_chromebarcatchclick(" + height + ")",200);
}



var s_foldernodes = [];
var s_nodes = [];
var s_node;

function requestlinks(id)
{
	if ((u_type === 0) && (!u_attr.terms))
	{
		termsDialog.linkid = id;
		termsDialog.show();	
		return false;
	}
	
	s_nodes = [];	
	s_foldernodes = [];

	if (id)
	{
		loadingDialog.show();		
		if (FileStore.getById(id).get('folder')) s_foldernodes.push(FileStore.getById(id));
		else s_nodes.push(FileStore.getById(id));
	}
	else 
	{
		for(var i in selectedRecords)
		{		
			selectedRecords[i] = FileStore.getById(selectedRecords[i].get('id'));			
			if (selectedRecords[i].get('folder')) s_foldernodes.push(selectedRecords[i]);							
			else s_nodes.push(selectedRecords[i]);				
		}
	}

	if (s_foldernodes.length > 0) 
	{
		// set up EXP shares first (a-synch)		
		requestlinks_folders();
	}
	else requestlinks_complete();
}



function requestlinks_folders()
{	
	if (s_foldernodes.length > 0) 
	{	
	
		s_node = s_foldernodes[0];
		
		if (SharingStore.getById(s_node.get('id') + '_' + 'EXP'))
		{
			s_nodes.push(s_node);
			s_foldernodes.splice(0,1);
			requestlinks_folders();		
		}
		else
		{		
			if (s_node.get('folder')) 
			{
				api_setshare1(s_node.get('id'),[{u: 'EXP', r: 0}],fm_getnodes(s_node.get('id')), 
				{ 
					userid : 'EXP',
					done: function(context) 
					{
						context.req.i = requesti;							
						api_req([context.req],
						{ 
						  callback : function (json,params)
						  {
							api_setshare2(json,s_node.get('id'));					
							if ((typeof json[0] == 'number') && (json[0] < 0))
							{			
								s_foldernodes.splice(0,1);
								requestlinks_folders();
							}
							else if ((json[0].r) && (json[0].r[0] == '0'))
							{
								sharednodes[s_node.get('id')] = true;							
								var record = SharingStore.getById(s_node.get('id') + '_' + 'EXP');
								if (!record)
								{
									SharingStore.add([
									{
										id:			s_node.get('id') + '_' + 'EXP',
										userid: 	'EXP',
										rights: 	0,
										date:		Math.round(new Date().getTime()/1000),
										folderid: 	s_node.get('id')
									}]);					
									replacefoldericon(s_node.get('id'),'sharedfolder');	
								}							
								s_nodes.push(s_node);
								s_foldernodes.splice(0,1);
								requestlinks_folders();
							}								
						  }
						});					
					}
				});
			}		
		}
	}
	else requestlinks_complete();
}




function requestlinks_complete()
{
	var ops = [];
	for (var i in s_nodes) ops.push({a: 'l',n: s_nodes[i].get('id')});
	api_req(ops,
	{ 
	  callback : function (json,params)
	  {		  	 
		if (typeof json == 'object')
		{
			var cnt=0;
			for(var i in json) 
			{
				if (!((typeof json[i] == 'number') && (json[i] < 0)))
				{
					selectedRecords[i].set("ph",json[i].replace(/[^a-z^A-Z^0-9^_^-]/g,""));
					cnt++;
				}
			}					
			
			loadingDialog.hide(); 
			
			if (mobileversion)
			{				
				var key;
				var querystr = '#!';				
				if (selectedRecords[0].get('folder'))
				{
					key = u_sharekeys[selectedRecords[i].get('id')];		
					querystr = '#F!';
				}
				else key = selectedRecords[0].data.key;
				mshowlink('https://mega.co.nz/' + querystr + selectedRecords[0].get('ph') + '!' + a32_to_base64(key).replace(",",""));				
			}
			else
			{
				if (cnt > 0)
				{							
					Ext.getBody().mask();
					getLinkDialog.show();	
				}			
			}
		}
		else loadingDialog.hide();  		
	  }	 
	});
}


/*
var dadaurl,tmpblob;


var myAudioContext, mySource, myBuffer;

if ('webkitAudioContext' in window || 'AudioContext' in window) 
{
	myAudioContext = new webkitAudioContext() || AudioContext();
}

function play () 
{
	mySource = myAudioContext.createBufferSource();
	mySource.buffer = myBuffer;
	mySource.connect(myAudioContext.destination);
	mySource.noteOn(0);
}
*/


function fm_dlcomplete(id)
{
	if (mobileversion)
	{
		
		
		try
		{
			//alert(dl_data.byteLength);
			
			
			
	
			tmpblob = new Blob([dl_data],{type:'audio/mpeg'});
			var url = myURL.createObjectURL(tmpblob);
			
			/*
			//alert(tmpblob.size);
			//alert(tmpblob.type);
			//alert(myAudioContext);
			
			myAudioContext.decodeAudioData(dl_data, function(audioData) 
			{
					myBuffer = audioData;
					
					play();
			});
			*/
			
			/*
			var test = document.createElement("object");			
			test.data = 'data:application/pdf;base64,' + ab_to_base64(dl_data);
			test.width = '100%';
			test.height = '100%';
			test.type = 'application/pdf';			
			test.style.position = 'absolute';
			test.style.left = '0px';
			test.style.top = '0px';
			document.body.appendChild(test);
			*/
			
			/*
			$('#testembed').attr('url',url);
			$('#testembed').width('100%');
			$('#testembed').height('100%');
			*/
			
			/*
			function display(vid)
			{
				var video = document.getElementById("video");
				video.src = window.URL.createObjectURL(vid);
			}
			*/
			//alert(url);
			
			

			
			
		}
		catch(e)
		{
			alert(e);
		
		}
		
		console.log('fm_dlcomplete()',id);		
		return false;	
	}
	
	// Ext.Msg.alert('Allow Chrome to Batchdownload','Please click on the "allow" button in the yellow bar above in order allow Chrome to batch download.');
	if (dl_method === 0)
	{
		setTimeout("fm_chromebar(" + dlheight + ")",250);
		setTimeout("fm_chromebar(" + dlheight + ")",500);
		setTimeout("fm_chromebar(" + dlheight + ")",1000);
	}
	if (dl_method == 1)
	{
		document.getElementById('dlswf_' + dl_queue[dl_queue_num].id).style.width = '250px';
		document.getElementById('dlswf_' + dl_queue[dl_queue_num].id).style.height = '20px';
		document.getElementById('progressdiv_' + dl_queue[dl_queue_num].id).style.display='none';
	}
	else
	{	
		transferStore.remove(transferStore.getById(id));			
	}
	transferprogress[id] = undefined;	
}

function fm_dlprogress(fileid, bytesloaded, bytestotal)
{
	if (mobileversion)
	{
		console.log('fm_dlprogress()',fileid,bytesloaded,bytestotal);			
		return false;	
	}

	if ((dl_limit_shown < new Date().getTime()+20000) && (!bwDialog.isHidden())) bwDialog.close();

	if (bytesloaded && bytestotal)
	{
		document.getElementById('error_' + fileid).style.display = 'none';
		document.getElementById('pending_' + fileid).style.display = 'none';
		document.getElementById('progressdiv_' + fileid).style.display = '';
		if (document.getElementById('progress_' + fileid)) document.getElementById('progress_' + fileid).style.width = Math.round(bytesloaded/bytestotal*100) + '%';	
		var eltime = (new Date().getTime()-dl_queue[dl_queue_num].starttime)/1000;	
		var bps = Math.round(bytesloaded / eltime);
		var retime = (bytestotal-bytesloaded)/bps;	
		transferprogress[fileid] = Math.floor(bytesloaded/bytestotal*100);	
		Ext.get("speed_" + fileid).dom.innerHTML 	= bytesToSize(bps,1) +'/s';
		Ext.get("eltime_" + fileid).dom.innerHTML 	= secondsToTime(eltime);
		Ext.get("retime_" + fileid).dom.innerHTML 	= secondsToTime(retime);
		Ext.get("progressperc_" + fileid).dom.innerHTML = Math.floor(bytesloaded/bytestotal*100) + '%';
	}
}

function removefromtrash()
{
	var ops = [];									
	var selrec = selectedRecords;	
	for (var i in selrec) 
	{
		ops[i] = 
		{	
			a: 'd',
			n: selrec[i].data.id,
			i: requesti
		};					
		process_d(selrec[i].data.id,true,true);
	}									
	aftermove(true);							
	api_req(ops);
	document.getElementById('overlay').style.display='none';
}	

function fm_dlstart(id,name,filesize)
{  
  if (mobileversion)
  {
	console.log('fm_dlstart()',id,name,filesize);
	return false;
  }

  if (d) console.log('OnDownloadStart ' + id);      
  if (transferStore.getById(id))
  {
	  transferStore.getById(id).set('exceeded',false);  
	  dl_queue[dl_queue_num].starttime = new Date().getTime();   
	  transferStore.getById(id).set('started',true);
	  transferStore.getById(id).set('error','');  
	  document.getElementById('error_' + id).style.display = 'none';
	  document.getElementById('pending_' + id).style.display = 'none';
	  document.getElementById('progressdiv_' + id).style.display = '';     
	  if ((fm_flashdls() === 0) && (transferStore.count() < 500)) transferStore.sort();
  }
}


function showlimit(filesize,id)
{
	if (d) console.log(filesize);	
	if (!bwDialog.rendered) bwDialog.doAutoRender();
	var ctx = 
	{
		id: id,
		filesize: filesize,
		callback : processquota1,
		processquotaresult : bwlimitinfo
	};
	checkquota(ctx);	
	loadingDialog.show();	
}

function fm_dlerror(id,error)
{
	if (mobileversion)
	{
		console.log('fm_dlerror()',id,error);
		return false;
	}

	var errorstr = l[16];
	if (error == EOVERQUOTA)
	{
		errorstr = '<font style=\"color:red;\">' + l[17] + '</font>';
		transferStore.getById(id).set('exceeded',true);
		
		if (!dl_limit_shown) showlimit(transferStore.getById(id).data.size,false);
	}
	else if (error == ETOOMANYCONNECTIONS) errorstr = l[18];
	else if (error == ESID) errorstr = l[19];
	else if (error == ETEMPUNAVAIL) errorstr = l[20];
	else if (error == EBLOCKED) errorstr = l[21];
	else if (error == ENOENT) errorstr = l[22];
	else if (error == EACCESS) errorstr = l[23];
	else if (error == EKEY) errorstr = l[24];
	else if (error == EAGAIN) errorstr = l[233];
	
	
	if (error == 0) 
	{	
		errorstr = '';
		document.getElementById('error_' + id).innerHTML = '';	
		document.getElementById('error_' + id).style.display = 'none';
		document.getElementById('pending_' + id).style.display = '';
		transferStore.getById(id).set('exceeded',false);
	}
	else
	{
		document.getElementById('error_' + id).innerHTML = errorstr;	
		document.getElementById('error_' + id).style.display = '';
		document.getElementById('pending_' + id).style.display = 'none';		
	}
	document.getElementById('progressdiv_' + id).style.display = 'none';	
	transferStore.getById(id).set('error',errorstr);
}


function fm_getsharenodes(handle)
{
	var node = FileStore.getById(handle);
	var snodes = [];
	if (node)
	{
		while ((node.get('id') != RootID) && (node.get('id') != TrashbinID) && (node.get('id') != NetworkID) && (node.get('id') != InboxID))
		{		
			if ((sharednodes[node.get('id')]) || (node.get('su') != '')) snodes.push(node.get('id'));					
			node = FileStore.getById(node.get('parentid'));
			if (!node) break;
		}
	}
	return snodes;
}

	
	

function fm_getnodes2(handle)
{
	var nodeids = [];	
	function procnode(handle)
	{	
		FileStore.suspendEvents();
		FileStore.filterBy(function(record,id) 
		{						
			if (record.get('parentid') == handle) return true;	
		});											
		FileStore.each( function (obj) 
		{
			if (obj) nodeids.push(obj.data.id);			
			if (obj.get('folder') > 0) procnode(obj.data.id);
		});	
		reinstateFileStore();	
		FileStore.resumeEvents();
	}	
	procnode(handle);
	nodeids.push(handle);				
	return nodeids;
}



function fm_getnodes(handle)
{
	if (d) console.log('fm_getnodes');
	if (d) console.log(handle);	
	var node2 = FileStore.getById(handle);
	var nodeids = [];	
	if (node2)
	{
		if (node2.get('folder') > 0)
		{	
			function spch4(folderid)
			{		
				nodeids.push(folderid);			
				var childnodes = dirroot.getNodeById(folderid).childNodes;			
				for(var i in childnodes) spch4(childnodes[i].data.id);						
			}	
			spch4(handle);																
			FileStore.suspendEvents();
			FileStore.filterBy(function(record,id) 
			{						
				if ((Ext.Array.contains(nodeids,record.get('parentid'))) && (record.get('folder') == 0)) return true;		
			});			
			var diropen=false;										
			FileStore.each( function (obj) 
			{
				if (obj) nodeids.push(obj.data.id);								
			});	
			reinstateFileStore();	
			FileStore.resumeEvents();	
		}
		else nodeids.push(handle);								
	}
	return nodeids;
}

function process_f_f(fid)
{
	if (!farray[fid].f[farray[fid].i])
	{	
		if (farray[fid].ap) FileStore.suspendEvents();
		FileStore.loadData(farray[fid].mdata,true);
		if (farray[fid].ap) FileStore.resumeEvents();
		if (d) console.log('call reqmissingkeys:');
		crypto_reqmissingkeys();		
		if (farray[fid].callback) farray[fid].callback.fn(farray[fid].callback);
		//delete farray[fid];		
		return false;
	}	
	var f = farray[fid].f[farray[fid].i];
	f.attrs 	= f.a;	
	if (f.sk) u_sharekeys[f.h] = crypto_process_sharekey(f.h,f.sk);
	if ((f.t !== 2) && (f.t !== 3) && (f.t !== 4) && (f.k))
	{
		crypto_processkey(u_handle,u_k_aes,f);
		u_nodekeys[f.h] = f.key;
		
		if ((typeof f.name !== 'undefined') && (f.p == InboxID)) InboxCount++;
	}
	else
	{
		if (f.a)
		{
		  if (!missingkeys[f.h])
		  {
			missingkeys[f.h] =true;
			newmissingkeys = true;
		  }
		}
		f.k = '';
		f.name 	= '';
	}	
	
	if (f.t == 2) 		RootID 		= f.h;
	else if (f.t == 3) 	InboxID 	= f.h;
	else if (f.t == 4) 	TrashbinID 	= f.h;
	else if ((f.t < 2) || (f.t == 5))
	{			
		if (f.t == 5)
		{				
			f.p = f.u;
			f.t = 1;
		}
		if (f.t == 1)
		{
			f.s = -1;				
			globalfolderids[f.h]=1;				
			if ((othersharedfolders[f.h]) && (typeof f.su == 'undefined'))
			{
				if (d) console.log('test');
				f.su = othersharedfolders[f.h].su;
				f.r = othersharedfolders[f.h].r;					
			}
		}		
		var icontype = f.t;					
		if (sharednodes[f.h]) icontype = 2;			
		var node = false;
		if (farray[fid].ap) node = FileStore.getById(f.h);
		if (node)
		{
		
			if (f.p == currentuser)
			{
				if (d) console.log('ignore, this is a root share.');						
			}
			else if (node.data.name !== f.name) 
			{
				if (d) console.log('RELOAD FILEMANAGER!');
			}
			else if (node.data.parentid !== f.p)
			{
				if (d) console.log('RELOAD FILEMANAGER!');
			}
			else if (node.data.owner !== f.u)
			{
				if (d) console.log('RELOAD FILEMANAGER!');
			}
			else if (node.data.date !== f.ts)
			{
				if (d) console.log('RELOAD FILEMANAGER!');
			}
			else if (!equalKey(node.data.key,f.key))
			{
				if (d) console.log('RELOAD FILEMANAGER!');
			}
			else if ((f.s) && (node.data.size !== f.s))
			{
				if (d) console.log('RELOAD FILEMANAGER!');
			}			
		}
		else
		{	
			farray[fid].mdata.push({
				id: 		f.h.replace(/[^a-z^A-Z^0-9^_^-]/g,""),
				name: 		f.name,
				size: 		f.s,
				type: 		filetype(f.name,f.t),
				icon: 		fileicon(f.name,icontype),
				parentid:	f.p,
				folder:		f.t,
				owner: 		f.u,
				date: 		f.ts,
				attrs: 		f.attrs,
				key: 		f.key,
				r: 			f.r,
				su: 		f.su,
				fa: 		f.fa,
			});		

			if (f.p == TrashbinID) trashbinfull=true;
			if (((f.t) && (farray[fid].ap)) || (f.p == InboxID)) refreshtree=true;
		}
	}	
	farray[fid].i++;		
	timeoutcount++;	
	if (!(timeoutcount&63))
	{
		setTimeout("process_f_f(" + fid + ")",1);
		timeoutcount2++;
	}
	else process_f_f(fid);
}

var timeoutcount=0;
var timeoutcount2=0;

function process_f(fid,ap,callback)
{
	var f = farray[fid].f;
	if (f.length == 0) return false;
	farray[fid].i=0;
	farray[fid].ap=ap;
	farray[fid].mdata = [];
	if (callback) farray[fid].callback = callback;
	if ((ap) && (f[0].p == currentdirid)) refreshgr=true;
	process_f_f(fid);
}

function process_d(handle,local,sharedfolder)
{	
	if (d) console.log('process_d ' + handle);	
	var checktb = false;
	node = FileStore.getById(handle);	
	if (node)
	{
		if (RootbyId(handle) == TrashbinID) checktb=true;		
		if ((node.get('parentid') == currentdirid) && (!local)) refreshgr=true;	
		if (node.data.folder == 0)
		{						
			FileStore.remove(node);
		}
		else
		{
			if (d) console.log('process_d folder');		
			//GET ALL CHILDREN NODES FROM A NODE:
			othersharedfolders = [];			
			var folderids = [];	
			function spch2(folderid)
			{				
				if (d) console.log('check for ' + folderid);
				if ((sharedfolder) && (FileStore.getById(folderid).get('su') != '') && (folderid !== handle))
				{				
					// shared folder inside shared folder, do not delete but change as share-root-node					
					FileStore.getById(folderid).set('parentid',FileStore.getById(folderid).get('su'));
					FileStore.getById(folderid).commit();					
					refreshtree=true;					
				}
				else if ((FileStore.getById(folderid).get('su') != '') && (folderid !== handle))
				{
					othersharedfolders[folderid] = { su: FileStore.getById(folderid).get('su'), r: FileStore.getById(folderid).get('r') };
				}
				else
				{					
					folderids.push(folderid);							
				}				
				var node2 = dirroot.getNodeById(folderid);				
				if (node2)
				{
					var childnodes = node2.childNodes;
					for(var i in childnodes) spch2(childnodes[i].data.id);				
				}
			}		
			spch2(handle,false);					
			if (d) console.log(folderids);
			FileStore.suspendEvents();			
			FileStore.filterBy(function(record,id) 
			{						
				if (Ext.Array.contains(folderids,record.get('parentid'))) return true;		
			});			
			var diropen=false;						
			var i = 0;
			FileStore.each( function (obj) 
			{
				if (obj)
				{			
					if (currentdirid == obj.data.id) diropen=true;
					FileStore.remove(obj);				
					i++;
				}
			});	
	
			reinstateFileStore();
			FileStore.resumeEvents();
			
			FileStore.remove(node);			
			var treenode = dirroot.getNodeById(handle);			
			if (treenode) treenode.remove(true);			
			if (currentdirid == node.data.id) diropen=true;
			if ((diropen) && (!local))
			{		
				if (mobileversion)
				{
					alert(l[25]);
					processopendir(RootID);				
				}
				else
				{
					diropen=false;
					Ext.MessageBox.show(
					{						
						title:l[26],
						msg: l[25],
						buttons: Ext.MessageBox.OK,
						fn: function(answer) 
						{
							processopendir(RootID);						
						}
					});		
				}
			}
			else if (diropen) processopendir(RootID);		
		}
	}	
	if (checktb && checktrashempty());
}


function sharecount(folderid)
{	
	SharingStore.suspendEvents();
	SharingStore.filterBy(function(record,id) 
	{
		if (record.data.folderid == folderid) return true;	
	});		
	var count = SharingStore.getCount();	
	if (sharingDialog.folderid)
	{
		SharingStore.filterBy(function(record,id) 
		{
			if (record.data.folderid == sharingDialog.folderid) return true;	
		});		
	}	
	SharingStore.resumeEvents();	
	return count;
}


function fm_updatekey(handle,key)
{
	var node = FileStore.getById(handle);	
	if (node)
	{
		if (node.get('attrs') == '') return false;	
		var file = new Object;
		file.h = handle;
		file.k = key;
		file.a = node.get('attrs');							
		crypto_processkey(u_handle,u_k_aes,file);			
		u_nodekeys[handle] = file.key;		
		node.set('name',file.name);
		node.set('key',file.key);		
		var icontype = node.get('folder');					
		if (sharednodes[handle]) icontype = 2;			
		node.set('type',filetype(file.name,node.get('folder')));
		node.set('icon',fileicon(file.name,icontype));		
		node.commit();
	}
}

function fm_commitkeyupdate()
{
	refreshgrid();
	FileStore.sort(
	{
		direction: sortdirection,
		property: sortby	
	});	
	refreshtreepanel();
	dirsort(dirroot);
}

var tparentid = false;
var trights = false;
var tmoveid = false;
var rootsharenodes = [];
var actioni = 0;


function processpacket()
{
	if (!apackets[actioni])
	{
		packetcomplete();
		return false;	
	}
	var packet = apackets[actioni];		
	if (d) console.log('action packet[' + actioni + ']');		
	if (packet.i == requesti)
	{
		if (d) console.log('OWN ACTION PACKET; IGNORE');
	}
	else if (packet.a == 'fa')
	{
		if (packet.n) var node = FileStore.getById(packet.n);	
		if ((node) && (packet.fa)) node.set('fa',packet.fa);		
	}
	else if ((packet.a == 's') && (!folderlink))
	{		
		var prockey = false;
		if ((typeof u_sharekeys[packet.n] == 'undefined') && (typeof packet.k != 'undefined'))
		{				
			if (!u_sharekeys[packet.n])
			{
				u_sharekeys[packet.n] = crypto_process_sharekey(packet.n,packet.k);						
				prockey=true;
			}
		}						
		if (packet.o == currentuser)
		{
			if (typeof packet.r == "undefined")
			{
				// I deleted my share
				var node = SharingStore.getById(packet.n + '_' + packet.u);
				if (node)
				{
					SharingStore.remove(node);
					if (sharecount(packet.n) == 0)
					{
						sharednodes[packet.n] = false																	
						replacefoldericon(packet.n,'folder');							
					}
				}
				else if (d) console.log('could not find node ?!');
			}	
			else if (SharingStore.getById(packet.n + '_' + packet.u))
			{
				// I update the share							
				var node = SharingStore.getById(packet.n + '_' + packet.u);
				if (node)
				{							
					node.set('rights',packet.r);							
					node.commit();								
				}
			}						
			else if (packet.ha == crypto_handleauth(packet.n))
			{
				var sdata = [];
				// I make a new share
				sdata.push(
				{
						id: 		packet.n + '_' + packet.u,
						userid:		packet.u,
						folderid:	packet.n,
						rights:		packet.r,
						date: 		packet.ts
				});	
				sharednodes[packet.n]=true;
				SharingStore.loadData(sdata,true);					
				replacefoldericon(packet.n,'sharedfolder');														
			}					
			else 
			{
				if (d) console.log('RECEIVED FAKE SHARE NODE ' + packet.n);
				if (d) console.log(packet);
			}
		}
		else if (typeof packet.o != 'undefined')
		{						
			if (typeof packet.r == "undefined")
			{
				// delete a share:		
				var node = FileStore.getById(packet.n);
				
				if (node)
				{
					if (node.get('parentid').length != 11)
					{
						// remove sub-share by update:
						node.set('r',0);
						node.set('su',"");
						node.commit();						
					}
					else process_d(packet.n,false,true,false);							
				}
				else process_d(packet.n,false,true,false);	
				
				delete u_sharekeys[packet.n];
			}
			else
			{
				// I receive a share, prepare for receiving tree packet
				var node = FileStore.getById(packet.n);
				if (node)
				{
					// update rights:
					node.set('r',packet.r);
					node.set('su',packet.o);
					node.commit();
				}
				else
				{								
					// look up other root-share-nodes from this user:
					if (d) console.log('look up other root-share-nodes from this user:');					
					var treenode = dirroot.getNodeById(packet.o);								
					if (treenode)
					{
						treenode.eachChild(function(tnode)
						{
							rootsharenodes[tnode.data.id]=1;
						});
					}
					tparentid 	= packet.o;
					trights 	= packet.r;				
				}
			}
		}
		else if (prockey)
		{
			var nodes = fm_getnodes2(packet.n);
			for (var i in nodes)
			{
				var node = FileStore.getById(nodes[i]);				
				if (node)
				{							
					var file = new Object;
					file.a = node.get('attrs');
					file.h = nodes[i];					
					crypto_processkey(u_handle,u_k_aes,file);					
					node.set('name',file.name);
					node.set('key',file.key);
					node.commit();				
					delete file;
				}
			}			
			refreshtree=true;		
			refreshtopmenu=true;	
			refreshgr=true;
		}
		
		crypto_share_rsa2aes();	
	}
	else if ((packet.a == 'k') && (!folderlink))
	{
		if (packet.sr)
		{	
			crypto_procsr(packet.sr);								
		}
		else if (packet.cr)
		{					
			crypto_proccr(packet.cr);						
		}
		else
		{	
			var cr = crypto_makecr(packet.n,[packet.h],true);								
			if (d) console.log(cr);						
			var ops = [];
			ops.a = 'k';
			ops.cr = cr;								
			if (d) console.log('ops:');					
			if (d) console.log(ops);			
			api_req([ops]);					
		}
	}				
	else if (packet.a == 't')
	{
		if (tparentid) 
		{						
			for (var b in packet.t.f)
			{
				if (rootsharenodes[packet.t.f[b].h])
				{
					packet.t.f[b].r 	= FileStore.getById(packet.t.f[b].h).get('r');
					packet.t.f[b].su = FileStore.getById(packet.t.f[b].h).get('su');								
					process_d(packet.t.f[b].h);							
				}				
			}					
			var node2 = FileStore.getById(packet.t.f[0].p);			
			if (!node2)
			{
				packet.t.f[0].p 	= tparentid;
			}			
			packet.t.f[0].su = tparentid;
			packet.t.f[0].r 	= trights;			
			tparentid = false;
			trights = false;
			rootsharenodes=[];
		}
		if (tmoveid)
		{
			// handle as move						
			node = FileStore.getById(tmoveid);						
			if (node)
			{
				if (node.data.parentid !== packet.t.f[0].p)
				{				
					var movefromid = node.get('parentid');				
					moveitem(node,packet.t.f[0].p,false);					
					if ((packet.t.f[0].p == TrashbinID) && (!trashbinfull))
					{	
						trashbinfull=true;
						replacefoldericon(TrashbinID,'trashbinfull');
					}					
					var treenode = dirroot.getNodeById(tmoveid);
					if (treenode)
					{
						if (dirtree) dirtree.expandPath(treenode.getPath());
						refreshdirsort=true;
					}
					var currentpath = dirroot.getNodeById(currentdirid).getPath();					
					if (d) console.log('current path:' + currentpath);					
										
					if ((currentpath.indexOf(packet.t.f[0].p) > -1) || (currentpath.indexOf(movefromid) > -1))
					{
						refreshgr=true;
						refreshtopmenu=true;
					}
					else if(currentdirid == tmoveid) refreshtopmenu=true;
					
					if (refreshtree)
					{
						refreshtree=false;
						refreshtreepanel();						
					}										
				}						
			}
			tmoveid=false;
		}		
		process_u(packet.t.u,true);	
		farray[fi] = new Object;
		farray[fi].f = packet.t.f;
		process_f(fi,true,{fn : function() 
		{ 
			actioni++;
			processpacket();	
		}});
		fi++;
		return false;			
	}
	
	else if ((packet.a == 'c') && (!folderlink))
	{
		FileStore.suspendEvents();	
		// new contacts:		
		process_u(packet.u,true);	
		FileStore.resumeEvents();			
	}
	
	else if (packet.a == 'd')
	{	
		// delete node:					
		if (apackets[parseInt(i)+1])
		{
			if (apackets[parseInt(i)+1].a == 't')
			{
				if (apackets[parseInt(i)+1].t.f[0].h == packet.n)
				{								
					tmoveid = packet.n;
					if (d) console.log('handle as move');
				}						
			}						
		}
		// if this is not a move, then delete:					
		if (!tmoveid) process_d(packet.n,false);					
	}
	else if ((packet.a == 'u') && (!folderlink))
	{
		if (d) console.log('update packet');		
		var node = FileStore.getById(packet.n);
		if (node)
		{				
			if (d) console.log('node');			
			var file = new Object;
			file.h = packet.n;
			file.k = packet.k;
			file.a = packet.at;			
			u_nodekeys[packet.n] = file.key;
			crypto_processkey(u_handle,u_k_aes,file);
			var icontype = node.get('folder');					
			if (sharednodes[packet.n]) icontype = 2;				
			if (d) console.log(file);			
			node.set('name',file.name);
			node.set('key',file.key);
			node.set('attrs',file.a);			
			node.set('type',filetype(file.name,node.get('folder')));
			node.set('icon',fileicon(file.name,icontype));			
			node.commit();			
			if (packet.cr)
			{
				if (d) console.log('crypto_proccr');
				if (d) console.log(packet.cr);
				crypto_proccr(packet.cr);						
			}									
			if (d) console.log('node committed');			
			if (node.data.folder > 0) refreshtree=true;						
			if (node.data.parentid == currentdirid) refreshgr=true;
		}			
	}
	actioni++;
	processpacket();	
}


var pc_proct=0;
var pc_lastt=0;


function packetcomplete(t)
{	
	if (d) console.log('packetcomplete() ' + t);

	
/*	
	
	if ((t > 0) && (t < pc_lastt)) return false;
	if ((pc_proct > 100) && (pc_lastt+(pc_proct*30) > new Date().getTime()))
	{
		document.getElementById('overlay').style.display='none';
		if (d) console.log('postpone packetcomplete() for ');
		if (d) console.log((pc_proct*30)-100);
		if (!t) t = new Date().getTime()
		setTimeout("packetcomplete(" + t + ")",(pc_proct*30)-100);
		return false;
	}
*/	
	
	if (d) console.log('process packetcomplete()');
	
	pc_lastt = new Date().getTime();
	pc_proct = new Date().getTime();
	crypto_sendrsa2aes();	
	if (refreshtree)
	{
		refreshtree=false;
		refreshtreepanel();	
	}
	else if (refreshdirsort)
	{
		refreshdirsort=false;
		setTimeout("dirsort(dirroot);",500);	
	}	
	if (refreshtopmenu)
	{
		refreshtopmenu=false;				
		updateTopFolderMenu(currentdirid);					
	}	
	if (refreshgr)
	{	
		refreshgr=false;			
		refreshgrid();				
	}	
	pc_lastt = new Date().getTime();
	pc_proct = new Date().getTime()-pc_proct;		
	
	if (d) console.log(pc_lastt);
	if (d) console.log(pc_proct);
	
	fm_thumbnails();
	
	if (mobileversion) mobileui();

	
	document.getElementById('overlay').style.cursor='default';
	setTimeout("document.getElementById('overlay').style.display='none';",10);
	setTimeout("getsc()",100);
}

function getlinkcheck(str)
{
	logincheckboxCheck(str);
	createlinks();
}

function createlinks()
{
	var showfilelink = false;
	var showfilekey  = false;
	var showfilename = false;
	var showfilesize = false;		
	
	
	
	
	
	if (document.getElementById('getlink_filelink').checked) 	showfilelink = true;
	if (document.getElementById('getlink_filename').checked) 	showfilename = true;
	if (document.getElementById('getlink_filesize').checked) 	showfilesize = true;
	if (document.getElementById('getlink_filekey').checked) 	showfilekey  = true;	
	var links = '';
	for(var i in selectedRecords)
	{	
		var fsize = bytesToSize(selectedRecords[i].data.size);
		if (selectedRecords[i].get('folder')) fsize = 'folder link';
		
		var key;
		var querystr = '#!';
		
		if (selectedRecords[i].get('folder'))
		{
			key = u_sharekeys[selectedRecords[i].get('id')];		
			querystr = '#F!';
		}
		else key = selectedRecords[i].data.key;		
		if (showfilename) links += selectedRecords[i].data.name;		
		if (showfilename && showfilesize) links += ' (' + fsize + ')\n';
		else if (showfilename) links += '\n';
		if (d) console.log(selectedRecords[i].get('ph'));			
		if (showfilelink) links += 'https://mega.co.nz/' + querystr + selectedRecords[i].get('ph');					
		if (showfilelink && showfilekey) links += '!';
		if (d) console.log(selectedRecords[i].data.key);			
		if (showfilekey) links += a32_to_base64(key).replace(",","");					
		if ((!showfilename) && showfilesize) links += ' (' + fsize + ')\n';
		else if (showfilekey || showfilelink) links += '\n';		
	}		
	document.getElementById('getlink_textarea').value = links;	
	document.getElementById('links_clipboard_button').innerHTML = l[370];	
	document.getElementById('links_clipboard_button').className = 'clipboard-button';
	clipcoppied=false;
}

function execsc(a)
{
	if (a == -15)
	{
		ul_uploading=false;
		downloading=false;		
		logout();
		return false;	
	}
	
	apackets = a;
	tparentid = false;
	trights = false;
	tmoveid = false;
	rootsharenodes = [];
	actioni=0;
	
	if (FileStore.count() > 300)
	{
		document.getElementById('overlay').style.cursor='wait';
		document.getElementById('overlay').style.display='';				
		setTimeout("processpacket()",100);
	}
	else processpacket();
}

function filetype(name,isfolder)
{
	if (isfolder) return "Folder";	
	var ext = fileext(name);
	if (typeof fileexttxt['t_' + ext] !== "undefined") return fileexttxt['t_' + ext];
	else return 'File';
}
 
function fileicon(name,icontype)
{	
	if (icontype == '2') return staticpath + "images/extension/foldershared.png";	
	else if (icontype) return staticpath + "images/extension/folder.png";	
	var ext = fileext(name);	
	if (typeof fileextimg['t_' + ext] !== "undefined") return staticpath + fileextimg['t_' + ext];
	else return staticpath + 'images/extension/document.png';
}

function fileext(name)
{	
	if (!name) name = 'unknown';	
	var ext = name.substr(name.lastIndexOf('.') + 1);	
	if (ext == name) ext = '';	
	return ext.toLowerCase();	
	return name;
}

function flash_filetoolarge()
{
	FileTooLarge = 0;	
	if (!fmstarted)
	{
		alert(l[31].replace('[X]','100MB'));		
		return false;
	}
	var msg = l[27].replace('[X]','100MB');
	if (FileTooLarge > 1) msg = l[28].replace('[X1]',FileTooLarge).replace('[X2]','400MB');
	var msg2 = '<br> ' + l[29].replace('[A]','<a href="http://www.google.com/chrome/" target="_blank">').replace('[/A]','</a>');
	Ext.Msg.show(
	{
		title:l[30],
		msg: msg + msg2,
		buttons: Ext.Msg.OK,
		icon: Ext.Msg.WARNING
	});		
}

function flash_uploadererror(err)
{
	alert('FLASH ERROR ' + err);
}

var flash_start = [];
var init_anoupload = false;

// callback from flash upon file selection (replacing Filereader)
function flash_newfile(id,name,size)
{	
	if (size > 1024*1024*100)
	{		
		if (!FileTooLarge) setTimeout("flash_filetoolarge()",200);			
		FileTooLarge++;
	}
	else
	{
		if (!fmstarted)
		{
			flash_start[id] = true;			
			if (!init_anoupload) 
			{
				init_anoupload=true;
				anoupload();
			}
		}
		addupload({
		name: name,
		size: size,
		flashid: id
		});	
	}
}

// upload chunk through flash (replacing XHR binary upload support)
function flash_uploadchunk(id,data,url,flashid)
{
	if (d) console.log('flash_uploadchunk()');
	var swfid = 'uploaderswf';	
	if (flash_start[flashid]) swfid = 'start_uploaderswf';
	document.getElementById(swfid).uploadchunk(id,data,url);
}

// upload chunk callback from flash: (replacing XHR binary upload support)
function flash_uploaded(id,response)
{
	if (d) console.log('flash_uploaded()');
	ul_flash_uploaddone(id,response);
}

// request chunk of file from flash: (replacing Filereader)
function flash_requestchunk(flashid,bytes,offset)
{
	if (d) console.log('flash_requestchunk');	
	if (d) console.log(flashid);
	
	flashid = flashid.toString();	
	var bytes = bytes.toString();
	var offset = offset.toString();
	if (d) console.log(typeof flashid);
	if (d) console.log(flashid);
	if (d) console.log(typeof bytes);
	if (d) console.log(bytes);
	if (d) console.log(typeof offset);
	if (d) console.log(offset);	
	var swfid = 'uploaderswf';	
	if (flash_start[flashid]) swfid = 'start_uploaderswf';
	
	if (d) console.log(swfid);	
	
	
	document.getElementById(swfid).requestchunk(flashid, bytes, offset);	

}

function flash_load()
{
  if (d) console.log('flash file loaded');
}

// request chunk callback from flash: (replacing Filereader)
function flash_chunk(flashid,bytes,offset,data)
{
	if (d) console.log('flash_chunk');	
	if (d) console.log(flashid);
	if (d) console.log(offset);	
	//if (d) console.log('ul_flash_chunk(\'' + flashid + '\',\'' + data + '\',\'' + offset + '\');');
	
	try 
	{
	
		ul_flash_chunk(flashid,data,offset);
	}
	catch(err)
	{
		if (d) console.log('ul_flash_chunk error');
		if (d) console.log(err);	
	}
	//if (d) console.log(flashid);
	//if (d) console.log(bytes);
	//if (d) console.log(offset);
	//if (d) console.log(data);
}


function addupload(file)
{
	var ul_id = ul_queue.length;	
	if (!file.flashid) file.flashid = false;
	var NewUpload = 
	{
		name: file.name,
		size: file.size,
		type: filetype(file.name,false),	
		icon: fileicon(file.name,false),
		parentid: "",
		folder: 0,
		id: ul_id,
		flashid: file.flashid,
		transfertype: 'upload',
		transfericon: staticpath + 'images/up.png',
		status: 'pending',
		eltime: 'eltime',
		speed: 'speed',
		retime: 'retime'
	};			
	if (mobileversion)
	{
		mobileuploads.push(NewUpload);
		
		initmobileupload();
	}
	else if (fmstarted)
	{
		transferStore.add(NewUpload);			
	}
	else 
	{
		tmpuploads.push(NewUpload);	
	}
	
	file.target = currentdirid;	
	file.id = ul_id;	
	ul_queue.push(file);		
	
	if ((fmstarted) && (!ul_uploading)) startupload();
}

Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
	'Ext.tab.*',
	'Ext.window.*',
	'Ext.layout.container.Border',
    'Ext.dd.*',
	'Ext.modelClass.*',
	'Ext.window.MessageBox',
	'Ext.tip.*',
	'Ext.view.View',
	'Ext.util.*'
]);

Ext.onReady(function() 
{
	loadingDialog = new Ext.LoadMask(Ext.getBody(), 
	{
		msg:l[142],
		listeners:
		{
			show: function()
			{
				ext_loading_dialog=true;			
			},
			hide: function()
			{
				ext_loading_dialog=false;
			}
		}
	});
	
	var chrstyle = '';	
	if (ie9) chrstyle = 'display:none;';
	
	chromeDialog = Ext.create('widget.window',
	{
		id: "chromedialog",
		title: l[33],
		closable: true,
		closeAction: 'hide',
		width: 700,
		operation: 'move',
		minWidth: 700,	
		layout: 'fit',
		floating:true,
		listeners: 
		{
			beforeclose: function() 
			{ 
				if (document.getElementById('fm_checkbox_chrome').checked) storefmconfig('blockchromeDialog',1);
				Ext.getBody().unmask();
				if ((ie9) && (!chromeDialog.dlwarning)) setTimeout("chromeDialog.show()",600000);				
				chromeDialog.dlwarning=false;
				document.getElementById('chromeDialogtoptxt').innerHTML = '<span class="red">' + l[34] + '</span> ' + l[35] + ' '+ l[36];
			},
			activate: function() 
			{
				if (chromeDialog.dlwarning)
				{
					if (!chromeDialog.rendered) chromeDialog.doAutoRender();
					document.getElementById('chromeDialogtoptxt').innerHTML = '<span class="red">' + l[34] + '</span> ' + l[365];				
				}
				Ext.getBody().mask();		
			}
		},
		bodyStyle: '',
		html: '<div class="browsers-top-txt" id="chromeDialogtoptxt"><span class="red">' + l[34] + '</span> ' + l[35] + ' '+ l[36] + '</div><div class="browsers-logo-block"><div></div></div><div class="browsers-bott-txt">' + l[37] + '</div><div class="browsers-bottom-block"><div id="fm_checkbox_chrome_div" class="checkboxOff" style="' + chrstyle + '"><input type="checkbox" id="fm_checkbox_chrome" onClick="logincheckboxCheck(\'fm_checkbox_chrome\');" class="checkboxOn"></div><div class="browsers-label" style="' + chrstyle + '"> ' + l[229] + ' </div><a href="#" class="browsers-button" onclick="chromeDialog.close(); return false;">' + l[39] + '</a><a href="http://www.google.com/chrome" class="browsers-button" target="_blank">' + l[40] + '</a><div class="clear"></div></div>'
	});
	
	
	firefoxDialog = Ext.create('widget.window',
	{
		id: "firefoxdialog",
		title: l[752],
		closable: true,
		closeAction: 'hide',
		width: 700,
		operation: 'move',
		minWidth: 700,	
		layout: 'fit',
		floating:true,
		listeners: 
		{
			beforeclose: function() 
			{ 
				if (document.getElementById('fm_checkbox_firefox').checked) storefmconfig('blockfirefoxDialog',1);
				firefoxDialog.dlwarning=false;	
				document.getElementById('firefoxDialogtoptxt').innerHTML = l[753];				
				Ext.getBody().unmask();			
			},
			activate: function() 
			{			
				if (firefoxDialog.dlwarning)
				{
					if (!firefoxDialog.rendered) firefoxDialog.doAutoRender();
					document.getElementById('firefoxDialogtoptxt').innerHTML = '<span class="red">' + l[34] + '</span> ' + l[760];				
				}
				Ext.getBody().mask();		
			}
		},
		bodyStyle: '',
		html: '<div class="browsers-top-txt" id="firefoxDialogtoptxt">' + l[753] + '</div><div class="firefox-logo-block"><div></div></div><div class="browsers-bott-txt">' + l[754] + '</div><div class="browsers-bottom-block"><div id="fm_checkbox_firefox_div" class="checkboxOff" style="' + chrstyle + '"><input type="checkbox" id="fm_checkbox_firefox" onClick="logincheckboxCheck(\'fm_checkbox_firefox\');" class="checkboxOn"></div><div class="browsers-label" style="' + chrstyle + '"> ' + l[229] + ' </div><a href="#" class="browsers-button" onclick="firefoxDialog.close(); return false;">' + l[39] + '</a><a href="https://mega.co.nz/mega.xpi" class="browsers-button" target="_blank">' + l[755] + '</a><div class="clear"></div></div>'
	});
	
	
	bwDialog = Ext.create('widget.window',
	{
		id: "bwdialog",
		title: l[228],
		closable: true,
		closeAction: 'hide',
		width: 700,
		operation: 'move',
		minWidth: 700,
		layout: 'fit',
		listeners: 
		{
			beforeclose: function() 
			{ 
				Ext.getBody().unmask();
			},
			activate: function() 
			{
				Ext.getBody().mask();			
			}
		},
		bodyStyle: '',
		html: '<div class="quota-main"><div class="quota-top-txt" id="limitmsg"></div><a href="/#pro" onclick="javascript:bwDialog.close();" target="_blank" class="quota-button">' + l[230] + '</a><a href="#" onclick="javascript:bwDialog.close(); return false;" class="quota-button">' + l[231] + '</a><div class="clear"></div>'
	});
	
	
	termsDialog = Ext.create('widget.window',
	{
		id: "termsdialog",
		title: l[421],
		closable: true,
		closeAction: 'hide',
		resizable: false,
		width: 700,
		minWidth: 700,
		layout: 'fit',
		listeners: 
		{
			beforeclose: function() 
			{ 
				Ext.getBody().unmask();
			},
			activate: function() 
			{
				Ext.getBody().mask();
				if (!termsDialog.rendered) termsDialog.doAutoRender();
				var termstxt = pages['terms'].split('<div class="register-mid-pad">');
				termstxt = termstxt[1].split('</div>');
				termstxt = termstxt[0];								
				document.getElementById('fm_tos').innerHTML = termstxt;
			}
		},
		bodyStyle: '',
		html: '<div class="terms-main"><div class="terms-top-txt" id="fm_tos"></div><a href="#" onclick="javascript:fm_accept_terms(); return false;" class="quota-button">' + l[422] + '</a><a href="#" onclick="javascript:fm_deny_terms(); return false;" class="quota-button">' + l[156] + '</a><div class="clear"></div>'
	});
	extjsloaded=true;
	init_page();
});

var mobule_ul_starttime = 0;

function onUploadStart(id)
{ 
  ul_queue[id]['starttime'] = new Date().getTime();
  if (mobileversion)
  {	
	if (mobule_ul_starttime == 0) mobule_ul_starttime=new Date().getTime(); 	
	var mobile_ul_size=0;	
	var totalfiles=ul_queue.length;
	for(var i in ul_queue) mobile_ul_size = mobile_ul_size + ul_queue[i].size;
	if (totalfiles == 1) $('#mobileupload_header').text('Uploading 1 file');
	else $('#mobileupload_header').text('Uploading ' + totalfiles + ' files');	
  }
  else
  {
	  transferPanel.expand();
	  if (d) console.log('OnUploadStart ' + id);     	  
	  transferStore.getById(id + '').set('started',true);  
	  if ((fm_flashdls() === 0) && (transferStore.count() < 500)) transferStore.sort();
  }
}

var mobile_ul_completed=false;

function onUploadSuccess(id, handle,key)
{	
	if (mobileversion)
	{
		mobile_ul_completed=true;
		for(var i in mobileuploads)
		{
			if (id == mobileuploads[i].id) mobileuploads[i].done=1;						
			if (!mobileuploads[i].done) mobile_ul_completed=false;
		}		
		if (mobile_ul_completed)
		{
			$('.upload-status-txt').text('Completed');
			$('.upload-status-txt').addClass('complete');
			$('#uploadpopbtn').text('Done');
			$('#mobileupload_header').text('Upload completed');			
		}		
	}
	else
	{
		transferStore.remove(transferStore.getById(id + ''));	
		transferprogress[id] = undefined;
	}
}

function onUploadProgress(fileid, bytesloaded, bytestotal)
{	
	var eltime = (new Date().getTime()-ul_queue[fileid]['starttime'])/1000;	
	var bps = Math.round(bytesloaded / eltime);
	var retime = (bytestotal-bytesloaded)/bps;		
	if (bytestotal && bytesloaded)
	{	
		if (mobileversion)
		{		
			if (mobile_ul_completed) return false;
			
			var mobile_ul_size = 0;		
			var mobile_ul_size_done = 0;		
			for(var i in mobileuploads) 
			{
				mobile_ul_size += mobileuploads[i].size;					
				if ((bytestotal == bytesloaded) && (mobileuploads[i].id == fileid)) mobileuploads[i].done=1;				
				if (mobileuploads[i].done) mobile_ul_size_done += mobileuploads[i].size;				
				else if ((mobileuploads[i].id == fileid) && (!mobileuploads[i].done)) mobile_ul_size_done += bytesloaded;			
			}			
			var perc = Math.round(mobile_ul_size_done/mobile_ul_size*100);						
			retime = (mobile_ul_size-mobile_ul_size_done)/bps;			
			$('.upload-speed-bg2').text(bytesToSize(bps,1) +'/s');			
			$('.upload-status-txt').text(secondsToTime(retime) + ' remaining');
			$('.upload-percentage-bar').width(perc + '%');			
			$('.upload-status-txt').show();
		}
		else
		{
			if (document.getElementById('progress_' + fileid)) document.getElementById('progress_' + fileid).style.width = Math.round(bytesloaded/bytestotal*100) + '%';	
			
			transferprogress[fileid] = Math.floor(bytesloaded/bytestotal*100);	
			Ext.get("speed_" + fileid).dom.innerHTML 	= bytesToSize(bps,1) +'/s';
			Ext.get("eltime_" + fileid).dom.innerHTML 	= secondsToTime(eltime);
			Ext.get("retime_" + fileid).dom.innerHTML 	= secondsToTime(retime);
			Ext.get("progressperc_" + fileid).dom.innerHTML = Math.floor(bytesloaded/bytestotal*100) + '%';
		}
	}
}

function onUploadError(fileid,error)
{
	if (d) console.log('OnUploadError ' + fileid + ' ' + error);
}

function reinstateFileStore()
{
	FileStore.filterBy(function(record,id) 
	{
		if ((record.get('parentid') == currentdirid) && (record.get('folder') < 2)  && (record.get('name') != '')) return true;	
	});				
	FileStore.sort(
	{
		direction: sortdirection,
		property: sortby	
	});
}

function replacefoldericon(folderid,icon)
{
	if (d) console.log('replace folder icon ' + folderid + ' ' + icon);
	var treeicon = false;
	var gridicon = false;
	if (icon == 'sharedfolder')
	{
		treeicon = staticpath + 'images/sharedfolder.gif';
		gridicon = staticpath + 'images/extension/foldershared.png';	
	}	
	else if (icon == 'trashbinfull')
	{
		treeicon = staticpath + 'images/trashbin_full.png';	
	}	
	else if (icon == 'trashbin')
	{
		treeicon = staticpath + 'images/trashbin.png';	
	}
	else
	{
		treeicon = staticpath + 'images/folder.gif';
		gridicon = staticpath + 'images/extension/folder.png';	
	}
	var node = FileStore.getById(folderid);	
	var parentid = false;	
	if (folderid == TrashbinID) parentid = 'INVROOT';
	else if (node) parentid = node.data.parentid;	
	if (parentid)
	{	
		// replace treeicon		
		if (treeicon)
		{		
			dirroot.getNodeById(parentid).replaceChild(
			{
				id : folderid,
				text : dirroot.getNodeById(folderid).data.text,		
				leaf : false,
				expandable : true,
				icon: Ext.BLANK_IMAGE_URL,
				icon2: treeicon,
				expanded: dirroot.getNodeById(folderid).isExpanded(),
				children : dirroot.getNodeById(folderid).childNodes,
				allowDrag: dirroot.getNodeById(folderid).data.allowDrag
							
			},dirroot.getNodeById(folderid));
		}
		if(gridicon)
		{		
			FileStore.getById(folderid).set('icon',gridicon);		
			FileStore.getById(folderid).commit();			
		}
	}
}

function checktrashempty()
{
	if (trashbinfull)
	{
		if (!dirroot.getNodeById(TrashbinID).hasChildNodes())
		{
			FileStore.suspendEvents();
			FileStore.filterBy(function(record,id) 
			{						
				if (record.get('parentid') == TrashbinID) return true;		
			});
			if (FileStore.count() == 0)
			{
				trashbinfull=false;
				replacefoldericon(TrashbinID,'trashbin');
				updateTopFolderMenu(currentdirid);								
			}			
			reinstateFileStore();			
			FileStore.resumeEvents();	
		}	
	}
}


function dirsort(tree)
{
	tree.sort([{property: 'qtitle',direction: 'ASC'}]);
}


function moveitem(record,toid,ignoreTreeUpdates)
{	
	if (record.get('parentid') == InboxID)
	{
		refreshtree=true;
		InboxCount--;
	}

	if (d) console.log('moveitem()');
	if (d) console.log(record);
	if (d) console.log(toid);
	if (d) console.log(ignoreTreeUpdates);
	if ((RootbyId(toid) == TrashbinID) && (!trashbinfull))
	{
		replacefoldericon(TrashbinID,'trashbinfull');
		trashbinfull=true;
	}
	var checktb=false;
	if (RootbyId(record.get('id')) == TrashbinID) checktb=true;	
	if (!dirroot.getNodeById(toid)) return false;	
	if (toid == TrashbinID)
	{			
		var sharedfolders = [];	
		function spch3(folderid)
		{							
			if (sharednodes[folderid]) sharedfolders.push(folderid);			
			if (dirroot.getNodeById(folderid)) var childnodes = dirroot.getNodeById(folderid).childNodes;			
			else var childnodes = [];
			for(var i in childnodes) spch3(childnodes[i].data.id);				
		}		
		if (record.get('folder') > 0) spch3(record.get('id'));		
		if (sharedfolders.length > 0)
		{				
			var stxt = '';
			if (sharedfolders.length == 1) stxt = l[41] + '<br>' + l[42];
			else stxt = l[43].replace('[X]',sharedfolders.length) + '<br>' + l[44];
			
			if (mobileversion)
			{
				alert(stxt.replace('<br>',' '));
			}
			else
			{			
				Ext.Msg.show({
					 title:l[45],
					 msg: stxt,
					 buttons: Ext.Msg.OK,
					 icon: Ext.Msg.WARNING
				});
			}
		}	
	}
	if ((record.get('folder')) && (!mobileversion))
	{	
		var frompath = dirroot.getNodeById(record.get('id')).getPath();
		var topath = dirroot.getNodeById(toid).getPath();
		if (topath.substr(0,frompath.length) == frompath)  return false;				
	}	
	record.set('parentid',toid);
	record.commit();				
	if (record.get('folder')  && (!ignoreTreeUpdates) && (!mobileversion))
	{
		var node = dirroot.getNodeById(record.get('id'));
		var tonode = dirroot.getNodeById(toid);
		var node2 = node.copy(null,true);							
		node.remove();							
		tonode.appendChild(node);
	}
	else
	{
		// moving file
	}
	if (checktb) checktrashempty();
}


function copytouser(recordids,toid,copydel,callbackf)
{
	if (d) console.log('copytouser');
	if (d) console.log(callbackf);
	var ctx =
	{
		cachepubkeycomplete: function(ctx,pubkey)
		{
			if (pubkey)
			{
				copyitems(ctx.recordids,ctx.toid,ctx.copydel,ctx.callbackf);			
			}
		},
		recordids: recordids,
		toid: toid,
		copydel: copydel,
		callbackf: callbackf
	}	
	api_cachepubkey(ctx,toid);
}



function copyitems(recordids,toid,copydel,callbackf)
{
	loadingDialog.show();	
	treearray = [];
	for(var i in recordids)
	{
		var folderids = [];				
		if (FileStore.getById(recordids[i]).get('folder') == 1)
		{					
			function spch(folderid)
			{		
				folderids.push(folderid);			
				var childnodes = dirroot.getNodeById(folderid).childNodes;			
				for(var i in childnodes) spch(childnodes[i].data.id);						
			}	
			spch(recordids[i]);									
		}									
		FileStore.suspendEvents();
		FileStore.filterBy(function(record,id) 
		{						
			if ((Ext.Array.contains(folderids,record.get('parentid'))) || (record.get('id') == recordids[i])) return true		
		});			
		var diropen=false;										
		FileStore.each( function (obj) 
		{
			if (obj)
			{		
				var parentid = obj.get('parentid');
				if (obj.get('id') == recordids[i]) parentid=false;
				var attrs = new Object;
				attrs.n = obj.get('name');	
				var mkat = enc_attr(attrs,obj.get('key'));
				var attr = ab_to_base64(mkat[0]);						
				if (toid.length == 11)
				{
					if (d) console.log('mkat1');
					if (d) console.log(mkat[1]);
					var key = base64urlencode(encryptto(toid,a32_to_str(mkat[1])));
				}
				else
				{
					var key = a32_to_base64(encrypt_key(u_k_aes,mkat[1]));
				}
				if (parentid)
				{
					treearray.push(
					{
						h: obj.get('id'),
						t: obj.get('folder'),
						a: attr,
						k: key,
						p: parentid
					});
				}
				else
				{
					treearray.push(
					{
						h: obj.get('id'),
						t: obj.get('folder'),
						a: attr,
						k: key
					});
				}
			}
		});		
		reinstateFileStore();		
		FileStore.resumeEvents();
	}			
	var ops = [];	
	ops[0] = 
	{ 
	  a: 'p',
	  t: toid,
	  n: treearray,
	  i: requesti
	};	
	if (copydel)
	{
		var i = 1;		
		for (var a in recordids)
		{
			ops[i] = 
			{			
				a: 'd',
				n: recordids[a]
			};
			i++;
		}		
	}	 
	var sharingnodes = fm_getsharenodes(toid);		
	if (sharingnodes.length > 0)	
	{		
		var movingnodes = [];
		for (i in treearray) movingnodes.push(treearray[i].h);		
		ops[0].cr =  crypto_makecr(movingnodes,sharingnodes,true);		
	}	
	api_req(ops,
	{ 
		callback : function (json,params)
		{
			if (json[0].u) process_u(json[0].u,true);
		
			if (json[0].f)
			{
				farray[fi] = new Object;	
				farray[fi].f = json[0].f;		
				process_f(fi,true,{fn : function() 
				{
					aftermove(true);
					loadingDialog.hide();  				
				}});	
				fi++;						
			}				   
		}
	});	
	if (d) console.log(callbackf);	
	if (callbackf) callbackf();	 	
}

function aftermove(isFolder)
{
	if (d) console.log('aftermove()');	

	
	if (mobileversion)
	{		
		if (mfileinfo || mfolderinfo) mback();
		else refreshgrid();		
	}
	else
	{
		document.getElementById('overlay').style.cursor='wait';
		document.getElementById('overlay').style.display='';
		setTimeout("refreshgrid()",350);	
		if (isFolder)
		{
			setTimeout("refreshtreepanel()",200);
			setTimeout("dirsort(dirroot);",600);
			setTimeout("updateTopFolderMenu('" + currentdirid + "')",650);
		}	
		else if (refreshtree)
		{
			refreshtree=false;
			refreshtreepanel();						
		}
	}
}

function updateTopFolderMenu(dirid)
{
	topFolderMenu.removeAll(true);	
	var treenode = dirroot.getNodeById(dirid);	
	if (!treenode) return false;	
	var dirarray = treenode.getPath().substr(1).split('/');
	var data = FileStore.data;	
	var prevkey = '';	
	for(var key in dirarray)
	{
		if (key > 0)
		{	
			var dirname = dirroot.getNodeById(dirarray[key]).data.text;
			var iconurl = staticpath + 'images/folder2.png';		
			if (dirarray[key] == RootID) iconurl = staticpath + 'images/clouddrive.png';
			else if ((dirarray[key] == TrashbinID) && (trashbinfull)) iconurl = staticpath + 'images/trashbin_full.png';
			else if (dirarray[key] == TrashbinID) iconurl = staticpath + 'images/trashbin.png';
			else if (dirarray[key] == InboxID) iconurl = staticpath + 'images/inbox.png';
			else if (dirarray[key] == NetworkID) iconurl = staticpath + 'images/mega/contacts.png';
			else if (prevkey == NetworkID) iconurl = staticpath + 'images/small_contact.png';
			var submenu = new Array();			
			var subdirs = dirroot.getNodeById(dirarray[key]).childNodes;			
			for(var key2 in subdirs)
			{
				var iconurl2= staticpath + 'images/mega/folder2.png';			
				if (dirarray[key] == NetworkID) iconurl2= staticpath + 'images/small_contact.png';
							
				submenu.push({text: subdirs[key2].data.text, icon: iconurl2, dirid: subdirs[key2].data.id, handler: function(b) { opendirectory(b.dirid); }});
			}		
			topFolderMenu.add([
			{
				text: dirname,
				icon: iconurl,
				dirid: dirarray[key],
				menu: submenu,
				xtype: 'splitbutton',
				handler: function(b) { opendirectory(b.dirid); }
			}]);
		}		
		prevkey = dirarray[key];		
	}	
	setTimeout("fmtoolbarscroll()",5);
}


function topbuttontexts()
{
	if (mobileversion) return false;

	var mw = 30;

	if ($('#topfoldermenu-body').width() > $('body').width()-300-topbuttonswidth-dirtree.width)
	{
		topButtons.items.items[0].setText('');
		topButtons.items.items[1].setText('');
		if (topButtons.items.items[2]) topButtons.items.items[2].setText('');	
	}
	else	
	{
		topButtons.items.items[0].setText(l[68]);
		topButtons.items.items[1].setText(l[97]);
		if (topButtons.items.items[2])
		{	
			topButtons.items.items[1].setText(l[99]);		
			topButtons.items.items[2].setText(l[98]);
		}
	}
}



function fmtoolbarscroll()
{	
	if (!topbuttonswidth) topbuttonswidth = $('#topbuttons-body').width();

	topbuttontexts();
	
	if  (Ext.userAgent.toLowerCase().indexOf('chrome') > 0)
	{
		if (document.getElementById('fmtoolbar-innerCt'))
		{
			var w = parseInt(document.getElementById('fmtoolbar-innerCt').style.width.replace('px',''));
			document.getElementById('fmtoolbar-innerCt').scrollLeft = document.getElementById('fmtoolbar-innerCt').scrollWidth-w;
		}
	}
}


function refreshgrid()
{	
	FileStore.invalidateScrollerOnRefresh = false;
	FileStore.clearFilter(true);
	FileStore.filterBy(function(record,id) 
	{
		if ((record.get('parentid') == currentdirid) && (record.get('folder') < 2)  && (record.get('name') != '')) return true;	
	});
	FileStore.invalidateScrollerOnRefresh = true;	
	FileStore.sort(
	{
		direction: sortdirection,
		property: sortby	
	});	
	document.getElementById('overlay').style.cursor='default';
	setTimeout("document.getElementById('overlay').style.display='none';",10);
	
	if (mobileversion) mobileui();
}

function opendirectory(dirid,force)
{
	fmdirid=false;
	if (mobileversion)
	{
		if ((dirid == currentdirid) && (!force)) return false;
		processopendir(dirid);
	}
	else
	{
		if (dirid == currentdirid) return false;		
		document.getElementById('overlay').style.cursor='wait';
		document.getElementById('overlay').style.display='';
		setTimeout("processopendir('" + dirid + "');",100);	
	}
}

function processopendir(dirid)
{
	var treenode = dirroot.getNodeById(dirid);
	if (treenode)
	{	
		if (folderlink)
		{
			document.location.hash = '#F!' + pfid + '!' + pfkey + '!' + dirid;
			document.title = 'MEGA';
		}
		else
		{		
			document.location.hash = 'fm' + dirid;
			document.title = 'MEGA';
		}
	
		if (d) console.log('Opendirectory: ' + dirid);
		FileStore.clearFilter(true);
		FileStore.filterBy(function(record,id) 
		{			
			if ((record.get('parentid') == dirid) && (record.get('folder') < 2) && (record.get('name') != '')) return true;	
		});		
		if (d) console.log('filter done');		
		FileStore.sort(
		{
			direction: sortdirection,
			property: sortby	
		});		
		if (d) console.log('sort done');		
		updateTopFolderMenu(dirid);		
		currentdirid = dirid;		
		if (d) console.log('current path: ' + treenode.getPath());
		
		
		dirbuttons();
	
		document.getElementById('overlay').style.cursor='default';
		setTimeout("document.getElementById('overlay').style.display='none';",10);
		
		if ((FileStore.count() > 500) && (!mobileversion)) setTimeout("largefolderwarning('"+ dirid +"')",1500);

		
		fm_thumbnails();
		mobileui();
	}
	else document.getElementById('overlay').style.display='none';
}






function dirbuttons()
{	
	if (mobileversion) return false;
		
	if (folderlink)
	{
		topButtons.hide();	
		topBtrash.hide();
		topBcontact.hide();	
		FileGrid.columns[4].hide();
		FileGrid.columns[5].hide();	
	}
	else
	{
		FileGrid.columns[5].show();
		var treenode = dirroot.getById(currentdirid);	
		if (treenode) dirtree.getSelectionModel().select(treenode);	
		topButtons.show();		
		topBtrash.hide();
		topBcontact.hide();
		if ((currentdirid == NetworkID) || (currentdirid.length == 11) || (currentdirid == InboxID) || (currentdirid == TrashbinID))
		{		
			if (currentdirid == NetworkID) topBcontact.show();			
			if (currentdirid == TrashbinID) topBtrash.show();
			topButtons.hide();
		}
		else if (RootbyId(currentdirid) == NetworkID)
		{			
			if (RightsbyID(currentdirid) == 0)	topButtons.hide();		
		}
		if ((FileStore.count() == 0) && (currentdirid == InboxID) && (InboxCount > 0)) 
		{
			InboxCount=0;
			refreshtreepanel();
		}	
		
		
		if (currentdirid == InboxID) FileGrid.columns[4].show();
		else FileGrid.columns[4].hide();
	}
}


lf_warnings={};
function largefolderwarning(h)
{
	if ((!lf_warnings[h]) && (h == currentdirid))
	{
		lf_warnings[h]=1;
		alert(l[515], l[34].replace(':',''));	
	}
}



function fm_requestfolderid(nodeid,name,ulparams)
{	
	if (!nodeid) nodeid = RootID;
	
	// check if folder exists:	
	FileStore.suspendEvents();
	FileStore.filterBy(function(record,id) 
	{						
		if ((record.get('parentid') == nodeid) && (record.get('name') == name)) return true;	
	});			
	if (FileStore.count() > 0)
	{
		ulparams.callback(ulparams,FileStore.getAt(0).get('id'));	
	}
	else createfolder(nodeid,name,ulparams);		
	reinstateFileStore();	
	FileStore.resumeEvents();	
}


function createfolder(toid,name,ulparams)
{
	if (d) console.log('Create folder in the folder ' + toid + ' with the name ' + name);
	var mkat = enc_attr({ n : name },[]);
	var attr = ab_to_base64(mkat[0]);
	var key = a32_to_base64(encrypt_key(u_k_aes,mkat[1]));	
	var req = { 
	  a: 'p',
	  t: toid,
	  n: [{ h:'xxxxxxxx', t:1, a:attr, k:key }],
	  i: requesti
	};
	var sn = fm_getsharenodes(toid);
	if (sn.length)
	{
		req.cr = crypto_makecr([mkat[1]],sn,false);
		req.cr[1][0] = 'xxxxxxxx';
	}	
	if (d) console.log(req);		
	api_req([req],
	{ 
	  ulparams: ulparams,
	  callback : function (json,params)
	  {
		if ((typeof json[0] == 'number') && (json[0] < 0))
		{	
			if (!params.ulparams)
			{
				Ext.Msg.show({
					 title:l[46],
					 msg: l[47],
					 buttons: Ext.Msg.OK
				});
				loadingDialog.hide();
			}
		}
		else
		{
			farray[fi]   = new Object;
			farray[fi].f = json[0].f;
			process_f(fi,true,{fn : function() 
			{ 
				aftermove(true);	
				loadingDialog.hide();
			}});
			fi++;	
			
			if (params.ulparams) ulparams.callback(params.ulparams,json[0].f[0].h);
		}
	  }
	});
}

function processmove(jsonmove)
{	
	if (d) console.log('processmove function call');
	if (d) console.log(jsonmove);	
	for (i in jsonmove)
	{	
		var sharingnodes 	= fm_getsharenodes(jsonmove[i].t);	
		if (sharingnodes.length > 0)	
		{		
			var movingnodes = fm_getnodes(jsonmove[i].n);	
			if (d) console.log('crypto_makecr:');
			if (d) console.log(movingnodes);
			if (d) console.log(sharingnodes);
			jsonmove[i].cr = crypto_makecr(movingnodes,sharingnodes,true);
		}
	}
	if (d) console.log(jsonmove);	
	api_req(jsonmove);
}

function RootbyId(id)
{
	if (id == RootID) return RootID;
	if (id == TrashbinID) return TrashbinID;
	
	var parentid=id;
	var node = true;
	
	while ((parentid !== NetworkID) && (parentid !== TrashbinID) && (parentid !== RootID) && (parentid !== InboxID) && (node))
	{
		node = FileStore.getById(parentid);
		if (node) parentid = node.data.parentid;
	}
	return parentid
}

function RightsbyID(id)
{
	var sharinguser = false;
	var parentid = id;	
	while (!sharinguser)
	{
		if (FileStore.getById(parentid).data.su != '')
		{
			if (d) console.log('rights: ' + FileStore.getById(parentid).data.r + ' from ' + parentid);		
			return FileStore.getById(parentid).data.r;			
		}		
		parentid = FileStore.getById(parentid).data.parentid;		
		if (parentid == NetworkID)
		{		
			return false;
			if (d) console.log('No sharing rights found, shouldn\'t happen.');
		}
	}
}

function createtree(tree,type)
{		


	if (d) console.log('createtree ' + type);	
	// copy from root to network -> 1
	// copy from network to root -> 2		
	// move from root to root/trash -> 3
	// move from trash to root -> 4	
	var expanded = false;
	
	if ((type == 0) || (type == 2) || (type == 3) || (type == 4))
	{
		var ntxt = l[164];
		if (folderlink)
		{
			var rnode = FileStore.getById(RootID);									
			if (rnode) ntxt = $('<div/>').text(rnode.get('name')).html();		
		}
	
		if (fmconfig.treenodes[RootID]) expanded =true;
		else expanded = false;				
		fileroot = Ext.create('Object', 
		{	
				index:1,
				text: ntxt,
				expanded: expanded,
				id: RootID,
				icon: Ext.BLANK_IMAGE_URL,
				icon2: staticpath + 'images/mega/clouddrive.png',
				children : new Array(),
				allowDrag: false
				
		});
		processdir(fileroot);
	}	
	if ((type == 0) || (type == 1))
	{			
		if (fmconfig.treenodes[NetworkID]) expanded =true;
		else expanded = false;			
		networkroot = Ext.create('Object', 
		{	
				index:4,				
				text: l[165],
				expanded: expanded,
				id: NetworkID,
				icon: Ext.BLANK_IMAGE_URL,
				icon2: staticpath + 'images/user_group.png',				
				children : new Array(),
				allowDrag: false
		});
		processdir(networkroot);
	}
	
	if (type == 0)
	{
		var InboxText = l[166];
		if (InboxCount > 0) InboxText = l[166] + ' (' + InboxCount + ')';
		if (fmconfig.treenodes[InboxID]) expanded =true;
		else expanded = false;		
		inboxroot = Ext.create('Object', 
		{	
				index:3,
				text: InboxText,
				expanded: expanded,
				id: InboxID,
				icon: Ext.BLANK_IMAGE_URL,
				icon2: staticpath + 'images/inbox.png',
				children : new Array(),
				allowDrag: false
		});
		processdir(inboxroot);
	}
	
	if ((type == 0) || (type == 3))
	{
		var trashbinico = staticpath + 'images/trashbin.png';
		if (trashbinfull) trashbinico = staticpath + 'images/trashbin_full.png';	
		if (fmconfig.treenodes[TrashbinID]) expanded =true;
		else expanded = false;		
		trashbinroot = Ext.create('Object', 
		{	
				index:2,
				text: l[167],
				expanded: expanded,
				id: TrashbinID,
				icon: Ext.BLANK_IMAGE_URL,
				icon2: trashbinico,
				children : new Array(),
				allowDrag: false
		});
		if (type == 0) processdir(trashbinroot);
	}
	var rootchildren = new Array();	
	if ((type == 0) || (type == 2) || (type == 3) || (type == 4)) rootchildren.push(fileroot);
	
	if (((type == 0) || (type == 1)) && (!folderlink)) rootchildren.push(networkroot);
	if (((type == 0) || (type == 3)) && (!folderlink)) rootchildren.push(trashbinroot);
	if ((type == 0) && (!folderlink)) rootchildren.push(inboxroot);
	toproot = Ext.create('Object', 
	{	
			text: 'invisisbleroot',
			expanded: true,
			id: 'INVROOT',
			icon: Ext.BLANK_IMAGE_URL,
			icon2: staticpath + 'images/mega/clouddrive.png',
			children: rootchildren
	});	
	tree.setRootNode(toproot);	
	dirsort(dirroot);
	dirsort(dirroot);
}

function fmsearch(text)
{
	if (fminitialized)
	{
		if (text == '')
		{
			// go back to...
		}
		else if (text.length < 3)
		{
			alert(l[48]);	
		}
		else
		{	
			if (dirid == currentdirid) return false;			
			processsearch(text);		
		}
	}
}

function processsearch(text)
{
	if (d) console.log('fmsearch: ' + text);
	FileStore.clearFilter(true);
	FileStore.filterBy(function(record,id) 
	{
		var name = record.get('name');
		if ((name.toLowerCase().search(text.toLowerCase()) >= 0) && (record.get('folder') < 2) && (name != '')) return true;	
	});		
	FileStore.sort(
	{
		direction: sortdirection,
		property: sortby	
	});	
	
	
	
			
	currentdirid = false;			
	
	if (!mobileversion)
	{
		topButtons.hide();	
		updateTopFolderMenu(RootID);
		document.getElementById('overlay').style.cursor='default';
		setTimeout("document.getElementById('overlay').style.display='none';",10);
	}
	
	
	fm_thumbnails();
	mobileui();
}


function initializefm()
{

	crypto_share_rsa2aes();
	crypto_sendrsa2aes();		
	if (fmdirid == 'rubbish') currentdirid = TrashbinID; 
	else if (fmdirid == 'inbox') currentdirid = InboxID; 
	else if (fmdirid == 'contacts') currentdirid = NetworkID; 
	else if (fmdirid) currentdirid = fmdirid;
	else currentdirid = RootID;			
	
	fmtreenode(RootID,true);
	if (!fmconfig.treenodes)
	{
		fmtreenode(NetworkID,true);
		fmtreenode(InboxID,true);
	}		
	
	createtree(dirroot,0);
	Ext.QuickTips.init(); 
	FileStore.clearFilter(true);
	FileStore.filterBy(function(record,id) 
	{
		if ((record.get('parentid') == currentdirid) && (record.get('folder') < 2)  && (record.get('name') != '')) return true;	
	});
	updateTopFolderMenu(currentdirid);
	FileStore.sort(
	{
		direction: 'ASC',
		property: 'name'	
	});	
	document.title = 'MEGA';	
	if(dl_import) dl_fm_import();	
	
	if ((fmconfig['blockchromeDialog'] != '1') && (Ext.userAgent.toLowerCase().replace('crios','chrome').indexOf('chrome') == -1) && (Ext.userAgent.toLowerCase().indexOf('firefox') == -1) && (!mobileversion))
	{
		setTimeout("chromeDialog.show();",5000);
	}
	else if ((fmconfig['blockfirefoxDialog'] != '1') && (Ext.userAgent.toLowerCase().indexOf('firefox') > -1) && (!mobileversion))
	{
		setTimeout("showfirefoxDialog();",5000);
	}
	
	if (!mobileversion) document.getElementById('topmenufm').style.display='';
	
	if ((u_type === 0) && (!mobileversion))
	{
		document.getElementById('menu_login').style.display='none';
		document.getElementById('menu_abort').style.display='';	
	}
	
	if (d) console.log('initializefm');
	
	dirbuttons();
		
	if ((fmconfig.tileview) && (fmconfig.tileview > 0)) changeview(0);
	
	fm_thumbnails();
	
	mobileui();
	
	fminitialized=true;
	
	
	if (folderlink)
	{		
		var node = FileStore.getById(RootID);		
		if ((!node) || (node.get('name') == ''))
		{
			dirbuttons();
			loadingDialog.hide();
			setTimeout("alert('Decryption error / Invalid key');",200);
			return false;
		}
	}
}

function processdir(subtree)
{
	//FileStore.clearFilter(true);
	FileStore.filterBy(function(record,id) 
	{
		if ((record.get('parentid') == subtree.id) && (record.get('folder') > 0) && (record.get('name') != '')) return true;	
	});
	FileStore.each( function (obj) 
	{  		
		var folderico = '';
		folderico = staticpath + 'images/folder.gif';		
		var allowDrag=true;		
		var icoclass = 'folder';		
		if (obj.data.id == TrashbinID)
		{		
			folderico = staticpath + 'images/trashbin.png';
			allowDrag=false;
		}
		else if (obj.data.parentid == NetworkID)
		{		
			folderico = staticpath + 'images/small_contact.png';
			allowDrag=false;
		}		
		else if (sharednodes[obj.data.id])
		{	
			folderico = staticpath + 'images/sharedfolder.gif';
			icoclass = 'sharefoldericon';
			allowDrag=true;
		}				
		var qtip = '';		
		var fexpanded=false;
		if (fmconfig.treenodes[obj.data.id]) fexpanded =true;
		subtree.children[subtree.children.length] = 
		{
			id : obj.data.id,
			qtitle : obj.data.name.toLowerCase(),
			text : $('<div/>').text(obj.data.name).html(),		
			leaf : false,
			expanded: fexpanded,
			expandable : true,
			icon: Ext.BLANK_IMAGE_URL,
			icon2: folderico,
			children : new Array(),
			allowDrag: allowDrag,
			qtip: qtip
		};
		processdir(subtree.children[subtree.children.length-1]);		
	});
}


Ext.define('Ext.ux.grid.plugin.DragSelector', {
    extend: 'Ext.util.Observable',
    requires: ['Ext.dd.DragTracker',
            'Ext.util.Region'],
            
    alias: 'plugin.ux.dragselector',
    dragging: false,
    scrollTopStart: 0,
    scrollTop: 0,
    targetDragSelector: '.dragselect',
    dragSafe: false,
    scrollSpeed: 10,
    
    constructor: function(config)
    {
        var me = this;
        
        me.addEvents(
            /**
             * @event dragselectorstart Fires when DragSelector starts
             * @param {Ext.ux.grid.plugin.DragSelector} this
             */
            'dragselectorstart',
            /**
             * @event dragselectorend Fires when DragSelector ends
             * @param {Ext.ux.grid.plugin.DragSelector} this
             */
            'dragselectorend');
        
        me.callParent([config]);
    },
    
    init: function(cmp)
    {
        var me = this;
        me.grid = cmp;
        me.view = me.grid.getView();
        me.selModel = me.view.getSelectionModel();
        me.mon(me.view, 'render', me.onRender, me);
        me.mon(me.view, 'bodyscroll', me.syncScroll, me);
    },
    
    onRender: function()
    {
        var me = this;       
        me.tracker = new Ext.dd.DragTracker({
            view: me.view, // new
            dragSelector: me, // new
            el: me.view.el, // new
            onBeforeStart: Ext.Function.bind(me.onBeforeStart, me),
            onStart: Ext.Function.bind(me.onStart, me),
            onDrag: Ext.Function.bind(me.onDrag, me),
            onEnd: Ext.Function.bind(me.onEnd, me)
        });        
        me.dragRegion = new Ext.util.Region();
        me.scroller = me.view.getEl();
    },
    
    syncScroll: function(e)
    {        
        var top = this.scroller.getScroll().top;        
        this.scrollTop = top - this.scrollTopStart;        
        this.fillRegions();
        if(this.dragging) this.onDrag(e, true);        
    },
    
    fillAllRegions: function()
    {
        var me = this, 
        objectsSelected = me.objectsSelected = [];        
        me.mainRegion = me.scroller.getRegion();
        me.bodyRegion = me.scroller.getRegion();        
        me.view.all.each(function(el)
        {
            objectsSelected.push(me.selModel.isSelected(objectsSelected.length));
        }, me);        
        me.syncScroll();
    },
    
    fillRegions: function()
    {
        var rs = this.rs = [];
        this.view.all.each(function(el)
        {
            rs.push(el.getRegion());
        });
    },
    
    cancelClick: function(e)
    {
        var me = this, target = e.getTarget();
        me.ctrlState = e.ctrlKey;
        me.shiftState = e.shiftKey;
        if(!me.ctrlState && !me.shiftState && target.className === 'x-grid-view') me.selModel.clearSelections();        
        return true;
    },
    
    onBeforeStart: function(e)
    {	
		var sourceEl = e.getTarget();		
		if (sourceEl.className.indexOf('x-grid-view x-fit-item x-grid-view-default') == -1) return false;
		if (!sourceEl) return false;       
        if(e.button === 2) return false;
        if(e.getPageX() > this.view.el.getX() + this.view.el.dom.clientWidth - 20) return false;
        this.cancelClick(e);
        return !this.dragSafe || e.target == this.view.el.dom || Ext.DomQuery.is(e.target, this.targetDragSelector);
    },
    
    onStart: function(e)
    {
        var me = this;        
        me.scrollTopStart = me.scroller.getScroll().top;
        me.fillAllRegions();

        me.getProxy().show();
        me.dragging = true;
        me.fireEvent('dragselectorstart', me);
    },
    
    /**
     * @private
     * Creates a Proxy element that will be used to highlight the drag selection region
     * @return {Ext.Element} The Proxy element
     */
    getProxy: function()
    {		
		if ((this.proxy) && (!this.proxy.dom.parentElement))
		{
			this.proxy.destroy();
			this.proxy=undefined;		
		}	
        if (!this.proxy) 		
		{
            this.proxy = this.view.getEl().createChild({
                tag: 'div',
                cls: 'x-view-selector'
            });
        }
        return this.proxy;
    },
    
    onDrag: function(e, scaleSelector)
    {	
        var me = this,
            selModel = me.view.getSelectionModel(), // new
            proxy = me.getProxy(), // new
            bodyRegion = me.bodyRegion,
            startXY = me.tracker.startXY,
            dragRegion = me.dragRegion, // new
            currentXY = me.tracker.getXY(),
            width = Math.abs(startXY[0] - currentXY[0]),
            minX = Math.min(startXY[0], currentXY[0]),
            minY = Math.min(startXY[1], currentXY[1]) - me.scrollTop,
            height = Math.abs(minY - currentXY[1]);
			
        if(currentXY[0] < startXY[0] && !scaleSelector) currentXY[0] += 2;                
        if(me.scrollTop >= 0)
        {
            if((startXY[1] - me.scrollTop) > currentXY[1])
            {
                minY = currentXY[1];
                height = Math.abs(startXY[1] - currentXY[1]) - me.scrollTop;
            }            
            bodyRegion.top -= me.scrollTop; 
        }
        else
        {
            if((startXY[1] - me.scrollTop) > currentXY[1])
            {
                minY = currentXY[1];
                height = Math.abs((startXY[1] - me.scrollTop) - currentXY[1]);
            }            
            bodyRegion.bottom -= me.scrollTop;   
        }               
        Ext.apply(dragRegion, {
            top: minY,
            left: minX,
            right: minX + width,
            bottom: minY + height
        });
        dragRegion.constrainTo(bodyRegion);
        proxy.setRegion(dragRegion);
        var s = me.scroller;
        for( var i = 0; i < me.rs.length; i++)
        {
            var r = me.rs[i],
                sel = dragRegion.intersect(r),
                selected = selModel.isSelected(i),
                selectedBefore = me.objectsSelected[i];
            
            if(me.ctrlState)
            {
                if(selectedBefore)
                {
                    if(sel && selected) selModel.deselect(i);                    
                    else if(!sel && !selected) selModel.select(i, true);                    
                }
                else
                {
                    if(sel && !selected) selModel.select(i, true);                    
                    else if(!sel && selected) selModel.deselect(i);                    
                }
            }
            else
            {
                if(sel && !selected) selModel.select(i, true);                
                else if(!sel && selected) selModel.deselect(i);                
            }
        }        
        if(currentXY[1] + 10 >= me.mainRegion.bottom)
        {
            if(Ext.isIE)
            {
                setTimeout(function()
                {
                    s.scrollTo('top', s.getScroll().top + 40);
                }, 100);
            }
            else
            {
                me.setScrollTop(s.getScroll().top + me.scrollSpeed);
            }
        }       
        if(currentXY[1] - 10 <= me.mainRegion.top)
        {
            if(Ext.isIE)
            {
                setTimeout(function()
                {
                    s.scrollTo('top', s.getScroll().top - 40);
                }, 100);
            }
            else
            {
                me.setScrollTop(s.getScroll().top - me.scrollSpeed);
            }
        }
    },    
    setScrollTop: function(scrollTop)
    {
        var el = this.scroller,
            elDom = el && el.dom;       
        if(elDom)
        {
            return elDom.scrollTop = Ext.Number.constrain(scrollTop, 0, elDom.scrollHeight - elDom.clientHeight);
        }
    },    
    onEnd: function(e)
    {
        var me = this;
        me.dragging = false;        
        me.getProxy().hide();       
        e.preventDefault();
        me.fireEvent('dragselectorend', me);
    }
});




Ext.define('Ext.ux.DataView.DragSelector', {
    requires: ['Ext.dd.DragTracker', 'Ext.util.Region'],
    init: function(dataview) {       
        this.dataview = dataview;
        dataview.mon(dataview, {
            beforecontainerclick: this.cancelClick,
            scope: this,
            render: {
                fn: this.onRender,
                scope: this,
                single: true
            }
        });
    },
    onRender: function() {      
        this.tracker = Ext.create('Ext.dd.DragTracker', {
            dataview: this.dataview,
            el: this.dataview.el,
            dragSelector: this,
            onBeforeStart: this.onBeforeStart,
            onStart: this.onStart,
            onDrag : this.onDrag,
            onEnd  : this.onEnd
        });
        this.dragRegion = Ext.create('Ext.util.Region');
    },
    onBeforeStart: function(e) {
        return e.target == this.dataview.getEl().dom;
    },
		onStart: function(e) {
        var dragSelector = this.dragSelector,
        dataview     = this.dataview;       
        this.dragging = true;
        dragSelector.fillRegions();
        dragSelector.getProxy().show();
        dataview.getSelectionModel().deselectAll();
    },
    cancelClick: function() {
        return !this.tracker.dragging;
    },
    onDrag: function(e) 
	{
        var dragSelector = this.dragSelector;
			var dragSelector = this.dragSelector,
            selModel     = dragSelector.dataview.getSelectionModel(),
            dragRegion   = dragSelector.dragRegion,
            bodyRegion   = dragSelector.bodyRegion,
            proxy        = dragSelector.getProxy(),
            regions      = dragSelector.regions,
            length       = regions.length,

            startXY   = this.startXY,
            currentXY = this.getXY(),
            minX      = Math.min(startXY[0], currentXY[0]),
            minY      = Math.min(startXY[1], currentXY[1]),
            width     = Math.abs(startXY[0] - currentXY[0]),
            height    = Math.abs(startXY[1] - currentXY[1]),
            region, selected, i;

			
        Ext.apply(dragRegion, {
            top: minY,
            left: minX,
            right: minX + width,
            bottom: minY + height
        });
	
        dragRegion.constrainTo(bodyRegion);
        proxy.setRegion(dragRegion);

        for (i = 0; i < length; i++) 
		{
            region = regions[i];
            selected = dragRegion.intersect(region);

            if (selected) {
                selModel.select(i, true);
            } else {
                selModel.deselect(i);
            }
        }
    },
    onEnd: Ext.Function.createDelayed(function(e) {
        var dataview = this.dataview,
            selModel = dataview.getSelectionModel(),
            dragSelector = this.dragSelector;

        this.dragging = false;
        dragSelector.getProxy().hide();
    }, 1),
    getProxy: function() {

		if ((this.proxy) && (!this.proxy.dom.parentElement))
		{
			this.proxy.destroy();
			this.proxy=undefined;		
		}
	
        if (!this.proxy) 		
		{
            this.proxy = this.dataview.getEl().createChild({
                tag: 'div',
                cls: 'x-view-selector'
            });
        }
		proxytest = this.proxy;		
        return this.proxy;
    },
    fillRegions: function() {
        var dataview = this.dataview,
            regions  = this.regions = [];

        dataview.all.each(function(node) {
            regions.push(node.getRegion());
        });
        this.bodyRegion = dataview.getEl().getRegion();
    }
});


// create special data store for the main grid to handle sorting of files & folders nicely:
Ext.define('Ext.data.Store2', 
{
    extend: 'Ext.data.Store',	
	sort: function() 
	{
        var me = this,
		prefetchData = me.prefetchData,
		sorters,
		start,
		end,
		tf,
		range;		
		var property = 'name';
		var direction = 'ASC';		
		sortdirection = direction;
		sortby = property;		
		if (arguments[0])
		{
			if (arguments[0].property) 	property = arguments[0].property;												
			if (arguments[0].direction) direction = arguments[0].direction;									
		}
		if ((property == 'name') || (property == 'owner') || (property == 'type'))
		{
			tf = function(s) { return String(s).toUpperCase().replace(this.stripTagsRE, ""); };		
		}
		else
		{
			tf = function(s) { return s; };				
		}
		var args 	= [];
		var sorters = [];
		sorters[0] = Ext.create("Ext.util.Sorter",
		{
			direction: 	'DESC',
			property: 	'folder',
			root: 'data'
		});
		sorters[1] = Ext.create("Ext.util.Sorter",
		{
			direction: 	direction,
			property: 	property,
			root: 'data',			
			transform: tf
		});
		args[0] = sorters;		
		me.callParent(args);        
    }
});


Ext.define('MegaFS', 
{
    extend: 'Ext.data.Model',
    fields: [	
	{name: 'name',  	type: 'string'},
    {name: 'size',  	type: 'number'},
    {name: 'type',  	type: 'string'},
    {name: 'date',  	type: 'number'},
	{name: 'icon',  	type: 'string'},
	{name: 'owner',  	type: 'string'},
	{name: 'sender',  	type: 'string'},
	{name: 'parentid', 	type: 'string'},
	{name: 'folder', 	type: 'Integer'},
	{name: 'r', 		type: 'Integer'},
	{name: 'su', 		type: 'string'},
	{name: 'id', 		type: 'string'},
	{name: 'ph', 		type: 'string'},
	{name: 'attrs', 	type: 'string'},
	{name: 'fa', 		type: 'string'},
	{name: 'key', 		type: 'Array'}
	]
});

Ext.define('TransferFS', {
    extend: 'Ext.data.Model',
    fields: [	
	{name: 'name',  		type: 'string' },
    {name: 'size',  		type: 'string'},
    {name: 'type',  		type: 'string'},
	{name: 'transfertype', 	type: 'string'},
	{name: 'transfericon', 	type: 'string'},
    {name: 'speed',  		type: 'string'},
	{name: 'eltime',  		type: 'string'},
	{name: 'retime',  		type: 'string'},
	{name: 'status',  		type: 'string'},
	{name: 'icon',  		type: 'string'},
	{name: 'parentid', 		type: 'string'},
	{name: 'folder', 		type: 'Integer'},
	{name: 'progress', 		type: 'Integer'},
	{name: 'id', 			type: 'string'},
	{name: 'key', 			type: 'Array'},
	{name: 'started',  		type: 'Boolean'},
	{name: 'error',  		type: 'string'},
	{name: 'exceeded',  	type: 'Boolean'}
	]
});

Ext.define('SharingFS', 
{
    extend: 'Ext.data.Model',
    fields: [	
	{name: 'id', 		type: 'string'},
	{name: 'folderid', 	type: 'string'},
	{name: 'userid',  	type: 'string'},
    {name: 'rights',  	type: 'string'},
    {name: 'date',	type: 'string'}
	]
});

Ext.MessageBox.buttonText = {
    ok     : l[81],
    cancel : l[82],
    yes    : l[78],
    no     : l[79]
};

Ext.Msg.id = 'messagebox';
Ext.Msg.maxHeight=150;



function loadfm(start_ul)
{
	api_req([{a:'f', c:1, r:1}],
	{	
		start_ul: start_ul,
		callback : function (json,res)
		{		
			if (((typeof json == 'number') && (json < 0)) && (pfid)) 
			{
				document.getElementById('pageholder').style.display='none';	
				document.getElementById('loading').style.display='none';						
				document.getElementById('fmholder').style.display='';
				page = 'download';
				parsepage(pages['download']);
				document.getElementById('download_unavailable').style.display='';
				document.getElementById('download_page').style.display='none';
				return false;
			}
			
			if (pfkey)
			{
				if ((json[0]) && (json[0].f) && (json[0].f[0]))
				{				
					u_sharekeys[json[0].f[0].h] = base64_to_a32(pfkey);				
					RootID = json[0].f[0].h;		
					folderlink=pfid;
					if (dirtree) dirtree.setTitle('Folder Link');
				}
			}
			else
			{
				folderlink=false;
				if (dirtree) dirtree.setTitle(l[106]);		
			}
		
		
			if ((typeof json[0] == 'number') && (json[0] < 0))
			{
				parsepage(pages['login']);
				init_login();
				alert(l[200]);			
				return false;			
			}
			
			
		
			init_anoupload=false;
			
					
			Ext.suspendLayouts();
			extlayouts=false;
			FileStore.suspendEvents();			
			
			json=json[0];		
			if (d) console.log(json);
			if (d) console.log(json);
			if (json.u) process_u(json.u,false);
			if (json.ok) process_ok(json.ok);
			
			if (json.s)
			{			
				for(i in json.s)
				{	
					if (u_sharekeys[json.s[i].h])
					{
						sharingData.push({
								id: 		json.s[i].h + '_' + json.s[i].u,
								userid:		json.s[i].u,
								folderid:	json.s[i].h,
								rights:		json.s[i].r,
								date: 		json.s[i].ts
							});	
						sharednodes[json.s[i].h]=true;
					}
				}	
			}
			
			
			
			SharingStore.loadData(sharingData);			
			NetworkID = 'NETWORK';
			maxaction = json.sn;			
			var callback = new Object;			
			if (json.cr) callback.cr = json.cr;
			if (json.sr) callback.sr = json.sr;			
			callback.fn = function (cb)
			{			
				
			
				if (cb.cr) crypto_procmcr(cb.cr);
				if (cb.sr) crypto_procsr(cb.sr);				
				// find share-root-nodes, and plug them to the user-node in "contacts":		
				FileStore.filterBy(function(record,id) 
				{
					if ((record.get('folder') == 1) && (record.get('su') != '')) return true									
				});			
				
				
				
				FileStore.each( function (obj) 
				{ 
					if (!globalfolderids[obj.get('parentid')])
					{					
						obj.set('parentid',obj.get('su'));
						obj.commit();
					}
				});				
				getsc();	
				ul_completepending();
				
				FileStore.resumeEvents();
				
				document.getElementById('pageholder').style.display='none';	
				document.getElementById('loading').style.display='none';			
			
				if (mobileversion) 
				{
					document.getElementById('mobilefmholder').style.display='';	
				}
				else document.getElementById('fmholder').style.display='';
						
				if (mainpanel) mainpanel.doComponentLayout();
				init_l=false;					
				initializefm(res,start_ul);	
				
				Ext.resumeLayouts(true);								
				extlayouts=true;
				
				if (termsDialog.hidden) loadingDialog.hide();				
				if (window.File && window.FileList && window.FileReader) InitFileDrag();					
			}
			
			
			
			
			farray[fi] 	= new Object;
			farray[fi].f = json.f;
			process_f(fi,false,callback);
			fi++;			
			
		
			
		}
   });	   
}


function getitemtxt()
{
	var fnum=0;
	var dnum=0;
	for (var i in selectedRecords)
	{
	   if (selectedRecords[i].get('folder')) dnum++;
	   else fnum++;								
	}
	var t='';
	if (fnum > 1) t += l[51].replace("[X]",fnum);
	else if (fnum == 1) t += l[50];
	if (fnum && dnum) t += ' ' + l[52] + ' ';
	if (dnum > 1) t += l[54].replace('[X]',dnum);
	else if (dnum == 1) t += l[53];		
	if ((fnum == 0) && (dnum == 0)) return false;
	else return t;
}


function renderRights(value,p, record)
{
	if (value == '0') return l[55];
	else if (value == '1') return l[56];
	else if (value == '2') return l[57];
}

function renderFileName(value,p, record)
{
	var t = new Ext.Template("<div style=\"position:relative; height:21px;\"><img src=\"" + staticpath + "images/spacer.gif\" alt=\"*\" width=\"25\" height=\"23\" align=\"absmiddle\" />&nbsp;&nbsp;{1} <img src=\"{0}\" alt=\"*\" width=\"24\" height=\"24\" style=\"position:absolute; left:0px; top:-2px;\" /></div>");	
	
	return t.apply([record.get('icon'), $('<div/>').text(value).html()] );
}

function renderStatus(value,p, record)
{	
	var displayprogress 	= 'display:none;';
	var displaypending 		= 'display:none;';
	var displayerror 	= 'display:none;';	
	if (record.get('error') !== '') displayerror ='';
	else if (record.get('started')) displayprogress ='';
	else displaypending = '';	
	var perc = 0;	
	if (transferprogress[record.get('id')]) perc = transferprogress[record.get('id')];	
	var rstr = "<div class=\"progress-block\" style=\"" + displayprogress + "\" id=\"progressdiv_" + record.get('id') + "\"><div class=\"progressbar-percents\" id=\"progressperc_" + record.get('id') + "\">" + perc + "%</div><div class=\"progressbar\"><div class=\"progressbarfill\" id=\"progress_" + record.get('id') + "\" style=\"width:"+ perc + "%;\"></div></div><div class=\"clear\"></div></div>";		
	rstr += "<div style=\"" + displayerror + "\" id=\"error_" + record.get('id') + "\">" + record.get('error') + "</div>";	
	rstr += "<div style=\"" + displaypending + "\" id=\"pending_" + record.get('id') + "\">" + l[105] + "</div>";	
	var fh = '1';
	var fw = '1';	
	if (Ext.isSafari)
	{
		fh = '1';
		fw = '1';
	}	
	if (dl_method == 1)
	{
		rstr = "<div id=\"dlflash_" + record.get('id') + "\"><object data=\"https://mega.co.nz/downloader.swf\" id=\"dlswf_" + record.get('id') + "\" type=\"application/x-shockwave-flash\" height=\"" + fh + "\" width=\"" + fw + "\"><param name=\"wmode\" value=\"transparent\"><param value=\"always\" name=\"allowscriptaccess\"><param value=\"all\" name=\"allowNetworking\"></object></div>" + rstr;
	}
	return rstr;	
}

function renderSpeed(value,p, record)
{
	return "<div style=\"margin:0px; padding:0px;\" id=\"speed_" + record.get('id') + "\"></div>";	
}

function renderEltime(value,p, record)
{
	return "<div style=\"margin:0px; padding:0px;\" id=\"eltime_" + record.get('id') + "\"></div>";	
}

function renderRetime(value,p, record)
{
	return "<div style=\"margin:0px; padding:0px;\" id=\"retime_" + record.get('id') + "\"></div>";	
}

function renderTransferType(value,p, record)
{
	if (value == 'download') value = l[373];
	else value = l[372];
	var t = new Ext.Template("<img src=\"{0}\" alt=\"* \" align=\"absmiddle\" />&nbsp;&nbsp;{1}");	
	return t.apply([record.get('transfericon'), value] );
}
	
function renderFileType(value,p, record)
{
	if (record.get('parentid') == NetworkID) value = l[763];	
	var t = new Ext.Template("<div style=\"font-style:italic;\">{0}</div>");
	return t.apply([value]);
}

function renderFileSize(value)
{
	var t = new Ext.Template("<div>{0}</div>");
	if (value == -1) value = '';
	if (value !== '')  value = bytesToSize(value);
	return t.apply([value]);
}

function renderDate(value)
{
	var t = new Ext.Template("<div>{0}</div>");	
	return t.apply([time2date(value)]);
}

function renderOwner(value)
{
	var t = new Ext.Template("<div>{0}</div>");	
	if (value == 'EXP') return '<div style="height:20px;"><img src="' + staticpath + 'images/link.png" style="vertical-align:middle; margin-right:5px;" width="17" height="17"> <span>Folder Link</span></div>';	
	return t.apply([$('<div/>').text(useremails[value]).html()]);
}

function renderURL(value,p,record)
{
	if ((RootbyId(record.get('id')) != NetworkID) && (typeof record.get('key') != 'undefined') && (!folderlink)) return '<a href="#" onclick="javascript:requestlinks(\''+ $('<div/>').text(record.get('id')).html() + '\'); return false;"><img src="' + staticpath + 'images/link.png" width=\"20\ height=\"20\""></a>';
	else return '';	
}

function reloadfm()
{
	loadingDialog.show();
	FileStore.removeAll();	
	dirroot.removeAll();
	SharingStore.removeAll();
	loadfm();
}

function rightclickmenu(grid,record,item,index,e,eOpts)
{	
	var newdirmenu=false;
	if (record.currentTarget)
	{
		if ((record.currentTarget.className.indexOf('x-grid-view') > -1) || (record.currentTarget.id == 'imagegrid')) 
		{
			newdirmenu=true;
			var e = record;
		}
	}
	if (!record.data && !newdirmenu) return false;		
	if (!newdirmenu) var sourceRoot = RootbyId(record.data.id);		
	e.preventDefault();		
	itemMenu.items.get('itemMenu_open').hide();
	itemMenu.items.get('itemMenu_download').hide();
	itemMenu.items.get('itemMenu_rename').hide();
	itemMenu.items.get('itemMenu_link').hide();
	itemMenu.items.get('itemMenu_linkd').hide();
	itemMenu.items.get('itemMenu_sharing').hide();
	itemMenu.items.get('itemMenu_permissions').hide();	
	itemMenu.items.get('itemMenu_move').hide();
	itemMenu.items.get('itemMenu_copy').hide();
	itemMenu.items.get('itemMenu_remove').hide();
	itemMenu.items.get('itemMenu_cleartrash').hide();
	itemMenu.items.get('itemMenu_contact').hide();
	itemMenu.items.get('itemMenu_delcontact').hide();		
	itemMenu.items.get('itemMenu_createfolder').hide();
	if (grid.xtype == 'treeview')
	{
		FileGrid.selModel.deselectAll();
		selectedRecords = new Array();
		selectedRecords[0] = FileStore.getById(record.data.id);
	}
	if (newdirmenu)
	{
		itemMenu.folderid = currentdirid;
		if (!folderlink) itemMenu.items.get('itemMenu_createfolder').show();	
	}
	else if (record.data.id == RootID)
	{
		itemMenu.folderid = record.data.id;
		if (!folderlink) itemMenu.items.get('itemMenu_createfolder').show();
	}
	else if ((record.data.id == TrashbinID) && (trashbinfull))
	{	
		if (!folderlink) itemMenu.items.get('itemMenu_cleartrash').show();			
	}
	else if (record.data.id == NetworkID)
	{
		if (!folderlink) itemMenu.items.get('itemMenu_contact').show();	
	}
	else  if ((record.data.id == RootID) || (record.data.id == InboxID) || (record.data.id == TrashbinID))
	{	
		return false;
	}	
	else if (FileStore.getById(record.data.id).data.parentid == NetworkID)
	{	
		if (!folderlink) itemMenu.items.get('itemMenu_delcontact').show();
	}
	else if (grid.xtype == 'treeview')
	{
		if ((sourceRoot != TrashbinID) && (!folderlink)) itemMenu.items.get('itemMenu_copy').show();		
		if (sourceRoot == NetworkID) 
		{		
			if (RightsbyID(record.data.id) > 1)
			{
				itemMenu.items.get('itemMenu_createfolder').show();
				itemMenu.items.get('itemMenu_rename').show();
				itemMenu.folderid = record.data.id;
			}				
			if (!folderlink) itemMenu.items.get('itemMenu_permissions').show();			
		}
		else
		{					
			itemMenu.folderid = record.data.id;
			if (!folderlink)
			{
				itemMenu.items.get('itemMenu_rename').show();
				itemMenu.items.get('itemMenu_createfolder').show();		
				itemMenu.items.get('itemMenu_move').show();
				itemMenu.items.get('itemMenu_remove').show();	
				itemMenu.items.get('itemMenu_link').show();
				//itemMenu.items.get('itemMenu_linkd').show();
			}
			itemMenu.items.get('itemMenu_download').show();
		}				
		if ((sourceRoot == RootID) && (!folderlink)) itemMenu.items.get('itemMenu_sharing').show();		
	}
	else 
	{	
		if (!folderlink) itemMenu.items.get('itemMenu_copy').show();	
		if ((sourceRoot != NetworkID) || ((sourceRoot == NetworkID) && (RightsbyID(record.data.id) == 2)))
		{
			if ((record.get('folder') > 0) && (record.get('su') != ''))
			{
				if (!folderlink) itemMenu.items.get('itemMenu_permissions').show();
			}
			else if (!folderlink)
			{		
				itemMenu.items.get('itemMenu_move').show();
				itemMenu.items.get('itemMenu_remove').show();
				if (selectedRecords.length == 1) itemMenu.items.get('itemMenu_rename').show();				
			}
		}
		if (record.get('folder') && (selectedRecords.length == 1)) itemMenu.items.get('itemMenu_open').show();
		
		if (currentdirid != NetworkID)
		{
			itemMenu.items.get('itemMenu_download').show();			
			if (((RootbyId(record.get('id')) != NetworkID)) && (!folderlink))
			{
				itemMenu.items.get('itemMenu_link').show();	
				//itemMenu.items.get('itemMenu_linkd').show();	
			}
		}	
		
					
		if (record.get('folder') && (selectedRecords.length == 1) && (sourceRoot == RootID) && (!folderlink)) itemMenu.items.get('itemMenu_sharing').show();
	}
	itemMenu.showAt(e.getPageX(),e.getPageY());
}

function adddownload(nodeids,paths)
{		
	var totaldlsize = 0;	
	var nospace_msg = false;
	if (!paths) var paths = [];	
	var dialogshown=false;
	var dlcnt=0;
	
	var j=0;
	
	for (var i in nodeids)
	{		
		var record = FileStore.getById(nodeids[i]);	
		Ext.suspendLayouts();		
		if (record)
		{
			var node = transferStore.getById(record.get('id'));
			if ((!node) && (record.get('folder') == 0))
			{
				totaldlsize=totaldlsize+record.get('size');
							
				if ((record.get('size') > 1024*1024*100) && (dl_method == 1))
				{					
					if (!dialogshown)
					{
						if  (Ext.userAgent.toLowerCase().indexOf('firefox') > 0)
						{
							firefoxDialog.dlwarning=true;
							firefoxDialog.show();						
						}
						else
						{			
							chromeDialog.dlwarning=true;
							chromeDialog.show();			
						}
						dialogshown=true;
					}
				}
				else
				{	
					var MegaDownload = 
					{
					  name : 	record.get('name'),
					  size: 	record.get('size'),
					  type: 	record.get('type'),	
					  icon: 	record.get('icon'),
					  key: 		record.get('key'),
					  parentid: "",
					  folder: 	record.get('folder'),
					  id: 		record.get('id'),
					  transfertype: 'download',
					  transfericon: staticpath + 'images/down.png',
					  status: 	l[105]
					};		
					transferStore.add(MegaDownload);
					
					var path=false;
					
					if (paths[record.get('id')]) path = paths[record.get('id')];
					
					dl_queue.push(
					{
						id:		record.get('id'),
						key: 	record.get('key'),
						n: record.get('name'),
						p: path,
						onDownloadProgress: fm_dlprogress,
						onDownloadComplete: fm_dlcomplete,
						onBeforeDownloadComplete: fm_beforedlcomplete,
						onDownloadError: fm_dlerror,
						onDownloadStart: fm_dlstart		
					});					
					dlcnt++;					
				}				
				j++;
			}
		}				
		Ext.resumeLayouts(true);
	}	
	
	if ((!dl_method) && (dl_quotabytes == 5242880)) alert(l[768]);				
	else if ((!dl_method) && (totaldlsize > dl_quotabytes)) dl_getspace(0,totaldlsize);
	else startdownload();			
	
	if ((dlcnt > 0) && (!mobileversion)) transferPanel.expand();	
}

function doshare()
{
	if (d) console.log('doshare');		
	var userid = '';		
	if (d) console.log(sharing_email.getValue());		

	if (checkMail(sharing_email.getRawValue()))
	{
		// not a valid e-mail addres
		Ext.Msg.alert(l[135],l[141]);
		return false;					
	}
	else if (is_devnull(sharing_email.getRawValue()))
	{
		alert('Hotmail, Outlook, Live and MSN are currently suffering a major technical outage, resulting in important e-mails vanishing without a trace. Please use a different address or contact <a href="http://support.microsoft.com/contactus/" style="text-decoration:underline; color:rgb(216,40,11);" target="_blank">Support</a> for assistance.','Defective E-Mail Address Detected');
		return false;
	}
	if (userids[sharing_email.getRawValue().toLowerCase()]) userid = userids[sharing_email.getRawValue()];
	else userid = sharing_email.getRawValue();		
	sharednodes[sharingDialog.folderid] = true;
	var targets = []	
	targets[0] = new Object;
	targets[0].u = userid;
	targets[0].r = sharingform.getChildByElement('sharing_rights').value;		
	sharingDialog.setLoading(l[142]);	
	var nodeids = fm_getnodes(sharingDialog.folderid);
	if (d) console.log(targets);
	api_setshare1(sharingDialog.folderid,targets,nodeids, 
	{ 
		userid : userid,
		done: function(context) 
		{
			var userid = context.userid;
			context.req.i = requesti;							
			api_req([context.req],
			{ 
			  callback : function (json,params)
			  {
				api_setshare2(json,sharingDialog.folderid);					
				if (d) console.log('decode:');
				if (d) console.log(json);
				if ((typeof json[0] == 'number') && (json[0] < 0))
				{			
					sharingDialog.setLoading(false);
					Ext.Msg.show({
						 title:l[46],
						 msg: l[47],
						 buttons: Ext.Msg.OK
					});					
				}
				else if ((json[0].r) && (json[0].r[0] == '0'))
				{
					if (typeof json[0].u !== "undefined")
					{				
						// add new user			
						if (d) console.log('add new user');	
						if (d) console.log(json[0].u[0].u);							
						userid = json[0].u[0].u
						userids[json[0].u[0].m.toLowerCase()] = json[0].u[0].u;
						
						if (!useremails[json[0].u[0].u])
						{						
							useremails[json[0].u[0].u] = json[0].u[0].m;					
							
							sharing_email.getStore().add(
							{
								userid: json[0].u[0].u,
								email: $('<div/>').text(json[0].u[0].m).html()
							});
						}						
					}
					if (d) console.log('userid: ' + userid);
					if (d) console.log('look up if share excists: ' + sharingDialog.folderid + '_' + userid);									
					sharing_email.reset();								
					var record = SharingStore.getById(sharingDialog.folderid + '_' + userid);						
					if (record)
					{
						if (d) console.log('update');		
						if (d) console.log(record);
						SharingStore.getById(sharingDialog.folderid + '_' + userid).set('rights',sharingform.getChildByElement('sharing_rights').value);
						SharingStore.getById(sharingDialog.folderid + '_' + userid).commit();		
					}
					else
					{
						if (d) console.log('insert');
						SharingStore.add([
						{
							id:			sharingDialog.folderid + '_' + userid,
							userid: 	userid,
							rights: 	sharingform.getChildByElement('sharing_rights').value,
							date:		Math.round(new Date().getTime()/1000),
							folderid: 	sharingDialog.folderid
						}]);					
						replacefoldericon(sharingDialog.folderid,'sharedfolder');															
					}
					sharingDialog.setLoading(false);
				}
				else
				{
					sharingDialog.setLoading(false);
				}				
			  }
			});					
		}
	});
}

function processcontact(handle)
{
	var req = 
	{ 
	  a: 'ur',
	  u: handle,
	  l: '1',
	  i: requesti
	};
	if (d) console.log(req);			
	api_req([req],
	{ 
	  callback : function (json,params)
	  {	
		if (d) console.log('process contact:');
		if (d) console.log(json);		
		if (json[0].u)
		{
			 process_u([{ c: 1, m: json[0].m, u: json[0].u, ts: (new Date().getTime()/1000) }],false);
			 aftermove(true);
		}
		else if ((json[0] == 0) || (json[0] == -303))
		{
			var talready='';			
			if (json[0] == -303) talready = 'already ';		
			Ext.MessageBox.show(
			{							
				title:l[150],
				msg: l[151].replace('[X]',talready),
				buttons: Ext.MessageBox.OK
			});			
		}
		else if (json[0] == -2)
		{
			Ext.MessageBox.show(
			{							
				title:l[135],
				msg: l[152],
				buttons: Ext.MessageBox.OK
			});		
		}		
		if (d) console.log(json);		
		loadingDialog.hide();  
	  }		  
	});
}

function addcontact()
{
	addcontactemail = newcontactform.getChildByElement('contactfield').value;
	if (checkMail(addcontactemail))
	{
		Ext.Msg.alert(l[135],l[141]);
		return false;
	}
	newcontactDialog.close();
	loadingDialog.show();		
	processcontact(addcontactemail);
}

function requestfolder(inid)
{	
	var newdir 	= newfolderform.getChildByElement('folderfield').value;
	newfolderDialog.close();
	loadingDialog.show();					
	createfolder(inid,newdir);
}

function dorename()
{
	var newname;

	if (mobileversion) newname = $('#mobile_rename').val();
	else newname = renameform.getChildByElement('renamefield').value;

	console.log(newname);
	
	if (newname == '') return false;
	
	
	FileStore.getById(selectedRecords[0].get('id')).set('name',newname);
	FileStore.getById(selectedRecords[0].get('id')).commit();	
	
	if (mobileversion)
	{
		if (mfileinfo) $('#mfileinfo_name').text(newname);
		else if (mfolderinfo) $('#mfolderinfo_name').text(newname);
	}
	else
	{
		aftermove(true);		
		renameDialog.close();	
	}
	
	
	var attrs = new Object;
	attrs.n = newname;
	var mkat = enc_attr(attrs,selectedRecords[0].get('key'));
	var attr = ab_to_base64(mkat[0]);
	var key = a32_to_base64(encrypt_key(u_k_aes,mkat[1]));
	var ops = [];	
	ops[0] = 
	{	
		a: 'a',
		n: selectedRecords[0].get('id'),
		attr: attr,
		key: key,
		i: requesti
	};	
	api_req(ops);
}

function clipboardover()
{
	document.getElementById('links_clipboard_button').className = 'clipboard-button-hover';	
	if ((document.getElementById('clipboardswf')) && (document.getElementById('clipboardswf').setclipboardtext))
	{	
		document.getElementById('clipboardswf').setclipboardtext(document.getElementById('getlink_textarea').value);
	}
}

function clipboardout()
{
	if (!clipcoppied) document.getElementById('links_clipboard_button').className = 'clipboard-button';
}

function clipboardcopycomplete()
{
	document.getElementById('links_clipboard_button').innerHTML = l[371];
	document.getElementById('links_clipboard_button').className = 'clipboard-button-hover';
	clipcoppied=true;
}

function changeview(l)
{
	if (mobileversion) return false;

	var nodeids = [];
	for (var i in selectedRecords) nodeids.push(selectedRecords[i]);
	if (l)
	{
		storefmconfig('tileview','0');
		FileGrid.show();
		ImageGrid.hide();					
		topBview.show();
		topBviewl.hide();				
		FileGrid.selModel.deselectAll();
		FileGrid.selModel.select(nodeids);		
	}
	else
	{
		storefmconfig('tileview','1');
		FileGrid.hide();
		ImageGrid.show();								
		topBview.hide();
		topBviewl.show();
		ImageGrid.selModel.deselectAll();	
		ImageGrid.selModel.select(nodeids);	
	}
	document.getElementById('overlay').style.display='none';
}

function ddtype(fromid,toid)
{
	if (folderlink) return false;

	// never allow move to own inbox, or to own contacts
	if ((toid == InboxID) || (toid == NetworkID)) return false;

	// to a shared folder, only with write rights
	if ((RootbyId(toid) == NetworkID) && (RightsbyID(toid) > 0) && !isCircular(fromid,toid)) return 'copy';	

	// to a contact, always allow a copy
	if ((RootbyId(toid) == NetworkID) && (FileStore.getById(toid).get('parentid') == NetworkID)) return 'copy';		
		
	// cannot move or copy to the existing parent
	if (toid == FileStore.getById(fromid).get('parentid')) return false;
		
	// from own cloud to own cloud / trashbin, always move
	if (((toid == RootID) || (toid == TrashbinID) || FileStore.getById(toid).get('folder')) && (RootbyId(fromid) == RootID) && ((RootbyId(toid) == RootID) || (toid == TrashbinID)) && !isCircular(fromid,toid)) return 'move';	
	
	// from trashbin or inbox to own cloud, always move
	if (((RootbyId(fromid) == TrashbinID) || (RootbyId(fromid) == InboxID)) && (RootbyId(toid) == RootID)) return 'move';
	
	// from trashbin or inbox to a shared folder with write permission, always copy
	if (((RootbyId(fromid) == TrashbinID) || (RootbyId(fromid) == InboxID)) && (RootbyId(toid) == NetworkID) && (RightsbyID(toid) > 0)) return 'copy';
			
	// copy from a share to cloud	
	if ((RootbyId(fromid) == NetworkID) && ((toid == RootID)  || (RootbyId(toid) == RootID))) return 'copy';
	
	// move from a share to trashbin only with full control rights (do a copy + del for proper handling)
	if ((RootbyId(fromid) == NetworkID) && (toid == TrashbinID) && (RightsbyID(fromid) > 1)) return 'copydel';
	
	return false;
}

// ddhandler is afunction that handles onnodeover and onnodedrop for drag & drop operations if drop == true then it's a onnodedrop event
function ddhandler(target, dd, e, data, drop,v)
{	
	if (folderlink) return false;
	
	var node = false;
		
	if (!drop) var v = this.v;
	
	// the target node is the white area in the filegrid
	if ((v.id == 'filegrid') && (target.className.indexOf('x-grid-view') > -1)) node = dirroot.getById(currentdirid);
	// the target node is the whit area in the imagegrid
	else if ((v.id == 'imagegrid') && (target.id == 'imagegrid')) node = dirroot.getById(currentdirid);
	// the target node is an icon in the imagegrid
	else if (v.id == 'imagegrid') node = v.getRecord(target);	
	// the target node is an icon in the filegrid or treepanel
	else  node = v.getView().getRecord(target);	
	
	// no operations with directly to the inbox or contacts node
	if (node && ((node.get('id') == InboxID) || (node.get('id') == NetworkID)))
	{
		$('.x-dd-drag-proxy').removeClass('copy move');
		if (drop) return false;
		else return 'nodrop';
	}

	// if the target node is not the root or trashbin, look it up in the filestore (root and trashbin are not present with nodes in the filestore)
	if ((node) && (node.get('id') != RootID) && (node.get('id') != TrashbinID))
	{
		node = FileStore.getById(node.get('id'));				
		if (!node.get('folder')) node = dirroot.getById(node.get('parentid'));
	}

	// if no node was found in the filestore -> invalid dd operation
	if (!node)
	{
		$('.x-dd-drag-proxy').removeClass('copy move');
		if (drop) return false;
		else return 'nodrop';
	}

	// obtain the dragtype for this operation
	var dragtype = ddtype(data.records[0].data.id,node.get('id'));					
	
	
	var copydel=false;
	if (dragtype == 'copydel') 
	{
		// onmouseover show that the operation is a move, but when dropped handle it as a copy + delete (copydel)
		if (drop) dragtype ='copy';
		else dragtype ='move';
		copydel=true;	
	}
	
	if (dragtype)
	{
		var d = document.getElementById('ddtext');
		
		if (dragtype == 'copy')
		{		
			if (drop)
			{
				var copyids = [];						
				for (var i in data.records) copyids[i] = data.records[i].data.id;					
																		
				// if the toid is 11 chars then it's a copy to a user's inbox				
				if (node.get('id').length == 11) copytouser(copyids,node.get('id'),false,function() {  } );
				// process copy
				else copyitems(copyids,node.get('id'),copydel);																		
			}
			else
			{				
				$('.x-dd-drag-proxy').removeClass('move nodrop');
				if (data.records.length == 1) d.innerHTML = 'Copy 1 selected item';
				else  d.innerHTML = 'Copy ' + data.records.length + ' selected items';
			}
		}
		else
		{
			if (drop)
			{
				// process move				
				var jsonmove = [];					
				var i = 0;
				for (key in data.records) 
				{										
					moveitem(FileStore.getById(data.records[key].get('id')),node.get('id'),false);	
					jsonmove[i] = 
					{ 
						a: 'm',
						n: 	data.records[key].get('id'),
						t: 	node.get('id'),
						i:  requesti
					}		
					i++;							
				}						
				processmove(jsonmove);													
				aftermove(true);			
			}
			else
			{
				$('.x-dd-drag-proxy').removeClass('copy nodrop');
				if (data.records.length == 1) d.innerHTML = 'Move 1 selected item';
				else  d.innerHTML = 'Move ' + data.records.length + ' selected items';						
			}
		}	
		return dragtype;	
	}
	else
	{
		$('.x-dd-drag-proxy').removeClass('copy move');
		//console.log('dragtype','nodrop');
		if (drop) return false;
		else return 'nodrop';
	}					
}

function initDropZone(v) 
{
		v.dropZone = Ext.create('Ext.dd.DropZone', v.el, 
		{
			getTargetFromEvent: function(e) 
			{			
				if (folderlink) return false;
				var target = false;				
				if (this.v.id == 'imagegrid') 		target = e.getTarget('.thumb-wrap');				
				else if (this.v.id == 'dirtree') 	target = e.getTarget('.x-grid-row');
				else if (this.v.id == 'filegrid') 	target = e.getTarget('.x-grid-row');	
				
				if (!target && (this.v.id == 'filegrid')) target = e.getTarget('.x-grid-view');
				if (!target && (this.v.id == 'imagegrid')) target = document.getElementById('imagegrid');
				if (!target) $('.x-dd-drag-proxy').removeClass('copy move');
				return target;
			},		
			onNodeOver : ddhandler,
			onNodeDrop : function(target, dd, e, data)
			{				
				return ddhandler(target, dd, e, data, true, this.v);
			},
			v: v
		});
}

function initDragZone(v) 
{
    v.dragZone = Ext.create('Ext.dd.DragZone', v.getEl(), 
	{
        getDragData: function(e) 
		{           
			if (folderlink) return false;
			
			var sourceEl = e.getTarget(v.itemSelector, 10);
			
			if ((this.v.id == 'filegrid') && (sourceEl.parentNode.parentNode.className.indexOf('x-grid-cell-inner') > -1)) sourceEl = sourceEl.parentNode.parentNode.parentNode.parentNode;
			else if (this.v.id == 'filegrid') sourceEl = sourceEl.parentNode.parentNode.parentNode;			
			else if ((this.v.id == 'dirtree') && (sourceEl.parentNode.className == 'tree-item')) sourceEl = sourceEl.parentNode.parentNode.parentNode.parentNode;
			else if ((this.v.id == 'dirtree') && (sourceEl.className == 'tree-item')) sourceEl = sourceEl.parentNode.parentNode.parentNode;
			else if (this.v.id == 'dirtree') sourceEl = sourceEl.parentNode.parentNode;		

            if (sourceEl) 
			{
				var nodes = [];				

				if (this.v.id == 'imagegrid') node = this.v.getRecord(sourceEl);
				else node = this.v.getView().getRecord(sourceEl);			
								
				if (node) node = FileStore.getById(node.get('id'));				
				if (!node) return false;
							
				if (node.get('parentid') == NetworkID) return false;
				
				var node_added=false;				
				if (this.v.id != 'dirtree')
				{				
					for (var i in selectedRecords)
					{
						if (selectedRecords[i].get('id') == node.get('id')) node_added=true;					
						nodes.push(selectedRecords[i]);				
					}
				}		
				
				ImageGrid.selModel.select(nodes);
				
				if ((!node_added) && (!e.shiftKey) && (!e.ctrlKey))
				{
					nodes = [node];					
					ImageGrid.selModel.select(node);
				}
				else if (!node_added) nodes.push(node);
				
				var d = document.createElement('div');		
				d.id = 'ddtext';
				if (nodes.length == 1) d.innerHTML = 'Move 1 selected item';
				else  d.innerHTML = 'Move ' + nodes.length + ' selected items';
					
                return v.dragData = 
				{
                    sourceEl: sourceEl,
                    repairXY: Ext.fly(sourceEl).getXY(),
                    ddel: d,
					records: nodes                    
                };
            }
        },
        getRepairXY: function() 
		{
            return this.dragData.repairXY;
        },
		afterDragDrop: function()
		{
			dirtree.getSelectionModel().select(dirroot.getById(currentdirid));
			this.dragging=false;
		},	
		afterInvalidDrop: function()
		{
			dirtree.getSelectionModel().select(dirroot.getById(currentdirid));
			this.dragging=false;
		},
		v: v
    });
}


function fm_remove()
{
   var isFolder = false;
   itemMenu.hide();					
   if (RootbyId(selectedRecords[0].data.id) == TrashbinID)
   {
		// if deleting from trashbin, show confirmation dialog
		Ext.MessageBox.show(						
		{					
			id: 'trashbinmsg',
			title:l[84],
			msg: l[76].replace('[X]',getitemtxt()) + '<br/>' + l[77],
			buttons: Ext.MessageBox.YESNO,
			fn: function(answer) 
			{ 
				if (answer == 'yes')
				{
					// remove permanently				
					document.getElementById('overlay').style.display='';
					setTimeout("removefromtrash()",100);				
				}
			}
		});
   }
   else if (RootbyId(selectedRecords[0].data.id) == NetworkID)
   {
	  // delete from an incoming shared folder is a copy-delete operation
	  if (RightsbyID(selectedRecords[0].data.id) > 1)
	  {					
		var copyids = [];					
		var selrec = selectedRecords;
		for (var i in selectedRecords) copyids[i] = selectedRecords[i].get('id');										
		copyitems(copyids,TrashbinID,true);					
	  }			   
   }
   else
   {	
		// all other scenarios are a simple move to the trashbin
		var jsonmove = [];
		for (var i in selectedRecords)
		{
			if (selectedRecords[i].get('folder') == 1) isFolder =true;
			jsonmove[i] = 
			{ 
				a: 'm',
				n: 	selectedRecords[i].get('id'),
				t: 	TrashbinID,
				i:  requesti
			};
			moveitem(selectedRecords[i],TrashbinID,false);	
		}
		if (!trashbinfull)
		{
			replacefoldericon(TrashbinID,'trashbinfull');
			trashbinfull=true;
		}
		processmove(jsonmove);									
		aftermove(isFolder);	
   }
}



function startfm()
{	
	fmstarted=true;
	
	FileStore = Ext.create('Ext.data.Store2', 
	{
		model: 'MegaFS',    
		sortOnFilter:false,			
		sortOnLoad: false
	});
		
	itemMenu = Ext.create('Ext.menu.Menu',
	{		
		id:'itemMenu',
		folderid: '',
		items: [    
		{
			id: 'itemMenu_open',
			icon: staticpath + 'images/open.png',
			text: 'Open',
			handler: function() 
			{ 
				itemMenu.hide();  
				var selrec = selectedRecords;
				for (var i in selrec)
				{
					if (selrec[i].get('folder'))
					{						
						opendirectory(selrec[i].get('id'));
						return true;
					}
				}
			}
		},
		{			
			id: 'itemMenu_download',
			icon: staticpath + 'images/download.png',
			text: l[58],
			handler: function() 
			{ 
				itemMenu.hide(); 				
				var selrec = selectedRecords;
				var nodeids = [];
				var paths = [];
				
				for (var i in selrec)
				{
					if (selrec[i].get('folder'))
					{
						var subids = fm_getnodes(selrec[i].get('id'));						
						for(var j in subids)
						{
							nodeids.push(subids[j]);
							var path = dirroot.getById(FileStore.getById(subids[j]).get('parentid')).getPath();
							path = path.split(selrec[i].get('id'));							
							if (path.length > 1) path = selrec[i].get('id') + path[1];
							else path = selrec[i].get('id');							
							pathr = path.split('/');							
							path = '';
							for (var k in pathr) path += FileStore.getById(pathr[k]).get('name').replace(/[/\\:*?<>|]/g,'_') + '/';
							paths[subids[j]] = path;
						}
					}
					else nodeids.push(selrec[i].get('id'));
				}		
				if (nodeids.length > 250)
				{
					Ext.Msg.confirm(l[761], l[762], function(but) 
					{
						if (but === 'yes')  adddownload(nodeids,paths);
					});							
				}
				else adddownload(nodeids,paths);
			}
		},
		{
			id: 'itemMenu_link',
			icon: staticpath + 'images/link.png',
			text: l[59],
			handler: function() 
			{ 
				loadingDialog.show();
				requestlinks();
				itemMenu.hide();
			}
		},
		{
			id: 'itemMenu_linkd',
			icon: staticpath + 'images/link.png',
			text: 'Delete link',
			handler: function() 
			{ 
				loadingDialog.show();
				alert('Request active links for handled -> present confirmation -> Delete links.');				
			}
		},
		{
			id: 'itemMenu_sharing',
			icon: staticpath + 'images/share.png',
			text: l[60],
			handler: function() 
			{ 
				if (!u_privk)
				{					
					Ext.Msg.confirm(l[424], l[423], function(but) 
					{
						if (but === 'yes') 
						{
							document.location.hash = 'register';
							document.title = 'MEGA';								
						}															
					});					
				}
				else
				{				
					sharingDialog.folderid = selectedRecords[0].data.id;							
					sharingDialog.show();				
					itemMenu.hide();
				}						
			}
		},
		{
			id: 'itemMenu_rename',
			icon: staticpath + 'images/_fonts.png',
			text: l[61],
			handler: function() 
			{ 
				itemMenu.hide(); 					
				if (selectedRecords[0].get('folder')) renameDialog.setTitle(l[425]);
				else renameDialog.setTitle(l[426]);					
				Ext.getBody().mask(); 					
				renameDialog.show();
				renameDialog.value = 'dada';
				renameform.getChildByElement('renamefield').setValue(selectedRecords[0].get('name'));
			}
		},
		{
			id: 'itemMenu_move',
			icon: staticpath + 'images/move.png',
			text: l[62],
			handler: function() 
			{ 
				itemMenu.hide(); 
				Ext.getBody().mask(); 
				mcDialog.operation = 'move'; 
				mcDialog.show(); 
			}
		},
		{
			id: 'itemMenu_copy',
			icon: staticpath + 'images/copy.png',
			text: l[63],
			handler: function() 
			{ 
				itemMenu.hide(); 
				Ext.getBody().mask(); 
				mcDialog.operation = 'copy'; 
				mcDialog.show(); 
			}
		},
		{
			id: 'itemMenu_permissions',
			icon: staticpath + 'images/permissions.png',
			text: l[64],
			handler: function() 
			{ 											
				var rights = RightsbyID(selectedRecords[0].get('id'));
				if (rights == 0) Ext.Msg.alert(l[64],l[65]);
				else if (rights == 1) Ext.Msg.alert(l[64],l[66]);
				else Ext.Msg.alert(l[64],l[67]);				
				itemMenu.hide();
			}
		},
		{
			id: 'itemMenu_createfolder',
			icon: staticpath + 'images/newfolder_dropdown.png',
			text: l[68],
			handler: function() 
			{ 					
				Ext.getBody().mask(); 
				newfolderDialog.inid = itemMenu.folderid;
				newfolderDialog.show();
				newfolderform.getChildByElement('folderfield').labelEl.update(l[157]);
				newfolderform.getChildByElement('folderfield').labelEl.show();
				newfolderDialog.setTitle(l[69]);					
			}
		},
		{
			id: 'itemMenu_cleartrash',
			icon: staticpath + 'images/_editdelete.png',
			text: l[70],
			handler: function() 
			{ 	
				cleartrashbin();
			}
		},
		{
			id: 'itemMenu_contact',
			icon: staticpath + 'images/small_contact.png',
			text: l[71],
			handler: function() 
			{ 		
				Ext.getBody().mask(); 
				newcontactDialog.show();					
				itemMenu.hide();
			}
		},
		{
			id: 'itemMenu_delcontact',
			icon: staticpath + 'images/_editdelete.png',
			text: l[72],
			handler: function() 
			{ 							
				if (d) console.log(selectedRecords);			
				var qstr = l[73];					
				if (selectedRecords.length > 1) qstr = l[74];		
			
				Ext.MessageBox.show(
				{							
					title:l[75],
					msg: qstr,
					buttons: Ext.MessageBox.YESNO,
					fn: function(answer) 
					{ 
						if (answer == 'yes')
						{
							var ops = [];	
							
							
							//Ext.suspendLayouts();
							for (var i in selectedRecords)
							{																			
								ops.push({
								 a: 'ur',
								 u: selectedRecords[i].data.id,
								 l: '0',
								 i: requesti
								});									
								process_d(selectedRecords[i].data.id,true,true);
							}		
							reinstateFileStore();	
							FileStore.resumeEvents();
							//Ext.resumeLayouts(true);														
							api_req(ops);
							checktrashempty();
							aftermove(true);
						}
					}
				});					
			}
		},
		{
			id: 'itemMenu_remove',
			icon: staticpath + 'images/_editdelete.png',
			text: l[83],
			handler: fm_remove
		},'-',
		{
			id: 'itemMenu_reload',
			icon: staticpath + 'images/_reload.png',
			text: l[85],
			handler: function() 
			{ 	
				itemMenu.hide(); 
				reloadfm();						
			}
		}]});
	
	
	// Column Model shortcut array
	transferColumns = [
		{text: l[86], flex: 1, sortable: false, dataIndex: 'name', renderer: renderFileName, hideable: false},
		{text: l[87], width: 100, sortable: false, dataIndex: 'size', renderer: renderFileSize, hideable: false},
		{text: l[88], width: 150, sortable: false, dataIndex: 'transfertype', renderer: renderTransferType, hideable: false},
		{text: l[89], width: 282, sortable: false, dataIndex: 'status', renderer: renderStatus, hideable: false},
		{text: l[90], width: 110, sortable: false, dataIndex: 'speed', renderer: renderSpeed, hideable: false},
		{text: l[91], width: 110, sortable: false, dataIndex: 'eltime', renderer: renderEltime, hideable: false},
		{text: l[92], width: 110, sortable: false, dataIndex: 'retime', renderer: renderRetime, hideable: false}
	];

	// Column Model shortcut array
	columns = [
		{text: l[86], flex: 1, sortable: true, dataIndex: 'name', renderer: renderFileName},
		{text: l[87], width: 100, sortable: true, dataIndex: 'size', renderer: renderFileSize},
		{text: l[93], width: 100, sortable: true, dataIndex: 'type', renderer: renderFileType},
		{text: l[94], width: 130, sortable: true, dataIndex: 'date', renderer: renderDate},
		{text: 'from', width: 130, sortable: true, dataIndex: 'sender', renderer: renderOwner, hidden:true},
		{text: 'URL', width: 40, sortable: true, dataIndex: 'url', renderer: renderURL},
	];	
	sharingColumns = [
		{text: l[95], flex: 1, sortable: true, dataIndex: 'userid', renderer: renderOwner},
		{text: l[96], width: 120, sortable: true, dataIndex: 'rights', renderer: renderRights},
		{text: l[94], width: 125, sortable: true, dataIndex: 'date', renderer: renderDate}
	];		
	topFolderMenu = Ext.create("Ext.container.ButtonGroup", { id: 'topfoldermenu' });		
	
	var fm_fileuploader = '<input type="file" id="fileselect1" style="height:29px; width:112px; -moz-opacity:0; filter:alpha(opacity: 0); opacity: 0; cursor:hand;" size="42" multiple>';		
	
	var fm_folderuploader = '<input type="file" id="fileselect2" webkitdirectory style="height:29px; width:112px; -moz-opacity:0; filter:alpha(opacity: 0); opacity: 0; cursor:hand;" size="42" multiple>';
			
	if (ul_method) fm_fileuploader = '<object data="https://mega.co.nz/uploader.swf" id="uploaderswf" type="application/x-shockwave-flash" width="112" height="29" ><param name="wmode" value="transparent"><param value="always" name="allowscriptaccess"><param value="all" name="allowNetworking"></object>';
	
	var topButtonitems = [];		
	topButtonitems[0] =
	{
		text: l[68],
		icon: staticpath + 'images/newfolder.png',
		scale: 'small',
		handler: function() 
		{				
			if (fminitialized)
			{
				Ext.getBody().mask(); 
				newfolderDialog.inid = currentdirid;
				newfolderDialog.show();
				newfolderform.getChildByElement('folderfield').labelEl.update(l[157]);
				newfolderform.getChildByElement('folderfield').labelEl.show();
				newfolderDialog.setTitle(l[69]);
			}
		}				
	};		
	topButtonitems[1] = 
	{
		text: l[97],
		icon: staticpath + 'images/mega/up.png',
		scale: 'small',
		href: 'javascript:void(0);',
		styleHtmlContent: false,
		renderTpl: 	'<em id="{id}-btnWrap" class="{splitCls}">' +
					'<tpl if="href">' +
					'<a id="{id}-btnEl" href="{href}" target="{target}"<tpl if="tabIndex"> tabIndex="{tabIndex}"</tpl> role="link">' +							
					'<span id="{id}-btnInnerEl" class="{baseCls}-inner">' +
					'{text}' +
					'</span>' +							
					'<div style="width:112px; height:29px; position:absolute; left:0px; top:0px; z-index:999999999;">' + fm_fileuploader + '</div>' +							
					'<span id="{id}-btnIconEl" class="x-btn-icon" style="background-image:url(\'' + staticpath + 'images/mega/up.png\');"></span>' +
					
					'</a>' +
					'</tpl>' +						
					'</em>'	,
		handler: function() 
		{				
			//Ext.getBody().mask(); 
			//uploadDialog.show();					
		}				
	};
	
	var inputTest = document.createElement('input');	
	if (typeof inputTest.webkitdirectory != 'undefined')
	{	
		topButtonitems[1].text = l[99];
		topButtonitems[2] =
		{
			text: l[98],
			icon: staticpath + 'images/mega/up.png',
			scale: 'small',
			href: 'javascript:void(0);',
			styleHtmlContent: false,
			renderTpl: 	'<em id="{id}-btnWrap" class="{splitCls}">' +
						'<tpl if="href">' +
						'<a id="{id}-btnEl" href="{href}" target="{target}"<tpl if="tabIndex"> tabIndex="{tabIndex}"</tpl> role="link">' +							
						'<span id="{id}-btnInnerEl" class="{baseCls}-inner">' +
						'{text}' +
						'</span>' +							
						'<div style="width:112px; height:29px; position:absolute; left:0px; top:0px; z-index:999999999;">' + fm_folderuploader + '</div>' +							
						'<span id="{id}-btnIconEl" class="x-btn-icon" style="background-image:url(\'' + staticpath + 'images/mega/folder-up.png\');"></span>' +
						
						'</a>' +
						'</tpl>' +						
						'</em>'	,
			handler: function() 
			{				
				//Ext.getBody().mask(); 
				//uploadDialog.show();					
			}				
		};
	}
	
	
	topButtons = Ext.create("Ext.container.ButtonGroup",
	{
			id: 'topbuttons',
			xtype:'buttongroup',
			items: topButtonitems
	});
	
	topBcontact = Ext.create("Ext.container.ButtonGroup",
	{
			id: 'topBcontact',
			xtype:'buttongroup',
			hidden: true,			
			items: [
			{
				text: l[101],
				icon: staticpath + 'images/mega/add-contact.png',
				scale: 'small',
				handler: function() 
				{				
					Ext.getBody().mask(); 
					newcontactDialog.show();					
					itemMenu.hide();
				}				
			}
			]
	});
	
	topBtrash = Ext.create("Ext.container.ButtonGroup",
	{
			id: 'topBtrash',
			xtype:'buttongroup',
			hidden: true,			
			items: [
			{
				text: l[100],
				icon: staticpath + 'images/_editdelete.png',
				scale: 'small',
				handler: function() 
				{				
					cleartrashbin();
				}				
			}
			]
	});
	
	topBview = Ext.create("Ext.container.ButtonGroup",
	{
			id: 'topBview',
			xtype:'buttongroup',		
			items: [
			{
				text: '',
				icon: staticpath + 'images/view.png',
				scale: 'small',
				handler: function() 
				{		
					document.getElementById('overlay').style.cursor='wait';
					document.getElementById('overlay').style.display='';			
					setTimeout("changeview(0);",100);					
				}				
			}
			]
	});
	
	topBviewl = Ext.create("Ext.container.ButtonGroup",
	{
			id: 'topBviewl',
			xtype:'buttongroup',	
			hidden:true,
			items: [
			{
				text: '',
				icon: staticpath + 'images/viewl.png',
				scale: 'small',
				handler: function() 
				{								
					document.getElementById('overlay').style.cursor='wait';
					document.getElementById('overlay').style.display='';
					setTimeout("changeview(1);",100);
				}				
			}
			]
	});
	
	
		
	searchPanel = Ext.create('Ext.Panel',
	{		
		id: 'searchpanel',
		frame: false,
		border: false,
		bodyStyle: 'background:transparent;',
		padding: 0,
		html: '<input type="text" onfocus="this.value=(this.value==\'' + l[102].replace("'","\'") + '\') ? \'\' : this.value;" onblur="this.value=(this.value==\'\') ? \'' + l[102].replace("'","\'") + '\' : this.value;" value="' + l[102].replace("'","\'") + '" onkeydown="if(event.keyCode == 13) fmsearch(this.value);">'		
	});
	
	
	dataviewlisteners = 
	{
		itemcontextmenu: rightclickmenu,
		containercontextmenu: rightclickmenu,		
		itemdblclick : function(var1,record) 
		{ 
			if (record.data.folder)
			{
				opendirectory(record.data.id);
			}
			else
			{
			  if ((dl_method == 1) && !hasFlash())
			  {
				if(!ul_uploading)
				{
					if (isMobile()) alert('Downloading from your device is currently not supported.');
					else document.location.hash = 'flash';	
				}
				else alert('Please install flash to download with your browser or upgrade to Chrome.');
			  }
			  else adddownload([record.get('id')]);
			}
		},		
		itemclick: function (th,rec,item,index, e, eOpts)
		{					
			var selar = th.selModel.getSelection();					
			var selar2 = [];					
			for (var i in selar)
			{
				if (selar[i].get('id') !== rec.get('id')) selar2.push(selar[i]);										
			}			
			if (d) console.log(e);				
			if ((th.selModel.getCount() > 1) && (!e.shiftKey) && (!e.ctrlKey))
			{
				th.selModel.deselect(selar2);
			}							
		},			
		selectionchange : function (grid, selected) { selectedRecords=selected; },
		
		render: function (e)
		{
			initDragZone(e);
			initDropZone(e);		
		},
		beforeitemmousedown: function( th, record, item, index, e, eOpts )
		{
			if (this.getSelectionModel().selectionMode == 'MULTI' && !eOpts.ctrlKey && this.getSelectionModel().isSelected(record)) 
			{
                return false;
            }			
		},
		containerclick: function(th,e,eOpts)
		{
			if (th.id.indexOf('gridview') > -1) FileGrid.selModel.deselectAll();	
		}
	};
		
	
	if (!mobileversion)
	{
		// declare the source Grid
		FileGrid = Ext.create('Ext.grid.Panel', 
		{
			id: 'filegrid',
			renderTpl: ['<div id="filedrag"><div id="{id}-body" class="{baseCls}-body<tpl if="bodyCls"> {bodyCls}</tpl>', ' {baseCls}-body-{ui}<tpl if="uiCls">', '<tpl for="uiCls"> {parent.baseCls}-body-{parent.ui}-{.}</tpl>', '</tpl>"<tpl if="bodyStyle"> style="{bodyStyle}"</tpl>>', '</div></div>'],
			multiSelect: true,
			invalidateScrollerOnRefresh: false,
			verticalScroller: 
			{
				xtype: 'paginggridscroller',
				activePrefetch: false
			},			
			plugins: [ Ext.create('plugin.ux.dragselector', {}) ],
			autoScroll:true,	
			flex:1,
			store            : FileStore,
			columns          : columns,
			stripeRows       : true,	
			selType: 'rowmodel' ,
			margins          : '0 2 0 0',
			listeners: dataviewlisteners
			
		});	
	
	
	
	
		ImageGrid = Ext.create('Ext.view.View', 
		{
				id: 'imagegrid',
				hidden:true,
				store: FileStore,
				tpl: [
					'<tpl for=".">',
						'<div class="thumb-wrap" id="thumbwrap_{id:stripTags}">',
							'<div class="thumb"><img src="{micon}" title="{name:htmlEncode}" style="{thumb}" width="60" height="60" id="thumb_{id:stripTags}"></div>',
							'<span style="white-space:nowrap;">{shortName:htmlEncode}</span>',
						'</div>',
					'</tpl>',
					'<div class="x-clear"></div>'
				],			
				multiSelect: true,
				invalidateScrollerOnRefresh: false,
				verticalScroller: 
				{
					xtype: 'paginggridscroller',
					activePrefetch: false
				},
				trackOver: true,
				overItemCls: 'x-item-over',
				itemSelector: 'div.thumb-wrap',
				plugins: [ Ext.create('Ext.ux.DataView.DragSelector', {}) ],
				prepareData: function(data) 
				{
					var icon = staticpath + 'images/extension_medium/generic.png';	
					var thumb = '';
					
					if (sharednodes[data.id]) icon = staticpath +  'images/medium_sharedfolder.png';
					else if (data.parentid == NetworkID) icon = staticpath + 'images/medium_contact.png';
					else if (data.folder) icon = staticpath + 'images/medium_folder.png';
					else icon = fileicon(data.name,0).replace('extension','extension_medium');
					
					if (thumbnails[data.id])
					{
						icon = thumbnails[data.id];
						thumb = 'border:1px solid #BEBEBE; border-radius:4px;';					
					}

					Ext.apply(data, 
					{
						shortName: Ext.util.Format.ellipsis(data.name, 13),
						micon: icon,
						thumb: thumb
					});
					return data;
				},			
				listeners: dataviewlisteners,		
				autoScroll:true
		});
	
	}
	
	if (mobileversion)
	{
	
		MobileGrid = Ext.create('Ext.view.View', 
		{
				id: 'mobilegrid',
				style:
				{
				  outline:'none'		
				},
				store: FileStore,		
				tpl: [
					'<tpl for=".">',
						'<a class="data-link">',
							'<span class="data-icon {thumbstyle}" id="mobilethumb_{$id}" onclick="{openfolderclick}"> <img alt="" src="{micon}" /></span>',
							'<span class="data-arrow" onclick="{onclick}"></span>',
							'<span class="data-title" onclick="{openfolderclick}">',
							'{details}',
							'</span>',
							'<span class="clear"></span>',
							'</a>',
					'</tpl>',
				],			
				prepareData: function(data) 
				{
					var icon = staticpath + 'images/extension_large/generic.png';	
					var thumbstyle = '';				
					var details = '<span class="folder-name">' + Ext.util.Format.ellipsis(data.name, 20) + '</span>';					
					var onclick = 'mfolder(\'' + data.id + '\');';					
					var openfolderclick = 'mopenfolder(\''+data.id+'\');';
					
					if (sharednodes[data.id]) icon = staticpath +  'images/extension_large/foldershared.png';
					else if (data.parentid == NetworkID) icon = staticpath + 'images/extension_large/contact.png';
					else if (data.folder) icon = staticpath + 'images/extension_large/folder.png';
					else
					{
						openfolderclick = 'mfile(\'' + data.id + '\');';
						onclick = 'mfile(\'' + data.id + '\');';
						icon = fileicon(data.name,0).replace('extension','extension_large');
						details = '<span class="file-name">' + Ext.util.Format.ellipsis($('<div/>').text(data.name).html(), 20) + '</span>';
						details += '<span class="data-info">' + bytesToSize(data.size) + '<span>&#8226;</span> ' + time2date(data.date) + '</span>';	
					}
					
					if (thumbnails[data.id])
					{
						icon = thumbnails[data.id];
						thumbstyle = 'image';						
					}

					Ext.apply(data, 
					{
						id: data.id,
						shortName: Ext.util.Format.ellipsis(data.name, 20),
						micon: icon,
						details: details,
						thumbstyle: thumbstyle,
						onclick: onclick,
						openfolderclick: openfolderclick
					});
					return data;
				},		
				listeners:
				{
					itemclick: function (th,rec,item,index, e, eOpts)
					{					
						alert(th);
					}				
				},
				renderTo: 'mobilegridholder'
		});
	}
	
	
	if (!mobileversion)
	{
	
		ImagePanel = Ext.create('Ext.Panel', 
		{
			id: 'images-view',
			items: [ImageGrid,FileGrid],		
			dockedItems: [{
				id: 'fmtoolbar',
				xtype: 'toolbar',
				dock: 'top',
				items: [
					topFolderMenu, topButtons, topBcontact, topBtrash, { xtype: 'tbfill' }, searchPanel,topBview,topBviewl,
				]
			}],		
			width        : '100%',   
			margins		 : '0 0 0 0',
			layout       : 
			{
				type: 'hbox',
				align: 'stretch',
				padding: 0
			},
			defaults     : { flex : 1 },
		});
	}
	
		
	transferStore = Ext.create('Ext.data.Store', 
	{
		model: 'TransferFS',
		buffered:true,
		sorters: 
		[{
			property: 'started',
			direction: 'DESC'
		},
		{
			property: 'transfertype',
			direction: 'ASC'
		}]
	});
	
	transferMenu = Ext.create('Ext.menu.Menu',
	{
		id:'transferMenu',
		items: [    
		{
			id: 'transfer_itemMenu_delete',
			icon: staticpath + 'images/_editdelete.png',
			text: l[103],
			handler: function() 
			{ 
				var node = transferStore.getById(canceltransferid);			
				if (node)
				{
					if (node.get('transfertype') == 'download')
					{
						for (var i in dl_queue)
						{
							if (dl_queue[i])
							{
								if (dl_queue[i].id == canceltransferid)
								{
									if (i == dl_queue_num) dl_cancel();
									if (dl_legacy_ie) document.getElementById('start_downloaderswf').abort();
									dl_queue[i] = false;
									transferprogress[node.get('id')] = undefined;
									transferStore.remove(node);																		
									startdownload();
									return false;
								}
							}
						}
						transferStore.remove(node);					
					}
					else if (node.get('transfertype') == 'upload')
					{
						for (var i in ul_queue)
						{
							if (ul_queue[i])
							{
								if (ul_queue[i].id == canceltransferid)
								{
									if (i == ul_queue_num) ul_cancel();
									ul_queue[i] = false;			
									transferprogress[node.get('id')] = undefined;
									transferStore.remove(node);
									startupload();
									return false;
								}
							}
						}
						transferStore.remove(node);					
					}
				}
			}		
		}]
	});
	
	transferGrid = Ext.create('Ext.grid.Panel', 
	{
		id: 'transfergrid',
		simpleSelect: false,		
		flex:1,
		store            : transferStore,
		columns          : transferColumns,
		height: 172,
		stripeRows       : true,
		verticalScroller: 
		{
			xtype: 'paginggridscroller',
			activePrefetch: false
		},
		margins          : '0 2 0 0',
		width: '100%',
		selType: 'rowmodel' ,
		listeners:
		{
			itemclick: function (th,rec,item,index)
			{
				th.selModel.allowDeselect = true;	
				if (rec.get('exceeded')) showlimit(rec.get('size'),rec.get('id'));
			},
			itemcontextmenu : function (grid,record,item,index,e,eOpts)
			{		
				if (d) console.log(record.get('id'));
				canceltransferid = record.get('id');
				e.preventDefault();
				transferMenu.showAt(e.getPageX(),e.getPageY());
			}
		}
	});	

	transferPanel = Ext.create('Ext.Panel',
	{	
		id: 'transferpanel',
		title: l[104],    
		width: '100%',
		height:200,
		minHeight:150,
		autoScroll:false,
		collapsed: true,
		containerScroll: false,
		collapseDirection: 'bottom',	
		collapsible: true,
		floatable: false,   	
		defaults     : { flex : 1 },
		items        : [ transferGrid ],
		listeners:
		{
			expand: function(p,eOpts)
			{
				$('.x-view-selector').remove();			
			}
		}
	});	
	
	
	if (!mobileversion)
	{

		displayPanel = Ext.create('Ext.Panel', 
		{
			id: 'displaypanel',
			width        : '100%',   
			margins		 : '0 0 0 0',
			layout       : 
			{
				type: 'hbox',
				align: 'stretch',
				padding: 0
			},
			defaults     : { flex : 1 },
			items        : [ ImagePanel ],		
			//items        : [ FileGrid ]
		});
	}


	
	dirroot = Ext.create('Ext.data.TreeStore');
	mcdirroot = Ext.create('Ext.data.TreeStore');
	
	if (!mobileversion)
	{
		dirtree = Ext.create('Ext.tree.Panel',
		{		
				rootVisible:false,
				viewConfig: {forceFit: true},
				title: l[106],
				region:'west',			
				hideHeaders: true,
				margins: '5 0 0 5',
				width: fmconfig.treewidth || 250,
				collapsible: false,   // make collapsible
				autoScroll:false,
				animate:true, 		
				containerScroll: true,
				id: 'dirtree',
				layout: 'fit',
				columns: [{
							 xtype : 'treecolumn',			 
							 renderer : function(value, record, node)
							{
								var icon = node.raw.icon2;
								var css = '';
										
								if (icon.indexOf('images/folder.gif') > -1)
								{
									icon = 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
									css = 'folder';							
								}
								
								if (icon.indexOf('images/sharedfolder.gif') > -1)
								{
									icon = 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
									css = 'sharedfolder';							
								}
								
							
								return '<div class="tree-item"><img src="' + icon + '" class="' + css + '"> ' + node.data.text + '</div>';				
							 }}],
				viewConfig: 
				{						
					listeners:
					{	
						afteritemexpand: function (node, index, item, eOpts )
						{
							fmtreenode(node.get('id'),true);					
						},
						afteritemcollapse: function (node, index, item, eOpts )
						{
							function collapsenode(n)
							{
								n.eachChild(function(n) 
								{
									collapsenode(n);								
								});
								fmtreenode(n.get('id'),false);
								n.collapse();						
							}
							collapsenode(node);
						},
						resize: function (el, width, height)
						{
							storefmconfig('treewidth',width);
							topbuttontexts();
						},
						itemcontextmenu : rightclickmenu
					}
				},
				listeners: 
				{
					select: function(panel,record,index,Obj) 
					{
						
					},					
					itemclick: function ( panel, record, item, index, e, eOpts )
					{				
						opendirectory(record.get('id'));		
					},
					render: function (e)
					{
						initDragZone(e);
						initDropZone(e);
					}
				},		
				store: dirroot
		});
	}
	

	
	/*
	==================
	GET LINK(S)
	==================
	*/
	getLinkDialog = Ext.create('widget.window',
	{
		id: 'getlinkdialog',
		title: l[112],
		closable: true,
		closeAction: 'hide',
		width: 750,
		height: 550,
		minWidth: 700,
		minHeight: 500,
		
		layout: 'fit',
		listeners: 
		{
			beforeclose: function() 
			{ 		
				Ext.getBody().unmask();
			},		
			activate: function() 
			{		
				if (!getLinkDialog.rendered) getLinkDialog.doAutoRender();
				document.getElementById('getlink-area').style.paddingBottom= 40+ $('.links-warning-txt')[0].offsetHeight + 'px';				
				createlinks();	
			}
		},
		html: '<div class="getlinks-checkbox"><div id="getlink_filelink_div" class="checkboxOn"><input type="checkbox" id="getlink_filelink" onClick="getlinkcheck(\'getlink_filelink\');" class="checkboxOn" checked ></div><div class="register-terms-text"> ' + l[113] + ' </div></div><div class="getlinks-checkbox"><div id="getlink_filekey_div" class="checkboxOn"><input type="checkbox" id="getlink_filekey" onClick="getlinkcheck(\'getlink_filekey\');" class="checkboxOn" checked ></div><div class="register-terms-text"> ' + l[114] + ' </div></div><div class="getlinks-checkbox"><div id="getlink_filename_div" class="checkboxOff"><input type="checkbox" id="getlink_filename" onClick="getlinkcheck(\'getlink_filename\');" class="checkboxOff" ></div><div class="register-terms-text"> ' + l[115] + ' </div></div><div class="getlinks-checkbox"><div id="getlink_filesize_div" class="checkboxOff"><input type="checkbox" id="getlink_filesize" onClick="getlinkcheck(\'getlink_filesize\');" class="checkboxOff" ></div><div class="register-terms-text"> ' + l[116] + ' </div></div><div class="getlinkdialog-input" id="getlink-area"><textarea id="getlink_textarea" readonly></textarea>' + 
		'<div style="position:relative;" id="clipbtn"><div style="position: absolute; left: 0px; top: 0px; width: 730px; height: 35px; z-index: 99;" onmouseover="clipboardover();" onmouseout="clipboardout();"><object data="/OneClipboard.swf" id="clipboardswf" type="application/x-shockwave-flash"  width="730" height="35"><param name="wmode" value="transparent"><param value="always" name="allowscriptaccess"><param value="all" name="allowNetworkin"><param name=FlashVars value="buttonclick=1" /></object></div><div class="clipboard-button" id="links_clipboard_button" style="">' + l[370] + '</div></div>' + 				
		'<div class="links-warning-txt"><span class="red">' + l[368] + '</span> ' + l[369] + '<div style="margin-top:8px;"><span class="red">' + l[366] + ':</span> ' + l[367] + '</div></div>' + 
		'</div><div class="clear"></div>'
	});
	/*
	==================
	MOVING FILES/FOLDERS
	==================
	*/
	mctree = Ext.create('Ext.tree.Panel',
	{
		id: 'mctree',
		rootVisible: false,
		hideHeaders: true,
		title: l[117],
		region: 'west',
		title: l[118],
		width: 400,		
		split: true,
		collapsible: false,
		floatable: false,     
		//rootVisible: true,
		store: mcdirroot,
		columns: [{
						 xtype : 'treecolumn',			 
						 renderer : function(value, record, node)
						{
							var icon = node.raw.icon2;
							var css = '';
									
							if (icon.indexOf('images/folder.gif') > -1)
							{
								icon = 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
								css = 'folder';							
							}
							
							if (icon.indexOf('images/sharedfolder.gif') > -1)
							{
								icon = 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
								css = 'sharedfolder';							
							}
							
						
						 	return '<div class="tree-item"><img src="' + icon + '" class="' + css + '"> ' + node.data.text + '</div>';				
						 }}],
		listeners: 
		{ 
			select: function(movet,rec) { mcrec = rec; }
		}
	});
	
	if (!mobileversion)
	{	
		mainpanel = Ext.create('Ext.panel.Panel', 
		{
			id: 'mainpanel',
			width: '100%',
			height: '100%',
			layout: 'border',		
			defaults: { split: true },
			items:  [dirtree,{
				region: 'center',     
				xtype: 'panel',
				layout: 'fit',
				id: 'center-region-container',
				margins: '0 0 0 0',
				items: [displayPanel]
			}],
			dockedItems: [{
				region: 'center',     
				xtype: 'panel',
				dock: 'bottom',
				layout: 'fit',
				margins: '0 0 0 0',
				items: [transferPanel]
			},
			{
				region: 'center',     
				xtype: 'panel',
				dock: 'top',
				width: '100%',
				height: '60',
				layout: 'fit',
				margins: '0 0 0 0',
				items: [
				{
					frame: false,
					border: false,
					bodyStyle: 'background:transparent;',
					padding: 0,
					html: '<div class="top-head"></div>'
				}]
			}
			],
			renderTo: 'fmholder',
		});
	}
	
	
	
	
	Ext.EventManager.onWindowResize(function(w, h)
	{
		if (extlayouts)
		{
			if (mainpanel) mainpanel.doComponentLayout();				
			var w1 = Ext.query('.x-window');					
			Ext.each(w1, function(item) 
			{			
				if (Ext.getCmp(item.id))
				{
					Ext.getCmp(item.id).setPosition(Math.ceil((w-Ext.getCmp(item.id).getWidth())/2),Math.ceil((h-Ext.getCmp(item.id).getHeight())/2));
				}
			});
			setTimeout("fmtoolbarscroll()",5);
		}
	});
	chromemsgDialog = Ext.create('widget.window',
	{
		id: "chromemsgdialog",
		title: l[130],
		closable: false,
		
		operation: 'move',
		minWidth: (l[131].length-20)*12+320,
		width: (l[131].length-20)*12+320,
		height: 90,
		left:100,
		minHeight: 90,
		layout: 'fit',
		listeners: 
		{
			beforeclose: function() 
			{ 
				Ext.getBody().unmask();
			},
			activate: function() 
			{
				Ext.getBody().mask();		
				setTimeout("chromearrow()",500);
			},
			
		},
		bodyStyle: '',
		html: '<div class="chromemsgdialog-txt">' + l[131] + '</div><div class="chromedialog-buttons" onclick="chromearrowmove();"><div class="chromedialog-cursor"><div style="display:none; position:absolute; left:-175px; top:-250px; width:123px; height:118px; background-image:url(\'' + staticpath + 'images/chrome-arrow.png\');" id="chrome-arrow"></div></div></div><div class="clear"></div>'
	});

	mcDialog = Ext.create('widget.window',
	{
		id: "mcdialog",
		title: l[132],
		closable: true,
		closeAction: 'hide',
		width: 350,
		operation: 'move',
		minWidth: 350,
		height: 350,
		minHeight: 350,
		layout: 'fit',
		listeners: 
		{
			beforeclose: function() 
			{ 
				mctree.getSelectionModel().deselect(mcrec);
				mcrec=false;
				Ext.getBody().unmask(); 
			},
			activate: function() 
			{
				if (d) console.log('initalize ' + mcDialog.operation + ' tree');						
				// copy from root to network -> 1
				// copy from network to root -> 2			
				// move from root to root/trash -> 3
				// move from trash to root -> 4					
				var sourceId 	= selectedRecords[0].get('id');			
				var sourceRoot 	= RootbyId(sourceId);				
				var otype=0;				
				if ((sourceRoot == RootID) && (mcDialog.operation == 'copy')) 			otype = 1;
				else if((sourceRoot == NetworkID) && (mcDialog.operation == 'copy')) 	otype = 2;			
				else if((sourceRoot == RootID) && (mcDialog.operation == 'move')) 		otype = 3;
				else if((sourceRoot == TrashbinID) && (mcDialog.operation == 'move')) 	otype = 4;											
				FileStore.suspendEvents();						
				createtree(mctree,otype);				
				expandedtreenodes = [];							
				reinstateFileStore();
				FileStore.resumeEvents();	
				mctree.selectPath('/');	
				if (d) console.log(Ext.getCmp('mcButton'));				
				mcDialog.dockedItems.items[0].text = 'test';				
				if (mcDialog.operation == 'move')
				{
					mcDialog.setTitle(l[133].replace('[X]',getitemtxt()));			
					Ext.getCmp('mcButton').setText(l[62]);				
				}
				else
				{
					mcDialog.setTitle(l[134].replace('[X]',getitemtxt()));
					Ext.getCmp('mcButton').setText(l[63]);
				}			
			}
		},
		bodyStyle: 'padding: 5px;',
		items: [mctree],
		dockedItems: [ 
			{
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				layout: { pack: 'center' },
				items: [{
							minWidth: 100,
							text: 'Move',
							id: 'mcButton',
							listeners: {
								click: function() 
								{ 			
									if (d) console.log(selectedRecords);
								
									if (!mcrec)
									{
										Ext.Msg.alert(l[135],l[136]);
									}	
									else if(mcrec.get('id') == NetworkID)
									{	
										Ext.Msg.alert(l[135],l[137]);
									}
									else if(selectedRecords[0].get('id') == mcrec.get('id'))
									{			
										Ext.Msg.alert(l[135],l[138]);								
									}							
									else if((mcDialog.operation == 'move') && (isCircular(selectedRecords[0].get('id'),mcrec.get('id'))))
									{
										Ext.Msg.alert(l[139],l[140]);								
									}
									else if (mcDialog.operation == 'move')
									{
										var selrec = selectedRecords;
										var jsonmove = [];		
										var isFolder = false;
										for (var i in selectedRecords)
										{
											if (selrec[i].get('folder') == 1) isFolder = true;
											moveitem(selrec[i],mcrec.get('id'),false);									
											jsonmove[i] = 
											{ 
												a: 'm',
												n: 	selrec[i].get('id'),
												t: 	mcrec.get('id'),
												i:  requesti
											}
										}								
										processmove(jsonmove);				
										aftermove(isFolder);
										mcDialog.close();
									}
									else if (mcDialog.operation == 'copy')
									{
										var recordids = [];									
										for(var i in selectedRecords)
										{
											recordids[i] = selectedRecords[i].get('id');
										}		
										
										if (mcrec.get('id').length == 11) copytouser(recordids,mcrec.get('id'),false,function() { mcDialog.close() } );
										else copyitems(recordids,mcrec.get('id'),false,function() { mcDialog.close() } );								
									}
								}
							}
						},{ minWidth: 100,
							text: l[156],
							listeners: { 
								click: function() { mcDialog.close(); }
							}
						}]
			}]
	});

	SharingStore = Ext.create('Ext.data.Store', 
	{
		model: 'SharingFS',	
		sortOnFilter:false,			
		sortOnLoad: false
	});

	sharingMenu = Ext.create('Ext.menu.Menu',
	{
		id:'sharingMenu',
		items: [    
		{
			id: 'sharing_itemMenu_delete',
			icon: staticpath + 'images/_editdelete.png',
			text: l[144],
			handler: function() 
			{ 
				var node = SharingStore.getById(sharingGrid.selectedid);		
				if (node) 
				{				
					var folderid = node.data.folderid;
					SharingStore.remove(node);					
					// delete share:

					// if folder link, remove public handle:
					if (node.data.userid == 'EXP') 
					{
						api_req([{a: 'l',n: sharingDialog.folderid}],
						{ 
						  callback : function (json,params) { if (json[0]) api_req([{a: 'l',p: json[0]}]); }
						});
					}					
					
					var reqs = [];	
					reqs[0] = 
					{
						u: node.data.userid,
						r: ''
					}								
					var ops = [];	
					ops[0] = 
					{	
						a: 's',
						n: sharingDialog.folderid,
						s: reqs,
						ha: '',
						i: requesti
					};				
					if (d) console.log(ops);				
					api_req(ops);					
					if (SharingStore.count() == 0)
					{	
						sharednodes[folderid] = false;					
						delete u_sharekeys[folderid];
						FileStore.getById(folderid).set('icon',staticpath + 'images/extension/folder.png');
						FileStore.getById(folderid).commit();					
						replacefoldericon(folderid,'folder');			
					}
				}
			}
		}]
	});
	
	

	sharingGrid = Ext.create('Ext.grid.Panel', 
	{
		id: 'sharinggrid',
		multiSelect: false,
		simpleSelect: false,		
		flex:0,
		store            : SharingStore,
		columns          : sharingColumns,
		stripeRows       : true,
		margins          : '0 2 0 0',
		width: '100%',
		height: 100,
		region: 'center',
		selectedid: '',
		listeners:
		{
			selectionchange : function (grid, selected) 
			{ 						
				if ((selected.length == 0) || ((selected[0]) && (selected[0].data.userid == 'EXP')))
				{
					sharing_email.reset();
					sharingform.getChildByElement('sharing_rights').reset();				
				}		
				else
				{
					sharing_email.setValue(selected[0].data.userid);
					sharingform.getChildByElement('sharing_rights').setValue(selected[0].data.rights);			
				}
				
				if (selected[0]) sharingGrid.selectedid = selected[0].data.id;
				
				if (d) console.log(selected);
			},
			itemcontextmenu : function (grid,record,item,index,e,eOpts)
			{		
				e.preventDefault();
				sharingMenu.showAt(e.getPageX(),e.getPageY());
			},
			itemclick: function (th,rec,item,index)
			{
				th.selModel.allowDeselect = true;		
			}	
		}
	});	
	
	sharing_email = Ext.create('Ext.form.field.ComboBox',
	{
			id: 'sharing_email',
			xtype:          'combo',
			mode:           'local',
			value:          '',
			triggerAction:  'all',
			forceSelection: false,
			editable:       true,
			fieldLabel:     l[145],
			name:           'sharing_email',
			id:           	'sharing_email',
			displayField:   'email',
			valueField:     'userid',
			queryMode: 		'local',
			store:          Ext.create('Ext.data.Store', 
			{
				fields : ['email', 'userid']
			}),
			listeners:
			{
				specialkey: function(f,e)
				{   
					if(e.getKey()==e.ENTER) 
					{
						doshare();
					}
				}  		
			}
	});
	
	
	
	
	
	sharingform = Ext.create('Ext.form.Panel', 
	{      
		id: 'sharingform',
		frame:true,
		title: l[146],
		bodyStyle:'padding:5px 5px 0',
		width: 350,
		fieldDefaults: 
		{
			msgTarget: 'side',
			labelWidth: 100
		},
		defaultType: 'textfield',
		defaults: 
		{
			anchor: '100%'
		},
		region: "south",

		items: [
		sharing_email,
		{
			xtype:          'combo',
			mode:           'local',
			value:          '0',
			triggerAction:  'all',
			forceSelection: true,
			editable:       false,
			fieldLabel:     'Rights:',
			name:           'sharing_rights',
			id:           	'sharing_rights',
			displayField:   'name',
			valueField:     'value',
			queryMode: 'local',
			store:          Ext.create('Ext.data.Store', 
			{
				fields : ['name', 'value'],
				data   : [{name : l[55],   value: '0'},{name : l[56],  value: '1'},{name : l[57],  value: '2'}]
			})
		}],
		buttons: [
		{	
			id: 'grantbtn',
			text: l[147],
			listeners: 
			{ 
				click: function() 
				{ 
					doshare();
				}
			}
		},{
			id: 'closebtn',
			text: l[148],
			listeners: 
			{ 
				click: function() 
				{ 
					sharingDialog.close();
				}
			}
		}]
	});

	sharingDialog = Ext.create('widget.window',
	{
		id: 'sharingdialog',
		title: l[149],
		closable: true,
		closeAction: 'hide',
		width: 700,
		minWidth: 700,
		folderid: false,
		height: 295,
		minHeight: 295,
		layout: 'border',
		listeners: 
		{
			beforeclose: function() 
			{ 
				Ext.getBody().unmask(); 				
			},
			activate: function() 
			{		
				Ext.getBody().mask();
				sharingform.getChildByElement('sharing_email').reset();
				sharingform.getChildByElement('sharing_email').focus(false,300);		
				SharingStore.filterBy(function(record,id) 
				{
					if (record.data.folderid == sharingDialog.folderid) return true;	
				});
			}
		},
		bodyStyle: 'padding: 0px;',
		items: [sharingGrid,sharingform]
	});
	

	

	newcontactform =  Ext.create('Ext.form.Panel', 
	{
		id: 'newcontactform',
		layout: 'absolute',        
		defaultType: 'textfield',
		border: false,
		
		autoWidth:true,
		items: [{
				fieldLabel: l[153],     
				labelWidth: l[153].length*10,				
				x: 5,
				y: 22,
				anchor:'100%',
				name: 'contactfield',
				id: 'contactfield',
				anchor: '-5',
				hasfocus: true,
				listeners:{  
				scope:this,  
				specialkey: function(f,e)
				{   
					if(e.getKey()==e.ENTER) addcontact();              
				}  
		}  
		}]
	});
	
	
	

	newcontactDialog = Ext.create('widget.window',
	{
		id: 'newcontactdialog',
		title: l[154],
		closable: true,
		closeAction: 'hide',
		width: 400,
		minWidth: 400,
		height: 160,
		minHeight: 160,
		maxHeight: 160,
		layout: 'fit',
		listeners: 
		{
			beforeclose: function() 
			{
				Ext.getBody().unmask(); 		
			},
			activate: function()
			{
				newcontactform.getChildByElement('contactfield').reset();		
				newcontactform.getChildByElement('contactfield').focus(false,300);
			}
		},		
		bodyStyle: 'padding: 0px;',
		items: [newcontactform],
		dockedItems: [ 
			{
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				layout: { pack: 'center' },
				items: [{
							minWidth: 100,
							text: l[155],
							listeners: {
								click: function() 
								{ 
										addcontact();
								}
							}
						},{ minWidth: 100,
							text: l[156],
							listeners: 
							{ 
								click: function() { newcontactDialog.close(); }
							}
						}]
			}]
	});

	/*
	==================
	NEW FOLDER 
	==================
	*/

	newfolderform =  Ext.create('Ext.form.Panel', 
	{
		id: 'newfolderform',
		layout: 'absolute',        
		defaultType: 'textfield',
		border: false,
		items: [{
				fieldLabel: l[157],				
				labelWidth: l[157].length*10,
				x: 5,
				y: 22,
				name: 'folderfield',
				id: 'folderfield',
				anchor: '-5',
				hasfocus: true,
				listeners:{  
				scope:this,  
				specialkey: function(f,e)
				{   
					if(e.getKey()==e.ENTER) requestfolder(newfolderDialog.inid);              
				}  
		}  
		}]
	});

	

	newfolderDialog = Ext.create('widget.window',
	{
		id: 'newfolderdialog',
		title: l[69],
		closable: true,
		closeAction: 'hide',
		width: 400+ (l[157].length*10)-110,
		minWidth: 300,
		height: 130,
		minHeight: 130,
		maxHeight: 130,
		layout: 'fit',
		inid: '',
		listeners: 
		{
			beforeclose: function() 
			{
				Ext.getBody().unmask(); 		
			},
			activate: function()
			{
				newfolderform.getChildByElement('folderfield').reset();		
				newfolderform.getChildByElement('folderfield').focus(false,300);
			}
		},		
		bodyStyle: 'padding: 0px;',
		items: [newfolderform],
		dockedItems: [ 
			{
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				layout: { pack: 'center' },
				items: [{
							minWidth: 40+l[158]*11,
							text: l[158],
							listeners: {
								click: function() 
								{ 
										requestfolder(newfolderDialog.inid);
								}
							}
						},{ minWidth: 40+l[158]*11,
							text: l[159],
							listeners: 
							{ 
								click: function() { newfolderDialog.close(); }
							}
						}]
			}]
	});

	/*
	==================
	RENAME
	==================
	*/
	renameform =  Ext.create('Ext.form.Panel', 
	{
		id: 'renameform',
		layout: 'absolute',        
		defaultType: 'textfield',
		border: false,
		items: [{
				fieldLabel: '',
				fieldWidth: 50,          
				x: 5,
				y: 22,
				name: 'renamefield',
				id: 'renamefield',
				anchor: '-5',
				hasfocus: true,
				listeners:{  
				scope:this,  
				specialkey: function(f,e)
				{   
					if(e.getKey()==e.ENTER) dorename();       
				}  
		}  
		}]
	});
	
	renameDialog = Ext.create('widget.window',
	{
		id: 'renamedialog',
		title: l[161],
		closable: true,
		closeAction: 'hide',
		width: 380,
		minWidth: 380,
		height: 140,
		minHeight: 140,
		maxHeight: 140,
		layout: 'fit',
		listeners: 
		{
			beforeclose: function() 
			{
				Ext.getBody().unmask(); 		
			},
			activate: function()
			{
				renameform.getChildByElement('renamefield').focus(false,300);
			}
		},		
		bodyStyle: 'padding: 0px;',
		items: [renameform],
		dockedItems: [ 
			{
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				layout: { pack: 'center' },
				items: [{
							minWidth: 40+l[162].length*11,
							text: l[162],
							listeners: {
								click: dorename						
							}
						},{ minWidth: 40+l[162].length*11,
							text: l[163],
							listeners: 
							{ 
								click: function() { renameDialog.close(); }
							}
						}]
			}]
	});
	
	if (d) console.log('tmpuploads count: ' + tmpuploads.length);
	
	if ((tmpuploads.length > 0) || (init_anoupload))
	{
		if (!mobileversion) document.getElementById('topmenufm').style.display='';
		if (u_type == 3)
		{
			loadingDialog.show();
			loadfm(false);
		}
		//Ext.suspendLayouts();
		extlayouts=false;
		for(var i in tmpuploads)
		{			
			transferStore.add(tmpuploads[i]);	
			transferPanel.expand();			
		}
		if (tmpuploads.length > 0) startupload();
		tmpuploads = [];
		//Ext.resumeLayouts(true);
		extlayouts=true;		
	}
	else
	{
		if (!init_l) loadingDialog.show();
		loadfm(false);	
	}
}



var done_text1='';
var done_text2='';

function init_done()
{
	document.getElementById('done_text1').innerHTML = done_text1;
	document.getElementById('done_text2').innerHTML = done_text2;
}

function doregister()
{
	if((document.getElementById('register_name').value == '') || (document.getElementById('register_name').value == l[206]))
	{
		alert(l[212]);
		document.getElementById('register_name').focus();
	}
	else if((document.getElementById('register_email').value == '') || (document.getElementById('register_email').value == l[207]))
	{
		alert(l[197]);
		document.getElementById('register_email').focus();
	}
	else if(checkMail(document.getElementById('register_email').value))
	{
		alert(l[198]);
		document.getElementById('register_email').focus();	
	}
	else if((document.getElementById('register_password').value == '') || (document.getElementById('register_password').value == 'Password'))
	{
		alert(l[213]);
		document.getElementById('register_email').focus();
	}	
	else if ((signupcode) && (document.getElementById('register_password').value != document.getElementById('register_password_confirm').value))
	{
		alert(l[715]);
		
		if (mobileversion)
		{
			document.getElementById('register_password').value='';
			document.getElementById('register_password_confirm').value='';			
			document.getElementById('register_password').focus();
		}
		else
		{		
			document.getElementById('register_password').value = l[770];
			document.getElementById('register_password').type = 'text';
			document.getElementById('register_password_confirm').value = l[771];
			document.getElementById('register_password_confirm').type = 'text';
		}
	}
	else if (!document.getElementById('register_checkbox').checked)
	{
		alert(l[214]);
	}
	else if (is_devnull(document.getElementById('register_email').value))
	{
		alert('Hotmail, Outlook, Live and MSN are currently suffering a major technical outage, resulting in important e-mails vanishing without a trace. Please use a different address or contact <a href="http://support.microsoft.com/contactus/" style="text-decoration:underline; color:rgb(216,40,11);" target="_blank">Support</a> for assistance.','Defective E-Mail Address Detected');
	}	
	else
	{
		if (mobileversion) loadingDialog.show();
		else document.getElementById('overlay').style.display='';
		
		if (signupcode)
		{		
			var ctx = 
			{
				checkloginresult: function(u_ctx,r)
				{			
					if (mobileversion) loadingDialog.hide();
					else document.getElementById('overlay').style.display='none';
					
					if ((typeof r[0] == 'number') && (r[0] < 0))					
					{
						alert(l[200]);
					}
					else
					{
						u_type = r;						
						document.location.hash = 'fm';										
					}
				}
			}				
			var passwordaes = new sjcl.cipher.aes(prepare_key_pw(document.getElementById('register_password').value));										
			var uh = stringhash(document.getElementById('register_email').value.toLowerCase(),passwordaes);
			u_checklogin(ctx,true,prepare_key_pw(document.getElementById('register_password').value),signupcode,document.getElementById('register_name').value,uh);
		}
		else if (u_type === false) 
		{
			var u_ctx = 
			{
				checkloginresult: function(u_ctx,r)
				{			
					u_type = r;
					registeraccount();
				}	
			}	
			u_checklogin(u_ctx,true);
		}
		else registeraccount();
	}
}





function registeraccount()
{
	var ctx = 
	{
		callback: function(res,ctx)
		{
			if (mobileversion) loadingDialog.hide();
			else document.getElementById('overlay').style.display='none';
			
			if (typeof res == 'undefined') 
			{
				alert(l[215]);												
			}			
			else if (res[0] == 0)
			{
				if (mobileversion) loadingDialog.show();
				api_req([{a:'up',name: document.getElementById('register_name').value}],
				{ 
				  callback : function (json,params)
				  {	
					 loadingDialog.hide();
					 done_text1 = l[216];
					 done_text2 = l[217];
					 
					 if (mobileversion)
					 {
						page = 'done';
						mobileui();					 
					 }
					 else
					 {						
						parsepage(pages['done']);
						init_done();
					 }
				  }
				});
			}
			else
			{		
					switch (res[0])
					{
						case EACCESS:					
						alert(l[218]);									
						break;		
						case EEXIST:
						alert(l[219])
						break;
					}										
			}
		}
	}	
	sendsignuplink(document.getElementById('register_name').value,document.getElementById('register_email').value,document.getElementById('register_password').value,ctx);
}

function register_checkpassword(pass)
{
	if (mobileversion) return false;

	if ((pass == 'Password') || (pass == ''))
	{
		document.getElementById('register_pwstatus_text').innerHTML = '';
		document.getElementById('register_pwstatus').className = 'register-pass-status-block';			
		return false;
	}
	var strength = checkPassword(pass);	
	if (strength <= 25)
	{
		document.getElementById('register_pwstatus_text').innerHTML = l[220];
		document.getElementById('register_pwstatus').className = 'register-pass-status-block good1';	
	}
	else if (strength <= 50)
	{
		document.getElementById('register_pwstatus_text').innerHTML = l[221];
		document.getElementById('register_pwstatus').className = 'register-pass-status-block good2';
	}
	else if (strength <= 75)
	{
		document.getElementById('register_pwstatus_text').innerHTML = l[222];
		document.getElementById('register_pwstatus').className = 'register-pass-status-block good3';
	}
	else
	{
		document.getElementById('register_pwstatus_text').innerHTML = l[223];
		document.getElementById('register_pwstatus').className = 'register-pass-status-block good1 good4';	
	}
}

function init_register()
{
	document.getElementById('terms_agree').innerHTML = l[208].replace('[A]','<a href="/#terms">').replace('[/A]','</a>');
}

function register_signup(email)
{
	document.getElementById('register_email').value = email;
	document.getElementById('register_email').readOnly = true;
	
	document.getElementById('register_password_confirm_div').style.display='';
}

function checkPassword(strPassword)
{
	var m_strUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var m_strLowerCase = "abcdefghijklmnopqrstuvwxyz";
	var m_strNumber = "0123456789";
	var m_strCharacters = "!@#$%^&*?_~";
    var nScore = 0;	
	nScore += countDif(strPassword)*2;	
	var extra = countDif(strPassword)*strPassword.length/3;	
	if (extra > 25) extra = 25;	
	nScore += extra;
    var nUpperCount = countContain(strPassword, m_strUpperCase);
    var nLowerCount = countContain(strPassword, m_strLowerCase);
    var nLowerUpperCount = nUpperCount + nLowerCount;    
    if (nUpperCount == 0 && nLowerCount != 0) nScore += 10; 
    else if (nUpperCount != 0 && nLowerCount != 0) nScore += 10; 
    var nNumberCount = countContain(strPassword, m_strNumber);
    if (nNumberCount == 1) nScore += 10;    
    if (nNumberCount >= 3) nScore += 15;
    var nCharacterCount = countContain(strPassword, m_strCharacters);
    if (nCharacterCount == 1) nScore += 10;
    if (nCharacterCount > 1) nScore += 10;    
    if (nNumberCount != 0 && nLowerUpperCount != 0) nScore += 2;
    if (nNumberCount != 0 && nLowerUpperCount != 0 && nCharacterCount != 0) nScore += 3;
    if (nNumberCount != 0 && nUpperCount != 0 && nLowerCount != 0 && nCharacterCount != 0) nScore += 5;
    return nScore;
}

function countContain(strPassword, strCheck)
{    
    var nCount = 0;
    for (i = 0; i < strPassword.length; i++) 
    {
        if (strCheck.indexOf(strPassword.charAt(i)) > -1)  nCount++;         
    } 
    return nCount; 
} 

function countDif(strPassword)
{    
	var chararr = [];
	var nCount = 0;
    for (i = 0; i < strPassword.length; i++) 
    {
		if (!chararr[strPassword.charAt(i)])
		{	
			chararr[strPassword.charAt(i)] = true;
			nCount++;
		}
	}
	return nCount;
}

var login_txt=false;

function dologin()
{
	var permanent=false;

	if ((document.getElementById('login_email').value == '') || (document.getElementById('login_email').value == l[195]))
	{
		alert(l[197]);	
	}
	else if (checkMail(document.getElementById('login_email').value))
	{
		alert(l[198]);	
	}
	else if ((document.getElementById('login_password').value == '') || (document.getElementById('login_password').value == 'Password'))
	{
		alert(l[199]);	
	}
	else
	{
		if (mobileversion) loadingDialog.show();
		else document.getElementById('overlay').style.display='';
		
		if (confirmok)
		{
			if (u_signupenck)
			{
				if (checksignuppw(document.getElementById('login_password').value))
				{
					var ctx = 
					{
						callback: function(res,ctx)
						{	
							if (mobileversion) loadingDialog.hide();
							else document.getElementById('overlay').style.display='none';						
							
							if (res[0] == EACCESS)
							{
								alert(l[732]);
							}
							else if (typeof res[0] == 'string')
							{
								if (u_type)
								{									
									document.location.hash = 'fm';							
									document.title = 'MEGA';
								}
								else postlogin();
							}							
							else
							{
								alert(l[200]);
							}
						}
					}										
					if (d) console.log('u_handle');
					if (d) console.log(u_handle);					
					var passwordaes = new sjcl.cipher.aes(prepare_key_pw(document.getElementById('login_password').value));					
					api_updateuser(ctx,
					{
						uh : stringhash(document.getElementById('login_email').value.toLowerCase(),passwordaes),
						c: confirmcode					
					})
				}
				else
				{	
					alert('bad password');		
					document.getElementById('overlay').style.display='none';					
					document.getElementById('login_password').value ='';				
				}
			}
		}
		else
		{
			postlogin();
		}
	}
}


function init_login()
{
	if (login_txt)
	{
		document.getElementById('login_div_topmsg').style.display='';
		document.getElementById('login_topmsg').innerHTML= '<h1>' + login_txt + '</h1>';		
		login_txt=false;	
	}	
}


function postlogin()
{
	if (mobileversion) loadingDialog.show();
	var ctx = 
	{
		checkloginresult: function(ctx,r)
		{
			if (mobileversion) loadingDialog.hide();
			else document.getElementById('overlay').style.display='none';		
			
			if (r == EBLOCKED)
			{
				alert(l[730]);
			}
			else if (r)
			{
				u_type = r;
				if (page == 'login')
				{					
					document.location.hash = 'fm';
					document.title = 'Mega';
				}
				else init_page();
				if (d) console.log('logged in');					
			}					
			else
			{
				document.getElementById('login_password').value='';
				alert(l[201]);
			}
		}	
	}	
	var passwordaes = new sjcl.cipher.aes(prepare_key_pw(document.getElementById('login_password').value));										
	var uh = stringhash(document.getElementById('login_email').value.toLowerCase(),passwordaes);	
	u_login(ctx,document.getElementById('login_email').value,document.getElementById('login_password').value,uh,document.getElementById('login_remember').checked);
}

function fp_request()
{
  if ($('#fp_email')[0].value == l[195])
  {
	 alert(l[197]);
  }
  else if (checkMail($('#fp_email')[0].value))
  {
	alert(l[141]);
	$('#fp_email')[0].value=l[195];	
  }
  else
  {
	  loadingDialog.show();	  
	  api_req([{ a : 'upkr', m: $('#fp_email')[0].value }],
	  { 
		callback : function (json,params) 
		{ 
			loadingDialog.hide();
			if (json[0] == ENOENT)
			{
				$('#fp_email').value[0]=l[195];
				alert(l[733]);	
			}
			else if ((typeof json[0] == 'number') && (json[0] < 0))
			{
				alert(l[200]);			
			}
			else
			{
				done_text1 = l[734];
				done_text2 = l[735];
				parsepage(pages['done']);
				init_done();			
			}
			console.log(json);
		}
	  });
  }
}

function fp_init(p)
{
	if (p)
	{
		$('#forgotpassword_request')[0].style.display='none';
		$('#forgotpassword_reset')[0].style.display='';	
	}
	else
	{
		$('#forgotpassword_request')[0].style.display='';
		$('#forgotpassword_reset')[0].style.display='none';	
	}
}

function fp_reset()
{
	if ($('#fp_password1')[0].value == l[717])
	{
		alert(l[720]);	
	}
	else if ($('#fp_password1')[0].value !== $('#fp_password2')[0].value)
	{
		alert(l[715]);
		$('#fp_password1')[0].value = l[717];
		$('#fp_password2')[0].value = l[718];
		$('#fp_password1')[0].type = 'text';
		$('#fp_password2')[0].type = 'text';
		$('#register_pwstatus')[0].className = 'register-pass-status-block';
	}
	else
	{
		api_create_u_k();		
		var ssc = Array(4);
		for (i = 4; i--; ) ssc[i] = rand(0x100000000);			
		var pw_aes = new sjcl.cipher.aes(prepare_key_pw($('#fp_password1')[0].value));	
		loadingDialog.show();	  
		api_req([{ a : 'up', uk: resetpwcode, k: a32_to_base64(encrypt_key(pw_aes,u_k)), uh:  stringhash(resetpwemail.toLowerCase(),pw_aes), ts: base64urlencode(a32_to_str(ssc) + a32_to_str(encrypt_key(new sjcl.cipher.aes(u_k),ssc)))}],
		{ 
			callback : function (json,params) 
			{ 			
				if (json[0] == 0)
				{
					login_txt = l[740];
					document.location.hash = 'login';
					document.title = 'MEGA';
				}
				else
				{
					alert(l[200]);			
				}				
				console.log(json);			
				loadingDialog.hide();
			}
		});
	}
}

var blogposts = 
[{
	h : 'Vulnerability Rewards - The first month, plus assorted site news',
	t : 1362673666,
	c : '<p>A quick update from the engine room:[READMORE]</p><ul><li>Vulnerability Rewards<p></p><p>Two more security researchers have collected a bounty (both in relation to XSS vulnerabilities), bringing the total number of rewards to nine. Thank you!</p></li><li>Folder Links<p></p><p>Links to folders can now be exported in the same manner as links to files.</p></li><li>Folder Downloads<p></p><p>Complete folders (all files contained in them, including subfolders) can now be downloaded by selecting "Download" from their context menu.</p></li><li>Firefox Support<p></p><p>Coincidentally, one of the Mozilla Foundation\'s ten offices worldwide is located right around the corner from us, and we expect Firefox to soon join Chrome in being able to efficiently write local files from within JavaScript. As a temporary stop-gap solution, we have built a simple Firefox extension that does exactly that. It also maintains the path structure when downloading folders.</p></li><li>Image Thumbnails<p></p><p>A new icon view mode (activated through the button to the right of the search field) displays thumbnails for newly uploaded image files (supported formats: JPEG, PNG, GIF and BMP). To add thumbnails to your existing image files, simply download each of them once.</p></li><li>API documentation/software development kit<p></p><p>With the API feature set stabilizing, we are now working on an official SDK that will provide an abstraction layer between the application and the low-level MEGA API calls, simplifying app development, guaranteeing correct handling of all client-side cryptography and ensuring interoperability.</p></li><li>Client Applications<p></p><p>Coming shortly after the SDK. At this point, we would like to take our hats off to everybody who has managed to reverse-engineer our API logic and built a working client. We are pleased to see a growing number of remarkably good apps emerge, and we hope that our SDK will fuel that even further.</p>',
	simg: 'images/blog/update.png',
	id: 9
},
{
	h : 'Vulnerability Rewards - The first week',
	t : 1360407447,
	c : '<p>It is time to report interim results of our vulnerability reward program. First of all, we wish to thank everybody who submitted bug reports and suggestions. We would also like to thank those who reviewed our code, but came up empty.[READMORE] If your analysis is still ongoing &mdash; don\'t despair, the program is here to stay, and there is no deadline for submissions (other than the risk of someone else finding and reporting the bug you are working on before you do).</p><p>Vulnerabilities are classified by severity, from class I to VI:</p><p><b>Severity class VI</b>: Fundamental and generally exploitable cryptographic design flaws</p><p><b>Severity class V</b>: Remote code execution on core MEGA servers (API/DB/root clusters) or major access control breaches</p><p><b>Severity class IV</b>: Cryptographic design flaws that can be exploited only after compromising server infrastructure (live or post-mortem)</p><p><b>Severity class III</b>: Generally exploitable remote code execution on client browsers (cross-site scripting)</p><p><b>Severity class II</b>: Cross-site scripting that can be exploited only after compromising the API server cluster or successfully mounting a man-in-the-middle attack (e.g. by issuing a fake SSL certificate + DNS/BGP manipulation)</p><p><b>Severity class I</b>: All lower-impact or purely theoretical scenarios</p><p></p><p>The Results</p><p><b>Class V</b> and <b>VI</b> vulnerabilities:</p><p>- none reported -</p><p><b>Class IV</b> vulnerabilities:<ul><li>Invalid application of CBC-MAC as a secure hash to integrity-check active content loaded from the distributed static content cluster. Mitigating factors: No static content servers had been operating in untrusted data centres at that time, thus no elevated exploitability relative to the root servers, apart from a man-in-the-middle risk due to the use of a 1024 bit SSL key on the static content servers. Fixed within hours.</li></ul></p><p><b>Class III</b> vulnerabilities:<ul><li>XSS through file and folder names. Mitigating factors: None. Fixed within hours.</li><li>XSS on the file download page. Mitigating factors: Chrome not vulnerable. Fixed within hours.</li><li>XSS in a third-party component (ZeroClipboard.swf). Mitigating factors: None. Fixed within hours.</li></ul></p><p><b>Class II</b> vulnerabilities:<ul><li>XSS through strings passed from the API server to the download page (through three different vectors), the account page and the link export functionality. Mitigating factors &ndash; apart from the need to control an API server or successfully mounting a man-in-the-middle attack &ndash;: None. Fixed within hours.</li></ul></p><p><b>Class I</b> vulnerabilities:<ul><li>HTTP Strict Transport Security header was missing. Fixed. Also, mega.co.nz and *.api.mega.co.nz will be HSTS-preloaded in Chrome.</li><li>X-Frame-Options header was missing, causing a clickjacking/UI redressing risk. Fixed.</li></ul></p><p>We believe that it would be premature to draw any conclusions at this time &mdash; barely three weeks after our launch and one week into the program. It is clear that the vulnerabilities identified so far could all be found by checking only a few lines of code at a time; none of them required any analysis at a higher level of abstraction. Needless to mention that nobody cracked any of the brute-force challenges yet (please check back in a few billion billion years).</p><p>We\'re looking forward to your future submissions, hopefully including some that address higher-level and conceptual issues!</p>',
	simg: 'images/blog/rewards1week.png',
	id: 8
},
{
	h : 'Mega Limited appoints new CEO',
	t : 1360220266,
	c : '<p>Today, interim CEO of MEGA Tony Lentino announced the appointment of former CEO of InternetNZ, Vikram Kumar, as the new CEO of MEGA. &nbsp; Mr. Lentino will maintain a seat as a director with MEGA.<br><br>"MEGA is delighted to welcome Vikram Kumar as its new CEO", said Lentino. "I have assisted MEGA since its inception, putting time and energy into finding investors, setting up support staff and general overview of the company in its initial stage. Now MEGA runs on a day-to-day routine, and I am pleased to hand the role of CEO to Vikram who is an experienced leader in the Internet industry."</p>[READMORE]<p>"MEGA is an exciting business and one that I am delighted to be joining", said Vikram Kumar. "Since launch just over two weeks ago, the company has had some stellar successes, with over two million subscribers joining MEGA.co.nz. I look forward to building on this initial success to develop MEGA into a significant company on the international Internet stage."</p><p>Until recently, Vikram has been Chief Executive of InternetNZ, a non-profit organization promoting the vision of an \'open and uncapturable Internet\'. In New Zealand, he has earlier worked for central government (State Services Commission) as well as Telecom in a variety of roles covering management, strategy, innovation, policy and programme management.</p><p>Vikram brings a diverse range of skills and insights to MEGA. He takes great interest in the economic, social and cultural opportunities that the Internet provides and the challenges the Internet is facing such as privacy, security and openness.</p><p>Mr. Lentino - owner of Instra Corporation and shareholder at MEGA - will maintain a seat as a director with MEGA and will continue to provide his entrepreneurial spirit and skills to the enterprise. "In addition to running the Instra business, I am happy to work alongside other MEGA executives, combining our abilities to create a global success", Mr Lentino says.</p><p><b>About Mega Limited</b><br>MEGA.co.nz is a revolutionary cloud storage service providing up to 50GB of free space, on-the-fly encryption and extremely fast file transfers thanks to our innovative in-browser multiplexing technology. MEGA is the most secure service in the industry as it encrypts user\'s data in the browser \'on the fly\' and decrypts only when using keys which are solely in the hands of our users. With over 2.5 Million registered users internationally, MEGA has become a serious contender in the cloud storage arena after only 2 weeks of operations. MEGA.co.nz was launched on Jan 20, 2013 in New Zealand.</p><p><b>About Instra Corporation Pty. Ltd</b><br> Formed in 1997, Instra Corporation is a privately-owned company based in Auckland, New Zealand and Melbourne, Australia. Instra has expanded its initial domain name business from New Zealand and Australia into a leading, worldwide domain registrar. Instra Corporation supplies over 300 country domains worldwide and has direct accreditations with over 100 registries. Many companies and household brand names from around the world take advantage of Instra\'s unique and sophisticated Domain Management System to actively manage their online intellectual property. Instra has customers in over 160 countries.</p>',
	simg: 'images/blog/vk3.png',
	id: 7
},
{
	h : 'The MEGA Vulnerability Reward Program',
	t : 1359777554,
	c : '<p>Immediately after our launch, our security model and implementation came under intense crossfire, most of which turned out to be damp squibs (<a href="http://www.forbes.com/sites/andygreenberg/2013/01/21/researchers-warn-megas-new-encrypted-cloud-cant-keep-its-megasecurity-promises/" style="color:#d9290b;">Forbes</a> and <a href="http://arstechnica.com/business/2013/01/megabad-a-quick-look-at-the-state-of-megas-encryption/" style="color:#d9290b;" target="_blank">ars technica</a> published two of the worst examples).[READMORE] We have, however, also suffered three direct hits, and we want more! To improve MEGA\'s security, we are offering rewards to anyone reporting a previously unknown security-relevant bug or design flaw.</p><p></p><p><b>What types of bugs qualify?</b><ul><li>Remote code execution on any of our servers (including SQL injection)</li><li>Remote code execution on any client browser (e.g., through XSS)</li><li>Any issue that breaks our cryptographic security model, allowing unauthorized remote access to or manipulation of keys or data</li><li>Any issue that bypasses access control, allowing unauthorized overwriting/destruction of keys or user data</li><li>Any issue that jeopardizes an account\'s data in case the associated e-mail address is compromised</ul><p></p><p><b>What types of bugs do <i>not</i> qualify?</b><ul><li>Any issue requiring active victim participation, such as phishing and social engineering attacks</li><li>Any issue resulting from users choosing weak passwords</li><li>Any issue requiring a very significant number of server requests to exploit</li><li>Any issue requiring a compromised client machine</li><li>Any issue requiring an unsupported or outdated client browser</li><li>Any issue requiring physical data centre access (see below for limited scope scenarios that allow for compromised servers)</li><li>Vulnerabilities in third party-operated services (e.g. resellers)</li><li>Any overloading/resource exhaustion/denial of service-type of attacks</li><li>Anything relying on forged SSL certificates</li><li>Anything requiring extreme computing power (2^60 cryptographic operations+) or a working quantum computer. This includes allegedly predictable random numbers &mdash; you qualify only if you are able to show an actual weakness rather than general conjecture.</li><li>Any bugs that are unrelated to the integrity, availability and confidentiality of user data</li><li>Any claims that reading and understanding our JavaScript code is successful cryptanalysis in itself &mdash; while it may be cryptic, it is <i>not</i> encrypted</li></ul><p></p><p><b>Special scenarios</b></p><p>1. Compromised static CDN node (*.static.mega.co.nz)</p><p>Let\'s assume that you have compromised one of our static content servers and are able to manipulate the files (including all JavaScript code) served from it. Can you leverage that achievement to compromise our security? Disclaimer: Influencing user actions through modified image files, while indeed a potential vulnerability in this context, is excluded!</p><p>2. Compromised user storage node (*.userstorage.mega.co.nz)</p><p>Let\'s assume that you have gained access to one of our storage nodes and are able to manipulate it freely. You know that your victim is about to download a particular file residing on that node, but you don\'t have its key. Can you manipulate its content so that it still downloads without error?</p><p>3. Compromised core infrastructure (*.api.mega.co.nz)</p><p>This is the most extreme scenario. Let\'s assume that you have compromised our operational heart, the API servers. Can you trick API clients into surrendering usable keys for files in accounts that do not have any outgoing shares in them?</p><p><b>Bonus bounty &mdash; earn the maximum reward: Brute-force challenge</b></p><ul><li>Send us the key that decrypts this file: <div class="notice-input-block" style="margin: 0 0 0px 0;"><input value="https://mega.co.nz/#!FV4zmLKQ" onclick="this.select();"></div></li><li>Send us the password encoded in this signup confirmation link: <div class="notice-input-block" style="margin: 0 0 0px 0;"><input value="https://mega.co.nz/#confirmPErZw9BeV5MILaLUyKRg5VTmPfkhpozPvNZ2djiZ9dmf1f8RIgQAi1Vo9l9vlJhidWdzQG1lZ2EuY28ubnoJV2hhdCBpcyB0aGUgcGFzc3dvcmQ_YBiKmiLdNFY" onclick="this.select();"></div></li></ul><p></p><p><b>How much can I earn?</b></p><p>We offer up to EUR 10,000 per bug, depending on its complexity and impact potential.</p><p><b>Who is eligible?</b></p><p>The first finder of the bug. Bugs reported by third parties are typically not considered for a reward.</p><p><b>What is the disclosure policy?</b></p><p>You are free to disclose your finding to the general public after we confirm to you that the issue has been resolved.</p><p><b>Who makes the decision?</b></p><p>The decision whether you qualify and how much you earn is at our discretion, and while we will be fair and generous, you agree to accept our verdict as final.</b></p><p><b>How do I submit my finding?</b></p><p>Send an e-mail to <a href="mailto:bugs@mega.co.nz">bugs@mega.co.nz</a>.</p>',
	simg: 'images/blog/rewards.png',
	id: 6
},
{
	h : 'Cat vs. Mice - 1:0',
	t : 1359690725,
	c : '<p>MEGA as a cloud storage provider is not required to police its users. For example, under the United States DMCA safe harbour, pursuant to 17&nbsp;U.S.C.&nbsp;&sect;&nbsp;512(m), the DMCA safe harbour provisions are not conditioned upon a service provider [READMORE] "monitoring its service or affirmatively seeking facts indicating infringing activity." Section 512 represents a legislative determination that copyright owners must themselves bear the burden of policing for infringing activity &mdash; service providers are under no such duty.</p><p>However, it has come to MEGA\'s attention that there are micro search engines that use our (M) logo and other MEGA branding without authorization. Worse, such site(s) were reported in a highly publicized manner and purport to be globally available search engines, but don\'t have their own DMCA takedown policy or registered DMCA agent.</p><p>In addition, MEGA distinguishes itself from other major cloud storage providers through two important concepts: Privacy and security. Both are utterly eviscerated by making encryption keys public, a fact that is not only self-evident, but also made very clear in the MEGA user interface:</p><p>"<font style="color:#d9290b;">Caution:</font> MEGA\'s cryptographic security model depends on the confidentiality of the keys displayed above. Avoid transmitting them through insecure channels!"</p><p>We apologize to the very small number of users who, due to MEGA\'s cautious legal practices, had some of their authorized files mistakenly taken down. We do believe that by ignoring our advice and making encryption keys public, especially through sites that do not even implement a proper notice-and-takedown protocol, you were not entirely unprepared for negative repercussions.<p><p>In other news...</p><ul><li>Hotmail has solved the blackholing issue within hours - thank you!</li><li>You can now change your password. If you had chosen a weak one during sign-up, it\'s time to rectify that!</li><li>We have added password reset capability for the following scenarios:<ul><li>You are still logged in</li><li>You are not logged in, but your account is empty (password resets with data present are considerably more tricky &mdash; we do not want a breach of your e-mail account to jeopardize the integrity of your files &mdash; and will be addressed at a later stage)</ul></li><li>We have reduced Chrome\'s memory utilisation during the transfer of multi-gigabyte files.</li><li>We are still receiving occasional reports about failing large file transfers. If you observe one and believe that your Internet connection is fine, please get in touch at <a href="mailto:bug@mega.co.nz">bug@mega.co.nz</a>.</li><li>Under Linux, Chrome seems to be less stable than under Windows. We are investigating that.</li></ul>',
	simg: 'images/blog/cat-vs-mouse.png',
	id: 5
},
{
	h : 'MEGA\'s first week - a retrospective',
	t : 1359220339,
	c : '<p>It\'s been seven busy days for us since MEGA went live. As millions of users were hitting 50,000 freshly written and barely tested lines of code and dozens of newly installed servers, teething troubles were inevitable[READMORE] - it took us almost 72 hours to resolve the major bottlenecks, and we would like to apologize to all users who were affected.</p><p>As expected, the public debate about MEGA revolves primarily around our cryptographic security model and can be classified into five categories:</p><ul><li>Actual bugs. Two (an XSS hole and the invalid use of CBC-MAC as a secure hash) were reported by the community so far and fixed swiftly. To all the bright minds going through our amorphous code: Thank you for your efforts! We will make our JavaScript more readable and launch a bug bounty program shortly.</li><li>Design flaws exacerbating the potential impact of weak user passwords. We acknowledge that our current approach is based on the assumption that all of our users choose strong passwords, which is probably a bit naive. We are going to improve the sign-up interface (better user education and rejection of overly weak passwords). We\'ll also reduce the offline password cracking risk for users who do use weak passwords <i>and</i> fall victim to someone intercepting their e-mail or obtaining their user record from our central database.</li><li>Weak random number generation: We have added WebKit\'s crypto.getRandomValues() into the mix and will collect mouse/keyboard timing entropy explicitly before generating the RSA key pair rather than informing the user that we are doing so only <i>after</i> the generation has already started.</li><li>Deduplication - clause 8 of our Terms of Service has caused some confusion and concern. The reality is quite harmless: We deduplicate based on the full encrypted file. That\'s it.</li><li>Polemic in the "if you can break SSL, you can break MEGA" category. No comment.</li></ul><p></p><p>Other issues:</p><ul><li>Within hours after the launch, Hotmail started blackholing our e-mails (silently discarding potential ham is actually quite a rude thing to do!). Apparently, our sudden surge of activity triggered some heuristics designed to guard against spam botnets. Please do not use a Hotmail address to sign up while we\'re working with them to unblock our IP range.</li><li>Uploads would sometimes restart from scratch in case of intermittent network issues. This has been fixed.</li></ul><p></p><p>We would also like to thank everybody who submitted suggestions and feature requests. Our to-do list is growing!</p>',
	simg: 'images/blog/01_week.png',
	id: 4
},
{
	h : 'A word on cryptography',
	t : 1358881032,
	c : '<p>The cloud storage market is dominated by players that do not take advantage of cryptography beyond HTTPS and server-side encryption. Since we set out to improve this rather dissatisfying situation three days ago, some news outlets have made attempts to dismantle our crypto architecture. Frankly, we were not too impressed with the results and would like to address the points that were raised:[READMORE]</p><p><a href="http://arstechnica.com/business/2013/01/megabad-a-quick-look-at-the-state-of-megas-encryption/" style="color:#d9290b;" target="_blank">ars technica: "Megabad: A quick look at the state of Mega\'s encryption"</a></p><p><i>"The key used to encrypt your Mega files and folders is stored on Mega\'s servers, rather than on your local computer."</i></p><p>This is correct - the only key that MEGA requires to be stored on the user side is the login password, in the user\'s brain. This password unlocks the master key, which in turn unlocks the file/folder/share/private keys.</p><p><i>"It is telling that there appears to be no password recovery mechanism anywhere in the Mega or log-on screens, nor any method of changing your password in the user control panel." Because the master AES-128 key is encrypted using your password, remembering the password is vital. Losing it means you don\'t just lose the ability to log on to the service - you lose the ability to decrypt your files, period.</i></p><p>This is correct (and comes as no surprise) - however, this will change in the near future:</p><ul><li>A password change feature will re-encrypt the master key with your new password and update it on our servers</li><li>A password reset mechanism will allow you to log back into your account, with all files being unreadable. Now, if you have any pre-exported file keys, you can import them to regain access to those files. On top of that, you could ask your share peers to send you the share-specific keys, but that\'s it - the remainder of your data appears as binary garbage until you remember your password.</li></ul><p><i>"Without adding entropy, the "random" primes generated by math.random for use as RSA keys are really only pseudo-random and can be guessed."</i></p><p>This is correct - and quite a strange statement to make after conceding that mouse and keyboard entropy are indeed used to enhance Math.random(). We will, however, add a feature that allows the user to add as much entropy manually as he sees fit <i>before</i> proceeding to the key generation.</p><p>[On deduplication] <i>"Whatever the underlying method, the fact that block deduplication exists is a blow against the "see no evil" approach taken by Mega."</i></p><p>Fact #1: Once this feature is activated, chunk MACs will indeed be stored on the server side, but they will of course be encrypted (and we will not use ECB!). Fact #2: MEGA indeed uses deduplication, but it does so based on the entire file post-encryption rather than on blocks pre-encryption. If the same file is uploaded twice, encrypted with the same random 128-bit key, only one copy is stored on the server. Or, if (and this is much more likely!) a file is copied between folders or user accounts through the file manager or the API, all copies point to the same physical file.</p><p></p><p><a href="http://www.forbes.com/sites/andygreenberg/2013/01/21/researchers-warn-megas-new-encrypted-cloud-cant-keep-its-megasecurity-promises/" style="color:#d9290b;" target="_blank">Forbes: Researchers Warn: Mega\'s New Encrypted Cloud Doesn\'t Keep Its Megasecurity Promises</a></p><p><i>"So Mega, or anyone else who gains control of the Mega server sending the crypto algorithms, can turn off that encryption or steal the user\'s private key, which would allow decryption of all past and future uploads."</i></p><p>Correct. Fact #1: Our FAQ states exactly that and warns people that do not trust us to refrain from logging into the site (but they could, in theory, still safely use MEGA through client apps from vendors they trust). Fact #2: Any software maker offering online application updates is able to plant Trojan code into specific targets\' computers, with much more far-reaching consequences.</p><p><i>"If you can break SSL, you can break MEGA."</i></p><p>Yes. But if you can break SSL, you can break a lot of things that are even more interesting than MEGA.</p><p><i>"To make matters worse, Mega\'s SSL server seems to use weak 1024-bit encryption, rather than the 2048-bit encryption considered the minimum standard by many cryptographers for a decade. (This 2004 study, for instance, that declared 1024-bit keys would only be secure until 2006.)"</i></p><p>Fact #1: https://mega.co.nz/ uses 2048-bit encryption. Fact #2: https://*.static.co.nz/ uses 1024-bit encryption. Fact #3: All active content loaded from these "insecure" static servers is integrity-checked by JavaScript code loaded from the "secure" static server, rendering manipulation of the static content or man-in-the-middle attacks ineffective. The only reason why HTTPS is supported/used at all is that most browsers don\'t like making HTTP connections from HTTPS pages. And, using more than 1024 bit would just waste a lot of extra CPU time on those static servers. Fact #4: This has been covered in our FAQ from the beginning.</p><p><i>John Hopkins cryptographer professor Matthew Green says that Mega\'s claims of a Javascript verification system "make no sense." ... "If the Javascript is verifying itself, it\'s like trying to pick yourself up by our bootstraps, which doesn\'t work," says Green. "You need something trusted on the user\'s machine to check the Javascript, and they don\'t have that."</i></p><p>Please do not rely on hearsay, even if you are a cryptographer professor. Instead, go to the actual site and look at the actual code. Fact #1: The JavaScript is not verifying itself. Fact #2: A piece of JavaScript coming from a trusted, 2048-bit HTTPS server is verifying additional pieces of JavaScript coming from untrusted, HTTP/1024-bit HTTPS servers. This basically enables us to host the extremely integrity-sensitive static content on a large number of geographically diverse servers without worrying about security.</p><p><a href="http://www.tobtu.com/megacracker.php" style="color:#d9290b;" target="_blank">MegaCracker</a> An excellent reminder not to use guessable/dictionary passwords, specifically not if your password also serves as the master encryption key to all files that you store on MEGA.',
	simg: 'images/blog/security.png',
	id: 3
},
{
	h: 'Development roadmap',
	t: 1358528771,
	c: '<p>Time flies when building a website, and unfortunately, half of the launch feature list that we envisioned when we started implementing MEGA back in September has now turned into a post-launch development roadmap. These are the essentials that we will work on next:</p>[READMORE]<p>Developer documentation enhancements:</p><ul><li>Properly reformat and comment the JavaScript reference implementation so that it becomes more readable</li><li>Add missing command-specific documentation to the API reference</li></ul><p></p><p>File transfer queue enhancements:</p><ul><li>Vertical resizing</li><li>Drag & Drop to modify transfer sequence</li><li>Multiselect</li><li>Clicking on a pending transfer navigates to/marks the source file or the target folder</li><li>Stop/continue buttons</li></ul><p></p><p>File manager enhancements:</p><ul><li>Re-implement from scratch without underlying third-party UI framework for better performance</li><li>Adaptively eliminate the leftmost file path buttons at the top to maintain visibility of the upload and search buttons (we have a hack in place for this, but it only works in Chrome)</li><li>"Properties" option in the file context menu</li></ul><p></p><p>Collaboration feature enhancements:</p><ul><li>MEGA user-to-user messaging with file attachments, plus external RFC 4880/OpenPGP and S/MIME gateway for secure off-site e-mail communication</li><li>MEGA user-to-user instant messaging</li><li>Exported link enhancements</li><li>Allow for the creation of folder links (with associated crypto key) which then display the folder content live</li><li>Secure unauthenticated delivery web widget</li><li>Allow unauthenticated users to securely deliver files to MEGA users\' inboxes, e.g. to submit very large files to print shops</li></ul><p></p><p>Filesystem enhancements:</p><ul><li>Activate storing all block MACs on the server (encrypted) after an upload to allow for integrity-checked partial reading. Right now, the file has to be downloaded fully to be checked.</li><li>Enable forking encrypted time-stamped delta file support to allow for random writing to existing files with full rollback capability</li></ul><p></p><p>SDK enhancements</p><ul><li>Complete the API documentation</li><li>Provide client libraries in various languages</li></ul><p></p><p>Client applications</p><ul><li>A Windows filesystem mount is currently in beta and will be available shortly</li><li>Linux/MacOS X filesystem mounts</li><li>Mobile access</li><li>Sync tools for all major platforms</li></ul><p></p><p>Integrated on-site applications</p><ul><li>Calendar</li><li>Word processing</li><li>Spreadsheet</li></ul><p></p><p>MEGA as a local "appliance"</p><ul><li>Load a third-party audited version of the MEGA JavaScript files from a machine that you control</li><li>Be immune against new bugs of any kind</li></ul>',
	simg: 'images/blog/under_construction.jpg',
	id: 2
},
{
	h : 'A word on browsers',
	t : 1358470149,
	c : '<p>MEGA pushes the browser to its limits, and these limits vary. While it does work with all major current browsers, there are some weighty feature and performance differences:[READMORE]</p><p><b>Google Chrome</b>: The leading browser, by far. It implements the proposed HTML5 FileSystem API, allowing for fancy features such as recursive folder uploads and efficient downloads. Caveats: Requires user permission to batch-write files after a few unattended completed downloads (for security reasons, and only once per session). Slightly anaemic text rendering.</p><p><b>Internet Explorer 10</b>: A solid, modern browser with blazing JavaScript performance (even exceeding Chrome\'s). However, until Microsoft fixes a memory leak in the Blob saving functionality, you have to close and reopen the MEGA tab every couple of hundred megabytes of inbound file transfer. And, until Microsoft implements disk-based Blobs or Chrome\'s FileWriter API, memory usage for a file download peaks at twice the file\'s size - hardly efficient.</p><p><b>Mozilla Firefox 18</b>: Carefully avoids providing any API that would allow writing files from JavaScript.</p><p><b>Safari 6</b>: No JavaScript file writing, either.</p><p><b>Internet Explorer 9</b>: Lacks all essential features required for MEGA: File I/O, Web Workers, ArrayBuffers, and binary cross-domain HTTP access. Nice text rendering, though.</p><p><b>Opera</b>: No JavaScript file writing and exceedingly slow JavaScript crypto operations.</p><p>Conclusion: If you are planning on using MEGA frequently, there is currently no alternative to using the most advanced browser currently in existence - Google Chrome.</p>',
	simg: 'images/blog/browsers.png',
	id: 1
}];

var bloglimit = 10;

function init_blog()
{
	blog_load();
}

function blog_load()
{
	var blogcontent = '';
	for (var i in blogposts)
	{
		var introtxt = blogposts[i].c.split('[READMORE]');
		introtxt = introtxt[0].replace('<p>','').replace('</p>','');	
		
		introtxt = introtxt.replace(":","");
		introtxt += '...';
		
		if (i < bloglimit)
		{
			blogcontent += '<div class="blog-article">';
			blogcontent += '<h2>' + blogposts[i].h + '</h2>';
			blogcontent += '<span class="blog-date">' + acc_time2date(blogposts[i].t) + '</span><div class="clear"></div>';
			blogcontent += '<div class="blog-short-content">';
			if (blogposts[i].simg) blogcontent += '<img alt="" src="' + staticpath + blogposts[i].simg + '" />';
			blogcontent += '<span>' + introtxt + '</span>';
			blogcontent += '<a href="/#blog_' + blogposts[i].id + '" class="res-list-arrow-link">Read more</a>';
			blogcontent += '</div><div class="clear"></div></div><div class="pro-divider"><div class="pro-divider-bg1"></div><div class="pro-divider-bg2"></div></div>';
		}
	}	
	
	if (blogposts.length > bloglimit)  blogcontent += '<div class="blog-button-block" id="blogolderentries"><div class="blog-button-bg1"></div><div class="blog-button-bg2"></div><a href="#" onclick="blog_more(); return false;" class="blog-button">Older entries</a></div>';
	document.getElementById('blogcontent').innerHTML = blogcontent;
}


function blog_more()
{
	bloglimit=bloglimit+5;
	blog_load();	
}




function init_blogarticle()
{
	var content = false;	
	for(var i in blogposts)
	{	
		if (blogposts[i].id == blogid)
		{
			content = '<h2>' + blogposts[i].h + '</h2>';
			content += '<span class="blog-date">' + acc_time2date(blogposts[i].t) + '</span><div class="clear"></div>';         
			content += blogposts[i].c.replace('[READMORE]','');			
		}		
	}	
	if (!content) document.location.hash = 'blog';
	document.getElementById('blogarticle_post').innerHTML = content;
}

var sbut_f=false;
var sbut_mi =0;
var sbut_di = 0;

function sbut_mouseover()
{	
	sbut_di = 1;
	if (!sbut_f) setTimeout("fadebutton()",5);
}

function fadebutton(init)
{
	var b1 = $('.nstart-button')[0];		
	var m = $('.nstart-mega')[0];
	var t = $('.nstart-txt')[0];	
	var s1 = $('.nstart-shadow')[0];	
	var c1 = $('.nstart-cursor')[0];	
	if ((b1) && (m) && (t) && (s1) && (c1))
	{
		b1.style.width = Math.floor(710+(sbut_mi/20)*50) + 'px';
		b1.style.height = Math.round(150+(sbut_mi/20)*10) + 'px';	
		b1.style.marginTop = Math.ceil(-75-(sbut_mi/20)*5) + 'px';
		b1.style.marginLeft = Math.round(-355-(sbut_mi/20)*15) + 'px';		
		s1.style.marginTop = Math.round(95+(sbut_mi/20)*5) + 'px';	
		c1.style.marginRight = Math.round(-492+(sbut_mi/20)*35) + 'px';	
				
		if (sbut_mi > 11)
		{				
			t.style.opacity = (sbut_mi-15)/5*1;			
			t.style.filter = 'alpha(opacity=' + Math.floor((sbut_mi-15)/5*100) + ')';		
		}
		else
		{			
			m.style.opacity = Math.ceil((1-(sbut_mi)/5*1)*100)/100;
			m.style.filter = 'alpha(opacity=' + Math.floor(100-(sbut_mi)/5*100) + ')';					
		}	
		if ((sbut_di) && (sbut_mi < 20))
		{
			sbut_f=true;
			sbut_mi+=2;
			setTimeout("fadebutton()",20);
		}
		else if ((!sbut_di) && (sbut_mi > 0))
		{
			sbut_f=true;
			sbut_mi=sbut_mi-2;
			setTimeout("fadebutton()",20);		
		}
		else sbut_f=false;
	}
	else sbut_mi=0;
}

function sbut_mouseout()
{	
	sbut_di = 0;
	if (!sbut_f) setTimeout("fadebutton()",5);
}
var draganddrop=false;

function init_nstart()
{
	sbut_f=false;
	sbut_mi =0;
	sbut_di = 0;
	
	if (ul_method)
	{
		document.getElementById('start_uploadbutton').innerHTML = '';		
		//document.getElementById('startswfdiv').innerHTML = '<object data="' + staticpath + 'uploader.swf" id="start_uploaderswf" type="application/x-shockwave-flash" width="0" height="0" ><param name="wmode" value="transparent"><param value="always" name="allowscriptaccess"><param value="all" name="allowNetworking"></object>';	
		//$('#start_uploadbutton').append($('#start_uploaderswf'));
		//document.getElementById('start_uploaderswf').width = '760';
		//document.getElementById('start_uploaderswf').height = '150';
	}
	else
	{	
		var inputhtml ='';	 
		var i =1;
		while (i < 9)
		{
			inputhtml += '<input type="file" style="height:20px; width:760px;" size="113" id="start_fileselect' + i + '" multiple>';
			i++;
		}			
		document.getElementById('start_uploadbutton').innerHTML = inputhtml;		
		if('draggable' in document.createElement('span')) draganddrop=true;										
		var i =1;
		while (i < 9)
		{
			document.getElementById("start_fileselect" + i).addEventListener("change", start_FileSelectHandler, false);		
			i++;
		}
		document.getElementById("pageholder").addEventListener("dragover", FileDragHover, false);
		document.getElementById("pageholder").addEventListener("dragleave", FileDragLeave, false);
		document.getElementById("pageholder").addEventListener("drop", start_FileSelectHandler, false);		
		$('.nstart-inputs')[0].addEventListener("dragover", FileDragHover, false);
		$('.nstart-inputs')[0].addEventListener("dragleave", FileDragLeave, false);
		$('.nstart-inputs')[0].addEventListener("drop", start_FileSelectHandler, false);
	}	
	if (!draganddrop) $('.nstart-bottom-block').addClass('ie');	
	if (u_wasloggedin()) document.getElementById('start_uploadbutton').innerHTML = '';	
	if (ie9) setTimeout("chromeDialog.show()",2000);	
	$('.nstart-txt')[0].style.opacity=0;
	$('.nstart-txt')[0].style.filter = 'alpha(opacity=0)';
}


function sbut_click()
{
	if ((u_wasloggedin()) || (ul_method))
	{
		login_txt = l[420];
		document.location.hash = 'login';
		return false;
	}
}


function start_FileSelectHandler(e) 
{			
	init_anoupload=true;
	FileSelectHandler(e); 	
}


function anoupload()
{
	if (u_wasloggedin())
	{
		login_txt = l[420];
		document.location.hash = 'login';
		return false;
	}
	init_page_fm();	
	termsDialog.show();
	u_storage = localStorage;	
	u_checklogin(
	{
		checkloginresult: function(u_ctx,r)
		{			
			u_type = r;
			u_checked=true;	
			document.getElementById('menu_login').style.display='none';
			document.getElementById('menu_abort').style.display='';	
			loadfm(true);				
		}
	},true);
	
}



function hosting_submit()
{
	loadingDialog.show();	
	api_req([{ a : 'dd', t: 'hosting', company: document.getElementById('hosting_company').value, website: document.getElementById('hosting_website').value, email: document.getElementById('hosting_email').value, country: document.getElementById('hosting_country').value, servers: document.getElementById('hosting_servers').value, offer: document.getElementById('hosting_offer').value }],
	{ 
		callback : function (json,params) 
		{ 	
			loadingDialog.hide();
			done_text1 = l[668];
			done_text2 = l[687];
			parsepage(pages['done']);
			init_done();
		}
	});
}

function about_init()
{



}

function ui_keyprogress(num)
{
	//console.log(num);
	document.getElementById('key_progress').style.width= num + '%';
}


function ui_keycomplete()
{
	init_page();
}

var dlpage_key,dlpage_ph;
var fdl_filename, fdl_filesize, fdl_key, fdl_url, fdl_starttime;
var fdl_file=false;
var dl_import=false;
var dl_attr;
var fdl_queue_var=false;

function dlinfo(ph,key,next)
{
	if (!window.webkitRequestFileSystem)
	{		
		var fw = '500';	
		var fh = '50';
	
		if (dl_method == 1)
		{
			rstr = "<object data=\"https://mega.co.nz/downloader.swf\" id=\"dlswf_" + dlid + "\" type=\"application/x-shockwave-flash\" height=\"" + fh + "\" width=\"" + fw + "\"><param name=\"wmode\" value=\"transparent\"><param value=\"always\" name=\"allowscriptaccess\"><param value=\"all\" name=\"allowNetworking\"><param name=FlashVars value=\"buttonclick=1\" /></object>";
			document.getElementById('dl_page_flash').innerHTML = rstr;
		}
	
		if ((fmconfig['blockchromeDialog'] != '1') && (Ext.userAgent.toLowerCase().replace('crios','chrome').indexOf('chrome') == -1) && (Ext.userAgent.toLowerCase().indexOf('firefox') == -1))
		{
			setTimeout("chromeDialog.show();",3000);
		}
		else if ((fmconfig['blockfirefoxDialog'] != '1') && (Ext.userAgent.toLowerCase().indexOf('firefox') > -1))
		{
			setTimeout("showfirefoxDialog();",3000);
		}
	}
	document.getElementById('overlay').style.display='';
	dlpage_ph 	= ph;
	dlpage_key 	= key;	
	api_req('[{"a":"g","p":"' + ph + '","ssl": "1"}]',
	{
		callback : function (json,params)
		{			
			document.getElementById('overlay').style.display='none';
			document.getElementById('download_password').style.display 		= 'none';
			document.getElementById('download_status').style.display 		= 'none';
			document.getElementById('download_unavailable').style.display 	= 'none';		
			document.getElementById('download_usertermination').style.display 	= 'none';		
		
			if (json[0] == ETOOMANY)
			{
				document.getElementById('download_ut_txt').innerHTML = l[731].replace('[A]','<a href="#terms" style="color:#E53D20;">').replace('[/A]','</a>');			
				document.getElementById('download_usertermination').style.display='';
				document.getElementById('download_page').style.display='none';
			}
			else if ((typeof json[0] == 'number') && (json[0] < 0))
			{
				document.getElementById('download_unavailable').style.display='';
				document.getElementById('download_page').style.display='none';
			}			
			else if (json[0].e == ETEMPUNAVAIL)
			{
				document.getElementById('download_tempunavailable').style.display='';
				document.getElementById('download_page').style.display='none';
			}			
			else if (json[0].d)
			{
				// display takedown info
				document.getElementById('download_takedown').style.display='';					
				document.getElementById('download_page').style.display='none';
				var takedowntxt = '';				
				if (json[0].d.length > 1)
				{					
					for(var i in json[0].d)
					{
						if (d) console.log(i+1);
						if (d) console.log(json[0].d.length);					
						if ((parseInt(i)+1) == json[0].d.length) takedowntxt += ' & ';			
						else if ((parseInt(i) < json[0].d.length) && (i > 0)) takedowntxt += ', ';									
						takedowntxt += $('<div/>').text(json[0].d[i]).html();
					}
				}
				else
				{				
					takedowntxt += $('<div/>').text(json[0].d[0]).html();
				}
				document.getElementById('download_takedowntxt').innerHTML = l[255].replace('[X]',takedowntxt);
			}
			else if (json[0].at)
			{	
				if (key)
				{
					var base64key = key;
					key = base64_to_a32(key);					
					dl_attr = json[0].at;
					var dl_a = base64_to_ab(json[0].at);	
					fdl_file = dec_attr(dl_a,key);
					fdl_filesize = json[0].s;
				}				
				if (fdl_file)
				{
					if (next === 2)
					{
						dlclickimport();
						return false;
					}		
					fdl_queue_var = {
						ph:		ph,						
						key: 	key,
						s: 		json[0].s,
						n: 		fdl_file.n,
						onDownloadProgress: dlprogress,
						onDownloadComplete: dlcomplete,
						onDownloadStart: dlstart,
						onDownloadError: dlerror,
						onBeforeDownloadComplete: function() { }
					};					
					document.getElementById('download_statustxt').innerHTML = l[237];								
					
					
					document.getElementById('download_filename').innerHTML 	= $('<div/>').text(fdl_file.n).html() + ' (' + bytesToSize(json[0].s) + ')';
					document.getElementById('download_filename2').innerHTML = $('<div/>').text(fdl_file.n).html() + ' (' + bytesToSize(json[0].s) + ')';
					document.getElementById('download_fileicon').src = fileicon(fdl_file.n);
					document.getElementById('download_fileicon2').src = fileicon(fdl_file.n);										
					document.getElementById('download_start').style.display = '';
					
					if (next === 1) dlclickstart();				
				}
				else
				{					
					document.getElementById('download_password').style.display = '';					
					if (next) alert('Wrong key');
				}
			}			
			else
			{
				document.getElementById('download_unavailable').style.display='';
				document.getElementById('download_page').style.display='none';
			}
		}
	});
	if (u_type == 3)
	{
		document.getElementById('dl_terms1').style.display = 'none';
		document.getElementById('dl_terms2').style.display = 'none';
	}
	else
	{
		document.getElementById('dl_terms1').style.display = '';
		document.getElementById('dl_terms2').style.display = '';
	}	
	document.getElementById('terms_agree_download1').innerHTML = l[208].replace('[A]','<a href="#terms">').replace('[/A]','</a>');
	document.getElementById('terms_agree_download2').innerHTML = l[208].replace('[A]','<a href="#terms">').replace('[/A]','</a>');
}

function closedlpopup()
{
	document.getElementById('download_overlay').style.display='none';
	document.getElementById('download_popup').style.left = '-500px';		
}

function dl_fm_import()
{
	api_req(
	[{	
		a: 'p',
		t: RootID,
		n: [{ ph: dl_import, t: 0, a: dl_attr, k: a32_to_base64(encrypt_key(u_k_aes,base64_to_a32(dlkey))) }]
	}]);
	dl_import=false;
}

function dlerror(id,error)
{	
	var errorstr='';
	if (error == EOVERQUOTA)
	{
		errorstr = '<a href="javascript:showlimit(\'' + parseInt(fdl_filesize) + '\',false);" style="color:#E73D22;">' + l[17] + '</a>';
		if (!dl_limit_shown) showlimit(fdl_filesize,false);
	}
	else if (error == ETOOMANYCONNECTIONS) errorstr = l[18];
	else if (error == ESID) errorstr = l[19];
	else if (error == ETEMPUNAVAIL) errorstr = l[20];
	else if (error == EBLOCKED) errorstr = l[21];
	else if (error == ENOENT) errorstr = l[22];
	else if (error == EACCESS) errorstr = l[23];
	else if (error == EKEY) errorstr = l[24];
	else if (error == EAGAIN) errorstr = l[233];	
	else errorstr = l[16];
	document.getElementById('download_statustxt').innerHTML = errorstr;
}


function dlclickstart()
{
	if ((u_type !== 3) && (!document.getElementById('download_checkbox1').checked) && (!document.getElementById('download_checkbox2').checked))
	{
		alert(l[214]);
		return false;	
	}
	
	
	
	if (!dl_method) dl_getspace();

	if ((dl_method == 1) && !hasFlash())
	{
		if (isMobile()) alert('Downloading from your device is currently not supported.');
		else document.location.hash = 'flash';
	}	
	else if ((!dl_method) && (dl_quotabytes == 5242880))
	{
	   alert(l[768]);
	}
	else if ((dl_method == 1) && (fdl_filesize > 1024*1024*100))
	{
		if  (Ext.userAgent.toLowerCase().indexOf('firefox') > 0)
		{
			firefoxDialog.dlwarning=true;
			firefoxDialog.show();						
		}
		else
		{			
			chromeDialog.dlwarning=true;
			chromeDialog.show();			
		}
	}
	else
	{
		dl_queue.push(fdl_queue_var);	
		document.getElementById('download_status').style.display= '';
		document.getElementById('download_start').style.display= 'none';		
		if ((!dl_method) && (fdl_filesize > dl_quotabytes)) dl_getspace(0,fdl_filesize);
		else startdownload();
	}
}

function dlclickimport()
{
	if ((u_type !== 3) && (!document.getElementById('download_checkbox1').checked) && (!document.getElementById('download_checkbox2').checked))
	{
		alert(l[214]);
		return false;	
	}

	if ((u_type === false) && u_wasloggedin())
	{
		dl_import=dlid;
		login_txt = l[379];
		document.location.hash = 'login';		
	}	
	else if ((u_type !== 0) && (u_type !== 3)) 
	{
		if (!u_type) u_storage = localStorage;		
		loadingDialog.show();
		u_checklogin(
		{
			checkloginresult: function(u_ctx,r)
			{			
				u_type = r;
				u_checked=true;	
				loadingDialog.hide();
				dldoimport();
			},
		},true);
	}
	else dldoimport();
}

function dldoimport()
{	
	dl_import=dlid;
	if (fmstarted) dl_fm_import();	
	document.location.hash = 'fm';							
	document.title = 'Mega';
}

function dlkeycheck(next)
{

	if ((u_type !== 3) && (!document.getElementById('download_checkbox1').checked) && (!document.getElementById('download_checkbox2').checked))
	{
		alert(l[214]);
		return false;	
	}

	if (document.getElementById('dlkey').value.length != 43)
	{
		alert(l[256] + '\n' + l[257]);	
		document.getElementById('dlkey').value = l[380];
	}
	else
	{
		dlinfo(dlid,document.getElementById('dlkey').value,next);		
	}
}

function dlstartflash()
{
	if (d) console.log('dlstartflash');
	if (document.getElementById('downloaderswf').startdownload)
	{
		fdl_starttime= new Date().getTime(); 
		document.getElementById('downloaderswf').startdownload(fdl_filename.replace(/[/\\:*?<>|]/g,'_'),fdl_filesize,fdl_key,fdl_url);
	}
	else
	{		
		setTimeout("dlstartflash()",100);	
	}
}

function dlprogress(fileid, bytesloaded, bytestotal)
{
	if (dl_limit_shown < new Date().getTime()+20000) bwDialog.close();

	
	if (!dl_queue[dl_queue_num].starttime)
	{	
		dl_queue[dl_queue_num].starttime = new Date().getTime()-100;
		document.getElementById('download_statustxt').innerHTML = l[258];
	}
	document.getElementById('download_progress').style.width = Math.round(bytesloaded/bytestotal*100) + '%';
	document.getElementById('download_perc').innerHTML = Math.round(bytesloaded/bytestotal*100) + '%';
	
	if (fdl_starttime) var eltime = (new Date().getTime()-fdl_starttime)/1000;	
	else var eltime = (new Date().getTime()-dl_queue[dl_queue_num].starttime)/1000;	

	if (eltime && bytesloaded)
	{
		var bps = Math.round(bytesloaded / eltime);
		var retime = (bytestotal-bytesloaded)/bps;
		
		document.getElementById("download_speed").innerHTML 	= bytesToSize(bps,1) +'/s';
		document.getElementById("download_timer").innerHTML 	= secondsToTime(retime);
	}
	
	document.getElementById('download_statustxt').innerHTML = l[258];
}

function dlstart(id,name,filesize)
{ 
	if (dl_legacy_ie) 
	{
		dl_queue[dl_queue_num].starttime = new Date().getTime()-100;
		document.getElementById('download_statustxt').innerHTML = l[258];
	}	 
}

function dlcomplete(id)
{
	document.getElementById('download_progress').style.width = '100%';
	document.getElementById('download_perc').innerHTML = '100%';

	if (dl_method == 1)
	{
		document.getElementById('download_overlay').style.display='';
		document.getElementById('download_popup').style.left = '50%';		
		document.getElementById('dl_page_flash').style.left = '0px';
	}
	document.getElementById("download_statustxt").innerHTML = l[239];
}



function acc_pwforgot()
{
	if ($('#acc_checkbox1')[0].checked)
	{
		$('.change-pass-text')[0].style.display='';
		$('#acc_cpw_current_div')[0].style.display='none';
		$('#acc_cpw_btn')[0].innerHTML = l[708];
	}
	else
	{
		$('.change-pass-text')[0].style.display='none';
		$('#acc_cpw_current_div')[0].style.display='';
		$('#acc_cpw_btn')[0].innerHTML = l[707];
	}
}


function acc_checkpassword(pass)
{
	if ((pass == 'Password') || (pass == ''))
	{
		document.getElementById('acc_pwstatus_text').innerHTML = '';
		document.getElementById('acc_pwstatus').className = 'register-pass-status-block account';			
		return false;
	}
	var strength = checkPassword(pass);	
	if (strength <= 25)
	{
		document.getElementById('acc_pwstatus_text').innerHTML = l[220];
		document.getElementById('acc_pwstatus').className = 'register-pass-status-block account good1';	
	}
	else if (strength <= 50)
	{
		document.getElementById('acc_pwstatus_text').innerHTML = l[221];
		document.getElementById('acc_pwstatus').className = 'register-pass-status-block account good2';
	}
	else if (strength <= 75)
	{
		document.getElementById('acc_pwstatus_text').innerHTML = l[222];
		document.getElementById('acc_pwstatus').className = 'register-pass-status-block account good3';
	}
	else
	{
		document.getElementById('acc_pwstatus_text').innerHTML = l[223];
		document.getElementById('acc_pwstatus').className = 'register-pass-status-block account good1 good4';	
	}
}


function acc_changepw()
{
	if ((!$('#acc_checkbox1')[0].checked) && ($('#acc_cpw_current')[0].value == ''))
	{
		alert(l[719]);
	}	
	else if ($('#acc_cpw_new1')[0].value == '')
	{
		alert(l[720]);
	}
	else if ($('#acc_cpw_new1')[0].value !== $('#acc_cpw_new2')[0].value)
	{
		$('#acc_cpw_new1')[0].value=l[717];
		$('#acc_cpw_new1')[0].type = 'text';
		$('#acc_cpw_new2')[0].value=l[718];
		$('#acc_cpw_new2')[0].type = 'text';
		alert(l[715]);
	}
	else if ((!$('#acc_checkbox1')[0].checked) && ($('#acc_cpw_current')[0].value == $('#acc_cpw_new1')[0].value))
	{
		alert(l[723]);
	}
	else
	{
		loadingDialog.show();
		if ($('#acc_checkbox1')[0].checked) 
		{
			setpwreq($('#acc_cpw_new1')[0].value,{callback: function(res) 
			{
				loadingDialog.hide();				
				if ((typeof res[0] == 'number') && (res[0] < 0)) alert(l[200]);
				else
				{					
					alert(l[721],l[722]);
					$('#acc_cpw_current')[0].type = 'text';
					$('#acc_cpw_current')[0].value = l[716];
					$('#acc_cpw_new1')[0].type = 'text';
					$('#acc_cpw_new1')[0].value=l[717];					
					$('#acc_cpw_new2')[0].type = 'text';
					$('#acc_cpw_new2')[0].value=l[718];
					acc_show('#changepass');
				}
			}});		
		}
		else
		{		
			changepw($('#acc_cpw_current')[0].value,$('#acc_cpw_new1')[0].value,{callback: function(res) 
			{
				loadingDialog.hide();
				if (res[0] == EACCESS)
				{
					$('#acc_cpw_current')[0].type = 'text';
					$('#acc_cpw_current')[0].value = l[716];
					alert(l[724]);
				}
				else if ((typeof res[0] == 'number') && (res[0] < 0)) alert(l[200]);
				else 
				{
					alert(l[725],l[726]);
					$('#acc_cpw_current')[0].type = 'text';
					$('#acc_cpw_current')[0].value = l[716];
					$('#acc_cpw_new1')[0].type = 'text';
					$('#acc_cpw_new1')[0].value=l[717];					
					$('#acc_cpw_new2')[0].type = 'text';
					$('#acc_cpw_new2')[0].value=l[718];
					acc_show('#changepass');
				}				
			}});
		}
	}
	return false;
}



function acc_show(buttonId) 
{
	var blockId = buttonId + '_block';
	if ($(buttonId).attr('class').indexOf('active') != -1) 
	{
		$(buttonId).removeClass('active');
		$(blockId).removeClass('active');
		$('.change-pass-right').removeClass('active');
	} 
	else 
	{
		$(buttonId).addClass('active');
		$(blockId).addClass('active');
		$('.change-pass-right').addClass('active');
	}	
}



function acc_getnextnode (labelid) 
{
	var label = document.getElementById (labelid);
	var select_id = document.getElementById (labelid+"_option");
	label.innerHTML = select_id.options[select_id.selectedIndex].text;
}

function acc_managebw() 
{
	var enableManageButton = document.getElementById('enableManageBW');
	var disableManageButton = document.getElementById('disableManageBW');
	
	if (enableManageButton.style.display == 'block') 
	{
		enableManageButton.style.display = 'none';
		disableManageButton.style.display = 'block';
		$('#manageBlock').addClass('visible');
		acc_user.bwman=true;
		if (d) console.log('submit enable bw management to the server');
		api_req([{  a: 'up', srvratio: 0 }]);
	} 
	else 
	{
		enableManageButton.style.display = 'block';
		disableManageButton.style.display = 'none';
		$('#manageBlock').removeClass('visible');
		acc_user.bwman=false;
		api_req([{  a: 'up', srvratio: -1 }]);
	}
}

function acc_createvoucher()
{
	document.getElementById('overlay').style.display='';	
	api_req([{ 
	  a: 'uavi',
	  d: document.getElementById('acc_vouchercreate_select_option').value,
	  n: document.getElementById('acc_voucherquantity').value,
	  c: 'EUR',	 
	}],
	{ 
		callback : function (json,params)
		{	
			document.getElementById('overlay').style.display='none';
			if ((typeof json[0] == 'number') && (json[0] < 0)) Ext.Msg.alert(l[135],l[200])			
			else load_acc(true);							
		}
	});
}

function acc_redeemvoucher()
{
	document.getElementById('overlay').style.display='';	
	api_req([{ 
	  a: 'uavr',
	  v: document.getElementById('acc_vcode').value
	}],
	{ 
		callback : function (json,params)
		{	
			document.getElementById('overlay').style.display='none';
			document.getElementById('acc_vcode').value ='';
			
			if (json[0] == -11) alert(l[714]);
			else if ((typeof json[0] == 'number') && (json[0] < 0)) Ext.Msg.alert(l[135],l[473]);
			else
			{				
				load_acc(true);				
				acc_redeemed();
			}
		}
	});
}






function account_setmenu(top)
{
	var ar = ['acc_accountdetails','acc_transfer_div','acc_voucher_div','acc_sessions_div','acc_purchases_div','acc_transactions_div'];	
	var ar2 = ['a_account','a_account_transfer','a_account_vouchers','a_account_session','a_account_purchase','a_account_transaction'];
	for (var i in ar)
	{	
		if (document.getElementById(ar[i]).style.display == '')
		{
			var t = document.getElementById(ar[i]).offsetTop;
			var h = document.getElementById(ar[i]).offsetHeight;		
			if ((top >= t-100) && (top <= (t+h+100))) account_menu(ar2[i]);		
		}
	}
}

var account_moving=false;
function account_domovemenu(t,b,c,d)
{
	if (page == 'account')
	{
		account_moving=true;
		var top = Math.round(easeOutCubic (t, b, c, d));
		document.getElementById('account_leftmenu').style.top = top + 'px';		
		account_setmenu(top);	
		t++;	
		if (t < d) setTimeout("account_domovemenu(" + t + "," + b + "," + c + "," + d + ")",5);
		else account_moving=false;
	}
}

function account_menu(el)
{
	document.getElementById('a_account').className = 'account-link';
	document.getElementById('a_account_purchase').className = 'account-link';
	document.getElementById('a_account_session').className = 'account-link';    
	document.getElementById('a_account_vouchers').className = 'account-link';
	document.getElementById('a_account_transfer').className = 'account-link';
	document.getElementById('a_account_transaction').className = 'account-link';	
	document.getElementById(el).className = 'account-link selected';
}


var account_menutimer=false;
function account_movemenu()
{
	if (page == 'account')
	{	
		account_menutimer=true;
		var currenttop = document.getElementById('account_leftmenu').style.top;
		currenttop = currenttop.replace('px','');	
		if (currenttop == '') currenttop = 0;
		currenttop = parseInt(currenttop);		
		if ($('body').scrollTop() > 110)
		{
			var top = $('body').scrollTop()-120;
			if (top < 0) top =0;			
			if ((currenttop != top) && (!account_moving)) account_domovemenu(0,currenttop,(top-currenttop),20);		
		}
		else if ((currenttop != 0) && (!account_moving)) account_domovemenu(0,currenttop,(0-currenttop),20);				
		setTimeout("account_movemenu()",10);
	}	
	else account_menutimer=false;		
}


var voucherStore,transactionStore,sessionStore,purchaseStore;
var acc_bwlimit = 0;
var acc_bwlimitchange = 0;
var acc_loaded = 0;
var acc_user;
var acc_tindex = [];

Ext.define('VoucherFS', {
    extend: 'Ext.data.Model',
    fields: [	
	{name: 'id',  			type: 'string' },
    {name: 'amount',  		type: 'string'},
    {name: 'currency',  	type: 'string'},
	{name: 'iss', 			type: 'string'},
	{name: 'date', 			type: 'Number'},
    {name: 'code',  		type: 'string'},
	{name: 'redeemed',  	type: 'Number'},
	{name: 'redeem_email',	type: 'string'},
	{name: 'cancelled',  	type: 'Number'},
	{name: 'revoked',  		type: 'Number'}
	]
});

Ext.define('TransactionFS', {
    extend: 'Ext.data.Model',
    fields: [	
	{name: 'id',  			type: 'string' },
    {name: 'date',  		type: 'Number'},
    {name: 'amount',  		type: 'Number'},
	{name: 'item',  		type: 'string'}	
	]
});

Ext.define('PurchaseFS', {
    extend: 'Ext.data.Model',
    fields: [	
	{name: 'id',  			type: 'string' },
    {name: 'amount',  		type: 'string'},
    {name: 'date',  		type: 'Number'},
	{name: 'item', 			type: 'string'},
	{name: 'paymentmethod',	type: 'string'}
	]
});

Ext.define('SessionFS', {
    extend: 'Ext.data.Model',
    fields: [	
	{name: 'id',  			type: 'Number' },
    {name: 'date',  		type: 'Number'},
    {name: 'useragent',  	type: 'string'},
	{name: 'country', 		type: 'string'},
	{name: 'current', 		type: 'Boolean'},
	{name: 'ip', 			type: 'string'}
	]
});

function acc_init()
{ 
  if (!account_menutimer)
  {  
	account_movemenu();
	account_menu('a_account');  
  }
  document.getElementById('a_account').style.display = '';  
  document.getElementById('a_account_session').style.display = '';  
  document.getElementById('acc_purchases_div').style.display = 'none';
  document.getElementById('acc_transactions_div').style.display = 'none';
  if (Ext.userAgent.toLowerCase().indexOf('chrome') > 0)
  {
	$('html')[0].style.height   = 'auto';
	$('html')[0].style.overflow = 'auto'; 
  }
  var u = acc_user;
  acc_loaded = new Date().getTime();
  var servbwperc = Math.round(u.servbw_used / u.bw * 100);
  var downbwperc = Math.round(u.downbw_used / u.bw * 100);
  document.getElementById('account-serving-perc').innerHTML = servbwperc + '<span>%</span>';
  document.getElementById('account-download-perc').innerHTML = downbwperc + '<span>%</span>';  
  document.getElementById('account-serving-bg').style.width = servbwperc + '%';
  document.getElementById('account-download-bg').style.width = downbwperc + '%';
  var stperc = Math.round(u.space_used / u.space * 100);
  document.getElementById('storagespacecircle').className = 'storage-rpogress percents-' + stperc;	
  document.getElementById('storagespaceperc').innerHTML = stperc + '%';
  document.getElementById('stspace_used1').innerHTML = $('<div/>').text(u.space_used).html();
  document.getElementById('stspace1').innerHTML = $('<div/>').text(u.space).html();
  if (lang == 'fr')
  {
	document.getElementById('stspace_used2').innerHTML = 'Go';
	document.getElementById('stspace2').innerHTML = 'Go';  
	document.getElementById('acc_kbs').innerHTML = 'Ko/s';
  }
  else
  {
	document.getElementById('stspace_used2').innerHTML = 'GB';
	document.getElementById('stspace2').innerHTML = 'GB';  
	document.getElementById('acc_kbs').innerHTML = 'KB/s';
  }
  document.getElementById('storagespaceprogress').style.width = stperc + '%';
  document.getElementById('acc_bal').innerHTML = '&euro;0.00';
  if (u.balance.length > 0) document.getElementById('acc_bal').innerHTML = '&euro;' + $('<div/>').text(u.balance[0][0]).html();
  if (u.reseller)
  {
	var selectbox = '<select id="acc_vouchercreate_select_option" name="custom" onChange="GetNextNode (\'acc_vouchercreate_select\')">';		
	var prices = [];
	for (var i in u.prices) prices.push(u.prices[i][0]);	
	prices.sort(function(a,b) { return (a-b) });
	
	for (var i in prices) selectbox += '<option value="'+ $('<div/>').text(prices[i]).html() +'">&euro;' + $('<div/>').text(prices[i]).html() + ' voucher for &euro;' + Math.round(prices[i]*(100-u.reseller[0]))/100 + '</option>';	
	selectbox += '</select>';	
	document.getElementById('acc_vouchercreate_select_div').innerHTML = selectbox; 
	document.getElementById('acc_voucherredeem').style.display='none';
	document.getElementById('acc_vouchercreate').style.display='';  
	document.getElementById('acc_voucher_div').style.display='';
	document.getElementById('a_account_vouchers').style.display = '';
  }
  else
  {
	document.getElementById('acc_voucher_div').style.display='';
	document.getElementById('acc_voucherredeem').style.display='';
	document.getElementById('acc_vouchercreate').style.display='none';  
	document.getElementById('a_account_vouchers').style.display = '';
  }
  if (u.type == 0)
  {
	document.getElementById('accounttypetxt').innerHTML = l[435];	
	document.getElementById('accounttypeicon').className = 'account-type-icon chest-free';	
	document.getElementById('acc_subtype1').innerHTML = l[435];
	document.getElementById('acc_subtype2').innerHTML = l[745];
  }
  else if (u.type == 1)
  {
	document.getElementById('accounttypetxt').innerHTML = 'PRO I';
	document.getElementById('accounttypeicon').className = 'account-type-icon chest-i';
  }
  else if (u.type == 2)
  {
	document.getElementById('accounttypetxt').innerHTML = 'PRO II';
	document.getElementById('accounttypeicon').className = 'account-type-icon chest-ii';
  }
  else if (u.type == 3)
  {
	document.getElementById('accounttypetxt').innerHTML = 'PRO III';
	document.getElementById('accounttypeicon').className = 'account-type-icon chest-iii';
  }
  document.getElementById('acc_stypeh').innerHTML = l[746] + ':';
  if (u.type > 0)
  {
	if (u.stype == 'S')
	{
		document.getElementById('acc_stypeh').innerHTML = 'Subscription type:';
		// subscription
		if (u.stime == 'W') document.getElementById('acc_subtype1').innerHTML = l[747];		
		else if (u.stime == 'M') document.getElementById('acc_subtype1').innerHTML = l[748];		
		else if (u.stime == 'Y') document.getElementById('acc_subtype1').innerHTML = l[749];								
		document.getElementById('acc_subtype2').innerHTML = l[750] + acc_time2date(u.scycle);	
	}
	else if (u.stype == 'O')
	{
		// one-time
		document.getElementById('acc_subtype1').innerHTML = l[751];
		document.getElementById('acc_subtype2').innerHTML = l[474] + ' ' + acc_time2date(u.expiry);			
	}	
	document.getElementById('acc_bwman').style.display='';
  }
  else
  {
	document.getElementById('acc_bwman').style.display='none';
  }
  
  // acc_subtype2
  var enableManageButton = document.getElementById('enableManageBW');
  var disableManageButton = document.getElementById('disableManageBW');
  
  if (u.bwman) 
  {
	enableManageButton.style.display = 'none';
	disableManageButton.style.display = 'block';
	$('#manageBlock').addClass('visible');
  } 
  else 
  {
	enableManageButton.style.display = 'block';
	disableManageButton.style.display = 'none';
	$('#manageBlock').removeClass('visible');
  }

  $("#slider-range").slider(
  {
	 range: "min",
	 min: 0,
	 max: 100,
	 value: u.servbw_limit,
	 slide: function( event, ui ) 
	 {	
	   $( ".account-counter-num" ).html( ui.value );			   
	   acc_bwlimit = ui.value;
	   acc_bwlimitchange = new Date().getTime();
	   setTimeout("acc_slideupdate()",300);
	 }
  });
  $( ".account-counter-num" ).html($( "#slider-range" ).slider( "value" ));
  document.getElementById('overlay').style.display='none';  
  document.getElementById('a_account_transfer').style.display = '';
  if (ul_method == 1) 
  {		
	$('#acc_transfer_div').fadeTo(400,0.4);
	$('#acc_transfer_div').click(function()
	{
		chromeDialog.show();		
	});
  }  
  var select = $( "#minsettings" );  
  $( "#slider-range-max" ).slider(
  {
	min: 1,
    max: 6,
    range: "min",
    value: ul_maxSlots,
    slide: function( event, ui ) 
	{
		ul_maxSlots = ui.value;
		localStorage.ul_maxSlots = ui.value;
	}
  });	
  $( "#minsettings" ).change(function() 
  {
	$( "#slider-range-max" ).slider( "value", this.selectedIndex + 1 );
  });
	
  var select = $( "#minnumber" );
  $( "#slider-range-max2" ).slider(
  {
	min: 1,
    max: 6,
    range: "min",
    value: dl_maxSlots,
    slide: function( event, ui ) 
	{
		dl_maxSlots = ui.value;
        localStorage.dl_maxSlots = ui.value;
    }
  });
  $( "#minnumber" ).change(function() 
  {
    $( "#slider-range-max2" ).slider( "value", this.selectedIndex + 1 );
  });
  if ((ul_maxSpeed != 0) && (ul_maxSpeed != -1)) $('#acc_ul_kb')[0].value = Math.floor(ul_maxSpeed/1024);
  else $('#acc_ul_kb')[0].value=50;
  acc_render_ulspeed();
  acc_setskip(ul_skipIdentical);  
  if (!ssl_needed())
  {
	  document.getElementById('acc_ssl_panel').style.display='';
	  if (use_ssl == 0)
	  {
			$('#acc_rad7_div')[0].className = 'radioOn';
			$('#acc_rad7')[0].className = 'radioOn';		  
	  }  
	  else
	  {
			$('#acc_rad6_div')[0].className = 'radioOn';
			$('#acc_rad6')[0].className = 'radioOn';	
	  }
   }
   else document.getElementById('acc_ssl_panel').style.display='none';
}


function acc_setskip(s)
{
	if(s)
	{
		$('#acc_rad4_div')[0].className = 'radioOn';
		$('#acc_rad4')[0].className = 'radioOn';
		$('#acc_rad5_div')[0].className = 'radioOff';
		$('#acc_rad5')[0].className = 'radioOff';
		ul_skipIdentical =s;
	}
	else
	{
		$('#acc_rad4_div')[0].className = 'radioOff';
		$('#acc_rad4')[0].className = 'radioOff';
		$('#acc_rad5_div')[0].className = 'radioOn';
		$('#acc_rad5')[0].className = 'radioOn';
		ul_skipIdentical =s;
	}
	localStorage.ul_skipIdentical=s;
}



function acc_setssl(s)
{
	if (d) console.log(s);

	if(s)
	{
		$('#acc_rad6_div')[0].className = 'radioOn';
		$('#acc_rad6')[0].className = 'radioOn';
		$('#acc_rad7_div')[0].className = 'radioOff';
		$('#acc_rad7')[0].className = 'radioOff';
		use_ssl =s;
	}
	else
	{
		$('#acc_rad6_div')[0].className = 'radioOff';
		$('#acc_rad6')[0].className = 'radioOff';
		$('#acc_rad7_div')[0].className = 'radioOn';
		$('#acc_rad7')[0].className = 'radioOn';
	    use_ssl = s;
	}
	use_ssl = s;
	localStorage.use_ssl=s;
}

function acc_setulspeed(s)
{
	if ((s != 0) && (s != -1))
	{	
		if (!(s = parseInt($('#acc_ul_kb')[0].value))) s=2;
		s = s*1024;
		if (s < 2048) s = 2048;	
	}
	localStorage.ul_maxSpeed=s;
	ul_maxSpeed=s;
	acc_render_ulspeed();	
}



function acc_render_ulspeed()
{
	var i=1;
	while(i < 4)
	{		
		$('#acc_rad' + i + '_div')[0].className = 'radioOff';
		$('#acc_rad' + i)[0].className = 'radioOff';
		i++;
	}		
	var a =0;		
	if (ul_maxSpeed == -1) a=2;
	else if (ul_maxSpeed == 0) a=1;
	else a=3;	
	$('#acc_rad' + a + '_div')[0].className = 'radioOn';
	$('#acc_rad' + a)[0].className = 'radioOn';	
}


function acc_slideupdate()
{
	if ((new Date().getTime()-299) > acc_bwlimitchange)
	{
		acc_bwlimitchange=0;
		acc_user.servbw_limit = acc_bwlimit;
		if (d) console.log('submit new slide value to the server ' + acc_bwlimit);
		api_req([{  a: 'up', srvratio: acc_bwlimit }]);		
	}
}

function load_acc(force)
{     
  document.getElementById('a_account').style.display = 'none';  
  document.getElementById('a_account_transfer').style.display = 'none';  
  document.getElementById('a_account_session').style.display = 'none';    
  document.getElementById('a_account_vouchers').style.display = 'none';
  document.getElementById('a_account_purchase').style.display = 'none';
  document.getElementById('a_account_transaction').style.display = 'none';
  
  
  document.getElementById('account_vouchers2').style.display='none';
  document.getElementById('account_purchase').style.display='none';
  document.getElementById('account_transactions').style.display='none';
  
  
  
  
  if (((new Date().getTime()-360000) > acc_loaded) || force)
  {
	document.getElementById('acc_page').style.display='none';
	if (!force) loadingDialog.show();
	api_req([
	{ 
		a: 'uq',
		strg: 1,
		xfer: 1,
		pro: 1,
	},
	{ a: 'uavl' },
	{ a: 'utt'  },
	{ a: 'utp'  },
	{ a: 'usl'	}
	],
	{ 
		callback : function (json,params)
		{				
			if (json == -500) 	
			{
				logout();
				return false;
			}
		
			if ((typeof json[0] == 'number') && (json[0] < 0))
			{	
				alert(l[200]);			
			}
			else
			{
				if (d) console.log(json);		
				var bwman = true;
				if (typeof json[0].srvratio == 'undefined') bwman = false;
				
				//json[0].cstrg = 1024*1024*1024*10000;				
				//json[0].csxfer = 1024*1024*1024*10000;				
				//json[0].caxfer = 1024*1024*1024*15000;
				
				acc_user = 
				{
					type: json[0].utype,
					stype: json[0].stype,
					stime: json[0].scycle,
					scycle: json[0].snext,	
					expiry: json[0].suntil,	
					space: Math.round(json[0].mstrg/1024/1024/1024),					
					space_used: Math.round(json[0].cstrg/1024/1024/1024),	
					bw: Math.round(json[0].mxfer/1024/1024/1024),
					servbw_used: Math.round(json[0].csxfer/1024/1024/1024),
					downbw_used: Math.round(json[0].caxfer/1024/1024/1024),	
					bwman: bwman,
					servbw_limit: json[0].srvratio,
					balance: json[0].balance,
					reseller: json[0].reseller,					
					prices: json[0].prices,
				}	  
				acc_init();
			}			
			if (!((typeof json[1] == 'number') && (json[1] < 0)))
			{	
				var varr 	= json[1][0];
				var tarr 	= json[1][1];
				for (var i in tarr) acc_tindex[tarr[i][0]]=tarr[i];		
				voucherStore = Ext.create('Ext.data.Store', 
				{
					model: 'VoucherFS',
					sorters: 
					[{
						property: 'date',
						direction: 'DESC'
					}]
				});				
				for (var i in varr)				
				{									
					var redeemed = 0;
					var cancelled = 0;
					var revoked = 0;
					var redeem_email = '';					
					if (varr[i].rdm)
					{
						redeemed = acc_tindex[varr[i].rdm][1];
						redeemed_email = acc_tindex[varr[i].rdm][2];					
					}					
					if (varr[i].xl) cancelled = acc_tindex[varr[i].xl][1];					
					if (varr[i].rvk) revoked = acc_tindex[varr[i].rvk][1];
					voucherStore.add(
					{
						id: varr[i].id,
						amount: varr[i].g,
						currency: varr[i].c,
						iss: varr[i].iss,
						date: acc_tindex[varr[i].iss][1],
						code: varr[i].v,
						redeemed: redeemed,
						redeem_email: redeem_email,
						cancelled: cancelled,
						revoked: revoked						
					});					
				}
				if (voucherStore.count() > 0) acc_loadvouchers();
			}
			if (!((typeof json[2] == 'number') && (json[2] < 0)))
			{			
				var transactions = json[2];								
				if (transactions.length == 0) document.getElementById('acc_transactions_div').style.display='none';		
				else
				{					
					document.getElementById('a_account_transaction').style.display = '';
					transactionStore = Ext.create('Ext.data.Store', 
					{
						model: 'TransactionFS',
						sorters: 
						[{
							property: 'date',
							direction: 'DESC'
						}]
					});
					for (var i in transactions)
					{
						transactionStore.add(
						{
							id: transactions[i][0],
							date: transactions[i][1],
							amount: transactions[i][2]
						});						
					}
					if (transactionStore.count() > 0)  acc_loadtransactions();
				}			
			}			
			if (!((typeof json[3] == 'number') && (json[3] < 0)))
			{
				var purchases = json[3];		
				if (d) console.log('purchases:');
				if (d) console.log(purchases);				
				if (purchases.length == 0) document.getElementById('acc_purchases_div').style.display='none';
				else
				{					
					
					purchaseStore = Ext.create('Ext.data.Store', 
					{
						model: 'PurchaseFS',
						sorters: 
						[{
							property: 'date',
							direction: 'DESC'
						}]
					});
					for (var i in purchases)
					{
						var paymentmethod = 'Voucher';
						if (purchases[i][4] == 1) paymentmethod = 'PayPal';
						
						purchaseStore.add(
						{
							id: purchases[i][0],
							date: purchases[i][1],
							amount: purchases[i][2],
							item: 'Pro',
							paymentmethod: paymentmethod
						});						
					}
					if (purchaseStore.count() > 0) acc_loadpurchases();					
				}									
			}
			if (!((typeof json[4] == 'number') && (json[4] < 0)))
			{
				var sessions = json[4];		
				if (d) console.log('sessions:');
				if (d) console.log(sessions);				
				if (sessions.length == 0) document.getElementById('acc_sessions_div').style.display='none';		
				else
				{	
					sessionStore = Ext.create('Ext.data.Store', 
					{
						model: 'SessionFS',
						sorters: 
						[{
							property: 'date',
							direction: 'DESC'
						}]
					});				
					for (var i in sessions)
					{
						sessionStore.add(
						{
							id: i,
							date: sessions[i][1],
							useragent: sessions[i][2],
							country: sessions[i][4],
							current: sessions[i][5],
							ip: sessions[i][3]
						});						
					}
					if (sessionStore.count() > 0) acc_loadsessions();
				}									
			}			
			document.getElementById('acc_page').style.display='';
			loadingDialog.hide();
		}
	});
	}
	else
	{
		acc_init();
		if (voucherStore) 
		{
			voucherStore.clearFilter();
			if (voucherStore.count() > 0) acc_loadvouchers();
		}
		if (sessionStore)
		{
			sessionStore.clearFilter();
			if (sessionStore.count() > 0) acc_loadsessions();
		}
		if (transactionStore)
		{
			transactionStore.clearFilter();
			if (transactionStore.count() > 0) acc_loadtransactions();
		}
		if (purchaseStore)
		{
			purchaseStore.clearFilter();
			if (purchaseStore.count() > 0) acc_loadpurchases();
		}
	}
}


function acc_redeemed()
{
	Ext.Msg.show(
	{
		 title:l[712],
		 msg: l[713],
		 buttons: Ext.Msg.YESNO,
		 fn: function (res)
		 {
			if (res == 'yes')
			{
				document.location.hash = 'pro';
				document.title = 'MEGA';
			}		 
		 }
	});
}


function acc_loadpurchases()
{
	var max = document.getElementById('select_txt2').value;	
	var purchasehtml = '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="account-table"> <tbody> <tr>';
	purchasehtml += '<th scope="col">' + l[475] + '</th>';
	purchasehtml += '<th scope="col">' + l[476] + '</th>';
	purchasehtml += '<th scope="col">' + l[477] + '</th>';
	purchasehtml += '<th scope="col">' + l[478] + '</th>';	
	purchaseStore.sort("date","DESC");
	var i =0;
	purchaseStore.each( function (obj) 
	{ 	
		i++;
		if (i > max) return false;
		else
		{	
			var amount = obj.get('amount');
			if (amount < 0)
			{
				amount = amount*-1;
				amount = '-&euro;' + $('<div/>').text(amount).html();			
			}
			else amount = '&euro;' + $('<div/>').text(amount).html();
			purchasehtml += '<tr><td>' + time2date(obj.get('date')) + '</td><td>' + $('<div/>').text(obj.get('item')).html() + '</td><td>' + amount + '<td>' + $('<div/>').text(obj.get('paymentmethod')).html() + '</td></tr>';
		}
	});
	purchasehtml +='</tbody></table>';	
	document.getElementById('acc_purchases').innerHTML = purchasehtml;
	if (i > 0)
	{
		document.getElementById('acc_purchases_div').style.display = '';
		document.getElementById('a_account_purchase').style.display = '';
		document.getElementById('account_purchase').style.display='';	
	}
	else
	{
		document.getElementById('acc_purchases_div').style.display = 'none';
		document.getElementById('a_account_purchase').style.display = 'none';
		document.getElementById('account_purchase').style.display='none';		
	}
}


function acc_loadsessions()
{
	var max = document.getElementById('select_txt1_option').value;	
	var sessionhtml = '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="account-table"> <tbody> <tr>';
	sessionhtml += '<th scope="col">' + l[479] + '</th>';
	sessionhtml += '<th scope="col">' + l[480] + '</th>';
	sessionhtml += '<th scope="col">' + l[481] + '</th>';
	sessionhtml += '<th scope="col">' + l[482] + '</th>';	
	sessionStore.sort("date","DESC");
	var i =0;
	sessionStore.each( function (obj) 
	{ 	
		i++;
		if (i > max) return false;
		else
		{	
			var recentactivity = l[483];
			if (!obj.get('current')) recentactivity = time2date(obj.get('date'));
			
			var browser = browserdetails(obj.get('useragent'));
			
			if (d) console.log(browser);
			
			var country = countrydetails(obj.get('country'));
			
			sessionhtml += '<tr><td><img alt="" src="' + staticpath + 'images/browser/' + browser.icon +'" >' + browser.name + '</td><td>' + $('<div/>').text(obj.get('ip').replace("::ffff:","")).html() + '<td><img alt="" src="' + staticpath + 'images/flags/' + country.icon +'" >' + country.name + '</td><td>' + recentactivity + '</td></tr>';
		}
	});
	sessionhtml +='</tbody></table>';	
	if (i > 0)
	{
		document.getElementById('acc_sessions').innerHTML = sessionhtml;
		document.getElementById('acc_sessions_div').style.display = '';
		document.getElementById('a_account_session').style.display = '';
	}
	else
	{		
		document.getElementById('acc_sessions_div').style.display = 'none';
		document.getElementById('a_account_session').style.display = 'none';	
	}
}


function acc_loadtransactions()
{
	var max = document.getElementById('select_txt5_option').value;	
	var transactionhtml = '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="account-table"> <tbody> <tr>';
	transactionhtml += '<th scope="col">' + l[475] + '</th>';
	transactionhtml += '<th scope="col">' + l[484] + '</th>';
	transactionhtml += '<th scope="col">' + l[485] + '</th>';
	transactionhtml += '<th scope="col">' + l[486] + '</th>';
	transactionhtml += '<th scope="col">' + l[476] + '</th>';	
	transactionStore.sort("date","DESC");
	var i =0;
	transactionStore.each( function (obj) 
	{ 	
		i++;
		if (i > max) return false;
		else
		{	
			var amount = obj.get('amount');
			var credit = '';
			var debit = '';
			if (amount < 0)
			{
				amount = amount*-1;
				debit = '-&euro;' + $('<div/>').text(amount).html();			
			}
			else credit = '&euro;' + $('<div/>').text(amount).html();
			
			transactionhtml += '<tr><td>' + time2date(obj.get('date')) + '</td><td>' + $('<div/>').text(obj.get('id')).html() + '</td><td>' + credit + '</td><td>' + debit + '</td><td>' + $('<div/>').text(obj.get('item')).html() + '</td></tr>';
		}
	});
	transactionhtml +='</tbody></table>';	
	document.getElementById('acc_transactions').innerHTML = transactionhtml;
	
	if (i > 0)
	{
		document.getElementById('acc_transactions_div').style.display = '';
		document.getElementById('a_account_transaction').style.display = '';
		document.getElementById('account_transactions').style.display='';	
	}
	else
	{
		document.getElementById('acc_transactions_div').style.display = 'none';
		document.getElementById('a_account_transaction').style.display = 'none';
		document.getElementById('account_transactions').style.display='none';		
	}
	
	
}


function acc_loadvouchers()
{
	var max 	= document.getElementById('select_txt4_option').value;
	var type 	= document.getElementById('select_txt3_option').value;	
	var voucherhtml = '<table width="100%" border="0" cellspacing="0" cellpadding="0" class="account-table"> <tbody> <tr>';
	voucherhtml += '<th scope="col">' + l[475] + '</th>';
	voucherhtml += '<th scope="col">' + l[487] + '</th>';
	voucherhtml += '<th scope="col">' + l[477] + '</th>';
	voucherhtml += '<th scope="col">' + l[488] + '</th>';
	voucherhtml += '</tr>';
	voucherStore.filterBy(function(record,id) 
	{
		if (type == 0) return true;
		else if (type == 1)
		{
			// unused
			if ((record.get('redeemed') == 0) && (record.get('cancelled') == 0) && (record.get('revoked') == 0)) return true;
		}
		else if (type == 2)
		{
			// redeemed
			if ((record.get('redeemed') > 0) && (record.get('cancelled') == 0) && (record.get('revoked') == 0)) return true;
		}
		else if (type == 3)
		{
			// cancelled
			if (record.get('cancelled') > 0) return true;
		}
		else if (type == 4)
		{
			// revoked
			if ((record.get('revoked') > 0) && (record.get('cancelled') > 0)) return true;
		}	
	});				
	voucherStore.sort("date","DESC");
	var i =0;
	voucherStore.each( function (obj) 
	{ 	
		i++;
		if (i > max) return false;
		else
		{	
			var status = l[489];
			if ((obj.get('redeemed') > 0) && (obj.get('cancelled') == 0) && (obj.get('revoked') == 0)) status = l[490] + ' ' + time2date(obj.get('redeemed'));
			else if ((obj.get('revoked') > 0) && (obj.get('cancelled') > 0)) status = l[491] + ' ' + time2date(obj.get('revoked'));
			else if (obj.get('cancelled') > 0) status = l[492] + ' ' + time2date(obj.get('cancelled'));			
			voucherhtml += '<tr><td>' + time2date(obj.get('date')) + '</td><td>' + $('<div/>').text(obj.get('code')).html() + '</td><td>&euro;' + $('<div/>').text(obj.get('amount')).html() + '</td><td>' + $('<div/>').text(status).html() + '</td></tr>';
		}		
	});			
	voucherhtml +='</tbody></table>';
	document.getElementById('acc_vouchers').innerHTML = voucherhtml;
	document.getElementById('a_account_vouchers').style.display = '';
	document.getElementById('account_vouchers2').style.display='';
}

var dev_menutimer=false;
var dev_moving=false;





function dev_domovemenu(t,b,c,d)
{
	if (page == 'developers')
	{
		dev_moving=true;
		var top = Math.round(easeOutCubic (t, b, c, d));
		document.getElementById('dev_leftmenu').style.top = top + 'px';		
		dev_setmenu(top);	
		t++;	
		if (t < d) setTimeout("dev_domovemenu(" + t + "," + b + "," + c + "," + d + ")",5);
		else dev_moving=false;
	}
}





function dev_movemenu()
{
	if (page == 'developers')
	{	
		dev_menutimer=true;
		var currenttop = document.getElementById('dev_leftmenu').style.top;
		currenttop = currenttop.replace('px','');	
		if (currenttop == '') currenttop = 0;
		currenttop = parseInt(currenttop);		
		if ($('body').scrollTop() > 110)
		{
			var top = $('body').scrollTop()-120;
			if (top < 0) top =0;			
			if ((currenttop != top) && (!dev_moving)) dev_domovemenu(0,currenttop,(top-currenttop),20);		
		}
		else if ((currenttop != 0) && (!dev_moving)) dev_domovemenu(0,currenttop,(0-currenttop),20);				
		setTimeout("dev_movemenu()",10);
	}	
	else dev_menutimer=false;		
}


function dev_init()
{
  if (!dev_menutimer)
  {  
	dev_movemenu();
	dev_menu('a_dev_preface');  
  }
}


function dev_setmenu(top)
{
	var ar = ['dev_preface_div','dev_authentication_div','dev_datatypes_div','dev_errorresponses_div','dev_clientserver_div','dev_serverclient_div','dev_filetransfers_div'];	
	
	var ar2 = ['a_dev_preface','a_dev_authentication','a_dev_datatypes','a_dev_errorresponses','a_dev_clientserver','a_dev_serverclient','a_dev_filetransfers'];
	for (var i in ar)
	{	
		if (document.getElementById(ar[i]).style.display == '')
		{
			var t = document.getElementById(ar[i]).offsetTop;
			var h = document.getElementById(ar[i]).offsetHeight;
			if (d) console.log(top);
			if (d) console.log(t-100);
			if (d) console.log(t+h+100);			
			if ((top >= t-100) && (top <= (t+h+100))) dev_menu(ar2[i]);		
		}
	}
}


function dev_menu(el)
{
	document.getElementById('a_dev_preface').className = 'account-link';
	document.getElementById('a_dev_authentication').className = 'account-link';
	document.getElementById('a_dev_datatypes').className = 'account-link';    
	document.getElementById('a_dev_errorresponses').className = 'account-link';
	document.getElementById('a_dev_clientserver').className = 'account-link';
	document.getElementById('a_dev_serverclient').className = 'account-link';	
	document.getElementById('a_dev_filetransfers').className = 'account-link';	
	document.getElementById(el).className = 'account-link selected';
}



function init_help()
{	
	subpage = 'basics';
	init_helpsub();
}

function help_unfold(id)
{
	if ($('#help_'+id).attr('class').indexOf('active') == -1) $('#help_'+id).addClass('active');
	else $('#help_'+id).removeClass('active');
}


function help_over(id)
{
	if (d) console.log('test');
	$('#help_'+id).addClass('over');
}


function help_out(id)
{
	$('#help_'+id).removeClass('over');
}



function init_helpsub()
{
	var helpi=0;
	for (var i in help_categories)
	{
		if (help_categories[i] == subpage) helpi = i;
		document.getElementById('help_a_' + help_categories[i]).className = 'account-link';
	}
	var content = '';
	for (var i in helpdata)
	{
		for (var j in helpdata[i].c)
		{
			if (helpi == helpdata[i].c[j])
			{
				content += '<h2>' + helpdata[i].q + '</h2><hr>';
				content += helpdata[i].a;
			}
		}
	}
	var content = '';	
	for (var i in helpdata)
	{
		for (var j in helpdata[i].c)
		{
			if (helpi == helpdata[i].c[j])
			{					
				content += '<div onclick="help_unfold(\''+i+'\');" class="help-left-links" id="help_' + i + '" onmouseover="help_over(\''+i+'\');" onmouseout="help_out(\''+i+'\');"><span class="help-left-lnk-txt"><span>' + helpdata[i].q + '</span></span>';
				content += '<span class="help-left-lnk-description">' + helpdata[i].a + '</span></div>';					
			}
		}
	}	
	$('.help-main-block.new')[0].innerHTML = content;	
	
	
	
	document.getElementById('help_a_' + subpage).className = 'account-link selected';	
	if (subpage == 'basics') help_subtitle = l[400];
	else if (subpage == 'sharing') help_subtitle = l[401];
	else if (subpage == 'security') help_subtitle = l[402];
	else if (subpage == 'account') help_subtitle = l[403];
	else if (subpage == 'payments') help_subtitle = l[404];
	else if (subpage == 'tools') help_subtitle = l[405];
	document.getElementById('help_subtitle').innerHTML = help_subtitle;
}






help_categories = ['basics','sharing','security','account'];



var helpdata = 
[
{
	//q: 'What does "MEGA" stand for?',	
	q: l[259],
	a: '<p>' + l[260] + '</p>',
	c: [0]
},
{
	//q: 'What is MEGA all about?',
	q: l[261],
	a: '<p>' + l[262] + '</p>',
	c: [0],
	i: 1
},
{
	//q: 'Is MEGA legal?',
	q: l[692],
	a: '<p>' + l[264].replace('[B]','<i>').replace('[/B]','</i>').replace('[A]','<a href="/#terms">').replace('[/A]','</A>') + '</p> ',
	c: [0],
	i:1,
},
{
	// q: 'Why base a cloud storage company in New Zealand, of all places?',
	q: l[267],
	a: '<p>' + l[268].replace('cloud','<b>cloud</b>') + '</p> ',
	c: [0],
	i:1
},
{
	// q: 'Can I access MEGA on my mobile device?',
	q: l[269],
	a: '<p>' + l[270] + '</p>',
	c: [0],
	i: 1
},
{
	// q: 'Can I resume interrupted up- or downloads?',
	q: l[271],
	a: '<p>' + l[272] + '</p>',
	c: [0]
},
{
	// q: 'Can I upload the same file multiple times?',
	q: l[273],
	a: '<p>' + l[274] + '</p>',
	c: [0]
},
{
	q: l[275],
	a: '<p>' + l[276] + '</p>',
	c: [0]
},
{
	// q: 'Are there any file size limits on MEGA?',
	q: l[277],
	a: '<p>' + l[278] + '</p>',
	c: [0]
},
{
	// q: 'Can I upload and download at the same time?',
	q: l[279],
	a: '<p>' + l[280] + '</p>',
	c: [0]
},
{
	// q: 'Why don't you provide image thumbnails or streamed previewing of video and audio files?',
	q: l[281],
	a: '<p>' + l[282] + '</p>',
	c: [0]
},
{
	// q: 'How do I upload files to MEGA?',
	q: l[283],
	a: '<p>' + l[284] + '<br>' + l[285] + '<br>' + l[286] + '<br>' + l[287] + '</p>',
	c: [0]
},
{
	// q: 'How do I install MEGA?',
	q: l[288],
	a: '<p>' + l[289] + '</p>',
	c: [0]
},
{
	// q: 'Do you offer an API?',
	q: l[359],
	a: '<p>' + l[361].replace('[A]','<a href="/#developers">').replace('[/A]','</A>') + '</p>',
	c: [0]
},
{
	// q: 'How does folder sharing work?',
	q: l[366],
	a: '<p>' + l[367] + '</p>',
	c: [1]
},
{
	// q: 'How does folder sharing work?',
	q: l[290],
	a: '<p>' + l[291] + '</p><p>' + l[292] + '</p><p>' + l[293] + '</p>',
	c: [1]
},
{
	// q: 'How do I delete people from my shared folder?',
	q: l[294],
	a: '<p>' + l[295] + '</p>',
	c: [1]
},
{
	// q: 'How do I recognize my shared folders?',
	q: l[296],
	a: '<p>' + l[297] + '</p>',
	c: [1]
},
{
	// q: 'Can I share a shared folder?',
	q: l[298],
	a: '<p>' + l[299] + '</p>',
	c: [1]
},
{
	// q: 'How do I link to a file on MEGA?',
	q: l[302],
	a: '<p>' + l[303] + '</p> <p>' + l[304] + '</p>',
	c: [1]
},
{
	// q: 'How does the encryption work?',
	q: l[305],
	a: '<p>' + l[306] + '</p>',
	c: [2],
	i:1
},
{
	// q: 'Is all of my personal information subject to encryption?',
	q: l[307],
	a: '<p>' + l[308] + '</p>',
	c: [2]
},
{
	// q: 'Is my stored data absolutely secure?',
	q: l[309],
	a: '<p>' + l[310] + '</p><p>' + l[311] + '<br>' + l[312] + '<br>' + l[313] + '<br>' + l[314] + '<br>' + l[315] + '</p><p>' + l[316] + '<br>' + l[317] + '<br>' + l[318] + '<br>' + l[319] + '<br></p>',
	c: [2]
},
{
	// q: 'What if I don't trust you? Is it still safe for me to use MEGA?',
	q: l[320],
	a: '<p>' + l[321] + '</p>',
	c: [2]
},
{
	// q: 'Is data that I put in shared folders as secure my other data?',
	q: l[324],
	a: '<p>' + l[325] + '</p>',
	c: [2]
},
{
	// q: 'Let's assume that a MEGA storage node is physically compromised. What are the risks?',
	q: l[326],
	a: '<p>' + l[327] + '</p>',
	c: [2]
},
{
	// q: 'Is it a good idea to store all of my data in a single place?',
	q: l[328],
	a: '<p>' + l[329] + '</p>',
	c: [2]
},
{
	// q: 'Why should I entrust my data to, of all people, you?',
	q: l[330],
	a: '<p>' + l[331] + '</p>',
	c: [2]
},
{
	// q: 'I noticed that you are using HTTPS for transferring already encrypted file data. Isn't that redundant?',
	q: l[332],
	a: '<p>' + l[333] + '</p>',
	c: [2]
},
{
	// q: 'What encryption algorithms does MEGA use internally?',
	q: l[334],
	a: '<p>' + l[335] + '</p><p>' + l[336] + '</P><p>' + l[337] + '</P>',
	c: [2]
},
{
	// q: 'Does MEGA keep backups of my files?',
	q: l[338],
	a: '<p>' + l[339] + '</p>',
	c: [3],
	i: 1
},
{
	// q: 'I have forgotten my password. Can I reset it?',
	q: l[340],
	a: '<p>' + l[341] + '</p>',
	c: [3],
	i: 1
},
{
	// q: 'What do I get with my free account?',
	q: l[348],
	a: '<p>' + l[349].replace('[X]','50 GB').replace('[A1]','<a href="/#pro">').replace('[/A1]','</a>').replace('[A2]','<a href="/#account">').replace('[/A2]','</a>') + '</p>',
	c: [3],
	i: 1,
},
{
	// q: 'When do I need to upgrade to a Pro account?',
	q: l[344],
	a: '<p>' + l[345] + '</p>',
	c: [3]
},
{
	// q: 'Why is there an option to limit my uploading speed, and why is it enabled by default?',
	q: l[346],
	a: '<p>' + l[347] + '</p>',
	c: [3]
}
]



var cn_url_input = '';
var cn_work_input = '';
var default_url='';
var default_work ='';


function cn_change_type()
{
	if (document.getElementById('cn_type_option').value == '4')
	{
		document.getElementById('cn_type_option').options[0].selected=true;
		alert(l[700].replace('[A1]','<a href="mailto:copyright@mega.co.nz" style="color:#CC0000; text-decoration:underline;">').replace('[A2]','').replace('[/A1]','</a>').replace('[/A2]',''),l[701]);				
		document.getElementById('cn_type').innerHTML = l[631];
	}
}


function init_cn()
{
	var cn_c = '<div class="select-button"></div><span class="select-txt" id="cn_country">' + l[654] + '</span><select id="cn_country_option" name="custom" onChange="GetNextNode(\'cn_country\')"><option value="0">Country:</option>';
	for (var c in isocountries)
	{
		cn_c += '<option value="' + c + '">' + isocountries[c] +'</option>';	
	}
	cn_c += '</select>';	
	document.getElementById('cn_country_div').innerHTML = cn_c;		
	cn_url_input 	= document.getElementById('cn_urls').innerHTML;
	cn_work_input 	= document.getElementById('cn_works').innerHTML;	
	default_url = $('#cn_urls input')[0].value;
	default_work = $('#cn_works input')[0].value;
}

function cn_addmore()
{
	var u = $('#cn_urls input');
	var w = $('#cn_works input');
	for (var i in u)
	{	
		if ((u[i].value == '') || (u[i].value == default_url))
		{
			alert(l[655]);
			return false;
		}
	}
	for (var i in w)
	{
		if ((w[i].value == '') || (w[i].value == default_work))
		{
			alert(l[656]);
			return false;
		}
	}
	$('#cn_urls').append(cn_url_input);	
	$('#cn_works').append(cn_work_input);	
}

function cn_submit()
{
	var u = $('#cn_urls input');
	var w = $('#cn_works input');
	
	var u_w=false;	
	var w_w=false;
	var i=0;
	for (var i in u) if ((u[i].value == '') || (u[i].value == default_url)) u_w=true;		
	var i=0;
	for (var i in w) if ((w[i].value == '') || (w[i].value == default_work)) w_w=true;
	
	if ($('#cn_content_option')[0].value == '0')
	{
		alert(l[657]);
		return false;	
	}	
	else if (document.getElementById('cn_type_option').value == '0')
	{		
		alert(l[658]);
		return false;	
	}
	else if (u_w)
	{
		alert(l[659]);
		return false;	
	}
	else if (w_w)
	{
		alert(l[660]);
		return false;	
	}
	else if (document.getElementById('cn_owner').value == l[642])
	{
		alert(l[661]);
		return false;	
	}
	else if (document.getElementById('cn_name').value == l[649])
	{
		alert(l[662]);
		return false;	
	}
	else if (document.getElementById('cn_email').value == l[644])
	{
		alert(l[663]);
		return false;	
	}	
	else if (checkMail(document.getElementById('cn_email').value))
	{
		alert(l[664]);
		return false;	
	}	
	else if (!document.getElementById('cn_accept1').checked)
	{
		alert(l[665]);
		return false;	
	}	
	else if (!document.getElementById('cn_accept2').checked)
	{
		alert(l[666]);
		return false;	
	}	
	else if (!document.getElementById('cn_accept3').checked)
	{
		alert(l[667]);
		return false;	
	}	
	else
	{	
		var cn_post_urls = [];
		var cn_post_works = [];		
		$('#cn_urls input').each(function(a,b)
		{
			cn_post_urls.push(b.value);
		});		
		$('#cn_works input').each(function(a,b)
		{
			cn_post_works.push(b.value);
		});
		
		
		var cn_works_json = JSON.stringify([cn_post_urls,cn_post_works]);
		
		loadingDialog.show();
		api_req([{ a : 'cn' , infr_type: document.getElementById('cn_content_option').value, takedown_type: document.getElementById('cn_type_option').value, works: cn_works_json, owner: document.getElementById('cn_owner').value, jobtitle: document.getElementById('cn_jobtitle').value, email: document.getElementById('cn_email').value, fax: document.getElementById('cn_fax').value, city: document.getElementById('cn_city').value, postalcode: document.getElementById('cn_postalcode').value, name: document.getElementById('cn_name').value, company: document.getElementById('cn_company').value, phone: document.getElementById('cn_phone').value, address: document.getElementById('cn_address').value, province: document.getElementById('cn_province').value, country: document.getElementById('cn_country_option').value}],
		{ 
			callback : function (json,params) 
			{ 	
				loadingDialog.hide();
				done_text1 = l[668];
				done_text2 = l[669];
				parsepage(pages['done']);
				init_done();			
			}
		});	
	}
}



function privacycompany_init()
{
	var blockWidth = $(".company-white-block").width() + 22;
	blockWidth = '-'+ Math.ceil(blockWidth/2) + 'px';
	$(".company-white-block").css('margin-left', blockWidth);
}
  



var pro_package;
var pro_packs = [];
var pro_balance = 0;
var pro_paymentmethod;
var pro_m;

function init_pro()
{
	if (!mobileversion)
	{
		api_req([{ a : 'utqa' },{"a":"uq","pro":1}],
		{ 
			callback : function (json,params) 
			{ 
				if (((typeof json[0] == 'number') && (json[0] < 0)) && ((typeof json[1] == 'number') && (json[1] < 0)))
				{	
					//alert(l[200]);		
				}
				else
				{			
					if ((json[1]) && (json[1].balance) && (json[1].balance[0]))  pro_balance = json[1].balance[0][0];
					else pro_balance = 0;
					if (document.getElementById('pro_balance')) document.getElementById('pro_balance').innerHTML = '&euro; ' + $('<div/>').text(showmoney(pro_balance)).html();
				}
			}
		});
	}
	
				var json = '[[["N02zLAiWqRU",1,500,1024,1,"9.99","EUR"],["zqdkqTtOtGc",1,500,1024,12,"99.99","EUR"],["j-r9sea9qW4",2,2048,4096,1,"19.99","EUR"],["990PKO93JQU",2,2048,4096,12,"199.99","EUR"],["bG-i_SoVUd0",3,4096,8182,1,"29.99","EUR"],["e4dkakbTRWQ",3,4096,8182,12,"299.99","EUR"]]]';
				
				json = JSON.parse(json);				
				for (var i in json[0])
				{
					if      ((json[0][i][2] == '500') && (json[0][i][5] == '9.99')) 	pro_packs['pro1_month'] = json[0][i];
					else if ((json[0][i][2] == '500') && (json[0][i][5] == '99.99')) 	pro_packs['pro1_year'] 	= json[0][i];
					else if ((json[0][i][2] == '2048') && (json[0][i][5] == '19.99')) 	pro_packs['pro2_month'] = json[0][i];
					else if ((json[0][i][2] == '2048') && (json[0][i][5] == '199.99')) 	pro_packs['pro2_year'] 	= json[0][i];
					else if ((json[0][i][2] == '4096') && (json[0][i][5] == '29.99')) 	pro_packs['pro3_month'] = json[0][i];
					else if ((json[0][i][2] == '4096') && (json[0][i][5] == '299.99')) 	pro_packs['pro3_year'] 	= json[0][i];		
				}
				
				if (mobileversion) return false;
				
				document.getElementById('pro_page').style.display='';			
				
				$(".pro-package").click(function() 
				{					
					document.getElementById('pricing_pro1').style.display = 'none';
					document.getElementById('pricing_pro2').style.display = 'none';
					document.getElementById('pricing_pro3').style.display = 'none';				
					document.getElementById('pricing_' + this.id).style.display = '';
					var className =  $(this).attr('class');
					if ($(this).parent().attr('class').indexOf('opened') == -1) 
					{	 
						$(this).parent().addClass('opened');
						$('.pro-divider').first().attr('class', 'pro-divider-opened');
						$('.pro-pricing-block').addClass('opened');
					}
					if (className.indexOf('selected') == -1) 
					{
						$(".pro-package").removeClass('selected');	
						$(this).addClass('selected');
					}	
					$('.pro-payment-block').removeClass('opened');
					$(".pro-pricing").removeClass('selected');	
					$(".pro-button-block").removeClass('opened');
					$(".pro-payment").removeClass('selected');
					$('.pro-payment-block').removeClass('opened');	

					if (u_type != 3)
					{				
						$("#pro_prepaid").hide();
						$("#pro_voucher").hide();
					}					
					$("#"+this.id+"_month").click();
				});
				
				$(".pro-pricing").click(function() 
				{
					
					$(".pro-payment").removeClass('selected');
					$(".pro-pricing").removeClass('selected');	
					$(".pro-button-block").removeClass('opened');
					$(this).addClass('selected');
							
					pro_package = this.id;	
/*					
					if ((pro_package == 'pro1_year') || (pro_package == 'pro2_year') || (pro_package == 'pro3_year'))
					{					     
						 $("#payment_paypal").hide();
						 if (pro_paymentmethod == 'payment_paypal') pro_paymentmethod = '';
					}
					else $("#payment_paypal").show();
*/					
												
					if ($('.pro-payment-block').attr('class').indexOf('opened') == -1) 
					{
						$(this).parent().addClass('opened'); 
						$('.pro-divider').first().attr('class', 'pro-divider-opened');
						$('.pro-payment-block').addClass('opened');
					}					
				});							
				
				$(".pro-payment").click(function() 
				{
					pro_paymentmethod = this.id;					
					$(".pro-payment").removeClass('selected');
					$(this).addClass('selected');
					if (pro_paymentmethod == 'payment_paypal')
					{
						$(".pro-button-block").removeClass('opened');
						if (u_type === false)
						{
							loadingDialog.show();
							u_storage = localStorage;	
							u_checklogin(
							{
								checkloginresult: function(u_ctx,r)
								{			
									u_type = r;
									u_checked=true;	
									pro_continue();			
								}
							},true);
						}
						else pro_continue();													
					}
					else $(".pro-button-block").addClass('opened');					
				});			
				$("#pro1").click();
}


function pro_continue()
{
	if (pro_paymentmethod == 'pro_prepaid')
	{
		if (parseFloat(pro_balance) < parseFloat(pro_packs[pro_package][5]))
		{
			document.location.hash = 'resellers';
		}
		else pro_pay();
	}
	
	else if (pro_paymentmethod == 'pro_voucher')
	{
		document.getElementById('overlay').style.display='';			
		api_req([{ a: 'uavr', v: document.getElementById('pro_vcode').value }],
		{ 
			callback : function (json,params)
			{											
				if ((typeof json[0] == 'number') && (json[0] < 0))
				{
					document.getElementById('overlay').style.display='none';
					alert(l[473]);			
				}
				else
				{
					api_req([{"a":"uq","pro":1}],
					{ 
						callback : function (json,params) 
						{ 
							if ((typeof json[0] == 'number') && (json[0] < 0))
							{	
								document.getElementById('overlay').style.display='none';
								alert(l[200]);			
							}
							else
							{
								pro_balance=0;
								if (json[0].balance) pro_balance = json[0].balance[0][0];								
								document.getElementById('pro_balance').innerHTML = '$' + $('<div/>').text(showmoney(pro_balance)).html();				
								if (parseFloat(pro_balance) < parseFloat(pro_packs[pro_package][5]))
								{
									document.getElementById('overlay').style.display='none';
									alert(l[513]);										
								}
								else pro_pay();												
							}						
						}
					});
				}
			}
		});
	}
	else if (pro_paymentmethod == 'payment_paypal') pro_pay();		
}

var test1;

function pro_pay()
{
	
	
	if (pro_paymentmethod == 'payment_paypal') loadingDialog.show();
	else document.getElementById('overlay').style.display='';
	
	api_req([{ a : 'uts', it: 0, si: pro_packs[pro_package][0], p: pro_packs[pro_package][5], c: pro_packs[pro_package][6]}],
	{ 
		callback : function (json,params) 
		{ 
			if ((typeof json[0] == 'number') && (json[0] < 0))
			{
				document.getElementById('overlay').style.display='none';
				loadingDialog.hide();
				alert(l[200]);			
			}
			else
			{				
				if ((pro_paymentmethod == 'pro_voucher') || (pro_paymentmethod == 'pro_prepaid')) pro_m=0;
				else if (pro_paymentmethod == 'payment_paypal') pro_m=1;
				else
				{
					// other payment providers			
					
				}
				
				
				api_req([{ a : 'utc', s: [json[0]], m: pro_m}],
				{ 
					callback : function (json,params) 
					{ 
						console.log(json);
						
						if (pro_paymentmethod == 'payment_paypal')
						{										
							var ppurl = 'https://www.paypal.com/cgi-bin/webscr';
							if ((json[0]) && (json[0]['EUR']))
							{	
								var j = 0;
								for (var i in json[0]['EUR'])
								{
									if (j == 0) ppurl += '?';
									else ppurl += '&';
									ppurl += i + '=' + encodeURIComponent(json[0]['EUR'][i]);	
									j++;
								}
								//console.log(ppurl);								
								document.location = ppurl;								
							}			
							else
							{
								loadingDialog.hide();
								document.getElementById('overlay').style.display='none';		
								alert(l[200]);							
							}
						}
						else
						{		
							document.getElementById('overlay').style.display='none';	
							if ((typeof json[0] == 'number') && (json[0] < 0))
							{
								if (json[0] == 502) alert(l[514]);
								else alert(l[200]);
							}
							else
							{							
								acc_loaded=0;
								if (pro_m == 0) document.location.hash = 'account';							
								else
								{							
									// redirect to other payment page							
								}
							}
						}
					}
				});
			}
		}
	});
	
}




var resellerapp_m='';
var resellerapp_p=[];
var resellerapp_step4=false;


var ra_c = [];
var ra_p = [];
var ra_pc = [];







function init_resellerapp()
{
	var r_c = '<div class="select-button"></div><span class="select-txt" id="reseller_country">' + l[568] + '</span>';	
	r_c += '<select id="reseller_country_option" name="custom" onChange="GetNextNode (\'reseller_country\')">';        
	r_c += '<option value="-1" selected>' + l[568] + '</option>';
	
	var r_m = '';
	
	for (var c in isocountries)
	{
		r_c += '<option value="' + c + '">' + isocountries[c] +'</option>';
		resellerapp_m += '<div data-country="' + c + '" class="country" style="background-image:url(' + staticpath + 'images/flags/'+ c.toLowerCase() + '.png)">' + isocountries[c] +'</div>';
	}
	r_c += '</select>';
	
	document.getElementById('resellerapp_countries').innerHTML = r_c;	
	document.getElementById('ra_step2_select1').innerHTML = resellerapp_m;
	
	api_req([{ a : 'uarm' }],
	{ 
		callback : function (json,params) 
		{ 			
			for (var i in json[0]) resellerapp_p.push(json[0][i]);			
			resellerapp_p.sort(ra_sort);
			var p = '';
			for (var i in resellerapp_p)
			{
				p += '<div data-paymentprovider="' + resellerapp_p[i][0] + '" class="country" style="background-image:url(' + staticpath + 'images/paymenticons/small/' + resellerapp_p[i][2] + ')" >' + resellerapp_p[i][1] + '</div>';
			}
			document.getElementById('ra_step3_select1').innerHTML = p;						
			resellerapp_p = json[0];
			resellerapp_init_select('');
		}
	});
}

function resellerapp_init_select(id)
{
	$(id + ".country").click(function() 
	{
	   var className =  $(this).attr('class');
	   if (className.indexOf('selected') == -1) 
	   {	
			$(this).addClass('selected');
			if (($(this).attr('data-country')) && ($(this).attr('data-paymentprovider'))) $('#ra_step4_' + $(this).attr('data-paymentprovider')).addClass('selected-country');
			else $('.selectors-block').addClass('selected-country');
	   }
	   else 
	   {
		   $(this).removeClass('selected');
		   var selected_items = $(this).parent().children('.selected');
		   if (!selected_items.first().attr('class')) 
		   {
			 $('.selectors-block').removeClass('selected-country');
		   }
	   }
	});

	$(id + ".reseller-add-button").click(function() 
	{
	   var id = $(this).closest('.selectors-block')[0].id;
	   var adding_items = $('#' + id + '_select1').children('.selected');
	   	 
	   var i=0;	   
	   while (i < adding_items.length)
	   {
		if (d) console.log('test');
		if (d) console.log(id);
	   
		 var country 			= adding_items[i].getAttribute('data-country');
				
		 var paymentprovider 	= adding_items[i].getAttribute('data-paymentprovider');
		 if ((id == 'ra_step2') && (country)) ra_c[country] = 1;		
		 else if ((id == 'ra_step3') && (paymentprovider)) ra_p[paymentprovider] = 1;		 
		 else
		 {
			if (!ra_pc[paymentprovider]) ra_pc[paymentprovider] = new Array();			
			ra_pc[paymentprovider][country] = 1;
		 }	   
		 i++;
	   }
	   if (adding_items.first().attr('class')) 
	   {
			 $('#' + id + '_select2').addClass('moved-items');
			 adding_items = adding_items.removeClass('selected');
			 $('#' + id + '_select2').append(adding_items); 
			 $('.selectors-block').removeClass('selected-country');
	   }
	});

	$(id + ".reseller-move-button").click(function() 
	{
	   var id = $(this).closest('.selectors-block')[0].id;
	   var moving_items = $('#' + id + '_select2').children('.selected');
	   
	    var i=0;
	    while (i < moving_items.length)
	    {
		  
		
		  var country 			= moving_items[i].getAttribute('data-country');
		  var paymentprovider 	= moving_items[i].getAttribute('data-paymentprovider');
		  
		  if (d) console.log(moving_items[i]);
		  if (d) console.log(id);
		  if (d) console.log(country);
		  
		  if ((id == 'ra_step2') && (country)) ra_c[country] = 0;		
		  else if ((id == 'ra_step3') && (paymentprovider)) ra_p[paymentprovider] = 0;		 
		  else ra_pc[paymentprovider][country] = 0;
		  	   
		  i++;
	   }
	   
	   if (moving_items.first().attr('class')) 
	   {
		   moving_items = moving_items.removeClass('selected');
		   $('#' + id + '_select1').append(moving_items); 
		   var moved_elements = $('#' + id + '_select2').children('.country');
		   if (!moved_elements.first().attr('class')) 
		   {
			   $('#' + id + '_select2').removeClass('moved-items'); 
		   }
		   $('.selectors-block').removeClass('selected-country');
	   }
	});
}





function resellerapp_resetrender()
{
	
	
	$('.resellers-step-bg').removeClass('step1');
	$('.resellers-step-bg').removeClass('step2');
	$('.resellers-step-bg').removeClass('step3');
	$('.resellers-step-bg').removeClass('step4');
}



function resellerapp_step(step)
{
	var steps = [];
	steps[0] = document.getElementById('resellerapp_step1');
	steps[1] = document.getElementById('resellerapp_step2');
	steps[2] = document.getElementById('resellerapp_step3');
	steps[3] = document.getElementById('resellerapp_step4');

	if (step == '1')
	{
		resellerapp_resetrender()
		steps[0].style.display = '';
		steps[1].style.display = 'none';
		steps[2].style.display = 'none';
		steps[3].style.display = 'none';
		$('.resellers-step-bg').addClass('step1');		
	}
	else if (step == '2')
	{				
		if ($('#resellerapp_name')[0].value == l[559])
		{
			alert(l[581]);
			return false;
		}
		else if ($('#resellerapp_url')[0].value == l[560])
		{
			alert(l[582]);
			return false;
		}
		else if ($('#resellerapp_address')[0].value == l[561])
		{
			alert(l[583]);
			return false;
		}
		else if ($('#resellerapp_postalcode')[0].value == l[562])
		{
			alert(l[584]);
			return false;
		}
		else if ($('#resellerapp_businessname')[0].value == l[563])
		{
			alert(l[585]);
			return false;
		}
		else if ($('#resellerapp_phone')[0].value == l[564])
		{
			alert(l[586]);
			return false;
		}
		else if ($('#resellerapp_city')[0].value == l[565])
		{
			alert(l[587]);
			return false;
		}
		else if ($('#reseller_country_option')[0].value =='-1')
		{
			alert(l[588]);
			return false;			
		}
		else if (!$('#reseller_checkbox')[0].checked)
		{
			alert(l[589]);
			return false;
		}
		resellerapp_resetrender()
		steps[0].style.display = 'none';
		steps[1].style.display = '';
		steps[2].style.display = 'none';
		steps[3].style.display = 'none';
		$('.resellers-step-bg').addClass('step2');				
	}
	else if (step == '3')
	{
		i=0;
		for(var a in ra_c) i++;		
		if (i == 0)
		{
			alert(l[590]);
			return false;
		}
	
		resellerapp_resetrender()
		steps[0].style.display = 'none';
		steps[1].style.display = 'none';
		steps[2].style.display = '';
		steps[3].style.display = 'none';
		$('.resellers-step-bg').addClass('step3');
	}
	else if (step == '4')
	{
	
		i=0;
		for(var a in ra_p) i++;		
		if (i == 0)
		{
			alert(l[591]);
			return false;
		}
	
		resellerapp_resetrender()
		var step4html = '';
		resellerapp_p.sort(ra_sort);		
		var ras4c = [];
		for (var c in ra_c) ras4c.push(c);				
		ras4c.sort();		
		
		
		for (var i in resellerapp_p)
		{		
			
			if (ra_p[resellerapp_p[i][0]])
			{			
				step4html += '<div style="text-align:left;"><img src="' + staticpath + 'images/paymenticons/medium/' + resellerapp_p[i][2] + '"></div>';
				step4html += '<div class="selectors-block" id="ra_step4_' + resellerapp_p[i][0] + '"><div class="notice-left-block"><div class="reseller-select" id="ra_step4_' + resellerapp_p[i][0] + '_select1">';
				
				var select2 = '';
				
				for (var j in ras4c)
				{
					
					var pp = '<div data-paymentprovider="' + resellerapp_p[i][0] + '" data-country="' + ras4c[j] + '" class="country" style="background-image:url(images/flags/'+ ras4c[j].toLowerCase() + '.png)">' + isocountries[ras4c[j]] +'</div>';

					if ((ra_pc[resellerapp_p[i][0]]) && (ra_pc[resellerapp_p[i][0]][ras4c[j]])) select2 += pp;					
					else step4html += pp;
				}
				
				if (select2 == '') select2 = '<span class="reseller-map">Select markets for ' + resellerapp_p[i][1] + '</span>';
				
				step4html += '</div></div><div class="notice-right-block"><div class="reseller-second-select" id="ra_step4_' + resellerapp_p[i][0] + '_select2">' + select2 + '</div></div><div class="res-buttons-block"><a class="reseller-add-button"></a><a class="reseller-move-button"></a><div class="clear"></div></div></div></div>';
			}
		}		
		document.getElementById('resellerapp_step4_select').innerHTML = step4html;
		resellerapp_init_select('#resellerapp_step4_select ');		
		steps[0].style.display = 'none';
		steps[1].style.display = 'none';
		steps[2].style.display = 'none';
		steps[3].style.display = '';
		$('.resellers-step-bg').addClass('step4');
	}
}


function resellerapp_complete()
{
	if (d) console.log(resellerapp_complete);
	
	for (var i in ra_p) 
	{ 
		if (!ra_pc[i])
		{
			alert(l[592]);
			return false;			
		}
	}

	var cc = [];
	var pm = [];
	for (var pp in ra_pc)
	{
		var i =0;		
		var pm_el = [];			
		pm_el[0] = pp;		
		for (c in ra_pc[pp])
		{		
			i++;		
			if ((ra_c[c]) && (ra_p[pp]))
			{
				if (typeof pm_el[1] == 'undefined') pm_el[1] = c;
				else pm_el[1] += ' ' + c;								
			}						
		}			
		pm.push(pm_el);	
	}		
	for (c in ra_pc[pp]) cc.push(c);	
	
	loadingDialog.show();	
	api_req([{ a : 'uarp', n: document.getElementById('resellerapp_name').value, u: document.getElementById('resellerapp_url').value, cc: cc, pm: pm },{a: 'up', address: document.getElementById('resellerapp_address').value, postalcode: document.getElementById('resellerapp_postalcode').value, businessname: document.getElementById('resellerapp_businessname').value, phone: document.getElementById('resellerapp_phone').value,city: document.getElementById('resellerapp_city').value, country: document.getElementById('reseller_country_option').value }],
	{ 
		callback : function (json,params) 
		{ 	
			if (d) console.log(json);
		
			loadingDialog.hide();		
			done_text1 = l[593];
			done_text2 = l[594];
			parsepage(pages['done']);		
			init_done();
		}
	});
}



function ra_sort(a,b)
{
	a =a[1].toLowerCase() 
	b =b[1].toLowerCase();
	if (a < b) return -1;						
	else return 1;			
}




var fmdirid=false;
var u_type,cur_page,u_checked
var page = '';
var subpage = '';
var confirmcode = false;
var confirmok = false;
var signupcode = false;
var hash = window.location.hash;
var chrome_msg=false;
var init_anoupload=false;
var blogid =false;
var pwchangecode=false;
var resetpwcode=false;
var resetpwemail='';
var mobileparsed=false;

var mobilekeygen=false;

if (window.location.hash) page = window.location.hash.replace('#','');



function hasFlash()
{
	var f=swfobject.getFlashPlayerVersion();	
	if ((f.major >= 11) && (f.minor >= 5)) return true;
	else if ((Ext.isLinux) && (f.major >= 11)) return true;
	else return false;
}


function pagebrowse(p)
{	
	page = p;
	init_page();
}

function logout()
{	
	u_logout();
	document.location.href = '/';
}

function tmenu()
{
	if (document.getElementById('top_pullmenu').style.display == '') document.getElementById('top_pullmenu').style.display='none';
	else document.getElementById('top_pullmenu').style.display='';
}

function lmenu()
{
	if (document.getElementById('language_menu').style.display == '') document.getElementById('language_menu').style.display='none';
	else document.getElementById('language_menu').style.display='';
}


function hashchange()
{	
	var p = window.location.hash.replace('#','');
	if (d) console.log(p);	
	pagebrowse(p);
}

function parsetopmenu()
{
	var top = translate(pages['top']);
	if (u_type) top = translate(pages['topl']);
	return top;
}

function addmenuoptions()
{
	if (document.getElementById('language_menu_options'))
	{		
		var lc=0;
		for (var lng in languages) if (languages[lng].length > 0) lc++;
		var tl = lc;
		lc = Math.ceil(lc/4);
		
		var m = '<div class="nlanguage-txt-block">';
		var i=1;
		var x=1;
		for (var lng in languages)
		{
			if (languages[lng].length > 0)
			{
				m += '<a href="javascript:setlang(\'' + lng + '\');" class="nlanguage-lnk"><span class="nlanguage-tooltip"> <span class="nlanguage-tooltip-bg"> <span class="nlanguage-tooltip-main"> ' + ln2[lng] + '</span></span></span>' + ln[lng] + '</a><div class="clear"></div>';				

				if ((lc*x == i) && (i !== tl))
				{
					m+='</div><div class="nlanguage-txt-block">';
					x++;
				}
				i++;
			}
		}
		m+='</div><div class="clear"></div>';
		document.getElementById('language_menu_options').innerHTML = m;	
		document.getElementById('language_menu_selected').innerHTML = ln[lang].replace('Brasil','BR');
	}
	
	if ($('#top_gopro')[0])
	{	
		if ((u_type == 3) && (!u_attr.p)) $('#top_gopro')[0].style.display='';
		else $('#top_gopro')[0].style.display='none';
	}
}


function setlang(lang)
{
	if (downloading || ul_uploading)
	{									
		alert(l[375]);
		return false;
	}
	localStorage.lang = lang;
	window.location.reload();
}

function parsepage(pagehtml)
{
	pagehtml = translate(pagehtml);
	pagehtml = pagehtml.replace(/{staticpath}/g,staticpath);
	
	
	
	if (mobileversion)
	{					
		if (!mobileparsed) $('#mobilefmholder').html(pagehtml);			
		mobileparsed=true;		
	}
	else
	{
		var top = parsetopmenu();
		
		document.getElementById('topmenufm').innerHTML ='';
		document.getElementById('topmenufm').style.display='none';
		document.getElementById('fmholder').style.display='none';
		
		if (page == 'start')
		{
			document.getElementById('bodyel').className = 'start-page';
		}
		else
		{	
			document.getElementById('bodyel').className = 'bottom-pages';	
		}
		
		document.getElementById('pageholder').style.display='';	
		document.getElementById('pageholder').innerHTML = translate(top) + pagehtml + translate(pages['bottom']);
		
		
		
		
		addmenuoptions();
		
		
		$j('#menu_hover').tooltip({ position: "bottom center"});
		$j('#language_hover').tooltip({ position: "bottom center"});
		
		if (u_type === 0)
		{	
			document.getElementById('menu_login').style.display='none';
			document.getElementById('menu_abort').style.display='';		
		}

		
		if ((page == 'developers') && (Ext.userAgent.toLowerCase().indexOf('chrome') > 0))
		{	
			$('html')[0].style.height   = 'auto';
			$('html')[0].style.overflow = 'auto';
		}
		else
		{	
			$('html')[0].style.height   = '100%';
			$('html')[0].style.overflow = 'hidden';
		}
		
		if ($(".top-head")) $(".top-head")[0].scrollIntoView();
		
		$j('#ribon_hover').tooltip({ position: "bottom center" });
	}
}

function init_page_fm()
{

	if (d) console.log('init_page_fm()');
	if (d) console.log(extjsloaded);	
	document.getElementById('bodyel').className = '';
	if (!extjsloaded)
	{	
		if (d) console.log('Ext not ready.');
		setTimeout("init_page_fm()",250);	
	}
	else
	{
		$('html')[0].style.height   = '100%';
		$('html')[0].style.overflow = 'hidden';
		if (!init_l)
		{
			document.getElementById('pageholder').style.display='none';		
			document.getElementById('pageholder').innerHTML = '';
			
			if (init_anoupload)
			{	
				if (ul_method)
				{
					document.getElementById('topmenu').innerHTML = '';
					document.getElementById('start_button1').style.display='none';
					document.getElementById('start_uploadbutton').style.width='1px';
					document.getElementById('start_uploadbutton').style.height='1px';
				}
				else
				{
					document.getElementById('nstartholder').style.display='none';
					document.getElementById('nstartholder').innerHTML = '';				
				}
			}
			else
			{
				document.getElementById('nstartholder').style.display='none';
				document.getElementById('nstartholder').innerHTML = '';
			}
		}	
		if (!mobileversion) document.getElementById('topmenufm').innerHTML = parsetopmenu();
		addmenuoptions();
		$j('#menu_hover').tooltip({  position: "bottom center"});
		$j('#language_hover').tooltip({ position: "bottom center"});				
		
		if (!init_l) document.getElementById('fmholder').style.display='';		
		if (!fmstarted)
		{
			if ((mobileversion) && (!mfmloaded) && (!mobileparsed)) 
			{
				parsepage(pages['mfm']);
				init_mfm();
			}
					
			startfm();				
		}
		else
		{
			if ((document.location.hash.replace('#','').substr(0,2) == 'fm') && (folderlink))
			{
				folderlink=false;
				reloadfm();			
			}
			else if ((document.location.hash.replace('#','').substr(0,2) == 'F!') && (!folderlink))
			{
				folderlink=true;
				reloadfm();			
			}
			else if ((folderlink) && (folderlink != pfid)) reloadfm();			
			
			if (mobileversion)
			{
				mobileui();
			}
			else
			{			
				document.getElementById('topmenufm').style.display='';
				mainpanel.doComponentLayout();
			}

		}
	}
}



function is_fm()
{	

	if (((u_type !== false) && (page == '')) || ((u_type !== false) && (page == 'fm')) || ((u_type !== false) && (page == 'start')) || (pfid)) return true;
	else
	{
		return false;
	}
}

var dlid=false;
var dlkey=false;
var cn_url=false;
var init_l=true;

var pfkey = false;
var pfid = false;

var n_h = false;
var n_k_aes = false;

function init_page()
{
	
	
	if (extjsloaded && u_checked)
	{	
		if (mobileversion)
		{
			loadingDialog.show = function() 
			{ 
				if (iOS_isiOSDevice()) 
				{
					var s = iOS_getViewportSize();
					$('.overlay').height(s.height);
					iOS_disableScrolling();
				}
				$('.overlay').removeClass('hidden');
				$('.load').removeClass('hidden');			
			};
			loadingDialog.hide = function() 
			{ 
				$('.overlay').addClass('hidden'); 
				$('.load').addClass('hidden'); 				
				if (iOS_isiOSDevice()) iOS_enableScrolling();				
			};
			
			if (u_type == 3) mobilekeygen=false;
		}
	
	
		subpage='';				
		if (d) console.log(page);		
		
		if (dl_legacy_ie) document.getElementById('startswfdiv').innerHTML = '<object data="/downloader.swf" id="start_downloaderswf" type="application/x-shockwave-flash" height="0" width="0"><param name="wmode" value="transparent"><param value="always" name="allowscriptaccess"><param value="all" name="allowNetworking"></object>';
		
		
		page = page.replace('%21','!');
		
		if ((page.substr(0,1) == '!') && (page.length > 1))
		{							
			dlkey=false;
			var ar = page.substr(1,page.length-1).split('!');					
			if (d) console.log(ar);			
			if (ar[0]) dlid  = ar[0].replace(/[^a-z^A-Z^0-9^_^-]/g,"");
			if (ar[1]) dlkey = ar[1].replace(/[^a-z^A-Z^0-9^_^-]/g,"");
		}
		
		
		
		if ((page.substr(0,2) == 'F!') && (page.length > 2))
		{							
			var ar = page.substr(2,page.length-1).split('!');					
			if (d) console.log(ar);	
			
			if (ar[0]) pfid  = ar[0].replace(/[^a-z^A-Z^0-9^_^-]/g,"");
			if (ar[1]) pfkey = ar[1].replace(/[^a-z^A-Z^0-9^_^-]/g,"");
			
			n_h = pfid;	
			u_n = pfid;
			
			page = 'fm';	
		}
		else
		{
			n_h = false;
			u_n = false;
			pfkey=false;
			pfid=false;			
		}
		
		confirmcode = false;		
		pwchangecode = false;
		
		if ((page.substr(0,2) == 'fm') && (page.length > 2))
		{			
			fmdirid = page.substr(2,page.length-2).replace(/[^a-z^A-Z^0-9^_^-]/g,"");
			page = 'fm';
					
			if (folderlink) reloadfm();
		}
		
		if (!is_fm())
		{	
			init_l=false;
			document.getElementById('loading').style.display='none';			
		}
		
		if (page.substr(0,7) == 'confirm')
		{
			confirmcode = page.replace("confirm","");
			page = 'confirm';
		}
		

		if (page.substr(0,7) == 'pwreset')
		{
			resetpwcode = page.replace("pwreset","");
			page = 'resetpassword';
		}
		
		if (page.substr(0,5) == 'newpw')
		{
			pwchangecode = page.replace("newpw","");
			page = 'newpw';
		}
		
		if (page.substr(0,4) == 'help')
		{
			if (page.length > 4) subpage = page.substr(5,page.length-1)
			page = 'help';
		}
				
		if (page.substr(0,15) == 'copyrightnotice')
		{
			if (page.length > 15) cn_url = base64urldecode(page.substr(15,page.length-1));
			page = 'copyrightnotice';
		}
		
		if (!b_u)
		{
			try { localStorage.test = '1'; }
			catch(err) { page = 'chrome'; chrome_msg = 'an essential browser feature seems disabled and prevents you from accessing MEGA.<br>Please make sure your browser allows local data to be set.'; }	
		}	
		if ((page.substr(0,4) == 'blog') && (page.length > 4))
		{
			blogid = page.substr(5,page.length-2);		
			page = 'blogarticle';			
		}		
		
		
		if (page.substr(0,6) == 'signup')
		{
			signupcode = subpage = page.substr(6,page.length-1);			
			var req = 
			{ 
			  a: 'uv',
			  c: signupcode
			};			
			api_req([req],
			{ 
			  callback : function (json,params)
			  {
				if ((typeof json[0] == 'number') && (json[0] < 0))
				{				
					alert('Invalid signup code!');
					if (mobileversion)
					{
						parsepage(pages['mfm']);
						mobileui();				
					}
					else
					{
						parsepage(pages['nstart']);
						init_nstart();
					}
				}
				else
				{	
					if (mobileversion)
					{
						page = 'register';
						parsepage(pages['mfm']);
						mobileui();											
					}
					else
					{
						parsepage(pages['register']);					
						init_register();					
					}		
					register_signup(json[0]);					
				}
			  }
			});			
		}	
		else if (page == 'newpw')
		{		
			setpwset(pwchangecode,{callback: function(res) 
			{
				loadingDialog.hide();
				if ((res[0] == EACCESS) || (res[0] == 0)) alert(l[727]);
				else if(res[0] == EEXPIRED) alert(l[728]);
				else if(res[0] == ENOENT) alert(l[729]);
				else alert(l[200]);				
				if (u_type == 3)
				{
					page = 'account';
					parsepage(pages['account']);
					load_acc();
				}
				else
				{
					page = 'login';
					parsepage(pages['login']);
					init_login();				
				}
			}});
		}
		else if (page == 'confirm')
		{		
			var ctx = 
			{
				signupcodeok: function(email,name)
				{
					confirmok=true;
					page = 'login';
					
					if (mobileversion)
					{
						parsepage(pages['mfm']);
						mobileui();						
					}
					else
					{
						parsepage(pages['login']);
						login_txt = l[378];					
						init_login();						
						document.getElementById('login_title').innerHTML = 'Confirm';												
					}
					document.getElementById('login_password').value = '';
					document.getElementById('login_password').focus();
					document.getElementById('login_email').value = email;
					document.getElementById('login_email').readOnly=true;
					document.getElementById('login_button').innerHTML = 'Confirm';
				},
				signupcodebad: function(res)
				{
					if (res == EINCOMPLETE) alert(l[703]);										
					else if (res == ENOENT) login_txt = l[704];
					else alert(l[705] + res);					
					page = 'login';
					parsepage(pages['login']);
					init_login();
				}
			}
			verifysignupcode(confirmcode,ctx);		
		}		
		else if (u_type == 2)
		{
			if (mobileversion)
			{
				mobilekeygen=true;
				parsepage(pages['mfm']);
				mobileui();			
			}
			else parsepage(pages['key']);			
						
			if (typeof u_privk == 'undefined')
			{	
				genkey();
			}
		}	
		else if ((page == 'login') && (mobileversion))
		{
			parsepage(pages['mfm']);
			mobileui();
		}		
		else if (page == 'login')
		{
			parsepage(pages['login']);
			init_login();
		}		
		else if (page == 'resetpassword')
		{
			api_req([{a: 'upkc', uk: resetpwcode}],
			{ 
				callback : function (json,params) 
				{
					if (typeof json[0] == 'string')
					{	
						
						resetpwemail = json[0];
						parsepage(pages['forgotpassword']);
						fp_init(true);					
					}
					else
					{
						if (json[0] == EEXPIRED) alert(l[743]);
						else alert(l[744]);
						parsepage(pages['forgotpassword']);
						fp_init(false);							
					}		
				}
			});
		}
		else if (page == 'forgotpassword')
		{
			parsepage(pages['forgotpassword']);
			fp_init(false);
		}
		else if (page == 'investors')
		{
			parsepage(pages['investors']);
		}
		else if ((page == 'register') && (mobileversion))
		{
			parsepage(pages['mfm']);
			mobileui();
		}
		else if (page == 'register')
		{
			parsepage(pages['register']);
			init_register();
		}
		else if (page == 'chrome')
		{
			parsepage(pages['chrome']);
			init_chrome();
		}
		else if (page == 'key')
		{
			parsepage(pages['key']);
		}
		else if (page == 'contact')
		{
			parsepage(pages['contact']);
		}
		else if ((page == 'help') && (subpage != ''))
		{
			parsepage(pages['help']);
			init_helpsub();
		}
		else if (page == 'help')
		{
			if (mobileversion)
			{
				parsepage(pages['mfm']);
				mobileui();
			}
			else
			{
				parsepage(pages['help']);
				init_help();
			}
		}
		else if (page == 'privacy')
		{
			if (mobileversion) 
			{
				parsepage(pages['mfm']);
				mobileui();			
			}
			else parsepage(pages['privacy']);
		}
		else if (page == 'privacycompany')
		{
			parsepage(pages['privacycompany']);
			privacycompany_init();
		}
		else if (page == 'developers')
		{
			parsepage(pages['developers']);
			dev_init();
		}
		else if (page == 'about')
		{
			if (mobileversion) 
			{
				parsepage(pages['mfm']);
				mobileui();			
			}
			else parsepage(pages['about']);
		}
		else if (page == 'terms')
		{
			if (mobileversion) 
			{
				parsepage(pages['mfm']);
				mobileui();			
			}
			else parsepage(pages['terms']);
		}
		else if (page == 'resellerintro')
		{
			parsepage(pages['resellerintro']);
		}
		else if (page == 'download')
		{
			parsepage(pages['download']);
		}
		else if (page == 'blog')
		{
			parsepage(pages['blog']);
			init_blog();
		}
		else if (page == 'blogarticle')
		{
			parsepage(pages['blogarticle']);
			init_blogarticle();
		}
		else if (page == 'copyright')
		{
			parsepage(pages['copyright']);
		}
		else if (page == 'resellers')
		{
			parsepage(pages['resellers']);
		}
		else if (page.substr(0,3) == 'pro')
		{
			if (mobileversion)
			{
				parsepage(pages['mfm']);
				mobileui();		
			}
			else parsepage(pages['pro']);				
			
			init_pro();
		}
		else if (page == 'hosting')
		{
			parsepage(pages['hosting']);
		}
		else if ((page == 'resellerapp') && (!u_type))
		{
			login_txt = l[376];
			parsepage(pages['login']);
			init_login();
		}
		else if (page == 'resellerapp')
		{
			parsepage(pages['resellerapp']);
			init_resellerapp();
		}
		else if (page == 'flash')
		{
			parsepage(pages['flash']);
		}
		else if (page == 'takedown')
		{
			parsepage(pages['takedown']);
			init_takedown();
		}
		else if (page == 'takedown2')
		{
			parsepage(pages['takedown2']);
		}
		else if (page == 'done')
		{
			if (!done_text1)
			{
				done_text1 = 'Test123';
				done_text2 = 'Test1234';
			}		
			parsepage(pages['done']);
			init_done();
		}
		else if ((page.substr(0,7) == 'account') && ((u_type === false) && ((mobileversion) && (!u_type))))
		{
			if (mobileversion) 
			{			
				page = 'login';
				parsepage(pages['mfm']);
				mobileui();				
			}
			else
			{
				if (u_type == false)
				{
					login_txt = l[376];
					parsepage(pages['login']);
					init_login();
				}
				else
				{
					parsepage(pages['register']);
					init_register();
				}
			}
		}
		else if (page.substr(0,7) == 'account')
		{
			if (mobileversion) 
			{
				parsepage(pages['mfm']);
				mobileui();
				mload_acc();
			}
			else
			{
				parsepage(pages['account']);
				load_acc();
			}
		}
		else if (page == 'copyrightnotice')
		{
			parsepage(pages['copyrightnotice']);
			init_cn();
		}
		else if (dlid)
		{			
			if (d) console.log(dlid);
			if (d) console.log(dlkey);
			page = 'download';		
			parsepage(pages['download']);
			dlinfo(dlid,dlkey,false);			
		}
		else if (is_fm())
		{	
			if (fmstarted)
			{
				if (fmdirid == 'inbox') opendirectory(InboxID);
				else if (fmdirid == 'rubbish') opendirectory(TrashbinID);
				else if (fmdirid == 'contacts') opendirectory(NetworkID);				
				else if (((!fmdirid) && (currentdirid != RootID)) && (mobileversion)) opendirectory(RootID);
				else if (currentdirid != fmdirid) opendirectory(fmdirid);				
				else fmdirid = false;
			}
			init_page_fm();
		}
		else if ((pages[page]) && (!mobileversion))
		{
			parsepage(pages[page]);
			if (init_f[page]) init_f[page]();
		}
		else if(mobileversion)
		{		
			page = 'login';
			parsepage(pages['mfm']);
			mobileui();
		}
		else
		{		
			page = 'start';
			parsepage(pages['nstart']);
			init_nstart();
		}
	}
	else 
	{
		if (d) console.log(extjsloaded);
		if (d) console.log(u_checked);	
	}
}



if (ie9)
{
	function checktitle()
	{
		if (document.title !== 'MEGA') document.title = 'MEGA';
		setTimeout("checktitle()",500);
	}	
	setTimeout("checktitle()",1000);
}


window.onhashchange = function()
{	
	var tpage = document.location.hash;
	if ((downloading || ul_uploading))
	{			
		if ((is_fm()) && (document.location.hash.substr(0,3) == '#fm')) return false;
		var h = document.location.hash;
		document.location.hash = hash;							
		alert(l[375]);
		return false;
	}	
	if ((document.getElementById('overlay').style.display == '') && (!is_fm()))
	{			
		document.location.hash = hash;
		return false;
	}	
	if (ext_loading_dialog)
	{			
		document.location.hash = hash;
		return false;
	}
	
	dlid=false;
	hash = window.location.hash;
	if (window.location.hash) page = window.location.hash.replace('#','');
	else page = '';
	init_page();
}	



window.onbeforeunload = function ()
{
	if ((downloading) || (ul_uploading)) return l[377];
}


var ffsession = Math.random();
var megaffv=false;

function showfirefoxDialog()
{
	if (!megaffv) firefoxDialog.show();
}

function hasMegaExtension()
{	
	var element = document.createElement("MyExtensionDataElement");		
	element.setAttribute("l-239", l[239]);
	element.setAttribute("l-756", l[756]);
	element.setAttribute("l-757", l[757]);
	element.setAttribute("l-758", l[758]);
	element.setAttribute("l-759", l[759]);
	element.setAttribute("megacheck", '1');	
	element.setAttribute("session", ffsession);
	document.documentElement.appendChild(element);
	var ev = document.createEvent("Events");
	ev.initEvent("MegaCallBack", true, false);
	element.dispatchEvent(ev);
}

function ffe_createtmp()
{
	var element = document.createElement("MyExtensionDataElement");	
	element.setAttribute("createtmp", '1');
	element.setAttribute("session", ffsession);
	document.documentElement.appendChild(element);
	var ev = document.createEvent("Events");
	ev.initEvent("MegaCallBack", true, false);
	element.dispatchEvent(ev);
}

function ffe_complete(filename,path)
{
	var element = document.createElement("MyExtensionDataElement");	
	element.setAttribute("complete", '1');
	element.setAttribute("filename", filename);
	if (path) element.setAttribute("filepath", path);
	element.setAttribute("session", ffsession);
	document.documentElement.appendChild(element);
	var ev = document.createEvent("Events");
	ev.initEvent("MegaCallBack", true, false);
	element.dispatchEvent(ev);
}

function ffe_writechunk(data,pos)
{
	var ffextdata = document.createElement("MyExtensionDataElement");	
	document.documentElement.appendChild(ffextdata);
	var ffextev = document.createEvent("Events");
	ffextev.initEvent("MegaCallBack", true, false);
	ffextdata.setAttribute("filepos", pos);
	ffextdata.setAttribute("filechunk", data);
	ffextdata.setAttribute("session", ffsession);	
	ffextdata.dispatchEvent(ffextev);
}


function MegaExtensionCallback(EvtAnswer)
{
  if (EvtAnswer.target.getAttribute("session") ==! ffsession) return false;  
  if (EvtAnswer.target.getAttribute("check") == '1')
  {
	megaffv = EvtAnswer.target.getAttribute("version");	
	dl_method=3;
  }    
}

document.addEventListener("MegaExtensionCallback", function(e) { MegaExtensionCallback(e); }, false, true);


hasMegaExtension();






var BinaryFile = function(strData, iDataOffset, iDataLength) {
	var data = strData;
	var dataOffset = iDataOffset || 0;
	var dataLength = 0;

	this.getRawData = function() {
		return data;
	}

	if (typeof strData == "string") {
		dataLength = iDataLength || data.length;

		this.getByteAt = function(iOffset) {
			return data.charCodeAt(iOffset + dataOffset) & 0xFF;
		}

		this.getBytesAt = function(iOffset, iLength) {
			var aBytes = [];

			for (var i = 0; i < iLength; i++) {
				aBytes[i] = data.charCodeAt((iOffset + i) + dataOffset) & 0xFF
			};

			return aBytes;
		}
	} else if (typeof strData == "unknown") {
		dataLength = iDataLength || IEBinary_getLength(data);

		this.getByteAt = function(iOffset) {
			return IEBinary_getByteAt(data, iOffset + dataOffset);
		}

		this.getBytesAt = function(iOffset, iLength) {
			return new VBArray(IEBinary_getBytesAt(data, iOffset + dataOffset, iLength)).toArray();
		}
	}

	this.getLength = function() {
		return dataLength;
	}

	this.getSByteAt = function(iOffset) {
		var iByte = this.getByteAt(iOffset);
		if (iByte > 127)
			return iByte - 256;
		else
			return iByte;
	}

	this.getShortAt = function(iOffset, bBigEndian) {
		var iShort = bBigEndian ? 
			(this.getByteAt(iOffset) << 8) + this.getByteAt(iOffset + 1)
			: (this.getByteAt(iOffset + 1) << 8) + this.getByteAt(iOffset)
		if (iShort < 0) iShort += 65536;
		return iShort;
	}
	this.getSShortAt = function(iOffset, bBigEndian) {
		var iUShort = this.getShortAt(iOffset, bBigEndian);
		if (iUShort > 32767)
			return iUShort - 65536;
		else
			return iUShort;
	}
	this.getLongAt = function(iOffset, bBigEndian) {
		var iByte1 = this.getByteAt(iOffset),
			iByte2 = this.getByteAt(iOffset + 1),
			iByte3 = this.getByteAt(iOffset + 2),
			iByte4 = this.getByteAt(iOffset + 3);

		var iLong = bBigEndian ? 
			(((((iByte1 << 8) + iByte2) << 8) + iByte3) << 8) + iByte4
			: (((((iByte4 << 8) + iByte3) << 8) + iByte2) << 8) + iByte1;
		if (iLong < 0) iLong += 4294967296;
		return iLong;
	}
	this.getSLongAt = function(iOffset, bBigEndian) {
		var iULong = this.getLongAt(iOffset, bBigEndian);
		if (iULong > 2147483647)
			return iULong - 4294967296;
		else
			return iULong;
	}

	this.getStringAt = function(iOffset, iLength) {
		var aStr = [];

		var aBytes = this.getBytesAt(iOffset, iLength);
		for (var j=0; j < iLength; j++) {
			aStr[j] = String.fromCharCode(aBytes[j]);
		}
		return aStr.join("");
	}

	this.getCharAt = function(iOffset) {
		return String.fromCharCode(this.getByteAt(iOffset));
	}
	this.toBase64 = function() {
		return window.btoa(data);
	}
	this.fromBase64 = function(strBase64) {
		data = window.atob(strBase64);
	}
}










var EXIF = (function() {

    var debug = false;

    var ExifTags = {

        // version tags
        0x9000 : "ExifVersion",			// EXIF version
        0xA000 : "FlashpixVersion",		// Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",			// Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",		// Valid width of meaningful image
        0xA003 : "PixelYDimension",		// Valid height of meaningful image
        0x9101 : "ComponentsConfiguration",	// Information about channels
        0x9102 : "CompressedBitsPerPixel",	// Compressed bits per pixel

        // user information
        0x927C : "MakerNote",			// Any desired information written by the manufacturer
        0x9286 : "UserComment",			// Comments by user

        // related file
        0xA004 : "RelatedSoundFile",		// Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",		// Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",		// Date and time when the image was stored digitally
        0x9290 : "SubsecTime",			// Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",		// Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",		// Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",		// Exposure time (in seconds)
        0x829D : "FNumber",			// F number
        0x8822 : "ExposureProgram",		// Exposure program
        0x8824 : "SpectralSensitivity",		// Spectral sensitivity
        0x8827 : "ISOSpeedRatings",		// ISO speed rating
        0x8828 : "OECF",			// Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",		// Shutter speed
        0x9202 : "ApertureValue",		// Lens aperture
        0x9203 : "BrightnessValue",		// Value of brightness
        0x9204 : "ExposureBias",		// Exposure bias
        0x9205 : "MaxApertureValue",		// Smallest F number of lens
        0x9206 : "SubjectDistance",		// Distance to subject in meters
        0x9207 : "MeteringMode", 		// Metering mode
        0x9208 : "LightSource",			// Kind of light source
        0x9209 : "Flash",			// Flash status
        0x9214 : "SubjectArea",			// Location and area of main subject
        0x920A : "FocalLength",			// Focal length of the lens in mm
        0xA20B : "FlashEnergy",			// Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",	// 
        0xA20E : "FocalPlaneXResolution", 	// Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution", 	// Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit", 	// Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",		// Location of subject in image
        0xA215 : "ExposureIndex",		// Exposure index selected on camera
        0xA217 : "SensingMethod", 		// Image sensor type
        0xA300 : "FileSource", 			// Image source (3 == DSC)
        0xA301 : "SceneType", 			// Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",			// Color filter array geometric pattern
        0xA401 : "CustomRendered",		// Special processing
        0xA402 : "ExposureMode",		// Exposure mode
        0xA403 : "WhiteBalance",		// 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",		// Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",	// Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",		// Type of scene
        0xA407 : "GainControl",			// Degree of overall image gain adjustment
        0xA408 : "Contrast",			// Direction of contrast processing applied by camera
        0xA409 : "Saturation", 			// Direction of saturation processing applied by camera
        0xA40A : "Sharpness",			// Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",	// 
        0xA40C : "SubjectDistanceRange",	// Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"		// Identifier assigned uniquely to each image
    };

    var TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

    var StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) { 
            element.addEventListener(event, handler, false); 
        } else if (element.attachEvent) { 
            element.attachEvent("on" + event, handler); 
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }

    function getImageData(binarystring) 
	{      
		var data = findEXIFinJPEG(binarystring);
		return data || {};		 
    }

    function findEXIFinJPEG(file) {
        if (file.getByteAt(0) != 0xFF || file.getByteAt(1) != 0xD8) {
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.getLength(),
            marker;

        while (offset < length) {
            if (file.getByteAt(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + file.getByteAt(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = file.getByteAt(offset+1);

            // we could implement handling for other markers here, 
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 22400) {
                if (debug) console.log("Found 0xFFE1 marker");
                
                return readEXIFData(file, offset + 4, file.getShortAt(offset+2, true)-2);
                
                // offset += 2 + file.getShortAt(offset+2, true);

            } else if (marker == 225) {
                // 0xE1 = Application-specific 1 (for EXIF)
                if (debug) console.log("Found 0xFFE1 marker");
                
                return readEXIFData(file, offset + 4, file.getShortAt(offset+2, true)-2);

            } else {
                offset += 2 + file.getShortAt(offset+2, true);
            }

        }

    }


    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getShortAt(dirStart, bigEnd),
            tags = {}, 
            entryOffset, tag,
            i;
            
        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getShortAt(entryOffset, bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getShortAt(entryOffset, bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getShortAt(entryOffset+2, bigEnd),
            numValues = file.getLongAt(entryOffset+4, bigEnd),
            valueOffset = file.getLongAt(entryOffset+8, bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getByteAt(entryOffset + 8, bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getByteAt(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return file.getStringAt(offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getShortAt(entryOffset + 8, bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getShortAt(offset + 2*n, bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getLongAt(entryOffset + 8, bigEnd);
                } else {
                    vals = [];
                    for (var n=0;n<numValues;n++) {
                        vals[n] = file.getLongAt(valueOffset + 4*n, bigEnd);
                    }
                    return vals;
                }

            case 5:	// rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getLongAt(valueOffset, bigEnd);
                    denominator = file.getLongAt(valueOffset+4, bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getLongAt(valueOffset + 8*n, bigEnd);
                        denominator = file.getLongAt(valueOffset+4 + 8*n, bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getSLongAt(entryOffset + 8, bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getSLongAt(valueOffset + 4*n, bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getSLongAt(valueOffset, bigEnd) / file.getSLongAt(valueOffset+4, bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getSLongAt(valueOffset + 8*n, bigEnd) / file.getSLongAt(valueOffset+4 + 8*n, bigEnd);
                    }
                    return vals;
                }
        }
    }


    function readEXIFData(file, start) {
        if (file.getStringAt(start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + file.getStringAt(start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getShortAt(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getShortAt(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getShortAt(tiffOffset+2, bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        if (file.getLongAt(tiffOffset+4, bigEnd) != 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset not 8)", file.getShortAt(tiffOffset+4, bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset+8, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" : 
                    case "GainControl" : 
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" : 
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;
        
                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;
        
                    case "ComponentsConfiguration" : 
                        exifData[tag] = 
                            StringValues.Components[exifData[tag][0]]
                            + StringValues.Components[exifData[tag][1]]
                            + StringValues.Components[exifData[tag][2]]
                            + StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" : 
                        gpsData[tag] = gpsData[tag][0] 
                            + "." + gpsData[tag][1] 
                            + "." + gpsData[tag][2] 
                            + "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        return tags;
    }


    function getData(img, callback) 
	{
        if (!img.complete) return false;
        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    function getTag(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }

    function getAllTags(img) {
        if (!imageHasData(img)) return {};
        var a, 
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    function pretty(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    function readFromBinaryFile(file) {
        return findEXIFinJPEG(file);
    }

   
    return {
        readFromBinaryFile : readFromBinaryFile,
        pretty : pretty,
        getTag : getTag,
        getAllTags : getAllTags,
        getData : getData,
		getImageData: getImageData,
        
        Tags : ExifTags,
        TiffTags : TiffTags,
        GPSTags : GPSTags,
        StringValues : StringValues
    };

})();

/**
 * Mega pixel image rendering library for iOS6 Safari
 *
 * Fixes iOS6 Safari's image file rendering issue for large size image (over mega-pixel),
 * which causes unexpected subsampling when drawing it in canvas.
 * By using this library, you can safely render the image with proper stretching.
 *
 * Copyright (c) 2012 Shinichi Tomita <shinichi.tomita@gmail.com>
 * Released under the MIT license
 */
(function() {

  /**
   * Detect subsampling in loaded image.
   * In iOS, larger images than 2M pixels may be subsampled in rendering.
   */
  function detectSubsampling(img) {
    var iw = img.naturalWidth, ih = img.naturalHeight;
    if (iw * ih > 1024 * 1024) { // subsampling may happen over megapixel image
      var canvas = document.createElement('canvas');
      canvas.width = canvas.height = 1;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, -iw + 1, 0);
      // subsampled image becomes half smaller in rendering size.
      // check alpha channel value to confirm image is covering edge pixel or not.
      // if alpha value is 0 image is not covering, hence subsampled.
      return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
    } else {
      return false;
    }
  }

  /**
   * Detecting vertical squash in loaded image.
   * Fixes a bug which squash image vertically while drawing into canvas for some images.
   */
  function detectVerticalSquash(img, iw, ih) {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = ih;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0, 0, 1, ih).data;
    // search image edge pixel position in case it is squashed vertically.
    var sy = 0;
    var ey = ih;
    var py = ih;
    while (py > sy) {
      var alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    var ratio = (py / ih);
    return (ratio===0)?1:ratio;
  }

  /**
   * Rendering image element (with resizing) and get its data URL
   */
  function renderImageToDataURL(img, options) {
    var canvas = document.createElement('canvas');
    renderImageToCanvas(img, canvas, options);
    return canvas.toDataURL("image/jpeg", options.quality || 0.8);
  }

  /**
   * Rendering image element (with resizing) into the canvas element
   */
  function renderImageToCanvas(img, canvas, options) {
    var iw = img.naturalWidth, ih = img.naturalHeight;
    var width = options.width, height = options.height;
    var ctx = canvas.getContext('2d');
    ctx.save();
    transformCoordinate(canvas, width, height, options.orientation);
    var subsampled = detectSubsampling(img);
    if (subsampled) {
      iw /= 2;
      ih /= 2;
    }
    var d = 1024; // size of tiling canvas
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tmpCanvas.height = d;
    var tmpCtx = tmpCanvas.getContext('2d');
    var vertSquashRatio = detectVerticalSquash(img, iw, ih);
    var dw = Math.ceil(d * width / iw);
    var dh = Math.ceil(d * height / ih / vertSquashRatio);
    var sy = 0;
    var dy = 0;
    while (sy < ih) {
      var sx = 0;
      var dx = 0;
      while (sx < iw) {
        tmpCtx.clearRect(0, 0, d, d);
        tmpCtx.drawImage(img, -sx, -sy);
        ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
        sx += d;
        dx += dw;
      }
      sy += d;
      dy += dh;
    }
    ctx.restore();
    tmpCanvas = tmpCtx = null;
  }

  /**
   * Transform canvas coordination according to specified frame size and orientation
   * Orientation value is from EXIF tag
   */
  function transformCoordinate(canvas, width, height, orientation) {
    switch (orientation) {
      case 5:
      case 6:
      case 7:
      case 8:
        canvas.width = height;
        canvas.height = width;
        break;
      default:
        canvas.width = width;
        canvas.height = height;
    }
    var ctx = canvas.getContext('2d');
    switch (orientation) {
      case 2:
        // horizontal flip
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
        break;
      case 3:
        // 180 rotate left
        ctx.translate(width, height);
        ctx.rotate(Math.PI);
        break;
      case 4:
        // vertical flip
        ctx.translate(0, height);
        ctx.scale(1, -1);
        break;
      case 5:
        // vertical flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.scale(1, -1);
        break;
      case 6:
        // 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(0, -height);
        break;
      case 7:
        // horizontal flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(width, -height);
        ctx.scale(-1, 1);
        break;
      case 8:
        // 90 rotate left
        ctx.rotate(-0.5 * Math.PI);
        ctx.translate(-width, 0);
        break;
      default:
        break;
    }
  }


  /**
   * MegaPixImage class
   */
  function MegaPixImage(srcImage) {
    if (srcImage instanceof Blob) {
      var img = new Image();
      var URL = window.URL && window.URL.createObjectURL ? window.URL :
                window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL :
                null;
      if (!URL) { throw Error("No createObjectURL function found to create blob url"); }
      img.src = URL.createObjectURL(srcImage);
      srcImage = img;
    }
    if (!srcImage.naturalWidth && !srcImage.naturalHeight) {
      var _this = this;
      srcImage.onload = function() {
        var listeners = _this.imageLoadListeners;
        if (listeners) {
          _this.imageLoadListeners = null;
          for (var i=0, len=listeners.length; i<len; i++) {
            listeners[i]();
          }
        }
      };
      this.imageLoadListeners = [];
    }
    this.srcImage = srcImage;
  }

  /**
   * Rendering megapix image into specified target element
   */
  MegaPixImage.prototype.render = function(target, options) {
    if (this.imageLoadListeners) {
      var _this = this;
      this.imageLoadListeners.push(function() { _this.render(target, options) });
      return;
    }
    options = options || {};
    var imgWidth = this.srcImage.naturalWidth, imgHeight = this.srcImage.naturalHeight,
        width = options.width, height = options.height,
        maxWidth = options.maxWidth, maxHeight = options.maxHeight;
    if (width && !height) {
      height = (imgHeight * width / imgWidth) << 0;
    } else if (height && !width) {
      width = (imgWidth * height / imgHeight) << 0;
    } else {
      width = imgWidth;
      height = imgHeight;
    }
    if (maxWidth && width > maxWidth) {
      width = maxWidth;
      height = (imgHeight * width / imgWidth) << 0;
    }
    if (maxHeight && height > maxHeight) {
      height = maxHeight;
      width = (imgWidth * height / imgHeight) << 0;
    }
    var opt = { width : width, height : height };
    for (var k in options) opt[k] = options[k];

    var tagName = target.tagName.toLowerCase();
    if (tagName === 'img') {
      target.src = renderImageToDataURL(this.srcImage, opt);
    } else if (tagName === 'canvas') {
      renderImageToCanvas(this.srcImage, target, opt);
    }
    if (typeof this.onrender === 'function') {
      this.onrender(target);
    }
  };

  /**
   * Export class to global
   */
  if (typeof define === 'function' && define.amd) {
    define([], function() { return MegaPixImage; }); // for AMD loader
  } else {
    this.MegaPixImage = MegaPixImage;
  }

})();



var mfmloaded,murl;
var mfileinfo=false;
var mfolderinfo=false;
var mobilepage;

function mfolder(id)
{
	var h = FileStore.getById(id);		
	if ((h) && (h.get('folder')))
	{
		mfolderinfo=id;		
		var icon = staticpath + 'images/extension_large/folder.png';					
		if (sharednodes[h.get('id')]) icon = staticpath +  'images/extension_large/foldershared.png';
		else if (h.get('parentidid') == NetworkID) icon = staticpath + 'images/extension_large/vcard.png';			
		$('#mfolderinfo_name').text(h.get('name'));
		$('#mfolderinfo_img').attr('src',icon);	
		mobileui();		
	}
	console.log('folder details '+ id);
}


function mcleartrash()
{
	selectedRecords = [];
	if (confirm(l[15]))
	{	
		processopendir(TrashbinID);
		FileStore.each(function(el)
		{
			selectedRecords.push(el);
		});
		if (selectedRecords.length > 0) removefromtrash();
	}
}


function mobilepro(propack)
{	
	if (propack == 1)
	{
		$('.pro-features .pro-storage').html('500 GB <span class="red">Storage</span>');
		$('.pro-features .pro-bandwidth').html('1 TB <span class="red">Bandwidth</span>');	
		$('#mobilepro2_month').html('&euro; 9.99 per month');
		$('#mobilepro2_year').html('&euro; 99.99 per month');
	}
	else if (propack == 2)
	{
		$('.pro-features .pro-storage').html('2 TB <span class="red">Storage</span>');
		$('.pro-features .pro-bandwidth').html('4 TB <span class="red">Bandwidth</span>');	
		$('#mobilepro2_month').html('&euro; 19.99 per month');
		$('#mobilepro2_year').html('&euro; 199.99 per month');
	}
	else if (propack == 3)
	{
		$('.pro-features .pro-storage').html('4 TB <span class="red">Storage</span>');
		$('.pro-features .pro-bandwidth').html('8 TB <span class="red">Bandwidth</span>');	
		$('#mobilepro2_month').html('&euro; 29.99 per month');
		$('#mobilepro2_year').html('&euro; 299.99 per month');
	}	
	$('#mobilepro2_icon')[0].className = 'pro' + propack + '-icon';
	$('#mobilepro2_number')[0].className = 'pro' + propack + '-number';
	$('#mobilepro').hide();
	$('#mobilepro2').show();
}


function mobilebuypro(price)
{
	pro_paymentmethod = 'payment_paypal';	
	if ((!price) && (page.substr(3,4) == 1)) pro_package = 'pro1_month';
	else if ((price) && (page.substr(3,4) == 1)) pro_package = 'pro1_year';	
	else if ((!price) && (page.substr(3,4) == 2)) pro_package = 'pro2_month';
	else if ((price) && (page.substr(3,4) == 2)) pro_package = 'pro2_year';	
	else if ((!price) && (page.substr(3,4) == 3)) pro_package = 'pro3_month';
	else if ((price) && (page.substr(3,4) == 3)) pro_package = 'pro3_year';
	pro_pay();
}


function mimport()
{	
	alert('import');
}


function mdelete()
{
	var id,confirmstr;
	if (mfileinfo)
	{
		id = mfileinfo;
		confirmstr = 'Are you sure you want to move this file to the Rubbish Bin?';
	}
	if (mfolderinfo)
	{
		id = mfolderinfo;	
		confirmstr = 'Are you sure you want to move this folder to the Rubbish Bin?';
	}
	var h = FileStore.getById(id);	
	if (h)
	{
		if (confirm(confirmstr))
		{		
			selectedRecords[0] = h;
			fm_remove();
		}
	}
}


function mstartdl()
{
	var id;
	if (mfileinfo) id = mfileinfo;
	if (mfolderinfo) id = mfolderinfo;	
	
	var h = FileStore.getById(id);	
	if (h)
	{
		dl_type=4;
		adddownload([id]);
		dl_method=4;
		startdownload();
	}
}


function mcloserename()
{
	$("#rename-popup").addClass('hidden');
	$(".overlay").addClass('hidden');
	mobileui();
}

function mrename()
{
	var id;
	if (mfileinfo) id = mfileinfo;
	if (mfolderinfo) id = mfolderinfo;	
	
	var h = FileStore.getById(id);	
	if (h)
	{
		if (h.get('folder')) 
		{
			$('#rename-popup-header').text('Rename Folder');
			$('#rename-popup-descr').text('change the folder name:');			
		}
		else
		{
			$('#rename-popup-header').text('Rename File');
			$('#rename-popup-descr').text('change the file name:');					
		}
		selectedRecords[0] = h;
		$("#rename-popup").removeClass('hidden');
		$(".overlay").removeClass('hidden');
		$('#mobile_rename').val(h.get('name'));
		$('#mobile_rename').focus();
	}
}

function mdorename()
{
	dorename();
	mcloserename();
}


function mgetlink()
{
	var id;
	if (mfileinfo) 		id = mfileinfo;
	if (mfolderinfo) 	id = mfolderinfo;	
	var h = FileStore.getById(id);	
	if (h)
	{
		if (h.get('folder')) 
		{
			$('#getlink-popup-header').text('Folder Link');
			$('#getlink-popup-descr').text('URL to the folder:');			
		}
		else
		{
			$('#getlink-popup-header').text('Download Link');
			$('#getlink-popup-descr').text('URL to the file:');					
		}
		loadingDialog.show();
		selectedRecords[0] = h;
		requestlinks();
	}
}

function mcloselink()
{
	$("#getlink-popup").addClass('hidden');
	$(".overlay").addClass('hidden');
	mobileui();
}



function mshowlink(url)
{	
	murl = url;
	$('#memaillinkbtn').attr('href','mailto:?body=' + url);
	$("#getlink-popup").removeClass('hidden');
	$(".overlay").removeClass('hidden');
	$('#mobile_link').val(url);
	$('#mobile_link')[0].setSelectionRange(0, 9999);
}

function mfile(id)
{
	console.log('file details '+ id);	
	var h = FileStore.getById(id);	
	
	if ((h) && (!h.get('folder')))
	{
		mfileinfo=id;		
		var icon = fileicon(h.get('name'),0).replace('extension','extension_large');
		var thumbstyle = '';		
		if (thumbnails[h.get('id')])
		{
			icon = thumbnails[h.get('id')];					
			$('.file-info-img').addClass('image');
		}
		else $('.file-info-img').removeClass('image');
			
			
		$('#mfileinfo_name').text(h.get('name'));
		$('#mfileinfo_size').text(bytesToSize(h.get('size')));
		$('#mfileinfo_date').text(time2date(h.get('date')));
		$('#mfileinfo_img').attr('src',icon);		
		mobileui();
	}
}


function mopenfolder(id)
{
	console.log('open folder '+ id);	
	opendirectory(id);
}



function mback()
{
  console.log('mback()');
  
  if (page.substr(0,3) == 'pro')
  {
	document.location.hash = '#pro';  
  }
  else if ((mfileinfo) && (currentdirid))
  {
	mfileinfo=false;
	opendirectory(currentdirid,1);  
  }
  else if ((mfileinfo) && (!currentdirid))
  {
	mfileinfo=false;
	processsearch($('#mobile_searchtext').val());
  }
  else if ((mfolderinfo) && (currentdirid))
  {
    mfolderinfo=false;
	opendirectory(currentdirid,1);  
  }
  else if ((mfolderinfo) && (!currentdirid))
  {
    mfolderinfo=false;
	processsearch($('#mobile_searchtext').val());
  }
  else if (!currentdirid)
  {
	opendirectory(RootID);
	$('#mobile_searchtext').val('');
  }
  else
  {
	  var h = FileStore.getById(currentdirid);  
	  if (h)
	  {
		var parentid = h.get('parentid');
		h = FileStore.getById(parentid);	
		if ((h) || ((parentid == RootID) || (parentid == NetworkID) || (parentid == TrashbinID) || (parentid == InboxID))) opendirectory(parentid);
	  }
  }
}

function mobile_filesupported(filename)
{
	return false;
}


function mobileui()
{	
	
	if (!mobileversion) return false;
	console.log('mobileui()');
	
	$('#mobilefmholder').show();
	
	$("#new-folder-popup").addClass('hidden');
	if (!mupload_init) $(".overlay").addClass('hidden');	
	$("#add-popup").addClass('hidden');
	$('.top-add-icon').removeClass('active'); 
	$('.top-search-icon').removeClass('active'); 
	$("#search-popup").addClass('hidden');
	
	if (!mfmloaded) init_mfm();
 
	$('.top-trash-icon').hide();
	$('.top-search-icon').hide();
	$('.top-add-icon').hide();
	
	if (is_fm())
	{
		if ((currentdirid) && (RootbyId(currentdirid) == TrashbinID)) $('.top-trash-icon').show();
		else
		{		
			$('.top-search-icon').show();
			$('.top-add-icon').show();		
		}
	}
	
	if (((((currentdirid == RootID) || (currentdirid == TrashbinID) || (currentdirid == NetworkID) || (currentdirid == InboxID)) && is_fm()) || (page == 'pro') || (page == 'about') || (page == 'account') || (page == 'privacy') || (page == 'terms') || (page == 'help')) && (!mfileinfo) && (!mfolderinfo))
	{
		console.log('show menu');
		$('#mmenubtn').show();
		$('#mbackbtn').hide();
	}
	else
	{
		console.log('hide menu');
		$('#mmenubtn').hide();
		$('#mbackbtn').show();			
	}	
	
	$('#mobilegridholder').hide();
	$('#mobileemptyfolder').hide();
	$('#mobileemptycontacts').hide();
	$('#mobileemptysearch').hide();
	$('#mobileemptyinbox').hide();
	$('#mobileemptyrubbish').hide();
	$('#mobileemptycloud').hide();
	$('#mobilefileinfo').hide();
	$('#mobilefolderinfo').hide();
	$('#mobileaccount').hide();
	$('#mobilehelp').hide();
	$('#mobilecontent').hide();
	$('#mobilelogin').hide();
	$('#mobileregister').hide();	
	$('#mobilekey').hide();
	$('#mobiledone').hide();
	$('#mobilepro').hide();
	$('#mobilepro2').hide();	
	$('#mobilemainblock').removeClass('file-list');	
	$('#mobilemainblock').removeClass('account');	
	$('.page-bg').removeClass('bottom-pages');	
	
	if (mfileinfo)
	{			
		$('#mobilefileinfo').show();
		$('#mobilemainblock').addClass('account');		
		
		$('#mobile_file_delete').hide();
		$('#mobile_file_rename').hide();
		$('#mobile_file_clear2').hide();
		
		$('#mobile_file_import').hide();
		$('#mobile_file_link').hide();
		
		var h = FileStore.getById(mfileinfo);
		if (h)
		{
			if (mobile_filesupported(h.get('name')))
			{
				$('#mobile_file_open').removeClass('disabled');	
			}
			else
			{
				$('#mobile_file_open').addClass('disabled');	
			}		
			if (RootbyId(h.get('id')) == NetworkID)
			{
				$('#mobile_file_import').show();
				if (RightsbyID(h.get('id')) > 1)
				{
					$('#mobile_file_delete').show();
					$('#mobile_file_rename').show();
					$('#mobile_file_clear2').show();				
				}
			}
			else if (RootbyId(h.get('id')) == RootID)
			{
				$('#mobile_file_link').show();
				$('#mobile_file_delete').show();
				$('#mobile_file_rename').show();
				$('#mobile_file_clear2').show();			
			}			
		}
		
		
		$('#mobile_fcontrolbuttons').hide();
		$('#mobile_fownerbuttons').hide();
		$('#mobilefolderinfo .file-info-button-block').hide();
		var h = FileStore.getById(mfolderinfo);		
		if ((h) && (h.get('folder')))
		{
			if ((RootbyId(h.get('id')) == NetworkID) && (RightsbyID(h.get('id')) > 1))
			{
				$('#mobile_fcontrolbuttons').show();
				$('#mobilefolderinfo .file-info-button-block').show();
			}
			else if (RootbyId(h.get('id')) == RootID)
			{
				$('#mobile_fcontrolbuttons').show();
				$('#mobile_fownerbuttons').show();		
				$('#mobilefolderinfo .file-info-button-block').show();
			}
		}
		

	}
	else if (mfolderinfo)
	{
		$('#mobilefolderinfo').show();	
		$('#mobilemainblock').addClass('account');	
		$('#mobile_fcontrolbuttons').hide();
		$('#mobile_fownerbuttons').hide();
		$('#mobilefolderinfo .file-info-button-block').hide();
		var h = FileStore.getById(mfolderinfo);		
		if ((h) && (h.get('folder')))
		{
			if ((RootbyId(h.get('id')) == NetworkID) && (RightsbyID(h.get('id')) > 1))
			{
				$('#mobile_fcontrolbuttons').show();
				$('#mobilefolderinfo .file-info-button-block').show();
			}
			else if (RootbyId(h.get('id')) == RootID)
			{
				$('#mobile_fcontrolbuttons').show();
				$('#mobile_fownerbuttons').show();		
				$('#mobilefolderinfo .file-info-button-block').show();
			}
		}
	}	
	else if ((is_fm()) && (FileStore) && (FileStore.count() == 0))
	{
		if (currentdirid == RootID) $('#mobileemptycloud').show();
		else if (!currentdirid) $('#mobileemptysearch').show();
		else if(currentdirid == NetworkID) $('#mobileemptycontacts').show();
		else if(currentdirid == TrashbinID) $('#mobileemptyrubbish').show();
		else if(currentdirid == InboxID) $('#mobileemptyinbox').show();
		else $('#mobileemptyfolder').show();
	}
	else if (page.substr(0,3) == 'pro')
	{
		mobilepage = 'pro';
		$('#mobilemainblock').addClass('file-list');
		$('.top-block-title').text('Pro Membership');
		$('#mobilepro').show();		
		if (page.length > 3) mobilepro(page.substr(3,4));		
	}
	else if (page.substr(0,7) == 'account')
	{
		$('#mobilemainblock').addClass('account');	
		mobilepage = 'account';
		$('.top-block-title').text('Account');
		$('#mobileaccount').show();		
	}
	else if(page == 'privacy')
	{
		$('.top-block-title').text('Privacy Policy');
		$('.privacy-page').html(pages['privacy'].split('<div class="register-mid-pad">')[1].split('</div>')[0]);
		$('#mobilecontent').show();
		$('.page-bg').addClass('bottom-pages');		
	}
	else if(page == 'terms')
	{
		$('.top-block-title').text('Terms of Service');
		$('.privacy-page').html(pages['terms'].split('<div class="register-mid-pad">')[1].split('</div>')[0]);
		$('#mobilecontent').show();
		$('.page-bg').addClass('bottom-pages');
	}
	else if (mobilekeygen)
	{
		$('.top-block-title').text('Key generation');
		$('.privacy-page').html(pages['terms'].split('<div class="register-mid-pad">')[1].split('</div>')[0]);
		$('#mobilekey').show();
		$('.page-bg').addClass('bottom-pages');
	}
	else if(page == 'help')
	{
		$('.top-block-title').text('Help Centre');
		$('.page-bg').addClass('bottom-pages');	
		mobilehelp();
		$('#mobilehelp').show();
	}
	else if(page == 'login')
	{
		$('#mmenubtn').show();
		$('#mbackbtn').hide();	
		
		if (confirmok) $('.top-block-title').html('Confirm account');
		else $('.top-block-title').html('<img alt="Mega" src="' + staticpath + 'images/mobile/logo.png" />');
		$('#mobilelogin').show();
	}
	else if(page == 'done')
	{
		$('#mmenubtn').show();
		$('#mbackbtn').hide();	
		$('.top-block-title').html('<img alt="Mega" src="' + staticpath + 'images/mobile/logo.png" />');
		$('#mobiledone1').text(done_text1);
		$('#mobiledone2').text(done_text2);
		$('#mobiledone').show();		
	}
	else if(page == 'register')
	{
		$('#mmenubtn').show();
		$('#mbackbtn').hide();	
		$('.top-block-title').html('<img alt="Mega" src="' + staticpath + 'images/mobile/logo.png" />');
		$('#mobileregister').show();
	}
	else if(page == 'about')
	{
		$('.top-block-title').text('About Us');
		$('.privacy-page').html('<p>' + l[693] + '</p><br><br><img src="'+ staticpath + 'images/about_us_silhouette.png">');
		$('#mobilecontent').show();
		$('.page-bg').addClass('bottom-pages');			
	}
	else
	{	
		$('#mobilefileinfo').hide();
		$('#mobilegridholder').show();		
		$('#mobilemainblock').addClass('file-list');
	}
	if ((is_fm()) && (!mobilekeygen))
	{		
		if (RootbyId(currentdirid) == NetworkID)
		{
			var h = FileStore.getById(currentdirid);
			
			if ((h) && (h.get('parentid') == NetworkID)) 
			{
				$('.top-add-icon').hide();
				$('.top-block-title').text(Ext.util.Format.ellipsis(h.get('name'),20));
			}
			else if ((h) && (h.get('id') != NetworkID))
			{
				$('.top-block-title').text('Shared Folder');			
				if ((h) && (!RightsbyID(h.get('id')))) $('.top-add-icon').hide();
			}
			else 
			{
				$('.top-block-title').text('Contacts');	
				$('.top-add-icon').hide();
				
			}
		}
		else if (RootbyId(currentdirid) == TrashbinID) $('.top-block-title').text('Rubbish Bin');
		else if (RootbyId(currentdirid) == InboxID)
		{
			$('.top-block-title').text('Inbox');
			$('.top-add-icon').hide();
		}
		else $('.top-block-title').text('Cloud Drive');
	}
	
	
	if (iOS_isiPhone() || iOS_isiPod())
	{	
		setTimeout(function(){window.scrollTo(0, 1);},0);		
		
	}
	
	var h = iOS_getViewportSize();	
	$('#mobilefmholder').height(h.height);
	
	
	mobile_uploadbuttons();
	
	
	
	
}


function mobile_uploadbuttons()
{
	$('#mobile_fileselect1')[0].style.width = $('#mobileuploadbtn').width() + 'px';
	$('#mobile_fileselect2')[0].style.width = $('#mobileuploadbtn').width() + 'px'
	$('#mobile_fileselect3')[0].style.width = $('#mobileuploadbtn').width() + 'px'
	if ($('html').width() > 480)
	{
		// big mode
		$('#mobile_uploaddiv')[0].style.top = '20px';
		$('#mobile_uploaddiv')[0].style.left = '20px';		
		$('#mobile_fileselect1')[0].size = Math.round(($('#mobileuploadbtn').width()-100)/6);
		$('#mobile_fileselect2')[0].size = Math.round(($('#mobileuploadbtn').width()-100)/6);
		$('#mobile_fileselect3')[0].size = Math.round(($('#mobileuploadbtn').width()-100)/6);
		$('#mobile_fileselect2')[0].style.height = '20px';
		$('#mobile_fileselect3').show();
	}
	else
	{	
		// small mode
		$('#mobile_uploaddiv')[0].style.top = '10px';
		$('#mobile_uploaddiv')[0].style.left = '10px';
		$('#mobile_fileselect1')[0].size = Math.round(($('#mobileuploadbtn').width()-100)/6);
		$('#mobile_fileselect2')[0].size = Math.round(($('#mobileuploadbtn').width()-100)/6);
		$('#mobile_fileselect2')[0].style.height = '10px';
		$('#mobile_fileselect3').hide();		
	}
}



function mobilehelp()
{
	var helphtml = '';
	for(var i in helpdata)
	{
		helphtml += '<div class="help-left-links" onclick="mobilehelpclick(\'' + i + '\');" id="mobilehelp_' + i + '"><span class="help-left-lnk-txt"><span>' + helpdata[i].q +'</span></span><span class="help-left-lnk-description">' + helpdata[i].a + '</span></div>';	
	}
	$('#mobilehelp').html(helphtml);
}


function mobilehelpclick(id)
{
	if ($('#mobilehelp_' + id).attr('class').indexOf('active') == -1) $('#mobilehelp_' + id).addClass('active');
	else $('#mobilehelp_' + id).removeClass('active');
}


function mload_acc()
{	
	$('.account-username').text(u_attr.name);
	$('.account-email').text(u_attr.email);
	$('#mobileaccount').hide();
	loadingDialog.show();
	api_req([
	{ 
		a: 'uq',
		strg: 1,
		xfer: 1,
		pro: 1,
	}],
	{ 
		callback : function (json,params)
		{	
			$('#mobileaccount').show();		
			if (json[0].utype == 1) $('#mobile_accounttype').attr('class','account-pro1-icon');
			else if (json[0].utype == 2) $('#mobile_accounttype').attr('class','account-pro2-icon');
			else if (json[0].utype == 3) $('#mobile_accounttype').attr('class','account-pro3-icon');
			else $('#mobile_accounttype').attr('className','account-free-icon');			
			$('#mobile_acc_space').text(bytesToSize(Math.round(json[0].mstrg)));
			$('#mobile_acc_used').text(bytesToSize(Math.round(json[0].cstrg)));
			$('#mobile_acc_free').text(bytesToSize(Math.round(json[0].mstrg)-Math.round(json[0].cstrg)));			
			$('.storage-percentage-bg').width(Math.round(json[0].cstrg/json[0].mstrg*100) + '%');
			loadingDialog.hide();
		}
	});


}

function domsearch()
{
	$("#search-popup").addClass('hidden');
	$(".top-search-icon").removeClass('active'); 
	processsearch($('#mobile_searchtext').val());
	$('#mobile_searchtext').blur();
}


function mnewfolder()
{	
	$("#new-folder-popup").addClass('hidden');
	$(".overlay").addClass('hidden');
	mobileui();
	if(currentdirid)
	{	
		$('#mobile_newfoldername').blur();
		loadingDialog.show();		
		createfolder(currentdirid,$('#mobile_newfoldername').val());
	}
}


function mclosemenu()
{
	$(".page-bg").css('margin-right','0px');
	$(".page-bg").removeClass('opened');
	$('#mmenubtn').removeClass('active');
	iOS_enableScrolling();
}

var mupload_init=false;

function initmobileupload()
{
	if (mupload_init) return false;		
	mobileui();
	$('.upload-status-txt').text('');
	$('.upload-status-txt').removeClass('complete');
	$('.uploadpopbtn').text('Cancel');		
	$('.upload-speed-bg2').text('Initializing');	
	$('.upload-status-txt').hide();			
	$('#uploadPopup').show();
	$('.overlay').height($('html').height());
	$('.overlay').removeClass('hidden');
	mupload_init=true;
}


function mcloseupload()
{
	if (ul_uploading)
	{	
		if (confirm('Do you want to abort your upload?'))
		{	
			
		}
		else return false;				
	}	
	$('.upload-percentage-bar').width('0%');
	$('#uploadPopup').hide();
	$('.overlay').addClass('hidden');	
	$('#uploadpopbtn').text('Cancel');
	mobileuploads = [];
	mupload_init=false;
	mobile_ul_completed=false;
}


function init_mfm()
{	
	
	$('#mobile_fileselect1')[0].addEventListener("change", FileSelectHandler, false);
	$('#mobile_fileselect2')[0].addEventListener("change", FileSelectHandler, false);
	$('#mobile_fileselect3')[0].addEventListener("change", FileSelectHandler, false);
	

	mfmloaded=true;

	console.log('init_mfm()');
	

	var j = 0;
	var i = 0;
	var rightPad = 0;

	var screenSize = $(window).width();
	
	if(screenSize < 420) 
	{
		rightPad = 39;
	} 
	else rightPad = 57;
	
	

	// open add file / folder dialog
	$("#top-add-icon").click(function() 
	{		
		if ($("#add-popup").attr('class').indexOf('hidden') != -1) 
		{					
			$("#add-popup").removeClass('hidden');
			$(this).addClass('active');		
			$("#search-popup").addClass('hidden');
			$('.top-search-icon').removeClass('active');	
			mobile_uploadbuttons();			
		} 
		else 	
		{
			$("#add-popup").addClass('hidden');
			$(this).removeClass('active'); 
		}
	});

	// open search dialog
	$(".top-search-icon").click(function() 
	{	
		if (iOS_isiPhone() || iOS_isiPod()) setTimeout(function(){window.scrollTo(0, 1);},0);
		
		if ($("#search-popup").attr('class').indexOf('hidden') != -1) 
		{			
			$("#search-popup").removeClass('hidden');
			$(this).addClass('active');
			$('#mobile_searchtext').focus();
			
			$("#add-popup").addClass('hidden');
			$('.top-add-icon').removeClass('active');		
		} 
		else 
		{
			$("#search-popup").addClass('hidden');
			$(this).removeClass('active'); 
		}
	});
	
	 $('#mobile_rename').keypress(function(e) 
	 {
        if ((e.which == 13) && ($('#mobile_searchtext').val() != ''))
		{
            mdorename();
        }
	  });
	  
	  
	  $('#mobile_searchtext').keypress(function(e) 
	 {
        if ((e.which == 13) && ($('#mobile_searchtext').val() != ''))
		{
            domsearch();
        }
	  });

	
	// make search
	$("#searchButton").click(function() 
	{
		 domsearch();
	});

	// open new folder dialog
	$("#newFolderButton").click(function() 
	{			
	  if (currentdirid)
	  {
		  $("#new-folder-popup").removeClass('hidden');
		  $(".overlay").removeClass('hidden');
		  $("#add-popup").addClass('hidden');
		  $("#top-add-icon").removeClass('active'); 
		  $('#mobile_newfoldername').val('');
		  $('#mobile_newfoldername').focus();
	   }
	   else
	   {
		alert('You cannot create a folder in a search result.');
	   }
	});

	// cancel new folder dialog
	$("#newFolderCancel").click(function() 
	{
	  $("#new-folder-popup").addClass('hidden');
	  $(".overlay").addClass('hidden');
	  mobileui();
	});

	// create new folder
	$("#newFolderAdd").click(function() 
	{
	  mnewfolder();
	});


	$(".top-menu-icon").click(function showMenu () 
	{
		var mainBlock = $('.page-bg').attr('class'); 

		if (mainBlock.indexOf('opened') == -1 ) 
		{
		  $(this).addClass('active');
		  iOS_disableScrolling();		 
		  if (iOS_isiPhone() || iOS_isiPod()) setTimeout(function(){window.scrollTo(0, 1);},0);
		  setTimeout(function () 
		  {
			  if (j+100 > screenSize-rightPad) j=screenSize-rightPad;
			  else j = j + 100; 		
			  if (j < screenSize-rightPad) 
			  {  			   
				 $(".page-bg").css('margin-right','-'+j+'px');
				 showMenu();		   
			  } 
			  else 
			  {
				 if (j = screenSize-rightPad) 
				 {
					$(".page-bg").css('margin-right','-'+j+'px');
					$(".page-bg").addClass('opened');
					j=0;
				 } 
				 else 
				 {
					$(".page-bg").addClass('opened');
					j=0;
				 }
			   } 
			},0.00001)	  
		} 
		else 
		{	
		    $(this).removeClass('active');		
			iOS_enableScrolling();
			setTimeout(function () 
			{
			  if (j+100 > screenSize-rightPad) j=screenSize-rightPad;
			  else j = j + 100; 		
			  if (j < screenSize-rightPad) 
			  {  
				 var position = (screenSize-rightPad)-j;
				 $(".page-bg").css('margin-right','-'+position+'px');
				 showMenu();		   
			  } 
			  else 
			  {
				 if (j = screenSize-rightPad) 
				 {
					var position = (screenSize-rightPad)-j;
					$(".page-bg").css('margin-right','-'+position+'px');
					$(".page-bg").removeClass('opened');
					j=0;
				 } 
				 else 
				 {
					 $(".page-bg").removeClass('opened');
					 j=0;
				 }
			   } 
			},0.00001)	
	}
	});
	
	
	for (var i in languages)
	{
		if (languages[i].length > 0)
		{
			var selected = '';
			if (lang == i)
			{
				selected = 'selected';
				$('#mobile_language').text(ln[i]);
			}
			$('#mobile_language_option').append('<option value="' + i + '" '+selected+'>' + ln[i] + '</option>');
		}	
	}
	
	if (iOS_isiPhone() || iOS_isiPod()) iOS_enableAhider();	
}


function mobile_desktop()
{
	if (confirm('Are you sure you want to switch to the desktop version?'))
	{
		sessionStorage.desktop=1;
		window.location.reload();
	}
}


function mobilelang(el)
{	
	setlang(GetNextNode('mobile_language'));
}

/*
 * iOS.js v1.0
 * http://www.iOSjs.com/
 *
 * Developed by Empty Galaxy
 * http://www.emptygalaxy.com/
 *
 * Copyright (c) 2011
 * Dual-licensed under the BSD or MIT licenses.
 * http://www.iOSjs.com/license/
 */

//	listen for events
iOS_addEventListener(window, "load", iOS_handleWindowLoad);
iOS_addEventListener(window, "orientationchange", iOS_handleOrientationChange);
iOS_addEventListener(window, "resize", iOS_handleReize);

function iOS_addEventListener(obj, evType, fn)
{
	if(obj.addEventListener)
	{
		obj.addEventListener(evType, fn, false);
		return true;
	}
	else if(obj.attachEvent)
	{
		var r	= obj.attachEvent("on" + evType, fn);
		return r;
	}
	else
	{
		return false;
	}
}

function iOS_removeEventListener(obj, evType, fn)
{
	if(obj.removeEventListener)
	{
		obj.removeEventListener(evType, fn, false);
		return true;
	}
	else if(obj.detachEvent)
	{
		var r	= obj.detachEvent("on" + evType, fn);
		return r;
	}
	else
	{
		return false;
	}
}

//	handle events
function iOS_handleWindowLoad(e)
{
	iOS_initPage();
	iOS_updateOrientation();
	iOS_updateHeight();
	
	//	slightly delay hiding the address bar
	setTimeout("iOS_hideAddressBar();", 100);
}

function iOS_handleOrientationChange(e)
{
	iOS_updateOrientation();
	iOS_resize();
	
	//	slightly delay hiding the address bar
	setTimeout("iOS_hideAddressBar();", 100);
}

function iOS_handleReize(e)
{
	iOS_resize();
}


//	page functions
function iOS_initPage()
{
	if(navigator.standalone)	iOS_createWebappLinks();
	
	//	iOS class
	var ua		= navigator.userAgent;
	if(iOS_isiOSdevice())
	{
		var html = document.documentElement;
		
		//	set the iOS class on <html>
		var classes	= html.className.split(" ");
		if(classes.indexOf("iOS") == -1)	classes.push("iOS");
		if(iOS_hasRetinaDisplay() && classes.indexOf("retina") == -1)	classes.push("retina");
		html.className	= classes.join(" ");
		
		//	Device
		if(ua.indexOf("iPhone") > -1)		html.setAttribute("device", "iPhone");
		else if(ua.indexOf("iPod") > -1)	html.setAttribute("device", "iPod");
		else if(ua.indexOf("iPad") > -1)	html.setAttribute("device", "iPad");
		
		//	Device Family
		if(ua.indexOf("iPhone") > -1 || ua.indexOf("iPod") > -1)	html.setAttribute("deviceFamily", "iPhone_iPod");
		else if(ua.indexOf("iPad") > -1)							html.setAttribute("deviceFamily", "iPad");
	}
}

function iOS_updateOrientation()
{
	
	mclosemenu();
	var orientation	= "portrait";
	if(window.orientation == 90 || window.orientation == -90)	orientation	= "landscape";
	document.documentElement.setAttribute("orientation", orientation);
}

function iOS_resize()
{
	iOS_updateHeight();
}


//	UI actions
function iOS_hideAddressBar()
{
	if(window.pageYOffset <= 1)	window.scrollTo(window.pageXOffset, 1);
}

function iOS_hideAddressBarDelayed()
{
	setTimeout(iOS_hideAddressBar,100);
}

function iOS_disableScrolling()
{
	iOS_addEventListener(document.body, "touchmove", iOS_preventScrolling);
}

function iOS_enableScrolling()
{
	iOS_removeEventListener(document.body, "touchmove", iOS_preventScrolling);
}

function iOS_disableAhider()
{
	iOS_removeEventListener(document.body, "touchmove", iOS_hideAddressBarDelayed);	
}

function iOS_enableAhider()
{
	iOS_addEventListener(document.body, "touchmove", iOS_hideAddressBarDelayed);	
}


function iOS_preventScrolling(e)
{
	//if(e.touches.length==1)
	{
		e.preventDefault();
		iOS_hideAddressBar();
	}
}

function iOS_disableZooming()
{
	iOS_addEventListener(document.body, "touchmove", iOS_preventZooming);
}

function iOS_enableZooming()
{
	iOS_removeEventListener(document.body, "touchmove", iOS_preventZooming);
}

function iOS_preventZooming(e)
{
	if(e.touches.length==2)	e.preventDefault();
}

function iOS_updateHeight()
{
	var viewportSize	= iOS_getViewportSize();
	document.body.style.minHeight	= Math.round(viewportSize.height) + "px";
}


//	content functions
function iOS_createWebappLinks()
{
	var aList	= document.getElementsByTagName("a");
	for(var i=0; i<aList.length; i++)
	{
		var a	= aList[i];
		if(a.href != "" && a.target == "")
		{
			a.onclick	= function(){window.location=this.getAttribute("href");return false;}
		}
	}
}


//	get-functions
function iOS_isiOSDevice()	{	return navigator.userAgent.indexOf("iPhone") > -1 || navigator.userAgent.indexOf("iPod") > -1 || navigator.userAgent.indexOf("iPad") > -1;	}
function iOS_isiPhone()	{	return ((navigator.userAgent.indexOf("iPhone") > -1) && (navigator.userAgent.indexOf("Safari") > -1));	}
function iOS_isiPod()	{	return ((navigator.userAgent.indexOf("iPhone") > -1) && (navigator.userAgent.indexOf("Safari") > -1));	}
function iOS_isiPad()	{	return navigator.userAgent.indexOf("iPad") > -1;	}

function iOS_hasRetinaDisplay()
{
	return window.devicePixelRatio > 1;
}

function iOS_normalGetWindowSize()
{
	var width	= 0;
	var heigth	= 0;
	
	if(typeof(window.innerWidth) == "number")
	{
		//	non-IE
		width	= window.innerWidth;
		height	= window.innerHeight;
	}
	else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
	{
		//	IE 6+ in 'standards compliant mode'
		width	= document.documentElement.clientWidth;
		height	= document.documentElement.clientHeight;
	}
	else if(document.body && (document.body.clientWidth || document.body.clientHeight))
	{
		//	IE 4 compatible
		width	= document.body.clientWidth;
		height	= document.body.clientHeight;
	}
	
	return {width:width, height:height};
}

function iOS_getWindowSize()
{
	var width	= 0;
	var height	= 0;
	
	var ua		= navigator.userAgent;
	if(iOS_isiOSdevice())
	{
		//	start with screen resolution
		width	= screen.width;
		height	= screen.height;
		
		//	swap width & height
		if(window.orientation != 0)
		{
			var temp	= width;
			width		= height;
			height		= temp;
		}
		
		//	subtract height of the status bar
		if(!(navigator.standalone && iOS_getMetaContent("apple-mobile-web-app-status-bar-style").toLowerCase() == "black-translucent"))	height	-= 20;
		
		if(ua.indexOf("iPhone") > -1 || ua.indexOf("iPod") > -1)
		{
			if(!navigator.standalone)
			{
				//	subtract height of the button bar
				if(window.orientation == 0)	height	-= 44;
				else						height	-= 32;
			}
		}
		
		if(ua.indexOf("iPad") > -1)
		{
			//	subtract height of the navigation bar
			if(!navigator.standalone)	height	-= 58;
		}
	}
	else
	{
		var size	= iOS_normalGetWindowSize();
		width		= size.width;
		height		= size.height;
	}
	
	return {width:width, height:height};
}

function iOS_getViewportSize()
{
	var windowSize	= iOS_getWindowSize();
	var bodySize	= iOS_getElementSize(document.body);
	
	var scale		= bodySize.width / windowSize.width;
	
	return {width:(windowSize.width * scale), height:(windowSize.height * scale)};
}

function iOS_getPageSize()
{
	var bodySize	= iOS_getElementSize(document.body);
	return bodySize;
}

function iOS_getElementSize(element)
{
	if(!element)	return {width:0, height:0};
	
	var ns4;
	if(ns4)
	{
		var elem	= getObjNN4(document, element);
		return {width:elem.clip.width, height:elem.clip.height};
	}
	else
	{
		if(document.all)	return {width:element.style.pixelWidth, height:element.style.pixelHeight};
		else				return {width:element.offsetWidth, height:element.offsetHeight};
	}
}

function iOS_getMetaContent(name)
{
	name	= name.toLowerCase();
	var metaList	= document.getElementsByTagName("meta");
	for(var i=0; i<metaList.length; i++)
	{
		var meta	= metaList[i];
		if(meta.name.toLowerCase() == name)
		{
			return meta.content;
		}
	}
	
	return null;
}

function iOS_isiOSdevice()
{
	var ua	= navigator.userAgent;
	return (ua.indexOf("iPhone") > -1 || ua.indexOf("iPod") > -1 || ua.indexOf("iPad") > -1);
}


(function() {
  var iOSCheckbox, matched, userAgent,
    __slice = Array.prototype.slice;

  if ($.browser == null) {
    userAgent = navigator.userAgent || "";
    jQuery.uaMatch = function(ua) {
      var match;
      ua = ua.toLowerCase();
      match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];
      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    };
    matched = jQuery.uaMatch(userAgent);
    jQuery.browser = {};
    if (matched.browser) {
      jQuery.browser[matched.browser] = true;
      jQuery.browser.version = matched.version;
    }
    if (jQuery.browser.webkit) jQuery.browser.safari = true;
  }

  iOSCheckbox = (function() {

    function iOSCheckbox(elem, options) {
      var key, opts, value;
      this.elem = $(elem);
      opts = $.extend({}, iOSCheckbox.defaults, options);
      for (key in opts) {
        value = opts[key];
        this[key] = value;
      }
      this.elem.data(this.dataName, this);
      this.wrapCheckboxWithDivs();
      this.attachEvents();
      this.disableTextSelection();
      if (this.resizeHandle) this.optionallyResize('handle');
      if (this.resizeContainer) this.optionallyResize('container');
      this.initialPosition();
    }

    iOSCheckbox.prototype.isDisabled = function() {
      return this.elem.is(':disabled');
    };

    iOSCheckbox.prototype.wrapCheckboxWithDivs = function() {
      this.elem.wrap("<div class='" + this.containerClass + "' />");
      this.container = this.elem.parent();
      this.offLabel = $("<label class='" + this.labelOffClass + "'>\n  <span>" + this.uncheckedLabel + "</span>\n</label>").appendTo(this.container);
      this.offSpan = this.offLabel.children('span');
      this.onLabel = $("<label class='" + this.labelOnClass + "'>\n  <span>" + this.checkedLabel + "</span>\n</label>").appendTo(this.container);
      this.onSpan = this.onLabel.children('span');
      return this.handle = $("<div class='" + this.handleClass + "'>\n  <div class='" + this.handleRightClass + "'>\n    <div class='" + this.handleCenterClass + "' />\n  </div>\n</div>").appendTo(this.container);
    };

    iOSCheckbox.prototype.disableTextSelection = function() {
      if ($.browser.msie) {
        return $([this.handle, this.offLabel, this.onLabel, this.container]).attr("unselectable", "on");
      }
    };

    iOSCheckbox.prototype._getDimension = function(elem, dimension) {
      if ($.fn.actual != null) {
        return elem.actual(dimension);
      } else {
        return elem[dimension]();
      }
    };

    iOSCheckbox.prototype.optionallyResize = function(mode) {
      var newWidth, offLabelWidth, onLabelWidth;
      onLabelWidth = this._getDimension(this.onLabel, "width");
      offLabelWidth = this._getDimension(this.offLabel, "width");
      if (mode === "container") {
        newWidth = onLabelWidth > offLabelWidth ? onLabelWidth : offLabelWidth;
        newWidth += this._getDimension(this.handle, "width") + this.handleMargin ;
        return this.container.css({
          width: newWidth
        });
      } else {
        newWidth = onLabelWidth > offLabelWidth ? onLabelWidth : offLabelWidth;
        return this.handle.css({
          width: newWidth 
        });
      }
    };

    iOSCheckbox.prototype.onMouseDown = function(event) {
      var x;
      event.preventDefault();
      if (this.isDisabled()) return;
      x = event.pageX || event.originalEvent.changedTouches[0].pageX;
      iOSCheckbox.currentlyClicking = this.handle;
      iOSCheckbox.dragStartPosition = x;
      return iOSCheckbox.handleLeftOffset = parseInt(this.handle.css('left'), 10) || 0;
    };

    iOSCheckbox.prototype.onDragMove = function(event, x) {
      var newWidth, p;
      if (iOSCheckbox.currentlyClicking !== this.handle) return;
      p = (x + iOSCheckbox.handleLeftOffset - iOSCheckbox.dragStartPosition) / this.rightSide;
      if (p < 0) p = 0;
      if (p > 1) p = 1;
      newWidth = p * this.rightSide;
      this.handle.css({
        left: newWidth
      });
      this.onLabel.css({
        width: newWidth + this.handleRadius
      });
      this.offSpan.css({
        marginRight: -newWidth
      });
      return this.onSpan.css({
        marginLeft: -(1 - p) * this.rightSide
      });
    };

    iOSCheckbox.prototype.onDragEnd = function(event, x) {
      var p;
      if (iOSCheckbox.currentlyClicking !== this.handle) return;
      if (this.isDisabled()) return;
      if (iOSCheckbox.dragging) {
        p = (x - iOSCheckbox.dragStartPosition) / this.rightSide;
        this.elem.prop('checked', p >= 0.5);
      } else {
        this.elem.prop('checked', !this.elem.prop('checked'));
      }
      iOSCheckbox.currentlyClicking = null;
      iOSCheckbox.dragging = null;
      return this.didChange();
    };

    iOSCheckbox.prototype.refresh = function() {
      return this.didChange();
    };

    iOSCheckbox.prototype.didChange = function() {
      var new_left;
      if (typeof this.onChange === "function") {
        this.onChange(this.elem, this.elem.prop('checked'));
      }
      if (this.isDisabled()) {
        this.container.addClass(this.disabledClass);
        return false;
      } else {
        this.container.removeClass(this.disabledClass);
      }
      new_left = this.elem.prop('checked') ? this.rightSide : 0;
      this.handle.animate({
        left: new_left
      }, this.duration);
      this.onLabel.animate({
        width: new_left + this.handleRadius
      }, this.duration);
      this.offSpan.animate({
        marginRight: -new_left
      }, this.duration);
      return this.onSpan.animate({
        marginLeft: new_left - this.rightSide
      }, this.duration);
    };

    iOSCheckbox.prototype.attachEvents = function() {
      var localMouseMove, localMouseUp, self;
      self = this;
      localMouseMove = function(event) {
        return self.onGlobalMove.apply(self, arguments);
      };
      localMouseUp = function(event) {
        self.onGlobalUp.apply(self, arguments);
        $(document).unbind('mousemove touchmove', localMouseMove);
        return $(document).unbind('mouseup touchend', localMouseUp);
      };
      this.elem.change(function() {
        return self.refresh();
      });
      return this.container.bind('mousedown touchstart', function(event) {
        self.onMouseDown.apply(self, arguments);
        $(document).bind('mousemove touchmove', localMouseMove);
        return $(document).bind('mouseup touchend', localMouseUp);
      });
    };

    iOSCheckbox.prototype.initialPosition = function() {
      var containerWidth, offset;
      containerWidth = this._getDimension(this.container, "width");
      this.offLabel.css({
        width: containerWidth - this.containerRadius
      });
      offset = this.containerRadius + 1;
      if ($.browser.msie && $.browser.version < 7) offset -= 3;
      this.rightSide = containerWidth - this._getDimension(this.handle, "width") - offset;
      if (this.elem.is(':checked')) {
        this.handle.css({
          left: this.rightSide
        });
        this.onLabel.css({
          width: this.rightSide + this.handleRadius
        });
        this.offSpan.css({
          marginRight: -this.rightSide
        });
      } else {
        this.onLabel.css({
          width: 0
        });
        this.onSpan.css({
          marginLeft: -this.rightSide
        });
      }
      if (this.isDisabled()) return this.container.addClass(this.disabledClass);
    };

    iOSCheckbox.prototype.onGlobalMove = function(event) {
      var x;
      if (!(!this.isDisabled() && iOSCheckbox.currentlyClicking)) return;
      event.preventDefault();
      x = event.pageX || event.originalEvent.changedTouches[0].pageX;
      if (!iOSCheckbox.dragging && (Math.abs(iOSCheckbox.dragStartPosition - x) > this.dragThreshold)) {
        iOSCheckbox.dragging = true;
      }
      return this.onDragMove(event, x);
    };

    iOSCheckbox.prototype.onGlobalUp = function(event) {
      var x;
      if (!iOSCheckbox.currentlyClicking) return;
      event.preventDefault();
      x = event.pageX || event.originalEvent.changedTouches[0].pageX;
      this.onDragEnd(event, x);
      return false;
    };
	
	

    iOSCheckbox.defaults = {
      duration: 200,
      checkedLabel: 'ON',
      uncheckedLabel: 'OFF',
      resizeHandle: true,
      resizeContainer: true,
      disabledClass: 'iPhoneCheckDisabled',
      containerClass: 'iPhoneCheckContainer',
      labelOnClass: 'iPhoneCheckLabelOn',
      labelOffClass: 'iPhoneCheckLabelOff',
      handleClass: 'iPhoneCheckHandle',
      handleCenterClass: 'iPhoneCheckHandleCenter',
      handleRightClass: 'iPhoneCheckHandleRight',
      dragThreshold: 0,
      handleMargin: 0,
      handleRadius: 30,
      containerRadius: -2,
      dataName: "iphoneStyle",
      onChange: function() {}
    };

    return iOSCheckbox;

  })();

  $.iphoneStyle = this.iOSCheckbox = iOSCheckbox;

  $.fn.iphoneStyle = function() {
    var args, checkbox, dataName, existingControl, method, params, _i, _len, _ref, _ref2, _ref3, _ref4;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    dataName = (_ref = (_ref2 = args[0]) != null ? _ref2.dataName : void 0) != null ? _ref : iOSCheckbox.defaults.dataName;
    _ref3 = this.filter(':checkbox');
    for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
      checkbox = _ref3[_i];
      existingControl = $(checkbox).data(dataName);
      if (existingControl != null) {
        method = args[0], params = 2 <= args.length ? __slice.call(args, 1) : [];
        if ((_ref4 = existingControl[method]) != null) {
          _ref4.apply(existingControl, params);
        }
      } else {
        new iOSCheckbox(checkbox, args[0]);
      }
    }
    return this;
  };

  $.fn.iOSCheckbox = function(options) {
    var opts;
    if (options == null) options = {};
    opts = $.extend({}, options, {
      resizeHandle: false,
      disabledClass: 'iOSCheckDisabled',
      containerClass: 'iOSCheckContainer',
      labelOnClass: 'iOSCheckLabelOn',
      labelOffClass: 'iOSCheckLabelOff',
      handleClass: 'iOSCheckHandle',
      handleCenterClass: 'iOSCheckHandleCenter',
      handleRightClass: 'iOSCheckHandleRight',
      dataName: 'iOSCheckbox'
    });
    return this.iphoneStyle(opts);
  };

}).call(this);


populate_l(); u_checklogin( { checkloginresult: function(u_ctx,r) { u_type = r; u_checked=true; if (typeof init_page == 'function') init_page(); } },false); clearit(0);