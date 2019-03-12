<template>
    <header id="header">
         <b-navbar toggleable="md">
            <div class="container">
                <b-navbar-brand href="#">
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

export default {
    name: "Header",
    components: {
        'b-collapse': BCollapse,
        'b-navbar': BNavbar,
        'b-navbar-brand': BNavbarBrand,
        'b-navbar-nav': BNavbarNav,
        'b-nav-item': BNavItem,
        'b-navbar-toggle': BNavbarToggle,
    }
}
</script>