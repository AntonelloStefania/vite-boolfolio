<script>
import axios from 'axios';
    export default {
        
        data() {
            return {
               baseUrl: 'http://localhost:8000',
               sites: [],
               loading: true, 
            }
        },created() {
            
        },methods: {
            getSites(){
                this.loading=true;
                axios.get(`${this.baseUrl}/api/sites`).then((response)=>{
                    if(response.data.success){
                        this.sites = response.data.results;
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
    <div class="card">
        ciao
    </div>
</template>
<style lang="scss">
    
</style>