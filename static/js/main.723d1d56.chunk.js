(this["webpackJsonpmy-pwa"]=this["webpackJsonpmy-pwa"]||[]).push([[0],{14:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(15),i=n.n(a),l=(n(26),n(3)),o=(n(27),n(28),n(29),n(4)),r=n(7),d=n(5),j=(n(14),n(30),n(0)),u=function(e){for(var t=e.student,n=e.homework,s=e.setHomework,a=Object(c.useState)(new Date),i=Object(l.a)(a,2),o=i[0],u=i[1],b=o.getDate(),m=(o.getDay(),o.getMonth()+1),O=o.getFullYear(),_=new Date(O,m-1,0).getDate(),f=new Date(O,m-1,1),h=new Date(O,m,0),v=h.getDate(),x=[],N=1;N<=v;N++)x.push(N);for(var p=[],g=1;g<=_;g++)p.push(g);for(var w=f.getDay(),S=p.slice(-w),k=[],I=7-h.getDay()-1,y=1;y<=I;y++)k.push(y);var C=[];C=0==w?x.concat(k):S.concat(x,k);var M=[0,1,2,3,4,5,6,0,1,2,3,4,5,6,0,1,2,3,4,5,6,0,1,2,3,4,5,6,0,1,2,3,4,5,6,0,1,2,3,4,5,6,0,1,2,3,4,5,6],D=function(e,t){for(var n=C.indexOf(e)==C.lastIndexOf(e),c=22<=e&&e<=31,s=1<=e&&e<=6,a=[],i=C.indexOf(e);-1!=i;)a.push(i),i=C.indexOf(e,i+1);return!n&&t>=7&&s&&1==a.indexOf(t)?"".concat(O,"-").concat(m+1==13?1:m+1,"-").concat(e):!n&&t<=6&&c&&0==a.indexOf(t)||n&&c&&t<=6?"".concat(O,"-").concat(m-1==0?12:m-1,"-").concat(e):"".concat(O,"-").concat(m,"-").concat(e)},T=Object(c.useState)(!1),L=Object(l.a)(T,2),E=L[0],F=L[1],B=Object(c.useState)(""),W=Object(l.a)(B,2),H=W[0],J=W[1],Y=function(e){F(!0);var t=e.target.getAttribute("data-full-date");if(null!=t){var n=t.split("-").map((function(e){return 1==e.length?"0".concat(e):e}));J("".concat(n[0],"-").concat(n[1],"-").concat(n[2]))}};Object(c.useEffect)((function(){localStorage.setItem("homeworksKey",JSON.stringify(n),[n])}));var K=Object(c.useState)(!1),z=Object(l.a)(K,2),P=z[0],A=z[1],U=function(){A(!P)};return Object(j.jsxs)("div",{className:"calendar",children:[Object(j.jsx)("div",{onClick:U,className:"calendar__show-menu-btn nav-btn",children:Object(j.jsx)(d.g,{className:""})}),1==P?Object(j.jsxs)("div",{className:"calendar__menu",children:[Object(j.jsx)("div",{onClick:U,className:"calendar__menu__close-btn nav-btn",children:Object(j.jsx)(d.j,{className:""})}),Object(j.jsx)(r.b,{to:"/buildprofile",className:"link--remove-style",children:Object(j.jsx)("div",{className:"calendar__menu__list",children:"\ud559\uc0dd \ucd94\uac00"})}),Object(j.jsx)("div",{className:"menu__line"}),Object(j.jsx)(r.b,{to:"/profiles",className:"link--remove-style",children:Object(j.jsx)("div",{className:"calendar__menu__list",children:"\ud559\uc0dd \ubaa8\uc544\ubcf4\uae30"})}),Object(j.jsx)("div",{className:"menu__line"}),Object(j.jsx)(r.b,{to:"/homeworkview/:".concat(O,"-").concat(m,"-").concat(b),className:"link--remove-style",children:Object(j.jsx)("div",{className:"calendar__menu__list",children:"\uc219\uc81c \ucd94\uac00"})}),Object(j.jsx)("div",{className:"menu__line"})]}):null,Object(j.jsxs)("div",{className:"\uce98\ub9b0\ub354",children:[Object(j.jsx)("div",{className:"calendarTop",children:Object(j.jsxs)("div",{className:"calendarTop__this-month",children:[Object(j.jsx)("button",{className:"calendarTop__button--left",onClick:function(){u(new Date(O,m-2,b))},children:Object(j.jsx)(d.b,{className:"nav-btn"})}),Object(j.jsxs)("p",{children:[m,"\uc6d4"]}),Object(j.jsx)("button",{className:"calendarTop__button--right",onClick:function(){u(new Date(O,m,b))},children:Object(j.jsx)(d.c,{className:"nav-btn"})})]})}),Object(j.jsxs)("div",{className:"calendarBttm",children:[Object(j.jsxs)("div",{className:"days",children:[Object(j.jsx)("div",{className:"sunday",children:"\uc77c"}),Object(j.jsx)("div",{className:"monday",children:"\uc6d4"}),Object(j.jsx)("div",{className:"tuesday",children:"\ud654"}),Object(j.jsx)("div",{className:"wednesday",children:"\uc218"}),Object(j.jsx)("div",{className:"thursday",children:"\ubaa9"}),Object(j.jsx)("div",{className:"friday",children:"\uae08"}),Object(j.jsx)("div",{className:"saturday",children:"\ud1a0"})]}),Object(j.jsx)("div",{className:"dates",children:C.map((function(e,n){return Object(j.jsxs)("div",{className:"dates__date","data-\uc694\uc77c":M[n],"data-full-date":D(e,n),onClick:Y,children:[e,t.map((function(e,t){return Object(j.jsx)("div",{children:e.days.includes(M[n])&&O==Number(e.firstDate.substring(0,4))&&m==Number(e.firstDate.substring(5,7))&&C.findIndex((function(t){return t==Number(e.firstDate.substring(8,10))}))>=7&&n>=C.findIndex((function(t){return t==Number(e.firstDate.substring(8,10))}))||e.days.includes(M[n])&&O==Number(e.firstDate.substring(0,4))&&m==Number(e.firstDate.substring(5,7))&&C.findIndex((function(t){return t==Number(e.firstDate.substring(8,10))}))<=6&&n>=C.lastIndexOf(Number(e.firstDate.substring(8,10)))||e.days.includes(M[n])&&O==Number(e.firstDate.substring(0,4))&&m>Number(e.firstDate.substring(5,7))||e.days.includes(M[n])&&O>Number(e.firstDate.substring(0,4))&&m<Number(e.firstDate.substring(5,7))||e.days.includes(M[n])&&O>Number(e.firstDate.substring(0,4))&&m==Number(e.firstDate.substring(5,7))&&n>=7&&n>=C.findIndex((function(t){return t==Number(e.firstDate.substring(8,10))}))?Object(j.jsx)("div",{className:"".concat(e.color," studentInCal")}):null},e.id)}))]},n)}))})]})]}),1==E?Object(j.jsxs)("div",{className:"calendar__homework-lists",children:[Object(j.jsx)("div",{className:"calendar__homework-lists__close-btn nav-btn",onClick:function(){return F(!1)},children:Object(j.jsx)(d.j,{})}),Object(j.jsx)("div",{className:"calendar__homework-lists__date",children:H}),n.map((function(e,t){return H==e.homeworkDate?Object(j.jsxs)("div",{className:"calendar__homework-lists__list",children:[Object(j.jsxs)("div",{className:"calendar__homework-list__student ".concat(e.color),children:[e.homeworkStudent,Object(j.jsx)("div",{onClick:function(){return function(e){console.log(e.id);var t=JSON.parse(localStorage.getItem("homeworksKey")).filter((function(t){return t.id!=e.id}));console.log(t),s(t)}(e)},children:Object(j.jsx)(d.i,{})})]}),Object(j.jsx)("div",{className:"calendar__homework-list__content",children:e.homeworkInput})]},t):null}))]}):null,Object(j.jsx)(r.b,{to:"/homeworkview/:".concat(O,"-").concat(m,"-").concat(b),className:"link--remove-style",children:Object(j.jsx)("div",{className:"calendar__add-hwmk-btn",children:Object(j.jsx)(d.h,{className:"calendar__add-hwmk-btn__icon nav-btn"})})})]})},b=n(9),m=n(6),O=function(e){var t=e.setModalShow,n=e.setMainModalText,c=e.mainModalText,s=e.subModalText,a=function(){t(!1)};return console.log(c),Object(j.jsxs)("div",{className:"modal-container",children:[Object(j.jsx)("div",{className:"modal__overlay"}),Object(j.jsxs)("div",{className:"modal__content",children:[Object(j.jsx)("div",{className:"modal__content__icon-wrap",children:Object(j.jsx)("svg",{className:"modal__content__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",children:Object(j.jsx)("path",{d:"M64 13.435c-.05-.69-9.295-5.66-9.442-5.66-.147 0-10.714 17.672-10.86 17.72-.148.05-3.915-20.183-4.404-21.364C38.804 2.95.09 10.156.01 10.778c-.342 2.658 7.387 48.49 8.22 49.18.83.688 40.31-6.794 40.604-7.237.294-.443-1.614-10.19-1.565-10.93.048-.738 16.78-27.666 16.73-28.355zM9.795 57.838c-.195-.492-7.778-43.025-7.73-45.585.004-.156 35.47-5.81 35.665-5.514.196.294 4.207 21.364 4.158 21.758-.05.394-2.935 4.184-3.082 4.184-.147 0-14.58-11.372-14.92-11.372-.343 0-8.66 8.812-8.513 9.353.147.542 25.243 19.987 25.733 20.233.49.246 4.354-6.006 4.5-5.76.148.246.735 6.203.735 6.203S9.99 58.33 9.796 57.837zM47 38.024c-.183 0-2.862-1.994-3.01-1.994-.146 0-.586 1.108-.586 1.108l2.825 2.03-1.212 1.884s-2.715-1.81-2.9-1.81c-.182 0-.806.776-.55.998.258.222 2.936 1.772 2.9 1.957-.037.185-1.32 2.363-1.43 2.363-.11 0-3.633-2.917-3.743-2.917-.11 0-.954.628-.624.997.33.37 3.56 2.99 3.523 3.1-.037.112-.697 1.995-.99 1.884-.295-.11-23.043-17.02-22.896-17.61.147-.592 5.296-5.6 5.675-5.847.29-.19 14.236 12.16 14.97 11.667.734-.492 16.144-24.96 16.584-24.86.44.098 5.235 3.397 5.235 3.397L52.21 28.55s-1.54-.86-1.65-.825c-.11.037-.55.85-.368.96.183.11 1.394.812 1.394.812s-.99 2.363-1.1 2.326c-.11-.036-1.652-.996-1.8-.996s-.586.923-.476.997c.11.075 1.724 1.146 1.724 1.146l-1.137 2.104s-2.275-1.33-2.385-1.33c-.11 0-.66 1.035-.514 1.146.147.11 2.165 1.477 2.165 1.477s-.88 1.66-1.063 1.66zm-11.74-25.55c-.074-.11-27.634 3.535-27.886 3.915-.073.11-.183 1.18 0 1.328.183.148 27.995-3.58 28.142-3.766.146-.185-.184-1.366-.257-1.477zM19.297 24.4c0-.11-10.31 1.33-10.75 1.55 0 0 .147.998.257 1.22.11.22 9.393-1.33 9.613-1.404.22-.074.88-1.255.88-1.366zm10.017.037s7.155-1.034 7.19-1.145c.038-.11-.182-1.33-.292-1.33-.11 0-8.072 1.256-8.402 1.33-.18.04 1.505 1.145 1.505 1.145zM21.17 37.803c-.184-.074-10.236 1.258-10.495 1.403-.33.185-.073.997.073 1.145.147.15 11.227-1.587 11.484-1.697.258-.112-.88-.777-1.063-.85zm7.007 5.87c-.22-.148-16.33 2.755-16.584 2.806-.367.073 0 .81.183 1.033.183.222 17.135-2.843 17.318-2.954s-.696-.74-.917-.887zm3.89 5.02c-.257-.11-19.362 3.068-19.667 3.287-.257.185.037 1.034.293 1.145.257.11 19.923-3.803 19.923-3.803s-.293-.517-.55-.628zm-10.31-18.79s.476-.813.55-.998c.072-.185-.548-.835-.66-.812-.184.037-1.432 1.735-1.652 2.068-.22.333 4.22 3.36 4.586 3.545.368.185.515-.406.588-.775.074-.37-3.412-3.028-3.412-3.028z"})})}),Object(j.jsx)("div",{className:"modal__text--main",children:{sameName:"\uc557 \uc911\ubcf5",writtenYet:"\ub2e4 \uc368",successSaving:"\uc800\uc7a5~",noStudentInHomework:"\uc557 no\ud559\uc0dd",askDelete:"\uc815\ub9d0\ub85c\uc694?"}[c]}),Object(j.jsx)("div",{className:"modal__text--sub",children:{sameName:"\ub611\uac19\uc740 \uc774\ub984\uc758 \ud559\uc0dd\uc774 \uc788\uc5b4\uc694",writtenYet:"\uc791\uc131\ud558\uc9c0 \uc54a\uc740 \ud56d\ubaa9\uc774 \uc788\uc5b4\uc694",successSaving:"\uc800\uc7a5\ud588\uc5b4\uc694",noStudentInHomework:"\uc219\uc81c\ub97c \ub0bc \ud559\uc0dd\uc774 \uc5c6\uc5b4\uc694",askDelete:"\uc0ad\uc81c\uc2dc \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc5b4\uc694"}[s]}),{sameName:Object(j.jsx)("div",{className:"modal__okBtn",onClick:a,children:"\ub2eb\uae30"}),writtenYet:Object(j.jsx)("div",{className:"modal__okBtn",onClick:a,children:"\ub2eb\uae30"}),successSaving:Object(j.jsx)("div",{className:"modal__okBtn",onClick:a,children:"\ub2eb\uae30"}),noStudentInHomework:Object(j.jsx)(r.b,{to:"/buildprofile",className:"modal__do-btn",onClick:function(){a(),n("")},children:Object(j.jsx)("div",{children:"\ucd94\uac00\ud558\uae30"})})}[c],{noStudentInHomework:Object(j.jsx)(r.b,{to:"/",className:"modal__cancel-btn",onClick:a,children:Object(j.jsx)("div",{children:"\ud648\uc73c\ub85c"})})}[c]]})]})},_=(n(32),function(e){var t=e.student,n=e.homework,s=e.setHomework,a=e.modalShow,i=e.setModalShow,r=e.mainModalText,u=e.setMainModalText,_=e.subModalText,f=e.setSubModalText,h=Object(o.f)(),v=Object(o.g)().clickedDate,x=Object(c.useState)(),N=Object(l.a)(x,2),p=N[0],g=N[1],w=Object(c.useState)(""),S=Object(l.a)(w,2),k=S[0],I=S[1],y=Object(c.useState)({}),C=Object(l.a)(y,2),M=C[0],D=C[1],T=function(e){I(e.target.innerText)};Object(c.useEffect)((function(){return D({homeworkStudent:k})}),[k]);var L=v.slice(1).split("-").map((function(e){return 1==e.length?"0".concat(e):e})),E=Object(c.useState)("".concat(L[0],"-").concat(L[1],"-").concat(L[2])),F=Object(l.a)(E,2),B=F[0],W=F[1],H=Object(c.useState)({}),J=Object(l.a)(H,2),Y=J[0],K=J[1];Object(c.useEffect)((function(){return K({homeworkDate:B})}),[B]);var z=Object(c.useState)(""),P=Object(l.a)(z,2),A=P[0],U=P[1],R=Object(c.useState)({}),G=Object(l.a)(R,2),X=G[0],$=G[1];Object(c.useEffect)((function(){return $({homeworkInput:A})}),[A]);return Object(c.useEffect)((function(){localStorage.setItem("homeworksKey",JSON.stringify(n))}),[n]),Object(c.useEffect)((function(){null!=localStorage.getItem("profilesKey")&&0!=JSON.parse(localStorage.getItem("profilesKey")).length||(console.log("h"),u("noStudentInHomework"),f("noStudentInHomework"),i(!0))})),Object(j.jsxs)("div",{className:"build-homework",children:[Object(j.jsxs)("div",{className:"nav-btn--container",children:[Object(j.jsx)(d.f,{className:"nav-btn",onClick:function(){return h(-1)}}),Object(j.jsx)(d.e,{className:"nav-btn",onClick:function(){return h("/")}})]}),Object(j.jsx)("div",{className:"page-title",children:"\uc219\uc81c \ucd94\uac00"}),Object(j.jsx)("div",{className:"titleLine"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s([].concat(Object(b.a)(n),[p]))},children:[Object(j.jsxs)("div",{className:"homeworkForm",children:[Object(j.jsxs)("div",{className:"homeworkForm__student",children:[Object(j.jsx)("p",{className:"homeworkForm__student__title",children:"\ud559\uc0dd"}),Object(j.jsx)("div",{className:"homeworkForm__student__names",children:t.map((function(e,t){return Object(j.jsx)("div",{className:M.homeworkStudent==e.name?"homework-form__student-name ".concat(e.color," student-name--selected"):"homework-form__student-name ".concat(e.color," "),onClick:T,children:e.name},t)}))})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"homeworkForm__date",children:[Object(j.jsx)("p",{className:"homeworkForm__date__title",children:"\ub0a0\uc9dc"}),Object(j.jsx)("input",{className:"homeworkForm__date__content",type:"date",min:"2020-01-01",value:B,onChange:function(e){W(e.target.value)}})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"homeworkForm__homework",children:[Object(j.jsx)("p",{className:"homeworkForm__homework__title",children:"\uc219\uc81c"}),Object(j.jsx)("input",{className:"homeworkForm__homework__content",type:"textarea",placeholder:"\ub2e8\uc5b4 Day 1 ~ 2",value:A,onChange:function(e){U(e.target.value)}})]}),Object(j.jsx)("div",{className:"contentLine"})]}),Object(j.jsx)("button",{className:"homeworkForm__saveBtn",onClick:function(e){if(""==M.homeworkStudent||""==Y.homeworkDate||""==X.homeworkInput)e.preventDefault(),u("writtenYet"),f("writtenYet"),i(!0);else{var n={id:(new Date).valueOf()},c={color:t.find((function(e){return e.name==M.homeworkStudent})).color};g(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)({},M),Y),X),c),n)),u("successSaving"),f("successSaving"),i(!0)}},children:"\uc800\uc7a5"})]}),a?Object(j.jsx)(O,{modalShow:a,setModalShow:i,mainModalText:r,subModalText:_}):null]})}),f=(n(33),n(34),function(e){var t=e.student,n=e.setStudent,s=e.modalShow,a=e.setModalShow,i=e.mainModalText,r=e.setMainModalText,u=e.subModalText,_=e.setSubModalText,f=Object(o.f)(),h=Object(c.useState)(""),v=Object(l.a)(h,2),x=v[0],N=v[1],p=Object(c.useState)({school:""}),g=Object(l.a)(p,2),w=g[0],S=g[1];Object(c.useEffect)((function(){return S({school:x})}),[x]);var k=Object(c.useState)(""),I=Object(l.a)(k,2),y=I[0],C=I[1],M=Object(c.useState)({name:""}),D=Object(l.a)(M,2),T=D[0],L=D[1];Object(c.useEffect)((function(){return L({name:y})}),[y]);var E=Object(c.useState)(""),F=Object(l.a)(E,2),B=F[0],W=F[1],H=Object(c.useState)({age:""}),J=Object(l.a)(H,2),Y=J[0],K=J[1];Object(c.useEffect)((function(){return K({age:B})}),[B]);var z=Object(c.useState)(""),P=Object(l.a)(z,2),A=P[0],U=P[1],R=Object(c.useState)({wage:""}),G=Object(l.a)(R,2),X=G[0],$=G[1];Object(c.useEffect)((function(){return $({wage:A})}),[A]);var q=Object(c.useState)(""),Q=Object(l.a)(q,2),V=Q[0],Z=Q[1],ee=Object(c.useState)({wage:""}),te=Object(l.a)(ee,2),ne=te[0],ce=te[1];Object(c.useEffect)((function(){return ce({onWeek:V})}),[V]);var se=Object(c.useState)(""),ae=Object(l.a)(se,2),ie=ae[0],le=ae[1],oe=Object(c.useState)({wage:""}),re=Object(l.a)(oe,2),de=re[0],je=re[1];Object(c.useEffect)((function(){return je({hour:ie})}),[ie]);var ue=Object(c.useState)(""),be=Object(l.a)(ue,2),me=be[0],Oe=be[1],_e=Object(c.useState)({wage:""}),fe=Object(l.a)(_e,2),he=fe[0],ve=fe[1];Object(c.useEffect)((function(){return ve({totalNum:me})}),[me]);var xe=Object(c.useState)(""),Ne=Object(l.a)(xe,2),pe=Ne[0],ge=Ne[1],we=Object(c.useState)({wage:""}),Se=Object(l.a)(we,2),ke=Se[0],Ie=Se[1];Object(c.useEffect)((function(){return Ie({totalWage:pe})}),[pe]);var ye=Object(c.useState)("".concat((new Date).toISOString().substring(0,10))),Ce=Object(l.a)(ye,2),Me=Ce[0],De=Ce[1],Te=Object(c.useState)({wage:""}),Le=Object(l.a)(Te,2),Ee=Le[0],Fe=Le[1];Object(c.useEffect)((function(){return Fe({firstDate:Me})}),[Me]);var Be=Object(c.useState)([{id:"dayChoice1",value:1,text:"\uc6d4"},{id:"dayChoice2",value:2,text:"\ud654"},{id:"dayChoice3",value:3,text:"\uc218"},{id:"dayChoice4",value:4,text:"\ubaa9"},{id:"dayChoice5",value:5,text:"\uae08"},{id:"dayChoice6",value:6,text:"\ud1a0"},{id:"dayChoice0",value:0,text:"\uc77c"}]),We=Object(l.a)(Be,2),He=We[0],Je=(We[1],Object(c.useState)([])),Ye=Object(l.a)(Je,2),Ke=Ye[0],ze=Ye[1],Pe=Object(c.useState)({days:""}),Ae=Object(l.a)(Pe,2),Ue=Ae[0],Re=Ae[1];Object(c.useEffect)((function(){return Re({days:Ke})}),[Ke]);var Ge=function(e){var t=e.target.checked;ze(t?[].concat(Object(b.a)(Ke),[Number(e.target.value)]):Ke.filter((function(t){return t!=e.target.value})))},Xe=Object(c.useState)([{id:"colorChoice0",value:"pinkCoral"},{id:"colorChoice1",value:"lightPink"},{id:"colorChoice2",value:"deepYellow"},{id:"colorChoice3",value:"lightYellow"},{id:"colorChoice4",value:"lightGreen"},{id:"colorChoice5",value:"fluorescentGreen"},{id:"colorChoice6",value:"lightblue"},{id:"colorChoice7",value:"deepblue"},{id:"colorChoice8",value:"pastelPurple"}]),$e=Object(l.a)(Xe,2),qe=$e[0],Qe=($e[1],Object(c.useState)({color:""})),Ve=Object(l.a)(Qe,2),Ze=Ve[0],et=Ve[1],tt=function(e){et({color:e.target.value})},nt=Object(c.useState)(""),ct=Object(l.a)(nt,2),st=ct[0],at=ct[1],it=Object(c.useState)({memo:""}),lt=Object(l.a)(it,2),ot=lt[0],rt=lt[1];Object(c.useEffect)((function(){return rt({memo:st})}),[st]);var dt=Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)({},T),w),Y),X),ne),de),he),ke),Ee),Ze),ot),Ue);Object(c.useEffect)((function(){localStorage.setItem("profilesKey",JSON.stringify(t))}),[t]);return Object(j.jsxs)("div",{className:"build-profile",children:[Object(j.jsxs)("div",{className:"nav-btn--container",children:[Object(j.jsx)(d.f,{className:"nav-btn",onClick:function(){return f(-1)}}),Object(j.jsx)(d.e,{className:"nav-btn",onClick:function(){return f("/")}})]}),Object(j.jsx)("div",{className:"page-title",children:"\uac1c\uc778 \ud504\ub85c\ud544"}),Object(j.jsx)("div",{className:"titleLine"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),N(""),C(""),W(""),Z(""),le(""),Oe(""),ge(""),De(""),at("")},children:[Object(j.jsx)("div",{className:"studentInfo",children:Object(j.jsxs)("div",{className:"studentInfo--bttm",children:[Object(j.jsxs)("div",{className:"studentInfo__name",children:[Object(j.jsx)("p",{className:"studentInfo__name__title",children:"\uc774\ub984"}),Object(j.jsx)("input",{className:"studentInfo__name__content",type:"text",placeholder:"\uc774\uc218\ubbfc",value:y,onChange:function(e){C(e.target.value)}})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__school",children:[Object(j.jsx)("p",{className:"studentInfo__school__title",children:"\ud559\uad50"}),Object(j.jsx)("input",{className:"studentInfo__school__content",type:"text",placeholder:"\ud55c\uad6d\uace0\ub4f1\ud559\uad50",value:x,onChange:function(e){N(e.target.value)}})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__age",children:[Object(j.jsx)("p",{className:"studentInfo__age__title",children:"\ub098\uc774"}),Object(j.jsx)("input",{className:"studentInfo__age__content",type:"number",placeholder:"17",value:B,onChange:function(e){W(parseInt(e.target.value))}})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__wage",children:[Object(j.jsx)("p",{className:"studentInfo__wage__title",children:"\uc218\uc5c5\ub8cc"}),Object(j.jsxs)("div",{className:"studentInfo__wage__content",children:[Object(j.jsxs)("div",{className:"studentInfo__wage__args",children:[Object(j.jsxs)("div",{className:"studentInfo__wage__p",children:[Object(j.jsx)("span",{className:"studentInfo__highlight",children:"\uc2dc\uae09"}),Object(j.jsx)("input",{type:"number",placeholder:"2",value:A,onChange:function(e){U(parseInt(e.target.value))}}),"\ub9cc\uc6d0"]}),Object(j.jsxs)("div",{className:"studentInfo__wage__args__onweek",children:[Object(j.jsxs)("div",{className:"studentInfo__wage__p",children:[Object(j.jsx)("span",{className:"studentInfo__highlight",children:"\ud69f\uc218"}),Object(j.jsxs)("span",{className:"studentInfo__margin",children:[Object(j.jsx)("input",{type:"number",placeholder:"2",value:ie,onChange:function(e){le(parseInt(e.target.value))}}),"\uc2dc\uac04\uc529"]})]}),Object(j.jsxs)("div",{className:"studentInfo__wage__p",children:["\uc8fc",Object(j.jsx)("input",{type:"number",placeholder:"2",value:V,onChange:function(e){Z(parseInt(e.target.value))}}),"\ud68c"]})]})]}),Object(j.jsxs)("div",{className:"studentInfo__wage__result",children:[Object(j.jsxs)("div",{className:"studentInfo__wage__p",children:[Object(j.jsx)("span",{className:"studentInfo__highlight",children:"\uc804\uccb4"}),Object(j.jsxs)("span",{className:"studentInfo__margin",children:[Object(j.jsx)("input",{type:"number",placeholder:"8",value:me,onChange:function(e){Oe(parseInt(e.target.value))}}),"\ud68c"]})]}),Object(j.jsxs)("div",{className:"studentInfo__wage__p",children:[Object(j.jsx)("input",{type:"number",placeholder:"32",value:pe,onChange:function(e){ge(parseInt(e.target.value))}}),"\ub9cc\uc6d0"]})]})]})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__first-date",children:[Object(j.jsx)("p",{className:"studentInfo__first-date__title",children:"\uc2dc\uc791\uc77c"}),Object(j.jsx)("input",{className:"studentInfo__first-date__content",type:"date",value:Me,onChange:function(e){De(e.target.value)}})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__days",children:[Object(j.jsx)("p",{className:"studentInfo__days__title",children:"\uc694\uc77c"}),Object(j.jsx)("div",{className:"studentInfo__days__content",children:He.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"checkbox",id:e.id,name:"daysInput",value:e.value,onClick:Ge}),Object(j.jsx)("label",{htmlFor:e.id,children:Object(j.jsx)("div",{className:Ke.includes(e.value)?"dayLabel__Div dayChecked":"dayLabel__Div",children:e.text})})]},t)}))})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__color",children:[Object(j.jsx)("p",{className:"studentInfo__color__title",children:"\ubc30\uacbd\uc0c9"}),Object(j.jsx)("div",{className:"studentInfo__color__inputContainer",children:qe.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"radio",className:"colorInput",id:e.id,name:"daysInput",value:e.value,onClick:tt}),Object(j.jsx)("label",{className:"colorLabel",htmlFor:e.id,children:Object(j.jsx)("div",{className:Ze.color==e.value?"colorLabelDiv ".concat(e.value," colorLabelDarker"):"colorLabelDiv ".concat(e.value)})})]},t)}))})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__memo",children:[Object(j.jsx)("p",{className:"studentInfo__memo__title",children:"\uba54\ubaa8"}),Object(j.jsx)("input",{className:"studentInfo__memo__content",type:"text",placeholder:"\ud2b9\uc774\uc0ac\ud56d",value:st,onChange:function(e){at(e.target.value)}})]}),Object(j.jsx)("div",{className:"contentLine"})]})}),Object(j.jsx)("button",{className:"buildProfileSaveBtn",onClick:function(e){var c=""==dt.name||""==dt.school||""==dt.age||""==dt.wage||""==dt.onWeek||""==dt.totalNum||""==dt.totalWage||""==dt.firstDate||""==dt.colorObj||""==dt.dayObj,s=JSON.parse(localStorage.getItem("profilesKey"));if(""!=dt.name&&s.filter((function(e){return e.name==dt.name})).length>=1)e.preventDefault(),r("sameName"),_("sameName"),a(!0);else if(c)e.preventDefault(),r("writtenYet"),_("writtenYet"),a(!0);else if(!c){var i={id:(new Date).valueOf()},l=Object(m.a)(Object(m.a)({},dt),i);n([].concat(Object(b.a)(t),[l])),r("successSaving"),_("successSaving"),a(!0)}},children:"\uc800\uc7a5"})]}),s?Object(j.jsx)(O,{modalShow:s,setModalShow:a,mainModalText:i,subModalText:u}):null]})}),h=(n(19),function(e){var t=e.student,n=e.setStudent,s=e.modalShow,a=(e.setModalShow,e.mainModalText,e.setMainModalText,e.subModalText,e.setSubModalText,Object(o.f)()),i=Object(c.useState)(!1),u=Object(l.a)(i,2),m=u[0],O=u[1],_=Object(c.useState)([]),f=Object(l.a)(_,2),h=f[0],v=f[1],x=Object(c.useState)(!1),N=Object(l.a)(x,2),p=N[0],g=N[1],w=function(e){return 1==m&&0==h.includes(e)?Object(j.jsx)(d.d,{}):1==m&&h.includes(e)?Object(j.jsx)(d.a,{}):null},S=t.map((function(e,t){return Object(j.jsx)(r.b,{to:"/profiles/:".concat(e.id),onClick:function(e){return 1==m&&e.preventDefault()},children:Object(j.jsxs)("div",{className:"".concat(e.color," profiles__profile"),children:[Object(j.jsx)("p",{className:"profiles__profile__name",children:e.name}),Object(j.jsx)("div",{className:"propfiles__profile__deleteBtn",onClick:function(){k(e),g(!p)},children:w(e)})]})},t)}));Object(c.useEffect)((function(){localStorage.setItem("profilesKey",JSON.stringify(t))}),[t]);var k=function(e){if(1==m&&0==h.includes(e))v([].concat(Object(b.a)(h),[e]));else if(1==m&&1==h.includes(e)){var t=h.filter((function(t){return t!=e}));v(t)}};return Object(j.jsxs)("div",{className:"Profiles",children:[Object(j.jsxs)("div",{className:"nav-btn--container",children:[Object(j.jsx)(d.f,{className:"nav-btn",onClick:function(){return a(-1)}}),Object(j.jsx)(d.e,{className:"nav-btn",onClick:function(){return a("/")}})]}),Object(j.jsxs)("div",{className:"profiles__main",children:[Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"profiles__deleteBtn",onClick:function(){!function(){O(!m);var e=t.filter((function(e){return!h.includes(e)}));1==m&&0==s&&n(e)}()},children:m?Object(j.jsx)("h1",{children:"\uc644\ub8cc"}):Object(j.jsx)("h1",{children:"\uc0ad\uc81c"})})}),Object(j.jsx)("div",{className:"page-title",children:"\ubaa8\ub4e0 \ud504\ub85c\ud544"}),Object(j.jsx)("div",{className:"titleLine"}),Object(j.jsx)("div",{className:"profiles__students",children:S})]})]})}),v=function(e){var t=e.student,n=e.setStudent,s=(e.HomeRoundedIcon,Object(o.f)()),a=(t.map((function(e,t){return Object(j.jsxs)("div",{className:"".concat(e.color," profiles__profile"),children:[Object(j.jsx)("p",{className:"profiles__profile__name",children:e.name}),Object(j.jsx)("div",{className:"propfiles__profile__deleteBtn",onClick:function(){h(e)},children:"X"})]},t)})),Object(c.useState)(!1)),i=Object(l.a)(a,2),r=i[0],u=i[1],m=Object(c.useState)([]),O=Object(l.a)(m,2),_=O[0],f=O[1];Object(c.useEffect)((function(){localStorage.setItem("profilesKey",JSON.stringify(t))}),[t]);var h=function(e){1==r&&f([].concat(Object(b.a)(_),[e]))},v=Object(o.g)().profileIdInUrl.slice(1),x=t.find((function(e){return e.id==v}));return Object(j.jsxs)("div",{className:"Profiles",children:[Object(j.jsxs)("div",{className:"nav-btn--container",children:[Object(j.jsx)(d.f,{className:"nav-btn",onClick:function(){return s(-1)}}),Object(j.jsx)(d.e,{className:"nav-btn",onClick:function(){return s("/")}})]}),Object(j.jsxs)("div",{className:"profiles__main",children:[Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"profiles__deleteBtn",onClick:function(){!function(){if(u(!r),1==r){var e=t.filter((function(e){return!_.includes(e)}));n(e)}}()},children:r?Object(j.jsx)("h1",{children:"\uc644\ub8cc"}):Object(j.jsx)("h1",{children:"\uc0ad\uc81c"})})}),Object(j.jsx)("div",{className:"page-title",children:"\uc0c1\uc138 \ud504\ub85c\ud544"}),Object(j.jsx)("div",{className:"titleLine"}),Object(j.jsx)("div",{className:"studentInfo",children:Object(j.jsxs)("div",{className:"studentInfo--bttm",children:[Object(j.jsxs)("div",{className:"studentInfo__name",children:[Object(j.jsx)("p",{className:"studentInfo__name__title",children:"\uc774\ub984"}),x.name]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__school",children:[Object(j.jsx)("p",{className:"studentInfo__school__title",children:"\ud559\uad50"}),x.school]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__age",children:[Object(j.jsx)("p",{className:"studentInfo__age__title",children:"\ub098\uc774"}),x.age]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__wage",children:[Object(j.jsx)("p",{className:"studentInfo__wage__title",children:"\uc218\uc5c5\ub8cc"}),Object(j.jsxs)("div",{className:"studentInfo__wage__content",children:[Object(j.jsxs)("div",{className:"studentInfo__wage__args",children:[Object(j.jsxs)("div",{className:"studentInfo__wage__p",children:[Object(j.jsx)("span",{className:"studentInfo__highlight studentInfo__padding",children:"\uc2dc\uae09"}),x.wage,"\ub9cc\uc6d0"]}),Object(j.jsxs)("div",{className:"studentInfo__wage__args__onweek",children:[Object(j.jsx)("span",{className:"studentInfo__highlight studentInfo__padding",children:"\ud69f\uc218"}),Object(j.jsx)("div",{className:"studentInfo__wage__p",children:Object(j.jsxs)("span",{className:"studentInfo__padding",children:[x.hour,"\uc2dc\uac04\uc529"]})}),Object(j.jsxs)("div",{className:"studentInfo__wage__p",children:["\uc8fc",x.onWeek,"\ud68c"]})]})]}),Object(j.jsxs)("div",{className:"studentInfo__wage__result",children:[Object(j.jsxs)("div",{className:"studentInfo__wage__p",children:[Object(j.jsx)("span",{className:"studentInfo__highlight studentInfo__padding",children:"\uc804\uccb4"}),Object(j.jsxs)("span",{className:"studentInfo__padding",children:[x.totalNum,"\ud68c"]})]}),Object(j.jsxs)("div",{className:"studentInfo__wage__p",children:[x.totalWage,"\ub9cc\uc6d0"]})]})]})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__first-date",children:[Object(j.jsx)("p",{className:"studentInfo__first-date__title",children:"\uc2dc\uc791\uc77c"}),x.firstDate]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__days",children:[Object(j.jsx)("p",{className:"studentInfo__days__title",children:"\uc694\uc77c"}),Object(j.jsx)("div",{className:"studentInfo__days__content",children:Object(j.jsx)("div",{children:x.days})})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__color",children:[Object(j.jsx)("p",{className:"studentInfo__color__title",children:"\ubc30\uacbd\uc0c9"}),Object(j.jsx)("div",{children:x.color})]}),Object(j.jsx)("div",{className:"contentLine"}),Object(j.jsxs)("div",{className:"studentInfo__memo",children:[Object(j.jsx)("p",{className:"studentInfo__memo__title",children:"\uba54\ubaa8"}),Object(j.jsx)("div",{children:x.memo})]}),Object(j.jsx)("div",{className:"contentLine"})]})})]})]})},x=n(18),N=n.n(x),p=function(){return Object(j.jsx)("div",{className:"build-homework",children:Object(j.jsx)("div",{className:"page-title",children:"Not Found"})})};var g=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),i=Object(l.a)(a,2),r=(i[0],i[1],Object(c.useState)(!1)),d=Object(l.a)(r,2),b=(d[0],d[1],Object(c.useState)("writtenYet")),m=Object(l.a)(b,2),O=m[0],x=m[1],g=Object(c.useState)("writtenYet"),w=Object(l.a)(g,2),S=w[0],k=w[1],I=Object(c.useState)((function(){if("undefined"!==typeof window){var e=window.localStorage.getItem("profilesKey");return null!==e?JSON.parse(e):[]}})),y=Object(l.a)(I,2),C=y[0],M=y[1],D=Object(c.useState)((function(){if("undefined"!==typeof window){var e=window.localStorage.getItem("homeworksKey");return null!==e?JSON.parse(e):[]}})),T=Object(l.a)(D,2),L=T[0],E=T[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/tutor-schedule",element:Object(j.jsx)(u,{student:C,homework:L,setHomework:E})}),Object(j.jsx)(o.a,{path:"/homeworkview/:clickedDate",element:Object(j.jsx)(_,{student:C,homework:L,setHomework:E,modalShow:n,setModalShow:s,mainModalText:O,setMainModalText:x,subModalText:S,setSubModalText:k})}),Object(j.jsx)(o.a,{path:"/buildprofile",element:Object(j.jsx)(f,{student:C,setStudent:M,modalShow:n,setModalShow:s,mainModalText:O,setMainModalText:x,subModalText:S,setSubModalText:k})}),Object(j.jsx)(o.a,{path:"/profiles",element:Object(j.jsx)(h,{student:C,setStudent:M,HomeRoundedIcon:N.a,modalShow:n,setModalShow:s,mainModalText:O,setMainModalText:x,subModalText:S,setSubModalText:k})}),Object(j.jsx)(o.a,{path:"/profiles/:profileIdInUrl",element:Object(j.jsx)(v,{student:C,setStudent:M,HomeRoundedIcon:N.a})}),Object(j.jsx)(o.a,{path:"*",element:Object(j.jsx)(p,{})})]})})},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(r.a,{basename:"/tutor-schedule",children:Object(j.jsx)(g,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tutor-schedule",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/tutor-schedule","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):S(t,e)}))}}(),k()}},[[42,1,2]]]);
//# sourceMappingURL=main.723d1d56.chunk.js.map