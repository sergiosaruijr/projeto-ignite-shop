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

export default function App({ Component, pageProps }: AppProps) {
  return(
    <HandBagContextProvider>
      <Container>
        <Header />
          <Component {...pageProps} />
      </Container>
    </HandBagContextProvider>
  ) 
}

