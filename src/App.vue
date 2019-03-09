<template>
  <div id="app">
    <div id="delegate">
      <a href="#">Delegate your Cosmos ATOMS to us to keep network secure and decentrilized!</a>
    </div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import "assets/scss/ztake.scss";
</style>