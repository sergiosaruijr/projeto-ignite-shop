import { styled } from '..';
import * as Dialog from '@radix-ui/react-dialog';

export const MenuSideBar = styled(Dialog.Content, {
  position: 'fixed',
  right: 0,
  top: 0,
  bottom: 0,
  width: '30rem',
  border: 'none',
  // transform: 'translateX(480px)',
  // transition: 'transform 250ms ease-in-out',
  // padding: '3rem',
  // paddingTop: '4.5rem',
  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  display: 'flex',
  flexDirection: 'column',
})

export const ContainerContent = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  margin: '1.5rem 3rem 3rem',
  
  h2: {
    fontSize: 20,
    marginBottom: '2rem',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap:'1.5rem',
    flex: 1,
    overflowY: 'auto',
  }
})

export const ContainerCloseSideBar = styled(Dialog.Close, {
  textAlign: 'end',
  background: 'transparent',
  border: 'none',
  color: '$gray500',
})


export const ContainerCardItem = styled('div', {
  display: 'flex',
  marginBottom: '1.5rem',
  marginTop: '1.5rem',
  alignItems: 'center',
    // background: '$green300',
})

export const ContainerImg = styled('div', {
  display: 'flex',
  width:'6.32rem',
  height: '5.82rem',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  }
})


export const DataItens = styled('div', {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  marginLeft: '1.25rem',
  fontSize: 18,
 

  p:{
    color: '$gray100',
  },

  strong: {
    fontWeight: 700,
    marginTop: 4,
  },

  button: {
    fontSize: 16,
    background: 'transparent',
    border: 'none',
    textAlign: 'initial',
    color: '$green500',
    fontWeight:'bold',
    marginTop: '1rem',
  },
})

export const HandBagFooter = styled('div', {
  display: 'flex', 
  flexDirection: 'column',
  marginTop: 'auto',
  position: 'fixed',
  // height: '100%',
  bottom:'3rem',
  width: '24rem',
  
  button: {
    width: '100%',
    height: '4.32rem',
    background: '$green500',
    color: '$gray100',
    border: 0,
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 18,

    '&:hover': {
      background: '$green300',
      cursor: 'pointer',
    }
  },
})

export const ContainerValues = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  height: 93,
  marginBottom: '3.5rem',
  alignItems: 'center',

  strong: {
    fontSize: 18,
  },

  'p:nth-child(2)' : {
    gridColumnEnd: 5,
  },

  'strong:nth-child(4)' : {
    gridColumnEnd: 5,
  },

})

