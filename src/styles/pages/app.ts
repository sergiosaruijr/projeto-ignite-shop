import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
})

export const ContainerHandBag = styled('div', {
  width: '48px',
  height: '48px',
  background: '$gray800',
  border: 0,
  borderRadius: 6,
  padding: '0.75rem',
  position: 'relative',
})

export const ContainerQuantity = styled('div', {
  width: 24,
  height: 24,
  background: '$green500',
  border: '3px solid $gray900',
  borderRadius: '100%',
  position: 'absolute',
  padding: '0 5px',
  top: '0',
  right: '0',
  marginTop: -8,
  marginRight: -5,
})

export const MenuSideBar = styled('button', {
  // transform: CSSTranslate(x:0, ,),
  // translate:
  height: '100%',
  position: 'fixed',
  right: 0,
  width: '250px',
  // 
  border: 'none',
  transition: 'transform 250ms ease-in-out',
  background: 'linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%);'

  
})