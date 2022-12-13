import { createContext, ReactNode, useEffect, useState } from 'react'

export interface UserAddress {
  'zip-code': string
  road: string
  number: number
  complement?: string
  neighborhood: string
  city: string
  state: string
}

interface PaymentContextType {
  userAddress: UserAddress
  paymentMethod: 'credit-card' | 'debit-card' | 'money'
  changeUserAddress: (userAddress: UserAddress) => void
  changePaymentMethod: (
    paymentMethod: 'credit-card' | 'debit-card' | 'money',
  ) => void
}

export const PaymentContext = createContext({} as PaymentContextType)

interface PaymentContextProviderProps {
  children: ReactNode
}

export function PaymentContextProvider({
  children,
}: PaymentContextProviderProps) {
  const userAddressdLocalStorage = localStorage.getItem(
    '@coffee-delivery-desafio:user-address',
  )
  const [userAddress, setUserAddress] = useState(
    userAddressdLocalStorage
      ? JSON.parse(userAddressdLocalStorage)
      : ({} as UserAddress),
  )

  const paymentMethodLocalStorage = localStorage.getItem(
    '@coffee-delivery-desafio:payment-method',
  )

  const [paymentMethod, sePaymentMethod] = useState<
    'credit-card' | 'debit-card' | 'money'
  >(
    paymentMethodLocalStorage
      ? JSON.parse(paymentMethodLocalStorage)
      : 'credit-card',
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(userAddress)
    localStorage.setItem('@coffee-delivery-desafio:user-address', stateJSON)
  }, [userAddress])

  useEffect(() => {
    const stateJSON = JSON.stringify(paymentMethod)
    localStorage.setItem('@coffee-delivery-desafio:payment-method', stateJSON)
  }, [paymentMethod])

  function changeUserAddress(userAddress: UserAddress) {
    console.log(userAddress)
    setUserAddress(userAddress)
  }

  function changePaymentMethod(
    newPaymentMethod: 'credit-card' | 'debit-card' | 'money',
  ) {
    sePaymentMethod(newPaymentMethod)
    console.log(paymentMethod)
  }

  return (
    <PaymentContext.Provider
      value={{
        userAddress,
        paymentMethod,
        changeUserAddress,
        changePaymentMethod,
      }}
    >
      {children}
    </PaymentContext.Provider>
  )
}
