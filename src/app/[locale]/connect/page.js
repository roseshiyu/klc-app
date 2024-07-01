
export default async function Page({ params: { lang } }) {
  return (
    <div className="bg-gray-50">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-auto lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-orange-500">
              活动与团契
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              我们提供不同年龄层的需要，欢迎你来查看不同小组，若你有兴趣让你/孩子参与，也可以联络该小组的负责人。
            </p>
          </div>
        </div>
      </section>
      <div className="bg-orange-400 ">
        <div className="mx-auto max-w-screen-xl px-4 py-12 ">
          <div className="text-center text-xl font-bold flex justify-evenly ">
            <h2>不可叫人小看你年轻，总要在言语、行为、爱心、信心、清洁上，都作信徒的榜样。</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mx-auto max-w-screen-xl mt-4">
        <article className=" flex bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>GG3</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG3</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG3</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG3</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-72">
            <img
              alt=""
              src="https://scontent.fkul16-4.fna.fbcdn.net/v/t1.6435-9/105856535_3553727561338671_5937554867740153391_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=f7fc3c&_nc_ohc=tlG1dmAWNBwQ7kNvgGgwbLu&_nc_ht=scontent.fkul16-4.fna&oh=00_AYAK8UJiv-g2h4bMZLfG3CuZ9QaenRXcKeYcMcGrcPqD3w&oe=66A97E31"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">
                  青青三
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                年龄：10-12岁
                <br />
                时间：1130am - 0100pm
                <br />
                活动：圣经故事
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                想了解更多，就快快联系我们！
              </a>
            </div>
          </div>
        </article>
        <article className="flex bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>GG2</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG2</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG2</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG2</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-72">
            <img
              alt=""
              src="https://scontent.fkul16-3.fna.fbcdn.net/v/t1.6435-9/104953662_10157339564723093_2159322717923082708_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f7fc3c&_nc_ohc=ZW8Gd1S5y-MQ7kNvgFwcHVi&_nc_ht=scontent.fkul16-3.fna&oh=00_AYAy0fXZRqV-3hsqCdxIsmTPC2xmCM1vleKJpEKCPRvrYQ&oe=66A98DBD"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">
                  青青二
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                年龄：预备班 - 中三
                <br />
                时间：1130am - 0100pm
                <br />
                活动：圣经故事
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                想了解更多，就快快联系我们！
              </a>
            </div>
          </div>
        </article>
        <article className=" flex bg-white transition hover:shadow-xl">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
              datetime="2022-10-10"
              className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
              <span>GG1</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG1</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG1</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG1</span>
            </time>
          </div>

          <div className="hidden sm:block sm:basis-72">
            <img
              alt=""
              src="https://scontent.fkul16-3.fna.fbcdn.net/v/t1.6435-9/105587307_10157588657449353_6524608163234373266_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f7fc3c&_nc_ohc=sGkxH_-ee-8Q7kNvgG87Jaj&_nc_ht=scontent.fkul16-3.fna&oh=00_AYBYvhTR7dHNZS2IXFbfy4kF6jPvi3Twx1LP7qv7-tUhbw&oe=66A99649"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">
                  青青一
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                年龄：中四 - 中六
                <br />
                时间：1130am - 0100pm
                <br />
                活动：圣经故事
              </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
              <a
                href="#"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
              >
                想了解更多，就快快联系我们！
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}