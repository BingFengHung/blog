import{l as _,r as l,B as u,H as d,b as a,F as p,e as f,u as m,o as n,f as h,h as x,i as g,j as v,t as b,k as j,a as k}from"./entry.0c38c607.js";import{u as y}from"./fetch.c2ec9aac.js";const D=_("toolsStore",()=>{let e=l({});const o=()=>new Promise(async(t,r)=>{const{data:s}=await y("https://bingfenghung.github.io/DevArticles/tools.json","$j8OJ0Nhk69");t(s)});return u(async()=>{const t=await o();console.log(t),Object.assign(e,t.value)}),{toolData:e}}),N={class:"container"},w={class:"title"},B=d({__name:"index",setup(e){const{toolData:o}=D();return(t,r)=>{const s=j;return n(),a("div",N,[(n(!0),a(p,null,f(m(o),(c,i)=>(n(),a("div",{key:i},[h("div",w,[x(s,{to:`/tools/${c.url}`},{default:g(()=>[v(b(c.title),1)]),_:2},1032,["to"])])]))),128))])}}});const V=k(B,[["__scopeId","data-v-13f5899b"]]);export{V as default};
