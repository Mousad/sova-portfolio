
"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./cart-context";

export function CartPage() {
  const { items, total, update, remove } = useCart();

  return (
    <main className="mx-auto max-w-[1440px] px-5 pb-24 pt-24 text-[#202119] transition-colors duration-300 dark:text-[#f0efe9] sm:px-8 lg:px-12 lg:pt-40">
      <p className="mb-8 text-[10px] tracking-[0.2em] text-[#777770] dark:text-[#aaa99f]">
        السلة
      </p>

      <h1 className="text-5xl font-light tracking-[-0.06em] sm:text-7xl">
        مشترياتك.
      </h1>

      {items.length === 0 ? (
        <div className="mt-20 border-t border-[#deded8] py-12 dark:border-[#35372f]">
          <p className="text-lg">السلة فارغة حالياً.</p>

          <Link
            href="/ar/store"
            className="mt-6 inline-block border-b border-[#191919] pb-2 text-sm transition-colors hover:text-[#737c60] dark:border-[#e5e5dc] dark:hover:text-[#a8ba9b]"
          >
            استكشف المتجر
          </Link>
        </div>
      ) : (
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="border-t border-[#deded8] dark:border-[#35372f]">
            {items.map((item) => (
              <div
                key={item.slug}
                className="flex gap-4 border-b border-[#deded8] py-6 dark:border-[#35372f]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={112}
                  height={96}
                  className="shrink-0 object-cover"
                />

                <div className="flex min-w-0 flex-1 items-start justify-between gap-4">
                  <div>
                    <h2 className="text-sm sm:text-base">{item.title}</h2>

                    <p className="mt-2 text-sm text-[#777770] dark:text-[#aaa99f]">
                      {item.price} دولار
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          update(item.slug, item.quantity - 1)
                        }
                        aria-label="إنقاص الكمية"
                        className="size-8 border border-[#deded8] transition-colors hover:bg-[#eeeee7] dark:border-[#45473f] dark:hover:bg-[#30322c]"
                      >
                        −
                      </button>

                      <span className="min-w-4 text-center">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          update(item.slug, item.quantity + 1)
                        }
                        aria-label="زيادة الكمية"
                        className="size-8 border border-[#deded8] transition-colors hover:bg-[#eeeee7] dark:border-[#45473f] dark:hover:bg-[#30322c]"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => remove(item.slug)}
                    className="shrink-0 text-xs text-[#777770] underline transition-colors hover:text-red-600 dark:text-[#aaa99f] dark:hover:text-red-400"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit border-t border-[#deded8] pt-6 dark:border-[#35372f]">
            <div className="flex justify-between gap-4">
              <span>الإجمالي</span>
              <strong>{total} دولار</strong>
            </div>

            <button
              type="button"
              className="mt-8 w-full bg-[#2d63e8] px-5 py-4 text-sm text-white transition-colors hover:bg-[#2453c7]"
            >
              المتابعة إلى الدفع
            </button>

            <p className="mt-3 text-xs leading-6 text-[#777770] dark:text-[#aaa99f]">
              الدفع يحتاج إلى إعداد بوابة دفع خارجية.
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}
