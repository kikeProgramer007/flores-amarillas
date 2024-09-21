
onload = () => {
  document.body.classList.remove("container");
};
btnSi = document.getElementById('si');
let audioEtiqueta = document.querySelector("audio");
var baseurl = getAbsolutePath()

// window.onload = function() {
//   // Eliminar la clase 'container' del body cuando la página se carga
//   document.body.classList.remove("container");

  // Esperar 4 segundos (4000 ms) antes de mostrar la alerta
  // setTimeout(function() {
 
  //   Swal.fire({
  //     title: '<h5 style="font-family: \'Poppins\' , cursive; ">Hoy 21 de Septiembre😍</h5>',
  //     html: '<span style="font-family: \'Poppins\' , cursive; ">Solo quería decirte lo mucho que me importas. Te confieso que siempre serás tú... 💔<br>ERES MI PERSONA FAVORITA<br>Gracias por todo, mi amor; te tendré siempre en mi corazón. Te amo mucho. <br>Atte Enrique.</span>',
  //     confirmButtonText: 'Gracias 😊',
  //     imageWidth: 200,
  //     imageHeight: 128,
  //     width: 380,
  //     color: '#ebebeb',
  //     background: 'linear-gradient(to right, #434343 0%, black 100%)',
  //     backdrop: `
  //       rgba(0, 0, 0, 0.3)
  //            url("`+baseurl+`img/WS2k.gif")
  //       left top
  //       no-repeat
  //     `
  // }).then((result) => {
  //     if (result.isConfirmed) {
       
  //     }
  // });
  // }, 4000); // 4000 milisegundos = 4 segundos
// };


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
          // audioEtiqueta.setAttribute("src", "mp3/Amo-Axel.mp3");
          // audioEtiqueta.play();
          // console.log(`Reproduciendo: ${audioEtiqueta.src}`);
      }
  });
}

// Seleccionar elementos y agregar eventos de clic
const elements = document.querySelectorAll('.flower, .growing-grass', '.grow-ans');

elements.forEach(element => {
  element.addEventListener('click', () => {
      const title ='<h5 style="font-family: \'Poppins\' , cursive; ">Hoy 21 de Septiembre😍</h5>';
      const html = '<span style="font-family: \'Poppins\' , cursive; ">Solo quería decirte lo mucho que me importas. Te confieso que siempre serás tú... 💔<br>ERES MI PERSONA FAVORITA<br>Gracias por todo, mi amor; te tendré siempre en mi corazón. Te amo mucho. <br>Atte Enrique.</span>';
      audioEtiqueta.setAttribute("src", "mp3/Amo-Axel.mp3")
      audioEtiqueta.play()
      console.log(`Reproduciendo: ${audioEtiqueta.src}`)

      showAlert(title, html);
  });
});


// Obtener ruta del proyecto
function getAbsolutePath() {
  var loc = window.location;
  var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
  return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}
