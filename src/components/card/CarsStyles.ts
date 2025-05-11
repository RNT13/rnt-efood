import { styled } from 'styled-components'
import { theme } from '../../style/theme'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  border: 1px solid ${theme.colors.primaryColor};
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.primaryColor};
  box-shadow: 3px 3px 15px ${theme.colors.black};
`

export const CardHeader = styled.div`
  position: absolute;
  display: flex;
  gap: 10px;
  top: 16px;
  right: 16px;
`

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 10px;
  height: 100%;
`

export const CardDescription = styled.div`
  font-size: 14px;
  line-height: 20px;
`

export const CardTitle = styled.h2`
  margin-bottom: 10px;
  display: inline-block;
  width: 80%;
  text-align: left;
`

export const CardStars = styled.h3`
  margin-bottom: 10px;
  display: inline-block;
  width: 20%;
  text-align: right;

  svg {
    color: ${theme.colors.yellow3};
  }
`

export const CardPrice = styled.h3`
  margin-bottom: 10px;
  display: inline-block;
  width: 20%;
  text-align: right;
`

export const CardFooter = styled.div`
  padding: 10px;
  width: 100%;
`
