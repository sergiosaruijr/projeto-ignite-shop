import { HandBagButtonContainer } from '@/styles/components/handBagButton'
import { ComponentProps } from '@stitches/react'
import { Handbag } from 'phosphor-react'

type handBagButtonProps = ComponentProps<typeof HandBagButtonContainer> & {
  quantity?: number;
}

export function HandBagButton({quantity = 0, ...rest}: handBagButtonProps) {


  return(
    <HandBagButtonContainer {...rest}>
      {quantity > 0 && <span> {quantity} </span>}
      <Handbag weight= 'bold'/>
    </HandBagButtonContainer>
  )
}
