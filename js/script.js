console.log('JS OK');
console.log('Vue OK', Vue);

const app = Vue.createApp({
    name: 'Email List API',
    data(){
        return {
            emails: [],
            apiEmail: 'https://flynn.boolean.careers/exercises/api/random/mail',
            errorMessage: '',
            emailNumbers: 10
        }
    }, 

    methods: {
        getRandomEmail(){
            for(let i = 0; i < this.emailNumbers; i++){
                axios.get(this.apiEmail)
                .then((response) => {
                    const email = response.data.response;
                    this.emails.push(email)
                }).catch(error => {
                this.errorMessage = error.message;
                })
            }
        }
    },

    mounted (){
        this.getRandomEmail();
    }
});

app.mount('#root');