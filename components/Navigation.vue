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
                        <button class="btn bg-transparent h-[20px] w-[20px] hidden md:block lg:block">
                            <Icon size="20px" name="ri:moon-fill" />
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
                class="container mx-auto p-4 mt-14 fixed z-10 bg-black/[.1] backdrop-blur-md max-w-full max-h-lg md:hidden lg:hidden"
            >
                <ul class="p-4 bg-white/[.5] rounded-lg">
                    <li class="mb-2">
                        <NuxtLink to="/" class="md:hidden lg:hidden">Home</NuxtLink>
                    </li>
                    <li class="mb-2"><NuxtLink to="/" class="md:hidden lg:hidden">About</NuxtLink></li>
                    <li class="mb-2"><NuxtLink to="/" class="md:hidden lg:hidden">Fan art</NuxtLink></li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script setup lang="ts">
let isToggle = ref(false);
const handleToggle = () => {
    isToggle.value = !isToggle.value;
};
</script>

<style scoped type="text/tailwindcss"></style>
