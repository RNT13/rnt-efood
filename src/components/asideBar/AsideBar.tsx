import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Cart from '../cart/Cart'
import Confirmation from '../confirmation/Confirmation'
import Delivery from '../delivery/Delivery'
import Payment from '../payment/Payment'
import Popup from '../popup/Popup'
import { AsideBarButton, AsideBarCloseButton, AsideBarContainer, AsideBarOverlay } from './AsideBarStyles'

interface AsideBarProps {
  onClose: () => void
}

const AsideBar: React.FC<AsideBarProps> = ({ onClose }) => {
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'confirmation'>('cart')
  const [showPopup, setShowPopup] = useState(false)
  const [orderId, setOrderId] = useState<string | null>(null)
  const [total, setTotal] = useState(0)
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    number: '',
    complement: ''
  })

  const cartItems = useSelector((state: RootState) => state.cart.items)

  const handleShowDeliveryForm = (cartTotal: number) => {
    setTotal(cartTotal)
    setStep('delivery')
  }

  const handleShowPaymentForm = (info: typeof deliveryInfo) => {
    setDeliveryInfo(info)
    setStep('payment')
  }

  const handleFinalizePayment = () => {
    setShowPopup(true)
  }

  const handleConfirmOrder = () => {
    const orderId = Math.floor(Math.random() * 1000000).toString()
    setOrderId(orderId)
    setShowPopup(false)
    setStep('confirmation')
  }

  return (
    <>
      <AsideBarOverlay onClick={onClose} />
      <AsideBarContainer>
        <AsideBarCloseButton onClick={onClose}>x</AsideBarCloseButton>
        {step === 'cart' && <Cart onContinue={handleShowDeliveryForm} />}
        {step === 'delivery' && <Delivery onContinue={info => handleShowPaymentForm(info)} onBack={() => setStep('cart')} />}
        {step === 'payment' && <Payment total={total} onBack={() => setStep('delivery')} onFinalize={handleFinalizePayment} />}
        {step === 'confirmation' && (
          <Confirmation orderId={orderId} total={total} deliveryInfo={deliveryInfo} cartItems={cartItems} onClose={onClose} />
        )}
      </AsideBarContainer>
      {showPopup && (
        <Popup title="Confirmação do Pedido" message="Confira as informações do pedido antes de finalizar." onClose={() => setShowPopup(false)}>
          <p>Resumo do Pedido:</p>
          <ul>
            {cartItems.map(item => (
              <li key={item.foodId}>
                {item.title} - {item.quantity}x - {item.price}
              </li>
            ))}
          </ul>
          <p>
            <strong>Endereço de Entrega:</strong> {deliveryInfo.name}, {deliveryInfo.address}, {deliveryInfo.number}, {deliveryInfo.city} -{' '}
            {deliveryInfo.zip}
            {deliveryInfo.complement && `, ${deliveryInfo.complement}`}
          </p>
          <p>
            <strong>Total:</strong> R$ {total.toFixed(2).replace('.', ',')}
          </p>
          <AsideBarButton onClick={handleConfirmOrder}>Confirmar e finalizar pedido</AsideBarButton>
        </Popup>
      )}
    </>
  )
}

export default AsideBar
