// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/strapi', '@nuxtjs/i18n', 'nuxt-icon'],
    tailwindcss: {
        configPath: 'tailwind.config.ts',
    },
    i18n: {
        locales: ['en', 'ja-JP'],
        defaultLocale: 'en',
    },
    strapi: {
        url: 'https://yukinon-api.falcxxdev.ml',
    },
});
