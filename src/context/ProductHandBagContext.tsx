import { createContext, useContext } from 'react';

const ProductHandBagContext = createContext({})

export function useProductHandBag() {
  return useContext(ProductHandBagContext)
}

interface ProductHandBagProps {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface ProductHandBagChildrenProps{
  children: ProductHandBagProps
}

export const ProductHandBagProvider = ({children}: ProductHandBagChildrenProps) => {
  return(
    <ProductHandBagContext.Provider value ={{}}>
      {children.id}
    </ProductHandBagContext.Provider>
  )
}

