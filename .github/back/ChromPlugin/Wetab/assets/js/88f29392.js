"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[6201],{73186:(e,t,a)=>{a.d(t,{O9:()=>l,ST:()=>y,XM:()=>v,dJ:()=>O,f8:()=>M,hQ:()=>D,o7:()=>T,t4:()=>b,zY:()=>c});var i=a(994),r=a(80661),s=a.n(r),n=a(74003),o=a(63477),d=a(55332),g=a(27542);const l={font:["rgba(248, 248, 248, 1)","rgba(28, 28, 30, 1)","rgba(58, 58, 60, 1)","rgba(95, 95, 99, 1)","rgba(142, 142, 147, 1)","rgba(176, 176, 182, 1)","rgba(199, 199, 204, 1)"],background:["rgba(248, 248, 248, 1)","rgba(58, 58, 60, 1)","rgba(28, 28, 30, 1)","rgba(244, 171, 18, 1)","rgba(74, 197, 92, 1)","rgba(35, 207, 168, 1)","rgba(67, 133, 241, 1)","rgba(56, 100, 255, 1)","rgba(118, 33, 249, 1)","rgba(224, 78, 150, 1)","rgba(224, 78, 78, 1)","rgba(253, 90, 90, 1)","rgba(183, 163, 150, 1)","rgba(171, 131, 131, 1)","rgba(182, 150, 135, 1)","rgba(109, 131, 95, 1)","rgba(125, 171, 136, 1)","rgba(158, 172, 175, 1)","rgba(103, 124, 170, 1)"]},h=["rgba(183, 163, 150, 1)","rgba(171, 131, 131, 1)","rgba(182, 150, 135, 1)","rgba(109, 131, 95, 1)","rgba(125, 171, 136, 1)","rgba(158, 172, 175, 1)","rgba(103, 124, 170, 1)"],c=()=>(0,i.Z)(h),b=Array(20).fill(0).map(((e,t)=>{const a=`${t+1}`.padStart(2,"0");return{bgImage:{large:`${n.c1}/widget-background/background${a}_larg.jpg`,medium:`${n.c1}/widget-background/background${a}_medium.jpg`,small:`${n.c1}/widget-background/background${a}_small.jpg`},thumbnail:`${n.c1}/widget-background/background${a}.jpg`}})),u=(e,t)=>{let a=!1;e.isLeapYear()&&1===e.month()&&29===e.date()&&(a=!0);let i=(0,o.sG)(e.format(`${t}-MM-DD`));return a&&!i.isLeapYear()&&(i=i.add(-1,"day")),i.valueOf()>=p.valueOf()||(i=(0,o.sG)(e.format(`${t+1}-MM-DD`)),a&&!i.isLeapYear()&&(i=i.add(-1,"day"))),i},m=e=>{const t=d.q7.fromDate(new Date(e)),a=d.q7.fromDate(new Date).getYear(),i=s()((0,o.EJ)({year:a,month:t.getMonth(),day:t.getDay()}));return i.valueOf()>=p.valueOf()?i:s()((0,o.EJ)({year:a+1,month:t.getMonth(),day:t.getDay()}))},f=e=>{if(e.date()>=p.date())return(0,o.sG)(`${p.year()}-${p.month()+1}-${Math.min(p.daysInMonth(),e.date())}`);const t=p.add(1,"month");return(0,o.sG)(`${t.year()}-${t.month()+1}-${Math.min(t.daysInMonth(),e.date())}`)},w=e=>{const t=d.q7.fromDate(new Date),a=d.q7.fromDate(new Date(e)),i=t.getDay(),r=a.getDay();if(r>=i)return s()((0,o.EJ)({year:t.getYear(),month:t.getMonth(),day:r}));const n=d.o7.fromYm(t.getYear(),t.getMonth()).next(1);return s()((0,o.EJ)({year:n.getYear(),month:n.getMonth(),day:r}))},y=e=>{const t=Date.now(),a=s()().endOf("day").valueOf()+1;return window.setTimeout((()=>{try{e(a),y(e)}catch(e){}}),a-t)},v=e=>{const t=Date.now(),a=s()().add(30,"minute").valueOf();return window.setTimeout((()=>{try{e(a),v(e)}catch(e){}}),a-t)};let p=s()().startOf("day"),V=p.year();y((()=>{p=s()(),V=p.year()}));const O=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"solar";if(!e)return 0;if(e>=p.valueOf())return s()(e).diff(p,"day");if("lunar"===t){return w(e).diff(p,"day")}const a=s()(e),i=f(a),r=i.diff(p,"day");return r},D=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"solar";if(!e)return 0;if(e>=p.valueOf())return s()(e).diff(p,"day");if("lunar"===t){return m(e).diff(p,"day")}const a=s()(e),i=u(a,V),r=i.diff(p,"day");return r},M=e=>{const t=Math.floor(e/86400);e-=86400*t;const a=Math.floor(e/3600)%24;e-=3600*a;const i=Math.floor(e/60)%60;return{d:t,h:a,m:i,s:(e-=60*i)%60}};class T{views=new Map;execTime=0;execTimer=null;isPageVisible=!0;setViewVisibleInterval(){0!==this.views.size?this.isPageVisible?this.isViewVisible?this.setInterval(this.interval):this.setInterval(this.intervalOnViewOut):this.setPageVisibleInterval():this.setInterval(0)}setPageVisibleInterval(){0!==this.views.size?this.isPageVisible?this.setViewVisibleInterval():this.setInterval(this.intervalOnPageHide):this.setInterval(0)}setInterval(e){if(this.execTimer&&window.clearTimeout(this.execTimer),e<=0)return;let t=e;this.execTime&&(t=e-(Date.now()-this.execTime),t<0&&(t=0)),this.execTimer=window.setTimeout((async()=>{await this.execFn(),this.setInterval(e)}),t)}watchPageStatus(){g.Z.addEventListener("statechange",(e=>{"hidden"===e.newState?this.isPageVisible=!1:this.isPageVisible=!0,this.setPageVisibleInterval()}))}onChangeViewVisible(){let e=!1;this.views.forEach((t=>{e||(e=t)})),this.isViewVisible=e,this.setViewVisibleInterval()}initIo(){this.io=new IntersectionObserver((e=>{e.forEach((e=>{this.views.has(e.target)&&this.views.set(e.target,e.intersectionRatio>0)})),this.onChangeViewVisible()}),{threshold:[0]})}constructor(e,t){if(!t.interval)throw new Error("请设置间隔时间");this.interval=t.interval,this.intervalOnViewOut=t.intervalOnViewOut,this.intervalOnPageHide=t.intervalOnPageHide,this.execFn=async()=>{try{await e()}catch(e){}this.execTime=Date.now()},t.immediate&&this.execFn(),this.watchPageStatus(),this.initIo(),t.view&&this.addView(t.view)}addView(e){this.views.set(e,!1),this.io.observe(e)}removeView(e){this.views.delete(e),this.io.unobserve(e),this.onChangeViewVisible()}}},54765:(e,t,a)=>{a.d(t,{S:()=>r});var i=a(74003);const r={fontColor:"rgba(248, 248, 248, 1)",bgType:"image",bgColor:(0,a(73186).zY)(),bgImageColor:"",bgImage:{large:`${i.c1}/widget-background/background18_larg.jpg`,medium:`${i.c1}/widget-background/background18_medium.jpg`,small:`${i.c1}/widget-background/background18_small.jpg`},bgMask:20}},96201:(e,t,a)=>{a.r(t),a.d(t,{useTimerYearStore:()=>f,widgetInfo:()=>h});var i=a(10435),r=a(54765),s=a(24581),n=a(73186),o=a(80661),d=a.n(o),g=a(28850),l=a(94119);const h=(0,s.E0)("widget-timer-year"),c=()=>d()().endOf("year").valueOf(),b=e=>{const t=d()(e+1).diff(d()(),"second");return(0,n.f8)(t)},u=()=>{const e=d()(),t=e.endOf("year").diff(e.startOf("year"),"day")+1,a=e.diff(e.startOf("year"),"day");return Number((a/t*100).toFixed(2))},m=c(),f=(0,i.Q_)(g.BU.timerYear,{syncStorage:{watch:["timerStyle"]},syncCloud:{watch:["timerStyle"]},state:()=>({modalShow:!1,modalState:{size:"s",openType:"add"},timerStyle:r.S,yearEndTime:m,year:d()().year(),gapTime:b(m),percent:u()}),actions:{updateDay(){this.yearEndTime=c(),this.year=d()().year(),this.percent=u()},updateGapDate(){this.gapTime=b(this.yearEndTime)},openModal(e){this.modalState=e,this.setModal(!0)},closeModal(){this.setModal(!1)},setModal(e){l.G.setStatus(s.Rm.timerYear,e),this.modalShow=e},saveStyle(e){this.timerStyle={...e}}}});(0,n.ST)((()=>{f().updateDay()})),setInterval((()=>{f().updateGapDate()}),1e3)}}]);