import { useState } from 'react'
import { useCart } from '../CartContext'
import { rs } from '../config'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState(1)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const confirm = () => {
    addItem(product, product.sizes[size], qty)
    setOpen(false)
    setQty(1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="card">
      <img src={product.image} alt={product.name} loading="lazy" />
      <div className="card-body">
        <span className="tag">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="urdu">{product.urdu}</p>
        <p className="brand">{product.brand}</p>
        <p className="price">{rs(product.min)} – {rs(product.max)}</p>
        <button className="btn btn-block" onClick={() => setOpen(true)}>
          {added ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>

      {open && (
        <div className="modal-bg" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <h3>{product.name}</h3>
            <p className="brand">{product.brand}</p>
            <p className="label">Select size</p>
            <div className="sizes">
              {product.sizes.map((s, i) => (
                <button key={s.label} className={`size ${i === size ? 'active' : ''}`} onClick={() => setSize(i)}>
                  <strong>{s.label}</strong>
                  <span>{rs(s.price)}</span>
                </button>
              ))}
            </div>
            <p className="label">Quantity</p>
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="btn btn-block" onClick={confirm}>
              Add to Cart · {rs(product.sizes[size].price * qty)}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
