"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[7244,7570],{17570:(e,t,i)=>{i.r(t),i.d(t,{useCalcCounterStore:()=>n});const n=(0,i(10435).Q_)("calc-components-counter",{state:()=>({type:"base"}),getters:{},actions:{changeCalcType(){this.type="base"===this.type?"scientific":"base"}}})},87244:(e,t,i)=>{i.r(t),i.d(t,{useBaseCounterPanel:()=>p});var n=i(29445),a=i(57268),s=i(10435),r=i(55943),o=i(61045),l=i(17570);class u{constructor(e){this.precision=!1!==(null==e?void 0:e.precision),this.handleError=null==e?void 0:e.handleError,this.cache=(null==e?void 0:e.cache)||!1,this.caches={},this.symbols={},this._definedOperator("+",this.last,"prefix",3),this._definedOperator("-",this.negation,"prefix",3),this._definedOperator("+",this.add.bind(this),"infix",2),this._definedOperator("-",this.sub.bind(this),"infix",2),this._definedOperator("*",this.multi.bind(this),"infix",4),this._definedOperator("·",this.multi.bind(this),"infix",4),this._definedOperator("/",this.div.bind(this),"infix",4),this._definedOperator("(",this.last,"prefix"),this._definedOperator(")",null,"postfix"),this._definedOperator("|",this.mod,"infix",4),this._definedOperator("!",this.fac,"postfix",6),this._definedOperator("^",Math.pow,"infix",5,!0),this._definedOperator("min",Math.min),this._definedOperator("max",Math.max),this._definedOperator(",",Array.of,"infix",1),this._definedOperator("%",this.rate.bind(this),"postfix",6),this._definedOperator("cos",Math.cos),this._definedOperator("sin",Math.sin),this._definedOperator("tan",Math.tan),this._definedOperator("abs",Math.abs),this._definedOperator("log",this.log),this._definedOperator("//",this.sqrt,"infix",4),this.definedOperators((null==e?void 0:e.operators)||[])}calcReg(){const e="\\d+(?:\\.\\d+)?|"+Object.values(this.symbols).sort(((e,t)=>t.symbol.length-e.symbol.length)).map((e=>e.symbol.replace(/[\\*+^()$?.{}|[\]]/g,"\\$&"))).join("|")+"|(\\S)";this.pattern=new RegExp(e,"g")}_definedOperator(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"func",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];"func"===i&&(n=0);const s="infix"===i?2:1;this.symbols[e]=Object.assign({},this.symbols[e],{[i]:{symbol:e,handle:t,precedence:n,argCount:s,type:i,right2left:a},symbol:e})}definedOperators(e){e.map((e=>{if(-1===["(",")",","].indexOf(e.token)&&e.token&&e.func){const t=this.symbols[e.token];t&&(t.infix&&"postfix"===e.type||t.postfix&&"infix"===e.type)||this._definedOperator(e.token,e.func,e.type,e.weight,e.rtol)}})),this.calcReg()}parse(e){const t=e=>{"("!=e.symbol&&s.push(e);const t=e.handle(...[].concat(...a.splice(-e.argCount)));return t.code?t:(a.push(t),e.precedence)},i=(t,i)=>{const n={code:t,message:i,pos:r?r.index:e.length,token:o},a=this.handleError?this.handleError(n):n;return this.caches[e]=a,a},n=[this.symbols["("].prefix],a=[],s=[];let r,o,l=!1;e=e.replace(/\s/g,"");const u=this.caches[e];if(this.cache&&u)return u;this.caches[e]={},this.pattern.lastIndex=0;do{r=this.pattern.exec(e),o=r?r[0]:")";const u=this.symbols[o];if(r&&r[1])return i(1001,`${r[1]} is undefined`);if(!l&&isNaN(o)&&(!u||u&&!u.prefix&&!u.func))return i(1002,"Syntax error");if(l){const e=u.postfix||u.infix;let a;do{const s=n[n.length-1];if((e.precedence-s.precedence||s.right2left)>0)break;if(a=t(n.pop()),"object"==typeof a)return i(a.code,a.message)}while(a);")"!=(null==e?void 0:e.symbol)?"postfix"===(null==e?void 0:e.type)?(t(e),l=!0):(n.push(e),l=!1):l="postfix"===(null==e?void 0:e.type)}else if(isNaN(+o)){if(n.push(u.prefix||u.func),u.func&&(r=this.pattern.exec(e),!r||"("!==r[0]))return i(1003,`Missing a opening parenthesis after function "${o}"`)}else l=!0,a.push(+o),s.push(+o)}while(r&&n.length);return n.length?i(1004,"Opening parenthesis is more than closing parenthesis"):r?i(1005,"Closing parenthesis is more than opening parenthesis"):this.caches[e]={notation:s,value:a.pop()}}rectify(e,t,i){let n;const a=(String(e).split(".")[1]||"").length,s=(String(t).split(".")[1]||"").length;switch(i){case"+":return n=Math.pow(10,Math.max(a,s)),(e*n+t*n)/n;case"-":return n=Math.pow(10,Math.max(a,s)),(e*n-t*n)/n;case"*":return(e*=Math.pow(10,a))*(t*=Math.pow(10,s))/Math.pow(10,a+s);case"/":return(e*=Math.pow(10,a))/(t*=Math.pow(10,s))*Math.pow(10,s-a)}}last(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.pop()}negation(e){return-e}add(e,t){return this.precision?this.rectify(e,t,"+"):e+t}sub(e,t){return this.precision?this.rectify(e,t,"-"):e-t}multi(e,t){return this.precision?this.rectify(e,t,"*"):e*t}div(e,t){return 0===t?{code:1006,message:"The divisor cannot be zero"}:this.precision?this.rectify(e,t,"/"):e/t}mod(e,t){return 0===t?{code:1006,message:"The divisor cannot be zero"}:e%t}fac(e){if(e%1||!(+e>=0))return{code:1008,message:"The factorial base must be a non-negative integer"};if(e>170)return 1/0;let t=1;for(;e>1;)t*=e--;return t}log(e,t){return e<=0||1==e?{code:1007,message:"The base number of logarithmic operations must be greater than 0 and not equal to 1"}:Math.log(t)/Math.log(e)}rate(e){return this.rectify(e,100,"/")}sqrt(e,t){return Math.pow(t,1/e)}}var c=i(14754),h=i(48885),d=i(1585);let f;r.ZP.use(o.Z);const p=()=>{const e=(0,l.useCalcCounterStore)(),t=(0,s.Jk)(e),i=new u,o=(0,n.iH)(""),p=(0,n.iH)(!0),v=(0,n.iH)([]),m=(0,n.iH)(),b=(0,n.iH)(null),g=(0,n.iH)(null),x=(0,n.iH)([0,0]);function y(e){o.value=e}function O(){const[e,t]=x.value;if(0===o.value.length)return void g.value.focus();if(0===e)return g.value.focus(),void setTimeout((()=>{g.value.setSelectionRange(0,0)}),10);const i=o.value.split("");e!==t?(i.splice(e,t),o.value=i.join(""),x.value=[e,e]):(i.splice(e-1,1),o.value=i.join(""),x.value=[e-1,e-1]),g.value.focus(),setTimeout((()=>{g.value.setSelectionRange(e-1,e-1)}),10)}function M(){var e;if(!o.value)return!1;null===(e=v.value)||void 0===e||e.push({equation:o.value,result:m.value}),(0,a.Y3)((()=>{f.refresh(),f.scrollTo(0,f.maxScrollY,300)})),o.value="",m.value="",x.value=[0,0],g.value.focus()}function _(e){const[t,i]=x.value;if(!o.value)return y(e),g.value.focus(),void(x.value=[t+e.length,t+e.length]);const n=o.value.split("");n.splice(t,i-t,e),y(n.join("")),g.value.focus(),x.value=[t+e.length,t+e.length],setTimeout((()=>{g.value.setSelectionRange(t+e.length,t+e.length)}),10)}return(0,a.bv)((()=>{f=new r.ZP(b.value,{...d.IO,scrollX:!1,scrollY:!0,mouseWheel:!0,bounce:!1,momentum:!1})})),(0,a.YP)((()=>o.value),(()=>{if(o.value)try{const e=i.parse(o.value);e.code?m.value="Error":e.value===1/0?m.value="Infinity":m.value=(0,c.uf)(e.value,8,8)}catch(e){m.value="Error"}else m.value=""})),{onInputBase:()=>{},baseExpression:o,onClickKeyBtn:e=>{switch(e){case"bra":!function(){if(o.value.endsWith("."))return!1;if(!o.value)return void _("(");const[e]=x.value;let t=0;for(;t<e;)"("===o.value.charAt(t)?p.value=!1:")"===o.value.charAt(t)&&(p.value=!0),t++;_(p.value?"(":")")}();break;case"del":O();break;case"c":o.value="",p.value=!0,g.value.focus();break;case"enter":M();break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"0":!function(e){if(o.value.endsWith("%"))return!1;_(e)}(e);break;case"div":case"times":case"minus":case"plus":!function(e){const t=o.value;if(t.endsWith("."))return!1;switch((t.endsWith("/")||t.endsWith("·")||t.endsWith("+")||t.endsWith("-"))&&O(),e){case"div":_("/");break;case"times":_("·");break;case"plus":_("+");break;case"minus":_("-")}}(e);break;case"dot":!function(){const e=o.value,t=e.charAt(e.length-1);isNaN(parseInt(t))||_(".")}();break;case"per":!function(){const e=o.value,t=e.charAt(e.length-1);isNaN(parseInt(t))||_("%")}()}},resultValue:m,scrollHistoryRef:b,onClickHistory:function(e){var t;o.value&&(null===(t=v.value)||void 0===t||t.push({equation:o.value,result:m.value})),o.value=v.value[e].equation,v.value.splice(e,1),(0,a.Y3)((()=>{f.refresh(),f.scrollTo(0,f.maxScrollY,300)})),g.value.focus()},clickEnter:M,inputRef:g,updateCursorPosition:(0,h.Z)((function(){const e=g.value.selectionStart||0,t=g.value.selectionEnd||0;x.value=[e,t]}),50),historyList:v,type:t.type}}},14754:(e,t,i)=>{i.d(t,{D:()=>p,Mb:()=>f,UC:()=>s,WS:()=>d,fS:()=>o,uf:()=>n,vZ:()=>a,zX:()=>r});const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(!e)return 0;const n=Math.floor(Math.log(Math.abs(e))/Math.LN10);if(Math.abs(n)<=t)return Number(e.toFixed(i));{const t=e*Math.pow(10,-n);return Number(t.toFixed(i))+"e"+(n>0?"+"+n:n)}},a=(e,t)=>{const i=[...t],n=i.find((e=>e.base)),a=i.find((t=>t.name===e.name));return n.base=!1,a.base=!0,a.value=n.value,i},s=e=>{const t=[...e],i=e.find((e=>e.calcBase)),n=e.find((e=>e.base));var a;i.base?t.map((e=>{var t;e.base||e.calcBase||(e.value=null===(t=e.getValue)||void 0===t?void 0:t.call(null,Number(i.value)))})):(i.value=null===(a=n.reverseValue)||void 0===a?void 0:a.call(null,Number(n.value)),t.map((e=>{var t;e.base||e.calcBase||(e.value=null===(t=e.getValue)||void 0===t?void 0:t.call(null,Number(i.value)))})));return t},r=(e,t)=>{const i=String(e).split("."),n=i[1].split("");let a=0;for(let e=0;e<i[1].length;e++)a+=n[e]*Math.pow(t,-1*(e+1));return parseInt(i[0],t)+a},o=e=>Number(e||0).toFixed(2).replace(/\d+/,(e=>e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"))),l=[{min:-1/0,max:36e3,rate:.03,deduction:0},{min:36e3,max:144e3,rate:.1,deduction:2520},{min:144e3,max:3e5,rate:.2,deduction:16920},{min:3e5,max:42e4,rate:.25,deduction:31920},{min:42e4,max:66e4,rate:.3,deduction:52920},{min:66e4,max:96e4,rate:.35,deduction:85920},{min:96e4,max:1/0,rate:.45,deduction:181920}],u=[{min:-1/0,max:3e3,rate:.03,deduction:0},{min:3e3,max:12e3,rate:.1,deduction:210},{min:12e3,max:25e3,rate:.2,deduction:1410},{min:25e3,max:35e3,rate:.25,deduction:2660},{min:35e3,max:55e3,rate:.3,deduction:4410},{min:55e3,max:8e4,rate:.35,deduction:7160},{min:8e4,max:1/0,rate:.45,deduction:15160}],c=[{min:-1/0,max:2e4,rate:.2,deduction:0},{min:2e4,max:5e4,rate:.3,deduction:2e3},{min:5e4,max:1/0,rate:.4,deduction:7e3}],h=(e,t)=>t.find((t=>e>t.min&&e<=t.max)),d=e=>h(e,l),f=e=>h(e,u),p=e=>h(e,c)}}]);