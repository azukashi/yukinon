<template>
    <div class="font-lexend">
        <div class="container px-4 mt-20 max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0">
            <div class="hidden lg:flex lg:w-1/2">
                <img
                    src="https://cdn.upload.systems/uploads/61rmRLt9.png"
                    class="object-contain"
                    height="500"
                    width="500"
                />
            </div>
            <div class="lg:p-12 lg:flex-1">
                <h2 class="mt-2 text-3xl font-semibold sm:mt-2">Overview</h2>
                <p class="mt-2 sm:text-lg">{{ oview.content }}</p>
                <h2 class="mt-2 text-3xl font-semibold sm:mt-2">Friendship</h2>
                <p class="mt-2 sm:text-lg">{{ frnds.content }}</p>
                <h2 class="mt-2 text-3xl font-semibold sm:mt-2">Trivia</h2>
                <ul class="sm:text-lg list-disc" v-for="trv in trvia.content" :key="trv">
                    <li class="">{{ trv }}</li>
                </ul>
                <div class="mt-2 sm:mt-6">
                    <NuxtLink
                        to="/about"
                        class="inline-block px-5 py-3 bg-gradient-to-r from-pink-400 to-violet-500 hover:from-violet-400 hover:to-sky-500 text-white rounded-lg shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base fixed bottom-8 right-8 z-10 hover:translate-x-4 transition-all"
                        ><Icon name="material-symbols:arrow-forward-ios-rounded" size="24"
                    /></NuxtLink>
                </div>
                <img
                    src="https://cdn.upload.systems/uploads/61rmRLt9.png"
                    height="500"
                    width="500"
                    class="mt-20 sm:mt-6 lg:hidden"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: 'overflow-visible',
    },
});
const { data, pending, error }: any = await getData('overview');
const friendshipInit: any = await getData('friendship');
const triviaInit: any = await getData('trivia');
const oview = data.value?.data?.attributes;
const frnds = friendshipInit.data.value?.data?.attributes;
const trvia = triviaInit.data.value?.data?.attributes;
</script>

<style></style>
