"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[3014,2421,102],{41930:(t,a,i)=>{i.r(a),i.d(a,{useTimerBirthdayStore:()=>b});var e=i(28850),s=i(10435),d=i(73186),r=i(81212),l=i(65264),g=i(63477),h=i(80661),n=i.n(h),y=i(5588),o=i(94119),m=i(24581);const b=(0,s.Q_)(e.BU.timerBirthday,{syncStorage:{watch:["list","initialized","timerStyle"]},syncCloud:{watch:["list","initialized","timerStyle"]},state:()=>({modalShow:!1,initialized:!0,modalState:{size:"s",openType:"add"},timerStyle:l.S,list:l.k,triggerDay:n()().startOf("day").valueOf()}),getters:{homeList(){this.triggerDay;const t=this.list.map((t=>{const a=(0,d.hQ)(t.birthday,t.dateType),i=(0,g.dG)(t.birthday,!1,t.dateType);return{...t,birthdayStr:i,day:a}})).sort(((t,a)=>t.day-a.day));return t.length>5&&(t.length=5),t}},actions:{updateDay(t){this.triggerDay=t},setModal(t,a){o.G.setStatus(m.Rm.timerBirthday,t),this.modalShow=t,t&&a&&(this.modalState=a),!1===t&&y.r.cancel()},saveStyle(t){this.timerStyle={...t},this.initialized=!0},saveList(t){(0,r.Z)(this.list,t)||(this.list=t)}}});(0,d.ST)((t=>{b().updateDay(t)}))},65264:(t,a,i)=>{i.d(a,{S:()=>s,k:()=>d});var e=i(74003);const s={fontColor:"rgba(248, 248, 248, 1)",bgType:"image",bgColor:(0,i(73186).zY)(),bgImageColor:"",bgImage:{large:`${e.c1}/widget-background/background19_larg.jpg`,medium:`${e.c1}/widget-background/background19_medium.jpg`,small:`${e.c1}/widget-background/background19_small.jpg`},bgMask:20},d=[{id:"birthday-1g8q0uqfpebt5ix65z65t7q0w6z",updateTime:0,name:e.sM?"蜡笔小丸子":"Chris Na",birthday:10727136e5,dateType:"solar"},{id:"birthday-1g8q162hmj1k66xezhaazmtgsrw",updateTime:0,name:e.sM?"小胖达":"Lisha",birthday:12276288e5,dateType:e.sM?"lunar":"solar"},{id:"birthday-1g8s6cjg5dt2t1ruaopyi29w9gn",updateTime:0,name:e.sM?"王丽君":"Sara",birthday:619542e6,dateType:e.sM?"lunar":"solar"},{id:"birthday-1g8s6em8vzbvdvs7hsss8903gja",updateTime:0,name:e.sM?"嘎嘎":"Fan",birthday:8402112e5,dateType:"solar"},{id:"birthday-1g8s6fjqnkl7j37i2zo18s79is6",updateTime:0,name:e.sM?"耶鲁思":"Yuling Wang",birthday:9050976e5,dateType:"solar"}]}}]);