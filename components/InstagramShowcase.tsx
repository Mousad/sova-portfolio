
export default function InstagramShowcase() {
  const projects = [
    {
      name: "Perfume Store",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=85",
    },
    {
      name: "Fashion Brand",
      image:
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=85",
    },
    {
      name: "Creative Design",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=85",
    },
    {
      name: "Brand Identity",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=85",
    },
    {
      name: "Digital Products",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=85",
    },
    {
      name: "Web Design",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=85",
    },
    {
      name: "Product Design",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=85",
    },
    {
      name: "Creative Studio",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=85",
    },
    {
      name: "Visual Design",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=85",
    },
  ];

  return (
   

<section className="relative overflow-hidden bg-[#fefefe] px-4 py-10 sm:px-8 sm:py-16 lg:py-20">
  <div className="mx-auto grid max-w-5xl grid-cols-[1.1fr_0.7fr] items-center gap-2 sm:gap-10 lg:gap-16">

    {/* Text Content - Left Side */}
    <div dir="rtl" className="order-0 min-w-0 text-right">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8d9b83]/30 bg-white/70 px-2.5 py-1.5 text-[9px] font-medium text-[#66745c] sm:gap-2 sm:px-4 sm:text-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-[#8d9b83]" />
        معرض أعمالي
      </span>

      <h2 className="mt-4 text-xl font-semibold leading-[1.6] tracking-tight text-[#20211e] sm:mt-6 sm:text-3xl lg:text-5xl">
        كل مشروع يحكي
        <br />
        <span className="text-[#8d9b83]">قصة مختلفة.</span>
      </h2>

     
<p className="mt-10 max-w-md text-[10px] leading-8 text-[#73736c] sm:mt-5 sm:text-sm sm:leading-8 lg:text-base">
  من تصميم الهويات البصرية إلى تطوير المواقع
  <br />
  والمتاجر الإلكترونية، أصنع تجارب رقمية تجمع بين
  <br />
  الجمال والوظيفة والاهتمام بالتفاصيل.
</p>


      <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-7 sm:gap-3">
        <a
          href="https://www.instagram.com/soo_249/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-[10px] bg-[#20211e] px-3 py-2 text-[9px] font-medium text-white transition duration-300 hover:bg-[#8d9b83] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-3.5 w-3.5 sm:h-5 sm:w-5"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
          استكشف أعمالي
        </a>

        <span className="text-[8px] text-[#85857d] sm:text-xs">
          تصميم · تطوير · إبداع
        </span>
      </div>

      <div className="mt-5 h-px w-full max-w-[20px] bg-[#dedfd6] sm:mt-8" />

      <div className="mt-3 flex items-center gap-2 text-[9px] text-[#73736c] sm:mt-4 sm:gap-5 sm:text-xs">
        <span><strong className="text-[#20211e]">33+</strong> مشروع</span>
        <span className="h-3 w-px bg-[#d8d9d0]" />
        <span><strong className="text-[#20211e]">3+</strong> سنوات خبرة</span>
      </div>
    </div>

{/* Instagram Phone - Right Side */}
<div className="order-2 flex min-w-0 justify-center">
  <div className="phone-float relative w-full max-w-[200px] sm:max-w-[220px] lg:max-w-[250px]">

    {/* Side Buttons */}
    <div className="absolute -left-[3px] top-20 z-0 h-8 w-[3px] rounded-l-md bg-[#383936] sm:top-28 sm:h-10" />
    <div className="absolute -left-[3px] top-32 z-0 h-6 w-[3px] rounded-l-md bg-[#383936] sm:top-40" />
    <div className="absolute -right-[3px] top-28 z-0 h-12 w-[3px] rounded-r-md bg-[#383936] sm:top-36 sm:h-14" />

    {/* Phone Frame */}
    <div className="relative z-10 scale-y-[0.95] rounded-[20px] border-[1px] border-[#343531] bg-[#171815] p-[2px] shadow-[0_24px_60px_-24px_rgba(32,33,30,0.35)] sm:rounded-[2.5rem] sm:border-4 sm:p-[5px]">

      {/* Phone Screen */}
      <div className="overflow-hidden rounded-[1.2rem] bg-white sm:rounded-[2rem]">

        {/* Status Bar */}
        <div className="relative flex h-5 items-center justify-between px-3 text-[7px] font-semibold text-[#20211e] sm:h-8 sm:px-5 sm:text-[9px]">
          <span>9:41</span>

          <div className="absolute left-1/2 top-1.5 flex h-2 w-9 -translate-x-1/2 items-center justify-end rounded-full bg-black pr-0 sm:top-2 sm:h-10 sm:w-14 sm:pr-10">
            {/* Camera / glowing sensor */}
            <div className="h-1 w-1 rounded-full bg-[#2d63e8] ring-[#2d63e8] sm:h-1.5 sm:w-1.5" />
          </div>

          <div className="flex items-center gap-1">
            {/* iPhone Signal */}
            <svg
              viewBox="0 0 20 14"
              className="h-2 w-3 sm:h-2.5 sm:w-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M1 12.5V10a2.5 2.5 0 0 1 2.5-2.5H6v5H1Z" />
              <path d="M7.5 12.5V7A2.5 2.5 0 0 1 10 4.5h2v8H7.5Z" />
              <path d="M14 12.5V3a2.5 2.5 0 0 1 2.5-2.5H19v12h-5Z" />
            </svg>

            <svg
              viewBox="0 0 24 14"
              className="h-2 w-3.5 sm:h-2.5 sm:w-4"
              fill="none"
              stroke="#343531"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="1" y="1" width="19" height="12" rx="3" />
              <rect
                x="3"
                y="3"
                width="13"
                height="8"
                rx="1.5"
                fill="#343531"
                stroke="none"
              />
              <path d="M22 5v4" />
            </svg>
          </div>
        </div>

        {/* Profile Header */}
        <div className="px-2.5 pb-2 sm:px-3.5 sm:pb-3" dir="rtl">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold tracking-tight text-[#20211e] sm:text-sm">
              soo_249
            </span>

            <div className="flex gap-2 text-xs text-[#20211e] sm:gap-3 sm:text-lg">
              <span>＋</span>
              <span>☰</span>
            </div>
          </div>

          {/* Profile Stats */}
          <div className="mt-2.5 flex items-center gap-1.5 sm:mt-4 sm:gap-3">
            <div className="shrink-0 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[1px]">
              <div className="rounded-full border border-white bg-[#e8e9e2] p-0.5">
                <img
                  src="/images/placeholder.jpg"
                  alt="Profile"
                  className="h-7 w-7 rounded-full object-cover sm:h-12 sm:w-12"
                />
              </div>
            </div>

            <div className="flex min-w-0 flex-1 justify-around text-center">
              <div>
                <p className="text-[7px] font-bold text-[#20211e] sm:text-sm">33+</p>
                <p className="mt-0.5 text-[5px] text-[#666] sm:text-[9px]">مشروع</p>
              </div>
              <div>
                <p className="text-[7px] font-bold text-[#20211e] sm:text-sm">2K</p>
                <p className="mt-0.5 text-[5px] text-[#666] sm:text-[9px]">متابع</p>
              </div>
              <div>
                <p className="text-[7px] font-bold text-[#20211e] sm:text-sm">3+</p>
                <p className="mt-0.5 text-[5px] text-[#666] sm:text-[9px]">سنوات خبرة</p>
              </div>
            </div>
          </div>

          <p className="mt-2 text-[6px] font-semibold text-[#20211e] sm:mt-2.5 sm:text-[10px]">
            Web Designer & Developer
          </p>

          <p className="mt-1 text-[7px] leading-3.5 text-[#62625d] sm:text-[9px] sm:leading-4">
            تصميم وتطوير تجارب رقمية مميزة
            <br />
            UI/UX · Websites · E-commerce
          </p>

          {/* Profile Buttons */}
          <div className="mt-2 flex gap-1 sm:mt-2 sm:gap-2">
            <div className="min-w-0 flex-1 rounded-md bg-[#efefec] py-1 text-center text-[6px] font-semibold text-[#20211e] sm:rounded-lg sm:py-2 sm:text-[9px]">
              فلووو
            </div>
            <div className="min-w-0 flex-1 rounded-md bg-[#efefec] py-1 text-center text-[6px] font-semibold text-[#20211e] sm:rounded-lg sm:py-2 sm:text-[9px]">
              مشاركة الملف
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-2 flex justify-between gap-1 sm:mt-3 sm:gap-2">
            {["Projects", "Websites", "Design", "About"].map((item, index) => (
              <div key={item} className="flex min-w-0 flex-1 flex-col items-center gap-1">
                <div className="flex aspect-square w-full max-w-[23px] items-center justify-center rounded-full border border-[#deded8] bg-[#f4f4ef] sm:max-w-[52px]">
                  <span className="text-[10px] text-[#78846e] sm:text-sm">
                    {["✳", "⌘", "◈", "↗"][index]}
                  </span>
                </div>
                <span className="text-[5px] text-[#555] sm:text-[7px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Post Tabs */}
        <div className="flex h-5 items-center justify-around border-b border-[#eeeeeb] text-[#999] sm:h-8">
          <div className="flex h-full w-1/3 items-center justify-center border-b-2 border-[#20211e] text-[#20211e]">
            <svg viewBox="0 0 24 24" className="h-2 w-2 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
          </div>

          <div className="flex w-1/3 justify-center">
            <svg viewBox="0 0 24 24" className="h-2 w-2 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <path d="m10 8 6 4-6 4z" />
            </svg>
          </div>

          <div className="flex w-1/3 justify-center">
            <svg viewBox="0 0 24 24" className="h-2 w-2 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21v-2a8 8 0 0 1 16 0v2z" />
            </svg>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-[2px] bg-white">
          {[
            {
              name: "Website Ideas",
              image: "https://i.pinimg.com/1200x/8d/23/56/8d23566bdfed5ddfcf90fe820611bb87.jpg",
            },
            {
              name: "Fashion Brand",
              image: "https://i.pinimg.com/736x/02/a9/f1/02a9f12ae1c9e475b54d29525df1ab1a.jpg",
            },
            {
              name: "Creative Design",
              image: "https://i.pinimg.com/1200x/00/8d/57/008d57922013b7a0927d8f6e9742c6b6.jpg",
            },
            {
              name: "Brand Identity",
              image: "https://i.pinimg.com/736x/c5/7e/56/c57e5691fb78fd4d2b2dcf50424fb05d.jpg",
            },
            {
              name: "Digital Products",
              image: "https://i.pinimg.com/736x/5c/c7/17/5cc717732fcf5691f66daf48b5386851.jpg",
            },
            {
              name: "Web Design",
              image: "https://i.pinimg.com/736x/ae/5b/0f/ae5b0fa9a6d49bcb32db9d4786d96f60.jpg",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="group relative aspect-square min-w-0 overflow-hidden bg-[#efefeb]"
            >
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="absolute inset-0 block h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex h-4 items-center justify-around bg-white text-[#262721] sm:h-9">
          <span className="text-xs sm:text-base">⌂</span>
          <span className="text-xs sm:text-base">⌕</span>
          <span className="text-xs sm:text-base">＋</span>
          <span className="text-xs sm:text-base">♡</span>
        </div>

        {/* Home Indicator */}
        <div className="flex h-2 items-center justify-center bg-white sm:h-3">
          <div className="h-1 w-12 rounded-full bg-black sm:w-16" />
        </div>

      </div>
    </div>
  </div>
</div>


  </div>
</section>


  );
}
