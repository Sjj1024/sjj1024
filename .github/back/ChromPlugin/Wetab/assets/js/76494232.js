"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[7331,2421,102],{49194:(t,e,a)=>{a.r(e),a.d(e,{useTimerCountdownStore:()=>c,widgetInfo:()=>r});var i=a(10435),d=a(74003);const o={name:"",time:0,repeatType:"none",dateType:"solar",timerStyle:{fontColor:"rgba(248, 248, 248, 1)",bgType:"image",bgColor:(0,a(73186).zY)(),bgImageColor:"",bgImage:{large:`${d.c1}/widget-background/background08_larg.jpg`,medium:`${d.c1}/widget-background/background08_medium.jpg`,small:`${d.c1}/widget-background/background08_small.jpg`},bgMask:20}};var g=a(12793),s=a(24581),n=a(5588),l=a(62731),m=a(94119);const r=(0,s.E0)(s.Rm.timerCountdown),c=(0,i.Q_)("timer-countdown",{state:()=>({modalShow:!1,modalState:{size:"s",openType:"add"},widgetData:o}),actions:{getWidgetData(t){if("edit"===t.openType){const e=(0,g.i)().getIconData(t.editId);this.widgetData=e?{...e.widgetData}:{...l.VU}}else this.widgetData={...o}},openModal(t){this.getWidgetData(t),this.modalState=t,this.setModal(!0)},closeModal(){this.setModal(!1),n.r.cancel()},setModal(t){m.G.setStatus(s.Rm.timerCountdown,t),this.modalShow=t},saveModalData(t){this.widgetData={...this.widgetData,...t}},saveWidgetData(){const t=(0,g.i)();"add"===this.modalState.openType||"preview"===this.modalState.openType?t.saveIcon({type:"widget",name:r.title,widgetSize:this.modalState.size,widgetName:r.name,origin:"add",widgetData:this.widgetData}):"edit"===this.modalState.openType&&t.saveWidgetData(this.modalState.editId,this.widgetData)}}})}}]);