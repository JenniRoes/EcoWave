app.component('sidecards', {
  template:
    /*html*/
    `    
      <div>
  <b-card>
    <b-card-text class="sidecard-subtitle"> 
            <div class="card-body">
            <p class="user-small">Creada hace: {{ creation_time }}</p>
            <p class="user-small">Ubicación: {{ ubication }}</p>
            <p class="user-small mb-5">Campañas activas: {{active_campain_number}}</p>
          </div>
    </b-card-text>
  </b-card>
</div>
      `
});