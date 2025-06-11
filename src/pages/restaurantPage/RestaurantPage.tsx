import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Popup from '../../components/popup/Popup'
import { PopupButton } from '../../components/popup/PopupStyles'
import { useGetRestaurantByIdQuery } from '../../redux/api/restaurantsApi'
import { addToCart } from '../../redux/slices/cartSlice'
import { FoodType } from '../../types/foodType'
import { RestaurantCardButton, RestaurantPageCard, RestaurantPageContainer, RestaurantPageContent } from './RestaurantPageStyles'

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  const [showPopup, setShowPopup] = useState(false)
  const [popupData, setPopupData] = useState<FoodType | null>(null)

  const { data: restaurant, isLoading: loading } = useGetRestaurantByIdQuery(id as string, { skip: !id })

  if (loading) return <p>Carregando restaurante...</p>
  if (!restaurant) return <p>Restaurante não encontrado</p>

  const handleOpenPopup = (food: FoodType) => {
    setPopupData(food)
    setShowPopup(true)
  }

  const handleAddToCart = () => {
    if (popupData) {
      dispatch(
        addToCart({
          foodId: popupData.id,
          title: popupData.nome,
          price: popupData.preco,
          image: popupData.foto
        })
      )
      setShowPopup(false)
    }
  }

  const handleClosePopup = () => setShowPopup(false)

  return (
    <RestaurantPageContainer className="container">
      <RestaurantPageContent>
        {restaurant.cardapio.map((food: FoodType) => (
          <RestaurantPageCard
            key={food.id}
            image={food.foto}
            title={food.nome}
            description={food.descricao.length > 135 ? food.descricao.slice(0, 135) + '...' : food.descricao}
            foodId={food.id}
          >
            <RestaurantCardButton onClick={() => handleOpenPopup(food)}>Ver Prato</RestaurantCardButton>
          </RestaurantPageCard>
        ))}
      </RestaurantPageContent>

      {showPopup && popupData && (
        <Popup message={popupData.porcao} onClose={handleClosePopup} image={popupData.foto} desdcription={popupData.descricao} title={popupData.nome}>
          <PopupButton onClick={handleAddToCart}>Adicionar ao carrinho - R$ {popupData.preco}</PopupButton>
        </Popup>
      )}
    </RestaurantPageContainer>
  )
}

export default RestaurantPage
