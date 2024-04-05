
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function ModalContext ({ children }){

  const [activeModal, setActiveModal] = useState("");

  return (
    <Context.Provider value={{ activeModal, setActiveModal }}>
      {children}
    </Context.Provider>
  )
}



ModalContext.propTypes = {
  children: PropTypes.node.isRequired
}
