app.component('detalle-blog', {
      data() {
        return {
          post: {
            title: "",
            description: "",
            author: "",
            photo: "",
            id: ""
          }
        };
      },
    
      mounted() {
        const postId = this.obtenerIdDeLaUrl();
        if (postId) {
          this.getDetails(postId);
        } else {
          console.error("No se encontró el ID en la URL");
        }
      },
    
      methods: {
        obtenerIdDeLaUrl() {
          const urlParams = new URLSearchParams(window.location.search);
          return urlParams.get('id');
        },
    
        getDetails(postId) {
          
          axios.get(`http://localhost/laravel_ecowave/example-app/public/api/blog/index/${postId}`)
            .then(response => {
              this.post = response.data.data;
              console.log(this.post);
              const data = {
                title: this.post.title,
                description: this.post.description,
                author: this.post.author,
                date:this.post.created_at,
                photo:this.post.photo,
                id: this.post.id
               
              };
              console.log(data);
            })
            .catch(error => {
              console.error(error);
            });
        }
      },
    template: 
    /*html*/`
    <h1 class="titulo">{{post.title}}</h1>	 
	<p class="autor">Autor: {{post.author}} | Fecha de Publicación: {{post.created_at}}</p>

        <div class="detalle border-decoration gap-columnas">

            <div class="columna-derecha">
                <div class="text-description">
                    <img v-bind:src="post.photo"  alt="Descripción de la imagen">
                    <p>{{post.description}}</p>
                </div>
           
            </div>
        </div>
    `
 })