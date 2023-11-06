const app = Vue.createApp({
    data() {
        return {
            publicaciones: [],
            tipo : localStorage.getItem('tipo'),
            username: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            created_at: localStorage.getItem('created_at')
        }
    },
    mounted() {
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
    },
});
 
