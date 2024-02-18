let formularioSesion = document.getElementById("formSesion");
let btnSesion = document.getElementById('btnSesion');

if(formularioSesion){
    formularioSesion.addEventListener('submit', (e) => {
    e.preventDefault();
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    let objeto = {
        user: user,
        password: password
    }

    localStorage.setItem("sesion", JSON.stringify(objeto));
    comprobarSesion();
});

}






function comprobarSesion() {
    if (localStorage.getItem('sesion')) {
        btnSesion.textContent = "CUENTA";
    } else {
        btnSesion.textContent = "INICIAR SESION";
    }
}

comprobarSesion();