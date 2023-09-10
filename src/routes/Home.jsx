import React from 'react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist, setDentist  ] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setDentist(data);
            console.log(data);
        })
        .catch((error) => {
            console.error("Error al obtener los dentistas ", error);
        });
}, []);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentist.map((dentist) => (
        <Card key={dentist.id} dentist={dentist} />
        ))}  
      </div>
    </main>
  )
}

export default Home