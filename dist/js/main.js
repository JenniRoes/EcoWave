const app = Vue.createApp({
    data() {
        return {
            publicaciones: [],
            posts: [],
            postsrelated: [],
            tipo : localStorage.getItem('tipo'),
            username: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            created_at: localStorage.getItem('created_at')
            
        }
    },
    mounted() {
        //mostrar publicaciones campañas
        axios.get('http://localhost/laravel_ecowave/example-app/public/api/publicacion/index')
            .then(response => {
             
                let publicacion = response.data.data;

                publicacion.forEach((element) => {
                    this.publicaciones.push({
                        id: element.id,
                        title: element.title,
                        description: element.description,
                        created_at: element.created_at
                    })
                });
            })
            .catch(error => {
                console.error(error);
            });


            //mostrar publicaciones blog
            axios.get('http://localhost/laravel_ecowave/example-app/public/api/blog/index')
            .then(response => {
             
                let post = response.data.data;

                post.forEach((element) => {
                    this.posts.push({
                        id: element.id,
                        title: element.title,
                        description: element.description,
                        date: element.date,
                        created_at: element.created_at
                    })
                });
            })
            .catch(error => {
                console.error(error);
            });

             

            //articulos recomendados
            axios.get('http://localhost/laravel_ecowave/example-app/public/api/blog/index')
            .then(response => {
                // Obtén todos los artículos y mézclalos aleatoriamente
                this.posts = this.shuffleArray(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    },
    methods: {
        shuffleArray(array) {
            // Implementación simple de mezcla aleatoria Fisher-Yates
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },
    }
    
});
 
