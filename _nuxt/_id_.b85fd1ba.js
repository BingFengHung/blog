import{a as y,p as s,A as g,B as h,C as x,b as S,f as i,t as B,u as T,o as w}from"./entry.c8b2c20f.js";import{u as n}from"./fetch.a0aa13be.js";import{c as M}from"./convertImageUrl.0458159c.js";import{m as c}from"./markedSetup.06b5b5a7.js";import{a as A}from"./addCopyButtons.dce6ed13.js";import{u as C,a as D}from"./articles.1bafebbd.js";import{u as H}from"./articleLink.4c3f45f2.js";const $={class:"article"},I=["innerHTML"],U=["innerHTML"],b={__name:"[id]",setup(E){const l=H(),r=s(""),o=s(""),{id:_}=g().params,{describe:u}=s("");let[d,p]=_.split("<_>>");const a=C();return h(async()=>{await x(async()=>{a.isQueryData||await a.fetchArticleData();const e=a.articleData[d].filter(t=>t.title==p);if(e.length>0){const t=e[0].realLink,f=await n(t,"$pKgfkt2l8i"),v=M.imageUrlConverter(t,f);if(r.value=c.marked(v),l.setTitle(e[0].title),e[0].isSeries){const k=e[0].seriesLink,L=await n(`${D}${k}`,"$1xSrxhpw0I");o.value=c.marked(L.data.value)}}}),A("pre code")}),(m,e)=>(w(),S("div",$,[i("div",null,B(T(u)),1),i("div",{innerHTML:r.value},null,8,I),i("div",{innerHTML:o.value},null,8,U)]))}},q=y(b,[["__scopeId","data-v-f1635821"]]);export{q as default};
