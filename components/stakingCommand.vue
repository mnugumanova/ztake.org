<template>
    <div class="row no-gutters mt-4 mt-md-5">
        <div class="col-lg-8">
            <div class="box gaiacli">gaiacli tx staking delegate {{cosmosVal}} 10000uatom --gas auto --gas-prices 0.001uatom --chain-id cosmoshub-1  --from yourKey</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cosmosVal: process.env.COSMOS_VAL
        }
    }
}
</script>