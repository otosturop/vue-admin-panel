<template>
    <transition name="page" mode="out-in">
        <router-view> </router-view>  
    </transition>
</template>

<script>
    
    export default {
      components: {
        
      },
      created() {
          this.$store.dispatch("initApp")
          this.$store.dispatch("initAbout")
          this.$store.dispatch("initServices")
          this.$store.dispatch("initWorks")
          this.$store.dispatch("initInspiration")
      }
    }

</script>

<style>
    html {
        height: 100% !important;
    }
    body {
         background-color: #002436;     
    }
    .page-enter, .page-leave{
        opacity: 0;
        /*transform: translate(400px);*/
        transform: scale(0); 
    }
    .page-enter-active, .page-leave-active{
        transition: all .5s
    } 
</style>