(function(t){function e(e){for(var r,o,i=e[0],u=e[1],s=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/neumorphism-music-player/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f2":function(t,e,n){"use strict";n("e2b5")},"1b49":function(t,e,n){},"2ce7":function(t,e,n){"use strict";n("a0ef")},"54eb":function(t,e,n){"use strict";n("f404")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(t,e,n,a,c,o){var i=Object(r["k"])("TheMusicPlayer");return Object(r["f"])(),Object(r["c"])(i)}var c={class:"music-player"};function o(t,e,n,a,o,i){var u=Object(r["k"])("TheMusic");return Object(r["f"])(),Object(r["c"])("div",c,[Object(r["d"])(u)])}var i={class:"music"};function u(t,e,n,a,c,o){var u=Object(r["k"])("TheCover"),s=Object(r["k"])("ThePlayer");return Object(r["f"])(),Object(r["c"])("div",null,[Object(r["d"])("div",i,[Object(r["d"])(u),Object(r["d"])(s)])])}var s=Object(r["n"])("data-v-3a19114a");Object(r["h"])("data-v-3a19114a");var l={class:"cover"},d=Object(r["d"])("div",{class:"image-container"},[Object(r["d"])("img",{src:"https://picsum.photos/800/800",alt:""})],-1);Object(r["g"])();var f=s((function(t,e,n,a,c,o){return Object(r["f"])(),Object(r["c"])("div",l,[d])})),b={};n("b3ff");b.render=f,b.__scopeId="data-v-3a19114a";var v=b,p=(n("b0c0"),Object(r["n"])("data-v-030e8418"));Object(r["h"])("data-v-030e8418");var O={class:"player"},j={class:"information has-text-centered mt-4"},g={class:"title"},m={class:"subtitle"},y={class:"progress-info mt-3"},h={class:"controls mt-5"},P=Object(r["d"])("i",{class:"las la-step-backward"},null,-1),w={key:0,class:"las la-pause"},M={key:1,class:"las la-play"},x=Object(r["d"])("i",{class:"las la-step-forward"},null,-1);Object(r["g"])();var B=p((function(t,e,n,a,c,o){return Object(r["f"])(),Object(r["c"])("div",O,[Object(r["d"])("div",j,[Object(r["d"])("h1",g,Object(r["l"])(a.currentSong.name),1),Object(r["d"])("p",m,Object(r["l"])(a.currentSong.artist),1)]),Object(r["d"])("div",y,[Object(r["d"])("p",null,Object(r["l"])(a.currentPlayingTime),1),Object(r["d"])("p",null,Object(r["l"])(a.songDuration),1)]),Object(r["d"])("div",{class:"progress-bar mt-1",ref:"progressBarDOM",onMousedown:e[2]||(e[2]=function(t){return a.mouseDownProgressBar(t)})},[Object(r["d"])("div",{class:"active-bar",style:{width:"".concat(a.activeProgressBarWidth,"%")}},[Object(r["d"])("button",{onMousedown:e[1]||(e[1]=Object(r["m"])((function(t){return a.mouseDownProgressBarButton()}),["self"])),class:"current button"},null,32)],4)],544),Object(r["d"])("div",h,[Object(r["d"])("button",{class:"button",onClick:e[3]||(e[3]=function(t){return a.prev()})},[P]),Object(r["d"])("button",{class:"button",onClick:e[4]||(e[4]=function(t){return a.playOrPause()})},[a.currentSong.isPlaying?(Object(r["f"])(),Object(r["c"])("i",w)):(Object(r["f"])(),Object(r["c"])("i",M))]),Object(r["d"])("button",{class:"button",onClick:e[5]||(e[5]=function(t){return a.next()})},[x])])])})),T=(n("99af"),n("7c43")),k=n.n(T),_=n("71f4"),D=n.n(_),S=n("1e5c"),C=[{name:"Một Dạo Yêu Đương",artist:"Tàu Bay",src:[k.a]},{name:"Tàn Phai Giấc Mơ",artist:"Hoàng Bách",src:[D.a]}],E={setup:function(){var t=Object(r["j"])(0),e=Object(r["j"])(null),n=Object(r["i"])({}),a=0,c=Object(r["a"])((function(){if(!n.duration)return"-:--";var t=n.time,e=t%60;return"".concat(Math.floor(t/60),":").concat(e<10?"0"+e:e)})),o=Object(r["a"])((function(){if(!n.duration)return"-:--";var t=n.duration,e=t%60;return"".concat(Math.floor(t/60),":").concat(e<10?"0"+e:e)})),i=!1,u=function(t){if(n.isPlayable){var r=t.x,a=e.value.getBoundingClientRect(),c=a.x,o=a.width,u=100*(r-c)/o;return i=!0,f(u)}},s=function(){i=!0},l=function(t){if(i){var n=t.x,r=e.value.getBoundingClientRect(),a=r.x,c=r.width;if(n<a)return m(),O(0),g(),f(0);var o=100*(n-a)/c;return o>=100?(m(),f(100)):(i=!0,f(o))}},d=function(t){if(i){i=!1;var r=t.x,a=e.value.getBoundingClientRect(),c=a.x,o=a.width;if(r<c)return m(),O(0),g(),f(0);var u=100*(r-c)/o;if(u>=100)return m(),O(n.duration),f(100);var s=Math.round(u*n.duration/100);return m(),O(s),g(),f(u)}},f=function(e){if(!(e>100||e<0))return t.value=e},b=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n.isPlayable=!1,n.duration=0;var r=C[t],a=r.name,c=r.artist,o=r.src;n.name=a,n.artist=c,n.song=new S["Howl"]({src:o}),n.time=0,"loaded"===n.song.state()&&(n.isPlayable=!0,n.duration=Math.ceil(n.song.duration()),e&&g()),n.song.on("load",(function(){n.isPlayable=!0,n.duration=Math.ceil(n.song.duration()),e&&g()})),n.song.on("end",(function(){n.isPlaying=!1,f(100)}))},v=function(){var t=C.length;a+1>t-1||(a++,m(),f(0),b(a,!0))},p=function(){a-1<0||(a--,m(),b(a,!0))},O=function(t){n.song.seek(t),n.time=t},j=function t(){if(n.isPlaying&&n.isPlayable){n.time++;var e=n.time/n.duration*100;f(e)}setTimeout(t,1e3)};j();var g=function(){!n.isPlaying&&n.isPlayable&&(n.time>=n.duration&&(f(0),m(),O(0)),n.isPlaying=!0,n.song.play())},m=function(){n.isPlaying&&(n.isPlaying=!1,n.song.pause())},y=function(){return n.isPlaying?m():g()};return window.addEventListener("mousemove",l),window.addEventListener("mouseleave",d),window.addEventListener("mouseup",d),Object(r["e"])((function(){b(a)})),{activeProgressBarWidth:t,mouseDownProgressBar:u,mouseDownProgressBarButton:s,progressBarDOM:e,songDuration:o,currentPlayingTime:c,playOrPause:y,currentSong:n,next:v,prev:p}}};n("d9c7");E.render=B,E.__scopeId="data-v-030e8418";var H=E,L={components:{TheCover:v,ThePlayer:H},setup:function(){}};n("54eb");L.render=u;var R=L,G={components:{TheMusic:R}};n("2ce7");G.render=o;var I=G,J={name:"App",components:{TheMusicPlayer:I}};n("01f2");J.render=a;var W=J;Object(r["b"])(W).mount("#app")},"71f4":function(t,e,n){t.exports=n.p+"media/Tan-Phai-Giac-Mo-Hoang-Bach.1b21ee23.mp3"},"75a9":function(t,e,n){},"7c43":function(t,e,n){t.exports=n.p+"media/mot-dao-yeu-duong-tau-bay.7728eac6.mp3"},a0ef:function(t,e,n){},b3ff:function(t,e,n){"use strict";n("75a9")},d9c7:function(t,e,n){"use strict";n("1b49")},e2b5:function(t,e,n){},f404:function(t,e,n){}});
//# sourceMappingURL=app.351151f9.js.map