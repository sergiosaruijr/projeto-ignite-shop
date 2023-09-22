import { HandBagButtonContainer } from '@/styles/components/handBagButton'
import { ComponentProps } from '@stitches/react'
import { Handbag } from 'phosphor-react'

type handBagButtonProps = ComponentProps<typeof HandBagButtonContainer>

export function HandBagButton({...rest}: handBagButtonProps) {
  return(
    <HandBagButtonContainer {...rest}>
      <Handbag weight= 'bold'/>
    </HandBagButtonContainer>
  )
}
