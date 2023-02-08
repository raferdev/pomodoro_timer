import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header.js'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
