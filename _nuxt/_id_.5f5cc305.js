import{a as v,p as c,A as f,B as m,C as g,b as k,f as i,t as A,u as h,o as C}from"./entry.9b9ea0b6.js";import{u as o}from"./fetch.24fd0d68.js";import{c as x}from"./convertImageUrl.178e23af.js";import{m as B}from"./markedSetup.05ad47cd.js";const y={class:"article"},b=["innerHTML"],S={__name:"[id]",setup(V){const n=c(""),{id:p}=f().params,{describe:u}=c("");let[_,s]=p.split("<_>>");return m(async()=>{g(async()=>{const{data:e}=await o("https://bingfenghung.github.io/DevArticles/articles.json","$pKgfkt2l8i");e.value=Object.keys(e.value).reduce((a,l)=>{const d=e.value[l]=e.value[l].map(r=>({...r,link:r.link.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B"),title:r.title.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B")}));return{[l]:d,...a}},{}),e.value.CSharp=e.value["C#"],delete e.value["C#"],e.value.VCpp=e.value["Visual C++"],delete e.value["Visual C++"],s=s.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B");const t=e.value[_].filter(a=>a.title==s);if(t.length>0){const a=await o(t[0].link,"$1xSrxhpw0I"),l=x.imageUrlConverter(t[0].link,a);n.value=B.marked(l)}})}),(e,t)=>(C(),k("div",y,[i("div",null,A(h(u)),1),i("div",{innerHTML:n.value},null,8,b)]))}},j=v(S,[["__scopeId","data-v-f058ffa6"]]);export{j as default};
