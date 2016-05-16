/*
string.js - Copyright (C) 2012-2013, JP Richardson <jprichardson@gmail.com>
*/!function(){"use strict";function n(e,t){t!==null&&t!==undefined?typeof t=="string"?e.s=t:e.s=t.toString():e.s=t,e.orig=t,t!==null&&t!==undefined?e.__defineGetter__?e.__defineGetter__("length",function(){return e.s.length}):e.length=t.length:e.length=-1}function r(e){n(this,e)}function u(){for(var e in s)(function(e){var t=s[e];i.hasOwnProperty(e)||(o.push(e),i[e]=function(){return String.prototype.s=this,t.apply(this,arguments)})})(e)}function a(){for(var e=0;e<o.length;++e)delete String.prototype[o[e]];o.length=0}function c(){var e=h(),t={};for(var n=0;n<e.length;++n){var r=e[n],s=i[r];try{var o=typeof s.apply("teststring",[]);t[r]=o}catch(u){}}return t}function h(){var e=[];if(Object.getOwnPropertyNames)return e=Object.getOwnPropertyNames(i),e.splice(e.indexOf("valueOf"),1),e.splice(e.indexOf("toString"),1),e;var t={},n=[];for(var r in String.prototype)t[r]=r;for(var r in Object.prototype)delete t[r];for(var r in t)e.push(r);return e}function p(e){return new r(e)}function d(e,t){var n=[],r;for(r=0;r<e.length;r++)n.push(e[r]),t&&t.call(e,e[r],r);return n}var e="1.7.0",t={},i=String.prototype,s=r.prototype={between:function(e,t){var n=this.s,r=n.indexOf(e),i=n.indexOf(t),s=r+e.length;return new this.constructor(i>r?n.slice(s,i):"")},camelize:function(){var e=this.trim().s.replace(/(\-|_|\s)+(.)?/g,function(e,t,n){return n?n.toUpperCase():""});return new this.constructor(e)},capitalize:function(){return new this.constructor(this.s.substr(0,1).toUpperCase()+this.s.substring(1).toLowerCase())},charAt:function(e){return this.s.charAt(e)},chompLeft:function(e){var t=this.s;return t.indexOf(e)===0?(t=t.slice(e.length),new this.constructor(t)):this},chompRight:function(e){if(this.endsWith(e)){var t=this.s;return t=t.slice(0,t.length-e.length),new this.constructor(t)}return this},collapseWhitespace:function(){var e=this.s.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"");return new this.constructor(e)},contains:function(e){return this.s.indexOf(e)>=0},count:function(e){var t=0,n=this.s.indexOf(e);while(n>=0)t+=1,n=this.s.indexOf(e,n+1);return t},dasherize:function(){var e=this.trim().s.replace(/[_\s]+/g,"-").replace(/([A-Z])/g,"-$1").replace(/-+/g,"-").toLowerCase();return new this.constructor(e)},decodeHtmlEntities:function(){var e=this.s;return e=e.replace(/&#(\d+);?/g,function(e,t){return String.fromCharCode(t)}).replace(/&#[xX]([A-Fa-f0-9]+);?/g,function(e,t){return String.fromCharCode(parseInt(t,16))}).replace(/&([^;\W]+;?)/g,function(e,n){var r=n.replace(/;$/,""),i=t[n]||n.match(/;$/)&&t[r];return typeof i=="number"?String.fromCharCode(i):typeof i=="string"?i:e}),new this.constructor(e)},endsWith:function(e){var t=this.s.length-e.length;return t>=0&&this.s.indexOf(e,t)===t},escapeHTML:function(){return new this.constructor(this.s.replace(/[&<>"']/g,function(e){return"&"+m[e]+";"}))},ensureLeft:function(e){var t=this.s;return t.indexOf(e)===0?this:new this.constructor(e+t)},ensureRight:function(e){var t=this.s;return this.endsWith(e)?this:new this.constructor(t+e)},humanize:function(){if(this.s===null||this.s===undefined)return new this.constructor("");var e=this.underscore().replace(/_id$/,"").replace(/_/g," ").trim().capitalize();return new this.constructor(e)},isAlpha:function(){return!/[^a-z\xC0-\xFF]/.test(this.s.toLowerCase())},isAlphaNumeric:function(){return!/[^0-9a-z\xC0-\xFF]/.test(this.s.toLowerCase())},isEmpty:function(){return this.s===null||this.s===undefined?!0:/^[\s\xa0]*$/.test(this.s)},isLower:function(){return this.isAlpha()&&this.s.toLowerCase()===this.s},isNumeric:function(){return!/[^0-9]/.test(this.s)},isUpper:function(){return this.isAlpha()&&this.s.toUpperCase()===this.s},left:function(e){if(e>=0){var t=this.s.substr(0,e);return new this.constructor(t)}return this.right(-e)},lines:function(){return this.replaceAll("\r\n","\n").s.split("\n")},pad:function(e,t){t==null&&(t=" ");if(this.s.length>=e)return new this.constructor(this.s);e-=this.s.length;var n=Array(Math.ceil(e/2)+1).join(t),r=Array(Math.floor(e/2)+1).join(t);return new this.constructor(n+this.s+r)},padLeft:function(e,t){return t==null&&(t=" "),this.s.length>=e?new this.constructor(this.s):new this.constructor(Array(e-this.s.length+1).join(t)+this.s)},padRight:function(e,t){return t==null&&(t=" "),this.s.length>=e?new this.constructor(this.s):new this.constructor(this.s+Array(e-this.s.length+1).join(t))},parseCSV:function(e,t,n,r){e=e||",",n=n||"\\",typeof t=="undefined"&&(t='"');var i=0,s=[],o=[],u=this.s.length,a=!1,f=this,l=function(e){return f.s.charAt(e)};if(typeof r!="undefined")var c=[];t||(a=!0);while(i<u){var h=l(i);switch(h){case n:if(a&&(n!==t||l(i+1)===t)){i+=1,s.push(l(i));break}if(n!==t)break;case t:a=!a;break;case e:a&&t?s.push(h):(o.push(s.join("")),s.length=0);break;case r:a?s.push(h):c&&(o.push(s.join("")),c.push(o),o=[],s.length=0);break;default:a&&s.push(h)}i+=1}return o.push(s.join("")),c?(c.push(o),c):o},replaceAll:function(e,t){var n=this.s.split(e).join(t);return new this.constructor(n)},right:function(e){if(e>=0){var t=this.s.substr(this.s.length-e,e);return new this.constructor(t)}return this.left(-e)},setValue:function(e){return n(this,e),this},slugify:function(){var e=(new r(this.s.replace(/[^\w\s-]/g,"").toLowerCase())).dasherize().s;return e.charAt(0)==="-"&&(e=e.substr(1)),new this.constructor(e)},startsWith:function(e){return this.s.lastIndexOf(e,0)===0},stripPunctuation:function(){return new this.constructor(this.s.replace(/[^\w\s]|_/g,"").replace(/\s+/g," "))},stripTags:function(){var e=this.s,t=arguments.length>0?arguments:[""];return d(t,function(t){e=e.replace(RegExp("</?"+t+"[^<>]*>","gi"),"")}),new this.constructor(e)},template:function(e,t,n){var r=this.s,t=t||p.TMPL_OPEN,n=n||p.TMPL_CLOSE,i=t.replace(/[-[\]()*\s]/g,"\\$&").replace(/\$/g,"\\$"),s=n.replace(/[-[\]()*\s]/g,"\\$&").replace(/\$/g,"\\$"),o=new RegExp(i+"(.+?)"+s,"g"),u=r.match(o)||[];return u.forEach(function(i){var s=i.substring(t.length,i.length-n.length);typeof e[s]!="undefined"&&(r=r.replace(i,e[s]))}),new this.constructor(r)},times:function(e){return new this.constructor((new Array(e+1)).join(this.s))},toBoolean:function(){if(typeof this.orig=="string"){var e=this.s.toLowerCase();return e==="true"||e==="yes"||e==="on"}return this.orig===!0||this.orig===1},toFloat:function(e){var t=parseFloat(this.s);return e?parseFloat(t.toFixed(e)):t},toInt:function(){return/^\s*-?0x/i.test(this.s)?parseInt(this.s,16):parseInt(this.s,10)},trim:function(){var e;return typeof i.trim=="undefined"?e=this.s.replace(/(^\s*|\s*$)/g,""):e=this.s.trim(),new this.constructor(e)},trimLeft:function(){var e;return i.trimLeft?e=this.s.trimLeft():e=this.s.replace(/(^\s*)/g,""),new this.constructor(e)},trimRight:function(){var e;return i.trimRight?e=this.s.trimRight():e=this.s.replace(/\s+$/,""),new this.constructor(e)},truncate:function(e,t){var n=this.s;e=~~e,t=t||"...";if(n.length<=e)return new this.constructor(n);var i=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},s=n.slice(0,e+1).replace(/.(?=\W*\w*$)/g,i);return s.slice(s.length-2).match(/\w\w/)?s=s.replace(/\s*\S+$/,""):s=(new r(s.slice(0,s.length-1))).trimRight().s,(s+t).length>n.length?new r(n):new r(n.slice(0,s.length)+t)},toCSV:function(){function u(e){return e!==null&&e!==""}var e=",",t='"',n="\\",i=!0,s=!1,o=[];typeof arguments[0]=="object"?(e=arguments[0].delimiter||e,e=arguments[0].separator||e,t=arguments[0].qualifier||t,i=!!arguments[0].encloseNumbers,n=arguments[0].escape||n,s=!!arguments[0].keys):typeof arguments[0]=="string"&&(e=arguments[0]),typeof arguments[1]=="string"&&(t=arguments[1]),arguments[1]===null&&(t=null);if(this.orig instanceof Array)o=this.orig;else for(var a in this.orig)this.orig.hasOwnProperty(a)&&(s?o.push(a):o.push(this.orig[a]));var f=n+t,l=[];for(var c=0;c<o.length;++c){var h=u(t);typeof o[c]=="number"&&(h&=i),h&&l.push(t);if(o[c]!==null&&o[c]!==undefined){var p=(new r(o[c])).replaceAll(t,f).s;l.push(p)}else l.push("");h&&l.push(t),e&&l.push(e)}return l.length=l.length-1,new this.constructor(l.join(""))},toString:function(){return this.s},underscore:function(){var e=this.trim().s.replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase();return(new r(this.s.charAt(0))).isUpper()&&(e="_"+e),new this.constructor(e)},unescapeHTML:function(){return new this.constructor(this.s.replace(/\&([^;]+);/g,function(e,t){var n;return t in v?v[t]:(n=t.match(/^#x([\da-fA-F]+)$/))?String.fromCharCode(parseInt(n[1],16)):(n=t.match(/^#(\d+)$/))?String.fromCharCode(~~n[1]):e}))},valueOf:function(){return this.s.valueOf()}},o=[],f=c();for(var l in f)(function(e){var t=i[e];typeof t=="function"&&(s[e]||(f[e]==="string"?s[e]=function(){return new this.constructor(t.apply(this,arguments))}:s[e]=t))})(l);s.repeat=s.times,s.include=s.contains,s.toInteger=s.toInt,s.toBool=s.toBoolean,s.decodeHTMLEntities=s.decodeHtmlEntities,s.constructor=r,p.extendPrototype=u,p.restorePrototype=a,p.VERSION=e,p.TMPL_OPEN="{{",p.TMPL_CLOSE="}}",p.ENTITIES=t,typeof module!="undefined"&&typeof module.exports!="undefined"?module.exports=p:typeof define=="function"&&define.amd?define('string', [],function(){return p}):window.S=p;var v={lt:"<",gt:">",quot:'"',apos:"'",amp:"&"},m={};for(var g in v)m[v[g]]=g;t={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,"OElig;":338,"oelig;":339,"Scaron;":352,"scaron;":353,"Yuml;":376,"fnof;":402,"circ;":710,"tilde;":732,"Alpha;":913,"Beta;":914,"Gamma;":915,"Delta;":916,"Epsilon;":917,"Zeta;":918,"Eta;":919,"Theta;":920,"Iota;":921,"Kappa;":922,"Lambda;":923,"Mu;":924,"Nu;":925,"Xi;":926,"Omicron;":927,"Pi;":928,"Rho;":929,"Sigma;":931,"Tau;":932,"Upsilon;":933,"Phi;":934,"Chi;":935,"Psi;":936,"Omega;":937,"alpha;":945,"beta;":946,"gamma;":947,"delta;":948,"epsilon;":949,"zeta;":950,"eta;":951,"theta;":952,"iota;":953,"kappa;":954,"lambda;":955,"mu;":956,"nu;":957,"xi;":958,"omicron;":959,"pi;":960,"rho;":961,"sigmaf;":962,"sigma;":963,"tau;":964,"upsilon;":965,"phi;":966,"chi;":967,"psi;":968,"omega;":969,"thetasym;":977,"upsih;":978,"piv;":982,"ensp;":8194,"emsp;":8195,"thinsp;":8201,"zwnj;":8204,"zwj;":8205,"lrm;":8206,"rlm;":8207,"ndash;":8211,"mdash;":8212,"lsquo;":8216,"rsquo;":8217,"sbquo;":8218,"ldquo;":8220,"rdquo;":8221,"bdquo;":8222,"dagger;":8224,"Dagger;":8225,"bull;":8226,"hellip;":8230,"permil;":8240,"prime;":8242,"Prime;":8243,"lsaquo;":8249,"rsaquo;":8250,"oline;":8254,"frasl;":8260,"euro;":8364,"image;":8465,"weierp;":8472,"real;":8476,"trade;":8482,"alefsym;":8501,"larr;":8592,"uarr;":8593,"rarr;":8594,"darr;":8595,"harr;":8596,"crarr;":8629,"lArr;":8656,"uArr;":8657,"rArr;":8658,"dArr;":8659,"hArr;":8660,"forall;":8704,"part;":8706,"exist;":8707,"empty;":8709,"nabla;":8711,"isin;":8712,"notin;":8713,"ni;":8715,"prod;":8719,"sum;":8721,"minus;":8722,"lowast;":8727,"radic;":8730,"prop;":8733,"infin;":8734,"ang;":8736,"and;":8743,"or;":8744,"cap;":8745,"cup;":8746,"int;":8747,"there4;":8756,"sim;":8764,"cong;":8773,"asymp;":8776,"ne;":8800,"equiv;":8801,"le;":8804,"ge;":8805,"sub;":8834,"sup;":8835,"nsub;":8836,"sube;":8838,"supe;":8839,"oplus;":8853,"otimes;":8855,"perp;":8869,"sdot;":8901,"lceil;":8968,"rceil;":8969,"lfloor;":8970,"rfloor;":8971,"lang;":9001,"rang;":9002,"loz;":9674,"spades;":9824,"clubs;":9827,"hearts;":9829,"diams;":9830}}.call(this);
