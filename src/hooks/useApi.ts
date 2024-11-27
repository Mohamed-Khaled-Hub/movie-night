export const useApi = () => {
    const API_KEY = '6b4dccd5f45b47153b61c9fbf022932b'
    const BASE_URL = 'https://api.themoviedb.org/3'

    const moviePosterUrl = (poster_path: string) => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`
    }

    const nowPlayingMovies = () => {
        return `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
    }

    const searchMovie = (searchQuery: string) => {
        return `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchQuery)}`
    }

    return { moviePosterUrl, nowPlayingMovies, searchMovie }
}
