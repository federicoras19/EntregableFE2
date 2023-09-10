import React from "react";
import { Link } from "react-router-dom";



const Card = ({dentist}) => {
//renderizar los datos de cada dentista
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  return (
    <div className="Card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {/*  Nombre del personaje, Email, Telefono, Sitio web */}
        {/* {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april */}
        <Link to={`/detail/${dentist.id}`}>
        <h3>Nombre: {dentist.name}</h3>
        <p>Username: {dentist.username}</p>
        </Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;