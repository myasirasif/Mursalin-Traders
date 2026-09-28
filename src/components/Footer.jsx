import { Link } from 'react-router-dom'
import { BUSINESS, waLink } from '../config'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>{BUSINESS.name}</h4>
          <p>{BUSINESS.tagline}. Grocery, household and cosmetics at wholesale and retail rates in Kohat since {BUSINESS.since}.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>📍 {BUSINESS.address}</p>
          <p>📞 <a href={waLink()} target="_blank" rel="noreferrer">{BUSINESS.phone}</a></p>
          <p>✉️ <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></p>
        </div>
        <div className="map">
          <iframe src={BUSINESS.mapEmbed} title="Location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</div>
    </footer>
  )
}
