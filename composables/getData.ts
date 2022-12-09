export const getData = async (schema: string) => {
    const { find } = useStrapi();
    const i18n = useI18n();
    const locale: any = ref(i18n.locale);

    const { data, pending, refresh, error } = await useAsyncData(schema, () => find(schema, { locale: locale.value }));

    return { data, pending, refresh, error };
};
