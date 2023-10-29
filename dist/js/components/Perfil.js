app.component('Perfil', {
  props: {
    user_img: {
      type: String,
    },
    user: {
      type: String,
    },
    username: {
      type: String,
    },
    creation_time: {
      type: String,
    },
    active_campain_number: {
      type: String,
    },
    ubication: {
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
          <ul class="nav justify-content-center mt-5 me-5 ms-1"> 
            <li class="nav-item">
              <img v-bind:src="user_img" alt="user_img" class="pe-4  user-img">
            </li>
            <li class="nav-item">
              <!-- header profile -->
               <h1 class="user-title">{{ user }}</h1>
               <h3 class="user-small">@{{ username }}</h3>
               <h2 class="user-body col-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a erat eget magna.</h2>
            </li>
            <li class="nav-item">
              <a href="#" class="btn-perfil me-5" @click= "logout">Cerrar sesión</a>
            </li>
          </ul>

       <div>
        <img class="img-fluid center" src="./imgs/line.png" alt="div">
       </div>
        </container>
      </section>
      `
  });