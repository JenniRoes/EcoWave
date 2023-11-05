app.component('search', {
    components: {
        Navbar: './Navbar.js'
    },

    data() {
        return {
            results: [],
            keyword: "",
        }
    },
    mounted() {
        const params = window.location.search;
        const urlParams = new URLSearchParams(params);
        const routeTxt = urlParams.get("keyword");
        this.keyword = routeTxt;
        this.getResults();
    },
    methods: {

        getResults() {
            axios({
                method: 'get',
                url: 'http://localhost/laravel_ecowave/example-app/public/api/publicacion/searchbykeyword' + this.keyword
            })
                .then(
                    (response) => {

                        this.results = response.data;

                        if (this.results.length > 0) {
                            // Datos encontrados
                            // Realiza acciones aquí
                        }
                    }
                )
                .catch(
                    error => console.log(error)
                );
        }
    },
    template: 
    /*html*/
    `
        <div class="row mt-5">
            <div v-if="results.length > 0">
                <h4 class='ms-2 mt-3'>Results for <span class=''>{{ this.keyword }}</span></h4>
            </div>

            <div v-if="results.length === 0">
                <h4 class='text-center mt-3'>No results for <span class=''>{{ keyword }}</span></h4>
            </div>
        </div>

        <div class="row mt-5">
            <div v-for="(item, index) in results" class="col mb-4">
                <cards :title="item.title" :subtitle="item.subtitle"
                    :description="item.description" :author="item.author" :ubication="item.ubication" :data="item" :id="item.id"></cards>
            </div>
        </div>
    `
});
