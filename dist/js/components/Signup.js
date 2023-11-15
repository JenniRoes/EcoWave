app.component('signup', {
  methods: {
    registerUser() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const validation = document.getElementById('validation').value;

        // Crear el objeto de datos a enviar en la solicitud POST
        const data = {
            name: name,
            email: email,
            password: password,
            confirm_password: validation
        };

        axios.post('http://localhost/laravel_ecowave/example-app/public/api/register', data)
            .then(response => {   
              alert("Se ha registrado correctamente");
              window.location.href = 'http://localhost/EcoEcoWave/dist/login.html';
            })
            .catch(error => {
              
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
            <h5 class="card-title login-title">Regístrate</h5>
            
            <div class="d-flex justify-content-center align-items-center flex-wrap">
              <div class="mb-2 col-5">
                <h1 class="login-text text-start">Nombre:</h1>
              </div>
              <div class="mb-2 col-7">
                <input type="name" class="form-control login-input" id="name" aria-describedby="nameHelp">
              </div>
            </div>


            <div class="d-flex justify-content-center align-items-center flex-wrap">
            <div class="mb-2 col-5">
              <h1 class="login-text text-start">Correo Electrónico:</h1>
            </div>
            <div class="mb-2 col-7">
              <input type="email" class="form-control login-input" id="email" aria-describedby="emailHelp">
            </div>
          </div>
  
  
            <div class="d-flex justify-content-center align-items-center flex-wrap">
              <div class="mb-2 col-5">
                <h1 class="login-text text-start">Contraseña:</h1>
              </div>
              <div class="mb-2 col-7">
                <input type="password" class="form-control login-input " id="password" aria-describedby="password">
              </div>
            </div>

            <div class="d-flex justify-content-center align-items-center flex-wrap">
               <div class="mb-2 col-5">
                 <h1 class="login-text text-start">Verifique su contraseña:</h1>
               </div>
               <div class="mb-2 col-7">
                 <input type="password" class="form-control login-input " id="validation" aria-describedby="password">
              </div>
            </div>
              <div class="d-flex justify-content-center align-items-center mt-5 mb-5">
              <a href="#" class="btn-access" @click="registerUser">Crear Cuenta</a>
              </div>
          </form>

        </div>
      </div>
    </section>
  
        `
  
  });