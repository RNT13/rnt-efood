import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AsideBar from '../../components/asideBar/AsideBar'
import { useGetRestaurantByIdQuery } from '../../redux/api/restaurantsApi'
import { RootState } from '../../redux/store'
import { OverLay } from '../../style/globalStyles'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMainContent,
  HeaderNavMenu,
  HeaderRestaurantBanner,
  HeaderRestaurantBannerText,
  HeaderRestaurantContent,
  HeaderSpan,
  HeaderText,
  NavItem
} from './HeaderStyles'

const Header = () => {
  const { id } = useParams<{ id: string }>()
  const [showAsideBar, setShowAsideBar] = useState(false)

  const { data: restaurant, isLoading: loading } = useGetRestaurantByIdQuery(id as string, { skip: !id })

  const totalItems = useSelector((state: RootState) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))

  const handleOpenAsideBar = () => setShowAsideBar(true)
  const handleCloseAsideBar = () => setShowAsideBar(false)

  if (loading) return <p>Carregando restaurante...</p>

  return (
    <HeaderContainer>
      {id ? (
        <HeaderRestaurantContent>
          <HeaderNavMenu className="container">
            <NavItem to="/">Restaurantes</NavItem>
            <HeaderLogo src="/images/logo.png" alt="Logo" />
            <HeaderSpan onClick={handleOpenAsideBar}>{totalItems} produto(s) no carrinho</HeaderSpan>
          </HeaderNavMenu>
          <HeaderRestaurantBanner style={{ backgroundImage: `url(${restaurant?.capa})` }}>
            <OverLay />
            <HeaderRestaurantBannerText className="container">
              <span>{restaurant?.tipo || 'Carregando...'}</span>
              <span>
                {restaurant?.titulo || 'Carregando...'}
                <FaStar />
                {restaurant?.avaliacao || 'Carregando...'}
              </span>
            </HeaderRestaurantBannerText>
          </HeaderRestaurantBanner>
          {showAsideBar && <AsideBar onClose={handleCloseAsideBar} />}
        </HeaderRestaurantContent>
      ) : (
        <HeaderMainContent>
          <HeaderLogo src="/images/logo.png" alt="Logo" />
          <HeaderText>
            Viva experiências gastronômicas <br /> no conforto da sua casa!
          </HeaderText>
        </HeaderMainContent>
      )}
    </HeaderContainer>
  )
}

export default Header
