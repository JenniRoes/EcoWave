app.component('login', {


  template:
    /*html*/
    `  
    <section class="login-reg-bg"> 
    <div class="card card-login">
      <div class="card-body text-center">
        <form>

          <h5 class="card-title login-title">Iniciar Sesión</h5>
          <div class="d-flex justify-content-center align-items-center flex-wrap">
            <div class="mb-2">
              <h1 class="login-text text-start">Correo Electrónico:</h1>
            </div>
            <div class="mb-2">
              <input type="email" class="form-control login-input" id="1" aria-describedby="emailHelp">
            </div>
          </div>


          <div class="d-flex justify-content-center align-items-center flex-wrap">
            <div class="mb-2">
              <h1 class="login-text text-start">Contraseña:</h1>
            </div>
            <div class="mb-2">
              <input type="password" class="form-control login-input ms-lg-5" id="1" aria-describedby="password">
            </div>
          </div>

            <div class="d-flex justify-content-center align-items-center mt-5 mb-5">
            <a href="home.html" class="btn-access">Acceder</a>
            </div>
        </form>




        
        <a href="signup.html" class="card-link mb-5">Crear Cuenta</a>
        <a href="recover.html" class="card-link mb-5">¿Olvidaste tu Contraseña?</a>
      </div>
    </div>
  </section>

      `

});