import{a as v,p as _,B as g,C as x,o as y,b,f as o,t as k,h as L,i as C,u,k as D,E as w,G as B}from"./entry.6fdd1772.js";import{u as d}from"./fetch.5d31721a.js";import{m as i,H as n}from"./github-dark.db840a55.js";import{c as I}from"./convertImageUrl.178e23af.js";const S=e=>(w("data-v-ef7b6824"),e=e(),B(),e),$={class:"article"},A={class:"subtitle"},H=["innerHTML"],M=S(()=>o("div",null,"\u7E7C\u7E8C\u95B1\u8B80",-1)),j={__name:"ArticleCard",props:["articleData"],setup(e){const{articleData:p}=e,r=_(""),c=_(""),{group:h,title:f,link:l,lastModifyDate:m}=p;return c.value=m,g(async()=>{i.setOptions({renderer:new i.Renderer,highlight:function(a,t){const s=n.getLanguage(t)?t:"plaintext";return t&&n.getLanguage(t)?'<div class="hljs">'+n.highlight(s,a).value+"</div>":n.highlight(s,a).value},pedantic:!1,gfm:!0,tables:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1}),x(async()=>{await d("https://bingfenghung.github.io/DevArticles/articles.json","$kjRKXaqdP6");const a=await d(l,"$hx8nBZqdnV"),t=I.imageUrlConverter(l,a);r.value=i(t)})}),(a,t)=>{const s=D;return y(),b("div",$,[o("div",A,"\u66F4\u65B0\u65E5\u671F\uFF1A"+k(c.value),1),o("div",{class:"content",innerHTML:r.value},null,8,H),L(s,{to:`/articles/${u(h)}_${u(f)}`},{default:C(()=>[M]),_:1},8,["to"])])}}},E=v(j,[["__scopeId","data-v-ef7b6824"]]);export{E as _};