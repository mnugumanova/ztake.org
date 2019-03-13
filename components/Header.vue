<template>
    <header id="header">
        <div class="delegate" @click="copyToClipboard">
            <p>
                <i class="icon icon-shield"></i>
                <span>Delegate your Cosmos ATOMS to us to keep network secure and decentralized!</span>
            </p>
            <div class="btn btn-copy" id="copy">
                <span>{{cosmosVal}}</span>
                <i class="icon icon-copy"></i>
            </div>
        </div>
        <b-tooltip :show.sync="showTooltip" triggers="" target="copy" placement="bottom">
            Copied
        </b-tooltip>
         <b-navbar toggleable="md">
            <div class="container">
                <b-navbar-brand to="/">
                    <img src="../assets/img/logo.svg" width="41" height="38" class="d-inline-block align-top" alt="">
                    ZTAKE
                </b-navbar-brand>

                <b-navbar-toggle target="nav_collapse" />

                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/">Home</b-nav-item>
                        <b-nav-item to="/staking">Staking</b-nav-item>
                        <b-nav-item to="/cosmos_glossary">Cosmos Glossary</b-nav-item>
                        <b-nav-item to="/partnership">Partnership</b-nav-item>
                        <b-nav-item to="/about">About</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
         </b-navbar>
    </header>
</template>

<script>
import BCollapse from 'bootstrap-vue/es/components/collapse/collapse'
import BNavbar from 'bootstrap-vue/es/components/navbar/navbar'
import BNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
import BNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav'
import BNavItem from 'bootstrap-vue/es/components/nav/nav-item'
import BNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle'
import BTooltip from 'bootstrap-vue/es/components/tooltip/tooltip'

export default {
    name: "Header",
    components: {
        'b-collapse': BCollapse,
        'b-navbar': BNavbar,
        'b-navbar-brand': BNavbarBrand,
        'b-navbar-nav': BNavbarNav,
        'b-nav-item': BNavItem,
        'b-navbar-toggle': BNavbarToggle,
        'b-tooltip': BTooltip
    },
    data() {
        return {
            showTooltip: false,
            cosmosVal: process.env.COSMOS_VAL
        }
    },
    methods: {
        copyToClipboard() {
            let _this = this;
            _this.$copyText(_this.cosmosVal).then(function () {
                _this.showTooltip = true;
                setInterval(function () {
                    _this.showTooltip = false;
                }, 2000);
            })
        }
    }
}
</script>