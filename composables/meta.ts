import { Ref } from 'nuxt/dist/app/compat/capi';

export const _initHead = async () => {
    const { data }: any = await getData('biodata');
    const bio: Ref = ref(data.value?.data?.attributes);

    useHead({
        titleTemplate: titleChunk => {
            return titleChunk ? `${titleChunk} | ${bio.value.name.full} website` : `${bio.value.name.full} website`;
        },
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            // General tags
            { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
            { name: 'charset', content: 'utf-8' },
            { name: 'description', content: `I'm ${bio.value.name.full}, Domestic cat and a maid from Re:AcT.` },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'author', content: bio.value.name.full },
            { name: 'publisher', content: 'Falcxxdev' },
            // Opengraph (Facebook, Discord & average SNS)
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: bio.value.name.full },
            { name: 'og:url', content: 'https://yukinon.falcxxdev.ml' },
        ],
        script: [
            {
                src: 'https://umami.falcxxdev.ml/umami.js',
                async: true,
                defer: true,
                'data-website-id': '8283b589-811a-45b8-a109-643031ada249',
            },
        ],
    });
};
