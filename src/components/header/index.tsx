/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-no-undef */
import {HeaderContainer} from '@/styles/components/header';

import logoImg from '../../assests/logo.svg';
import { SideBar } from '../sidebar';
import Image from 'next/image';
import Link from 'next/link';

function isNull(value: any) {
  if(value != null){
    return value
  }else{
    return null
  }
}

export function Header() {
  return(
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} alt="" />
      </Link>
      
      <SideBar />
      {/* <ContainerHandBag> */}
        {/* <SideBar /> */}
        {/* <ContainerQuantity>{isNull('')}</ContainerQuantity>
      </ContainerHandBag> */}
    </HeaderContainer>
  )
}