import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loader from './components/ui/Loader'

const HomePage = lazy(() => import('./components/pages/HomePage'))
const ShopPage = lazy(() => import('./components/pages/ShopPage'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  )
}

export default App
