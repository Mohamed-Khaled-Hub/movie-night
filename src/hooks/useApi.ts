export const useApi = () => {
    const API_KEY = import.meta.env.VITE_API_KEY
    const BASE_URL = import.meta.env.VITE_BASE_URL

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
