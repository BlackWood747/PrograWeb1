import { listaPeliculasSeries } from './dataPeliculas.js';
('use strict');

const cerrarSesionBtn = document.querySelector('.cerrarSesion');

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
    layout.innerHTML = ""
    lista.forEach((i) => {
        // Crear el elemento div
        const cajaElement = document.createElement('div');
        cajaElement.classList.add('caja');

        // Crear el elemento a y agregar el atributo href
        const linkElement = document.createElement('a');
        linkElement.href = `./detallesDePeliculas/${i.detalle}`;

        // Crear el elemento img y establecer los atributos
        const imgElement = document.createElement('img');
        imgElement.src = i.img;
        imgElement.alt = i.titulo;

        // Agregar el elemento img al elemento a
        linkElement.appendChild(imgElement);

        // Agregar el elemento a al elemento div
        cajaElement.appendChild(linkElement);

        // Agregar el elemento div al elemento layout
        layout.appendChild(cajaElement);
    });
};
dibujarLista(listaPeliculasSeries);

const selectCategoria = document.querySelector('.selectCategoria');

const filtrarPorGenero = (genero) => {
   let listaFiltrada= listaPeliculasSeries.filter((i) => {
       return i.genero == genero;
    });
    console.log(listaFiltrada)
    return listaFiltrada
};

selectCategoria.addEventListener('change', (e) => {
    let listaFiltrada = filtrarPorGenero(e.target.value);
    console.log(listaFiltrada);
    console.log(e.target.value);
    dibujarLista(listaFiltrada);

    /* dibujarLista(e.target.value); */
});
