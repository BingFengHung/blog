import{a as p,r as h,w as v,b as c,f as t,F as m,e as f,u as o,o as i,H as x,I as w,h as S,i as y,t as d,D as g,E as D,k as b}from"./entry.81819143.js";import{u as k}from"./articles.e36ff3b6.js";import"./fetch.d46e46fd.js";const I=n=>(g("data-v-01b9805a"),n=n(),D(),n),A={class:"container"},B=I(()=>t("div",{style:{"font-weight":"bold"}},"\u5206\u985E",-1)),N={class:"link"},C={class:"count"},E={__name:"index",async setup(n){let _,r,e=h({});const s=k();return s.isQueryData||([_,r]=v(()=>s.fetchArticleData()),await _,r(),s.getTags()),e=s.articleData,(F,L)=>{const u=b;return i(),c("div",A,[B,t("div",null,[t("ul",null,[(i(!0),c(m,null,f(o(s).tags,(a,l)=>x((i(),c("li",{key:l},[S(u,{to:`/tags/${a}`},{default:y(()=>[t("div",N,[t("div",null,d(l),1),t("div",C,d(o(e)[a]?o(e)[a].length:0),1)])]),_:2},1032,["to"])])),[[w,o(e)[a]&&o(e)[a].length!==0]])),128))])])])}}},T=p(E,[["__scopeId","data-v-01b9805a"]]);export{T as default};