import { useContext } from 'react';
import {HandBagContext} from '../context/HandBagContext'

export function useHandBag() {
  return useContext(HandBagContext)
}