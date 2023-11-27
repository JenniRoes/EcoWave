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
              this.post.photo='/laravel_ecowave/example-app/storage/app/public/'+ this.post.photo;
              
            })
            .catch(error => {
              console.error(error);
            });
        }
      },
    template: 
    /*html*/`
    <h1 class="titulo ms-3">{{post.title}}</h1>	 
	<p class="autor ms-3">Autor: {{post.author}} | Fecha de Publicación: {{post.created_at}}</p>

        <div class="detalle border-decoration gap-columnas">
                <div class="text-description">
                    <img :src="post.photo" class="mt-3 img-blog"  alt="Descripción de la imagen">
                    <p class="mt-5">{{post.description}}</p>
                </div>
        </div>
    `
 })