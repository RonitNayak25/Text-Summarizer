(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,a){e.exports=a(56)},32:function(e,t,a){},34:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(32),a(8)),s=a.n(l),i=a(20),m=a(3),u=a(68),p=(a(34),a(21)),d=a.n(p);var b=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),p=l[0],b=l[1],f=Object(n.useState)(""),v=Object(m.a)(f,2),E=v[0],h=v[1],g=Object(n.useState)(!1),j=Object(m.a)(g,2),y=j[0],N=j[1],O=Object(n.useState)(!1),w=Object(m.a)(O,2),x=w[0],S=w[1];function k(){return(k=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!0),S(!1),e.prev=3,e.next=6,d.a.post("/predict",{text:a,percent:p});case 6:n=e.sent,console.log(n.data),console.log(a),h(n.data.prediction),N(!1),S(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(3),N(!1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}var A=0;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("form",{className:"form-group",method:"POST",onSubmit:function(e){return k.apply(this,arguments)}},r.a.createElement("input",{type:"textarea",className:"form-control",id:"text",name:"text",onChange:function(e){c(e.target.value)}}),r.a.createElement("input",{type:"text",className:"form-control",id:"percent",name:"percent",onChange:function(e){b(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")),r.a.createElement("br",null),y?r.a.createElement(u.a,{color:"secondary"}):r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},r.a.createElement("u",null,"Summary")),x?r.a.createElement("div",{className:"lead",style:{textAlign:"left"}},E.split("\n").map((function(e){return r.a.createElement("p",{key:A++},e)}))):r.a.createElement("div",null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.0e3dfa6b.chunk.js.map