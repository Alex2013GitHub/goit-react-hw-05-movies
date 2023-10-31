"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[224],{5047:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,o,u=t(7689),i=t(168),c=t(7109),s=t(1087),p=c.Z.ul(r||(r=(0,i.Z)(["\n  list-style-type: none;\n"]))),l=c.Z.li(a||(a=(0,i.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),f=(0,c.Z)(s.rU)(o||(o=(0,i.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: blue;\n  }\n"]))),d=t(184),h=function(n){var e=n.films,t=(0,u.TH)();return(0,d.jsx)(p,{children:e.map((function(n){return(0,d.jsx)(l,{children:(0,d.jsx)(f,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},3224:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,o,u=t(9439),i=t(2791),c=t(5518),s=t(168),p=t(7109),l=p.Z.form(r||(r=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n"]))),f=p.Z.input(a||(a=(0,s.Z)(["\n  padding: 12px 14px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 2px solid #191d1e;\n  font-weight: 600;\n  font-size: 16px;\n  margin-right: 10px;\n\n  outline: none;\n\n  &:hover {\n    color: blue;\n    border: 2px solid blue;\n  }\n"]))),d=p.Z.button(o||(o=(0,s.Z)(["\n  padding: 12px 12px;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 2px solid #191d1e;\n  color: #191d1e;\n  font-weight: 600;\n  font-size: 16px;\n\n  &:hover {\n    color: blue;\n    border: 2px solid blue;\n  }\n"]))),h=t(184),v=function(n){var e=n.searchMovies,t=(0,i.useState)(""),r=(0,u.Z)(t,2),a=r[0],o=r[1];return(0,h.jsxs)(l,{onSubmit:function(n){n.preventDefault(),e(a.toLowerCase())},children:[(0,h.jsx)(f,{type:"text",name:"query",autoFocus:!0,placeholder:"Search movie...",value:a,onChange:function(n){o(n.target.value)}}),(0,h.jsx)(d,{type:"submit",children:"Search"})]})},x=t(5047),g=t(1933),m=function(){var n=(0,i.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,i.useState)(!1),o=(0,u.Z)(a,2),s=o[0],p=o[1],l=(0,i.useState)(!1),f=(0,u.Z)(l,2),d=f[0],m=f[1];return(0,h.jsxs)("main",{children:[(0,h.jsx)(v,{searchMovies:function(n){p(!0),(0,g.Ml)(n).then((function(n){r(n),m(0===n.length)})).catch((function(n){console.log(n)})).finally((function(){p(!1)}))}}),s&&(0,h.jsx)(c.Z,{}),d&&(0,h.jsx)("p",{children:"There is no movies with this request. Please, try again"}),t&&(0,h.jsx)(x.Z,{films:t})]})}},1933:function(n,e,t){t.d(e,{Bt:function(){return f},Ml:function(){return s},Tg:function(){return c},Y5:function(){return p},wL:function(){return l}});var r=t(5861),a=t(4687),o=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="b8e97797a63a229ee5b42773102304ac",c=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=224.b8656cd4.chunk.js.map