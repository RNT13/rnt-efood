import IMask from 'imask'
import React, { useEffect, useRef } from 'react'
import { PaymentButton, PaymentContainer, PaymentFooter, PaymentForm, PaymentInput, PaymentLabel, PaymentRow, PaymentTitle } from './PaymentStyles'

interface PaymentProps {
  total: number
  onBack: () => void
  onFinalize: () => void
}

const Payment: React.FC<PaymentProps> = ({ total, onBack, onFinalize }) => {
  const apenasLetrasRef = useRef<HTMLInputElement>(null)
  const cardNumberRef = useRef<HTMLInputElement>(null)
  const cvvRef = useRef<HTMLInputElement>(null)
  const expiryMonthRef = useRef<HTMLInputElement>(null)
  const expiryYearRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (apenasLetrasRef.current) {
      const mask = IMask(apenasLetrasRef.current, {
        mask: /^[A-Za-z\s]*$/
      })
      mask.updateValue()
    }
    if (cardNumberRef.current) {
      const mask = IMask(cardNumberRef.current, {
        mask: '0000 0000 0000 0000'
      })
      mask.updateValue()
    }
    if (cvvRef.current) {
      const mask = IMask(cvvRef.current, {
        mask: '000'
      })
      mask.updateValue()
    }
    if (expiryMonthRef.current) {
      const mask = IMask(expiryMonthRef.current, {
        mask: '00'
      })
      mask.updateValue()
    }
    if (expiryYearRef.current) {
      const mask = IMask(expiryYearRef.current, {
        mask: '0000'
      })
      mask.updateValue()
    }
  }, [])

  return (
    <PaymentContainer>
      <PaymentTitle>Pagamento - Valor a pagar R$ {total.toFixed(2).replace('.', ',')}</PaymentTitle>
      <PaymentForm autoComplete="on">
        <PaymentLabel htmlFor="cardName">Nome no cartão</PaymentLabel>
        <PaymentInput ref={apenasLetrasRef} id="cardName" type="text" placeholder="Nome no cartão" />
        <PaymentRow>
          <div id="cddDiv">
            <PaymentLabel htmlFor="cardNumber">Número do cartão</PaymentLabel>
            <PaymentInput id="cardNumber" ref={cardNumberRef} type="text" placeholder="0000 0000 0000 0000" />
          </div>
          <div>
            <PaymentLabel htmlFor="cvv">CVV</PaymentLabel>
            <PaymentInput id="cvv" ref={cvvRef} type="text" placeholder="123" />
          </div>
        </PaymentRow>
        <PaymentRow>
          <div>
            <PaymentLabel htmlFor="expiryMonth">Mês de vencimento</PaymentLabel>
            <PaymentInput ref={expiryMonthRef} id="expiryMonth" type="text" placeholder="MM" />
          </div>
          <div>
            <PaymentLabel htmlFor="expiryYear">Ano de vencimento</PaymentLabel>
            <PaymentInput ref={expiryYearRef} id="expiryYear" type="text" placeholder="AAAA" />
          </div>
        </PaymentRow>
        <PaymentFooter>
          <PaymentButton type="button" onClick={onFinalize}>
            Confirmar pagamento
          </PaymentButton>
          <PaymentButton type="button" onClick={onBack}>
            Voltar para a edição de endereço
          </PaymentButton>
        </PaymentFooter>
      </PaymentForm>
    </PaymentContainer>
  )
}

export default Payment
