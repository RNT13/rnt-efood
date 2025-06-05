/* eslint-disable prettier/prettier */
import IMask from 'imask';
import { useEffect, useRef, useState } from 'react';
import {
  DeliveryButton,
  DeliveryContainer,
  DeliveryFooter,
  DeliveryForm,
  DeliveryInput,
  DeliveryInputHalf,
  DeliveryLabel,
  DeliveryRow,
  DeliveryTitle
} from './DeliveryStyles';

interface DeliveryProps {
  onContinue: (info: { name: string; address: string; city: string; zip: string; number: string; complement: string }) => void
  onBack?: () => void
}

const Delivery: React.FC<DeliveryProps> = ({ onContinue, onBack }) => {
  const nameRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const zipRef = useRef<HTMLInputElement>(null)
  const numeroRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (nameRef.current) {
      const mask = IMask(nameRef.current, {
        mask: /^[A-Za-z\s]*$/,
      })
      mask.updateValue();
    }
    if (addressRef.current) {
      const mask = IMask(addressRef.current, {
        mask: /^[A-Za-z\s]*$/,
      })
      mask.updateValue();
    }
    if (cityRef.current) {
      const mask = IMask(cityRef.current, {
        mask: /^[A-Za-z\s]*$/,
      })
      mask.updateValue();
    }
    if (zipRef.current) {
      const mask = IMask(zipRef.current, {
        mask: '00000-000',
      })
      mask.updateValue();
    }
    if (numeroRef.current) {
      const mask = IMask(numeroRef.current, {
        mask: '00000',
      })
      mask.updateValue();
    }
  }, [])


  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    number: '',
    complement: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    onContinue(formData)
  }

  return (
    <DeliveryContainer>
      <DeliveryTitle>Entrega</DeliveryTitle>
      <DeliveryForm>
        <DeliveryLabel htmlFor="name">Quem irá receber?</DeliveryLabel>
        <DeliveryInput ref={nameRef} id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Nome Completo" autoComplete="name" />
        <DeliveryLabel htmlFor="address">Endereço</DeliveryLabel>
        <DeliveryInput ref={addressRef} id="address" name="address" value={formData.address} onChange={handleChange} placeholder="Rua Exemplo" autoComplete="address-line1" />
        <DeliveryLabel htmlFor="city">Cidade</DeliveryLabel>
        <DeliveryInput ref={cityRef} id="city" name="city" value={formData.city} onChange={handleChange} placeholder="Cidade" autoComplete="address-level2" />
        <DeliveryRow>
          <div>
            <DeliveryLabel htmlFor="zip">CEP</DeliveryLabel>
            <DeliveryInputHalf ref={zipRef} id="zip" name="zip" value={formData.zip} onChange={handleChange} placeholder="00000-000" autoComplete="postal-code" />
          </div>
          <div>
            <DeliveryLabel htmlFor="number">Número</DeliveryLabel>
            <DeliveryInputHalf ref={numeroRef} id="number" name="number" value={formData.number} onChange={handleChange} placeholder="123" autoComplete="address-line2" />
          </div>
        </DeliveryRow>
        <DeliveryLabel htmlFor="complement">Complemento (opcional)</DeliveryLabel>
        <DeliveryInput name="complement" value={formData.complement} onChange={handleChange} placeholder="Apartamento, bloco, etc." autoComplete="address-line3" />
        <DeliveryFooter>
          <DeliveryButton type="button" onClick={handleSubmit}>
            Continuar com o pagamento
          </DeliveryButton>
          <DeliveryButton type="button" onClick={onBack}>
            Voltar para o carrinho
          </DeliveryButton>
        </DeliveryFooter>
      </DeliveryForm>
    </DeliveryContainer>
  )
}

export default Delivery

