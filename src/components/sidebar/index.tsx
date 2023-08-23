import { 
  ButtonBuy, 
  CloseSideBar, 
  ContainerCardItem, 
  ContainerContent, 
  ContainerImg, 
  ContainerValues, 
  DataItens, 
  MenuSideBar
} from '@/styles/components/sidebar';
import Image from 'next/image';
import camiseta1 from '../../assests/1.png'
import camiseta2 from '../../assests/2.png'


export function SideBar() {
  return(
    <MenuSideBar id='sideBarMenu'> 
      <ContainerContent>
        <CloseSideBar type='checkbox'/>
          x
        <strong>Sacola de Compras</strong>
        <ContainerCardItem>
          <ContainerImg>
            <Image src={camiseta1} width={94.8} height={94.8} alt=''/>
          </ContainerImg>
          <DataItens>
            <p>Camiseta x</p>
            <strong>R$ 79,90</strong>
            <span>Remover</span>
          </DataItens>
        </ContainerCardItem>
        <ContainerCardItem>
          <ContainerImg>
            <Image src={camiseta2} width={94.8} height={94.8} alt=''/>
          </ContainerImg>
          <DataItens>
            <p>Camiseta x</p>
            <strong>R$ 79,90</strong>
            <span>Remover</span>
          </DataItens>
        </ContainerCardItem>
        
        <ContainerValues>
              <p>Teste</p>
              <p>2 itens</p>
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