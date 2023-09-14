import { ReactNode, createContext, useState } from 'react'
import Stripe from 'stripe'

export interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface HandBagContextData{
  handBagItems: ProductProps[];
  addToHandBag: (product: ProductProps) => void;
  checkIfItemAlreadyExists: (productId: string) => boolean;
}

export type HandBagContextProviderProps = {
  children: ReactNode;
}


export const HandBagContext = createContext({} as HandBagContextData)

export function HandBagContextProvider({children}: HandBagContextProviderProps){
  const [ handBagItems, setHandBagItems] = useState<ProductProps[]>([]);
  
  function addToHandBag(product: ProductProps){
    setHandBagItems((state) => [...state, product])
  }

  function checkIfItemAlreadyExists(productId: string){
    return handBagItems.some((product) => product.id === productId)
  }

  return(
    <HandBagContext.Provider value={{handBagItems, addToHandBag, checkIfItemAlreadyExists}}>
      {children}
    </HandBagContext.Provider>
  )
}
// export interface ProductProps {
//   product: {
//     id: string;
//     name: string;
//     imageUrl: string;
//     price: string;
//     numberPrice: number;
//     description: string;
//     defaultPriceId: string;
//   }
// }

// export type HandBagContextProps = {
//   items?: Stripe.Price[],
//   remove?: (priceID: string) => void
//   add?: (product: ProductProps) => void
//   // add?: (product: Stripe.Price) => void
// }

// const handBagContextProps: HandBagContextProps = {}

// const HandBagContext = createContext(handBagContextProps)

// export default HandBagContext

// import { createContext, useContext } from 'react';
// import Stripe from 'stripe';


// const ProductHandBagContext = createContext({})

// export function useProductHandBag() {
//   return useContext(ProductHandBagContext)
// }

// interface ProductHandBagProps {
//   id: number;
//   name: string;
//   price: string;
//   quantity: number;
// }

// interface ProductHandBagChildrenProps{
//   children: ProductHandBagProps
// }

// const Increase = () => {

// }

// const Decrease = () => {
  
// }

// export const ProductHandBagProvider = ({children}: ProductHandBagChildrenProps) => {
//   return(
//     <ProductHandBagContext.Provider value ={{}}>
//       {children.id}
//     </ProductHandBagContext.Provider>
//   )
// }

