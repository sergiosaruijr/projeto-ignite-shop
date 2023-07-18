import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import React from 'react';

import logoImg from '../assests/logo.svg';
import handBag from '../assests/handBagHeader.svg'
import { Container, ContainerHandBag, ContainerQuantity, Header } from '@/styles/pages/app';

import Image from 'next/image';

globalStyles()

function isNull(value: any) {
  if(value != null){
    return value
  }else{
    return null
  }
}

export default function App({ Component, pageProps }: AppProps) {

  return(
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <ContainerHandBag>
          <Image src={handBag} alt="" />
          <ContainerQuantity>{isNull('')}</ContainerQuantity>
        </ContainerHandBag>
      </Header>
      <Component {...pageProps} />
    </Container>
  ) 
}
