import { keyframes, styled } from 'styled-components'
import { media } from '../../style/media'
import { theme } from '../../style/theme'
import { ButtonContainer } from '../button/ButtonStyles'

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

export const AsideBarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

export const AsideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: fixed;
  padding: 32px 8px 0 8px;
  padding-bottom: 10%;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  z-index: 1000;
  animation: ${slideIn} 0.3s ease-out;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  background-color: ${theme.colors.primaryColor};

  ${media.sm} {
    width: 100%;
    display: block;
  }
`

export const AsideBarButton = styled(ButtonContainer)`
  &:hover {
    color: ${theme.colors.secondaryColor};
    background-color: ${theme.colors.primaryColor};
  }
`

export const AsideBarCloseButton = styled.button`
  display: none;

  ${media.sm} {
    display: block;
    position: relative;
    top: 0px;
    left: 820px;
    background: none;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    color: ${theme.colors.secondaryColor};
  }
`
