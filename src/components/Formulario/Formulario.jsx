import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { types } from "../../actions/actions";

/**
 * En este componente tenemos nuestro formulario y dentro de él tenemos los componentes que necesitan consumir nuestro estado.
 * Recuerda cual es el paso que debemos tomar para que nuestros componentes puedan consumir un estado global.
 */
const Formulario = () => {

  return (
    <>
      <header className="form-header">
        <div>
          <img src={pokebola} alt="pokebola" />
          <h2>Centro Pokemon de Ash</h2>
        </div>
        <Link className="volver" to="/">
          Home
        </Link>
      </header>
      <div className="formulario-ingreso">
        <h3>Solicitud de atención</h3>
        <p>
          Por favor, completa el formulario para que podamos atender a tu
          pokémon
        </p>
        <div className="cuerpo-formulario">
          <div className="inputs">
            <div>
              <p className="nombre-seccion">
                <img src={entrenador} alt="entrenador" />
                <span>ENTRENADOR</span>
              </p>
              <Input name="nombre" label="Nombre" entity={types.updateTrainer}/>
              <Input name="apellido" label="Apellido" entity={types.updateTrainer}/>
              <Input name="email" label="Email" type="email" entity={types.updateTrainer}/>
            </div>
            <div>
              <p className="nombre-seccion">
                <img src={pikachu} alt="pikachu" />
                <span>POKEMON</span>
              </p>
              <Input name="nombrePokemon" label="Nombre" entity={types.updatePokemon}/>
              <Input name="tipo" label="Tipo" entity={types.updatePokemon}/>
              <Input name="elemento" label="Elemento" entity={types.updatePokemon}/>
              <Input name="altura" label="Altura" entity={types.updatePokemon}/>
              <Input name="edad" label="Edad" type="number" entity={types.updatePokemon}/>
            </div>
          </div>
          <Detalle />
        </div>
      </div>
    </>
  );
};

export default Formulario;
