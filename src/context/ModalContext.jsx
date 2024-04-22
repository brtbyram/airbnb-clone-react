
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function ModalContext ({ children }){

  const [activeModal, setActiveModal] = useState("");
  const [ totalPrice, setTotalPrice] = useState(true)

  return (
    <Context.Provider value={{ activeModal, setActiveModal, totalPrice, setTotalPrice }}>
      {children}
    </Context.Provider>
  )
}



ModalContext.propTypes = {
  children: PropTypes.node.isRequired
}
