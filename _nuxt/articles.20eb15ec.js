import{l as g}from"./entry.cec480fd.js";import{u as f}from"./fetch.478e77b1.js";const p=g("articleStore",{state:()=>({articleData:null,tags:null}),actions:{async fetchArticleData(){return new Promise(async(s,r)=>{const{data:e}=await f("https://bingfenghung.github.io/DevArticles/articles.json","$43KoYjzz7B");this.articleData=e,s(e)})},setData(s){this.articleData=s},getTags(){const s=this.articleData,r=Object.keys(s).reduce((i,t)=>({...s[t].reduce((o,l)=>({...l.tags.reduce((c,u)=>({...{[u]:0},...c}),{}),...o}),{}),...i}),{}),e=Object.keys(r).map(i=>i).reduce((i,t)=>{let a={};return t==="Visual C++"?a={[t]:"VCpp"}:t==="C#"?a={[t]:"CSharp"}:t==="Visual Studio"?a={[t]:"VisualStudio"}:t==="Unit Test"?a={[t]:"UnitTest"}:a={[t]:t},{...a,...i}},{});for(var n in e)e[n]==="0"&&delete e[n];this.tags=e}},getters:{}});export{p as u};
