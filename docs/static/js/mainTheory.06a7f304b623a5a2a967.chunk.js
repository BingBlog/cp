(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(t,n,e){var r=e(80),i=e(103),o=e(104),a=Object.defineProperty;n.f=e(85)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},101:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},102:function(t,n,e){"use strict";var r=e(80);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},103:function(t,n,e){t.exports=!e(85)&&!e(84)(function(){return 7!=Object.defineProperty(e(114)("div"),"a",{get:function(){return 7}}).a})},104:function(t,n,e){var r=e(82);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},105:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},106:function(t,n,e){var r=e(99);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},107:function(t,n,e){var r=e(82),i=e(94),o=e(83)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},108:function(t,n,e){var r=e(86);t.exports=function(t){return Object(r(t))}},109:function(t,n,e){var r=e(87),i=e(86);t.exports=function(t){return function(n,e){var o,a,c=String(i(n)),u=r(e),l=c.length;return u<0||u>=l?t?"":void 0:(o=c.charCodeAt(u))<55296||o>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):o:t?c.slice(u,u+2):a-56320+(o-55296<<10)+65536}}},110:function(t,n,e){var r=e(94),i=e(83)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(a=r(n))&&"function"==typeof n.callee?"Arguments":a}},111:function(t,n){t.exports=!1},112:function(t,n,e){"use strict";var r=e(89);e(113)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},113:function(t,n,e){var r=e(81),i=e(88),o=e(90),a=e(98),c=e(106),u=function(t,n,e){var l,s,v,f,p=t&u.F,g=t&u.G,h=t&u.S,d=t&u.P,_=t&u.B,m=g?r:h?r[n]||(r[n]={}):(r[n]||{}).prototype,x=g?i:i[n]||(i[n]={}),b=x.prototype||(x.prototype={});for(l in g&&(e=n),e)v=((s=!p&&m&&void 0!==m[l])?m:e)[l],f=_&&s?c(v,r):d&&"function"==typeof v?c(Function.call,v):v,m&&a(m,l,v,t&u.U),x[l]!=v&&o(x,l,f),d&&b[l]!=v&&(b[l]=v)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},114:function(t,n,e){var r=e(82),i=e(81).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},115:function(t,n,e){t.exports=e(95)("native-function-to-string",Function.toString)},116:function(t,n,e){var r=e(80),i=e(99),o=e(83)("species");t.exports=function(t,n){var e,a=r(t).constructor;return void 0===a||null==(e=r(a)[o])?n:i(e)}},117:function(t,n,e){"use strict";var r=e(80),i=e(108),o=e(91),a=e(87),c=e(92),u=e(93),l=Math.max,s=Math.min,v=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;e(97)("replace",2,function(t,n,e,g){return[function(r,i){var o=t(this),a=null==r?void 0:r[n];return void 0!==a?a.call(r,o,i):e.call(String(o),r,i)},function(t,n){var i=g(e,t,this,n);if(i.done)return i.value;var v=r(t),f=String(this),p="function"==typeof n;p||(n=String(n));var d=v.global;if(d){var _=v.unicode;v.lastIndex=0}for(var m=[];;){var x=u(v,f);if(null===x)break;if(m.push(x),!d)break;""===String(x[0])&&(v.lastIndex=c(f,o(v.lastIndex),_))}for(var b,y="",S=0,w=0;w<m.length;w++){x=m[w];for(var P=String(x[0]),C=l(s(a(x.index),f.length),0),k=[],j=1;j<x.length;j++)k.push(void 0===(b=x[j])?b:String(b));var O=x.groups;if(p){var A=[P].concat(k,C,f);void 0!==O&&A.push(O);var E=String(n.apply(void 0,A))}else E=h(P,f,C,k,O,n);C>=S&&(y+=f.slice(S,C)+E,S=C+P.length)}return y+f.slice(S)}];function h(t,n,r,o,a,c){var u=r+t.length,l=o.length,s=p;return void 0!==a&&(a=i(a),s=f),e.call(c,s,function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":c=a[i.slice(1,-1)];break;default:var s=+i;if(0===s)return e;if(s>l){var f=v(s/10);return 0===f?e:f<=l?void 0===o[f-1]?i.charAt(1):o[f-1]+i.charAt(1):e}c=o[s-1]}return void 0===c?"":c})}})},118:function(t,n,e){"use strict";var r=e(107),i=e(80),o=e(116),a=e(92),c=e(91),u=e(93),l=e(89),s=e(84),v=Math.min,f=[].push,p=!s(function(){RegExp(4294967295,"y")});e(97)("split",2,function(t,n,e,s){var g;return g="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);for(var o,a,c,u=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,p=void 0===n?4294967295:n>>>0,g=new RegExp(t.source,s+"g");(o=l.call(g,i))&&!((a=g.lastIndex)>v&&(u.push(i.slice(v,o.index)),o.length>1&&o.index<i.length&&f.apply(u,o.slice(1)),c=o[0].length,v=a,u.length>=p));)g.lastIndex===o.index&&g.lastIndex++;return v===i.length?!c&&g.test("")||u.push(""):u.push(i.slice(v)),u.length>p?u.slice(0,p):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i,r):g.call(String(i),e,r)},function(t,n){var r=s(g,t,this,n,g!==e);if(r.done)return r.value;var l=i(t),f=String(this),h=o(l,RegExp),d=l.unicode,_=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(p?"y":"g"),m=new h(p?l:"^(?:"+l.source+")",_),x=void 0===n?4294967295:n>>>0;if(0===x)return[];if(0===f.length)return null===u(m,f)?[f]:[];for(var b=0,y=0,S=[];y<f.length;){m.lastIndex=p?y:0;var w,P=u(m,p?f:f.slice(y));if(null===P||(w=v(c(m.lastIndex+(p?0:y)),f.length))===b)y=a(f,y,d);else{if(S.push(f.slice(b,y)),S.length===x)return S;for(var C=1;C<=P.length-1;C++)if(S.push(P[C]),S.length===x)return S;y=b=w}}return S.push(f.slice(b)),S}]})},129:function(t,n,e){var r=e(181);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(10).default)("86145220",r,!0,{})},178:function(t,n,e){t.exports=e.p+"static/img/atomic-design.330e96e.jpg"},179:function(t,n,e){t.exports=e.p+"static/font/configurable-platform-plugins-relationship.25845ce.svg"},180:function(t,n,e){"use strict";var r=e(129);e.n(r).a},181:function(t,n,e){(t.exports=e(9)(!1)).push([t.i,".img-list[data-v-0c293a92] {\n  margin: 20px auto;\n}\n.img-list ul[data-v-0c293a92] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.img-list ul li[data-v-0c293a92] {\n  margin: 0 50px;\n  text-align: center;\n}\n.img-list ul li img[data-v-0c293a92] {\n  margin: 0 auto;\n  display: block;\n  width: 100%;\n}\n.img-list ul li span[data-v-0c293a92] {\n  display: inline-block;\n  line-height: 30px;\n  font-size: 12px;\n}\n",""])},211:function(t,n,e){"use strict";e.r(n);var r=e(121),i=e(120),o=e(119),a={components:{iArticle:r.a,inAnchor:i.a},data:function(){return{code:o.a}}},c=(e(180),e(1)),u=Object(c.a)(a,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("i-article",[r("article",[r("h1",[t._v("Main Concept")]),t._v(" "),r("p",[t._v("本文介绍关于"),r("code",[r("strong",[t._v("CP")])]),t._v("背后的设计思路，主要包含：")]),t._v(" "),r("ul",[r("li",[t._v("从组件到模块，再到模板，最终到页面的代码组织形式，以及该形式所践行的Atomic Design的理论。")]),t._v(" "),r("li",[t._v("CP如何基于"),r("a",{attrs:{href:"https://cn.vuejs.org"}},[t._v("vue.js")]),t._v("强大的生态系统(vue全家桶和开源组件库)和完善的工具链(vue-cli)来实现基于vue-cli插件机制的模板复用方案。")]),t._v(" "),r("li",[t._v("CP所包含的一些主要代码库，以及它们都做了什么。")])]),t._v(" "),r("alert",[r("code",[r("router-link",{attrs:{to:"/docs/start"}},[t._v("Quick Start")])],1),t._v("这一章节通过真实的例子演示了"),r("code",[t._v("CP")]),t._v("的主要功能，对于理解其原理非常有帮助，建议先阅读之后，再继续探索。")]),t._v(" "),r("inAnchor",{attrs:{title:"CP践行了Atomic Design",h2:""}}),t._v(" "),r("p",[t._v("\n            前端组件化是对"),r("a",{attrs:{target:"_blank",href:"http://bradfrost.com/blog/post/atomic-web-design/"}},[t._v("Atomic Design")]),t._v("最好的实践，但并不是全部。\n            CP基于社区成熟的组件库，针对平台开发中通用功能构建出"),r("strong",[t._v("模块（module）")]),t._v("，如\n            表单（"),r("a",{attrs:{target:"_blank",href:"https://github.com/JSON-Drived-Configurable-Platform/form-generator-iview"}},[t._v("FormGeneratorIView")]),t._v("）、\n            可视化（"),r("a",{attrs:{target:"_blank",href:"https://github.com/JSON-Drived-Configurable-Platform/data-vis-iview"}},[t._v("DataVisIView")]),t._v("）\n            等；\n            针对通用场景构建出"),r("strong",[t._v("模板（Template）")]),t._v("，它们通常是基于某一个模块或者多个模块来开发，如\n            "),r("a",{attrs:{target:"_blank",href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp-template-data-report"}},[t._v("cp-template-data-report")]),t._v("、\n            "),r("a",{attrs:{target:"_blank",href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp-template-curd"}},[t._v("cp-template-data-curd")]),t._v("。\n        ")]),t._v(" "),r("p",[t._v("\n            我们希望通过这样的代码分层，来提高平台开发中代码的复用性。最重要的是，我们希望有一种机制可以让这些模块和模板被更广泛的复用。\n        ")]),t._v(" "),r("p",{staticClass:"img-list"},[r("ul",[r("li",[r("a",{attrs:{target:"_blank",href:"http://bradfrost.com/blog/post/atomic-web-design/"}},[r("img",{attrs:{width:"60%",src:e(178),alt:"Atomic Design"}})]),t._v(" "),r("a",{attrs:{target:"_blank",href:"http://bradfrost.com/blog/post/atomic-web-design/"}},[r("span",[t._v("Atomic Design")])])])])]),t._v(" "),r("inAnchor",{attrs:{title:"基于vue-cli的模板复用机制",h2:""}}),t._v(" "),r("p",[t._v("\n            为了使模板能够被更广泛的复用，我们使用了"),r("code",[r("a",{attrs:{target:"_blank",href:"https://cli.vuejs.org/"}},[t._v("vue-cli")])]),t._v("。\n            得益于其"),r("a",{attrs:{target:"_blank",href:"https://cli.vuejs.org/guide/plugins-and-presets.html#plugins"}},[t._v("插件机制")]),t._v("，\n\n            我们可以很方便的创建"),r("router-link",{attrs:{to:"/concept/scaffold-plugin"}},[t._v("脚手架插件(Scaffold Plugin)")]),t._v("\n            和"),r("router-link",{attrs:{to:"/concept/template-plugin"}},[t._v("模板插件(Template Plugin)")]),t._v("。\n\n            其中模板插件又分为"),r("router-link",{attrs:{to:"/concept/layout-template"}},[t._v("平台布局模板插件(Layout Template Plugin)")]),t._v("\n            和\n            "),r("router-link",{attrs:{to:"/concept/page-template"}},[t._v("页面模板插件(Page Template Plugin)")]),t._v("。\n        ")],1),t._v(" "),r("p",{staticClass:"img-list"},[r("ul",[r("li",[r("img",{attrs:{width:"60%",src:e(179),alt:"Atomic Design"}}),t._v(" "),r("span",[t._v("Relationship Between CP Plugins And Their Templates")])])])]),t._v(" "),r("p",[t._v("基于上述的设计，通过将可复用的代码抽离，并按照一定的约定和规范封装到插件中。再通过"),r("code",[r("a",{attrs:{href:"https://cli.vuejs.org/"}},[t._v("vue-cli")])]),t._v("的插件机制添加到项目中，即达到了复用的目的。")]),t._v(" "),r("p",[t._v("\n            其中"),r("router-link",{attrs:{to:"/concept/scaffold-plugin"}},[t._v("脚手架插件(Scaffold Plugin)")]),t._v("起到了纽带的作用，将一个个独立的模板插件有效关联起来。\n        ")],1),t._v(" "),r("inAnchor",{attrs:{title:"Configurible Platform的意义",h2:""}}),t._v(" "),r("p",[t._v("\n            CP的主要目的是"),r("strong",[t._v("相似场景的复用")]),t._v("。模块、模板、脚手架的分层设计和插件机制都是为这个目的服务的。\n        ")]),t._v(" "),r("p",[t._v("\n            CP中的模板可以通过插件机制添加到项目中，也可以直接下载并粘贴代码。\n            即使你不打算使用这些页面模板和模块工具，在解决相似场景的问题时，它们也可以作为参考。\n        ")]),t._v(" "),r("p",[t._v("\n            CP中的模块都是标准的npm包。它们专注于企业级应用的某一特定场景，比如复杂表单和可视化图表。\n            它们都有独自的文档，你可以使用它们构建模板，也可以直接在项目中使用它们。\n        ")]),t._v(" "),r("p",[t._v("\n            CP不仅限于页面UI的复用，更在于整个业务场景的复用，包含完整的页面布局与交互(UI)、与服务端的交互通信(service)、页面路由的申明(router),\n            以及你可以通过简单的配置来对以上的功能进行调整，快速适配业务需要。\n            对于模块和模板，为了提高其复用性，它们都支持通过JSON配置来扩展其功能。这个特性是可配置的(Configurable)的核心。\n        ")]),t._v(" "),r("inAnchor",{attrs:{title:"主要代码库",h2:""}}),t._v(" "),r("p",[t._v("CP所包含的一些主要代码库")]),t._v(" "),r("ul",[r("li",[r("strong",[r("a",{attrs:{target:"_blank",href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp"}},[t._v("脚手架插件vue-cli-plugin-cp:")])]),t._v(" "),r("strong",[t._v("vue-cli-plugin-cp")]),t._v("目前是唯一的脚手架插件，负责处理动态加载其它的Layout模板和页面模板，"),r("router-link",{attrs:{to:"/concept/router-config"}},[t._v("动态加载这些模板的路由（Router）")]),t._v("，"),r("router-link",{attrs:{to:"/concept/service-config"}},[t._v("注册这些模板的服务（Service）")]),t._v("。\n                除此之外还包含了默认的Layout模板代码、一个简单的Home页面模板（用来展示CP的最新动态，模板、模块列表等信息）。查看"),r("router-link",{attrs:{to:"/concept/scaffold-plugin"}},[t._v("Concept/Scaffold Plugin")]),t._v("章节了解更多信息。\n            ")],1),t._v(" "),r("li",[r("strong",[t._v("模块：")]),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/JSON-Drived-Configurable-Platform/form-generator-iview"}},[t._v("JSON表单生成工具：FormGenerator")]),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/JSON-Drived-Configurable-Platform/data-vis-iview"}},[t._v("数据可视化报表渲染工具：DataVis")]),r("br")]),t._v(" "),r("li",[r("strong",[t._v("模板插件：")]),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp-template-data-report"}},[t._v("可视化数据报表模板插件：vue-cli-plugin-cp-template-data-report")]),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp-template-curd"}},[t._v("JSON配置驱动的CURD模板插件：vue-cli-plugin-cp-template-curd")])]),t._v(" "),r("alert",[t._v("更多模板正在开发中...如果你想贡献自己的模板，请参考："),r("router-link",{attrs:{to:"/contribute"}},[t._v("Contribute")]),t._v("章节")],1)],1)],1)])},[],!1,null,"0c293a92",null);n.default=u.exports},80:function(t,n,e){var r=e(82);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},81:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},82:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},83:function(t,n,e){var r=e(95)("wks"),i=e(96),o=e(81).Symbol,a="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=r},84:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},85:function(t,n,e){t.exports=!e(84)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},86:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},87:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},88:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},89:function(t,n,e){"use strict";var r,i,o=e(102),a=RegExp.prototype.exec,c=String.prototype.replace,u=a,l=(r=/a/,i=/b*/g,a.call(r,"a"),a.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),s=void 0!==/()??/.exec("")[1];(l||s)&&(u=function(t){var n,e,r,i,u=this;return s&&(e=new RegExp("^"+u.source+"$(?!\\s)",o.call(u))),l&&(n=u.lastIndex),r=a.call(u,t),l&&r&&(u.lastIndex=u.global?r.index+r[0].length:n),s&&r&&r.length>1&&c.call(r[0],e,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=u},90:function(t,n,e){var r=e(100),i=e(105);t.exports=e(85)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},91:function(t,n,e){var r=e(87),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},92:function(t,n,e){"use strict";var r=e(109)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},93:function(t,n,e){"use strict";var r=e(110),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},94:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},95:function(t,n,e){var r=e(88),i=e(81),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(111)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},96:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},97:function(t,n,e){"use strict";e(112);var r=e(98),i=e(90),o=e(84),a=e(86),c=e(83),u=e(89),l=c("species"),s=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),v=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var f=c(t),p=!o(function(){var n={};return n[f]=function(){return 7},7!=""[t](n)}),g=p?!o(function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[l]=function(){return e}),e[f](""),!n}):void 0;if(!p||!g||"replace"===t&&!s||"split"===t&&!v){var h=/./[f],d=e(a,f,""[t],function(t,n,e,r,i){return n.exec===u?p&&!i?{done:!0,value:h.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),_=d[0],m=d[1];r(String.prototype,t,_),i(RegExp.prototype,f,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}}},98:function(t,n,e){var r=e(81),i=e(90),o=e(101),a=e(96)("src"),c=e(115),u=(""+c).split("toString");e(88).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,e,c){var l="function"==typeof e;l&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(l&&(o(e,a)||i(e,a,t[n]?""+t[n]:u.join(String(n)))),t===r?t[n]=e:c?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||c.call(this)})},99:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}}}]);