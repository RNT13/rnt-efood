import { FaMinus, FaTrashCan } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { decrementItemQuantity, removeFromCart } from '../../redux/slices/cartSlice'
import { RootState } from '../../redux/store'
import {
  CartButton,
  CartContainer,
  CartContent,
  CartDesdcription,
  CartItem,
  CartItemButton,
  CartItemImage,
  CartItemInfo,
  CartItemMinusButton,
  CartItemQauntity,
  CartItemTotal,
  CartText
} from './CartStyles'

interface CartProps {
  onClose?: () => void
  onContinue: (cartTotal: number) => void
}

const Cart: React.FC<CartProps> = ({ onContinue }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('R$', '').replace(',', '.'))
    return total + price * item.quantity
  }, 0)

  const handleRemoveItem = (foodId: string) => {
    dispatch(removeFromCart(foodId))
  }

  const handleDecrementItem = (foodId: string) => {
    dispatch(decrementItemQuantity(foodId))
  }

  return (
    <CartContainer>
      <CartContent>
        {cartItems.map(item => (
          <CartItem key={item.foodId}>
            <CartItemImage src={item.image} alt={item.title} />
            <CartItemInfo>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </CartItemInfo>
            <div>
              <CartItemMinusButton onClick={() => handleDecrementItem(item.foodId)}>
                <FaMinus />
              </CartItemMinusButton>
              <CartItemQauntity>x{item.quantity}</CartItemQauntity>
              <CartItemButton onClick={() => handleRemoveItem(item.foodId)}>
                <FaTrashCan />
              </CartItemButton>
            </div>
          </CartItem>
        ))}
      </CartContent>
      <CartDesdcription>
        <CartText>Valor Total:</CartText>
        <CartItemTotal>R$ {totalPrice.toFixed(2).replace('.', ',')}</CartItemTotal>
      </CartDesdcription>
      <CartButton onClick={() => onContinue(totalPrice)}>Continuar com a entrega</CartButton>
    </CartContainer>
  )
}

export default Cart
