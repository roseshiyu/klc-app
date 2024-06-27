"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { useEffect, useState } from "react";
import Script from "next/script";
import { building, whatsApp } from '../../../public';
import Image from "next/image";


const words = [
  "【诗篇 95:1】来啊，我们要向耶和华歌唱，向拯救我们的磐石欢呼。",
  "【诗篇 95:6 - 7】来啊，我们要屈身敬拜，在造我们的耶和华面前跪下。 因为他是我们的神；我们是他草场的羊，是他手下的民。惟愿你们今天听他的话。",
  "【诗篇 66:4】全地要敬拜你，歌颂你，要歌颂你的名。 （细拉）",
  "【约翰福音 4:24】主啊，你所造的万民都要来敬拜你；他们也要荣耀你的名。",
  " 【以弗所书 5:19】当用诗章、颂词、灵歌、彼此对说，口唱心和的赞美主。",
];


export default function Example() {
  const [age, setAge] = useState(0);
  const [word, setWord] = useState(words[age]);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const randomAge = Math.floor(Math.random() * 5);
    setAge(randomAge);
    setWord(words[randomAge]);
  }, [words]);

  const handleCopy = () => {
    navigator.clipboard.writeText(word).then(() => {
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000); // Hide the success message after 2 seconds
    })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="bg-orange-300">
      <section
        className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-bottom"
      >
        <div className='bg-black/65'>
          <div className="mx-auto max-w-screen-xl py-24 sm:py-40 lg:py-56">
            <div className="text-center grid grid-cols-1 gap-12">
              <h2 className="text-2xl font-bold text-gray-100 sm:text-3xl md:text-6xl">欢迎来到
                <span className="text-orange-600">加影生命堂</span>
              </h2>
              <h2 className="text-2xl font-bold text-gray-100 ">
                【约十10】「我来了，是要叫羊(或作人)
                <span className="text-orange-600">得生命</span>， 并且
                <span className="text-orange-600">得的更丰盛</span>
                。」
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-neutral-50 border-b-4 border-black/65">
          <div className="mx-auto max-w-screen-xl px-4 py-12 ">
            <div className="text-center text-xl font-bold flex justify-evenly ">
              <h2>仁爱</h2>
              <h2>喜乐</h2>
              <h2>和平</h2>
              <h2>忍耐</h2>
              <h2>恩慈</h2>
              <h2>良善</h2>
              <h2>信实</h2>
              <h2>温柔</h2>
              <h2>节制</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-auto lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <Image src={building} alt="Kajang Life Chapel Building" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span
                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
              ></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  加影生命堂
                </h2>

                <p className="mt-4 text-gray-600">
                  我们是一间位于马来西亚雪兰莪州加影的基督徒教会，弟兄会背景的独立教会。野新福音堂差派亚绍兄夫妇创办此教会。
                </p>
                <br />
                <table className="table-auto">
                  <tbody>
                    <tr>
                      <td className="font-bold">主日崇拜</td>
                      <td>每周日，早上8点30 - 10点30</td>
                    </tr>
                    <tr>
                      <td className="font-bold"> 祷告会</td>
                      <td> 每周二，晚上8点 - 10点</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <p className="text-gray-600 hover:text-gray-950">
                  {/* {words[1]} */}
                  {words[age]}
                </p>
                {/* {copySuccess && (
                    <p className="mt-4 text-green-500">Text copied to clipboard!</p>
                  )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="relative isolate px-6 pt-14 lg:px-8">

        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-screen-xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              欢迎来到我们的网页.{' '}
              <a href="#" className="font-semibold text-black">
                <span className="absolute inset-0" aria-hidden="true" />
                了解更多吧 <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              加影生命堂
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              【约十10】「我来了，是要叫羊(或作人)得生命，并且得的
              <span className="inset-0 text-red-500" aria-hidden="true" >
                更丰盛。」</span>
            </p>
            <HeroHighlight>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-1xl px-4 md:text-1xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
              >
                【约十10】「我来了，是要叫羊(或作人)得生命，
                <Highlight className="text-black dark:text-white">
                  并且得的更丰盛
                </Highlight>
                。」
              </motion.h1>
            </HeroHighlight> */}
      {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
      {/* </div>
        </div>
      </div> */}
      {/* <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div> */}
    </div>
  )
}