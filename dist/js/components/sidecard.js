app.component('sidecard', {
  props: {
    title: {
      type: String,
      default: "Titulo de artículo"
    },
    description: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a erat eget magna interdum posuere."
    },
    id:{
      type: Number,
      default: 0
    }
  },
  template:
    /*html*/
    `    
<div>
    <b-card>
      <a :href="'./detalleblog.html?id=' +id"  class="sidecard-title no-link">{{title}}</a>
      <p class="sidecard-subtitle mt-3 overflow" >{{description}}</p>
    </b-card>
</div>
      `
});