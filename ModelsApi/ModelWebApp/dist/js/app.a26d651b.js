(function(e){function t(t){for(var a,s,i=t[0],l=t[1],m=t[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return n.push.apply(n,m||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var a={},r={app:0},n=[];function s(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=a,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(o,a,function(t){return e[t]}.bind(null,a));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var d=l;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var a=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("nav",[o("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n        "),o("router-link",{attrs:{to:"/login"}},[e._v("login")]),e._v(" |\n        "),o("router-link",{attrs:{to:"/CreateNewModel"}},[e._v("CreateNewModel")]),e._v(" |\n        "),o("router-link",{attrs:{to:"/CreateNewManager"}},[e._v("CreateNewManager")]),e._v(" |\n        "),o("router-link",{attrs:{to:"/CreateNewJob"}},[e._v("CreateNewJob")]),e._v(" |\n        "),o("router-link",{attrs:{to:"/JobView"}},[e._v("JobView")]),e._v(" |\n    ")],1),o("router-view"),e._v(">\n")],1)},n=[],s={name:"app"},i=s,l=o("2877"),m=Object(l["a"])(i,r,n,!1,null,null,null),d=m.exports,u=o("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"CreateNewModel"},[o("h1",[e._v("Create New Model!")]),o("form",{attrs:{id:"m-app"},on:{submit:e.checkForm}},[o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"firstname"}},[e._v("First Name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.firstname,expression:"model.firstname"}],staticClass:"form-group",attrs:{type:"text",id:"firstname"},domProps:{value:e.model.firstname},on:{input:function(t){t.target.composing||e.$set(e.model,"firstname",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"lastname"}},[e._v("Last Name")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.lastname,expression:"model.lastname"}],staticClass:"form-group",attrs:{type:"text",id:"lastname"},domProps:{value:e.model.lastname},on:{input:function(t){t.target.composing||e.$set(e.model,"lastname",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"email"}},[e._v("Email")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.email,expression:"model.email"}],staticClass:"form-group",attrs:{type:"text",id:"email"},domProps:{value:e.model.email},on:{input:function(t){t.target.composing||e.$set(e.model,"email",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"phoneno"}},[e._v("Phone Number")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.phoneno,expression:"model.phoneno"}],staticClass:"form-group",attrs:{type:"text",id:"phoneno"},domProps:{value:e.model.phoneno},on:{input:function(t){t.target.composing||e.$set(e.model,"phoneno",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"addresline1"}},[e._v("Addres Line 1")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.addresline1,expression:"model.addresline1"}],staticClass:"form-group",attrs:{type:"text",id:"addresline1"},domProps:{value:e.model.addresline1},on:{input:function(t){t.target.composing||e.$set(e.model,"addresline1",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"addresline2"}},[e._v("Addres Line 2")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.addresline2,expression:"model.addresline2"}],staticClass:"form-group",attrs:{type:"text",id:"adressline2"},domProps:{value:e.model.addresline2},on:{input:function(t){t.target.composing||e.$set(e.model,"addresline2",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"zip"}},[e._v("Zip")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.zip,expression:"model.zip"}],staticClass:"form-group",attrs:{type:"text",id:"zip"},domProps:{value:e.model.zip},on:{input:function(t){t.target.composing||e.$set(e.model,"zip",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"city"}},[e._v("City")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.city,expression:"model.city"}],staticClass:"form-group",attrs:{type:"text",id:"city"},domProps:{value:e.model.city},on:{input:function(t){t.target.composing||e.$set(e.model,"city",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"country"}},[e._v("Country")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.country,expression:"model.country"}],staticClass:"form-group",attrs:{type:"text",id:"country"},domProps:{value:e.model.country},on:{input:function(t){t.target.composing||e.$set(e.model,"country",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"birthdate"}},[e._v("Birthdate")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.birthdate,expression:"model.birthdate"}],staticClass:"form-group",attrs:{type:"text",id:"birthdate"},domProps:{value:e.model.birthdate},on:{input:function(t){t.target.composing||e.$set(e.model,"birthdate",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"nationality"}},[e._v("Nationality")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.nationality,expression:"model.nationality"}],staticClass:"form-group",attrs:{type:"text",id:"nationality"},domProps:{value:e.model.nationality},on:{input:function(t){t.target.composing||e.$set(e.model,"nationality",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"height"}},[e._v("Height")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.height,expression:"model.height"}],staticClass:"form-group",attrs:{type:"text",id:"height"},domProps:{value:e.model.height},on:{input:function(t){t.target.composing||e.$set(e.model,"height",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"shoesize"}},[e._v("Shoesize")]),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.model.shoesize,expression:"model.shoesize",modifiers:{number:!0}}],staticClass:"form-group",attrs:{type:"text",id:"shoesize"},domProps:{value:e.model.shoesize},on:{input:function(t){t.target.composing||e.$set(e.model,"shoesize",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"haircolor"}},[e._v("Haircolor")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.haircolor,expression:"model.haircolor"}],staticClass:"form-group",attrs:{type:"text",id:"haircolor"},domProps:{value:e.model.haircolor},on:{input:function(t){t.target.composing||e.$set(e.model,"haircolor",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"eyecolor"}},[e._v("Eyecolor")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.eyecolor,expression:"model.eyecolor"}],staticClass:"form-group",attrs:{type:"text",id:"eyecolor"},domProps:{value:e.model.eyecolor},on:{input:function(t){t.target.composing||e.$set(e.model,"eyecolor",t.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("p",[o("label",{attrs:{for:"comment"}},[e._v("Comment")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.model.comment,expression:"model.comment"}],staticClass:"form-group",attrs:{type:"text",id:"comment"},domProps:{value:e.model.comment},on:{input:function(t){t.target.composing||e.$set(e.model,"comment",t.target.value)}}})])]),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Add New Model")])])])},c=[],v={data:function(){return{model:{firstName:"",lastName:"",email:"",phoneNo:"",addresLine1:"",addresLine2:"",zip:"",city:"",country:"",birthDate:"",nationality:"",height:"",shoeSize:0,hairColor:"",eyeColor:"",comments:""}}}},f=v,g=Object(l["a"])(f,p,c,!1,null,"4d44d9e2",null),h=g.exports,b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"CreateNewManager"},[o("h1",[e._v(e._s(e.msg))]),o("p",[e._v("Hej med dig manager")])])},_=[],y={name:"CreateNewManager",props:{msg:String}},w=y,C=Object(l["a"])(w,b,_,!1,null,"3aa7bca7",null),N=C.exports,x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"md-layout-item"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.loginfunction(t)}}},[o("md-card",[o("md-ripple",[o("md-card-header",[o("div",{staticClass:"md-title"},[e._v("Login")])]),o("md-content",[o("md-field",{staticClass:"userNameField",attrs:{"md-clearable":""}},[o("label",[e._v("UserName")]),o("md-input",[e._v(' v-model="UserName"')]),o("md-option",{attrs:{value:"center"}},[e._v("Center")])],1),o("md-field",{staticClass:"passwordField"},[o("label",[e._v("Password")]),o("md-input",[e._v(' v-model="Password"')]),o("md-option",{attrs:{value:"center"}},[e._v("Center")])],1)],1),o("md-card-action",[o("md-button",{attrs:{type:"submit"}},[e._v("Login")])],1)],1)],1)],1)])},P=[],j={name:"login",data:function(){return{UserName:"UserName",PassWord:"Password"}},methods:{loginfunction:function(){var e="/api/account/login",t={email:this.UserName,Password:this.PassWord,OldPassword:this.PassWord};fetch(e,{method:"POST",body:JSON.stringify(t),headers:new Headers({"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(e){localStorage.setItem("token",e.jwt),G.push("/Home")}).catch(function(e){return alert("Error!!! "+e)})}}},$=j,O=(o("c15f"),Object(l["a"])($,x,P,!1,null,"39cc2c4a",null)),M=O.exports,z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("h1",[e._v(e._s(e.msg))]),e._m(0)])},J=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("Welcome to your new single-page application, built with "),o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Vue.js")]),e._v(".")])}],S={name:"Home",props:{msg:String}},k=S,E=Object(l["a"])(k,z,J,!1,null,"e0e910a8",null),H=E.exports,L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"CreateNewJob"},[o("h1",[e._v(e._s(e.msg))]),o("p",[e._v("Hej med dig job")])])},V=[],U={name:"CreateNewJob",props:{msg:String}},T=U,F=Object(l["a"])(T,L,V,!1,null,"06284b87",null),W=F.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"JobView"},[o("h1",[e._v(e._s(e.msg))]),o("p",[e._v("Hej med dig jobview")])])},D=[],B={name:"JobView",props:{msg:String}},I=B,Z=Object(l["a"])(I,A,D,!1,null,"42689001",null),q=Z.exports;a["default"].use(u["a"]);var G=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:H},{path:"/login",name:"Login",component:M},{path:"/CreateNewModel",name:"createNewModel",component:h},{path:"/CreateNewManager",name:"createNewManager",component:N},{path:"/CreateNewJob",name:"createNewJob",component:W},{path:"/JobView",name:"jobView",component:q}]}),K=o("43f9"),Q=o.n(K);o("51de"),o("e094");a["default"].use(Q.a),a["default"].config.productionTip=!1,new a["default"]({router:G,render:function(e){return e(d)}}).$mount("#app")},b6ad:function(e,t,o){},c15f:function(e,t,o){"use strict";var a=o("b6ad"),r=o.n(a);r.a}});
//# sourceMappingURL=app.a26d651b.js.map