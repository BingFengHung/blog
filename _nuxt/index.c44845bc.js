import{a as g,r as A,w as v,b as o,F as h,e as k,u as B,o as c,f as _,t as p,h as C,i as S,j as b,k as w}from"./entry.6fdd1772.js";import{u as V}from"./articles.7bb2f47e.js";import"./fetch.5d31721a.js";const j={class:"container"},M={class:"article"},N={class:"datetime"},T={__name:"index",async setup(L){let u,y,f=A([]);const i=V();[u,y]=v(()=>i.fetchArticleData()),await u,y();const l=Object.keys(i.articleData).reduce((t,e)=>{const r=i.articleData[e].map(s=>(s.realLink=s.link.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B"),s.realTitle=s.title.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B"),{...s}));return{[e]:r,...t}},{});l.CSharp=l["C#"],delete l["C#"],l.VCpp=l["Visual C++"],delete l["Visual C++"];let D=(t=>Object.keys(t).reduce((a,r)=>{const s=t[r].map(n=>({group:r,...n}));return a.concat(s)},[]).sort((a,r)=>{const s=a.lastModifyDate.split("-"),n=r.lastModifyDate.split("-"),x=new Date(...s);return new Date(...n)-x}))(l).reduce((t,e)=>{const a=e.lastModifyDate.split("-")[0];return a in t?t[a].push(e):t[a]=[e],t},{});const d=Object.keys(D).sort(function(t,e){return e-t}),m=[];for(let t=0;t<d.length;t++){const e={};e.year=d[t],e.data=D[d[t]],m.push(e)}return f=m,(t,e)=>{const a=w;return c(),o("div",null,[(c(!0),o(h,null,k(B(f),(r,s)=>(c(),o("div",j,[_("div",null,p(r.year),1),(c(!0),o(h,null,k(r.data,n=>(c(),o("div",{class:"timeline",key:n.title},[_("div",M,[_("p",N,p(n.lastModifyDate),1),C(a,{to:`articles/${n.group}_${n.realTitle}`},{default:S(()=>[b(p(n.title),1)]),_:2},1032,["to"])])]))),128))]))),256))])}}},q=g(T,[["__scopeId","data-v-3e98bd9f"]]);export{q as default};
