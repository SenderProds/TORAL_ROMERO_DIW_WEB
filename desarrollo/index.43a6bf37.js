let tituloOriginal = document.title;
window.addEventListener("blur", (e)=>{
    document.title = "\uD83D\uDE01Espero que vuelvas\uD83D\uDE01";
});
window.addEventListener("focus", function() {
    document.title = tituloOriginal;
});
if (typeof nav == "undefined") {
    let nav1 = document.querySelector("#nav");
}
if (typeof abrir == "undefined") {
    let abrir1 = document.getElementById("abrir");
}
if (typeof cerra == "undefined") {
    let cerrar1 = document.getElementById("cerrar");
}
abrir.addEventListener("click", (e)=>{
    nav.classList.add("visible");
});
cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
});
window.addEventListener("scroll", (e)=>{
    if (nav.classList.contains("visible")) nav.classList.remove("visible");
});

//# sourceMappingURL=index.43a6bf37.js.map
