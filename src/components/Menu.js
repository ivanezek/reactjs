import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'



export default function Menu(){
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <NavLink to='/' className='navbar-brand'>Mateazo</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to='/' className='nav-link'>Productos</NavLink>
          <li className='nav-item dropdown'>
            <NavLink to='#' className='nav-link dropdown-toggle' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mates
            </NavLink>
            <ul className='dropdown-menu' aria-labelledby="navbarDropdown">
              <li><NavLink className='dropdown-item' to='/category/imperial'>Imperiales</NavLink></li>
              <li><NavLink className='dropdown-item' to='/category/camionero'>Camionero</NavLink></li>
              <li><NavLink className='dropdown-item' to='category/personalizado'>Personalizado</NavLink></li>
            </ul>
          </li>
        </div>
        <div className='icon-display'>
          <NavLink to='/cart' className='nav-link'><CartWidget /></NavLink>
        </div>
      </div>
    </div>
  </nav>)

}