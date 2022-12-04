(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{67:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),a=c.n(n),i=c(20),r=c.n(i),d=(c(67),c(13)),l=c(8),b=c(88),j=[{id:"314c852-1e15-f455-2374-e26437477d",title:"Yoga Routine",sets:[{id:"e7f3b5b-ce1a-13e-c5ef-ea116d1b76db",series:"1",exercises:[{id:"c05a4c-a23b-5ba8-dab7-318165473bc1",setId:"e7f3b5b-ce1a-13e-c5ef-ea116d1b76db",title:"Head Spin Clock",description:"",nbs:"3",nbsType:"rep",weight:"",break:""}]},{id:"4240d5-d74-46e3-e4d3-812adce2e01f",series:"1",exercises:[{id:"061caa1-c5e2-2eaa-cb1-ded503fb1adf",setId:"4240d5-d74-46e3-e4d3-812adce2e01f",title:"Head Spin Anti-Clock",description:"",nbs:"3",nbsType:"rep",weight:"",break:""}]},{id:"3b43488-1df-bda-3014-4f861346c6b3",series:"1",exercises:[{id:"564f12-f07b-613c-5e32-002eaa024d",setId:"3b43488-1df-bda-3014-4f861346c6b3",title:"Head to shoulders",description:"20s per sides",nbs:"20",nbsType:"sec",weight:"",break:""}]},{id:"dc862da-7485-f83c-dcf-ceb4f4e1aabb",series:"2",exercises:[{id:"0286ca5-d5df-e7d-f1f-bd44f0555c1",setId:"dc862da-7485-f83c-dcf-ceb4f4e1aabb",title:"Foward fold",description:"",nbs:"15",nbsType:"sec",weight:"",break:""}]},{id:"f37bc-d840-f46-a10-83cbda54aee",series:"3",exercises:[{id:"6c2b6-2ffd-432e-6438-321ce34607",setId:"f37bc-d840-f46-a10-83cbda54aee",title:"Child's Pose",description:"",nbs:"10",nbsType:"sec",weight:"",break:""},{id:"4ff6cb0-c4-5a4e-60f4-ce08edfadc54",setId:"f37bc-d840-f46-a10-83cbda54aee",title:"Cobra's Pose",description:"",nbs:"10",nbsType:"sec",weight:"",break:""}]},{id:"2c13de8-c067-bce-d114-efb0c6a212e7",series:"2",exercises:[{id:"8f48d03-cb43-4fe-35a-aff60e707e",setId:"2c13de8-c067-bce-d114-efb0c6a212e7",title:"Down-Dog",description:"",nbs:"20",nbsType:"sec",weight:"",break:""},{id:"7c2731-846b-117c-6318-fb5d62aa0e6",setId:"2c13de8-c067-bce-d114-efb0c6a212e7",title:"Pigeon's pose",description:"",nbs:"20",nbsType:"sec",weight:"",break:""}]},{id:"01bab1d-d342-033-20d4-7ec11d541b2",series:"1",exercises:[{id:"08ab45-f646-7301-d24-a163882b5fca",setId:"01bab1d-d342-033-20d4-7ec11d541b2",title:"Full body Stretch",description:"",nbs:"10",nbsType:"sec",weight:"",break:""}]},{id:"bbb0b4-64ab-08da-b632-2c531041710",series:"1",exercises:[{id:"febe6c7-3303-53fc-d54-e35b10bee2",setId:"bbb0b4-64ab-08da-b632-2c531041710",title:"Back twist",description:"Both sides",nbs:"10",nbsType:"sec",weight:"",break:""}]},{id:"b158ce-854b-1cb-7cb1-4184b32ee",series:"1",exercises:[{id:"067f34-318-e74-f5a-444278e4512",setId:"b158ce-854b-1cb-7cb1-4184b32ee",title:"Big hug - Rounded back",description:"",nbs:"10",nbsType:"sec",weight:"",break:""}]},{id:"53baac-cae-5b3d-2217-46120a27583",series:"2",exercises:[{id:"4adb800-5bf6-2313-8672-4a3111624c20",setId:"53baac-cae-5b3d-2217-46120a27583",title:"Butterfly",description:"",nbs:"20",nbsType:"sec",weight:"",break:""}]},{id:"3ec5b56-06e8-66c6-d843-168fde300cfd",series:"1",exercises:[{id:"4d3fd65-0f58-dcb-1cef-f205b48eaeca",setId:"3ec5b56-06e8-66c6-d843-168fde300cfd",title:"1 legged foward fold",description:"",nbs:"20",nbsType:"sec",weight:"",break:""}]},{id:"32af21-60a-dfd-e80f-0df80c64de6",series:"1",exercises:[{id:"f12721f-0cdf-042d-f65-43520a414386",setId:"32af21-60a-dfd-e80f-0df80c64de6",title:"Wide-andle foward fold",description:"",nbs:"20",nbsType:"sec",weight:"",break:""}]}]}],o=function(e){return Object(s.jsx)("header",{className:"header layout-header ",children:Object(s.jsxs)("div",{className:"container d-flex",children:[Object(s.jsx)("div",{className:"header-left",children:e.backHref&&Object(s.jsxs)(d.b,{className:"header-btn",to:e.backHref,children:[Object(s.jsx)("i",{className:"mdi mdi-chevron-left"}),e.back]})}),Object(s.jsx)("div",{className:"header-center",children:Object(s.jsx)("h1",{className:"h4 text-truncate py-2",children:e.title})}),Object(s.jsx)("div",{className:"header-right",children:e.nextHref&&Object(s.jsxs)(d.b,{className:"header-btn",to:e.nextHref,children:[e.next,Object(s.jsx)("i",{className:"mdi mdi-chevron-right"})]})})]})})},x=o;o.defaultProps={back:"Back",title:"",next:"Next"};var u=function(){var e=Object(l.useParams)().planId,t=JSON.parse(localStorage.getItem("plans")).find((function(t){return t.id==e}));return console.log(t),Object(s.jsxs)("div",{className:"layout",children:[Object(s.jsx)(x,{title:t.title,next:"Start",nextHref:"/plan/"+t.id,backHref:"/"}),Object(s.jsxs)("main",{className:"layout-main container",children:[!t.sets.length&&Object(s.jsx)("p",{class:"text-center",children:"This plan has no exercises"}),t.sets.map((function(e){return Object(s.jsx)(b.a,{body:!0,className:"mb-3",children:e.exercises.map((function(t,c){return Object(s.jsxs)(n.Fragment,{children:[c>0&&Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("div",{className:"h4",children:t.title}),0===c&&e.series&&Object(s.jsxs)("div",{className:"text-nowrap",children:[Object(s.jsx)("span",{className:"font-weight-bold small",children:"Series : "}),Object(s.jsxs)("span",{children:[e.series,"x"]})]})]}),t.description&&Object(s.jsx)("p",{className:"mb-1",children:t.description}),Object(s.jsxs)("div",{className:"mb-2",children:[Object(s.jsx)("span",{className:"font-weight-bold small",children:"Rep : "}),Object(s.jsx)("span",{children:t.nbs&&t.nbsType&&Object(s.jsxs)(s.Fragment,{children:[t.nbs,"rep"===t.nbsType&&"x","sec"===t.nbsType&&"s"]})})]})]},t.id)}))},e.id)}))]})]})},h=c(14),O=c(89),f=c(59),m=c(85),p=function(e){var t=Object(n.useState)(null),c=Object(h.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(!1),d=Object(h.a)(r,2),l=d[0],b=d[1],j=Object(n.useState)(null),o=Object(h.a)(j,2),x=o[0],u=o[1],O=function(){b(!1)};return Object(n.useEffect)((function(){var t=null;return l&&(t=setInterval((function(){if(a>0){var c=((Date.now()-x)/1e3).toFixed(0);i(e.time-c)}else clearInterval(t)}),1e3)),function(){return clearInterval(t)}}),[l,a]),Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)(f.a,{size:"lg",onClick:function(){i(e.time),u(Date.now()),b(!0)},children:"Start Timer"}),Object(s.jsx)(m.a,{centered:!0,show:l,onHide:O,className:"text-dark timer",children:Object(s.jsx)(m.a.Body,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"display-1 timer-number mb-5",children:a}),Object(s.jsx)(f.a,{variant:"secondary",size:"lg",onClick:O,children:"Stop Timer"})]})})})]})},v=function(e){var t=e.data,c=e.nextSet,a=e.lastSet,i=Object(n.useState)(1),r=Object(h.a)(i,2),d=r[0],l=r[1];Object(n.useEffect)((function(){l(1)}),[t]);return Object(s.jsxs)(s.Fragment,{children:[t.exercises.map((function(e){return Object(s.jsxs)(b.a,{body:!0,className:"text-center mb-3",children:[Object(s.jsx)("div",{className:"h2",children:e.title}),e.description&&Object(s.jsxs)("p",{className:"mb-1",children:["( ",e.description," )"]}),Object(s.jsx)("div",{className:"d-flex justify-content-around",children:e.nbs&&e.nbsType&&Object(s.jsxs)("div",{className:"mb-4",children:[Object(s.jsx)("div",{className:"display-1",children:e.nbs}),Object(s.jsxs)("div",{className:"h3",children:["sec"===e.nbsType&&"Seconds","rep"===e.nbsType&&"Repetitions"]})]})}),"sec"===e.nbsType&&Object(s.jsx)("div",{className:"mb-4",children:Object(s.jsx)(p,{time:e.nbs})})]},e.id)})),Object(s.jsxs)("div",{className:"mt-auto mb-3",children:[t.series>1&&Object(s.jsx)(n.Fragment,{children:Object(s.jsxs)("div",{className:"text-center mb-3",children:[Object(s.jsx)("div",{className:"text-light mb-3 lh-1",children:"Series"}),function(){for(var e=[],c=function(t){var c="series-btn ";t<=d&&(c+="active "),e.push(Object(s.jsx)("button",{onClick:function(){return l(t)},className:c,children:t},"Serie".concat(t)))},n=1;n<=t.series;n++)c(n);return e}()]})}),function(){var e=null,n=null;return d<t.series?(n=function(){return l(d+1)},e="Next Series"):a?(n=c,e="Done !"):(n=c,e="Next Series"),Object(s.jsx)(f.a,{variant:"secondary",block:!0,onClick:n,children:e})}()]})]})},g=function(){var e=Object(n.useRef)(null),t=Object(l.useParams)().planId,c=JSON.parse(localStorage.getItem("plans")).find((function(e){return e.id==t})),a=Object(n.useState)(1),i=Object(h.a)(a,2),r=i[0],j=i[1],o=function(){return j(r+1)},u=c.sets.length||null;return Object(n.useEffect)((function(){e.current.focus()}),[r]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{ref:e,className:"layout",tabIndex:"-1",children:[Object(s.jsx)(l.Prompt,{when:!0,message:function(){return 1===r||r>=u||"Are you sure you want to leave?"}}),Object(s.jsx)(x,{title:c.title,backHref:"/plan"}),Object(s.jsx)("main",{className:"layout-main container d-flex flex-column",children:u?r<=u?Object(s.jsx)(v,{data:c.sets[r-1],nextSet:o,lastSet:r===u}):Object(s.jsxs)(b.a,{body:!0,className:"text-center",children:[Object(s.jsx)("div",{className:"h1 mb-3",children:"Good job !"}),Object(s.jsx)(d.b,{to:"/plan",className:"btn btn-block btn-primary",children:"Back to list"})]}):Object(s.jsx)("p",{class:"text-center",children:"This plan has no exercises"})}),u&&Object(s.jsx)("footer",{className:"layout-footer bg-white text-primary border-top",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"px-3 pt-3",children:Object(s.jsx)(O.a,{now:1===r?0:(r-1)/u*100})}),Object(s.jsxs)("div",{className:"d-flex",children:[r>1&&Object(s.jsx)("div",{className:"p-2",children:Object(s.jsxs)("button",{className:"p-2",onClick:function(){return j(r-1)},children:[Object(s.jsx)("i",{className:"mdi mdi-chevron-left"}),Object(s.jsx)("span",{children:"Previous Set"})]})}),r<=u&&Object(s.jsx)("div",{className:"p-2 ml-auto",children:Object(s.jsxs)("button",{className:"p-2",onClick:o,children:[r<u?Object(s.jsx)("span",{children:"Next Set"}):Object(s.jsx)("span",{children:"Done"}),Object(s.jsx)("i",{className:"mdi mdi-chevron-right"})]})})]})]})})]})})},N=c(56),y=c(49),S=c(11),k=c(26),w=c(25),C=c(86),I=c(82),T=c(60),F=function(e){var t=e.exercise,c=e.removeExercise,n=e.handleChange,a=".".concat(t.setId,".").concat(t.id);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(C.a.Group,{children:[Object(s.jsxs)("div",{className:"d-flex align-items-start",children:[Object(s.jsx)(C.a.Label,{children:"Exercise"}),Object(s.jsx)("button",{type:"button",className:"ml-auto",onClick:c,children:Object(s.jsx)(w.a,{icon:k.c})})]}),Object(s.jsx)(C.a.Control,{name:"title".concat(a),type:"text",placeholder:"ex: Foward Fold",onChange:n,value:t.title,required:!0})]}),Object(s.jsxs)(C.a.Group,{children:[Object(s.jsx)(C.a.Label,{children:"Description"}),Object(s.jsx)(C.a.Control,{name:"description".concat(a),type:"text",placeholder:"ex: 1 per leg",onChange:n,value:t.description})]}),Object(s.jsx)(I.a,{className:"pb-2",children:Object(s.jsxs)(C.a.Group,{as:T.a,xs:"8",children:[Object(s.jsx)(C.a.Label,{children:"Reps / Secs"}),Object(s.jsxs)(C.a.Row,{children:[Object(s.jsx)(T.a,{xs:"6",children:Object(s.jsx)(C.a.Control,{name:"nbs".concat(a),type:"number",min:0,placeholder:"-",onChange:n,value:t.rep})}),Object(s.jsx)(T.a,{xs:"6",children:Object(s.jsxs)(C.a.Control,{name:"nbsType".concat(a),as:"select",onChange:n,value:t.nbsType,children:[Object(s.jsx)("option",{value:"rep",children:"Rep"},"rep"),Object(s.jsx)("option",{value:"sec",children:"Sec"},"sec")]})})]})]})}),Object(s.jsx)("hr",{})]})},E=c(40),H=c.n(E),R=function(e){e.index;var t=e.set,c=e.addExercise,a=e.removeExercise,i=e.handleChange;Object(n.useEffect)((function(){c()}),[]);var r=t.exercises.map((function(e){return Object(s.jsx)(F,{exercise:e,removeExercise:function(){return a(t.id,e.id)},handleChange:i},e.id)}));return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(b.a,{className:"mb-3 set",children:[Object(s.jsx)(b.a.Header,{className:"d-flex py-2",children:Object(s.jsxs)("div",{className:"d-flex align-items-center",children:[Object(s.jsx)(C.a.Label,{className:"mb-0 mr-3",children:"Series:"}),Object(s.jsx)(C.a.Control,{as:"select",name:"series.".concat(t.id),onChange:i,value:t.series,children:function(){for(var e=[],t=1;t<10;t++)e.push(Object(s.jsx)("option",{value:t,children:t},t));return e}()})]})}),Object(s.jsxs)(b.a.Body,{children:[r,Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)("button",{type:"button",className:"my-n2 py-2 px-3",onClick:c,children:Object(s.jsx)(w.a,{icon:k.b})})})]})]})})},P=c(61),D=function(){var e=Object(n.useState)({id:H()(),title:"",sets:[]}),t=Object(h.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),r=Object(h.a)(i,2),d=r[0],l=r[1];function b(e,t,c){return Object(S.a)(Object(S.a)({},e),{},Object(y.a)({},t,c))}function j(e){var t=e.target.name.split("."),c=t[0],s=t[1]||null,n=t[2]||null;a((function(t){return s?Object(S.a)(Object(S.a)({},t),{},{sets:t.sets.map((function(t){return t.id===s?n?Object(S.a)(Object(S.a)({},t),{},{exercises:t.exercises.map((function(t){return t.id===n?b(t,c,e.target.value):t}))}):b(t,c,e.target.value):t}))}):b(t,c,e.target.value)}))}function o(e,t){a((function(c){return Object(S.a)(Object(S.a)({},c),{},{sets:c.sets.map((function(c){return c.id===e?Object(S.a)(Object(S.a)({},c),{},{exercises:c.exercises.filter((function(e){return e.id!==t}))}):c}))})})),l(!0)}Object(n.useEffect)((function(){d&&(a((function(e){return Object(S.a)(Object(S.a)({},e),{},{sets:e.sets.filter((function(e){return e.exercises.length>0}))})})),l(!1))}),[d]);var u=Object(P.useHistory)();var O=c.sets.map((function(e){return Object(s.jsx)(R,{set:e,addExercise:function(){return t=e.id,void a((function(e){return Object(S.a)(Object(S.a)({},e),{},{sets:e.sets.map((function(e){return e.id===t?Object(S.a)(Object(S.a)({},e),{},{exercises:[].concat(Object(N.a)(e.exercises),[{id:H()(),setId:e.id,title:"",description:"",nbs:"",nbsType:"rep",weight:"",break:""}])}):e}))})}));var t},removeExercise:o,handleChange:j},e.id)}));return Object(s.jsxs)("div",{className:"layout",children:[Object(s.jsx)(x,{title:"Create plan",backHref:"/"}),Object(s.jsx)("main",{className:"layout-main container",children:Object(s.jsxs)(C.a,{onSubmit:function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("plans"))||[];t.push(c),localStorage.setItem("plans",JSON.stringify(t)),u.push("/plan")},children:[Object(s.jsxs)(C.a.Group,{children:[Object(s.jsx)(C.a.Label,{htmlFor:"planTitle",children:"Main Title"}),Object(s.jsx)(C.a.Control,{type:"text",className:"form-control",name:"title",placeholder:"ex: My First Plan!",value:c.title,onChange:j,required:!0})]}),O,Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(f.a,{variant:"light",onClick:function(){a((function(e){return Object(S.a)(Object(S.a)({},e),{},{sets:[].concat(Object(N.a)(e.sets),[{id:H()(),series:"1",exercises:[]}])})}))},children:Object(s.jsx)(w.a,{icon:k.b})})}),Object(s.jsx)(f.a,{type:"submit",variant:"light",block:!0,className:"mt-3",children:"Save"})]})})]})},B=c(83),J=c(87),L=c(84),G=function(){var e=Object(l.useRouteMatch)().url,t=Object(n.useState)(!1),c=Object(h.a)(t,2),a=c[0],i=c[1],r=Object(n.useState)(JSON.parse(localStorage.getItem("plans"))||[]),b=Object(h.a)(r,2),o=b[0],u=b[1];return Object(n.useEffect)((function(){o.length||(u(j),i(!0))}),[]),Object(n.useEffect)((function(){localStorage.setItem("plans",JSON.stringify(o))}),[o]),Object(s.jsxs)("div",{className:"layout",children:[a&&Object(s.jsx)(B.a,{variant:"warning",onClose:function(){return i(!1)},dismissible:!0,children:"A default plan was added to the list."}),Object(s.jsx)(x,{title:"Plans",next:"Create",nextHref:e+"/create"}),Object(s.jsx)("main",{className:"layout-main container",children:Object(s.jsx)(J.a,{children:o.map((function(t,c){return Object(s.jsx)(J.a.Item,{className:"bg-light",children:Object(s.jsxs)(C.a.Row,{children:[Object(s.jsx)(T.a,{xs:"auto",className:"align-self-center flex-grow-1",children:Object(s.jsx)("h2",{className:"h5",children:t.title})}),Object(s.jsx)(T.a,{xs:"auto",children:Object(s.jsx)(d.b,{to:e+"/"+t.id,className:"btn btn-block btn-primary",children:"Start"})}),Object(s.jsx)(T.a,{xs:"auto",children:Object(s.jsxs)(L.a,{children:[Object(s.jsx)(L.a.Toggle,{variant:"link",className:"no-caret",children:Object(s.jsx)(w.a,{icon:k.a})}),Object(s.jsxs)(L.a.Menu,{children:[Object(s.jsx)(L.a.Item,{as:d.b,to:e+"/"+t.id+"/view",children:"View"}),Object(s.jsx)(L.a.Divider,{}),Object(s.jsx)(L.a.Item,{onClick:function(){return e=t.id,void u((function(t){return t.filter((function(t){return t.id!=e}))}));var e},children:"Delete"})]})]})})]})},c)}))})})]})};var M=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(d.a,{children:Object(s.jsxs)(l.Switch,{children:[Object(s.jsx)(l.Route,{path:"/plan/create",children:Object(s.jsx)(D,{})}),Object(s.jsx)(l.Route,{path:"/plan/:planId/view",children:Object(s.jsx)(u,{})}),Object(s.jsx)(l.Route,{path:"/plan/:planId",children:Object(s.jsx)(g,{})}),Object(s.jsx)(l.Route,{path:"/plan",children:Object(s.jsx)(G,{})}),Object(s.jsx)(l.Redirect,{from:"/",to:"/plan"})]})})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d.a,{children:Object(s.jsx)(M,{})})}),document.getElementById("root")),A()}},[[77,1,2]]]);
//# sourceMappingURL=main.e27667b9.chunk.js.map