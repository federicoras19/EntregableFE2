import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.length <= 5){
      setError("no se permiten nombres menores a 5 caracteres");
    } else {
      setError(`Gracias ${nombre}, te contactaremos cuando antes vía mail`);
    }
  };
  const handleName = (e) => {
    setNombre(e.target.value);
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" id="name" name="name" placeholder="Ingrese su nombre" onChange={handleName}/>
        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="Ingrese su correo electronico"/>
      </form>
      <button onClick={handleSubmit}>Enviar</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Form;