// Types
import { ContainerProps } from '../types/Types.ts'
// Styles
import '../styles/Container.css'

const Container = ({ type, children }: ContainerProps) => {
    return <div className={type + '-container'}>{children}</div>
}

export default Container
