import{a as v,p as c,A as m,B as f,C as g,b as k,f as i,t as A,u as h,o as b}from"./entry.b48cc401.js";import{u as o}from"./fetch.12a1501c.js";import{c as y}from"./convertImageUrl.ec3dca48.js";import{m as C}from"./markedSetup.efa5886b.js";import{a as x}from"./addCopyButtons.dce6ed13.js";const B={class:"article"},w=["innerHTML"],S={__name:"[id]",setup(V){const n=c(""),{id:p}=m().params,{describe:_}=c("");let[u,s]=p.split("<_>>");return f(async()=>{await g(async()=>{const{data:e}=await o("https://bingfenghung.github.io/DevArticles/articles.json","$pKgfkt2l8i");e.value=Object.keys(e.value).reduce((a,t)=>{const d=e.value[t]=e.value[t].map(r=>({...r,link:r.link.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B"),title:r.title.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B")}));return{[t]:d,...a}},{}),e.value.CSharp=e.value["C#"],delete e.value["C#"],e.value.VCpp=e.value["Visual C++"],delete e.value["Visual C++"],s=s.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B");const l=e.value[u].filter(a=>a.title==s);if(l.length>0){const a=await o(l[0].link,"$1xSrxhpw0I"),t=y.imageUrlConverter(l[0].link,a);n.value=C.marked(t)}}),x("pre code")}),(e,l)=>(b(),k("div",B,[i("div",null,A(h(_)),1),i("div",{innerHTML:n.value},null,8,w)]))}},H=v(S,[["__scopeId","data-v-5a535bcb"]]);export{H as default};