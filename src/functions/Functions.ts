export function getFromAssets(src: string) {
    return new URL('../../public/assets/' + src, import.meta.url).href
}
