app.component('detalle', {

  data() {
    return {
      postDetails: {
        title: "",
        subtitle: "",
        description: "",
        ubication: "",
        author: "",
        photo: "",
        id: ""
      }
    };
  },

  mounted() {
    const postId = this.obtenerIdDeLaUrl();
    if (postId) {
      this.getPostDetails(postId);
    } else {
      console.error("No se encontró el ID en la URL");
    }
  },

  methods: {
    obtenerIdDeLaUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('id');
    },
    getPostDetails(postId) {

      axios.get(`http://localhost/laravel_ecowave/example-app/public/api/publicacion/index/${postId}`)
        .then(response => {
          this.postDetails = response.data.data;
          this.postDetails.photo = '/laravel_ecowave/example-app/storage/app/public/' + this.postDetails.photo;

        })
        .catch(error => {
          console.error(error);
        });
    },
    obtenerIdDelUsuario() {
      const token = localStorage.getItem('token');

      return axios.get('http://localhost/laravel_ecowave/example-app/public/api/user/id', {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
        .then(response => response.data.data.id)
        .catch(error => {
          console.error("Error al obtener el ID del usuario:", error);
          throw error; // Re-lanzar el error para que pueda ser manejado por la función que llama
        });
    },
    async guardarPost() {
      try {
        const userId = await this.obtenerIdDelUsuario();
        const postId = this.postDetails.id;

        const response = await axios.post(
          'http://localhost/laravel_ecowave/example-app/public/api/publicacion/save/store',
          {
            users_id: userId,
            publicacions_id: postId,
            title: this.postDetails.title,
            description: this.postDetails.description
          },
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          }
        );

        if (response.data && response.data.message) {
          alert(response.data.message);
        } else {
          console.error("Error al guardar la publicación: Respuesta del servidor inesperada");
        }

      } catch (error) {
        console.error("Error al guardar la publicación:", error);
      }
    }


  },
  template:
    /*html*/`
    <h1 class="titulo">{{postDetails.title}}</h1>	 
	  <p class="autor">Autor: {{postDetails.author}} | Fecha de Publicación: {{postDetails.created_at}}</p>

        <div class="detalle border-decoration gap-columnas">
            <div class="columna-izquierda">
                <h2 class="subtitulo-verde">Organizadores de la campaña:</h2>
                <p ><u>{{postDetails.author}}</u></p>
                
                <h2 class="subtitulo-verde m-top">Ubicación geográfica:</h2>
                <p>{{postDetails.ubication}}</p>			
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3207314265246!2d-84.66696942439592!3d9.990343073199675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa036e177acb5eb%3A0x3153bb7730840e4e!2sCentro%20Agr%C3%ADcola%20Cantonal%20de%20Esparza!5e0!3m2!1ses!2scr!4v1694919977570!5m2!1ses!2scr" 
                width="300" height="200" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        
            <div class="columna-derecha">
                <div class="text-description">
                    <img :src="postDetails.photo"  alt="Descripción de la imagen">
                    <h2 class="subtitulo-principal">{{postDetails.subtitle}}</h2>
                    <p>{{postDetails.description}}</p>
                </div>
                <button href="#" class="btn-guardar mb-5 mt-5" @click="guardarPost">Guardar campaña</button>
            </div>
            
        </div>
    `
})