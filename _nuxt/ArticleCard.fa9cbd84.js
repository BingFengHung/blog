import{a as m,p as _,B as v,o as f,b as h,f as e,t as x,h as k,i as y,u as r,k as g,E as C,G as D}from"./entry.9b9ea0b6.js";import{u as I}from"./fetch.24fd0d68.js";import{c as B}from"./convertImageUrl.178e23af.js";import{m as M}from"./markedSetup.05ad47cd.js";const S=t=>(C("data-v-d52ec062"),t=t(),D(),t),$={class:"article"},w={class:"subtitle"},A=["innerHTML"],L=S(()=>e("span",null,"\u7E7C\u7E8C\u95B1\u8B80...",-1)),N={__name:"ArticleCard",props:["articleData"],setup(t){const{articleData:i}=t,a=_(""),s=_(""),{group:l,title:d,link:o,lastModifyDate:p}=i;return s.value=p,v(async()=>{const c=await I(o,"$kjRKXaqdP6"),n=B.imageUrlConverter(o,c);a.value=M.marked(n)}),(c,n)=>{const u=g;return f(),h("div",$,[e("div",w,"\u66F4\u65B0\u65E5\u671F\uFF1A"+x(s.value),1),e("div",{class:"content",innerHTML:a.value},null,8,A),k(u,{class:"read-more",to:`/articles/${r(l)}<_>>${r(d)}`},{default:y(()=>[L]),_:1},8,["to"])])}}},U=m(N,[["__scopeId","data-v-d52ec062"]]);export{U as _};