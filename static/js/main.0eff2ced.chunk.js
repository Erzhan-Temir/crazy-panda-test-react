(this["webpackJsonpcrazy-panda-test-react"]=this["webpackJsonpcrazy-panda-test-react"]||[]).push([[0],{27:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(5),o=n.n(i),s={baseURL:"https://jsonplaceholder.typicode.com",getComments:function(){return fetch(this.baseURL+"/comments").then((function(t){return t.json()}))}},a="REQUEST_DATA",u="REQUEST_DATA_SUCCESS",j="REQUEST_DATA_ERROR",d="CHANGE_CURRENT_PAGE",l="CHANGE_CURRENT_FILTER",b=function(){return{type:a}},h=function(t){return{type:u,payload:t}},O=function(){return{type:j}},f=function(t){return{type:d,payload:t}},g=function(t){return{type:l,payload:t}},x=function(t){t(b()),s.getComments().then((function(e){return t(h(e))})).catch((function(){return t(O())}))},p=1,v=-1,m="default",w="to-down",k=function(t){return t.isLoading},y=function(t){return t.currentPage},E=function(t){return t.currentFilter},C=function(t){return t.data.length/50},_=function(t){return e=function(t){var e=50*(t.currentPage-1),n=50*t.currentPage;return t.data.slice(e,n)}(t),n=t.currentFilter,e.filter((function(t){return t.name.indexOf(n)>-1}));var e,n},L=n(2),N=(n(27),n(0)),S=function(){var t=Object(L.c)(),e=Object(L.d)(y),n=Object(L.d)(C),r=function(e){t(f(e))};return Object(N.jsxs)("div",{className:"main-board__pagination",children:[Object(N.jsx)("button",{onClick:function(){return r(-n)},disabled:1===e,children:Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"16",height:"16",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 19l-7-7 7-7m8 14l-7-7 7-7"})})}),Object(N.jsx)("button",{onClick:function(){return r(-1)},disabled:1===e,children:Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"16",height:"16",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),Object(N.jsx)("span",{className:"main-board__page-number",children:e}),Object(N.jsx)("button",{onClick:function(){return r(1)},disabled:e===n,children:Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"16",height:"16",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})}),Object(N.jsx)("button",{onClick:function(){return r(n)},disabled:e===n,children:Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:"16",height:"16",children:Object(N.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 5l7 7-7 7M5 5l7 7-7 7"})})})]})},R=(n(29),function(){var t=Object(L.c)(),e=Object(L.d)(E);return Object(N.jsx)("input",{value:e,onChange:function(e){return function(e){t(g(e.target.value))}(e)},type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",className:"main-board__search"})}),A=n(3),T=n(4),M=(n(30),function(){return Object(N.jsxs)("div",{className:"lds-roller",children:[Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{}),Object(N.jsx)("div",{})]})}),U=function(t){return function(e){var n=Object(L.c)(),c=Object(L.d)(k);return Object(r.useEffect)((function(){n(x)}),[]),c?Object(N.jsx)(M,{}):Object(N.jsx)(t,Object(T.a)({},e))}},I=n(10),P=function(t){return function(e){var n=Object(L.d)(_),c=Object(r.useState)(p),i=Object(I.a)(c,2),o=i[0],s=i[1],a=Object(r.useState)(m),u=Object(I.a)(a,2),j=u[0],d=u[1],l=n.slice();l.sort((function(){return o})),l.sort((function(t,e){return j===m?l:e.name.length-t.name.length}));return Object(N.jsx)(t,Object(T.a)(Object(T.a)({},e),{},{sortedItems:l,toggleIdSorting:function(){return s(o===p?v:p)},toggleNameSorting:function(){return d(j===m?w:m)}}))}},F=(n(31),Object(A.c)(U,P)((function(t){var e=t.sortedItems,n=t.toggleIdSorting,r=t.toggleNameSorting;return Object(N.jsx)("div",{className:"main-board__table",children:Object(N.jsxs)("table",{children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{onClick:function(){return n()},children:"ID"}),Object(N.jsx)("th",{onClick:function(){return r()},children:"Name"})]})}),Object(N.jsx)("tbody",{children:e.map((function(t){var e=t.id,n=t.name;return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e}),Object(N.jsx)("td",{children:n})]},e)}))})]})})}))),B=n(12),D=n(13),W=n(16),G=n(15),Q=function(t){var e=function(e){Object(W.a)(r,e);var n=Object(G.a)(r);function r(){return Object(B.a)(this,r),n.apply(this,arguments)}return Object(D.a)(r,[{key:"componentDidCatch",value:function(){this.props.throwError()}},{key:"render",value:function(){return this.props.hasError?Object(N.jsx)("p",{children:"Sorry, but something went wrong..."}):Object(N.jsx)(t,Object(T.a)({},this.props))}}]),r}(r.Component);return Object(L.b)((function(t){return{hasError:t.hasError}}),(function(t){return{throwError:function(){return t(O)}}}))(e)};n(32);var z=Q((function(){return Object(N.jsxs)("section",{className:"main-board",children:[Object(N.jsx)("h1",{className:"visually-hidden",children:"Comment table"}),Object(N.jsxs)("div",{className:"main-board__wrapper",children:[Object(N.jsx)(R,{}),Object(N.jsx)(S,{}),Object(N.jsx)(F,{})]})]})})),H={data:[],isLoading:!1,hasError:!1,currentPage:1,currentFilter:""},J=function(t,e){var n=t.currentPage,r=Math.round(n+e),c=Math.round(t.data.length/50);return r<=0?1:r>c?c:r},q=n(14),K=Object(A.d)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a:return Object.assign({},t,{isLoading:!0});case u:return Object.assign({},t,{data:e.payload,isLoading:!1});case j:return Object.assign({},t,{hasError:!0});case d:return Object.assign({},t,{currentFilter:"",currentPage:J(t,e.payload)});case l:return Object.assign({},t,{currentFilter:e.payload});default:return t}}),Object(A.a)(q.a));o.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(L.a,{store:K,children:Object(N.jsx)(z,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0eff2ced.chunk.js.map