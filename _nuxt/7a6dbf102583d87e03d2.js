(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{181:function(t,e,n){},196:function(t,e,n){"use strict";var r=n(181);n.n(r).a},347:function(t,e,n){"use strict";n.r(e);n(59),n(60),n(26);var r,o=n(7),c=(n(40),n(11)),l=n(8),f=(r=function(t,b){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}r(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),h=function(t,e,n,desc){var r,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(o.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(c<3?r(l):c>3?r(e,n,l):r(e,n))||l);return c>3&&l&&Object.defineProperty(e,n,l),l},d=function(t,e,n,r){return new(n||(n=Promise))(function(o,c){function l(t){try{h(r.next(t))}catch(t){c(t)}}function f(t){try{h(r.throw(t))}catch(t){c(t)}}function h(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(l,f)}h((r=r.apply(t,e||[])).next())})},y=function(t,body){var e,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;o;)try{if(e=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(t,o)}catch(t){c=[6,t],n=0}finally{e=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f(e,t),Object.defineProperty(e.prototype,"metaHead",{get:function(){var title="Bacaan dan terjemah ayat kursi | Qur'an Offline";return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"theme-color",name:"theme-color",content:this.settingActiveTheme.bgColor}]}},enumerable:!0,configurable:!0}),e.prototype.head=function(){return this.metaHead},e.prototype.mounted=function(){this.setHeaderTitle("Ayat Kursi")},h([l.c],e.prototype,"settingActiveTheme",void 0),h([l.b],e.prototype,"setHeaderTitle",void 0),e=h([Object(c.a)({asyncData:function(){return d(this,void 0,void 0,function(){return y(this,function(t){switch(t.label){case 0:return[4,n.e(2).then(n.t.bind(null,337,3))];case 1:return[2,{ayatKursi:t.sent().data}]}})})}})],e)}(c.c),w=(n(196),n(10)),component=Object(w.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"arabic"},[this._v("\n      "+this._s(this.ayatKursi.arabic)+"\n    ")]),this._v(" "),e("div",{staticClass:"translation"},[this._v("\n      "+this._s(this.ayatKursi.translation)+"\n    ")])])])},[],!1,null,"79a75a9f",null);e.default=component.exports}}]);