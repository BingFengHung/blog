import{a as p,r as u,w as h,b as n,f as a,F as m,e as v,u as f,o as c,E as x,G as b,h as w,i as S,t as d,H as g,I as y,k}from"./entry.cf74cdb7.js";import{u as D}from"./articles.767a5523.js";import"./fetch.8ee73839.js";const I=o=>(g("data-v-77bbdd98"),o=o(),y(),o),A={class:"container"},B=I(()=>a("div",{style:{"font-weight":"bold"}},"\u5206\u985E",-1)),N={class:"link"},C={class:"count"},E={__name:"index",async setup(o){let i,_;const t=u({}),e=D();return e.isQueryData||([i,_]=h(()=>e.fetchArticleData()),await i,_(),e.getTags()),Object.assign(t,e.articleData),(F,L)=>{const l=k;return c(),n("div",A,[B,a("ul",null,[(c(!0),n(m,null,v(f(e).tags,(s,r)=>x((c(),n("li",{key:r},[w(l,{to:`/tags/${s}`},{default:S(()=>[a("div",N,[a("div",null,d(r),1),a("div",C,d(t[s]?t[s].length:0),1)])]),_:2},1032,["to"])])),[[b,t[s]&&t[s].length!==0]])),128))])])}}},H=p(E,[["__scopeId","data-v-77bbdd98"]]);export{H as default};