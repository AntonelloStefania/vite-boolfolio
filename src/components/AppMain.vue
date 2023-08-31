<script>
import axios from 'axios';
import AppLoader from './AppLoader.vue';
    export default {
        components:{
            AppLoader,
        },
        data() {
            return {
               baseUrl: 'http://localhost:8000',
               sites: [],
               loading: true, 
            }
        },created() {
            this.getSites();
            
        },methods: {
            getSites(){
                this.loading=true;
                axios.get(`${this.baseUrl}/api/sites`).then((response)=>{
                    console.log(response)
                    if(response.data.success){
                        this.sites = response.data.results;
                        this.loading=false;
                    }
                    else{
                        //poi vediamo
                    }
                })
            }
            
        },
    }
</script>
<template>
    <div class="container">
        <div class="row">
            <AppLoader  v-if="loading"/>
            <div v-else class="col-12 col-md-4 my-2" v-for="site in sites" :key="site">
                <div class="card">
                    <div class="card-img-top ">
                        <img :src="`${baseUrl}/storage/${site.image}`" class="img-fluid w-100" alt="">
                    </div>
                    <div class="card-body">
                        <div class="card-header">
                            {{ site.title }}
                        </div>
                    </div>
                    <div class="card-text">
                        {{ site.description }}
                    </div>
                 </div>
            </div>
        </div>
    </div>
   
</template>
<style lang="scss">
    
</style>