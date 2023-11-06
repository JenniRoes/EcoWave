const app = Vue.createApp({
    data() {
        return {
            tipo : localStorage.getItem('tipo'),
            username: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            created_at: localStorage.getItem('created_at')
            //creation_time: "hola",
        }
    },
    
});