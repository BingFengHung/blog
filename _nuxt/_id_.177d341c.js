import{a as m,p as r,A as f,B as v,C as g,b as h,f as a,t as y,u as k,F as x,o as S,D as B,E as D}from"./entry.81819143.js";import{u as I}from"./fetch.d46e46fd.js";import{c as w}from"./convertImageUrl.0458159c.js";import{m as A}from"./markedSetup.efa5886b.js";import{a as C}from"./addCopyButtons.dce6ed13.js";import{u as F}from"./articles.e36ff3b6.js";const L=t=>(B("data-v-3d97c150"),t=t(),D(),t),M={class:"article"},T=["innerHTML"],b=L(()=>a("div",null,null,-1)),E={__name:"[id]",setup(t){const c=r(""),{id:i}=f().params,{describe:n}=r("");let[l,_]=i.split("<_>>");const s=F();return v(async()=>{await g(async()=>{s.isQueryData||await s.fetchArticleData();const o=s.articleData[l].filter(e=>e.title==_);if(o.length>0){const e=o[0].link,p=await I(e,"$pKgfkt2l8i"),u=w.imageUrlConverter(e,p);c.value=A.marked(u)}}),C("pre code")}),(d,o)=>(S(),h(x,null,[a("div",M,[a("div",null,y(k(n)),1),a("div",{innerHTML:c.value},null,8,T)]),b],64))}},V=m(E,[["__scopeId","data-v-3d97c150"]]);export{V as default};