<template>
    <div
        class="sticky inset-x-0 top-0 flex items-center justify-between bg-primary-orange px-12 py-4 shadow-md"
    >
        <a href="#" @click="$router.push({ path: '/' })">
            <img
                class="aspect-auto w-32"
                src="@/assets/logo-white-horizontal.png"
                alt="logo QS"
            />
        </a>
        <div class="flex items-center space-x-5">
            <a
                class="cursor-pointer select-none text-white underline hover:underline-offset-2"
                @click="toggleLocale"
                >{{ getLocaleToDisplay() }}</a
            >
            <a
                href="https://www.facebook.com/ChristineGilbertQS?__cft__[0]=AZUoYyYMXN-21Y6h7jY10A2awaK2GbGrPY3M4bmbbgWAy3xhSQePVSBZfEOJq0-8-J1tDxToRpVOSiHU-Ueu9vBXMK29AsNtTGcSd8IEmMODj9fmO7Dh_Ze3aC1vEU8hcco-EWpT9pN1CBo1w57120Ja-tYlOmY-DJoqMdJCLl1WOVSZ5mFxvo09oq-uEU4er_jFZxkAyYbcKI160TPfVnEF&__tn__=-]K-R"
                target="_blank"
            >
                <img class="h-5 w-5" src="@/assets/facebook.png" alt="" />
            </a>
            <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fchristine.gilbert.qs%3Ffbclid%3DIwAR1niDq1mVk1cF-swi2IcENgogx0cxQGKmJ6l0ksuTxAd8VADX7r9nzkwu4&h=AT34QCYKEc-4h3wMGKcrtslPGvsetsJJuZGNfTIlxDcBWToS_5s9Vhp4LQUXjenpt8WWPUiD2BOM8MNAZvrOiEpACjkmJy2dJgoIAiWahMwwj6lBjAZwXByK3iPUhqOK7AyT_0lX4Va5SsI55A&__tn__=-UK-R&c[0]=AT1_bcSETr2byaYpof1g6-cceqrkXXi3DuY6MZk4LyXWIXnaNFdJRoCBj8C6c4SFjER4taQhgwQfIyP-GRK-u8BrA9KTupYn3Q6xBcZWfU7G358c1W9zSJdB35N8n8gZpU0yKpezb6ncuzrPA3TsgD5EK-7bfuFtpPh_2RV-KDw6tFFEBJkxxdGCwKtJmIkT9-ePtk73bl-lUq0Y-cQ9XOtYRtmbghKlDKg"
                target="_blank"
            >
                <img class="h-5 w-5" src="@/assets/instagram.png" alt="" />
            </a>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import {} from '@heroicons/vue/outline';

export default {
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
                return 'en';
            }

            return 'fr';
        };

        return { toggleLocale, getLocaleToDisplay };
    },
};
</script>
