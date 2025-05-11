class FoodModel {
  foodId: string
  image: string
  title: string
  description: string
  price: string
  restaurantId?: string | undefined
  country?: string | undefined

  constructor(id: string, image: string, title: string, description: string, price: string) {
    this.foodId = id
    this.image = image
    this.title = title
    this.description = description
    this.price = price
    this.restaurantId = undefined
    this.country = undefined
  }
}

export default FoodModel
