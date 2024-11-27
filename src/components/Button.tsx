import { Link } from 'react-router-dom'
// Types
import { ButtonProps } from '../types/Types.ts'
// Styles
import '../styles/Button.css'

const Button = ({ type, children, to, onClick, noBg }: ButtonProps) => {
    return (
        <>
            {type === 'link' && (
                <Link
                    to={`${to}`}
                    className={'button' + (noBg ? ' no-bg' : '')}
                >
                    {children}
                </Link>
            )}
            {type === 'button' && (
                <button
                    onClick={onClick}
                    className={'button' + (noBg ? ' -no-bg' : '')}
                >
                    {children}
                </button>
            )}
        </>
    )
}

export default Button
