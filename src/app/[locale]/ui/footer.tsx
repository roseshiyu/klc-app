export const Footer = () => {
  return (
    <footer className="bg-neutral-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2">
          <div
            className="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16"
          >
            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden h-1 w-10 rounded bg-orange-500 lg:block"></span>

              <div>
                <h2 className="text-2xl font-medium text-gray-900">联系我们</h2>

                <p className="text-lg font-medium text-gray-900"></p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="flex-1 text-gray-700">klc@gmail.com</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 shrink-0 text-gray-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      <span className="flex-1 text-gray-700">03-87418959</span>
                    </a>
                  </li>

                  <li
                    className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <address className="-mt-0.5 flex-1 not-italic text-gray-700">
                      1, Jalan Muhibbah 3, Taman Muhibbah, 43000 Kajang, Selangor.
                    </address>

                  </li>
                </ul>
              </div>

              {/* <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only"> Email </label>

                <div
                  className="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                >
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="john@rhcp.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />

                  <button
                    className="mt-1 w-full rounded bg-teal-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0"
                  >
                    Sign Up
                  </button>
                </div>
              </form> */}
            </div>
          </div>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-medium text-gray-900">活动</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a className="text-gray-700 transition"> 少年军 </a>
                  </li>

                  <li>
                    <a className="text-gray-700 transition"> 陪读班 </a>
                  </li>

                  <li>
                    <a className="text-gray-700 transition"> 关怀 </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">团契</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a className="text-gray-700 transition "> 儿童乐园 （3-9岁）</a>
                  </li>

                  <li>
                    <a className="text-gray-700 transition "> 青青3（10-12岁） </a>
                  </li>

                  <li>
                    <a className="text-gray-700 transition "> 青青2（预备班-中三） </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition "> 青青1（中四-中六） </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition "> 爱加倍（高专-职青） </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition "> 伉俪 </a>
                  </li>
                  <li>
                    <a className="text-gray-700 transition "> 乐龄 </a>
                  </li>
                  {/* <li>
                    <a className="text-gray-700 transition hover:opacity-75"> 乐龄 </a>
                  </li> */}
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">资料</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a className="text-gray-700 transition"> 数码好消息 </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                </li>

                <li>
                  <a className="text-gray-500 transition hover:opacity-75"> Cookies </a>
                </li>
              </ul>

              <p className="mt-8 text-xs text-gray-500">&copy; 2024. KLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};