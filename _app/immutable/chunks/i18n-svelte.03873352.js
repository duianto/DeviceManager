import{w as f}from"./index.c4cb2da7.js";var p=()=>new Proxy(Object.assign(()=>"",{}),{get:(r,e)=>e==="length"?0:p()}),y=r=>Object.fromEntries(Object.entries(r).map(([e,t])=>e!=="i"&&t&&t!="0"&&[e,t]).filter(Boolean)),L=r=>Object.fromEntries(Object.keys(r).map(e=>{const t=r[e];return[e,Array.isArray(t)?t.map(s=>s?.trim()):t===!!t?t:t?.trim()]})),E=r=>{const[e="",...t]=r.split("|"),[s="",n]=e.split(":"),[o,a]=s.split("?");return{k:o,i:n,n:a==="",f:t}},w=r=>!!(r.o||r.r),O=(r,e)=>{let[t,s]=r.split(":");s||(s=t,t=e);const n=s.split("|"),[o,a,i,l,g,d]=n,c=n.filter(P=>P!==void 0).length;return c===1?{k:t,r:o}:c===2?{k:t,o,r:a}:c===3?{k:t,z:o,o:a,r:i}:{k:t,z:o,o:a,t:i,f:l,m:g,r:d}},k=/^\{.*\}$/,h=r=>Object.fromEntries(u(r).split(",").map(e=>e.split(":")).reduce((e,t)=>t.length===2?[...e,t.map(s=>s.trim())]:(e[e.length-1][1]+=","+t[0],e),[])),m=/(\{(?:[^{}]+|\{(?:[^{}]+)*\})*\})/g,u=r=>r.substring(1,r.length-1),j=(r,e=!0,t="",s="")=>r.split(m).map(n=>{if(!n.match(m))return n;const o=u(n);if(o.startsWith("{"))return O(u(o),s);const a=E(o);return s=a.k||s,!t&&(t=s),a}).map(n=>{if(typeof n=="string")return n;n.k||(n.k=t||"0");const o=L(n);return e?y(o):o}),A=(r,e,t)=>e.reduce((s,n)=>(n.match(k)?(o=>o[s]??o["*"])(h(n)):r[n]?.(s))??s,t),_=(r,{z:e,o:t,t:s,f:n,m:o,r:a},i)=>{switch(e&&i==0?"zero":r.select(i)){case"zero":return e;case"one":return t;case"two":return s;case"few":return n??a;case"many":return o??a;default:return a}},S=/\?\?/g,I=(r,e,t,s)=>r.map(n=>{if(typeof n=="string")return n;const{k:o="0",f:a=[]}=n,i=s[o];return w(n)?((typeof i=="boolean"?i?n.o:n.r:_(e,n,i))||"").replace(S,i):(""+((a.length?A(t,a,i):i)??"")).trim()}).join(""),R=(r,e,t,s)=>{const n=s[0],o=n&&typeof n=="object"&&n.constructor===Object,a=s.length===1&&o?n:s;return I(r,e,t,a)},C=(r,e)=>r[e]||(r[e]=j(e)),T=(r,e)=>{const t={},s=new Intl.PluralRules(r);return(n,...o)=>R(C(t,n),s,e,o)};function V(r,e,t={}){return v(e,T(r,t))}var b=(r={},e)=>typeof r=="string"?e.bind(null,r):Object.assign(Object.defineProperty(()=>"","name",{writable:!0}),r),v=(r,e)=>new Proxy(b(r,e),{get:(t,s)=>s===Symbol.iterator?[][Symbol.iterator].bind(Object.values(t).map(n=>b(n,e))):v(t[s],e)}),z=(r,e={})=>{const t=f(),s=f(p()),n=B(t),o=new Proxy({},{get:(i,l)=>l==="subscribe"?s.subscribe:s[l]});return{locale:n,LL:o,setLocale:i=>{t.set(i),s.set(V(i,r[i],e[i]))}}};function B(r){return{subscribe:r.subscribe.bind(r)}}var x=r=>!!r,G=r=>Array.from(new Set(r)),N=(r,e,...t)=>{for(let s of t){let n=W(e,s);if(n)return n}return r},W=(r,e)=>{let t=e().map(o=>o.toLowerCase()),s=G(t.flatMap(o=>[o,o.split("-")[0]])),n=r.map(o=>o.toLowerCase());return s.map(o=>{let a=n.findIndex(i=>i===o);return a>=0&&r[a]}).find(x)};const X="en",F=["de","en"],U={},H={},M=(...r)=>N(X,F,...r),{locale:$,LL:q,setLocale:D}=z(U,H);export{q as L,H as a,F as b,M as d,U as l,D as s};
//# sourceMappingURL=i18n-svelte.03873352.js.map
