<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';

    export default {
        components:{
            AppLoader,
            
        },
        data() {
            return {
               baseUrl: 'http://localhost:8000',
               sites: [],
               loading: false, 
            }
        },created() {
            this.getSites();
            
        },methods: {
            getSites(){
                this.loading=true;
                axios.get(`${this.baseUrl}/api/sites`).then((response)=>{
                    if(response.data.success){
                        this.sites = response.data.results.data;
                        this.loading=false;
                    }
                    else{
                        //poi vediamo
                    }
                })
            },
            truncateText(text){
                if(text.length > 50){
                    return text.substr(0,50) + '...';
                }else{
                    return text;
                }
            }
            
        },
    }
</script>
<template>
    
    <div class="container">
        <div class="row">
            <AppLoader  v-if="loading"/>
            <div v-else class="col-12 col-md-4 d-flex card-custom my-2" v-for="site in sites" :key="site">
                <div class="card p-1  ">
                    <div class="card-img-top">
                        <img :src="`${baseUrl}/storage/${site.image}`" class=" w-100 card-img"  :alt="`${site.title}`">
                    </div>
                    <div class="card-body">
                        <div class="card-header">
                            {{ site.title }}
                        </div>
                        <div class="text-center">
                            <span class="fw-bold me-1">Type:</span><span>{{ site.type.category }}</span>
                        </div>
                       
                        <div class="card-text my-3">
                            {{truncateText( site.description) }}
                        </div>
                        <div>
                            <span class="fw-bold me-1">Languages:</span>
                            <span v-for="technology in site.technologies" :key="technology" class="badge text-bg-warning mx-2">
                                {{ technology.tech_name }}
                            </span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
   
</template>
<style lang="scss">
.card-custom{

    .card-img{
        aspect-ratio: 16/9;
    }
}
</style>