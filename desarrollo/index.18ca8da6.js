let parte1 = document.getElementById("parte1");
let collage = document.getElementById("collage");
let parte2 = document.getElementById("parte2");
let parte3 = document.getElementById("parte3");
let parte4 = document.getElementById("parte4");
window.addEventListener("scroll", (e)=>{
    comprobar();
});
function comprobar() {
    comprobarPosicionPresentacion(parte1, collage);
    comprobarPosicion(parte2);
    comprobarPosicion(parte3);
    comprobarPosicion(parte4);
}
function comprobarPosicionPresentacion(seccion, imagenes) {
    let parte1Rect = seccion.getBoundingClientRect();
    let parte1Articulo = seccion.querySelector("article");
    if (parte1Rect.top < parte1Rect.height && parte1Rect.top > -parte1Rect.height) {
        if (parte1Articulo.classList.contains("ocultar")) {
            parte1Articulo.classList.remove("ocultar");
            parte1Articulo.classList.add("fade-in");
            imagenes.classList.remove("ocultar");
            imagenes.classList.add("collage");
            imagenes.classList.add("fade-in-5s");
        }
    } else {
        parte1Articulo.classList.add("ocultar");
        imagenes.classList.add("ocultar");
        imagenes.classList.remove("fade-in-5s");
        imagenes.classList.remove("collage");
    }
}
function comprobarPosicion(seccion) {
    let parteRect = seccion.getBoundingClientRect();
    let parteArticulo = seccion.querySelector("article");
    if (parteRect.top < parteRect.height && parteRect.top > -parteRect.height) {
        if (parteArticulo.classList.contains("ocultar")) {
            parteArticulo.classList.remove("ocultar");
            parteArticulo.classList.add("fade-in");
        }
    } else parteArticulo.classList.add("ocultar");
}

//# sourceMappingURL=index.18ca8da6.js.map
