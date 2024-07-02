'use strict';
const listaPeliculasSeries = [
    {
        titulo: 'Neighbors',
        categoria: 'pelicula',
        duracion: '97 minutos',
        genero: 'comedia',
        detalle: 'neighbors.html',
        descripcion:
            ' La trama sigue a una pareja de padres primerizos, Kelly y Mac, que\
            se ven obligados a enfrentar a una fraternidad <br />universitaria\
            que se ha instalado al lado de su casa. La fraternidad, liderada por\
            Teddy Sanders (Zac Efron), <br />está decidida a organizar una gran\
            fiesta de fin de año y no tiene reparos en hacer ruido y causar\
            disturbios <br />en el vecindario Kelly y Mac, que están cansados de\
            la falta de paz y tranquilidad en su hogar, deciden tomar <br />\
            medidas para detener la fiesta y restablecer el orden en el\
            vecindario.',
        link_pelicula: 'https://www.youtube.com/embed/KrAf5ALLxGI',
        img: '/Src Img/neighbors.jpg',
    },
    {
        titulo: 'Superbad',
        duracion: '118 minutos',
        categoria: 'pelicula',

        genero: 'comedia',
        detalle: 'superbad.html',
        descripcion:
            ' La trama sigue a dos amigos, Evan y Seth, que están a punto de\
        separarse después de graduarse de la escuela secundaria <br />y\
        asistir a universidades diferentes. Para celebrar su último fin de\
        semana juntos, planean organizar una fiesta en la casa de Seth\
        <br />pero las cosas se complican cuando descubren que no tienen\
        permiso para vender alcohol y deben encontrar una forma de\
        obtenerlo.',
        link_pelicula: 'https://youtube.com/embed/T5PwUtWE03Y?si=4c6CmPpSXvAu_aqQ',
        img: '/Src Img/superbad.jpg',
    },
    {
        titulo: 'The hangover',
        categoria: 'pelicula',
        duracion: '100 minutos',
        link_pelicula: 'https://youtube.com/embed/tcdUhdOlz9M?si=5yi6tsYspwJJWvYI',
        genero: 'comedia' /*Actores :[],*/,
        detalle: 'thehangover.html',
        img: '/Src Img/thehangover.jpg',

        descripcion:
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

        descripcion:
            'Arthur Fleck es un hombre que lucha por encontrar su lugar en la sociedad fracturada de Gotham City. Durante el día trabaja como payaso, pero por la noche aspira a ser un comediante stand-up. Conforme sus esfuerzos son rechazados, más se sumerge en la locura, transformándose paulatinamente en el criminal conocido como Joker.',
        link_pelicula: 'https://www.youtube.com/embed/rgrWXTz_8eU',
    },
    {
        titulo: 'The Office',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 6 },
            { numero: 2, capitulos: 22 },
            { numero: 3, capitulos: 23 },
            { numero: 4, capitulos: 14 },
            { numero: 5, capitulos: 28 },
            { numero: 6, capitulos: 26 },
            { numero: 7, capitulos: 26 },
            { numero: 8, capitulos: 24 },
            { numero: 9, capitulos: 24 },
        ],
        duracion: '22 minutos por episodio',
        genero: 'comedia',
        detalle: 'theoffice.html',
        img: '/Src Img/theOffice-poster.jpg',
        descripcion:
            'The Office es una serie de televisión estadounidense de comedia que sigue la vida de los empleados de la sucursal de Scranton de la empresa Dunder Mifflin, una compañía ficticia de papel. La serie retrata las interacciones y dramas dentro de la oficina a través de un estilo de mockumentary, donde los personajes miran y hablan directamente a la cámara.',
        link_pelicula: 'https://www.youtube.com/embed/tNcDHWpselE',
    },
    {
        titulo: 'Relatos Salvajes',
        categoria: 'pelicula',
        duracion: '122 minutos',
        genero: 'drama',
        detalle: 'relatossalvajes.html',
        img: '/Src Img/relatosSalvajes-poster.jpg',

        descripcion:
            'Relatos Salvajes es una película de antología argentina compuesta por seis historias independientes que retratan la violencia de la sociedad moderna. Cada relato explora cómo los individuos reaccionan cuando sus vidas cotidianas se ven perturbadas y cómo la civilidad se desmorona ante la adversidad, la injusticia y la frustración.',
        link_pelicula: 'https://www.youtube.com/embed/CzJM3jYKjAg',
    },
    {
        titulo: 'Interestelar',
        categoria: 'pelicula',
        duracion: '169 minutos',
        detalle: 'interestelar.html',
        genero: 'cienciaFiccion',
        img: '/Src Img/interestellar-poster.jpg',

        descripcion:
            'Interestelar narra la historia de un grupo de astronautas y científicos que viajan a través de un agujero de gusano recién descubierto en busca de nuevos hogares para la humanidad. La película sigue al ex piloto de la NASA, Cooper, y a su hija Murph mientras se embarcan en una misión que los llevará más allá de nuestra galaxia en un intento desesperado por salvar a la humanidad.',
        link_pelicula: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    },
    {
        titulo: 'Regular Show',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 12 },
            { numero: 2, capitulos: 28 },
            { numero: 3, capitulos: 39 },
        ],
        duracion: '12 minutos por episodio',
        genero: 'comedia',
        detalle: 'regularShow.html',
        img: '/Src Img/regularShow-poster.jpg',

        descripcion:
            'Regular Show sigue las aventuras de Mordecai, un arrendajo azul, y Rigby, un mapache, dos trabajadores de mantenimiento de un parque que constantemente se meten en problemas. A pesar de que sus trabajos consisten en tareas aburridas, Mordecai y Rigby siempre encuentran la manera de escapar de sus obligaciones y terminar en situaciones absurdas y surrealistas.',
        link_pelicula: 'https://www.youtube.com/embed/Mm-Zc1_I1_8',
    },
    {
        titulo: 'Taxi Driver',
        categoria: 'pelicula',
        duracion: '113 minutos',
        genero: 'drama',
        img: '/Src Img/taxiDriver-poster.jpg',
        detalle: 'taxiDriver.html',

        descripcion:
            'Taxi Driver sigue la vida de Travis Bickle, un excombatiente de Vietnam que sufre de insomnio y trabaja como conductor de taxi en la ciudad de Nueva York. Aislado de la sociedad y profundamente perturbado por la decadencia que lo rodea, Travis se obsesiona con salvar a una joven prostituta y se embarca en una violenta cruzada para limpiar las calles de la ciudad.',
        link_pelicula: 'https://www.youtube.com/embed/T5IligQP7Fo',
    },

    {
        titulo: 'Rápido y Furioso 1',
        categoria: 'pelicula',
        duracion: '100 minutos',
        img: '/Src Img/rapidoYFurioso-poster.jpg',

        genero: 'acción',
        descripcion:
            'La saga de Rápido y Furioso sigue las aventuras de un grupo de corredores de autos, ladrones y agentes federales que se ven envueltos en una serie de atracos, carreras callejeras y conflictos alrededor del mundo. A medida que la franquicia avanza, la trama se vuelve cada vez más extravagante, con los protagonistas enfrentando desafíos cada vez más peligrosos.',
        link_pelicula: 'https://www.youtube.com/embed/uisBaTkQAEs',
    },
    {
        titulo: 'The Walking Dead',
        temporadas: [
            { numero: 1, capitulos: 6 },
            { numero: 2, capitulos: 13 },
            { numero: 3, capitulos: 16 },
            { numero: 4, capitulos: 16 },
            { numero: 5, capitulos: 16 },
            { numero: 6, capitulos: 16 },
            { numero: 7, capitulos: 16 },
            { numero: 8, capitulos: 16 },
            { numero: 9, capitulos: 16 },
            { numero: 10, capitulos: 22 },
            { numero: 11, capitulos: 24 },
        ],
        duracion: '43 minutos por episodio',
        categoria: 'serie',
        img: '/Src Img/theWalkingDead-poster.jpg',

        genero: 'terror',
        descripcion:
            'The Walking Dead sigue a un grupo de sobrevivientes liderados por el oficial de policía Rick Grimes, mientras navegan por un mundo post-apocalíptico infestado de zombis. A medida que avanzan, el grupo se enfrenta a los desafíos de sobrevivir en un mundo devastado, las luchas internas dentro del grupo y las amenazas de otros sobrevivientes hostiles.',
        link_pelicula: 'https://www.youtube.com/embed/sfAc2U20uyg',
    },
    {
        titulo: 'Tom y Jerry',
        temporadas: [
            { numero: 1, capitulos: 26 },
            { numero: 2, capitulos: 26 },
            { numero: 3, capitulos: 24 },
            { numero: 4, capitulos: 22 },
            { numero: 5, capitulos: 25 },
        ],
        duracion: '10 minutos por episodio',
        categoria: 'serie',
        genero: 'comedia',
        img: '/Src Img/tomYJerry-poster.jpg',

        descripcion:
            'Tom y Jerry es una serie de cortos de animación que sigue las hilarantes persecuciones entre Tom, un gato doméstico, y Jerry, un ratón travieso. A pesar de los numerosos intentos de Tom por atrapar a Jerry, este logra escapar usando su ingenio y astucia, dando lugar a divertidas escenas llenas de slapstick y acción cómica.',
        link_pelicula: 'https://www.youtube.com/embed/HGUQUUzJNdM',
    },
    {
        titulo: 'Vikings',
        temporadas: [
            { numero: 1, capitulos: 9 },
            { numero: 2, capitulos: 10 },
            { numero: 3, capitulos: 10 },
            { numero: 4, capitulos: 20 },
            { numero: 5, capitulos: 20 },
            { numero: 6, capitulos: 20 },
        ],
        duracion: '30 minutos por episodio',
        categoria: 'serie',
        genero: 'accion',
        descripcion:
            'Vikings narra la historia del legendario caudillo vikingo Ragnar Lothbrok y su familia. La serie sigue las aventuras de Ragnar mientras asciende desde ser un simple granjero hasta convertirse en un poderoso rey, liderando incursiones y expediciones de conquista a través del Mar Báltico. La serie explora la cultura, las creencias y los conflictos de la sociedad vikinga durante la Edad Media.',
        img: '/Src Img/vikings-poster.jpg',
        link_pelicula: 'https://www.youtube.com/embed/9GgxinPwAGc',
    },
    {
        titulo: 'Click',
        duracion: '107 minutos',
        categoria: 'pelicula',
        genero: 'comedia',
        descripcion:
            'Click narra la historia de Michael Newman, un arquitecto que constantemente se encuentra abrumado por su trabajo y su familia. Un día, en una tienda, encuentra un control remoto universal mágico que le permite manipular el tiempo a su antojo. Inicialmente, Michael utiliza el control para ahorrar tiempo y mejorar su vida, pero pronto se da cuenta de que sus acciones tienen consecuencias inesperadas.',
        link_pelicula: 'https://www.youtube.com/embed/zZNC5emNyEQ',
        img: '/Src Img/click-adam snadler.jpg',
    },
    {
        titulo: 'American Made',
        duracion: '115 minutos',
        categoria: 'pelicula',
        img: '/Src Img/americanMade-poster.jpg',
        genero: 'accion',
        descripcion:
            'American Made narra la historia de Barry Seal, un piloto comercial que es reclutado por la CIA para llevar a cabo operaciones encubiertas en Centroamérica durante la década de 1980. A medida que Seal se involucra cada vez más en el tráfico de armas y drogas, su vida se vuelve cada vez más peligrosa y complicada, atrapado entre los carteles de la droga, el gobierno y sus propias ambiciones.',
        link_pelicula: 'https://www.youtube.com/embed/AEBIJRAkujM',
    },
    {
        titulo: 'Avengers: Endgame',
        categoria: 'pelicula',
        duracion: '181 minutos',
        genero: 'accion',
        descripcion:
            'Los Vengadores restantes deben encontrar una manera de recuperar a los aliados perdidos y derrotar al poderoso Thanos antes de que sus acciones acaben con el universo.',
        link_pelicula: 'https://www.youtube.com/embed/TcMBFSGVi1c',
        img: 'https://www.themoviedb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    },
    {
        titulo: 'Money Heist',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 10 },
            { numero: 2, capitulos: 10 },
            { numero: 3, capitulos: 8 },
            { numero: 4, capitulos: 8 },
            { numero: 5, capitulos: 10 },
        ],
        duracion: '45 minutos por episodio',
        genero: 'accion',
        descripcion:
            'Un grupo de atracadores toma el control de la Fábrica Nacional de Moneda y Timbre de España, con el fin de llevar a cabo el mayor atraco de la historia.',
        link_pelicula: 'https://www.youtube.com/embed/3y-6iaveY6c',
        img: 'https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
      

    },
    {
        titulo: 'Stranger Things',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 10 },
            { numero: 2, capitulos: 10 },
            { numero: 3, capitulos: 10 },
            { numero: 4, capitulos: 10 },
        ],
        duracion: '55 minutos por episodio',  
        genero: 'cienciaFiccion',
        descripcion:
            'En la década de 1980, en un pequeño pueblo de Indiana, un niño desaparece misteriosamente. Mientras la policía, su familia y sus amigos buscan respuestas, se ven envueltos en una serie de eventos sobrenaturales.',
        link_pelicula: 'https://www.youtube.com/embed/Wre1F5YyIlA',
        img: 'https://image.tmdb.org/t/p/original/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    },
    {
        titulo: 'Jurassic World',
        categoria: 'pelicula',
        duracion: '124 minutos',
        genero: 'accion',
        descripcion:
            'Un parque de diversiones con dinosaurios clonados funciona sin problemas hasta que uno de los dinosaurios más peligrosos se escapa y amenaza a los visitantes.',
        link_pelicula: 'https://www.youtube.com/embed/RFinNxS5KN4',
        img: 'https://image.tmdb.org/t/p/original/sOgfattHPWE5sWdVCGHQ08GEbaP.jpg',
    },
    {
        titulo: 'The Mandalorian',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 8 },
            { numero: 2, capitulos: 8 },
            { numero: 3, capitulos: 8 },
        ],
        duracion: '45 minutos por episodio',
        genero: 'cienciaFiccion',
        descripcion:
            'Un cazarrecompensas solitario se mueve por los rincones más remotos de la galaxia, lejos de los dominios de la Nueva República.',
        link_pelicula: 'https://www.youtube.com/embed/eW7Twd85m2g',
        img: 'https://image.tmdb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
    },
    {
        titulo: 'El Conjuro',
        categoria: 'pelicula',
        duracion: '112 minutos',
        genero: 'terror',
        descripcion:
            'Basada en los archivos de Ed y Lorraine Warren, esta película sigue a los renombrados paranormalistas mientras investigan una granja embrujada en Rhode Island en 1971.',
        link_pelicula: 'https://www.youtube.com/embed/k10ETZ41q5o',
        img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/sKuHxkCogdk6YWzTyXYPoo9qd9n.jpg',
    },
    {
        titulo: 'La Purga',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 10 },
            { numero: 2, capitulos: 10 },
        ],
        duracion: '43 minutos por episodio',
        genero: 'terror',
        descripcion:
            'En un Estados Unidos distópico, el gobierno legaliza durante 12 horas al año todos los crímenes, incluidos el asesinato y la violencia, con el fin de reducir la tasa de criminalidad durante el resto del año.',
        link_pelicula: 'https://www.youtube.com/embed/h3NAU8RssAs',
        img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9CaS2XFd0Db42grzzVBnWcSkrbg.jpg',
    },
    {
        titulo: 'El Exorcista',
        categoria: 'pelicula',
        duracion: '132 minutos',
        genero: 'terror',
        descripcion:
            'Una niña de 12 años es poseída por una entidad sobrenatural, obligando a su madre a buscar la ayuda de dos sacerdotes para realizar un exorcismo.',
        link_pelicula: 'https://www.youtube.com/embed/YDGw1MTEe9k',
        img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/gcXOCWdv0ulNxEqV6jvZcUdZZRa.jpg',
    },
    {
        titulo: 'American Horror Story',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 12 },
            { numero: 2, capitulos: 13 },
            { numero: 3, capitulos: 13 },
            { numero: 4, capitulos: 13 },
            { numero: 5, capitulos: 12 },
            { numero: 6, capitulos: 12 },
            { numero: 7, capitulos: 11 },
            { numero: 8, capitulos: 10 },
            { numero: 9, capitulos: 9 },
            { numero: 10, capitulos: 10 },
            { numero: 11, capitulos: 10 },
            { numero: 12, capitulos: 11 }
        ],
        duracion: '50 minutos por episodio',
        
        genero: 'terror',
        descripcion:
            'Cada temporada de esta antología de terror sigue una trama diferente, con un elenco recurrente que interpreta personajes diferentes en cada historia.',
        link_pelicula: 'https://www.youtube.com/embed/Bn36TTvPYK0',
        img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/5LLG9bjq0i7V5N4UfRhnab8zHK4.jpg',
    },
    {
        titulo: 'It (Eso)',
        categoria: 'pelicula',
        duracion: '135 minutos',
        genero: 'terror',
        descripcion:
            'Un grupo de niños en un pequeño pueblo se unen para combatir a una entidad sobrenatural que adopta la forma de un payaso aterrador y acecha a los menores.',
        link_pelicula: 'https://www.youtube.com/embed/OkTEQwsE8l4',
        img: 'https://www.themoviedb.org/t/p/original/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg',
    },
    {
        titulo: 'This Is Us',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 18 },
            { numero: 2, capitulos: 18 },
            { numero: 3, capitulos: 18 },
            { numero: 4, capitulos: 18 },
            { numero: 5, capitulos: 16 },
            { numero: 6, capitulos: 18 }
        ],
        duracion: '60 minutos por episodio',
        genero: 'drama',
        descripcion:
            'Una familia estadounidense examina su pasado y su presente a través de tres líneas de tiempo diferentes que se entrelazan.',
        link_pelicula: 'https://www.youtube.com/embed/OkTEQwsE8l4',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/huxmY6Dmzwpv5Q2hnNft0UMK7vf.jpg',
    },
    {
        titulo: 'The Crown',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 10 },
            { numero: 2, capitulos: 10 },
            { numero: 3, capitulos: 10 },
            { numero: 4, capitulos: 10 },
            { numero: 5, capitulos: 10 },
            { numero: 6, capitulos: 12 }
        ],
        duracion: '52 minutos por episodio',
        genero: 'drama',
        descripcion:
            'Una mirada íntima a la vida de la Reina Isabel II y los eventos políticos y personales que han definido su reinado.',
        link_pelicula: 'https://www.youtube.com/embed/JWtnJjn6ng0',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1ZMVKJoWK5KfxaQA8BwpfOEYKKy.jpg',
    },
    {
        titulo: 'Succession',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 10 },
            { numero: 2, capitulos: 10 },
            { numero: 3, capitulos: 9 },
            { numero: 4, capitulos: 10 }
        ],
        duracion: '90 minutos por episodio',
        genero: 'drama',
        descripcion:
            'La familia Roy, dueña de una de las mayores corporaciones de medios y entretenimiento, lucha por el control de la compañía mientras enfrenta escándalos internos.',
        link_pelicula: 'https://www.youtube.com/embed/OzYxJV_rmE8',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg',
    },
    {
        titulo: 'Ozark',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 10 },
            { numero: 2, capitulos: 10 },
            { numero: 3, capitulos: 10 },
            { numero: 4, capitulos: 14 }
        ],
        duracion: '60 minutos por episodio',
        genero: 'drama',
        descripcion:
            'Un asesor financiero se ve obligado a lavar dinero para un cártel y se muda con su familia a los Ozarks, donde deben adaptarse a su nueva y peligrosa realidad.',
        link_pelicula: 'https://www.youtube.com/embed/6YPDs-O4Zr0',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Q87HCPhj98Afc0XAHOuaLgTTpO.jpg',
    },
    {
        titulo: 'Yellowjackets',
        categoria: 'serie',
        temporadas: [
            { numero: 1, capitulos: 10 },
            { numero: 2, capitulos: 9 }
        ],
        duracion: '56 minutos por episodio',
        genero: 'drama',
        descripcion:
            'Sigue la historia de un equipo de fútbol femenino de instituto que sobrevive a un accidente aéreo en el bosque, explorando tanto los eventos presentes como los traumas de su pasado.',
        link_pelicula: 'https://www.youtube.com/embed/xOEQ6srYqOk',
        img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1xMrhea5G3iyZez1KidFs4ufE3D.jpg',
    },
];

export { listaPeliculasSeries };
