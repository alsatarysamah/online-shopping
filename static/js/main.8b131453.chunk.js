(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},150:function(e,t){},153:function(e,t){},163:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(64),s=n.n(i),r=(n(136),n.p,n(137),n(19)),o=(n(138),n(25)),l=n(31),j=n(4),u=n(15),d=n.n(u),b=n(65),p=n.n(b),h=n(66),O=n.n(h),m=n(1),x=a.a.createContext();function g(e){var t=Object(c.useState)(!1),n=Object(j.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(!1),r=Object(j.a)(s,2),u=r[0],b=r[1],h=Object(c.useState)(d.a.load("user")||{}),g=Object(j.a)(h,2),v=g[0],f=g[1],k=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t,n){var c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("https://samah-shopping-server.herokuapp.com/signin").set("authorization","Basic ".concat(O.a.encode("".concat(t,":").concat(n))));case 3:c=e.sent,console.log(c.body),C(c.body.user),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("invalid username or password");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),C=function(e){e.token?(i(!0),f(e),console.log({user:e}),d.a.save("token",e.token),d.a.save("user",e),d.a.save("username",e.username),d.a.save("actions",e.actions),console.log({loggedIn:a})):(i(!1),f({}),alert("invalid username or password"))},I={loggedIn:a,user:v,can:function(e){return v.id===e},login:k,logout:function(){i(!1),f({}),d.a.remove("token"),d.a.remove("actions"),d.a.remove("username")},click:function(){console.log("clickkkkkkkkkkkkkkkkkkkk"),b(!0)},loginClicked:u,addFav:function(e){}};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(x.Provider,{value:I,children:e.children})})}var v=n(14);function f(){var e=Object(c.useContext)(x);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("nav",{class:"bp4-navbar .modifier ",id:"nav",children:[Object(m.jsx)("div",{class:"bp4-navbar-group bp4-align-left",children:Object(m.jsx)(r.b,{to:"/online-shopping",className:"link",children:"Mr Shop"})}),Object(m.jsxs)("div",{class:"bp4-navbar-group bp4-align-right",children:[Object(m.jsx)("span",{class:"bp4-navbar-divider"}),Object(m.jsx)(v.a,{condition:!e.loggedIn&&!e.loginClicked,children:Object(m.jsx)("button",{class:"bp4-button bp4-minimal ",onClick:function(){e.click()},children:"Signin"})}),Object(m.jsxs)(v.a,{condition:e.loggedIn&&e.loginClicked,children:[Object(m.jsx)(r.b,{to:"/addItem",className:"link",children:"Add Item"}),Object(m.jsx)("button",{class:"bp4-button bp4-minimal ",onClick:function(){e.logout()},children:"Logout"})]})]})]})})}n(163);var k=function(){return Object(m.jsx)("footer",{id:"footer",children:"\xa9 2022"})},C=n(13),I=n.n(C);n(186);var N=a.a.createContext();function y(e){var t=Object(c.useState)(),n=Object(j.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(d.a.load("all")||{}),r=Object(j.a)(s,2),o=r[0],l=r[1],u={item:a,setting:function(e){i(e),d.a.save("all",o)},settingAllItem:function(e){l(e)}};return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(N.Provider,{value:u,children:e.children})})}function F(e){var t=Object(c.useContext)(x),n=(Object(c.useContext)(N),Object(c.useState)("")),a=Object(j.a)(n,2),i=a[0],s=a[1],r=Object(c.useState)(),o=Object(j.a)(r,2),l=o[0],u=o[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v.a,{condition:!t.loggedIn&&t.loginClicked,children:Object(m.jsx)("div",{className:"loginForm",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Username "}),Object(m.jsx)("input",{type:"text",name:"uname",required:!0,onChange:function(e){e.preventDefault(),s(e.target.value)}})]}),Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Password "}),Object(m.jsx)("input",{type:"password",name:"pass",required:!0,onChange:function(e){e.preventDefault(),u(e.target.value)}})]}),Object(m.jsx)("div",{className:"button-container",children:Object(m.jsx)("button",{id:"loginButton",type:"submit",onClick:function(e){e.preventDefault(),console.log(t),t.click(!0);try{t.login(i,l)}catch(e){alert("invalid username or password")}},children:"Signin"})})]})})}),Object(m.jsxs)(v.a,{condition:t.loggedIn,children:[Object(m.jsx)("div",{children:t.user.username}),Object(m.jsx)("button",{onClick:t.logout,children:"Logout"})]})]})}function S(e){Object(c.useContext)(x);var t=Object(c.useState)(""),n=Object(j.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(),r=Object(j.a)(s,2),o=r[0],l=r[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"loginForm",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t){I.a.post("https://samah-shopping-server.herokuapp.com/signup",{username:e,password:t}).then((function(e){console.log(e)})).catch((function(e){alert(" username is empty or already exists ")}))}(a,o),e.target.reset()},children:[Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Username "}),Object(m.jsx)("input",{type:"text",name:"uname",required:!0,onChange:function(e){e.preventDefault(),i(e.target.value)}})]}),Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Password "}),Object(m.jsx)("input",{type:"password",name:"pass",required:!0,onChange:function(e){e.preventDefault(),l(e.target.value)}})]}),Object(m.jsx)("div",{className:"button-container",children:Object(m.jsx)("button",{type:"submit",children:"Signup"})})]})})})}var w=n(3),D=(n(187),n(70));function U(e){var t=Object(c.useContext)(x);return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(v.a,{condition:t.loggedIn&&t.can(e.userId),children:e.children})})}var A=n(214);var B=n(67);function P(e){var t=Object(c.useState)("pink"),n=Object(j.a)(t,2),a=n[0],i=(n[1],Object(w.f)()),s=Object(c.useContext)(x),r=Object(c.useContext)(N),u=Object(c.useState)([]),d=Object(j.a)(u,2),b=d[0],p=d[1];Object(c.useEffect)((function(){var e,t={headers:{Authorization:"Bearer ".concat(s.user.token)}};null!==s&&void 0!==s&&null!==(e=s.user)&&void 0!==e&&e.token&&I.a.get("https://samah-shopping-server.herokuapp.com/item",t).then((function(e){p(e.data),r.settingAllItem(e.data)})).catch((function(e){}))}),[]);var h=function(){var e=Object(l.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.user.favItems.push(t.id),n={headers:{Authorization:"Bearer ".concat(s.user.token)}},e.next=4,I.a.put("https://samah-shopping-server.herokuapp.com/user/".concat(s.user.id),{fav:s.user.favItems},n).then((function(e){return console.log({data:e}),e.data.favItems})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v.a,{condition:!s.loginClicked&&!s.loggedIn,children:Object(m.jsx)(S,{})}),Object(m.jsx)(v.a,{condition:!s.loggedIn&&s.loginClicked,children:Object(m.jsx)(F,{})}),Object(m.jsx)(v.a,{condition:s.loggedIn&&s.loginClicked,children:Object(m.jsx)("div",{className:"grid",children:b.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)(A.b,{className:"item",children:[Object(m.jsx)(D.a,{className:"heart",style:{color:a},onClick:function(){h(e)}}),Object(m.jsx)(A.c,{children:e.name}),Object(m.jsx)("img",{src:e.imgUrl}),Object(m.jsxs)("p",{children:[" ",e.price," JD"]}),Object(m.jsxs)(U,{userId:e.userId,children:[Object(m.jsx)(A.a,{text:"Delete",onClick:function(){!function(e,t){var n={headers:{Authorization:"Bearer ".concat(t)}};I.a.delete("https://samah-shopping-server.herokuapp.com/item/".concat(e),n).then((function(e){console.log({data:e})})).catch((function(e){console.log(e)}))}(e.id,s.user.token)}}),Object(m.jsx)(A.a,{text:"Update",onClick:function(){console.log(e.name),r.setting(e),i("/updateItem")}})]}),Object(m.jsx)(B.a,{className:"view",trigger:Object(m.jsx)("button",{children:"view"}),position:"right center",children:Object(m.jsxs)("div",{id:"itemPop",children:[Object(m.jsx)(A.c,{children:e.name}),Object(m.jsx)("img",{src:e.imgUrl}),Object(m.jsx)("p",{children:e.description}),Object(m.jsxs)("p",{children:[" ",e.price," JD"]})]})})]})})}))})})]})}n(63);function z(e){var t=Object(c.useContext)(x);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Create an Item"}),Object(m.jsxs)("form",{onSubmit:function(e){console.log("user  ",t.user),console.log("submit"),e.preventDefault(),function(e,t){console.log({item:e});var n={headers:{Authorization:"Bearer ".concat(t)}};I.a.post("https://samah-shopping-server.herokuapp.com/item",e,n).then((function(e){console.log({data:e})})).catch((function(e){console.log(e)}))}({name:e.target.name.value,description:e.target.description.value,price:parseFloat(e.target.price.value),imgUrl:e.target.url.value,userId:t.user.id},t.user.token),e.target.reset(),e.target.name.focus()},className:"loginForm",id:"add",children:[Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Item name:"}),Object(m.jsx)("input",{type:"text",name:"name",required:!0})]}),Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Description "}),Object(m.jsx)("input",{type:"text",name:"description"})]}),Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Price "}),Object(m.jsx)("input",{type:"text",name:"price"})]}),Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Image URL "}),Object(m.jsx)("input",{type:"text",name:"url"})]}),Object(m.jsx)("div",{className:"button-container",children:Object(m.jsx)("button",{type:"submit",children:"Add"})})]})]})})}n(206);function L(e){var t=Object(c.useContext)(x),n=Object(c.useContext)(N);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:"Create an Item"}),Object(m.jsxs)("form",{id:"update",className:"loginForm",onSubmit:function(e,c){e.preventDefault();e.target.name.value;var a={description:e.target.description.value,price:parseFloat(e.target.price.value),imgUrl:e.target.url.value,userId:t.user.id};!function(e,t,n,c){for(var a in console.log({item:e}),c&&(e.price=n.price),e)""===e[a]&&(e[a]=n[a]);console.log({item:e});var i={headers:{Authorization:"Bearer ".concat(t)}};I.a.put("https://samah-shopping-server.herokuapp.com/item/".concat(n.id),e,i).then((function(e){console.log({data:e})})).catch((function(e){console.log(e)}))}(a,t.user.token,n.item,isNaN(a.price)),e.target.reset(),e.target.name.focus()},children:[Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Item name:"}),Object(m.jsx)("input",{type:"text",name:"name"})]}),Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Description "}),Object(m.jsx)("input",{type:"text",name:"description"})]}),Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Price "}),Object(m.jsx)("input",{type:"text",name:"price"})]}),Object(m.jsxs)("div",{className:"input-container",children:[Object(m.jsx)("label",{children:"Image URL "}),Object(m.jsx)("input",{type:"text",name:"url"})]}),Object(m.jsx)("div",{className:"button-container",children:Object(m.jsx)("button",{type:"submit",children:"Update"})})]})]})})}function q(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("p",{children:"details"})})}n(207);function J(e){var t,n=Object(c.useContext)(x),a=Object(c.useContext)(N),i=Object(c.useState)([]),s=Object(j.a)(i,2);s[0],s[1];return console.log("all ",a.allItems),console.log("fav==> ",n.user),Object(m.jsx)(m.Fragment,{children:null===(t=n.user.favItems)||void 0===t?void 0:t.map((function(e){return Object(m.jsx)("p",{children:e})}))})}var R=function(){return Object(m.jsxs)("div",{id:"app",children:[Object(m.jsx)(g,{children:Object(m.jsxs)(y,{children:[Object(m.jsx)(f,{}),Object(m.jsxs)(w.c,{children:[Object(m.jsx)(w.a,{index:!0,path:"/online-shopping",element:Object(m.jsx)(P,{})}),Object(m.jsx)(w.a,{path:"/addItem",element:Object(m.jsx)(z,{})}),Object(m.jsx)(w.a,{path:"/updateItem",element:Object(m.jsx)(L,{})}),Object(m.jsx)(w.a,{path:"/details",element:Object(m.jsx)(q,{})}),Object(m.jsx)(w.a,{path:"/fav",element:Object(m.jsx)(J,{})})]})]})}),Object(m.jsx)(k,{})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,215)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(r.a,{children:Object(m.jsx)(R,{})})})),E()},63:function(e,t,n){}},[[208,1,2]]]);
//# sourceMappingURL=main.8b131453.chunk.js.map