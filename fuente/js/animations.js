let presentacion = document.getElementById('parte1');
let collage = document.getElementById('collage');
function comprobar() {
    let seccionTop = presentacion.getBoundingClientRect().top;
    let articulo = presentacion.querySelector('article');    
    

    if (seccionTop < 310 && seccionTop > -400) {
        
        if(articulo.classList.contains('ocultar')){
            articulo.classList.remove('ocultar');
            articulo.classList.add('fade-in');
            collage.classList.remove('ocultar');
            collage.classList.add('collage');
            collage.classList.add('fade-in-5s');


        }
    }else{
        articulo.classList.add('ocultar');
    }

}

window.addEventListener('scroll', (e) => {
comprobar();
});



