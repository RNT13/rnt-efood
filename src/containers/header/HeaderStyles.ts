import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { media } from '../../style/media'
import { theme } from '../../style/theme'

export const HeaderWrapper = styled.div`
  grid-area: header;
`

export const HeaderNavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 100%;
  width: 100%;
  padding: 0px 0 64px 0;

  ${(media.md, media.sm)} {
    flex-direction: column-reverse;
    gap: 20px;
  }
`

export const HeaderRestaurantBanner = styled.div`
  position: relative;
  height: 280px;
  width: 100%;
  background-size: cover;

  ${(media.md, media.sm)} {
    padding-left: 50px;
    font-size: 2.5em;
  }
`

export const HeaderRestaurantBannerText = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 24px 0 32px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  color: ${theme.colors.textColor};
  z-index: 1;

  span:first-child {
    font-weight: 100;
    font-size: 32px;
  }

  span {
    font-weight: 900;
    font-size: 32px;
  }

  svg {
    color: ${theme.colors.yellow2};
    margin: 0px 0px 0px 16px;
  }
`

export const HeaderSpan = styled.p`
  color: ${theme.colors.primaryColor};
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.blue2};
  }

  ${(media.md, media.sm)} {
    font-size: 3rem;
  }
`

export const NavItem = styled(Link)`
  margin-right: 90px;
  text-decoration: none;
  color: ${theme.colors.primaryColor};
  font-weight: bold;
  font-size: 18px;

  &:hover {
    color: ${theme.colors.blue2};
  }

  ${(media.md, media.sm)} {
    font-size: 3rem;
    margin-right: 0;
  }
`

export const HeaderLogo = styled.img`
  width: 124px;
  height: 58px;

  ${(media.md, media.sm)} {
    width: 200px;
  }
`

export const HeaderText = styled.p`
  font-size: 36px;
  color: ${theme.colors.primaryColor};
  text-align: center;
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 400px;

  background-image: url('/images/Vector.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const HeaderMainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  padding: 40px 0;
`

export const HeaderRestaurantContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  height: 100%;
  padding: 40px 0 0 0;

  ${media.sm} {
    width: 900px;
    height: 550px;
    align-items: stretch center;

    ${NavItem} {
      order: 2;
    }

    ${HeaderText} {
      order: 3;
    }

    ${HeaderLogo} {
      order: 3;
    }

    ${HeaderRestaurantBanner} {
      order: 4;
    }
  }
`
