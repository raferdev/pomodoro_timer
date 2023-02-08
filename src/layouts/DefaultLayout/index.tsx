import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/index.js'
import { LayoutContainer } from './styles.js'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
