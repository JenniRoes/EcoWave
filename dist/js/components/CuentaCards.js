app.component('cuenta-cards', {
  props: {
    created_at: {
      type: String,
  }
},
methods: {
  formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
},
  template:
    /*html*/
    `    
      <div>
  <b-card>
    <b-card-text class="sidecard-subtitle"> 
            <div class="card-body">
            <p class="user-small">  Fecha de creación: {{ formatDate(created_at) }}</p>
            <p class="user-small">Ubicación: Pacífico Central</p>
          </div>
    </b-card-text>
  </b-card>
</div>
      `
});



