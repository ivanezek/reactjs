import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'



export default function Menu(){
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <NavLink to='/' className='navbar-brand'>Eziv Gaming 2.0</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink to='/' className='nav-link'>Productos</NavLink>
          <NavLink to='/category/terror' className='nav-link'>terror</NavLink>
        </div>
        <div className='icon-display'>
          <NavLink to='/cart' className='nav-link'><CartWidget /></NavLink>
        </div>
      </div>
    </div>
  </nav>)

}