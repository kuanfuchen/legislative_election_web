import{r,o as u,n as b,J as h,k as n,w as l,a2 as m,K as t,a3 as a,V as f,L as v}from"./index-8d19b76d.js";import{V as y,a as p}from"./VRow-50f87322.js";import{V as x}from"./VTextField-5e72494a.js";import"./transition-946e7dd5.js";const F={class:"d-flex align-items-center activityGlobalStyle"},C=t("p",{class:"text-h2 font-weight-black mb-10 text-center"},"小額捐款",-1),z=t("p",{class:"btnFontSize btnFontWeight"},"喵星人之友",-1),V=t("p",{class:"btnFontSize btnFontWeight"},"NT$6,00",-1),k=t("p",{style:{"font-size":"24px"}},"已有9999人贊助",-1),w=[z,V,k],S=t("p",{class:"btnFontSize btnFontWeight"},"喵星大使",-1),W=t("p",{class:"btnFontSize btnFontWeight"},"NT$6,000",-1),$=t("p",{style:{"font-size":"24px"}},"已有2000人贊助",-1),N=[S,W,$],j=t("p",{class:"btnFontSize btnFontWeight"},"喵星人傳奇",-1),B=t("p",{class:"btnFontSize btnFontWeight"},"NT$60,000",-1),P=t("p",{style:{"font-size":"24px"}},"已有999人贊助",-1),T=[j,B,P],I=t("p",{class:"btnFontSize btnFontWeight text-center"},"自訂贊助金額",-1),A={class:"d-flex justify-center"},G=["src"],L={class:"d-flex justify-center mt-5"},M=t("div",{style:{"background-color":"#D5F0FC"},class:"text-center mt-5 border w-100 py-5 rounded-lg"},[t("p",{style:{"font-size":"24px","font-weight":"600"}},"目前贊助金額"),t("p",{class:"btnFontWeight btnFontSize"},"$987,655,873")],-1),R=t("p",{class:"btnFontSize text-center btnFontWeight"},"您的小筆捐款，是每隻毛孩未來的大大動力！",-1),K={__name:"SAHomeGift",setup(U){const o=r(""),d=r(0),_=["../assets/contentImg/sponsor4.png","../assets/contentImg/sponsor3.png","../assets/contentImg/sponsor2.png","../assets/contentImg/sponsor1.png"],c=r(""),i=(g,e)=>{c.value=new URL(_[e],import.meta.url).href,o.value=e,console.log(g)};return u(()=>{c.value=new URL(_[0],import.meta.url).href}),(g,e)=>(b(),h("div",F,[n(m,null,{default:l(()=>[C,n(y,{"no-gutters":""},{default:l(()=>[n(p,{cols:"6"},{default:l(()=>[t("div",{class:a(["d-flex justify-space-around clickPoint align-center btn_border w-100 py-5 rounded-lg bg-grey-lighten-3",{btnChangeColor:o.value===0}]),onClick:e[0]||(e[0]=s=>i(600,0))},w,2),t("div",{class:a(["mt-5 d-flex justify-space-around clickPoint align-center btn_border w-100 py-5 rounded-lg bg-grey-lighten-3",{btnChangeColor:o.value===1}]),onClick:e[1]||(e[1]=s=>i(6e3,1))},N,2),t("div",{class:a(["mt-5 d-flex justify-space-around clickPoint align-center btn_border w-100 py-5 rounded-lg bg-grey-lighten-3",{btnChangeColor:o.value===2}]),onClick:e[2]||(e[2]=s=>i(6e4,2))},T,2),t("div",{class:a(["mt-5 btn_border align-center w-100 py-2 rounded-lg bg-grey-lighten-3",{btnChangeColor:o.value===3}]),onClick:e[4]||(e[4]=s=>i(null,3))},[I,n(x,{modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=s=>d.value=s),variant:"outlined",class:"mt-5 px-5",label:"請輸入金額"},null,8,["modelValue"])],2)]),_:1}),n(p,{cols:"6",class:"pl-10"},{default:l(()=>[t("div",A,[t("img",{src:c.value,alt:""},null,8,G)]),t("div",L,[n(f,{size:"large",rounded:"xl",color:"black",style:{"font-size":"24px","font-weight":"bold"}},{default:l(()=>[v("前往捐款 ")]),_:1})])]),_:1})]),_:1}),M,R]),_:1})]))}};export{K as default};