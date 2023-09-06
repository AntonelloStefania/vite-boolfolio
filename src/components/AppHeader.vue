<script>
export default {
    data() {
        return {
            menuItem: [
                {
                    label: 'Home',
                    routeName: 'home',
                },
                {
                    label: 'Portfolio',
                    routeName:'works',
                },
                {
                    label: 'About us',
                    routeName: 'about',
                },
                {
                    label:'Contact us',
                    routeName:'contact'
                },
            ]
        }
    },
}
</script>
<template >
    <div class="container-fluid  header-container mb-5">
        <div class="row py-1">
            <div class=" ms-5 col-12  d-flex align-items-center">
                <div class="col-auto me-5">
                    <h2 class="text-white">
                        Boolfolio
                    </h2>
                </div>
                <div class="col-6 d-flex align-items-center">
                    <ul class="list-unstyled d-flex ">
                        <li class="mx-3" v-for="(item, index) in menuItem" :key="index">
                            <router-link class="nav-link" :to="{ name: item.routeName}">{{ item.label }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.header-container{
    background-color: rgba(14, 13, 13, 0.753);
    ul{
         margin-bottom: 0px !important;
         li{
           
                font-weight: bold;
                text-decoration: none;
                color: whitesmoke;
            
           
         }
    }
}

a:hover{
    text-decoration: underline !important;
}

</style> 




