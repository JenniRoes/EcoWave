const app = Vue.createApp({
    data() {
        return {
            publicaciones: [],
            posts: [],
            articulos: [],
            guardadas: [],
            tipo: localStorage.getItem('tipo'),
            username: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            created_at: localStorage.getItem('created_at'),
            token: localStorage.getItem('token'),

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
                        photo: "/laravel_ecowave/example-app/storage/app/public/" + element.photo,
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
                        photo: "/laravel_ecowave/example-app/storage/app/public/" + element.photo,
                        description: element.description,
                        date: element.date,
                        created_at: element.created_at,
                        author: element.author
                    })
                });
            })
            .catch(error => {
                console.error(error);
            });



        //articulos recomendados
        axios.get('http://localhost/laravel_ecowave/example-app/public/api/blog/index')
            .then(response => {
                this.articulos = this.shuffleArray(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });

        //mostrar publicaciones guardadas
        axios.get('http://localhost/laravel_ecowave/example-app/public/api/publicacion/save/index', {
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        })
            .then(response => {
                
                let postsGuardados = response.data.data;

                postsGuardados.forEach((element) => {
                    this.guardadas.push({
                        id: element.id,
                        title: element.title,
                        description: element.description
                    })
                });
            })
            .catch(error => {
                console.error(error);
            });

    },
    methods: {
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },
    }

});

