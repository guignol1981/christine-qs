<template>
    <navbar-vue />
    <router-view />
    <footer-vue />
</template>

<script>
import FooterVue from './components/Footer.vue';
import NavbarVue from './components/Navbar.vue';
import { useHead } from "@vueuse/head"

export default {
    components: {
        NavbarVue,
        FooterVue,
    },
    setup() {
        useHead({
            title: 'Christine Gilbert | Québec solidaire',
            meta: [
                {
                    name: 'description',
                    content: 'Christine Gilbert est la candidate de Québec solidaire (QS) dans Lotbinière-Frontenac',
                },
                { property: 'og:title', content: "Christine Gilbert | Québec solidaire"},
                {
                  property: 'og:description',
                  content: "Christine Gilbert est la candidate de Québec solidaire (QS) dans Lotbinière-Frontenac pour les élections provinciales de 2022." +
                    "Christine a un fort sentiment d’appartenance à la circonscription Lotbinière-Frontenac, autant par son lieu d’habitation qui se situe dans Lotbinière, que par la région d’origine de sa famille, Thetford Mines, dans Frontenac."
                },
                { property: 'og:image', content: "https://www.lepeuplelotbiniere.ca/images/contenu/plus/114464_465_310.jpg" },
                { property: 'og:site_name', content: 'Christine Gilbert - Québec solidaire' },
                { property: 'og:type', content: 'website' },    
                { name: 'robots', content: 'index,follow' } 
            ],
        });
    },
};
</script>