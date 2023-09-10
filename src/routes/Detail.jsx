import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  // La URL para obtener un user en especifico es: https://jsonplaceholder.typicode.com/users/1

  const [dentist, setDentist] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setDentist(data);
        })
        .catch((error) => {
            console.error("Error al obtener detalles del dentista", error);
        });
}, [id]);

  return (
    <div className='card'>
      <h1>Detalles del dentista </h1>
      <h3>Nombre: {dentist.name}</h3>
      <p>Username: {dentist.username}</p>
      <p>Email: {dentist.email}</p>
      <p>Telefono: {dentist.phone}</p>
      <p>Sitio web: {dentist.website}</p>
    </div>
  )
}

export default Detail