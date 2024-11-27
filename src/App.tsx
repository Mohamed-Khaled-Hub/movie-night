import {
    createBrowserRouter,
    createRoutesFromChildren,
    Navigate,
    Route,
    RouterProvider,
} from 'react-router-dom'
// Context
import { QueryProvider } from './providers/QueryProvider.tsx'
// Pages & Layouts
import Root from './layouts/Root.tsx'
import Home from './pages/Home.tsx'
import Favorites from './pages/Favorites.tsx'
// Styles
import './styles/App.css'

const router = createBrowserRouter(
    createRoutesFromChildren(
        <Route path='/' element={<Root />}>
            <Route index element={<Home />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Route>
    )
)

const App = () => {
    return (
        <QueryProvider>
            <RouterProvider router={router} />
        </QueryProvider>
    )
}

export default App
