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
    if ((!lista || lista.length === 0)) {
        layout.innerHTML = '';

        console.log('No encontrado');
        const h = document.createElement('h2')
        h.textContent= "No encontrado"
        layout.appendChild(h)

    } else {
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
    let regex = new RegExp(`${e.target.value}`,"i")

    let peliculasEncontrada = listaPeliculasSeries.filter((i) => regex.test(i.titulo));

     dibujarLista(peliculasEncontrada); 
});

//////////////

/* 


import { listaPeliculasSeries } from './dataPeliculas.js';
('use strict');

const cerrarSesionBtn = document.querySelector('.cerrarSesion');
const linkPeliculasBtn = document.querySelector('.linkPeliculas');
const linkSeriesBtn = document.querySelector('.linkSeries');
const linkHomeBtn = document.querySelector('.linkHome');

let genero = 'todos';
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

const filtrar = (cat, gen) => {
    let listaFiltrada = listaPeliculasSeries.filter((i) => {
        return i.categoria == cat && i.genero == gen;
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
    genero = e.target.value;

    let listaFiltrada = filtrarPorGenero(e.target.value);
    dibujarLista(listaFiltrada);
});
 */
