<template>
  <div class="flex flex-col items-center lg:items-start">
      <div class="flex lg:flex-row flex-col">
          <profile-picture-vue />
          <bio-vue />
      </div>
      <articles-vue />
  </div>
</template>

<script>
import ProfilePictureVue from '@/components/ProfilePicture.vue';
import BioVue from '@/components/Bio.vue';
import ArticlesVue from '@/components/Articles.vue';

export default {
    components: {
        ProfilePictureVue,
        BioVue,
        ArticlesVue
    },
};
</script>
