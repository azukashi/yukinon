<template>
    <div class="mt-14 px-6 md:px-12 lg:px-14 font-lexend">
        <h2 class="mt-2 text-3xl font-semibold sm:mt-2">Fan art</h2>
        <p class="mt-1 sm:text-lg">Curated fan-made arts from Twitter & Pixiv</p>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4 mt-4">
            <div v-for="art in arts.arts" class="grid-card group">
                <a :href="art.source">
                    <div class="grid-card-img" :style="`background: url('${art.img}'); background-size: cover;`"></div>
                </a>
                <div
                    class="px-6 py-2 w-full bg-snow-dark/[.6] text-snow-light backdrop-blur-sm text-center font-bold underline absolute bottom-0 dark:bg-snow-light/[.6] dark:text-snow-dark"
                >
                    <a :href="art.usrLink">{{ art.username }}</a>
                </div>
            </div>
        </div>
        <div class="mt-2 sm:mt-6">
            <NuxtLink
                :to="localePath('/about')"
                class="inline-block px-5 py-3 bg-gradient-to-r from-violet-500/[.5] to-pink-400/[.5] hover:from-red-500/[.5] hover:to-pink-400/[.5] backdrop-blur-sm text-snow-light rounded-lg shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base fixed bottom-8 left-8 z-10 hover:-translate-x-4 transition-all"
                ><Icon name="material-symbols:arrow-back-ios-new-rounded" size="24"
            /></NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { data, pending, error }: any = await getData('fanart');
const arts = data.value?.data?.attributes;
useHead({
    bodyAttrs: {
        class: 'overflow-visible',
    },
});
</script>

<style scoped></style>
