import{a as w,r as h,i as k,j as x,o as g,b as m,f as C,y,A as D,B as L,C as B,x as f,F as V,D as j,u as $,z as H,c as M}from"./entry.173cb9e0.js";import{m as u,H as r,u as v}from"./github-dark.279a77a4.js";import{c as S}from"./convertImageUrl.178e23af.js";const E={class:"article"},F=["innerHTML"],N={__name:"ArticleCard",props:["group","title","link"],setup(p){const{group:o,title:d,link:c}=p,_=h("");return k(async()=>{u.setOptions({renderer:new u.Renderer,highlight:function(i,e){const t=r.getLanguage(e)?e:"plaintext";return e&&r.getLanguage(e)?'<div class="hljs">'+r.highlight(t,i).value+"</div>":r.highlight(t,i).value},pedantic:!1,gfm:!0,tables:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1}),x(async()=>{await v("https://bingfenghung.github.io/DevArticles/articles.json","$kjRKXaqdP6");const i=await v(c,"$hx8nBZqdnV"),e=S.imageUrlConverter(c,i);_.value=u(e)})}),(i,e)=>{const t=B;return g(),m("div",E,[C("div",{class:"content",innerHTML:_.value},null,8,F),y(t,{to:`/articles/${p.group}_${p.title}`},{default:D(()=>[L(" \u7E7C\u7E8C\u95B1\u8B80 ")]),_:1},8,["to"])])}}},O=w(N,[["__scopeId","data-v-09fdfce8"]]);const R={__name:"index",setup(p){h("");let o=f([]),d=f([]);const c=h(1),_=e=>Object.keys(e).reduce((a,n)=>{const s=e[n].map(l=>({group:n,...l}));return a.concat(s)},[]).sort((a,n)=>{const s=a.lastModifyDate.split("-"),l=n.lastModifyDate.split("-"),A=new Date(...s),b=new Date(...l);return A-b});k(async()=>{u.setOptions({renderer:new u.Renderer,highlight:function(e,t){const a=r.getLanguage(t)?t:"plaintext";return t&&r.getLanguage(t)?'<div class="hljs">'+r.highlight(a,e).value+"</div>":r.highlight(a,e).value},pedantic:!1,gfm:!0,tables:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1}),x(async()=>{const{data:e}=await v("https://bingfenghung.github.io/DevArticles/articles.json","$PslAyef5YX");e.value=Object.keys(e.value).reduce((a,n)=>{const s=e.value[n]=e.value[n].map(l=>(l.link=l.link.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B"),l.title=l.title.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B"),{...l}));return{[n]:s,...a}},{}),console.log(e.value),e.value.CSharp=e.value["C#"],delete e.value["C#"],e.value.VCpp=e.value["Visual C++"],delete e.value["Visual C++"],d=_(e.value),d.slice(0,6).forEach(a=>{o.push(a)})})});const i=e=>{const t=d.slice(6*(e-1),6+6*(e-1));o=[],t.forEach(a=>{o.push(a)}),console.log(o)};return Array.prototype.asyncForEach=async function(e){for(let t=0;t<this.length;t++)await e(this[t],t,this)},(e,t)=>{const a=O,n=H("vue-awesome-paginate");return g(),m("div",null,[(g(!0),m(V,null,j($(o),(s,l)=>(g(),M(a,{key:s,group:s.group,title:s.title,link:s.link},null,8,["group","title","link"]))),128)),y(n,{"total-items":50,"items-per-page":5,"max-pages-shown":5,modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=s=>c.value=s),"show-breapoint-buttons":!1,"show-jump-buttons":!0,"on-click":i},null,8,["modelValue"])])}}};export{R as default};
