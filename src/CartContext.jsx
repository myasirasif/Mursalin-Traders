import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()
const KEY = 'mt_cart'

const load = () => {
  try { return JSON.parse(localStorage.getItem(KEY)) || [] } catch { return [] }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load)

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)) } catch {}
  }, [items])

  // Same product in a different size is a separate cart line
  const addItem = (product, size, qty = 1) => {
    const key = `${product.id}-${size.label}`
    setItems((prev) => {
      const found = prev.find((i) => i.key === key)
      if (found) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
      return [...prev, { key, id: product.id, name: product.name, image: product.image, size: size.label, price: size.price, qty }]
    })
  }

  const updateQty = (key, qty) =>
    setItems((prev) => (qty < 1 ? prev.filter((i) => i.key !== key) : prev.map((i) => (i.key === key ? { ...i, qty } : i))))

  const removeItem = (key) => setItems((prev) => prev.filter((i) => i.key !== key))
  const clearCart = () => setItems([])

  const count = items.reduce((s, i) => s + i.qty, 0)
  const total = items.reduce((s, i) => s + i.qty * i.price, 0)

  return (
    <CartContext.Provider value={{ items, addItem, updateQty, removeItem, clearCart, count, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
