import{a as v,p as i,A as m,B as f,C as g,b as k,f as c,t as A,u as h,o as y}from"./entry.155cd3af.js";import{u as o}from"./fetch.19db0229.js";import{c as C}from"./convertImageUrl.178e23af.js";import{m as x}from"./markedSetup.efa5886b.js";import{a as B}from"./addCopyButtons.dce6ed13.js";const b={class:"article"},w=["innerHTML"],S={__name:"[id]",setup(V){const n=i(""),{id:p}=m().params,{describe:_}=i("");let[u,s]=p.split("<_>>");return f(async()=>{await g(async()=>{const{data:e}=await o("https://bingfenghung.github.io/DevArticles/articles.json","$pKgfkt2l8i");e.value=Object.keys(e.value).reduce((a,t)=>{const d=e.value[t]=e.value[t].map(r=>({...r,link:r.link.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B"),title:r.title.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B")}));return{[t]:d,...a}},{}),e.value.CSharp=e.value["C#"],delete e.value["C#"],e.value.VCpp=e.value["Visual C++"],delete e.value["Visual C++"],s=s.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B");const l=e.value[u].filter(a=>a.title==s);if(l.length>0){const a=await o(l[0].link,"$1xSrxhpw0I"),t=C.imageUrlConverter(l[0].link,a);n.value=x.marked(t)}}),B("pre code")}),(e,l)=>(y(),k("div",b,[c("div",null,A(h(_)),1),c("div",{innerHTML:n.value},null,8,w)]))}},H=v(S,[["__scopeId","data-v-87ad7616"]]);export{H as default};
