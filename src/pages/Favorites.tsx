import { useEffect, useState } from 'react'
// Types
import { MovieObject } from '../types/Types.ts'
// Components
import MovieCard from '../components/MovieCard.tsx'
import Container from '../components/Container.tsx'
// Styles
import '../styles/Favorites.css'

const Favorites = () => {
    // Movies Array that will be rendered
    const [favoritesMovies, setFavoritesMovies] = useState<MovieObject[]>([])

    const checkLocalStorage = () => {
        const moviesInLocalStorage = localStorage.getItem('movies')

        if (moviesInLocalStorage) {
            let foundInLocalStorage = JSON.parse(moviesInLocalStorage)

            setFavoritesMovies(foundInLocalStorage)
        } else {
            setFavoritesMovies([])
        }
    }

    // useEffect to check if localStorage is empty or not on load
    useEffect(() => {
        document.title = 'Movie Night - Favorites'

        checkLocalStorage()
    }, [])

    return (
        <div className='favorites'>
            <Container type='movies'>
                {favoritesMovies.length == 0 ? (
                    <h1>Empty</h1>
                ) : (
                    favoritesMovies.map((movie: MovieObject) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}
            </Container>
        </div>
    )
}

export default Favorites
