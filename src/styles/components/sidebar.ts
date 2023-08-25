import { styled } from '..'

export const MenuSideBar = styled('div', {
  height: '100%',
  position: 'fixed',
  right: 0,
  width: '480px',
  border: 'none',
  transform: 'translateX(480px)',
  transition: 'transform 250ms ease-in-out',
  background: '$gray800',

})

export const ContainerContent = styled('div',{
  display: 'flex',
  flexDirection: 'column',
  margin: '1.5rem 3rem 3rem',
  
  strong: {
    fontSize: 20,
  }
})

export const ContainerCloseSideBar = styled('div', {
  display: 'flex',
  paddingBottom: '1.5rem',

  input: {
    cursor: 'pointer',
    display: 'none',
    boxSizing: 'border-box',
    transition: 'all 0.3s',

    '&:checked ~ #sideBarMenu': {
      transform: 'translateX(0)',
    },
  }
})

export const ContainerCardItem = styled('div', {
  display: 'flex',
  background: '$green300',
  marginBottom: '1.5rem',
  marginTop: '1.5rem',
})

export const ContainerImg = styled('div', {
  display: 'flex',
  width:102,
  height: 93,
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
})


export const DataItens = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1.25rem',
  marginTop: '0.2rem',
  gap: '0.6rem',
  fontSize: 18,

  span: {
    fontSize: 16,
  },
})

export const ContainerValues = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  height: 93,
  background: '$green300',
  marginTop: '10.75rem',
  alignItems: 'center',

  'p:nth-child(2)' : {
    gridColumnEnd: 5,
  },

  'strong:nth-child(4)' : {
    gridColumnEnd: 5,
  },

})

export const ButtonBuy = styled('button', {
  background: '$green500',
  color: '$gray100',
  marginTop: '3.4rem',
  padding: '1.25rem 7.7rem',
  border: 0,
  borderRadius: 8,

  strong: {
    fontSize: 18,
  },

  '&:hover': {
    background: '$green300',
  }
})
