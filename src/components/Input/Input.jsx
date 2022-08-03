import React, { useContext, useState } from "react";
import { RegisterContext } from "../../context/ContextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.
  const {clientInfo, setClientInfo} = useContext(RegisterContext);

  // También, utilizaremos un estado local para manejar el estado del input.
  const [currentValue, setCurrentValue] = useState({
    nombre: '',
    apellido: '',
    email: '',
    nombrePokemon: '',
  });

  const handleChange = (e) => {
    // Aquí deberíamos actualizar el estado local del input.
    setCurrentValue((prev) => ({...prev, [name]: e.target.value}));
    console.log(currentValue);
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de
    // cada input.
    // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
  };

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        // value={currentValue}
        id={name}
        onChange={handleChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
