import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'
import { BUSINESS, waLink, sendForm } from '../config'

const FEATURED = [1, 3, 4, 6, 18, 20, 27, 28].map((id) => PRODUCTS.find((p) => p.id === id))

const SERVICES = [
  { icon: '🛒', title: 'Grocery & Household', text: 'Daily essentials from trusted brands, all under one roof.' },
  { icon: '📦', title: 'Wholesale & Retail', text: 'Buy a single item or in bulk for your shop.' },
  { icon: '🚚', title: 'Fast Delivery in Kohat', text: 'Quick doorstep delivery across Kohat.' },
  { icon: '💰', title: 'Bulk Order Discounts', text: 'Special rates on large and repeat orders.' },
]

const CATEGORIES = [
  { icon: '🌾', name: 'Grocery', text: 'Rice, atta, oil, ghee, tea & more' },
  { icon: '🧴', name: 'Household', text: 'Detergents, cleaners & home care' },
  { icon: '💄', name: 'Cosmetics', text: 'Personal care, beauty & baby items' },
]

const WHY = [
  { icon: '✅', title: 'Genuine Brands', text: 'Only original products from trusted companies.' },
  { icon: '🏷️', title: 'Fair Prices', text: 'Wholesale rates that save you more every month.' },
  { icon: '🤝', title: 'Trusted Since 2020', text: 'Hundreds of happy families and shopkeepers.' },
]

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await sendForm({ _subject: 'New Newsletter Subscriber', email })
      setStatus('done')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section newsletter">
      <div className="container narrow center">
        <h2>Get Today's Rates & Offers</h2>
        <p>Subscribe for weekly rate lists and bulk order deals.</p>
        <form onSubmit={submit} className="inline-form">
          <input type="email" required placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Subscribe'}</button>
        </form>
        {status === 'done' && <p className="ok">Thank you for subscribing!</p>}
        {status === 'error' && <p className="err">Something went wrong. Please try again.</p>}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="eyebrow">Wholesale & Retail · Kohat</span>
            <h1>Your Trusted Store for <span>Daily Essentials</span></h1>
            <p>Grocery, household and cosmetics at the best rates, delivered fast to your door.</p>
            <div className="btn-row">
              <Link to="/shop" className="btn">Shop Now</Link>
              <a href={waLink("Assalam o Alaikum, please share today's rate list.")} target="_blank" rel="noreferrer" className="btn btn-outline">Today's Rate List</a>
            </div>
          </div>
          <img src="https://placehold.co/560x400/FFE6CC/3F4147?font=roboto&text=Mursalin+Traders" alt="Store" />
        </div>
      </section>

      <section className="section">
        <div className="container cat-grid">
          {CATEGORIES.map((c) => (
            <Link to={`/shop?cat=${c.name}`} key={c.name} className="cat-card">
              <span className="icon">{c.icon}</span>
              <div>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container two-col">
          <img src="https://placehold.co/560x380/FFF4E8/F7861C?font=roboto&text=Since+2020" alt="About us" />
          <div>
            <span className="eyebrow">About Us</span>
            <h2>Serving Kohat Since {BUSINESS.since}</h2>
            <p>Mursalin Traders started in {BUSINESS.since} with a simple goal: honest prices and genuine products for every home and shop in Kohat. From a small outlet on Hangu Road, we have grown into a trusted wholesale and retail supplier.</p>
            <p>Our promise is in our name: <strong>Growth Through Trust</strong>.</p>
            <Link to="/about" className="btn">Read More</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Services</span>
            <h2>What We Offer</h2>
          </div>
          <div className="grid-4">
            {SERVICES.map((s) => (
              <div className="feature" key={s.title}>
                <span className="icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head between">
            <div>
              <span className="eyebrow">Products</span>
              <h2>Popular Products</h2>
            </div>
            <Link to="/shop" className="btn btn-outline">View All</Link>
          </div>
          <div className="product-grid">
            {FEATURED.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Why Us</span>
            <h2>Why Choose Mursalin Traders</h2>
          </div>
          <div className="grid-3">
            {WHY.map((w) => (
              <div className="feature" key={w.title}>
                <span className="icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <h2>Need a Bulk Order for Your Shop?</h2>
            <p>Message us on WhatsApp for today's rates and special bulk discounts.</p>
          </div>
          <a href={waLink('Assalam o Alaikum, I want to place a bulk order.')} target="_blank" rel="noreferrer" className="btn btn-light">WhatsApp Us</a>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
