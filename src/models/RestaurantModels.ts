class RestaurantModel {
  restaurantId: string
  title: string
  description: string
  image: string
  stars: number
  highlight: boolean
  country: string

  constructor(id: string, title: string, description: string, image: string, stars: number, highlight: boolean, country: string) {
    this.restaurantId = id
    this.title = title
    this.description = description
    this.image = image
    this.stars = stars
    this.highlight = highlight
    this.country = country
  }
}

export default RestaurantModel
