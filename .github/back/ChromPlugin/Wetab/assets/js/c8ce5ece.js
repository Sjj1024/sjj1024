"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[5143],{45143:(t,e,o)=>{o.r(e),o.d(e,{useHabitStore:()=>u,widgetInfo:()=>l});var i=o(10435),s=o(35367),n=o(24581),a=o(28850),r=o(12793),h=o(80661),c=o.n(h),y=o(94119);const l=(0,n.E0)(n.Rm.habit),u=(0,i.Q_)(a.BU.habit,{syncCloud:{watch:["modalState","curDate","target","percent","surplus","historyOfDay","historyOfWeek","historyOfMonth","markType"]},syncStorage:{watch:["modalState","curDate","target","percent","surplus","historyOfDay","historyOfWeek","historyOfMonth","markType"]},state:()=>({modalShow:!1,modalState:{size:"s",openType:"add",editId:""},...s.VO}),getters:{getStatisticalData(){let t=[];const e=this.curTimeDimension;switch(e){case s.G.week:t=this.historyOfWeek;break;case s.G.month:t=this.historyOfMonth}let o=0,i=0,n=0,a=0;const r={};t.map((t=>{t.target&&(a+=1),o+=t.total,t.done&&(i+=1);const e=t.category||{},s=Object.keys(e);for(const t of s)r[t]=(r[t]||0)+(e[t]||0)})),o&&a&&(n=Math.round(o/a));const h=[{icon:"sum_icon",title:"总数",iconBgColor:"#A69ECF",unit:o>1e3?"L":"ml",value:o>1e3?(o/1e3).toFixed(2):o},{icon:"average_icon",title:"平均",iconBgColor:"#DAB99E",unit:n>1e3?"L":"ml",value:n>1e3?(n/1e3).toFixed(2):n},{icon:"week_icon",title:e===s.G.week?"本周达标":"本月达标",iconBgColor:"#96AEC6",unit:"天",value:i},{icon:"continuous_icon",title:"记录天数",iconBgColor:"#83BEA9",unit:"天",value:a}],c=Object.keys(r);for(const t of c){const e=s.Sr.find((e=>e.type==t)),o=r[t]||0;o>0&&h.push({...e,title:null==e?void 0:e.name,unit:o>1e3?"L":"ml",value:o>1e3?(o/1e3).toFixed(2):o})}return h},getHistoryOfDayList(){const t={};this.historyOfDay.map((e=>{const o=c()(e.time).hour();t[o]=(t[o]||0)+e.num}));return[...Array(24)].map(((e,o)=>({time:o,value:t[o]||0})))}},actions:{openModal(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.modalState=t,this.setModal(!0),this.onlyShowGuidePageTwo=e},setModal(t){y.G.setStatus(n.Rm.habit,t),this.modalShow=t,t||(this.setShowMenuModal(!1),this.setAddPopupShow(!1))},setCurTimeDimension(t){this.curTimeDimension=t},setAddPopupShow(t){this.addPopupShow=t},setShowMenuModal(t){this.menuModalShow=t},setTarget(t){this.target=t,this.setSurplus(t-this.percent),this.updateHistroy({num:0,type:s.MV.water,time:Date.now()})},setPercent(t){this.curDate=Date.now(),this.percent=t,this.setSurplus(this.target-t)},setSurplus(t){this.surplus=t<0?0:t},updateHistroy(t){t.num&&this.addHistoryOfDay(t),this.updateHistoryOfWeek(t),this.updateHistoryOfMonth(t)},updateHistoryOfWeek(t){let e=c()().day();e=0==e?7:e;const o=this.percent,i=this.target,s=t.type,n=t.num;if(0==this.historyOfWeek.length){const n=0==e?7:e;for(let e=1;e<n;e++)this.historyOfWeek.push({type:"week",target:0,time:e,done:!1,total:0,category:{[s]:t.num}});this.historyOfWeek.push({type:"week",target:i,time:e,done:o>=i,total:o,category:{[s]:t.num}});for(let e=n+1;e<=7;e++)this.historyOfWeek.push({type:"week",target:0,time:7==e?0:e,done:!1,total:0,category:{[s]:t.num}})}else{const t=this.historyOfWeek.findIndex((t=>t.time==e));t>-1&&(this.historyOfWeek[t].target=i,this.historyOfWeek[t].done=o>=i,this.historyOfWeek[t].total=o,this.historyOfWeek[t].category[s]=(this.historyOfWeek[t].category[s]||0)+n)}},updateHistoryOfMonth(t){const e=c()().date(),o=this.percent,i=this.target,s=t.type,n=t.num;if(0==this.historyOfMonth.length){for(let o=1;o<e;o++)this.historyOfMonth.push({type:"month",target:0,time:o,done:!1,total:0,category:{[s]:t.num}});this.historyOfMonth.push({type:"month",target:i,time:e,done:o>=i,total:o,category:{[s]:t.num}});for(let o=e+1;o<=c()().daysInMonth();o++)this.historyOfMonth.push({type:"month",target:0,time:o,done:!1,total:0,category:{[s]:t.num}})}else{const t=this.historyOfMonth.findIndex((t=>t.time==e));t>-1&&(this.historyOfMonth[t].target=i,this.historyOfMonth[t].done=o>=i,this.historyOfMonth[t].total=o,this.historyOfMonth[t].category[s]=(this.historyOfMonth[t].category[s]||0)+n)}},getDrinksCategory:t=>s.Sr.find((e=>e.type===t)),getCategoryIcon(t){const e=this.getDrinksCategory(t);return null==e?void 0:e.icon},getCategoryIconBg(t){const e=this.getDrinksCategory(t);return null==e?void 0:e.iconBgColor},getCategoryName(t){const e=this.getDrinksCategory(t);return null==e?void 0:e.name},addHistoryOfDay(t){this.historyOfDay.unshift(t)},check(){if(c()().isAfter(this.curDate,"month")){const t=[];for(let e=1;e<=c()().daysInMonth();e++)t.push({type:"month",target:0,time:e,done:!1,total:0,category:{[s.MV.water]:0}});this.historyOfMonth=t||[]}if(c()().isAfter(this.curDate,"week")){const t=[];for(let e=1;e<=7;e++)t.push({type:"week",target:0,time:e,done:!1,total:0,category:{[s.MV.water]:0}});this.historyOfWeek=t||[]}c()().isAfter(this.curDate,"day")&&(this.setPercent(0),this.historyOfDay=[])},drinking(t){this.target&&(this.check(),this.setPercent(this.percent+t.capacity),this.updateHistroy({num:t.capacity,type:t.category,time:Date.now()}))},setMarkType(t){this.markType=t},saveWidgetData(){if(this.onlyShowGuidePageTwo)return;const t=(0,r.i)();"add"===this.modalState.openType||"preview"===this.modalState.openType?t.saveIcon({type:"widget",name:l.title,widgetSize:this.modalState.size,widgetName:l.name,origin:"add",widgetData:{...this.$state,target:this.target}}):"edit"===this.modalState.openType&&t.saveWidgetData(this.modalState.editId,this.$state)}}})},35367:(t,e,o)=>{let i;o.d(e,{G:()=>n,MV:()=>i,Sr:()=>s,VO:()=>c,tn:()=>r,yD:()=>h,zo:()=>a}),function(t){t.water="Water",t.coffee="Coffee",t.juice="Juice",t.soup="Soup",t.milk="Milk",t.fizzy="Fizzy",t.tea="Tea"}(i||(i={}));const s=[{icon:"coffee_icon",type:i.coffee,iconBgColor:"#87472C",fontColor:"#9E7261",name:"咖啡"},{icon:"tea_icon",type:i.tea,iconBgColor:"#61AD32",fontColor:"#65A656",name:"茶"},{icon:"fizzy_drink_icon",type:i.fizzy,iconBgColor:"#D4875C",fontColor:"#D4875C",name:"气泡水"},{icon:"milk_icon",type:i.milk,iconBgColor:"#81BDFF",fontColor:"#4A7AFF",name:"牛奶"},{icon:"soup_icon",type:i.soup,iconBgColor:"#FF7D46",fontColor:"#D4875C",name:"汤"},{icon:"juice_icon",type:i.juice,iconBgColor:"#BCCE3D",fontColor:"#BCCE3D",name:"果汁"},{icon:"water_icon",type:i.water,iconBgColor:"#27DBA7",fontColor:"#27DBA7",name:"水"}];let n;!function(t){t.day="d",t.week="w",t.month="m"}(n||(n={}));const a=[{label:"日",value:n.day},{label:"周",value:n.week},{label:"月",value:n.month}],r={bgColor:"#FFFFFF",size:44,showPercent:!1},h={height:150,width:280,bgColor:"#27DBA7",fontColor:"#FFFFFF",defBarColor:"#10C591",checkeBarColor:"#FFFFFF"},c={target:0,curDate:0,percent:0,surplus:0,historyOfDay:[],historyOfWeek:[],historyOfMonth:[],markType:"men",curTimeDimension:n.day,addPopupShow:!1,menuModalShow:!1,onlyShowGuidePageTwo:!1}}}]);