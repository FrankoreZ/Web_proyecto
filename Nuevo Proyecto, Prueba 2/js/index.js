//agregar un listener//
document.querySelector("#registrar-btn").addEventListener("click", () => {
    let nombre = document.querySelector("#nombre-text").value;
    let Url = document.querySelector("#url-txt").value;
    let Email = document.querySelector("#email-text").value;
    let Fecha = document.querySelector("#txt_fecha").value;
    let Id = document.querySelector("#rbt_genero").value;
    let Comunas = document.querySelector("#Comunas-text").value;
    let Comentarios = document.querySelector("#txa_comentarios").value;
    console.log(nombre, " ", Url, " ", Email, " ", Fecha, " ", Id, " ", Comunas, " ", Comentarios, " ")
});