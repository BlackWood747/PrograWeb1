const QUERY_PARAMS_NOMBRE = 'indice';
const url_vista = document.location.href;
const url = new URL(url_vista)
const indice_de_la_pelicula = url.searchParams.get(QUERY_PARAMS_NOMBRE)

const PELICULAS = JSON.parse(localStorage.getItem('peliculas'))

const pelicula = new Pelicua(PELICULAS[indice_de_la_pelicula])

const nodo_texto_h1 = document.createTextNode(pelicula.nombre)
const nodo_h1 = document.createElement('h1')
nodo_h1.appendChild(nodo_texto_h1)


const nodo_texto_p = document.createTextNode(pelicula.descripcion)
const nodo_p = document.CreateElement('p')
nodo_p.appendChild(nodo_texto_p)
