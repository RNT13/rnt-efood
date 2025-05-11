import { ButtonContainer, LinkButtonContainer } from './ButtonStyles'
type ButtonProps = {
  onClick?: () => void
  children?: React.ReactNode
  to?: string
}

const Button = ({ onClick, children, to }: ButtonProps) => {
  if (to) {
    return (
      <LinkButtonContainer to={to} onClick={onClick}>
        {children}
      </LinkButtonContainer>
    )
  }
  {
    return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
  }
}

export default Button
