import { createContext, ReactNode, useState } from 'react'

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
  const [userAddress, setUserAddress] = useState({} as UserAddress)
  const [paymentMethod, sePaymentMethod] = useState<
    'credit-card' | 'debit-card' | 'money'
  >('credit-card')

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
