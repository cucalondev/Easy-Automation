import{_ as o,r as s,o as a,c as r,a as e,b as c,w as i,n as l}from"./index-b4f17e97.js";const d={data(){return{bannerImageIndex:0,bannerImages:["https://picsum.photos/1920/1080","https://picsum.photos/1920/1080","https://picsum.photos/1920/1080"]}},computed:{bannerImage(){return this.bannerImages[this.bannerImageIndex]}},mounted(){this.interval=setInterval(()=>{this.bannerImageIndex=(this.bannerImageIndex+1)%this.bannerImages.length},3e3)},beforeDestroy(){clearInterval(this.interval)}},m={class:"h-full bg-black bg-opacity-75 flex flex-col items-center justify-center"},h=e("h1",{class:"text-3xl font-bold text-white mb-10"},"Welcome to home automation",-1),_=e("p",{class:"text-lg text-white mb-6"},"Control and automate all your devices with just one click.",-1),u=e("button",{class:"bg-white text-indigo-500 font-bold py-2 px-4 rounded hover:bg-indigo-100 hover:text-indigo-600"}," Get Started ",-1);function b(g,p,x,I,f,t){const n=s("router-link");return a(),r("div",{class:"h-screen bg-cover bg-center",style:l({backgroundImage:`url(${t.bannerImage})`})},[e("div",m,[h,_,c(n,{to:{name:"Register"}},{default:i(()=>[u]),_:1})])],4)}const y=o(d,[["render",b]]);export{y as default};
