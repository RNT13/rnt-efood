import { FaStar } from 'react-icons/fa'
import { getCountry } from '../../utils/countryUtils'
import Tag from '../tags/Tag'
import { CardContainer, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardPrice, CardStars, CardTitle } from './CarsStyles'

type CardProps = {
  foodId?: string
  restaurantId?: string
  image: string
  title: string
  description: string
  price?: string
  stars?: number
  country?: string
  highlight?: boolean
  children?: React.ReactNode
}

const Card = ({ foodId, restaurantId, image, title, description, stars, country, highlight, children, price, ...props }: CardProps) => {
  const id = restaurantId || foodId
  if (!id) {
    return <p>Id inválido</p>
  }

  return (
    <CardContainer {...props}>
      <CardHeader>
        {highlight && <Tag>Destaque da Semana</Tag>}
        {country && <Tag>{getCountry(country)}</Tag>}
      </CardHeader>
      <CardImage src={image} alt={title || 'Default Alt Text'} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {price !== undefined && <CardPrice>{price}</CardPrice>}
        {stars !== undefined && (
          <CardStars>
            {stars} <FaStar />
          </CardStars>
        )}
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>{children}</CardFooter>
    </CardContainer>
  )
}

export default Card
