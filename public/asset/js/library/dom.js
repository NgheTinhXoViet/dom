!function t(e,s,i){function n(o,h){if(!s[o]){if(!e[o]){var c="function"==typeof require&&require;if(!h&&c)return c(o,!0);if(r)return r(o,!0);throw new Error("Cannot find module '"+o+"'")}var u=s[o]={exports:{}};e[o][0].call(u.exports,function(t){var s=e[o][1][t];return n(s?s:t)},u,u.exports,t,e,s,i)}return s[o].exports}for(var r="function"==typeof require&&require,o=0;o<i.length;o++)n(i[o]);return n}({1:[function(t,e,s){e.exports={data:{},start:function(){this.hasCheck=!0;var t=document.cookie,e=[];if(!t)return!1;t=t.split("; ");for(var s=0,i=t.length;i>s;s++)e=t[s].split("="),this.data[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return t=null,!1},set:function(t){for(var e in t)document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t[e])+";"+this.config},has:function(t){return this.hasCheck||this.start(),this.data[decodeURIComponent(t)]},get:function(t){return this.has(t)},init:function(t){var e=new Date,s=t.day||1;e.setTime(e.getTime()+24*s*36e5);var i=["expires="+e.toUTCString(),"path="+(t.path||"/")];return t.host&&i.push("domain="+t.host),t.secure&&i.push("secure="+t.secure),this.config=i.join(";"),this},remove:function(t){if(t)if(this.config||this.init({day:-1,path:"/"}),"string"==typeof t)document.cookie=decodeURIComponent(t)+"=;"+this.config;else if("object"==typeof t&&t.length)for(var e=0,s=t.length;s>e;e++)document.cookie=decodeURIComponent(t[e])+"=;"+this.config}}},{}],2:[function(t,e,s){function i(t){return t.replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function n(){return this.requestHttp="GET",this.dataType="text",this.async=!0,this.x=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),this.setRequestHttp=function(t){return this.requestHttp=t,this},this.getRequestHttp=function(){return this.requestHttp},this.setUrl=function(t){return this.a||(this.a=document.createElement("a")),this.a.href=t,this},this.getUrl=function(){return this.a.href},this.setDataType=function(t){return this.dataType=t,this},this.getDataType=function(){return this.dataType},this.setData=function(t){if(t){switch(typeof t){case"object":this.data||(this.data=[]);for(var e in t)this.data.push(e+"="+t[e]);this.data=this.data.join("&");break;case"string":this.data=t}"GET"==this.getRequestHttp()&&(this.a.search?this.a.search+="&"+this.data:this.a.search=this.data,this.setUrl(this.a),this.data=null)}return this},this.setDataUpload=function(t){return this.isUpload=!0,this.data=t,this},this.getData=function(){return this.data?this.data:null},this.setAsync=function(t){return this.async=t,this},this.getAsync=function(){return this.async},this.response=function(t){this.getDataType();this.x.onreadystatechange=function(){return 4===this.readyState&&200===this.status?t(this.responseText):t()},this.isUpload&&this.x.removeEventListener("progress")},this.request=function(t){var e=this.getRequestHttp(),s=this.x;s.open(e,this.getUrl(),this.getAsync()),"function"==typeof t&&(this.isUpload?s.upload.addEventListener("progress",function(e){return t(e.loaded/e.total*100||0)}):this.response(t)),s.setRequestHeader("X-Requested-With","XMLHttpRequest"),"POST"===e&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.send(this.getData())},this}function r(t){return this.each=function(t){this.selector.length&&Array.prototype.forEach.call(this.selector,function(e){t(h(e))})},this.on=function(t,e){return this.selector.addEventListener(t,e),this},this.emit=function(t){return this.selector[t](),this},this.focus=function(){return this.emit("focus")},this.click=function(){return this.emit("click")},this.submit=function(){return this.emit("submit")},this.rightClick=function(t){return this.on("contextmenu",t)},this.html=function(t){switch(typeof t){case"undefined":return i(this.selector.innerHTML);case"object":return this.selector.innerHTML="",this.append(t),this;default:return this.selector.innerHTML=t,this}},this.append=function(t){return"string"==typeof t?this.selector.insertAdjacentHTML("beforeend",t):this.selector.appendChild(t.selector||t),this},this.prepend=function(t){return"string"==typeof t?this.selector.insertAdjacentHTML("afterbegin",t):this.selector.insertBefore(t.selector||t,this.selector.childNodes[0]),this},this.replace=function(t,e){return this.selector.replaceChild(e.selector||e,t.selector||t),!1},this.insertBefore=function(t){return(t.selector||t).parentNode.insertBefore(this.selector,t.selector||t),this},this.insertAfter=function(t){return(t.selector||t).parentNode.insertBefore(this.selector,(t.selector||t).nextSibling),this},this.data=function(t,e){switch(typeof t){case"string":return"undefined"==typeof e?this.selector.dataset[t]:(this.selector.dataset[t]=e,this);case"object":for(var s in t)this.selector.dataset[s]=t[s];return this;default:return this.selector.dataset}},this.val=function(t){return"undefined"==typeof t?i(this.selector.value):(this.selector.value=t,this)},this.text=function(t){return"undefined"==typeof t?i(this.selector.textContent):(this.selector.textContent=t,this)},this.css=function(t,e){if("undefined"!=typeof e)this.selector.style[t]=e;else{if("undefined"==typeof t)return this.selector.style[t];for(var s in t)this.selector.style[s]=t[s]}return this},this.attr=function(t,e){if("undefined"!=typeof e)this.selector.setAttribute(t,e);else{if("undefined"!=typeof t)return this.selector.getAttribute(t);for(var s in t)this.selector.setAttribute(s,t[s])}return this},this.removeAttr=function(t){return this.selector.removeAttribute(t),this},this.show=function(){return this.css("display","block"),this},this.hide=function(){return this.css("display","none"),this},this.toggle=function(){return this.css("display","none"!==this.css("display")?"none":"block"),this},this.notShow=function(){return"block"!==this.css("display")},this.notHide=function(){return"hide"!==this.css("display")},this.hasClass=function(t){return this.selector.classList.constant(t)},this.addClass=function(t){return this.selector.classList.add(t),this},this.removeClass=function(t){return this.selector.classList.remove(t),this},this.changeClass=function(t,e){return this.selector.classList.remove(t),this.selector.classList.add(e),this},this.disable=function(t){return this.selector.disabled="undefined"==typeof t?!0:t,this},this.check=function(t){return"undefined"==typeof t?this.selector.checked:(this.selector.checked=t,this)},this.select=function(t){return"undefined"==typeof t?this.selector.selected:(this.selector.selected=t,this)},this.empty=function(){return this.selector.value="",this},this.is=function(t){return this.selector===t},this.has=function(e){return e.closest(t)===this.selector},this.parent=function(t){switch(typeof t){case"string":return(node=this.selector.closest(t))?new r(node):!1;default:return new r(this.selector.parentElement)}},this.children=function(t){if(!this.selector.ref[t])switch(typeof t){case"number":this.selector.ref[t]=this.selector.childNodes[t];break;case"string":this.selector.ref[t]=this.selector.querySelector(t)}var e=this.selector.ref[t];return e?new r(e):!1},this.all=function(t,e){switch(typeof t){case"string":return h(this.selector.querySelectorAll(t)).each(e);case"object":return t.length?h(t):h(t).each(e)}},this.find=function(t){var e=this.selector.querySelector(t);return e?new r(e):!1},this.lastChild=function(){return new r(this.selector.lastChild)},this.firstChild=function(){return new r(this.selector.firstChild)},this.all=function(t,e){return h(this.selector.querySelectorAll(t)).each(e),this},this.next=function(){return new r(this.selector.nextSibling)},this.prev=function(){return new r(this.selector.previousSibling)},this.offsetLeft=function(){return this.selector.offsetLeft},this.offsetWidth=function(){return this.selector.offsetWidth},this.innerWidth=function(){return this.selector.innerWidth},this.clientWidth=function(t){return"undefined"==typeof t?this.selector.clientWidth:(this.selector.clientWidth=t,this)},this.clientHeight=function(t){return"undefined"==typeof t?this.selector.clientHeight:(this.selector.clientHeight=t,this)},this.width=function(t){switch(typeof t){case"number":return this.css("width",t+"px");case"string":return this.css("width",t);default:return this.css("width")}},this.height=function(t){switch(typeof t){case"number":return this.css("height",t+"px");case"string":return this.css("height",t);default:return this.css("height")}},this.left=function(t){return"undefined"==typeof t?this.css("left"):this.css("left",t)},this.right=function(t){return"undefined"==typeof t?this.css("right"):this.css("right",t)},this.scrollTop=function(t){return"undefined"==typeof t?this.selector.scrollTop:(this.selector.scrollTop=t,this)},this.scrollLeft=function(t){return"undefined"==typeof t?this.selector.scrollLeft:(this.selector.scrollLeft=t,this)},this.scrollHeight=function(t){return"undefined"==typeof t?this.selector.scrollHeight:(this.selector.scrollHeight=t,this)},this.remove=function(t){return t?(this.children(t).remove(),delete this.selector.ref[t]):this.selector.remove(),this},this.pause=function(){return this.selector.pause(),this},this.play=function(){return this.selector.play(),this},this.played=function(){return!this.selector.paused},this.paused=function(){return this.selector.paused},this.vol=function(t){return"undefined"==typeof t?this.selector.volume:(this.selector.volume=t,this)},this.mute=function(t){return"undefined"==typeof t?this.selector.muted:(this.selector.muted=t,this)},this.currentTime=function(t){return"undefined"==typeof t?this.selector.currentTime:(this.selector.currentTime=t,this)},this.duration=function(){return this.selector.duration},this.set=function(t,e){return this.selector.data[t]=e,this},this.unset=function(t){for(var e=0,s=t.length;s>e;e++)delete this.selector.data[t[e]];return this},this.reset=function(){for(var t in this.selector.data)"function"!=typeof this.selector.data[t]&&delete this.selector.data[t];return this},this.incrby=function(t,e){var s=this.selector.data[t]||0;return this.selector.data[t]=s+e,this},this.get=function(t){return this.selector.data[t]},this.call=function(t){if(arguments.length>1){var t=arguments[0];delete arguments[0];var e=[];for(var s in arguments)e.push(arguments[s]);var i=this.selector.data[t].apply([],e)}else var i=this.selector.data[t]();return"undefined"==typeof i?this:i},this.constructor=function(t){switch(typeof t){case"object":this.selector=t.selector||t;break;case"string":this.selector=document.querySelector(t)}return this.selector&&(this.selector.ref||(this.selector.ref={}),this.selector.data||(this.selector.data={})),this},this.constructor(t)}function o(t){return this.node=function(t,e){var s=document.createElement(t);if(list=e[0])if("object"==typeof list){if(list.node&&(this.ref[list.node]=s,delete list.node),list.edit&&(s.setAttribute("contenteditable",!0),delete list.edit),list.data){for(var i in list.data)s.dataset[i]=list.data[i];delete list.data}for(var n in list)s[n]=list[n]}else s.innerHTML=list;if(e[1])for(var i=1,r=e.length;r>i;i++)switch(typeof e[i]){case"function":e[i](h(s));break;case"object":s.appendChild(e[i].selector||e[i]);break;default:s.insertAdjacentHTML("beforeend",e[i])}return s},this.form=function(){return arguments[0].action||(arguments[0].action="#"),arguments[0].method||(arguments[0].method="POST"),arguments[0].file&&(arguments[0].enctype="multipart/form-data"),this.node("form",arguments)},this.button=function(){if("string"==typeof arguments[0]){var t={type:"button",value:arguments[0]};return arguments[1]&&(t.name=arguments[1]),this.node("input",arguments)}return arguments[0].type="button",this.node("button",arguments)},this.submit=function(){if("string"==typeof arguments[0]){var t={type:"submit",value:arguments[0]};return arguments[1]&&(t.name=arguments[1]),this.node("input",arguments)}return arguments[0].type="submit",this.node("button",arguments)},this.input=function(){return arguments[0].type||(arguments[0].type="text"),this.node("input",arguments)},this.text=function(){return arguments[0]||(arguments[0]={}),arguments[0].name||(arguments[0].name="content"),arguments[0].node||(arguments[0].node="content"),this.node("textarea",arguments)},this.file=function(t,e){var s={type:"file",name:"upload"};return e&&(s.multiple=1),t&&(s.onchange=t),this.node("input",[s])},this.hidden=function(t,e,s){var i={type:"hidden"};return i.name=t,i.value=e,s&&(i.node=s),this.node("input",[i])},this.checkbox=function(t,e){return arguments[0]||(arguments[0]={}),arguments[0].type="checkbox",this.node("input",arguments)},this.radio=function(t,e){return arguments[0].type="radio",this.node("input",arguments)},this.pass=function(t,e){var s={type:e?"text":"password",name:"pass",className:"form-control",maxLength:120};return s.placeholder=t,this.node("input",[s])},this.email=function(t){return this.input({className:"form-control",name:"email",placeholder:t,maxLength:120})},this.select=function(t,e){e||(e=t);var s=[];for(var i in e)s.push('<option value="'+i+'">'+e[i]+"</option>");return this.node("select",[{name:t},s.join("")])},this.label=function(t,e){return"string"==typeof t?e?this.node("label",[{"for":t},e]):this.node("label",[e]):this.node("label",arguments)},this.error=function(){if(!arguments[0])return this.node("div",[{className:"error",node:"error"}],arguments[1]||"");switch(typeof arguments[0]){case"undefined":return this.node("div",[{className:"error"}]);case"string":return this.node("div",[{className:"error",node:arguments[0]}],arguments[1]||"");default:return arguments[0].className="error",this.node("div",arguments)}},this.link=function(){return this.node("a",arguments)},this.header=function(){return this.node("header",arguments)},this.section=function(){return this.node("section",arguments)},this.footer=function(){return this.node("footer",arguments)},this.strong=function(){return this.node("strong",arguments)},this.span=function(){return this.node("span",arguments)},this.i=function(){return this.node("i",arguments)},this.div=function(){return this.node("div",arguments)},this.image=function(t){return"string"==typeof t?this.node("img",[{src:t}]):this.node("img",[t])},this.glyphicon=function(t){return"string"==typeof t?'<span class="glyphicon '+t+'" aria-hidden="true"></span>':(t.className="glyphicon "+t.className,t.ariaHidden=!0,this.node("span",[t]))},this.li=function(){return this.node("li",arguments)},this.ul=function(){return this.node("ul",arguments)},this.table=function(){return this.node("table",arguments)},this.tr=function(){return this.node("tr",arguments)},this.td=function(){return this.node("td",arguments)},this.script=function(t){return this.node("script",[{type:"text/javascript",async:!0},t])},this.createClass=function(t){this.ref={};for(var e in t)"render"!==e&&(this[e]=t[e]);return this.dom=t.render.bind(this)(),this.dom.ref=this.ref,this.dom.data=t.data||{},t=!1,delete this.ref,delete this.data,this},this.createClass(t)}function h(t,e){return new r(t,e)}h.post=function(t,e,s,i){var r=new n;return r.setRequestHttp("POST"),r.setUrl(t),"boolean"==typeof i?r.setAsync(i):r.setAsync(!0),"boolean"==typeof s&&r.setAsync(s),"object"==typeof e?r.setData(e):s=e,r.request(s)},h.get=function(t,e,s,i){var r=new n;return r.setRequestHttp("GET"),r.setUrl(t),"boolean"==typeof i?r.setAsync(i):r.setAsync(!0),"boolean"==typeof s&&r.setAsync(s),"object"==typeof e?r.setData(e):s=e,r.request(s)},h.put=function(t,e,s,i){var r=new n;return r.setRequestHttp("PUT"),r.setUrl(t),"boolean"==typeof i?r.setAsync(i):r.setAsync(!0),"boolean"==typeof s&&r.setAsync(s),"object"==typeof e?r.setData(e):s=e,r.request(s)},h["delete"]=function(t,e,s,i){var r=new n;return r.setRequestHttp("DELETE"),r.setUrl(t),"boolean"==typeof i?r.setAsync(i):r.setAsync(!0),"boolean"==typeof s&&r.setAsync(s),"object"==typeof e?r.setData(e):s=e,r.request(s)},h.load=function(t,e,s){var i=t.split(" ");s||(s=e,e=null),h.get(i[0],e,function(e){if(e){t=t.replace(i[0]+" ","");var n=new DOMParser,r=n.parseFromString(e,"text/html");return s(i[1]?r.querySelector(t):r)}return s()})},h.upload=function(t,e,s){var i=new n;i.setUrl(t),i.setRequestHttp("POST"),i.setDataUpload(e),i.setDataType(!1),i.request(s)},h.all=function(t,e){switch(typeof t){case"string":return h(document.querySelectorAll(t)).each(e);case"object":return t.length?h(t):h(t).each(e)}},h.create=function(t){var e=new o(t);return new r(e.dom)},h.module=function(t){return new DomApp(t)},e.exports=h},{}],3:[function(t,e,s){e.exports={routes:[],getCurrentUrl:function(){return window.location.pathname+window.location.search},router:function(t,e){return this.routes.push({re:t,handler:e}),this},getParam:function(t){for(var e=0;e<this.routes.length;e++){var s=t.match(this.routes[e].re);if(s)return s.shift(),this.routes[e].handler.apply({},s),this}return this},render:function(t){return this.getParam(t),history.pushState(null,null,t),this},handle:function(){return this.render(this.getCurrentUrl())}}},{}],4:[function(t,e,s){window.$=t("dom"),window.cookie=t("cookie"),window.app=t("router")},{cookie:1,dom:2,router:3}]},{},[4]);