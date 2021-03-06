;
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,j=i.bind,w=function(n){return n instanceof w?n:this instanceof w?(this._wrapped=n,void 0):new w(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports._=w):n._=w,w.VERSION="1.4.3";var A=w.each=w.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(w.has(n,a)&&t.call(e,n[a],a,n)===r)return};w.map=w.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e[e.length]=t.call(r,n,u,i)}),e)};var O="Reduce of empty array with no initial value";w.reduce=w.foldl=w.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=w.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(O);return r},w.reduceRight=w.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=w.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=w.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(O);return r},w.find=w.detect=function(n,t,r){var e;return E(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},w.filter=w.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&(e[e.length]=n)}),e)},w.reject=function(n,t,r){return w.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},w.every=w.all=function(n,t,e){t||(t=w.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var E=w.some=w.any=function(n,t,e){t||(t=w.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};w.contains=w.include=function(n,t){return null==n?!1:y&&n.indexOf===y?-1!=n.indexOf(t):E(n,function(n){return n===t})},w.invoke=function(n,t){var r=o.call(arguments,2);return w.map(n,function(n){return(w.isFunction(t)?t:n[t]).apply(n,r)})},w.pluck=function(n,t){return w.map(n,function(n){return n[t]})},w.where=function(n,t){return w.isEmpty(t)?[]:w.filter(n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},w.max=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.max.apply(Math,n);if(!t&&w.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>=e.computed&&(e={value:n,computed:a})}),e.value},w.min=function(n,t,r){if(!t&&w.isArray(n)&&n[0]===+n[0]&&65535>n.length)return Math.min.apply(Math,n);if(!t&&w.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;e.computed>a&&(e={value:n,computed:a})}),e.value},w.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=w.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return w.isFunction(n)?n:function(t){return t[n]}};w.sortBy=function(n,t,r){var e=F(t);return w.pluck(w.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(t||w.identity);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};w.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(w.has(n,t)?n[t]:n[t]=[]).push(r)})},w.countBy=function(n,t,r){return k(n,t,r,function(n,t){w.has(n,t)||(n[t]=0),n[t]++})},w.sortedIndex=function(n,t,r,e){r=null==r?w.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;u>r.call(e,n[o])?i=o+1:a=o}return i},w.toArray=function(n){return n?w.isArray(n)?o.call(n):n.length===+n.length?w.map(n,w.identity):w.values(n):[]},w.size=function(n){return null==n?0:n.length===+n.length?n.length:w.keys(n).length},w.first=w.head=w.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},w.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},w.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},w.rest=w.tail=w.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},w.compact=function(n){return w.filter(n,w.identity)};var R=function(n,t,r){return A(n,function(n){w.isArray(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r};w.flatten=function(n,t){return R(n,t,[])},w.without=function(n){return w.difference(n,o.call(arguments,1))},w.uniq=w.unique=function(n,t,r,e){w.isFunction(t)&&(e=r,r=t,t=!1);var u=r?w.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:w.contains(a,r))||(a.push(r),i.push(n[e]))}),i},w.union=function(){return w.uniq(c.apply(e,arguments))},w.intersection=function(n){var t=o.call(arguments,1);return w.filter(w.uniq(n),function(n){return w.every(t,function(t){return w.indexOf(t,n)>=0})})},w.difference=function(n){var t=c.apply(e,o.call(arguments,1));return w.filter(n,function(n){return!w.contains(t,n)})},w.zip=function(){for(var n=o.call(arguments),t=w.max(w.pluck(n,"length")),r=Array(t),e=0;t>e;e++)r[e]=w.pluck(n,""+e);return r},w.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},w.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=w.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},w.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},w.range=function(n,t,r){1>=arguments.length&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=Array(e);e>u;)i[u++]=n,n+=r;return i};var I=function(){};w.bind=function(n,t){var r,e;if(n.bind===j&&j)return j.apply(n,o.call(arguments,1));if(!w.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));I.prototype=n.prototype;var u=new I;I.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},w.bindAll=function(n){var t=o.call(arguments,1);return 0==t.length&&(t=w.functions(n)),A(t,function(t){n[t]=w.bind(n[t],n)}),n},w.memoize=function(n,t){var r={};return t||(t=w.identity),function(){var e=t.apply(this,arguments);return w.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},w.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},w.defer=function(n){return w.delay.apply(w,[n,1].concat(o.call(arguments,1)))},w.throttle=function(n,t){var r,e,u,i,a=0,o=function(){a=new Date,u=null,i=n.apply(r,e)};return function(){var c=new Date,l=t-(c-a);return r=this,e=arguments,0>=l?(clearTimeout(u),u=null,a=c,i=n.apply(r,e)):u||(u=setTimeout(o,l)),i}},w.debounce=function(n,t,r){var e,u;return function(){var i=this,a=arguments,o=function(){e=null,r||(u=n.apply(i,a))},c=r&&!e;return clearTimeout(e),e=setTimeout(o,t),c&&(u=n.apply(i,a)),u}},w.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},w.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},w.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},w.after=function(n,t){return 0>=n?t():function(){return 1>--n?t.apply(this,arguments):void 0}},w.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)w.has(n,r)&&(t[t.length]=r);return t},w.values=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push(n[r]);return t},w.pairs=function(n){var t=[];for(var r in n)w.has(n,r)&&t.push([r,n[r]]);return t},w.invert=function(n){var t={};for(var r in n)w.has(n,r)&&(t[n[r]]=r);return t},w.functions=w.methods=function(n){var t=[];for(var r in n)w.isFunction(n[r])&&t.push(r);return t.sort()},w.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},w.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},w.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)w.contains(r,u)||(t[u]=n[u]);return t},w.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)null==n[r]&&(n[r]=t[r])}),n},w.clone=function(n){return w.isObject(n)?w.isArray(n)?n.slice():w.extend({},n):n},w.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof w&&(n=n._wrapped),t instanceof w&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==t+"";case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;r.push(n),e.push(t);var a=0,o=!0;if("[object Array]"==u){if(a=n.length,o=a==t.length)for(;a--&&(o=S(n[a],t[a],r,e)););}else{var c=n.constructor,f=t.constructor;if(c!==f&&!(w.isFunction(c)&&c instanceof c&&w.isFunction(f)&&f instanceof f))return!1;for(var s in n)if(w.has(n,s)&&(a++,!(o=w.has(t,s)&&S(n[s],t[s],r,e))))break;if(o){for(s in t)if(w.has(t,s)&&!a--)break;o=!a}}return r.pop(),e.pop(),o};w.isEqual=function(n,t){return S(n,t,[],[])},w.isEmpty=function(n){if(null==n)return!0;if(w.isArray(n)||w.isString(n))return 0===n.length;for(var t in n)if(w.has(n,t))return!1;return!0},w.isElement=function(n){return!(!n||1!==n.nodeType)},w.isArray=x||function(n){return"[object Array]"==l.call(n)},w.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){w["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),w.isArguments(arguments)||(w.isArguments=function(n){return!(!n||!w.has(n,"callee"))}),w.isFunction=function(n){return"function"==typeof n},w.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},w.isNaN=function(n){return w.isNumber(n)&&n!=+n},w.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},w.isNull=function(n){return null===n},w.isUndefined=function(n){return void 0===n},w.has=function(n,t){return f.call(n,t)},w.noConflict=function(){return n._=t,this},w.identity=function(n){return n},w.times=function(n,t,r){for(var e=Array(n),u=0;n>u;u++)e[u]=t.call(r,u);return e},w.random=function(n,t){return null==t&&(t=n,n=0),n+(0|Math.random()*(t-n+1))};var T={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};T.unescape=w.invert(T.escape);var M={escape:RegExp("["+w.keys(T.escape).join("")+"]","g"),unescape:RegExp("("+w.keys(T.unescape).join("|")+")","g")};w.each(["escape","unescape"],function(n){w[n]=function(t){return null==t?"":(""+t).replace(M[n],function(t){return T[n][t]})}}),w.result=function(n,t){if(null==n)return null;var r=n[t];return w.isFunction(r)?r.call(n):r},w.mixin=function(n){A(w.functions(n),function(t){var r=w[t]=n[t];w.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(w,n))}})};var N=0;w.uniqueId=function(n){var t=""+ ++N;return n?n+t:t},w.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;w.template=function(n,t,r){r=w.defaults({},r,w.templateSettings);var e=RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,a,o){return i+=n.slice(u,o).replace(D,function(n){return"\\"+B[n]}),r&&(i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(i+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),a&&(i+="';\n"+a+"\n__p+='"),u=o+t.length,t}),i+="';\n",r.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=Function(r.variable||"obj","_",i)}catch(o){throw o.source=i,o}if(t)return a(t,w);var c=function(n){return a.call(this,n,w)};return c.source="function("+(r.variable||"obj")+"){\n"+i+"}",c},w.chain=function(n){return w(n).chain()};var z=function(n){return this._chain?w(n).chain():n};w.mixin(w),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];w.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];w.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),w.extend(w.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
;
// moment.js
// version : 2.1.0
// author : Tim Wood
// license : MIT
// momentjs.com

(function (undefined) {

    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = "2.1.0",
        round = Math.round, i,
        // internal storage for language config files
        languages = {},

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO seperator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

        // preliminary iso regex
        // 0000-00-00 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000
        isoRegex = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.S', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            w : 'week',
            M : 'month',
            y : 'year'
        },

        // format function strings
        formatFunctions = {},

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.lang().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.lang().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.lang().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.lang().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.lang().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return this.weekYear();
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return this.isoWeekYear();
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return ~~(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(~~(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(~~(a / 60), 2) + ":" + leftZeroFill(~~a % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(~~(10 * a / 6), 4);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            }
        };

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.lang().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Language() {

    }

    // Moment prototype object
    function Moment(config) {
        extend(this, config);
    }

    // Duration Constructor
    function Duration(duration) {
        var years = duration.years || duration.year || duration.y || 0,
            months = duration.months || duration.month || duration.M || 0,
            weeks = duration.weeks || duration.week || duration.w || 0,
            days = duration.days || duration.day || duration.d || 0,
            hours = duration.hours || duration.hour || duration.h || 0,
            minutes = duration.minutes || duration.minute || duration.m || 0,
            seconds = duration.seconds || duration.second || duration.s || 0,
            milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

        // store reference to input for deterministic cloning
        this._input = duration;

        // representation for dateAddRemove
        this._milliseconds = milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = months +
            years * 12;

        this._data = {};

        this._bubble();
    }


    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i)) {
                a[i] = b[i];
            }
        }
        return a;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }

    // helper function for _.addTime and _.subtractTime
    function addOrSubtractDurationFromMoment(mom, duration, isAdding, ignoreUpdateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months,
            minutes,
            hours,
            currentDate;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        // store the minutes and hours so we can restore them
        if (days || months) {
            minutes = mom.minute();
            hours = mom.hour();
        }
        if (days) {
            mom.date(mom.date() + days * isAdding);
        }
        if (months) {
            mom.month(mom.month() + months * isAdding);
        }
        if (milliseconds && !ignoreUpdateOffset) {
            moment.updateOffset(mom);
        }
        // restore the minutes and hours after possibly changing dst
        if (days || months) {
            mom.minute(minutes);
            mom.hour(hours);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (~~array1[i] !== ~~array2[i]) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        return units ? unitAliases[units] || units.toLowerCase().replace(/(.)s$/, '$1') : units;
    }


    /************************************
        Languages
    ************************************/


    Language.prototype = {
        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },
        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace("%d", number);
        },
        _ordinal : "%d",

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },
        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        }
    };

    // Loads a language definition into the `languages` cache.  The function
    // takes a key and optionally values.  If not in the browser and no values
    // are provided, it will load the language file module.  As a convenience,
    // this function also returns the language values.
    function loadLang(key, values) {
        values.abbr = key;
        if (!languages[key]) {
            languages[key] = new Language();
        }
        languages[key].set(values);
        return languages[key];
    }

    // Determines which language definition to use and returns it.
    //
    // With no parameters, it will return the global language.  If you
    // pass in a language key, such as 'en', it will return the
    // definition for 'en', so long as 'en' has already been loaded using
    // moment.lang.
    function getLangDefinition(key) {
        if (!key) {
            return moment.fn._lang;
        }
        if (!languages[key] && hasModule) {
            try {
                require('./lang/' + key);
            } catch (e) {
                // call with no params to set to default
                return moment.fn._lang;
            }
        }
        return languages[key];
    }


    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[.*\]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return m.lang().longDateFormat(input) || input;
        }

        while (i-- && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        }

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        switch (token) {
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
            return parseTokenFourDigits;
        case 'YYYYY':
            return parseTokenSixDigits;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return getLangDefinition(config._l)._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
            return parseTokenOneOrTwoDigits;
        default :
            return new RegExp(token.replace('\\', ''));
        }
    }

    function timezoneMinutesFromString(string) {
        var tzchunk = (parseTokenTimezone.exec(string) || [])[0],
            parts = (tzchunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + ~~parts[2];

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            datePartArray[1] = (input == null) ? 0 : ~~input - 1;
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = getLangDefinition(config._l).monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[1] = a;
            } else {
                config._isValid = false;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DDDD
        case 'DD' : // fall through to DDDD
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                datePartArray[2] = ~~input;
            }
            break;
        // YEAR
        case 'YY' :
            datePartArray[0] = ~~input + (~~input > 68 ? 1900 : 2000);
            break;
        case 'YYYY' :
        case 'YYYYY' :
            datePartArray[0] = ~~input;
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = getLangDefinition(config._l).isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[3] = ~~input;
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[4] = ~~input;
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[5] = ~~input;
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
            datePartArray[6] = ~~ (('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        }

        // if the input is null, the date is not valid
        if (input == null) {
            config._isValid = false;
        }
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromArray(config) {
        var i, date, input = [];

        if (config._d) {
            return;
        }

        for (i = 0; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // add the offsets to the time to be parsed so that we can have a clean array for checking isValid
        input[3] += ~~((config._tzm || 0) / 60);
        input[4] += ~~((config._tzm || 0) % 60);

        date = new Date(0);

        if (config._useUTC) {
            date.setUTCFullYear(input[0], input[1], input[2]);
            date.setUTCHours(input[3], input[4], input[5], input[6]);
        } else {
            date.setFullYear(input[0], input[1], input[2]);
            date.setHours(input[3], input[4], input[5], input[6]);
        }

        config._d = date;
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var tokens = config._f.match(formattingTokens),
            string = config._i,
            i, parsedInput;

        config._a = [];

        for (i = 0; i < tokens.length; i++) {
            parsedInput = (getParseRegexForToken(tokens[i], config).exec(string) || [])[0];
            if (parsedInput) {
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            }
            // don't parse if its not a known token
            if (formatTokenFunctions[tokens[i]]) {
                addTimeToArrayFromToken(tokens[i], parsedInput, config);
            }
        }

        // add remaining unparsed input to the string
        if (string) {
            config._il = string;
        }

        // handle am pm
        if (config._isPm && config._a[3] < 12) {
            config._a[3] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[3] === 12) {
            config._a[3] = 0;
        }
        // return
        dateFromArray(config);
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            tempMoment,
            bestMoment,

            scoreToBeat = 99,
            i,
            currentScore;

        for (i = 0; i < config._f.length; i++) {
            tempConfig = extend({}, config);
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);
            tempMoment = new Moment(tempConfig);

            currentScore = compareArrays(tempConfig._a, tempMoment.toArray());

            // if there is any input that was not parsed
            // add a penalty for that format
            if (tempMoment._il) {
                currentScore += tempMoment._il.length;
            }

            if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempMoment;
            }
        }

        extend(config, bestMoment);
    }

    // date from iso format
    function makeDateFromString(config) {
        var i,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            // match[2] should be "T" or undefined
            config._f = 'YYYY-MM-DD' + (match[2] || " ");
            for (i = 0; i < 4; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (parseTokenTimezone.exec(string)) {
                config._f += " Z";
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._d = new Date(string);
        }
    }

    function makeDateFromInput(config) {
        var input = config._i,
            matched = aspNetJsonRegex.exec(input);

        if (input === undefined) {
            config._d = new Date();
        } else if (matched) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = input.slice(0);
            dateFromArray(config);
        } else {
            config._d = input instanceof Date ? new Date(+input) : new Date(input);
        }
    }


    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(milliseconds, withoutSuffix, lang) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < 45 && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < 45 && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < 22 && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= 25 && ['dd', days] ||
                days <= 45 && ['M'] ||
                days < 345 && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        args[3] = milliseconds > 0;
        args[4] = lang;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add('d', daysToDayOfWeek);
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }


    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        if (input === null || input === '') {
            return null;
        }

        if (typeof input === 'string') {
            config._i = input = getLangDefinition().preparse(input);
        }

        if (moment.isMoment(input)) {
            config = extend({}, input);
            config._d = new Date(+input._d);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, lang) {
        return makeMoment({
            _i : input,
            _f : format,
            _l : lang,
            _isUTC : false
        });
    };

    // creating with utc
    moment.utc = function (input, format, lang) {
        return makeMoment({
            _useUTC : true,
            _isUTC : true,
            _l : lang,
            _i : input,
            _f : format
        });
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var isDuration = moment.isDuration(input),
            isNumber = (typeof input === 'number'),
            duration = (isDuration ? input._input : (isNumber ? {} : input)),
            matched = aspNetTimeSpanJsonRegex.exec(input),
            sign,
            ret;

        if (isNumber) {
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (matched) {
            sign = (matched[1] === "-") ? -1 : 1;
            duration = {
                y: 0,
                d: ~~matched[2] * sign,
                h: ~~matched[3] * sign,
                m: ~~matched[4] * sign,
                s: ~~matched[5] * sign,
                ms: ~~matched[6] * sign
            };
        }

        ret = new Duration(duration);

        if (isDuration && input.hasOwnProperty('_lang')) {
            ret._lang = input._lang;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    moment.lang = function (key, values) {
        if (!key) {
            return moment.fn._lang._abbr;
        }
        if (values) {
            loadLang(key, values);
        } else if (!languages[key]) {
            getLangDefinition(key);
        }
        moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
    };

    // returns language data
    moment.langData = function (key) {
        if (key && key._lang && key._lang._abbr) {
            key = key._lang._abbr;
        }
        return getLangDefinition(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment;
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };


    /************************************
        Moment Prototype
    ************************************/


    moment.fn = Moment.prototype = {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            return formatMoment(moment(this).utc(), 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            if (this._isValid == null) {
                if (this._a) {
                    this._isValid = !compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray());
                } else {
                    this._isValid = !isNaN(this._d.getTime());
                }
            }
            return !!this._isValid;
        },

        utc : function () {
            return this.zone(0);
        },

        local : function () {
            this.zone(0);
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.lang().postformat(output);
        },

        add : function (input, val) {
            var dur;
            // switch args to support add('s', 1) and add(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, 1);
            return this;
        },

        subtract : function (input, val) {
            var dur;
            // switch args to support subtract('s', 1) and subtract(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, -1);
            return this;
        },

        diff : function (input, units, asFloat) {
            var that = this._isUTC ? moment(input).zone(this._offset || 0) : moment(input).local(),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                output += ((this - moment(this).startOf('month')) -
                        (that - moment(that).startOf('month'))) / diff;
                // same as above but with zones, to negate all dst
                output -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function () {
            var diff = this.diff(moment().startOf('day'), 'days', true),
                format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.lang().calendar(format, this));
        },

        isLeapYear : function () {
            var year = this.year();
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                if (typeof input === 'string') {
                    input = this.lang().weekdaysParse(input);
                    if (typeof input !== 'number') {
                        return this;
                    }
                }
                return this.add({ d : input - day });
            } else {
                return day;
            }
        },

        month : function (input) {
            var utc = this._isUTC ? 'UTC' : '',
                dayOfMonth,
                daysInMonth;

            if (input != null) {
                if (typeof input === 'string') {
                    input = this.lang().monthsParse(input);
                    if (typeof input !== 'number') {
                        return this;
                    }
                }

                dayOfMonth = this.date();
                this.date(1);
                this._d['set' + utc + 'Month'](input);
                this.date(Math.min(dayOfMonth, this.daysInMonth()));

                moment.updateOffset(this);
                return this;
            } else {
                return this._d['get' + utc + 'Month']();
            }
        },

        startOf: function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            }

            return this;
        },

        endOf: function (units) {
            return this.startOf(units).add(units, 1).subtract('ms', 1);
        },

        isAfter: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) > +moment(input).startOf(units);
        },

        isBefore: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) < +moment(input).startOf(units);
        },

        isSame: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) === +moment(input).startOf(units);
        },

        min: function (other) {
            other = moment.apply(null, arguments);
            return other < this ? this : other;
        },

        max: function (other) {
            other = moment.apply(null, arguments);
            return other > this ? this : other;
        },

        zone : function (input) {
            var offset = this._offset || 0;
            if (input != null) {
                if (typeof input === "string") {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                this._offset = input;
                this._isUTC = true;
                if (offset !== input) {
                    addOrSubtractDurationFromMoment(this, moment.duration(offset - input, 'm'), 1, true);
                }
            } else {
                return this._isUTC ? offset : this._d.getTimezoneOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? "UTC" : "";
        },

        zoneName : function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },

        daysInMonth : function () {
            return moment.utc([this.year(), this.month() + 1, 0]).date();
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return input == null ? year : this.add("y", (input - year));
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add("y", (input - year));
        },

        week : function (input) {
            var week = this.lang().week(this);
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        weekday : function (input) {
            var weekday = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return input == null ? weekday : this.add("d", input - weekday);
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        // If passed a language key, it will set the language for this
        // instance.  Otherwise, it will return the language configuration
        // variables for this instance.
        lang : function (key) {
            if (key === undefined) {
                return this._lang;
            } else {
                this._lang = getLangDefinition(key);
                return this;
            }
        }
    };

    // helper for adding shortcuts
    function makeGetterAndSetter(name, key) {
        moment.fn[name] = moment.fn[name + 's'] = function (input) {
            var utc = this._isUTC ? 'UTC' : '';
            if (input != null) {
                this._d['set' + utc + key](input);
                moment.updateOffset(this);
                return this;
            } else {
                return this._d['get' + utc + key]();
            }
        };
    }

    // loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)
    for (i = 0; i < proxyGettersAndSetters.length; i ++) {
        makeGetterAndSetter(proxyGettersAndSetters[i].toLowerCase().replace(/s$/, ''), proxyGettersAndSetters[i]);
    }

    // add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
    makeGetterAndSetter('year', 'FullYear');

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    moment.duration.fn = Duration.prototype = {
        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);
            data.days = days % 30;

            months += absRound(days / 30);
            data.months = months % 12;

            years = absRound(months / 12);
            data.years = years;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              ~~(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var difference = +this,
                output = relativeTime(difference, !withSuffix, this.lang());

            if (withSuffix) {
                output = this.lang().pastFuture(difference, output);
            }

            return this.lang().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            units = normalizeUnits(units);
            return this['as' + units.charAt(0).toUpperCase() + units.slice(1) + 's']();
        },

        lang : moment.fn.lang
    };

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    function makeDurationAsGetter(name, factor) {
        moment.duration.fn['as' + name] = function () {
            return +this / factor;
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationAsGetter(i, unitMillisecondFactors[i]);
            makeDurationGetter(i.toLowerCase());
        }
    }

    makeDurationAsGetter('Weeks', 6048e5);
    moment.duration.fn.asMonths = function () {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12;
    };


    /************************************
        Default Lang
    ************************************/


    // Set default language, other languages will inherit from English.
    moment.lang('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });


    /************************************
        Exposing Moment
    ************************************/


    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    }
    /*global ender:false */
    if (typeof ender === 'undefined') {
        // here, `this` means `window` in the browser, or `global` on the server
        // add `moment` as a global object via a string identifier,
        // for Closure Compiler "advanced" mode
        this['moment'] = moment;
    }
    /*global define:false */
    if (typeof define === "function" && define.amd) {
        define("moment", [], function () {
            return moment;
        });
    }
}).call(this);
;
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\

(function(a){var b="0.3.4",c="hasOwnProperty",d=/[\.\/]/,e="*",f=function(){},g=function(a,b){return a-b},h,i,j={n:{}},k=function(a,b){var c=j,d=i,e=Array.prototype.slice.call(arguments,2),f=k.listeners(a),l=0,m=!1,n,o=[],p={},q=[],r=h,s=[];h=a,i=0;for(var t=0,u=f.length;t<u;t++)"zIndex"in f[t]&&(o.push(f[t].zIndex),f[t].zIndex<0&&(p[f[t].zIndex]=f[t]));o.sort(g);while(o[l]<0){n=p[o[l++]],q.push(n.apply(b,e));if(i){i=d;return q}}for(t=0;t<u;t++){n=f[t];if("zIndex"in n)if(n.zIndex==o[l]){q.push(n.apply(b,e));if(i)break;do{l++,n=p[o[l]],n&&q.push(n.apply(b,e));if(i)break}while(n)}else p[n.zIndex]=n;else{q.push(n.apply(b,e));if(i)break}}i=d,h=r;return q.length?q:null};k.listeners=function(a){var b=a.split(d),c=j,f,g,h,i,k,l,m,n,o=[c],p=[];for(i=0,k=b.length;i<k;i++){n=[];for(l=0,m=o.length;l<m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;while(h--)f=g[h],f&&(n.push(f),p=p.concat(f.f||[]))}o=n}return p},k.on=function(a,b){var c=a.split(d),e=j;for(var g=0,h=c.length;g<h;g++)e=e.n,!e[c[g]]&&(e[c[g]]={n:{}}),e=e[c[g]];e.f=e.f||[];for(g=0,h=e.f.length;g<h;g++)if(e.f[g]==b)return f;e.f.push(b);return function(a){+a==+a&&(b.zIndex=+a)}},k.stop=function(){i=1},k.nt=function(a){if(a)return(new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)")).test(h);return h},k.off=k.unbind=function(a,b){var f=a.split(d),g,h,i,k,l,m,n,o=[j];for(k=0,l=f.length;k<l;k++)for(m=0;m<o.length;m+=i.length-2){i=[m,1],g=o[m].n;if(f[k]!=e)g[f[k]]&&i.push(g[f[k]]);else for(h in g)g[c](h)&&i.push(g[h]);o.splice.apply(o,i)}for(k=0,l=o.length;k<l;k++){g=o[k];while(g.n){if(b){if(g.f){for(m=0,n=g.f.length;m<n;m++)if(g.f[m]==b){g.f.splice(m,1);break}!g.f.length&&delete g.f}for(h in g.n)if(g.n[c](h)&&g.n[h].f){var p=g.n[h].f;for(m=0,n=p.length;m<n;m++)if(p[m]==b){p.splice(m,1);break}!p.length&&delete g.n[h].f}}else{delete g.f;for(h in g.n)g.n[c](h)&&g.n[h].f&&delete g.n[h].f}g=g.n}}},k.once=function(a,b){var c=function(){var d=b.apply(this,arguments);k.unbind(a,c);return d};return k.on(a,c)},k.version=b,k.toString=function(){return"You are running Eve "+b},typeof module!="undefined"&&module.exports?module.exports=k:typeof define!="undefined"?define("eve",[],function(){return k}):a.eve=k})(this),function(){function cF(a){for(var b=0;b<cy.length;b++)cy[b].el.paper==a&&cy.splice(b--,1)}function cE(b,d,e,f,h,i){e=Q(e);var j,k,l,m=[],o,p,q,t=b.ms,u={},v={},w={};if(f)for(y=0,z=cy.length;y<z;y++){var x=cy[y];if(x.el.id==d.id&&x.anim==b){x.percent!=e?(cy.splice(y,1),l=1):k=x,d.attr(x.totalOrigin);break}}else f=+v;for(var y=0,z=b.percents.length;y<z;y++){if(b.percents[y]==e||b.percents[y]>f*b.top){e=b.percents[y],p=b.percents[y-1]||0,t=t/b.top*(e-p),o=b.percents[y+1],j=b.anim[e];break}f&&d.attr(b.anim[b.percents[y]])}if(!!j){if(!k){for(var A in j)if(j[g](A))if(U[g](A)||d.paper.customAttributes[g](A)){u[A]=d.attr(A),u[A]==null&&(u[A]=T[A]),v[A]=j[A];switch(U[A]){case C:w[A]=(v[A]-u[A])/t;break;case"colour":u[A]=a.getRGB(u[A]);var B=a.getRGB(v[A]);w[A]={r:(B.r-u[A].r)/t,g:(B.g-u[A].g)/t,b:(B.b-u[A].b)/t};break;case"path":var D=bR(u[A],v[A]),E=D[1];u[A]=D[0],w[A]=[];for(y=0,z=u[A].length;y<z;y++){w[A][y]=[0];for(var F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(E[y][F]-u[A][y][F])/t}break;case"transform":var H=d._,I=ca(H[A],v[A]);if(I){u[A]=I.from,v[A]=I.to,w[A]=[],w[A].real=!0;for(y=0,z=u[A].length;y<z;y++){w[A][y]=[u[A][y][0]];for(F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(v[A][y][F]-u[A][y][F])/t}}else{var J=d.matrix||new cb,K={_:{transform:H.transform},getBBox:function(){return d.getBBox(1)}};u[A]=[J.a,J.b,J.c,J.d,J.e,J.f],b$(K,v[A]),v[A]=K._.transform,w[A]=[(K.matrix.a-J.a)/t,(K.matrix.b-J.b)/t,(K.matrix.c-J.c)/t,(K.matrix.d-J.d)/t,(K.matrix.e-J.e)/t,(K.matrix.f-J.f)/t]}break;case"csv":var L=r(j[A])[s](c),M=r(u[A])[s](c);if(A=="clip-rect"){u[A]=M,w[A]=[],y=M.length;while(y--)w[A][y]=(L[y]-u[A][y])/t}v[A]=L;break;default:L=[][n](j[A]),M=[][n](u[A]),w[A]=[],y=d.paper.customAttributes[A].length;while(y--)w[A][y]=((L[y]||0)-(M[y]||0))/t}}var O=j.easing,P=a.easing_formulas[O];if(!P){P=r(O).match(N);if(P&&P.length==5){var R=P;P=function(a){return cC(a,+R[1],+R[2],+R[3],+R[4],t)}}else P=bf}q=j.start||b.start||+(new Date),x={anim:b,percent:e,timestamp:q,start:q+(b.del||0),status:0,initstatus:f||0,stop:!1,ms:t,easing:P,from:u,diff:w,to:v,el:d,callback:j.callback,prev:p,next:o,repeat:i||b.times,origin:d.attr(),totalOrigin:h},cy.push(x);if(f&&!k&&!l){x.stop=!0,x.start=new Date-t*f;if(cy.length==1)return cA()}l&&(x.start=new Date-x.ms*f),cy.length==1&&cz(cA)}else k.initstatus=f,k.start=new Date-k.ms*f;eve("raphael.anim.start."+d.id,d,b)}}function cD(a,b){var c=[],d={};this.ms=b,this.times=1;if(a){for(var e in a)a[g](e)&&(d[Q(e)]=a[e],c.push(Q(e)));c.sort(bd)}this.anim=d,this.top=c[c.length-1],this.percents=c}function cC(a,b,c,d,e,f){function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(z(f)<b)return e;j=(3*i*e+2*h)*e+g;if(z(j)<1e-6)break;e=e-f/j}c=0,d=1,e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(z(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function m(a){return((i*a+h)*a+g)*a}var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;return n(a,1/(200*f))}function cq(){return this.x+q+this.y+q+this.width+" × "+this.height}function cp(){return this.x+q+this.y}function cb(a,b,c,d,e,f){a!=null?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function bH(b,c,d){b=a._path2curve(b),c=a._path2curve(c);var e,f,g,h,i,j,k,l,m,n,o=d?0:[];for(var p=0,q=b.length;p<q;p++){var r=b[p];if(r[0]=="M")e=i=r[1],f=j=r[2];else{r[0]=="C"?(m=[e,f].concat(r.slice(1)),e=m[6],f=m[7]):(m=[e,f,e,f,i,j,i,j],e=i,f=j);for(var s=0,t=c.length;s<t;s++){var u=c[s];if(u[0]=="M")g=k=u[1],h=l=u[2];else{u[0]=="C"?(n=[g,h].concat(u.slice(1)),g=n[6],h=n[7]):(n=[g,h,g,h,k,l,k,l],g=k,h=l);var v=bG(m,n,d);if(d)o+=v;else{for(var w=0,x=v.length;w<x;w++)v[w].segment1=p,v[w].segment2=s,v[w].bez1=m,v[w].bez2=n;o=o.concat(v)}}}}}return o}function bG(b,c,d){var e=a.bezierBBox(b),f=a.bezierBBox(c);if(!a.isBBoxIntersect(e,f))return d?0:[];var g=bB.apply(0,b),h=bB.apply(0,c),i=~~(g/5),j=~~(h/5),k=[],l=[],m={},n=d?0:[];for(var o=0;o<i+1;o++){var p=a.findDotsAtSegment.apply(a,b.concat(o/i));k.push({x:p.x,y:p.y,t:o/i})}for(o=0;o<j+1;o++)p=a.findDotsAtSegment.apply(a,c.concat(o/j)),l.push({x:p.x,y:p.y,t:o/j});for(o=0;o<i;o++)for(var q=0;q<j;q++){var r=k[o],s=k[o+1],t=l[q],u=l[q+1],v=z(s.x-r.x)<.001?"y":"x",w=z(u.x-t.x)<.001?"y":"x",x=bD(r.x,r.y,s.x,s.y,t.x,t.y,u.x,u.y);if(x){if(m[x.x.toFixed(4)]==x.y.toFixed(4))continue;m[x.x.toFixed(4)]=x.y.toFixed(4);var y=r.t+z((x[v]-r[v])/(s[v]-r[v]))*(s.t-r.t),A=t.t+z((x[w]-t[w])/(u[w]-t[w]))*(u.t-t.t);y>=0&&y<=1&&A>=0&&A<=1&&(d?n++:n.push({x:x.x,y:x.y,t1:y,t2:A}))}}return n}function bF(a,b){return bG(a,b,1)}function bE(a,b){return bG(a,b)}function bD(a,b,c,d,e,f,g,h){if(!(x(a,c)<y(e,g)||y(a,c)>x(e,g)||x(b,d)<y(f,h)||y(b,d)>x(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(!k)return;var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(n<+y(a,c).toFixed(2)||n>+x(a,c).toFixed(2)||n<+y(e,g).toFixed(2)||n>+x(e,g).toFixed(2)||o<+y(b,d).toFixed(2)||o>+x(b,d).toFixed(2)||o<+y(f,h).toFixed(2)||o>+x(f,h).toFixed(2))return;return{x:l,y:m}}}function bC(a,b,c,d,e,f,g,h,i){if(!(i<0||bB(a,b,c,d,e,f,g,h)<i)){var j=1,k=j/2,l=j-k,m,n=.01;m=bB(a,b,c,d,e,f,g,h,l);while(z(m-i)>n)k/=2,l+=(m<i?1:-1)*k,m=bB(a,b,c,d,e,f,g,h,l);return l}}function bB(a,b,c,d,e,f,g,h,i){i==null&&(i=1),i=i>1?1:i<0?0:i;var j=i/2,k=12,l=[-0.1252,.1252,-0.3678,.3678,-0.5873,.5873,-0.7699,.7699,-0.9041,.9041,-0.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],n=0;for(var o=0;o<k;o++){var p=j*l[o]+j,q=bA(p,a,c,e,g),r=bA(p,b,d,f,h),s=q*q+r*r;n+=m[o]*w.sqrt(s)}return j*n}function bA(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function by(a,b){var c=[];for(var d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function bx(){return this.hex}function bv(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];if(h[g](f)){bu(i,f);return c?c(h[f]):h[f]}i.length>=1e3&&delete h[i.shift()],i.push(f),h[f]=a[m](b,e);return c?c(h[f]):h[f]}return d}function bu(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function bm(a){if(Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[g](c)&&(b[c]=bm(a[c]));return b}function a(c){if(a.is(c,"function"))return b?c():eve.on("raphael.DOMload",c);if(a.is(c,E))return a._engine.create[m](a,c.splice(0,3+a.is(c[0],C))).add(c);var d=Array.prototype.slice.call(arguments,0);if(a.is(d[d.length-1],"function")){var e=d.pop();return b?e.call(a._engine.create[m](a,d)):eve.on("raphael.DOMload",function(){e.call(a._engine.create[m](a,d))})}return a._engine.create[m](a,arguments)}a.version="2.1.0",a.eve=eve;var b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{(\d+)\}/g,f="prototype",g="hasOwnProperty",h={doc:document,win:window},i={was:Object.prototype[g].call(h.win,"Raphael"),is:h.win.Raphael},j=function(){this.ca=this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in h.doc,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v=r.prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C="number",D="string",E="array",F="toString",G="fill",H=Object.prototype.toString,I={},J="push",K=a._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,L=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,"-Infinity":1},N=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=w.round,P="setAttribute",Q=parseFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,"clip-rect":"csv",cx:C,cy:C,fill:"colour","fill-opacity":C,"font-size":C,height:C,opacity:C,path:"path",r:C,rx:C,ry:C,stroke:"colour","stroke-opacity":C,"stroke-width":C,transform:"transform",width:C,x:C,y:C},V=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,W=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,X={hs:1,rg:1},Y=/,?([achlmqrstvxz]),?/gi,Z=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,$=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,_=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,ba=a._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,bb={},bc=function(a,b){return a.key-b.key},bd=function(a,b){return Q(a)-Q(b)},be=function(){},bf=function(a){return a},bg=a._rectPath=function(a,b,c,d,e){if(e)return[["M",a+e,b],["l",c-e*2,0],["a",e,e,0,0,1,e,e],["l",0,d-e*2],["a",e,e,0,0,1,-e,e],["l",e*2-c,0],["a",e,e,0,0,1,-e,-e],["l",0,e*2-d],["a",e,e,0,0,1,e,-e],["z"]];return[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},bh=function(a,b,c,d){d==null&&(d=c);return[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},bi=a._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return bg(b.x,b.y,b.width,b.height)}},bj=a.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;a=bR(a);for(e=0,g=a.length;e<g;e++){i=a[e];for(f=1,h=i.length;f<h;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bk=h.doc.createElement("div"),bl;bk.innerHTML='<v:shape adj="1"/>',bl=bk.firstChild,bl.style.behavior="url(#default#VML)";if(!bl||typeof bl.adj!="object")return a.type=p;bk=null}a.svg=!(a.vml=a.type=="VML"),a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=function(a,b){b=v.call(b);if(b=="finite")return!M[g](+a);if(b=="array")return a instanceof Array;return b=="null"&&a===null||b==typeof a&&a!==null||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||H.call(a).slice(8,-1).toLowerCase()==b},a.angle=function(b,c,d,e,f,g){if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return(180+w.atan2(-i,-h)*180/B+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)},a.rad=function(a){return a%360*B/180},a.deg=function(a){return a*180/B%360},a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,E)){var e=b.length;while(e--)if(z(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};var bn=a.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=w.random()*16|0,c=a=="x"?b:b&3|8;return c.toString(16)});a.setWindow=function(b){eve("raphael.setWindow",a,h.win,b),h.win=b,h.doc=h.win.document,a._engine.initWin&&a._engine.initWin(h.win)};var bo=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),d=e.body}catch(f){d=createPopup().document.body}var g=d.createTextRange();bo=bv(function(a){try{d.style.color=r(a).replace(c,p);var b=g.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=h.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",h.doc.body.appendChild(i),bo=bv(function(a){i.style.color=a;return h.doc.defaultView.getComputedStyle(i,p).getPropertyValue("color")})}return bo(b)},bp=function(){return"hsb("+[this.h,this.s,this.b]+")"},bq=function(){return"hsl("+[this.h,this.s,this.l]+")"},br=function(){return this.hex},bs=function(b,c,d){c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b&&(d=b.b,c=b.g,b=b.r);if(c==null&&a.is(b,D)){var e=a.getRGB(b);b=e.r,c=e.g,d=e.b}if(b>1||c>1||d>1)b/=255,c/=255,d/=255;return[b,c,d]},bt=function(b,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d,hex:a.rgb(b,c,d),toString:br};a.is(e,"finite")&&(f.opacity=e);return f};a.color=function(b){var c;a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b?(c=a.hsb2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b?(c=a.hsl2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):(a.is(b,"string")&&(b=a.getRGB(b)),a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b?(c=a.rgb2hsl(b),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb(b),b.v=c.b):(b={hex:"none"},b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toString=br;return b},a.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=a%360/60,i=c*b,h=i*(1-z(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h);if(a>1||b>1||c>1)a/=360,b/=100,c/=100;a*=360;var e,f,g,h,i;a=a%360/60,i=2*b*(c<.5?c:1-c),h=i*(1-z(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.rgb2hsb=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;f=x(a,b,c),g=f-y(a,b,c),d=g==0?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toString:bp}},a.rgb2hsl=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;g=x(a,b,c),h=y(a,b,c),i=g-h,d=i==0?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=i==0?0:f<.5?i/(2*f):i/(2-2*f);return{h:d,s:e,l:f,toString:bq}},a._path2string=function(){return this.join(",").replace(Y,"$1")};var bw=a._preload=function(a,b){var c=h.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,h.doc.body.removeChild(this)},c.onerror=function(){h.doc.body.removeChild(this)},h.doc.body.appendChild(c),c.src=a};a.getRGB=bv(function(b){if(!b||!!((b=r(b)).indexOf("-")+1))return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none",toString:bx};!X[g](b.toLowerCase().substring(0,2))&&b.charAt()!="#"&&(b=bo(b));var c,d,e,f,h,i,j,k=b.match(L);if(k){k[2]&&(f=R(k[2].substring(5),16),e=R(k[2].substring(3,5),16),d=R(k[2].substring(1,3),16)),k[3]&&(f=R((i=k[3].charAt(3))+i,16),e=R((i=k[3].charAt(2))+i,16),d=R((i=k[3].charAt(1))+i,16)),k[4]&&(j=k[4][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),k[1].toLowerCase().slice(0,4)=="rgba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100));if(k[5]){j=k[5][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,f,h)}if(k[6]){j=k[6][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsla"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,f,h)}k={r:d,g:e,b:f,toString:bx},k.hex="#"+(16777216|f|e<<8|d<<16).toString(16).slice(1),a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx}},a),a.hsb=bv(function(b,c,d){return a.hsb2rgb(b,c,d).hex}),a.hsl=bv(function(b,c,d){return a.hsl2rgb(b,c,d).hex}),a.rgb=bv(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b}));return c.hex},a.getColor.reset=function(){delete this.start},a.parsePathString=function(b){if(!b)return null;var c=bz(b);if(c.arr)return bJ(c.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];a.is(b,E)&&a.is(b[0],E)&&(e=bJ(b)),e.length||r(b).replace(Z,function(a,b,c){var f=[],g=b.toLowerCase();c.replace(_,function(a,b){b&&f.push(+b)}),g=="m"&&f.length>2&&(e.push([b][n](f.splice(0,2))),g="l",b=b=="m"?"l":"L");if(g=="r")e.push([b][n](f));else while(f.length>=d[g]){e.push([b][n](f.splice(0,d[g])));if(!d[g])break}}),e.toString=a._path2string,c.arr=bJ(e);return e},a.parseTransformString=bv(function(b){if(!b)return null;var c={r:3,s:4,t:2,m:6},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=bJ(b)),d.length||r(b).replace($,function(a,b,c){var e=[],f=v.call(b);c.replace(_,function(a,b){b&&e.push(+b)}),d.push([b][n](e))}),d.toString=a._path2string;return d});var bz=function(a){var b=bz.ps=bz.ps||{};b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[g](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])});return b[a]};a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=A(j,3),l=A(j,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j*f+i*h,z=90-w.atan2(q-s,r-t)*180/B;(q>s||r<t)&&(z+=180);return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}},a.bezierBBox=function(b,c,d,e,f,g,h,i){a.is(b,"array")||(b=[b,c,d,e,f,g,h,i]);var j=bQ.apply(null,b);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},a.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},a.isBBoxIntersect=function(b,c){var d=a.isPointInsideBBox;return d(c,b.x,b.y)||d(c,b.x2,b.y)||d(c,b.x,b.y2)||d(c,b.x2,b.y2)||d(b,c.x,c.y)||d(b,c.x2,c.y)||d(b,c.x,c.y2)||d(b,c.x2,c.y2)||(b.x<c.x2&&b.x>c.x||c.x<b.x2&&c.x>b.x)&&(b.y<c.y2&&b.y>c.y||c.y<b.y2&&c.y>b.y)},a.pathIntersection=function(a,b){return bH(a,b)},a.pathIntersectionNumber=function(a,b){return bH(a,b,1)},a.isPointInsidePath=function(b,c,d){var e=a.pathBBox(b);return a.isPointInsideBBox(e,c,d)&&bH(b,[["M",c,d],["H",e.x2+10]],1)%2==1},a._removedFactory=function(a){return function(){eve("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var bI=a.pathBBox=function(a){var b=bz(a);if(b.bbox)return b.bbox;if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=bR(a);var c=0,d=0,e=[],f=[],g;for(var h=0,i=a.length;h<i;h++){g=a[h];if(g[0]=="M")c=g[1],d=g[2],e.push(c),f.push(d);else{var j=bQ(c,d,g[1],g[2],g[3],g[4],g[5],g[6]);e=e[n](j.min.x,j.max.x),f=f[n](j.min.y,j.max.y),c=g[5],d=g[6]}}var k=y[m](0,e),l=y[m](0,f),o=x[m](0,e),p=x[m](0,f),q={x:k,y:l,x2:o,y2:p,width:o-k,height:p-l};b.bbox=bm(q);return q},bJ=function(b){var c=bm(b);c.toString=a._path2string;return c},bK=a._pathToRelative=function(b){var c=bz(b);if(c.rel)return bJ(c.rel);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=b[0][1],f=b[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=b.length;j<k;j++){var l=d[j]=[],m=b[j];if(m[0]!=v.call(m[0])){l[0]=v.call(m[0]);switch(l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;n<o;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}}else{l=d[j]=[],m[0]=="m"&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;p<q;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}d.toString=a._path2string,c.rel=bJ(d);return d},bL=a._pathToAbsolute=function(b){var c=bz(b);if(c.abs)return bJ(c.abs);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);if(!b||!b.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=+b[0][1],f=+b[0][2],g=e,h=f,i++,d[0]=["M",e,f]);var j=b.length==3&&b[0][0]=="M"&&b[1][0].toUpperCase()=="R"&&b[2][0].toUpperCase()=="Z";for(var k,l,m=i,o=b.length;m<o;m++){d.push(k=[]),l=b[m];if(l[0]!=S.call(l[0])){k[0]=S.call(l[0]);switch(k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":var p=[e,f][n](l.slice(1));for(var q=2,r=p.length;q<r;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[n](by(p,j));break;case"M":g=+l[1]+e,h=+l[2]+f;default:for(q=1,r=l.length;q<r;q++)k[q]=+l[q]+(q%2?e:f)}}else if(l[0]=="R")p=[e,f][n](l.slice(1)),d.pop(),d=d[n](by(p,j)),k=["R"][n](l.slice(-2));else for(var s=0,t=l.length;s<t;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=h;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],h=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}d.toString=a._path2string,c.abs=bJ(d);return d},bM=function(a,b,c,d){return[a,b,c,d,c,d]},bN=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bO=function(a,b,c,d,e,f,g,h,i,j){var k=B*120/180,l=B/180*(+e||0),m=[],o,p=bv(function(a,b,c){var d=a*w.cos(c)-b*w.sin(c),e=a*w.sin(c)+b*w.cos(c);return{x:d,y:e}});if(!j){o=p(a,b,-l),a=o.x,b=o.y,o=p(h,i,-l),h=o.x,i=o.y;var q=w.cos(B/180*e),r=w.sin(B/180*e),t=(a-h)/2,u=(b-i)/2,v=t*t/(c*c)+u*u/(d*d);v>1&&(v=w.sqrt(v),c=v*c,d=v*d);var x=c*c,y=d*d,A=(f==g?-1:1)*w.sqrt(z((x*y-x*u*u-y*t*t)/(x*u*u+y*t*t))),C=A*c*u/d+(a+h)/2,D=A*-d*t/c+(b+i)/2,E=w.asin(((b-D)/d).toFixed(9)),F=w.asin(((i-D)/d).toFixed(9));E=a<C?B-E:E,F=h<C?B-F:F,E<0&&(E=B*2+E),F<0&&(F=B*2+F),g&&E>F&&(E=E-B*2),!g&&F>E&&(F=F-B*2)}else E=j[0],F=j[1],C=j[2],D=j[3];var G=F-E;if(z(G)>k){var H=F,I=h,J=i;F=E+k*(g&&F>E?1:-1),h=C+c*w.cos(F),i=D+d*w.sin(F),m=bO(h,i,c,d,e,0,g,I,J,[F,H,C,D])}G=F-E;var K=w.cos(E),L=w.sin(E),M=w.cos(F),N=w.sin(F),O=w.tan(G/4),P=4/3*c*O,Q=4/3*d*O,R=[a,b],S=[a+P*L,b-Q*K],T=[h+P*N,i-Q*M],U=[h,i];S[0]=2*R[0]-S[0],S[1]=2*R[1]-S[1];if(j)return[S,T,U][n](m);m=[S,T,U][n](m).join()[s](",");var V=[];for(var W=0,X=m.length;W<X;W++)V[W]=W%2?p(m[W-1],m[W],l).y:p(m[W],m[W+1],l).x;return V},bP=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:A(j,3)*a+A(j,2)*3*i*c+j*3*i*i*e+A(i,3)*g,y:A(j,3)*b+A(j,2)*3*i*d+j*3*i*i*f+A(i,3)*h}},bQ=bv(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y)),i=f-2*d+b-(h-2*f+d),j=2*(d-b)-2*(f-d),k=b-d,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y));return{min:{x:y[m](0,p),y:y[m](0,o)},max:{x:x[m](0,p),y:x[m](0,o)}}}),bR=a._path2curve=bv(function(a,b){var c=!b&&bz(a);if(!b&&c.curve)return bJ(c.curve);var d=bL(a),e=b&&bL(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][n](bO[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=["C"][n](bN(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][n](bN(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](bM(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](bM(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](bM(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](bM(b.x,b.y,b.X,b.Y))}return a},i=function(a,b){if(a[b].length>7){a[b].shift();var c=a[b];while(c.length)a.splice(b++,0,["C"][n](c.splice(0,6)));a.splice(b,1),l=x(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&a[g][0]=="M"&&b[g][0]!="M"&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=x(d.length,e&&e.length||0))};for(var k=0,l=x(d.length,e&&e.length||0);k<l;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var o=d[k],p=e&&e[k],q=o.length,r=e&&p.length;f.x=o[q-2],f.y=o[q-1],f.bx=Q(o[q-4])||f.x,f.by=Q(o[q-3])||f.y,g.bx=e&&(Q(p[r-4])||g.x),g.by=e&&(Q(p[r-3])||g.y),g.x=e&&p[r-2],g.y=e&&p[r-1]}e||(c.curve=bJ(d));return e?[d,e]:d},null,bJ),bS=a._parseDots=bv(function(b){var c=[];for(var d=0,e=b.length;d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;d<e;d++)if(!c[d].offset){var h=Q(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=Q(i);var k=(i-h)/(j-d+1);for(;d<j;d++)h+=k,c[d].offset=h+"%"}return c}),bT=a._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)},bU=a._tofront=function(a,b){b.top!==a&&(bT(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},bV=a._toback=function(a,b){b.bottom!==a&&(bT(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bW=a._insertafter=function(a,b,c){bT(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},bX=a._insertbefore=function(a,b,c){bT(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},bY=a.toMatrix=function(a,b){var c=bI(a),d={_:{transform:p},getBBox:function(){return c}};b$(d,b);return d.matrix},bZ=a.transformPath=function(a,b){return bj(a,bY(a,b))},b$=a._extractTransform=function(b,c){if(c==null)return b._.transform;c=r(c).replace(/\.{3}|\u2026/g,b._.transform||p);var d=a.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=b._,k=new cb;j.transform=d||[];if(d)for(var l=0,m=d.length;l<m;l++){var n=d[l],o=n.length,q=r(n[0]).toLowerCase(),s=n[0]!=q,t=s?k.invert():0,u,v,w,x,y;q=="t"&&o==3?s?(u=t.x(0,0),v=t.y(0,0),w=t.x(n[1],n[2]),x=t.y(n[1],n[2]),k.translate(w-u,x-v)):k.translate(n[1],n[2]):q=="r"?o==2?(y=y||b.getBBox(1),k.rotate(n[1],y.x+y.width/2,y.y+y.height/2),e+=n[1]):o==4&&(s?(w=t.x(n[2],n[3]),x=t.y(n[2],n[3]),k.rotate(n[1],w,x)):k.rotate(n[1],n[2],n[3]),e+=n[1]):q=="s"?o==2||o==3?(y=y||b.getBBox(1),k.scale(n[1],n[o-1],y.x+y.width/2,y.y+y.height/2),h*=n[1],i*=n[o-1]):o==5&&(s?(w=t.x(n[3],n[4]),x=t.y(n[3],n[4]),k.scale(n[1],n[2],w,x)):k.scale(n[1],n[2],n[3],n[4]),h*=n[1],i*=n[2]):q=="m"&&o==7&&k.add(n[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h==1&&i==1&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},b_=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return a.length==4?[b,0,a[2],a[3]]:[b,0];case"s":return a.length==5?[b,1,1,a[3],a[4]]:a.length==3?[b,1,1]:[b,1]}},ca=a._equaliseTransform=function(b,c){c=r(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];var d=x(b.length,c.length),e=[],f=[],g=0,h,i,j,k;for(;g<d;g++){j=b[g]||b_(c[g]),k=c[g]||b_(j);if(j[0]!=k[0]||j[0].toLowerCase()=="r"&&(j[2]!=k[2]||j[3]!=k[3])||j[0].toLowerCase()=="s"&&(j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];for(h=0,i=x(j.length,k.length);h<i;h++)h in j&&(e[g][h]=j[h]),h in k&&(f[g][h]=k[h])}return{from:e,to:f}};a._getContainer=function(b,c,d,e){var f;f=e==null&&!a.is(b,"object")?h.doc.getElementById(b):b;if(f!=null){if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return{container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bK,a._engine={},a.path2curve=bR,a.matrix=function(a,b,c,d,e,f){return new cb(a,b,c,d,e,f)},function(b){function d(a){var b=w.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}function c(a){return a[0]*a[0]+a[1]*a[1]}b.add=function(a,b,c,d,e,f){var g=[[],[],[]],h=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,f],[0,0,1]],j,k,l,m;a&&a instanceof cb&&(i=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]);for(j=0;j<3;j++)for(k=0;k<3;k++){m=0;for(l=0;l<3;l++)m+=h[j][l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],this.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new cb(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new cb(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){this.add(1,0,0,1,a,b)},b.scale=function(a,b,c,d){b==null&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+w.cos(b).toFixed(9),f=+w.sin(b).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[r.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return a.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},b.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];b.scalex=w.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=w.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1][1];g<0?(b.rotate=a.deg(w.acos(g)),f<0&&(b.rotate=360-b.rotate)):b.rotate=a.deg(w.asin(f)),b.isSimple=!+b.shear.toFixed(9)&&(b.scalex.toFixed(9)==b.scaley.toFixed(9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate;return b},b.toTransformString=function(a){var b=a||this[s]();if(b.isSimple){b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4);return(b.dx||b.dy?"t"+[b.dx,b.dy]:p)+(b.scalex!=1||b.scaley!=1?"s"+[b.scalex,b.scaley,0,0]:p)+(b.rotate?"r"+[b.rotate,0,0]:p)}return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(cb.prototype);var cc=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor=="Apple Computer, Inc."&&(cc&&cc[1]<4||navigator.platform.slice(0,2)=="iP")||navigator.vendor=="Google Inc."&&cc&&cc[1]<8?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:k.safari=be;var cd=function(){this.returnValue=!1},ce=function(){return this.originalEvent.preventDefault()},cf=function(){this.cancelBubble=!0},cg=function(){return this.originalEvent.stopPropagation()},ch=function(){if(h.doc.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,f=function(e){var f=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,j=e.clientX+i,k=e.clientY+f;if(o&&u[g](b))for(var l=0,m=e.targetTouches&&e.targetTouches.length;l<m;l++)if(e.targetTouches[l].target==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=ce,e.stopPropagation=cg;break}return c.call(d,e,j,k)};a.addEventListener(e,f,!1);return function(){a.removeEventListener(e,f,!1);return!0}};if(h.doc.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.win.event;var b=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventDefault=a.preventDefault||cd,a.stopPropagation=a.stopPropagation||cf;return c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return!0};return f}}(),ci=[],cj=function(a){var b=a.clientX,c=a.clientY,d=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f,g=ci.length;while(g--){f=ci[g];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX,c=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();var k=f.el.node,l,m=k.nextSibling,n=k.parentNode,p=k.style.display;h.win.opera&&n.removeChild(k),k.style.display="none",l=f.el.paper.getElementByPoint(b,c),k.style.display=p,h.win.opera&&(m?n.insertBefore(k,m):n.appendChild(k)),l&&eve("raphael.drag.over."+f.el.id,f.el,l),b+=e,c+=d,eve("raphael.drag.move."+f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},ck=function(b){a.unmousemove(cj).unmouseup(ck);var c=ci.length,d;while(c--)d=ci[c],d.el._drag={},eve("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,b);ci=[]},cl=a.el={};for(var cm=t.length;cm--;)(function(b){a[b]=cl[b]=function(c,d){a.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:ch(this.shape||this.node||h.doc,b,c,d||this)}));return this},a["un"+b]=cl["un"+b]=function(a){var c=this.events||[],d=c.length;while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind(),c.splice(d,1),!c.length&&delete this.events;return this}return this}})(t[cm]);cl.data=function(b,c){var d=bb[this.id]=bb[this.id]||{};if(arguments.length==1){if(a.is(b,"object")){for(var e in b)b[g](e)&&this.data(e,b[e]);return this}eve("raphael.data.get."+this.id,this,d[b],b);return d[b]}d[b]=c,eve("raphael.data.set."+this.id,this,c,b);return this},cl.removeData=function(a){a==null?bb[this.id]={}:bb[this.id]&&delete bb[this.id][a];return this},cl.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},cl.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var cn=[];cl.drag=function(b,c,d,e,f,g){function i(i){(i.originalEvent||i).preventDefault();var j=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j,this._drag.id=i.identifier,!ci.length&&a.mousemove(cj).mouseup(ck),ci.push({el:this,move_scope:e,start_scope:f,end_scope:g}),c&&eve.on("raphael.drag.start."+this.id,c),b&&eve.on("raphael.drag.move."+this.id,b),d&&eve.on("raphael.drag.end."+this.id,d),eve("raphael.drag.start."+this.id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},cn.push({el:this,start:i}),this.mousedown(i);return this},cl.onDragOver=function(a){a?eve.on("raphael.drag.over."+this.id,a):eve.unbind("raphael.drag.over."+this.id)},cl.undrag=function(){var b=cn.length;while(b--)cn[b].el==this&&(this.unmousedown(cn[b].start),cn.splice(b,1),eve.unbind("raphael.drag.*."+this.id));!cn.length&&a.unmousemove(cj).unmouseup(ck)},k.circle=function(b,c,d){var e=a._engine.circle(this,b||0,c||0,d||0);this.__set__&&this.__set__.push(e);return e},k.rect=function(b,c,d,e,f){var g=a._engine.rect(this,b||0,c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.ellipse=function(b,c,d,e){var f=a._engine.ellipse(this,b||0,c||0,d||0,e||0);this.__set__&&this.__set__.push(f);return f},k.path=function(b){b&&!a.is(b,D)&&!a.is(b[0],E)&&(b+=p);var c=a._engine.path(a.format[m](a,arguments),this);this.__set__&&this.__set__.push(c);return c},k.image=function(b,c,d,e,f){var g=a._engine.image(this,b||"about:blank",c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.text=function(b,c,d){var e=a._engine.text(this,b||0,c||0,r(d));this.__set__&&this.__set__.push(e);return e},k.set=function(b){!a.is(b,"array")&&(b=Array.prototype.splice.call(arguments,0,arguments.length));var c=new cG(b);this.__set__&&this.__set__.push(c);return c},k.setStart=function(a){this.__set__=a||this.set()},k.setFinish=function(a){var b=this.__set__;delete this.__set__;return b},k.setSize=function(b,c){return a._engine.setSize.call(this,b,c)},k.setViewBox=function(b,c,d,e,f){return a._engine.setViewBox.call(this,b,c,d,e,f)},k.top=k.bottom=null,k.raphael=a;var co=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(h.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=h.doc.elementFromPoint(a,b);if(h.win.opera&&e.tagName=="svg"){var f=co(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var i=d.getIntersectionList(g,null);i.length&&(e=i[i.length-1])}if(!e)return null;while(e.parentNode&&e!=d.parentNode&&!e.raphael)e=e.parentNode;e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null;return e},k.getById=function(a){var b=this.bottom;while(b){if(b.id==a)return b;b=b.next}return null},k.forEach=function(a,b){var c=this.bottom;while(c){if(a.call(b,c)===!1)return this;c=c.next}return this},k.getElementsByPoint=function(a,b){var c=this.set();this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)});return c},cl.isPointInside=function(b,c){var d=this.realPath=this.realPath||bi[this.type](this);return a.isPointInsidePath(d,b,c)},cl.getBBox=function(a){if(this.removed)return{};var b=this._;if(a){if(b.dirty||!b.bboxwt)this.realPath=bi[this.type](this),b.bboxwt=bI(this.realPath),b.bboxwt.toString=cq,b.dirty=0;return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath)b.bboxwt=0,this.realPath=bi[this.type](this);b.bbox=bI(bj(this.realPath,this.matrix)),b.bbox.toString=cq,b.dirty=b.dirtyT=0}return b.bbox},cl.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(a);return a},cl.glow=function(a){if(this.type=="text")return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||bi[this.type](this);f=this.matrix?bj(f,this.matrix):f;for(var g=1;g<c+1;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cr={},cs=function(b,c,d,e,f,g,h,i,j){return j==null?bB(b,c,d,e,f,g,h,i):a.findDotsAtSegment(b,c,d,e,f,g,h,i,bC(b,c,d,e,f,g,h,i,j))},ct=function(b,c){return function(d,e,f){d=bR(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M")g=+i[1],h=+i[2];else{j=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),k+=["C"+m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k,k=["M"+m.x,m.y+"C"+m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!b&&!c){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift()+i}l.end=k,m=b?n:c?l:a.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},cu=ct(1),cv=ct(),cw=ct(0,1);a.getTotalLength=cu,a.getPointAtLength=cv,a.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return cw(a,b).end;var d=cw(a,c,1);return b?cw(d,b).end:d},cl.getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return cu(this.attrs.path)}},cl.getPointAtLength=function(a){if(this.type=="path")return cv(this.attrs.path,a)},cl.getSubpath=function(b,c){if(this.type=="path")return a.getSubpath(this.attrs.path,b,c)};var cx=a.easing_formulas={linear:function(a){return a},"<":function(a){return A(a,1.7)},">":function(a){return A(a,.48)},"<>":function(a){var b=.48-a/1.04,c=w.sqrt(.1734+b*b),d=c-b,e=A(z(d),1/3)*(d<0?-1:1),f=-c-b,g=A(z(f),1/3)*(f<0?-1:1),h=e+g+.5;return(1-h)*3*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==!!a)return a;return A(2,-10*a)*w.sin((a-.075)*2*B/.3)+1},bounce:function(a){var b=7.5625,c=2.75,d;a<1/c?d=b*a*a:a<2/c?(a-=1.5/c,d=b*a*a+.75):a<2.5/c?(a-=2.25/c,d=b*a*a+.9375):(a-=2.625/c,d=b*a*a+.984375);return d}};cx.easeIn=cx["ease-in"]=cx["<"],cx.easeOut=cx["ease-out"]=cx[">"],cx.easeInOut=cx["ease-in-out"]=cx["<>"],cx["back-in"]=cx.backIn,cx["back-out"]=cx.backOut;var cy=[],cz=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},cA=function(){var b=+(new Date),c=0;for(;c<cy.length;c++){var d=cy[c];if(d.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,o={},p,r={},s;d.initstatus?(e=(d.initstatus*d.anim.top-d.prev)/(d.percent-d.prev)*f,d.status=d.initstatus,delete d.initstatus,d.stop&&cy.splice(c--,1)):d.status=(d.prev+(d.percent-d.prev)*(e/f))/d.anim.top;if(e<0)continue;if(e<f){var t=h(e/f);for(var u in i)if(i[g](u)){switch(U[u]){case C:p=+i[u]+t*f*j[u];break;case"colour":p="rgb("+[cB(O(i[u].r+t*f*j[u].r)),cB(O(i[u].g+t*f*j[u].g)),cB(O(i[u].b+t*f*j[u].b))].join(",")+")";break;case"path":p=[];for(var v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(var x=1,y=i[u][v].length;x<y;x++)p[v][x]=+i[u][v][x]+t*f*j[u][v][x];p[v]=p[v].join(q)}p=p.join(q);break;case"transform":if(j[u].real){p=[];for(v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(x=1,y=i[u][v].length;x<y;x++)p[v][x]=i[u][v][x]+t*f*j[u][v][x]}}else{var z=function(a){return+i[u][a]+t*f*j[u][a]};p=[["m",z(0),z(1),z(2),z(3),z(4),z(5)]]}break;case"csv":if(u=="clip-rect"){p=[],v=4;while(v--)p[v]=+i[u][v]+t*f*j[u][v]}break;default:var A=[][n](i[u]);p=[],v=m.paper.customAttributes[u].length;while(v--)p[v]=+A[v]+t*f*j[u][v]}o[u]=p}m.attr(o),function(a,b,c){setTimeout(function(){eve("raphael.anim.frame."+a,b,c)})}(m.id,m,d.anim)}else{(function(b,c,d){setTimeout(function(){eve("raphael.anim.frame."+c.id,c,d),eve("raphael.anim.finish."+c.id,c,d),a.is(b,"function")&&b.call(c)})})(d.callback,m,d.anim),m.attr(k),cy.splice(c--,1);if(d.repeat>1&&!d.next){for(s in k)k[g](s)&&(r[s]=d.totalOrigin[s]);d.el.attr(r),cE(d.anim,d.el,d.anim.percents[0],null,d.totalOrigin,d.repeat-1)}d.next&&!d.stop&&cE(d.anim,d.el,d.next,null,d.totalOrigin,d.repeat)}}a.svg&&m&&m.paper&&m.paper.safari(),cy.length&&cz(cA)},cB=function(a){return a>255?255:a<0?0:a};cl.animateWith=function(b,c,d,e,f,g){var h=this;if(h.removed){g&&g.call(h);return h}var i=d instanceof cD?d:a.animation(d,e,f,g),j,k;cE(i,h,i.percents[0],null,h.attr());for(var l=0,m=cy.length;l<m;l++)if(cy[l].anim==c&&cy[l].el==b){cy[m-1].start=cy[l].start;break}return h},cl.onAnimation=function(a){a?eve.on("raphael.anim.frame."+this.id,a):eve.unbind("raphael.anim.frame."+this.id);return this},cD.prototype.delay=function(a){var b=new cD(this.anim,this.ms);b.times=this.times,b.del=+a||0;return b},cD.prototype.repeat=function(a){var b=new cD(this.anim,this.ms);b.del=this.del,b.times=w.floor(x(a,0))||1;return b},a.animation=function(b,c,d,e){if(b instanceof cD)return b;if(a.is(d,"function")||!d)e=e||d||null,d=null;b=Object(b),c=+c||0;var f={},h,i;for(i in b)b[g](i)&&Q(i)!=i&&Q(i)+"%"!=i&&(h=!0,f[i]=b[i]);if(!h)return new cD(b,c);d&&(f.easing=d),e&&(f.callback=e);return new cD({100:f},c)},cl.animate=function(b,c,d,e){var f=this;if(f.removed){e&&e.call(f);return f}var g=b instanceof cD?b:a.animation(b,c,d,e);cE(g,f,g.percents[0],null,f.attr());return f},cl.setTime=function(a,b){a&&b!=null&&this.status(a,y(b,a.ms)/a.ms);return this},cl.status=function(a,b){var c=[],d=0,e,f;if(b!=null){cE(a,this,-1,y(b,1));return this}e=cy.length;for(;d<e;d++){f=cy[d];if(f.el.id==this.id&&(!a||f.anim==a)){if(a)return f.status;c.push({anim:f.anim,status:f.status})}}if(a)return 0;return c},cl.pause=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.pause."+this.id,this,cy[b].anim)!==!1&&(cy[b].paused=!0);return this},cl.resume=function(a){for(var b=0;b<cy.length;b++)if(cy[b].el.id==this.id&&(!a||cy[b].anim==a)){var c=cy[b];eve("raphael.anim.resume."+this.id,this,c.anim)!==!1&&(delete c.paused,this.status(c.anim,c.status))}return this},cl.stop=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.stop."+this.id,this,cy[b].anim)!==!1&&cy.splice(b--,1);return this},eve.on("raphael.remove",cF),eve.on("raphael.clear",cF),cl.toString=function(){return"Raphaël’s object"};var cG=function(a){this.items=[],this.length=0,this.type="set";if(a)for(var b=0,c=a.length;b<c;b++)a[b]&&(a[b].constructor==cl.constructor||a[b].constructor==cG)&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},cH=cG.prototype;cH.push=function(){var a,b;for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a&&(a.constructor==cl.constructor||a.constructor==cG)&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},cH.pop=function(){this.length&&delete this[this.length--];return this.items.pop()},cH.forEach=function(a,b){for(var c=0,d=this.items.length;c<d;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var cI in cl)cl[g](cI)&&(cH[cI]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][m](c,b)})}}(cI));cH.attr=function(b,c){if(b&&a.is(b,E)&&a.is(b[0],"object"))for(var d=0,e=b.length;d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items.length;f<g;f++)this.items[f].attr(b,c);return this},cH.clear=function(){while(this.length)this.pop()},cH.splice=function(a,b,c){a=a<0?x(this.length+a,0):a,b=x(0,y(this.length-a,b));var d=[],e=[],f=[],g;for(g=2;g<arguments.length;g++)f.push(arguments[g]);for(g=0;g<b;g++)e.push(this[a+g]);for(;g<this.length-a;g++)d.push(this[a+g]);var h=f.length;for(g=0;g<h+d.length;g++)this.items[a+g]=this[a+g]=g<h?f[g]:d[g-h];g=this.items.length=this.length-=b-h;while(this[g])delete this[g++];return new cG(e)},cH.exclude=function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]==a){this.splice(b,1);return!0}},cH.animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items.length,g=f,h,i=this,j;if(!f)return this;e&&(j=function(){!--f&&e.call(i)}),d=a.is(d,D)?d:j;var k=a.animation(b,c,d,j);h=this.items[--g].animate(k);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,k,k);return this},cH.insertAfter=function(a){var b=this.items.length;while(b--)this.items[b].insertAfter(a);return this},cH.getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}a=y[m](0,a),b=y[m](0,b),c=x[m](0,c),d=x[m](0,d);return{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},cH.clone=function(a){a=new cG;for(var b=0,c=this.items.length;b<c;b++)a.push(this.items[b].clone());return a},cH.toString=function(){return"Raphaël‘s set"},a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[g](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=R(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[g](e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"};if(f.k)for(var h in f.k)f[g](h)&&(b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=function(b,c,d,e){e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400;if(!!a.fonts){var f=a.fonts[b];if(!f){var h=new RegExp("(^|\\s)"+b.replace(/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[g](i)&&h.test(i)){f=a.fonts[i];break}}var j;if(f)for(var k=0,l=f.length;k<l;k++){j=f[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j}},k.print=function(b,d,e,f,g,h,i){h=h||"middle",i=x(y(i||0,1),-1);var j=r(e)[s](p),k=0,l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox[s](c),q=+o[0],t=o[3]-o[1],u=0,v=+o[1]+(h=="baseline"?t+ +f.face.descent:t/2);for(var w=0,z=j.length;w<z;w++){if(j[w]=="\n")k=0,B=0,l=0,u+=t;else{var A=l&&f.glyphs[j[w-1]]||{},B=f.glyphs[j[w]];k+=l?(A.w||f.w)+(A.k&&A.k[j[w]]||0)+f.w*i:0,l=1}B&&B.d&&(m+=a.transformPath(B.d,["t",k*n,u*n,"s",n,n,q,v,"t",(b-q)/n,(d-v)/n]))}}return this.path(m).attr({fill:"#000",stroke:"none"})},k.add=function(b){if(a.is(b,"array")){var c=this.set(),e=0,f=b.length,h;for(;e<f;e++)h=b[e]||{},d[g](h.type)&&c.push(this[h.type]().attr(h))}return c},a.format=function(b,c){var d=a.is(c,E)?[0][n](c):arguments;b&&a.is(b,D)&&d.length-1&&(b=b.replace(e,function(a,b){return d[++b]==null?p:d[b]}));return b||p},a.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),typeof e=="function"&&f&&(e=e()))}),e=(e==null||e==d?a:e)+"";return e};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),a.ninja=function(){i.was?h.win.Raphael=i.is:delete Raphael;return a},a.st=cH,function(b,c,d){function e(){/in/.test(b.readyState)?setTimeout(e,9):a.eve("raphael.DOMload")}b.readyState==null&&b.addEventListener&&(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e()}(document,"DOMContentLoaded"),i.was?h.win.Raphael=a:Raphael=a,eve.on("raphael.DOMload",function(){b=!0})}(),window.Raphael.svg&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){typeof d=="string"&&(d=q(d));for(var f in e)e[b](f)&&(f.substring(0,6)=="xlink:"?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){e=c(e).replace(a._radial_gradient,function(a,b,c){j="radial";if(b&&c){m=d(b),n=d(c);var e=(n>.5)*2-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&n!=.5&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/);if(j=="linear"){var t=e.shift();t=-d(t);if(isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient);if(!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,j=="radial"?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;x<y;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return 1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if(d.type=="path"){var g=c(e).toLowerCase().split("-"),h=d.paper,i=f?"end":"start",j=d.node,k=d.attrs,m=k["stroke-width"],n=g.length,r="classic",s,t,u,v,w,x=3,y=3,z=5;while(n--)switch(g[n]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":r=g[n];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}r=="open"?(x+=2,y+=2,z+=2,u=1,v=f?4:1,w={fill:"none",stroke:k.stroke}):(v=u=x/2,w={fill:k.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={};if(r!="none"){var A="raphael-marker-"+r,B="raphael-marker-"+i+r+x+y;a._g.doc.getElementById(A)?p[A]++:(h.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById(B),D;C?(p[B]++,D=C.getElementsByTagName("use")[0]):(C=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:v,refY:y/2}),D=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),C.appendChild(D),h.defs.appendChild(C),p[B]=1),q(D,w);var F=u*(r!="diamond"&&r!="oval");f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-F*m):(s=F*m,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),w={},w["marker-"+i]="url(#"+B+")";if(t||s)w.d=Raphael.getSubpath(k.path,s,t);q(j,w),d._.arrows[i+"Path"]=A,d._.arrows[i+"Marker"]=B,d._.arrows[i+"dx"]=F,d._.arrows[i+"Type"]=r,d._.arrows[i+"String"]=e}else f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-s):(s=0,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),d._.arrows[i+"Path"]&&q(j,{d:Raphael.getSubpath(k.path,s,t)}),delete d._.arrows[i+"Path"],delete d._.arrows[i+"Marker"],delete d._.arrows[i+"dx"],delete d._.arrows[i+"Type"],delete d._.arrows[i+"String"];for(w in p)if(p[b](w)&&!p[w]){var G=a._g.doc.getElementById(w);G&&G.parentNode.removeChild(G)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){b=u[c(b).toLowerCase()];if(b){var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;while(h--)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];k[o]=p;switch(o){case"blur":d.blur(p);break;case"href":case"title":case"target":var u=i.parentNode;if(u.tagName.toLowerCase()!="a"){var w=q("a");u.insertBefore(w,i),w.appendChild(i),u=w}o=="target"?u.setAttributeNS(n,"show",p=="blank"?"new":p):u.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var x=c(p).split(j);if(x.length==4){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var z=q("clipPath"),A=q("rect");z.id=a.createUUID(),q(A,{x:x[0],y:x[1],width:x[2],height:x[3]}),z.appendChild(A),d.paper.defs.appendChild(z),q(i,{"clip-path":"url(#"+z.id+")"}),d.clip=A}if(!p){var B=i.getAttribute("clip-path");if(B){var C=a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g,l));C&&C.parentNode.removeChild(C),q(i,{"clip-path":l}),delete d.clip}}break;case"path":d.type=="path"&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":i.setAttribute(o,p),d._.dirty=1;if(k.fx)o="x",p=k.x;else break;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if(o=="rx"&&d.type=="rect")break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":i.setAttribute(o,p),d._.dirty=1;if(k.fy)o="y",p=k.y;else break;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if(o=="ry"&&d.type=="rect")break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":d.type=="rect"?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":d.type=="image"&&i.setAttributeNS(n,"href",p);break;case"stroke-width":if(d._.sx!=1||d._.sy!=1)p/=g(h(d._.sx),h(d._.sy))||1;d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var D=c(p).match(a._ISURL);if(D){z=q("pattern");var F=q("image");z.id=a.createUUID(),q(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":D[1]}),z.appendChild(F),function(b){a._preload(D[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(F,{width:a,height:c}),d.paper.safari()})}(z),d.paper.defs.appendChild(z),q(i,{fill:"url(#"+z.id+")"}),d.pattern=z,d.pattern&&s(d);break}var G=a.getRGB(p);if(!G.error)delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});else if((d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}G[b]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(p),i.setAttribute(o,G.hex),o=="stroke"&&G[b]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),o=="stroke"&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":(d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p);break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break};default:o=="font-size"&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(d.type=="text"&&!!(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){g.text=f.text;while(h.firstChild)h.removeChild(h.firstChild);var j=c(f.text).split("\n"),k=[],m;for(var n=0,o=j.length;n<o;n++)m=q("tspan"),n&&q(m,{dy:i*x,x:g.x}),m.appendChild(a._g.doc.createTextNode(j[n])),h.appendChild(m),k[n]=m}else{k=h.getElementsByTagName("tspan");for(n=0,o=k.length;n<o;n++)n?q(k[n],{dy:i*x,x:g.x}):q(k[0],{dy:0})}q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(k[0],{dy:r})}},z=function(b,c){var d=0,e=0;this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);d.type="path",w(d,{fill:"none",stroke:"#000",path:a});return d},A.rotate=function(a,b,e){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this.transform(this._.transform.concat([["r",a,b,e]]));return this},A.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]]));return this},A.translate=function(a,b){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]]));return this},A.transform=function(c){var d=this._;if(c==null)return d.transform;a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix});if(d.sx!=1||d.sy!=1){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this},A.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this},A.remove=function(){if(!this.removed&&!!this.node.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),a._tear(this,b),this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var c in this)this[c]=typeof this[c]=="function"?a._removedFactory(c):null;this.removed=!0}},A._getBBox=function(){if(this.node.style.display=="none"){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}a&&this.hide();return b},A.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;if(c=="transform")return this._.transform;var g=c.split(j),h={};for(var i=0,l=g.length;i<l;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(d==null&&a.is(c,"array")){h={};for(i=0,l=c.length;i<l;i++)h[c[i]]=this.attr(c[i]);return h}if(d!=null){var m={};m[c]=d}else c!=null&&a.is(c,"object")&&(m=c);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}w(this,m);return this},A.toFront=function(){if(this.removed)return this;this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var b=this.paper;b.top!=this&&a._tofront(this,b);return this},A.toBack=function(){if(this.removed)return this;var b=this.node.parentNode;b.tagName.toLowerCase()=="a"?b.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChild!=this.node&&b.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper);var c=this.paper;return this},A.insertAfter=function(b){if(this.removed)return this;var c=b.node||b[b.length-1].node;c.nextSibling?c.parentNode.insertBefore(this.node,c.nextSibling):c.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},A.insertBefore=function(b){if(this.removed)return this;var c=b.node||b[0].node;c.parentNode.insertBefore(this.node,c),a._insertbefore(this,b,this.paper);return this},A.blur=function(b){var c=this;if(+b!==0){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter")},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs);return f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs);return h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs);return g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image";return h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new z(f,b);g.attrs={x:c,y:d,"text-anchor":"middle",text:e,font:a._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs);return g},a._engine.setSize=function(a,b){this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox);return this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h=q("svg"),i="overflow:hidden;",j;d=d||0,e=e||0,f=f||512,g=g||342,q(h,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),c==1?(h.style.cssText=i+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(h),j=1):(h.style.cssText=i+"position:relative",c.firstChild?c.insertBefore(h,c.firstChild):c.appendChild(h)),c=new a._Paper,c.width=f,c.height=g,c.canvas=h,c.clear(),c._left=c._top=0,j&&(c.renderfix=function(){}),c.renderfix();return c},a._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f=g(c/this.width,d/this.height),h=this.top,i=e?"meet":"xMinYMin",j,l;a==null?(this._vbSize&&(f=1),delete this._vbSize,j="0 0 "+this.width+m+this.height):(this._vbSize=f,j=a+m+b+m+c+m+d),q(this.canvas,{viewBox:j,preserveAspectRatio:i});while(f&&h)l="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[a,b,c,d,!!e];return this},a.prototype.renderfix=function(){var a=this.canvas,b=a.style,c;try{c=a.getScreenCTM()||a.createSVGMatrix()}catch(d){c=a.createSVGMatrix()}var e=-c.e%1,f=-c.f%1;if(e||f)e&&(this._left=(this._left+e)%1,b.left=this._left+"px"),f&&(this._top=(this._top+f)%1,b.top=this._top+"px")},a.prototype.clear=function(){a.eve("raphael.clear",this);var b=this.canvas;while(b.firstChild)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null};var B=a.st;for(var C in A)A[b](C)&&!B[b](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}(window.Raphael),window.Raphael.vml&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/ig,e=a._pathToAbsolute;c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g;if(e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=b.toLowerCase()=="m",g=p[b];c.replace(s,function(a){e&&d.length==2&&(g+=d+p[b=="m"?"l":"L"],d=[]),d.push(f(a*u))});return g+d});return g}var h=e(b),i,j;g=[];for(var k=0,l=h.length;k<l;k++){i=h[k],j=h[k][0].toLowerCase(),j=="z"&&(j="x");for(var m=1,r=i.length;m<r;m++)j+=f(i[m]*u)+(m!=r-1?",":o);g.push(j)}return g.join(n)},y=function(b,c,d){var e=a.matrix();e.rotate(-b,.5,.5);return{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q,r=u/b,s=u/c;m.visibility="hidden";if(!!b&&!!c){l.coordsize=i(r)+n+i(s),m.rotation=f*(b*c<0?-1:1);if(f){var t=y(f,d,e);d=t.dx,e=t.dy}b<0&&(p+="x"),c<0&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;if(k||g.fillsize){var v=l.getElementsByTagName(j);v=v&&v[0],l.removeChild(v),k&&(t=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&&(v.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(v)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,b,d){var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";while(g--)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;for(var y in i)i[b](y)&&(m[y]=i[y]);r&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur);if(i.path&&e.type=="path"||r)l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e.type=="image"&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0));"transform"in i&&e.transform(i.transform);if(s){var B=+m.cx,D=+m.cy,E=+m.rx||+m.r||0,G=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((B-E)*u),f((D-G)*u),f((B+E)*u),f((D+G)*u),f(B*u))}if("clip-rect"in i){var H=c(i["clip-rect"]).split(k);if(H.length==4){H[2]=+H[2]+ +H[0],H[3]=+H[3]+ +H[1];var I=l.clipRect||a._g.doc.createElement("div"),J=I.style;J.clip=a.format("rect({1}px {2}px {3}px {0}px)",H),l.clipRect||(J.position="absolute",J.top=0,J.left=0,J.width=e.paper.width+"px",J.height=e.paper.height+"px",l.parentNode.insertBefore(I,l),I.appendChild(l),l.clipRect=I)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var K=e.textpath.style;i.font&&(K.font=i.font),i["font-family"]&&(K.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(K.fontSize=i["font-size"]),i["font-weight"]&&(K.fontWeight=i["font-weight"]),i["font-style"]&&(K.fontStyle=i["font-style"])}"arrow-start"in i&&A(t,i["arrow-start"]),"arrow-end"in i&&A(t,i["arrow-end"],1);if(i.opacity!=null||i["stroke-width"]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i["stroke-width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-linejoin"]!=null||i["stroke-linecap"]!=null){var L=l.getElementsByTagName(j),M=!1;L=L&&L[0],!L&&(M=L=F(j)),e.type=="image"&&i.src&&(L.src=i.src),i.fill&&(L.on=!0);if(L.on==null||i.fill=="none"||i.fill===null)L.on=!1;if(L.on&&i.fill){var N=c(i.fill).match(a._ISURL);if(N){L.parentNode==l&&l.removeChild(L),L.rotate=!0,L.src=N[1],L.type="tile";var O=e.getBBox(1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preload(N[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a.getRGB(i.fill).hex,L.src=o,L.type="solid",a.getRGB(i.fill).error&&(t.type in{circle:1,ellipse:1}||c(i.fill).charAt()!="r")&&C(t,i.fill,L)&&(m.fill="none",m.gradient=i.fill,L.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var P=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);P=h(g(P,0),1),L.opacity=P,L.src&&(L.color="none")}l.appendChild(L);var Q=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],T=!1;!Q&&(T=Q=F("stroke"));if(i.stroke&&i.stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])Q.on=!0;(i.stroke=="none"||i.stroke===null||Q.on==null||i.stroke==0||i["stroke-width"]==0)&&(Q.on=!1);var U=a.getRGB(i.stroke);Q.on&&i.stroke&&(Q.color=U.hex),P=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+U.o+1||2)-1);var V=(d(i["stroke-width"])||1)*.75;P=h(g(P,0),1),i["stroke-width"]==null&&(V=m["stroke-width"]),i["stroke-width"]&&(Q.weight=V),V&&V<1&&(P*=V)&&(Q.weight=1),Q.opacity=P,i["stroke-linejoin"]&&(Q.joinstyle=i["stroke-linejoin"]||"miter"),Q.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(Q.endcap=i["stroke-linecap"]=="butt"?"flat":i["stroke-linecap"]=="square"?"square":"round");if(i["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};Q.dashstyle=W[b](i["stroke-dasharray"])?W[i["stroke-dasharray"]]:o}T&&l.appendChild(Q)}if(t.type=="text"){t.paper.canvas.style.display=o;var X=t.paper.span,Y=100,Z=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=X.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),Z=d(m["font-size"]||Z&&Z[0])||10,p.fontSize=Z*Y+"px",t.textpath.string&&(X.innerHTML=c(t.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();t.W=m.w=($.right-$.left)/Y,t.H=m.h=($.bottom-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,("x"in i||"y"in i)&&(t.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));var _=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var ba=0,bb=_.length;ba<bb;ba++)if(_[ba]in i){t._.dirty=1;break}switch(m["text-anchor"]){case"start":t.textpath.style["v-text-align"]="left",t.bbx=t.W/2;break;case"end":t.textpath.style["v-text-align"]="right",t.bbx=-t.W/2;break;default:t.textpath.style["v-text-align"]="center",t.bbx=0}t.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=b.attrs,i=Math.pow,j,k,l="linear",m=".5 .5";b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){l="radial",b&&c&&(b=d(b),c=d(c),i(b-.5,2)+i(c-.5,2)>.25&&(c=e.sqrt(.25-i(b-.5,2))*((c>.5)*2-1)+.5),m=b+n+c);return o}),f=f.split(/\s*\-\s*/);if(l=="linear"){var p=f.shift();p=-d(p);if(isNaN(p))return null}var q=a._parseDots(f);if(!q)return null;b=b.shape||b.node;if(q.length){b.removeChild(g),g.on=!0,g.method="none",g.color=q[0].color,g.color2=q[q.length-1].color;var r=[];for(var s=0,t=q.length;s<t;s++)q[s].offset&&r.push(q[s].offset+n+q[s].color);g.colors=r.length?r.join():"0% "+g.color,l=="radial"?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=m,g.angle=0):(g.type="gradient",g.angle=(270-p)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(b==null)return this._.transform;var d=this.paper._viewBoxShift,e=d?"s"+[d.scale,d.scale]+"-1-1t"+[d.dx,d.dy]:o,f;d&&(f=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,e+b);var g=this.matrix.clone(),h=this.skew,i=this.node,j,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");g.translate(-0.5,-0.5);if(l||k||this.type=="image"){h.matrix="1 0 0 1",h.offset="0 0",j=g.split();if(k&&j.noRotation||!j.isSimple){i.style.filter=g.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else i.style.filter=o,z(this,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.style.filter=o,h.matrix=c(g),h.offset=g.offset();f&&(this._.transform=f);return this},E.rotate=function(a,b,e){if(this.removed)return this;if(a!=null){a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]]));return this}},E.translate=function(a,b){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]]));return this},E.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1;return this},E.hide=function(){!this.removed&&(this.node.style.display="none");return this},E.show=function(){!this.removed&&(this.node.style.display=o);return this},E._getBBox=function(){if(this.removed)return{};return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&!!this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("raphael.*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c==j&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;var g=c.split(k),h={};for(var i=0,m=g.length;i<m;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&d==null&&a.is(c,"array")){h={};for(i=0,m=c.length;i<m;i++)h[c[i]]=this.attr(c[i]);return h}var n;d!=null&&(n={},n[c]=d),d==null&&a.is(c,"object")&&(n=c);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&this.type=="text"&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper);return this},E.toBack=function(){if(this.removed)return this;this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper));return this},E.insertAfter=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},E.insertBefore=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper);return this},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(r,o),+b!==0?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur)},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");f.on=!0,c.appendChild(f),d.skew=f,d.transform(o);return d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect";return i},a._engine.ellipse=function(a,b,c,d,e){var f=a.path(),g=f.attrs;f.X=b-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e});return f},a._engine.circle=function(a,b,c,d){var e=a.path(),f=e.attrs;e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type="circle",B(e,{cx:b,cy:c,r:d});return e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0);return i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");m.on=!0,h.appendChild(m),k.skew=m,k.transform(o);return k},a._engine.setSize=function(b,c){var d=this.canvas.style;this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox);return this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("raphael.setViewBox",this,this._viewBox,[b,c,d,e,f]);var h=this.width,i=this.height,j=1/g(d/h,e/i),k,l;f&&(k=i/e,l=h/d,d*k<h&&(b-=(h-d*k)/2/k),e*l<i&&(c-=(i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:j},this.forEach(function(a){a.transform("...")});return this};var F;a._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if(!c)throw new Error("VML container not found.");var i=new a._Paper,j=i.canvas=a._g.doc.createElement("div"),k=j.style;g=g||0,h=h||0,f=f||512,d=d||342,i.width=f,i.height=d,f==+f&&(f+="px"),d==+d&&(d+="px"),i.coordsize=u*1e3+n+u*1e3,i.coordorigin="0 0",i.span=a._g.doc.createElement("span"),i.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",j.appendChild(i.span),k.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d),c==1?(a._g.doc.body.appendChild(j),k.left=g+"px",k.top=h+"px",k.position="absolute"):c.firstChild?c.insertBefore(j,c.firstChild):c.appendChild(j),i.renderfix=function(){};return i},a.prototype.clear=function(){a.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}(window.Raphael)
;
window.polyjs=function(P){if(!P){var d={};(function(){var f=[].indexOf||function(d){for(var l=0,c=this.length;l<c;l++)if(l in this&&this[l]===d)return l;return-1};d.groupBy=function(f,l){return _.groupBy(f,d.stringify(l))};d.stringify=function(d){return function(l){return _.reduce(d,function(c,b){return""+c+b+":"+l[b]+";"},"")}};d.cross=function(f,l){var c,b,a,e,g,h,m,q,p,n;null==l&&(l=[]);a=_.difference(_.keys(f),l);if(0===a.length)return[{}];c=[];e=a[0];a=d.cross(f,l.concat(e));n=f[e];h=0;for(q=
n.length;h<q;h++)for(g=n[h],m=0,p=a.length;m<p;m++)b=a[m],b=_.clone(b),b[e]=g,c.push(b);return c};d.filter=function(d,l,c){var b,a,e,g;a=[];e=0;for(g=d.length;e<g;e++)b=d[e],b[l]===c&&a.push(b);return a};d.intersect=function(d,l){var c,b,a,e,g;b=function(a){var b,e,c,n,u;e=[];u=d[a]["in"];c=0;for(n=u.length;c<n;c++)b=u[c],0<=f.call(l[a]["in"],b)&&e.push(b);return{"in":e}};c=function(a){var b,e,c,n,u;e=function(b){return b[a].lt?{type:"lt",val:b[a].lt}:b[a].le?{type:"le",val:b[a].le}:{type:null,val:null}};
b=function(b){return b[a].gt?{type:"gt",val:b[a].gt}:b[a].ge?{type:"ge",val:b[a].ge}:{type:null,val:null}};b=[b(d),b(l)];n=[e(d),e(l)];b.sort(function(a,b){return b.val-a.val});n.sort(function(a,b){return a.val-b.val});e={};b[0].type&&b[0].val&&(u=b[0],c=u.type,u=u.val,b[0].val===b[1].val&&b[0].type!==b[1].type&&(c="lt"),e[c]=u);n[0].type&&n[0].val&&(u=n[0],c=u.type,u=u.val,n[0].val===n[1].val&&n[0].type!==n[1].type&&(c="lt"),e[c]=u);if(b[0].type&&n[0].type&&(b[0].val>n[0].val||b[0].val===n[0].val&&
("lt"===b[0].key||"gt"===n[0].key)))throw"No intersection found!";return e};e={};for(a in d)g=d[a],e[a]=a in l?"in"in d[a]?b(a):c(a):g;for(a in l)g=l[a],a in e||(e[a]=g);return e};d.linear=function(f,l,c,b){if(_.isFinite(f)&&_.isFinite(l)&&_.isFinite(c)&&_.isFinite(b))return function(a){return(b-l)/(c-f)*(a-f)+l};throw d.error.input("Attempting to create linear function from infinity");};d.median=function(d,l){var c;null==l&&(l=!1);l||(d=_.sortBy(d,function(b){return b}));c=d.length/2;return 0!==
c%1?d[Math.floor(c)]:(d[c-1]+d[c])/2};d.counter=function(){var d;d=0;return function(){return d++}};d.sample=function(d,l){return _.pick(d,_.shuffle(_.keys(d)).splice(0,l))};d.compare=function(d,l){var c,b,a,e,g,h,m,q,p;p=_.sortBy(d,function(a){return a});q=_.sortBy(l,function(a){return a});b=[];a=[];c=[];for(m=g=0;m<p.length||g<q.length;)if(h=p[m],e=q[g],m>=p.length)c.push(e),g+=1;else if(g>=q.length)b.push(h),m+=1;else if(h<e)b.push(h),m+=1;else if(h>e)c.push(e),g+=1;else if(h===e)a.push(h),m+=
1,g+=1;else throw DataError("Unknown data encounted");return{deleted:b,kept:a,added:c}};d.flatten=function(f){var l,c,b,a;l=[];if(null!=f)if(_.isObject(f))if("scalefn"===f.t)"novalue"!==f.f&&l.push(f.v);else for(c in f)b=f[c],l=l.concat(d.flatten(b));else if(_.isArray(f))for(c=0,a=f.length;c<a;c++)b=f[c],l=l.concat(d.flatten(b));else l.push(f);return l};d.getLabel=function(d,l){return _.chain(d).map(function(c){return c.mapping[l]}).without(null,void 0).uniq().value().join(" | ")};d.strSize=function(d){d=
(d+"").length;return 10>d?6*d:5*(d-10)+60};d.sortArrays=function(d,l){var c;c=_.zip.apply(_,l);c.sort(function(b,a){return d(b[0],a[0])});return _.zip.apply(_,c)};d.isDefined=function(f){return _.isObject(f)?"scalefn"===f.t&&"novalue"!==f.f?d.isDefined(f.v):!0:void 0!==f&&null!==f&&!(_.isNumber(f)&&_.isNaN(f))};d.isURI=function(d){var l;return _.isString(d)?(l=RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
"i"),l.test(d)):!1}}).call(this);(function(){d["const"]={aes:"x y color size opacity shape id text".split(" "),pivot_aes:["row","column","value"],noDomain:["id","text","tooltip"],noLegend:["x","y","id","text","tooltip"],trans:{bin:["key","binwidth"],lag:["key","lag"]},stat:{count:["key"],unique:["key"],sum:["key"],mean:["key"],box:["key"],median:["key"]},timerange:"second minute hour day week month twomonth quarter sixmonth year twoyear fiveyear decade".split(" "),approxTimeInSeconds:{second:1,minute:60,
hour:3600,day:86400,week:604800,month:2592E3,twomonth:5184E3,quarter:10368E3,sixmonth:15552E3,year:31536E3,twoyear:63072E3,fiveyear:157766400},metas:{sort:null,stat:null,limit:null,asc:!1},scaleFns:{novalue:function(){return{v:null,f:"novalue",t:"scalefn"}},max:function(d){return{v:d,f:"max",t:"scalefn"}},min:function(d){return{v:d,f:"min",t:"scalefn"}},upper:function(d,r,l){return{v:d,n:r,m:l,f:"upper",t:"scalefn"}},lower:function(d,r,l){return{v:d,n:r,m:l,f:"lower",t:"scalefn"}},middle:function(d){return{v:d,
f:"middle",t:"scalefn"}},jitter:function(d){return{v:d,f:"jitter",t:"scalefn"}},identity:function(d){return{v:d,f:"identity",t:"scalefn"}}},epsilon:Math.pow(10,-7),defaults:{x:{v:null,f:"novalue",t:"scalefn"},y:{v:null,f:"novalue",t:"scalefn"},color:"steelblue",size:2,opacity:0.7}}}).call(this);(function(){var f,r,l,c,b,a,e,g,h,m={}.hasOwnProperty,q=function(a,b){function u(){this.constructor=a}for(var k in b)m.call(b,k)&&(a[k]=b[k]);u.prototype=b.prototype;a.prototype=new u;a.__super__=b.prototype;
return a};r=function(a){function b(a){this.message=a;this.name="DefinitionError"}q(b,a);return b}(Error);l=function(a){function b(a){this.message=a;this.name="DependencyError"}q(b,a);return b}(Error);b=function(a){function b(a){this.message=a;this.name="ModeError"}q(b,a);return b}(Error);f=function(a){function b(a){this.message=a;this.name="DataError"}q(b,a);return b}(Error);h=function(a){function b(a){this.message=a;this.name="UnknownInput"}q(b,a);return b}(Error);a=function(a){function b(a){this.message=
a;this.name="ModeError"}q(b,a);return b}(Error);e=function(a){function b(a){this.message=a;this.name="ScaleError"}q(b,a);return b}(Error);c=function(a){function b(a){this.message=a;this.name="MissingData"}q(b,a);return b}(Error);g=function(a){function b(a){this.message=a;this.name="Type"}q(b,a);return b}(Error);d.error=function(a){return Error(a)};d.error.data=function(a){return new f(a)};d.error.depn=function(a){return new l(a)};d.error.defn=function(a){return new r(a)};d.error.mode=function(a){return new b(a)};
d.error.impl=function(b){return new a(b)};d.error.input=function(a){return new h(a)};d.error.scale=function(a){return new e(a)};d.error.missing=function(a){return new c(a)};d.error.type=function(a){return new g(a)}}).call(this);(function(){var f,r,l,c,b,a,e={}.hasOwnProperty,g=function(a,b){function c(){this.constructor=a}for(var d in b)e.call(b,d)&&(a[d]=b[d]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a},h=function(a,b){return function(){return a.apply(b,arguments)}};
c=function(){function a(){}a.prototype.render=function(){return d.error.impl()};a.prototype.dispose=function(){return d.error.impl()};return a}();r=function(a){function e(){return b=e.__super__.constructor.apply(this,arguments)}g(e,a);e.prototype.getDimension=function(){throw d.error.impl();};return e}(c);l=function(b){function e(){return a=e.__super__.constructor.apply(this,arguments)}g(e,b);e.prototype.getDimension=function(){throw d.error.impl();};e.prototype.make=function(){throw d.error.impl();
};return e}(c);f=function(a){function b(a){this.type=null!=a?a:null;this.dispose=h(this.dispose,this);this.geoms={};this.pts={}}g(b,a);b.prototype.set=function(a){return this.geoms=a};b.prototype.render=function(a){var b,e,k,c,s,v,q;s={};k=d.compare(_.keys(this.pts),_.keys(this.geoms));e=k.deleted;c=k.kept;b=k.added;v=0;for(q=e.length;v<q;v++)k=e[v],this._delete(a,this.pts[k]);e=0;for(v=b.length;e<v;e++)k=b[e],s[k]=this._add(a,this.geoms[k]);b=0;for(e=c.length;b<e;b++)k=c[b],s[k]=this._modify(a,this.pts[k],
this.geoms[k]);return this.pts=s};b.prototype._delete=function(a,b){var e,k,c;c=[];for(e in b)k=b[e],c.push(a.remove(k));return c};b.prototype._modify=function(a,b,e){var k,c,s,d;s={};d=e.marks;for(c in d){k=d[c];try{s[c]=b[c]?b[c].data("m").type===k.type?a.animate(b[c],k,e.evtData,e.tooltip):(a.remove(b[c]),a.add(k,e.evtData,e.tooltip,this.type)):a.add(k,e.evtData,e.tooltip,this.type)}catch(q){if(k=q,"MissingData"===k.name)console.log(k.message);else throw k;}}return s};b.prototype._add=function(a,
b){var e,k,c,d;c={};d=b.marks;for(k in d){e=d[k];try{c[k]=a.add(e,b.evtData,b.tooltip,this.type)}catch(v){if(e=v,"MissingData"===e.name)console.log(e.message);else throw e;}}return c};b.prototype.dispose=function(a){var b,e,k;k=this.pts;for(b in k)e=k[b],this._delete(a,e);return this.pts={}};return b}(c);d.Renderable=c;d.Guide=r;d.GuideSet=l;d.Geometry=f}).call(this);(function(){var f,r,l=[].slice,c=[].indexOf||function(b){for(var a=0,e=this.length;a<e;a++)if(a in this&&this[a]===b)return a;return-1};
f=function(){function b(a,b,c){a.getContext?this.context=a.getContext("2d"):a.polyGeom=this;a.width=b;a.height=c;this.items=[];this._counter=0}b.prototype._makeItem=function(a,b){var c;c=new r(a,this._newId(),this,b);this.items.unshift(c);return c};b.prototype._newId=function(){return this._counter+=1};b.prototype.rect=function(){var a;a=1<=arguments.length?l.call(arguments,0):[];return this._makeItem("rect",a)};b.prototype.circle=function(){var a;a=1<=arguments.length?l.call(arguments,0):[];return this._makeItem("circle",
a)};b.prototype.path=function(){var a;a=1<=arguments.length?l.call(arguments,0):[];return this._makeItem("path",a)};b.prototype.text=function(){var a;a=1<=arguments.length?l.call(arguments,0):[];return this._makeItem("text",a)};b.prototype.remove=function(a){var b,c,d,m,q;q=this.items;b=d=0;for(m=q.length;d<m;b=++d)if(c=q[b],c.id===a)return this.items.splice(b,1)};b.prototype.toBack=function(a){var b;b=this.remove(a)[0];a=this.items.pop();this.items.push(b);return this.items.push(a)};b.prototype.toFront=
function(a){a=this.remove(a)[0];return this.items.unshift(a)};b.prototype._resetContext=function(){this.context.fillStyle="#000000";this.context.strokeStyle="#000000";this.context.globalAlpha=1;return this.context.lineWidth=0.5};b.prototype._stringToHex=function(a){switch(a){case "black":return"#000000";case "white":return"#ffffff";case "steelblue":return"#4692B4";default:return a}};return b}();r=function(){function b(a,b,c,d){this.type=a;this.id=b;this.canvas=c;this._attr={};this._interact={};this.attr(d)}
b.prototype.attr=function(){var a,b,c;a=1<=arguments.length?l.call(arguments,0):[];if(0<a.length&&_.isArray(a[0]))switch(b=a[0],this.type){case "rect":this._attr=_.extend(this._attr,{x:b[0],y:b[1],width:b[2],height:b[3]});break;case "circle":this._attr=_.extend(this._attr,{x:b[0],y:b[1],r:b[2]});break;case "path":this._attr=_.extend(this._attr,{path:b[0]});break;case "text":this._attr=_.extend(this._attr,{x:b[0],y:b[1],text:b[2],"font-size":"12pt","text-anchor":"middle"});break;default:throw d.error.defn("Unknown geometry type!");
}else if(1===a.length&&_.isObject(a[0]))for(b in c=a[0],c)a=c[b],this._attr[b]=a;else 2===a.length&&(null!=a[0]&&null!=a[1])&&(this._attr[a[0]]=a[1]);return this};b.prototype.remove=function(){return this.canvas.remove(this.id)};b.prototype.toBack=function(){return this.canvas.toBack(this.id)};b.prototype.toFront=function(){return this.canvas.toFront(this.id)};b.prototype.getBBox=function(){var a,b,d,h,m,q,p;if("text"===this.type){b=null!=(a=parseInt(this._attr["font-size"].slice(0,-2)))?a:12;h=0;
d=1.04*b;p=this._attr.text;m=0;for(q=p.length;m<q;m++)a=p[m],h=0<=c.call(",.1",a)?h+b/4:h+b;return{height:d,width:h}}if("rect"===this.type)return{height:this._attr.height,width:this._attr.width};if("circle"===this.type)return{height:this._attr.r,width:this._attr.r}};b.prototype.transform=function(a){if("s"===a[0]&&(a=a.slice(1),"font-size"in this._attr&&(this._attr["font-size"]=this._attr["font-size"].slice(0,-2)*a+"pt"),"width"in this._attr&&(this._attr.width*=a),"height"in this._attr))return this._attr.height*=
a};b.prototype.animate=function(){var a;a=1<=arguments.length?l.call(arguments,0):[];this._attr.animate=a;return this};b.prototype.click=function(a){return this._interact.click=a};b.prototype.drag=function(a,b,c){return this._interact.drag={onmove:a,onstart:b,onend:c}};b.prototype.hover=function(a){return this._interact.hover=a};b.prototype.data=function(a,b){var c;null==(c=this._interact).data&&(c.data={});return this._interact.data[a]=b};b.prototype.touchstart=function(a){return this._interact.touchstart=
a};b.prototype.touchend=function(a){return this._interact.touchend=a};b.prototype.touchmove=function(a){return this._interact.touchmove=a};b.prototype.touchcancel=function(a){return this._interact.touchcancel=a};return b}();d.canvas=function(b,a,c){return new f(b,a,c)}}).call(this);(function(){var f,r;d.offset=function(d){var c,b,a;c={top:0,left:0};if(b=d&&d.ownerDocument)return a=b.documentElement,"undefined"!==typeof d.getBoundingClientRect&&(c=d.getBoundingClientRect()),d=null!==b&&b===b.window?
b:9===b.nodeType&&b.defaultView,{top:c.top+d.pageYOffset-a.clientTop,left:c.left+d.pageXOffset-a.clientLeft}};d.getXY=function(d,c){var b,a;-1!==c.type.indexOf("mouse")?(a=c.clientX,b=c.clientY):-1!==c.type.indexOf("touch")&&(b=c.changedTouches[0],a=b.clientX,b=b.clientY);return{x:a+(document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft)-d.left,y:b+(document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop)-d.top}};d.touchToMouse=function(d,
c,b){var a,e,g;null==b&&(b=!1);a=c.lastEvent;g=0<a.touches.length&&a.touches[0]||0<a.changedTouches.length&&a.changedTouches[0];e=document.createEvent("MouseEvent");e.initMouseEvent(d,a.bubbles,a.cancelable,a.view,a.detail,g.screenX,g.screenY,g.clientX,g.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,1,a.target);return b?(window.clearTimeout(c.pressTimer),c.pressTimer=window.setTimeout(function(){return a.target.dispatchEvent(e)},b)):a.target.dispatchEvent(e)};f={lastStart:0,lastTouch:0,lastEvent:null,
pressTimer:0};r=window.alert;d.touch=function(l,c,b,a){c.tooltip=c.data("t");c.evtData=c.data("e");f.lastEvent=b;b.preventDefault();if("touchstart"===l)return f.lastStart=b.timeStamp,d.touchToMouse("mousedown",f),f.pressTimer=window.setTimeout(function(){return d.touchToMouse("mouseover",f)},800),window.alert=function(){var a;window.clearTimeout(f.pressTimer);a=arguments;return window.setTimeout(function(){r.apply(window,a);return window.alert=r},100)};if("touchmove"===l){l=a.paper.getById(b.target.raphaelid);
a=d.offset(a.dom);a=d.getXY(a,b);if(600<b.timeStamp-f.lastStart&&l.isPointInside(a.x,a.y))return d.touchToMouse("mouseover",f);window.clearTimeout(f.pressTimer);return d.touchToMouse("mouseout",f)}if("touchend"===l){if(window.clearTimeout(f.pressTimer),d.touchToMouse("mouseup",f),d.touchToMouse("mouseout",f,400),800>b.timeStamp-f.lastStart)return d.touchToMouse("click",f)}else if("touchcancel"===l)return window.clearTimeout(f.pressTimer),d.touchToMouse("mouseout",f),d.touchToMouse("mouseup",f,300)}}).call(this);
(function(){var f,r,l;d.format=function(c,b){switch(c){case "cat":return d.format.identity;case "num":return d.format.number(b);case "date":return d.format.date(b);case "none":return d.format.identity}};d.format.identity=function(c){return c};f={0:"",3:"k",6:"m",9:"b",12:"t"};l=function(c,b){return _.isUndefined(f[b])?c+"e"+(0<b?"+":"-")+Math.abs(b):c+f[b]};r=function(c){var b,a,e;if(!isFinite(c))return c;a=""+c;b=Math.abs(c);1E4<=b&&(e=(""+b).split(/\./),b=e[0].length%3||3,e[0]=a.slice(0,b+(0>c))+
e[0].slice(b).replace(/(\d{3})/g,",$1"),a=e.join("."));return a};d.format.getExp=function(c){return Math.floor(Math.log(Math.abs(0===c?1:c))/Math.LN10)};d.format.number=function(c){return function(b){var a,e;e=0;a=null!=c?c:d.format.getExp(b);null==c||2!==a&&5!==a&&8!==a&&11!==a?-1===a?(a=0,e=null!=c?1:2):-2===a?(a=0,e=null!=c?2:3):1===a||2===a?a=0:3<a&&6>a?a=3:6<a&&9>a?a=6:9<a&&12>a?a=9:12<a&&15>a?a=12:e=null!=c?0:1:(a+=1,e=1);b=Math.round(b/Math.pow(10,a-e));b/=Math.pow(10,e);b=b.toFixed(e);return l(r(b),
a)}};d.format.date=function(c){return-1!==_.indexOf(d["const"].timerange,c)?"second"===c?function(b){return moment.unix(b).format("h:mm:ss a")}:"minute"===c?function(b){return moment.unix(b).format("h:mm a")}:"hour"===c?function(b){return moment.unix(b).format("MMM D h a")}:"day"===c||"week"===c?function(b){return moment.unix(b).format("MMM D")}:"month"===c||"twomonth"===c||"quarter"===c||"sixmonth"===c?function(b){return moment.unix(b).format("YYYY/MM")}:function(b){return moment.unix(b).format("YYYY")}:
function(b){return moment.unix(b).format(c)}};d.format._number_instance=d.format.number();d.format.value=function(c){return _.isNumber(c)?d.format._number_instance(c):c}}).call(this);(function(){var f,r;d.type={};d.type.impute=function(d){var c,b,a,e,g,h;g=b=e=c=0;for(h=d.length;g<h;g++)a=d[g],null!=a&&(b++,isNaN(a)&&isNaN(a.replace(/\$|\,/g,""))||e++,a=moment(a),null!=a&&a.isValid()&&c++);return e>0.95*b?"num":c>0.95*b?"date":"cat"};d.type.coerce=function(d,c){if(_.isUndefined(d)||_.isNull(d)||"cat"===
c.type)return d;if("num"===c.type)return isNaN(d)?+(""+d).replace(/\$|\,/g,""):+d;if("date"===c.type)return!_.isNumber(d)&&_.isEmpty(d)?null:c.format?"unix"===c.format?moment.unix(d).unix():moment(d,c.format).unix():isFinite(d)&&d>=Math.pow(10,9)?moment.unix(d).unix():moment(d).unix()};d.type.compare=function(d){switch(d){case "cat":return f;default:return r}};f=function(d,c){var b,a;if(d===c)return 0;_.isString(d)||(d=""+d);_.isString(c)||(c=""+c);b=d.toLowerCase();a=c.toLowerCase();return b===a?
d<c?-1:d>c?1:0:b<a?-1:b>a?1:0};r=function(d,c){return d===c?0:null===d?1:null===c?-1:d<c?-1:d>c?1:0}}).call(this);(function(){d.spec={};d.spec.toStrictMode=function(f){var r,l,c,b,a,e,g,h;f=_.clone(f);null==f.layers&&f.layer&&(f.layers=[f.layer]);null==f.guides&&f.guide&&(f.guides=f.guide);null==f.guides&&(f.guides={});if(f.layers)for(e=f.layers,r=l=0,b=e.length;l<b;r=++l){c=e[r];h=d["const"].aes;a=0;for(g=h.length;a<g;a++)r=h[a],c[r]&&_.isString(c[r])&&(c[r]={"var":c[r]});null==c.sample&&(c.sample=
500)}if(f.facet)for(c=["var","x","y"],e=0,r=c.length;e<r;e++)b=c[e],(l=f.facet[b])&&_.isString(l)&&(f.facet[b]={"var":l});else f.facet={type:"none"};f.coord||(f.coord={type:"cartesian",flip:!1});_.isString(f.dom)&&(f.dom=document.getElementById(f.dom));return f};d.spec.check=function(f){var r,l,c,b,a;if(null==f.layers||0===f.layers.length)throw d.error.defn("No layers are defined in the specification.");a=f.layers;r=c=0;for(b=a.length;c<b;r=++c){l=a[r];if(null==l.data)throw d.error.defn("Layer "+
(r+1)+" does not have data to plot!");if(!l.data.isData)throw d.error.defn("Data must be a Polychart Data object.");}if((null==f.render||!1!==f.render)&&!f.dom)throw d.error.defn("No DOM element specified. Where to make plot?");return f}}).call(this);(function(){d.xhr=function(d,r,l){var c;c=new XMLHttpRequest;3>arguments.length?(l=r,r=null):r&&c.overrideMimeType&&c.overrideMimeType(r);c.open("GET",d,!0);r&&c.setRequestHeader("Accept",r);c.onreadystatechange=function(){var b;if(4===c.readyState)return b=
c.status,b=!b&&c.response||200<=b&&300>b||304===b?c:null,l(b)};return c.send(null)};d.text=function(f,r,l){3>arguments.length&&(l=r,r=null);return d.xhr(f,r,function(c){return l(c&&c.responseText)})};d.json=function(f,r){return d.text(f,"application/json",function(d){return r(d?JSON.parse(d):null)})};d.dsv=function(f,r){var l,c,b,a,e,g,h;h=RegExp("\r\n|["+f+"\r\n]","g");g=RegExp('["'+f+"\n]");l=f.charCodeAt(0);b=function(b){return b.map(a).join(f)};a=function(a){var b;return null!=(b=g.test(a))?b:
'"'+a.replace(/\"/g,'""')+{'"':a}};e=null;c=function(a,b){return d.text(a,r,function(a){return b(a&&c.parse(a))})};c.parse=function(a){return c.parseRows(a,function(a,b){var c,d,k;if(b){k={};c=-1;for(d=e.length;++c<d;)k[e[c]]=a[c];return k}e=a;return null})};c.parseRows=function(a,b){var c,d,e,k,t,s,v,g;d={};c={};s=[];t=0;k=v=null;h.lastIndex=0;for(g=function(){var b,e,t;if(h.lastIndex>=a.length)return c;if(k)return k=!1,d;t=h.lastIndex;if(34===a.charCodeAt(t)){for(e=t;e++<a.length;)if(34===a.charCodeAt(e)){if(34!==
a.charCodeAt(e+1))break;e++}h.lastIndex=e+2;b=a.charCodeAt(e+1);13===b?(k=!0,10===a.charCodeAt(e+2)&&h.lastIndex++):10===b&&(k=!0);return a.substring(t+1,e).replace(/""/g,'"')}if(b=h.exec(a))return k=b[0].charCodeAt(0)!==l,a.substring(t,b.index);h.lastIndex=a.length;return a.substring(t)};(v=g())!==c;){for(e=[];v!==d&&v!==c;)e.push(v),v=g();b&&!(e=b(e,t++))||s.push(e)}return s};c.format=function(a){return a.map(b).join("\n")};return c};d.csv=d.dsv(",","text/csv")}).call(this);(function(){var f,r,
l,c,b,a,e,g,h,m,q,p,n,u,k,t,s,v,z,x,C,D,y,A,E,w,B,F,G,H,I,M,N,O,J=[].slice,K={}.hasOwnProperty,L=function(a,b){function c(){this.constructor=a}for(var d in b)K.call(b,d)&&(a[d]=b[d]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a};N=function(a,b){var c,d,k,e;c=a.length;e=['"',"'"];d=0;for(k=e.length;d<k;d++)if(b=e[d],a[0]===b&&a[c-1]===b)return a.slice(1,+(c-2)+1||9E9);return a};O=function(a){return function(b,c){var d,k,e,t,s;s=[];d=e=0;for(t=b.length;e<t;d=++e)k=b[d],
s.push(a(k,c[d]));return s}}(function(a,b){return[a,b]});p=function(a){var b,c,d,k,e;c={};k=0;for(e=a.length;k<e;k++)d=a[k],b=d[0],d=d[1],c[b]=d;return c};k=function(a,b,c){null==c&&(c=null);return b in a&&a[b]||c};t=function(a,b){var c,d,e;d={};for(e in b)c=b[e],c=k(a,e,c),null!==c&&(d[e]=c);return d};x=function(a){var b,c,d,e,t;c={};e=0;for(t=a.length;e<t;e++)for(d in b=a[e],b)c[d]=b[d].concat(k(c,d,[]));return c};n=function(a,b){var c,d,k,e,t;null==a&&(a=[]);null==b&&(b=function(a){return a});
c={};e=0;for(t=a.length;e<t;e++)d=a[e],c[b(d)]=d;e=[];for(k in c)d=c[k],e.push(d);return e};u=function(a){return function(b){return n(b,function(b){return b[a]})}};F=function(a,b){return""+a+"("+b+")"};G=function(a){return"["+a+"]"};h=function(){function a(b){var c,d,e,k;k=[];d=0;for(e=b.length;d<e;d++)c=b[d],k.push(c);this.buffer=k.reverse()}a.prototype.empty=function(){return 0===this.buffer.length};a.prototype.peek=function(){return this.empty()?null:this.buffer[this.buffer.length-1]};a.prototype.get=
function(){return this.empty()?null:this.buffer.pop()};a.prototype.toString=function(){return F("Stream",G(J.call(this.buffer).reverse()))};return a}();q=function(){function a(b){this.tag=b}a.Tag={symbol:"symbol",literal:"literal",lparen:"(",rparen:")",comma:","};a.prototype.toString=function(){return"<"+this.contents().toString()+">"};a.prototype.contents=function(){return[this.tag]};return a}();m=function(a){function b(a){this.name=a;this.name=N(this.name);b.__super__.constructor.call(this,q.Tag.symbol)}
L(b,a);b.prototype.contents=function(){return b.__super__.contents.call(this).concat([this.name])};return b}(q);e=function(a){function b(a){this.val=a;this.val=N(this.val);b.__super__.constructor.call(this,q.Tag.literal)}L(b,a);b.prototype.contents=function(){return b.__super__.contents.call(this).concat([this.val])};return b}(q);c=function(){var a,b,c,d;c=[q.Tag.lparen,q.Tag.rparen,q.Tag.comma];d=[];a=0;for(b=c.length;a<b;a++)H=c[a],d.push(new q(H));return d}();a=c[0];g=c[1];r=c[2];M=[[/^\(/,function(){return a}],
[/^\)/,function(){return g}],[/^,/,function(){return r}],[/^[+-]?(0x[0-9a-fA-F]+|0?\.\d+|[1-9]\d*(\.\d+)?|0)([eE][+-]?\d+)?/,function(a){return new e(a)}],[/^([\w|\.]|[^\u0000-\u0080])+|'((\\.)|[^\\'])+'|"((\\.)|[^\\"])+"/,function(a){return new m(a)}]];z=function(a){var b,c,e,k;e=0;for(k=M.length;e<k;e++)if(c=M[e],b=c[0],c=c[1],b=b.exec(a))return e=b[0],[a.slice(e.length),c(e)];throw d.error.defn("There is an error in your specification at "+a);};I=function(a){var b,c;for(c=[];;){a=a.replace(/^\s+/,
"");if(!a)break;b=z(a);a=b[0];b=b[1];c.push(b)}return c};c=function(){function a(){}a.prototype.toString=function(){return F(this.constructor.name,this.contents())};return a}();b=function(a){function b(a){this.name=a}L(b,a);b.prototype.contents=function(){return[this.name]};b.prototype.pretty=function(){return this.name};b.prototype.visit=function(a){return a.ident(this,this.name)};return b}(c);l=function(a){function b(a){this.val=a}L(b,a);b.prototype.contents=function(){return[this.val]};b.prototype.pretty=
function(){return this.val};b.prototype.visit=function(a){return a["const"](this,this.val)};return b}(c);f=function(a){function b(a,c){this.fname=a;this.args=c}L(b,a);b.prototype.contents=function(){return[this.fname,G(this.args)]};b.prototype.pretty=function(){var a,b=this.fname,c,d,e,k;e=this.args;k=[];c=0;for(d=e.length;c<d;c++)a=e[c],k.push(a.pretty());return F(b,k)};b.prototype.visit=function(a){var b;return a.call(this,this.fname,function(){var c,d,e,k;e=this.args;k=[];c=0;for(d=e.length;c<
d;c++)b=e[c],k.push(b.visit(a));return k}.call(this))};return b}(c);s=function(a,b,c){var d,e,k,t;e=a.peek();if(null!==e)for(k=0,t=c.length;k<t;k++)if(d=c[k],H=d[0],d=d[1],e.tag===H)return d(a);return b(a)};w=function(a){throw d.error.defn("There is an error in your specification at "+a.toString());};C=function(a){var b;b=new h(I(a));a=E(b);if(null!==b.peek())throw d.error.defn("There is an error in your specification at "+b.toString());return a};E=function(a){return s(a,w,[[q.Tag.literal,A],[q.Tag.symbol,
B]])};A=function(a){return new l(a.get().val)};B=function(a){var c;c=a.get().name;return s(a,function(){return new b(c)},[[q.Tag.lparen,D(c)]])};D=function(a){return function(b){b.get();b=s(b,y([]),[[q.Tag.rparen,function(a){a.get();return[]}]]);return new f(a,b)}};y=function(a){return function(b){var c,d;c=E(b);d=a.concat([c]);return s(b,w,[[q.Tag.rparen,function(a){a.get();return d}],[q.Tag.comma,function(a){a.get();return y(d)(a)}]])}};v=function(a){var b;b={trans:[],stat:[]};a.visit({ident:function(a,
b){return b},"const":function(a,b){return b},call:function(a,c,e){var k,t;t=c in d["const"].trans?"trans":c in d["const"].stat?"stat":"none";if("none"!==t)return k=d["const"][t][c],e=p(O(k,e)),e.name=a.pretty(),e[t]=c,b[t].push(e),e.name;throw d.error.defn("The operation "+c+" is not recognized. Please check your specifications.");}});return b};d.parser={tokenize:I,parse:C,layerToData:function(a,b){var c,e,k,s,q,g,h,w,p,m;null==b&&(b=[]);q={};h=null!=(p=a.filter)?p:{};for(e in h)p=h[e],q[C(e).pretty()]=
p;g=[];h=0;for(p=b.length;h<p;h++)e=b[h],g.push(C(e["var"]).pretty());b=g;c=_.pick(a,d["const"].aes);for(e in c)"var"in c[e]||delete c[e];m=[];p=[];g=[];h={};for(e in c)k=c[e],"count(*)"===k["var"]?p.push(k["var"]):(s=C(k["var"]),k["var"]=s.pretty(),s=v(s),m.push(s),p.push(k["var"]),0===s.stat.length&&g.push(k["var"]),"sort"in k&&(s=t(k,d["const"].metas),"count(*)"===s.sort?w={sort:"count(*)",asc:s.asc,stat:[],trans:[]}:(w=C(s.sort),s.sort=w.pretty(),w=v(w)),0!==w.stat.length&&(s.stat=w.stat[0]),
h[k["var"]]=s));c=0;for(k=b.length;c<k;c++)if(e=b[c],s=C(e),e=s.pretty(),s=v(s),m.push(s),p.push(e),0===s.stat.length)g.push(e);else throw d.error.defn("Facet variable should not contain statistics!");m=x(m);e=u("name");g={stats:e(m.stat),groups:n(g)};return{trans:e(m.trans),stats:g,sort:h,select:n(p),filter:q}},pivotToData:function(a){var b,c,e,k,s,q,g,h,w,p;k={};b=null!=(s=a.filter)?s:{};for(q in b)s=b[q],k[C(q).pretty()]=s;b=_.pick(a,["columns","rows","values"]);a=[];for(q in b)for(c=b[q],h=0,
w=c.length;h<w;h++)s=c[h],"var"in s&&a.push(s);h=[];b=[];s=[];q={};w=0;for(p=a.length;w<p;w++)c=a[w],"count(*)"===c["var"]?b.push(c["var"]):(e=C(c["var"]),c["var"]=e.pretty(),e=v(e),h.push(e),b.push(c["var"]),0===e.stat.length&&s.push(c["var"]),"sort"in c&&(e=t(c,d["const"].metas),"count(*)"===e.sort?g={sort:"count(*)",asc:e.asc,stat:[],trans:[]}:(g=C(e.sort),e.sort=g.pretty(),g=v(g)),0!==g.stat.length&&(e.stat=g.stat[0]),q[c["var"]]=e));c=x(h);a=u("name");s={stats:a(c.stat),groups:n(s)};return{trans:a(c.trans),
stats:s,sort:q,select:n(b),filter:k}},numeralToData:function(a){var b,c,e,k,s,q,g,h,w,p,m;s={};h=null!=(q=a.filter)?q:{};for(c in h)q=h[c],s[C(c).pretty()]=q;b=_.pick(a,["value"]);for(c in b)"var"in b[c]||delete b[c];w=[];h=[];q=[];a={};for(c in b)e=b[c],"count(*)"===e["var"]?h.push(e["var"]):(k=C(e["var"]),e["var"]=k.pretty(),k=v(k),w.push(k),h.push(e["var"]),0===k.stat.length&&q.push(e["var"]),"sort"in e&&(k=t(e,d["const"].metas),g=C(k.sort),k.sort=g.pretty(),g=v(g),0!==g.stat.length&&(k.stat=g.stat[0]),
a[e["var"]]=k));b=x(w);c=u("name");q={stats:c(null!=(p=b.stat)?p:[]),groups:n(q)};return{trans:c(null!=(m=b.trans)?m:[]),stats:q,sort:a,select:n(h),filter:s}}}}).call(this);(function(){var f,r,l,c,b,a={}.hasOwnProperty,e=function(b,c){function e(){this.constructor=b}for(var d in c)a.call(c,d)&&(b[d]=c[d]);e.prototype=c.prototype;b.prototype=new e;b.__super__=c.prototype;return b},g=function(a,b){return function(){return a.apply(b,arguments)}};r=function(){function a(b){var c;this.spec=b;null==this.spec&&
(this.spec={});this.flip=null!=(c=this.spec.flip)?c:!1;this.scales=null;b=this.flip?["y","x"]:["x","y"];this.x=b[0];this.y=b[1]}a.prototype.make=function(a){return this.dims=a};a.prototype.setScales=function(a){return this.scales={x:a.x.f,y:a.y.f}};a.prototype.clipping=function(a){return[a.x,a.y,this.dims.eachWidth,this.dims.eachHeight]};a.prototype.getScale=function(a){};a.prototype.ranges=function(){};return a}();f=function(a){function b(){return c=b.__super__.constructor.apply(this,arguments)}
e(b,a);b.prototype.type="cartesian";b.prototype.getScale=function(a){if("x"===a||"y"===a)return this.scales[this[a]];throw d.error.input("Coordinates only keep x & y scales");};b.prototype.ranges=function(){var a;a={};a[this.x]={min:0,max:this.dims.eachWidth};a[this.y]={min:this.dims.eachHeight,max:0};return a};b.prototype.axisType=function(a){return this[a]};b.prototype.getXY=function(a,b){var c,e;if(a)return c={x:_.isArray(b.x)?_.map(b.x,this.scales.x):this.scales.x(b.x),y:_.isArray(b.y)?_.map(b.y,
this.scales.y):this.scales.y(b.y)},{x:c[this.x],y:c[this.y]};c=this.scales[this.x];e=this.scales[this.y];return{x:_.isArray(b.x)?_.map(b.x,c):c(b.x),y:_.isArray(b.y)?_.map(b.y,e):e(b.y)}};b.prototype.getAes=function(a,b,c){return{x:c.x(a[this.x],b[this.x]),y:c.y(a[this.y],b[this.y])}};return b}(r);l=function(a){function c(){this.getXY=g(this.getXY,this);return b=c.__super__.constructor.apply(this,arguments)}e(c,a);c.prototype.type="polar";c.prototype.make=function(a){this.dims=a;this.cx=this.dims.eachWidth/
2;return this.cy=this.dims.eachHeight/2};c.prototype.getScale=function(a){if("r"===a)return this.scales[this.x];if("t"===a)return this.scales[this.y];throw d.error.input("Coordinates only keep r & t scales");};c.prototype.ranges=function(){var a,b,c;b=[this.x,this.y];a=b[0];c=b[1];b={};b[c]={min:0,max:2*Math.PI};b[a]={min:0,max:Math.min(this.dims.eachWidth,this.dims.eachHeight)/2-10};return b};c.prototype.axisType=function(a){return"x"===this[a]?"r":"t"};c.prototype.getXY=function(a,b){var c,e,d,
t,s,v,g,h,m,f,y,A,l,w,B=this;f=function(a,b){return B.cx+a*Math.cos(b-Math.PI/2)};y=function(a,b){return B.cy+a*Math.sin(b-Math.PI/2)};t=[this.x,this.y];s=t[0];g=t[1];if(a){if(_.isArray(b[s])){t={x:[],y:[],r:[],t:[]};l=b[s];e=c=0;for(A=l.length;c<A;e=++c)v=l[e],v=this.scales[s](v),h=this.scales[g](b[g][e]),t.x.push(f(v,h)),t.y.push(y(v,h)),t.r.push(v),t.t.push(h);return t}v=this.scales[s](b[s]);h=this.scales[g](b[g]);return{x:f(v,h),y:y(v,h),r:v,t:h}}d=function(a){return _.isObject(a)&&"scalefn"===
a.t&&"identity"===a.f};c=function(a,b){var c,e;c=d(a);e=d(b);if(c&&!e)return{x:a.v,y:y(B.scales[s](b),0)};if(c&&e)return{x:a.v,y:b.v};if(!c&&e)return{y:b.v,x:y(B.scales[g](a),0)};v=B.scales[s](b);h=B.scales[g](a);return{x:f(v,h),y:y(v,h)}};if(_.isArray(b.x)){t={x:[],y:[]};w=b.x;e=A=0;for(l=w.length;A<l;e=++A)m=w[e],e=b.y[e],m=c(m,e),e=m.x,m=m.y,t.x.push(e),t.y.push(m);return t}return c(b.x,b.y)};return c}(r);d.coord={cartesian:function(a){return new f(a)},polar:function(a){return new l(a)}};d.coord.make=
function(a){if(null==a||null==a.type)return d.coord.cartesian();switch(a.type){case "cartesian":return d.coord.cartesian(a);case "polar":return d.coord.polar(a);default:throw d.error.defn("No such coordinate type "+a.type+".");}}}).call(this);(function(){var f,r,l,c,b,a,e,g,h,m=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};c=d["const"].aes;d.domain={};d.domain.make=function(a,b,c,e){var k,t,s;k=[];for(s in a)t=a[s],k.push(g(t.geoms,b[s],c,e));
return d.domain.merge(k)};d.domain.compare=function(a){return a?"cat"===a.type?function(b,c){b=_.indexOf(a.levels,b);c=_.indexOf(a.levels,c);return-1===b?1:-1===c?-1:b<c?-1:b>c?1:0}:d.type.compare(a.type):function(a){return a}};l=function(){return function(a){this.type=a.type;this.min=a.min;this.max=a.max;this.bw=a.bw}}();r=function(){return function(a){this.type=a.type;this.min=a.min;this.max=a.max;this.bw=a.bw}}();f=function(){return function(a){this.type=a.type;this.levels=a.levels;this.sorted=
a.sorted}}();e=function(a){"cat"!==a.type&&a.max===a.min&&(a.bw?(a.max+=a.bw,a.min-=a.bw):0===a.max?a.max+=1:(a.max*=1.1,a.min/=1.1));switch(a.type){case "num":return new l(a);case "date":return new r(a);case "cat":return new f(a)}};d.domain.single=function(a,b,c){var u,k,t,s,v,g,h,m,f,y,A,l,w,B,F,G,H,I,r;if(0===a.length)throw d.error.input("Dataset is none?");k=function(a){return null!=c?c[a]:null};switch(b.type){case "num":return u=null!=(s=k("bw"))?s:b.bw,1<a.length?(b=null!=(v=k("min"))?v:_.min(a),
t=null!=(l=k("max"))?l:_.max(a)+(null!=u?u:0)):1===a.length?u?(b=null!=(w=k("min"))?w:a[0],t=null!=(B=k("max"))?B:a[0]+u):(b=null!=(F=k("min"))?F:a[0]-1,t=null!=(G=k("max"))?G:a[0]+1):(b=null!=(H=k("min"))?H:0,t=null!=(I=null!=(r=k("max"))?r:u)?I:1),e({type:"num",min:b,max:t,bw:u});case "date":return u=null!=(g=k("bw"))?g:b.bw,b=null!=(h=k("min"))?h:_.min(a),t=k("max"),null==t&&(t=_.max(a),t=function(){switch(u){case "week":return moment.unix(t).add("days",7).unix();case "twomonth":return moment.unix(t).add("months",
2).unix();case "quarter":return moment.unix(t).add("months",4).unix();case "sixmonth":return moment.unix(t).add("months",6).unix();case "twoyear":return moment.unix(t).add("years",2).unix();case "fiveyear":return moment.unix(t).add("years",5).unix();case "decade":return moment.unix(t).add("years",10).unix();default:return moment.unix(t).add(u+"s",1).unix()}}()),e({type:"date",min:b,max:t,bw:u});case "cat":return e({type:"cat",levels:null!=(m=null!=(f=k("levels"))?f:b.levels)?m:_.uniq(a),sorted:null!=
(y=null!=(A=k("levels"))?A:b.sorted)?y:!1})}};g=function(b,c,g,u){var k,t,s,v,h;t={};for(k in c)v=c[k],s=g[k],0<=m.call(d["const"].noDomain,k)||(u?t[k]=e(g[k]):(h=a(b,k),t[k]=d.domain.single(h,v,s)));return t};a=function(a,b){var c,e,k,t,s;t=[];for(e in a)for(k in c=a[e],s=c.marks,s)c=s[k],t=t.concat(d.flatten(c[b]));s=[];k=0;for(c=t.length;k<c;k++)e=t[k],d.isDefined(e)&&s.push(e);return s};d.domain.merge=function(a){var b,e,d,k,t;d={};k=0;for(t=c.length;k<t;k++)b=c[k],e=_.without(_.pluck(a,b),void 0),
0<e.length&&(d[b]=h(e));return d};b={num:function(a){var b,c;b=_.compact(_.uniq(_.map(a,function(a){return a.bw})));if(1<b.length)throw d.error.data("Not all layers have the same binwidth.");b=null!=(c=b[0])?c:void 0;c=_.min(_.map(a,function(a){return a.min}));a=_.max(_.map(a,function(a){return a.max}));return e({type:"num",min:c,max:a,bw:b})},date:function(a){var b,c;b=_.compact(_.uniq(_.map(a,function(a){return a.bw})));if(1<b.length)throw d.error.data("Not all layers have the same binwidth.");
b=null!=(c=b[0])?c:void 0;c=_.min(_.map(a,function(a){return a.min}));a=_.max(_.map(a,function(a){return a.max}));return e({type:"date",min:c,max:a,bw:b})},cat:function(a){var b,c,u,k,t,s,v,g;k=[];t=0;for(v=a.length;t<v;t++)if(c=a[t],c.sorted){b=!0;s=0;for(g=k.length;s<g;s++)u=k[s],_.isEqual(u,c.levels)&&(b=!1);b&&k.push(c.levels)}a=_.chain(a).filter(function(a){return!a.sorted}).map(function(a){return a.levels}).value();if(1<k.length&&_.intersection.apply(this,k))throw d.error.data("You are trying to combine incompatible sorted domains in the same axis.");
k=[_.flatten(k,!0)];a=_.union.apply(this,k.concat(a));0===k[0].length&&(a=a.sort());return e({type:"cat",levels:a,sorted:0!==k[0].length})}};h=function(a){var c;c=_.uniq(_.map(a,function(a){return a.type}));if(1<c.length)throw d.error.data("You are trying to merge data of different types in the same axis or legend.");return b[c[0]](a)}}).call(this);(function(){var f,r,l,c;d.tick={};d.tick.make=function(b,a,e){var g,h,m,q,f,n,u,k;f=null;g=function(a){return a};null!=a.ticks?n="num"===e?_.filter(a.ticks,
function(a){return a>=b.min&&a<=b.max}):a.ticks:(g=null!=(n=a.numticks)?n:5,g=c[e](b,g),n=g.ticks,f=g.step);g=a.labels?function(b){var c;return null!=(c=a.labels[b])?c:b}:a.formatter?a.formatter:d.format(e.split("-")[0],f);f={};e=l(e,g);if(n)for(h=u=0,k=n.length-1;0<=k?u<=k:u>=k;h=0<=k?++u:--u)q=0===h?null:n[h-1],m=h===n.length-1?null:n[h+1],h=n[h],m=e(h,q,m),f[m.value]=m;return{ticks:f,ticksFormatter:g}};f=function(){return function(b){this.location=b.location;this.value=b.value;this.index=b.index;
this.evtData=b.evtData}}();l=function(b,a){var c;c=0;return function(d,h,m){var q;"cat"===b?q={"in":[d]}:(q={},null!=h&&(q.ge=h),null!=m&&(q.le=m));return new f({location:d,value:a(d),index:c++,evtData:q})}};r=function(b,a){var c,d;d=Math.pow(10,Math.floor(Math.log(b/a)/Math.LN10));c=a/b*d;0.15>c?d*=10:0.35>=c?d*=5:0.75>=c&&(d*=2);return d};c={none:function(){return{}},cat:function(b,a){var c,d,h,m,f,l,n;h=Math.max(1,Math.round(b.levels.length/a));m=[];n=b.levels;c=f=0;for(l=n.length;f<l;c=++f)d=
n[c],0===c%h&&m.push(d);return{ticks:m}},num:function(b,a){var c,d,h,m;h=b.min;d=b.max;if(c=b.bw){for(;(d-h)/c>1.4*a;)c*=2;m=h}else c=r(d-h,a),m=Math.ceil(h/c)*c;for(h=[];m<=d;)h.push(m),m+=c;return{ticks:h,step:Math.floor(Math.log(c)/Math.LN10)}},"num-log":function(b,a){var c,g,h,m,f,l,n,u,k;u=[];l=b.min;f=b.max;g=function(a){return Math.log(a)/Math.LN10};c=function(a){return Math.exp(a*Math.LN10)};m=Math.max(g(l),0);h=g(f);n=r(h-m,a);for(k=Math.ceil(m/n)*n;k<h+d["const"].epsilon;){if(!(0!==k%1&&
0.1>=k%1)){if(k%1>d["const"].epsilon){if(m=Math.floor(k)+g(10*(k%1)),0===m%1){k+=n;continue}}else m=k;m=c(m);m<l||m>f||u.push(m)}k+=n}return{ticks:u}},date:function(b,a){var c,g,h,m,f,l,n;m=b.min;h=b.max;if(c=b.bw)for(f=c;"decade"!==f&&(h-m)/d["const"].approxTimeInSeconds[f]>1.4*a;)f=d["const"].timerange[_.indexOf(d["const"].timerange,f)+1];else for(g in c=(h-m)/a,f="decade",n=d["const"].approxTimeInSeconds,n)if(l=n[g],c<1.4*l){f=g;break}l=[];g=moment.unix(m).startOf(f);c=function(){switch(f){case "twomonth":return["months",
2];case "quarter":return["months",4];case "sixmonth":return["months",6];case "twoyear":return["years",2];case "fiveyear":return["years",5];case "decade":return["years",10];default:return[f+"s",1]}}();for(g.unix()<m&&g.add(c[0],c[1]);g.unix()<=h;)l.push(g.unix()),g.add(c[0],c[1]);return{ticks:l,step:f}}}}).call(this);(function(){var f,r,l,c,b,a,e,g,h,m,q=function(a,b){return function(){return a.apply(b,arguments)}},p={}.hasOwnProperty,n=function(a,b){function c(){this.constructor=a}for(var d in b)p.call(b,
d)&&(a[d]=b[d]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a};a=d["const"].scaleFns;f=function(a){function b(){this.render=q(this.render,this);this.make=q(this.make,this);this.position="none";this.title=this.titletext=null}n(b,a);b.prototype.make=function(a){var b,c,d,e;b=a.guideSpec;d=a.title;c=a.position;this.size=a.size;this.color=a.color;a=function(a,c){var d;return null!=(d=b[a])?d:c};this.titletext=a("title",d);this.position=null!=(e=a("position",c))?e:this.defaultPosition;
if("out"===this.position)return this.position="bottom"};b.prototype.render=function(a,b,c){if("none"!==this.position)return null!=this.title&&a.remove(this.title),this.title=a.add(this._makeTitle(b,c),null,null,"guide-"+this.titleType);if(null!=this.title)return a.remove(this.title)};b.prototype.dispose=function(a){a.remove(this.title);return this.title=null};b.prototype._makeTitle=function(){throw d.error.impl();};b.prototype.getDimension=function(){var a;a={};"none"!==this.position&&(a[this.position]=
10);return a};return b}(d.Guide);l=function(b){function c(){return e=c.__super__.constructor.apply(this,arguments)}n(c,b);c.prototype.defaultPosition="bottom";c.prototype.titleType="titleH";c.prototype._makeTitle=function(b,c){var d,e,k,u,g;d="top"===this.position?b.paddingTop+b.guideTop-(null!=(e=c.top)?e:0)-2:b.height-b.paddingBottom-b.guideBottom+(null!=(k=c.bottom)?k:0);return{type:"text",x:a.identity(b.paddingLeft+b.guideLeft+(b.width-b.paddingLeft-b.guideLeft-b.paddingRight-b.guideRight)/2),
y:a.identity(d),color:a.identity(null!=(u=this.color)?u:"black"),size:a.identity(null!=(g=this.size)?g:12),text:this.titletext,"text-anchor":"middle"}};return c}(f);b=function(b){function c(){return g=c.__super__.constructor.apply(this,arguments)}n(c,b);c.prototype.defaultPosition="left";c.prototype.titleType="titleV";c.prototype._makeTitle=function(b,c){var d,e,k,u,g;d="left"===this.position?b.paddingLeft+b.guideLeft-(null!=(e=c.left)?e:0)-7:b.width-b.paddingRight-b.guideRight+(null!=(k=c.right)?
k:0);e=b.paddingTop+b.guideTop+(b.height-b.paddingTop-b.guideTop-b.paddingBottom-b.guideBottom)/2;return{type:"text",x:a.identity(d),y:a.identity(e),color:a.identity(null!=(u=this.color)?u:"black"),size:a.identity(null!=(g=this.size)?g:12),text:this.titletext,"text-anchor":"middle",transform:"r270"}};return c}(f);c=function(b){function c(){return h=c.__super__.constructor.apply(this,arguments)}n(c,b);c.prototype.titleType="title";c.prototype._makeTitle=function(b,c){var d,e;return{type:"text",x:a.identity(b.width/
2),y:a.identity(20),color:a.identity(null!=(d=this.color)?d:"black"),size:a.identity(null!=(e=this.size)?e:12),text:this.titletext,"font-size":"13px","font-weight":"bold","text-anchor":"middle"}};return c}(f);r=function(b){function c(){this.render=q(this.render,this);this.make=q(this.make,this);return m=c.__super__.constructor.apply(this,arguments)}n(c,b);c.prototype.make=function(a){var b;b=a.title;this.size=a.size;this.color=a.color;return this.titletext=b};c.prototype.render=function(a,b,c){return null!=
this.title?this.title=a.animate(this.title,this._makeTitle(b,c)):this.title=a.add(this._makeTitle(b,c),null,null,"guide-facet-title")};c.prototype._makeTitle=function(b,c){var d,e;return{type:"text",x:a.identity(c.x+b.eachWidth/2),y:a.identity(c.y-7),color:a.identity(null!=(d=this.color)?d:"black"),size:a.identity(null!=(e=this.size)?e:12),text:this.titletext,"text-anchor":"middle"}};return c}(f);null==d.guide&&(d.guide={});d.guide.title=function(a){return"y"===a||"r"===a?new b:"main"===a?new c:"facet"===
a?new r:new l}}).call(this);(function(){var f,r,l,c,b,a,e,g,h,m,q,p={}.hasOwnProperty,n=function(a,b){function c(){this.constructor=a}for(var d in b)p.call(b,d)&&(a[d]=b[d]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a},u=function(a,b){return function(){return a.apply(b,arguments)}},k=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};e=d["const"].scaleFns;f=function(a){function b(){this.axesGeoms={}}n(b,a);b.prototype.make=
function(a){var b,c,e,k;this.domains=a.domains;this.coord=a.coord;this.scales=a.scales;this.specs=a.specs;this.labels=a.labels;return this.axes={x:d.guide.axis(this.coord.axisType("x"),{domain:this.domains.x,type:this.scales.x.tickType(),guideSpec:null!=(b=this.specs.x)?b:{},key:null!=(c=this.labels.x)?c:"x"}),y:d.guide.axis(this.coord.axisType("y"),{domain:this.domains.y,type:this.scales.y.tickType(),guideSpec:null!=(e=this.specs.y)?e:{},key:null!=(k=this.labels.y)?k:"y"})}};b.prototype.getDimension=
function(a){var b,c,d;a={};d=this.axes;for(c in d)b=d[c],b=b.getDimension(),"left"===b.position?a.left=b.width:"right"===b.position?a.right=b.width:"bottom"===b.position?a.bottom=b.height:"top"===b.position&&(a.top=b.height);return a};b.prototype.render=function(a,b,c){var e,k,s,t,u,g,h,m,f,n,l,q,p,r,J,K;g=_.keys(c.indices);s=d.compare(_.keys(this.axesGeoms),g).deleted;u=0;for(n=s.length;u<n;u++)for(t in k=s[u],l=this.axesGeoms[k],l)k=l[t],k.dispose(b());s={top:0,left:0,right:a.eachWidth,bottom:a.eachHeight,
width:a.eachWidth,height:a.eachHeight};t=c.edge(this.axes.x.position);u=c.edge(this.axes.y.position);n={renderLabel:!1,renderTick:!1};l={renderLabel:!1,renderTick:!1};"r"===this.axes.x.type&&(n.renderLine=!1);"r"===this.axes.y.type&&(l.renderLine=!1);p=0;for(r=g.length;p<r;p++)for(k=g[p],m=c.getOffset(a,k),null==(q=this.axesGeoms)[k]&&(q[k]={x:new d.Geometry("guide"),y:new d.Geometry("guide")}),f=b(m,!1,!1),m=t(k)?{}:n,this.axesGeoms[k].x.set(this.axes.x.calculate(s,this.coord,m)),this.axesGeoms[k].x.render(f),
m=u(k)?{}:l,this.axesGeoms[k].y.set(this.axes.y.calculate(s,this.coord,m)),this.axesGeoms[k].y.render(f),J=["x","y"],m=0,f=J.length;m<f;m++)for(h in e=J[m],K=this.axesGeoms[k][e].pts,K)e=K[h],e.grid&&e.grid.toBack()};b.prototype.dispose=function(a){var b,c,d;d=this.axesGeoms;for(c in d)b=d[c],b.x.dispose(a),b.y.dispose(a);return this.axesGeoms={}};return b}(d.GuideSet);r=function(a){function b(a){this.calculate=u(this.calculate,this);var c,e,s,t,g;c=a.domain;t=a.type;e=a.guideSpec;a=a.key;s=function(a,
b){var c;return null!=(c=e[a])?c:b};this.position=s("position",this.defaultPosition);if(g=this.position,0>k.call(this.validPositions,g))throw d.error.defn("X-axis position can't be "+this.position+".");this.titletext=s("title",a);this.renderTick=s("renderTick",this.renderTickDefault);this.renderGrid=s("renderGrid",this.renderGridDefault);this.renderLabel=s("renderLabel",this.renderLabelDefault);this.renderLine=s("renderLine",this.renderLineDefault);this.gridColor=s("gridColor",this.gridColor);c=d.tick.make(c,
e,t);this.ticks=c.ticks;this.ticksFormatter=c.ticksFormatter;this.maxwidth=_.max(_.map(this.ticks,function(a){return d.strSize(a.value)}));this.maxwidth=Math.max(this.maxwidth,0)}n(b,a);b.prototype.renderTickDefault=!0;b.prototype.renderGridDefault=!0;b.prototype.renderLabelDefault=!0;b.prototype.renderLineDefault=!0;b.prototype.calculate=function(a,b,c){var d,e,k,s,t,u,g;this.coord=b;if("none"===this.position)return{};null==c&&(c={});a.centerx=a.left+a.width/2;a.centery=a.top+a.height/2;a.radius=
Math.min(a.width,a.height)/2-10;b={};this.renderLine&&(b.line={marks:{0:this._renderline(a)}});s=this.ticks;for(d in s)k=s[d],e={},this.renderTick&&(null!=(t=c.renderTick)?t:1)&&(e.tick=this._makeTick(a,k)),this.renderLabel&&(null!=(u=c.renderLabel)?u:1)&&(e.text=this._makeLabel(a,k)),this.renderGrid&&(null!=(g=c.renderGrid)?g:1)&&(e.grid=this._makeGrid(a,k)),b[d]={marks:e};return b};b.prototype._makeTick=function(a){if(!a)throw d.error.impl();a.type="path";a.stroke=e.identity("#666");a.color=e.identity("#666");
return a};b.prototype._makeLabel=function(a){if(!a)throw d.error.impl();a.type="text";a.stroke=e.identity("#666");a.color=e.identity("#666");return a};b.prototype._makeGrid=function(a){if(!a)throw d.error.impl();a.stroke=null!=this.gridColor?this.gridColor:"#EFEFEF";return a};return b}(d.Guide);b=function(a){function b(){return g=b.__super__.constructor.apply(this,arguments)}n(b,a);b.prototype.type="x";b.prototype.renderGridDefault=!1;b.prototype.defaultPosition="bottom";b.prototype.validPositions=
["top","bottom","none"];b.prototype._renderline=function(a){var b,c;c="top"===this.position?e.identity(a.top):e.identity(a.bottom);b=e.identity(a.left);a=e.identity(a.left+a.width);return{type:"path",y:[c,c],x:[b,a],stroke:e.identity("#666")}};b.prototype._makeTick=function(a,c){var d,k;"top"===this.position?(d=e.identity(a.top),k=e.identity(a.top-5)):(d=e.identity(a.bottom),k=e.identity(a.bottom+5));return b.__super__._makeTick.call(this,{x:[c.location,c.location],y:[d,k]})};b.prototype._makeLabel=
function(a,c){var d;d="top"===this.position?e.identity(a.top-15):e.identity(a.bottom+15);return b.__super__._makeLabel.call(this,{x:c.location,y:d,text:c.value,"text-anchor":"middle"})};b.prototype._makeGrid=function(a,c){var d,k;d=e.identity(a.top);k=e.identity(a.bottom);return b.__super__._makeGrid.call(this,{type:"path",x:[c.location,c.location],y:[d,k]})};b.prototype.getDimension=function(){var a;return{position:null!=(a=this.position)?a:"bottom",height:30,width:"all"}};return b}(r);a=function(a){function b(){return h=
b.__super__.constructor.apply(this,arguments)}n(b,a);b.prototype.type="y";b.prototype.renderLineDefault=!1;b.prototype.renderTickDefault=!1;b.prototype.defaultPosition="left";b.prototype.validPositions=["left","right","none"];b.prototype._renderline=function(a){var b,c;b="left"===this.position?e.identity(a.left):e.identity(a.right);c=e.identity(a.top);a=e.identity(a.top+a.height);return{type:"path",x:[b,b],y:[c,a],stroke:e.identity("#666")}};b.prototype._makeTick=function(a,c){var d,k;"left"===this.position?
(d=e.identity(a.left),k=e.identity(a.left-5)):(d=e.identity(a.right),k=e.identity(a.right+5));return b.__super__._makeTick.call(this,{x:[d,k],y:[c.location,c.location]})};b.prototype._makeLabel=function(a,c){var d;d="left"===this.position?e.identity(a.left-7):e.identity(a.right+7);return b.__super__._makeLabel.call(this,{x:d,y:c.location,text:c.value,"text-anchor":"left"===this.position?"end":"start"})};b.prototype._makeGrid=function(a,c){var d,k;d=e.identity(a.left);k=e.identity(a.right);return b.__super__._makeGrid.call(this,
{type:"path",y:[c.location,c.location],x:[d,k]})};b.prototype.getDimension=function(){var a;return{position:null!=(a=this.position)?a:"right",height:"all",width:5+this.maxwidth}};return b}(r);l=function(a){function b(){return m=b.__super__.constructor.apply(this,arguments)}n(b,a);b.prototype.type="r";b.prototype.defaultPosition="left";b.prototype.validPositions=["left","right","none"];b.prototype._renderline=function(a){var b,c;b=e.identity(a.left);c=e.identity(a.top);a=e.identity(a.top+a.height/
2);return{type:"path",x:[b,b],y:[c,a],stroke:e.identity("#666")}};b.prototype._makeTick=function(a,c){return b.__super__._makeTick.call(this,{x:[e.identity(a.left),e.identity(a.left-5)],y:[c.location,c.location]})};b.prototype._makeLabel=function(a,c){return b.__super__._makeLabel.call(this,{x:e.identity(a.left-7),y:c.location,text:c.value,"text-anchor":"end"})};b.prototype._makeGrid=function(a,c){return b.__super__._makeGrid.call(this,{type:"circle",x:e.identity(a.centerx),y:e.identity(a.centery),
size:e.identity(this.coord.getScale("r")(c.location)),color:e.identity("none"),"fill-opacity":0,"stroke-width":1})};b.prototype.getDimension=function(){return{position:"left",height:"all",width:5+this.maxwidth}};return b}(r);c=function(a){function b(){return q=b.__super__.constructor.apply(this,arguments)}n(b,a);b.prototype.type="t";b.prototype.defaultPosition="out";b.prototype.validPositions=["out","none"];b.prototype._renderline=function(a){return{type:"circle",x:e.identity(a.centerx),y:e.identity(a.centery),
size:e.identity(a.radius),color:e.identity("none"),stroke:e.identity("#666"),"stroke-width":1}};b.prototype._makeTick=function(a,c){return b.__super__._makeTick.call(this,{x:[c.location,c.location],y:[e.max(0),e.max(3)]})};b.prototype._makeLabel=function(a,c){return b.__super__._makeLabel.call(this,{x:c.location,y:e.max(12),text:c.value,"text-anchor":"middle"})};b.prototype._makeGrid=function(a,c){var d,k,u,t;k=e.identity(a.centerx);t=e.identity(a.centery);d=this.coord.getScale("t")(c.location)-Math.PI/
2;u=e.identity(a.centerx+a.radius*Math.cos(d));d=e.identity(a.centery+a.radius*Math.sin(d));return b.__super__._makeGrid.call(this,{type:"path",y:[t,d],x:[k,u]})};b.prototype.getDimension=function(){return{}};return b}(r);null==d.guide&&(d.guide={});d.guide.axis=function(d,e){if("x"===d)return new b(e);if("y"===d)return new a(e);if("r"===d)return new l(e);if("t"===d)return new c(e)};d.guide.axes=function(a){return new f(a)}}).call(this);(function(){var f,r,l,c,b,a,e,g={}.hasOwnProperty,h=function(a,
b){function c(){this.constructor=a}for(var d in b)g.call(b,d)&&(a[d]=b[d]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a},m=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},q=function(a,b){return function(){return a.apply(b,arguments)}};b=d["const"].scaleFns;d.guide.legends=function(){return new l};d.guide.legend=function(a,b){return"left"===b||"right"===b?new c(a):new f(a)};l=function(a){function b(){this.legends=
[];this.deletedLegends=[]}h(b,a);b.prototype.make=function(a){var b,c,e,g,h,m,f,l,q,n,p,w;e=a.domains;l=a.layers;g=a.guideSpec;p=a.scales;f=a.layerMapping;this.position=a.position;c=a.dims;null==this.postion&&(this.postion="right");if("none"!==this.position){b=this._mergeAes(e,l);for(m=0;m<this.legends.length;){q=this.legends[m];n=!0;for(h=0;h<b.length;){a=b[h];if(_.isEqual(a,q.aes)){b.splice(h,1);n=!1;break}h++}n?(this.deletedLegends.push(q),this.legends.splice(m,1)):m++}q=0;for(h=b.length;q<h;q++)a=
b[q],this.legends.push(d.guide.legend(a,this.position));m=this.legends;n=[];b=0;for(h=m.length;b<h;b++)q=m[b],a=q.aes[0],n.push(q.make({domain:e[a],position:this.position,guideSpec:null!=(w=g[a])?w:{},type:p[a].tickType(),mapping:f,keys:d.getLabel(l,a),dims:c}));return n}};b.prototype._mergeAes=function(a,b){var c,e,g,h,f,l,q;f=[];for(c in a)if(!(0<=m.call(d["const"].noLegend,c)||(g=_.map(b,function(a){return a.mapping[c]}),_.all(g,_.isUndefined)))){h=!1;l=0;for(q=f.length;l<q;l++)if(e=f[l],_.isEqual(e.mapped,
g)){e.aes.push(c);h=!0;break}h||f.push({aes:[c],mapped:g})}return _.pluck(f,"aes")};b.prototype.getDimension=function(a){var b,c,d;b={};if("left"===(c=this.position)||"right"===c)b[this.position]=this._leftrightWidth(a);else if("top"===(d=this.position)||"bottom"===d)b[this.position]=this._topbottomHeight(a);return b};b.prototype._leftrightWidth=function(a){var b,c,d,e,g,h,m,f;e=a.chartHeight;g=0;b=10;c=0;f=this.legends;h=0;for(m=f.length;h<m;h++)d=f[h],d=d.getDimension(a),d.height+c>e&&(b+=g+5,g=
c=0),d.width>g&&(g=d.width),c+=d.height;return b+g};b.prototype._topbottomHeight=function(a){var b,c,d,e,g;c=10;g=this.legends;d=0;for(e=g.length;d<e;d++)b=g[d],b=b.getDimension(a),c+=b.height+10;return c};b.prototype.render=function(a,b,c){var d,e,g,h,m;e=b();m=this.deletedLegends;g=0;for(h=m.length;g<h;g++)d=m[g],d.dispose(e);this.deletedLegends=[];if("left"===this.position||"right"===this.position)return this._renderV(a,b,c);if("top"===this.position||"bottom"===this.position)return this._renderH(a,
b,c)};b.prototype._renderV=function(a,b,c){var d,e,g,h,m,f,l,q,n,w,B,F,G;d=a.paddingTop+a.guideTop;e="left"===this.position?a.paddingLeft:a.width-a.guideRight-a.paddingRight;m=0;h=a.height-a.guideTop-a.paddingTop;q=10;l="right"===this.position?c.right:0;F=this.legends;G=[];w=0;for(B=F.length;w<B;w++)g=F[w],f=g.getDimension(a),f.height+c.y>h&&(l+=m+5,m=q=0),f.width>m&&(m=f.width),n={x:l+e,y:q+d},g.render(b(n,!1,!1),m),G.push(q+=f.height);return G};b.prototype._renderH=function(a,b,c){var d,e,g,h,m,
f;d=a.paddingLeft;e="top"===this.position?a.paddingTop:a.height-a.guideBottom-a.paddingBottom;e={x:d,y:"top"===this.position?c.top+e:c.bottom+e+10};m=this.legends;f=[];g=0;for(h=m.length;g<h;g++)c=m[g],d=c.getDimension(a),c.render(b(e,!1,!1)),f.push(e.y+=d.height+10);return f};b.prototype.dispose=function(a){var b,c,d,e,g;e=this.legends;g=[];c=0;for(d=e.length;c<d;c++)b=e[c],g.push(b.dispose(a));return g};return b}(d.GuideSet);r=function(a){function c(a){this.aes=a;this._makeEvtData=q(this._makeEvtData,
this);this._makeTick=q(this._makeTick,this);this.geometry=new d.Geometry("guide")}h(c,a);c.prototype.TITLEHEIGHT=15;c.prototype.TICKHEIGHT=12;c.prototype.SPACING=10;c.prototype.make=function(a){var b,c,e,g,h;b=a.domain;e=a.type;c=a.guideSpec;this.mapping=a.mapping;this.position=a.position;a=a.keys;this.titletext=null!=(g=c.title)?g:a;return h=d.tick.make(b,c,e),this.ticks=h.ticks,h};c.prototype.calculate=function(){var a,b,c,d,e;b={};b.title={marks:{0:this._makeTitle(this.titletext)},evtData:{aes:this.aes[0],
value:"legendTitle"}};e=this.ticks;for(c in e)a=e[c],d={},d.tick=this._makeTick(a),d.text=this._makeLabel(a),a=this._makeEvtData(a),b[c]={marks:d,evtData:a};return b};c.prototype.render=function(a){this.geometry.set(this.calculate());return this.geometry.render(a)};c.prototype.dispose=function(a){return this.geometry.dispose(a)};c.prototype._makeTitle=function(a,c){null==c&&(c={x:0,y:0});return{type:"text",x:b.identity(c.x+5),y:b.identity(c.y),color:b.identity("black"),text:a,"text-anchor":"start"}};
c.prototype._makeLabel=function(a,c){c||(c={x:0,y:15+12*a.index});return{type:"text",x:b.identity(c.x+20),y:b.identity(c.y+1),color:b.identity("black"),text:a.value,"text-anchor":"start"}};c.prototype._makeTick=function(a,c){var e,g,h,f;c||(c={x:0,y:15+12*a.index});g={type:"circle",x:b.identity(c.x+10),y:b.identity(c.y),color:b.identity("steelblue")};f=this.mapping;for(e in f)h=f[e],0<=m.call(d["const"].noLegend,e)||(h=h[0],0<=m.call(this.aes,e)?g[e]=a.location:null!=h.type&&"const"===h.type?g[e]=
b.identity(h.value):_.isObject(h)?g[e]=b.identity(d["const"].defaults[e]):g[e]=b.identity(h));_.isObject(g.size)&&(g.size=b.identity(5));return g};c.prototype._makeEvtData=function(a){var b,c,d,e,g,h,f;c={};f=this.mapping;for(b in f)for(e=f[b],g=0,h=e.length;g<h;g++)d=e[g],0<=m.call(this.aes,b)&&"map"===d.type&&(c[d.value]=_.extend(a.evtData,{value:a.location,aes:b}));return c};return c}(d.Guide);c=function(b){function c(){return a=c.__super__.constructor.apply(this,arguments)}h(c,b);c.prototype.make=
function(a){var b;c.__super__.make.call(this,a);this.height=this.TITLEHEIGHT+this.SPACING+this.TICKHEIGHT*_.size(this.ticks);b=d.strSize(this.titletext);a=_.max(_.map(this.ticks,function(a){return d.strSize(a.value)}));return this.maxwidth=Math.max(b,a)};c.prototype.getDimension=function(){return{position:this.position,height:this.height,width:15+this.maxwidth}};return c}(r);f=function(a){function b(){return e=b.__super__.constructor.apply(this,arguments)}h(b,a);b.prototype.TICKSPACING=25;b.prototype.make=
function(a){var c,e,g,h;b.__super__.make.call(this,a);this.maxwidth=a.dims.width;this.height=this.TITLEHEIGHT+this.SPACING;a=0;this.height+=this.TICKHEIGHT;h=this.ticks;e=0;for(g=h.length;e<g;e++)c=h[e],c=d.strSize(c.value)+this.TICKSPACING,a+c<this.maxwidth?a+=c:(this.height+=this.TICKHEIGHT,a=c);return null};b.prototype.calculate=function(){var a,b,c,e,g,h,m;b={};b.title={marks:{0:this._makeTitle(this.titletext)}};g={x:0,y:this.TITLEHEIGHT};m=this.ticks;for(c in m)h=m[c],e={},e.tick=this._makeTick(h,
g),e.text=this._makeLabel(h,g),a=this._makeEvtData(h,g),b[c]={marks:e,evtData:a},a=d.strSize(h.value)+this.TICKSPACING,g.x+a<this.maxwidth?g.x+=a:(g.x=0,g.y+=this.TICKHEIGHT);return b};b.prototype.getDimension=function(){return{position:this.position,height:this.height,width:"all"}};return b}(r)}).call(this);(function(){var f,r,l,c,b,a,e,g,h,m,q,p,n,u,k,t,s,v=function(a,b){return function(){return a.apply(b,arguments)}},z={}.hasOwnProperty,x=function(a,b){function c(){this.constructor=a}for(var d in b)z.call(b,
d)&&(a[d]=b[d]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a};m=function(){function a(b){this.f=null}a.prototype.make=function(a){this.domain=a;this.compare=d.domain.compare(a);if(!a)return this._makeNone();switch(a.type){case "num":return this._makeNum();case "date":return this._makeDate();case "cat":return this._makeCat()}};a.prototype._makeNone=function(){throw d.error.impl("You are using a scale that does not support null values");};a.prototype._makeNum=function(){throw d.error.impl("You are using a scale that does not support numbers");
};a.prototype._makeDate=function(){throw d.error.impl("You are using a scale that does not support dates");};a.prototype._makeCat=function(){throw d.error.impl("You are using a scale that does not support categories");};a.prototype.tickType=function(){if(!this.domain)return this._tickNone();switch(this.domain.type){case "num":return this._tickNum();case "date":return this._tickDate();case "cat":return this._tickCat()}};a.prototype._tickNone=function(){return"none"};a.prototype._tickNum=function(){return"num"};
a.prototype._tickDate=function(){return"date"};a.prototype._tickCat=function(){return"cat"};a.prototype._identityWrapper=function(a){return function(b){return _.isObject(b)&&"scalefn"===b.t&&"identity"===b.f?b.v:a(b)}};return a}();f=function(a){function b(a){this._catWrapper=v(this._catWrapper,this);this._dateWrapper=v(this._dateWrapper,this);this._numWrapper=v(this._numWrapper,this);this.finv=this.f=null}x(b,a);b.prototype.make=function(a,c,d){this.range=c;this.space=d;_.isNumber(this.space)||(this.space=
0.05);return b.__super__.make.call(this,a)};b.prototype._makeNone=function(){var a,b=this;a=(this.range.max-this.range.min)*this.space;this.f=this._NaNCheckWrap(function(c){var d;if(_.isObject(c))switch(d=function(b){return(this.range.max-this.range.min-2*a)/b},c.f){case "identity":return c.v;case "middle":return b.range.max/2+b.range.min/2;case "max":return b.range.max;case "min":return b.range.min;case "upper":return c.m?b.range.min+a+(c.n+1)*d(c.m):b.range.max-a;case "lower":return c.m?b.range.min+
a+c.n*d(c.m):b.range.min+a}else return b.range.max/2+b.range.min/2});return this.finv=function(){return{}}};b.prototype._NaNCheckWrap=function(a){return function(b){if(d.isDefined(b)){b=a(b);if(isNaN(b)||Infinity===b||-Infinity===b)throw d.error.scale("Scale outputed a value that is not finite.");return b}}};b.prototype._numWrapper=function(a,b){var c=this;return this._NaNCheckWrap(function(e){var k,g,h;if(_.isObject(e)){if("scalefn"===e.t)switch(e.f){case "identity":return e.v;case "middle":return b(e.v+
a.bw/2);case "max":return c.range.max+e.v;case "min":return c.range.min+e.v;case "upper":case "lower":h=b(e.v+a.bw);k=b(e.v);g=(h-k)*c.space;if("upper"===e.f&&!e.m)return h-g;if("lower"===e.f&&!e.m)return k+g;h=(h-k-2*g)/e.m;if("upper"===e.f)return k+g+(e.n+1)*h;if("lower"===e.f)return k+g+e.n*h}throw d.error.input("Unknown object "+e+" is passed to a scale");}return b(e)})};b.prototype._dateWrapper=function(a,b){var c=this;return this._NaNCheckWrap(function(e){var k,g,h,m;if(_.isObject(e)){if("scalefn"===
e.t)switch(e.f){case "identity":return e.v;case "max":return c.range.max+e.v;case "min":return c.range.min+e.v;case "upper":case "middle":case "lower":m=function(a,b,c){var d;null==c&&(c=0);d=moment.unix(e.v).startOf(b);d[b](a*Math.floor(d[b]()/a)+a*c);return d.unix()};h=b(function(){switch(a.bw){case "week":return moment.unix(e.v).day(7).unix();case "twomonth":return m(2,"month");case "quarter":return m(4,"month");case "sixmonth":return m(6,"month");case "twoyear":return m(2,"year");case "fiveyear":return m(5,
"year");case "decade":return m(10,"year");default:return moment.unix(e.v).endOf(a.bw).unix()}}());k=b(function(){switch(a.bw){case "week":return moment.unix(e.v).day(0).unix();case "twomonth":return m(2,"month",1);case "quarter":return m(4,"month",1);case "sixmonth":return m(6,"month",1);case "twoyear":return m(2,"year",1);case "fiveyear":return m(5,"year",1);case "decade":return m(10,"year",1);default:return moment.unix(e.v).startOf(a.bw).unix()}}());g=(h-k)*c.space;if("middle"===e.f)return h/2+
k/2;if("upper"===e.f&&!e.m)return h-g;if("lower"===e.f&&!e.m)return k+g;h=(h-k-2*g)/e.m;if("upper"===e.f)return k+g+(e.n+1)*h;if("lower"===e.f)return k+g+e.n*h}throw d.error.input("Unknown object "+e+" is passed to a scale");}return b(e)})};b.prototype._catWrapper=function(a,b){var c=this;return this._NaNCheckWrap(function(e){var k,g,h;g=a*c.space;if(_.isObject(e)){if("scalefn"===e.t)switch(e.f){case "identity":return e.v;case "max":return c.range.max+e.v;case "min":return c.range.min+e.v;case "upper":case "middle":case "lower":h=
b(e.v)+a;k=b(e.v);if("middle"===e.f)return h/2+k/2;if("upper"===e.f&&!e.m)return h-g;if("lower"===e.f&&!e.m)return k+g;h=(h-k-2*g)/e.m;if("upper"===e.f)return k+g+(e.n+1)*h;if("lower"===e.f)return k+g+e.n*h}throw d.error.input("Unknown object "+e+" is passed to a scale");}return b(e)+a/2})};return b}(m);a=function(a){function b(){return q=b.__super__.constructor.apply(this,arguments)}x(b,a);b.prototype._makeNum=function(){var a,b;b=d.linear(this.domain.min,this.range.min,this.domain.max,this.range.max);
a=d.linear(this.range.min,this.domain.min,this.range.max,this.domain.max);this.f=this._numWrapper(this.domain,b);return this.finv=function(b,c){var e;e=[a(b),a(c)];return{ge:_.min(e),le:_.max(e)}}};b.prototype._makeDate=function(){var a,b;b=d.linear(this.domain.min,this.range.min,this.domain.max,this.range.max);a=d.linear(this.range.min,this.domain.min,this.range.max,this.domain.max);this.f=this._dateWrapper(this.domain,b);return this.finv=function(b,c){var e;e=[a(b),a(c)];return{ge:_.min(e),le:_.max(e)}}};
b.prototype._makeCat=function(){var a,b=this;a=(this.range.max-this.range.min)/this.domain.levels.length;this.f=this._catWrapper(a,function(c){c=_.indexOf(b.domain.levels,c);return-1===c?null:b.range.min+c*a});return this.finv=function(c,e){var d;e<c&&(d=[e,c],c=d[0],e=d[1]);return{"in":b.domain.levels.slice(Math.floor(c/a),+Math.floor(e/a)+1||9E9)}}};return b}(f);e=function(a){function b(){return p=b.__super__.constructor.apply(this,arguments)}x(b,a);b.prototype._makeNum=function(){var a,b,c,e;if(0>
this.domain.min)throw d.error.input("Log scale cannot handle zero or negative input.");a=Math.log;c=d.linear(a(this.domain.min),this.range.min,a(this.domain.max),this.range.max);this.f=this._numWrapper(this.domain,function(b){return c(a(b))});e=d.linear(this.range.min,a(this.domain.min),this.range.max,a(this.domain.max));b=function(a){return Math.exp(e(a))};return this.finv=function(a,c){var e;e=[b(a),b(c)];return{ge:_.min(e),le:_.max(e)}}};b.prototype._tickNum=function(){return"num-log"};return b}(f);
f=function(a){function b(){this._makeDate=v(this._makeDate,this);this._makeNum=v(this._makeNum,this);return n=b.__super__.constructor.apply(this,arguments)}x(b,a);b.prototype._makeNum=function(){var a,b,c;a=0===this.domain.min?0:1;b=Math.sqrt;c=d.linear(b(this.domain.min),a,b(this.domain.max),10);return this.f=this._identityWrapper(function(a){return c(b(a))})};b.prototype._makeDate=function(){return this._makeNum()};return b}(m);g=function(a){function b(){this._makeDate=v(this._makeDate,this);this._makeNum=
v(this._makeNum,this);return u=b.__super__.constructor.apply(this,arguments)}x(b,a);b.prototype._makeNum=function(){return this.f=this._identityWrapper(d.linear(this.domain.min,0===this.domain.min?0:0.1,this.domain.max,1))};b.prototype._makeDate=function(){return this._makeNum()};return b}(m);h=function(a){function b(){this._makeCat=v(this._makeCat,this);return k=b.__super__.constructor.apply(this,arguments)}x(b,a);b.prototype._makeCat=function(){var a,b,c,e=this;c=this.domain.levels.length;if(9>=
c)return a="#E41A1C #377EB8 #4DAF4A #984EA3 #FF7F00 #FFFF33 #A65628 #F781BF #999999".split(" "),this.f=function(b){b=_.indexOf(e.domain.levels,b);return a[b]};b=function(a){return _.indexOf(e.domain.levels,a)/c+1/(2*c)};return this.f=function(a){return"undefined"!==typeof Raphael&&null!==Raphael?Raphael.hsl(b(a),0.5,0.5):"hsl("+b(a)+",0.5,0.5)"}};return b}(m);l=function(a){function b(a){this._makeDate=v(this._makeDate,this);this._makeNum=v(this._makeNum,this);this.lower=a.lower;this.upper=a.upper}
x(b,a);b.prototype._makeNum=function(){var a,b,c,e,k;c="undefined"!==typeof Raphael&&null!==Raphael?Raphael.color(this.lower):this.lower;k="undefined"!==typeof Raphael&&null!==Raphael?Raphael.color(this.upper):this.upper;e=d.linear(this.domain.min,c.r,this.domain.max,k.r);b=d.linear(this.domain.min,c.g,this.domain.max,k.g);a=d.linear(this.domain.min,c.b,this.domain.max,k.b);return this.f=this._identityWrapper(function(c){return"undefined"!==typeof Raphael&&null!==Raphael?Raphael.rgb(e(c),b(c),a(c)):
"rgb("+e(c)+","+b(c)+","+a(c)+")"})};b.prototype._makeDate=function(){return this._makeNum()};return b}(m);c=function(a){function b(a){this._makeDate=v(this._makeDate,this);this._makeCat=v(this._makeCat,this);this._makeNum=v(this._makeNum,this);this.lower=a.lower;this.middle=a.middle;this.upper=a.upper;this.midpoint=a.midpoint;null==this.midpoint&&(this.midpoint=0)}x(b,a);b.prototype._makeNum=function(){var a,b,c,e,k,g,h,m,t,s=this;k="undefined"!==typeof Raphael&&null!==Raphael?Raphael.color(this.lower):
this.lower;g="undefined"!==typeof Raphael&&null!==Raphael?Raphael.color(this.middle):this.middle;t="undefined"!==typeof Raphael&&null!==Raphael?Raphael.color(this.upper):this.upper;h=d.linear(this.domain.min,k.r,this.midpoint,g.r);c=d.linear(this.domain.min,k.g,this.midpoint,g.g);a=d.linear(this.domain.min,k.b,this.midpoint,g.b);m=d.linear(this.midpoint,g.r,this.domain.max,t.r);e=d.linear(this.midpoint,g.g,this.domain.max,t.g);b=d.linear(this.midpoint,g.b,this.domain.max,t.b);return this.f=this._identityWrapper(function(d){return d<
s.midpoint?"undefined"!==typeof Raphael&&null!==Raphael?Raphael.rgb(h(d),c(d),a(d)):"rgb("+h(d)+","+c(d)+","+a(d)+")":"undefined"!==typeof Raphael&&null!==Raphael?Raphael.rgb(m(d),e(d),b(d)):"rgb("+m(d)+","+e(d)+","+b(d)+")"})};b.prototype._makeCat=function(){};b.prototype._makeDate=function(){return this._makeNum()};return b}(m);r=function(a){function b(a){this["function"]=a["function"]}x(b,a);b.prototype.make=function(a){this.domain=a;this.compare=d.domain.compare(a);return this.f=this._identityWrapper(this["function"])};
return b}(m);(function(a){function b(){return t=b.__super__.constructor.apply(this,arguments)}x(b,a);b.prototype._makeCat=function(){};return b})(m);b=function(a){function b(){return s=b.__super__.constructor.apply(this,arguments)}x(b,a);b.prototype.make=function(a){this.domain=a;this.compare=function(a,b){return 0};return this.f=this._identityWrapper(function(a){return a})};return b}(m);d.scale={};d.scale.Base=m;d.scale.classes={linear:a,log:e,area:f,palette:h,gradient:l,gradient2:c,identity:b,opacity:g,
custom:r};d.scale.make=function(a){if(a.type in d.scale.classes)return new d.scale.classes[a.type](a);throw d.error.defn("No such scale "+a.type+".");}}).call(this);(function(){var f,r=[].indexOf||function(d){for(var c=0,b=this.length;c<b;c++)if(c in this&&this[c]===d)return c;return-1};d.scaleset=function(d,c,b){return new f(d,c,b)};f=function(){function f(c,b){this.coord=b;this.ranges=c;this.axes=d.guide.axes();this.legends=d.guide.legends()}f.prototype.make=function(c,b,a){this.guideSpec=c;this.layers=
a;this.domains=b;this.scales=this._makeScales(c,b,this.ranges);this.reverse={x:this.scales.x.finv,y:this.scales.y.finv};return this.layerMapping=this._mapLayers(a)};f.prototype.setRanges=function(c){var b,a,e,d;this.ranges=c;e=["x","y"];d=[];b=0;for(a=e.length;b<a;b++)c=e[b],d.push(this.scales[c].make(this.domains[c],this.ranges[c],this.getSpec(c).padding));return d};f.prototype._makeScales=function(c,b,a){var e,g,h,m,f,l,n,u;g=function(a){var b,e;if(c&&null!=c[a]&&null!=c[a].scale){if(_.isFunction(c[a].scale))return{type:"custom",
"function":c[a].scale};b=function(){switch(a){case "x":return["linear","log"];case "y":return["linear","log"];case "color":return["palette","gradient","gradient2"];case "size":return["linear","log"];case "opacity":return["opacity"];case "shape":return["linear","log","area"];case "id":return["identity"];case "text":return["identity"];default:return[]}}();if(e=c[a].scale.type,0<=r.call(b,e))return c[a].scale;throw d.error.scale("Aesthetic "+a+" cannot have scale "+c[a].scale.type);}return null};e={};
e.x=d.scale.make(null!=(h=g("x"))?h:{type:"linear"});e.x.make(b.x,a.x,this.getSpec("x").padding);e.y=d.scale.make(null!=(m=g("y"))?m:{type:"linear"});e.y.make(b.y,a.y,this.getSpec("y").padding);null!=b.color&&("cat"===b.color.type?e.color=d.scale.make(null!=(f=g("color"))?f:{type:"palette"}):(a={type:"gradient",upper:"steelblue",lower:"red"},e.color=d.scale.make(null!=(l=g("color"))?l:a)),e.color.make(b.color));null!=b.size&&(e.size=d.scale.make(null!=(n=g("size"))?n:{type:"area"}),e.size.make(b.size));
null!=b.opacity&&(e.opacity=d.scale.make(null!=(u=g("opacity"))?u:{type:"opacity"}),e.opacity.make(b.opacity));e.text=d.scale.make({type:"identity"});e.text.make();return e};f.prototype.fromPixels=function(c,b){var a,e,d,h,m,f,l;null!=c&&null!=b&&(a=this.coord.getAes(c,b,this.reverse),d=a.x,h=a.y);e={};l=this.layerMapping.x;m=0;for(f=l.length;m<f;m++)a=l[m],null!=a.type&&"map"===a.type&&(e[a.value]=null!=d?d:null);f=this.layerMapping.y;d=0;for(m=f.length;d<m;d++)a=f[d],null!=a.type&&"map"===a.type&&
(e[a.value]=null!=h?h:null);return e};f.prototype.getSpec=function(c){return null!=this.guideSpec&&null!=this.guideSpec[c]?this.guideSpec[c]:{}};f.prototype.makeGuides=function(c,b){var a,e;this.makeAxes();this.makeTitles(null!=(a=c.title)?a:"");this.makeLegends(null!=(e=c.legendPosition)?e:"right",b);return{axes:this.axes,legends:this.legends,title:this.title}};f.prototype.renderGuides=function(c,b,a){this.axes.render(c,b,a);this.renderTitles(c,b);return this.renderLegends(c,b)};f.prototype.disposeGuides=
function(c){this.axes.dispose(c);this.legends.dispose(c);this.titles.x.dispose(c);this.titles.y.dispose(c);this.titles.main.dispose(c);return this.titles={}};f.prototype.makeTitles=function(c){null==this.titles&&(this.titles={x:d.guide.title(this.coord.axisType("x")),y:d.guide.title(this.coord.axisType("y")),main:d.guide.title("main")});this.titles.main.make({title:c,guideSpec:{},position:"top"});this.titles.x.make({guideSpec:this.getSpec("x"),title:d.getLabel(this.layers,"x")});this.titles.y.make({guideSpec:this.getSpec("y"),
title:d.getLabel(this.layers,"y")})};f.prototype.titleOffset=function(c){var b,a,e,d,h,m,f;c={};m=this.titles;for(a in m)for(b=m[a],e=b.getDimension(),f=["left","right","top"," bottom"],d=0,h=f.length;d<h;d++)b=f[d],e[b]&&(null==c[b]&&(c[b]=0),c[b]+=e[b]);return c};f.prototype.renderTitles=function(c,b){var a;b=b({},!1,!1);a=this.axesOffset(c);this.titles.x.render(b,c,a);this.titles.y.render(b,c,a);this.titles.main.render(b,c,a)};f.prototype.makeAxes=function(){var c;return this.axes.make({domains:{x:this.domains.x,
y:this.domains.y},coord:this.coord,scales:this.scales,specs:null!=(c=this.guideSpec)?c:{},labels:{x:d.getLabel(this.layers,"x"),y:d.getLabel(this.layers,"y")}})};f.prototype.axesOffset=function(c){return this.axes.getDimension(c)};f.prototype._mapLayers=function(c){var b,a,e,g,h;a={};h=d["const"].aes;e=0;for(g=h.length;e<g;e++)b=h[e],a[b]=_.map(c,function(a){return null!=a.mapping[b]?{type:"map",value:a.mapping[b]}:null!=a.consts[b]?{type:"const",value:a.consts[b]}:a.defaults[b]});return a};f.prototype.makeLegends=
function(c,b){null==c&&(c="right");return this.legends.make({domains:this.domains,layers:this.layers,guideSpec:this.guideSpec,scales:this.scales,layerMapping:this.layerMapping,position:c,dims:b})};f.prototype.legendOffset=function(c){return this.legends.getDimension(c)};f.prototype.renderLegends=function(c,b){var a,e,d,h,f,l,p,n,u;d={left:0,right:0,top:0,bottom:0};a=this.axesOffset(c);h=this.titleOffset(c);p=["left","right","top","bottom"];f=0;for(l=p.length;f<l;f++)e=p[f],d[e]+=null!=(n=a[e])?n:
0,d[e]+=null!=(u=h[e])?u:0;this.legends.render(c,b,d)};return f}()}).call(this);(function(){var f,r,l,c,b,a,e,g,h,m={}.hasOwnProperty,q=function(a,b){function c(){this.constructor=a}for(var e in b)m.call(b,e)&&(a[e]=b[e]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a},p=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},n=function(a,b){return function(){return a.apply(b,arguments)}};d.data=function(a){var b,c;c=void 0;
_.isObject(a)&&"data"in a&&(7>(b=_.keys(a).length)&&"meta"in a||5>b)?(b=a.data,c=a.meta):b=a;switch(g(b)){case "json-object":case "json-grid":case "json-array":return d.data.json(b,c,void 0);case "url":return d.data.url(b,c,void 0);case "csv":return d.data.csv(b,c);case "api":return d.data.api(b);default:throw d.error.data("Unknown data format.");}};d.data.json=function(a,b,e){return new c({data:a,meta:b,type:e})};d.data.csv=function(a,b){return new c({data:a,meta:b,csv:"csv"})};d.data.url=function(a,
b,c){return new l({url:a,computeBackend:b,limit:c})};d.data.api=function(a){return new r({apiFun:a})};g=function(a){if(_.isArray(a))return _.isArray(a[0])?"json-grid":"json-array";if(_.isObject(a))return"json-object";if(_.isString(a))return d.isURI(a)?"url":"csv";if(_.isFunction(a))return"api";throw d.error.data("Unknown data format.");};b=function(a,b){var c,e,g,h,f,m,l;if(0<a.length){g=_.union(_.keys(b),_.keys(a[0]));c=a.slice(0,100);h=0;for(f=g.length;h<f;h++)e=g[h],null==b[e]&&(b[e]={}),b[e].type||
(b[e].type=d.type.impute(_.pluck(c,e)));h=0;for(m=a.length;h<m;h++)for(c=a[h],f=0,l=g.length;f<l;f++)e=g[f],c[e]=d.type.coerce(c[e],b[e]);e=g;g=a}else e=_.keys(b),g=[];return{key:e,raw:g,meta:b}};a=function(a,b){var c,e,g,h,f,m,l,q,n,p,w;m=[];if(0<a.length){h=b&&_.isArray(b)?b:b&&_.isObject(b)?_.keys(b):_.keys(a[0]);if(_.isArray(b)||!_.isObject(b))b={};c=a.slice(0,100);e=f=0;for(l=h.length;f<l;e=++f)g=h[e],null==b[g]&&(b[g]={}),b[g].type||(b[g].type=d.type.impute(_.pluck(c,e)));q=0;for(p=a.length;q<
p;q++){c=a[q];f={};e=n=0;for(w=c.length;n<w;e=++n)l=c[e],g=h[e],f[g]=d.type.coerce(l,b[g]);m.push(f)}g=h;e=m}else g=_.keys(b),e=[];return{key:g,raw:e,meta:b}};h=function(a,b){var c,e,g,h,f,m,l,q,n;g=_.keys(a);f=[];m=0;for(e=g.length;m<e;m++)c=g[m],null==b[c]&&(b[c]={}),b[c].type||(b[c].type=d.type.impute(a[c].slice(0,100)));if(0<g.length&&(e=a[g[0]].length,0<e))for(c=m=0,n=e-1;0<=n?m<=n:m>=n;c=0<=n?++m:--m){h={};l=0;for(q=g.length;l<q;l++)e=g[l],h[e]=d.type.coerce(a[e][c],b[e]);f.push(h)}return{key:g,
raw:f,meta:b}};e=function(a,c){return b(d.csv.parse(a),c)};f=function(){function a(){this.raw=null;this.meta={};this.key=[];this.subscribed=[];this.computeBackend=!1}a.prototype.isData=!0;a.prototype.update=function(){var a,b,c,e,d;e=this.subscribed;d=[];b=0;for(c=e.length;b<c;b++)a=e[b],d.push(a());return d};a.prototype.subscribe=function(a){if(-1===_.indexOf(this.subscribed,a))return this.subscribed.push(a)};a.prototype.unsubscribe=function(a){return this.subscribed.splice(_.indexOf(this.subscribed,
a),1)};a.prototype.keys=function(){return this.key};a.prototype.rename=function(){return!1};a.prototype.renameMany=function(){return!1};a.prototype.remove=function(){return!1};a.prototype.filter=function(){return!1};a.prototype.sort=function(){return!1};a.prototype.derive=function(){return!1};a.prototype.get=function(a){if(this.raw)return _.pluck(this.raw,a);throw d.error.data("Data has not been fetched or is undefined.");};a.prototype.len=function(){if(this.raw)return this.raw.length;throw d.error.data("Data has not been fetched or is undefined.");
};a.prototype.getObject=function(a){if(this.raw)return this.raw[a];throw d.error.data("Data has not been fetched or is undefined.");};a.prototype.max=function(a){return _.max(this.get(a))};a.prototype.min=function(a){return _.min(this.get(a))};a.prototype.getMeta=function(a){if(this.meta)return this.meta[a]};a.prototype.type=function(a){if(a in this.meta)return a=this.meta[a].type,"num"===a?"number":a;throw d.error.defn("Data does not have column "+a+".");};return a}();c=function(c){function k(a){k.__super__.constructor.call(this);
this._setData(a)}q(k,c);k.prototype.getData=function(a){return a(null,this)};k.prototype.update=function(a){this._setData(a);return k.__super__.update.call(this)};k.prototype._setData=function(c){var k,f,m;_.isObject(c)&&4>_.keys(c).length&&"data"in c?(k=c.data,f=null!=(m=c.meta)?m:{}):(k=c,f={});m=function(){var m;switch(null!=(m=c.type)?m:g(k)){case "json-object":return h(k,f);case "json-grid":return a(k,f);case "json-array":return b(k,f);case "csv":return e(k,f);default:throw d.error.data("Unknown data format.");
}}();this.key=m.key;this.raw=m.raw;this.meta=m.meta;return this.data=this.raw};k.prototype._checkRename=function(a,b){if(""===b)throw d.error.defn("Column names cannot be an empty string");if(-1===_.indexOf(this.key,a))throw d.error.defn("The key "+a+" doesn't exist!");if(-1!==_.indexOf(this.key,b))throw d.error.defn("The key "+b+" already exists!");};k.prototype.rename=function(a,b,c){var e,d,g;null==c&&(c=!1);a=a.toString();b=b.toString();if(a===b)return!0;c||this._checkRename(a,b);g=this.raw;e=
0;for(d=g.length;e<d;e++)c=g[e],c[b]=c[a],delete c[a];c=_.indexOf(this.key,a);this.key[c]=b;this.meta[b]=this.meta[a];delete this.meta[a];return!0};k.prototype.renameMany=function(a){var b,c;for(b in a)c=a[b],b!==c&&this._checkRename(b,c);for(b in a)c=a[b],b!==c&&this.rename(b,c,!0);return!0};k.prototype.remove=function(a){var b,c,e,d;b=_.indexOf(this.key,a);if("-1"===b)return!1;this.key.splice(b,1);delete this.meta[a];d=this.raw;c=0;for(e=d.length;c<e;c++)b=d[c],delete b[a];return!0};k.prototype.filter=
function(a){var b,c,e,g,h;a=_.isFunction(a)?a:_.isString(a)?new Function("d","with(d) { return "+a+";}"):function(){return!0};c=[];h=this.raw;e=0;for(g=h.length;e<g;e++)b=h[e],a(b)&&c.push(b);return d.data.json(c,this.meta)};k.prototype.sort=function(a,b){var c,e,g;g=this.type(a);c=_.clone(this.raw);e=d.type.compare(g);c.sort(function(b,c){return e(b[a],c[a])});b&&c.reverse();return d.data.json(c,this.meta)};k.prototype.derive=function(a,b,c){var e,g,h,k,f,m,l,q;null==c&&(c={});g=c.dryrun;e=c.context;
null==b&&(b=_uniqueId("var_"));null==e&&(e={});_.isFunction(a)?(c=a,h=!1):(h=!0,c=new Function("d","with(this) { with(d) { return "+(a||'""')+";}}"));q=this.raw;m=0;for(l=q.length;m<l;m++){k=q[m];f=c.call(e,k);if(_.isFunction(f))throw d.error.defn("Derivation function returned another function.");k[b]=f}if(g)return{success:!0,values:_.pluck(this.raw.slice(0,11),b)};0<=p.call(this.key,b)||this.key.push(b);this.meta[b]={type:d.type.impute(_.pluck(this.raw.slice(0,101),b)),derived:!0};h&&(this.meta[b].formula=
a);return b};return k}(f);l=function(c){function k(a){this.getData=n(this.getData,this);k.__super__.constructor.call(this);this.url=a.url;this.computeBackend=a.computeBackend;this.limit=a.limit;null==this.computeBackend&&(this.computeBackend=!1)}q(k,c);k.prototype.getData=function(c,k){var f,m,l=this;if(null!=this.raw&&!this.computeBackend)return c(null,this);f=-1===_.indexOf(this.url,"?")?"?":"&";m=this.url;this.limit&&(m+=""+f+"limit="+this.limit);k&&(m+="&spec="+encodeURIComponent(JSON.stringify(k)));
return d.text(m,function(k){var f,m,q;try{k=JSON.parse(k)}catch(n){}_.isObject(k)&&4>_.keys(k).length&&"data"in k?(f=k.data,m=null!=(q=k.meta)?q:{}):(f=k,m={});k=function(){switch(g(f)){case "json-object":return h(f,m);case "json-grid":return a(f,m);case "json-array":return b(f,m);case "csv":return e(f,m);default:throw d.error.data("Unknown data format.");}}();l.key=k.key;l.raw=k.raw;l.meta=k.meta;l.data=l.raw;return c(null,l)})};k.prototype.update=function(a){this.raw=null;return k.__super__.update.call(this)};
k.prototype.renameMany=function(a){return 0===_.keys(a).length};return k}(f);r=function(c){function k(a){this.getData=n(this.getData,this);k.__super__.constructor.call(this);this.apiFun=a.apiFun;this.computeBackend=!0}q(k,c);k.prototype.getData=function(c,k){var f=this;return this.apiFun(k,function(k,m){var l,q,n,s,u;if(null!=k)return c(k,null);if(_.isString(m))try{m=JSON.parse(m)}catch(w){q=w}q=null;try{l=m.data,n=null!=(s=m.meta)?s:{},u=function(){switch(g(l)){case "json-object":return h(l,n);case "json-grid":return a(l,
n);case "json-array":return b(l,n);case "csv":return e(l,n);default:throw d.error.data("Unknown data format.");}}(),f.key=u.key,f.raw=u.raw,f.meta=u.meta,f.data=f.raw}catch(B){q=B}return c(q,f)})};k.prototype.update=function(a){this.raw=null;return k.__super__.update.call(this)};k.prototype.renameMany=function(a){return 0===_.keys(a).length};return k}(f)}).call(this);(function(){var f,r,l,c,b,a,e,g,h,m,q,p=function(a,b){return function(){return a.apply(b,arguments)}},n=[].indexOf||function(a){for(var b=
0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};f=function(){function a(b,c,e,g){this.parseMethod=null!=g?g:d.parser.layerToData;this._wrap=p(this._wrap,this);this.make=p(this.make,this);this.layerMeta=_.extend({},b.meta,{_additionalInfo:b.additionalInfo});this.dataObj=b.data;this.prevSpec=null;this.strictmode=e;this.statData=null;this.metaData={}}a.prototype.make=function(a,b,c){var d,g;g=this._wrap(c);this.strictmode&&g({data:this.dataObj.raw,meta:this.dataObj.meta});if(this.dataObj.computeBackend)return d=
this.parseMethod(a,b),this.layerMeta&&(d.meta=this.layerMeta),r(d,this.dataObj,g);d=this.parseMethod(a,b);return this.dataObj.getData(function(a,b){var c,h,k,f;if(null!=a)return g(a,null);if(0<=n.call(d.select,"count(*)")){f=b.data;h=0;for(k=f.length;h<k;h++)c=f[h],c["count(*)"]=1;b.meta["count(*)"]={};b.meta["count(*)"].type="num";d.stats.stats.push({key:"count(*)",name:"count(*)",stat:"count"})}return e(d,b,g)})};a.prototype._wrap=function(a){var b=this;return function(c,e){var d,g;if(null!=c)return a(c,
null,null);d=e.data;g=e.meta;b.statData=d;b.metaData=g;return a(null,b.statData,b.metaData)}};return a}();d.DataProcess=f;d.data.process=function(a,b,c,e){a=new f(b,c);a.process(e);return a};q={bin:function(a,b,c){var e,g;g=b.name;e=b.binwidth;if("num"===c.type){if(isNaN(e))throw d.error.defn("The binwidth "+e+" is invalid for a numeric variable");e=+e;b=function(b){return b[g]=e*Math.floor(b[a]/e)};return{trans:b,meta:{bw:e,binned:!0,type:"num"}}}if("date"===c.type){if(!(0<=n.call(d["const"].timerange,
e)))throw d.error.defn("The binwidth "+e+" is invalid for a datetime variable");b=function(b){var c;c=function(c,e){var d;d=moment.unix(b[a]).startOf(e);d[e](c*Math.floor(d[e]()/c));return b[g]=d.unix()};switch(e){case "week":return b[g]=moment.unix(b[a]).day(0).unix();case "twomonth":return c(2,"month");case "quarter":return c(4,"month");case "sixmonth":return c(6,"month");case "twoyear":return c(2,"year");case "fiveyear":return c(5,"year");case "decade":return c(10,"year");default:return b[g]=moment.unix(b[a]).startOf(e).unix()}};
return{trans:b,meta:{bw:e,binned:!0,type:"date"}}}},lag:function(a,b,c){var e,d,g;g=b.name;e=b.lag;d=function(){var a,b;b=[];for(a=1;1<=e?a<=e:a>=e;1<=e?++a:--a)b.push(void 0);return b}();return{trans:function(b){d.push(b[a]);return b[g]=d.shift()},meta:{type:c.type}}}};m=function(a,b,c){return q[b.trans](a,b,null!=c?c:{})};a={lt:function(a,b){return a<b},le:function(a,b){return a<=b},gt:function(a,b){return a>b},ge:function(a,b){return a>=b},"in":function(a,b){return 0<=n.call(b,a)}};b=function(b){var c;
c=[];_.each(b,function(b,e){return _.each(b,function(b,d){var g;if(d in a)return g=function(c){return a[d](c[e],b)},c.push(g)})});return function(a){var b,e,d;e=0;for(d=c.length;e<d;e++)if(b=c[e],!b(a))return!1;return!0}};g={sum:function(a){return function(a){return _.reduce(_.without(a,void 0,null),function(a,b){return a+b},0)}},mean:function(a){return function(a){a=_.without(a,void 0,null);return _.reduce(a,function(a,b){return a+b},0)/a.length}},count:function(a){return function(a){return _.without(a,
void 0,null).length}},unique:function(a){return function(a){return _.uniq(_.without(a,void 0,null)).length}},min:function(a){return function(a){return _.min(a)}},max:function(a){return function(a){return _.max(a)}},median:function(a){return function(a){return d.median(a)}},box:function(a){return function(a){var b,c,e,g,h,f;c=a.length;return 5<c?(g=c/2,a=_.sortBy(a,function(a){return a}),b=Math.ceil(g)/2,0!==b%1?(b=Math.floor(b),g=a[b],c=a[c-1-b]):(g=(a[b]+a[b-1])/2,c=(a[c-b]+a[c-b-1])/2),b=c-g,e=
g-1.5*b,h=c+1.5*b,b=_.groupBy(a,function(a){return a>=e&&a<=h}),{q1:_.min(b["true"]),q2:g,q3:d.median(a,!0),q4:c,q5:_.max(b["true"]),outliers:null!=(f=b["false"])?f:[]}):{outliers:a}}}};h=function(a){return g[a.stat](a)};c=function(a,b){var c,e;e={};_.each(b.stats,function(a){var b,c,d;b=a.key;c=a.name;d=h(a);return e[c]=function(a){return d(_.pluck(a,b))}});c=d.groupBy(a,b.groups);return _.map(c,function(a){var c;c={};_.each(b.groups,function(b){return c[b]=a[0][b]});_.each(e,function(b,e){return c[e]=
b(a)});return c})};l=function(a,b,e){var d,g,h,f;h=b.sort;f=b.stat;d=b.limit;b=b.asc;f&&(f={stats:[f],groups:[a]},e=c(e,f));g=b?1:-1;e.sort(function(a,b){return a[h]===b[h]?0:a[h]>=b[h]?1*g:-1*g});d&&(e=e.slice(0,+(d-1)+1||9E9));a=_.uniq(_.pluck(e,a));return{meta:{levels:a,sorted:!0},filter:{"in":a}}};e=function(a,e,g){var h,f,q,n,p,r,y,A,E,w,B,F,G;y=_.clone(e.meta);e=_.clone(e.raw);null==y&&(y={});h=function(a,b){var c;return y[a]=_.extend(null!=(c=y[a])?c:{},b)};if(a.trans)for(G=a.trans,n=0,B=G.length;n<
B;n++){A=G[n];p=A.key;r=m(p,A,y[p]);f=r.trans;r=r.meta;E=0;for(F=e.length;E<F;E++)q=e[E],f(q);h(A.name,r)}a.filter&&(e=_.filter(e,b(a.filter)));if(a.sort){f={};A=a.sort;for(p in A)r=A[p],n=l(p,r,e),r=n.meta,n=n.filter,f[p]=n,h(p,r);e=_.filter(e,b(f))}if(a.stats&&a.stats.stats&&0<a.stats.stats.length)for(e=c(e,a.stats),f=a.stats.stats,p=0,r=f.length;p<r;p++)A=f[p],A=A.name,h(A,{type:"num"});a=null!=(w=a.select)?w:[];w=0;for(h=a.length;w<h;w++)if(p=a[w],null==y[p]&&"count(*)"!==p)throw d.error.defn("You referenced a data column "+
p+" that doesn't exist.");return g(null,{data:e,meta:y})};r=function(a,b,c){return b.getData(c,a)};d.data.frontendProcess=e}).call(this);(function(){var f,r,l,c,b,a,e,g,h,m,q,p,n,u,k,t,s,v,z,x,C,D,y=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1},A={}.hasOwnProperty,E=function(a,b){function c(){this.constructor=a}for(var e in b)A.call(b,e)&&(a[e]=b[e]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a};q=d["const"].aes;
n=d["const"].scaleFns;p={x:n.novalue(),y:n.novalue(),color:"steelblue",size:5,opacity:0.9,shape:1};c=function(){function a(b,c,e){var d;this.spec=b;this.guideSpec=e;this.mapping={};this.consts={};e=0;for(d=q.length;e<d;e++)c=q[e],b[c]&&(b[c]["var"]&&(this.mapping[c]=b[c]["var"]),b[c]["const"]&&(this.consts[c]=b[c]["const"]))}a.prototype.defaults=p;a.prototype.calculate=function(a,b){var c,e,d;this.statData=a;this.meta=b;this._calcGeoms();this.geoms=this._sample(this.geoms);b={};d=this.mapping;for(c in d)e=
d[c],b[c]=this.meta[e];return{geoms:this.geoms,meta:b}};a.prototype._calcGeoms=function(){throw d.error.impl();};a.prototype._tooltip=function(a){var b=this;return"function"===typeof this.spec.tooltip?function(c){return b.spec.tooltip(a)}:null!=this.spec.tooltip?function(a){return b.spec.tooltip}:function(c){var e,g,h,f,m,k;m="";f=[];k=b.mapping;for(e in k)h=k[e],-1===f.indexOf(h)&&(f.push(h),g=null!=c&&null!=c[e]?d.format(c[e].domain.type,c[e].domain.bw):function(a){return a},m+="\n"+h+": "+g(a[h]));
return m.substr(1)}};a.prototype._sample=function(a){if(!1===this.spec.sample)return a;if(_.isNumber(this.spec.sample))return d.sample(a,this.spec.sample);throw d.error.defn("A layer's 'sample' definition should be an integer, not "+this.spec.sample);};a.prototype._getValue=function(a,b){return this.mapping[b]?a[this.mapping[b]]:this.consts[b]?n.identity(this.consts[b]):"x"===b||"y"===b?this.defaults[b]:n.identity(this.defaults[b])};a.prototype._getIdFunc=function(){var a=this;return null!=this.mapping.id?
function(b){return a._getValue(b,"id")}:d.counter()};a.prototype._fillZeros=function(a,b){var c,e,d;c=function(){var b,c,d;d=[];b=0;for(c=a.length;b<c;b++)e=a[b],d.push(this._getValue(e,"x"));return d}.call(this);d=_.difference(b,c);return{x:c.concat(d),y:function(){var b,c,d;d=[];b=0;for(c=a.length;b<c;b++)e=a[b],d.push(this._getValue(e,"y"));return d}.call(this).concat(function(){var a,b,c;c=[];a=0;for(b=d.length;a<b;a++)c.push(void 0);return c}())}};a.prototype._stack=function(a){var b,c,e,g,h,
f,m=this;a=d.groupBy(this.statData,a);f=[];for(e in a)b=a[e],g=0,h=null!=this.mapping.y?function(a){return a[m.mapping.y]}:function(a){return 0},f.push(function(){var a,e,d;d=[];a=0;for(e=b.length;a<e;a++)c=b[a],c.$lower=g,g+=parseFloat(h(c)),d.push(c.$upper=g);return d}());return f};a.prototype._dodge=function(a){var b,c,e,g,h,f,m,k,l,q,n,p,w=this;e=_.without(_.keys(this.mapping),"x","y","id");_.toArray(_.pick(this.mapping,e));n=d.groupBy(this.statData,a);p=[];for(h in n){c=n[h];m={};f=1;l=0;for(q=
e.length;l<q;l++)b=e[l],a=_.uniq(function(){var a,e,d;d=[];a=0;for(e=c.length;a<e;a++)g=c[a],d.push(this._getValue(g,b));return d}.call(this)),f*=a.length,a.sort(d.type.compare(this.meta[this.mapping[b]].type)),m[b]=a;k=function(a){var c,d,g,h;c=f;g=d=0;for(h=e.length;g<h;g++)b=e[g],c/=m[b].length,d+=c*_.indexOf(m[b],w._getValue(a,b));return d};p.push(function(){var a,b,e;e=[];a=0;for(b=c.length;a<b;a++)g=c[a],g.$n=k(g),e.push(g.$m=f);return e}())}return p};a.prototype._inLevels=function(a){var b,
c,e,d,g,h;d=["x","y"];c=0;for(e=d.length;c<e;c++)if(b=d[c],null!=(null!=(g=this.guideSpec[b])?g.levels:void 0)&&(h=a[this.spec[b]["var"]],0>y.call(this.guideSpec[b].levels,h)))return!1;return!0};return a}();e=function(a){function b(){return u=b.__super__.constructor.apply(this,arguments)}E(b,a);b.prototype._calcGeoms=function(){var a,b,c,e,d,g,h,f,m;b=this._getIdFunc();this.geoms={};f=this.statData;m=[];g=0;for(h=f.length;g<h;g++){c=f[g];a={};for(e in c)d=c[e],a[e]={"in":[d]};m.push(this.geoms[b(c)]=
{marks:{0:{type:"circle",x:this._getValue(c,"x"),y:this._getValue(c,"y"),color:this._getValue(c,"color"),size:this._getValue(c,"size"),opacity:this._inLevels(c)?this._getValue(c,"opacity"):0}},evtData:a,tooltip:this._tooltip(c)})}return m};return b}(c);a=function(a){function b(){return k=b.__super__.constructor.apply(this,arguments)}E(b,a);b.prototype._calcGeoms=function(){var a,b,c,e,g,h,f,m,k,l,q,n=this;e=function(){var a,b,c,e;c=_.without(_.keys(this.mapping),"x","y");e=[];a=0;for(b=c.length;a<
b;a++)h=c[a],e.push(this.mapping[h]);return e}.call(this);b=d.groupBy(this.statData,e);g=this._getIdFunc();this.geoms={};q=[];for(h in b){a=b[h];m=a[0];c={};k=0;for(l=e.length;k<l;k++)f=e[k],c[f]={"in":[m[f]]};q.push(this.geoms[g(m)]={marks:{0:{type:"path",x:_.map(a,function(a){return n._getValue(a,"x")}),y:_.map(a,function(a){return n._getValue(a,"y")}),color:this._getValue(m,"color"),opacity:this._getValue(m,"opacity"),size:this._getValue(m,"size")}},evtData:c})}return q};return b}(c);b=function(a){function b(){return t=
b.__super__.constructor.apply(this,arguments)}E(b,a);b.prototype.defaults={x:n.novalue(),y:n.novalue(),color:"steelblue",size:1,opacity:0.9,shape:1};b.prototype._calcGeoms=function(){var a,b,c,e,g,h,f,m,k,l,q,n,p,w,B,s;a=_.uniq(function(){var a,b,c,e;c=this.statData;e=[];a=0;for(b=c.length;a<b;a++)f=c[a],e.push(this._getValue(f,"x"));return e}.call(this));g=function(){var a,b,c,e;c=_.without(_.keys(this.mapping),"x","y");e=[];a=0;for(b=c.length;a<b;a++)m=c[a],e.push(this.mapping[m]);return e}.call(this);
c=_.pairs(d.groupBy(this.statData,g));h=this._getIdFunc();this.geoms={};q=1===_.max(c,function(a){return a[1].length})[1].length;s=[];e=n=0;for(w=c.length;n<w;e=++n){l=c[e];k=l[0];b=l[1];q&&e+1<c.length&&b.push(c[e+1][1][0]);l=b[0];e={};p=0;for(B=g.length;p<B;p++)k=g[p],e[k]={"in":[l[k]]};b=this._fillZeros(b,a);k=b.x;b=b.y;s.push(this.geoms[h(l)]={marks:{0:{type:"line",x:k,y:b,color:this._getValue(l,"color"),opacity:this._getValue(l,"opacity"),size:this._getValue(l,"size")}},evtData:e})}return s};
return b}(c);g=function(a){function b(){return s=b.__super__.constructor.apply(this,arguments)}E(b,a);b.prototype._calcGeoms=function(){var a,c,e,d,g,h;b.__super__._calcGeoms.call(this);g=this.geoms;h=[];for(c in g)a=g[c],h.push(function(){var b,c;b=a.marks;c=[];for(e in b)d=b[e],c.push(d.type="spline");return c}());return h};return b}(b);r=function(a){function b(){return v=b.__super__.constructor.apply(this,arguments)}E(b,a);b.prototype._calcGeoms=function(){var a,b;if(this.mapping.y&&"cat"===this.meta[this.mapping.y].type)throw d.error.defn("The dependent variable of a bar chart cannot be categorical!");
if(this.mapping.x&&(a=this.meta[this.mapping.x],"cat"!==a.type&&!a.bw&&!a.binned&&"num"===a.type&&null==this.guideSpec.x.bw))throw d.error.type("Bar chart x-values need to be binned. Set binwidth or use the bin() transform!");this.position=null!=(b=this.spec.position)?b:"stack";if("stack"===this.position)return this._calcGeomsStack();if("dodge"===this.position)return this._calcGeomsDodge();throw d.error.defn("Bar chart position "+this.position+" is unknown.");};b.prototype._calcGeomsDodge=function(){var a,
b,c,e,d,g,h,f,m,k;a=null!=this.mapping.x?[this.mapping.x]:[];this._dodge(a);this._stack(a.concat("$n"));this.geoms={};b=this._getIdFunc();m=this.statData;k=[];h=0;for(f=m.length;h<f;h++){c=m[h];a={};for(e in c)d=c[e],"y"!==e&&(a[e]={"in":[d]});d=n.lower(this._getValue(c,"x"),c.$n,c.$m);g=n.upper(this._getValue(c,"x"),c.$n,c.$m);k.push(this.geoms[b(c)]={marks:{0:{type:"rect",x:[d,g],y:[c.$lower,c.$upper],color:this._getValue(c,"color"),opacity:this._inLevels(c)?this._getValue(c,"opacity"):0}},evtData:a,
tooltip:this._tooltip(c)})}return k};b.prototype._calcGeomsStack=function(){var a,b,c,e,d,g,h,f,m;this._stack(null!=this.mapping.x?[this.mapping.x]:[]);b=this._getIdFunc();this.geoms={};f=this.statData;m=[];g=0;for(h=f.length;g<h;g++){c=f[g];a={};for(e in c)d=c[e],"y"!==e&&(a[e]={"in":[d]});m.push(this.geoms[b(c)]={marks:{0:{type:"rect",x:[n.lower(this._getValue(c,"x")),n.upper(this._getValue(c,"x"))],y:[c.$lower,c.$upper],color:this._getValue(c,"color"),opacity:this._inLevels(c)?this._getValue(c,
"opacity"):0}},evtData:a,tooltip:this._tooltip(c)})}return m};return b}(c);f=function(a){function b(){return z=b.__super__.constructor.apply(this,arguments)}E(b,a);b.prototype._calcGeoms=function(){var a,b,c,e,g,h,f,m,k,l,q,n,p,w,s,r;a=function(){var a,b,c,e;c=this.statData;e=[];a=0;for(b=c.length;a<b;a++)m=c[a],d.isDefined(this._getValue(m,"y"))&&d.isDefined(n=this._getValue(m,"x"))&&e.push(n);return e}.call(this);a=_.uniq(a);b={};e=0;for(g=a.length;e<g;e++)l=a[e],b[l]=0;h=function(){var a,b,c,e;
c=_.without(_.keys(this.mapping),"x","y");e=[];a=0;for(b=c.length;a<b;a++)k=c[a],e.push(this.mapping[k]);return e}.call(this);e=d.groupBy(this.statData,h);f=this._getIdFunc();this.geoms={};r=[];for(k in e){c=e[k];q=c[0];g={};p=0;for(w=h.length;p<w;p++)l=h[p],g[l]={"in":[q[l]]};l=function(){var c,e,d;d=[];c=0;for(e=a.length;c<e;c++)n=a[c],d.push(b[n]);return d}();w=0;for(s=c.length;w<s;w++)m=c[w],n=this._getValue(m,"x"),p=this._getValue(m,"y"),b[n]+=p;c=function(){var c,e,d;d=[];c=0;for(e=a.length;c<
e;c++)n=a[c],d.push(b[n]);return d}();r.push(this.geoms[f(q)]={marks:{0:{type:"area",x:a,y:{bottom:l,top:c},color:this._getValue(q,"color"),opacity:this._getValue(q,"opacity")}},evtData:g})}return r};return b}(c);h=function(a){function b(){return x=b.__super__.constructor.apply(this,arguments)}E(b,a);b.prototype._calcGeoms=function(){var a,b,c,e,d,g,h,f,m;b=this._getIdFunc();this.geoms={};f=this.statData;m=[];g=0;for(h=f.length;g<h;g++){c=f[g];a={};for(e in c)d=c[e],a[e]={"in":[d]};m.push(this.geoms[b(c)]=
{marks:{0:{type:"text",x:this._getValue(c,"x"),y:this._getValue(c,"y"),text:this._getValue(c,"text"),color:this._getValue(c,"color"),size:this._getValue(c,"size"),opacity:this._getValue(c,"opacity"),"text-anchor":"center"}},evtData:a})}return m};return b}(c);m=function(a){function b(){return C=b.__super__.constructor.apply(this,arguments)}E(b,a);b.prototype._calcGeoms=function(){var a,b,c,e,d,g,h,f,m;b=this._getIdFunc();this.geoms={};f=this.statData;m=[];g=0;for(h=f.length;g<h;g++){c=f[g];a={};this._getValue(c,
"x");this._getValue(c,"y");for(e in c)d=c[e],"y"!==e&&"x"!==e&&(a[e]={"in":[d]});m.push(this.geoms[b(c)]={marks:{0:{type:"rect",x:[n.lower(this._getValue(c,"x")),n.upper(this._getValue(c,"x"))],y:[n.lower(this._getValue(c,"y")),n.upper(this._getValue(c,"y"))],color:this._getValue(c,"color"),size:this._getValue(c,"size"),opacity:this._getValue(c,"opacity")}},evtData:a,tooltip:this._tooltip(c)})}return m};return b}(c);l=function(a){function b(){return D=b.__super__.constructor.apply(this,arguments)}
E(b,a);b.prototype._calcGeoms=function(){var a,b,c,e,d,g,h,f,m,k,l,q,p,w,s,r;c=this._getIdFunc();this.geoms={};s=this.statData;r=[];q=0;for(p=s.length;q<p;q++){d=s[q];b={};for(g in d)a=d[g],"y"!==g&&(b[g]={"in":[a]});m=this._getValue(d,"x");l=this._getValue(d,"y");a=this._getValue(d,"color");e=this._getValue(d,"size");h=this._inLevels(d)?this._getValue(d,"opacity"):0;f=n.lower(m);k=n.upper(m);m=n.middle(m);b={marks:{},evtData:b};l.q1&&(b.marks={iqr:{type:"rect",x:[f,k],y:[l.q2,l.q4],stroke:a,color:n.identity("white"),
size:e,opacity:h,"stroke-width":"1px"},q1:{type:"pline",x:[f,k],y:[l.q1,l.q1],color:a,size:e,opacity:h},lower:{type:"pline",x:[m,m],y:[l.q1,l.q2],color:a,size:e,opacity:h},q5:{type:"pline",x:[f,k],y:[l.q5,l.q5],color:a,size:e,opacity:h},upper:{type:"pline",x:[m,m],y:[l.q4,l.q5],color:a,size:e,opacity:h},middle:{type:"pline",x:[f,k],y:[l.q3,l.q3],color:a,size:e,opacity:h}});w=l.outliers;e=k=0;for(l=w.length;k<l;e=++k)f=w[e],b.marks[e]={type:"circle",x:m,y:f,color:a,size:n.identity(3),opacity:h};r.push(this.geoms[c(d)]=
b)}return r};return b}(c);d.layer={};d.layer.Base=c;d.layer.classes={point:e,text:h,line:b,path:a,area:f,bar:r,tile:m,box:l,spline:g};d.layer.make=function(a,b,c){var e;e=a.type;if(e in d.layer.classes)return new d.layer.classes[e](a,b,c);throw d.error.defn("No such layer "+a.type+".");}}).call(this);(function(){var f,r={}.hasOwnProperty,l=function(c,b){function a(){this.constructor=c}for(var e in b)r.call(b,e)&&(c[e]=b[e]);a.prototype=b.prototype;c.prototype=new a;c.__super__=b.prototype;return c};
d.pane={};d.pane.make=function(c,b){return new f(c,b)};f=function(c){function b(a,b){this.titleObj=b;this.index=a;this.title=this.layers=null}l(b,c);b.prototype.make=function(a,b,c){var h,f,l,p,n;this.layers=c;if(!this.geoms)for(this.geoms={},p=this.layers,c=l=0,p=p.length;l<p;c=++l)this.geoms[c]=new d.Geometry;this.metas={};n=this.layers;c=l=0;for(p=n.length;l<p;c=++l)h=n[c],f=h.calculate(b[c].statData,b[c].metaData),h=f.geoms,f=f.meta,this.geoms[c].set(h),this.metas[c]=f;null==this.title&&(this.title=
this._makeTitle(a));this.title.make(this.titleObj);return this.domains=this._makeDomains(a,this.geoms,this.metas)};b.prototype._makeTitle=function(){return d.guide.title("facet")};b.prototype._makeDomains=function(a,b,c){return d.domain.make(b,c,a.guides,a.strict)};b.prototype.render=function(a,b,c,d){var f;this.title.render(a({},!1,!1),d,b);b=a(b,c,!0);c=this.geoms;d=[];for(f in c)a=c[f],d.push(a.render(b));return d};b.prototype.dispose=function(a){var b,c,d;d=this.geoms;for(c in d)b=d[c],b.dispose(a);
this.geoms={};return this.title.dispose(a)};return b}(d.Renderable)}).call(this);(function(){d.dim={};d.dim.make=function(d,r,l){var c,b,a,e,g,h,m,q;d={width:null!=(b=d.width)?b:400,height:null!=(a=d.height)?a:400,paddingLeft:null!=(e=d.paddingLeft)?e:10,paddingRight:null!=(c=d.paddingRight)?c:10,paddingTop:null!=(g=d.paddingTop)?g:10,paddingBottom:null!=(h=d.paddingBottom)?h:10,horizontalSpacing:null!=(m=d.horizontalSpacing)?m:10,verticalSpacing:null!=(q=d.verticalSpacing)?q:20,guideTop:10,guideRight:0,
guideLeft:5,guideBottom:5};c=r.axesOffset(d);b=c.left;a=c.right;e=c.top;c=c.bottom;d.guideLeft+=null!=b?b:0;d.guideRight+=null!=a?a:0;d.guideBottom+=null!=c?c:0;d.guideTop+=null!=e?e:0;c=r.titleOffset(d);b=c.left;a=c.right;e=c.top;c=c.bottom;d.guideLeft+=null!=b?b:0;d.guideRight+=null!=a?a:0;d.guideBottom+=null!=c?c:0;d.guideTop+=null!=e?e:0;r=r.legendOffset(d);b=r.left;a=r.right;e=r.top;c=r.bottom;d.guideLeft+=null!=b?b:0;d.guideRight+=null!=a?a:0;d.guideBottom+=null!=c?c:0;d.guideTop+=null!=e?e:
0;r=0.4*d.width;b=0.4*d.height;d.guideLeft>r&&(d.guideLeft=r);d.guideRight>r&&(d.guideRight=r);d.guideTop>b&&(d.guideTop=b);d.guideBottom>b&&(d.guideBottom=b);d.chartHeight=d.height-d.paddingTop-d.paddingBottom-d.guideTop-d.guideBottom;d.chartWidth=d.width-d.paddingLeft-d.paddingRight-d.guideLeft-d.guideRight;null!=l.cols&&1<l.cols?(d.eachWidth=d.chartWidth-d.horizontalSpacing*l.cols,d.eachWidth/=l.cols):d.eachWidth=d.chartWidth;null!=l.rows&&1<l.rows?(d.eachHeight=d.chartHeight-d.verticalSpacing*
(l.rows+1),d.eachHeight/=l.rows):d.eachHeight=d.chartHeight-d.verticalSpacing;return d};d.dim.guess=function(d,r){var l,c,b,a,e,g,h,m,q;l={width:null!=(c=d.width)?c:400,height:null!=(b=d.height)?b:400,paddingLeft:null!=(a=d.paddingLeft)?a:10,paddingRight:null!=(e=d.paddingRight)?e:10,paddingTop:null!=(g=d.paddingTop)?g:10,paddingBottom:null!=(h=d.paddingBottom)?h:10,guideLeft:30,guideRight:40,guideTop:10,guideBottom:30,horizontalSpacing:null!=(m=d.horizontalSpacing)?m:10,verticalSpacing:null!=(q=
d.verticalSpacing)?q:10};l.chartHeight=l.height-l.paddingTop-l.paddingBottom-l.guideTop-l.guideBottom;l.chartWidth=l.width-l.paddingLeft-l.paddingRight-l.guideLeft-l.guideRight;l.eachWidth=null!=r.cols&&1<r.cols?l.chartWidth-l.horizontalSpacing*(r.cols-1):l.chartWidth;l.eachHeight=null!=r.rows&&1<r.rows?l.chartHeight-l.verticalSpacing*(r.rows-1):l.chartHeight;return l}}).call(this);(function(){var f,r,l,c,b,a,e,g,h,m,q,p,n,u,k,t,s,v,z,x,C={}.hasOwnProperty,D=function(a,b){function c(){this.constructor=
a}for(var e in b)C.call(b,e)&&(a[e]=b[e]);c.prototype=b.prototype;a.prototype=new c;a.__super__=b.prototype;return a};d.paper=function(a,b,c,e){var g;g="undefined"!==typeof Raphael&&null!==Raphael?Raphael(a,b,c):d.canvas(a,b,c);a=e.graph;e=e.numeral;b=g.rect(0,0,b,c).attr({fill:"white",opacity:0,"stroke-width":0});null!=a?(b.click(a.handleEvent("reset")),d.mouseEvents(a,b,!1),d.touchEvents(a.handleEvent,b,!0)):null!=e&&b.click(e.handleEvent("reset"));return g};d.mouseEvents=function(a,b,c){var e,
g,h,m,k,f;h=a.handleEvent("select");c&&(m=null);f=g=k=e=null;return b.drag(function(b,h,l,q){if(null!=f&&null!=k){if(e={x:k.x+b,y:k.y+h},g=a.facet.getFacetInfo(a.dims,e.x,e.y),null!=m&&null!=g&&g.col===f.col&&g.row===f.row&&c)return l={x:Math.min(k.x,e.x),y:Math.min(k.y,e.y),width:Math.abs(k.x-e.x),height:Math.abs(k.y-e.y)},m=m.attr(l)}else if(b=d.offset(a.dom),k={x:l-b.left,y:q-b.top},f=a.facet.getFacetInfo(a.dims,k.x,k.y),null!=f&&c)return m=a.paper.rect(k.x,k.y,0,0,2),m=m.attr({fill:"black",opacity:0.2})},
function(){return e=k=null},function(){if(null!=k&&null!=e)return null!=m&&c&&(m=m.hide(),m.remove()),h({start:k,end:e})})};d.touchEvents=function(a,b,c){null==c&&(c=!0);if(c)return b.touchstart(a("touchstart")),b.touchend(a("touchend")),b.touchmove(a("touchmove")),b.touchcancel(a("touchcancel"))};d.render=function(a,b,c,e){return function(g,h,k){null==g&&(g={});null==h&&(h=!1);null==k&&(k=!0);if(null==e.type)throw d.error.unknown("Coordinate don't have at type?");if(null==m[e.type])throw d.error.input("Unknown coordinate type "+
e.type);return{add:function(f,l,q,n){var p;if(null==m[e.type][f.type])throw d.error.input("Coord "+e.type+" has no mark "+f.type);p=m[e.type][f.type].render(b,c,e,g,f,k);p.data("m",f);l&&0<_.keys(l).length&&p.data("e",l);q&&p.data("t",q);null!=h&&p.attr("clip-rect",h);"guide"===n?(p.click(a("guide-click")),p.hover(a("gover"),a("gout"))):"guide-title"===n||"guide-titleH"===n||"guide-titleV"===n?(p.click(a(n)),p.hover(a("tover"),a("tout"))):(p.click(a("click")),p.hover(a("mover"),a("mout")));d.touchEvents(a,
p,!0);return p},remove:function(a){return a.remove()},animate:function(a,b,d,f){m[e.type][b.type].animate(a,c,e,g,b,k);null!=h&&a.attr("clip-rect",h);d&&0<_.keys(d).length&&a.data("e",d);f&&a.data("t",f);a.data("m",b);return a}}}};g=function(){function a(){}a.prototype.render=function(a,b,c,e,d,g){var h;a=this._make(a);c=this.attr(b,c,e,d,g);for(h in c)b=c[h],a.attr(h,b);return a};a.prototype._make=function(){throw d.error.impl();};a.prototype.animate=function(a,b,c,e,d,g){return a.animate(this.attr(b,
c,e,d,g),300)};a.prototype.attr=function(a,b,c,e,g){throw d.error.impl();};a.prototype._cantRender=function(a){throw d.error.missingdata();};a.prototype._makePath=function(a,b,c){null==c&&(c="L ");return("spline"===c?_.map(a,function(a,c){return(0===c?"M "+a+" "+b[c]+" R ":"")+(""+a+" "+b[c])}):_.map(a,function(a,e){return(0===e?"M ":c)+a+" "+b[e]})).join(" ")};a.prototype._maybeApply=function(a,b,c){b=b[c];return _.isObject(b)&&"identity"===b.f?b.v:null!=a[c]?a[c].f(b):b};a.prototype._applyOffset=
function(a,b,c){var e;if(!c)return{x:a,y:b};null==c.x&&(c.x=0);null==c.y&&(c.y=0);return{x:_.isArray(a)?function(){var b,d,g;g=[];b=0;for(d=a.length;b<d;b++)e=a[b],g.push(e+c.x);return g}():a+c.x,y:_.isArray(b)?function(){var a,d,g;g=[];a=0;for(d=b.length;a<d;a++)e=b[a],g.push(e+c.y);return g}():b+c.y}};a.prototype._shared=function(a,b,c){var e,d=this;e=function(e){if(null!=b[e]&&null==c[e])return c[e]=d._maybeApply(a,b,e)};e("opacity");e("stroke-width");e("stroke-dasharray");e("stroke-dashoffset");
e("transform");e("font-size");e("font-weight");e("font-family");return c};a.prototype._checkPointUndefined=function(a,b,c){null==c&&(c="Point");if(void 0===a||void 0===b)throw d.error.missing(""+c+" cannot be plotted due to undefined data.");};a.prototype._checkArrayUndefined=function(a,b,c){var e;null==c&&(c="Line");if(_.all(function(){var c,d,g;g=[];e=c=0;for(d=a.length-1;0<=d?c<=d:c>=d;e=0<=d?++c:--c)g.push(void 0===a[e]||void 0===b[e]);return g}()))throw d.error.missing(""+c+" cannot be plotted due to too many missing points.");
};a.prototype._checkArrayNaN=function(a,b){var c,e;e=_.map(_.zip(a,b),function(a,b){return isNaN(a[0])||isNaN(a[1])?void 0:a});return{x:function(){var a,b,d;d=[];a=0;for(b=e.length;a<b;a++)c=e[a],null!=c&&d.push(c[0]);return d}(),y:function(){var a,b,d;d=[];a=0;for(b=e.length;a<b;a++)c=e[a],null!=c&&d.push(c[1]);return d}()}};return a}();f=function(a){function b(){return q=b.__super__.constructor.apply(this,arguments)}D(b,a);b.prototype.animate=function(a,b,c,e,d,g){var h,m;m=a.data("m");h=this.attr(b,
c,e,d,g);if(_.isEqual(m.x,d.x))return a.animate(h,300);b=this.attr(b,c,e,m,g);return a.animate(b,300,function(){return a.attr(h)})};return b}(g);r=function(a){function b(){return p=b.__super__.constructor.apply(this,arguments)}D(b,a);b.prototype._make=function(a){return a.circle()};b.prototype.attr=function(a,b,c,e,d){d=b.getXY(d,e);b=d.x;d=d.y;this._checkPointUndefined(b,d,"Circle");c=this._applyOffset(b,d,c);b=c.x;d=c.y;c=this._maybeApply(a,e,e.stroke?"stroke":"color");c={cx:b,cy:d,r:this._maybeApply(a,
e,"size"),stroke:c};(b=this._maybeApply(a,e,"color"))&&"none"!==b&&(c.fill=b);return this._shared(a,e,c)};return b}(g);b=function(a){function b(){return n=b.__super__.constructor.apply(this,arguments)}D(b,a);b.prototype._make=function(a){return a.path()};b.prototype.attr=function(a,b,c,e,d){var g;d=b.getXY(d,e);b=d.x;d=d.y;this._checkArrayUndefined(b,d,"Path");c=this._applyOffset(b,d,c);b=c.x;d=c.y;g=this._maybeApply(a,e,e.stroke?"stroke":"color");c=this._maybeApply(a,e,e.size?"size":"stroke-width");
return this._shared(a,e,{path:this._makePath(b,d),stroke:g,"stroke-width":c})};return b}(g);c=function(a){function b(){return u=b.__super__.constructor.apply(this,arguments)}D(b,a);b.prototype._make=function(a){return a.path()};b.prototype.attr=function(a,b,c,e,g){var h,m;h=d.sortArrays(a.x.compare,[e.x,e.y]);e.x=h[0];e.y=h[1];g=b.getXY(g,e);b=g.x;g=g.y;this._checkArrayUndefined(b,g,"Line");h=0;for(m=b.length;h<m;++h);c=this._applyOffset(b,g,c);b=c.x;g=c.y;c=this._checkArrayNaN(b,g);b=c.x;g=c.y;h=
this._maybeApply(a,e,e.stroke?"stroke":"color");c=this._maybeApply(a,e,e.size?"size":"stroke-width");return this._shared(a,e,{path:this._makePath(b,g),stroke:h,"stroke-width":c})};return b}(f);h=function(a){function b(){return k=b.__super__.constructor.apply(this,arguments)}D(b,a);b.prototype.attr=function(a,b,c,e,g){var h,m;h=d.sortArrays(a.x.compare,[e.x,e.y]);e.x=h[0];e.y=h[1];g=b.getXY(g,e);b=g.x;g=g.y;this._checkArrayUndefined(b,g,"Spline");h=0;for(m=b.length;h<m;++h);c=this._applyOffset(b,g,
c);b=c.x;g=c.y;c=this._checkArrayNaN(b,g);b=c.x;g=c.y;h=this._maybeApply(a,e,e.stroke?"stroke":"color");c=this._maybeApply(a,e,e.size?"size":"stroke-width");return this._shared(a,e,{path:this._makePath(b,g,"spline"),stroke:h,"stroke-width":c})};return b}(c);a=function(a){function b(){return t=b.__super__.constructor.apply(this,arguments)}D(b,a);b.prototype.attr=function(a,b,c,e,g){var h,m,k,f,l;f=b.getXY(g,e);g=f.x;l=f.y;b=f.r;f=f.t;this._checkArrayUndefined(g,l,"Line");l=this._applyOffset(g,l,c);
g=l.x;l=l.y;var q,n;if(_.max(b)-_.min(b)<d["const"].epsilon)for(b=b[0],c="M "+g[0]+" "+l[0],m=q=1,n=g.length-1;1<=n?q<=n:q>=n;m=1<=n?++q:--q)k=Math.abs(f[m]-f[m-1])>Math.PI?1:0,h=0<f[m]-f[m-1]?1:0,c+="A "+b+" "+b+" 0 "+k+" "+h+" "+g[m]+" "+l[m];else c=this._makePath(g,l);b=this._maybeApply(a,e,e.stroke?"stroke":"color");return this._shared(a,e,{path:c,stroke:b})};return b}(c);f=function(a){function b(){return s=b.__super__.constructor.apply(this,arguments)}D(b,a);b.prototype._make=function(a){return a.path()};
b.prototype.attr=function(a,b,c,e,g){var h,m,f;h=d.sortArrays(a.x.compare,[e.x,e.y.top]);m=h[0];f=h[1];h=b.getXY(g,{x:m,y:f});h=this._applyOffset(h.x,h.y,c);f=d.sortArrays(function(b,c){return-a.x.compare(b,c)},[e.x,e.y.bottom]);m=f[0];f=f[1];b=b.getXY(g,{x:m,y:f});b=this._applyOffset(b.x,b.y,c);m=h.x.concat(b.x);f=h.y.concat(b.y);return this._shared(a,e,{path:this._makePath(m,f),stroke:this._maybeApply(a,e,"color"),fill:this._maybeApply(a,e,"color"),"stroke-width":"0px"})};return b}(f);e=function(a){function b(){return v=
b.__super__.constructor.apply(this,arguments)}D(b,a);b.prototype._make=function(a){return a.rect()};b.prototype.attr=function(a,b,c,e,d){d=b.getXY(d,e);b=d.x;d=d.y;this._checkPointUndefined(b[0],d[0],"Bar");this._checkPointUndefined(b[1],d[1],"Bar");c=this._applyOffset(b,d,c);b=c.x;d=c.y;c=this._maybeApply(a,e,e.stroke?"stroke":"color");return this._shared(a,e,{x:_.min(b),y:_.min(d),width:Math.abs(b[1]-b[0]),height:Math.abs(d[1]-d[0]),fill:this._maybeApply(a,e,"color"),stroke:c,"stroke-width":this._maybeApply(a,
e,"stroke-width")})};return b}(g);l=function(a){function b(){return z=b.__super__.constructor.apply(this,arguments)}D(b,a);b.prototype._make=function(a){return a.path()};b.prototype.attr=function(a,b,c,e,g){var h,m,f,k;h=e.x;m=h[0];h=h[1];k=e.y;f=k[0];k=k[1];this._checkPointUndefined(m,f,"Bar");this._checkPointUndefined(h,k,"Bar");e.x=[m,m,h,h];e.y=[f,k,k,f];h=b.getXY(g,e);m=h.x;f=h.y;g=h.r;h=h.t;c=this._applyOffset(m,f,c);m=c.x;f=c.y;b.flip&&(m.push(m.splice(0,1)[0]),f.push(f.splice(0,1)[0]),g.push(g.splice(0,
1)[0]),h.push(h.splice(0,1)[0]));2*Math.PI-Math.abs(h[1]-h[0])<d["const"].epsilon?(b="M "+m[0]+" "+f[0]+" A "+g[0]+" "+g[0]+" 0 1 1 "+m[0]+" "+(f[0]+2*g[0])+" A "+g[1]+" "+g[1]+" 0 1 1 "+m[1]+" "+f[1],b+="M "+m[2]+" "+f[2]+" A "+g[2]+" "+g[2]+" 0 1 0 "+m[2]+" "+(f[2]+2*g[2])+" A "+g[3]+" "+g[3]+" 0 1 0 "+m[3]+" "+f[3]+" Z"):(c=Math.abs(h[1]-h[0])>Math.PI?1:0,b="M "+m[0]+" "+f[0]+" A "+g[0]+" "+g[1]+" 0 "+c+" 1 "+m[1]+" "+f[1],c=Math.abs(h[3]-h[2])>Math.PI?1:0,b+="L "+m[2]+" "+f[2]+" A "+g[2]+" "+
g[3]+" 0 "+c+" 0 "+m[3]+" "+f[3]+" Z");c=this._maybeApply(a,e,e.stroke?"stroke":"color");return this._shared(a,e,{path:b,fill:this._maybeApply(a,e,"color"),stroke:c,"stroke-width":this._maybeApply(a,e,"stroke-width")})};return b}(g);g=function(a){function b(){return x=b.__super__.constructor.apply(this,arguments)}D(b,a);b.prototype._make=function(a){return a.text()};b.prototype.attr=function(a,b,c,e,d){var g;d=b.getXY(d,e);b=d.x;d=d.y;this._checkPointUndefined(b,d,"Text");c=this._applyOffset(b,d,
c);b=c.x;d=c.y;return this._shared(a,e,{x:b,y:d,r:10,text:this._maybeApply(a,e,"text"),"font-size":this._maybeApply(a,e,"size"),"text-anchor":null!=(g=e["text-anchor"])?g:"left",fill:this._maybeApply(a,e,"color")||"black"})};return b}(g);m={cartesian:{circle:new r,line:new c,pline:new c,area:new f,path:new b,text:new g,rect:new e,spline:new h},polar:{circle:new r,path:new b,line:new c,pline:new a,area:new f,text:new g,rect:new l,spline:new h}}}).call(this);(function(){var f=[].indexOf||function(d){for(var f=
0,c=this.length;f<c;f++)if(f in this&&this[f]===d)return f;return-1};d.handler={};d.handler.tooltip=function(){var f,l,c,b,a,e,g;a={};l=f=b=c=null;g=function(b){b=d.getXY(c,b);if(null!=a.text)return e(a,b)};e=function(a,b){var c,e,d,g,k,t;e=[b.x,b.y];g=e[0];e=e[1];if(null!=a.text)return d=a.text.getBBox().height,g={x:g,y:e-d/2-20},a.text.attr(g),d=a.text.getBBox(),k=d.x,t=d.y,c=d.width,d=d.height,c={x:k-5,y:t-5,width:c+10,height:d+10},0>c.y&&(c.y=t+30+d,g.y=e+d/2+15),c.x+c.width>f&&(e=c.x+c.width-
f,c.x-=e/2,g.x-=e/2),c.x<l&&(g.x+=l-c.x,c.x=l),a.text.attr(g),a.box.attr(c),a};return function(h,m,q,p){var n,u;c=d.offset(p.dom);b=m.paper;f=p.dims.chartWidth+p.dims.guideLeft+p.dims.paddingLeft;l=p.dims.guideLeft+p.dims.paddingLeft;if("mover"===h||"mout"===h)if(null!=a.text&&(a.text.remove(),a.box.remove()),a={},"mover"===h&&m.tooltip)return h=d.getXY(c,q),m.getBBox(),q=[h.x,h.y],n=q[0],q=q[1],a.text=b.text(n,q,m.tooltip(p.scaleSet.scales)).attr({"text-anchor":"middle",fill:"white"}),p=a.text.getBBox(),
p=p.height,a.text.attr({y:q-p/2-20}),p=a.text.getBBox(),n=p.x,u=p.y,q=p.width,p=p.height,a.box=b.rect(n-5,u-5,q+10,p+10,10),a.box.attr({fill:"#213"}),a.text.toFront(),a=e(a,h),m.mousemove(g)}};d.handler.drilldown=function(r,l,c){var b,a;null==c&&(c={});if(!_.isArray(l))throw d.error.input("Parameter `levels` should be an array.");if(0>f.call(d["const"].aes,r))throw d.error.input("Unknown aesthetic "+r+".");b=0;a=[c];return function(c,d,h,m){var f,p;if("reset"===c&&0<b){d=m.spec;a.pop();c=a.unshift();
b--;p=d.layers;h=0;for(f=p.length;h<f;h++)d=p[h],d.filter=c,d[r]=l[b],d.id=l[b];return m.make(m.spec)}if("click"===c&&b<l.length-1&&(c=d.evtData,d=m.spec,h=c[l[b]])){c={};c[l[b]]=h;b++;c=_.extend(_.clone(a[a.length-1]),c);p=d.layers;h=0;for(f=p.length;h<f;h++)d=p[h],d.filter=c,d[r]=l[b],d.id=l[b];a.push(c);return m.make(m.spec)}}};d.handler.zoom=function(f,l){var c,b,a,e,g,h;null==l&&(l={x:!0,y:!0});if(null==f)throw d.error.input("Initial specification missing.");b={x:_.clone(null!=(e=f.guides)?e.x:
void 0),y:_.clone(null!=(g=f.guides)?g.y:void 0)};a=void 0;c=["x","y"];h=function(a){return function(b,c,e,d){return"reset"===b?_.isFunction(a)?a("resetZoom",c,e,d):a.handle("resetZoom",c,e,d):_.isFunction(a)?a(b,c,e,d):a.handle(b,c,e,d)}};return function(e,g,f,n){var r,k,t,s,v,z,x,C,D,y;null==a&&(a=_.clone(n.handlers));if("cartesian"===n.coord.type){if("resetZoom"===e){r=n.spec;k=0;for(t=c.length;k<t;k++)f=c[k],r.guides[f]=_.clone(b[f]);n.handlers=_.clone(a);n.make(n.spec)}if("select"===e){g=g.evtData;
r=n.spec.guides;x=n.spec.layers;y=[];t=0;for(v=x.length;t<v;t++){k=x[t];s=0;for(z=c.length;s<z;s++)f=c[s],l[f]&&null!=k[f]&&(e=k[f]["var"],("num"===(C=n.axes.domains[f].type)||"date"===C)&&g[e].le-g[e].ge>d["const"].epsilon&&(null==r[f]&&(r[f]={min:null,max:null}),D=[g[e].ge,g[e].le],r[f].min=D[0],r[f].max=D[1]),"cat"===n.axes.domains[f].type&&0!==g[e]["in"].length&&(null==r[f]&&(r[f]={levels:null}),r[f].levels=g[e]["in"]));n.handlers=_.map(n.handlers,h);y.push(n.make(n.spec))}return y}}}}}).call(this);
(function(){var f,r=[].indexOf||function(d){for(var c=0,b=this.length;c<b;c++)if(c in this&&this[c]===d)return c;return-1};d.facet={};d.facet.make=function(){return new f};f=function(){function f(){this.type="none";this.mapping={};this.specgroups=[];this.groups=[];this.panes={};this.deletedPanes=[]}f.prototype.make=function(c){var b,a;this.spec=c;c=this._getMappings(this.spec.facet);this.type=c.type;this.mapping=a=c.mapping;this.groups=_.values(this.mapping);this.specgroups={};for(b in a)c=a[b],this.spec.facet[b]&&
(this.specgroups[c]=this.spec.facet[b]);this.spec.facet.formatter&&(this.formatter=this.spec.facet.formatter);this.style={};this.spec.facet.size&&(this.style.size=this.spec.facet.size);if(this.spec.facet.color)return this.style.color=this.spec.facet.color};f.prototype.calculate=function(c,b){var a,e,g,h,f;a=this._makeIndices(c,this.specgroups);this.values=a.values;this.indices=a.indices;"none"===this.type?this.rows=this.cols=1:(this.cols=this.spec.facet.cols,this.rows=this.spec.facet.rows,"wrap"===
this.type?(a=this.values[this.mapping["var"]].length,this.cols||this.rows||(this.cols=Math.min(3,a)),this.cols?this.rows=Math.ceil(a/this.cols):this.rows&&(this.cols=Math.ceil(a/this.rows))):(this.rows=this.mapping.y?this.values[this.mapping.y].length:1,this.cols=this.mapping.x?this.values[this.mapping.x].length:1));this.datas=this._groupData(c,this.indices);a=d.compare(_.keys(this.panes),_.keys(this.indices));e=a.deleted;a=a.added;h=0;for(f=e.length;h<f;h++)g=e[h],this.deletedPanes.push(this.panes[g]),
delete this.panes[g];h=0;for(f=a.length;h<f;h++)g=a[h],e=this.formatter?this.formatter(this.indices[g]):g,this.panes[g]=d.pane.make(this.indices[g],_.extend({title:e},this.style));a=this.indices;e=[];for(g in a)e.push(this.panes[g].make(this.spec,this.datas[g],b));return e};f.prototype.render=function(c,b,a){var e,d,h,f,l,p;if(0<this.deletedPanes.length){e=c({},!1,!1);p=this.deletedPanes;h=0;for(l=p.length;h<l;h++)f=p[h],f.dispose(e);this.deletedPanes=[]}l=this.panes;p=[];for(d in l)f=l[d],h=this.getOffset(b,
d),e=a.clipping(h),p.push(f.render(c,h,e,b));return p};f.prototype.dispose=function(c){var b,a,e,d;e=this.panes;for(b in e)a=e[b],this.deletedPanes.push(a),delete this.panes[b];if(c){d=this.deletedPanes;b=0;for(e=d.length;b<e;b++)a=d[b],a.dispose(c);return this.deletedPanes=[]}};f.prototype.getGrid=function(){return{cols:this.cols,rows:this.rows}};f.prototype.getOffset=function(c,b){var a;a=this._getRowCol(b);return{x:c.paddingLeft+c.guideLeft+(c.eachWidth+c.horizontalSpacing)*a.col,y:c.paddingTop+
c.guideTop+(c.eachHeight+c.verticalSpacing)*a.row+c.verticalSpacing}};f.prototype.edge=function(c){var b,a,e,d,h,f,l,p,n=this;if("none"===this.type)return function(){return!0};"grid"===this.type?(p=function(a){return _.indexOf(n.values[n.mapping.y],n.indices[a][n.mapping.y])},b=function(a){return _.indexOf(n.values[n.mapping.x],n.indices[a][n.mapping.x])}):(b=function(a){return _.indexOf(n.values[n.mapping["var"]],n.indices[a][n.mapping["var"]])%n.cols},p=function(a){return Math.floor(_.indexOf(n.values[n.mapping["var"]],
n.indices[a][n.mapping["var"]])/n.cols)});if("none"===c)return function(){return!1};if("out"===c)return function(){return!0};e="top"===c||"bottom"===c?b:p;l="top"===c?p:"bottom"===c?function(a){return-p(a)}:"left"===c?b:"right"===c?function(a){return-b(a)}:void 0;c={};for(d in this.indices)if(f=e(d),h=l(d),!c[f]||h<c[f].v)c[f]={v:h,k:d};a=_.pluck(c,"k");return function(b){return 0<=r.call(a,b)}};f.prototype.getEvtData=function(c,b){var a,e,d,h;d={};h=this.mapping;for(a in h)e=h[a],d[e]="x"===a||"y"===
a?{"in":this.values[e][c]}:{"in":this.values[e][this.rows*b+c]};return d};f.prototype.getFacetInfo=function(c,b,a,e){var g,h,f;if(e){if(null==e.col||null==e.row)throw d.error.impl("Preset rows & columns are not present.");g=e.col;f=e.row}else g=(b-c.paddingLeft-c.guideLeft)/(c.eachWidth+c.horizontalSpacing),g=Math.floor(g),f=(a-c.paddingTop-c.guideTop-c.verticalSpacing)/(c.eachHeight+c.verticalSpacing),f=Math.floor(f);if(0>g||g>=this.cols||0>f||f>=this.rows)return null;h={x:c.paddingLeft+c.guideLeft+
(c.eachWidth+c.horizontalSpacing)*g,y:c.paddingTop+c.guideTop+(c.eachHeight+c.verticalSpacing)*f+c.verticalSpacing};b={x:b-h.x,y:a-h.y};if(!e&&(b.x>c.eachWidth||b.y>c.eachHeight))return null;b.x=Math.max(Math.min(b.x,c.eachWidth),0);b.y=Math.max(Math.min(b.y,c.eachHeight),0);return{row:f,col:g,offset:h,adjusted:b,evtData:this.getEvtData(g,f)}};f.prototype._getMappings=function(c){var b;b={type:"none",mapping:{}};if(_.isObject(c))if("wrap"===c.type){b.type="wrap";if(!c["var"])throw d.error.defn("You didn't specify a variable to facet on.");
c["var"]&&(b.mapping["var"]=c["var"]["var"])}else if("grid"===c.type){b.type="grid";if(!c.x&&c.y)throw d.error.defn("You didn't specify a variable to facet on.");c.x&&(b.mapping.x=c.x["var"]);c.y&&(b.mapping.y=c.y["var"])}return b};f.prototype._makeIndices=function(c,b){var a,e,g,h,f,l,p,n;p={};for(a in b)if(h=b[a],h.levels)p[h["var"]]=h.levels;else{l=[];for(g in c){e=c[g];if(f=e.metaData[h["var"]])!f||"num"!==(n=f.type)&&"date"!==n||d.type.compare(f.type);l=_.uniq(_.union(l,_.pluck(e.statData,h["var"])))}p[h["var"]]=
l}a=d.cross(p);e={};g=d.stringify(_.pluck(b,"var"));f=0;for(l=a.length;f<l;f++)h=a[f],e[g(h)]=h;return{values:p,indices:e}};f.prototype._groupData=function(c,b){var a,e,g,h,f,l,p;e=d.groupProcessedData(c,this.groups);a={};p=this.indices;for(g in p){h=p[g];for(f=e;!0===f.grouped;)l=h[f.key],f=f.values[l];a[g]=f}return a};f.prototype._getRowCol=function(c){var b;b={row:0,col:0};"wrap"===this.type?(c=this.indices[c][this.mapping["var"]],c=_.indexOf(this.values[this.mapping["var"]],c),b.col=c%this.cols,
b.row=Math.floor(c/this.cols)):"grid"===this.type&&(b.row=_.indexOf(this.values[this.mapping.y],this.indices[c][this.mapping.y]),b.col=_.indexOf(this.values[this.mapping.x],this.indices[c][this.mapping.x]));return b};return f}();d.groupProcessedData=function(f,c){var b,a,e,g,h,m,q,p,n;if(0===c.length)return f;b=c.splice(0,1)[0];m=[];for(e in f)a=f[e],b in a.metaData&&(m=_.union(m,_.uniq(_.pluck(a.statData,b))));h={grouped:!0,key:b,values:{}};p=0;for(n=m.length;p<n;p++){q=m[p];g={};for(e in f)a=f[e],
g[e]={metaData:a.metaData},g[e].statData=b in a.metaData?d.filter(a.statData,b,q):_.clone(a.statData);h.values[q]=d.groupProcessedData(g,_.clone(c))}return h}}).call(this);(function(){var f,r,l,c=function(b,a){return function(){return b.apply(a,arguments)}};l=function(b){var a,c,d,h,f,l,p,n,r;h=["row","column","value"];c=0;for(d=h.length;c<d;c++)a=h[c],b[a+"s"]||(b[a+"s"]=[],null!=b[a]&&b[a+"s"].push(b[a]));n=["rows","columns","values"];h=0;for(l=n.length;h<l;h++)for(a=n[h],r=b[a],c=f=0,p=r.length;f<
p;c=++f)d=r[c],_.isString(d)&&(b[a][c]={"var":d});null==b.full&&(b.full=!1);return b};r=function(){function b(a,b,d){var h,f,l,p,n;this.statData=a;this.ticks=b;this.spec=d;this.get=c(this.get,this);this.makeFormatters=c(this.makeFormatters,this);this.makeHeaders=c(this.makeHeaders,this);this.rows=function(){var a,b,c,e;c=this.spec.rows;e=[];a=0;for(b=c.length;a<b;a++)h=c[a],e.push(h["var"]);return e}.call(this);this.columns=function(){var a,b,c,e;c=this.spec.columns;e=[];a=0;for(b=c.length;a<b;a++)h=
c[a],e.push(h["var"]);return e}.call(this);b=this.rows.concat(this.columns);a=this.columns;this.dataIndexByRows={};this.dataIndexByCols={};l=function(a,b,c){var e,d,g,h,f;a=d=a;g=0;for(h=b.length;g<h;g++)e=b[g],null==a[f=c[e]]&&(a[f]={}),d=a,a=d[c[e]];return d[c[e]]=c};n=this.statData;f=0;for(p=n.length;f<p;f++)d=n[f],l(this.dataIndexByRows,b,d),l(this.dataIndexByCols,a,d)}b.prototype.makeHeaders=function(){var a,b,c=this;a=this.spec.full;b=function(d,f,l,p){var n,r,k;if(0===l.length)return d.push(f);
n=l[0];r=l.slice(1);k=_.keys(p);return _.each(c.ticks[n].ticks,function(c,g){var l;if(a||_.contains(k,""+c.location))return l=_.clone(f),l[n]=c.value,b(d,l,r,p[c.location])})};this.rowHeaders=[];this.colHeaders=[];b(this.rowHeaders,{},this.rows,this.dataIndexByRows);b(this.colHeaders,{},this.columns,this.dataIndexByCols);return{rowHeaders:this.rowHeaders,colHeaders:this.colHeaders}};b.prototype.makeFormatters=function(){var a,b,c,h,f,l;f=this.spec.values;l=[];c=0;for(h=f.length;c<h;c++)b=f[c],l.push(b["var"]);
b={};h=0;for(f=l.length;h<f;h++)c=l[h],a=d.format.getExp(_.min(_.pluck(this.statData,c))),b[c]=d.format.number(a);return b};b.prototype.get=function(a,b,c){var d,f,l,p,n;f=this.dataIndexByRows;n=this.rows;l=0;for(p=n.length;l<p;l++)d=n[l],d=this.ticks[d].ticks[a[d]].location,null!=f&&null!=f[d]&&(f=f[d]);p=this.columns;a=0;for(l=p.length;a<l;a++)d=p[a],d=this.ticks[d].ticks[b[d]].location,null!=f&&null!=f[d]&&(f=f[d]);if(null!=f&&null!=f[c])return f[c]};return b}();f=function(){function b(a,b,g){this.callback=
b;this.prepare=g;this.render=c(this.render,this);this.generateTicks=c(this.generateTicks,this);if(null==a)throw d.error.defn("No pivot table specification is passed in!");this.make(a)}b.prototype.make=function(a){this.spec=l(a);return(new d.DataProcess(this.spec,[],this.spec.strict,d.parser.pivotToData)).make(this.spec,[],this.render)};b.prototype.generateTicks=function(a,b,c){var f,m,l,p,n,r,k,t,s,v,z;r={};v=["rows","columns"];k=0;for(t=v.length;k<t;k++)for(f=v[k],z=a[f],f=0,s=z.length;f<s;f++)n=
z[f],n=n["var"],p=c[n],l=_.pluck(b,n),l=d.domain.single(l,c[n],{}),p="cat"===p.type?{ticks:l.levels}:"num"===p.type?{numticks:(l.max-l.min)/p.bw}:(m=d["const"].approxTimeInSeconds[p.bw],{numticks:(l.max-l.min)/m}),l=d.tick.make(l,p,c[n].type),r[n]=l;return r};b.prototype.render=function(a,b,c){var f,m,l,p,n,u,k,t,s,v,z,x;a=this.generateTicks(this.spec,b,c);b=new r(b,a,this.spec);c=b.makeHeaders();a=c.rowHeaders;c=c.colHeaders;k=b.makeFormatters();f=this.spec.columns.length;m=this.spec.rows.length;
l=this.spec.values.length;if(!$)throw d.error.depn("Pivot Tables require jQuery!");z=$("<table></table>").attr("border","1px solid black");z.attr("cellspacing",0);z.attr("cellpadding",0);for(t=0;t<f;){v=$("<tr></tr>");n=this.spec.columns[t]["var"];0===t&&1<m&&(s=$("<td></td>"),s.attr("rowspan",f),s.attr("colspan",m-1),v.append(s));v.append($("<th>"+n+":</th>").attr("align","right"));for(s=0;s<c.length;){p=c[s][n];for(u=1;s+u<c.length&&p===c[s+u][n];)u++;p=$("<td class='heading'>"+p+"</td>").attr("colspan",
u*l);p.attr("align","center");v.append(p);s+=u}z.append(v);t++}v=$("<tr></tr>");0===m&&(s=$("<td class='spacing'></td>"),s.attr("rowspan",a.length+1),v.append(s));for(t=0;t<m;)n=this.spec.rows[t]["var"],v.append($("<th>"+n+"</th>").attr("align","center")),t++;for(t=0;t<c.length;){f=this.spec.values;s=0;for(n=f.length;s<n;s++)p=f[s],p=$("<td class='heading'>"+p["var"]+"</td>"),p.attr("align","center"),v.append(p);t++}z.append(v);for(t=0;t<a.length;){v=$("<tr></tr>");m=this.spec.rows;s=0;for(f=m.length;s<
f;s++)if(n=m[s],n=n["var"],p=a[t][n],0===t||p!==a[t-1][n]){for(l=1;t+l<a.length&&p===a[t+l][n];)l++;p=$("<td class='heading'>"+p+"</td>").attr("rowspan",l);p.attr("align","center");p.attr("valign","middle");v.append(p)}for(s=0;s<c.length;){n=c[s];f=a[t];x=this.spec.values;l=0;for(u=x.length;l<u;l++)m=x[l],p=(p=b.get(f,n,m["var"]))?k[m["var"]](p):"-",v.append($("<td class='value'>"+p+"</td>").attr("align","right"));s++}z.append(v);t++}this.prepare&&this.prepare(this);this.spec.width&&z.attr("width",
this.spec.width);this.spec.height&&z.attr("height",this.spec.height);this.dom=_.isString(this.spec.dom)?$("#"+this.spec.dom):$(this.spec.dom);this.dom.empty();this.dom.append(z);if(this.callback)return this.callback(null,this)};return b}();d.pivot=function(b,a,c){return new f(b,a,c)}}).call(this);(function(){var f,r,l=function(b,a){return function(){return b.apply(a,arguments)}},c=[].indexOf||function(b){for(var a=0,c=this.length;a<c;a++)if(a in this&&this[a]===b)return a;return-1};r=function(b){_.isString(b.value)&&
(b.value={"var":b.value});return b};f=function(){function b(a,b,c){this.render=l(this.render,this);this.handleEvent=l(this.handleEvent,this);if(null==a)throw d.error.defn("No numeral specification is passed in!");this.handlers=[];this.callback=b;this.prepare=c;this.make(a)}b.prototype.make=function(a){if(!a.value)throw d.error.defn("No value defined in numeral.");this.spec=r(a);return(new d.DataProcess(this.spec,[],this.spec.strict,d.parser.numeralToData)).make(this.spec,[],this.render)};b.prototype.handleEvent=
function(a){var b;b=this;return _.throttle(function(c){var f,m,l,p,n;"guide-title"===a&&(c=d.event.make(a,this),c.dispatch(b.dom));p=b.handlers;n=[];m=0;for(l=p.length;m<l;m++)f=p[m],_.isFunction(f)?n.push(f(a,this,c,b)):n.push(f.handle(a,this,c,b));return n},300)};b.prototype.addHandler=function(a){if(0>c.call(this.handlers,a))return this.handlers.push(a)};b.prototype.render=function(a,b,c){var f,m,l,p;if(null!=a)console.error(a);else{this.value=b[0][this.spec.value["var"]];this.title=null!=(l=this.spec.title)?
l:this.spec.value["var"];a=0<(m=this.value)&&1>m?void 0:0===this.value%1?0:-1;this.value=d.format.number(a)(this.value);if(_.isNaN(this.value)||"NaN"===this.value)this.value="Not a Number";null!=this.prepare&&this.prepare(this);this.dom=this.spec.dom;this.width=null!=(f=this.spec.width)?f:200;this.height=null!=(p=this.spec.height)?p:100;null==this.paper&&(this.paper=this._makePaper(this.dom,this.width,this.height,this));null==this.titleObj&&(this.titleObj=this.paper.text(this.width/2,10,""));this.titleObj.attr({text:this.title,
"font-size":"12px"});this.titleObj.click(this.handleEvent("guide-title"));this.titleObj.hover(this.handleEvent("tover"),this.handleEvent("tout"));null==this.textObj&&(this.textObj=this.paper.text(this.width/2,this.height/2,""));this.textObj.attr({x:this.width/2,y:7+this.height/2,text:this.value});f=this.textObj.getBBox();m=f.width;f=f.height;m=Math.min(0.9*this.width/m,0.9*(this.height-14)/f);this.textObj.transform("s"+m);this.callback&&this.callback(null,this)}};b.prototype._makePaper=function(a,
b,c,f){return d.paper(a,b,c,{numeral:f})};return b}();d.numeral=function(b,a,c){try{return new f(b,a,c)}catch(g){console.log(g);if(null!=a)return a(g,null);throw d.error.defn("Bad specification.");}}}).call(this);(function(){var f,r,l,c={}.hasOwnProperty,b=function(a,b){function d(){this.constructor=a}for(var f in b)c.call(b,f)&&(a[f]=b[f]);d.prototype=b.prototype;a.prototype=new d;a.__super__=b.prototype;return a};r=function(){function a(a,b,c){null==a&&(a="polyjsEvent");this.eventName=a;this.cancelable=
this.bubbles=!0;this.detail={type:c,data:b}}a.prototype.dispatch=function(a){var b;b=new CustomEvent(this.eventName,{detail:this.detail});if(null!=a)return a.dispatchEvent(b)};return a}();l=function(a){function c(a,b){c.__super__.constructor.call(this,"title-click",a,b)}b(c,a);return c}(r);f=function(a){function c(a,b){c.__super__.constructor.call(this,"legend-click",a,b)}b(c,a);return c}(r);d.event={};d.event.make=function(a,b){if("guide-title"===a||"guide-titleH"===a||"guide-titleV"===a)return new l(b,
a);if("legend-label"===a||"legend-title"===a)return new f(b,a);throw d.error.defn("No such event "+a+".");}}).call(this);(function(){var f,r=function(c,b){return function(){return c.apply(b,arguments)}},l=[].indexOf||function(c){for(var b=0,a=this.length;b<a;b++)if(b in this&&this[b]===c)return b;return-1};f=function(){function c(b,a,c){null==a&&(a=null);null==c&&(c=null);this.handleEvent=r(this.handleEvent,this);this.render=r(this.render,this);this.mergeDomains=r(this.mergeDomains,this);this.merge=
r(this.merge,this);this.maybeDispose=r(this.maybeDispose,this);if(null==b)throw d.error.defn("No graph specification is passed in!");this.handlers=[];this.coord=this.paper=this.dims=this.legends=this.axes=this.scaleSet=null;this.facet=d.facet.make();this.dataSubscribed=[];this.callback=a;this.prepare=c;this.make(b);this.addHandler(d.handler.tooltip())}c.prototype.maybeDispose=function(b){var a;a=d.render(this.handleEvent,this.paper,this.scaleSet.scales,this.coord);a=a();if(this.coord&&!_.isEqual(this.coord.spec,
b.coord))return this.scaleSet&&(this.scaleSet.disposeGuides(a),this.scaleSet=null),this.coord=null};c.prototype.make=function(b){var a,c,f,h,m,l,p,n,r,k=this;null!=b?(b=d.spec.toStrictMode(b),d.spec.check(b),this.spec=b):b=this.spec;this.scaleSet&&this.maybeDispose(b);null==this.coord&&(this.coord=d.coord.make(this.spec.coord));this.facet.make(b);c=this.handleEvent("data");f=function(){var a,c,d,e;d=b.layers;e=[];h=a=0;for(c=d.length;a<c;h=++a)m=d[h],e.push(m.data);return e}();r=_.difference(f,this.dataSubscribed);
p=0;for(n=r.length;p<n;p++)a=r[p],a.subscribe(c);this.dataSubscribed=f;l=_.after(b.layers.length,this.merge);this.dataprocess={};this.processedData={};return _.each(b.layers,function(a,c){var e;b=k.spec.layers[c];e=_.values(k.facet.specgroups);k.dataprocess[c]=new d.DataProcess(b,e,b.strict);return k.dataprocess[c].make(b,e,function(a,b,e){if(null!=a)if(console.error(a),null!=k.callback)k.callback(a,null);else throw d.error.defn("Error processing data!");k.processedData[c]={statData:b,metaData:e};
return l()})})};c.prototype.merge=function(){var b=this;this.layers=_.map(this.spec.layers,function(a){return d.layer.make(a,b.spec.strict,b.spec.guides)});this.facet.calculate(this.processedData,this.layers);this.mergeDomains();return this.render()};c.prototype.mergeDomains=function(){var b,a,c;b=_.map(this.facet.panes,function(a){return a.domains});b=d.domain.merge(b);this.scaleSet||(a=d.dim.guess(this.spec,this.facet.getGrid()),this.coord.make(a),c=this.coord.ranges(),this.scaleSet=d.scaleset(c,
this.coord));this.scaleSet.make(this.spec.guides,b,this.layers);this.dims=this._makeDimensions(this.spec,this.scaleSet,this.facet,a);this.coord.make(this.dims);this.ranges=this.coord.ranges();return this.scaleSet.setRanges(this.ranges)};c.prototype.render=function(){var b,a;if(null==this.spec.render||!1!==this.spec.render)if(b=this.scaleSet.scales,this.coord.setScales(b),this.scaleSet.coord=this.coord,a=this.scaleSet.makeGuides(this.spec,this.dims),this.axes=a.axes,this.titles=a.titles,this.legends=
a.legends,null!=this.prepare&&this.prepare(this),this.dom=this.spec.dom,null==this.paper&&(this.paper=this._makePaper(this.dom,this.dims.width,this.dims.height,this)),b=d.render(this.handleEvent,this.paper,b,this.coord),this.facet.render(b,this.dims,this.coord),this.scaleSet.renderGuides(this.dims,b,this.facet),null!=this.callback)return this.callback(null,this)};c.prototype.addHandler=function(b){if(0>l.call(this.handlers,b))return this.handlers.push(b)};c.prototype.removeHandler=function(b){return this.handlers.splice(_.indexOf(this.handlers,
b),1)};c.prototype.handleEvent=function(b){var a;a=this;return _.throttle(function(c){var f,h,m,l,p;if("touchstart"===b||"touchmove"===b||"touchend"===b||"touchcancel"===b)d.touch(b,this,c,a);else if("select"===b){h=c.start;f=c.end;h=a.facet.getFacetInfo(a.dims,h.x,h.y);if(!h)return;l=h.col;p=h.row;m=h.adjusted;h=_.clone(m);m=a.facet.getFacetInfo(a.dims,f.x,f.y,{col:l,row:p}).adjusted;f=_.clone(m);this.evtData="cartesian"===a.coord.type?a.scaleSet.fromPixels(h,f):null}else if("data"===b)this.evtData=
{};else if("reset"===b||"click"===b||"mover"===b||"mout"===b||"tover"===b||"tout"===b||"gover"===b||"gout"===b||"guide-click"===b)this.tooltip=this.data("t"),this.evtData=this.data("e"),"guide-click"===b&&"text"===this.type&&null!=this.evtData&&(c="legendTitle"===this.evtData.value?d.event.make("legend-title",this):d.event.make("legend-label",this),c.dispatch(a.dom));else if("guide-title"===b||"guide-titleH"===b||"guide-titleV"===b)this.tooltip=this.data("t"),this.evtData=this.data("e"),c=d.event.make(b,
this),c.dispatch(a.dom);p=a.handlers;m=[];h=0;for(l=p.length;h<l;h++)f=p[h],_.isFunction(f)?m.push(f(b,this,c,a)):m.push(f.handle(b,this,c,a));return m},300)};c.prototype._makeScaleSet=function(b,a,c){b=this.coord.ranges();return d.scaleset(b,this.coord)};c.prototype._makeDimensions=function(b,a,c,f){a.makeGuides(b,f);return d.dim.make(b,a,c.getGrid())};c.prototype._makePaper=function(b,a,c,f){return d.paper(b,a,c,{graph:f})};return c}();d.chart=function(c,b,a){try{return new f(c,b,a)}catch(e){if(null!=
b)return b(e,null);throw d.error.defn("Bad specification.");}}}).call(this)}return{data:d.data,chart:d.chart,pivot:d.pivot,numeral:d.numeral,handler:d.handler,debug:d}}(window.polyjs);
