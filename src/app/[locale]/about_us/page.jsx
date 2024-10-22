
"use client";
import { building } from '@/public';
import Image from "next/image";
export default function Page({ params: { lang } }) {
  // const dict = await getDictionary(lang) // en
  // return <button>{dict.products.cart}</button> // Add to Cart
  // const dict = await getDictionary(lang) // en
  // return <button>{dict.products.cart}</button> // Add to Cart
  return (
    <div className="bg-orange-300">
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
<Image
    alt="building"
    src={building}
    className="h-56 w-full object-cover sm:h-full"
  />
  <div className="my-auto max-w-xl p-4 sm:p-8 md:p-12 lg:px-16 lg:py-24">
    <div className=" text-left ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
      加影生命堂
      </h2>

      <p className=" text-gray-500 md:mt-4 ">
      我们是一间位于马来西亚雪兰莪州加影的基督徒教会，弟兄会背景的独立教会。野新福音堂差派亚绍兄夫妇创办此教会。
      </p>
      <table className="table-auto mt-4 md:mt-8">
                  <tbody>
                    <tr>
                      <td className="font-bold pr-12">主日崇拜</td>
                      <td>每周日，早上8点30 - 10点30</td>
                    </tr>
                    <tr>
                      <td className="font-bold"> 祷告会</td>
                      <td> 每周二，晚上8点 - 10点</td>
                    </tr>
                  </tbody>
                </table>
      {/* <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div> */}
    </div>
  </div>
</section>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-8 w-full">
        
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-orange-400 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            主日崇拜
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
            每周日，早上8点30 - 10点30
            </p>
          </div>
          <Image
            src={building}
            width={550}
            height={550}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>

        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-2xl">
            <h2 className="max-w-2xl md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 max-w-xl text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src={dgn_y1_04}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
      <div className="bg-orange-400 ">
        <div className="mx-auto max-w-screen-xl px-4 py-12 ">
          <div className="text-center text-xl font-bold flex justify-evenly ">
            <h2>历史走廊 - 神一直的带领</h2>
          </div>
        </div>
      </div>
      <div>
        <StickyScroll content={content} />
      </div> */}
            <div className="bg-orange-400 ">
        <div className="mx-auto max-w-screen-xl px-4 py-12 ">
          <div className="text-center text-4xl font-bold flex justify-evenly ">
            <h2>加影生命堂信仰</h2>
          </div>
        </div>
      </div>
      <div className="px-6">
      <div className="max-w-screen-2xl mx-auto antialiased py-4 relative">
        <div className="p-4 bg-gray-50 rounded-xl">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            {item?.badge && (
                 <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                 {item.badge}
               </h2>
              )}
           
 
            {/* <p className={twMerge(calsans.className, "text-xl mb-4")}> */}
            <p className="text-xl mb-4">
              {item.title}
            </p>
 
            <div className="text-base prose prose-sm dark:prose-invert">
              {item.description}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
    </div>
  )
}
const dummyContent = [
  {
    // title: "基本教义",
    description: (
      <>
        <p>
        1. 圣经，新旧约，是神的话，全部是神所默示、无误、完全，且是信仰和生活的最高权威（约10:35；提后3:15-17；彼后1:20-21；彼前1:10-12；诗 19:7-11）。

        </p>
        <br/>
        <p>
        2. 圣经启示三位一体的永活神，即圣父、圣子及圣灵（出 3:14；申6:4；太 28:19；约
8:58；创1:2，26；约1:1-2， 5:17-25，15:25-26，16:7，27；腓2:6；来1:1-3，8）
        </p>
        <br/>
        <p>
        3.这独一的真神有无限的知识、智慧、能力、圣洁、公平、良善、真理和爱，并是万物的创造及维持着（徒17:24-28；罗11:33-36；约壹1:5，4:8）。
        </p>
        <br/>
        <p>
4.主耶稣基督是神在肉身显现，是童女马利亚藉圣灵怀孕而生；他在本质上无罪，做人时也来曾犯过罪（太1:23；约1:14；提前 2:5；来 4:15；约壹 3:5；罗 8:3；加4:4；太1:20-25；路1:35；约1:14）。
        </p>
        <br/>
        <p>
5.主耶稣基督死是为我们的赎罪而献上给神的赎罪祭，被埋葬，第三天身体复活，后又升天坐在天父的右边。如今他是我们的大祭司，为我们祷告（林前 15:3-4；弗1:20；来
7:25，10:12；罗 4:25；林后 5:21；来 9:24-28；太 28:5-7；可 16:19-20；路 24:50-51；徒1:9；弗4:8-10；来7:13-14）。
        </p>
        <br/>
        <p>
6. 主耶稣基督将要亲自再降临来接属他的人到他那里去，然后他要在地上设立他的国度。
主必再来，主再来的日子无人知道（约14:3；林前 15:23；帖前 4:13-18；启 19:11-16；路1:32-33；赛9:6-7；但 2:44-45，7:13-14；太 24:36）。
        </p>
        <br/>
        <p>
7.死人都要复活，得救者要复活享用永生，犯罪者复活受审判进入永刑；两者都是永恒的（太25：46；约3:16；徒24:15；帖后 1：8-9；林前 15:51-57；林后 5:10）。
        </p>
        <br/>
        <p>
8. 人都是罪人。并且堕落，他在本质上有罪，而且也自选犯罪，不能自救（约3:19；罗3:9-23)
        </p>
        <br/>
        <p>
9.救恩是凭神白白的恩典，不是靠人自己的功德来赚取；这救恩是藉着基督的宝血，而且是因着信靠主耶稣而得着（罗3:22，5:9；弗2:8；彼前 1:19）。
        </p>
        <br/>
        <p>
10.只有重生的人才能进神的国；重生是圣灵的工作，发生在当我们接受神的话，并主耶稣基督为我们的救主、生命的主宰（约3:3-6；多 3:5-7；彼前 1:23）。
        </p>
        <br/>
        <p>
11.凡悔改并相信基督福音的，罪恶得到赦免、被赎、在神完全的被称义；在神面前称义的罪人是单单靠信靠主基督（路 24:47；徒 13:38-39，20:21；罗 3:21-26，4:4-5，5:1；
弗1:7；西1:14；加2:16）。
        </p>
        <br/>
        <p>
12.每一位信徒的得救都是永恒的，圣灵的内住成为他得基业的凭据，并且赐给他能过一个负责任和讨神喜悦的生活与事奉。他必要熟悉神的教训且将基督的话丰丰富富的藏在心中（约10:28-29，15:7，16:4，15；加5:22-23；弗 1:13-14，4:30，6:17；西 3:16；
彼后1:14-17，2:1-2）。
        </p>
        <br/>
        <p>
13.基督在称他为主的信徒身上的要求，或权利是他得全人、身体、灵魂，他的恩赐或才干，他的时间、金钱或财产，他身体的各部分（约13:14，20:18；徒 10:48；林前
7:39，12:3；林后 4:5，10:5；帖前 5:23；弗4:5；彼前 3:15）
        </p>
        <br/>
        <p>
14.一个人悔改信靠主耶稣，他便接受了圣灵的洗，归入了基督的身体一教会（林前 12:12-13；弗1:22-23，4:4）。
        </p>
        <br/>
        <p>
15.神以他的主权和美德拣选人，但人必须向神负责，并且福音的信息是给‘凡愿意的，（约3:16；罗8:28-30，9:14-23；彼前1:2）。
        </p>
        <br/>
        <p>
16.基督徒不属世界，他们是天国的公民，但是他们必须服从法定的权柄，并且向人行善（约17:14；徒5:29；加6:10；腓3:20；彼前 2:13-14）。
        </p>
        <br/>
        <p>
17.圣经教导魔鬼，或称撒旦的个性、能力、恶意和最后的结局（伯1:6-12；太 25:1；约
8:44；弗6:11-12；犹9；启 20:10）。
        </p>
       
      </>
    ),
    badge: "I 基本教义",
    // image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "1. 地方教会的根基",
    description: (
      <>
        <p>
        （a）主耶稣基督是唯一和足够建立地方教会及其见证的根基（林前 3:10-11）
        </p>
        <br/>
        <p>
        （b）地方教会只在耶稣基督的名下聚集，以他为主；进而体会他的同在（太18:20；林前5:4-5）。因此，教会是基督的身体，只有一个头一主耶稣基督；每位重生得救的基督徒是这身体的肢体。
        </p>
      </>
    ),
    badge: "II 地方教会的原则和实际行为",
  },  
  {
    title: "2. 地方教会的能力",
    description: (
      <>
        <p>
        （a）祷告对个别信徒及地方教会的生活、事奉和见证是很重要的（太18:19；路 18:1；徒
2:42,4:31，12:5；帖前 5:17；提前 2:1-2）。
        </p>
      </>
    ),
  },
  {
    title: "3. 地方教会的团契",
    description: (
      <>
        <p>
        （a）地方教会的团契限制于重生的信徒（徒2:47；罗16:16；林前 11:16，
14:33；林后 6:14；约壹1:3，T）。提前牵涉到责任及接受地方教会的纪律（太18:15-20）。
        </p>
        <br/>
        <p>
        （b）主的子民应有的名称该是那些专属及平等的包含所有神的子民；例如，信徒、弟兄、基督徒、圣徒（太23:8-10；徒 11:26；腓1:1；提前 4:12；来3:1）。
        </p>
      </>
    ),
  },
  {
    title: "4. 主的条例",
    description: (
      <>
        <p>
        （a）主的晚餐，为着纪念耶稣基督并宣布他的死、埋葬与复活，到主再来是每个主日聚会聚集时所实行的（路 22:19；徒20:7；林前 11:23-24）。这个聚会没有主席或预定的节目，它的特性是在圣灵引导之下，弟兄们自由的公开带领，并且信徒私下的或公开的履行祭司制度（林前 12:8-11，14:26-35；彼前 2:5，9）、。这样，教会承认基督的主权及圣灵在带领、引导、敬拜和话语执事上有统治权。

        </p>
        <br/>
        <p>
        （b）只为信徒施浸，归入主的死、埋葬和复活，表明神对我们的审判，是以浸入水中的方式（新约所正规的方式），而且接受浸礼的信徒藉此表明他们愿意一举一动有新生的样式；所有的信徒该如此地接受浸礼（太 28:18-20；可16:16；路 7:29-30；徒2:41，8:36-38，19:15,2:16；罗6:1-14）
        </p>
      </>
    ),
  },
  {
    title: "5.地方教会的领导层",
    description: (
      <>
        <p>
        （a）地方教会的照顾是具备圣经所列出的资格的长老/监督的贵任，圣灵所立、信徒所认知的（徒 20:28；帖前 5:12-13；提前 3:1-7；多1:5-9；来 13:7，17，24；彼前5:14；徒14:23；约21:16）。
地方教会是由多数的长老管理；其权柄是由复活的头一耶稣基督所分给，可以履行领导及纪律的工作。
长老是圣灵所立的（徒20:28），他们不是自立或被选的，却是地方教会所认知适合担任这个职分（帖前 5:12-13）。

        </p>
        <br/>
        <p>
        （b）执事或女执事是众长老所立的，他们的范围是关心物质、财务、行政或各种教会的
实际需要（提前3:8-13；徒6:3；腓1:12；罗 16:1）。
因此，可以这么说，长老们关心教会属灵之事，而执事们的范围却是每日教会的事务及实际问题。
        </p>
        <br/>
        <p>
        （c）主工人（专职）该清楚神的呼召、印证、并得教会的认同，主工人可以靠福音养生，但该具有保罗事主精神，且该专心以祈祷传道为事（罗1:1；林前9章；徒6:4）。
        </p>
      </>
    ),
  },
  {
    title: "6. 地方教会的恩赐",
    description: (
      <>
        <p>
        （a）虽每位教会信徒都被赋子一种恩赐，但也有些信徒会有更多的恩赐。这恩赐是为了成全圣徒在事奉主方面，建立基督的身体（林前 12:7；弗4:12；林后 5:10；腓2:3-4）。
        </p>
        <br/>
        <p>
        （b） 接受以下属灵恩赐仍然适合这个时代：先知（造就、教导、安慰、劝勉）、牧养、教导知识和智慧，分享、帮助、传道、接待、信心、代祷、宣教、领导、行政、怜悯及服待（罗12:6-13；林前 12:8-10；弗 4:14；彼前 4:10-11；提前 4:13；约查
4:1-6；林前 2:1-13；雅1:5-6；提后 1:16-18；提前 3:1-7；彼前 5:11；林前
12:28；提前 4:5；雅5:14-16）。
        </p>
        <br/>
        <p>
        （c）新约的牧者和教师是神所预备，为了要调整及成全圣徒，使他们专心事奉，建立基
        督的身体（林前 14:31；弗 4:7-14；多1:1-11；彼前4:10）
        </p>
      </>
    ),
  },
  {
    title: "7. 信徒的责任",
    description: (
      <>
        <p>
        （a）每个地方教会，虽认知信徒是灵里合一的，但是直接对主自己负责（罗12:5；启
        1:2，2:14，3:7-14，19-22）。
        </p>
        <br/>
        <p>
        （b）虽然有一些信徒被主呼召做传道，但所有的基督徒对传福音的工作应该有份，且负责，活跃的把福音介绍给人（太 28:18-20；可16:15-16；徒8:1，4；罗 1:5，16；
        林后 4:3-4；腓1:5-27；帖前1:5；提后4:5）。
        </p>
        <br/>
        <p>
        （c）信徒应在爱中持守真理，向信徒、非信徒也一样表达爱及牺牲的服事（约13:34-
        35；林前 13:1-13，16:4；弗4:16；来10:24）。
        </p>
        <br/>
        <p>
        （d）信徒应该遗过习惯性、经常、乐意牺牲的奉献来支持神的工作（林前 16:1-2；林后
        8:5，12，9:7-13；腓4:18；约17章）。
        </p>
        <br/>
        <p>
        （e）信徒不该懒情或不结果，当常常多做主工；对自己所教所传以及事奉的责任需谨慎
        （林前 15:58；提前 4:16；彼后1:8）。
        </p>
        <br/>
        <p>
        （f）基督徒妇女时教会的贡献非常大，有极大的价值。若没有妇女的配搭，教会与教会的事工就会打折扣。虽妇女可在教会有各种的事奉，但在新约却不允许妇女教导或辖管男人（路8:3；徒9:46；罗18:1-2：林前 14:34-35；腓4:2-3；提前2:9-12；
        $ 2:3-4）。
        </p>
        <br/>
        <p>
        （g）在教会的聚会，姐妹要蒙头表示接受神在地方教会所定的次序（林前 11:1-16）。
        </p>
      </>
    ),
  },
  {
    title: "8. 信徒皆祭司",
    description: (
      <>
        <p>
        （a）每位信徒是圣洁的祭司，并且是宣扬基督的君尊祭司（彼前 2:5-9）。
        </p>
        <br/>
        <p>
        （b）既因凡在新约意指“基督徒是祭司”，通常是指全教会，而不是教会中的特别“小圈子”、本教会绝不承认一种祭司阶级。全民都是祭司，这观念完全否定把信徒分成“平信徒”和圣职人员。
        </p>
        <br/>
      </>
    ),
  },
];

const content = [
  {
    title: "我们的开始",
    description:
      "2012年，我们。。。。.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];