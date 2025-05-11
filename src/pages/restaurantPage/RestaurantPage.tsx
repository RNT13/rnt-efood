import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Popup from '../../components/popup/Popup'
import { PopupButton } from '../../components/popup/PopupStyles'
import { FoodsData } from '../../data/FoodsData'
import { RestaurantsData } from '../../data/RestaurantsData'
import { addToCart } from '../../redux/slices/cartSlice'
import { RestaurantCardButton, RestaurantPageCard, RestaurantPageContainer, RestaurantPageContent } from './RestaurantPageStyles'

const RestaurantPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [showPopup, setShowPopup] = useState(false)
  const [popupData, setPopupData] = useState({ foodId: '', image: '', description: '', price: '', title: '' })

  const restaurant = RestaurantsData.find(r => r.restaurantId === id)

  if (!restaurant) return <p>Restaurante não encontrado</p>
  const filteredFoods = FoodsData.filter(food => food.country === restaurant.country)

  const handleOpenPopup = (foodId: string) => {
    const foodToShow = filteredFoods.find(food => food.foodId === foodId)
    if (foodToShow) {
      setPopupData({
        foodId: foodToShow.foodId,
        image: foodToShow.image,
        description: foodToShow.description,
        price: foodToShow.price,
        title: foodToShow.title
      })
      setShowPopup(true)
    }
  }

  const handleAddToCart = () => {
    const foodToAdd = filteredFoods.find(food => food.foodId === popupData.foodId)
    if (foodToAdd) {
      dispatch(addToCart(foodToAdd))
      setShowPopup(false) // Fecha o popup após adicionar ao carrinho
    }
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <RestaurantPageContainer className="container">
      <RestaurantPageContent>
        {filteredFoods.map(food => (
          <RestaurantPageCard
            key={food.foodId}
            image={food.image}
            title={food.title}
            description={food.description}
            foodId={food.foodId}
            price={food.price}
          >
            <RestaurantCardButton onClick={() => handleOpenPopup(food.foodId)}>Ver Prato</RestaurantCardButton>
          </RestaurantPageCard>
        ))}
      </RestaurantPageContent>
      {showPopup && (
        <>
          <Popup
            message="Serve 2 pessoas"
            onClose={handleClosePopup}
            image={popupData.image}
            desdcription={popupData.description}
            title={popupData.title}
          >
            <PopupButton onClick={handleAddToCart}>Adicionar ao carrinho - {popupData.price}</PopupButton>
          </Popup>
        </>
      )}
    </RestaurantPageContainer>
  )
}

export default RestaurantPage
