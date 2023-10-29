app.component('new-password', {
    data() {
        return {
          newPassword: ''
        }
      },
      created() {
        this.newPassword = localStorage.getItem('password');
      },

    template:
      /*html*/
      `  
      <section class="login-reg-bg"> 
      <div class="card card-login">
        <div class="card-body text-center">
          <form> 
  
            <h5 class="card-title login-title">Nueva Contraseña</h5>


            <div class="d-flex justify-content-center align-items-center flex-wrap">
            <div class="mb-2">
              <p class="p-4">Se ha realizado una solicitud para restablecer su contraseña. Esta es su nueva contraseña:</p>
              <h1 class="login-text text-center">{{newPassword}}</h1>
            </div>
          </div>

          <div class="d-flex justify-content-center align-items-center mt-5 mb-5">
              <a href="./login.html" class="btn-access">Iniciar sesión</a>
              </div>
          </form>
  

        </div>
      </div>
    </section>
  
        `
  
  });