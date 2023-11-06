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
                url: 'http://localhost/laravel_ecowave/example-app/public/api/publicacion/searchbykeyword?keyword=' + this.keyword
            })
                .then((response) => {

                    let results = response.data.data;

                    results.forEach((element) => {
                        this.results.push({
                            id: element.id,
                            title: element.title,
                            description: element.description,
                            created_at: element.created_at
                        })
                    });
                }
                )
                .catch(
                    error => console.log(error)
                );
        },
    },
    template:
        /* html */
        `
    <div class="row mt-5">
    <div v-if="results != null">
        <h4 class='ms-2 mt-3'>Resultados para <span class='fw-bolder card-link'>{{this.keyword}}</span></h4>
    </div>
    </div>
    <div  class="row mt-5">
        <div v-for="(item, index) in results" class="col mb-4">
        <cards :image="item.image" :title="item.title"
        :description="item.description" :data="item" :id="item.id"></cards>
        </div>
    </div>
    <div v-if="results == ''">
    <h4 class='text-center mt-3 mb-5 pb-5'>No hay resultados</h4>
    </div>
    `
});
