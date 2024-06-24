import { listaPeliculasSeries } from './dataPeliculas.js';
('use strict');


const cerrarSesionBtn = document.querySelector('.cerrarSesion');
const linkPeliculasBtn = document.querySelector('.linkPeliculas');
const linkSeriesBtn = document.querySelector('.linkSeries');
const linkHomeBtn = document.querySelector('.linkHome');
const inputBuscador = document.querySelector('.inputBuscador');

let gen = 'todos';
let cat = 'todos';

const preguntarSiHayUsuario = () => {
    if (!localStorage.getItem('nombreDeUsuario')) {
        cerrarSesionBtn.style.display = 'none';
    } else {
        cerrarSesionBtn.style.display = 'block';
    }
};

cerrarSesionBtn.addEventListener('click', function () {
    localStorage.clear();
    preguntarSiHayUsuario();
    console.log(localStorage.getItem('nombreDeUsuario'));
});

// Home => todas las peliculas y series!

const layout = document.querySelector('.layout');

const dibujarLista = (lista) => {
    if (!lista || lista.length === 0) {
        layout.innerHTML = '';

        console.log('No encontrado');
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
            /* linkElement.href = `./detallesDePeliculas/${i.detalle}`; */

            const imgElement = document.createElement('img');
            imgElement.src = i.img;
            imgElement.alt = i.titulo;

            linkElement.appendChild(imgElement);

            cajaElement.appendChild(linkElement);

            layout.appendChild(cajaElement);
        });
        setearListeners()

    }
};
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
        console.log(listaFiltrada);
    } else if (cat == 'todos') {
        listaFiltrada = listaPeliculasSeries.filter((i) => {
            return i.genero == gen;
        });
    } else {
        listaFiltrada = listaPeliculasSeries.filter((i) => {
            return i.categoria == cat && i.genero == gen;
        });
        console.log(listaFiltrada);
    }
    console.log(listaFiltrada);

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
    
    console.log(pelicula);
    layout.innerHTML = `<section class="Descripcion-pelicula">
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

          <p>${pelicula.genero}a</p>
          <br />
          <p>Actores:</p>
          <a href="https://es.wikipedia.org/wiki/Jonah_Hill" target="_blank"
            >Jonah Hill</a
          >
          <a href="https://es.wikipedia.org/wiki/Michael_Cera" target="_blank"
            >Michael Cera</a
          >
          <a
            href="https://es.wikipedia.org/wiki/Christopher_Mintz-Plasse"
            target="_blank"
            >Christopher Mintz-Plasse</a
          >
          <a href="https://es.wikipedia.org/wiki/Bill_Hader" target="_blank"
            >Bill Hader</a
          >
          <a href="https://es.wikipedia.org/wiki/Seth_Rogen" target="_blank"
            >Seth Rogen</a
          >
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
        </article>`;
};

function setearListeners() {
const cajas = document.querySelectorAll('.caja');

    cajas.forEach((e) => {
        e.addEventListener('click', (e) => {
            let titulo = e.target.alt;
            let pelicula = listaPeliculasSeries.find((e) => e.titulo == titulo);
            dibujarDetalle(pelicula);
        });
    });
}
setearListeners()