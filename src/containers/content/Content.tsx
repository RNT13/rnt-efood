import { useEffect, useState } from 'react'
import { getRestaurants } from '../../utils/api'
import { ContentCard, ContentCardButton, ContentContainer, ContentList } from './ContentStyles'

export type RestaurantType = {
  id: number
  titulo: string
  descricao: string
  capa: string
  tipo: string
  destacado: boolean
  avaliacao: number
}

const Content = () => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRestaurants()
        console.log('Restaurantes:', data)
        setRestaurants(data)
      } catch (err) {
        console.error(err)
        setError('Erro ao carregar restaurantes')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <ContentContainer className="container">
      <ContentList>
        {restaurants.map(restaurant => (
          <ContentCard
            key={restaurant.id}
            restaurantId={restaurant.id.toString()}
            image={restaurant.capa}
            title={restaurant.titulo}
            description={restaurant.descricao}
            stars={restaurant.avaliacao}
            country={restaurant.tipo}
            highlight={restaurant.destacado}
          >
            <ContentCardButton to={`/RestaurantPage/${restaurant.id}/${restaurant.titulo}`}>Saiba mais</ContentCardButton>
          </ContentCard>
        ))}
      </ContentList>
    </ContentContainer>
  )
}

export default Content
