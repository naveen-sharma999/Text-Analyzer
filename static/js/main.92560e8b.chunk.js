(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(6),c=a.n(o),r=(a(16),a(3));a(18);function s(e){var t=Object(n.useState)("This is an example text, try on it."),a=Object(r.a)(t,2),o=a[0],c=a[1];return l.a.createElement("div",{className:"mb-3 container my-5"},l.a.createElement("h2",null,e.heading),l.a.createElement("textarea",{className:"form-control text-".concat("light"===e.mode?"dark":"light"),style:{backgroundColor:"light"===e.mode?"#f1f1f1":"grey"},id:"exampleFormControlTextarea1",rows:"6",value:o,onChange:function(e){c(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-danger mx-1 mb-2",onClick:function(){c("")}},"Clear"),l.a.createElement("button",{className:"btn btn-success mx-1 mb-2",onClick:function(){var t=document.getElementById("exampleFormControlTextarea1");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Your Content copied to clipbord","success")}},"Copy"),l.a.createElement("button",{className:"btn btn-primary mx-1 mb-2",onClick:function(){var e=o.toUpperCase();c(e)}},"UpperCase"),l.a.createElement("button",{className:"btn btn-primary mx-1 mb-2",onClick:function(){var e=o.toLowerCase();c(e)}},"LowerCase"),l.a.createElement("button",{className:"btn btn-primary mx-1 mb-2",onClick:function(){var e=o.split(" "),t="";e.forEach(function(e){t+=e.charAt(0).toUpperCase()+e.slice(1)+" "}),c(t)}},"Justified"),l.a.createElement("button",{className:"btn btn-primary mx-1 mb-2",onClick:function(){c(o.replace(/\s+/g," ").trim())}},"RemoveExtraSpace"),l.a.createElement("hr",null),l.a.createElement("div",{className:"container my-3 text-center"},l.a.createElement("h3",null,"Your Text Summary"),l.a.createElement("p",null,o.length>0?o.split(" ").length:"0"," Words and ",o.length," characters"),l.a.createElement("p",null,"It takes approx ",o.length>0?.008*o.split(" ").length:"0"," Minutes to read"),l.a.createElement("p",null,l.a.createElement("b",null,"Note : "),"Justified converts first letter of each words into Capital letters")))}s.defaultProps={wordl:"0",charl:"0",heading:"Heading"};var i=a(4);function d(e){return l.a.createElement("nav",{className:"navbar navbar-".concat(e.mode," navbar-expand-lg bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(i.b,{className:"navbar-brand",to:"/"},e.title),l.a.createElement("div",{className:"form-check form-switch mx-3 form-check-reverse"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckReverse",onClick:e.toggleMode,role:"button"}),l.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckReverse"},e.btnText)),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.b,{className:"nav-link",to:"/about"},e.about))))))}function m(e){return l.a.createElement("div",{style:{height:"50px"}},e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type))," : ",e.alert.msg))}function h(e){return l.a.createElement("div",{className:"container py-5",style:{backgroundColor:"light"===e.mode?"white":"#042743"}},l.a.createElement("h3",null,"About Terms $ conditions"),l.a.createElement("div",{className:"accordion",id:"accordionExample"},l.a.createElement("div",{className:"accordion-item bg-".concat("light"===e.mode?"light":"dark"," text-").concat("light"===e.mode?"dark":"light")},l.a.createElement("h2",{className:"accordion-header",id:"headingOne"},l.a.createElement("button",{className:"accordion-button collapsed bg-".concat("light"===e.mode?"light":"secondary"," text-").concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Terms")),l.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item bg-".concat("light"===e.mode?"light":"dark"," text-").concat("light"===e.mode?"dark":"light")},l.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},l.a.createElement("button",{className:"accordion-button collapsed bg-".concat("light"===e.mode?"light":"secondary"," text-").concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Polices")),l.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),l.a.createElement("div",{className:"accordion-item bg-".concat("light"===e.mode?"light":"dark"," text-").concat("light"===e.mode?"dark":"light")},l.a.createElement("h2",{className:"accordion-header",id:"headingThree"},l.a.createElement("button",{className:"accordion-button collapsed bg-".concat("light"===e.mode?"light":"secondary"," text-").concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Leagl")),l.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},l.a.createElement("div",{className:"accordion-body"},l.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",l.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))}function u(e){return l.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{height:"500px"}},l.a.createElement("h1",null,"ERROR 404!"),l.a.createElement("h3",null,"page not found"),l.a.createElement("p",null,l.a.createElement(i.b,{to:"/"},"Go Home")))}d.defaultProps={title:"Title ?",about:"About",contact:"Contact us"};var b=a(0);var g=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("DarkMode OFF"),g=Object(r.a)(c,2),p=g[0],E=g[1],v=Object(n.useState)(null),y=Object(r.a)(v,2),f=y[0],w=y[1],x=function(e,t){w({msg:e,type:t}),setTimeout(function(){w(null)},5e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(d,{contact:"Contact us",title:"Text Analyzer",mode:a,toggleMode:function(){"light"===a?(o("dark"),E("DarkMode ON"),x("Dark Mode is Enabeld","success"),document.body.style.backgroundColor="#042743",document.body.style.color="white"):(o("light"),E("DarkMode OFF"),x("Dark Mode is Disabled - Enable Darkmode, Helps you to protect your eyes","warning"),document.body.style.backgroundColor="white",document.body.style.color="black")},btnText:p}),l.a.createElement(m,{alert:f}),l.a.createElement(b.c,null,l.a.createElement(b.a,{path:"/",element:l.a.createElement(s,{heading:"Enter The Text To Analyse",mode:a,showAlert:x})}),l.a.createElement(b.a,{path:"/about",element:l.a.createElement(h,{mode:a})}),l.a.createElement(b.a,{path:"*",element:l.a.createElement(u,null)}))))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),o(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null))),p()},7:function(e,t,a){e.exports=a(20)}},[[7,3,2]]]);
//# sourceMappingURL=main.92560e8b.chunk.js.map