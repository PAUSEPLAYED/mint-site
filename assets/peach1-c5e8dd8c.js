import"./modulepreload-polyfill-3cfb730f.js";import{l as o}from"./runtime-fb50d82a.js";const e=document.getElementById("canvas3d"),d=new o(e),t=document.getElementById("hints"),s=document.getElementById("preloader"),l=document.getElementById("link-container"),n=()=>{e.removeEventListener("pointerdown",n),e.removeEventListener("pointerup",n),t.style.display="none"},i=()=>{t.style.display="flex",e.addEventListener("pointerdown",n),e.addEventListener("pointerup",n),s.style.display="none",l.style.display="flex"};d.load("../scene1.splinecode",{credentials:"include",mode:"no-cors"}).then(i);
