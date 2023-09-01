/* eslint-disable react/jsx-no-undef */
import { 
  ContainerHandBag, 
  ContainerQuantity, 
  HeaderContainer, 
  MenuSideBar, 
  OpenSideBar, } 
from '@/styles/components/header';

import logoImg from '../../assests/logo.svg';
import handBag from '../../assests/handBagHeader.svg'
import { SideBar } from '../sidebar';
import Image from 'next/image';

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
    </HeaderContainer>
  )
}