"use client";
import { useState, ChangeEvent, useTransition } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export const Header = () => {
  // const params = useParams<{ lang: string }>()
  // console.log(params.lang);
  // const [lang, setLang] = useState(false)
  const localActive = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const locale = 'cn'
  const navigation = [
    { name: '主页', href: `/${localActive}/` },
    { name: '关于我们', href: `/${localActive}/about_us` },
    { name: '活动与团契', href: `/${localActive}/connect` },
    { name: '资料', href: `/${localActive}/resources` },
  ]
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const onSelectChange = (locale : string) => {
    const nextLocale = locale;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <header className="inset-x-0 top-0 z-50">
      <nav className="bg-neutral-50 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://www.facebook.com/profile.php?id=100089516345126"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Kajang Life Chapel
            </span>
          </a>

          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse z-50 ">
            <div className="relative inline-block text-left">
              <div onClick={toggleDropdown} className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50
                dark:text-white cursor-pointer dark:hover:bg-gray-700 dark:hover:text-white">
                <svg
                  className="h-3.5 w-3.5 rounded-full me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  id="flag-icon-css-cn"
                  viewBox="0 0 512 512"
                >
                  <defs>
                    <path
                      id="a"
                      fill="#ffde00"
                      d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                    />
                  </defs>
                  <path fill="#de2910" d="M0 0h512v512H0z" />
                  <use
                    width={30}
                    height={20}
                    transform="matrix(76.8 0 0 76.8 128 128)"
                    xlinkHref="#a"
                  />
                  <use
                    width={30}
                    height={20}
                    transform="rotate(-121 142.6 -47) scale(25.5827)"
                    xlinkHref="#a"
                  />
                  <use
                    width={30}
                    height={20}
                    transform="rotate(-98.1 198 -82) scale(25.6)"
                    xlinkHref="#a"
                  />
                  <use
                    width={30}
                    height={20}
                    transform="rotate(-74 272.4 -114) scale(25.6137)"
                    xlinkHref="#a"
                  />
                  <use
                    width={30}
                    height={20}
                    transform="matrix(16 -19.968 19.968 16 256 230.4)"
                    xlinkHref="#a"
                  />
                </svg>
                中文 (简体)
                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              {isOpen && (<div
                className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                role="menu"
              >
                <ul className="py-1">
                  <li
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    onClick={() => onSelectChange('en')}
                  >
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd">
                          <g strokeWidth="1pt">
                            <path
                              fill="#bd3d44"
                              d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                          </g>
                          <path
                            fill="#192f5d"
                            d="M0 0h98.8v70H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                            transform="scale(3.9385)"
                          />
                        </g>
                      </svg>
                      English (US)
                      <option value='en'></option>
                    </div>
                  </li>
                  <li
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                    onClick={() => onSelectChange('cn')}
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-3.5 w-3.5 rounded-full me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="flag-icon-css-cn"
                        viewBox="0 0 512 512"
                      >
                        <defs>
                          <path
                            id="a"
                            fill="#ffde00"
                            d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                          />
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z" />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(76.8 0 0 76.8 128 128)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-121 142.6 -47) scale(25.5827)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-98.1 198 -82) scale(25.6)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-74 272.4 -114) scale(25.6137)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(16 -19.968 19.968 16 256 230.4)"
                          xlinkHref="#a"
                        />
                      </svg>
                      中文 (简体)
                    </div>
                  </li>
                </ul>
              </div>
              )}
            </div>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-50 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div >
      </nav >
    </header >
  );
};