"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[184],{10:function(e,t,n){n.d(t,{Bc:function(){return s},Hj:function(){return p},bG:function(){return l},oQ:function(){return f},uT:function(){return i}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="3123e8450e42b4706d786efbc6b96d51",i=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},942:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(791),u=n(87),c=n(689),o=n(705),i=n(10),s=n(184),f=function(){var e,t=(0,a.useState)([]),n=(0,r.Z)(t,2),f=n[0],p=n[1],l=(0,u.lr)(),v=(0,r.Z)(l,2),d=v[0],h=v[1],m=(0,c.TH)(),g=null!==(e=d.get("query"))&&void 0!==e?e:"";(0,a.useEffect)((function(){""!==g&&(0,i.oQ)(g).then((function(e){p(e.results)})).catch((function(e){return console.log(e)}))}),[g]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(o.J9,{initialValues:{value:""},onSubmit:function(e,t){var n=t.resetForm,r=""!==e.value?{query:e.value}:{};h(r),n()},children:(0,s.jsxs)(o.l0,{className:"SearchForm",children:[(0,s.jsx)(o.gN,{name:"value",type:"text",autoFocus:!0,placeholder:"Search movies"}),(0,s.jsx)("button",{type:"submit",className:"SearchForm-button",children:"Search"})]})}),(0,s.jsx)("ul",{children:f.map((function(e){var t=e.id,n=e.title;return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:m},children:n})},t)}))})]})}}}]);
//# sourceMappingURL=184.d297dab8.chunk.js.map