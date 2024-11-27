import { useEffect, useRef, useState } from 'react'
// Types
import { MovieObject } from '../types/Types.ts'
// Functions
import { getFromAssets } from '../functions/Functions.ts'
// Hooks
import { useMovies } from '../hooks/useMovies.ts'
import { useSearch } from '../hooks/useSearch.ts'
import { useTheme } from '../hooks/useTheme.ts'
// Components
import MovieCard from '../components/MovieCard.tsx'
import Container from '../components/Container.tsx'
import Button from '../components/Button.tsx'
import Loading from '../components/Loading.tsx'
// Styles
import '../styles/Home.css'

const Home = () => {
    // Movies Array that will be rendered
    const [homeMovies, setHomeMovies] = useState<MovieObject[]>([])
    // Form input value state
    const [inputValue, setInputValue] = useState<string>('')
    // Using React Query to fetch the movies in this hook
    const { movies, isFetched, isLoading } = useMovies()
    // Using Mutation to search for movies
    const {
        movies: searchedMovies,
        mutate: search,
        isSuccess,
        isPending,
    } = useSearch(inputValue)
    // Form Reference
    const formRef = useRef<HTMLFormElement>(null)
    // Current theme
    const theme = useTheme() ? 'dark' : 'light'

    // useEffect for handling searching and fetching movies
    useEffect(() => {
        document.title = 'Movie Space - Home'

        if (isFetched) {
            setHomeMovies(movies)
        }

        if (isSuccess) {
            setHomeMovies(searchedMovies)
            setInputValue('')
        }
    }, [isLoading, isPending])

    return (
        <div className='home'>
            <form
                id='search-form'
                ref={formRef}
                onSubmit={(e) => {
                    e.preventDefault()
                    if (inputValue === '') {
                        setHomeMovies(movies)
                    } else {
                        search()
                    }
                }}
            >
                <input
                    type='text'
                    value={inputValue}
                    id='search-input'
                    placeholder='Search'
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                    type='button'
                    onClick={() => formRef.current?.requestSubmit()}
                >
                    <img
                        className='svg-standard'
                        src={getFromAssets(`svg/${theme}/SEARCH.svg`)}
                        alt='Search'
                    />
                </Button>
            </form>
            <Container type='movies'>
                {isLoading || isPending ? (
                    <Loading />
                ) : (
                    isFetched &&
                    homeMovies.map((movie: MovieObject) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}
            </Container>
        </div>
    )
}

export default Home
