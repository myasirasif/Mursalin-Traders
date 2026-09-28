import { Link } from 'react-router-dom'
import { BUSINESS } from '../config'

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>About Us</h1>
          <p>{BUSINESS.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <img src="/images/about-store.jpg" alt="Our store" className="cover" loading="lazy" />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>Trusted Supplier in Kohat Since {BUSINESS.since}</h2>
            <p>Mursalin Traders was founded in {BUSINESS.since} at Gahri Risaldar, Hangu Road, Kohat. We started with a small range of grocery items and a commitment to fair dealing.</p>
            <p>Today we supply grocery, household and cosmetic products to families and shopkeepers across Kohat, at both wholesale and retail rates.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container grid-3">
          <div className="feature">
            <span className="icon">🎯</span>
            <h3>Our Mission</h3>
            <p>To make genuine daily essentials affordable and easy to get for every home and shop.</p>
          </div>
          <div className="feature">
            <span className="icon">👁️</span>
            <h3>Our Vision</h3>
            <p>To be the most trusted wholesale and retail supplier in the Kohat region.</p>
          </div>
          <div className="feature">
            <span className="icon">💎</span>
            <h3>Our Values</h3>
            <p>Honesty, fair prices, genuine products and fast, friendly service.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stats">
          <div><strong>{new Date().getFullYear() - BUSINESS.since}+</strong><span>Years of Service</span></div>
          <div><strong>40+</strong><span>Products</span></div>
          <div><strong>500+</strong><span>Happy Customers</span></div>
          <div><strong>3</strong><span>Categories</span></div>
        </div>
        <div className="center">
          <Link to="/shop" className="btn">Start Shopping</Link>
        </div>
      </section>
    </>
  )
}
