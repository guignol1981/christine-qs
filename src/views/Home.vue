<template>
  <div class="flex flex-col items-center lg:items-start">
      <div class="flex lg:flex-row flex-col">
          <profile-picture-vue />
          <bio-vue />
      </div>
      <articles-vue />
  </div>
  <video-modal-vue />
</template>

<script>
import ProfilePictureVue from '@/components/ProfilePicture.vue';
import BioVue from '@/components/Bio.vue';
import ArticlesVue from '@/components/Articles.vue';
import VideoModalVue from '@/components/VideoModal.vue';

export default {
    components: {
        ProfilePictureVue,
        BioVue,
        ArticlesVue,
        VideoModalVue
    },
};
</script>
