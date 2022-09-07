<template>
<div v-if="isOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="flex justify-center fixed inset-0 z-10 lg:mt-20">
    <div class="flex flex-col items-center justify-center text-center">
      <div class="flex flex-col items-center justify-center relative transform shadow-xl transition-all w-full m-4" v-click-outside="onClickOutside">
        <iframe
          class="sm:w-[416px] sm:h-[234px] md:w-[640px] md:h-[360px] lg:w-[800px] lg:h-[450px] xl:w-[960px] xl:h-[540px] 3xl:w-[1280px] 3xl:h-[720px] "
          src="https://www.youtube.com/embed/Yg8tH2dBy94"
          title="video christine gilbert"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <a class="text-white cursor-pointer">{{ $t('Continuer vers le site') }}</a>
    </div>
  </div>
</div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'

export default {
  directives: {
      clickOutside: vClickOutside.directive
  },
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
      onClickOutside (event) {
        this.isOpen = false;
      },
  }
};
</script>
