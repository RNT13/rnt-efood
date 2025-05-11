import { styled } from 'styled-components'
import { media } from '../../style/media'
import { theme } from '../../style/theme'
import { ButtonContainer } from '../button/ButtonStyles'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  color: ${theme.colors.secondaryColor};

  ${media.sm} {
    width: 100%;

    img {
      width: 200px;
      height: 200px;
    }

    li {
      height: auto;
    }
  }
`

export const CartContent = styled.ul`
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  height: 100px;
  background-color: ${theme.colors.tertiaryColor};
`

export const CartItemInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${theme.colors.primaryColor};
`

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const CartItemButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;

  svg {
    color: ${theme.colors.primaryColor};
    font-size: 16px;

    ${media.sm} {
      font-size: 3rem;
    }
  }
`

export const CartItemMinusButton = styled.button`
  position: absolute;
  right: 30px;
  bottom: 10px;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: ${theme.colors.primaryColor};

  ${media.sm} {
    font-size: 3rem;
    right: 80px;
    bottom: 5px;
  }
`

export const CartItemQauntity = styled.p`
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${theme.colors.primaryColor};
`

export const CartDesdcription = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
`

export const CartText = styled.p`
  width: 50%;
  text-align: left;
  font-weight: bold;
  color: ${theme.colors.secondaryColor};
`

export const CartItemTotal = styled.p`
  width: 50%;
  text-align: right;
  font-weight: bold;
  color: ${theme.colors.secondaryColor};
`

export const CartButton = styled(ButtonContainer)`
  margin-top: 20px;
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.primaryColor};

  ${media.sm} {
    font-size: 3rem;
    margin-bottom: 100px;
  }
`
