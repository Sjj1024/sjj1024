(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[4821],{61015:function(t){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},i={};return function(e,a,n){var s,o=function(t,e,a){void 0===a&&(a={});var n=new Date(t),s=function(t,e){void 0===e&&(e={});var a=e.timeZoneName||"short",n=t+"|"+a,s=i[n];return s||(s=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:a}),i[n]=s),s}(e,a);return s.formatToParts(n)},r=function(i,e){for(var a=o(i,e),s=[],r=0;r<a.length;r+=1){var u=a[r],c=u.type,f=u.value,l=t[c];l>=0&&(s[l]=parseInt(f,10))}var d=s[3],h=24===d?0:d,m=s[0]+"-"+s[1]+"-"+s[2]+" "+h+":"+s[4]+":"+s[5]+":000",g=+i;return(n.utc(m).valueOf()-(g-=g%1e3))/6e4},u=a.prototype;u.tz=function(t,i){void 0===t&&(t=s);var e=this.utcOffset(),a=this.toDate(),o=a.toLocaleString("en-US",{timeZone:t}),r=Math.round((a-new Date(o))/1e3/60),u=n(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-r,!0);if(i){var c=u.utcOffset();u=u.add(e-c,"minute")}return u.$x.$timezone=t,u},u.offsetName=function(t){var i=this.$x.$timezone||n.tz.guess(),e=o(this.valueOf(),i,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return e&&e.value};var c=u.startOf;u.startOf=function(t,i){if(!this.$x||!this.$x.$timezone)return c.call(this,t,i);var e=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return c.call(e,t,i).tz(this.$x.$timezone,!0)},n.tz=function(t,i,e){var a=e&&i,o=e||i||s,u=r(+n(),o);if("string"!=typeof t)return n(t).tz(o);var c=function(t,i,e){var a=t-60*i*1e3,n=r(a,e);if(i===n)return[a,i];var s=r(a-=60*(n-i)*1e3,e);return n===s?[a,n]:[t-60*Math.min(n,s)*1e3,Math.max(n,s)]}(n.utc(t,a).valueOf(),u,o),f=c[0],l=c[1],d=n(f).utcOffset(l);return d.$x.$timezone=o,d},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){s=t}}}()},64471:function(t){t.exports=function(){"use strict";var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,e=/([+-]|\d\d)/g;return function(a,n,s){var o=n.prototype;s.utc=function(t){return new n({date:t,utc:!0,args:arguments})},o.utc=function(i){var e=s(this.toDate(),{locale:this.$L,utc:!0});return i?e.add(this.utcOffset(),t):e},o.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var r=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),r.call(this,t)};var u=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=o.utcOffset;o.utcOffset=function(a,n){var s=this.$utils().u;if(s(a))return this.$u?0:s(this.$offset)?c.call(this):this.$offset;if("string"==typeof a&&(a=function(t){void 0===t&&(t="");var a=t.match(i);if(!a)return null;var n=(""+a[0]).match(e)||["-",0,0],s=n[0],o=60*+n[1]+ +n[2];return 0===o?0:"+"===s?o:-o}(a),null===a))return this;var o=Math.abs(a)<=16?60*a:a,r=this;if(n)return r.$offset=o,r.$u=0===a,r;if(0!==a){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(r=this.local().add(o+u,t)).$offset=o,r.$x.$localOffset=u}else r=this.utc();return r};var f=o.format;o.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,i)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var l=o.toDate;o.toDate=function(t){return"s"===t&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var d=o.diff;o.diff=function(t,i,e){if(t&&this.$u===t.$u)return d.call(this,t,i,e);var a=this.local(),n=s(t).local();return d.call(a,n,i,e)}}}()},5536:(t,i,e)=>{"use strict";e.d(i,{E2:()=>s,_K:()=>a,dA:()=>n});const a=t=>t>=10?(""+t).split("").map((t=>Number(t))):[0,t],n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;const i=t.getHours(),e=t.getMinutes(),n=t.getSeconds();return[...a(i),...a(e),...a(n)]},s=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;const i=t.getFullYear(),e=t.getMonth()+1,n=t.getDate();return[...a(i),...a(e),...a(n)]}},79149:(t,i,e)=>{"use strict";e.d(i,{w:()=>a,x:()=>n});const a=[{name:"东京",id:"65E77",adm2:"东京",adm1:"东京都",country:"日本",tz:"Asia/Tokyo",utcOffset:"+09:00"},{name:"纽约",id:"1E98E",adm2:"纽约",adm1:"纽约",country:"美国",tz:"America/New_York",utcOffset:"-05:00"},{name:"巴黎",id:"7FA1",adm2:"巴黎",adm1:"法兰西岛大区",country:"法国",tz:"Europe/Paris",utcOffset:"+01:00"},{name:"莫斯科",id:"554F",adm2:"莫斯科",adm1:"莫斯科州",country:"俄罗斯",tz:"Europe/Moscow",utcOffset:"+03:00"}],n=[{name:"华盛顿",id:"CD397",adm2:"华盛顿",adm1:"哥伦比亚特区",country:"美国",tz:"America/New_York",utcOffset:"-05:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/United%20States%402x.png"},{name:"首尔",id:"485B3",adm2:"首尔",adm1:"首尔",country:"韩国",tz:"Asia/Seoul",utcOffset:"+09:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/South%20Korea%402x.png"},{name:"济州岛",id:"A254E",adm2:"济州特别自治道",adm1:"济州特别自治道",country:"韩国",tz:"Asia/Seoul",utcOffset:"+09:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/South%20Korea%402x.png"},{name:"罗马",id:"43336",adm2:"罗马",adm1:"拉齐奥",country:"意大利",tz:"Europe/Rome",utcOffset:"+01:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Italy%402x.png"},{name:"牛津",id:"9BAB9",adm2:"东南英格兰",adm1:"英格兰",country:"英国",tz:"Europe/London",utcOffset:"+00:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/United%20Kingdom%402x.png"},{name:"曼谷",id:"EDF82",adm2:"曼谷",adm1:"曼谷",country:"泰国",tz:"Asia/Bangkok",utcOffset:"+07:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Thailand%402x.png"},{name:"新加坡",id:"646E3",adm2:"新加坡",adm1:"新加坡",country:"新加坡",tz:"Asia/Singapore",utcOffset:"+08:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Singapore%402x.png"},{name:"普吉岛",id:"52FED",adm2:"普吉市",adm1:"普吉府",country:"泰国",tz:"Asia/Bangkok",utcOffset:"+07:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Thailand%402x.png"},{name:"剑桥",id:"739FB",adm2:"東英格蘭",adm1:"英格兰",country:"英国",tz:"Europe/London",utcOffset:"+00:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/United%20Kingdom%402x.png"},{name:"柏林",id:"52271",adm2:"柏林",adm1:"柏林",country:"德国",tz:"Europe/Berlin",utcOffset:"+01:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Germany%402x.png"},{name:"布拉迪斯拉发",id:"C3706",adm2:"布拉迪斯拉发",adm1:"布拉迪斯拉发",country:"斯洛伐克",tz:"Europe/Bratislava",utcOffset:"+01:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Slovakia%402x.png"},{name:"威尼斯",id:"575C9",adm2:"威尼斯",adm1:"威尼托",country:"意大利",tz:"Europe/Rome",utcOffset:"+01:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Italy%402x.png"},{name:"里约热内卢",id:"11188",adm2:"里约热内卢",adm1:"里约热内卢州",country:"巴西",tz:"America/Sao_Paulo",utcOffset:"-03:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Brazil%402x.png"},{name:"京都市",id:"BDA09",adm2:"京都市",adm1:"京都府",country:"日本",tz:"Asia/Tokyo",utcOffset:"+09:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Japan%402x.png"},{name:"斯德哥尔摩",id:"AF1CF",adm2:"斯德哥尔摩",adm1:"斯德哥尔摩",country:"瑞典",tz:"Europe/Stockholm",utcOffset:"+01:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Sweden%402x.png"},{name:"芭堤雅",id:"21810",adm2:"芭堤雅",adm1:"春武里府",country:"泰国",tz:"Asia/Bangkok",utcOffset:"+07:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Thailand%402x.png"}]},44821:(t,i,e)=>{"use strict";e.r(i),e.d(i,{useWorldClockStore:()=>g});var a=e(80661),n=e.n(a),s=e(64471),o=e.n(s),r=e(61015),u=e.n(r),c=e(28850),f=e(10435),l=e(79149),d=e(5536);n().extend(o()),n().extend(u());const h=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];let m;const g=(0,f.Q_)(c.BU.worldClock,{syncStorage:{watch:["cityList","is12Hour"]},syncCloud:{watch:["cityList","is12Hour"]},state:()=>({modalShow:!1,cityList:l.w,homeCityIndex:0,is12Hour:!1,now:n()(),flipping:!1,flipingTimer:null,dragId:""}),getters:{allCityData(){const t=[];return this.cityList.forEach((i=>{const e=this.now.tz(i.tz),a=e.hour(),n=a>12?a-12:a,s=this.is12Hour?n:a,o=e.minute(),r=e.second();t.push({...i,tag:e.hour()>=12?"PM":"AM",timeStr:this.is12Hour?e.format("hh:mm:ss"):e.format("HH:mm:ss"),dateStr:e.format("YYYY/MM/DD"),weekday:e.day(),weekStr:h[e.day()],hour:s,min:o,sec:r,timeNumberArr:[...(0,d._K)(s),...(0,d._K)(o),...(0,d._K)(r)]})})),t},homeCityData(){return this.allCityData[this.homeCityIndex]}},actions:{setModal(t){this.modalShow=t},setHomeIndex(t){this.homeCityIndex=t},setIs12Hour(t){this.is12Hour=t},onSwitchHomeData(t){if("pre"===t){if(0===this.homeCityIndex)return;this.homeCityIndex=this.homeCityIndex-1}else{if(this.homeCityIndex===this.cityList.length-1)return;this.homeCityIndex=this.homeCityIndex+1}},startTimer(){m&&clearTimeout(m),m=window.setTimeout((()=>{this.now=n()(),this.startTimer()}),1e3)},clearTimer(){m&&clearTimeout(m)},setCityList(t){this.cityList=t},setDragId(t){this.dragId=t},dragSort(t,i){if(t===i)return;const e=[...this.cityList],a=e.findIndex((t=>i===t.id)),n=e.findIndex((i=>t===i.id));-1!==a&&-1!==n&&(a>n?(e.splice(a+1,0,e[n]),e.splice(n,1)):(e.splice(a,0,e[n]),e.splice(n+1,1)),this.cityList=e,this.setFlipping(!0))},setFlipping(t){window.clearTimeout(this.flipingTimer),t&&(this.flipping=t,this.flipingTimer=window.setTimeout((()=>{this.flipping=!1}),200))}}})}}]);