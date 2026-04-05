export function useJsonLd(schemaData: any) {
    if (!schemaData) return;

    useHead({
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify(schemaData)
            }
        ]
    });
}
