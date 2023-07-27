import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';

import logoImg from '../assests/logo.svg';
import handBag from '../assests/handBagHeader.svg'
import { Container, ContainerHandBag, ContainerQuantity, Header, MenuSideBar } from '@/styles/pages/app';

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
  const [sidebar, setSideBar] = useState(false)
  const showSideBar = () => setSideBar(!sidebar)
  return(
    // <ProductHandBagProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <ContainerHandBag>
            <MenuSideBar onClick={showSideBar}>
              <Image src={handBag} alt="" />
            </MenuSideBar>
            <ContainerQuantity>{isNull('')}</ContainerQuantity>
          </ContainerHandBag>
        </Header>
        <Component {...pageProps} />
      </Container>
    // </ProductHandBagProvider>
  ) 
}
