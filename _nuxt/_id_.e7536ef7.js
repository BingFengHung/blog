import{a as m,p as d,A as y,B as f,C as x,b as g,f as u,t as h,u as C,o as A}from"./entry.e369e264.js";import{u as _}from"./fetch.3528ead1.js";import{c as k}from"./convertImageUrl.178e23af.js";import{m as B}from"./markedSetup.efa5886b.js";const T=p=>{document.querySelectorAll(p).forEach(a=>{const r=a.querySelector("div");if(r&&r.classList.contains("plaintext"))return;const t=document.createElement("button");t.className="copy-button",t.innerText="Copy",a.parentNode.style.position="relative",a.parentNode.appendChild(t),t.addEventListener("click",async()=>{const l=a.innerText;try{await navigator.clipboard.writeText(l),t.innerText="Copied!",t.classList.add("copied")}catch{t.innerText="Failed"}setTimeout(()=>{t.innerText="Copy",t.classList.remove("copied")},2e3)})})};const b={class:"article"},w=["innerHTML"],L={__name:"[id]",setup(p){const o=d(""),{id:a}=y().params,{describe:r}=d("");let[t,l]=a.split("<_>>");return f(async()=>{await x(async()=>{const{data:e}=await _("https://bingfenghung.github.io/DevArticles/articles.json","$pKgfkt2l8i");e.value=Object.keys(e.value).reduce((n,s)=>{const v=e.value[s]=e.value[s].map(c=>({...c,link:c.link.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B"),title:c.title.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B")}));return{[s]:v,...n}},{}),e.value.CSharp=e.value["C#"],delete e.value["C#"],e.value.VCpp=e.value["Visual C++"],delete e.value["Visual C++"],l=l.replaceAll("#","%23").replaceAll(" ","%20").replaceAll("+","%2B");const i=e.value[t].filter(n=>n.title==l);if(i.length>0){const n=await _(i[0].link,"$1xSrxhpw0I"),s=k.imageUrlConverter(i[0].link,n);o.value=B.marked(s)}}),T("pre code")}),(e,i)=>(A(),g("div",b,[u("div",null,h(C(r)),1),u("div",{innerHTML:o.value},null,8,w)]))}},D=m(L,[["__scopeId","data-v-87ad7616"]]);export{D as default};
