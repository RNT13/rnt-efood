import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Content from './containers/content/Content'
import { ContentWrapper } from './containers/content/ContentStyles'
import Footer from './containers/footer/Footer'
import { FooterWrapper } from './containers/footer/FooterStyles'
import Header from './containers/header/Header'
import { HeaderWrapper } from './containers/header/HeaderStyles'
import ErrorPage from './pages/errorPage/ErrorPage'
import RestaurantPage from './pages/restaurantPage/RestaurantPage'
import { AppLayout, GlobalStyle } from './style/globalStyles'

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>

        <ContentWrapper>
          <Outlet />
        </ContentWrapper>

        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </AppLayout>
    </>
  )
}

const AppContent = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Content /> },
        { path: '/RestaurantPage/:id/:title', element: <RestaurantPage /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default AppContent
