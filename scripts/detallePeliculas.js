
function agregarPelicula(){
    const nodo_main = document.querySelector("main")
    for(let pelicula of PELICULAS){
        let nodo_article = document.createElement("article")
        let nodo_a = document.createElement("a")
        nodo_a.href = "../HTMl/detallesDePeliculas/nombre=pelicula${i}"
        nodo_a.target = "_blank"
        nodo_article.appendChild(nodo_a)
        nodo_main.appendChild(nodo_article)
    }
}