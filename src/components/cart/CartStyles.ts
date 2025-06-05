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

    p {
      font-size: 3rem;
    }
  }
`

export const CartContent = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    width: 0;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  height: 100px;
  background-color: ${theme.colors.secondaryColor};
`

export const CartItemInfo = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin-left: 8px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.primaryColor};
`

export const CartItemPrice = styled.p`
  font-size: 14px;
`

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const CartItemButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
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

export const CartDesdcription = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
    font-weight: 700;
    color: ${theme.colors.secondaryColor};
  }
`

export const CartButton = styled(ButtonContainer)`
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.primaryColor};

  ${media.sm} {
    font-size: 3rem;
    margin-bottom: 100px;
  }
`

export const CartItemQauntity = styled.p`
  position: absolute;
  right: 55px;
  bottom: 7px;
  background: none;
  border: none;
  font-size: 20px;
  color: ${theme.colors.primaryColor};
`

export const CartItemMinusButton = styled.button`
  position: absolute;
  right: 80px;
  bottom: -3px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: ${theme.colors.primaryColor};

  ${media.sm} {
    font-size: 3rem;
    right: 80px;
    bottom: 5px;
  }
`

export const CartItemPlusButton = styled.button`
  position: absolute;
  right: 32px;
  bottom: -3px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: ${theme.colors.primaryColor};

  ${media.sm} {
    font-size: 3rem;
    right: 80px;
    bottom: 5px;
  }
`
