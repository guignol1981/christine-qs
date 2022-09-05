<template>
    <div class="sticky inset-x-0 top-0 flex items-center justify-between bg-primary-orange px-6 py-4 shadow-md z-50">
        <a href="#" @click="$router.push({ path: '/' })">
            <img class="aspect-auto w-32" src="@/assets/logo-white-horizontal.png" alt="logo QS" />
        </a>
        <social-medias-vue />
        <!--Décommenter pour pouvoir changer la langue-->
        <!--<div
            class="cursor-pointer select-none text-white underline hover:underline-offset-2 p-2"
            @click="toggleLocale"
            >{{ getLocaleToDisplay() }}
        </div>-->
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import {} from '@heroicons/vue/outline';
import SocialMediasVue from '@/components/SocialMedias.vue';

export default {
    components: {
        SocialMediasVue,
    },
    setup() {
        const i18n = useI18n();

        const toggleLocale = () => {
            if (i18n.locale.value === 'fr') {
                i18n.locale.value = 'en';
                return;
            }

            i18n.locale.value = 'fr';
        };

        const getLocaleToDisplay = () => {
            if (i18n.locale.value === 'fr') {
                return 'En';
            }

            return 'Fr';
        };

        return { toggleLocale, getLocaleToDisplay };
    },
};
</script>
