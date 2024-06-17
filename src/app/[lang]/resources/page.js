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

import { getDictionary } from '../dictionaries'

export default async function Page({ params: { lang } }) {
  // const dict = await getDictionary(lang) // en
  // return <button>{dict.products.cart}</button> // Add to Cart
  return (
    <div className="bg-orange-200">
      <section
        className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1491396023581-4344e51fec5c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top bg-no-repeat"
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
      </section>
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
                <div key={item.name} className={`flex flex-row justify-between p-4 ${index === 0 ? 'border-t border-red-400' : ''}`}>
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