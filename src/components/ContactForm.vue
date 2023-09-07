<script>
import axios from 'axios';
    export default {
    data() {
        return {
            name: '',
            email:'',
            message:'',
            success:false,
            baseUrl: 'http://localhost:8000',
        }
    },methods: {
        sendForm(){
            const data = {
                name: this.name,
                email: this.email,
                content: this.message,
            }
            axios.post(`${this.baseUrl}/api/contact`, data).then((response)=>{
                this.success= response.data.success;
                var_dump(response);
                if(response.data.success){
                    this.name='';
                    this.email='';
                    this.content='';

                    this.$router.push({name:'thank-you'});
                }
            })

        }
    },    
    }
</script>
<template >
    <div>
        <div class="row">
            <div class="col-12 text-center">
                <h2>Contact us:</h2>
                <form @submit="sendForm()">
                    <div class="col-12 my-4">
                        <label for="name" class="control-label d-block">Nome e Cognome:</label>
                        <input type="text" name="name" id="name" v-model="name" class="form-group">
                    </div>
                    <div class="col-12  my-4">
                        <label for="email" class="control-label d-block">Email:</label>
                        <input type="mail" name="email" id="email" v-model="email" class="form-group">
                    </div>
                    <div class="col-12  my-4">
                        <label for="content" class="control-label d-block">Content</label>
                        <textarea type="text" name="content" id="content" v-model="message" class="form-group"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>