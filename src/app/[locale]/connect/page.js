
export default async function Page({ params: { lang } }) {
  // const dict = await getDictionary(lang) // en
  // return <button>{dict.products.cart}</button> // Add to Cart
  return (
    <div className="mx-auto max-w-screen-xl py-32 sm:py-48 lg:py-56">
      <div className="bg-white text-[#333] p-8 font-[sans-serif]">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 justify-center items-center max-md:text-center gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">儿童乐园</h2>
            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
              <dl className="-my-3 divide-y divide-gray-100 text-sm">
                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Title</dt>
                  <dd className="text-gray-700 sm:col-span-2">Mr</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Name</dt>
                  <dd className="text-gray-700 sm:col-span-2">John Frusciante</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Occupation</dt>
                  <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Salary</dt>
                  <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Bio</dt>
                  <dd className="text-gray-700 sm:col-span-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                    doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                    aspernatur neque molestiae labore aliquam soluta architecto?
                  </dd>
                </div>
              </dl>
            </div>
            <button type="button"
              className="min-w-[160px] px-4 py-2 text-base tracking-wider font-semibold outline-none border border-[#333] hover:bg-[#222] hover:text-white transition-all duration-300">Try now</button>
          </div>
          <div className="md:text-right max-md:mt-12">
            <img src="https://readymadeui.com/photo.webp" alt="Premium Benefits" className="md:w-4/5 inline-block" />
          </div>
        </div>
      </div>
    </div>
    // <div className="grid h-screen place-content-center bg-white px-4">
    //   <div className="text-center">
    //     <h1 className="text-9xl font-black text-gray-200">此路不通</h1>
    //     <p className="mt-4 text-gray-500">【约翰福音14章6节】耶稣说：“我就是道路、真理、生命。若不是藉着我，没有人能到父那里去。</p>
    //     <a
    //       href="/"
    //       className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
    //     >
    //       回到神的家
    //     </a>
    //   </div>
    // </div>
  )
}