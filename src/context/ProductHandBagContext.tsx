import { createContext } from 'react'
import Stripe from 'stripe'


export type HandBagContextProps = {
  items?: Stripe.Price[],
  remove?: (priceID: string) => void
  add?: (product: Stripe.Price) => void
}

const handBagContextProps: HandBagContextProps = {}

const HandBagContext = createContext(handBagContextProps)

export default HandBagContext

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

