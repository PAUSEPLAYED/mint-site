import "./modulepreload-polyfill-3cfb730f.js";
document.getElementById("hints");
document.querySelector("button");
var e = document.querySelector(".auction-btn"),
    u = new Date("April 15, 2023 20:00:00").getTime();
e.innerHTML = "@PausePLayed";
e.disabled = !0;
var c = setInterval(function () {
    var a = new Date().getTime(),
        t = u - a,
        r = Math.floor(t / (1e3 * 60 * 60 * 24)),
        n = Math.floor(t % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
        o = Math.floor(t % (1e3 * 60 * 60) / (1e3 * 60)),
        i = Math.floor(t % (1e3 * 60) / 1e3);
    e.innerHTML = r + "D " + n + "H " + o + "M " + i + "S", t <= 0 && (e.removeAttribute("disabled"), clearInterval(c), e.innerHTML = "@PausePLayed", e.href = "https://twitter.com/pauseplayed")
}, 1e3);