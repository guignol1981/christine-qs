<template>
  <div>
      <bio-vue />
      <articles-vue />
  </div>
</template>

<script>
import BioVue from '@/components/Bio.vue';
import ArticlesVue from '@/components/Articles.vue';

export default {
    components: {
        BioVue,
        ArticlesVue
    },
};
</script>
