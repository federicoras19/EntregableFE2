import React from 'react'
import { Link, Outlet } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const HandleTheme = () => {
  const body = document.querySelector('body');
  body.classList.toggle('dark');
}
const Navbar = () => {
  return (
    <>
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/favs">Favs</Link>
      </li>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={HandleTheme}>Change theme</button>
    </nav>
    <Outlet />
    </>
)
}

export default Navbar;