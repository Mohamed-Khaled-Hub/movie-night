import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
// Hooks
import { useApi } from './useApi.ts'

export const useSearch = (searchQuery: string) => {
    const { searchMovie } = useApi()

    const {
        data: movies,
        mutate,
        isSuccess,
        isPending,
    } = useMutation({
        mutationFn: async () => {
            return await axios
                .get(searchMovie(searchQuery))
                .then((res) => res.data.results)
        },
        mutationKey: ['movies'],
    })
    return { movies, mutate, isSuccess, isPending }
}
