export const getCountry = ($country: string | undefined): string => {
  switch ($country) {
    case 'pt-br':
      return 'Brasileira'
    case 'pt':
      return 'Portuguesa'
    case 'es':
      return 'Espanhola'
    case 'en':
      return 'Inglesa'
    case 'fr':
      return 'Francesa'
    case 'in':
      return 'Indiana'
    case 'it':
      return 'Italiana'
    case 'ch':
      return 'Chinesa'
    case 'ja':
      return 'Japonesa'
    case 'mx':
      return 'Mexicana'
    case 'de':
      return 'Alema'
    default:
      return 'Desconhecida'
  }
}
