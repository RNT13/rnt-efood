import { styled } from 'styled-components'
import { theme } from '../../style/theme'

export const GetHighlight = (highlight: string) => {
  if (highlight) {
    return 'Destaque da semana!'
  } else {
    return { display: 'none' }
  }
}
export const TagContainer = styled.div`
  height: 24px;
  padding: 5px 10px;
  background-color: ${theme.colors.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TagContent = styled.p`
  color: ${theme.colors.textColor};
`
