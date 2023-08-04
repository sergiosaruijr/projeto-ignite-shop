import { ContainerIconBag, HomeContainer, Product, SkeletonFooter } from '@/styles/pages/home';
import Image from 'next/image';
import React, { useState } from 'react';
import Head from 'next/head';

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';
import { stripe } from '@/lib/stripe';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import Stripe from 'stripe';

import handBag from '../assests/handBagHome.svg';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

const SkeletonComponent = () => (
  <SkeletonTheme highlightColor="#262629" baseColor='#202024'>
    <section>
      <Skeleton height={696} width={600} borderRadius={8} />
      <SkeletonFooter>
        <Skeleton width={270} height={32} borderRadius={8}/>
        <Skeleton width={120} height={32} borderRadius={8}/>
      </SkeletonFooter>
    </section>
  </SkeletonTheme>
);


export default function Home({products}: HomeProps) {
  const [productsBag, setProductsBag] = useState([])

  const [loading, setLoading] = useState(true);
  
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3, 
      spacing: 48,
    }
  })

  // if(loading){
  //   setTimeout(() => {
  //     SkeletonComponent()
  //     setLoading(false)
  //   }, 5000)
  // }
  
  // inserir array que tenha de 0 a x e coloque skeleton ate x momento
  const tamanho = products.length
  const array: number[] = []
  let i = 0

  function createSkeleton() {
    for( i ; i < tamanho; i++){
      return SkeletonComponent()
    }
  }

  function timerTeste() {
    const timer = setTimeout(() => {{
      setLoading(false)
    }},3000)

    return () => clearTimeout(timer)
  }

  // const timer = setTimeout(() => {{
  //   setLoading(false)
  // }},3000)

  
  // function addProductToBag(id: number) {
  //   const copyProducts = [...productsBag]

  //   const item = copyProducts.find((product)=> product.id === id)
  // }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className='keen-slider'>

        {products.map(product => {
          
          return(
            <>
              {/* {timerTeste()} */}
              {loading && createSkeleton()}

             
              {/* <p>
                {[...Array(tamanho)].map((_,index) => (
                  <div key={index}>
                    {SkeletonComponent()}
                  </div>
                ))}
              </p> */}
            {!loading && 
            <Product
              className='keen-slider__slide'
              href={`/product/${product.id}`}
              key={product.id}
            >
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name} </strong>
                    <span>{product.price}</span>
                  </div>
                  <ContainerIconBag>
                    <Image src={handBag} alt="" />
                  </ContainerIconBag>
                </footer>
              </Product>
            
            } 
            </>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
    //como é uma lista, então data antes
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number/100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2 hours
  }
}