/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/jsx-no-undef */
import {HeaderContainer} from '@/styles/components/header';

import logoImg from '../../assests/logo.svg';
import { SideBar } from '../sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function Header() {
  const {pathname} = useRouter();

  const showHandBagButton = pathname !== '/success';

  return(
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} alt="" />
      </Link>
      {showHandBagButton && <SideBar />}
    </HeaderContainer>
  )
}