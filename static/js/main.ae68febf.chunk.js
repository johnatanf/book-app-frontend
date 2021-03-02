(this["webpackJsonpbook-app-frontend"]=this["webpackJsonpbook-app-frontend"]||[]).push([[0],{93:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(31),s=c.n(r),i=c(21),o=c(13),l=c(9),u=c(6),j=c.n(u),k=c(7),O=c(17),d=c.n(O);var p="https://book-app-backend-5.herokuapp.com",h="".concat(p,"/users"),b={checkLoggedIn:function(){var e=Object(k.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=localStorage.getItem("token")?localStorage.getItem("token"):"null",e.next=4,d()({method:"get",url:h,headers:{Authorization:"Bearer ".concat(t)}});case 4:return c=e.sent,e.abrupt("return",c.data);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0.response.data;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),createUser:function(){var e=Object(k.a)(j.a.mark((function e(t,c,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d()({method:"post",url:h,data:{username:t,name:c,password:n}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response.data){e.next=11;break}throw e.t0.response.data;case 11:throw e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,c,n){return e.apply(this,arguments)}}()},I=c(49),f="".concat(p,"/books"),x={retrieveBooks:function(){var e=Object(k.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token")?localStorage.getItem("token"):"null",e.next=3,d()({method:"get",url:f,headers:{Authorization:"Bearer ".concat(t)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),retrieveSpecificBook:function(){var e=Object(k.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=localStorage.getItem("token")?localStorage.getItem("token"):"null",e.next=4,d()({method:"get",url:"".concat(f,"/").concat(t),headers:{Authorization:"Bearer ".concat(c)}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:if(e.prev=8,e.t0=e.catch(0),!e.t0.response.data){e.next=12;break}throw e.t0.response.data;case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),addBookToReadingList:function(){var e=Object(k.a)(j.a.mark((function e(t,c,n,a,r){var s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=localStorage.getItem("token")?localStorage.getItem("token"):"null",e.next=4,d()({method:"post",url:"".concat(f),data:{googleBookId:t,title:c,subtitle:n,authors:a,bookCoverUrl:r},headers:{Authorization:"Bearer ".concat(s)}});case 4:return i=e.sent,e.abrupt("return",i.status);case 8:if(e.prev=8,e.t0=e.catch(0),!e.t0.response.data){e.next=12;break}throw e.t0.response.data;case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c,n,a,r){return e.apply(this,arguments)}}(),toggleRead:function(){var e=Object(k.a)(j.a.mark((function e(t,c){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("token")?localStorage.getItem("token"):"null",e.next=4,d()({method:"put",url:"".concat(f,"/").concat(t),data:{read:!c},headers:{Authorization:"Bearer ".concat(n)}});case 4:return a=e.sent,e.abrupt("return",a.status);case 8:if(e.prev=8,e.t0=e.catch(0),!e.t0.response.data){e.next=12;break}throw e.t0.response.data;case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,c){return e.apply(this,arguments)}}(),deleteBook:function(){var e=Object(k.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=localStorage.getItem("token")?localStorage.getItem("token"):"null",e.next=4,d()({method:"delete",url:"".concat(f,"/").concat(t),headers:{Authorization:"Bearer ".concat(c)}});case 4:return n=e.sent,e.abrupt("return",n.status);case 8:if(e.prev=8,e.t0=e.catch(0),!e.t0.response.data){e.next=12;break}throw e.t0.response.data;case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},y=c(16),R=c(10),m=c(12),S=c(14),H=c(50),J=c(1),v=function(e){var t=e.flashNotification,c=Object(n.useState)(null),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(l.h)("/books/:id"),u=Object(l.g)(),O=function(){var e=Object(k.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c.preventDefault(),!c.target.classList.contains("disabled")){e.next=4;break}return e.abrupt("return");case 4:return c.target.classList.add("disabled"),e.next=7,x.toggleRead(o.params.id,r.read);case 7:s(Object(I.a)(Object(I.a)({},r),{},{read:!r.read})),c.target.classList.remove("disabled"),t("Successfully marked book as ".concat(r.read?"unread":"read","!"),!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t("Failed to update book",!1);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(k.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c.preventDefault(),!c.target.classList.contains("disabled")){e.next=4;break}return e.abrupt("return");case 4:return c.target.classList.add("disabled"),e.next=7,x.deleteBook(o.params.id);case 7:u.push("/books"),t("Successfully removed book from reading list!",!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t("Failed to delete book",!1);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x.retrieveSpecificBook(o.params.id).then((function(e){return s(e)})).catch((function(e){t("Failed to load book",!1)}))}),[]),Object(J.jsx)(J.Fragment,{children:Object(J.jsx)(y.a,{children:Object(J.jsx)(R.a,{md:{span:8,offset:2},lg:{span:6,offset:3},children:Object(J.jsx)(m.a,{children:Object(J.jsx)(H.a,{children:Object(J.jsxs)(H.a.Item,{className:"d-flex flex-column",children:[Object(J.jsxs)("div",{className:"mr-5 d-flex flex-row align-items-center",children:[Object(J.jsx)(m.a.Img,{style:{width:"150px"},variant:"top",src:"".concat(r?r.bookCoverUrl:""),className:"ml-auto mr-auto"}),Object(J.jsxs)("div",{className:"d-flex flex-column ml-5",children:[r?Object(J.jsxs)(S.a,{onClick:O,className:"mt-3",variant:"success",children:["Mark as '",r.read?"unread":"read","'"]}):null,r?Object(J.jsx)(S.a,{as:"a",target:"_blank",href:r.linkToPurchase,className:"mt-3",variant:"primary",children:"Purchase"}):null,r?Object(J.jsx)(S.a,{onClick:d,className:"mt-3",variant:"danger",children:"Delete"}):null]})]}),Object(J.jsxs)("div",{className:"mt-5",children:[r&&r.title?Object(J.jsx)("h1",{children:r.title}):null,r&&r.subtitle?Object(J.jsx)("h2",{className:"text-muted",children:r.subtitle}):null,r&&r.authors?Object(J.jsxs)("p",{children:["Author(s): ",r.authors.join(", ")]}):null,r&&r.categories?Object(J.jsxs)("p",{children:["Categories: ",r.categories.join(", ")]}):null,r&&r.releaseDate?Object(J.jsxs)("p",{children:["Release Date: ",r.releaseDate]}):null,r&&r.rating?Object(J.jsxs)("p",{children:["Rating: ",r.rating]}):null,r&&r.pageCount?Object(J.jsxs)("p",{children:["Number of pages: ",r.pageCount]}):null,r&&r.printedPageCount?Object(J.jsxs)("p",{children:["Number of printed pages: ",r.printedPageCount]}):null]})]})})})})})})},g="".concat(p,"/search"),E={search:function(){var e=Object(k.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=localStorage.getItem("token")?localStorage.getItem("token"):"null",e.next=4,d()({method:"get",url:"".concat(g,"?query=").concat(t),headers:{Authorization:"Bearer ".concat(c)}});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:if(e.prev=8,e.t0=e.catch(0),!e.t0.response.data){e.next=12;break}throw e.t0.response.data;case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},w=function(e){var t=e.book,c=e.query,n=e.flashNotification,a=e.setSearchedBooks,r=Object(l.h)(),s=Object(l.g)(),i=function(){var e=Object(k.a)(j.a.mark((function e(r){var s,i,o,l,u,k;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r.preventDefault(),!r.target.classList.contains("disabled")){e.next=4;break}return e.abrupt("return");case 4:return r.target.classList.add("disabled"),s=t.googleBookId,i=t.title,o=t.subtitle,l=t.authors,u=t.bookCoverUrl,e.next=8,x.addBookToReadingList(s,i,o,l,u);case 8:return e.next=10,E.search(c);case 10:k=e.sent,a(k),n("Successfully added book to reading list!",!0),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),n("Failed to add book to reading list",!1);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(k.a)(j.a.mark((function e(c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{c.preventDefault(),s.push("/books/".concat(t._id))}catch(a){n("Failed to view book",!1)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsx)(R.a,{xs:12,sm:6,md:4,lg:3,className:"mb-3 text-center",children:Object(J.jsxs)(m.a,{className:"h-100",children:[Object(J.jsx)(m.a.Img,{style:{width:"128px",height:"200px"},variant:"top",src:t&&t.bookCoverUrl?t.bookCoverUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzkAAARMCAAAAACfMQI5AAAhZElEQVR42u3dW5/S1sLA4ff7fxBuuOHHOHjCKrut9IBbi1pp3bQqtpa6pbXigdGZeXWrEJK1Ek6OE3j+d61MEoc8rpzzf8eSlu///AokciRyJHIkciSRI5EjkSORI5EjiRyJHIkciRyJHEnkSORI5EjkSORIIkciRyJHIkciRxI5EjkSORI5EjmSyJHIkciRyJHIkUSORI5EjkSORI4kciRyJHIkciRyJJEjkSORI5EjkSOJHIkciRyJHIkcSeRI5EjkSORI5EgiRyJHIkciRyJHEjkSORI5EjkSOZLIkciRyJHIkciRRI5EjkSORI5EjiRyJHIkciRyJHIkkSORI5EjkSORI4kciRyJHIkciRxJ5EjkSORI5EjkSCJHIkciRyJHIkcSORI5EjkSORI5ksiRyJHIkciRyJFEjkSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI5HjVyCRI5EjkSORI4kciRyJHIkciRxJ5EjkSORI5EjkSCJHIkciRyJHIkcSORI5EjkSORI5ksiRyJHIkciRyJFEjkSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI5EjiRyJHIkciRyJHEnkSORI5EjkSORIIkciRyJHIkciRxI5EjkSORI5EjmSyJHIkciRyJHIkUSORI5EjkSORI4kciRyJHIkciRyJJEjkSORI5EjkSOJHIkciRyJHIkcSeRI5EjkSORI5EgiRyJHIkciRyJHEjkSORI5EjkSOZLIkciRyJHIkciRRI5EjkSORI5EjiRyJHIkciRyJHIkkSORI5EjkSORI4kciRyJHIkciRy/AokciRyJHIkcSeRI5EjkSORI5EgiRyJHIkciRyJHEjkSORI5EjkSOZLIkciRyJHIkciRRI5EjkSORI5EjiRyJHIkciRyJHIkkSORI5EjkSORI4kciRyJHIkciRxJ5EjkSORI5EjkSCJHIkciRyJHIkcSORI5EjkSORI5ksiRyJHIkciRyJFEzmodje5e+7J5/uxudfGL9s2Hr3z75Kza+Nb5+u729eDIKkDOCr26vlff7S4+tBaQs3QPGnVdfWlFIGepDm9g865z/7UukLNEb9rQvO/MI2sDOYuPOODM6AytD+Qs2r+BmbX/txWCnMW6h0uy5oFVgpxF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yJFEjkSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI5EjiRyJHIkciRyJHEnkSORI5EjkSORIIkciRyJHIkciRxI5EjkSORI5EjmSyJHIkciRyJHIkUSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI5EjiRyJHIkciRyJHEnkSORI5EjkSORIIkciRyJHIkciRxI5EjkSORI5EjmSyJHIkciRyJHIkUSORI5EjkSORI4kciRyJHIkciRyJJEjkSORI5EjkSOJHIkciRyJHIkcSeRI5EjkSORI5EgiRyJHIkciRyJHEjkSORI5EjkSOZLIkciRyJHIkciRRI5EjkSORI5EjiRyJHIkciRyJHIkkSORI5EjkSORI4kciRyJHIkciRxJ5EjkSORI5EjkSCJHIkciRyJHIkcSORI5EjkSORI5ksiRyJHIkciRyJFEjkSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI4kciRyJHIkciRxJ5EjkSORI5EjkSCJHIkciRyJHIkcSORI5EjkSORI5ksiRyJHIkciRyJFEjkSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI5EjiRyJHIkciRyJHEnkSORI5EjkSORIIkciRyJHIkciRxI5EjkSOVL5+n+ZSlzpMtOSWQAAAABJRU5ErkJggg==",className:"ml-auto mr-auto"}),Object(J.jsxs)(m.a.Body,{className:"d-flex flex-column justify-content-between",children:[Object(J.jsxs)("div",{children:[Object(J.jsx)(m.a.Title,{children:t?t.title:""}),Object(J.jsx)(m.a.Subtitle,{className:"mb-3 text-muted",children:t?t.subtitle:""}),Object(J.jsx)(m.a.Subtitle,{className:"mb-3",children:t.authors?t.authors.join(", "):""})]}),Object(J.jsxs)("div",{children:[t._id&&"/search"===r.path?Object(J.jsx)(m.a.Subtitle,{className:"mb-3 text-muted",children:"Already in reading list"}):null,t._id?Object(J.jsx)(S.a,{onClick:o,className:"mt-3",variant:"primary",children:"View"}):null,t._id?null:Object(J.jsx)(S.a,{onClick:i,className:"mt-3",variant:"primary",children:"Add"})]})]})]})})},z=c(43),N=function(e){var t=e.flashNotification,c=Object(n.useState)([]),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],j=l[1];return Object(n.useEffect)((function(){x.retrieveBooks().then((function(e){s(e),e.length?j(""):j("Looks like your reading list is empty. Start adding books to your list by clicking the search button!")})).catch((function(e){t("Failed to retrieve books. Please reload the page and try again.",!1)}))}),[]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsxs)(y.a,{className:"mb-5",children:[Object(J.jsx)(R.a,{className:"mb-3",sm:{span:12},children:Object(J.jsx)("h3",{children:"Reading list"})}),r.length?null:Object(J.jsx)(R.a,{sm:{span:12},children:Object(J.jsx)(z.a,{className:u?"":"d-none",variant:"info",children:u})}),r.filter((function(e){return!1===e.read})).map((function(e){return Object(J.jsx)(w,{book:e},e._id)}))]}),Object(J.jsx)("hr",{}),r.length?Object(J.jsxs)(y.a,{children:[Object(J.jsx)(R.a,{className:"my-3",sm:{span:12},children:Object(J.jsx)("h3",{children:"Already read"})}),r.filter((function(e){return e.read})).map((function(e){return Object(J.jsx)(w,{book:e},e._id)}))]}):null]})},L=c(8),P=function(e){var t=e.flashNotification,c=Object(n.useState)([]),a=Object(i.a)(c,2),r=a[0],s=a[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],O=l[1],d=function(){var e=Object(k.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E.search(t.target.search.value);case 3:c=e.sent,s(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(y.a,{className:"mb-3",children:Object(J.jsx)(R.a,{md:{span:8,offset:2},lg:{span:6,offset:3},children:Object(J.jsx)(m.a,{className:"p-3",children:Object(J.jsxs)(L.a,{autoComplete:"off",onSubmit:d,className:"d-flex",children:[Object(J.jsx)(L.a.Control,{onChange:function(e){return O(e.target.value)},value:u,id:"search",size:"lg",type:"text",placeholder:"Search..."}),Object(J.jsx)(S.a,{type:"submit",className:"mb-2",size:"lg",children:"Search"})]})})})}),r.length?Object(J.jsx)(y.a,{children:Object(J.jsx)(R.a,{className:"mb-3",sm:{span:12},children:Object(J.jsx)("h3",{children:"Search results"})})}):null,r.length?Object(J.jsx)(y.a,{children:r.map((function(e){return Object(J.jsx)(w,{book:e,query:u,setSearchedBooks:s,flashNotification:t},e.googleBookId)}))}):null]})},T=c(61),X=function(){return Object(J.jsx)(y.a,{children:Object(J.jsx)(R.a,{md:{span:6,offset:3},children:Object(J.jsxs)(T.a,{className:"d-flex flex-column text-center",children:[Object(J.jsx)("h1",{style:{fontSize:"2.5em"},children:"BookApp"}),Object(J.jsx)("h2",{className:"mb-5",style:{fontSize:"1.25em",fontWeight:"lighter"},children:"Organise your reading list in one place."}),Object(J.jsxs)("div",{children:[Object(J.jsx)(o.b,{to:"/login",children:Object(J.jsx)(S.a,{className:"ml-2 mr-2",variant:"success",children:"Login"})}),Object(J.jsx)("span",{children:"or"}),Object(J.jsx)(o.b,{to:"/signup",children:Object(J.jsx)(S.a,{className:"ml-2 mr-2",variant:"success",children:"Sign Up"})})]})]})})})},C="".concat(p,"/login"),Z={login:function(){var e=Object(k.a)(j.a.mark((function e(t,c){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d()({method:"post",url:C,data:{username:t,password:c}});case 3:return n=e.sent,a=n.data.token,localStorage.setItem("token",a),e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0.response.data;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c){return e.apply(this,arguments)}}()},D=function(e){var t=Object(l.g)(),c=function(){var c=Object(k.a)(j.a.mark((function c(n){var a,r;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n.preventDefault(),a=n.target.username.value,r=n.target.password.value,c.next=6,Z.login(a,r);case 6:t.push("/"),e.setUser({username:a}),e.flashNotification("Welcome, ".concat(a,"!"),!0),c.next=16;break;case 11:c.prev=11,c.t0=c.catch(0),e.flashNotification("Incorrect username/password.",!1),n.target.username.value="",n.target.password.value="";case 16:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(e){return c.apply(this,arguments)}}();return Object(J.jsx)(y.a,{children:Object(J.jsx)(R.a,{md:{span:8,offset:2},lg:{span:6,offset:3},children:Object(J.jsx)(m.a,{className:"p-3",children:Object(J.jsxs)(L.a,{autoComplete:"off",onSubmit:c,children:[Object(J.jsx)("h2",{children:"Login"}),Object(J.jsxs)(L.a.Group,{controlId:"username",children:[Object(J.jsx)(L.a.Label,{children:"Username"}),Object(J.jsx)(L.a.Control,{type:"text",placeholder:"example123"})]}),Object(J.jsxs)(L.a.Group,{controlId:"password",children:[Object(J.jsx)(L.a.Label,{children:"Password"}),Object(J.jsx)(L.a.Control,{type:"password",placeholder:"Password"})]}),Object(J.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})},Q=function(e){var t=Object(l.g)(),c=function(){var c=Object(k.a)(j.a.mark((function c(n){var a,r,s;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,n.preventDefault(),a=n.target.username.value,r=n.target.name.value,s=n.target.password.value,c.next=7,b.createUser(a,r,s);case 7:return c.next=9,Z.login(a,s);case 9:t.push("/"),e.setUser({username:a}),e.flashNotification("Welcome, ".concat(a,"!"),!0),c.next=20;break;case 14:c.prev=14,c.t0=c.catch(0),e.flashNotification(c.t0.error,!1),n.target.username.value="",n.target.name.value="",n.target.password.value="";case 20:case"end":return c.stop()}}),c,null,[[0,14]])})));return function(e){return c.apply(this,arguments)}}();return Object(J.jsx)(y.a,{children:Object(J.jsx)(R.a,{md:{span:8,offset:2},lg:{span:6,offset:3},children:Object(J.jsx)(m.a,{className:"p-3",children:Object(J.jsxs)(L.a,{autoComplete:"off",onSubmit:c,children:[Object(J.jsx)("h2",{children:"Sign up"}),Object(J.jsxs)(L.a.Group,{controlId:"username",children:[Object(J.jsx)(L.a.Label,{children:"Username"}),Object(J.jsx)(L.a.Control,{type:"text",placeholder:"example123"})]}),Object(J.jsxs)(L.a.Group,{controlId:"name",children:[Object(J.jsx)(L.a.Label,{children:"Name"}),Object(J.jsx)(L.a.Control,{type:"text",placeholder:"Bob"})]}),Object(J.jsxs)(L.a.Group,{controlId:"password",children:[Object(J.jsx)(L.a.Label,{children:"Password"}),Object(J.jsx)(L.a.Control,{type:"password",placeholder:"Password"})]}),Object(J.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})},B=c(32),M=c(25),U="".concat(p,"/logout"),F={logout:function(){var e=Object(k.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d()({method:"get",url:U});case 3:return t=e.sent,localStorage.removeItem("token"),e.abrupt("return",t.data);case 8:if(e.prev=8,e.t0=e.catch(0),!e.t0.response.data){e.next=12;break}throw e.t0.response.data;case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},G=function(e){var t=Object(l.g)(),c=function(){var c=Object(k.a)(j.a.mark((function c(){return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,F.logout();case 3:e.setUser(null),t.push("/"),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(0),e.flashNotification("Failed to log out. Please try again later.",!1);case 10:case"end":return c.stop()}}),c,null,[[0,7]])})));return function(){return c.apply(this,arguments)}}();return Object(J.jsxs)(B.a,{bg:"light",variant:"light",children:[Object(J.jsx)(o.b,{to:e.user?"/books":"/",children:Object(J.jsx)(B.a.Brand,{as:"span",children:"Book App"})}),e.user?Object(J.jsxs)(M.a,{className:"d-flex flex-column ml-auto",children:[Object(J.jsxs)("div",{className:"d-flex ml-auto",children:[Object(J.jsx)(M.a.Link,{as:"span",className:"p-0 py-2 mr-3",children:Object(J.jsx)(o.b,{to:"/search",children:"Search"})}),Object(J.jsx)(M.a.Link,{as:"span",className:"p-0 py-2 mr-3",children:Object(J.jsx)(o.b,{to:"/books",children:"Books"})}),Object(J.jsx)(M.a.Link,{onClick:c,className:"p-0 py-2",children:"Logout"})]}),Object(J.jsxs)(B.a.Text,{className:"ml-5",children:["Signed in as ",e.user.username]})]}):Object(J.jsxs)(M.a,{className:"ml-auto",children:[Object(J.jsx)(M.a.Link,{as:"span",children:Object(J.jsx)(o.b,{to:"/",children:"Home"})}),Object(J.jsx)(M.a.Link,{as:"span",children:Object(J.jsx)(o.b,{to:"/login",children:"Login"})}),Object(J.jsx)(M.a.Link,{as:"span",children:Object(J.jsx)(o.b,{to:"/signup",children:"Sign Up"})})]})]})},W=function(e){return Object(J.jsx)(B.a,{bg:"light",variant:"light",className:"d-flex justify-content-center align-items-center fixed-bottom",children:Object(J.jsxs)("span",{style:{fontSize:"12px"},children:["Johnatan Fallen || view my portfolio ",Object(J.jsx)("a",{href:"#",children:"here"}),"."]})})},A=function(e){return Object(J.jsx)(z.a,{className:"".concat(e.notification.message?"":"invisible"," mt-3"),variant:"".concat(e.notification.success?"primary":"danger"),children:e.notification.message?e.notification.message:"&nbsp"})},q=c(62),K=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)({message:null,success:null}),s=Object(i.a)(r,2),u=s[0],j=s[1],k=Object(n.useState)(null),O=Object(i.a)(k,2),d=O[0],p=O[1],h=function(e,t){d&&(clearTimeout(d),p(null)),j({message:e,success:t});var c=setTimeout((function(){j({message:null,success:null})}),5e3);p(c)};return Object(n.useEffect)((function(){b.checkLoggedIn().then((function(e){return a(e)})).catch((function(e){return a(null)}))}),[]),Object(J.jsxs)(o.a,{basename:"/book-app-frontend",children:[Object(J.jsx)(G,{user:c,setUser:a,flashNotification:h}),Object(J.jsxs)(q.a,{className:"pb-5",children:[Object(J.jsx)(A,{notification:u}),Object(J.jsxs)(l.d,{children:[Object(J.jsx)(l.b,{path:"/search",children:c?Object(J.jsx)(P,{flashNotification:h}):Object(J.jsx)(l.a,{to:"/"})}),Object(J.jsx)(l.b,{path:"/books/:id",children:c?Object(J.jsx)(v,{flashNotification:h}):Object(J.jsx)(l.a,{to:"/"})}),Object(J.jsx)(l.b,{path:"/books",children:c?Object(J.jsx)(N,{flashNotification:h}):Object(J.jsx)(l.a,{to:"/"})}),Object(J.jsx)(l.b,{path:"/login",children:c?Object(J.jsx)(l.a,{to:"/books"}):Object(J.jsx)(D,{setUser:a,flashNotification:h})}),Object(J.jsx)(l.b,{path:"/signup",children:c?Object(J.jsx)(l.a,{to:"/books"}):Object(J.jsx)(Q,{setUser:a,flashNotification:h})}),Object(J.jsx)(l.b,{path:"/",children:c?Object(J.jsx)(l.a,{to:"/books"}):Object(J.jsx)(X,{})})]})]}),Object(J.jsx)(W,{})]})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,95)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(K,{})}),document.getElementById("root")),Y()}},[[93,1,2]]]);
//# sourceMappingURL=main.ae68febf.chunk.js.map