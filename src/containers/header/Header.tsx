import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AsideBar from '../../components/asideBar/AsideBar'
import { RestaurantsData } from '../../data/RestaurantsData'
import { RootState } from '../../redux/store'
import { HeaderContainer, HeaderImage, HeaderLogo, HeaderNavMenu, HeaderSpan, HeaderText, HeaderTitle, NavItem } from './HeaderStyles'

const Header = () => {
  const { id } = useParams()
  const [showAsideBar, setShowAsideBar] = useState(false)

  const restaurant = RestaurantsData.find(r => r.restaurantId === id)

  const totalItems = useSelector((state: RootState) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))

  const handleOpenAsideBar = () => {
    setShowAsideBar(true)
  }

  const handleCloseAsideBar = () => {
    setShowAsideBar(false)
  }

  return (
    <HeaderContainer>
      {id ? (
        <>
          <HeaderNavMenu className="container">
            <NavItem to={`/`}>Restaurantes</NavItem>
            <HeaderLogo src="/images/logo.png" alt="Logo" />
            <HeaderSpan onClick={handleOpenAsideBar}>
              {totalItems === 0 ? 'Nenhum item' : `${totalItems} ${totalItems > 1 ? 'itens' : 'item'}`} <br /> no carrinho
            </HeaderSpan>
          </HeaderNavMenu>
          <HeaderTitle className="title">
            {restaurant?.title}
            <span>{restaurant?.stars}</span>
            <FaStar />
          </HeaderTitle>
          <HeaderImage src={restaurant?.image} alt={restaurant?.title} />
        </>
      ) : (
        <>
          <HeaderLogo src="/images/logo.png" alt="Logo" />
          <HeaderText>Viva experiências gastronômicas no conforto da sua casa!</HeaderText>
        </>
      )}
      {showAsideBar && <AsideBar onClose={handleCloseAsideBar} />}
    </HeaderContainer>
  )
}

export default Header
