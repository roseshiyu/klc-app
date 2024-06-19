const chapters = [
  { title: '好消息 1 - 平安何处寻', href: `https://anyflip.com/qvwmh/rewk/`, tag: '福音' },
  { title: '好消息 2 - 末日', href: `https://anyflip.com/qvwmh/vcml/`, tag: '福音' },
  { title: '好消息 3 - 穆斯林与犹太人的冲突', href: `https://anyflip.com/qvwmh/hkgg/`, tag: '福音' },
  { title: '好消息 4 - 一本奇妙的书', href: `https://anyflip.com/qvwmh/pgpv/`, tag: '福音' },
  { title: '好消息 5 - 谁知晓明日', href: `https://anyflip.com/qvwmh/qeej/`, tag: '福音' },
  { title: '好消息 6 - 因为爱', href: `https://anyflip.com/qvwmh/orsq/`, tag: '福音' },
  { title: '好消息 7（上）- 神州古人的信仰', href: `https://anyflip.com/qvwmh/nmgl/`, tag: '福音' },
  {
    title: '好消息 7（下）- 神州古人的信仰', href: `https://anyflip.com/qvwmh/bfpf/
`, tag: '福音'
  },
  { title: '好消息 8  - 从犹太人的历史证明圣经的可信性', href: `https://anyflip.com/qvwmh/qkqu/`, tag: '福音' },
  { title: '圣诞好消息特刊', href: `https://anyflip.com/qvwmh/rilg/ `, tag: '福音' },
  { title: '好消息9（上）- 您岂能说没有上帝', href: `https://anyflip.com/qvwmh/aprx/`, tag: '福音' },
  { title: '好消息9（下）- 您岂能说没有上帝', href: `https://anyflip.com/qvwmh/pxsd/`, tag: '福音' },
  { title: '好消息 10 - 与上帝和好', href: `https://anyflip.com/qvwmh/diqp/ `, tag: '福音' },
  { title: '好消息 11 - 5W1H', href: `https://anyflip.com/qvwmh/hhhy/`, tag: '福音' },
  { title: '好消息 12 - 大结局', href: `https://anyflip.com/qvwmh/bgkx/`, tag: '福音' },
]

const ImageBanner = ({ image }) => (
  <Image src={image} className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" alt='image' />
);
const items = [
  {
    title: "好消息 1 - 平安何处寻",
    description: "2020年是历史上难以磨灭的一年。对很多人来说，2020年不仅看不见任何宏景。。。",
    header: <ImageBanner image={dgn_y1_01} />
    ,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/rewk/"
  },
  {
    title: "好消息 2 - 末日",
    description: "Dive into the transformative power of technology.",
    header: <ImageBanner image={dgn_y1_02} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/vcml/"
  },
  {
    title: "好消息 3 - 穆斯林与犹太人的冲突",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <ImageBanner image={dgn_y1_03} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/hkgg/"

  },
  {
    title: "好消息 4 - 一本奇妙的书",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <ImageBanner image={dgn_y1_04} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/pgpv/"
  },
  {
    title: "好消息 5 - 谁知晓明日",
    description: "Join the quest for understanding and enlightenment.",
    header: <ImageBanner image={dgn_y1_05} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/qeej/"
  },
  {
    title: "好消息 6 - 因为爱",
    description: "Experience the thrill of bringing ideas to life.",
    header: <ImageBanner image={dgn_y1_06} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/orsq/"
  },
  {
    title: "好消息 7（上）- 神州古人的信仰",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageBanner image={dgn_y1_07_1} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/nmgl/"
  },
  {
    title: "好消息 7（下）- 神州古人的信仰",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageBanner image={dgn_y1_07_2} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/bfpf/"
  },
  {
    title: "好消息 8  - 从犹太人的历史证明圣经的可信性",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageBanner image={dgn_y1_08} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/qkqu/"
  },
  {
    title: "圣诞好消息特刊",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageBanner image={dgn_y1_i} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/rilg/"
  },
  {
    title: "好消息9（上）- 您岂能说没有上帝",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageBanner image={dgn_y1_09_1} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/aprx/"
  },
  {
    title: "好消息9（下）- 您岂能说没有上帝",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageBanner image={dgn_y1_09_2} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/pxsd/"
  },
  {
    title: "好消息 10 - 与上帝和好",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageBanner image={dgn_y1_10} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/diqp/"
  },
  {
    title: "好消息 11 - 5W1H",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageBanner image={dgn_y1_11} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/hhhy/"
  },
  {
    title: "好消息 12 - 大结局",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <ImageBanner image={dgn_y1_12} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/bgkx/"
  },
];
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { getDictionary } from '../dictionaries'
import Image from 'next/image'
import { building, dgn_y1_01, dgn_y1_02, dgn_y1_03, dgn_y1_04, dgn_y1_05, dgn_y1_06, dgn_y1_07_1, dgn_y1_07_2, dgn_y1_08, dgn_y1_09_1, dgn_y1_09_2, dgn_y1_10, dgn_y1_11, dgn_y1_12, dgn_y1_i } from '../../../../public';
export default async function Page({ params: { lang } }) {
  // const dict = await getDictionary(lang) // en
  // return <button>{dict.products.cart}</button> // Add to Cart
  return (
    <div className="bg-orange-200">
      <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image src={building} alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

        <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 class="sm:text-4xl text-2xl font-bold mb-6">Explore the World</h2>
          <p class="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>

          <button
            type="button"
            class="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
            Book Now
          </button>
        </div>
      </div>
      {/* <section
        className="overflow-hidden bg-[url(https://lh3.googleusercontent.com/pw/AP1GczNEy6Z8hzvAkGYYc5pU9I71J16HAhp7P2sr6kwjt0ojb9quAxI5OVbEpoHeMsRlc5qIBS4SCSHx0RaSum7P_ilUZraBvQ0HsYMUeOobClzrsmm9Gci1NlrhtTQSDlwLi4SPlQPb1n3TpTF5Mp369TfrUSuudIelG0CVmQiOLkn7M4mne2036V794V2EY2_8Dg51RcEX_fCXmsk13FQ-TVdVp1I9rPPLCgWlLd8-fH51lyL0ahHAUdfk-Fdh6AlsOq0Dc9P8ko_aoNKKjdB2igdAUXRG-wC31fcd1IzGrnX1FCdX_ytW6L67v_HW8QJwluJx4zeURwOBhBRCfBUwmZPqtE7Ya48wEDPZ4QkylgpOngqm3eyfw5iwvmGXKT63Ihm_sqkmi5J1yPT_mY1PDH0pGEEoN4uEdGEwJifAar6HYqza_8J_zIiuaW2icE-CF9nPxYUOtiaaj5Km0Iyt30y5gnlQNifGtS1cgki2JsRLHUBOgcdeh5NGCzUBsXB7Fcl4JpfRrt_-f-hnvbQVbgpmwhyIOREItpZCImLinjgWvK281qc3o78M-ETJuGYpczDGwNO7iX7mUprww9dKDtTebz2ACaJcFZCp7dfA1yBsfqmyym64FC37NLKYU_-nCQgjTpkEziN8zRZ-BRGefUUdEa56XSJTNW8ZLV-lKIfROmQDW2XLoR-lgvh7IdQJelgmw2HHK3SkbS36h-zG_wN6piKOx8h0MiIso0WSxgRD46wO4p2vd1pglrGJ1fCW0wRC2Tw3hFSi5XmaLyMmEaCDx3FXAIgj4uO0gL7vauvZQpePjHoUmkYrZovFw1qFZPf2NA9o_q5pxgw7OX0jQoLgogYMBkqdtSQWbmhcLIzD2iq1nHSkYjGPKQvxjqJtIvo0li0nxWFDWH9xMZoJMQ=w1245-h683-s-no-gm?authuser=0)] bg-cover bg-top bg-no-repeat"
      >
        <div className='bg-black/25 '>
          <div className="mx-auto max-w-screen-xl py-24 sm:py-40 lg:py-48">
            <div className="flex justify-end">
              <div>
              </div>
              <div className='text-left '>
                <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">数码好消息</h2>

                <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                  若您想了解及认识更多关于耶稣的事。
                  我们诚心邀请您联络我们、临近的教会或基督徒。<br />
                  邮件地址：awordoflove101@gmail.com
                </p>

                <div className="mt-4 sm:mt-8">
                  <a
                    href="mailto:awordoflove101@gmail.com"
                    className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    发送邮件
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section> */}



      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 || i === 10 || i === 13 ? "md:col-span-2" : ""}
            link={item.link}
          />
        ))}
      </BentoGrid>

      <div className="mx-auto max-w-screen-xl py-32 sm:py-48 lg:py-56">
        <div className="space-y-4">
          <details className="group [&_summary::-webkit-details-marker]:hidden border-2 rounded-xl border-red-500 bg-gray-50" open>
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 text-gray-900"
            >
              <h2 className="font-medium">数码好消息（第一年）</h2>

              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            {chapters.map((item, index) => {
              return (
                <div key={index} className={`flex flex-row justify-between p-4 ${index === 0 ? 'border-t border-red-400' : ''}`}>
                  <p className="text-gray-700 content-center">
                    {item.title}
                  </p>
                  <div className='grid justify-items-center gap-y-2'>
                    <div className='flex gap-x-2'>
                      <span className="whitespace-nowrap rounded-full bg-purple-100 border border-purple-700 px-2.5 py-0.5 text-sm text-purple-700">
                        {item.tag}
                      </span>
                    </div>
                    <a
                      className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                      href={item.href}
                      target="_blank"
                    >
                      点击查看
                    </a>
                  </div>
                </div>
              )
            })}


          </details>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
            >
              <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <p className="mt-4 px-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
              recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}