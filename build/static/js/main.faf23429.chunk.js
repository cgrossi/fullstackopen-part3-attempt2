(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),u=n.n(r),o=(n(20),n(1)),l=n(3),s=n(4),i=n.n(s),m="http://localhost:3001/api/persons",d=function(){return i.a.get(m).then((function(e){return e.data}))},b=function(e){return i.a.post(m,e).then((function(e){return e.data}))},f=function(e,t){return i.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))},h=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},p=function(e){var t=e.newSearch,n=e.handleSearch;return c.a.createElement("div",null,"filter names with ",c.a.createElement("input",{value:t,onChange:n}))},g=function(e){var t=e.handleSubmit,n=e.newName,a=e.handleNameChange,r=e.newNumber,u=e.handleNumberChange;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:n,onChange:a})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:r,onChange:u})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},j=function(e){var t=e.person,n=e.handleDelete;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,t.name," ",t.number," ",c.a.createElement("button",{onClick:n,id:t.id},"delete")))},O=function(e){var t=e.personsToShow,n=e.handleDelete;return c.a.createElement("div",null,t.map((function(e,t){return c.a.createElement(j,{key:t,person:e,handleDelete:n})})))},v=function(e){var t=e.message,n=t.message,a=t.type;return null===n?null:c.a.createElement("div",{style:"success"===a?{padding:10,margin:5,display:"inline block",backgroundColor:"#16c98d",color:"white",borderRadius:5}:{padding:10,margin:5,display:"inline block",backgroundColor:"#fa5e5b",color:"white",borderRadius:5}},n)},w=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(!1),s=Object(l.a)(u,2),i=s[0],m=s[1],j=Object(a.useState)(""),w=Object(l.a)(j,2),E=w[0],y=w[1],C=Object(a.useState)(""),S=Object(l.a)(C,2),k=S[0],N=S[1],T=Object(a.useState)(""),L=Object(l.a)(T,2),D=L[0],x=L[1],A=Object(a.useState)({message:null,type:""}),I=Object(l.a)(A,2),J=I[0],R=I[1];Object(a.useEffect)((function(){d().then((function(e){r(e)}))}),[]);var B=i?n.filter((function(e){return e.name.toLowerCase().includes(D.toLowerCase())})):n;return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(v,{message:J}),c.a.createElement(p,{newSearch:D,handleSearch:function(e){x(e.target.value),e.target.value.length>0?m(!0):m(!1)}}),c.a.createElement("h3",null,"Add new contact"),c.a.createElement(g,{handleSubmit:function(e){if(e.preventDefault(),n.some((function(e){return e.name.toLowerCase()===E.toLowerCase()}))){if(!1===window.confirm("".concat(E," already exists, replace their number?")))return null;var t=n.find((function(e){return e.name.toLowerCase()===E.toLowerCase()}));f(t.id,Object(o.a)(Object(o.a)({},t),{},{number:k})).then((function(e){r(n.map((function(t){return t.id!==e.id?t:e}))),R(Object(o.a)(Object(o.a)({},J),{},{message:"".concat(e.name,"'s number was successfully changed."),type:"success"})),setTimeout((function(){R(Object(o.a)(Object(o.a)({},J),{},{message:null,type:""}))}),4e3),y(""),N("")}))}else{b({name:E,number:k}).then((function(e){r(n.concat(e)),R(Object(o.a)(Object(o.a)({},J),{},{message:"".concat(e.name," was successfully added to the phonebook."),type:"success"})),setTimeout((function(){R(Object(o.a)(Object(o.a)({},J),{},{message:null,type:""}))}),4e3),y(""),N("")})).catch((function(e){console.log(e.response.data),R(Object(o.a)(Object(o.a)({},J),{},{message:e.response.data.error,type:"error"})),setTimeout((function(){R(Object(o.a)(Object(o.a)({},J),{},{message:null,type:""}))}),4e3)}))}},newName:E,newNumber:k,handleNameChange:function(e){return y(e.target.value)},handleNumberChange:function(e){return N(e.target.value)}}),c.a.createElement("h3",null,"Numbers"),c.a.createElement(O,{personsToShow:B,handleDelete:function(e){var t=n.find((function(t){return t.id===e.target.id})),a=t.id;window.confirm("Are you sure you wish to delete ".concat(t.name,"?")),h(a).then((function(e){if(0===Object.keys(e).length){var c=n.filter((function(e){return e.id!==a}));r(c),R(Object(o.a)(Object(o.a)({},J),{},{message:"".concat(t.name," was successfully deleted from phonebook."),type:"success"})),setTimeout((function(){R(Object(o.a)(Object(o.a)({},J),{},{message:null,type:""}))}),4e3)}})).catch((function(e){R(Object(o.a)(Object(o.a)({},J),{},{message:"Info for ".concat(t.name," has already been removed from the server."),type:"fail"})),setTimeout((function(){R(Object(o.a)(Object(o.a)({},J),{},{message:null,type:""}))}),4e3)}))}}))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.faf23429.chunk.js.map