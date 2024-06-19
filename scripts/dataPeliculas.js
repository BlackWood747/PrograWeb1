'use strict';
const listaPeliculasSeries = [
    {
        titulo: 'Neighbors',
        categoria: 'pelicula',
        duracion: '97 minutos',
        genero: 'comedia',
        detalle: 'neighbors.html',
        descripción:
            ' La trama sigue a una pareja de padres primerizos, Kelly y Mac, que\
            se ven obligados a enfrentar a una fraternidad <br />universitaria\
            que se ha instalado al lado de su casa. La fraternidad, liderada por\
            Teddy Sanders (Zac Efron), <br />está decidida a organizar una gran\
            fiesta de fin de año y no tiene reparos en hacer ruido y causar\
            disturbios <br />en el vecindario Kelly y Mac, que están cansados de\
            la falta de paz y tranquilidad en su hogar, deciden tomar <br />\
            medidas para detener la fiesta y restablecer el orden en el\
            vecindario.',
        link_pelicula: 'https://youtu.be/S8EJVX735dY?si=D49uaT4E4oD7YmKB',
        img: '/Src Img/neighbors.jpg',
    },
    {
        titulo: 'Superbad',
        duracion: '118 minutos',
        categoria: 'pelicula',

        genero: 'comedia',
        detalle: 'superbad.html',
        descripción:
            ' La trama sigue a dos amigos, Evan y Seth, que están a punto de\
        separarse después de graduarse de la escuela secundaria <br />y\
        asistir a universidades diferentes. Para celebrar su último fin de\
        semana juntos, planean organizar una fiesta en la casa de Seth\
        <br />pero las cosas se complican cuando descubren que no tienen\
        permiso para vender alcohol y deben encontrar una forma de\
        obtenerlo.',
        link_pelicula: 'https://youtu.be/T5PwUtWE03Y?si=4c6CmPpSXvAu_aqQ',
        img: '/Src Img/superbad.jpg',
    },
    {
        titulo: 'The hangover',
        categoria: 'pelicula',
        duracion: '100 minutos',
        genero: 'comedia' /*Actores :[],*/,
        detalle: 'thehangover.html',
        img: '/Src Img/thehangover.jpg',

        descripción:
            ' La trama sigue a dos amigos, Evan y Seth, que están a punto de\
        separarse después de graduarse de la escuela secundaria <br />\
        asistir a universidades diferentes. Para celebrar su último fin de\
        semana juntos, planean organizar una fiesta en la casa de Seth\
        <br />pero las cosas se complican cuando descubren que no tienen\
        permiso para vender alcohol y deben encontrar una forma de\
        obtenerlo.',
    },
    {
        titulo: 'The Joker',
        categoria: 'pelicula',
        duracion: '122 minutos',
        genero: 'drama',
        detalle: 'thejoker.html',
        img: '/Src Img/joker-poster.jpg',

        descripción:
            'Arthur Fleck es un hombre que lucha por encontrar su lugar en la sociedad fracturada de Gotham City. Durante el día trabaja como payaso, pero por la noche aspira a ser un comediante stand-up. Conforme sus esfuerzos son rechazados, más se sumerge en la locura, transformándose paulatinamente en el criminal conocido como Joker.',
        link_pelicula: 'https://www.youtube.com/watch?v=zAGVQLHvwOY',
    },
    {
        titulo: 'The Office',
        categoria: 'serie',
        duracion: '22 minutos por episodio',
        genero: 'comedia',
        detalle: 'theoffice.html',
        img: '/Src Img/theOffice-poster.jpg',

        descripción:
            'The Office es una serie de televisión estadounidense de comedia que sigue la vida de los empleados de la sucursal de Scranton de la empresa Dunder Mifflin, una compañía ficticia de papel. La serie retrata las interacciones y dramas dentro de la oficina a través de un estilo de mockumentary, donde los personajes miran y hablan directamente a la cámara.',
        link_pelicula: 'https://www.youtube.com/watch?v=II1Q806wMR8',
    },
    {
        titulo: 'Relatos Salvajes',
        categoria: 'pelicula',
        duracion: '122 minutos',
        genero: 'drama',
        detalle: 'relatossalvajes.html',
        img: '/Src Img/relatosSalvajes-poster.jpg',

        descripción:
            'Relatos Salvajes es una película de antología argentina compuesta por seis historias independientes que retratan la violencia de la sociedad moderna. Cada relato explora cómo los individuos reaccionan cuando sus vidas cotidianas se ven perturbadas y cómo la civilidad se desmorona ante la adversidad, la injusticia y la frustración.',
        link_pelicula: 'https://www.youtube.com/watch?v=sJ4nrtgdQ4E',
    },
    {
        titulo: 'Interestelar',
        categoria: 'pelicula',
        duracion: '169 minutos',
        detalle: 'interestelar.html',
        genero: 'cienciaFiccion',
        img: '/Src Img/interestellar-poster.jpg',

        descripción:
            'Interestelar narra la historia de un grupo de astronautas y científicos que viajan a través de un agujero de gusano recién descubierto en busca de nuevos hogares para la humanidad. La película sigue al ex piloto de la NASA, Cooper, y a su hija Murph mientras se embarcan en una misión que los llevará más allá de nuestra galaxia en un intento desesperado por salvar a la humanidad.',
        link_pelicula: 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
    },
    {
        titulo: 'Regular Show',
        categoria: 'serie',
        duracion: '11 minutos por episodio',
        genero: 'comedia',
        detalle: 'regularShow.html',
        img: '/Src Img/regularShow-poster.jpg',

        descripción:
            'Regular Show sigue las aventuras de Mordecai, un arrendajo azul, y Rigby, un mapache, dos trabajadores de mantenimiento de un parque que constantemente se meten en problemas. A pesar de que sus trabajos consisten en tareas aburridas, Mordecai y Rigby siempre encuentran la manera de escapar de sus obligaciones y terminar en situaciones absurdas y surrealistas.',
        link_pelicula: 'https://www.youtube.com/watch?v=y894QNtX0VA',
    },
    {
        titulo: 'Taxi Driver',
        categoria: 'pelicula',
        duracion: '113 minutos',
        genero: 'drama',
        img: '/Src Img/taxiDriver-poster.jpg',
        detalle: 'taxiDriver.html',

        descripción:
            'Taxi Driver sigue la vida de Travis Bickle, un excombatiente de Vietnam que sufre de insomnio y trabaja como conductor de taxi en la ciudad de Nueva York. Aislado de la sociedad y profundamente perturbado por la decadencia que lo rodea, Travis se obsesiona con salvar a una joven prostituta y se embarca en una violenta cruzada para limpiar las calles de la ciudad.',
        link_pelicula: 'https://www.youtube.com/watch?v=UUxD4-dEzn0',
    },

    {
        titulo: 'Rápido y Furioso 1',
        categoria: 'pelicula',
        duracion: '100 minutos',
        img: '/Src Img/rapidoYFurioso-poster.jpg',

        genero: 'acción',
        descripción:
            'La saga de Rápido y Furioso sigue las aventuras de un grupo de corredores de autos, ladrones y agentes federales que se ven envueltos en una serie de atracos, carreras callejeras y conflictos alrededor del mundo. A medida que la franquicia avanza, la trama se vuelve cada vez más extravagante, con los protagonistas enfrentando desafíos cada vez más peligrosos.',
        link_pelicula: 'https://www.youtube.com/watch?v=uisBaTkQAEs',
    },
    {
        titulo: 'The Walking Dead',
        duracion: '42-60 minutos por episodio',
        categoria: 'serie',
        img: '/Src Img/theWalkingDead-poster.jpg',

        genero: 'terror',
        descripción:
            'The Walking Dead sigue a un grupo de sobrevivientes liderados por el oficial de policía Rick Grimes, mientras navegan por un mundo post-apocalíptico infestado de zombis. A medida que avanzan, el grupo se enfrenta a los desafíos de sobrevivir en un mundo devastado, las luchas internas dentro del grupo y las amenazas de otros sobrevivientes hostiles.',
        link_pelicula: 'https://www.youtube.com/watch?v=R1v0uFms68U',
    },
    {
        titulo: 'Tom y Jerry',
        duracion: '6-8 minutos por episodio',
        categoria: 'serie',
        genero: 'comedia',
        img: '/Src Img/tomYJerry-poster.jpg',

        descripción:
            'Tom y Jerry es una serie de cortos de animación que sigue las hilarantes persecuciones entre Tom, un gato doméstico, y Jerry, un ratón travieso. A pesar de los numerosos intentos de Tom por atrapar a Jerry, este logra escapar usando su ingenio y astucia, dando lugar a divertidas escenas llenas de slapstick y acción cómica.',
        link_pelicula: 'https://www.youtube.com/watch?v=IB_TWLgC1kY',
    },
    {
        titulo: 'Vikings',
        duracion: '45-60 minutos por episodio',
        categoria: 'serie',
        genero: 'accion',
        descripción:
            'Vikings narra la historia del legendario caudillo vikingo Ragnar Lothbrok y su familia. La serie sigue las aventuras de Ragnar mientras asciende desde ser un simple granjero hasta convertirse en un poderoso rey, liderando incursiones y expediciones de conquista a través del Mar Báltico. La serie explora la cultura, las creencias y los conflictos de la sociedad vikinga durante la Edad Media.',
        img: '/Src Img/vikings-poster.jpg',
        link_pelicula: 'https://www.youtube.com/watch?v=bjqEWgDVPe4',
    },
    {
        titulo: 'Click',
        duracion: '107 minutos',
        categoria: 'pelicula',
        genero: 'comedia',
        descripción:
            'Click narra la historia de Michael Newman, un arquitecto que constantemente se encuentra abrumado por su trabajo y su familia. Un día, en una tienda, encuentra un control remoto universal mágico que le permite manipular el tiempo a su antojo. Inicialmente, Michael utiliza el control para ahorrar tiempo y mejorar su vida, pero pronto se da cuenta de que sus acciones tienen consecuencias inesperadas.',
        link_pelicula: 'https://www.youtube.com/watch?v=uxDx4jzMKBI',
        img: '/Src Img/click-adam snadler.jpg',
    },
    {
        titulo: 'American Made',
        duracion: '115 minutos',
        categoria: 'pelicula',
        img: '/Src Img/americanMade-poster.jpg',
        genero: 'accion',
        descripción:
            'American Made narra la historia de Barry Seal, un piloto comercial que es reclutado por la CIA para llevar a cabo operaciones encubiertas en Centroamérica durante la década de 1980. A medida que Seal se involucra cada vez más en el tráfico de armas y drogas, su vida se vuelve cada vez más peligrosa y complicada, atrapado entre los carteles de la droga, el gobierno y sus propias ambiciones.',
        link_pelicula: 'https://www.youtube.com/watch?v=AXCzl3dvCiM',
    },
    {
        titulo: 'Superbad',
        duracion: '118 minutos',
        categoria: 'pelicula',
        genero: 'comedia',
        img: '/Src Img/superbad.jpg',

        descripción:
            'La trama sigue a dos amigos, Evan y Seth, que están a punto de separarse después de graduarse de la escuela secundaria y asistir a universidades diferentes. Para celebrar su último fin de semana juntos, planean organizar una fiesta en la casa de Seth, pero las cosas se complican cuando descubren que no tienen permiso para vender alcohol y deben encontrar una forma de obtenerlo.',
        link_pelicula: 'https://youtu.be/T5PwUtWE03Y?si=4c6CmPpSXvAu_aqQ',
    },
];

export { listaPeliculasSeries };
