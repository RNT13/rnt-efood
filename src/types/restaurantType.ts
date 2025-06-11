import { FoodType } from './foodType'

export interface RestaurantType {
  id: number
  titulo: string
  descricao: string
  capa: string
  tipo: string
  destacado: boolean
  avaliacao: number
  cardapio: FoodType[]
}
