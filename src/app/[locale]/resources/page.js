import {
  IconBoxAlignRightFilled,
  IconFileBroken
} from "@tabler/icons-react";
import Image from 'next/image';
import { dgn_y1_01, dgn_y1_02, dgn_y1_03, dgn_y1_04, dgn_y1_05, dgn_y1_06, dgn_y1_07_1, dgn_y1_07_2, dgn_y1_08, dgn_y1_09_1, dgn_y1_09_2, dgn_y1_10, dgn_y1_11, dgn_y1_12, dgn_y1_i } from '../../../../public';
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

export default async function Page({ params: { lang } }) {
  return (

    <div className="bg-orange-200">
            <section className="overflow-hidden bg-[url('../../../public/images/building.png')] bg-cover bg-no-repeat bg-center">
        <div className='bg-black/50'>
          <div className="mx-auto max-w-screen-xl py-24 sm:py-40 lg:py-56">
            <div className="text-center grid grid-cols-1 gap-12">
              <h2 className="text-2xl font-bold text-gray-100 sm:text-3xl md:text-6xl">
                数码<span className="text-orange-600">好消息</span>
              </h2>
              <h2 className="text-2xl font-bold text-gray-100 ">
                【马太廿四14上】这天国的福音要
                <span className="text-orange-600">传遍天下</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="p-8">
        {/* <div className="my-8 text-center">
          <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
            <button
              className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
            >
              第一年
            </button>

            <button
              className="inline-block rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
            >
              第二年
            </button>

            <button
              className="inline-block rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative"
            >
              第三年
            </button>
          </div>
        </div> */}
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              // className={i === 3 || i === 6 || i === 10 || i === 13 ? "md:col-span-1" : ""}
              link={item.link}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}

const ImageBanner = ({ image }) => (
  <Image src={image} className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover" alt='image' />
);

const items = [
  {
    title: "好消息 1 - 平安何处寻",
    description: "2020年是历史上难以磨灭的一年。对很多人来说，2020年不仅看不见任何宏景。。。",
    header: <ImageBanner image={dgn_y1_01} />
    ,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/rewk/"
  },
  {
    title: "好消息 2 - 末日",
    description: "疫情日趋严重，导致人心惶惶。截至2021年7月9日，马来西亚新增确诊病例。。。                                                  ",
    header: <ImageBanner image={dgn_y1_02} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/vcml/"
  },
  {
    title: "好消息 3 - 穆斯林与犹太人的冲突",
    description: "穆斯林和犹太人的冲突。大家好，我是位于耶路撒冷的。。。",
    header: <ImageBanner image={dgn_y1_03} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/hkgg/"

  },
  {
    title: "好消息 4 - 一本奇妙的书",
    description: "亲爱的朋友们，您是否曾阅读这样的一本书。。。",
    header: <ImageBanner image={dgn_y1_04} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/pgpv/"
  },
  {
    title: "好消息 5 - 谁知晓明日",
    description: "你是否曾想过，死后，我们将会去哪里呢。我们的生命分。。。",
    header: <ImageBanner image={dgn_y1_05} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/qeej/"
  },
  {
    title: "好消息 6 - 因为爱",
    description: "若您被人诬赖，被法官判死刑。在临死的那一刻您会说什么。。。",
    header: <ImageBanner image={dgn_y1_06} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/orsq/"
  },
  {
    title: "好消息 7（上）- 神州古人的信仰",
    description: "身为华人的我们，您是否了解中华文化信仰起源？",
    header: <ImageBanner image={dgn_y1_07_1} />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/nmgl/"
  },
  {
    title: "好消息 7（下）- 神州古人的信仰",
    description: "文字里往往蕴藏着造字者索要表达的一些重大事物。。。",
    header: <ImageBanner image={dgn_y1_07_2} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/bfpf/"
  },
  {
    title: "好消息 8  - 从犹太人的历史。。。",
    description: "一个民族的历史给于人类重大的启示到底是什么。。。",
    header: <ImageBanner image={dgn_y1_08} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/qkqu/"
  },
  {
    title: "圣诞好消息特刊",
    description: "12月是耶稣基督的诞生月。商家早已预备好，要趁这季节。。。",
    header: <ImageBanner image={dgn_y1_i} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/rilg/"
  },
  {
    title: "好消息9（上）- 您岂能说没有上帝",
    description: "科学家普遍认为宇宙是源于《大爆炸理论》。。。",
    header: <ImageBanner image={dgn_y1_09_1} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/aprx/"
  },
  {
    title: "好消息9（下）- 您岂能说没有上帝",
    description: "宇宙的浩瀚让我们叹为观止，但它并不是神创造的巅峰。。。",
    header: <ImageBanner image={dgn_y1_09_2} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/pxsd/"
  },
  {
    title: "好消息 10 - 与上帝和好",
    description: "宗教就是人所相信，所膜拜的；是地方性的，或国际性的。。。",
    header: <ImageBanner image={dgn_y1_10} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/diqp/"
  },
  {
    title: "好消息 11 - 5W1H",
    description: "近几年灾难连连，大家的生活都受了极大的影响。。。",
    header: <ImageBanner image={dgn_y1_11} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/hhhy/"
  },
  {
    title: "好消息 12 - 大结局",
    description: "任何一出戏都会有开始和结束。许多时候，结局就如我们预测的一样。。。",
    header: <ImageBanner image={dgn_y1_12} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://anyflip.com/qvwmh/bgkx/"
  },
];