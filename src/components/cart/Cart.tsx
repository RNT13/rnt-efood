import { FaTrashCan } from 'react-icons/fa6'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { decrementItemQuantity, incrementItemQuantity, removeFromCart } from '../../redux/slices/cartSlice'
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
  CartItemPlusButton,
  CartItemPrice,
  CartItemQauntity
} from './CartStyles'

interface CartProps {
  onClose?: () => void
  onContinue: (cartTotal: number) => void
}

const Cart: React.FC<CartProps> = ({ onContinue }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  const totalPrice = cartItems.reduce((acc, item) => {
    const priceNumber = typeof item.price === 'string' ? Number(item.price.replace('R$', '').replace(',', '.').trim()) : Number(item.price)
    return acc + priceNumber * item.quantity
  }, 0)

  const handleRemoveItem = (foodId: string) => {
    dispatch(removeFromCart(foodId))
  }

  const handleDecrementItem = (foodId: string) => {
    dispatch(decrementItemQuantity(foodId))
  }

  const handleIncrementItem = (foodId: string) => {
    dispatch(incrementItemQuantity(foodId))
  }

  return (
    <CartContainer>
      <CartContent>
        {cartItems.map(item => (
          <CartItem key={item.foodId}>
            <CartItemImage src={item.image} alt={item.title} />
            <CartItemInfo>
              <p>{item.title}</p>
              <CartItemPrice>{item.price}</CartItemPrice>
            </CartItemInfo>
            <div>
              <CartItemMinusButton onClick={() => handleDecrementItem(item.foodId)}>
                <IoMdArrowDropleft />
              </CartItemMinusButton>
              <CartItemQauntity>x{item.quantity}</CartItemQauntity>
              <CartItemPlusButton onClick={() => handleIncrementItem(item.foodId)}>
                <IoMdArrowDropright />
              </CartItemPlusButton>
              <CartItemButton onClick={() => handleRemoveItem(item.foodId)}>
                <FaTrashCan />
              </CartItemButton>
            </div>
          </CartItem>
        ))}
      </CartContent>
      <CartDesdcription>
        <p>Valor Total:</p>
        <p>R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
      </CartDesdcription>
      <CartButton onClick={() => onContinue(totalPrice)}>Continuar com a entrega</CartButton>
    </CartContainer>
  )
}

export default Cart
