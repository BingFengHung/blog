import{a as m,p as o,A as f,B as v,C as k,b as y,f as r,t as g,u as h,o as x}from"./entry.d871b093.js";import{u as B}from"./fetch.912180ef.js";import{c as L}from"./convertImageUrl.0458159c.js";import{m as S}from"./markedSetup.efa5886b.js";import{a as b}from"./addCopyButtons.dce6ed13.js";import{u as A}from"./articles.5e49995c.js";import{u as D}from"./articleLink.29ae2cef.js";const T={class:"article"},w=["innerHTML"],C={__name:"[id]",setup(M){const i=D(),s=o(""),{id:c}=f().params,{describe:n}=o("");let[l,_]=c.split("<_>>");const a=A();return v(async()=>{await k(async()=>{a.isQueryData||await a.fetchArticleData();const t=a.articleData[l].filter(e=>e.title==_);if(t.length>0){const e=t[0].link,d=await B(e,"$pKgfkt2l8i"),p=L.imageUrlConverter(e,d);s.value=S.marked(p),i.setTitle(t[0].title)}}),b("pre code")}),(u,t)=>(x(),y("div",T,[r("div",null,g(h(n)),1),r("div",{innerHTML:s.value},null,8,w)]))}},Q=m(C,[["__scopeId","data-v-c17b8407"]]);export{Q as default};
