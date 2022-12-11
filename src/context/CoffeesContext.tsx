import { createContext, ReactNode, useState } from 'react'
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
  const [coffeesSelected, setCoffeesSelected] = useState<CoffeeSelected[]>([])

  function incrementAmountCoffee(id: string) {
    const coffeeIndex = coffeesSelected.findIndex((coffee) => coffee.id === id)

    if (coffeeIndex < 0) {
      const coffeeFilter = coffees.find((coffe) => coffe.id === id)
      if (coffeeFilter) {
        const newCoffeeSeleted = { amount: 1, ...coffeeFilter }
        setCoffeesSelected((state) => [...state, newCoffeeSeleted])
      }
    } else {
      const newArrayCoffeesSeleted = produce(coffeesSelected, (draft) => {
        draft[coffeeIndex].amount++
      })

      setCoffeesSelected(newArrayCoffeesSeleted)
    }
  }

  function decrementAmountCoffe(id: string) {
    const coffeeIndex = coffeesSelected.findIndex((coffee) => coffee.id === id)

    if (coffeeIndex >= 0) {
      const newArrayCoffeesSeleted = produce(coffeesSelected, (draft) => {
        if (draft[coffeeIndex].amount > 0) {
          draft[coffeeIndex].amount--
        }
      }).filter((coffee) => coffee.amount !== 0)

      setCoffeesSelected(newArrayCoffeesSeleted)
    }
  }

  return (
    <CoffeesContext.Provider
      value={{ coffeesSelected, incrementAmountCoffee, decrementAmountCoffe }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
