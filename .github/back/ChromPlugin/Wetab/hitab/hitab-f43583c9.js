(()=>{"use strict";var e,t,a,r,n,o,c,s={74003:(e,t,a)=>{a.d(t,{AN:()=>f,FH:()=>i,G9:()=>n,H:()=>h,Hj:()=>w,Ji:()=>l,Lt:()=>s,P0:()=>o,Pl:()=>r,c1:()=>p,kP:()=>u,s$:()=>c,sM:()=>b,tI:()=>d,tJ:()=>y});const r=!1,n=!0,o=!1,c=!1,s="chrome",i=n||o||c,d="zh",f=!1,b=!0,l="1.0.43",h="https://api.wetab.link/api/",u="https://wetabchat.haohuola.com/api/",p=(location.origin,"https://static.wetab.link"),m=b?{"zh-CN":"中文简体"}:{"en-US":"English"},w=(Object.keys(m),b?"zh-CN":"en-US"),y=b?{baiduLabel:"Wetab",trackingId:r?"UA-238133466-3":"UA-238133466-1"}:{baiduLabel:"Hitab",trackingId:"UA-238133466-2"}},73150:(e,t,a)=>{var r=a(74003);globalThis.i18nLangCode=r.Hj;const n=(async()=>(globalThis.i18n=e=>`[${e}]`,globalThis.i18n))(),o=async()=>await n;var c=a(28850);(()=>{let e=0})();(async()=>{if(await Promise.all([(0,c.WT)(),o()]),await Promise.all([a.e(9597),a.e(5410),a.e(5434),a.e(435),a.e(3734),a.e(8467),a.e(179)]).then(a.bind(a,23308)),r.Pl){const{createWorkBox:e}=await a.e(9364).then(a.bind(a,91775));e().then((()=>{})).catch((()=>{}))}})()},28850:(e,t,a)=>{a.d(t,{BU:()=>k,Ar:()=>j,aQ:()=>E,WT:()=>P,gZ:()=>I,ES:()=>S});let r,n;const o=new WeakMap,c=new WeakMap,s=new WeakMap,i=new WeakMap,d=new WeakMap;let f={get(e,t,a){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||s.get(e);if("store"===t)return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return h(e[t])},set:(e,t,a)=>(e[t]=a,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(u(this),t),h(o.get(this))}:function(...t){return h(e.apply(u(this),t))}:function(t,...a){const r=e.call(u(this),t,...a);return s.set(r,t.sort?t.sort():[t]),h(r)}}function l(e){return"function"==typeof e?b(e):(e instanceof IDBTransaction&&function(e){if(c.has(e))return;const t=new Promise(((t,a)=>{const r=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",o),e.removeEventListener("abort",o)},n=()=>{t(),r()},o=()=>{a(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",n),e.addEventListener("error",o),e.addEventListener("abort",o)}));c.set(e,t)}(e),t=e,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,f):e);var t}function h(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,a)=>{const r=()=>{e.removeEventListener("success",n),e.removeEventListener("error",o)},n=()=>{t(h(e.result)),r()},o=()=>{a(e.error),r()};e.addEventListener("success",n),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),d.set(t,e),t}(e);if(i.has(e))return i.get(e);const t=l(e);return t!==e&&(i.set(e,t),d.set(t,e)),t}const u=e=>d.get(e);const p=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],w=new Map;function y(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(w.get(t))return w.get(t);const a=t.replace(/FromIndex$/,""),r=t!==a,n=m.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!n&&!p.includes(a))return;const o=async function(e,...t){const o=this.transaction(e,n?"readwrite":"readonly");let c=o.store;return r&&(c=c.index(t.shift())),(await Promise.all([c[a](...t),n&&o.done]))[0]};return w.set(t,o),o}f=(e=>({...e,get:(t,a,r)=>y(t,a)||e.get(t,a,r),has:(t,a)=>!!y(t,a)||e.has(t,a)}))(f);class g{static DBName="hitab";static storeNames=[];static ensureDB=async()=>{let e;if(this.dbPromise){const t=await this.dbPromise;e=t.version+1,t.close()}return this.dbPromise=function(e,t,{blocked:a,upgrade:r,blocking:n,terminated:o}={}){const c=indexedDB.open(e,t),s=h(c);return r&&c.addEventListener("upgradeneeded",(e=>{r(h(c.result),e.oldVersion,e.newVersion,h(c.transaction))})),a&&c.addEventListener("blocked",(()=>a())),s.then((e=>{o&&e.addEventListener("close",(()=>o())),n&&e.addEventListener("versionchange",(()=>n()))})).catch((()=>{})),s}(this.DBName,e,{upgrade:e=>{const t=this.storeNames.filter((t=>!e.objectStoreNames.contains(t)));t.length>0&&t.forEach((t=>{e.createObjectStore(t)}))}}),this.dbPromise};objStoreName="";driver="idb";constructor(e,t){if(!e)throw new Error("empty object store name");this.driver=t??this.driver,this.objStoreName=e,g.storeNames.push(this.objStoreName)}async getItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.driver;try{switch(t){case"idb":try{const t=await g.dbPromise;return await t.get(this.objStoreName,e)}catch(t){const a=await g.ensureDB();return await a.get(this.objStoreName,e)}case"storage.local":return await new Promise((t=>chrome.storage.local.get(e,(a=>t(a[e])))))}}catch(e){throw e}}async setItem(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.driver;try{switch(a){case"idb":try{const a=await g.dbPromise;return await a.put(this.objStoreName,t,e)}catch(a){const r=await g.ensureDB();return await r.put(this.objStoreName,t,e)}case"storage.local":return await new Promise((a=>chrome.storage.local.set({[e]:t},a)))}}catch(e){throw e}}async removeItem(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.driver;try{switch(t){case"idb":try{const t=await g.dbPromise;return await t.delete(this.objStoreName,e)}catch(t){const a=await g.ensureDB();return await a.delete(this.objStoreName,e)}case"storage.local":return await new Promise((t=>chrome.storage.local.remove(e,t)))}}catch(e){throw e}}async keys(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.driver;try{switch(e){case"idb":try{const e=await g.dbPromise;return await e.getAllKeys(this.objStoreName)}catch(e){const t=await g.ensureDB();return await t.getAllKeys(this.objStoreName)}case"storage.local":return await new Promise((e=>chrome.storage.local.get(null,(t=>e(Object.keys(t))))))}}catch(e){throw e}}}const v=new g("store");let k;g.ensureDB(),function(e){e.wallpaper="store-wallpaper",e.search="store-search",e.icon="store-icon",e.setting="store-setting",e.user="store-user",e.sync="store-sync",e.notice="store-notice",e.note="store-note",e.todo="store-todo",e.timerBirthday="store-timer-birthday",e.timerFestival="store-timer-festival",e.timerYear="store-timer-year",e.weather="store-weather",e.hotsearch="store-hotsearch",e.calculator="store-calculator",e.payment="store-payment",e.calendar="store-calendar",e.celebrity="store-celebrity",e.worldcup="store-worldcup",e.habit="store-habit",e.exchangeRate="store-exchange-rate",e.news="store-news",e.stock="store-stock",e.game="store-game",e.history="store-history",e.movie="store-movie",e.book="store-book",e.play="store-play",e.clock="store-clock",e.worldClock="store-world-clock",e.hotApp="store-hotapp",e.nba="store-nba",e.chatgpt="store-chatgpt",e.bookmarks="store-bookmarks"}(k||(k={}));class j{static instanceKeyMapper=new Map;static getInstanceFromKey(e){return this.instanceKeyMapper.has(e)?this.instanceKeyMapper.get(e):null}static hasInstanceFromKey(e){return this.instanceKeyMapper.has(e)}static async getAllInitdata(){const e=Array.from(this.instanceKeyMapper.values());return await Promise.all(e.map((e=>e.getInitdata())))}static async deleteAllForLogout(){const e=Array.from(this.instanceKeyMapper.values());let t;return(await Promise.all(e.map((e=>e.deleteForLogout())))).some((e=>{let[a]=e;return!!a&&(t=a,!0)}))?[t]:[null,null]}constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"idb";this.key=e,this.type=t,this.setInstanceMapper()}setInstanceMapper(){if(j.instanceKeyMapper.has(this.key))throw new Error("重复的 storage key");j.instanceKeyMapper.set(this.key,this)}write=async e=>{if(!e)return[{message:"空数据"}];e._writeStorageAt=Date.now();try{return[null,await v.setItem(this.key,e,this.type)]}catch(e){return[e]}};async read(){try{return[null,await v.getItem(this.key,this.type)]}catch(e){return[e]}}async getInitdata(){const[e,t]=await this.read();return e||(this.initData=t),this.initData}async update(e){const[t,a]=await this.read();if(t)return[t];if(a&&"object"==typeof a){const t={...a,...e};return await this.write(t)}return[{data:a}]}async delete(){try{return[null,await v.removeItem(this.key,this.type)]}catch(e){return[e]}}async deleteWithKeep(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];if(0===t.length)return[{keys:t}];const[r,n]=await this.read();if(r)return[r];if(n&&"object"==typeof n){const e={};return t.forEach((t=>{e[t]=n[t]})),await this.write(e)}return[{data:n}]}async deleteForLogout(){return await this.delete()}}new j(k.note),new j(k.search);const I=new j(k.setting),E=new j(k.icon),S=(new j(k.sync),new j(k.todo),new j(k.user)),D=(new j(k.wallpaper),new j(k.notice),new j(k.timerBirthday),new j(k.timerFestival),new j(k.timerYear),new j(k.weather),new j(k.hotsearch),new j(k.calculator),new j(k.payment),new j(k.calendar),new j(k.celebrity),new j(k.worldcup),new j(k.habit),new j(k.exchangeRate),new j(k.news),new j(k.stock),new j(k.game),new j(k.history),new j(k.movie),new j(k.book),new j(k.play),new j(k.clock),new j(k.worldClock),new j(k.hotApp),new j(k.nba),new j(k.chatgpt),new j(k.bookmarks),j.getAllInitdata()),P=async()=>await D}},i={};function d(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={id:e,loaded:!1,exports:{}};return s[e].call(a.exports,a,a.exports,d),a.loaded=!0,a.exports}d.m=s,d.amdO={},e=[],d.O=(t,a,r,n)=>{if(!a){var o=1/0;for(f=0;f<e.length;f++){for(var[a,r,n]=e[f],c=!0,s=0;s<a.length;s++)(!1&n||o>=n)&&Object.keys(d.O).every((e=>d.O[e](a[s])))?a.splice(s--,1):(c=!1,n<o&&(o=n));if(c){e.splice(f--,1);var i=r();void 0!==i&&(t=i)}}return t}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[a,r,n]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var n=Object.create(null);d.r(n);var o={};t=t||[null,a({}),a([]),a(a)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=a(c))Object.getOwnPropertyNames(c).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,d.d(n,o),n},d.d=(e,t)=>{for(var a in t)d.o(t,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,a)=>(d.f[a](e,t),t)),[])),d.u=e=>9597===e?"assets/js/9597-bd761cad.js":3734===e?"assets/js/3734-3ade56bb.js":8467===e?"assets/js/8467-f967ca1e.js":"assets/js/"+{54:"bf55882b",96:"31ede7aa",102:"c4c08ad7",115:"9581dc49",179:"17a199b5",254:"ee959903",279:"58e45d5e",287:"22386b77",335:"97a1f399",435:"8af70b7a",503:"91ecb157",627:"23100b7b",644:"693f9a00",663:"a7cc05c7",682:"a6c6cdaf",699:"45a41857",774:"c0f26e16",777:"a382eac7",1108:"11e0d3bd",1132:"7c717164",1215:"77452de0",1259:"98b401eb",1261:"79e4d9bc",1268:"8f6be016",1273:"592c2a13",1310:"5127449b",1353:"b6fd12df",1397:"f0ca1e8b",1477:"09d99c08",1540:"90afc7d0",1583:"63235712",1587:"27e2bdfd",1589:"9a23e935",1605:"eb90696e",1719:"3f9e3c5a",1768:"12f184a3",1778:"33a7892f",1796:"c3240122",1801:"e8b3da01",1847:"9e2c86b6",1874:"ce8d6f27",1970:"082eef71",1973:"11d4d171",2162:"7c76908a",2168:"e2f811e4",2228:"f1535390",2242:"4c0bf8fc",2368:"ae794c2b",2369:"de701c3c",2379:"b2ae4a46",2388:"d9907450",2399:"57a96f77",2411:"93cd1bb8",2421:"654f54f9",2423:"eaa9bfc9",2478:"a5445248",2520:"7acdb9a8",2556:"02e2a0b0",2565:"91592e24",2673:"b4b56a1e",2706:"12fec3c8",2709:"0cee5ea3",2710:"2b34115e",2736:"f1b5e30d",2861:"eac8edd0",2898:"f659cba9",2912:"bc0e3dba",2916:"28bcbafd",2919:"475ca74d",2972:"dc28b7d1",2994:"627a8547",3014:"ad622346",3056:"e6e84456",3120:"3c046e0d",3240:"a660770f",3292:"c92186f9",3299:"e6da6b90",3344:"b161ad01",3391:"888f718b",3392:"38584ec0",3453:"f2ee87d0",3458:"2cc3ac2b",3509:"3861504c",3516:"7d66a0e0",3528:"34269c0b",3530:"0cbd649c",3533:"ed506205",3534:"de17397e",3599:"6e29ac0c",3609:"502e956e",3614:"c19331b6",3617:"256d2afe",3659:"30bbff9c",3668:"ae59ab66",3753:"5fe1ebfe",3979:"240828b6",3980:"db1f2166",4060:"32164339",4080:"cc83f21e",4088:"4376149b",4114:"59c170a7",4118:"068c649f",4129:"383cd024",4179:"8ade0733",4215:"d1501991",4275:"36f480f0",4303:"8bf716a1",4328:"96d10038",4339:"4215247d",4373:"45f5fe85",4426:"71efa9a1",4437:"7c749a52",4453:"e15c8695",4477:"59dea5ce",4489:"651a14ee",4531:"8613c79c",4534:"28f77d20",4582:"df308143",4591:"b4b62647",4621:"c431754e",4642:"3e13ea2f",4752:"0f601d42",4795:"af08e8eb",4805:"0a488f4f",4821:"ba64949b",4845:"ce4f54e5",4897:"fa32b3b4",4942:"2f0aa831",4962:"0bcf1b5b",4974:"63bfdc35",5131:"26008e97",5143:"c8ce5ece",5219:"92835a66",5231:"d767881e",5263:"e245e5c7",5267:"7e82dddf",5268:"981c478a",5291:"9021cb1f",5353:"3d3cd0a6",5369:"2ee81452",5410:"97cfcd2e",5424:"6aec2718",5434:"975f0fa1",5436:"49fb2d92",5500:"9323f354",5555:"afd75408",5610:"687835f6",5685:"190536c8",5766:"5401650f",5964:"aedab45b",5982:"01a941c9",6014:"a2961c5e",6124:"d1ca7f3b",6167:"99756a8f",6201:"88f29392",6286:"66afca7e",6352:"26b322d8",6501:"2c4750a0",6522:"6f697598",6578:"7a41c7ae",6581:"39e70b95",6590:"ca0c46a6",6611:"cdd8a137",6695:"09ae9bba",6730:"344e2b2f",6994:"b18ce401",7009:"3295eabf",7080:"8660d0db",7088:"6ac6d9c0",7176:"5e3e4dcd",7244:"629f3058",7281:"ef20911d",7290:"8a8d7a15",7308:"bc9d167e",7331:"76494232",7348:"a088ce6c",7352:"04b20366",7373:"d20bde55",7387:"ba498fc3",7406:"4348f5e3",7407:"a008e317",7570:"01708d89",7780:"f32c257f",7804:"06cd0d9e",7807:"c0d66b2d",7811:"e78ac33f",7874:"0e696c60",7915:"2ede9879",7995:"f5fc310c",8034:"b7167359",8051:"2ada5cb9",8059:"3c842343",8063:"e58eedfd",8085:"9685a66a",8118:"39d7c292",8181:"1992704f",8231:"35ef2f3a",8299:"040c7df0",8309:"f49c5c83",8319:"3baf972b",8375:"7a89cd2e",8376:"24830920",8378:"7c8b21f0",8406:"8cacc837",8421:"f0db7560",8477:"6fd219fb",8491:"6d33e7dc",8527:"a4fe9d33",8546:"f5d4fd24",8594:"e4005bc4",8631:"9a33b5ae",8659:"a3b7f6e5",8755:"8d282ff4",8805:"f1b71db5",8828:"a6b7e614",8909:"e311cc15",8966:"9fcfe108",9042:"7170833f",9066:"b0c6fa46",9182:"fe650926",9186:"b8bfef83",9189:"457a97d3",9190:"89f4f980",9215:"8545f3a2",9256:"bc5208d6",9302:"328ee33a",9364:"d411dce0",9538:"3c1d504b",9621:"83987f0b",9637:"20f43944",9677:"394f8522",9708:"4ea2545e",9930:"c27eed0d",9991:"a812171c"}[e]+".js",d.miniCssF=e=>"assets/css/"+(179===e?"main":e)+"-"+{54:"e2339f3f",102:"c61f97dd",115:"6d48dec4",179:"4b845497",627:"03bbee13",699:"2e3342c8",1108:"40443982",1215:"b4284622",1268:"a6c202f2",1583:"afcef61e",1589:"862cd4c1",1605:"baa6f283",1719:"996f5d50",1796:"59866655",1801:"c61f97dd",1847:"07cb1855",1874:"b62a2a09",1970:"c61f97dd",2242:"0a279393",2368:"f7450c64",2388:"ab8a7e5f",2411:"fd46d537",2421:"c61f97dd",2520:"7be92219",2709:"0dfac479",2898:"069c36f0",2916:"70bcdd77",2972:"069c36f0",2994:"465d5aa8",3014:"c61f97dd",3120:"706ce1c3",3344:"35809429",3392:"39628bbf",3530:"8d4b2b12",3534:"73a141e9",3599:"ab8a7e5f",3609:"0da1f712",3614:"ab8a7e5f",3617:"c2d69844",4215:"737f4b01",4339:"d187a613",4437:"0bac599d",4453:"7b278917",4477:"a6908ad5",4489:"cd47b1b6",4531:"c61f97dd",4582:"2a0dd147",4805:"11b8f2f8",4897:"fa8a6c42",4962:"3d990ab2",5231:"ac34ebb6",5267:"7ce98497",5353:"9351a000",5410:"f60e758e",5500:"2abd4fa3",5610:"df3239f3",5685:"5b9452d5",6014:"c61f97dd",6167:"ab8a7e5f",6578:"a646a360",6581:"762c011f",6994:"4bf35727",7088:"a34a16d3",7176:"3f9041b5",7331:"c61f97dd",7348:"dc9eaea9",7373:"6d409c14",7407:"bb9844ce",7807:"71775600",7874:"bc27ac57",7915:"fd003909",7995:"dbb51ae8",8085:"7b6e68d7",8118:"c61f97dd",8181:"762c011f",8231:"814b4597",8319:"d62d3b77",8376:"d0088f7f",8421:"a4d9e952",8477:"f0ff3565",8527:"285d5215",8631:"9f2bc058",8805:"62e84bb1",9066:"036c8404",9182:"686a2543",9189:"c61f97dd",9215:"347d0caf",9256:"a5067163",9597:"357dd50d",9637:"ab8a7e5f",9677:"601404cb",9930:"970f7f69",9991:"0bc21135"}[e]+".css",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="infinity-hitab-client:",d.l=(e,t,a,o)=>{if(r[e])r[e].push(t);else{var c,s;if(void 0!==a)for(var i=document.getElementsByTagName("script"),f=0;f<i.length;f++){var b=i[f];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==n+a){c=b;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",n+a),c.src=e),r[e]=[t];var l=(t,a)=>{c.onerror=c.onload=null,clearTimeout(h);var n=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(a))),t)return t(a)},h=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),s&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e+"../"})(),o=e=>new Promise(((t,a)=>{var r=d.miniCssF(e),n=d.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=(c=a[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(n===e||n===t))return c}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var c;if((n=(c=o[r]).getAttribute("data-href"))===e||n===t)return c}})(r,n))return t();((e,t,a,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)a();else{var c=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=c,i.request=s,n.parentNode.removeChild(n),r(i)}},n.href=t,document.head.appendChild(n)})(e,n,t,a)})),c={1080:0},d.f.miniCss=(e,t)=>{c[e]?t.push(c[e]):0!==c[e]&&{54:1,102:1,115:1,179:1,627:1,699:1,1108:1,1215:1,1268:1,1583:1,1589:1,1605:1,1719:1,1796:1,1801:1,1847:1,1874:1,1970:1,2242:1,2368:1,2388:1,2411:1,2421:1,2520:1,2709:1,2898:1,2916:1,2972:1,2994:1,3014:1,3120:1,3344:1,3392:1,3530:1,3534:1,3599:1,3609:1,3614:1,3617:1,4215:1,4339:1,4437:1,4453:1,4477:1,4489:1,4531:1,4582:1,4805:1,4897:1,4962:1,5231:1,5267:1,5353:1,5410:1,5500:1,5610:1,5685:1,6014:1,6167:1,6578:1,6581:1,6994:1,7088:1,7176:1,7331:1,7348:1,7373:1,7407:1,7807:1,7874:1,7915:1,7995:1,8085:1,8118:1,8181:1,8231:1,8319:1,8376:1,8421:1,8477:1,8527:1,8631:1,8805:1,9066:1,9182:1,9189:1,9215:1,9256:1,9597:1,9637:1,9677:1,9930:1,9991:1}[e]&&t.push(c[e]=o(e).then((()=>{c[e]=0}),(t=>{throw delete c[e],t})))},(()=>{d.b=document.baseURI||self.location.href;var e={1080:0,8169:0};d.f.j=(t,a)=>{var r=d.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(1(02|268|583)|361[47]|699(|4)|(44|53)53|2421|2520|4215|7995|8169|8527|9677)$/.test(t))e[t]=0;else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var o=d.p+d.u(t),c=new Error;d.l(o,(a=>{if(d.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[o,c,s]=a,i=0;if(o.some((t=>0!==e[t]))){for(r in c)d.o(c,r)&&(d.m[r]=c[r]);if(s)var f=s(d)}for(t&&t(a);i<o.length;i++)n=o[i],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(f)},a=globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var f=d.O(void 0,[8169],(()=>d(73150)));f=d.O(f)})();