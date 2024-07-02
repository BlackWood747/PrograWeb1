import { listaPeliculasSeries } from './dataPeliculas.js';
('use strict');

const cerrarSesionBtn = document.querySelector('.cerrarSesion');
const linkPeliculasBtn = document.querySelector('.linkPeliculas');
const linkSeriesBtn = document.querySelector('.linkSeries');
const linkHomeBtn = document.querySelector('.linkHome');
const inputBuscador = document.querySelector('.inputBuscador');

let gen = 'todos';
let cat = 'todos';

// const preguntarSiHayUsuario = () => {
//     if (!localStorage.getItem('nombreDeUsuario')) {
//         cerrarSesionBtn.style.display = 'none';
//     } else {
//         cerrarSesionBtn.style.display = 'block';
//     }
// };

// cerrarSesionBtn.addEventListener('click', function () {
//     //localStorage.clear();
//     //preguntarSiHayUsuario();
// });

// Home => todas las peliculas y series!

const layout = document.querySelector('.layout');

const dibujarLista = (lista) => {
    if (!lista || lista.length === 0) {
        layout.innerHTML = '';

        const h = document.createElement('h2');
        h.textContent = 'No encontrado';
        layout.appendChild(h);
    } else {
        layout.innerHTML = '';
        lista.forEach((i) => {
            const cajaElement = document.createElement('div');
            cajaElement.id = i.titulo;
            cajaElement.classList.add('caja');

            const linkElement = document.createElement('a');
            /* linkElement.href = `./detallesDePeliculas/${i.detalle}`;
            linkElement.classList.add('link'); */

            const imgElement = document.createElement('img');
            imgElement.src = i.img;
            imgElement.alt = i.titulo;

            linkElement.appendChild(imgElement);

            cajaElement.appendChild(linkElement);

            layout.appendChild(cajaElement);
        });
        setearListeners();
    }
};
dibujarLista(listaPeliculasSeries);
dibujarLista(listaPeliculasSeries);
const selectGenero = document.querySelector('.selectGenero');

const filtrar = (cat, gen) => {
    let listaFiltrada;
    if (gen == 'todos' && cat == 'todos') {
        return listaPeliculasSeries;
    } else if (gen == 'todos') {
        listaFiltrada = listaPeliculasSeries.filter((i) => {
            return i.categoria == cat;
        });
    } else if (cat == 'todos') {
        listaFiltrada = listaPeliculasSeries.filter((i) => {
            return i.genero == gen;
        });
    } else {
        listaFiltrada = listaPeliculasSeries.filter((i) => {
            return i.categoria == cat && i.genero == gen;
        });
    }

    return listaFiltrada;
};

linkPeliculasBtn.addEventListener('click', (e) => {
    cat = 'pelicula';
    let listaFiltrada = filtrar(cat, gen);
    dibujarLista(listaFiltrada);
});

linkSeriesBtn.addEventListener('click', (e) => {
    cat = 'serie';
    let listaFiltrada = filtrar(cat, gen);
    dibujarLista(listaFiltrada);
});

linkHomeBtn.addEventListener('click', (e) => {
    dibujarLista(listaPeliculasSeries);
});

selectGenero.addEventListener('change', (e) => {
    gen = e.target.value;
    let listaFiltrada = filtrar(cat, gen);
    dibujarLista(listaFiltrada);
});

inputBuscador.addEventListener('change', (e) => {
    let regex = new RegExp(`${e.target.value}`, 'i');

    let peliculasEncontrada = listaPeliculasSeries.filter((i) => regex.test(i.titulo));

    dibujarLista(peliculasEncontrada);
});

// Detalle de peliculas

const dibujarDetalle = (pelicula) => {
    const pelisSimilares = listaPeliculasSeries.filter(
        (e) => e.genero == pelicula.genero
    );

    layout.innerHTML = `<section class="Descripcion-pelicula">
    <div class="container-peliculas">
        <article class="caja-1">
          <iframe
            width="560"
            height="315"
            src=${pelicula.link_pelicula}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </article>
        <article class="caja-2">
          <p>Titulo: </p>
          <p>${pelicula.titulo}</p>
          <br />
          <p>Duracion:</p>
          <p>${pelicula.duracion}</p>
          <br />
          <p>Genero:</p>
          <p>${pelicula.genero}</p>
          <br />
          <p>
          ${pelicula.descripcion}
          </p>
          <div class="btn-irapelicula">
            <a
              href=" ${pelicula.link_pelicula}"
              target="_blank"
              >Comenzar</a
            >
          </div>
        </article>
    </div>
    
        <section class="peliculas-similares">
      
          `;
    const peliculasSimilaresLayout = document.querySelector('.peliculas-similares');

    pelisSimilares.forEach((e) => {
        let articleNode = document.createElement('article');
        articleNode.classList.add('peli');

        let imgArticle = document.createElement('img');

        imgArticle.classList.add('peliImg');
        imgArticle.src = e.img;
        imgArticle.alt = e.titulo;

        articleNode.appendChild(imgArticle);

        peliculasSimilaresLayout.appendChild(articleNode);
    });

    const cajas = document.querySelectorAll('.peli');
    cajas.forEach((e) => {
        e.addEventListener('click', (e) => {
            let titulo = e.target.alt;
            console.log(titulo);
            let pelicula = listaPeliculasSeries.find((e) => e.titulo == titulo);
            console.log(pelicula);
            window.scroll(0, 0);
            dibujarDetalle(pelicula);
        });
    });
};

function setearListeners() {
    const cajas = document.querySelectorAll('.caja');

    cajas.forEach((e) => {
        e.addEventListener('click', (e) => {
            let titulo = e.target.alt;
            let pelicula = listaPeliculasSeries.find((e) => e.titulo == titulo);
            window.scroll(0, 0);
            dibujarDetalle(pelicula);
        });
    });
}
setearListeners();

function buscarPorNombre(){
    
    
    const buscar = inputBuscador.value.toLowerCase();
   const filtradasPorNombre = listaPeliculasSeries.filter(pelicula =>{
      return  pelicula.titulo.toLowerCase().includes(buscar);
    }
    
    )
    dibujarLista(filtradasPorNombre)
}

 inputBuscador.addEventListener('input' , buscarPorNombre);
 dibujarLista(listaPeliculasSeries)