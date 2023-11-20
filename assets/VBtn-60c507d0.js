import{ac as K,p as y,a1 as P,c as r,ad as O,ae as ke,af as ve,ag as Ye,ah as Ke,ai as Je,j as v,W as Qe,a7 as fe,m as A,e as D,q as G,h as L,t as M,J as _e,K as I,u as $,g as xe,a3 as Ze,b as we,i as et,S as ee,A as te,a as tt,Q as Ve,o as nt,aj as at,f as st,a6 as it,U as lt,ak as ot,d as g,L as J,r as ne,al as rt,am as ut,an as ct,s as dt,aa as vt,R as ft,v as Be,$ as mt,ao as gt,ap as me,E as ht,aq as bt,ar as ge,B as yt,C as Ct}from"./index-7fe5df2c.js";import{u as pt}from"./resizeObserver-c91e45ad.js";const St=["top","bottom"],kt=["start","end","left","right"];function _t(e,t){let[a,n]=e.split(" ");return n||(n=K(St,a)?"start":K(kt,a)?"top":"center"),{side:he(a,t),align:he(n,t)}}function he(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}const Ie=y({border:[Boolean,Number,String]},"border");function Pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{borderClasses:r(()=>{const n=O(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`border-${s}`);return i})}}const xt=[null,"default","comfortable","compact"],Le=y({density:{type:String,default:"default",validator:e=>xt.includes(e)}},"density");function Ee(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{densityClasses:r(()=>`${t}--density-${e.density}`)}}const Te=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function $e(e){return{elevationClasses:r(()=>{const a=O(e)?e.value:e.elevation,n=[];return a==null||n.push(`elevation-${a}`),n})}}const ae=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{roundedClasses:r(()=>{const n=O(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const s of String(n).split(" "))i.push(`rounded-${s}`);return i})}}function ie(e){return ke(()=>{const t=[],a={};if(e.value.background)if(ve(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&Ye(e.value.background)){const n=Ke(e.value.background);if(n.a==null||n.a===1){const i=Je(n);a.color=i,a.caretColor=i}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(ve(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}})}function F(e,t){const a=r(()=>({text:O(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=ie(a);return{textColorClasses:n,textColorStyles:i}}function be(e,t){const a=r(()=>({background:O(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=ie(a);return{backgroundColorClasses:n,backgroundColorStyles:i}}const wt=["elevated","flat","tonal","outlined","text","plain"];function Vt(e,t){return v(Qe,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ne=y({color:String,variant:{type:String,default:"elevated",validator:e=>wt.includes(e)}},"variant");function Bt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();const a=r(()=>{const{variant:s}=fe(e);return`${t}--variant-${s}`}),{colorClasses:n,colorStyles:i}=ie(r(()=>{const{variant:s,color:l}=fe(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:n,colorStyles:i,variantClasses:a}}const Re=y({divided:Boolean,...Ie(),...A(),...Le(),...Te(),...ae(),...D(),...G(),...Ne()},"VBtnGroup"),ye=L()({name:"VBtnGroup",props:Re(),setup(e,t){let{slots:a}=t;const{themeClasses:n}=M(e),{densityClasses:i}=Ee(e),{borderClasses:s}=Pe(e),{elevationClasses:l}=$e(e),{roundedClasses:d}=se(e);_e({VBtn:{height:"auto",color:I(e,"color"),density:I(e,"density"),flat:!0,variant:I(e,"variant")}}),$(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,s.value,i.value,l.value,d.value,e.class],style:e.style},a))}}),It=y({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Pt=y({value:null,disabled:Boolean,selectedClass:String},"group-item");function Lt(e,t){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=xe("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Ze();we(Symbol.for(`${t.description}:id`),i);const s=et(t,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const l=I(e,"value"),d=r(()=>!!(s.disabled.value||e.disabled));s.register({id:i,value:l,disabled:d},n),ee(()=>{s.unregister(i)});const c=r(()=>s.isSelected(i)),h=r(()=>c.value&&[s.selectedClass.value,e.selectedClass]);return te(c,b=>{n.emit("group:selected",{value:b})}),{id:i,isSelected:c,toggle:()=>s.select(i,!c.value),select:b=>s.select(i,b),selectedClass:h,value:l,disabled:d,group:s}}function Et(e,t){let a=!1;const n=tt([]),i=Ve(e,"modelValue",[],o=>o==null?[]:ze(n,it(o)),o=>{const u=$t(n,o);return e.multiple?u:u[0]}),s=xe("useGroup");function l(o,u){const C=o,m=Symbol.for(`${t.description}:id`),S=st(m,s==null?void 0:s.vnode).indexOf(u);S>-1?n.splice(S,0,C):n.push(C)}function d(o){if(a)return;c();const u=n.findIndex(C=>C.id===o);n.splice(u,1)}function c(){const o=n.find(u=>!u.disabled);o&&e.mandatory==="force"&&!i.value.length&&(i.value=[o.id])}nt(()=>{c()}),ee(()=>{a=!0});function h(o,u){const C=n.find(m=>m.id===o);if(!(u&&(C!=null&&C.disabled)))if(e.multiple){const m=i.value.slice(),x=m.findIndex(f=>f===o),S=~x;if(u=u??!S,S&&e.mandatory&&m.length<=1||!S&&e.max!=null&&m.length+1>e.max)return;x<0&&u?m.push(o):x>=0&&!u&&m.splice(x,1),i.value=m}else{const m=i.value.includes(o);if(e.mandatory&&m)return;i.value=u??!m?[o]:[]}}function b(o){if(e.multiple,i.value.length){const u=i.value[0],C=n.findIndex(S=>S.id===u);let m=(C+o)%n.length,x=n[m];for(;x.disabled&&m!==C;)m=(m+o)%n.length,x=n[m];if(x.disabled)return;i.value=[n[m].id]}else{const u=n.find(C=>!C.disabled);u&&(i.value=[u.id])}}const k={register:l,unregister:d,selected:i,select:h,disabled:I(e,"disabled"),prev:()=>b(n.length-1),next:()=>b(1),isSelected:o=>i.value.includes(o),selectedClass:r(()=>e.selectedClass),items:r(()=>n),getItemIndex:o=>Tt(n,o)};return we(t,k),k}function Tt(e,t){const a=ze(e,[t]);return a.length?e.findIndex(n=>n.id===a[0]):-1}function ze(e,t){const a=[];return t.forEach(n=>{const i=e.find(l=>at(n,l.value)),s=e[n];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function $t(e,t){const a=[];return t.forEach(n=>{const i=e.findIndex(s=>s.id===n);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const Oe=Symbol.for("vuetify:v-btn-toggle"),Nt=y({...Re(),...It()},"VBtnToggle");L()({name:"VBtnToggle",props:Nt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const{isSelected:n,next:i,prev:s,select:l,selected:d}=Et(e,Oe);return $(()=>{const c=ye.filterProps(e);return v(ye,lt({class:["v-btn-toggle",e.class]},c,{style:e.style}),{default:()=>{var h;return[(h=a.default)==null?void 0:h.call(a,{isSelected:n,next:i,prev:s,select:l,selected:d})]}})}),{next:i,prev:s,select:l}}});const Rt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),q=L(!1)({name:"VDefaultsProvider",props:Rt(),setup(e,t){let{slots:a}=t;const{defaults:n,disabled:i,reset:s,root:l,scoped:d}=ot(e);return _e(n,{reset:s,root:l,scoped:d,disabled:i}),()=>{var c;return(c=a.default)==null?void 0:c.call(a)}}});const zt=["x-small","small","default","large","x-large"],le=y({size:{type:[String,Number],default:"default"}},"size");function oe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return ke(()=>{let a,n;return K(zt,e.size)?a=`${t}--size-${e.size}`:e.size&&(n={width:g(e.size),height:g(e.size)}),{sizeClasses:a,sizeStyles:n}})}const Ot=y({color:String,start:Boolean,end:Boolean,icon:J,...A(),...le(),...D({tag:"i"}),...G()},"VIcon"),Y=L()({name:"VIcon",props:Ot(),setup(e,t){let{attrs:a,slots:n}=t;const i=ne(),{themeClasses:s}=M(e),{iconData:l}=rt(r(()=>i.value||e.icon)),{sizeClasses:d}=oe(e),{textColorClasses:c,textColorStyles:h}=F(I(e,"color"));return $(()=>{var k,o;const b=(k=n.default)==null?void 0:k.call(n);return b&&(i.value=(o=ut(b).filter(u=>u.type===ct&&u.children&&typeof u.children=="string")[0])==null?void 0:o.children),v(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,d.value,c.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},h.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[b]})}),{}}});function Ae(e,t){const a=ne(),n=dt(!1);if(vt){const i=new IntersectionObserver(s=>{e==null||e(s,i),n.value=!!s.find(l=>l.isIntersecting)},t);ee(()=>{i.disconnect()}),te(a,(s,l)=>{l&&(i.unobserve(l),n.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const At=y({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...A(),...le(),...D({tag:"div"}),...G()},"VProgressCircular"),Dt=L()({name:"VProgressCircular",props:At(),setup(e,t){let{slots:a}=t;const n=20,i=2*Math.PI*n,s=ne(),{themeClasses:l}=M(e),{sizeClasses:d,sizeStyles:c}=oe(e),{textColorClasses:h,textColorStyles:b}=F(I(e,"color")),{textColorClasses:k,textColorStyles:o}=F(I(e,"bgColor")),{intersectionRef:u,isIntersecting:C}=Ae(),{resizeRef:m,contentRect:x}=pt(),S=r(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),f=r(()=>Number(e.width)),p=r(()=>c.value?Number(e.size):x.value?x.value.width:Math.max(f.value,32)),B=r(()=>n/(1-f.value/p.value)*2),V=r(()=>f.value/p.value*B.value),N=r(()=>g((100-S.value)/100*i));return ft(()=>{u.value=s.value,m.value=s.value}),$(()=>v(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":C.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,d.value,h.value,e.class],style:[c.value,b.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${B.value} ${B.value}`},[v("circle",{class:["v-progress-circular__underlay",k.value],style:o.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":V.value,"stroke-dasharray":i,"stroke-dashoffset":N.value},null)]),a.default&&v("div",{class:"v-progress-circular__content"},[a.default({value:S.value})])]})),{}}}),Gt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Mt(e){return{dimensionStyles:r(()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)}))}}const Ce={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},De=y({location:String},"location");function Ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Be();return{locationStyles:r(()=>{if(!e.location)return{};const{side:s,align:l}=_t(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function d(h){return a?a(h):0}const c={};return s!=="center"&&(t?c[Ce[s]]=`calc(100% - ${d(s)}px)`:c[s]=0),l!=="center"?t?c[Ce[l]]=`calc(100% - ${d(l)}px)`:c[l]=0:(s==="center"?c.top=c.left="50%":c[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",c.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),c})}}const Ht=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...A(),...De({location:"top"}),...ae(),...D(),...G()},"VProgressLinear"),Wt=L()({name:"VProgressLinear",props:Ht(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const n=Ve(e,"modelValue"),{isRtl:i,rtlClasses:s}=Be(),{themeClasses:l}=M(e),{locationStyles:d}=Ge(e),{textColorClasses:c,textColorStyles:h}=F(e,"color"),{backgroundColorClasses:b,backgroundColorStyles:k}=be(r(()=>e.bgColor||e.color)),{backgroundColorClasses:o,backgroundColorStyles:u}=be(e,"color"),{roundedClasses:C}=se(e),{intersectionRef:m,isIntersecting:x}=Ae(),S=r(()=>parseInt(e.max,10)),f=r(()=>parseInt(e.height,10)),p=r(()=>parseFloat(e.bufferValue)/S.value*100),B=r(()=>parseFloat(n.value)/S.value*100),V=r(()=>i.value!==e.reverse),N=r(()=>e.indeterminate?"fade-transition":"slide-x-transition"),H=r(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function U(_){if(!m.value)return;const{left:E,right:X,width:T}=m.value.getBoundingClientRect(),W=V.value?T-_.clientX+(X-T):_.clientX-E;n.value=Math.round(W/T*S.value)}return $(()=>v(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&x.value,"v-progress-linear--reverse":V.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,l.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?g(f.value):0,"--v-progress-linear-height":g(f.value),...d.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:B.value,onClick:e.clickable&&U},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",c.value],style:{...h.value,[V.value?"left":"right"]:g(-f.value),borderTop:`${g(f.value/2)} dotted`,opacity:H.value,top:`calc(50% - ${g(f.value/4)})`,width:g(100-p.value,"%"),"--v-progress-linear-stream-to":g(f.value*(V.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",b.value],style:[k.value,{opacity:H.value,width:g(e.stream?p.value:100,"%")}]},null),v(mt,{name:N.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(_=>v("div",{key:_,class:["v-progress-linear__indeterminate",_,o.value],style:u.value},null))]):v("div",{class:["v-progress-linear__determinate",o.value],style:[u.value,{width:g(B.value,"%")}]},null)]}),a.default&&v("div",{class:"v-progress-linear__content"},[a.default({value:B.value,buffer:p.value})])]})),{}}}),Ft=y({loading:[Boolean,String]},"loader");function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{loaderClasses:r(()=>({[`${t}--loading`]:e.loading}))}}function rn(e,t){var n;let{slots:a}=t;return v("div",{class:`${e.name}__loader`},[((n=a.default)==null?void 0:n.call(a,{color:e.color,isActive:e.active}))||v(Wt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Ut=["static","relative","fixed","absolute","sticky"],Xt=y({position:{type:String,validator:e=>Ut.includes(e)}},"position");function qt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P();return{positionClasses:r(()=>e.position?`${t}--${e.position}`:void 0)}}function Yt(e,t){const a=gt("RouterLink"),n=r(()=>!!(e.href||e.to)),i=r(()=>(n==null?void 0:n.value)||me(t,"click")||me(e,"click"));if(typeof a=="string")return{isLink:n,isClickable:i,href:I(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:n,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&r(()=>{var l,d;return e.exact?(l=s.isExactActive)==null?void 0:l.value:(d=s.isActive)==null?void 0:d.value}),href:r(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Kt=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function Jt(e,t){te(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&t&&ht(()=>{t(!0)})},{immediate:!0})}const Q=Symbol("rippleStop"),Qt=80;function pe(e,t){e.style.transform=t,e.style.webkitTransform=t}function Z(e){return e.constructor.name==="TouchEvent"}function Me(e){return e.constructor.name==="KeyboardEvent"}const Zt=function(e,t){var k;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!Me(e)){const o=t.getBoundingClientRect(),u=Z(e)?e.touches[e.touches.length-1]:e;n=u.clientX-o.left,i=u.clientY-o.top}let s=0,l=.3;(k=t._ripple)!=null&&k.circle?(l=.15,s=t.clientWidth/2,s=a.center?s:s+Math.sqrt((n-s)**2+(i-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const d=`${(t.clientWidth-s*2)/2}px`,c=`${(t.clientHeight-s*2)/2}px`,h=a.center?d:`${n-s}px`,b=a.center?c:`${i-s}px`;return{radius:s,scale:l,x:h,y:b,centerX:d,centerY:c}},j={show(e,t){var u;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=t==null?void 0:t._ripple)!=null&&u.enabled))return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",a.class&&(n.className+=` ${a.class}`);const{radius:s,scale:l,x:d,y:c,centerX:h,centerY:b}=Zt(e,t,a),k=`${s*2}px`;i.className="v-ripple__animation",i.style.width=k,i.style.height=k,t.appendChild(n);const o=window.getComputedStyle(t);o&&o.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),pe(i,`translate(${d}, ${c}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),pe(i,`translate(${h}, ${b}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const a=t[t.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const n=performance.now()-Number(a.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var d;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((d=a.parentNode)==null?void 0:d.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function He(e){return typeof e>"u"||!!e}function R(e){const t={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[Q])){if(e[Q]=!0,Z(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(t.center=a._ripple.centered||Me(e),a._ripple.class&&(t.class=a._ripple.class),Z(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{j.show(e,a,t)},a._ripple.showTimer=window.setTimeout(()=>{var n;(n=a==null?void 0:a._ripple)!=null&&n.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},Qt)}else j.show(e,a,t)}}function Se(e){e[Q]=!0}function w(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{w(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),j.hide(t)}}function We(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let z=!1;function Fe(e){!z&&(e.keyCode===ge.enter||e.keyCode===ge.space)&&(z=!0,R(e))}function je(e){z=!1,w(e)}function Ue(e){z&&(z=!1,w(e))}function Xe(e,t,a){const{value:n,modifiers:i}=t,s=He(n);if(s||j.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,bt(n)&&n.class&&(e._ripple.class=n.class),s&&!a){if(i.stop){e.addEventListener("touchstart",Se,{passive:!0}),e.addEventListener("mousedown",Se);return}e.addEventListener("touchstart",R,{passive:!0}),e.addEventListener("touchend",w,{passive:!0}),e.addEventListener("touchmove",We,{passive:!0}),e.addEventListener("touchcancel",w),e.addEventListener("mousedown",R),e.addEventListener("mouseup",w),e.addEventListener("mouseleave",w),e.addEventListener("keydown",Fe),e.addEventListener("keyup",je),e.addEventListener("blur",Ue),e.addEventListener("dragstart",w,{passive:!0})}else!s&&a&&qe(e)}function qe(e){e.removeEventListener("mousedown",R),e.removeEventListener("touchstart",R),e.removeEventListener("touchend",w),e.removeEventListener("touchmove",We),e.removeEventListener("touchcancel",w),e.removeEventListener("mouseup",w),e.removeEventListener("mouseleave",w),e.removeEventListener("keydown",Fe),e.removeEventListener("keyup",je),e.removeEventListener("dragstart",w),e.removeEventListener("blur",Ue)}function en(e,t){Xe(e,t,!1)}function tn(e){delete e._ripple,qe(e)}function nn(e,t){if(t.value===t.oldValue)return;const a=He(t.oldValue);Xe(e,t,a)}const an={mounted:en,unmounted:tn,updated:nn},sn=y({active:{type:Boolean,default:void 0},symbol:{type:null,default:Oe},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:J,appendIcon:J,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Ie(),...A(),...Le(),...Gt(),...Te(),...Pt(),...Ft(),...De(),...Xt(),...ae(),...Kt(),...le(),...D({tag:"button"}),...G(),...Ne({variant:"elevated"})},"VBtn"),un=L()({name:"VBtn",directives:{Ripple:an},props:sn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:a,slots:n}=t;const{themeClasses:i}=M(e),{borderClasses:s}=Pe(e),{colorClasses:l,colorStyles:d,variantClasses:c}=Bt(e),{densityClasses:h}=Ee(e),{dimensionStyles:b}=Mt(e),{elevationClasses:k}=$e(e),{loaderClasses:o}=jt(e),{locationStyles:u}=Ge(e),{positionClasses:C}=qt(e),{roundedClasses:m}=se(e),{sizeClasses:x,sizeStyles:S}=oe(e),f=Lt(e,e.symbol,!1),p=Yt(e,a),B=r(()=>{var _;return e.active!==void 0?e.active:p.isLink.value?(_=p.isActive)==null?void 0:_.value:f==null?void 0:f.isSelected.value}),V=r(()=>(f==null?void 0:f.disabled.value)||e.disabled),N=r(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),H=r(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function U(_){var E;V.value||p.isLink.value&&(_.metaKey||_.ctrlKey||_.shiftKey||_.button!==0||a.target==="_blank")||((E=p.navigate)==null||E.call(p,_),f==null||f.toggle())}return Jt(p,f==null?void 0:f.select),$(()=>{var re,ue;const _=p.isLink.value?"a":e.tag,E=!!(e.prependIcon||n.prepend),X=!!(e.appendIcon||n.append),T=!!(e.icon&&e.icon!==!0),W=(f==null?void 0:f.isSelected.value)&&(!p.isLink.value||((re=p.isActive)==null?void 0:re.value))||!f||((ue=p.isActive)==null?void 0:ue.value);return yt(v(_,{type:_==="a"?void 0:"button",class:["v-btn",f==null?void 0:f.selectedClass.value,{"v-btn--active":B.value,"v-btn--block":e.block,"v-btn--disabled":V.value,"v-btn--elevated":N.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,s.value,W?l.value:void 0,h.value,k.value,o.value,C.value,m.value,x.value,c.value,e.class],style:[W?d.value:void 0,b.value,u.value,S.value,e.style],disabled:V.value||void 0,href:p.href.value,onClick:U,value:H.value},{default:()=>{var ce;return[Vt(!0,"v-btn"),!e.icon&&E&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(q,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(Y,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&T?v(Y,{key:"content-icon",icon:e.icon},null):v(q,{key:"content-defaults",disabled:!T,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var de;return[((de=n.default)==null?void 0:de.call(n))??e.text]}})]),!e.icon&&X&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(q,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(Y,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((ce=n.loader)==null?void 0:ce.call(n))??v(Dt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ct("ripple"),!V.value&&e.ripple,null]])}),{}}});export{rn as L,un as V,Lt as a,Le as b,Ee as c,ae as d,le as e,Te as f,oe as g,be as h,se as i,$e as j,Y as k,q as l,Pt as m,Gt as n,Mt as o,Ft as p,jt as q,F as r,Et as u};
