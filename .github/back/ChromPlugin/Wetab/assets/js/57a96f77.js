"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[2399],{62399:(e,a,t)=>{t.r(a),t.d(a,{useCalcPressureStore:()=>r});var n=t(57268),u=t(10435),i=t(14754);const r=(0,u.Q_)("calc-components-pressure",{state:()=>({unitItemsArr:[{name:"帕斯卡",unit:"Pa(N/m²)",base:!0,calcBase:!0,value:1},{name:"巴",unit:"bar",getValue:e=>(0,i.uf)(1e-5*e),reverseValue:e=>(0,i.uf)(e/1e-5)},{name:"兆帕",unit:"MPa",getValue:e=>(0,i.uf)(1e-6*e),reverseValue:e=>(0,i.uf)(e/1e-6)},{name:"千帕",unit:"kpa",getValue:e=>(0,i.uf)(.001*e),reverseValue:e=>(0,i.uf)(e/.001)},{name:"百帕",unit:"hpa",getValue:e=>(0,i.uf)(.01*e),reverseValue:e=>(0,i.uf)(e/.01)},{name:"毫巴",unit:"mbar",getValue:e=>(0,i.uf)(.01*e),reverseValue:e=>(0,i.uf)(e/.01)},{name:"英寸汞柱",unit:"in Hg",getValue:e=>(0,i.uf)(2953e-7*e),reverseValue:e=>(0,i.uf)(e/2953e-7)},{name:"标准大气压",unit:"atm",long:!0,getValue:e=>(0,i.uf)(98692e-10*e),reverseValue:e=>(0,i.uf)(e/98692e-10)},{name:"毫米汞柱",unit:"mmHg",long:!0,getValue:e=>(0,i.uf)(.0075006*e),reverseValue:e=>(0,i.uf)(e/.0075006)},{name:"毫米水柱",unit:"mm H₂O",long:!0,getValue:e=>(0,i.uf)(.101972*e),reverseValue:e=>(0,i.uf)(e/.101972)},{name:"磅力/平方英寸",unit:"psi",long:!0,getValue:e=>(0,i.uf)(145e-6*e),reverseValue:e=>(0,i.uf)(e/145e-6)},{name:"公斤力/平方厘米",unit:"kgf/cm²",long:!0,getValue:e=>(0,i.uf)(102e-7*e),reverseValue:e=>(0,i.uf)(e/102e-7)},{name:"公斤力/平方米",unit:"kgf/m²",long:!0,getValue:e=>(0,i.uf)(.1019716*e),reverseValue:e=>(0,i.uf)(e/.1019716)}]}),getters:{getAllUnits(){return this.unitItemsArr},getBaseUnit(){return this.unitItemsArr.find((e=>e.base))},getPanelList(){return this.unitItemsArr.filter((e=>!e.base))}},actions:{changeBaseUnit(e){this.unitItemsArr=(0,i.vZ)(e,this.unitItemsArr)},changeBaseValue(e){this.getBaseUnit.value=e},calcUnitsArr(){this.unitItemsArr=(0,i.UC)(this.unitItemsArr)}}});(0,n.YP)((()=>{var e;return null===(e=r().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.value}),(()=>{r().calcUnitsArr()}),{immediate:!0}),(0,n.YP)((()=>{var e;return null===(e=r().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.name}),(()=>{r().calcUnitsArr()}))},14754:(e,a,t)=>{t.d(a,{D:()=>v,Mb:()=>f,UC:()=>i,WS:()=>c,fS:()=>l,uf:()=>n,vZ:()=>u,zX:()=>r});const n=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(!e)return 0;const n=Math.floor(Math.log(Math.abs(e))/Math.LN10);if(Math.abs(n)<=a)return Number(e.toFixed(t));{const a=e*Math.pow(10,-n);return Number(a.toFixed(t))+"e"+(n>0?"+"+n:n)}},u=(e,a)=>{const t=[...a],n=t.find((e=>e.base)),u=t.find((a=>a.name===e.name));return n.base=!1,u.base=!0,u.value=n.value,t},i=e=>{const a=[...e],t=e.find((e=>e.calcBase)),n=e.find((e=>e.base));var u;t.base?a.map((e=>{var a;e.base||e.calcBase||(e.value=null===(a=e.getValue)||void 0===a?void 0:a.call(null,Number(t.value)))})):(t.value=null===(u=n.reverseValue)||void 0===u?void 0:u.call(null,Number(n.value)),a.map((e=>{var a;e.base||e.calcBase||(e.value=null===(a=e.getValue)||void 0===a?void 0:a.call(null,Number(t.value)))})));return a},r=(e,a)=>{const t=String(e).split("."),n=t[1].split("");let u=0;for(let e=0;e<t[1].length;e++)u+=n[e]*Math.pow(a,-1*(e+1));return parseInt(t[0],a)+u},l=e=>Number(e||0).toFixed(2).replace(/\d+/,(e=>e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"))),s=[{min:-1/0,max:36e3,rate:.03,deduction:0},{min:36e3,max:144e3,rate:.1,deduction:2520},{min:144e3,max:3e5,rate:.2,deduction:16920},{min:3e5,max:42e4,rate:.25,deduction:31920},{min:42e4,max:66e4,rate:.3,deduction:52920},{min:66e4,max:96e4,rate:.35,deduction:85920},{min:96e4,max:1/0,rate:.45,deduction:181920}],m=[{min:-1/0,max:3e3,rate:.03,deduction:0},{min:3e3,max:12e3,rate:.1,deduction:210},{min:12e3,max:25e3,rate:.2,deduction:1410},{min:25e3,max:35e3,rate:.25,deduction:2660},{min:35e3,max:55e3,rate:.3,deduction:4410},{min:55e3,max:8e4,rate:.35,deduction:7160},{min:8e4,max:1/0,rate:.45,deduction:15160}],d=[{min:-1/0,max:2e4,rate:.2,deduction:0},{min:2e4,max:5e4,rate:.3,deduction:2e3},{min:5e4,max:1/0,rate:.4,deduction:7e3}],o=(e,a)=>a.find((a=>e>a.min&&e<=a.max)),c=e=>o(e,s),f=e=>o(e,m),v=e=>o(e,d)}}]);