"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[2994,1259],{73337:(t,e,i)=>{i.d(e,{Kn:()=>u,fN:()=>r,k$:()=>h,nI:()=>p});var a=i(74003),l=i(63477),n=i(80661),s=i.n(n),o=i(88287);const r=async t=>{try{const e=await o.hj.get(`${a.H}weather/city`,{location:t,lang:a.sM?"zh":"en"},{_delay:200,_single:!0});if(0===e.code&&e.data.list.length>0)return[null,e.data.list.map((t=>({...t,cid:t.id})))];throw e}catch(t){return["catch error"]}},d=t=>(t.updateTime=s()(t.updateTime).valueOf(),t.daily=t.daily.map((t=>{const e=(0,l.sG)(t.fxDate);return{...t,fxDateStr:a.sM?e.format("M月D ddd"):e.format("MMM D, ddd"),dateStr:e.format("ddd"),weekStr:a.sM?e.format("D日"):e.format("D"),tempMax:t.tempMax+"°",tempMin:t.tempMin+"°"}})),t),c=t=>(t.updateTime=s()(t.updateTime).valueOf(),t.hourly=t.hourly.map((t=>({...t,fxTimeStr:s()(t.fxTime).format("HH:mm"),temp:t.temp+"°",windScale:a.sM?t.windScale+"级":"级"+t.windScale,windSpeed:t.windSpeed+"km/h",humidity:t.humidity+"%",precip:t.precip+"mm"}))),t),p=async t=>{try{const e=await o.hj.get(`${a.H}weather/daily`,{location:t,lang:a.sM?"zh":"en"},{_delay:0});if(0===e.code)return[null,d(e.data)];throw e}catch(t){return["catch error"]}},u=async t=>{try{const e=await o.hj.get(`${a.H}weather/hourly`,{location:t,lang:a.sM?"zh":"en"},{_delay:0});if(0===e.code)return[null,c(e.data)];throw e}catch(t){return["catch error"]}},h=async()=>{try{const t=await o.hj.get(`${a.H}weather/location`,{},{_delay:0});if(0===t.code)return[null,t.data];throw t}catch(t){return["catch error"]}}},22854:(t,e,i)=>{i.d(e,{C:()=>n});var a=i(29445),l=i(57268);const n=(t,e,i)=>{const n=(0,a.iH)(t);e.onChangeState=t=>{n.value={...t}};const s=(0,l.Fl)((()=>i?i[n.value.size]:null));return{propsState:n,HomeComp:s}}},84138:(t,e,i)=>{i.d(e,{i7:()=>p,iE:()=>o,m_:()=>r,x4:()=>c,zI:()=>n});var a=i(74003),l=i(73337);const n="location",s={sunny:[[100],[150]],cloudy:[[101,104],[151,154]],rain:[[300,399]],snow:[[400,499]],haze:[[500,515]]};function o(t){const e=Number(t);let i="cloudy";for(const t in s){if(s[t].some((a=>{if(1===a.length){if(e===a[0])return i=t,!0}else if(2===a.length&&e>=a[0]&&e<=a[0])return i=t,!0})))break}return i}const r=t=>`${a.c1}/weather-icon/${t}.png`,d=a.sM?"116.40528,39.90498":"-73.96900,40.77899";function c(t){return new Promise((e=>{let i=!1;const a=t=>{i=!0,e(t)};setTimeout((()=>{i||(0,l.k$)().then((e=>{let[i,l]=e;a(null===i?l:t?"":d)}))}),0),setTimeout((()=>{a(t?"":d)}),5e3)}))}const p=(t,e)=>`weather-bg-${e||"cloudy"}-${t}`},22994:(t,e,i)=>{i.r(e),i.d(e,{mountHome:()=>vt,widgetApp:()=>ht});var a=i(29445),l=i(68398),n=i(57268),s=i(41259),o=i(94209),r=i(84138);const d={class:"mr-[20px] text-[28px] text-color-t1 icon-m:mr-[16px] icon-s:mr-[8px]"},c={class:"flex h-full flex-col justify-between text-color-t2"},p={class:"flex items-center"},u={class:"break-all line-clamp-1"},h=["src"],v={class:"font-ali-55 text-[12px]"},y={class:"mr-[4px]"},m=(0,n.aZ)({__name:"weather-home-small",props:{id:null,state:null},setup(t){const e=t,i=(0,n.Fl)((()=>{var t,i;return null===(t=e.state)||void 0===t||null===(i=t.weathers)||void 0===i?void 0:i.now})),l=(0,n.Fl)((()=>{var t;return null===(t=e.state)||void 0===t?void 0:t.activeTempRange})),s=(0,n.Fl)((()=>{var t;return null===(t=e.state)||void 0===t?void 0:t.activeCityLongName}));return(t,e)=>{var m,g,x,w;return(0,n.wg)(),(0,n.iD)("section",{class:(0,o.normalizeClass)([[(0,a.SU)(r.i7)("card",null===(m=(0,a.SU)(i))||void 0===m?void 0:m.type)],"weather-home-small flex h-full items-center px-[24px] py-[20px] icon-m:py-[12px] icon-m:px-[16px] icon-s:p-[8px]"])},[(0,n._)("div",d,(0,o.toDisplayString)(null===(g=(0,a.SU)(i))||void 0===g?void 0:g.temp),1),(0,n._)("div",c,[(0,n._)("div",p,[(0,n._)("span",u,(0,o.toDisplayString)((0,a.SU)(s)),1),(0,n._)("img",{class:"ml-[2px] h-[24px] w-[24px]",draggable:"false",src:(0,a.SU)(r.m_)(null===(x=(0,a.SU)(i))||void 0===x?void 0:x.icon)},null,8,h)]),(0,n._)("div",v,[(0,n._)("span",y,(0,o.toDisplayString)(null===(w=(0,a.SU)(i))||void 0===w?void 0:w.text),1),(0,n._)("span",null,(0,o.toDisplayString)((0,a.SU)(l)),1)])])],2)}}}),g={class:"flex justify-between p-[8px] !pb-0 icon-m:p-[12px] icon-s:p-[12px]"},x={class:"flex flex-col text-color-t2"},w={class:"text-[48px] leading-none text-color-t1"},S={class:"mt-[12px] break-all line-clamp-1"},f=["src"],C={class:"p-[8px] !pt-0 font-ali-55 text-[12px] text-color-t2 icon-m:p-[12px] icon-s:p-[12px]"},_={class:"mr-[4px]"},D={class:"card flex h-[60px] flex-shrink-0 items-center justify-around rounded-[16px] bg-color-white text-[12px] text-color-t2 icon-m:h-[60px] icon-m:rounded-[12px] icon-s:h-[48px] icon-s:rounded-[12px] dark:bg-opacity-20"},U={class:"card-item"},I={class:"font-ali-55 text-color-t3"},W={class:"card-item"},b={class:"font-ali-55 text-color-t3"},M={class:"card-item icon-s:!hidden"},k={class:"font-ali-55 text-color-t3"},T={class:"card-item"},H={class:"font-ali-55 text-color-t3"},q={class:"font-ali-55 text-color-t3"},z=(0,n.aZ)({__name:"weather-home-medium",props:{id:null,state:null},setup(t){const e=t,i=(0,n.Fl)((()=>{var t,i;return null===(t=e.state)||void 0===t||null===(i=t.weathers)||void 0===i?void 0:i.now})),l=(0,n.Fl)((()=>{var t;return null===(t=e.state)||void 0===t?void 0:t.activeTempRange})),s=(0,n.Fl)((()=>{var t;return null===(t=e.state)||void 0===t?void 0:t.activeCityLongName}));return(t,e)=>{var d,c,p,u,h,v,y,m,z,$,j;return(0,n.wg)(),(0,n.iD)("section",{class:(0,o.normalizeClass)([[(0,a.SU)(r.i7)("card",null===(d=(0,a.SU)(i))||void 0===d?void 0:d.type)],"weather-home-medium flex h-full flex-col justify-between p-[12px] icon-m:p-[8px] icon-s:p-[4px]"])},[(0,n._)("div",g,[(0,n._)("div",x,[(0,n._)("span",w,(0,o.toDisplayString)(null===(c=(0,a.SU)(i))||void 0===c?void 0:c.temp),1),(0,n._)("span",S,(0,o.toDisplayString)((0,a.SU)(s)),1)]),(0,n._)("img",{class:"ml-[2px] h-[24px] w-[24px]",draggable:"false",src:(0,a.SU)(r.m_)(null===(p=(0,a.SU)(i))||void 0===p?void 0:p.icon)},null,8,f)]),(0,n._)("div",C,[(0,n._)("span",_,(0,o.toDisplayString)(null===(u=(0,a.SU)(i))||void 0===u?void 0:u.text),1),(0,n._)("span",null,(0,o.toDisplayString)((0,a.SU)(l)),1)]),(0,n._)("div",D,[(0,n._)("div",U,[(0,n._)("span",null,(0,o.toDisplayString)(null===(h=(0,a.SU)(i))||void 0===h?void 0:h.humidity),1),(0,n._)("span",I,(0,o.toDisplayString)("湿度"),1)]),(0,n._)("div",W,[(0,n._)("span",null,(0,o.toDisplayString)(null===(v=(0,a.SU)(i))||void 0===v?void 0:v.windScale),1),(0,n._)("span",b,(0,o.toDisplayString)(null===(y=(0,a.SU)(i))||void 0===y?void 0:y.windDir),1)]),(0,n._)("div",M,[(0,n._)("span",null,(0,o.toDisplayString)(null===(m=(0,a.SU)(i))||void 0===m?void 0:m.windSpeed),1),(0,n._)("span",k,(0,o.toDisplayString)("风速"),1)]),(0,n._)("div",T,["rain"===(null===(z=(0,a.SU)(i))||void 0===z?void 0:z.type)?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("span",null,(0,o.toDisplayString)(null===($=(0,a.SU)(i))||void 0===$?void 0:$.precip),1),(0,n._)("span",H,(0,o.toDisplayString)("降水量"),1)],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n._)("span",null,(0,o.toDisplayString)(null===(j=(0,a.SU)(i))||void 0===j?void 0:j.pressure),1),(0,n._)("span",q,(0,o.toDisplayString)("百帕"),1)],64))])])],2)}}});var $=i(76911);const j=(0,$.Z)(z,[["__scopeId","data-v-1e604080"]]),L={class:"weather-home-large flex h-full"},F={class:"flex h-full w-[200px] flex-col justify-between bg-color-b4 p-[20px] icon-m:w-[172px] icon-s:w-[152px]"},N={class:"text-[48px] leading-none text-color-t1"},R={class:""},A={class:"flex items-center"},Z={class:"text-color-t2 line-clamp-2"},Y=["src"],E={class:"font-ali-55 text-[12px] text-color-t2"},P={class:"mr-[4px]"},K={class:"card flex h-[60px] flex-shrink-0 items-center justify-evenly rounded-[8px] bg-color-white bg-opacity-80 text-[12px] text-color-t2 dark:bg-opacity-20"},O={class:"card-item"},G={class:"font-ali-55 text-color-t3"},B={class:"card-item"},Q={class:"font-ali-55 text-color-t3"},J={class:"card-item"},V={class:"font-ali-55 text-color-t3"},X={class:"card-item"},tt={class:"font-ali-55 text-color-t3"},et={class:"font-ali-55 text-color-t3"},it={class:"day mt-[46px] flex items-center justify-around text-[12px] icon-m:mt-[28px] icon-s:mt-[28px]"},at={key:0,class:"flex flex-col items-center"},lt=["src"],nt={class:"text-color-t2"},st={class:"font-ali-55 text-color-t3"},ot=(0,n.aZ)({__name:"weather-home-large",props:{id:null,state:null},setup(t){const e=t,i=(0,n.Fl)((()=>{var t,i;return null===(t=e.state)||void 0===t||null===(i=t.weathers)||void 0===i?void 0:i.now})),l=(0,n.Fl)((()=>{var t,i;return null===(t=e.state)||void 0===t||null===(i=t.weathers)||void 0===i?void 0:i.day})),s=(0,n.Fl)((()=>{var t;return null===(t=e.state)||void 0===t?void 0:t.activeTempRange})),d=(0,n.Fl)((()=>{var t;return null===(t=e.state)||void 0===t?void 0:t.activeCityLongName}));return(t,e)=>{var c,p,u,h,v,y,m,g,x,w,S,f;return(0,n.wg)(),(0,n.iD)("section",L,[(0,n._)("div",F,[(0,n._)("span",N,(0,o.toDisplayString)(null===(c=(0,a.SU)(i))||void 0===c?void 0:c.temp),1),(0,n._)("div",R,[(0,n._)("div",A,[(0,n._)("span",Z,(0,o.toDisplayString)((0,a.SU)(d)),1),(0,n._)("img",{class:"ml-[4px] h-[32px] w-[32px]",draggable:"false",src:(0,a.SU)(r.m_)(null===(p=(0,a.SU)(i))||void 0===p?void 0:p.icon)},null,8,Y)]),(0,n._)("div",E,[(0,n._)("span",P,(0,o.toDisplayString)(null===(u=(0,a.SU)(i))||void 0===u?void 0:u.text),1),(0,n._)("span",null,(0,o.toDisplayString)((0,a.SU)(s)),1)])])]),(0,n._)("div",{class:(0,o.normalizeClass)([[(0,a.SU)(r.i7)("card",null===(h=(0,a.SU)(i))||void 0===h?void 0:h.type)],"h-full grow p-[24px] icon-m:p-[18px] icon-s:p-[16px]"])},[(0,n._)("div",K,[(0,n._)("div",O,[(0,n._)("span",null,(0,o.toDisplayString)(null===(v=(0,a.SU)(i))||void 0===v?void 0:v.humidity),1),(0,n._)("span",G,(0,o.toDisplayString)("湿度"),1)]),(0,n._)("div",B,[(0,n._)("span",null,(0,o.toDisplayString)(null===(y=(0,a.SU)(i))||void 0===y?void 0:y.windScale),1),(0,n._)("span",Q,(0,o.toDisplayString)(null===(m=(0,a.SU)(i))||void 0===m?void 0:m.windDir),1)]),(0,n._)("div",J,[(0,n._)("span",null,(0,o.toDisplayString)(null===(g=(0,a.SU)(i))||void 0===g?void 0:g.windSpeed),1),(0,n._)("span",V,(0,o.toDisplayString)("风速"),1)]),(0,n._)("div",X,["rain"===(null===(x=(0,a.SU)(i))||void 0===x?void 0:x.type)?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("span",null,(0,o.toDisplayString)(null===(w=(0,a.SU)(i))||void 0===w?void 0:w.precip),1),(0,n._)("span",tt,(0,o.toDisplayString)("降水量"),1)],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n._)("span",null,(0,o.toDisplayString)(null===(S=(0,a.SU)(i))||void 0===S?void 0:S.pressure),1),(0,n._)("span",et,(0,o.toDisplayString)("百帕"),1)],64))])]),(0,n._)("div",it,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(null===(f=(0,a.SU)(l))||void 0===f?void 0:f.list,((t,e)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:t.fxDate},[e<5?((0,n.wg)(),(0,n.iD)("div",at,[(0,n._)("img",{class:"h-[28px] w-[28px]",draggable:"false",src:(0,a.SU)(r.m_)(t.iconDay)},null,8,lt),(0,n._)("span",nt,(0,o.toDisplayString)(t.weekStr),1),(0,n._)("span",st,(0,o.toDisplayString)(t.dateStr),1)])):(0,n.kq)("",!0)],64)))),128))])],2)])}}}),rt=(0,$.Z)(ot,[["__scopeId","data-v-33a484b2"]]);var dt=i(22854);const ct=(0,n.aZ)({__name:"widget-weather-home",props:{size:null,widgetData:null,id:null},setup(t){const e=t,i={s:m,m:j,l:rt},{HomeComp:l,propsState:o}=(0,dt.C)(e,ht.value,i),d=(0,s.useWeatherStore)(),c=(0,a.iH)(),p=async()=>{var t,e,i,a;const l=null===(t=o.value)||void 0===t?void 0:t.id,n=(null==o||null===(e=o.value)||void 0===e||null===(i=e.widgetData)||void 0===i?void 0:i.cityId)??r.zI;await d.reqLocation(!0),await d.reqWeather(null===(a=d.getCity(n))||void 0===a?void 0:a.cid),c.value={cid:n,wid:l,weathers:d.getWeather(n),activeTempRange:d.getTempRange(n),activeCityLongName:d.getCityLongName(n)}};(0,n.bv)((()=>{p()})),(0,n.YP)((()=>o.value),(()=>p())),(0,n.bv)((async()=>{setInterval((()=>{var t,e,i;const a=null===(t=d.getCity(null==o||null===(e=o.value)||void 0===e||null===(i=e.widgetData)||void 0===i?void 0:i.cityId))||void 0===t?void 0:t.cid;d.reqWeather(a)}),3e5)}));const u=()=>{var t,i,a,l;d.setModal(!0,null===(t=o.value)||void 0===t?void 0:t.id);const n=(null==o||null===(i=o.value)||void 0===i||null===(a=i.widgetData)||void 0===a?void 0:a.cityId)??r.zI;d.setActive(n==(null===(l=d.locationCity)||void 0===l?void 0:l.cid)?r.zI:n,e.id),setTimeout((()=>{d.setSearchModal(!1)}),200)};return(t,i)=>((0,n.wg)(),(0,n.iD)("section",{class:"widget-weather-home h-full w-full cursor-pointer",onClick:u},[((0,n.wg)(),(0,n.j4)((0,n.LL)((0,a.SU)(l)),{id:e.id,state:c.value},null,8,["id","state"]))]))}});var pt=i(96755),ut=i(75008);const ht=(0,a.iH)(null),vt=(t,e)=>{const i=(0,l.createApp)(ct,e);return(0,ut.f)(i),ht.value=i,i.use(pt.M),i.mount(t),ht.value}},41259:(t,e,i)=>{i.r(e),i.d(e,{useWeatherStore:()=>h,widgetInfo:()=>u});var a=i(28850),l=i(10435),n=i(84138),s=i(73337),o=i(34906),r=i(94119),d=i(24581),c=i(12793);const p={cityId:n.zI},u=(0,d.E0)(d.Rm.timerMark),h=(0,l.Q_)(a.BU.weather,{syncStorage:{watch:["weathers","locationCity","addedCity","activeCityId"]},syncCloud:{watch:["addedCity","activeCityId"]},state:()=>({searchModalShow:!1,modalShow:!1,weathers:{},locationCity:{cid:"",name:"",adm1:"",adm2:"",expired:0},addedCity:[],activeCityId:n.zI,activeWidgetId:"",widgetData:p}),getters:{allCids(){return this.addedCity.map((t=>t.cid)).concat(this.locationCity.cid)},activeCid(){return this.activeCityId===n.zI?this.locationCity.cid:this.activeCityId},getCityWeather:t=>e=>t.weathers[e],activeCityWeather(){return this.getCityWeather(this.activeCid)},activeNow(){var t;return null===(t=this.activeCityWeather)||void 0===t?void 0:t.now},activeDay(){var t;return null===(t=this.activeCityWeather)||void 0===t?void 0:t.day},activeHour(){var t;return null===(t=this.activeCityWeather)||void 0===t?void 0:t.hour},activeTempRange(){var t,e;const i=null===(t=this.activeCityWeather)||void 0===t||null===(e=t.day)||void 0===e?void 0:e.list;if(i){const t=i[0].tempMin;return`${i[0].tempMax} ~ ${t}`}return""},activeCity(){return this.activeCityId===n.zI?this.locationCity:this.addedCity.find((t=>t.cid===this.activeCityId))},addedCityIds(){return this.addedCity.map((t=>t.cid))},activeCityLongName(){return this.activeCity?this.activeCity.adm2===this.activeCity.name?this.activeCity.name:this.activeCity.adm2+" · "+this.activeCity.name:""}},actions:{saveWidgetData(t,e){const i=(0,c.i)(),a=i.getIconData(t);i.saveIcon({...a,id:t,widgetData:e})},getCity(t){return t==n.zI?this.locationCity:this.addedCity.find((e=>e.cid===t))||this.locationCity},getCityLongName(t){const e=this.getCity(t);return e?e.adm2===e.name?e.name:e.adm2+" · "+e.name:""},getWeather(t){const e=this.getCity(t).cid;return this.getCityWeather(e)},getTempRange(t){var e,i;const a=null===(e=this.getWeather(t))||void 0===e||null===(i=e.day)||void 0===i?void 0:i.list;if(a){const t=a[0].tempMin;return`${a[0].tempMax} ~ ${t}`}return""},async setSearchModal(t){this.searchModalShow=t,t&&(await this.reqLocation(!1),this.reqAllWeather())},async setModal(t,e){e&&(this.activeWidgetId=e),r.G.setStatus(d.Rm.weather,t),t?this.reqAllWeather():this.searchModalShow=!1,this.modalShow=t},setActive(t,e){this.activeCityId=t,t&&(e||this.activeWidgetId)&&(this.widgetData={cityId:t},this.saveWidgetData(e||(e||this.activeWidgetId),this.widgetData))},async reqHourWeather(t){const[e,i]=await(0,s.Kn)(t);if(e)return;const a={list:i.hourly,expired:(0,o.Z)(i.expiredTime,Date.now()+12e4,Date.now()+36e5),updateTime:i.updateTime},l=i.hourly[0],r={updateTime:i.updateTime,type:(0,n.iE)(l.icon),temp:l.temp,icon:l.icon,text:l.text,windDir:l.windDir,windScale:l.windScale,windSpeed:l.windSpeed,humidity:l.humidity,precip:l.precip,pressure:l.pressure};this.weathers[t]={...this.weathers[t],hour:a,now:r},this.weathers={...this.weathers}},clearWeathers(){Object.keys(this.weathers).forEach((t=>{this.allCids.includes(t)||delete this.weathers[t]}))},async reqDayWeather(t){const[e,i]=await(0,s.nI)(t);if(e)return;const a={list:i.daily,expired:(0,o.Z)(i.expiredTime,Date.now()+12e4,Date.now()+288e5),updateTime:i.updateTime};this.weathers[t]={...this.weathers[t],day:a},this.weathers={...this.weathers}},async reqWeather(t){var e;t===n.zI&&(t=null===(e=this.getCity(t))||void 0===e?void 0:e.cid);if(!t)return;const i=this.getCityWeather(t),a=[];i?((!i.day||i.day.expired<Date.now())&&a.push(this.reqDayWeather(t)),(!i.hour||i.hour.expired<Date.now())&&a.push(this.reqHourWeather(t))):a.push(this.reqDayWeather(t),this.reqHourWeather(t)),await Promise.all(a)},async reqAllWeather(){await Promise.all([this.reqWeather(this.locationCity.cid),...this.addedCity.map((t=>this.reqWeather(t.cid)))])},async reqLocation(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(!e){if(this.locationCity.expired>Date.now())return;if(t&&this.locationCity.cid)return}const i=await(0,n.x4)(!!this.locationCity.cid);if(!i)return;const[a,l]=await(0,s.fN)(i);if(a||!l)return;this.locationCity={cid:l[0].id,name:l[0].name,adm1:l[0].adm1,adm2:l[0].adm2,expired:Date.now()+2e3}}catch(t){}},async addCity(t){const e=this.addedCity.findIndex((e=>e.cid===t.cid));e>-1&&this.addedCity.splice(e,1),this.addedCity.unshift(t),this.addedCity.length>4&&(this.addedCity.length=4),this.addedCity=[...this.addedCity],await this.reqAllWeather(),this.clearWeathers()},removeCity(t){const e=this.addedCity.findIndex((e=>e.cid===t));e>-1&&(this.addedCity.splice(e,1),this.addedCity=[...this.addedCity]),this.clearWeathers()}}})}}]);