import React from 'react'
import './navbar.css'

function Navbar({ active, onNavigate }) {
  return (
    <nav className="app-navbar">
      <div className="app-brand">Huỳnh Ngọc Quí</div>
      <div className="nav-links">
        <button
          className={`nav-link${active === 'product' ? ' active' : ''}`}
          type="button"
          onClick={() => onNavigate('product')}
        >
          Product
        </button>
        <button
          className={`nav-link${active === 'profile' ? ' active' : ''}`}
          type="button"
          onClick={() => onNavigate('profile')}
        >
          MyProfile
        </button>
      </div>
    </nav>
  )
}

export default Navbar
