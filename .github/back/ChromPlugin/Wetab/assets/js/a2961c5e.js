"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[6014,2421,102,7331],{22854:(t,e,a)=>{a.d(e,{C:()=>i});var o=a(29445),l=a(57268);const i=(t,e,a)=>{const i=(0,o.iH)(t);e.onChangeState=t=>{i.value={...t}};const s=(0,l.Fl)((()=>a?a[i.value.size]:null));return{propsState:i,HomeComp:s}}},97520:(t,e,a)=>{a.d(e,{JD:()=>r,_k:()=>d,bV:()=>c});var o=a(80661),l=a.n(o),i=a(29445),s=a(57268),n=a(73186);const r=(t,e,a)=>{const o=(0,i.iH)(0);let r;const d=()=>{if(t)if("none"===a)o.value=l()(t).diff(l()().startOf("day"),"day");else if("week"===a){if(t>=l()().startOf("day").valueOf())return void(o.value=l()(t).diff(l()().startOf("day"),"day"));let e=l()(t).day()-l()().day();e<0&&(e+=7),o.value=e}else"month"===a?o.value=(0,n.dJ)(t,e):"year"===a&&(o.value=(0,n.hQ)(t,e));else o.value=0};(0,s.bv)((()=>{d(),r=(0,n.ST)(d)})),(0,s.Ah)((()=>{r&&(clearTimeout(r),r=void 0)}));return{diffDay:o,changeTimer:(o,l,i)=>{t=o,e=l,a=i,r&&(clearTimeout(r),r=void 0),d(),r=(0,n.ST)(d)}}},d=t=>{const e=(0,i.iH)(0);let a;const o=()=>{e.value=t?l()().diff(l()(t),"day"):0};(0,s.bv)((()=>{o(),a=(0,n.ST)(o)})),(0,s.Ah)((()=>{a&&(clearTimeout(a),a=void 0)}));return{diffDay:e,changeTimer:e=>{t=e,a&&(clearTimeout(a),a=void 0),o(),a=(0,n.ST)(o)}}},c=()=>{const t=(0,i.iH)({}),e=(0,i.iH)({}),a=(0,i.iH)({});let o,n=null;const r=()=>{o=window.setTimeout((()=>{r()}),1e3);const i=l()(),s=i.second();if(s===n)return;n=s;const d=i.hour()%12,c=i.minute();t.value={transform:`rotate(${30*d+Math.floor(c/2)}deg)`},e.value={transform:`rotate(${6*c}deg)`},a.value={transform:`rotate(${6*s}deg)`}};return(0,s.bv)((()=>{r()})),(0,s.Ah)((()=>{o&&(clearTimeout(o),o=void 0)})),{hourStyle:t,minStyle:e,secondStyle:a}}},90902:(t,e,a)=>{a.r(e),a.d(e,{mountHome:()=>f,widgetApp:()=>y});var o=a(29445),l=a(68398),i=a(96755),s=a(57268),n=a(49194),r=a(56546),d=a(83389),c=a(28696),g=a(22854),m=a(97520);const p=(0,s.aZ)({__name:"widget-countdown-home",props:{size:null,widgetData:null,id:null,targetType:null},setup(t){const e=t,a=(0,n.useTimerCountdownStore)(),l={s:r.Z,m:d.Z,l:c.Z},{HomeComp:i,propsState:p}=(0,g.C)(e,y.value,l),{diffDay:u,changeTimer:f}=(0,m.JD)(p.value.widgetData.time,p.value.widgetData.dateType||"solar",p.value.widgetData.repeatType||"year");(0,s.YP)((()=>({time:p.value.widgetData.time,dateType:p.value.widgetData.dateType,repeatType:p.value.widgetData.repeatType})),(t=>{f(t.time,t.dateType||"solar",t.repeatType||"year")}));const S=()=>{const t="preview-list"===p.value.targetType?"preview":"edit";a.openModal({size:p.value.size,openType:t,editId:p.value.id})};return(t,e)=>((0,s.wg)(),(0,s.iD)("section",{class:"contents cursor-pointer",onClick:S},[((0,s.wg)(),(0,s.j4)((0,s.LL)((0,o.SU)(i)),{state:(0,o.SU)(p).widgetData,"diff-day":(0,o.SU)(u)},null,8,["state","diff-day"]))]))}});var u=a(75008);const y=(0,o.iH)(null),f=(t,e)=>{const a=(0,l.createApp)(p,e);return(0,u.f)(a),y.value=a,a.use(i.M),a.mount(t),y.value}},49194:(t,e,a)=>{a.r(e),a.d(e,{useTimerCountdownStore:()=>m,widgetInfo:()=>g});var o=a(10435),l=a(74003);const i={name:"",time:0,repeatType:"none",dateType:"solar",timerStyle:{fontColor:"rgba(248, 248, 248, 1)",bgType:"image",bgColor:(0,a(73186).zY)(),bgImageColor:"",bgImage:{large:`${l.c1}/widget-background/background08_larg.jpg`,medium:`${l.c1}/widget-background/background08_medium.jpg`,small:`${l.c1}/widget-background/background08_small.jpg`},bgMask:20}};var s=a(12793),n=a(24581),r=a(5588),d=a(62731),c=a(94119);const g=(0,n.E0)(n.Rm.timerCountdown),m=(0,o.Q_)("timer-countdown",{state:()=>({modalShow:!1,modalState:{size:"s",openType:"add"},widgetData:i}),actions:{getWidgetData(t){if("edit"===t.openType){const e=(0,s.i)().getIconData(t.editId);this.widgetData=e?{...e.widgetData}:{...d.VU}}else this.widgetData={...i}},openModal(t){this.getWidgetData(t),this.modalState=t,this.setModal(!0)},closeModal(){this.setModal(!1),r.r.cancel()},setModal(t){c.G.setStatus(n.Rm.timerCountdown,t),this.modalShow=t},saveModalData(t){this.widgetData={...this.widgetData,...t}},saveWidgetData(){const t=(0,s.i)();"add"===this.modalState.openType||"preview"===this.modalState.openType?t.saveIcon({type:"widget",name:g.title,widgetSize:this.modalState.size,widgetName:g.name,origin:"add",widgetData:this.widgetData}):"edit"===this.modalState.openType&&t.saveWidgetData(this.modalState.editId,this.widgetData)}}})},28696:(t,e,a)=>{a.d(e,{Z:()=>b});var o=a(57268),l=a(94209),i=a(29445),s=a(63477),n=a(80661),r=a.n(n);const d={class:"content relative flex h-full flex-col justify-evenly leading-none"},c={class:"text-[12px] leading-[18px] opacity-80"},g={class:""},m={class:""},p={class:"text-[16px]"},u={class:"whitespace-nowrap"},y={class:"mx-[16px] font-ali-75 text-[64px]"},f={class:"whitespace-nowrap"},S={class:"text-right opacity-80"},b=(0,o.aZ)({__name:"countdown-home-large",props:{state:null,diffDay:null},setup(t){const e=t,a=(0,o.Fl)((()=>{const t=r()().startOf("day").add(e.diffDay,"day"),a=(0,s.dG)(t.valueOf(),!0,e.state.dateType);return{...e.state,formateDay:a}})),n=(0,o.Fl)((()=>"image"===e.state.timerStyle.bgType?{color:e.state.timerStyle.fontColor,backgroundColor:e.state.timerStyle.bgImageColor,backgroundImage:`url(${(0,s.Em)(e.state.timerStyle.bgImage.large,"default",532)})`}:{color:e.state.timerStyle.fontColor,backgroundColor:e.state.timerStyle.bgColor})),b=(0,o.Fl)((()=>"image"===e.state.timerStyle.bgType?{backgroundColor:`rgba(0, 0, 0, ${e.state.timerStyle.bgMask/100})`}:{}));return(t,s)=>((0,o.wg)(),(0,o.iD)("section",{class:"countdown-home-large relative h-full bg-cover bg-center bg-no-repeat px-[32px] transition-[background,color] icon-m:px-[28px] icon-s:px-[24px]",style:(0,l.normalizeStyle)((0,i.SU)(n))},[(0,o._)("div",{class:"mask absolute inset-0 transition-colors",style:(0,l.normalizeStyle)((0,i.SU)(b))},null,4),(0,o._)("div",d,[(0,o._)("div",c,[(0,o._)("h1",g,(0,l.toDisplayString)((0,i.SU)(a).name),1),(0,o._)("h2",m,(0,l.toDisplayString)("倒计时"),1)]),(0,o._)("div",p,[(0,o._)("span",u,(0,l.toDisplayString)("还有"),1),(0,o._)("span",y,(0,l.toDisplayString)(e.diffDay),1),(0,o._)("span",f,(0,l.toDisplayString)((e.diffDay,"天")),1)]),(0,o._)("div",S,(0,l.toDisplayString)((0,i.SU)(a).formateDay),1)])],4))}})},83389:(t,e,a)=>{a.d(e,{Z:()=>S});var o=a(57268),l=a(94209),i=a(29445),s=a(63477),n=a(80661),r=a.n(n);const d={class:"content relative flex h-full flex-col items-center justify-around text-[12px] leading-none"},c={class:"text-center leading-[18px] opacity-80"},g={class:""},m={class:""},p={class:"relative mb-[30px] text-[14px] icon-m:mb-[20px] icon-s:mb-[10px]"},u={class:"absolute bottom-[6px] left-[-6px] translate-x-[-100%] whitespace-nowrap"},y={class:"absolute bottom-[6px] right-[-6px] translate-x-[100%] whitespace-nowrap"},f={class:"opacity-80"},S=(0,o.aZ)({__name:"countdown-home-medium",props:{state:null,diffDay:null},setup(t){const e=t,a=(0,o.Fl)((()=>{const t=r()().startOf("day").add(e.diffDay,"day"),a=(0,s.dG)(t.valueOf(),!0,e.state.dateType);return{...e.state,formateDay:a}})),n=(0,o.Fl)((()=>"image"===e.state.timerStyle.bgType?{color:e.state.timerStyle.fontColor,backgroundColor:e.state.timerStyle.bgImageColor,backgroundImage:`url(${(0,s.Em)(e.state.timerStyle.bgImage.medium,"default",236)})`}:{color:e.state.timerStyle.fontColor,backgroundColor:e.state.timerStyle.bgColor})),S=(0,o.Fl)((()=>"image"===e.state.timerStyle.bgType?{backgroundColor:`rgba(0, 0, 0, ${e.state.timerStyle.bgMask/100})`}:{}));return(t,s)=>((0,o.wg)(),(0,o.iD)("section",{class:"countdown-home-medium relative h-full bg-cover bg-center bg-no-repeat transition-[background,color]",style:(0,l.normalizeStyle)((0,i.SU)(n))},[(0,o._)("div",{class:"mask absolute inset-0 transition-colors",style:(0,l.normalizeStyle)((0,i.SU)(S))},null,4),(0,o._)("div",d,[(0,o._)("div",c,[(0,o._)("h1",g,(0,l.toDisplayString)((0,i.SU)(a).name),1),(0,o._)("h2",m,(0,l.toDisplayString)("倒计时"),1)]),(0,o._)("div",p,[(0,o._)("span",u,(0,l.toDisplayString)("还有"),1),(0,o._)("span",{class:(0,l.normalizeClass)([[e.diffDay>1e4?"icon-m:text-[40px] icon-s:text-[34px] ":e.diffDay>1e3?"icon-s:text-[40px]":""],"font-ali-75 text-[48px]"])},(0,l.toDisplayString)(e.diffDay),3),(0,o._)("span",y,(0,l.toDisplayString)((e.diffDay,"天")),1)]),(0,o._)("div",f,(0,l.toDisplayString)((0,i.SU)(a).formateDay),1)])],4))}})},56546:(t,e,a)=>{a.d(e,{Z:()=>f});var o=a(57268),l=a(94209),i=a(29445),s=a(63477),n=a(80661),r=a.n(n);const d={class:"content relative flex h-full flex-col items-center justify-evenly text-[12px] leading-none"},c={class:"opacity-80"},g={class:"relative mt-[4px] icon-m:mt-[2px] icon-s:mt-0"},m={class:"absolute bottom-[2px] left-[-6px] translate-x-[-100%] whitespace-nowrap opacity-80"},p={class:"font-ali-75 text-[20px]"},u={class:"absolute bottom-[2px] right-[-6px] translate-x-[100%] whitespace-nowrap opacity-80"},y={class:"opacity-80"},f=(0,o.aZ)({__name:"countdown-home-small",props:{state:null,diffDay:null},setup(t){const e=t,a=(0,o.Fl)((()=>{const t=r()().startOf("day").add(e.diffDay,"day"),a=(0,s.dG)(t.valueOf(),!0,e.state.dateType);return{...e.state,formateDay:a}})),n=(0,o.Fl)((()=>"image"===e.state.timerStyle.bgType?{color:e.state.timerStyle.fontColor,backgroundColor:e.state.timerStyle.bgImageColor,backgroundImage:`url(${(0,s.Em)(e.state.timerStyle.bgImage.small,"default",236)})`}:{color:e.state.timerStyle.fontColor,backgroundColor:e.state.timerStyle.bgColor})),f=(0,o.Fl)((()=>"image"===e.state.timerStyle.bgType?{backgroundColor:`rgba(0, 0, 0, ${e.state.timerStyle.bgMask/100})`}:{}));return(t,s)=>((0,o.wg)(),(0,o.iD)("section",{class:"countdown-home-small relative h-full bg-cover bg-center bg-no-repeat transition-[background,color]",style:(0,l.normalizeStyle)((0,i.SU)(n))},[(0,o._)("div",{class:"mask absolute inset-0 transition-colors",style:(0,l.normalizeStyle)((0,i.SU)(f))},null,4),(0,o._)("div",d,[(0,o._)("h1",c,(0,l.toDisplayString)((0,i.SU)(a).name),1),(0,o._)("div",g,[(0,o._)("span",m,(0,l.toDisplayString)("还有"),1),(0,o._)("span",p,(0,l.toDisplayString)(e.diffDay),1),(0,o._)("span",u,(0,l.toDisplayString)((e.diffDay,"天")),1)]),(0,o._)("div",y,(0,l.toDisplayString)((0,i.SU)(a).formateDay),1)])],4))}})}}]);