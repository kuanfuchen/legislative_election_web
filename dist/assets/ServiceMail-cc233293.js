import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";import{p as ae,h as ne,a7 as le,c as y,r as x,s as oe,a8 as ie,o as se,C as m,a9 as re,j as ue,aa as ce,k as a,ab as I,ac as R,D as A,E as de,ad as fe,I as S,ae as ve,d as xe,af as me,n as he,J as ge,K as s,w as we,V as _e,L as Ve}from"./index-8d19b76d.js";import{m as ye,a as be,I as Ce,u as Fe,b as G,f as ke,c as Pe,d as Ie,e as Re,V as D}from"./VTextField-5e72494a.js";import"./transition-946e7dd5.js";const Se=ae({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ye(),...be()},"VTextarea"),Be=ne()({name:"VTextarea",directives:{Intersect:Ce},inheritAttrs:!1,props:Se(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,B){let{attrs:b,emit:p,slots:r}=B;const o=le(e,"modelValue"),{isFocused:v,focus:U,blur:j}=Fe(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(b.maxlength)return b.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function J(t,l){var n,i;!e.autofocus||!t||(i=(n=l[0].target)==null?void 0:n.focus)==null||i.call(n)}const N=x(),h=x(),T=oe(""),g=x(),K=y(()=>e.persistentPlaceholder||v.value||e.active);function C(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),v.value||U()}function L(t){C(),p("click:control",t)}function q(t){p("mousedown:control",t)}function Q(t){t.stopPropagation(),C(),S(()=>{o.value="",ve(e["onClick:clear"],t)})}function W(t){var n;const l=t.target;if(o.value=l.value,(n=e.modelModifiers)!=null&&n.trim){const i=[l.selectionStart,l.selectionEnd];S(()=>{l.selectionStart=i[0],l.selectionEnd=i[1]})}}const d=x(),w=x(+e.rows),F=y(()=>["plain","underlined"].includes(e.variant));ie(()=>{e.autoGrow||(w.value=+e.rows)});function f(){e.autoGrow&&S(()=>{if(!d.value||!h.value)return;const t=getComputedStyle(d.value),l=getComputedStyle(h.value.$el),n=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),i=d.value.scrollHeight,_=parseFloat(t.lineHeight),k=Math.max(parseFloat(e.rows)*_+n,parseFloat(l.getPropertyValue("--v-input-control-height"))),P=parseFloat(e.maxRows)*_+n||1/0,c=me(i??0,k,P);w.value=Math.floor((c-n)/_),T.value=xe(c)})}se(f),m(o,f),m(()=>e.rows,f),m(()=>e.maxRows,f),m(()=>e.density,f);let u;return m(d,t=>{t?(u=new ResizeObserver(f),u.observe(d.value)):u==null||u.disconnect()}),re(()=>{u==null||u.disconnect()}),ue(()=>{const t=!!(r.counter||e.counter||e.counterValue),l=!!(t||r.details),[n,i]=ce(b),{modelValue:_,...k}=G.filterProps(e),P=ke(e);return a(G,I({ref:N,modelValue:o.value,"onUpdate:modelValue":c=>o.value=c,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":F.value},e.class],style:e.style},n,k,{centerAffix:w.value===1&&!F.value,focused:v.value}),{...r,default:c=>{let{id:V,isDisabled:z,isDirty:E,isReadonly:X,isValid:Y}=c;return a(Pe,I({ref:h,style:{"--v-textarea-control-height":T.value},onClick:L,onMousedown:q,"onClick:clear":Q,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},P,{id:V.value,active:K.value||E.value,centerAffix:w.value===1&&!F.value,dirty:E.value||e.dirty,disabled:z.value,focused:v.value,error:Y.value===!1}),{...r,default:Z=>{let{props:{class:M,...H}}=Z;return a(R,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),A(a("textarea",I({ref:g,class:M,value:o.value,onInput:W,autofocus:e.autofocus,readonly:X.value,disabled:z.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:j},H,i),null),[[de("intersect"),{handler:J},null,{once:!0}]]),e.autoGrow&&A(a("textarea",{class:[M,"v-textarea__sizer"],id:`${H.id}-sizer`,"onUpdate:modelValue":ee=>o.value=ee,ref:d,readonly:!0,"aria-hidden":"true"},null),[[fe,o.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?c=>{var V;return a(R,null,[(V=r.details)==null?void 0:V.call(r,c),t&&a(R,null,[a("span",null,null),a(Ie,{active:e.persistentCounter||v.value,value:O.value,max:$.value},r.counter)])])}:void 0})}),Re({},N,h,g)}}),pe={},Ne={class:"d-flex justify-center activityGlobalStyle"},Te={class:"text-center"},ze=s("div",{class:"text-h4 text-center font-weight-black"},"服務信箱",-1),Ee=s("div",{class:"text-h5 mt-3 font-weight-bold"}," 親愛的鄉親，每位市民的意見是我們社區前進的原動力。 ",-1),Me=s("div",{class:"text-h5 mt-1 font-weight-bold"}," 分享您的想法，一同為我們的未來打造更美好！ ",-1),He={class:"rounded-lg bg-grey-lighten-3 px-5 pt-10 pb-5 mt-10",style:{width:"40vw"}},Ae=s("p",{class:"text-h5 font-weight-bold mb-2 text-left"},"你的姓名",-1),Ge=s("p",{class:"mt-2 text-h5 font-weight-bold mb-2 text-left"},"你的信箱",-1),De=s("p",{class:"mt-2 text-h5 font-weight-bold text-left mb-2"},"你的建議",-1),Ue={class:"d-flex justify-center pb-5"};function je(e,B){return he(),ge("div",Ne,[s("div",Te,[ze,Ee,Me,s("div",He,[Ae,a(D,{label:"姓名",variant:"outlined"}),Ge,a(D,{label:"Email",variant:"outlined"}),De,a(Be,{label:"留言",variant:"outlined"}),s("div",Ue,[a(_e,{size:"large",rounded:"xl",color:"black",style:{"font-size":"24px","font-weight":"bold"}},{default:we(()=>[Ve("送出建議 ")]),_:1})])])])])}const Le=te(pe,[["render",je]]);export{Le as default};