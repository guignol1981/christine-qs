<template>
    <section>
        <h2 class="text-3xl font-light mb-8 mt-12">
            {{ $t('article.title') }}
        </h2>
        <div class="flex flex-col md:flex-row items-center">
            <a
                :href="$t(`article.url${i}`)"
                target="_blank"
                class="leading-7 rounded-md shadow-xl max-w-md cursor-pointer bg-white mb-6 md:mx-3" v-for="i in 2" :key="i">
                
                <div class="rounded-t-md bg-cover h-52" :style="[backgroundImageStyle(i)]"></div>
                <div class="text-left px-3 py-3">
                    <h3 class="pb-1">
                        <strong>{{ $t(`article.title${i}`) }}</strong>
                    </h3>
                    <p>
                        {{ $t(`article.description${i}`) }}
                    </p>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
setup() {
    const i18n = useI18n();

    const backgroundImageStyle = (index) => {
        const url = i18n.t(`article.image${index}`);
        return `background-image: url(${url})`
    };

    return { backgroundImageStyle };
},

};
</script>
