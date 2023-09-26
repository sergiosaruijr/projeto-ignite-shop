
import { stripe } from '@/lib/stripe'
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ReactNode, useContext, useState } from 'react'
import Stripe from 'stripe'
import 'react-loading-skeleton/dist/skeleton.css'
import { ProductProps } from '../../context/HandBagContext'
import { useHandBag } from '@/hooks/useHandBag'
// import HandBagContext from '@/context/ProductHandBagContext'

interface ProductItemProps {
  product: ProductProps;
}

export default function Product({product}: ProductItemProps) {
  const router = useRouter()

  const { checkIfItemAlreadyExists, addToHandBag } = useHandBag()


  if( router.isFallback ) {
    return(
      <h1>Loading...</h1>
    )
  }

  const itemAlreadyInHandBag = checkIfItemAlreadyExists(product.id)

  return(
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=''/>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            disabled= {itemAlreadyInHandBag}
            onClick={() => addToHandBag(product)}
          >
            {itemAlreadyInHandBag 
            ? 'Produto já está adicionado'
            : 'Colocar na sacola'}
          </button>

        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: {id: 'prod_OA1aIkyoL4tet5'}}
    ],
    // fallback: 'blocking',
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({params}) => {
  const productId = params!.id;
  
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'] ,
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount as number/100),
      numberPrice: price.unit_amount as number / 100,
      description: product.description,
      defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hr
  }
} 

// function useCart() {
//   throw new Error('Function not implemented.')
// }
