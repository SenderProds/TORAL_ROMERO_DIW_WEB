const nav = document.querySelector("#nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");
abrir.addEventListener("click", (e)=>{
    nav.classList.add("visible");
});
cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
});

//# sourceMappingURL=index.474f7490.js.map
