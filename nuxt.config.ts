// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi', '@nuxtjs/i18n', 'nuxt-icon'],
    publicRuntimeConfig: {
        PUBLIC_API_URL: process.env.NUXT_PUBLIC_STRAPI_URL,
    },
    tailwindcss: {
        configPath: 'tailwind.config.ts',
    },
    i18n: {
        locales: ['en', 'ja-JP'],
        defaultLocale: 'en',
    },
    strapi: {
        url: process.env.NUXT_PUBLIC_STRAPI_URL,
    },
});
