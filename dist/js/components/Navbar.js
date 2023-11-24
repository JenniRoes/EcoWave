app.component('navbar', {
    template:
      /*html*/
      `    <!--navbar-->
      <nav id="navbar-main" class="navbar navbar-expand-lg">
          <a class="navbar-brand logo-mobile color-header" href="#">
              <img src="./imgs/logo.svg" class="logo img-fluid d-inline-block" alt="logotipo">
          </a>
          <!--search placeholder and button-->
          <div class="input-search align-items-center">
              <form class="d-flex" method="get" action="search.html" role="search">
                  <div class="input-group">
                      <input v-model="inputValue" class="form-control input-search" type="text" name="keyword" placeholder="Buscar..." aria-label="Search">
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
                  <li class="mt-mobile"><a class="no-link navbar-item" href="./home.html">Inicio</a></li>
                  <li><a class="no-link navbar-item" href="./blog.html">Blog</a></li>
                  <li><a class="no-link navbar-item" href="./perfil.html">Perfil</a></li>
              </ul>
              <button class="btn-login"><a class="color-white" href="./login.html">Iniciar sesión </a><span><img src="./imgs/icons/arrow.svg" alt="flecha"></span></button>
  
          </div>
      </nav>`
  });