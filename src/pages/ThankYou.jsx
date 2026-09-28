import { Link, Navigate, useLocation } from 'react-router-dom'
import { rs, waLink } from '../config'

export default function ThankYou() {
  const order = useLocation().state
  if (!order) return <Navigate to="/" replace />

  const message = [
    `Assalam o Alaikum, I placed order ${order.orderId}.`,
    '',
    ...order.lines,
    `Total: ${rs(order.total)}`,
    '',
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
    `Address: ${order.address}`,
  ].join('\n')

  return (
    <section className="section">
      <div className="container narrow center thank">
        <div className="check">✓</div>
        <h1>Thank You, {order.name}!</h1>
        <p>Your order <strong>{order.orderId}</strong> has been received. We will call you shortly to confirm delivery.</p>

        <div className="summary left">
          {order.lines.map((l) => <p key={l}>{l}</p>)}
          <div className="sum-row total"><span>Total (Cash on Delivery)</span><span>{rs(order.total)}</span></div>
        </div>

        <div className="btn-row center">
          <a href={waLink(message)} target="_blank" rel="noreferrer" className="btn">Confirm on WhatsApp</a>
          <Link to="/shop" className="btn btn-outline">Continue Shopping</Link>
        </div>
      </div>
    </section>
  )
}
