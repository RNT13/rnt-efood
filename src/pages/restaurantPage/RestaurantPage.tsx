import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Popup from '../../components/popup/Popup'
import { PopupButton } from '../../components/popup/PopupStyles'
import { addToCart } from '../../redux/slices/cartSlice'
import { getRestaurantById } from '../../utils/api'
import { RestaurantCardButton, RestaurantPageCard, RestaurantPageContainer, RestaurantPageContent } from './RestaurantPageStyles'

type RestaurantType = {
  id: number
  titulo: string
  descricao: string
  capa: string
  tipo: string
  avaliacao: number
  cardapio: FoodType[]
}

type FoodType = {
  id: string
  nome: string
  descricao: string
  preco: string
  foto: string
  porcao: string
}

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [loading, setLoading] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const [popupData, setPopupData] = useState<FoodType | null>(null)

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        if (id) {
          const data = await getRestaurantById(id)
          setRestaurant(data)
        }
      } catch (e) {
        console.error('Erro ao buscar restaurante', e)
        setRestaurant(null)
      } finally {
        setLoading(false)
      }
    }
    fetchRestaurant()
  }, [id])

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
        {restaurant.cardapio.map(food => (
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
