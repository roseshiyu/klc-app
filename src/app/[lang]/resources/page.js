// import { HoverEffect } from "../ui/card-hover-effect";

// export default function page() {
//   return (
//     <div className="max-w-5xl mx-auto px-8">
//       <HoverEffect items={[
//         {
//           title: "abcd",
//           description:
//             "A technology company that builds economic infrastructure for the internet.",
//           link: "https://stripe.com",
//         },
//         {
//           title: "Netflix",
//           description:
//             "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
//           link: "https://netflix.com",
//         },
//         {
//           title: "Google",
//           description:
//             "A multinational technology company that specializes in Internet-related services and products.",
//           link: "https://google.com",
//         },
//         {
//           title: "Meta",
//           description:
//             "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
//           link: "https://meta.com",
//         },
//         {
//           title: "Amazon",
//           description:
//             "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
//           link: "https://amazon.com",
//         },
//         {
//           title: "Microsoft",
//           description:
//             "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
//           link: "https://microsoft.com",
//         },
//       ]} />
//     </div>
//   );
// }

import { getDictionary } from '../dictionaries'

export default async function Page({ params: { lang } }) {
  // const dict = await getDictionary(lang) // en
  // return <button>{dict.products.cart}</button> // Add to Cart
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">此路不通</h1>
        <p className="mt-4 text-gray-500">【约翰福音14章6节】耶稣说：“我就是道路、真理、生命。若不是藉着我，没有人能到父那里去。</p>
        <a
          href="/"
          className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          回到神的家
        </a>
      </div>
    </div>
  )
}