const LOCALSTORAGE_PELICULAS = 'peliculas'

if(localStorage.getItem('peliculas') == null){
    const CLICK = {titulo: 'Click', Duracion: '108 minutos' ,
        Genero:'Comedia Dramática y Ciencia Ficción', /*Actores :[],*/
        Descripción: 'Michael Newman, un arquitecto muy ocupado que trata de progresar y tener tiempo para su mujer Donnay sus dos hijos, Incapaz de reconocer el control remoto de cada artefacto de su casa,va a comprar un control Universal.sin darse cuenta de que realmente es universal y puede literalmente manejar todo.',
        link_pelicula: 'https://www.youtube.com/watch?v=EI20g27DVpc'}
        
        const NEIGHBORS = {titulo: 'Neighbors', Duracion: '97 minutos' ,
            Genero:'Comedia', /*Actores :[],*/
            Descripción: ' La trama sigue a una pareja de padres primerizos, Kelly y Mac, que\
            se ven obligados a enfrentar a una fraternidad <br />universitaria\
            que se ha instalado al lado de su casa. La fraternidad, liderada por\
            Teddy Sanders (Zac Efron), <br />está decidida a organizar una gran\
            fiesta de fin de año y no tiene reparos en hacer ruido y causar\
            disturbios <br />en el vecindario Kelly y Mac, que están cansados de\
            la falta de paz y tranquilidad en su hogar, deciden tomar <br />\
            medidas para detener la fiesta y restablecer el orden en el\
            vecindario.',
            link_pelicula: 'https://youtu.be/S8EJVX735dY?si=D49uaT4E4oD7YmKB'}
           
            const SUPERBAD = {titulo: 'Superbad', Duracion: '118 minutos' ,
                Genero:'Comedia Negra',/*Actores :[],*/
                Descripción: ' La trama sigue a dos amigos, Evan y Seth, que están a punto de\
            separarse después de graduarse de la escuela secundaria <br />y\
            asistir a universidades diferentes. Para celebrar su último fin de\
            semana juntos, planean organizar una fiesta en la casa de Seth\
            <br />pero las cosas se complican cuando descubren que no tienen\
            permiso para vender alcohol y deben encontrar una forma de\
            obtenerlo.',
                link_pelicula: 'https://youtu.be/T5PwUtWE03Y?si=4c6CmPpSXvAu_aqQ'}
                const THE_HANGOVER = {titulo: 'The hangover', Duracion: '100 minutos' ,
                    Genero:'Comedia', /*Actores :[],*/
                    Descripción: ' La trama sigue a dos amigos, Evan y Seth, que están a punto de\
            separarse después de graduarse de la escuela secundaria <br />\
            asistir a universidades diferentes. Para celebrar su último fin de\
            semana juntos, planean organizar una fiesta en la casa de Seth\
            <br />pero las cosas se complican cuando descubren que no tienen\
            permiso para vender alcohol y deben encontrar una forma de\
            obtenerlo.'
     
}
}

const PELICULAS_A_GUARDAR = ['CLICK',
'NEIGHBORS',
'THEHANGOVER',
'SUPERBAD',
'OPPENHEIMER',
'THE AMERICAN MADE',
'JOKER',
'RAPIDOS Y FURIOSOS',
'RELATOS SALVAJES',
'TAXI DRIVER'
]
localStorage.setItem(LOCALSTORAGE_PELICULAS, JSON.stringify(PELICULAS_A_GUARDAR))