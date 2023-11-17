app.component('banner', {
  props: {
    titulo: {
      type: String,
      default: "Titulo de artículo"
    },
    descripcion: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a erat eget magna interdum posuere."
    },
    imagen: {
      type: String,
      default: "Imagen del artículo"
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