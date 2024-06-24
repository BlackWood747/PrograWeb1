/* ('use strict');
import { listaPeliculasSeries } from './dataPeliculas.js';

const caja = document.querySelectorAll('.caja');
const layout = document.querySelector('.layout');

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
    caja.forEach((e) => {
        e.addEventListener('click', (e) => {
            let titulo = e.target.alt;
            let pelicula = listaPeliculasSeries.find((e) => e.titulo == titulo);
            dibujarDetalle(pelicula);
        });
    });
}
setearListeners() */