(this["webpackJsonpnav-app"]=this["webpackJsonpnav-app"]||[]).push([[0],{39:function(e,t,n){e.exports=n(48)},44:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(8),l=n.n(u),c=(n(44),n(31)),i=n(27),o=n(85),s=n(81),m=n(82),f=n(80),p=n(83),d=n(77),h=function(e){var t=e.number,n=e.handelChange,a=e.label,u=e.errAlert,l=e.msgCode,c=e.inputRef,i={maxLength:11,value:t};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{component:"label"},a,":"),r.a.createElement(p.a,{inputRef:c,type:"text",inputProps:i,onChange:n,placeholder:"(11 siffer)",variant:"outlined",fullWidth:!0,margin:"dense",error:u,helperText:["F\xf8dselsnummer er godkjent.","F\xf8dselsnummer mangler siffer.","Feil f\xf8dselsnummer."][l]}))};var g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(!1),p=Object(i.a)(l,2),d=p[0],g=p[1],v=Object(a.useState)(null),b=Object(i.a)(v,2),E=b[0],j=b[1],O=Object(a.useRef)(null);Object(a.useEffect)((function(){O.current.focus()}),[]);var S=function(){O.current.value=""};return r.a.createElement(o.a,{component:"div"},r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(m.a,{container:!0,spacing:1},r.a.createElement(f.a,{variant:"outlined",style:{width:"100%",margin:10,padding:10}},r.a.createElement(m.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=e.split(""),n=t.slice(0,9),a=parseInt(t.slice(9,12).join("")),r=[],l=[3,7,6,1,8,9,4,5,2],i=[5,4,3,2,7,6,5,4,3,2],o=11-n.reduce((function(e,t,n){return e[n]=t*l[n],e}),l).reduce((function(e,t){return e+t}))%11;11!==o?r.push(o):r.push(0);var s=11-[].concat(Object(c.a)(n),[o.toString()]).reduce((function(e,t,n){return e[n]=t*i[n],e}),l).reduce((function(e,t){return e+t}))%11;11!==s?r.push(s):r.push(0);var m=parseInt(r.join(""));11!==e.length?g(!0)||j(1):e.match(/^[0-9]+$/)?m!==a?g(!0)||j(2):j(0)||u("")||g(!1)||S()||setTimeout((function(){j(null)}),3e3):g(!0)||j(2)}(n)}},r.a.createElement(h,{inputRef:O,label:"F\xd8DSELSNUMMER",handelChange:function(e){return u(e.target.value),0===e.target.value.length?g(!1)||j(null):null},errAlert:d,msgCode:E})))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6f1f9276.chunk.js.map