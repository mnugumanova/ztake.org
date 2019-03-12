<template>
  <div id="ztake">
    <div id="delegate">
        <a href="#"><i class="icon icon-shield"></i>Delegate your Cosmos ATOMS to us to keep network secure and decentralized!</a>
        <a>cosmosvaloper102ruvpv2srmunfffxavttxnhezln6fnc54at8c</a>
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