'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type CartItem = { slug: string; title: string; price: number; image: string; quantity: number }
type CartContextValue = { items: CartItem[]; count: number; total: number; add: (item: Omit<CartItem, 'quantity'>) => void; update: (slug: string, quantity: number) => void; remove: (slug: string) => void }
const CartContext = createContext<CartContextValue | null>(null)
const key = 'nawa-cart'

function readCart() { try { const raw = document.cookie.split('; ').find((part) => part.startsWith(`${key}=`))?.split('=')[1]; return raw ? JSON.parse(decodeURIComponent(raw)) as CartItem[] : [] } catch { return [] } }
function writeCart(items: CartItem[]) { document.cookie = `${key}=${encodeURIComponent(JSON.stringify(items))}; path=/; max-age=31536000; samesite=lax` }

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  useEffect(() => setItems(readCart()), [])
  useEffect(() => { if (items.length || document.cookie.includes(`${key}=`)) writeCart(items) }, [items])
  const value = useMemo(() => ({ items, count: items.reduce((sum, item) => sum + item.quantity, 0), total: items.reduce((sum, item) => sum + item.price * item.quantity, 0), add: (item: Omit<CartItem, 'quantity'>) => setItems((current) => { const existing = current.find((entry) => entry.slug === item.slug); return existing ? current.map((entry) => entry.slug === item.slug ? { ...entry, quantity: entry.quantity + 1 } : entry) : [...current, { ...item, quantity: 1 }] }), update: (slug: string, quantity: number) => setItems((current) => quantity > 0 ? current.map((item) => item.slug === slug ? { ...item, quantity } : item) : current.filter((item) => item.slug !== slug)), remove: (slug: string) => setItems((current) => current.filter((item) => item.slug !== slug)) }), [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('useCart must be used inside CartProvider'); return context }
