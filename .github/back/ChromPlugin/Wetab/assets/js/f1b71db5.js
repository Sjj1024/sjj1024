"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[8805,1259],{73337:(t,e,i)=>{i.d(e,{Kn:()=>u,fN:()=>r,k$:()=>p,nI:()=>h});var a=i(74003),l=i(63477),o=i(80661),s=i.n(o),n=i(88287);const r=async t=>{try{const e=await n.hj.get(`${a.H}weather/city`,{location:t,lang:a.sM?"zh":"en"},{_delay:200,_single:!0});if(0===e.code&&e.data.list.length>0)return[null,e.data.list.map((t=>({...t,cid:t.id})))];throw e}catch(t){return["catch error"]}},c=t=>(t.updateTime=s()(t.updateTime).valueOf(),t.daily=t.daily.map((t=>{const e=(0,l.sG)(t.fxDate);return{...t,fxDateStr:a.sM?e.format("M月D ddd"):e.format("MMM D, ddd"),dateStr:e.format("ddd"),weekStr:a.sM?e.format("D日"):e.format("D"),tempMax:t.tempMax+"°",tempMin:t.tempMin+"°"}})),t),d=t=>(t.updateTime=s()(t.updateTime).valueOf(),t.hourly=t.hourly.map((t=>({...t,fxTimeStr:s()(t.fxTime).format("HH:mm"),temp:t.temp+"°",windScale:a.sM?t.windScale+"级":"级"+t.windScale,windSpeed:t.windSpeed+"km/h",humidity:t.humidity+"%",precip:t.precip+"mm"}))),t),h=async t=>{try{const e=await n.hj.get(`${a.H}weather/daily`,{location:t,lang:a.sM?"zh":"en"},{_delay:0});if(0===e.code)return[null,c(e.data)];throw e}catch(t){return["catch error"]}},u=async t=>{try{const e=await n.hj.get(`${a.H}weather/hourly`,{location:t,lang:a.sM?"zh":"en"},{_delay:0});if(0===e.code)return[null,d(e.data)];throw e}catch(t){return["catch error"]}},p=async()=>{try{const t=await n.hj.get(`${a.H}weather/location`,{},{_delay:0});if(0===t.code)return[null,t.data];throw t}catch(t){return["catch error"]}}},84138:(t,e,i)=>{i.d(e,{i7:()=>h,iE:()=>n,m_:()=>r,x4:()=>d,zI:()=>o});var a=i(74003),l=i(73337);const o="location",s={sunny:[[100],[150]],cloudy:[[101,104],[151,154]],rain:[[300,399]],snow:[[400,499]],haze:[[500,515]]};function n(t){const e=Number(t);let i="cloudy";for(const t in s){if(s[t].some((a=>{if(1===a.length){if(e===a[0])return i=t,!0}else if(2===a.length&&e>=a[0]&&e<=a[0])return i=t,!0})))break}return i}const r=t=>`${a.c1}/weather-icon/${t}.png`,c=a.sM?"116.40528,39.90498":"-73.96900,40.77899";function d(t){return new Promise((e=>{let i=!1;const a=t=>{i=!0,e(t)};setTimeout((()=>{i||(0,l.k$)().then((e=>{let[i,l]=e;a(null===i?l:t?"":c)}))}),0),setTimeout((()=>{a(t?"":c)}),5e3)}))}const h=(t,e)=>`weather-bg-${e||"cloudy"}-${t}`},28805:(t,e,i)=>{i.r(e);i(57334);var a=i(66155),l=i(68398),o=i(79282),s=i(43451),n=i(57268),r=i(29445),c=i(41259),d=i(94209),h=i(80661),u=i.n(h),p=i(55943),v=i(61045),m=i(10435),y=i(84138),x=i(1585);const w={class:"weather-modal-main hi-scroll h-full w-full overflow-x-hidden leading-none"},f={class:"content relative pt-[20px]"},g={class:"update-time relative h-[14px] text-center font-ali-55 text-color-t3"},S={class:"now relative my-[60px] flex h-[72px] justify-between pl-[56px]"},C={class:"flex items-center"},_={class:"temp-text mr-[48px] font-ali-75 text-[72px] text-color-t1"},D={class:"flex h-full flex-col justify-between pt-[4px] pb-[12px]"},b={class:"flex items-center whitespace-nowrap text-color-t2"},U={class:"mr-[12px]"},W={class:"mr-[24px]"},k=["src"],I={class:"weather-info font-ali-55 text-color-t3"},M={class:"mr-[24px]"},H={class:"mr-[24px]"},T={class:"mr-[24px]"},z={key:0,class:"mr-[24px]"},q={key:1,class:"mr-[24px]"},Z={class:"text-[16px] text-color-t1"},$=(t=>((0,n.dD)("data-v-1ad7690e"),t=t(),(0,n.Cn)(),t))((()=>(0,n._)("div",{class:"search-icon ml-[16px] flex h-[20px] w-[20px] items-center justify-center rounded-[6px] bg-color-white dark:bg-opacity-20"},[(0,n._)("i",{class:"iconfont icon-toggle_icon text-[12px] text-color-t2"})],-1))),j={class:"hour relative"},Y={class:"ml-[56px] text-color-t2"},A={class:"inline-flex h-[160px] flex-nowrap items-center px-[36px] font-ali-55 text-color-t3"},F=["src"],K={class:"mt-[20px]"},L={class:"mt-[12px]"},N={class:"day mt-[40px]"},P={class:"ml-[56px] text-color-t2"},B={class:"seven-list hide-scroll flex h-[160px] items-center justify-between overflow-x-scroll px-[36px] font-ali-55 text-color-t3"},R=["src"],O={class:"mt-[20px]"},E={class:"mt-[12px]"},V=(0,n.aZ)({__name:"weather-modal-main",setup(t){p.ZP.use(v.Z);const e=(0,r.iH)(),i=(0,r.iH)(u()().format("YYYY-MM-DD HH:mm:ss")),a=(0,c.useWeatherStore)(),{activeNow:l,activeDay:o,activeHour:s,activeTempRange:h,activeCityLongName:V}=(0,m.Jk)(a);let G,J;return(0,n.bv)((()=>{G=new p.ZP(e.value,{...x.IO,scrollX:!0,scrollY:!1,mouseWheel:!0,bounce:!1,momentum:!1}),window.setInterval((()=>{i.value=u()().format("YYYY-MM-DD HH:mm:ss")}),1e3)})),(0,n.Ah)((()=>{J&&(clearInterval(J),J=void 0)})),(0,n.YP)((()=>{var t,e;return null===(t=s.value)||void 0===t||null===(e=t.list)||void 0===e?void 0:e.length}),(()=>{(0,n.Y3)((()=>{var t;null===(t=G)||void 0===t||t.refresh()}))})),(t,c)=>{var u,p,v,m,x,G,J,Q,X,tt,et,it,at;return(0,n.wg)(),(0,n.iD)("section",w,[(0,n._)("div",f,[(0,n._)("div",{class:(0,d.normalizeClass)([[(0,r.SU)(y.i7)("modal",null===(u=(0,r.SU)(l))||void 0===u?void 0:u.type)],"absolute top-0 left-0 right-0 h-[260px] transition-[background]"])},null,2),(0,n._)("div",g,(0,d.toDisplayString)(i.value),1),(0,n._)("div",S,[(0,n._)("div",C,[(0,n._)("div",_,(0,d.toDisplayString)(null===(p=(0,r.SU)(l))||void 0===p?void 0:p.temp),1),(0,n._)("div",D,[(0,n._)("div",b,[(0,n._)("span",U,(0,d.toDisplayString)(null===(v=(0,r.SU)(l))||void 0===v?void 0:v.text),1),(0,n._)("span",W,(0,d.toDisplayString)((0,r.SU)(h)),1),(0,n._)("img",{class:"h-[32px] w-[32px]",src:(0,r.SU)(y.m_)(null===(m=(0,r.SU)(l))||void 0===m?void 0:m.icon)},null,8,k)]),(0,n._)("div",I,[(0,n._)("span",M,(0,d.toDisplayString)((null===(x=(0,r.SU)(l))||void 0===x?void 0:x.windDir)+"："+(null===(G=(0,r.SU)(l))||void 0===G?void 0:G.windScale)),1),(0,n._)("span",H,(0,d.toDisplayString)("风速："+(null===(J=(0,r.SU)(l))||void 0===J?void 0:J.windSpeed)),1),(0,n._)("span",T,(0,d.toDisplayString)("相对湿度："+(null===(Q=(0,r.SU)(l))||void 0===Q?void 0:Q.humidity)),1),"rain"===(null===(X=(0,r.SU)(l))||void 0===X?void 0:X.type)?((0,n.wg)(),(0,n.iD)("span",z,(0,d.toDisplayString)("当前降水量："+(null===(tt=(0,r.SU)(l))||void 0===tt?void 0:tt.precip)),1)):((0,n.wg)(),(0,n.iD)("span",q,(0,d.toDisplayString)("大气压强："+(null===(et=(0,r.SU)(l))||void 0===et?void 0:et.pressure)+"hPa"),1))])])]),(0,n._)("div",{class:"change-area absolute right-0 mr-[56px] flex h-[20px] cursor-pointer items-center",onClick:c[0]||(c[0]=t=>(0,r.SU)(a).setSearchModal(!0))},[(0,n._)("div",Z,(0,d.toDisplayString)((0,r.SU)(V)),1),$])]),(0,n._)("div",j,[(0,n._)("h1",Y,(0,d.toDisplayString)("24小时预报"),1),(0,n._)("div",{ref_key:"wrapperRef",ref:e,"overflow-hidden":"",class:"box"},[(0,n._)("div",A,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(null===(it=(0,r.SU)(s))||void 0===it?void 0:it.list,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.fxTime,class:"flex min-w-[78px] flex-shrink-0 flex-col items-center rounded-[12px] px-[20px] py-[20px] hover:bg-color-m2 hover:bg-opacity-[0.06]"},[(0,n._)("img",{class:"h-[32px] w-[32px]",src:(0,r.SU)(y.m_)(t.icon)},null,8,F),(0,n._)("span",K,(0,d.toDisplayString)(t.temp),1),(0,n._)("span",L,(0,d.toDisplayString)(t.fxTimeStr),1)])))),128))])],512)]),(0,n._)("div",N,[(0,n._)("h1",P,(0,d.toDisplayString)("未来7天预报"),1),(0,n._)("div",B,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(null===(at=(0,r.SU)(o))||void 0===at?void 0:at.list,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.fxDate,class:"flex shrink-0 flex-col items-center rounded-[12px] px-[20px] py-[20px] hover:bg-color-m2 hover:bg-opacity-[0.06]"},[(0,n._)("img",{class:"h-[32px] w-[32px]",src:(0,r.SU)(y.m_)(t.iconDay)},null,8,R),(0,n._)("span",O,(0,d.toDisplayString)(`${t.tempMax} ~ ${t.tempMin}`),1),(0,n._)("span",E,(0,d.toDisplayString)(t.fxDateStr),1)])))),128))])])])])}}});const G=(0,i(76911).Z)(V,[["__scopeId","data-v-1ad7690e"]]);var J=i(34679),Q=i(88265),X=i(73337);var tt=i(17530);const et={key:0,class:"iconfont icon-position_icon absolute top-[-4px] left-[-4px] text-[20px] text-color-t2"},it={class:"flex max-w-[210px] flex-col justify-between text-color-t2"},at={class:"flex items-center"},lt={class:"text-dot"},ot=["src"],st={class:"font-ali-55 text-[12px]"},nt={class:"mr-[4px]"},rt={class:"flex items-center text-color-t1"},ct={class:"ml-[12px] text-[28px]"},dt=(0,n.aZ)({__name:"weather-modal-card",props:{city:null,location:{type:Boolean,default:!1}},setup(t){const e=t,i=(0,c.useWeatherStore)(),a=(0,n.Fl)((()=>i.getCityWeather(e.city.cid))),l=(0,n.Fl)((()=>{var t;return null===(t=a.value)||void 0===t?void 0:t.now})),o=(0,n.Fl)((()=>{var t;return null===(t=a.value)||void 0===t?void 0:t.day})),s=(0,n.Fl)((()=>{var t;if(null!==(t=o.value)&&void 0!==t&&t.list[0]){var e,i;const t=null===(e=o.value)||void 0===e?void 0:e.list[0].tempMin;return`${null===(i=o.value)||void 0===i?void 0:i.list[0].tempMax} ~ ${t}`}return""})),h=(0,n.Fl)((()=>e.city.adm2===e.city.name?e.city.name:e.city.adm2+" · "+e.city.name)),u=(0,r.iH)(!1),p=(0,n.Fl)((()=>({remove:{text:"删除",handler(){i.removeCity(e.city.cid)}}}))),v=(0,n.Fl)((()=>e.location&&i.activeCityId===y.zI||!e.location&&i.activeCityId===e.city.cid)),m=()=>{u.value||v.value||(i.setActive(e.location?y.zI:e.city.cid),setTimeout((()=>{i.setSearchModal(!1)}),200))};return(t,i)=>{var a,o,c,x;const w=tt.Z;return(0,n.wg)(),(0,n.iD)("section",{class:(0,d.normalizeClass)([[(0,r.SU)(y.i7)("card",null===(a=(0,r.SU)(l))||void 0===a?void 0:a.type),{"cursor-pointer":!(0,r.SU)(v)}],"weather-modal-card group relative mb-[12px] flex h-[80px] justify-between rounded-[8px] px-[20px] pt-[18px] pb-[20px]"]),onClick:m},[(0,r.SU)(v)?((0,n.wg)(),(0,n.iD)("i",et)):(0,n.kq)("",!0),(0,n._)("div",it,[(0,n._)("div",at,[(0,n._)("span",lt,(0,d.toDisplayString)((0,r.SU)(h)+(e.location?"（我的位置）":"")),1),(0,n._)("img",{class:"ml-[8px] h-[20px] w-[20px]",src:(0,r.SU)(y.m_)(null===(o=(0,r.SU)(l))||void 0===o?void 0:o.icon)},null,8,ot)]),(0,n._)("div",st,[(0,n._)("span",nt,(0,d.toDisplayString)(null===(c=(0,r.SU)(l))||void 0===c?void 0:c.text),1),(0,n._)("span",null,(0,d.toDisplayString)((0,r.SU)(s)),1)])]),(0,n._)("div",rt,[e.location||(0,r.SU)(v)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(w,{key:0,show:u.value,"onUpdate:show":i[0]||(i[0]=t=>u.value=t),class:"",options:(0,r.SU)(p)},{reference:(0,n.w5)((()=>[(0,n._)("button",{class:(0,d.normalizeClass)(u.value?"block":"hidden group-hover:block")},[(0,n._)("i",{class:(0,d.normalizeClass)([[u.value?"text-opacity-80":"text-opacity-60 hover:text-opacity-80"],"iconfont icon-single_hover_icon text-[20px] text-color-t1"])},null,2)],2)])),_:1},8,["show","options"])),(0,n._)("div",ct,(0,d.toDisplayString)(null===(x=(0,r.SU)(l))||void 0===x?void 0:x.temp),1)])],2)}}}),ht=dt,ut={key:0,class:"loading absolute inset-0 flex items-center justify-center"},pt=[(0,n._)("i",{class:"iconfont icon-loading_small animate-[spin_1.2s_linear_infinite] text-[40px] text-color-m2 text-opacity-20"},null,-1)],vt={key:1,class:"content relative mx-auto mt-[60px] w-[352px]"},mt={class:"citys mt-[33px]"},yt=["onClick"],xt={class:"text-color-t2"},wt=(0,n.aZ)({__name:"weather-modal-search",setup(t){const e=(0,r.iH)(!1),i=(0,c.useWeatherStore)(),{searchValue:a,updateSearchValue:l,searchListShow:s,cityList:h}=(()=>{const t=(0,r.iH)(""),e=(0,r.iH)([]),i=(0,n.Fl)((()=>!!t.value));return{searchValue:t,searchListShow:i,cityList:e,updateSearchValue:async i=>{if(t.value=i,i){const[t,a]=await(0,X.fN)(i);if(t||!a)return void(e.value=[]);e.value=a}else setTimeout((()=>{e.value=[]}),0)}}})(),u=()=>{e.value||(i.setSearchModal(!1),l(""))};return(t,c)=>{const p=Q.Z,v=J.Z,m=o.Z;return(0,n.wg)(),(0,n.j4)(m,{class:"absolute inset-0",ani:"fade",show:(0,r.SU)(i).searchModalShow},{default:(0,n.w5)((()=>[(0,n._)("div",{class:"mask absolute inset-0 bg-color-b3 bg-opacity-95",onClick:u}),e.value?((0,n.wg)(),(0,n.iD)("div",ut,pt)):((0,n.wg)(),(0,n.iD)("div",vt,[(0,n.Wm)(p,{value:(0,r.SU)(a),icon:"icon-magnifier_icon  !text-color-t2",placeholder:"搜索",class:"","onUpdate:value":(0,r.SU)(l)},null,8,["value","placeholder","onUpdate:value"]),(0,n._)("div",mt,[(0,n.Wm)(m,{show:(0,r.SU)(s)},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,r.SU)(h),(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.cid,class:"mb-[12px] flex h-[36px] cursor-pointer items-center justify-between rounded-[8px] px-[12px] transition-colors hover:bg-color-m2 hover:bg-opacity-[0.08]",onClick:a=>(async t=>{e.value=!0;try{await i.addCity(t)}catch(t){}e.value=!1,i.setActive(t.cid),i.setSearchModal(!1),l("")})(t)},[(0,n._)("div",xt,(0,d.toDisplayString)((t.name===t.adm2?"":`${t.adm2}-`)+t.name),1)],8,yt)))),128)),(0,r.SU)(s)&&0===(0,r.SU)(h).length?((0,n.wg)(),(0,n.j4)(v,{key:0,class:"mt-[80px]",icon:"icon-fail_icon",desc:"暂无搜索结果"},null,8,["desc"])):(0,n.kq)("",!0)])),_:1},8,["show"]),(0,n.Wm)(m,{show:!(0,r.SU)(s)},{default:(0,n.w5)((()=>[(0,n.Wm)(ht,{location:!0,city:(0,r.SU)(i).locationCity},null,8,["city"]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,r.SU)(i).addedCity,(t=>((0,n.wg)(),(0,n.j4)(ht,{key:t.cid,location:!1,city:t},null,8,["city"])))),128))])),_:1},8,["show"])])]))])),_:1},8,["show"])}}}),ft={class:"h-full w-full bg-color-b3"},gt=(0,n.aZ)({__name:"widget-weather-modal",setup(t){const e=(0,c.useWeatherStore)();return(0,n.YP)((()=>e.activeCid),(()=>{e.reqWeather(e.activeCid)})),(t,i)=>{const a=s.Z,l=o.Z;return(0,n.wg)(),(0,n.j4)(l,{class:"widget-weather-modal",ani:"fade",show:(0,r.SU)(e).modalShow},{default:(0,n.w5)((()=>[(0,n.Wm)(a,{"full-screen-btn":!1,onOnClose:i[0]||(i[0]=t=>(0,r.SU)(e).setModal(!1))},{default:(0,n.w5)((()=>[(0,n._)("div",ft,[(0,n.Wm)(G),(0,n.Wm)(wt)])])),_:1})])),_:1},8,["show"])}}});var St=i(96755),Ct=i(75008),_t=i(63477);(()=>{const t=(0,_t.em)(),e=(0,l.createApp)(gt);(0,Ct.f)(e),e.use(St.M),e.use(a.Z),e.mount(t)})()},41259:(t,e,i)=>{i.r(e),i.d(e,{useWeatherStore:()=>p,widgetInfo:()=>u});var a=i(28850),l=i(10435),o=i(84138),s=i(73337),n=i(34906),r=i(94119),c=i(24581),d=i(12793);const h={cityId:o.zI},u=(0,c.E0)(c.Rm.timerMark),p=(0,l.Q_)(a.BU.weather,{syncStorage:{watch:["weathers","locationCity","addedCity","activeCityId"]},syncCloud:{watch:["addedCity","activeCityId"]},state:()=>({searchModalShow:!1,modalShow:!1,weathers:{},locationCity:{cid:"",name:"",adm1:"",adm2:"",expired:0},addedCity:[],activeCityId:o.zI,activeWidgetId:"",widgetData:h}),getters:{allCids(){return this.addedCity.map((t=>t.cid)).concat(this.locationCity.cid)},activeCid(){return this.activeCityId===o.zI?this.locationCity.cid:this.activeCityId},getCityWeather:t=>e=>t.weathers[e],activeCityWeather(){return this.getCityWeather(this.activeCid)},activeNow(){var t;return null===(t=this.activeCityWeather)||void 0===t?void 0:t.now},activeDay(){var t;return null===(t=this.activeCityWeather)||void 0===t?void 0:t.day},activeHour(){var t;return null===(t=this.activeCityWeather)||void 0===t?void 0:t.hour},activeTempRange(){var t,e;const i=null===(t=this.activeCityWeather)||void 0===t||null===(e=t.day)||void 0===e?void 0:e.list;if(i){const t=i[0].tempMin;return`${i[0].tempMax} ~ ${t}`}return""},activeCity(){return this.activeCityId===o.zI?this.locationCity:this.addedCity.find((t=>t.cid===this.activeCityId))},addedCityIds(){return this.addedCity.map((t=>t.cid))},activeCityLongName(){return this.activeCity?this.activeCity.adm2===this.activeCity.name?this.activeCity.name:this.activeCity.adm2+" · "+this.activeCity.name:""}},actions:{saveWidgetData(t,e){const i=(0,d.i)(),a=i.getIconData(t);i.saveIcon({...a,id:t,widgetData:e})},getCity(t){return t==o.zI?this.locationCity:this.addedCity.find((e=>e.cid===t))||this.locationCity},getCityLongName(t){const e=this.getCity(t);return e?e.adm2===e.name?e.name:e.adm2+" · "+e.name:""},getWeather(t){const e=this.getCity(t).cid;return this.getCityWeather(e)},getTempRange(t){var e,i;const a=null===(e=this.getWeather(t))||void 0===e||null===(i=e.day)||void 0===i?void 0:i.list;if(a){const t=a[0].tempMin;return`${a[0].tempMax} ~ ${t}`}return""},async setSearchModal(t){this.searchModalShow=t,t&&(await this.reqLocation(!1),this.reqAllWeather())},async setModal(t,e){e&&(this.activeWidgetId=e),r.G.setStatus(c.Rm.weather,t),t?this.reqAllWeather():this.searchModalShow=!1,this.modalShow=t},setActive(t,e){this.activeCityId=t,t&&(e||this.activeWidgetId)&&(this.widgetData={cityId:t},this.saveWidgetData(e||(e||this.activeWidgetId),this.widgetData))},async reqHourWeather(t){const[e,i]=await(0,s.Kn)(t);if(e)return;const a={list:i.hourly,expired:(0,n.Z)(i.expiredTime,Date.now()+12e4,Date.now()+36e5),updateTime:i.updateTime},l=i.hourly[0],r={updateTime:i.updateTime,type:(0,o.iE)(l.icon),temp:l.temp,icon:l.icon,text:l.text,windDir:l.windDir,windScale:l.windScale,windSpeed:l.windSpeed,humidity:l.humidity,precip:l.precip,pressure:l.pressure};this.weathers[t]={...this.weathers[t],hour:a,now:r},this.weathers={...this.weathers}},clearWeathers(){Object.keys(this.weathers).forEach((t=>{this.allCids.includes(t)||delete this.weathers[t]}))},async reqDayWeather(t){const[e,i]=await(0,s.nI)(t);if(e)return;const a={list:i.daily,expired:(0,n.Z)(i.expiredTime,Date.now()+12e4,Date.now()+288e5),updateTime:i.updateTime};this.weathers[t]={...this.weathers[t],day:a},this.weathers={...this.weathers}},async reqWeather(t){var e;t===o.zI&&(t=null===(e=this.getCity(t))||void 0===e?void 0:e.cid);if(!t)return;const i=this.getCityWeather(t),a=[];i?((!i.day||i.day.expired<Date.now())&&a.push(this.reqDayWeather(t)),(!i.hour||i.hour.expired<Date.now())&&a.push(this.reqHourWeather(t))):a.push(this.reqDayWeather(t),this.reqHourWeather(t)),await Promise.all(a)},async reqAllWeather(){await Promise.all([this.reqWeather(this.locationCity.cid),...this.addedCity.map((t=>this.reqWeather(t.cid)))])},async reqLocation(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{if(!e){if(this.locationCity.expired>Date.now())return;if(t&&this.locationCity.cid)return}const i=await(0,o.x4)(!!this.locationCity.cid);if(!i)return;const[a,l]=await(0,s.fN)(i);if(a||!l)return;this.locationCity={cid:l[0].id,name:l[0].name,adm1:l[0].adm1,adm2:l[0].adm2,expired:Date.now()+2e3}}catch(t){}},async addCity(t){const e=this.addedCity.findIndex((e=>e.cid===t.cid));e>-1&&this.addedCity.splice(e,1),this.addedCity.unshift(t),this.addedCity.length>4&&(this.addedCity.length=4),this.addedCity=[...this.addedCity],await this.reqAllWeather(),this.clearWeathers()},removeCity(t){const e=this.addedCity.findIndex((e=>e.cid===t));e>-1&&(this.addedCity.splice(e,1),this.addedCity=[...this.addedCity]),this.clearWeathers()}}})},57185:(t,e,i)=>{i.d(e,{Z:()=>s});var a=i(57268),l=i(94209);const o=["onClick"],s=(0,a.aZ)({__name:"hi-popover-menu",props:{options:null,hideBoxClass:{type:Boolean}},emits:["update:value","menu-click"],setup(t,e){let{emit:i}=e;const s=t;return(t,e)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,l.normalizeClass)(s.hideBoxClass?"":"hi-select-menu overflow-hidden rounded-[8px] bg-color-b5 p-[4px] shadow-popover")},[(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.options,((t,e)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e},[t?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:(0,l.normalizeClass)(["h-[32px] w-full cursor-pointer rounded-[4px] px-[16px] text-left text-[14px] text-color-t2 hover:bg-color-m2 hover:bg-opacity-[0.06] hover:text-color-t1 not-last:mb-[4px]",{[`text-color-${t.color}`]:t.color}]),onClick:t=>{return i("update:value",a=e),i("menu-click"),void(null===(l=(o=s.options[a]).handler)||void 0===l||l.call(o));var a,l,o}},(0,l.toDisplayString)(t.text),11,o)):(0,a.kq)("",!0)],64)))),128))])],2))}})},17530:(t,e,i)=>{i.d(e,{Z:()=>c});var a=i(57185),l=i(57268),o=i(29445),s=i(94209),n=i(73446),r=i(92620);const c=(0,l.aZ)({__name:"hi-popover",props:{show:{type:Boolean},value:{default:""},options:{default:void 0},showArrow:{type:Boolean,default:!1},placement:{default:"bottom-end"},menuClass:{default:""},onlyTheme:{default:void 0}},emits:["update:show","update:value"],setup(t,e){let{emit:i}=e;const c=t,d=(0,l.Fl)({get:()=>c.show,set(t){i("update:show",t)}}),h=(0,l.Fl)({get:()=>c.value,set(t){i("update:value",t)}}),u=(0,o.iH)(0),p=(0,o.iH)(0);return(0,l.YP)(d,(t=>{t&&(p.value=(0,n.K)(),u.value=(0,n.K)())})),(e,i)=>{const n=a.Z,v=(0,l.up)("van-popover");return(0,l.wg)(),(0,l.j4)(v,{show:(0,o.SU)(d),"onUpdate:show":i[2]||(i[2]=t=>(0,o.dq)(d)?d.value=t:null),placement:t.placement,"show-arrow":t.showArrow,style:(0,s.normalizeStyle)({zIndex:u.value,...t.onlyTheme?(0,o.SU)(r.gh)(t.onlyTheme):null}),overlay:"","overlay-class":"!bg-[transparent]","overlay-style":{zIndex:p.value}},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default",{},(()=>[(0,l.Wm)(n,{value:(0,o.SU)(h),"onUpdate:value":i[0]||(i[0]=t=>(0,o.dq)(h)?h.value=t:null),options:c.options,class:(0,s.normalizeClass)(c.menuClass),onMenuClick:i[1]||(i[1]=t=>d.value=!1)},null,8,["value","options","class"])]))])),reference:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"reference")])),_:3},8,["show","placement","show-arrow","style","overlay-style"])}}})}}]);