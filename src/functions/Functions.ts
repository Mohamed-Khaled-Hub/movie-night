export function getFromAssets(src: string) {
    return new URL('../Assets/' + src, import.meta.url).href
}
