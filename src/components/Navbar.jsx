import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  
  return (
    <header>
      <h1>Rendang</h1>
      <nav>
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''}
        >
          Sejarah
        </Link>
        <Link 
          to="/memasak" 
          className={location.pathname === '/memasak' ? 'active' : ''}
        >
          Memasak
        </Link>
        <Link 
          to="/populeritas" 
          className={location.pathname === '/populeritas' ? 'active' : ''}
        >
          Populeritas
        </Link>
        <Link 
          to="/olahan" 
          className={location.pathname === '/olahan' ? 'active' : ''}
        >
          Olahan
        </Link>
      </nav>
    </header>
  )
}

export default Navbar