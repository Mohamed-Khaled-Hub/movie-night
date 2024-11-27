import { ReactNode } from 'react'

// Props Types
export type ButtonProps = {
    type: 'link' | 'button'
    children?: ReactNode
    to?: string
    onClick?: () => void
    noBg?: boolean
}

export type ContainerProps = {
    type: 'movies'
    children?: ReactNode
}

export type MovieCardProps = {
    movie: MovieObject
}

// Objects Types
export type MovieObject = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
