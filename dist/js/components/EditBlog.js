app.component('editblog', {

  data() {
    return {
      blogDetails: {
        title: "",
        description: "",
        date: "",
        author: "",
        photo: "",
        id: ""
      },
    }
  },


  mounted() {
    const blogId = this.obtenerIdDeLaUrl();
    if (blogId) {
      this.getBlogDetails(blogId);
    } else {
      console.error("No se encontró el ID en la URL");
    }
  },
  methods: {
    obtenerIdDeLaUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('id');
    },
    getBlogDetails(blogId) {
      axios.get(`http://localhost/laravel_ecowave/example-app/public/api/blog/index/${blogId}`)

        .then(response => {
          this.blogDetails = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    },

    updateBlog() {
      const data = {
        title: this.blogDetails.title,
        description: this.blogDetails.description,
        author: this.blogDetails.author,
        photo: this.blogDetails.photo,
        date: this.blogDetails.date
      };
    
      const blogId = this.blogDetails.id;  //ID del blog
    
      axios.put(`http://localhost/laravel_ecowave/example-app/public/api/blog/update/${blogId}`, data)
        .then(response => {
          console.log("Respuesta exitosa:", response);
          alert("Blog actualizado correctamente");
          window.location.href = 'http://localhost/EcoWave/dist/perfil.html';
        })
        .catch(error => {
          console.error("Error al actualizar el blog:", error);
          alert("Error al actualizar el blog");
        });
    }
  },

  template:
    /*html*/
    `  
        <section class="login-reg-bg"> 
        <div class="card card-login">
          <div class="card-body text-center">

          <form>
          <h5 class="card-title login-title">Editar Artículo</h5>
          
          <div class="d-flex justify-content-center align-items-center flex-wrap">
            <div class="mb-2">
              <h1 class="login-text text-start">Título</h1>
              <input type="name" v-model="blogDetails.title" class="form-control login-input" id="title" aria-describedby="nameHelp">
            </div>
          </div>

          <div class="d-flex justify-content-center align-items-center flex-wrap">
              <div class="mb-2">
                  <h1 class="login-text text-start">Descripción</h1>
                  <textarea v-model="blogDetails.description" id="description" class="form-control login-input"  aria-describedby="description"></textarea>
              </div>
          </div>

          <div class="d-flex justify-content-center align-items-center flex-wrap">
          <div class="mb-2">
            <h1 class="login-text text-start">Autor</h1>
            <input type="name" v-model="blogDetails.author" class="form-control login-input" id="author" aria-describedby="author">
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center flex-wrap">
          <div class="mb-2">
            <h1 class="login-text text-start">Fecha de creación</h1>
            <input type="date" v-model="blogDetails.date" class="form-control login-input" id="date" aria-describedby="date">
          </div>
        </div>

        <div class="mb-2">
        <h1 class="login-text text-start">Adjuntar Imagen</h1>
        <input type="file"  class="form-control login-input" id="photo" aria-describedby="file">
      </div>

      <div class="d-flex justify-content-center align-items-center flex-wrap">
      <div class="mb-2">
       
      </div>
      <div class="mb-2">
       
      </div>
    </div>
            <div class="d-flex justify-content-center align-items-center mt-5 mb-5">
            <a href="#" class="btn-access" @click="updateBlog">Enviar</a>
            </div>

        </form>  
          </div>
        </div>
      </section>
    
          `

});