app.component('editpost', {

data() {
    return {
        
        postDetails: {
            title: "",
            subtitle:"",
            description:"",
            ubication:"",
            author:"",
            photo:"",
            id:""
        },
    }
},


mounted() {
  const postId = this.obtenerIdDeLaUrl();
  if (postId) {
    this.getPostDetails(postId);
  } else {
    console.error("No se encontró el ID en la URL");
  }
},
methods: {
  obtenerIdDeLaUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  },
  getPostDetails(postId) {
    
   
   
    // Hacer una solicitud a la API para obtener los detalles del post
    axios.get(`http://localhost/laravel_ecowave/example-app/public/api/publicacion/index/${postId}`)

        .then(response => {
          this.postDetails = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
  },

  updatePost() {
    console.log("ID del post a actualizar:", this.postDetails.id);
    const data = {
      title: this.postDetails.title,
      subtitle: this.postDetails.subtitle,
      description: this.postDetails.description,
      ubication: this.postDetails.ubication,
      author:this.postDetails.author,
      photo:this.postDetails.photo,
      // Otros campos del formulario
    };
    console.log("Datos a enviar:", data);

  
    axios.put(`http://localhost/laravel_ecowave/example-app/public/api/publicacion/update/${this.postDetails.id}`, data)
      .then(response => {
        alert("Post actualizado correctamente");
        window.location.href = 'http://localhost/EcoWave/dist/perfil.html';
      })
      .catch(error => {
        alert("Error al actualizar el post");
        console.error(error);
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

          
  
            <h5 class="card-title login-title">Editar Publicación</h5>
            
            <div class="d-flex justify-content-center align-items-center flex-wrap">
              <div class="mb-2">
                <h1 class="login-text text-start">Título</h1>
                <input type="name" class="form-control login-input" id="title"  aria-describedby="nameHelp" v-model="postDetails.title" >
              </div>
            </div>


            <div class="d-flex justify-content-center align-items-center flex-wrap">
            <div class="mb-2">
              <h1 class="login-text text-start">Subtítulo</h1>
              <input type="name" class="form-control login-input" id="subtitle"  aria-describedby="subtitle" v-model="postDetails.subtitle">
            </div>
          </div>
  
  
            <div class="d-flex justify-content-center align-items-center flex-wrap">
              <div class="mb-2">
                <h1 class="login-text text-start">Descripción</h1>
                <input type="textarea" class="form-control login-input" id="description" aria-describedby="description" v-model="postDetails.description">
              </div>
            </div>

            <div class="d-flex justify-content-center align-items-center flex-wrap">
            <div class="mb-2">
              <h1 class="login-text text-start">Organizadores de la Campaña</h1>
              <input type="name" class="form-control login-input" id="author" aria-describedby="nameOrganization" v-model="postDetails.author">
            </div>
          </div>

          <div class="d-flex justify-content-center align-items-center flex-wrap">
          <div class="mb-2">
            <h1 class="login-text text-start">Ubicación Geográfica</h1>
            <input type="name" class="form-control login-input" id="ubication" aria-describedby="nameLocation" v-model="postDetails.ubication">
            
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3207314265246!2d-84.66696942439592!3d9.990343073199675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa036e177acb5eb%3A0x3153bb7730840e4e!2sCentro%20Agr%C3%ADcola%20Cantonal%20de%20Esparza!5e0!3m2!1ses!2scr!4v1694919977570!5m2!1ses!2scr" 
            width="300" height="200" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
            </div>
          <div class="mb-2">
          <h1 class="login-text text-start">Adjuntar Archivo</h1>
          <input type="file" class="form-control login-input" id="photo" aria-describedby="file" >
        </div>

        <div class="d-flex justify-content-center align-items-center flex-wrap">
        <div class="mb-2">
         
        </div>
        <div class="mb-2">
         
        </div>
      </div>





              <div class="d-flex justify-content-center align-items-center mt-5 mb-5">
              <a href="#" class="btn-access" @click="updatePost">Enviar</a>
              </div>



          </form>
  

        </div>
      </div>
    </section>
  
        `
  
  });