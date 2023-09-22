import { styled } from '..';

export const HandBagButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: 6,
  position: 'relative',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  background: '$gray800',
  color: '$gray300',
  
  width: '3rem',
  height: '3rem',

  svg: {
    fontSize:24,
  }
})