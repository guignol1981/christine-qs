<template>
    <div class="w-full bg-primary-green px-8 pb-5 pt-3 text-white flex flex-col">
        <h1 class="pt-2 pb-4 text-xl font-semibold">{{ $t('footer.title') }}</h1>
        <social-medias-vue />
        <a href="https://agir.quebecsolidaire.net/" target="_blank" class="py-2 pr-2">{{ $t('footer.getInvolved') }}</a>
        <a href="https://adhesion.quebecsolidaire.net" target="_blank" class="py-2 pr-2">{{ $t('footer.membership') }}</a>
        <a href="https://don.quebecsolidaire.net" target="_blank" class="py-2 pr-2">{{ $t('footer.donate') }}</a>
        <div class="text-sm pt-4 text-center">{{ $t('footer.authorization') }}</div>
    </div>
</template>

<script>
import SocialMediasVue from '@/components/SocialMedias.vue';

export default {
    components: {
        SocialMediasVue,
    },
};
</script>
