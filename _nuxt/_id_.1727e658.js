import{K as m,p as h,B as f,C as v,o as c,b as r,f as s,t as _,a as D,l as b,r as y,A as C,F as x,e as k,u,h as T}from"./entry.c5ef3518.js";import{u as p}from"./fetch.14434758.js";import{a as $}from"./addCopyButtons.dce6ed13.js";import{m as w}from"./markedSetup.06b5b5a7.js";const S={class:"card"},B={class:"title"},F={class:"title_subject"},j={class:"title_tag"},A=["innerHTML"],E=m({__name:"CommandCard",props:["group","commandData"],setup(t){const{group:o,commandData:e}=t,a=h(""),i="https://bingfenghung.github.io/DevArticles/Tools";return f(async()=>{await v(async()=>{const l=(await p(`${i}/${o}/${e.link}`,"$o0AmEeFWnE")).data;a.value=w.marked(l.value.toString())}),$("pre code")}),(n,l)=>(c(),r("div",S,[s("div",B,[s("div",F,_(t.commandData.title),1),s("div",j,_(t.group),1)]),s("div",{innerHTML:a.value},null,8,A)]))}});const L=D(E,[["__scopeId","data-v-e41ab932"]]),M="https://bingfenghung.github.io/DevArticles/Tools",U=b("specificToolStore",()=>{let t=y([]);return{toolData:t,fetchData:e=>new Promise(async(a,i)=>{const{data:n}=await p(`${M}/${e}/link.json`,"$42UtanPxF1");for(;t.length!=0;)t.pop();Object.assign(t,n.value),a(n)})}}),K=m({__name:"[id]",setup(t){let{id:o}=C().params,{toolData:e,fetchData:a}=U();for(;e.length!=0;)e.pop();return(async()=>{await a(o.toString())})(),(n,l)=>{const g=L;return c(),r("div",null,[(c(!0),r(x,null,k(u(e),(d,H)=>(c(),r("div",{key:d},[T(g,{group:u(o),commandData:d},null,8,["group","commandData"])]))),128))])}}});export{K as default};