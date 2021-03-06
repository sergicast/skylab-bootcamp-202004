"use strick"
var questions = [
    [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", use: false},
    { letter: "a", answer: "arma", status: 0, question: "CON LA A. Instrumento o máquina que sirve para atacar o defenderse", use: false},
    { letter: "a", answer: "alterar", status: 0, question: "CON LA A. Perturbar o trastornar el estado normal de una cosa.", use: false}],
    [{ letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", use: false},
    { letter: "b", answer: "boricua", status: 0, question: "CON LA B. Similar a puertorriqueño", use: false},
    { letter: "b", answer: "baltasar", status: 0, question: "CON LA B. Nombre de uno de los 3 reyes magos", use : false}],
    [{ letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé", use : false},
    { letter: "c", answer: "cachorro", status: 0, question: "CON LA C. Cría de un mamífero, especialmente del perro.", use : false},
    { letter: "c", answer: "corazon", status: 0, question: "CON LA C. Órgano central de la circulación de la sangre", use : false}],
    [{ letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", use : false},
    { letter: "d", answer: "doraemon", status: 0, question: "CON LA D. Serie de dibujos animados sobre un Gato y su amigo", use : false},
    { letter: "d", answer: "dragon", status: 0, question: "CON LA D. Animal fabuloso con figura de serpiente corpulenta que echa fuego por la boca", use : false}],
    [{ letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", use : false},
    { letter: "e", answer: "egipto", status: 0, question: "CON LA E. Pais por el que cruza el Rio Nilo", use : false},
    { letter: "e", answer: "enseñar", status: 0, question: "CON LA E. Comunicar conocimientos o ideas a alguien que no los tiene", use : false}],
    [{ letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", use : false},
    { letter: "f", answer: "fragil", status: 0, question: "CON LA F. Que es débil o puede deteriorarse con facilidad", use : false},
    { letter: "f", answer: "forastero", status: 0, question: "CON LA F. Que es o ha venido de otro lugar", use : false}],
    [{ letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", use : false},
    { letter: "g", answer: "gucci", status: 0, question: "CON LA G. Marca de ropa lujosa", use : false},
    { letter: "g", answer: "gioconda", status: 0, question: "CON LA G. Nombre real del cuadro Mona lisa", use : false}],
    [{ letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento", use : false},
    { letter: "h", answer: "hectarea", status: 0, question: "CON LA H. Medida de superficie", use : false},
    { letter: "h", answer: "huelga", status: 0, question: "CON LA H. Forma de protesta de los trabajadores", use : false}],
    [{ letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano", use : false},
    { letter: "i", answer: "identidad", status: 0, question: "CON LA I. Conjunto de rasgos o características de una persona o cosa que permiten distinguirla de otras en un conjunto.", use : false},
    { letter: "i", answer: "isla", status: 0, question: "CON LA I. Porcion de tierra rodeada de agua", use : false}],
    [{ letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", use : false},
    { letter: "j", answer: "jacuzzi", status: 0, question: "CON LA J. Piscina o bañera dotada de un sistema de hidromasaje.", use : false},
    { letter: "j", answer: "jungla", status: 0, question: "CON LA J. Terreno poblado por una vegetación muy abundante y espesa y una fauna muy variada que es propio de algunas zonas de Asia y América", use : false}],
    [{ letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria", use : false},
    { letter: "k", answer: "Kimono", status: 0, question: "CON LA K. Vestimenta tradicional japonesa.", use : false},
    { letter: "k", answer: "kiwi", status: 0, question: "CON LA K. Fruta ovalada color cafe con interior verde.", use : false}],
    [{ letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo", use : false},
    { letter: "l", answer: "labio", status: 0, question: "CON LA L. Parte exterior carnosa y movible de la parte inferior del rostro que junto con otra cubre la dentadura y forma la abertura de la boca", use : false},
    { letter: "l", answer: "laboratorio", status: 0, question: "CON LA L. Local provisto de aparatos y utensilios adecuados para realizar experimentos científicos", use : false}],
    [{ letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", use : false},
    { letter: "m", answer: "manga", status: 0, question: "CON LA M. Tebeo o cómic de origen japonés", use : false},
    { letter: "m", answer: "moroso", status: 0, question: "CON LA M. Que se retrasa en el pago de una deuda o en la devolución de una cosa", use : false}],
    [{ letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia", use : false},
    { letter: "n", answer: "nunca", status: 0, question: "CON LA N. En ninguna ocasión.", use : false},
    { letter: "n", answer: "nube", status: 0, question: "CON LA N. Masa visible suspendida en la atmósfera, formada por la acumulación de partículas diminutas de agua", use : false}],
    [{ letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", use : false},
    { letter: "ñ", answer: "leña", status: 0, question: "CONTIENE LA Ñ. Conjunto de troncos, ramas y trozos de madera destinado a hacer fuego.", use : false},
    { letter: "ñ", answer: "pañuelo", status: 0, question: "CONTIENE LA Ñ. Pieza cuadrada de tela fina, generalmente de algodón, que se usa principalmente para limpiarse la nariz", use : false}],
    [{ letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", use : false},
    { letter: "o", answer: "oficina", status: 0, question: "CON LA O. Lugar donde se realiza un trabajo profesional de gestión, administración, etc.", use : false},
    { letter: "o", answer: "obeso", status: 0, question: "CON LA O. Hombre con sobrepeso", use : false}],
    [{ letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", use : false},
    { letter: "p", answer: "patoso", status: 0, question: "CON LA P. Persona que es torpe o no tiene agilidad; especialmente que tropieza fácilmente", use : false},
    { letter: "p", answer: "poker", status: 0, question: "CON LA P. Juego de naipes de envite que se juega con fichas", use : false}],
    [{ letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", use : false},
    { letter: "q", answer: "quemadura", status: 0, question: "CON LA Q. Lesión o herida de los tejidos orgánicos producida por la acción del fuego y del calor", use : false},
    { letter: "q", answer: "quimera", status: 0, question: "CON LA Q.  Lo que uno se imagina como posible y verdadero, no siéndolo.", use : false}],
    [{ letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor pequeño", use : false},
    { letter: "r", answer: "ram", status: 0, question: "CON LA R. memoria principal de la computadora, donde residen programas y datos, sobre la que se pueden efectuar operaciones de lectura y escritura.", use : false},
    { letter: "r", answer: "rumba", status: 0, question: "CON LA R. Baile afrocubano de ritmo binario y complejo, de carácter alegre y en el que abundan los contratiempos y las síncopas.", use : false}],
    [{ letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático", use : false},
    { letter: "s", answer: "sicario", status: 0, question: "CON LA S. Asesino por encargo", use : false},
    { letter: "s", answer: "soledad", status: 0, question: "CON LA S. Carencia de compañía", use : false}],
    [{ letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", use : false},
    { letter: "t", answer: "te", status: 0, question: "CON LA T. arbusto originario de china, utilizado en infusiones.", use : false},
    { letter: "t", answer: "turron", status: 0, question: "CON LA T. Dulce hecho con almendras u otros frutos secos tostados, se consume en fechas navideñas.", use : false}],
    [{ letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", use : false},
    { letter: "u", answer: "bug", status: 0, question: "CONTIENE LA U. Errores que se producen en un programa informático", use : false},
    { letter: "u", answer: "unanime", status: 0, question: "CON LA U. Se aplica a la idea, sentimiento o voluntad que es compartida por un conjunto de personas", use : false}],
    [{ letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", use : false},
    { letter: "v", answer: "villano", status: 0, question: "CON LA V. Que actúa o es capaz de actuar de forma ruin o cruel.", use : false},
    { letter: "v", answer: "valencia", status: 0, question: "CON LA V. Ciudad española famosa por las Fallas", use : false}],
    [{ letter: "w", answer: "darwin", status: 0, question: "CONTIENE LA W. científico más influyente de los que plantearon la idea de la evolución biológica a través de la selección natural ", use : false},
    { letter: "w", answer: "whisky", status: 0, question: "CON LA W. Bebida alcoholica de origen irlandes o escoces", use : false},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", use : false}],
    [{ letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", use : false},
    { letter: "x", answer: "flexible", status: 0, question: "CONTIENE LA X. Que se dobla con facilidad sin llegar a romperse", use : false},
    { letter: "x", answer: "xanax", status: 0, question: "CONTIENE LA X. Pastilla de moda en ambiente trapero, medicamento que se usa para trabajar la ansiedad", use : false}],
    [{ letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", use : false},
    { letter: "y", answer: "yung beef", status: 0, question: "CON LA Y. Nombre del mejor rapero español", use : false},
    { letter: "y", answer: "yahoo", status: 0, question: "CON LA Y. Buscador en internet", use : false}],
    [{ letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", use : false},
    { letter: "z", answer: "zidane", status: 0, question: "CON LA Z. Exjugador de futbol famoso por dar un cabezazo a un rival", use : false},
    { letter: "z", answer: "zurdo", status: 0, question: "CON LA Z. Que usa con mayor habilidad las extremidades del lado izquierdo.", use : false}],
];
var jugadores=[ { name: 'Juan', win: 8 ,lost:19},
                { name: 'Aitor', win: 7 ,lost:20},
                { name: 'Ferni', win: 14 ,lost:13},
                { name: 'Eneko', win: 12 ,lost:15},
                { name: 'Gabriel', win: 18 ,lost:9}
];
var contAcert=0;
var contFail=0;
var end=false;
empezar();

function empezar() {
    randomQuestions();
    var nombre=prompt("Como te llamas?");
    while(confirmRound()==true && end==false) {
        pregunta();
    }
    if(end==false){
        ranking(nombre);
    } else{
        fin(nombre);
    }   
    
    
}

function randomQuestions() { //funcion que elige de forma random las preguntas.
    for (let i = 0; i < questions.length; i++) {
        
            var num=parseFloat((Math.random()*2).toFixed(0));
            questions[i][num].use=true;
    }
}

function pregunta() { //recorremos todo el array, solo se muestran las letras con status=0 y de las 3 opciones la que esta use=true;
    
    for (let i = 0; i < questions.length; i++) {
        for(x in questions[i]){
        if (questions[i][x].status==0 && questions[i][x].use===true) {
            console.log(questions[i][x].question);
            var resp=prompt("Respuesta: ");
            if(questions[i][x].answer==resp.toLowerCase()){  //PROBAR CON SWITCH
                console.log("Correcto!");
                questions[i][x].status=1;
                contAcert+=1;
            } else if(resp.toLowerCase()=="pasapalabra"){

            }else if (resp.toLowerCase()=="end"){
                end=true;
                return false;
            }else{
                console.log("Incorrecto!");
                questions[i][x].status=-1;
                contFail+=1;
            }
        }
        }
    }
}

function confirmRound() { // confirmamos que quedan preguntas sin responder
    for (let i = 0; i < questions.length; i++) {
        for(x in questions[i]){
        if (questions[i][x].status==0 && questions[i][x].use===true) {
            return true;
        } 
    }
    }
    return false;
}
function ranking(nombre) {
    
    jugadores.push({ name: nombre, win: contAcert ,lost:contFail})
    console.log("Ranking de los jugadores:");
    jugadores.sort(function(a, b) {
        return b.win - a.win;    //modificando cosillas de internet!
      });
      for (let i = 0; i < jugadores.length; i++) {
          console.log((i+1)+"- " + jugadores[i].name + " ha acertado "+jugadores[i].win + " preguntas y ha fallado "+jugadores[i].lost);
          
      }


}

function fin(nombre) {
    
    
    console.log("Hola " + nombre +" !! has acertado " + contAcert + " preguntas y has fallado "+ contFail);
}