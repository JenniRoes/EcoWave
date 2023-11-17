app.component('add-blog', {
  methods: {
    createPost() {
      //
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const author = document.getElementById('author').value;
      const date = document.getElementById('date').value;
      const photo = document.getElementById('photo').value;

      const data = {
        title: title,
        description: description,
        author: author,
        date: date,
        photo: photo
      };

      axios.post('http://localhost/laravel_ecowave/example-app/public/api/blog/store', data)
        .then(response => {
          alert("Se ha agregado el artículo correctamente");

          window.location.href = 'http://localhost/EcoWave/dist/blog.html';

        })
        .catch(error => {
          alert("Error");

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

          
  
            <h5 class="card-title login-title">Crear Artículo</h5>
            
            <div class="d-flex justify-content-center align-items-center flex-wrap">
              <div class="mb-2">
                <h1 class="login-text text-start">Título</h1>
                <input type="name" class="form-control login-input" id="title" aria-describedby="nameHelp">
              </div>
            </div>
  
  
            <div class="d-flex justify-content-center align-items-center flex-wrap">
              <div class="mb-2">
                <h1 class="login-text text-start">Descripción</h1>
                <input type="textarea" class="form-control login-input" id="description" aria-describedby="description">
              </div>
            </div>

            <div class="d-flex justify-content-center align-items-center flex-wrap">
            <div class="mb-2">
              <h1 class="login-text text-start">Autor</h1>
              <input type="name" class="form-control login-input" id="author" aria-describedby="nameOrganization">
            </div>
          </div>

          <div class="d-flex justify-content-center align-items-center flex-wrap">
            <div class="mb-2">
              <h1 class="login-text text-start">Fecha de creación</h1>
              <input type="name" class="form-control login-input" id="date" aria-describedby="nameOrganization">
            </div>
          </div>

          <div class="mb-2">
          <h1 class="login-text text-start">Adjuntar Imagen</h1>
          <input type="file" class="form-control login-input" id="photo" aria-describedby="file">
        </div>

        <div class="d-flex justify-content-center align-items-center flex-wrap">
        <div class="mb-2">
         
        </div>
        <div class="mb-2">
         
        </div>
      </div>





              <div class="d-flex justify-content-center align-items-center mt-5 mb-5">
              <a href="#" class="btn-access" @click="createPost">Enviar</a>
              </div>



          </form>
  

        </div>
      </div>
    </section>
  
        `

});