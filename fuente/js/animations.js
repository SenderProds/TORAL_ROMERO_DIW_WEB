let presentacion = document.getElementById('parte1');
let collage = document.getElementById('collage');

function comprobar() {
    let seccionRect = presentacion.getBoundingClientRect();
    let articulo = presentacion.querySelector('article');    
    
    
    if (seccionRect.top < seccionRect.height && seccionRect.top > -seccionRect.height) {
        
        if(articulo.classList.contains('ocultar')){
            articulo.classList.remove('ocultar');
            articulo.classList.add('fade-in');
            collage.classList.remove('ocultar');
            collage.classList.add('collage');
            collage.classList.add('fade-in-5s');


        }
    }else{
        articulo.classList.add('ocultar');
        collage.classList.add('ocultar');
        collage.classList.remove('fade-in-5s');
        collage.classList.remove('collage');
    }

}

window.addEventListener('scroll', (e) => {
comprobar();
});



