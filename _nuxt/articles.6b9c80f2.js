import{l as u}from"./entry.0b3d7db0.js";import{u as g}from"./fetch.0df894d0.js";const f=u("articleStore",{state:()=>({articleData:null,tags:null}),actions:{async fetchArticleData(){return new Promise(async(a,r)=>{const{data:i}=await g("https://bingfenghung.github.io/DevArticles/articles.json","$43KoYjzz7B");this.articleData=i,a(i)})},setData(a){this.articleData=a},getTags(){const a=this.articleData,r=Object.keys(a).reduce((s,t)=>({...a[t].reduce((n,o)=>({...o.tags.reduce((l,c)=>({...{[c]:0},...l}),{}),...n}),{}),...s}),{}),i=Object.keys(r).map(s=>s).reduce((s,t)=>{let e={};return t==="Visual C++"?e={[t]:"VCpp"}:t==="C#"?e={[t]:"CSharp"}:t==="Visual Studio"?e={[t]:"VisualStudio"}:t==="Unit Test"?e={[t]:"UnitTest"}:e={[t]:t},{...e,...s}},{});this.tags=i}},getters:{}});export{f as u};
