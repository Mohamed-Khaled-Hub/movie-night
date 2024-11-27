export function getFromAssets(src: string) {
    return new URL('' + src, import.meta.url).href
}
