(function(e){function t(t){for(var a,c,o=t[0],l=t[1],u=t[2],b=0,d=[];b<o.length;b++)c=o[b],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);i&&i(t);while(d.length)d.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(n.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},r={app:0},n=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var i=l;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},1848:function(e,t,s){},"1e67":function(e,t,s){"use strict";s("1848")},"20a1":function(e,t,s){},"2ede":function(e,t,s){},"422e":function(e,t,s){"use strict";s("2ede")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),r={class:"container pb-5"},n={class:"row mx-auto"},c={class:"mx-3 mx-md-0 mx-lg-5"},o={class:"row"},l={class:"mx-auto my-4",id:"logo"},u=Object(a["f"])("Miny-URL ");function i(e,t,s,i,b,d){var j=Object(a["v"])("router-link"),f=Object(a["v"])("router-view");return Object(a["p"])(),Object(a["d"])("main",{class:["",{"dark-mode":i.isDark}]},[Object(a["g"])("div",r,[Object(a["g"])("div",n,[Object(a["g"])("a",{id:"dark-mode-btn",onClick:t[1]||(t[1]=function(){return i.toggleTheme&&i.toggleTheme.apply(i,arguments)})},[Object(a["g"])(i["FontAwesomeIcon"],{icon:i.faMoon},null,8,["icon"])])]),Object(a["g"])("section",c,[Object(a["g"])("div",o,[Object(a["g"])("h1",l,[Object(a["g"])(j,{to:"/"},{default:Object(a["B"])((function(){return[u,Object(a["g"])(i["FontAwesomeIcon"],{icon:i.faLink},null,8,["icon"])]})),_:1})])]),Object(a["g"])(f,{onNew_url:i.storeData,data:i.data},null,8,["onNew_url","data"])])]),Object(a["g"])(i["Footer"])],2)}var b=s("ad3d"),d=s("c074"),j=Object(a["E"])("data-v-43be549c");Object(a["s"])("data-v-43be549c");var f={class:"navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom"},g=Object(a["f"])("Miny"),m=Object(a["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["g"])("span",{class:"navbar-toggler-icon"})],-1),p={class:"collapse navbar-collapse",id:"navbarSupportedContent"},O={class:"navbar-nav mr-auto"},h={class:"nav-item"},v=Object(a["f"])("Home"),y={class:"nav-item"},k=Object(a["f"])("Stats");Object(a["q"])();var w=j((function(e,t,s,r,n,c){var o=Object(a["v"])("router-link");return Object(a["p"])(),Object(a["d"])("nav",f,[Object(a["g"])(o,{class:"navbar-brand",to:"/"},{default:j((function(){return[g]})),_:1}),m,Object(a["g"])("div",p,[Object(a["g"])("ul",O,[Object(a["g"])("li",h,[Object(a["g"])(o,{class:"nav-link",to:"/",active:!1},{default:j((function(){return[v]})),_:1})]),Object(a["g"])("li",y,[Object(a["g"])(o,{class:"nav-link",to:"/stats"},{default:j((function(){return[k]})),_:1})])])])])})),x={name:"Footer"};s("b851");x.render=w,x.__scopeId="data-v-43be549c";var _=x,z={name:"App",setup:function(){var e=Object(a["u"])(!1),t=Object(a["u"])({}),s=function(){e.value=!e.value},r=function(e){t.value=e};return{faLink:d["a"],faMoon:d["b"],FontAwesomeIcon:b["a"],Footer:_,isDark:e,toggleTheme:s,storeData:r,data:t}}};s("1e67");z.render=i;var D=z,U=s("6c02"),R=Object(a["E"])("data-v-cf737c4c");Object(a["s"])("data-v-cf737c4c");var T={class:"home"},S={key:0,class:"alert alert-dismissable alert-success"},M={class:" my-auto"},q={class:"d-inline-block mr-2"},E={key:1,class:"alert alert-dismissable alert-danger"},I={class:" my-auto"},L={class:"d-inline-block mr-2"},V={class:"form-group col-lg-12 px-0 mx-auto url"},A=Object(a["g"])("label",{for:"longurl",class:"sr-only"},"long url",-1),C={class:"input-group"},P=Object(a["g"])("span",{class:"input-group-btn"},[Object(a["g"])("button",{class:"btn btn-lg",type:"submit",id:"submit"},"Minify!")],-1),F={class:"form-group col-lg-12 px-0 mx-auto"},N=Object(a["g"])("label",{for:"slug",class:"sr-only"},"slug",-1),H={class:"input-group mb-2"},Y=Object(a["g"])("div",{class:"input-group-prepend"},[Object(a["g"])("div",{class:"input-group-text"},"https://miny-url.herokuapp.com/")],-1);Object(a["q"])();var $=R((function(e,t,s,r,n,c){var o=Object(a["v"])("Details");return Object(a["p"])(),Object(a["d"])(a["a"],null,[Object(a["g"])("div",T,[n.success.message?(Object(a["p"])(),Object(a["d"])("div",S,[Object(a["g"])("p",M,[Object(a["g"])("span",q,Object(a["x"])(n.success.status),1),Object(a["f"])(" "+Object(a["x"])(n.success.message),1)])])):Object(a["e"])("",!0),n.error.message?(Object(a["p"])(),Object(a["d"])("div",E,[Object(a["g"])("p",I,[Object(a["g"])("span",L,Object(a["x"])(n.error.status),1),Object(a["f"])(" "+Object(a["x"])(n.error.message),1)])])):Object(a["e"])("",!0),Object(a["g"])("form",{onSubmit:t[3]||(t[3]=Object(a["D"])((function(){return c.createUrl&&c.createUrl.apply(c,arguments)}),["prevent"]))},[Object(a["g"])("div",V,[A,Object(a["g"])("div",C,[Object(a["C"])(Object(a["g"])("input",{type:"url",class:"form-control form-control-lg","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.url=e}),id:"longUrl",placeholder:"https://"},null,512),[[a["z"],n.url]]),P])]),Object(a["g"])("div",F,[N,Object(a["g"])("div",H,[Y,Object(a["C"])(Object(a["g"])("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.slug=e}),class:"form-control",id:"slug",placeholder:"Custom slug (OPTIONAL)"},null,512),[[a["z"],n.slug]])])])],32)]),Object(a["g"])(o)],64)})),J=(s("96cf"),s("1da1")),B={class:"row my-5"};function G(e,t,s,r,n,c){var o=Object(a["v"])("Detail");return Object(a["p"])(),Object(a["d"])("div",B,[Object(a["g"])(o,{title:"Total Hits",body:n.total_hits},null,8,["body"]),Object(a["g"])(o,{title:"Total URLs",body:n.total_urls},null,8,["body"]),Object(a["g"])(o,{title:"Today URLs",body:n.today_urls},null,8,["body"])])}var K=s("bc3a"),Q=s.n(K),W=s("782e"),X=s.n(W),Z=Object(a["E"])("data-v-3aab0760");Object(a["s"])("data-v-3aab0760");var ee={class:"col-md-6 mb-md-4 col-lg-4 mb-4"},te={class:"text-center p-4 panel"};Object(a["q"])();var se=Z((function(e,t,s,r,n,c){return Object(a["p"])(),Object(a["d"])("div",ee,[Object(a["g"])("div",te,[Object(a["g"])("h2",null,Object(a["x"])(s.title),1),Object(a["g"])("h2",null,Object(a["x"])(s.body),1)])])})),ae={name:"Detail",props:{title:{type:String,required:!0},body:{type:String,required:!0}}};s("58d5");ae.render=se,ae.__scopeId="data-v-3aab0760";var re=ae,ne={name:"Details",data:function(){return{total_hits:"",total_urls:"",today_urls:""}},components:{Detail:re},methods:{getDetails:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Q.a.get("/urls");case 2:t=e.sent,console.log(t.data),this.total_hits=t.data.total_hits,this.total_urls=t.data.total_urls,this.today_urls=t.data.today_urls;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){var e=this;return Object(J["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{e.getDetails(),s=new X.a("cd4f09e4d90a8c340704",{cluster:"eu",encrypted:!0}),a=s.subscribe("miny"),a.bind("update_details",(function(){e.getDetails()}))}catch(r){console.log(r)}case 1:case"end":return t.stop()}}),t)})))()}};ne.render=G;var ce=ne,oe={name:"Home",components:{Details:ce},data:function(){return{slug:"",url:"",error:{status:null,message:null},success:{status:null,message:null}}},methods:{showInfo:function(e,t,s){var a=this;return Object(J["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.success.message=e,a.success.status=t,a.$emit("new_url",s),r.next=5,setTimeout((function(){a.success.message=null,a.success.status=null,a.$router.push({path:"stats",query:{slug:s.slug}})}),3e3);case 5:case"end":return r.stop()}}),r)})))()},showError:function(e,t){var s=this;this.error.message=e,this.error.status=t,setTimeout((function(){s.error.message=null,s.error.status=null}),3e3)},createUrl:function(){var e=this;return Object(J["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q.a.post("/url",{url:e.url,slug:e.slug});case 3:s=t.sent,e.showInfo(s.data.message,s.status,s.data.data),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response.data),t.t0.response?e.showError(t.t0.response.data.message,t.t0.response.status):e.showError(t.t0.message,500);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}};s("8118");oe.render=$,oe.__scopeId="data-v-cf737c4c";var le=oe,ue=Object(a["E"])("data-v-4d123770");Object(a["s"])("data-v-4d123770");var ie={class:"about"},be={class:"form-group col-lg-12 px-0 mx-auto url"},de=Object(a["g"])("label",{for:"longurl",class:"sr-only"},"miny url",-1),je={class:"input-group"},fe=Object(a["g"])("span",{class:"input-group-btn"},[Object(a["g"])("button",{class:"btn btn-lg",type:"submit",id:"submit"},"Show Details")],-1),ge={key:0,class:"row"},me={class:"col-lg-8"},pe={class:"card col-lg-12 p-0 mb-4"},Oe=Object(a["g"])("div",{class:"card-header"},[Object(a["g"])("h2",null,"Miny URL")],-1),he={class:"card-body miny_url"},ve=Object(a["f"])(),ye={class:"card col-lg-12 p-0"},ke=Object(a["g"])("div",{class:"card-header"},[Object(a["g"])("h2",null,"Original Url")],-1),we={class:"card-body"},xe={class:"col-lg-4 p-2 m-lg-0 mx-sm-3 my-sm-4",id:"stats"},_e=Object(a["g"])("h2",null,"Total Hits",-1),ze=Object(a["g"])("hr",null,null,-1),De=Object(a["g"])("h2",null,"Last Visit",-1),Ue=Object(a["g"])("hr",null,null,-1),Re=Object(a["g"])("h2",null,"Date Created",-1),Te={key:1,class:"alert alert-dismissable alert-danger"},Se={class:" my-auto"},Me={class:"d-inline-block mr-2"};Object(a["q"])();var qe=ue((function(e,t,s,r,n,c){return Object(a["p"])(),Object(a["d"])("div",ie,[Object(a["g"])("form",{onSubmit:t[2]||(t[2]=Object(a["D"])((function(){return c.parseSlug&&c.parseSlug.apply(c,arguments)}),["prevent"]))},[Object(a["g"])("div",be,[de,Object(a["g"])("div",je,[Object(a["C"])(Object(a["g"])("input",{type:"url",class:"form-control form-control-lg disabled",id:"longUrl","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.minyUrl=e}),required:"",placeholder:"Enter miny url"},null,512),[[a["z"],n.minyUrl]]),fe])])],32),n.data.minyUrl?(Object(a["p"])(),Object(a["d"])("div",ge,[Object(a["g"])("div",me,[Object(a["g"])("div",pe,[Oe,Object(a["g"])("div",he,[Object(a["g"])("p",null,"miny-url.herokuapp.com/"+Object(a["x"])(n.data.slug),1),ve,Object(a["g"])("a",{href:n.data.slug,target:"_blank",class:"btn btn-sm btn-success",type:"submit",id:"submit",role:"button"},"open",8,["href"])])]),Object(a["g"])("div",ye,[ke,Object(a["g"])("div",we,[Object(a["g"])("p",null,Object(a["x"])(n.data.url),1)])])]),Object(a["g"])("div",xe,[_e,Object(a["g"])("h3",null,Object(a["x"])(n.data.hit),1),ze,De,Object(a["g"])("h3",null,Object(a["x"])(n.lastVisitTime),1),Ue,Re,Object(a["g"])("h3",null,Object(a["x"])(c.createdOn),1)])])):Object(a["e"])("",!0),n.error.message&&n.slug?(Object(a["p"])(),Object(a["d"])("div",Te,[Object(a["g"])("p",Se,[Object(a["g"])("span",Me,Object(a["x"])(n.error.status),1),Object(a["f"])(" "+Object(a["x"])(n.error.message),1)])])):Object(a["e"])("",!0)])})),Ee=(s("ac1f"),s("1276"),s("c1df")),Ie=s.n(Ee),Le={name:"URLDetails",data:function(){return{data:{},lastVisitTime:"",slug:"",minyUrl:"",error:{status:null,message:null}}},created:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchDetails();case 2:setInterval((function(){t.lastVisit()}),1e3);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),mounted:function(){},computed:{createdOn:function(){return Ie()(this.data.createdOn).format("D MMM YYYY")}},methods:{fetchDetails:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.slug=this.$route.query.slug,e.next=4,Q.a.get("/url/".concat(this.slug));case 4:t=e.sent,this.data=t.data.data,this.error={message:null,status:null},e.next=16;break;case 9:e.prev=9,e.t0=e["catch"](0),this.data={},"Request failed with status code 404"===e.t0.message&&(e.t0.message="Link not found 😭😢😿😭"),e.t0.status=404,this.error.message=e.t0.message,this.error.status=e.t0.status;case 16:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),timeAgo:function(){Ie.a.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:function(e){return e+"s ago"},ss:"%ds ago",m:"1 minute ago",mm:"%d minutes ago",h:"1 hour ago",hh:"%d hours ago",d:"1 day ago",dd:"%d days ago"}});var e=Ie()().diff(this.data.lastVisit,"seconds"),t=Ie()("2018-01-01").startOf("day").seconds(e);return console.log(e),e>300?Ie()(this.data.lastVisit).fromNow(!0):e<60?t.format("s")+"s ago":t.format("m:ss")+"m ago"},parseSlug:function(){var e=Object(J["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.slug=this.minyUrl.split("/").pop(),this.$route.query.slug=this.slug,e.next=4,this.fetchDetails();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),lastVisit:function(){return this.data.lastVisit?(this.lastVisitTime=this.timeAgo(),this.timeAgo()):"Not Visited"}}};s("422e");Le.render=qe,Le.__scopeId="data-v-4d123770";var Ve=Le,Ae=Object(a["E"])("data-v-0b85e4bd");Object(a["s"])("data-v-0b85e4bd");var Ce={class:"col-lg-12",id:"errMessage"},Pe={class:"alert alert-dismissable alert-danger text-center p-5"},Fe=Object(a["g"])("h3",{style:{color:"#707070"}}," Opps!, I'm lost 😭😭😭😭😭",-1),Ne=Object(a["f"])(" Go to "),He=Object(a["f"])("HOME"),Ye=Object(a["f"])("STATS");Object(a["q"])();var $e=Ae((function(e,t,s,r,n,c){var o=Object(a["v"])("router-link");return Object(a["p"])(),Object(a["d"])("div",Ce,[Object(a["g"])("div",Pe,[Fe,Object(a["g"])("h3",null,[Ne,Object(a["g"])(o,{to:"/"},{default:Ae((function(){return[He]})),_:1}),Object(a["g"])(o,{to:"/stats"},{default:Ae((function(){return[Ye]})),_:1})])])])})),Je={name:"ErrorPage"};s("872d");Je.render=$e,Je.__scopeId="data-v-0b85e4bd";var Be=Je,Ge=[{path:"/",name:"Home",component:le},{path:"/stats",name:"URLDetails",component:Ve},{path:"/:catchAll(.*)",name:"ErrorPage",component:Be}],Ke=Object(U["a"])({history:Object(U["b"])(),routes:Ge}),Qe=Ke;s("4989"),s("ab8b");Object(a["c"])(D).use(Qe).mount("#app")},"58d5":function(e,t,s){"use strict";s("952b")},7113:function(e,t,s){},8118:function(e,t,s){"use strict";s("7113")},"872d":function(e,t,s){"use strict";s("b89f")},"952b":function(e,t,s){},b851:function(e,t,s){"use strict";s("20a1")},b89f:function(e,t,s){}});
//# sourceMappingURL=app.a5cc1be4.js.map