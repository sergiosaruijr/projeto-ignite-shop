import {  
  ContainerCardItem, 
  ContainerCloseSideBar, 
  ContainerContent, 
  ContainerImg, 
  ContainerValues, 
  DataItens, 
  HandBagFooter, 
  MenuSideBar
} from '@/styles/components/sidebar';
import Image from 'next/image';
// import camiseta1 from '../../assests/1.png'
// import camiseta2 from '../../assests/2.png'
import { useHandBag } from '@/hooks/useHandBag';
import * as Dialog from '@radix-ui/react-dialog';
import {X} from 'phosphor-react'
import { HandBagButton } from '../handBagButton';
import { useState } from 'react';
import axios from 'axios';

export function SideBar() {
  const { handBagItems, removeHandBagItem, handBagTotal } = useHandBag();
  const HandBagQuantity = handBagItems.length;

  const formattedHandBagTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(handBagTotal);

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = 
  useState(false);

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products: handBagItems,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout");
    }
  }


  return(
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <HandBagButton quantity={HandBagQuantity}/>
      </Dialog.Trigger>

      <Dialog.Portal>
        <MenuSideBar> 
          <ContainerContent>
            <ContainerCloseSideBar>
              <X size={24} weight='bold'/>
            </ContainerCloseSideBar>
            <h2>Sacola de Compras</h2>
            
            <section>
              {HandBagQuantity <= 0 && <p>Parece que seu carrinho esta vazio</p>}

              {handBagItems.map((handBagItems) =>(
                <>
                  <ContainerCardItem key={handBagItems.id}>
                    <ContainerImg>
                      <Image src={handBagItems.imageUrl} width={94.8} height={94.8} alt='' />
                    </ContainerImg>
                    <DataItens>
                      <p>{handBagItems.name}</p>
                      <strong>{handBagItems.price}</strong>
                      <button onClick={() => removeHandBagItem(handBagItems.id)}>Remover</button>
                    </DataItens>
                  </ContainerCardItem>
                  
                </>
              ))}
              <HandBagFooter>
                <ContainerValues>
                    <p>Quantidade</p>
                    <p>{HandBagQuantity} {HandBagQuantity === 1 ? 'item' : 'itens'}</p>
                    <strong>Total</strong>
                    <strong>{formattedHandBagTotal}</strong>
                </ContainerValues>

                <button
                  onClick={handleCheckout}
                  disabled= {isCreatingCheckoutSession || HandBagQuantity <= 0}
                > 
                  Finalizar compra 
                </button>
              </HandBagFooter>
            </section>
            
          </ContainerContent>
        </MenuSideBar>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
