import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { media } from '../../style/media'
import { theme } from '../../style/theme'

export const HeaderWrapper = styled.div`
  grid-area: header;
`

export const HeaderContainer = styled.div`
  padding-top: 50px;
  width: 100%;
  height: 310px;

  background-image: url('/images/Vector.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${(media.md, media.sm)} {
    height: 450px;

    p {
      font-size: 3rem;
    }
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
`

export const HeaderNavMenu = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

export const HeaderImage = styled.img`
  object-fit: cover;
  filter: brightness(40%);
  height: 250px;
  width: 100%;
`

export const HeaderTitle = styled.div`
  position: relative;
  width: 1000px;
  top: 220px;
  left: 0px;
  font-size: 36px;
  color: ${theme.colors.textColor};
  text-align: left;
  z-index: 1;

  span {
    margin-left: 20px;
  }
  svg {
    color: ${theme.colors.yellow3};
  }

  ${(media.md, media.sm)} {
    padding-left: 50px;
    font-size: 2.5em;
  }
`

export const HeaderText = styled.p`
  font-size: 36px;
  color: ${theme.colors.primaryColor};
  text-align: center;
`

export const HeaderLogo = styled.img`
  width: 100px;
  height: auto;

  ${(media.md, media.sm)} {
    width: 200px;
  }
`

export const NavItem = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.primaryColor};
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: ${theme.colors.blue2};
  }

  ${(media.md, media.sm)} {
    font-size: 2.5rem;
  }
`

export const HeaderSpan = styled.span`
  color: ${theme.colors.primaryColor};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.blue2};
  }

  ${(media.md, media.sm)} {
    font-size: 2.5rem;
  }
`
