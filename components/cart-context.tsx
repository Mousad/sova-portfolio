
'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

type CartItem = {
  slug: string
  title: string
  price: number
  image: string
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  add: (item: Omit<CartItem, 'quantity'>) => void
  update: (slug: string, quantity: number) => void
  remove: (slug: string) => void
}

const CartContext = createContext<CartContextValue | null>(null)
const key = 'nawa-cart'

function readCart(): CartItem[] {
  try {
    const raw = document.cookie
      .split('; ')
      .find((part) => part.startsWith(`${key}=`))
      ?.slice(key.length + 1)

    if (!raw) return []

    const parsed: unknown = JSON.parse(decodeURIComponent(raw))

    if (!Array.isArray(parsed)) return []

    return parsed.filter(
      (item): item is CartItem =>
        item !== null &&
        typeof item === 'object' &&
        typeof item.slug === 'string' &&
        typeof item.title === 'string' &&
        typeof item.price === 'number' &&
        Number.isFinite(item.price) &&
        typeof item.image === 'string' &&
        typeof item.quantity === 'number' &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0
    )
  } catch {
    return []
  }
}

function writeCart(items: CartItem[]) {
  document.cookie = `${key}=${encodeURIComponent(
    JSON.stringify(items)
  )}; path=/; max-age=31536000; samesite=lax`
}

export function CartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [items, setItems] = useState<CartItem[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setItems(readCart())
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) writeCart(items)
  }, [items, loaded])

  const value = useMemo<CartContextValue>(
    () => ({
      items,

      count: items.reduce(
        (sum, item) => sum + item.quantity,
        0
      ),

      total: items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),

      add: (item) =>
        setItems((current) => {
          const existing = current.find(
            (entry) => entry.slug === item.slug
          )

          if (existing) {
            return current.map((entry) =>
              entry.slug === item.slug
                ? { ...entry, quantity: entry.quantity + 1 }
                : entry
            )
          }

          return [...current, { ...item, quantity: 1 }]
        }),

      update: (slug, quantity) =>
        setItems((current) =>
          quantity > 0 && Number.isInteger(quantity)
            ? current.map((item) =>
                item.slug === slug
                  ? { ...item, quantity }
                  : item
              )
            : current.filter((item) => item.slug !== slug)
        ),

      remove: (slug) =>
        setItems((current) =>
          current.filter((item) => item.slug !== slug)
        ),
    }),
    [items]
  )

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
