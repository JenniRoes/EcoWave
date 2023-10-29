app.component('recover', {
  methods: {
    newPassword() {
        const email = document.getElementById('email').value;

        axios.post('http://localhost/laravel_ecowave/example-app/public/api/recoverpassword', {
            email: email,
        })
            .then(response => {
                localStorage.setItem('password', response.data.password);
                window.location.href = 'http://localhost/EcoWave/dist/newpassword.html';
            })
            .catch(error => {
                console.log(error);
                alert("No se encuentra registrado o ha ingresado los datos incorrectamente")
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
  
            <h5 class="card-title login-title">Recuperar Contraseña</h5>


            <div class="d-flex justify-content-center align-items-center flex-wrap">
            <div class="mb-2">
              <h1 class="login-text text-start">Ingrese su correo electrónico:</h1>
            </div>
            <div class="mb-2">
              <input type="text" class="form-control login-input" id="email" aria-describedby="password">
            </div>
          </div>

          <div class="d-flex justify-content-center align-items-center mt-5 mb-5">
              <a href="#" class="btn-access" @click="newPassword">Generar contraseña</a>
              </div>
          </form>
  

        </div>
      </div>
    </section>
  
        `
});