(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,,,,,,,,,,,,,,function(t,s,e){},function(t,s,e){},function(t,s,e){},function(t,s,e){"use strict";var n=e(15);e.n(n).a},function(t,s,e){"use strict";var n=e(16);e.n(n).a},function(t,s,e){"use strict";var n=e(17);e.n(n).a},function(t,s,e){"use strict";e.r(s);var n=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"index"},[s("app-header"),this._v(" "),s("div",{staticClass:"content row"},[s("app-left"),this._v(" "),s("div",{staticClass:"container col-sm-24 col-md-20",attrs:{id:"container"}},[s("div",{staticClass:"container-dv"},[s("by-function",{staticClass:"md"}),this._v(" "),s("by-data",{staticClass:"md"}),this._v(" "),s("by-date",{staticClass:"md"}),this._v(" "),s("by-phone",{staticClass:"md"}),this._v(" "),s("by-money",{staticClass:"md"})],1)])],1)],1)};n._withStripped=!0;var r=e(3),a=e.n(r),i=e(1),o=function(){var t=this.$createElement;this._self._c;return this._m(0)};o._withStripped=!0;var _,c=(_=function(t,s){return(_=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var e in s)s.hasOwnProperty(e)&&(t[e]=s[e])})(t,s)},function(t,s){function e(){this.constructor=t}_(t,s),t.prototype=null===s?Object.create(s):(e.prototype=s.prototype,new e)}),l=function(t,s,e,n){var r,i=arguments.length,o=i<3?s:null===n?n=Object.getOwnPropertyDescriptor(s,e):n;if("object"===("undefined"==typeof Reflect?"undefined":a()(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,s,e,n);else for(var _=t.length-1;_>=0;_--)(r=t[_])&&(o=(i<3?r(o):i>3?r(s,e,o):r(s,e))||o);return i>3&&o&&Object.defineProperty(s,e,o),o},h=function(t){function s(){return null!==t&&t.apply(this,arguments)||this}return c(s,t),s=l([i.a],s)}(i.b),v=(e(18),e(2)),p=Object(v.a)(h,o,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"app-header"},[s("a",{attrs:{href:"/"}})])}],!1,null,"58c4d181",null);p.options.__file="src/pages/index/components/app-header.vue";var u=p.exports,f=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"slide-bar by-sidebar col-sm-24 col-md-4"},[e("by-input",{staticClass:"search-input",attrs:{placeholder:"请输入内容"},model:{value:t.search,callback:function(s){t.search=s},expression:"search"}}),t._v(" "),e("nav",{staticClass:"by-nav"},t._l(t.list,(function(s,n){return e("div",{key:n},[e("h2",{staticClass:"by-nav__title"},[t._v(t._s(s.title))]),t._v(" "),e("ul",{staticClass:"by-nav__items active"},[e("div",[e("ul",{staticClass:"by-nav__child-items"},t._l(s.groups,(function(s,n){return e("li",{key:n,staticClass:"by-nav__child-item"},[e("a",{staticClass:"by-nav__component",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handleClickNavItem(s)}}},[t._v(t._s(s.title))])])})),0)])])])})),0)],1)};f._withStripped=!0;var m=[{title:"Function 函数",groups:[{title:"防抖函数",link:"fang-dou-han-shu"}]},{title:"Data 数据",groups:[{title:"深层拷贝",link:"shen-ceng-kao-bei"}]},{title:"Date 日期",groups:[{title:"日期格式化",link:"ge-shi-hua-ri-qi"},{title:"获取周范围",link:"huo-qu-dang-qian-zhou-de-suo-you-tian-shu"}]},{title:"Phone 手机号",groups:[{title:"格式化手机号",link:"ge-shi-hua-shou-ji-hao"},{title:"加密手机号",link:"jia-mi-shou-ji-hao"}]},{title:"Money 货币相关",groups:[{title:"转中文大写",link:"jiang-huo-bi-shu-zi-zhuan-zhong-wen-han-zi-da-xie"}]}],d=function(){var t=function(s,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var e in s)s.hasOwnProperty(e)&&(t[e]=s[e])})(s,e)};return function(s,e){function n(){this.constructor=s}t(s,e),s.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),g=function(t,s,e,n){var r,i=arguments.length,o=i<3?s:null===n?n=Object.getOwnPropertyDescriptor(s,e):n;if("object"===("undefined"==typeof Reflect?"undefined":a()(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,s,e,n);else for(var _=t.length-1;_>=0;_--)(r=t[_])&&(o=(i<3?r(o):i>3?r(s,e,o):r(s,e))||o);return i>3&&o&&Object.defineProperty(s,e,o),o},j=function(t){function s(){var s=null!==t&&t.apply(this,arguments)||this;return s.search="",s.list=m,s}return d(s,t),s.prototype.toggleMenu=function(t){var s=t.target.parentNode;s.classList.contains("active")?s.classList.remove("active"):s.classList.add("active")},s.prototype.handleClickNavItem=function(t){toAnchor(t.link)},s.prototype.filterListWithKeyword=function(t){var s=this;t=t.toLowerCase(),m.map((function(e){e.title.toLowerCase().includes(t)?s.list.push(e):e.groups.map((function(n){n.title.toLowerCase().includes(t)&&s.list.push(e)}))}))},s.prototype.onSearchChange=function(t){t?(this.list=[],this.filterListWithKeyword(t)):this.list=m},g([Object(i.c)("search")],s.prototype,"onSearchChange",null),s=g([i.a],s)}(i.b),b=(e(19),Object(v.a)(j,f,[],!1,null,"2dbf6e0a",null));b.options.__file="src/pages/index/components/app-left.vue";var y=b.exports,k=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Function 函数")]),t._v(" "),e("hr"),t._v(" "),t._m(0),t._v(" "),t._m(1),e("h4",[t._v("引入版本")]),t._v(" "),t._m(2),t._v(" "),e("h4",[t._v("参数")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("h4",[t._v("返回")]),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"highlight"},[e("div",{attrs:{slot:"demo"},slot:"demo"}),t._m(6)])])};k._withStripped=!0;var w=Object(v.a)({},k,[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("h2",{attrs:{id:"fang-dou-han-shu"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('fang-dou-han-shu')"}},[this._v("Ψ")]),this._v(" 防抖函数")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"chunk"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[this._v("byfunction.debounce(func: "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[this._v("Function")]),this._v(", "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("wait")]),this._v(": number);\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("1.0.0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("func:")]),this._v(" "),s("strong",[this._v("["),s("em",[this._v("Function")]),this._v("]")]),this._v(" 需要执行的函数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("wait:")]),this._v(" "),s("strong",[this._v("["),s("em",[this._v("number")]),this._v("]")]),this._v(" 防抖间隔时间，毫秒数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("func:")]),this._v(" "),s("strong",[this._v("["),s("em",[this._v("Function")]),this._v("]")]),this._v(": 返回新的抖动函数")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { byfunction } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'by-tools'")]),t._v(";\n\nbyfunction.debounce("),e("span",{pre:!0,attrs:{class:"hljs-function"}},[e("span",{pre:!0,attrs:{class:"hljs-params"}},[t._v("()")]),t._v("=>")]),t._v("{\n    "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("1")]),t._v(");\n}, "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("750")]),t._v(");\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// => 1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// --- after 750 ms")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// => 1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// --- after 750 ms")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// ...")]),t._v("\n")])])}],!1,null,null,null);w.options.__file="src/pages/index/markdown/byFunction.md";var E=w.exports,$=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Data 数据")]),t._v(" "),e("hr"),t._v(" "),t._m(0),t._v(" "),t._m(1),e("h4",[t._v("引入版本")]),t._v(" "),t._m(2),t._v(" "),e("h4",[t._v("参数")]),t._v(" "),t._m(3),t._v(" "),e("h4",[t._v("返回")]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"highlight"},[e("div",{attrs:{slot:"demo"},slot:"demo"}),t._m(5)])])};$._withStripped=!0;var C=Object(v.a)({},$,[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("h2",{attrs:{id:"shen-ceng-kao-bei"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('shen-ceng-kao-bei')"}},[this._v("Ψ")]),this._v(" 深层拷贝")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"chunk"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[this._v("data.deepClone<T>(obj: T): T;\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("1.0.0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("object:")]),this._v(" "),s("strong",[this._v("[object_]")]),this._v(" 需要转换的对象")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[s("em",[this._v("object")])]),this._v(": 一个深拷贝后的数据")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { data } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'by-tools'")]),t._v(";\n\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" obj = { "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'name'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'james'")]),t._v(",  "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'age'")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'25'")]),t._v(" };\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" deep = data.deepClone(obj);\n\n"),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(deep === obj);\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// => false")]),t._v("\n\n")])])}],!1,null,null,null);C.options.__file="src/pages/index/markdown/byData.md";var O=C.exports,D=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Date 日期")]),t._v(" "),e("hr"),t._v(" "),t._m(0),t._v(" "),t._m(1),e("h4",[t._v("引入版本")]),t._v(" "),t._m(2),t._v(" "),e("h4",[t._v("参数")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("h4",[t._v("返回")]),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"highlight"},[e("div",{attrs:{slot:"demo"},slot:"demo"}),t._m(6)]),t._m(7),t._v(" "),t._m(8),e("h4",[t._v("引入版本")]),t._v(" "),t._m(9),t._v(" "),e("h4",[t._v("参数")]),t._v(" "),e("p",[t._v("无")]),t._v(" "),e("h4",[t._v("返回")]),t._v(" "),t._m(10),t._v(" "),e("div",{staticClass:"highlight"},[e("div",{attrs:{slot:"demo"},slot:"demo"}),t._m(11)])])};D._withStripped=!0;var x=Object(v.a)({},D,[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("h2",{attrs:{id:"ge-shi-hua-ri-qi"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('ge-shi-hua-ri-qi')"}},[this._v("Ψ")]),this._v(" 格式化日期")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"chunk"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[this._v("date.formDate(datetime:string | "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[this._v("Date")]),this._v(", format?:string);\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("1.0.0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("datetime:")]),this._v(" "),s("strong",[this._v("["),s("em",[this._v("string | Date")]),this._v("]")]),this._v(" 需要转换的时间")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("format:")]),this._v(" "),s("strong",[this._v("["),s("em",[this._v("string")]),this._v("]")]),this._v(" 格式非必传，默认 'YYYY-MM-DD HH:mm:ss'")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[s("em",[this._v("string")])]),this._v(": 格式化后的时间")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { date } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'by-tools'")]),t._v(";\n\n\n"),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(date.formDate("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Date")]),t._v("));\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// => 2019-12-18 11:38:09")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(date.formDate("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("Date")]),t._v("), "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'YYYY-MM-DD'")]),t._v(");\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// => 2019-12-18")]),t._v("\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("h2",{attrs:{id:"huo-qu-dang-qian-zhou-de-suo-you-tian-shu"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('huo-qu-dang-qian-zhou-de-suo-you-tian-shu')"}},[this._v("Ψ")]),this._v(" 获取当前周的所有天数")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"chunk"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[this._v("date.getCurrentWeekDays();\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("1.0.0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[s("em",[this._v("string")])]),this._v(": 拼接的字符串")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { date } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'by-tools'")]),t._v(";\n\n"),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(date.getCurrentWeekDays());\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// => 2019-12-16~2019-12-22")]),t._v("\n")])])}],!1,null,null,null);x.options.__file="src/pages/index/markdown/byDate.md";var q=x.exports,P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("PHONE 手机号")]),t._v(" "),e("hr"),t._v(" "),t._m(0),t._v(" "),t._m(1),e("h4",[t._v("引入版本")]),t._v(" "),t._m(2),t._v(" "),e("h4",[t._v("参数")]),t._v(" "),t._m(3),t._v(" "),e("h4",[t._v("返回")]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"highlight"},[e("div",{attrs:{slot:"demo"},slot:"demo"}),t._m(5)]),t._m(6),t._v(" "),t._m(7),e("h4",[t._v("引入版本")]),t._v(" "),t._m(8),t._v(" "),e("h4",[t._v("参数")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("h4",[t._v("返回")]),t._v(" "),t._m(11),t._v(" "),e("div",{staticClass:"highlight"},[e("div",{attrs:{slot:"demo"},slot:"demo"}),t._m(12)])])};P._withStripped=!0;var z=Object(v.a)({},P,[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("h2",{attrs:{id:"ge-shi-hua-shou-ji-hao"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('ge-shi-hua-shou-ji-hao')"}},[this._v("Ψ")]),this._v(" 格式化手机号")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"chunk"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[this._v("phone.toDiscontinuousMobile(phone:string); \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("1.0.0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("phone:")]),this._v(" "),s("strong",[this._v("["),s("em",[this._v("string")]),this._v("]")]),this._v(" 手机号")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("["),s("em",[this._v("string")]),this._v("]")]),this._v(": 格式化后的手机号")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { phone } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'by-tools'")]),t._v(";\n\n"),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(phone.toDiscontinuousMobile("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'13166289220'")]),t._v("));\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// => 131 6628 9220")]),t._v("\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("h2",{attrs:{id:"jia-mi-shou-ji-hao"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('jia-mi-shou-ji-hao')"}},[this._v("Ψ")]),this._v(" 加密手机号")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"chunk"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[this._v("phone.toEncryptMobule(phone:string, remark?:string); \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("1.0.0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("phone:")]),this._v(" "),s("strong",[this._v("["),s("em",[this._v("string")]),this._v("]")]),this._v(" 手机号")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("remark:")]),this._v(" "),s("strong",[this._v("["),s("em",[this._v("string")]),this._v("]")]),this._v(" 填充标识 非必填")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("["),s("em",[this._v("string")]),this._v("]")]),this._v(": 加密手机号中间四位")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { phone } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'by-tools'")]),t._v(";\n\n"),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(phone.toEncryptMobule("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'13166289220'")]),t._v("));\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// => 131****9220")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(phone.toEncryptMobule("),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'13166289220'")]),t._v(","),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'-'")]),t._v("));\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// => 131----9220")]),t._v("\n\n")])])}],!1,null,null,null);z.options.__file="src/pages/index/markdown/byPhone.md";var M=z.exports,A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Money 货币相关")]),t._v(" "),e("hr"),t._v(" "),t._m(0),t._v(" "),t._m(1),e("h4",[t._v("引入版本")]),t._v(" "),t._m(2),t._v(" "),e("h4",[t._v("参数")]),t._v(" "),t._m(3),t._v(" "),e("h4",[t._v("返回")]),t._v(" "),t._m(4),t._v(" "),e("div",{staticClass:"highlight"},[e("div",{attrs:{slot:"demo"},slot:"demo"}),t._m(5)])])};A._withStripped=!0;var R=Object(v.a)({},A,[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("h2",{attrs:{id:"jiang-huo-bi-shu-zi-zhuan-zhong-wen-han-zi-da-xie"}},[s("a",{staticClass:"anchor",attrs:{href:"javascript:toAnchor('jiang-huo-bi-shu-zi-zhuan-zhong-wen-han-zi-da-xie')"}},[this._v("Ψ")]),this._v(" 将货币数字转中文汉字大写")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{staticClass:"chunk"},[s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[this._v("phone.toChineseAmount(price:number); \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("1.0.0")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("phone:")]),this._v(" "),s("strong",[this._v("["),s("em",[this._v("number")]),this._v("]")]),this._v(" 价格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[s("em",[this._v("string")])]),this._v(": 转换后的中文大写")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("import")]),t._v(" { money } "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'by-tools'")]),t._v(";\n\n"),e("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(money.toChineseAmount("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2000000")]),t._v("));\n\n"),e("span",{pre:!0,attrs:{class:"hljs-comment"}},[t._v("// => 贰佰万元整")]),t._v("\n\n")])])}],!1,null,null,null);R.options.__file="src/pages/index/markdown/byMoney.md";var S=R.exports,L=function(){var t=function(s,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var e in s)s.hasOwnProperty(e)&&(t[e]=s[e])})(s,e)};return function(s,e){function n(){this.constructor=s}t(s,e),s.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),Y=function(t,s,e,n){var r,i=arguments.length,o=i<3?s:null===n?n=Object.getOwnPropertyDescriptor(s,e):n;if("object"===("undefined"==typeof Reflect?"undefined":a()(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,s,e,n);else for(var _=t.length-1;_>=0;_--)(r=t[_])&&(o=(i<3?r(o):i>3?r(s,e,o):r(s,e))||o);return i>3&&o&&Object.defineProperty(s,e,o),o},F=function(t){function s(){return null!==t&&t.apply(this,arguments)||this}return L(s,t),s=Y([Object(i.a)({components:{appHeader:u,appLeft:y,byFunction:E,byData:O,byDate:q,byPhone:M,byMoney:S}})],s)}(i.b),H=(e(20),Object(v.a)(F,n,[],!1,null,"1badc801",null));H.options.__file="src/pages/index/index.vue";s.default=H.exports}]]);