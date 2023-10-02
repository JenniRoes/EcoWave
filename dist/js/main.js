const app = Vue.createApp({

    methods: {
        onClickListenButton(){
            console.log("has tocado el botton")
        },
    }
    
    
});
const emitter= mitt();
app.config.globalProperties.$test = emitter;