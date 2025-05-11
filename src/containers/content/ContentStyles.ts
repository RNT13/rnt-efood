import { styled } from 'styled-components'
import { LinkButtonContainer } from '../../components/button/ButtonStyles'
import Card from '../../components/card/Card'
import { CardDescription, CardImage, CardStars, CardTitle } from '../../components/card/CarsStyles'
import { media } from '../../style/media'
import { theme } from '../../style/theme'

export const ContentWrapper = styled.div`
  grid-area: content;
`

export const ContentContainer = styled.div`
  ${(media.md, media.sm)} {
  }
`

export const ContentList = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;

  ${media.lg} {
    width: 90%;
    grid-template-columns: 2fr;
  }

  ${media.sm} {
    width: 80%;
    grid-template-columns: 1fr;
  }
`

export const ContentCard = styled(Card)`
  ${media.sm} {
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
    width: 100%;

    ${CardImage} {
      width: 100%;
      height: 300px;
      padding: 0;
      margin-bottom: 12px;
      object-fit: cover;
    }

    ${CardTitle} {
      width: 80%;
      font-size: 3rem;
      margin-bottom: 8px;
    }

    ${CardStars} {
      width: 20%;
      font-size: 2.5rem;
      text-align: left;
      margin-bottom: 8px;
    }

    ${CardDescription} {
      width: 100%;
      height: auto;
      font-size: 2rem;
      margin-bottom: 16px;
      line-height: 1.4;
    }
  }
`

export const ContentCardButton = styled(LinkButtonContainer)`
  &:hover {
    background-color: ${theme.colors.secondaryColor};
    color: ${theme.colors.primaryColor};
    border: 2px solid ${theme.colors.primaryColor};
  }

  ${media.sm} {
    font-size: 2.2rem;
  }
`
