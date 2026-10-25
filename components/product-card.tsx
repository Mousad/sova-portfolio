import Image from 'next/image'
import Link from 'next/link'

export function ProductCard({ slug, title, type, price, image, featured = false }: { slug: string; title: string; type: string; price: string; image: string; featured?: boolean }) {
  return <Link href={`/store/${slug}`} className="group block"><div className="relative aspect-[1.05] overflow-hidden bg-[#ecece7]"><Image src={image} alt={`معاينة ${title}`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" sizes="(max-width: 768px) 100vw, 33vw" />{featured && <span className="absolute right-4 top-4 bg-[#111] px-2.5 py-1.5 text-[9px] tracking-[0.16em] text-white">مميز</span>}</div><div className="mt-4 flex items-start justify-between gap-3"><div><h3 className="text-base font-medium tracking-[-0.025em]">{title}</h3><p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#777770]">{type}</p></div><span className="text-sm text-[#191919]">{price}</span></div></Link>
}
