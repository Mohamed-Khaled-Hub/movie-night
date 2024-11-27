// Functions
import { getFromAssets } from '../functions/Functions.ts'
// Hooks
import { useTheme } from '../hooks/useTheme.ts'
// Components
import Button from './Button.tsx'
// Styles
import '../styles/Nav.css'

const Nav = () => {
    // Current theme
    const theme = useTheme() ? 'dark' : 'light'

    return (
        <div className='nav'>
            <div className='left'>
                <Button type='link' to='/' noBg={true}>
                    <img
                        className='logo'
                        src={getFromAssets(`logo/${theme}/LOGO.svg`)}
                        alt='Movie Night'
                    />
                </Button>
            </div>
            <div className='right'>
                <Button type='link' to='/'>
                    <img
                        className='svg-standard'
                        src={getFromAssets(`svg/${theme}/HOME.svg`)}
                        alt='Home'
                    />
                </Button>
                <Button type='link' to='/favorites'>
                    <img
                        className='svg-standard'
                        src={getFromAssets(`svg/${theme}/FAVORITE.svg`)}
                        alt='Favorites'
                    />
                </Button>
            </div>
        </div>
    )
}

export default Nav
