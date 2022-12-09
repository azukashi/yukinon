<template>
    <Head>
        <Meta v-if="$colorMode.value == 'light'" name="theme-color" content="#E1F3FC" />
        <Meta v-else name="theme-color" content="#2D3B42" />
    </Head>

    <Navigation />
    <NuxtLoadingIndicator color="var(--gradient)" />
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>

<script setup lang="ts">
_initHead();
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
:root {
    --gradient: linear-gradient(to right, #0ea5e9, #8b5cf6, #fb7185);
}
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
