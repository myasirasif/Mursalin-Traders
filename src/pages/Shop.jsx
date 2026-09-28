import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, CATEGORIES } from '../data/products'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const cat = params.get('cat') || 'All'

  const q = search.trim().toLowerCase()
  const list = PRODUCTS.filter(
    (p) =>
      (cat === 'All' || p.category === cat) &&
      (!q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.urdu.includes(q))
  )

  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>Shop</h1>
          <p>Choose a product and select Small, Medium or Large.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters">
            <div className="chips">
              {['All', ...CATEGORIES].map((c) => (
                <button key={c} className={`chip ${cat === c ? 'active' : ''}`} onClick={() => setParams(c === 'All' ? {} : { cat: c })}>
                  {c}
                </button>
              ))}
            </div>
            <input className="search" placeholder="Search products or brands..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>

          {list.length ? (
            <div className="product-grid">
              {list.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <p className="empty">No products found.</p>
          )}
        </div>
      </section>
    </>
  )
}
