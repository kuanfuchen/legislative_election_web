import{z as L,p as k,m as W,e as D,t as F,h as $,v as N,x as U,A as J,B as K,r as I,c as m,s as w,C as R,b as q,j as A,D as P,E as Q,k as c,V as B,F as Z,i as p,G as ee,H as te,d as X,I as ne,n as oe,J as se,w as y,K as l,L as T}from"./index-8d19b76d.js";import{u as ie}from"./ssrBoot-73981a26.js";import{M as ae}from"./transition-946e7dd5.js";const le="/legislative_election_web/assets/text-3918a7f8.png",ue="/legislative_election_web/assets/cat-39e22bf1.png",ce="/legislative_election_web/assets/2-e19c75b3.png";const de=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:i}=e,u=.5,s=16;e.offsetX=t-o,e.offsetY=i-n,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&i<n-s&&e.up(e),e.down&&i>n+s&&e.down(e))};function re(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function ve(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),de(o)}function fe(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function he(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>re(t,o),touchend:t=>ve(t,o),touchmove:t=>fe(t,o)}}function me(e,o){var f;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},u=(f=o.instance)==null?void 0:f.$.uid;if(!n||!u)return;const s=he(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[u]=s,L(s).forEach(v=>{n.addEventListener(v,s[v],i)})}function ge(e,o){var u,s;const t=(u=o.value)!=null&&u.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const i=t._touchHandlers[n];L(i).forEach(f=>{t.removeEventListener(f,i[f])}),delete t._touchHandlers[n]}const j={mounted:me,unmounted:ge},z=Symbol.for("vuetify:v-window"),M=Symbol.for("vuetify:v-window-group"),_e=k({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...W(),...D(),...F()},"VWindow"),ye=$()({name:"VWindow",directives:{Touch:j},props:_e(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=N(e),{isRtl:i}=U(),{t:u}=J(),s=K(e,M),f=I(),v=m(()=>i.value?!e.reverse:e.reverse),h=w(!1),x=m(()=>{const a=e.direction==="vertical"?"y":"x",g=(v.value?!h.value:h.value)?"-reverse":"";return`v-window-${a}${g}-transition`}),C=w(0),b=I(void 0),_=m(()=>s.items.value.findIndex(a=>s.selected.value.includes(a.id)));R(_,(a,r)=>{const g=s.items.value.length,H=g-1;g<=2?h.value=a<r:a===H&&r===0?h.value=!0:a===0&&r===H?h.value=!1:h.value=a<r}),q(z,{transition:x,isReversed:h,transitionCount:C,transitionHeight:b,rootRef:f});const d=m(()=>e.continuous||_.value!==0),E=m(()=>e.continuous||_.value!==s.items.value.length-1);function S(){d.value&&s.prev()}function V(){E.value&&s.next()}const G=m(()=>{const a=[],r={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${v.value?"right":"left"}`,onClick:s.prev,ariaLabel:u("$vuetify.carousel.prev")};a.push(d.value?t.prev?t.prev({props:r}):c(B,r,null):c("div",null,null));const g={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${v.value?"left":"right"}`,onClick:s.next,ariaLabel:u("$vuetify.carousel.next")};return a.push(E.value?t.next?t.next({props:g}):c(B,g,null):c("div",null,null)),a}),O=m(()=>e.touch===!1?e.touch:{...{left:()=>{v.value?S():V()},right:()=>{v.value?V():S()},start:r=>{let{originalEvent:g}=r;g.stopPropagation()}},...e.touch===!0?{}:e.touch});return A(()=>P(c(e.tag,{ref:f,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var a,r;return[c("div",{class:"v-window__container",style:{height:b.value}},[(a=t.default)==null?void 0:a.call(t,{group:s}),e.showArrows!==!1&&c("div",{class:"v-window__controls"},[G.value])]),(r=t.additional)==null?void 0:r.call(t,{group:s})]}}),[[Q("touch"),O.value]])),{group:s}}}),xe=k({eager:Boolean},"lazy");function be(e,o){const t=w(!1),n=m(()=>t.value||e.eager||o.value);R(o,()=>t.value=!0);function i(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:n,onAfterLeave:i}}const we=k({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...W(),...Z(),...xe()},"VWindowItem"),Y=$()({name:"VWindowItem",directives:{Touch:j},props:we(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=p(z),i=ee(e,M),{isBooted:u}=ie();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=w(!1),f=m(()=>u.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function v(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function h(){var d;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=X((d=n.rootRef.value)==null?void 0:d.clientHeight)),n.transitionCount.value+=1)}function x(){v()}function C(d){s.value&&ne(()=>{!f.value||!s.value||!n||(n.transitionHeight.value=X(d.clientHeight))})}const b=m(()=>{const d=n.isReversed.value?e.reverseTransition:e.transition;return f.value?{name:typeof d!="string"?n.transition.value:d,onBeforeEnter:h,onAfterEnter:v,onEnterCancelled:x,onBeforeLeave:h,onAfterLeave:v,onLeaveCancelled:x,onEnter:C}:!1}),{hasContent:_}=be(e,i.isSelected);return A(()=>c(ae,{transition:b.value,disabled:!u.value},{default:()=>{var d;return[P(c("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[_.value&&((d=t.default)==null?void 0:d.call(t))]),[[te,i.isSelected.value]])]}})),{groupItem:i}}}),Be={class:"d-flex align-center justify-center",style:{height:"100%"}},Ce={class:"d-flex justify-center"},Ie=l("img",{src:le,alt:""},null,-1),Te={class:"mt-5"},ke=l("div",{class:""},[l("img",{src:ue,alt:""})],-1),Ee={class:"d-flex justify-center"},Se={class:"d-flex justify-center align-center"},Ve={class:"titleStyle"},He={class:"px-5 py-10 childStyle"},Xe=l("p",{class:"text-h3 font-weight-bold text-center"},[T("喵立翰 "),l("span",{class:"ml-3"},"MIAO LIHAN")],-1),Ye=l("p",{class:"textstyle mt-5"}," 推動更完善貓咪福利和政策，間接投資台灣未來。 民眾身心健康是推動經濟的核心動力。透過完善的 貓咪福利政策，為台灣GDP經濟帶來巨大效益。讓 一同護航台灣幸福經濟，從照顧每一隻貓咪開始。 ",-1),Le={class:"mt-5"},We=l("div",{class:"animation imgAnimation"},[l("img",{src:ce,alt:""})],-1),Pe={__name:"Home",setup(e){const o=I("index");return(t,n)=>(oe(),se("div",Be,[c(ye,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=i=>o.value=i)},{default:y(()=>[c(Y,{value:"index"},{default:y(()=>[l("div",Ce,[l("div",null,[Ie,l("div",Te,[c(B,{size:"large",rounded:"xl",color:"black",style:{"font-size":"24px","font-weight":"bold"},onClick:n[0]||(n[0]=i=>o.value="selected")},{default:y(()=>[T(" 候選人選項 ")]),_:1})])]),ke])]),_:1}),c(Y,{value:"selected"},{default:y(()=>[l("div",Ee,[l("div",Se,[l("div",Ve,[l("div",He,[Xe,Ye,l("div",Le,[c(B,{size:"large",rounded:"xl",color:"black",style:{"font-size":"24px","font-weight":"bold"},onClick:n[1]||(n[1]=i=>o.value="index")},{default:y(()=>[T(" 首頁 ")]),_:1})])])])]),We])]),_:1})]),_:1},8,["modelValue"])]))}};export{Pe as default};
