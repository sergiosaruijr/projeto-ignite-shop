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
  
  strong: {
    fontSize: 20,
  }
})

export const ContainerCloseSideBar = styled(Dialog.Close, {
  textAlign: 'end',
  background: 'transparent',
  border: 'none',
  color: '$gray500',
})

// export const ContainerCloseSideBar = styled(Dialog.Close, {
//   display: 'flex',
//   paddingBottom: '1.5rem',

//   input: {
//     cursor: 'pointer',
//     display: 'none',
//     boxSizing: 'border-box',
//     transition: 'all 0.3s',

//     '&:checked ~ #sideBarMenu': {
//       transform: 'translateX(0)',
//     },
//   }
// })

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
    }
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

// Antes do teste com dialog

// export const MenuSideBar = styled('div', {
//   position: 'fixed',
//   right: 0,
//   top: 0,
//   bottom: 0,
//   width: '30rem',
//   border: 'none',
//   transform: 'translateX(480px)',
//   transition: 'transform 250ms ease-in-out',
//   background: '$gray800',
//   boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
//   display: 'flex',
//   flexDirection: 'column',

// })

// export const ContainerContent = styled('div',{
//   display: 'flex',
//   flexDirection: 'column',
//   margin: '1.5rem 3rem 3rem',
  
//   strong: {
//     fontSize: 20,
//   }
// })

// export const ContainerCloseSideBar = styled('div', {
//   display: 'flex',
//   paddingBottom: '1.5rem',

//   input: {
//     cursor: 'pointer',
//     display: 'none',
//     boxSizing: 'border-box',
//     transition: 'all 0.3s',

//     '&:checked ~ #sideBarMenu': {
//       transform: 'translateX(0)',
//     },
//   }
// })

// export const ContainerCardItem = styled('div', {
//   display: 'flex',
//   background: '$green300',
//   marginBottom: '1.5rem',
//   marginTop: '1.5rem',
// })

// export const ContainerImg = styled('div', {
//   display: 'flex',
//   width:102,
//   height: 93,
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
//   borderRadius: 8,
// })


// export const DataItens = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   marginLeft: '1.25rem',
//   marginTop: '0.2rem',
//   gap: '0.6rem',
//   fontSize: 18,

//   span: {
//     fontSize: 16,
//   },

//   button: {
//     fontSize: 16,
//   },
// })

// export const HandBagFooter = styled('div', {
//   display: 'flex', 
//   flexDirection: 'column',
//   marginTop: 'auto',
  
//   button: {
//     width: '100%',
//     height: '4.32rem',
//     background: '$green500',
//     color: '$gray100',
//     border: 0,
//     borderRadius: 8,
//     fontWeight: 700,
//     fontSize: 18,

//     '&:hover': {
//       background: '$green300',
//     }
//   },
// })

// export const ContainerValues = styled('div', {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(2, 1fr)',
//   height: 93,
//   background: '$green300',
//   marginTop: '10.75rem',
//   alignItems: 'center',

//   'p:nth-child(2)' : {
//     gridColumnEnd: 5,
//   },

//   'strong:nth-child(4)' : {
//     gridColumnEnd: 5,
//   },

// })

