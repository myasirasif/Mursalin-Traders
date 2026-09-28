import { Link } from 'react-router-dom'
import { useCart } from '../CartContext'
import { rs } from '../config'

export default function Cart() {
  const { items, updateQty, removeItem, total } = useCart()

  return (
    <>
      <section className="page-head">
        <div className="container"><h1>Your Cart</h1></div>
      </section>

      <section className="section">
        <div className="container">
          {!items.length ? (
            <div className="empty">
              <p>Your cart is empty.</p>
              <Link to="/shop" className="btn">Go to Shop</Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-list">
                {items.map((i) => (
                  <div className="cart-row" key={i.key}>
                    <img src={i.image} alt={i.name} />
                    <div className="cart-info">
                      <h3>{i.name}</h3>
                      <p>{i.size} · {rs(i.price)}</p>
                    </div>
                    <div className="qty">
                      <button onClick={() => updateQty(i.key, i.qty - 1)}>−</button>
                      <span>{i.qty}</span>
                      <button onClick={() => updateQty(i.key, i.qty + 1)}>+</button>
                    </div>
                    <strong className="line-total">{rs(i.price * i.qty)}</strong>
                    <button className="remove" onClick={() => removeItem(i.key)} aria-label="Remove">×</button>
                  </div>
                ))}
              </div>
              <aside className="summary">
                <h3>Order Summary</h3>
                <div className="sum-row"><span>Subtotal</span><span>{rs(total)}</span></div>
                <div className="sum-row"><span>Delivery</span><span>Confirmed on call</span></div>
                <div className="sum-row total"><span>Total</span><span>{rs(total)}</span></div>
                <Link to="/checkout" className="btn btn-block">Proceed to Checkout</Link>
                <Link to="/shop" className="link">← Continue Shopping</Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
