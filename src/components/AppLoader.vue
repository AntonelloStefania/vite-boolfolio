<script>
    export default {
        
    }
</script>
<template >
    <div class="row d-flex loader">
        <div class="text-center justify-content-center align-self-center ">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@keyframes spinner-border {
    to { transform: rotate(360deg) #{"/* rtl:ignore */"}; }
}
.loader{
    height: 100vh;
}
</style>