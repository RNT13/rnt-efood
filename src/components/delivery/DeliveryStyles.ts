import { styled } from 'styled-components'
import { media } from '../../style/media'
import { theme } from '../../style/theme'
import { ButtonContainer } from '../button/ButtonStyles'

export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding-top: 40px;
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

export const DeliveryTitle = styled.h2`
  text-align: left;
  font-size: 24px;
  font-weight: bold;
`

export const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const DeliveryLabel = styled.label`
  font-size: 14px;
  color: ${theme.colors.textColor};
`

export const DeliveryInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid ${theme.colors.secondaryColor};
  background-color: ${theme.colors.tertiaryColor};
  color: ${theme.colors.black};
  font-size: 14px;
`

export const DeliveryButton = styled(ButtonContainer)`
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.primaryColor};
`

export const DeliveryRow = styled.div`
  display: flex;
  gap: 20px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const DeliveryInputHalf = styled(DeliveryInput)`
  width: 50%;
  width: 100%;
`
