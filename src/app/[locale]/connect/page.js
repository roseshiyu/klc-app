import { agape_pic_1, ertong_pic_1, gg1_pic_3, gg2_pic_1, gg3_pic_1 } from "@/public";
import Image from "next/image";

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
              <span>ERTONG</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>ERTONG</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>ERTONG</span>
            </time>
          </div>

          <div className="basis-36 sm:block sm:basis-72">
            <Image
              alt=""
              src={ertong_pic_1}
              className="aspect-square h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">
                  儿童乐园
                </h3>
              </a>

              <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-700">
                年龄：3-9岁（四岁或以下的孩子需先经过观察，再决定是否接纳）
                <br />
                时间：9:30am - 12:00pm （每周六）
                <br />
                活动：唱诗歌、圣经故事、品格学习、体能训练、生活技能、美术等
                <br />
                需携带：水壶、文具、茶点（15min 小休时间）
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
              <span>GG3</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG3</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>GG3</span>
            </time>
          </div>

          <div className="basis-36 sm:block sm:basis-72">
            <Image
              alt="GG1"
              src={gg3_pic_1}
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

              <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-700">
                年龄：10-12岁
                <br />
                时间：陪读班 （每周六 9:00am - 10:30am）一起温习，一起游戏
                <br />
                时间：青青三（每周日 11:30am -1:00pm） 唱歌，品格分享，圣经故事等
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
            </time>
          </div>

          <div className="basis-36 sm:block sm:basis-72">
            <Image
              alt="GG2"
              src={gg2_pic_1}
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
              <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-700">
                年龄：预备班 - 中三学生
                <br />
                时间：下午11点 - 1点
                <br />
                活动：品格讲座，团康活动，户外活动，功课班
                <br />
                备注：1）穿着得体 2）携带水壶，文具，笔记
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
            </time>
          </div>

          <div className="basis-36 sm:block sm:basis-72">
            <Image
              alt="GG1"
              src={gg1_pic_3}
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
              <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-700">
                年龄：中四到中六（16-18岁）
                <br />
                时间：11:15am - 01:00pm
                <br />
                活动：查经，唱诗歌，生活讲座
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
              <span>Agape</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Agape</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>Agape</span>
            </time>
          </div>

          <div className="basis-36 sm:block sm:basis-72">
            <Image
              alt="Agape"
              src={agape_pic_1}
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">
                  爱加倍
                </h3>
              </a>
              <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-700">
                年龄：大专生及工作者
                <br />
                时间：8:00pm - 10:00pm （每周六）
                <br />
                活动：信息讲座，分享交流，团康活动
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