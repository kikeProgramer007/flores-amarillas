btnSi = document.getElementById('si');
let audioEtiqueta = document.querySelector("audio");
var baseurl = getAbsolutePath()

window.onload = function() {
  // Eliminar la clase 'container' del body cuando la página se carga
  document.body.classList.remove("container");

  // Esperar 4 segundos (4000 ms) antes de mostrar la alerta
  setTimeout(function() {
 
    Swal.fire({
      title: '<h5>Hoy 21 de Septiembre😍</h5>',
      html: 'Solo quería decirte lo mucho que me importas. A pesar del tiempo y la distancia, siempre serás tú... 💔<br>ERES MI PERSONA FAVORITA<br>Gracias por todo, mi amor; te tendré siempre en mi corazón. Te amo mucho.',
      confirmButtonText: 'Gracias 😊',
      imageWidth: 200,
      imageHeight: 128,
      width: 380,
      color: '#ebebeb',
      background: 'linear-gradient(to right, #434343 0%, black 100%)',
      backdrop: `
        rgba(0, 0, 0, 0.3)
             url("`+baseurl+`img/WS2k.gif")
        left top
        no-repeat
      `
  }).then((result) => {
      if (result.isConfirmed) {
        audioEtiqueta.setAttribute("src", "mp3/Amo-Axel.mp3")
        audioEtiqueta.play()
        console.log(`Reproduciendo: ${audioEtiqueta.src}`)
      }
  });
  }, 4000); // 4000 milisegundos = 4 segundos
};


// Función para mostrar el Swal
function showAlert(title, html) {
  Swal.fire({
      title: title,
      html: html,
      confirmButtonText: 'Gracias 😊',
      imageWidth: 200,
      imageHeight: 128,
      width: 380,
      color: '#ebebeb',
      background: 'linear-gradient(to right, #434343 0%, black 100%)',
      backdrop: `
          rgba(0, 0, 0, 0.3)
          url("` + baseurl + `img/WS2k.gif")
          left top
          no-repeat
      `
  }).then((result) => {
      if (result.isConfirmed) {
          audioEtiqueta.setAttribute("src", "mp3/Amo-Axel.mp3");
          audioEtiqueta.play();
          console.log(`Reproduciendo: ${audioEtiqueta.src}`);
      }
  });
}

// Seleccionar elementos y agregar eventos de clic
const elements = document.querySelectorAll('.flower, .growing-grass', '.grow-ans');

elements.forEach(element => {
  element.addEventListener('click', () => {
      const isFlower = element.classList.contains('flower');
      const title = isFlower ? '<h5>Hoy 21 de Septiembre😍</h5>' : '<h5>¡Hola! 🌱</h5>';
      const html = isFlower 
          ? 'Solo quería decirte lo mucho que me importas. A pesar del tiempo y la distancia, siempre serás tú... 💔<br>ERES MI PERSONA FAVORITA<br>Gracias por todo, mi amor; te tendré siempre en mi corazón. Te amo mucho.'
          : 'Esta es una hierba especial que también quiere decirte algo. 🌼<br>¡Cuida siempre de las plantas y flores!';
      
      showAlert(title, html);
  });
});


// Obtener ruta del proyecto
function getAbsolutePath() {
  var loc = window.location;
  var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
  return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}
