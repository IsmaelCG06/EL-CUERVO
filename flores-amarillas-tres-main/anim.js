// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Una vez, al filo de una lúgubre medianoche,", time: 3 },
  { text: "Mientras débil y cansado, en tristes reflexiones embebido,", time: 7 },
  { text: "inclinado sobre un viejo y raro libro de olvidada ciencia,", time: 12 },
  { text: "cabeceando, casi dormido,", time: 18 },
  { text: "oyóse de súbito un leve golpe,", time: 20 },
  { text: "como si suavemente tocaran", time: 24 },
  { text: "tocaran a la puerta de mi cuarto.", time: 27 },
  { text: " ´Es -dije musitando- un visitante", time: 31 },
  { text: "tocando quedo a la puerta de mi cuarto.", time: 35 },
  { text: "Eso es todo, y nada más.´", time: 40 },
  { text: "¡Ah! aquel lúcido recuerdo", time: 44 },
  { text: "de un gélido diciembre;", time: 48 },
  { text: "espectros de brasas moribundas", time: 50 },
  { text: "reflejadas en el suelo;", time: 54 },
  { text: "angustia del deseo del nuevo día;", time: 57 },
  { text: "en vano encareciendo a mis libros", time: 61 },
  { text: "dieran tregua a mi dolor", time: 65 },
  { text: "Dolor por la pérdida de Leonora, la única,", time: 69 },
  { text: "virgen radiante, Leonora por los ángeles llamada.", time: 73 },
  { text: "Aquí ya sin nombre, para siempre.", time: 77 },
  { text: "Y el crujir triste, vago, escalofriante", time: 81 },
  { text: "de la seda de las cortinas rojas", time: 85 },
  { text: "llenábame de fantásticos terrores", time: 89 },
  { text: "jamás antes sentidos. Y ahora aquí, en pie,", time: 93 },
  { text: "acallando el latido de mi corazón,", time: 97 },
  { text: "vuelvo a repetir:", time: 101 },
  { text: "´Es un visitante a la puerta de mi cuarto", time: 104 },
  { text: "queriendo entrar. Algún visitante", time: 108 },
  { text: "que a deshora a mi cuarto quiere entrar.", time: 112 },
  { text: "Eso es todo, y nada más.", time: 116 },
  { text: "Ahora, mi ánimo cobraba bríos,", time: 120 }, 
  { text: "y ya sin titubeos:", time: 124 },
  { text: "´Señor -dije- o señora, en verdad vuestro perdón imploro", time: 127 },
  { text: "mas el caso es que, adormilado", time: 132 },
  { text: "cuando vinisteis a tocar quedamente,", time: 135 },
  { text: "tan quedo vinisteis a llamar,", time: 139 },
  { text: "a llamar a la puerta de mi cuarto,", time: 143 },
  { text: "que apenas pude creer que os oía.´", time: 146 },
  { text: "Y entonces abrí de par en par la puerta:", time: 150 },
  { text: "Oscuridad, y nada más.", time: 154 },
  { text: "Escrutando hondo en aquella negrura", time: 158 },
  { text: "permanecí largo rato, atónito, temeroso,", time: 161 },
  { text: "dudando, soñando sueños que ningún mortal", time: 165 },
  { text: "se haya atrevido jamás a soñar.", time: 169 },
  { text: "Mas en el silencio insondable la quietud callaba,", time: 172 },
  { text: "y la única palabra ahí proferida", time: 176 },
  { text: "era el balbuceo de un nombre: ´¿Leonora?´", time: 179 },
  { text: "Lo pronuncié en un susurro, y el eco", time: 184 },
  { text: "lo devolvió en un murmullo: ´¡Leonora!´", time: 188 },
  { text: "Apenas esto fue, y nada más.", time: 193 },
  { text: "Vuelto a mi cuarto, mi alma toda,", time: 197 },
  { text: "toda mi alma abrasándose dentro de mí", time: 201 },
  { text: "no tardé en oír de nuevo tocar con mayor fuerza.", time: 205 },
  { text: "´Ciertamente -me dije, ciertamente", time: 210 },
  { text: "algo sucede en la reja de mi ventana.", time: 214 },
  { text: "Dejad, pues, que vea lo que sucede allí,", time: 218 },
  { text: "y así penetrar pueda en el misterio.", time: 222 },
  { text: "Dejad que a mi corazón llegue un momento el silencio,", time: 226 },
  { text: "y así penetrar pueda en el misterio.´", time: 230 },
  { text: "¡Es el viento, y nada más!", time: 234 },
  { text: "De un golpe abrí la puerta,", time: 239 },
  { text: "y con suave batir de alas, entró", time: 242},
  { text: "un majestuoso cuervo", time: 245 },
  { text: "de los santos días idos.", time: 248 }, 
  { text: "Sin asomos de reverencia,", time: 252 },
  { text: "ni un instante quedo;", time: 256 },
  { text: "y con aires de gran señor o de gran dama", time: 269 },
  { text: "fue a posarse en el busto de Palas,", time: 273 },
  { text: "sobre el dintel de mi puerta.", time: 277 },
  { text: "Posado, inmóvil, y nada más.", time: 281 },
  { text: "Entonces, este pájaro de ébano", time: 284 },
  { text: "cambió mis tristes fantasías en una sonrisa", time: 288 },
  { text: "con el grave y severo decoro", time: 292 },
  { text: "del aspecto de que se revestía.", time: 295 },
  { text: "´Aun con tu cresta cercenada y mocha -le dije-.", time: 298 },
  { text: "no serás un cobarde.", time: 302 },
  { text: "hórrido cuervo vetusto y amenazador.", time: 305 },
  { text: "Evadido de la ribera nocturna.", time: 309 },
  { text: "¡Dime cuál es tu nombre en la ribera de la Noche Plutónica!", time: 312 },
  { text: "Y el Cuervo dijo:´Jamás´", time: 316 },
  { text: "Cuánto me asombró que pájaro tan desgarbado", time: 321 },
  { text: "pudiera hablar tan claramente;", time: 325 },
  { text: "aunque poco significaba su respuesta", time: 329 },
  { text: "Poco pertinente era. Pues no podemos", time: 333 },
  { text: "sino concordar en que ningún ser humano", time: 337 },
  { text: "ha sido antes bendecido con la visión de un pájaro", time: 341 },
  { text: "posado sobre el dintel de su puerta,", time: 345 },
  { text: "pájaro o bestia, posado en el busto esculpido", time: 349 },
  { text: "de Palas en el dintel de su puerta", time: 353 },
  { text: "con semejante nombre:´Jamás.´", time: 357 },
  { text: "Mas el Cuervo, posado solitario en el sereno busto.", time: 361 },
  { text: "las palabras pronunció, como virtiendo", time: 365 },
  { text: "su alma sólo en esas palabras.", time: 369 },
  { text: "Nada más dijo entonces;", time: 373 },
  { text: "no movió ni una pluma.", time: 377 },
  { text: "Y entonces yo me dije, apenas murmurando:", time: 380 },
  { text: "´Otros amigos se han ido antes;", time: 384 },
  { text: "mañana él también me dejará,", time: 388 },
  { text: "como me abandonaron mis esperanzas.´", time: 392 },
  { text: "Y entonces dijo el pájaro:´jamás´.", time: 397 },
  { text: "Sobrecogido al romper el silencio", time: 401 },
  { text: "tan idóneas palabras,", time: 405 },
  { text: "´sin duda -pensé-, sin duda lo que dice", time: 408 },
  { text: "es todo lo que sabe, su solo repertorio, aprendido", time: 412 },
  { text: "de un amo infortunado a quien desastre impío", time: 416 },
  { text: "persiguió, acosó sin dar tregua", time: 420 },
  { text: "hasta que su cantinela sólo tuvo un sentido,", time: 423 },
  { text: "hasta que las endechas de su esperanza", time: 427 },
  { text: "llevaron sólo esa carga melancólica", time: 431 },
  { text: "de ´Jamás, jamás.´", time: 435 },
  { text: "Mas el Cuervo arrancó todavía", time: 439 },
  { text: "de mis tristes fantasías una sonrisa;", time: 443 },
  { text: "acerqué un mullido asiento", time: 447 },
  { text: "frente al pájaro, el busto y la puerta;", time: 450 },
  { text: "y entonces, hundiéndome en el terciopelo,", time: 454 },
  { text: "empecé a enlazar una fantasía con otra,", time: 458 },
  { text: "pensando en lo que este ominoso pájaro de antaño,", time: 462 },
  { text: "lo que este torvo, desgarbado, hórrido,", time: 466 },
  { text: "flaco y ominoso pájaro de antaño", time: 470},
  { text: "quería decir graznando: ´jamás,´", time: 474 },
  { text: "En esto cavilaba, sentado, sin pronunciar palabra,", time: 479 },
  { text: "frente al ave cuyos ojos, como-tizones encendidos,", time: 483 },
  { text: "quemaban hasta el fondo de mi pecho.", time: 487 },
  { text: "Esto y más, sentado, adivinaba,", time: 491 },
  { text: "con la cabeza reclinada", time: 494 },
  { text: "en el aterciopelado forro del cojín", time: 497 },
  { text: "acariciado por la luz de la lámpara;", time: 501 },
  { text: "en el forro de terciopelo violeta", time: 505 },
  { text: "acariciado por la luz de la lámpara", time: 509 },
  { text: "¡que ella no oprimiría, ¡ay!, nunca más!", time: 513 },
  { text: "Entonces me pareció que el aire", time: 517 },
  { text: "se tornaba más denso, perfumado", time: 521 },
  { text: "por invisible incensario mecido por serafines", time: 525 },
  { text: "cuyas pisadas tintineaban en el piso alfombrado.", time: 529 },
  { text: "´¡Miserable -dije-, tu Dios te ha concedido,", time: 533 },
  { text: "por estos ángeles te ha otorgado una tregua,", time: 538 },
  { text: "tregua de nepente de tus recuerdos de Leonora!", time: 542 },
  { text: "¡Apura, oh, apura este dulce nepente", time: 546 },
  { text: "y olvida a tu ausente Leonora!´", time: 551 },
  { text: "Y el Cuervo dijo:´jamás´", time: 555 },
  { text: "´¡Profeta! exclamé-, ¡cosa diabólica!", time: 560 },
  { text: "¡Profeta, sí, seas pájaro o demonio", time: 565 },
  { text: "enviado por el Tentador, o arrojado", time: 569 },
  { text: "por la tempestad a este refugio desolado e impávido,", time: 573 },
  { text: "a esta desértica tierra encantada,", time: 577 },
  { text: "a este hogar hechizado por el horror!", time: 581 },
  { text: "Profeta, dime, en verdad te lo imploro,", time: 585 },
  { text: "¿hay, dime, hay bálsamo en Galaad?", time: 589 },
  { text: "¡Dime, dime, te imploro!´", time: 593 },
  { text: "Y el cuervo dijo:´jamás´", time: 597 },
  { text: "´¡Profeta! exclamé-, ¡cosa diabólica!", time: 602 },
  { text: "¡Profeta, sí, seas pájaro o demonio!", time: 607},
  { text: "¡Por ese cielo que se curva sobre nuestras cabezas,", time: 611 },
  { text: "ese Dios que adoramos tú y yo,", time: 615 },
  { text: "dile a esta alma abrumada de penas si en el remoto Edén", time: 619 },
  { text: "tendrá en sus brazos a una santa doncella", time: 623 },
  { text: "llamada por los ángeles Leonora,", time: 627 },
  { text: "tendrá en sus brazos a una rara y radiante virgen", time: 631 },
  { text: "llamada por los ángeles Leonora!´", time: 635 },
  { text: "Y el cuervo dijo: ´jamás.´", time: 639},
  { text: "´¡Sea esa palabra nuestra señal de partida", time: 644 },
  { text: "pájaro o espíritu maligno! -le grité presuntuoso.", time: 638 },
  { text: "¡Vuelve a la tempestad, a la ribera de la Noche Plutónica.", time: 642 },
  { text: "No dejes pluma negra alguna, prenda de la mentira", time: 646 },
  { text: "que profirió tu espíritu!", time: 650 },
  { text: "Deja mi soledad intacta.", time: 653 },
  { text: "Abandona el busto del dintel de mi puerta.", time: 656 },
  { text: "Aparta tu pico de mi corazón", time: 660 },
  { text: "y tu figura del dintel de mi puerta.", time: 663 },
  { text: "Y el Cuervo dijo: ´jamás.´", time: 667 },
  { text: "Y el Cuervo nunca emprendió el vuelo.", time: 672 },
  { text: "Aún sigue posado, aún sigue posado", time: 676 },
  { text: "en el pálido busto de Palas.", time: 680 },
  { text: "en el dintel de la puerta de mi cuarto.", time: 684 },
  { text: "Y sus ojos tienen la apariencia", time: 690 },
  { text: "de los de un demonio que está soñando.", time: 694 },
  { text: "Y la luz de la lámpara que sobre él se derrama", time: 700 },
  { text: "tiende en el suelo su sombra. Y mi alma,", time: 704 },
  { text: "del fondo de esa sombra que flota sobre el suelo", time: 708 },
  { text: "no podrá liberarse. ¡Jamás!", time: 713 },
  { text: "Hecho por", time: 718 },
  { text: "Ismael Caro 11-03", time: 720 },
  {text: "Codigo sacado de:", time: 723 },
  {text: "No sé, lo vi en internet y me lo robe", time: 725},
  {text: "Sonido:", time: 728},
  {text: "Yt: Relax and Enjoy Music", time: 730},
  {text: "GRACIAS!!!!!!!!!!!", time: 733},



];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 9
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.4; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);