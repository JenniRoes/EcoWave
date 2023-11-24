app.component('Perfil', {
  props: {
    user_img: {
      type: String,
    },
    user: {
      type: String,
    },
    email: {
      type: String,
    },
    created_at: {
      type: String,
    },
    active_campain_number: {
      type: String,
    },
    ubication: {
      type: String,
    },
    tipo:{
      type: String,
      
    }
  },
  methods: {
    logout(){
      const token = localStorage.getItem('token');

      axios({
        method: 'post',
        url: 'http://localhost/laravel_ecowave/example-app/public/api/logout',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(
        (response) => {
          window.location.href = 'http://localhost/EcoWave/dist/login.html'
        }
      )
      .catch (
        error => console.log(error)
      );
    }
      
  },
    template:
      /*html*/
      `  		
      <!--perfil-->
      <section class="row">
        <container class="container-fluid">
          <section class="mt-5 me-5 m-perfil"> 
            <div class="row">
              <div class="col-2">
                <img v-bind:src="user_img" alt="user_img" class="user-img">
              </div>
              <!-- header profile -->
              <div class="col-5">
                <h1 class="user-title">{{ user }}</h1>
                <h3 class="user-small">{{ email }}</h3>
                <h2 class="user-body">{{ tipo }}</h2>
              </div>
              <div class="col-3 m-logout">
              <a href="#" class="btn-perfil no-link" @click= "logout">Cerrar sesión</a>
              </div>
            </div>
          
          </section>

       <div>
        <img class="img-fluid center" src="./imgs/line.png" alt="div">
       </div>
        </container>
      </section>
      `
  });
