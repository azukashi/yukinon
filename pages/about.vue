<template>
    <div class="font-lexend">
        <div
            class="container px-4 mt-14 max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:flex-wrap lg:gap-3 lg:justify-evenly lg:max-w-full lg:p-0"
        >
            <div class="hidden lg:flex lg:w-1/2">
                <img
                    src="https://cdn.upload.systems/uploads/61rmRLt9.png"
                    class="object-contain"
                    height="500"
                    width="500"
                />
            </div>
            <div class="lg:p-8 lg:flex-1">
                <h2 class="mt-2 text-3xl font-semibold sm:mt-2">Overview</h2>
                <p class="mt-2 sm:text-lg">{{ oview.content }}</p>
                <h2 class="mt-2 text-3xl font-semibold sm:mt-2">Friendship</h2>
                <p class="mt-2 sm:text-lg">{{ frnds.content }}</p>
                <h2 class="mt-2 text-3xl font-semibold sm:mt-2">Trivia</h2>
                <div class="mt-2 px-4">
                    <ul class="sm:text-lg list-disc" v-for="trv in trvia.content" :key="trv">
                        <li class="">{{ trv }}</li>
                    </ul>
                </div>
                <div class="mt-2 sm:mt-6">
                    <NuxtLink
                        :to="localePath('/fanart')"
                        class="inline-block px-5 py-3 bg-gradient-to-r from-pink-400/[.5] to-violet-500/[.5] hover:from-violet-400/[.5] hover:to-sky-500/[.5] backdrop-blur-sm text-snow-light rounded-lg shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base fixed bottom-8 right-8 z-10 hover:translate-x-4 transition-all"
                        ><Icon name="material-symbols:arrow-forward-ios-rounded" size="24"
                    /></NuxtLink>
                    <NuxtLink
                        :to="localePath('/')"
                        class="inline-block px-5 py-3 bg-gradient-to-r from-violet-500/[.5] to-pink-400/[.5] hover:from-red-500/[.5] hover:to-pink-400/[.5] backdrop-blur-sm text-snow-light rounded-lg shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base fixed bottom-8 left-8 z-10 hover:-translate-x-4 transition-all"
                        ><Icon name="material-symbols:arrow-back-ios-new-rounded" size="24"
                    /></NuxtLink>
                </div>
                <img
                    src="https://cdn.upload.systems/uploads/61rmRLt9.png"
                    height="500"
                    width="500"
                    class="mt-20 sm:mt-6 lg:hidden"
                />
            </div>
            <div class="lg:flex-[50%]">
                <h2 class="mt-2 text-3xl font-semibold sm:mt-2">Socials</h2>
                <p class="mt-2 sm:text-lg">
                    She is discoverable in these SNS. You can find her by visiting her socials below!
                </p>
                <div class="mt-2 mb-16">
                    <div v-for="social in socials.links" :class="`inline text-snow-light`">
                        <a
                            :href="social.link"
                            class="btn block md:inline-block lg:inline-block px-5 py-3 mr-2 mb-2 hover:-translate-y-2 active:translate-y-1 active:translate-x-1 transition-all"
                            :style="`background: ${social.color};`"
                        >
                            <Icon size="26" :name="social.icon" /> {{ social.username }}
                        </a>
                    </div>
                </div>
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
const socialsInit: any = await getData('social');
const oview = data.value?.data?.attributes;
const frnds = friendshipInit.data.value?.data?.attributes;
const trvia = triviaInit.data.value?.data?.attributes;
const socials = socialsInit.data.value?.data?.attributes;
const localePath = useLocalePath();
const handleClick = (to: string) => {
    location.href = to;
};
</script>

<style></style>
