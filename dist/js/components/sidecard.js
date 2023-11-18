app.component('sidecard', {
  props: {
    title: {
      type: String,
      default: "Tips ecológicos"
    },
    description: {
      type: String,
      default: "Reduce tu huella de carbono optando por medios de transporte más sostenibles, como bicicletas"
    }
  },
  template:
    /*html*/
    `    
<div>
    <b-card>
      <a href="./blog.html" class="sidecard-title no-link">{{title}}</a>
      <p class="sidecard-subtitle mt-3 overflow" >{{description}}</p>
    </b-card>
</div>
      `
});