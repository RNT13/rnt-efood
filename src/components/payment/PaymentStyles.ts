import { styled } from 'styled-components'
import { media } from '../../style/media'
import { theme } from '../../style/theme'
import { ButtonContainer } from '../button/ButtonStyles'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  color: ${theme.colors.secondaryColor};

  #first {
    margin-top: 50px;
    margin-bottom: 10px;
  }

  ${media.sm} {
    width: 100%;
    height: 60%;

    h2 {
      font-size: 3rem;
    }

    label {
      font-size: 3rem;
    }

    input {
      font-size: 3rem;
    }

    button {
      font-size: 3rem;
    }
  }
`

export const PaymentTitle = styled.h2`
  text-align: left;
  font-size: 24px;
  font-weight: bold;
`

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const PaymentLabel = styled.label`
  font-size: 14px;
  color: ${theme.colors.textColor};
`

export const PaymentInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${theme.colors.secondaryColor};
  background-color: ${theme.colors.tertiaryColor};
  color: ${theme.colors.black};
  font-size: 14px;
`

export const PaymentRow = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const PaymentInputHalf = styled(PaymentInput)`
  width: 100%;
`

export const PaymentButton = styled(ButtonContainer)`
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.primaryColor};

  &:hover {
    background-color: ${theme.colors.primaryColor};
  }
`
