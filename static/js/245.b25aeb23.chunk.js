"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[245],{10:function(e,n,r){r.d(n,{Bc:function(){return o},Hj:function(){return l},bG:function(){return p},oQ:function(){return d},uT:function(){return u}});var t=r(861),a=r(757),c=r.n(a),s=r(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="3123e8450e42b4706d786efbc6b96d51",u=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},245:function(e,n,r){r.r(n),r.d(n,{default:function(){return l}});var t=r(439),a=r(791),c=r(87),s=r(689),i=r(313),u=r(10),o=r(938),d=r(184),l=function(){var e,n,r=(0,a.useState)({}),l=(0,t.Z)(r,2),p=l[0],f=l[1],h=(0,s.UO)().movieId,v=null!==(e=null===(n=(0,s.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";(0,a.useEffect)((function(){(0,u.Bc)(h).then((function(e){f(e)})).catch((function(e){return console.log(e)}))}),[h]);var x=p.title,j=p.release_date,m=p.poster_path,g=p.vote_average,w=p.overview,b=p.genres;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("button",{children:[(0,d.jsx)(i.Ao2,{}),(0,d.jsx)(c.rU,{to:v,children:"Go back"})]}),(0,d.jsxs)("div",{className:"CardMovie",children:[(0,d.jsx)("img",{src:m&&"https://image.tmdb.org/t/p/w500".concat(m),alt:x,width:"250"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:[x," (",j&&j.slice(0,4),")"]}),(0,d.jsxs)("p",{children:["User score: ",g&&g.toFixed(1)]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:w}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("ul",{className:"Genres",children:b&&b.map((function(e){var n=e.id,r=e.name;return(0,d.jsx)("li",{children:r},n)}))})]})]}),(0,d.jsx)("p",{children:"Additional information:"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"cast",state:{from:v},children:(0,d.jsx)("b",{children:"Cast"})})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"reviews",state:{from:v},children:(0,d.jsx)("b",{children:"Reviews"})})})]}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)("div",{children:(0,d.jsx)(o.Z,{})}),children:(0,d.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=245.b25aeb23.chunk.js.map