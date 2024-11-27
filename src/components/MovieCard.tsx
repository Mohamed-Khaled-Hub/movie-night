import { useEffect, useState } from 'react'
// Types
import { MovieCardProps, MovieObject } from '../types/Types.ts'
// Functions
import { getFromAssets } from '../functions/Functions.ts'
// Hooks
import { useApi } from '../hooks/useApi.ts'
import { useTheme } from '../hooks/useTheme.ts'
// Components
import Button from './Button.tsx'
// Styles
import '../styles/MovieCard.css'

const MovieCard = ({ movie }: MovieCardProps) => {
    // Favorite button state
    const [favoriteButtonClicked, setFavoriteButtonClicked] =
        useState<boolean>(false)
    // Get the poster image
    const { moviePosterUrl } = useApi()
    // Current theme
    const theme = useTheme() ? 'dark' : 'light'

    // Boolean Function for checking if movie is in localStorage or not
    const ifInLocalStorage = () => {
        const moviesInLocalStorage = localStorage.getItem('movies')

        if (moviesInLocalStorage) {
            let findInLocalStorage = JSON.parse(moviesInLocalStorage)

            return findInLocalStorage.some(
                (item: MovieObject) => item.id == movie.id
            )
        }

        return false
    }

    // Void Function to add movie in localStorage
    const addToLocalStorage = () => {
        const moviesInLocalStorage = localStorage.getItem('movies')

        if (moviesInLocalStorage) {
            let addToLocalStorage = JSON.parse(moviesInLocalStorage)

            if (
                !addToLocalStorage.some(
                    (item: MovieObject) => item.id == movie.id
                )
            ) {
                addToLocalStorage.push(movie)
            }
            localStorage.setItem('movies', JSON.stringify(addToLocalStorage))
        } else {
            localStorage.setItem('movies', JSON.stringify([movie]))
        }

        setFavoriteButtonClicked((prev) => !prev)
    }

    // Void Function to remove movie from localStorage (if it exists)
    const removeFromLocalStorage = () => {
        const moviesInLocalStorage = localStorage.getItem('movies')

        if (moviesInLocalStorage) {
            let removeFromLocalStorage = JSON.parse(moviesInLocalStorage)

            removeFromLocalStorage = removeFromLocalStorage.filter(
                (item: MovieObject) => item.id !== movie.id
            )

            localStorage.setItem(
                'movies',
                JSON.stringify(removeFromLocalStorage)
            )
        }

        setFavoriteButtonClicked((prev) => !prev)
    }

    // Set the favorite img to be red if the movie is in localStorage
    useEffect(() => {
        setFavoriteButtonClicked(ifInLocalStorage())
    }, [])

    return (
        <div className='movie-card'>
            <div className='top'>
                <div className='poster'>
                    <Button
                        type='button'
                        onClick={() =>
                            favoriteButtonClicked
                                ? removeFromLocalStorage()
                                : addToLocalStorage()
                        }
                    >
                        <img
                            className='svg-standard'
                            src={getFromAssets(
                                `svg/${favoriteButtonClicked ? 'common' : theme}/FAVORITE.svg`
                            )}
                            alt='Add to favorites'
                        />
                    </Button>
                    <img
                        className='movie-poster'
                        src={moviePosterUrl(movie.poster_path)}
                        alt={movie.title}
                    />
                </div>
            </div>
            <div className='bottom'>
                <p className='title' title={movie.title}>
                    {movie.title}
                </p>
                <div className='movie-info'>
                    <p className='released'>
                        {movie.release_date.split('-')[0]}
                    </p>
                    <p className='rating'>
                        {movie.vote_average.toFixed(1)} / 10
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
