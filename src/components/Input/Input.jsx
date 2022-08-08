import React, { useContext, useState } from "react";
import { FormContext } from "../../context/ContextoFormulario";

/**
 * Este componente es hijo de Formulario y recibe las props de cada input.
 * @param {name} name
 * @param {type} type
 * @param {label} label
 * @param {string} entity
 */
const Input = ({ name, label, type = "text", entity }) => { 
  /**
   * Aqui accedemos al estado global para poder obtener los datos del formulario y una manera de actualizar los mismos. 
   */
  const {dispatch} = useContext(FormContext);
  /**
   * utilizamos un estado local para manejar el estado del input.
   */
  const [inputValue, setInputValue] = useState("");

  /**
   * Aquí actualizamos el estado local del input pasandole esta funcion al evento onChange del input.
   * @param {Event} e 
   */
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  /**
   * Aqui actualizamos el estado global pasandole el action al reducer que contiene las propiedades type y payload.
   * Segun el type el cual es un String modificara el pokemon o el entrenador.
   * En el payload le enviamos un objeto con clave que seria el name del input y el valor de cada input
   * @param {Event} e 
   */
  const onBlur = (e) => {
    e.preventDefault();
    dispatch({type: entity, payload: {clave: name, valor: inputValue}})
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={inputValue}
        id={name}
        // Registra cada cambio en el input ejecutandose cada vez que este cambia
        onChange={handleChange}
        // Cuando el usuario abandona el input se ejecuta este evento
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
