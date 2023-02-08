import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout.js'
import { History } from './pages/History.js'
import { Home } from './pages/Home.js'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
