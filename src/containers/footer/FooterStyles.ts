import { styled } from 'styled-components'
import { media } from '../../style/media'
import { theme } from '../../style/theme'

export const FooterWrapper = styled.div`
  grid-area: footer;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  background-image: url('/images/Vector.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;

  h4 {
    color: ${theme.colors.primaryColor};
  }

  ${(media.md, media.sm)} {
    width: 900px;
    height: 650px;

    img {
      width: 200px;
    }

    p {
      font-size: 2rem;
    }

    h4 {
      margin-top: 20px;
      font-size: 2.5rem;
    }
  }
`

export const FooterLogo = styled.img`
  width: 100px;
  height: auto;
`

export const FooterText = styled.p`
  font-size: 12px;
  color: ${theme.colors.primaryColor};
  text-align: center;
`

export const FooterCopy = styled.h4``

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`

export const SocialLinksItens = styled.a`
  color: ${theme.colors.primaryColor};
  transition: color 0.3s;
  cursor: pointer;

  svg {
    font-size: 24px;
  }

  &:hover {
    color: ${theme.colors.blue2};
  }

  ${(media.md, media.sm)} {
    svg {
      font-size: 100px;
    }
  }
`
