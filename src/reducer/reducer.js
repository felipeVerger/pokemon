import { types } from "../actions/actions";

/**
 * declaramos el estado inicial de nuestro reducer
 */
export const initialState = {
  entrendor: {
    nombre: "",
    apellido: "",
    email: "",
  },
  pokemon: {
    nombrePokemon: "",
    tipo: "",
    elemento: "",
    altura: 0,
    edad: 0,
  },
};

/**
 * Exportamos la funcion que se encarga de actualizar el estado.
 * Segun el type que recibe actualizara el entrenador o el pokemon.
 * los actualiza mediante el payload donde recibe la clave(name) y el valor de cada input.
 * @param {object} state 
 * @param {object} action 
 * @returns {object} state actualizado
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case types.updateTrainer:
      return {
        ...state,
        entrenador: {
          ...state.entrenador,
          [action.payload.clave]: action.payload.valor,
        },
      };

    case types.updatePokemon:
      return {
        ...state,
        pokemon: {
          ...state.pokemon,
          [action.payload.clave]: action.payload.valor,
        },
      };

    default:
      console.log("no existe tal accion");
  }
};
