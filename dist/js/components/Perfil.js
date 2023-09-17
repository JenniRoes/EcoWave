app.component('perfil', {
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
    template:
      /*html*/
      `  
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
        <button class="btn-perfil me-5">Editar perfil</button>
        </li>
      </ul>
      </section>
      <div>
        <img class="img-fluid center" src="./imgs/line.png" alt="div">
      </div>

      <!-- info sidebar -->
      <div class="row justify-content-center">
      <div class="col-3">
        <div class="card border border-0 rounded mb-5">
            <div class="card-flex row g-0">
                <div class="col-md-7">
                    <div class="card-body">
                      <h2 class="user-subtitle">Información de la cuenta</h2>
                      <p class="user-small">Creada hace {{ creation_time }}</p>
                      <p class="user-small">Ubicación: {{ ubication }}</p>
                      <p class="user-small mb-5">Campañas activas: {{active_campain_number}}</p>
                      <h2 class="user-subtitle mb-5">Campañas guardadas</h2>
                      <h3 class="user-subtitle-black">Productos Hechos de Material Reciclado</h3>
                      <p class="user-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a erat eget magna interdum posuere.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <!-- campains card -->
      <div class="col-5">
        <div class="card border border-0 rounded mb-5">
          <div class="card-flex row g-0">
          <h2 class="user-subtitle">Campañas en las que ha participado</h2>
              <div class="col-md-7">
                  <div class="card-body">
                   
                    <p class="user-small-green mb-2">4 de Septiembre, 2023</p>
                    <h1 class="user-title">Campaña de Reciclaje en el Cocal de Puntarenas</h1>
                    <p class="user-body mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a erat eget magna interdum posuere.</p>
                    <button class="btn-blue p-0">Leer Más</button>
                  </div>
              </div>
                <div class="col-md-5 rounded user-campain">
                  <img src="./imgs/fotoCampanna.png" class="img-fluid card-img" alt="Campaña">
                </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      `
  });
