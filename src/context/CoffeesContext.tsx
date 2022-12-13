import { createContext, ReactNode, useEffect, useState } from 'react'
import produce from 'immer'
import { v4 as uuidv4 } from 'uuid'
import CoffeAmericano from '../assets/coffes/americano.png'
import CoffeArabe from '../assets/coffes/arabe.png'
import CoffeCubano from '../assets/coffes/cubano.png'

interface Coffee {
  id: string
  url: string
  badges: Array<string>
  title: string
  description: string
  price: number
}

interface CoffeeSelected extends Coffee {
  amount: number
}

interface CoffesContextType {
  coffeesSelected: CoffeeSelected[]
  incrementAmountCoffee: (id: string) => void
  decrementAmountCoffe: (id: string) => void
  setAmountCoffee: (id: string, amount: number) => void
  removeCoffeeSelected: (id: string) => void
}

export const CoffeesContext = createContext({} as CoffesContextType)

export const coffees = [
  {
    id: uuidv4(),
    url: CoffeAmericano,
    badges: ['Tradicional'],
    title: 'Expresso tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 0.99,
  },
  {
    id: uuidv4(),
    url: CoffeArabe,
    badges: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 0.99,
  },
  {
    id: uuidv4(),
    url: CoffeCubano,
    badges: ['Especial', 'Gelado', 'Alcoólico'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 0.99,
  },
]

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const coffeeSeletectedLocalStorage = localStorage.getItem(
    '@coffee-delivery-desafio:coffess-selected',
  )
  const [coffeesSelected, setCoffeesSelected] = useState<CoffeeSelected[]>(
    coffeeSeletectedLocalStorage
      ? JSON.parse(coffeeSeletectedLocalStorage)
      : [],
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesSelected)
    localStorage.setItem('@coffee-delivery-desafio:coffess-selected', stateJSON)
  }, [coffeesSelected])

  function incrementAmountCoffee(id: string) {
    const coffeeIndex = coffeesSelected.findIndex((coffee) => coffee.id === id)

    if (coffeeIndex < 0) {
      const coffeeFilter = coffees.find((coffe) => coffe.id === id)
      if (coffeeFilter) {
        const newCoffeeSeleted = { amount: 1, ...coffeeFilter }
        setCoffeesSelected((state) => [...state, newCoffeeSeleted])
      }
    } else {
      const newArrayCoffeesSelected = produce(coffeesSelected, (draft) => {
        draft[coffeeIndex].amount++
      })

      setCoffeesSelected(newArrayCoffeesSelected)
    }
  }

  function decrementAmountCoffe(id: string) {
    const coffeeIndex = coffeesSelected.findIndex((coffee) => coffee.id === id)

    if (coffeeIndex >= 0) {
      const newArrayCoffeesSelected = produce(coffeesSelected, (draft) => {
        if (draft[coffeeIndex].amount > 0) {
          draft[coffeeIndex].amount--
        }
      }).filter((coffee) => coffee.amount !== 0)

      setCoffeesSelected(newArrayCoffeesSelected)
    }
  }

  function setAmountCoffee(id: string, amount: number) {
    const coffeeIndex = coffeesSelected.findIndex((coffee) => coffee.id === id)

    if (coffeeIndex < 0) {
      const coffeeFilter = coffees.find((coffe) => coffe.id === id)
      if (coffeeFilter) {
        const newCoffeeSeleted = { amount, ...coffeeFilter }
        setCoffeesSelected((state) => [...state, newCoffeeSeleted])
      }
    } else {
      const newArrayCoffeesSelected = produce(coffeesSelected, (draft) => {
        draft[coffeeIndex].amount = amount
      })

      setCoffeesSelected(newArrayCoffeesSelected)
    }
  }

  function removeCoffeeSelected(id: string) {
    const newArrayCoffeesSelected = coffeesSelected.filter(
      (coffee) => coffee.id !== id,
    )

    setCoffeesSelected(newArrayCoffeesSelected)
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeesSelected,
        incrementAmountCoffee,
        decrementAmountCoffe,
        setAmountCoffee,
        removeCoffeeSelected,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
