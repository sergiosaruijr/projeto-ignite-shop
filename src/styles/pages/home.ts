// import { relative } from 'path';
import { styled } from '..';
import Link from 'next/link'


export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  // padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  div: {
    display: 'flex',
    flexDirection: 'column',
  },
  
  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight:'bold',
      color: '$green300',
      marginTop: '0.25rem',
    }

    
  },

  '&:hover' : {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }

  }
})

export const ContainerIconBag = styled('div', {
  backgroundColor: '$green500',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
})