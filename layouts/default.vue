<template>
  <div id="ztake">
    <div id="delegate">
        <a href="#"><i class="icon icon-shield"></i>Delegate your Cosmos ATOMS to us to keep network secure and decentrilized!</a>
    </div>
    <Header/>
    <nuxt/>
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