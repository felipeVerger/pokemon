import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from '../reducer/reducer';

/**
 * Creamos el contexto para guardar los datos del formulario en un estado global.
 * Luego creamos un provider para encapsular los componentes que utilizaran este estado global y sus funciones.
 */
export const FormContext = createContext();

const ContextFormProvider = ({ children }) => {

  /**
   * El useReducer es el que contiene el estado global y las funciones para modificarlo
   */
  const  [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{state, dispatch}}>
        { children }
    </FormContext.Provider>
  )
}

export default ContextFormProvider;