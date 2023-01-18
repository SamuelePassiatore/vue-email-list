console.log('JS OK');
console.log('Vue OK', Vue);

const app = Vue.createApp({
    name: 'Email List',
    data(){
        return {
        }
    },

    methods: {
    }
});

app.mount('#root');