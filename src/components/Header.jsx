import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../CartContext'

export default function Header() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={close}>
          <img src="/logo.png" alt="Mursalin Traders" />
        </Link>
        <nav className={`nav ${open ? 'open' : ''}`}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/shop" onClick={close}>Shop</NavLink>
        </nav>
        <div className="header-actions">
          <Link to="/cart" className="cart-btn" onClick={close}>
            🛒 Cart {count > 0 && <span className="badge">{count}</span>}
          </Link>
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        </div>
      </div>
    </header>
  )
}
