(function(t){function e(e){for(var r,a,c=e[0],i=e[1],l=e[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={index:0},o={index:0},u=[];function c(t){return i.p+"static/js/"+({about:"about",plot:"plot",role:"role"}[t]||t)+"."+{about:"8f7ed3b0",plot:"3004e0b1",role:"823966dd"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={plot:1,role:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="static/css/"+({about:"about",plot:"plot",role:"role"}[t]||t)+"."+{about:"31d6cfe0",plot:"d20a54c2",role:"35670a2a"}[t]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],s=l.getAttribute("data-href");if(s===r||s===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[t],p.parentNode.removeChild(p),n(u)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(t);var f=new Error;l=function(e){s.onerror=s.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/conan/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2288:function(t,e,n){"use strict";var r=n("497e"),a=n.n(r);a.a},2571:function(t,e,n){"use strict";var r=n("d72c"),a=n.n(r);a.a},"2c7e":function(t,e,n){},"497e":function(t,e,n){},"54cd":function(t,e,n){"use strict";var r=n("2c7e"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Menu"),n("transition",{attrs:{name:"slide"}},[n("keep-alive",[n("router-view")],1)],1)],1)},o=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menu"}},[n("router-link",{attrs:{to:"/"}},[t._v("主页")]),n("el-divider",{attrs:{direction:"vertical"}}),n("router-link",{attrs:{to:"/plot"}},[t._v("剧集")]),n("el-divider",{attrs:{direction:"vertical"}}),n("router-link",{attrs:{to:"/role"}},[t._v("角色")])],1)},c=[],i=(n("2288"),n("2877")),l={},s=Object(i["a"])(l,u,c,!1,null,"599d2f60",null),f=s.exports,p={components:{Menu:f}},d=p,h=(n("7faf"),Object(i["a"])(d,a,o,!1,null,null,null)),v=h.exports,m=n("8c4f"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("b640")}}),r("Conan"),r("DataSource")],1)},g=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"conan",attrs:{id:"conan"}},[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:16}},[n("h3",[t._v("我...我...我是...滚筒洗衣机")]),t._l(t.conan,(function(e,r){return n("p",{key:r},[t._v("\n        "+t._s(e.para)+"\n      ")])}))],2)],1)],1)},y=[],w=[{para:"我是高中生侦探工藤新一，当我跟青梅竹马的同学毛利兰一起到游乐园游玩时，却目击了黑暗组织的交易现场。当时我只顾着偷看交易，却忽略了从背后而来的另一个同伙。我被那个人强灌了毒药，等我醒来时……"},{para:"我的身体已经缩小了！要是让他们知道工藤新一还活着，不但我的性命难保，还会危害到我周遭的亲人。在阿笠博士的建议下，我隐瞒了身份。当小兰问及我的名字时，情急之下，我化名为江户川柯南。为了搜集那些家伙的情报，于是便住进了父亲以侦探为业的小兰家中。"},{para:"但是这位叔叔却是个糊涂大侦探，看不下去的我于是便装成叔叔，利用我天生的推理能力解决了许多的悬疑案件。而叔叔也拜我所赐成了名号越来越响的大侦探。而我现在却变回了一个小学生，还被迫跟同班同学的步美，元太与光彦组成少年侦探团。"},{para:"接着就向大家介绍博士为我发明的道具。首先是手表型麻醉枪。透过瞄准器对准目标按下按钮就能发射麻醉针，能够在瞬间让人昏睡；接着是领结变声器。只要调整后放的转盘，不管是大人或是小孩，任何人的声音都可以模仿；接下来的秘密道具是脚力倍增鞋，利用电与磁力刺激脚的穴道，可使肌肉的力量发挥极限；若要追缉歹徒，则可使用涡轮引擎滑板，不过因为动力来自太阳能，只有在出太阳时才能使用，这是它唯一的缺点。对了，我差点忘记了。我们少年侦探团的胸章内藏了超小型无线电对讲机，同时还兼备发信机功能，简直无懈可击。除此之外虽然还有很多道具，不过最厉害的武器应该算是我这里（脑袋）。身体虽变小，但头脑一样棒，无所不知的名侦探，真相永远只有一个！"}],x=w,j={name:"conan",data:function(){return{conan:x}}},O=j,E=(n("2571"),Object(i["a"])(O,_,y,!1,null,"ece88784",null)),k=E.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"data-source"}},[n("h3",[t._v("数据来源：")]),n("p",[n("a",{attrs:{href:"http://bbs.aptx.cn/thread-296158-1-1.html"}},[t._v("《名侦探柯南》主线剧情梳理 - 事务所主论坛 - 名侦探柯南事务所")])]),n("p",[n("a",{attrs:{href:"http://bbs.aptx.cn/thread-251323-1-1.html"}},[t._v("《名侦探柯南》动画主线及其他重要剧情汇总 - 事务所主论坛 - 名侦探柯南事务所")])]),n("p",[n("a",{attrs:{href:"http://bbs.aptx.cn/thread-238395-1-1.html"}},[t._v(" 拆分版与原版集数对照表 - 事务所主论坛 - 名侦探柯南事务所")])]),n("p",[n("a",{attrs:{href:"http://bbs.aptx.cn/forum.php?mod=viewthread&tid=237349&page=1#pid8366297"}},[t._v("〖新手指南〗|【主论坛版规】|〖精华导读〗|【TV播放列表&漫画总目录】 - 事务所主论坛 - 名侦探柯南事务所")])]),n("p",[n("a",{attrs:{href:"https://movie.douban.com/review/8690098/"}},[t._v("《名侦探柯南》TV版主线剧情（加入黑暗主线剧集整理，更新2019.1 新兰官宣")])])])}],P={},T=P,$=Object(i["a"])(T,S,C,!1,null,"1e79225a",null),A=$.exports,M={name:"home",components:{Conan:k,DataSource:A}},L=M,N=(n("54cd"),Object(i["a"])(L,b,g,!1,null,"bd6db440",null)),D=N.exports;r["default"].use(m["a"]);var B=new m["a"]({mode:"hash",base:"/conan/",routes:[{path:"/",name:"home",component:D},{path:"/plot",name:"plot",component:function(){return n.e("plot").then(n.bind(null,"03e5"))}},{path:"/role",name:"role",component:function(){return n.e("role").then(n.bind(null,"c338"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),V=n("2f62");r["default"].use(V["a"]);var q=new V["a"].Store({state:{},mutations:{},actions:{}}),J=n("5c96"),F=n.n(J);n("0fae");r["default"].use(F.a),r["default"].config.productionTip=!1,new r["default"]({router:B,store:q,render:function(t){return t(v)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var r=n("8fba"),a=n.n(r);a.a},"8fba":function(t,e,n){},b640:function(t,e,n){t.exports=n.p+"static/img/logo.085c3238.jpg"},d72c:function(t,e,n){}});
//# sourceMappingURL=index.67319fe2.js.map