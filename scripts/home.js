import { listaPeliculasSeries } from './dataPeliculas.js';
('use strict');

const cerrarSesionBtn = document.querySelector('.cerrarSesion');
const linkPeliculasBtn = document.querySelector('.linkPeliculas');
const linkSeriesBtn = document.querySelector('.linkSeries');
const linkHomeBtn = document.querySelector('.linkHome');

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
    layout.innerHTML = '';
    lista.forEach((i) => {
        const cajaElement = document.createElement('div');
        cajaElement.classList.add('caja');

        const linkElement = document.createElement('a');
        linkElement.href = `./detallesDePeliculas/${i.detalle}`;

        const imgElement = document.createElement('img');
        imgElement.src = i.img;
        imgElement.alt = i.titulo;

        linkElement.appendChild(imgElement);

        cajaElement.appendChild(linkElement);

        layout.appendChild(cajaElement);
    });
};
dibujarLista(listaPeliculasSeries);

const selectGenero = document.querySelector('.selectGenero');

const filtrarPorGenero = (genero) => {
    if (genero == 'todosLosGeneros') {
        return listaPeliculasSeries;
    } else {
        let listaFiltrada = listaPeliculasSeries.filter((i) => {
            return i.genero == genero;
        });
        console.log(listaFiltrada);
        return listaFiltrada;
    }
};

const filtrarPorCategoria = (cat) => {
    let listaFiltrada = listaPeliculasSeries.filter((i) => {
        return i.categoria == cat;
    });
    return listaFiltrada;
};

linkPeliculasBtn.addEventListener('click', (e) => {
    let listaFiltrada = filtrarPorCategoria('pelicula');
    dibujarLista(listaFiltrada);
});

linkSeriesBtn.addEventListener('click', (e) => {
    let listaFiltrada = filtrarPorCategoria('serie');
    dibujarLista(listaFiltrada);
});

linkHomeBtn.addEventListener('click', (e) => {
    dibujarLista(listaPeliculasSeries);
});

selectGenero.addEventListener('change', (e) => {
    let listaFiltrada = filtrarPorGenero(e.target.value);
    console.log(listaFiltrada);
    console.log(e.target.value);
    dibujarLista(listaFiltrada);

});
