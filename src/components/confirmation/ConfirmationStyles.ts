import { styled } from 'styled-components'
import { media } from '../../style/media'
import { theme } from '../../style/theme'
import { LinkButtonContainer } from '../button/ButtonStyles'

export const ConfirmationContainer = styled.div`
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
    height: 100%;

    h2 {
      font-size: 3rem;
    }

    li {
      font-size: 3rem;
    }

    label {
      font-size: 3rem;
    }

    input {
      font-size: 3rem;
    }

    #button {
      font-size: 3rem;
    }
  }
`
export const ConfirmationButton = styled(LinkButtonContainer)`
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.primaryColor};

  &:hover {
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.secondaryColor};
  }
`
