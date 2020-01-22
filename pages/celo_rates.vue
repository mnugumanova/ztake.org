<template>
  <section>
    <div class="container">
      <h3 class="mb-4">Celo Rates</h3>

      <h4 class="mb-4"><small>cGLD</small> = {{ cGld }} <small>cUSD</small></h4>

      <small class="muted mb-1">*cUSD - Celo USD, cGLD - Celo Gold</small>
    </div>
  </section>
</template>

<script>
/* eslint-disable no-console */
const BN = require('bignumber.js');
const rpc = "http://5.189.224.132:8545/"

export default {
  data() {
    return {
      cGld: 0.995
    }
  },
  head() {
    return {
      title: 'Celo Rates - ZTAKE',
      meta: [
        {hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Celo Rates - ZTAKE'},
      ]
    }
  },
  methods: {
    async getExchange() {
      try {
        const data = await fetch(rpc, {"credentials":"omit","headers":{"accept":"application/json","accept-language":"en-US,en;q=0.9,ru;q=0.8","cache-control":"no-cache","content-type":"application/json","pragma":"no-cache"},"referrerPolicy":"no-referrer-when-downgrade","body":"{\"id\":3190537634,\"jsonrpc\":\"2.0\",\"method\":\"eth_call\",\"params\":[{\"from\":\"0x03ebd0748aa4d1457cf479cce56309641e0a98f5\",\"to\":\"0xC8FD77490A12F46709BffbCC0FCe35740Da8D860\",\"data\":\"0x9ed02b580000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000001\",\"value\":\"0x0\",\"gas\":\"0x2dc6c0\"},\"0xcfc7\"]}","method":"POST","mode":"cors"});
        const response = await data.json()
        if (response.error) {
          throw new Error(response.error.message)
        } else {
          this.cGld = BN(response.result).div(1000000000000000000).toFormat(3)
        }
      } catch (e) {
        console.error(e)
      }

      setTimeout(this.getExchange, 30000)
    }
  },
  mounted: async function () {
    await this.getExchange()
  }
}
</script>
