// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/strapi',
        '@nuxtjs/i18n',
        '@nuxtjs/color-mode',
        '@nuxt/image-edge',
        'nuxt-icon',
    ],
    runtimeConfig: {
        PUBLIC_API_URL: process.env.NUXT_PUBLIC_STRAPI_URL,
    },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
    },
    i18n: {
        locales: ['en', 'ja-JP'],
        defaultLocale: 'en',
    },
    strapi: {
        url: process.env.NUXT_PUBLIC_STRAPI_URL,
    },
    colorMode: {
        classSuffix: '',
    },
    image: {
        domains: ['cdn.upload.systems', 'pbs.twimg.com'],
    },
});
