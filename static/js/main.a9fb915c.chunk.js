(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{125:function(e,t,a){e.exports=a(524)},130:function(e,t,a){},132:function(e,t,a){},517:function(e,t,a){},518:function(e,t,a){},519:function(e,t,a){},524:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),o=a.n(s),c=(a(130),a(18)),i=a.n(c),l=a(51),u=(a(132),a(23)),m=a(120),h=a(15),g=new function e(){Object(m.a)(this,e),Object(h.c)(this,{isLoggedIn:"",username:"",token:""})},d=a(121),f=a.n(d).a.create({baseURL:"https://aslkdfjasljdfl.info/api/",timeout:5e3});f.interceptors.response.use((function(e){return e}),(function(e){e.config;return void 0!=e.status&&401===e.response.status&&"Unauthorized"===e.response.statusText&&(g.isLoggedIn=!1,g.username=null,sessionStorage.clear()),Promise.reject(e)}));var p=f,v=a(122),E=a.n(v);var b=function(){return r.a.createElement(E.a,{params:{particles:{number:{value:140},size:{value:2},color:{value:"black"},move:{speed:.2},line_linked:{color:"#474343",opacity:.1}}}})};a(517);var w=function(){return r.a.createElement("div",{class:"lp"},r.a.createElement(b,null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"left"},r.a.createElement("div",{class:"landing-page-title"},"Stay ahead of the game"),r.a.createElement("div",{class:"landing-page-title page-title2"},"Just like institutional investors"),r.a.createElement("p",{class:"landing-page-p"},"On-Chain Data and Intelligence Platform"),r.a.createElement("div",{class:"viewcharts-buffer"},r.a.createElement("button",null,"View Charts"))))))},k=a(74),y=a(124),j=a(33),I=Object(j.a)((function(e){var t=function(){var t=Object(l.a)(i.a.mark((function t(n){var r,s,o,c,l,u,m,h,g,d,f;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=1,sessionStorage.getItem("lastdate_"+e.type)&&"undefined"!=sessionStorage.getItem("lastdate_"+e.type)&&(r=sessionStorage.getItem("lastdate_"+e.type)),t.next=5,p.get("/"+e.type+"/?date="+r,{headers:{Authorization:"Token "+sessionStorage.getItem("token"),"Content-Type":"application/json",accept:"application/json"}});case 5:for(s=t.sent,o=JSON.parse(sessionStorage.getItem(e.type)),c=Object(k.a)(Object(k.a)({},o),s.data),l=Object.keys(c),u=l[l.length-1],sessionStorage.setItem(e.type,JSON.stringify(c)),sessionStorage.setItem("lastdate_"+e.type,c[u].date_time),s=[],m=Object.entries(c),h=0,g=m;h<g.length;h++)d=g[h],f=Object.entries(d[1]),s.push({time:a(f[0][1]),value:f[1][1]});n.setData(s),t.next=21;break;case 18:throw t.prev=18,t.t0=t.catch(0),t.t0;case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(e){return t.apply(this,arguments)}}();function a(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}var s=Object(n.useRef)();return Object(n.useEffect)((function(){var e=Object(y.a)(s.current,{width:450,height:250,layout:{backgroundColor:"#181c24",textColor:"#d1d4dc"},grid:{vertLines:{visible:!1},horzLines:{color:"rgba(42, 46, 57, 0.5)"}},rightPriceScale:{borderVisible:!1},timeScale:{borderVisible:!1},crosshair:{horzLine:{visible:!1}}}),a=e.addAreaSeries({topColor:"rgb(255,255,255)",bottomColor:"#bfbbbb",lineColor:"rgb(255,255,255)",lineWidth:2});t(a),e.timeScale().fitContent()}),[]),r.a.createElement("div",{class:"chart"},r.a.createElement("div",{class:"chart-name"},e.chartname,r.a.createElement("svg",{class:"info",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd"},r.a.createElement("path",{d:"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z"}))),r.a.createElement("div",{class:"chart-description"},e.chartdescription),r.a.createElement("div",{class:"viewcharts-buffer"},r.a.createElement("button",{class:"learn-more"},"Learn More")),r.a.createElement("div",{class:"chart-title"},e.charttitle),r.a.createElement("div",{class:"chart-container",ref:s},g.isLoggedIn?r.a.createElement("div",null):r.a.createElement("div",{class:"bg"},r.a.createElement("div",{class:"blur"},r.a.createElement("button",null,"Sign In")))))})),S=(a(518),Object(j.a)((function(){return r.a.createElement("div",{class:"chart-section"},r.a.createElement(I,{chartname:"BTC inflows to exchanges",chartdescription:"Inflows to exchanges fluctuate with changes in market sentiment. For instance, an increase in inflows suggests increased selling pressure in the market.",charttitle:"BTC inflows to exchanges",type:"inflow"}),r.a.createElement(I,{chartname:"Change in BTC held on exchanges",chartdescription:"Assets held on exchanges increase if more market participants want to sell than to buy, and if buyers choose to store their assets on exchanges.",charttitle:"Change in BTC held on exchanges",type:"balance"}))})));a(519);var L=function(){return r.a.createElement(u.Footer,{size:"mini"},r.a.createElement(u.FooterSection,{type:"left",logo:"nami"},r.a.createElement(u.FooterLinkList,null,r.a.createElement("a",{href:"#"},"Help"),r.a.createElement("a",{href:"#"},"mjh4ram@nami.guru"),r.a.createElement("a",{href:"#"},"Privacy & Terms"),r.a.createElement("a",{href:"#"},"Copyright \xa9 2020 Jae Hyun Moon All rights reserved"))))};var C=function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&response_type=token&redirect_uri=https://nami.guru&client_id=669215034815-unjgfieghj8jct4ihel38olojkn3jm30.apps.googleusercontent.com"},r.a.createElement("button",{class:"loginbutton"},"Log In")))},O=Object(j.a)((function(){return r.a.createElement("div",null,g.isLoggedIn?r.a.createElement("div",null,r.a.createElement("div",{class:"username_login"},g.username),r.a.createElement("button",{class:"loginbutton",onClick:function(){return g.isLoggedIn=!1,g.username=null,void sessionStorage.clear()}},"Log Out")):r.a.createElement(C,null))}));var x=function(){Object(n.useEffect)((function(){sessionStorage.getItem("token")&&sessionStorage.getItem("username")&&(g.username=sessionStorage.getItem("username"),g.token=sessionStorage.getItem("token"),g.isLoggedIn=!0);var t=function(e){var t=e.search("access_token"),a=e.search("&token_type");if(-1!=t&&-1!=a)return e.substring(t+13,a);return-1}(window.location.href);return-1!=t&&e(t),function(){}}),[]);var e=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new URLSearchParams).append("access_token",t),e.next=5,p.post("authenticate/google-oauth2/",a);case 5:n=e.sent,r=n.data.token,s=n.data.email,sessionStorage.setItem("token",r),sessionStorage.setItem("username",s),g.isLoggedIn=!0,g.username=s,g.token=r,window.location.href="https://nami.guru",e.next=19;break;case 16:throw e.prev=16,e.t0=e.catch(0),e.t0;case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(u.Layout,null,r.a.createElement(u.Header,{title:r.a.createElement("div",{class:"logo-name"},"nami")},r.a.createElement(u.Navigation,null,r.a.createElement("a",{href:"#"},"Home"),r.a.createElement("a",{href:"#"},"Chart"),r.a.createElement("a",{href:"#"},"Contact"),r.a.createElement("p",null,r.a.createElement(O,null)))),r.a.createElement(u.Drawer,{title:"Title"},r.a.createElement(u.Navigation,null,r.a.createElement("a",{href:"#"},"Link"),r.a.createElement("a",{href:"#"},"Link"),r.a.createElement("a",{href:"#"},"Link"),r.a.createElement("a",{href:"#"},"Link"))),r.a.createElement(u.Content,null,r.a.createElement(w,null),r.a.createElement(S,null),r.a.createElement(L,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(520),a(521);var _=a(71),z=a(11);o.a.render(r.a.createElement(_.a,null,r.a.createElement(z.c,null,r.a.createElement(z.a,{exact:!0,path:"/"},r.a.createElement(x,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.a9fb915c.chunk.js.map