// Aqui debemos crear nuestro contexto y nuestro provider.
import React, { createContext, useState } from 'react'

export const RegisterContext = createContext();

const ContextFormProvider = ({ children }) => {
  const [clientInfo, setClientInfo] = useState();

  return (
    <RegisterContext.Provider value={{clientInfo, setClientInfo}}>
        { children }
    </RegisterContext.Provider>
  )
}

export default ContextFormProvider;