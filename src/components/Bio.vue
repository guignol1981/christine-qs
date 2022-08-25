<template>
    <section class="pt-8 lg:w-1/3 2xl:w-1/2 lg:mx-8 mx-6 md:mx-36">
        <h2 class="text-3xl font-light">
            {{ $t('bio.title') }}
        </h2>
        <p class="mt-8 leading-7 first:mt-0" v-for="i in 5" :key="i">
            {{ $t(`bio.p${i}`) }}
        </p>
    </section>
</template>

<script>
export default {};
</script>
