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

  span: {
    background: "$green500",
    color: "$white",
    borderRadius: "50%",
    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.875rem",
    fontWeight: "bold",
    position: "absolute",
    top: "calc(-1.5rem / 2)",
    right: "calc(-1.5rem / 2)",
    outline: "3px solid $gray900",
  },

  background: '$gray800',
  color: '$gray300',
  
  width: '3rem',
  height: '3rem',

  svg: {
    fontSize:24,
  }, 

})