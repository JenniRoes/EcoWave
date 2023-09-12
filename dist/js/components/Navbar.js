app.component('navbar', {
    template:
      /*html*/
      `    <!--navbar-->
      <nav id="navbar-main" class="navbar navbar-expand-lg mt-5">
          <a class="navbar-brand logo-mobile color-header" href="#">
              <img src="./imgs/EcoWave-02.png" class="logo img-fluid d-inline-block" alt="logotipo">
          </a>
          <!--search placeholder and button-->
          <div class="input-search align-items-center">
              <form class="d-flex" method="get" role="search">
                  <div class="input-group">
                      <input class="form-control input-search" type="text" placeholder="Buscar..." aria-label="Search">
                      <button class="btn pe-3" type="submit"><img src="./imgs/icons/search.svg" alt="search icon"></button>
                  </div>
              </form>
          </div>
          <!--boton navbar-main-->
          <button class="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse" type="button">
              <span class="navbar-toggler-icon"></span>
          </button>
          <!--menu-->
          <div class="collapse navbar-collapse m-start"  id="menu">
              <ul class="navbar-nav gap-5">
                  <li><a class="no-link navbar-item" href="./home.html">Inicio</a></li>
                  <li><a class="no-link navbar-item" href="#">Blog</a></li>
                  <li><a class="no-link navbar-item" href="#">Perfil</a></li>
              </ul>
              <button class="btn-login me-5">Iniciar sesión <span><img src="./imgs/icons/arrow.svg" alt="flecha"></span></button>
  
          </div>
      </nav>`
  });