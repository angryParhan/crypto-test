(function(e){function t(t){for(var o,r,s=t[0],i=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"003648ed"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"8ff95a13"}[e]+".css",a=i.p+o,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"default",(function(){return M}));n("96cf");var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("section",{staticClass:"main-content"},[n("router-view")],1),n("UpBtn")],1)},s=[],i=n("5530"),l=(n("a15b"),n("fb6a"),n("b64b"),n("d4ec")),u=n("bee2"),d=n("ade3"),f=n("bc3a"),p=n.n(f),b="bdd0b06034120d270306394eaba4e8322f2ca68de04eb0b077c6d7b19c8e236f",h=function(){function e(){Object(l["a"])(this,e),Object(d["a"])(this,"resource","https://min-api.cryptocompare.com/data")}return Object(u["a"])(e,[{key:"getBlockChainList",value:function(){return p()("".concat(this.resource,"/blockchain/list"),{method:"get",params:{api_key:b}})}},{key:"getCurrensyRate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD";return p()("".concat(this.resource,"/blockchain/mining/calculator"),{method:"get",params:{api_key:b,fsyms:e,tsyms:t}})}},{key:"getChartData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"BTC",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"USD",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;return p()("".concat(this.resource,"/v2/histoday"),{method:"get",params:{api_key:b,fsym:e,tsym:t,limit:n}})}}]),e}(),g=new h,m={namespaced:!0,state:{blockChainList:{},error:!1,blockChainLimit:30,cryptoTableData:{},loading:!1,offset:0,loadingTableData:!1},mutations:{SET_BLOCKCHAIN_LIST:function(e,t){e.blockChainList=Object(i["a"])({},t)},SET_ERROR:function(e,t){e.error=t},SET_INITIAL:function(e){e.blockChainList={},e.cryptoTableData={},e.error=!1,e.blockChainLimit=30},SET_BLOCKCHAINL_LIMIT:function(e,t){e.blockChainLimit=t},SET_CRYPTOTABLE_DATA:function(e,t){e.cryptoTableData=Object(i["a"])(Object(i["a"])({},e.cryptoTableData),t)},SET_LOADING:function(e,t){e.loading=t}},actions:{innitBlockChainList:function(e){return Object(r["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,g.getBlockChainList();case 4:o=t.sent.data.Data,n("SET_BLOCKCHAIN_LIST",o),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.error(t.t0),n("SET_ERROR",!0);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getCryptoInfo:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var o,r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=e.state,r=e.commit,n.prev=1,o.loadingTableData=!0,!t.initial){n.next=8;break}o.cryptoTableData={},o.offset=0,n.next=12;break;case 8:if(console.log(Object.keys(o.blockChainList).length,Object.keys(o.cryptoTableData).length,o.offset),!(Object.keys(o.blockChainList).length<=Object.keys(o.cryptoTableData).length)){n.next=12;break}return console.log("end"),n.abrupt("return");case 12:return a=t.value?t.value:Object.keys(o.blockChainList).slice(o.offset,Object.keys(o.cryptoTableData).length+o.blockChainLimit).join(),console.log("params",a),n.next=16,g.getCurrensyRate(a);case 16:return c=n.sent.data.Data,n.next=19,r("SET_CRYPTOTABLE_DATA",c);case 19:o.offset=Object.keys(o.cryptoTableData).length,o.loadingTableData=!1,n.next=27;break;case 23:n.prev=23,n.t0=n["catch"](1),console.error(n.t0),r("SET_ERROR",!0);case 27:case"end":return n.stop()}}),n,null,[[1,23]])})))()}},getters:{getBlockCahinList:function(e){return e.blockChainList},getLoading:function(e){return e.loading},getCryptoTableData:function(e){return e.cryptoTableData},getLoadingTableData:function(e){return e.loadingTableData}}},k=(n("d81d"),n("2909")),C={namespaced:!0,state:{Xtitle:"",seriesTitle:"",seriesData:[],loading:!1,currentCoin:""},mutations:{SET_SERIAS_DATA:function(e,t){e.seriesData=Object(k["a"])(t)},SET_INITIAL:function(e){e.Xtitle="",e.seriesTitle="",e.seriesData=[],e.loading=!1,e.currentCoin=""},SET_CHART_LOADING:function(e,t){e.loading=t}},actions:{getChartData:function(e,t){return Object(r["a"])(regeneratorRuntime.mark((function n(){var o,r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=e.commit,r=e.state,r.currentCoin=t.value,o("SET_CHART_LOADING",!0),window.scroll({top:0,behavior:"smooth"}),r.Xtitle="".concat(t.displayValue," to USD exchange rate"),r.seriesTitle="".concat(t.displayValue," to USD"),n.next=8,g.getChartData(t.value);case 8:a=n.sent.data.Data.Data,c=a.map((function(e){return[1e3*new Date(e.time),e.close]})),o("SET_SERIAS_DATA",c),o("SET_CHART_LOADING",!1);case 12:case"end":return n.stop()}}),n)})))()}},getters:{getSeriesData:function(e){return e.seriesData},getChartTitle:function(e){return e.Xtitle},getSeriesTitle:function(e){return e.seriesTitle},getLoading:function(e){return e.loading},getCurrentCoin:function(e){return e.currentCoin}}},y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("h2",{staticClass:"header__title"},[e._v("Crypto compare")])])}],T={name:"Header"},S=T,w=(n("8f46"),n("2877")),O=Object(w["a"])(S,y,v,!1,null,null,null),D=O.exports,E=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{directives:[{name:"show",rawName:"v-show",value:e.allowBtn,expression:"allowBtn"}],staticClass:"up-btn",on:{click:e.scrollTop}},[o("img",{attrs:{src:n("ba8c"),alt:"up"}})])},_=[],A={name:"upButton",data:function(){return{intervalInstance:void 0,allowBtn:!1}},computed:{showBtn:function(){return this.allowBtn||this.value}},mounted:function(){var e=this;this.allowBtn=3*window.innerHeight<window.scrollY,this.intervalInstance=setInterval((function(){e.allowBtn=3*window.innerHeight<window.scrollY}),250)},destroyed:function(){clearInterval(this.intervalInstance)},methods:{scrollTop:function(){window.scroll({top:0,behavior:"smooth"})}}},L=A,x=(n("b2f6"),Object(w["a"])(L,E,_,!1,null,null,null)),j=x.exports,B=n("2f62"),I={components:{Header:D,UpBtn:j},computed:Object(i["a"])({},Object(B["c"])({socketStatus:"sockets/getSocketStatus",socket:"sockets/getSocketInstance"})),watch:{socketStatus:function(e){e?console.log("connected..."):e||console.log("disconnected")}},beforeCreate:function(){this.$store.state.app||this.$store.registerModule("app",m),this.$store.state.chartStore||this.$store.registerModule("chartStore",C),console.log(this.$store.state)},beforeDestroy:function(){this.socketStatus&&(console.log("disconnected!"),this.socket.close()),this.$store.state.app&&this.$store.unregisterModule("app"),this.$store.state.chartStore&&this.$store.unregisterModule("chartStore"),this.$store.state.sockets&&this.$store.unregisterModule("sockets")}},R=I,F=(n("5c0b"),Object(w["a"])(R,c,s,!1,null,null,null)),H=F.exports,N=(n("d3b7"),n("8c4f"));a["a"].use(N["a"]);var $=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"bb51"))}}],P=new N["a"]({routes:$}),G=P;a["a"].use(B["a"]);var M=new B["a"].Store(Object(i["a"])({},o)),U=n("37d8"),J=n.n(U),K=n("4452"),X=n.n(K),Y=n("ea7f"),q=n.n(Y),z=function(){function e(){Object(l["a"])(this,e)}return Object(u["a"])(e,[{key:"innitHightCharts",value:function(){J()(q.a),a["a"].use(X.a)}},{key:"addTheme",value:function(){q.a.theme={colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},style:{fontFamily:"'Unica One', sans-serif"},plotBorderColor:"#606063"},title:{style:{color:"#E0E0E3",textTransform:"uppercase",fontSize:"20px"}},subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase"}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:"#A0A0A3"}}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},plotOptions:{series:{dataLabels:{color:"#F0F0F3",style:{fontSize:"13px"}},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"},title:{style:{color:"#C0C0C0"}}},credits:{style:{color:"#666"}},labels:{style:{color:"#707073"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#CCC"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white"}},select:{fill:"#000003",stroke:"#000000",style:{color:"white"}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"}}}},{key:"applyTheme",value:function(){q.a.setOptions(q.a.theme)}}]),e}(),V=new z,W=(n("c740"),n("a434"),n("ac1f"),n("1276"),"bdd0b06034120d270306394eaba4e8322f2ca68de04eb0b077c6d7b19c8e236f"),Q={namespaced:!0,state:{sockets:null,connected:!1,tasks:[]},mutations:{},actions:{socketsConnect:function(e){var t=e.state;t.sockets=new WebSocket("wss://streamer.cryptocompare.com/v2?api_key=".concat(W,"&format=streamer")),t.sockets.onopen=function(){t.connected=!0},t.sockets.onclose=function(){t.connected=!1}},pushTask:function(e,t){var n=e.state,o={action:"SubAdd",subs:["5~CCCAGG~".concat(t.coin,"~USD")]};n.sockets.send(JSON.stringify(o)),console.log("push");var r={coin:t.coin};n.sockets.onmessage=function(e){var n=e.data.split("~");"500"===n[0]&&t.errorCollback("500"),t.updateCallback(n)},n.tasks.push(r)},addTask:function(e,t){var n=e.state,o=e.dispatch,r=function e(){return setTimeout((function(){1===n.sockets.readyState?(console.log("connection succedsee"),o("pushTask",t)):(console.log("wait for connection..."),e())}),200)};switch(console.log("status",n.sockets.readyState,t),n.sockets.readyState){case 0:r();break;case 1:o("pushTask",t)}},leaveTask:function(e,t){var n=e.state,o={action:"SubRemove",subs:["5~CCCAGG~".concat(t.coin,"~USD")]};n.sockets.send(JSON.stringify(o));var r=n.tasks.findIndex((function(e){return e.coin===t.coin}));-1!==r&&n.tasks.splice(r,1)}},getters:{getSocketInstance:function(e){return e.sockets},getSocketStatus:function(e){return e.connected},getTask:function(e){return e.tasks}}};n("fa6d");function Z(){return ee.apply(this,arguments)}function ee(){return ee=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(M.state.storage){e.next=3;break}return e.next=3,M.registerModule("sockets",Q);case 3:return e.next=5,M.dispatch("sockets/socketsConnect");case 5:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}V.innitHightCharts(),V.addTheme(),V.applyTheme(),a["a"].config.productionTip=!1,Z(),new a["a"]({router:G,store:M,render:function(e){return e(H)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"8d91":function(e,t,n){},"8f46":function(e,t,n){"use strict";n("e6cd")},"9c0c":function(e,t,n){},b2f6:function(e,t,n){"use strict";n("8d91")},ba8c:function(e,t,n){e.exports=n.p+"img/up-arrow.34026552.svg"},e6cd:function(e,t,n){}});
//# sourceMappingURL=app.22708ee0.js.map