import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout';
import { lazy, Suspense } from 'react';

const FavoritesPage = lazy(() => import('./views/FavoritesPage'))
const IndexPage = lazy(() => import('./views/IndexPage'))

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={
                        <Suspense fallback='Cargando...'>
                            <IndexPage />
                        </Suspense>
                    } index />
                    <Route path='/favoritos' element={
                        <Suspense fallback='Cargando...'>
                            <FavoritesPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;