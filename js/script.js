console.log('JS OK');
console.log('Vue OK', Vue);

const app = Vue.createApp({
    name: 'Email List API',
    data(){
        return {
            emails: []
        }
    }, 

    methods: {
        getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
               const email = response.data.response;
               this.emails.push(email);
            })
        }
    },

    mounted (){
        for(let i = 0; i < 10; i++){
            this.getRandomEmail();
        }
    }
});

app.mount('#root');