import "./modulepreload-polyfill-3cfb730f.js";
import {
    K as o
} from "./runtime-d0dd47fd.js";
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
        t.style.display = "flex", e.addEventListener("pointerdown", n), e.addEventListener("pointerup", n), s.style.display = "none", l.style.display = "flex", c.style.display = "flex", i.style.display = "flex"
    };
// d.load("../scene3.splinecode", {
    d.load("https://prod.spline.design/8cdlMnjGSo1AQ-30/scene.splinecode", {
    credentials: "include",
    mode: "no-cors"
}).then(a);