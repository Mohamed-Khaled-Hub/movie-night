import { useState, useEffect } from 'react'

export const useTheme = () => {
    // Check Current System Theme
    const getCurrentTheme = () =>
        window.matchMedia('(prefers-color-scheme: dark)').matches

    // Theme's State
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getCurrentTheme())

    // Func to Set State when System's Theme changes
    const mqListener = (e: MediaQueryListEvent) => {
        setIsDarkTheme(e.matches)
    }

    useEffect(() => {
        const darkThemeMatch = window.matchMedia('(prefers-color-scheme: dark)')
        darkThemeMatch.addEventListener('change', mqListener)
        return () => darkThemeMatch.removeEventListener('change', mqListener)
    }, [])

    return isDarkTheme
}
