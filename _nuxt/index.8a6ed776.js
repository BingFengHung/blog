import{a as k,r as v,w as b,b as n,F as D,e as h,u as w,o as r,f as d,t as _,h as B,i as S,j,k as A}from"./entry.888cea62.js";import{u as C}from"./articles.bcdc9cc7.js";import"./fetch.0c5c7062.js";const M={class:"container"},N={class:"year-tag"},T={class:"article"},I={class:"datetime"},V={__name:"index",async setup(F){let u,p,y=v([]);const i=C();i.isQueryData||([u,p]=b(()=>i.fetchArticleData()),await u,p());const x=i.articleData;let f=(t=>Object.keys(t).reduce((s,o)=>{const c=t[o].map(a=>({group:o,realTitle:[a.title].map(decodeURIComponent).map(encodeURIComponent)[0],...a}));return s.concat(c)},[]).sort((s,o)=>{const c=s.lastModifyDate.split("-"),a=o.lastModifyDate.split("-"),g=new Date(...c);return new Date(...a)-g}))(x).reduce((t,e)=>{const s=e.lastModifyDate.split("-")[0];return s in t?t[s].push(e):t[s]=[e],t},{});const l=Object.keys(f).sort(function(t,e){return e-t}),m=[];for(let t=0;t<l.length;t++){const e={};e.year=l[t],e.data=f[l[t]],m.push(e)}return y=m,(t,e)=>{const s=A;return r(),n("div",null,[(r(!0),n(D,null,h(w(y),(o,c)=>(r(),n("div",M,[d("div",N,_(o.year),1),(r(!0),n(D,null,h(o.data,a=>(r(),n("div",{class:"timeline",key:a.title},[d("div",T,[d("p",I,_(a.lastModifyDate),1),B(s,{to:`articles/${a.group}<_>>${a.realTitle}`},{default:S(()=>[j(_(a.title),1)]),_:2},1032,["to"])])]))),128))]))),256))])}}},Q=k(V,[["__scopeId","data-v-eda2be9c"]]);export{Q as default};
