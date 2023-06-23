import { HomeContainer, Product } from '@/styles/pages/home';
import Image from 'next/image';
import React from 'react';

import camiseta1 from '../assests/1.png';
import camiseta2 from '../assests/2.png';
// import camiseta3 from '../assests/3.png';

export default function Home() {
  return (
   <HomeContainer>
    <Product>
      <Image src={camiseta1} width={520} height={480} alt=""/>

      <footer>
        <strong>Camiseta X </strong>
        <span>R$ 79,00</span>
      </footer>
    </Product>

    <Product>
      <Image src={camiseta2} width={520} height={480} alt=""/>

      <footer>
        <strong>Camiseta X </strong>
        <span>R$ 79,00</span>
      </footer>
    </Product>
   </HomeContainer>
  )
}
