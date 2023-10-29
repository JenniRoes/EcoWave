app.component('cards', {
  props: {
    fecha: {
      type: String,
      default: "Fecha de publicación"
    },
    titulo: {
      type: String,
      default: "Titulo de publicación"
    },
    descripcion: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a erat eget magna interdum posuere."
    },
    imagen: {
      type: String,
      default: "Imagen de publicación"
    },
    tamañoImagen: {
      type: Number,
      default: 100 
    }

  },
  template:
  /*html*/
  `  
    <div class="card border border-0 mb-5">
      <div class="card-flex row g-0">
        <div class="col-md-7">
          <div class="card-body">
            <p class="mb-2 camp-date">{{fecha}}</p>
            <h5 class="fs-4 fw-bolder">{{titulo}}</h5>
            <p class="card-text mb-2">{{descripcion}}</p>
            <a class="camp-btn border-0 p-0" href="./detalle.html">Leer Más</a>
          </div>
        </div>
        <div class="col-md-5 overflow-hidden">
          <img :src="imagen" class="img-fluid" style="{ width: tamañoImagen + '%' + ' !important' }" alt="fotografia de campaña">
        </div>
      </div>
    </div>
  `,

  });