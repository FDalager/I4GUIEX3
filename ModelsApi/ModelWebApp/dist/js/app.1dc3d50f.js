(function(e){function t(t){for(var n,l,s=t[0],i=t[1],u=t[2],p=0,d=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},a={app:0},o=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n        "),r("router-link",{attrs:{to:"/login"}},[e._v("login")]),e._v(" |\n        "),r("router-link",{attrs:{to:"/CreateNewModel"}},[e._v("CreateNewModel")]),e._v(" |\n        "),r("router-link",{attrs:{to:"/CreateNewManager"}},[e._v("CreateNewManager")]),e._v(" |\n        "),r("router-link",{attrs:{to:"/CreateNewJob"}},[e._v("CreateNewJob")]),e._v(" |\n        "),r("router-link",{attrs:{to:"/JobView"}},[e._v("JobView")]),e._v(" |\n    ")],1),r("router-view"),e._v(">\n")],1)},o=[],l={name:"app"},s=l,i=r("2877"),u=Object(i["a"])(s,a,o,!1,null,null,null),c=u.exports,p=r("8c4f"),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"CreateNewModel"})},m=[],v={name:"CreateNewModel",probs:{msg:String}},f=v,_=Object(i["a"])(f,d,m,!1,null,"59e6ab90",null),b=_.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"CreateNewManager"},[r("h1",[e._v(e._s(e.msg))]),r("p",[e._v("Hej med dig manager")])])},w=[],h={name:"CreateNewManager",props:{msg:String}},j=h,C=Object(i["a"])(j,g,w,!1,null,"3aa7bca7",null),y=C.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"md-layout-item"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.login02Function(t)}}},[r("md-card",{staticClass:"md-primary"},[r("md-ripple",[r("md-card-header",[r("div",{staticClass:"md-title"},[e._v("Login")])]),r("md-content",[r("md-field",{attrs:{"md-clearable":""}},[r("label",[e._v("UserName")]),r("md-input",[e._v(' v-model="UserName"')])],1),r("md-field",[r("label",[e._v("Password")]),r("md-input",[e._v(' v-model="Password"')])],1)],1),r("md-card-action",[r("md-button",{staticClass:"md-raised",attrs:{type:"submit"}},[e._v("Login")])],1)],1)],1)],1)])},O=[],M={name:"login",data:function(){return{UserName:"UserName",PassWord:"Password"}}},x=M,J=(r("b41e"),Object(i["a"])(x,N,O,!1,null,"7256d243",null)),P=J.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v(e._s(e.msg))]),e._m(0)])},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Welcome to your new single-page application, built with "),r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Vue.js")]),e._v(".")])}],$={name:"Home",props:{msg:String}},E=$,V=Object(i["a"])(E,k,S,!1,null,"e0e910a8",null),H=V.exports,U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"CreateNewJob"},[r("h1",[e._v(e._s(e.msg))]),r("p",[e._v("Hej med dig job")])])},L=[],T={name:"CreateNewJob",props:{msg:String}},W=T,D=Object(i["a"])(W,U,L,!1,null,"06284b87",null),F=D.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"JobView"},[r("h1",[e._v(e._s(e.msg))]),r("p",[e._v("Hej med dig jobview")])])},z=[],A={name:"JobView",props:{msg:String}},B=A,G=Object(i["a"])(B,q,z,!1,null,"42689001",null),I=G.exports;n["default"].use(p["a"]);var K=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:H},{path:"/login",name:"Login",component:P},{path:"/CreateNewModel",name:"createNewModel",component:b},{path:"/CreateNewManager",name:"createNewManager",component:y},{path:"/CreateNewJob",name:"createNewJob",component:F},{path:"/JobView",name:"jobView",component:I}]}),Q=r("43f9"),R=r.n(Q);r("51de");n["default"].use(R.a),n["default"].config.productionTip=!1,new n["default"]({router:K,render:function(e){return e(c)}}).$mount("#app")},aac4:function(e,t,r){},b41e:function(e,t,r){"use strict";var n=r("aac4"),a=r.n(n);a.a}});
//# sourceMappingURL=app.1dc3d50f.js.map