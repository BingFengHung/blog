import{_ as f}from"./ArticleCard.a8a2e3f6.js";import{a as g,A as h,r as p,p as y,B as D,C as k,b as _,F as d,e as C,u as x,f as A,h as b,D as B,o as r,c as V}from"./entry.93098ac1.js";import{u as w}from"./fetch.82a9cfd9.js";import"./convertImageUrl.178e23af.js";import"./markedSetup.05ad47cd.js";const j={class:"pagination"},E={__name:"[id]",setup(F){let{id:n}=h().params;n=n.replace(" ","");let o=p([]);const u=y(1);let c=p([]);const i=e=>{const[a,t,s]=e.split("-").map(Number);return new Date(a,t-1,s)},m=e=>e.sort((a,t)=>{const s=i(a.lastModifyDate);return i(t.lastModifyDate)-s});D(async()=>{k(async()=>{const{data:e}=await w("https://bingfenghung.github.io/DevArticles/articles.json","$e7oyLa3T5R");e.value=Object.keys(e.value).reduce((a,t)=>{const s=e.value[t]=e.value[t].map(l=>(l.link=l.link.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B"),l.title=l.title.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B"),{...l}));return{[t]:s,...a}},{}),e.value.CSharp=e.value["C#"],delete e.value["C#"],e.value.VCpp=e.value["Visual C++"],delete e.value["Visual C++"],e.value=e.value[n],e.value=e.value.map(a=>({group:n,...a})),c=m(e.value),e.value.forEach(a=>{o.push(a)})})});const v=e=>{const a=c.slice(6*(e-1),6+6*(e-1));o=[],a.forEach(t=>{o.push(t)})};return(e,a)=>{const t=f,s=B("vue-awesome-paginate");return r(),_(d,null,[(r(!0),_(d,null,C(x(o),(l,L)=>(r(),V(t,{key:l,articleData:l},null,8,["articleData"]))),128)),A("div",j,[b(s,{"total-items":100,"items-per-page":5,"max-pages-shown":1,modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=l=>u.value=l),"show-breapoint-buttons":!1,"show-jump-buttons":!0,"on-click":v},null,8,["modelValue"])])],64)}}},H=g(E,[["__scopeId","data-v-d830e434"]]);export{H as default};
