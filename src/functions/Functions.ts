export function getFromAssets(src: string) {
    // Remember to change path before deployment
    const paths = {
        deploymentPath: '',
        localhostPath: '../../public/assets/',
    }

    return new URL(paths.deploymentPath + src, import.meta.url).href
}
