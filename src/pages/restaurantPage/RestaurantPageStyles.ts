import { styled } from 'styled-components'
import { ButtonContainer } from '../../components/button/ButtonStyles'
import Card from '../../components/card/Card'
import { CardDescription, CardImage, CardPrice, CardTitle } from '../../components/card/CarsStyles'
import { media } from '../../style/media'
import { theme } from '../../style/theme'

export const RestaurantPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    color: ${theme.colors.yellow3};
  }
`
export const RestaurantPageContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;

  ${media.lg} {
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.md} {
    width: 50%;
    grid-template-columns: repeat(1, 1fr);
  }

  ${media.sm} {
    width: 90%;
    height: auto;
    gap: 50px;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 3rem;
    }

    button {
      width: 100%;
      font-size: 3rem;
    }
  }
`

export const RestaurantPageCard = styled(Card)`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.textColor};
  width: 320px;
  height: 340px;

  ${ButtonContainer} {
    width: 100%;
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.primaryColor};
  }

  ${CardImage} {
    width: 100%;
    height: 160px;
    padding: 8px;
  }

  ${CardTitle} {
    width: 100%;
    font-size: 16px;
    font-weight: 900;
    color: ${theme.colors.secondaryColor};
  }

  ${CardDescription} {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    color: ${theme.colors.secondaryColor};
  }

  ${media.sm} {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    min-width: 0;
    width: 100%;

    ${CardImage} {
      width: 100%;
      height: 300px;
      padding: 0;
      margin-bottom: 12px;
      border-radius: 8px;
      object-fit: cover;
    }

    ${CardTitle} {
      width: 50%;
      font-size: 3rem;
      margin-bottom: 8px;
    }

    ${CardPrice} {
      width: 50%;
      font-size: 2.5rem;
      text-align: right;
      margin-bottom: 8px;
    }

    ${ButtonContainer} {
      width: 100%;
      font-size: 2.5rem;
      margin-top: 8px;
    }
  }
`
export const RestaurantCardButton = styled(ButtonContainer)`
  &:hover {
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.secondaryColor};
    border: 2px solid ${theme.colors.secondaryColor};
  }
`
