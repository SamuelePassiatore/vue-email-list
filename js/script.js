console.log('JS OK');
console.log('Vue OK', Vue);

const app = Vue.createApp({
    name: 'Email List API',
    data(){
        return {
            isLoading: false,
            emails: [],
            apiEmail: 'https://flynn.boolean.careers/exercises/api/random/mail',
            errorMessage: ''
        }
    }, 

    methods: {
        getRandomEmail(){
            this.isLoading = true;
            axios.get(this.apiEmail)
            .then((response) => {
               const email = response.data.response;
               this.emails.push(email);
            }).catch(error => {
                this.errorMessage = error.message;
            }).then(() => {
                this.isLoading = false;
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