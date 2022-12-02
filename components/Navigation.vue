<template>
    <div>
        <header class="shadow-sm bg-white font-lexend">
            <nav class="navbar">
                <NuxtLink to="/" class="navbar__link font-bold">猫乃ユキノ</NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="/" class="navbar__link hidden md:block lg:block">Home</NuxtLink>
                    </li>
                    <li><NuxtLink to="/" class="navbar__link hidden md:block lg:block">About</NuxtLink></li>
                    <li><NuxtLink to="/" class="navbar__link hidden md:block lg:block">Fan art</NuxtLink></li>
                    <li>
                        <NuxtLink
                            class="hidden md:block lg:block"
                            v-if="isEng"
                            :to="switchLocalePath('ja-JP')"
                            @click="handleSwitch"
                            ><Icon name="bi:translate" /> 日本</NuxtLink
                        >
                        <NuxtLink
                            class="hidden md:block lg:block"
                            v-else
                            :to="switchLocalePath('en')"
                            @click="handleSwitch"
                            ><Icon name="bi:translate" /> English</NuxtLink
                        >
                    </li>
                    <li>
                        <button
                            v-if="$colorMode.value == 'light'"
                            class="btn bg-transparent h-[20px] w-[20px] hidden md:block lg:block"
                            @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
                        >
                            <Icon size="20px" name="ri:moon-fill" />
                        </button>
                        <button
                            v-else
                            class="btn bg-transparent h-[20px] w-[20px] hidden md:block lg:block"
                            @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
                        >
                            <Icon size="20px" name="ri:sun-fill" />
                        </button>
                    </li>
                    <li>
                        <button @click="handleToggle" class="btn bg-transparent h-[24px] w-[24px] md:hidden lg:hidden">
                            <Icon size="24px" name="charm:menu-hamburger" />
                        </button>
                    </li>
                </ul>
            </nav>
            <div
                v-if="isToggle"
                class="container mx-auto p-4 mt-14 fixed z-10 bg-snow-dark/[.1] backdrop-blur-md max-w-full max-h-lg md:hidden lg:hidden dark:bg-snow-light/[.1]"
            >
                <ul class="p-4 bg-snow-light/[.7] rounded-lg dark:bg-snow-dark/[.7]">
                    <li class="mb-2">
                        <NuxtLink to="/" class="navbar__link md:hidden lg:hidden">Home</NuxtLink>
                    </li>
                    <li class="mb-2"><NuxtLink to="/" class="navbar__link md:hidden lg:hidden">About</NuxtLink></li>
                    <li class="mb-2"><NuxtLink to="/" class="navbar__link md:hidden lg:hidden">Fan art</NuxtLink></li>
                    <li class="mb-2">
                        <NuxtLink
                            class="md:hidden lg:hidden"
                            v-if="isEng"
                            :to="switchLocalePath('ja-JP')"
                            @click="handleSwitch"
                            ><Icon name="bi:translate" /> 日本</NuxtLink
                        >
                        <NuxtLink class="md:hidden lg:hidden" v-else :to="switchLocalePath('en')" @click="handleSwitch"
                            ><Icon name="bi:translate" /> English</NuxtLink
                        >
                    </li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">
type Theme = 'light' | 'dark';

let isToggle = ref(false);
const isEng = ref(true);
const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme;
};
const handleToggle = () => {
    isToggle.value = !isToggle.value;
};
const switchLocalePath = useSwitchLocalePath();
const handleSwitch = () => {
    isEng.value = !isEng.value;
};
</script>

<style scoped type="text/tailwindcss"></style>
