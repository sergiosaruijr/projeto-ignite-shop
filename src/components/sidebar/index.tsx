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

export function SideBar() {
  const { handBagItems, removeHandBagItem, handBagTotal } = useHandBag();
  const HandBagQuantity = handBagItems.length;

  const formattedHandBagTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(handBagTotal);

  return(
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <HandBagButton />
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

                <button> Finalizar compra </button>
              </HandBagFooter>
            </section>
            
          </ContainerContent>
        </MenuSideBar>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

// antes do teste com dialog

// <MenuSideBar id='sideBarMenu'> 
//         <ContainerContent>
//           <ContainerCloseSideBar>
//             <input type='checkbox'/>
//             x
//           </ContainerCloseSideBar>
//           <strong>Sacola de Compras</strong>

//           {HandBagQuantity <= 0 && <p>Parece que seu carrinho esta vazio</p>}

//           {handBagItems.map((handBagItems) =>(
//             <>
//               <ContainerCardItem key={handBagItems.id}>
//                 <ContainerImg>
//                   <Image src={handBagItems.imageUrl} width={94.8} height={94.8} alt='' />
//                 </ContainerImg>
//                 <DataItens>
//                   <p>{handBagItems.name}x</p>
//                   <strong>{handBagItems.price}</strong>
//                   <span>Remover</span>
//                   <button onClick={() => console.log('remove')}>Remover</button>
//                 </DataItens>
//               </ContainerCardItem>
              
//             </>
//         ))}
//           <HandBagFooter>
//             {/* <ContainerValues>
//                 <p>Quantidade</p>
//                 <p>{HandBagQuantity} {HandBagQuantity > 1 ? 'itens' : 'item'}</p>
//                 <strong>Total</strong>
//                 <strong>R$ 70,00</strong>
//             </ContainerValues> */}
        
//             <button> Finalizar compra </button>
//           </HandBagFooter>
//         </ContainerContent>
//       </MenuSideBar>