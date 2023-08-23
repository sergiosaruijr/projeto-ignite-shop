import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';

import logoImg from '../assests/logo.svg';
import handBag from '../assests/handBagHeader.svg'
import { 
  Container, 
  ContainerHandBag, 
  ContainerQuantity, 
  Header, 
  MenuSideBar, 
  OpenSideBar, } 
from '@/styles/pages/app';

import Image from 'next/image';
import { SideBar } from '@/components/sidebar';

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
            <label>
              <OpenSideBar type='checkbox'/>
              <Image src={handBag} alt="" />
              {/* <MenuSideBar id='sideBarMenu'>
                
              </MenuSideBar> */}
              <SideBar/>
            </label>
            <ContainerQuantity>{isNull('')}</ContainerQuantity>
          </ContainerHandBag>
        </Header>
        <Component {...pageProps} />
      </Container>
  ) 
}
