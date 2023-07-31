"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[9538],{99538:(e,u,a)=>{a.r(u),a.d(u,{useCalcLengthStore:()=>s});var t=a(74003),n=a(57268),i=a(10435),r=a(14754);const l=[{name:"公里",unit:"gongli",getValue:e=>(0,r.uf)(.001*e),reverseValue:e=>(0,r.uf)(e/.001)},{name:"里",unit:"li",getValue:e=>(0,r.uf)(.002*e),reverseValue:e=>(0,r.uf)(e/.002)},{name:"丈",unit:"zhang",getValue:e=>(0,r.uf)(.3*e),reverseValue:e=>(0,r.uf)(e/.3)},{name:"尺",unit:"chi",getValue:e=>(0,r.uf)(3*e),reverseValue:e=>(0,r.uf)(e/3)},{name:"寸",unit:"chi",getValue:e=>(0,r.uf)(30*e),reverseValue:e=>(0,r.uf)(e/30)},{name:"分",unit:"fen",getValue:e=>(0,r.uf)(300*e),reverseValue:e=>(0,r.uf)(e/300)},{name:"厘",unit:"li",getValue:e=>(0,r.uf)(3e3*e),reverseValue:e=>(0,r.uf)(e/3e3)},{name:"毫",unit:"hao",getValue:e=>(0,r.uf)(3e4*e),reverseValue:e=>(0,r.uf)(e/3e4)}],m=[{name:"米",unit:"m",base:!0,calcBase:!0,value:1},{name:"分米",unit:"dm",getValue:e=>(0,r.uf)(10*e),reverseValue:e=>(0,r.uf)(e/10)},{name:"厘米",unit:"cm",getValue:e=>(0,r.uf)(100*e),reverseValue:e=>(0,r.uf)(e/100)},{name:"毫米",unit:"mm",getValue:e=>(0,r.uf)(1e3*e),reverseValue:e=>(0,r.uf)(e/1e3)},{name:"微米",unit:"μm",getValue:e=>(0,r.uf)(1e3*e*1e3),reverseValue:e=>(0,r.uf)(e/1e3/1e3)},{name:"纳米",unit:"nm",getValue:e=>(0,r.uf)(1e3*e*1e3*1e3),reverseValue:e=>(0,r.uf)(e/1e3/1e3/1e3)},{name:"皮米",unit:"pm",getValue:e=>(0,r.uf)(1e3*e*1e3*1e3*1e3),reverseValue:e=>(0,r.uf)(e/1e3/1e3/1e3/1e3)},{name:"英寸",unit:"in",getValue:e=>(0,r.uf)(39.3700787*e),reverseValue:e=>(0,r.uf)(e/39.3700787)},{name:"密耳",unit:"mil",getValue:e=>(0,r.uf)(39370.0787402*e),reverseValue:e=>(0,r.uf)(e/39370.0787402)},{name:"英尺",unit:"ft",getValue:e=>(0,r.uf)(3.2808399*e),reverseValue:e=>(0,r.uf)(e/3.2808399)},{name:"码",unit:"yd",getValue:e=>(0,r.uf)(1.0936133*e),reverseValue:e=>(0,r.uf)(e/1.0936133)},{name:"英里",unit:"mi",getValue:e=>(0,r.uf)(6214e-7*e),reverseValue:e=>(0,r.uf)(e/6214e-7)},{name:"海里",unit:"nmi",getValue:e=>(0,r.uf)(54e-5*e),reverseValue:e=>(0,r.uf)(e/54e-5)},{name:"英寻",unit:"fm",getValue:e=>(0,r.uf)(.5468066*e),reverseValue:e=>(0,r.uf)(e/.5468066)},{name:"弗隆",unit:"fur",getValue:e=>(0,r.uf)(.004971*e),reverseValue:e=>(0,r.uf)(e/.004971)},{name:"光年",unit:"ly",getValue:e=>(0,r.uf)(1057e-19*e),reverseValue:e=>(0,r.uf)(e/1057e-19)},{name:"天文单位",unit:"au",getValue:e=>(0,r.uf)(66846e-16*e),reverseValue:e=>(0,r.uf)(e/66846e-16)}],s=(0,i.Q_)("calc-components-length",{state:()=>({unitItemsArr:t.sM?[...m,...l]:m}),getters:{getAllUnits(){return this.unitItemsArr},getBaseUnit(){return this.unitItemsArr.find((e=>e.base))},getPanelList(){return this.unitItemsArr.filter((e=>!e.base))},getCalcbase(){return this.unitItemsArr.find((e=>e.calcBase))}},actions:{changeBaseUnit(e){this.unitItemsArr=(0,r.vZ)(e,this.unitItemsArr)},changeBaseValue(e){this.getBaseUnit.value=e},calcUnitsArr(){this.unitItemsArr=(0,r.UC)(this.unitItemsArr)}}});(0,n.YP)((()=>{var e;return null===(e=s().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.value}),(()=>{s().calcUnitsArr()}),{immediate:!0}),(0,n.YP)((()=>{var e;return null===(e=s().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.name}),(()=>{s().calcUnitsArr()}))},14754:(e,u,a)=>{a.d(u,{D:()=>o,Mb:()=>v,UC:()=>i,WS:()=>c,fS:()=>l,uf:()=>t,vZ:()=>n,zX:()=>r});const t=function(e){let u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(!e)return 0;const t=Math.floor(Math.log(Math.abs(e))/Math.LN10);if(Math.abs(t)<=u)return Number(e.toFixed(a));{const u=e*Math.pow(10,-t);return Number(u.toFixed(a))+"e"+(t>0?"+"+t:t)}},n=(e,u)=>{const a=[...u],t=a.find((e=>e.base)),n=a.find((u=>u.name===e.name));return t.base=!1,n.base=!0,n.value=t.value,a},i=e=>{const u=[...e],a=e.find((e=>e.calcBase)),t=e.find((e=>e.base));var n;a.base?u.map((e=>{var u;e.base||e.calcBase||(e.value=null===(u=e.getValue)||void 0===u?void 0:u.call(null,Number(a.value)))})):(a.value=null===(n=t.reverseValue)||void 0===n?void 0:n.call(null,Number(t.value)),u.map((e=>{var u;e.base||e.calcBase||(e.value=null===(u=e.getValue)||void 0===u?void 0:u.call(null,Number(a.value)))})));return u},r=(e,u)=>{const a=String(e).split("."),t=a[1].split("");let n=0;for(let e=0;e<a[1].length;e++)n+=t[e]*Math.pow(u,-1*(e+1));return parseInt(a[0],u)+n},l=e=>Number(e||0).toFixed(2).replace(/\d+/,(e=>e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"))),m=[{min:-1/0,max:36e3,rate:.03,deduction:0},{min:36e3,max:144e3,rate:.1,deduction:2520},{min:144e3,max:3e5,rate:.2,deduction:16920},{min:3e5,max:42e4,rate:.25,deduction:31920},{min:42e4,max:66e4,rate:.3,deduction:52920},{min:66e4,max:96e4,rate:.35,deduction:85920},{min:96e4,max:1/0,rate:.45,deduction:181920}],s=[{min:-1/0,max:3e3,rate:.03,deduction:0},{min:3e3,max:12e3,rate:.1,deduction:210},{min:12e3,max:25e3,rate:.2,deduction:1410},{min:25e3,max:35e3,rate:.25,deduction:2660},{min:35e3,max:55e3,rate:.3,deduction:4410},{min:55e3,max:8e4,rate:.35,deduction:7160},{min:8e4,max:1/0,rate:.45,deduction:15160}],f=[{min:-1/0,max:2e4,rate:.2,deduction:0},{min:2e4,max:5e4,rate:.3,deduction:2e3},{min:5e4,max:1/0,rate:.4,deduction:7e3}],d=(e,u)=>u.find((u=>e>u.min&&e<=u.max)),c=e=>d(e,m),v=e=>d(e,s),o=e=>d(e,f)}}]);