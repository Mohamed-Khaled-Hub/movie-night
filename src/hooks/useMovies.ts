import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// Hooks
import { useApi } from './useApi.ts'

export const useMovies = () => {
    const { nowPlayingMovies } = useApi()

    const {
        data: movies,
        isLoading,
        isError,
        isFetched,
        isRefetching,
        refetch,
    } = useQuery({
        queryFn: async () => {
            return await axios
                .get(nowPlayingMovies())
                .then((res) => res.data.results)
        },
        queryKey: ['movies'],
    })

    return { movies, isLoading, isError, isFetched, isRefetching, refetch }
}
