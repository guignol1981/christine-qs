<template>
    <section>
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
