(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},194:function(t,e,n){"use strict";var r,i,a=n(201),l=RegExp.prototype.exec,o=String.prototype.replace,c=l,u=(r=/a/,i=/b*/g,l.call(r,"a"),l.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),s=void 0!==/()??/.exec("")[1];(u||s)&&(c=function(t){var e,n,r,i,c=this;return s&&(n=new RegExp("^"+c.source+"$(?!\\s)",a.call(c))),u&&(e=c.lastIndex),r=l.call(c,t),u&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),s&&r&&r.length>1&&o.call(r[0],n,function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)}),r}),t.exports=c},198:function(t,e,n){"use strict";var r=n(204)(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},199:function(t,e,n){"use strict";var r=n(34),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var a=n.call(t,e);if("object"!=typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},200:function(t,e,n){"use strict";n(205);var r=n(33),i=n(43),a=n(42),l=n(193),o=n(12),c=n(194),u=o("species"),s=!a(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),v=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=o(t),g=!a(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),f=g?!a(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e}):void 0;if(!g||!f||"replace"===t&&!s||"split"===t&&!v){var h=/./[p],_=n(l,p,""[t],function(t,e,n,r,i){return e.exec===c?g&&!i?{done:!0,value:h.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),d=_[0],m=_[1];r(String.prototype,t,d),i(RegExp.prototype,p,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)})}}},201:function(t,e,n){"use strict";var r=n(19);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},202:function(t,e,n){var r=n(20),i=n(32),a=n(12)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},203:function(t,e,n){var r=n(193);t.exports=function(t){return Object(r(t))}},204:function(t,e,n){var r=n(65),i=n(193);t.exports=function(t){return function(e,n){var a,l,o=String(i(e)),c=r(n),u=o.length;return c<0||c>=u?t?"":void 0:(a=o.charCodeAt(c))<55296||a>56319||c+1===u||(l=o.charCodeAt(c+1))<56320||l>57343?t?o.charAt(c):a:t?o.slice(c,c+2):l-56320+(a-55296<<10)+65536}}},205:function(t,e,n){"use strict";var r=n(194);n(66)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},206:function(t,e,n){"use strict";var r=n(19),i=n(203),a=n(64),l=n(65),o=n(198),c=n(199),u=Math.max,s=Math.min,v=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,g=/\$([$&`']|\d\d?)/g;n(200)("replace",2,function(t,e,n,f){return[function(r,i){var a=t(this),l=null==r?void 0:r[e];return void 0!==l?l.call(r,a,i):n.call(String(a),r,i)},function(t,e){var i=f(n,t,this,e);if(i.done)return i.value;var v=r(t),p=String(this),g="function"==typeof e;g||(e=String(e));var _=v.global;if(_){var d=v.unicode;v.lastIndex=0}for(var m=[];;){var b=c(v,p);if(null===b)break;if(m.push(b),!_)break;""===String(b[0])&&(v.lastIndex=o(p,a(v.lastIndex),d))}for(var x,C="",k=0,y=0;y<m.length;y++){b=m[y];for(var S=String(b[0]),w=u(s(l(b.index),p.length),0),P=[],A=1;A<b.length;A++)P.push(void 0===(x=b[A])?x:String(x));var D=b.groups;if(g){var I=[S].concat(P,w,p);void 0!==D&&I.push(D);var E=String(e.apply(void 0,I))}else E=h(S,p,w,P,D,e);w>=k&&(C+=p.slice(k,w)+E,k=w+S.length)}return C+p.slice(k)}];function h(t,e,r,a,l,o){var c=r+t.length,u=a.length,s=g;return void 0!==l&&(l=i(l),s=p),n.call(o,s,function(n,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(c);case"<":o=l[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>u){var p=v(s/10);return 0===p?n:p<=u?void 0===a[p-1]?i.charAt(1):a[p-1]+i.charAt(1):n}o=a[s-1]}return void 0===o?"":o})}})},207:function(t,e,n){"use strict";var r=n(202),i=n(19),a=n(67),l=n(198),o=n(64),c=n(199),u=n(194),s=n(42),v=Math.min,p=[].push,g=!s(function(){RegExp(4294967295,"y")});n(200)("split",2,function(t,e,n,s){var f;return f="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);for(var a,l,o,c=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=void 0===e?4294967295:e>>>0,f=new RegExp(t.source,s+"g");(a=u.call(f,i))&&!((l=f.lastIndex)>v&&(c.push(i.slice(v,a.index)),a.length>1&&a.index<i.length&&p.apply(c,a.slice(1)),o=a[0].length,v=l,c.length>=g));)f.lastIndex===a.index&&f.lastIndex++;return v===i.length?!o&&f.test("")||c.push(""):c.push(i.slice(v)),c.length>g?c.slice(0,g):c}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,i,r):f.call(String(i),n,r)},function(t,e){var r=s(f,t,this,e,f!==n);if(r.done)return r.value;var u=i(t),p=String(this),h=a(u,RegExp),_=u.unicode,d=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),m=new h(g?u:"^(?:"+u.source+")",d),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===p.length)return null===c(m,p)?[p]:[];for(var x=0,C=0,k=[];C<p.length;){m.lastIndex=g?C:0;var y,S=c(m,g?p:p.slice(C));if(null===S||(y=v(o(m.lastIndex+(g?0:C)),p.length))===x)C=l(p,C,_);else{if(k.push(p.slice(x,C)),k.length===b)return k;for(var w=1;w<=S.length-1;w++)if(k.push(S[w]),k.length===b)return k;C=x=y}}return k.push(p.slice(x)),k}]})},221:function(t,e,n){t.exports=n.p+"static/font/configurable-platform-plugins-relationship.25845ce.svg"},222:function(t,e,n){var r=n(280);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(15).default)("3f05bc8a",r,!0,{})},278:function(t,e,n){t.exports=n.p+"static/img/atomic-design.330e96e.jpg"},279:function(t,e,n){"use strict";var r=n(222);n.n(r).a},280:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,".img-list[data-v-2aec6dff] {\n  margin: 20px auto;\n}\n.img-list ul[data-v-2aec6dff] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n.img-list ul li[data-v-2aec6dff] {\n  margin: 0 50px;\n  text-align: center;\n}\n.img-list ul li img[data-v-2aec6dff] {\n  margin: 0 auto;\n  display: block;\n  width: 100%;\n}\n.img-list ul li span[data-v-2aec6dff] {\n  display: inline-block;\n  line-height: 30px;\n  font-size: 12px;\n}\n",""])},340:function(t,e,n){"use strict";n.r(e);var r=n(195),i=n(197),a=n(196),l={components:{iArticle:r.a,inAnchor:i.a},data:function(){return{code:a.a}}},o=(n(279),n(0)),c=Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("i-article",[r("article",[r("h1",[t._v("主要原理")]),t._v(" "),r("p",[t._v("本文介绍关于"),r("code",[r("strong",[t._v("CP")])]),t._v("背后的设计思路，主要包含：")]),t._v(" "),r("ul",[r("li",[t._v("（1）、从组件到模块，再到模板，最终到页面的代码组织形式，以及该形式所践行的"),r("a",{attrs:{target:"_blank",href:"http://bradfrost.com/blog/post/atomic-web-design/"}},[t._v("Atomic Design")]),t._v("的理论;")]),t._v(" "),r("li",[t._v("（2）、CP如何基于"),r("a",{attrs:{href:"https://cn.vuejs.org"}},[t._v("vue.js")]),t._v("强大的生态系统(vue全家桶和开源组件库)和完善的工具链(vue-cli)来实现基于vue-cli插件机制的模板复用方案。")]),t._v(" "),r("li",[t._v("（3）、CP所包含的一些主要代码库，以及它们都做了什么。")])]),t._v(" "),r("alert",[r("code",[r("router-link",{attrs:{to:"/docs/start"}},[t._v("Quick Start")])],1),t._v("这一章节通过真实的例子演示了"),r("code",[t._v("CP")]),t._v("的主要功能，对于理解其原理非常有帮助，建议先阅读之后，再继续探索。")]),t._v(" "),r("inAnchor",{attrs:{title:"CP践行了Atomic Design",h2:""}}),t._v(" "),r("p",[t._v("\n            前端组件化是对"),r("a",{attrs:{target:"_blank",href:"http://bradfrost.com/blog/post/atomic-web-design/"}},[t._v("Atomic Design")]),t._v("最好的实践，但并不是全部。\n            CP基于社区成熟的组件库，针对平台开发中通用功能构建出"),r("strong",[t._v("模块（module）")]),t._v("，如\n            表单（"),r("a",{attrs:{target:"_blank",href:"https://github.com/JSON-Drived-Configurable-Platform/form-generator-iview"}},[t._v("FormGeneratorIView")]),t._v("）、\n            可视化（"),r("a",{attrs:{target:"_blank",href:"https://github.com/JSON-Drived-Configurable-Platform/data-vis-iview"}},[t._v("DataVisIView")]),t._v("）\n            等；\n            针对通用场景构建出"),r("strong",[t._v("模板（Template）")]),t._v("，它们通常是基于某一个模块或者多个模块来开发，如\n            "),r("a",{attrs:{target:"_blank",href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp-template-data-report"}},[t._v("cp-template-data-report")]),t._v("、\n            "),r("a",{attrs:{target:"_blank",href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp-template-curd"}},[t._v("cp-template-data-curd")]),t._v("。\n        ")]),t._v(" "),r("p",[t._v("\n            我们希望通过这样的代码分层，来提高平台开发中代码的复用性。最重要的是，我们希望有一种机制可以让这些模块和模板被更广泛的复用。\n        ")]),t._v(" "),r("p",{staticClass:"img-list"},[r("ul",[r("li",[r("a",{attrs:{target:"_blank",href:"http://bradfrost.com/blog/post/atomic-web-design/"}},[r("img",{attrs:{width:"60%",src:n(278),alt:"Atomic Design"}})]),t._v(" "),r("a",{attrs:{target:"_blank",href:"http://bradfrost.com/blog/post/atomic-web-design/"}},[r("span",[t._v("Atomic Design")])])])])]),t._v(" "),r("inAnchor",{attrs:{title:"基于vue-cli的模板复用机制",h2:""}}),t._v(" "),r("p",[t._v("\n            为了使模板能够被更广泛的复用，我们使用了"),r("code",[r("a",{attrs:{target:"_blank",href:"https://cli.vuejs.org/"}},[t._v("vue-cli")])]),t._v("。\n            得益于其"),r("a",{attrs:{target:"_blank",href:"https://cli.vuejs.org/guide/plugins-and-presets.html#plugins"}},[t._v("插件机制")]),t._v("，\n\n            我们可以很方便的创建"),r("router-link",{attrs:{to:"/concept/scaffold-plugin"}},[t._v("脚手架插件(Scaffold Plugin)")]),t._v("\n            和"),r("router-link",{attrs:{to:"/concept/template-plugin"}},[t._v("模板插件(Template Plugin)")]),t._v("。\n\n            其中模板插件又分为"),r("router-link",{attrs:{to:"/concept/layout-template"}},[t._v("平台布局模板插件(Layout Template Plugin)")]),t._v("\n            和\n            "),r("router-link",{attrs:{to:"/concept/page-template"}},[t._v("页面模板插件(Page Template Plugin)")]),t._v("。\n        ")],1),t._v(" "),r("p",{staticClass:"img-list"},[r("ul",[r("li",[r("img",{attrs:{width:"60%",src:n(221),alt:"Atomic Design"}}),t._v(" "),r("span",[t._v("CP插件和模板之间的关系")])])])]),t._v(" "),r("p",[t._v("基于上述的设计，通过将可复用的代码抽离，并按照一定的约定和规范封装到插件中。再通过"),r("code",[r("a",{attrs:{href:"https://cli.vuejs.org/"}},[t._v("vue-cli")])]),t._v("的插件机制添加到项目中，即达到了复用的目的。")]),t._v(" "),r("p",[t._v("\n            其中"),r("router-link",{attrs:{to:"/concept/scaffold-plugin"}},[t._v("脚手架插件(Scaffold Plugin)")]),t._v("起到了纽带的作用，将一个个独立的模板插件有效关联起来。\n        ")],1),t._v(" "),r("inAnchor",{attrs:{title:"Configurible Platform的特点",h2:""}}),t._v(" "),r("ul",[r("li",[t._v("\n                （1）、"),r("strong",[t._v("JSON配置: ")]),t._v("\n                不论是功能模块，还是页面模板，为了提高其复用性，它们都支持通过JSON配置来扩展其功能。这个特性是可配置的(Configurable)的核心。\n            ")]),t._v(" "),r("li",[t._v("\n                （2）、"),r("strong",[t._v("相似场景的复用:")]),t._v("\n                模块、模板、脚手架的分层设计和插件机制都是为这个目的服务的。CP中的模板可以通过插件机制添加到项目中，也可以直接下载并粘贴代码。即使你不打算使用这些页面模板和模块工具，在解决相似场景的问题时，它们也可以作为参考。\n            ")]),t._v(" "),r("li",[t._v("（3）、"),r("strong",[t._v("模块的独立和标准:")]),t._v("\n                CP中的模块都是标准的npm包。它们专注于企业级应用的某一特定场景，比如复杂表单和可视化图表。它们都有独自的文档，你可以使用它们构建模板，也可以直接在项目中使用它们。\n            ")]),t._v(" "),r("li",[t._v("\n                （4）、"),r("strong",[t._v("不仅限于页面UI的复用:")]),t._v("\n                CP不仅限于页面UI的复用，更在于整个业务场景的复用，包含完整的页面布局与交互(UI)、与服务端的交互通信(service)、页面路由的申明(router)，以及你可以通过简单的配置来对以上的功能进行调整，快速适配业务需要。\n            ")])]),t._v(" "),r("inAnchor",{attrs:{title:"主要代码库",h2:""}}),t._v(" "),r("p",[t._v("CP所包含的一些主要代码库")]),t._v(" "),r("ul",[r("li",[r("strong",[r("a",{attrs:{target:"_blank",href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp"}},[t._v("脚手架插件vue-cli-plugin-cp:")])]),t._v(" "),r("strong",[t._v("vue-cli-plugin-cp")]),t._v("目前是唯一的脚手架插件，负责处理动态加载其它的Layout模板和页面模板，"),r("router-link",{attrs:{to:"/development/router-config"}},[t._v("动态加载这些模板的路由（Router）")]),t._v("，"),r("router-link",{attrs:{to:"/development/service-config"}},[t._v("注册这些模板的服务（Service）")]),t._v("。\n                除此之外还包含了默认的Layout模板代码、一个简单的Home页面模板（用来展示CP的最新动态，模板、模块列表等信息）。查看"),r("router-link",{attrs:{to:"/concept/plugin-system"}},[t._v("概念/插件机制")]),t._v("章节了解更多信息。\n            ")],1),t._v(" "),r("li",[r("strong",[t._v("模块：")]),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/JSON-Drived-Configurable-Platform/form-generator-iview"}},[t._v("JSON表单生成工具：FormGenerator")]),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/JSON-Drived-Configurable-Platform/data-vis-iview"}},[t._v("数据可视化报表渲染工具：DataVis")]),r("br")]),t._v(" "),r("li",[r("strong",[t._v("模板插件：")]),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp-template-data-report"}},[t._v("可视化数据报表模板插件：vue-cli-plugin-cp-template-data-report")]),r("br"),t._v(" "),r("a",{attrs:{href:"https://github.com/JSON-Drived-Configurable-Platform/vue-cli-plugin-cp-template-curd"}},[t._v("JSON配置驱动的CURD模板插件：vue-cli-plugin-cp-template-curd")])]),t._v(" "),r("alert",[t._v("更多模板正在开发中...如果你想贡献自己的模板，请参考："),r("router-link",{attrs:{to:"/contribute"}},[t._v("Contribute")]),t._v("章节")],1)],1)],1)])},[],!1,null,"2aec6dff",null);e.default=c.exports}}]);