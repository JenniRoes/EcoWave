app.component('sidecard', {
  props: {
    title: {
      type: String,
      default: "Titulo de artículo"
    },
    description: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a erat eget magna interdum posuere."
    }
  },
  template:
    /*html*/
    `    
<div>
    <b-card>
      <a href="./blog.html" class="sidecard-title no-link">{{title}}</a>
      <p class="sidecard-subtitle mt-3" >{{description}}</p>
    </b-card>
</div>
      `
});