import Image from 'next/image'
import Link from 'next/link'

export function ProjectCard({ slug, title, category, year, image, large = false }: { slug: string; title: string; category: string; year: string; image: string; large?: boolean }) {
  return <Link href={`/work/${slug}`} className={`group block ${large ? 'lg:col-span-7' : 'lg:col-span-5'}`}><div className={`relative overflow-hidden bg-[#e5e5df] ${large ? 'aspect-[1.35]' : 'aspect-[1.15]'}`}><Image src={image} alt={`معاينة مشروع ${title}`} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" sizes="(max-width: 1024px) 100vw, 60vw" /></div><div className="mt-4 flex items-start justify-between gap-4"><div><h3 className="text-lg font-medium tracking-[-0.03em]">{title}</h3><p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#777770]">{category}</p></div><span className="text-xs text-[#777770]">{year}</span></div></Link>
}
