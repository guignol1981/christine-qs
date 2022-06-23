<template>
    <navbar-vue />
    <main class="mx-auto max-w-xs py-12 sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
        <router-view />
    </main>
    <footer-vue />
</template>

<script>
import FooterVue from './components/Footer.vue';
import NavbarVue from './components/Navbar.vue';
export default {
    components: {
        NavbarVue,
        FooterVue,
    },
};
</script>
