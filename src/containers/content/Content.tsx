import { RestaurantsData } from '../../data/RestaurantsData'
import RestaurantModel from '../../models/RestaurantModels'
import { ContentCard, ContentCardButton, ContentContainer, ContentList } from './ContentStyles'

export type ContentProps = {
  restaurants?: RestaurantModel[]
}

const Content = ({ restaurants = RestaurantsData }: ContentProps) => {
  return (
    <ContentContainer className="container">
      <ContentList>
        {restaurants.map(restaurant => (
          <ContentCard
            key={restaurant.restaurantId}
            restaurantId={restaurant.restaurantId}
            image={restaurant.image}
            title={restaurant.title}
            description={restaurant.description}
            stars={restaurant.stars}
            country={restaurant.country}
          >
            <ContentCardButton to={`/RestaurantPage/${restaurant.restaurantId}/${restaurant.title}`}>Ver Restaurante</ContentCardButton>
          </ContentCard>
        ))}
      </ContentList>
    </ContentContainer>
  )
}

export default Content
