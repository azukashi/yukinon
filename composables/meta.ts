export const _initHead = async () => {
    const { data }: any = await getData('biodata');
    const bio = data.value?.data?.attributes;

    useHead({
        titleTemplate: titleChunk => {
            return titleChunk ? `${titleChunk} | ${bio.name.full} website` : `${bio.name.full} website`;
        },
        meta: [
            // General tags
            { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
            { name: 'charset', content: 'utf-8' },
            { name: 'description', content: `I'm ${bio.name.full}, Domestic cat and a maid from Re:AcT.` },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
            { name: 'author', content: bio.name.full },
            { name: 'publisher', content: 'Falcxxdev' },
            // Opengraph (Facebook, Discord & average SNS)
            { name: 'og:type', content: 'website' },
            { name: 'og:site_name', content: bio.name.full },
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
