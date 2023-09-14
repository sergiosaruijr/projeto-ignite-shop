import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';

import { Container } 
from '@/styles/pages/app';

import Image from 'next/image';
import { SideBar } from '@/components/sidebar';
import {HandBagContextProvider} from '@/context/HandBagContext';
import Stripe from 'stripe';
import _ from 'lodash';
import { Header } from '@/components/header';


globalStyles()

// function isNull(value: any) {
//   if(value != null){
//     return value
//   }else{
//     return null
//   }
// }


export default function App({ Component, pageProps }: AppProps) {
  // const [items, setItems] = useState<Stripe.Price[]>([]);

  // const remove = (priceID: string) => {
  //     let i = _.reject(items, function (item) {
  //         return item.id === priceID;
  //     });
  //     setItems(i)
  // }

  // const add = (product: ProductProps) => {
  //     let i = _.union(items, [product]);
  //     setItems(i)
  // }

  // const handBagContext: HandBagContextProps = {
  //     items: items,
  //     add: add,
  //     remove: remove
  // }
  return(
    <HandBagContextProvider>
      <Container>
        <Header />
          <Component {...pageProps} />
      </Container>
    </HandBagContextProvider>
  ) 
}

