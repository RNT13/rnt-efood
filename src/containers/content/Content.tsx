import { useGetRestaurantsQuery } from '../../redux/api/restaurantsApi'
import { RestaurantType } from '../../types/restaurantType'
import { ContentCard, ContentCardButton, ContentContainer, ContentList } from './ContentStyles'

const Content = () => {
  const { data: restaurants = [], isLoading: loading, isError: error } = useGetRestaurantsQuery('')

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return (
    <ContentContainer className="container">
      <ContentList>
        {restaurants.map((restaurant: RestaurantType) => (
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
