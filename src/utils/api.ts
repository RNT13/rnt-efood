const API_URL = 'https://fake-api-tau.vercel.app/api/efood'

//busca restaurantes sem cardápio
export const getRestaurants = async () => {
  try {
    const response = await fetch(`${API_URL}/restaurantes`)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro ao buscar restaurantes:', error)
    throw error
  } finally {
    console.log('getRestaurants chamado')
  }
}

// Busca um restaurante específico pelo ID, incluindo cardápio
export const getRestaurantById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/restaurantes/${id}`)
    if (!response.ok) {
      throw new Error('Erro ao buscar restaurante')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(`Erro na API getRestaurantById (id: ${id}):`, error)
    throw error
  } finally {
    console.log(`getRestaurantById chamado com id: ${id}`)
  }
}
