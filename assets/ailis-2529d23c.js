import "./modulepreload-polyfill-3cfb730f.js";
import {
    J as o
} from "./runtime-d461d07c.js";
const e = document.getElementById("canvas3d"),
    d = new o(e),
    t = document.getElementById("hints"),
    s = document.getElementById("preloader"),
    l = document.getElementById("link-container"),
    c = document.getElementById("bcontainer"),
    i = document.getElementById("tcontainer"),
    n = () => {
        e.removeEventListener("pointerdown", n), e.removeEventListener("pointerup", n), t.style.display = "none"
    },
    a = () => {
        t.style.display = "flex", e.addEventListener("pointerdown", n), 
        e.addEventListener("pointerup", n), s.style.display = "none", l.style.display = "flex", c.style.display = "flex", i.style.display = "flex"
    };
// d.load("../splinecode", {
    d.load("../scene3.splinecode", {
    mode: "no-cors"
}).then(a);