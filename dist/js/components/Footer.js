app.component('footer-nav', {
  template:
    /*html*/
    `    <!--footer-->
    <footer class="d-flex flex-column footer-bg">
    <div class="col">
        <img src="./imgs/logoBlanco.png" class="logo img-fluid footer-logo" alt="logotipo">

        <div class="footer-item m-footer">
          <a class="nav-link footer-links m-footer-txt" href="./home.html">Inicio</a>
          <a class="nav-link footer-links m-footer-txt" href="./blog.html">Blog</a>
          <a class="nav-link footer-links" href="./perfil.html">Perfil</a>
        </div>
      </div>

      <div class="d-flex justify-content-center">
          <div class="d-flex flex-row">
              <p class="footer-txt">©2023 EcoWave.</p>
              <p class="footer-txt">Todos los Derechos Reservados.</p>
          </div>
      </div>
    </footer>`


});