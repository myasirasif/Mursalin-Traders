import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useCart } from '../CartContext'
import { rs, sendForm } from '../config'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', phone: '', address: '', notes: '' })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  if (!items.length) return <Navigate to="/cart" replace />

  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')
    const orderId = `MT-${Date.now().toString().slice(-6)}`
    const lines = items.map((i) => `${i.name} (${i.size}) x ${i.qty} = ${rs(i.price * i.qty)}`)
    const order = { orderId, ...form, lines, total }

    try {
      await sendForm({
        _subject: `New Order ${orderId} - ${form.name}`,
        _template: 'box',
        'Order ID': orderId,
        Name: form.name,
        Phone: form.phone,
        Address: form.address,
        Notes: form.notes || '-',
        Items: lines.join('\n'),
        Total: rs(total),
        Payment: 'Cash on Delivery',
      })
      clearCart()
      navigate('/thank-you', { state: order })
    } catch {
      setError('Order could not be sent. Please try again or order via WhatsApp.')
      setSending(false)
    }
  }

  return (
    <>
      <section className="page-head">
        <div className="container"><h1>Checkout</h1></div>
      </section>

      <section className="section">
        <div className="container cart-layout">
          <form className="checkout-form" onSubmit={submit}>
            <h3>Delivery Details</h3>
            <label>Full Name *<input name="name" required value={form.name} onChange={set} /></label>
            <label>Phone / WhatsApp *<input name="phone" type="tel" required pattern="[0-9+\s-]{10,15}" placeholder="03XX XXXXXXX" value={form.phone} onChange={set} /></label>
            <label>Delivery Address *<textarea name="address" required rows="3" value={form.address} onChange={set} /></label>
            <label>Notes (optional)<textarea name="notes" rows="2" value={form.notes} onChange={set} /></label>
            <p className="note">💵 Payment: <strong>Cash on Delivery</strong></p>
            {error && <p className="err">{error}</p>}
            <button className="btn btn-block" disabled={sending}>{sending ? 'Placing Order...' : 'Place Order'}</button>
          </form>

          <aside className="summary">
            <h3>Your Order</h3>
            {items.map((i) => (
              <div className="sum-row" key={i.key}>
                <span>{i.name} ({i.size}) × {i.qty}</span>
                <span>{rs(i.price * i.qty)}</span>
              </div>
            ))}
            <div className="sum-row total"><span>Total</span><span>{rs(total)}</span></div>
            <Link to="/cart" className="link">← Edit Cart</Link>
          </aside>
        </div>
      </section>
    </>
  )
}
