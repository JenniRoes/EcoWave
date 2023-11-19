app.component('card-blog', {
  props: {
    created_at: {
      type: String,
      default: "Fecha de publicación"
    },
    date: {
      type: String,
      default: "20/52/23"
    },
    title: {
      type: String,
      default: "Titulo de publicación"
    },
    description: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a erat eget magna interdum posuere."
    },
    photo: {
      type: String,
      default: "Imagen de publicación"
    },
    tamañoImagen: {
      type: Number,
      default: 100 
    },
    guardada: {
      type: Boolean,
      default: false
    },
    id:{
      type: Number,
      default: 0
    }
  },

  template:
  /*html*/
  `  
    <div class="card border border-0 mb-5">
      <div class="card-flex row g-0">
        <div class="col-md-7">
          <div class="card-body">
            <p class="mb-2 camp-date">{{created_at}}</p>
            <h5 class="fs-4 fw-bolder">{{title}}</h5>
            <p class="card-text mb-2 overflow">{{description}}</p>
            <a :href="'./detalleblog.html?id=' +id" class="camp-btn border-0 p-0">Leer Más</a>
            <!--<a :href="'./editpost.html?id=' + id" class="btn-editar ms-4" v-if="guardada">Editar</a>
            <a href="#" class="btn-eliminar ms-4" v-if="guardada">Eliminar</a>-->
          </div>
        </div>
        <div class="col-md-5">
          <img :src="photo" class="img-fluid" style="{ width: tamañoImagen + '%' + ' !important' }" alt="fotografia de campaña">
        </div>
      </div>
    </div>
  `,

  });