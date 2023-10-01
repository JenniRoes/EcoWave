app.component('banner', {
  props: {
    imagen: {
      type: String,
      default: "Imagen banner"
    },
    titulo: {
      type: String,
      default: "¡Bienvenido!"
    },
    descripcion: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem est lectustelluspellentesque at purus. Dictumst blandit odio orci elit non donec sodales. Nullam quampharetra,eleifendconsequat velit id euismod.Mauris nisi, suspendisse tristique ac urna. Fermentum sit enim porttitor et vitae. Vestibulumcraspellentesque interdum sit ullamcorper. Sed purus fringilla pellentesque interdum volutpatelitpulvinarplacerat."
  }
  },
    template:
      /*html*/
      `    <!--footer-->
      <div class="card">
      <img :src="imagen" class="card-img banner" alt="banner">
      <div class="banner-p col-6">
        <h5 class="card-title banner-title">{{titulo}}</h5>
        <p class="card-text banner-text">{{descripcion}}</p>
      </div>
    </div>`
  });