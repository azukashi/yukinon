<template>
    <div class="font-lexend">
        <div class="container px-6 mt-24 max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0">
            <div class="lg:p-12 lg:flex-1">
                <h1 class="text-4xl font-bold sm:text-3xl md:text-5xl">{{ bio.name.full }}</h1>
                <h2 class="mt-2 text-xl font-semibold sm:mt-2 sm:text-xl">
                    {{ home.greeting }}
                    <br />
                    {{ home.intro }}
                </h2>
                <p class="mt-2 sm:text-lg">
                    {{ home.description }}
                </p>
                <div class="mt-2 sm:mt-6">
                    <NuxtLink
                        :to="localePath('/about')"
                        class="inline-block px-5 py-3 bg-gradient-to-r from-pink-400/[.6] to-violet-500/[.6] hover:from-violet-400/[.6] hover:to-sky-500/[.6] backdrop-blur-sm text-white rounded-lg shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base absolute bottom-8 right-8 z-10 hover:translate-x-4 transition-all"
                        ><Icon name="material-symbols:arrow-forward-ios-rounded" size="24"
                    /></NuxtLink>
                </div>
                <img
                    src="https://cdn.upload.systems/uploads/61rmRLt9.png"
                    height="500"
                    width="500"
                    class="mt-20 sm:mt-6 lg:hidden"
                    :alt="`${bio.name.full}`"
                />
            </div>
            <div class="hidden lg:flex lg:w-1/2">
                <img
                    src="https://cdn.upload.systems/uploads/61rmRLt9.png"
                    class="object-cover rounded-l-3xl absolute top-40 -right-52"
                    height="500"
                    width="500"
                    :alt="`${bio.name.full}`"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data, pending, error }: any = await getData('biodata');
const homeInit: any = await getData('home');
const bio = data.value?.data?.attributes;
const home = homeInit.data.value?.data?.attributes;
const localePath = useLocalePath();
useHead({
    title: 'Home',
    bodyAttrs: {
        class: 'overflow-hidden md:overflow-hidden lg:overflow-hidden',
    },
});
</script>

<style></style>
