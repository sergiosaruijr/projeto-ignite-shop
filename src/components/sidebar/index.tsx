import { 
  ButtonBuy, 
  ContainerCardItem, 
  ContainerCloseSideBar, 
  ContainerContent, 
  ContainerImg, 
  ContainerValues, 
  DataItens, 
  MenuSideBar
} from '@/styles/components/sidebar';
import Image from 'next/image';
import camiseta1 from '../../assests/1.png'
import camiseta2 from '../../assests/2.png'
import { useHandBag } from '@/hooks/useHandBag';


export function SideBar() {
  const { handBagItems } = useHandBag();
  const HandBagQuantity = handBagItems.length;

  return(
    <MenuSideBar id='sideBarMenu'> 
      <ContainerContent>
        <ContainerCloseSideBar>
          <input type='checkbox'/>
          x
        </ContainerCloseSideBar>
        <strong>Sacola de Compras</strong>

        {HandBagQuantity <= 0 && <p>Parece que seu carrinho esta vazio</p>}

        {handBagItems.map((handBagItems) =>(
          <>
            <ContainerCardItem key={handBagItems.id}>
              <ContainerImg>
                <Image src={handBagItems.imageUrl} width={94.8} height={94.8} alt='' />
              </ContainerImg>
              <DataItens>
                <p>{handBagItems.name}x</p>
                <strong>{handBagItems.price}</strong>
                <span>Remover</span>
                <button onClick={() => console.log('remove')}>Remover</button>
              </DataItens>
            </ContainerCardItem>
            
          </>
      ))}
        
        <ContainerValues>
                <p>Quantidade</p>
                <p>{HandBagQuantity} {HandBagQuantity > 1 ? 'itens' : 'item'}</p>
                <strong>Total</strong>
                <strong>R$ 70,00</strong>
            </ContainerValues>
        <ButtonBuy>
          <strong>Finalizar compra</strong> 
        </ButtonBuy>
      </ContainerContent>
    </MenuSideBar>
  )
}