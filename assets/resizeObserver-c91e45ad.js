import{r as u,as as R,S as a,A as c,at as f,I as g}from"./index-7fe5df2c.js";function m(s){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const o=u(),t=u();if(R){const n=new ResizeObserver(e=>{s==null||s(e,n),e.length&&(i==="content"?t.value=e[0].contentRect:t.value=e[0].target.getBoundingClientRect())});a(()=>{n.disconnect()}),c(o,(e,r)=>{r&&(n.unobserve(f(r)),t.value=void 0),e&&n.observe(f(e))},{flush:"post"})}return{resizeRef:o,contentRect:g(t)}}export{m as u};
