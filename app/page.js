"use client"
import localFont from "next/font/local";
import { useState } from "react";
import { useRouter } from 'next/navigation'

const poppins1 = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 200 400 500 700 900",
});

const poppins2 = localFont({
  src: "./fonts/Poppins-SemiBold.ttf",
  variable: "--font-poppins",
  weight: "100 200 400 500 700 900",
});

const poppins3 = localFont({
  src: "./fonts/Poppins-Bold.ttf",
  variable: "--font-poppins",
  weight: "100 200 400 500 700 900",
});

const poppins4 = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins",
  weight: "100 200 400 500 700 900",
});

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")


  const createTree = () => {

    router.push(`/generate?handle=${text}`)
  }


  return (
    <main>
      <section className="bg-green-700 min-h-[125vh] grid grid-cols-2">
        <div className="flex flex-col justify-center ml-[10vw] gap-2">
          <p className={`text-yellow-400 text-7xl ${poppins1.className}`}>Everything you</p>
          <p className={`text-yellow-400 text-7xl ${poppins1.className}`}>are. In one,</p>
          <p className={`text-yellow-400 text-7xl ${poppins1.className}`}>simple link in bio.</p>
          <p className={`text-yellow-400 text-xl my-4 ${poppins4.className}`}>Join 50M+ people using Linktree for their link in bio.
            One link to help you share everything you create, curate and sell from your Instagram,
            TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-3">
            <input value={text} onChange={(e) => setText(e.target.value)} className={`rounded-lg p-4 px-5 focus:outline-green-800 text-lg ${poppins2.className}`} type="text" placeholder="Enter your Handle" />
            <button onClick={() => { createTree() }} className={`bg-purple-400 hover:bg-purple-300 text-xl cursor-pointer font-medium rounded-full p-4 px-5 ${poppins2.className}`}>Claim your Bittree</button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mr-[10vw]">
          <img src="/section/section1.png" alt="home1" />
        </div>
      </section>
      <section className="bg-[#E9C0E9] min-h-[100vh] grid grid-cols-2">
        <div className="flex flex-col justify-center items-center mr-[5vw] px-12">
          <img src="/section/section2.png" alt="home" />
        </div>
        <div className="flex flex-col justify-center mr-[10vw] gap-2">
          <p className={`text-purple-900 text-7xl ${poppins1.className}`}>Create and customize</p>
          <p className={`text-purple-900 text-7xl ${poppins1.className}`}>your Linktree in</p>
          <p className={`text-purple-900 text-7xl ${poppins1.className}`}>minutes</p>
          <p className={`text-purple-900 text-xl my-4 ${poppins4.className}`}>Connect your TikTok, Instagram, Twitter, website,
            store, videos, music, podcast, events and more. It all comes together in a link in bio landing page
            designed to convert.</p>
          <div className="input flex gap-3">
            <button onClick={() => { createTree() }} className={`bg-purple-900 hover:bg-purple-800 text-lg text-white cursor-pointer rounded-full p-4 px-5 ${poppins4.className}`}>Get started for free</button>
          </div>
        </div>
      </section>
      <section className="bg-[#780016] min-h-[120vh] grid grid-cols-2">
        <div className="flex flex-col justify-center ml-[10vw] gap-2">
          <p className={`text-[#E9C0E9] text-6xl ${poppins1.className}`}>Share your Linktree</p>
          <p className={`text-[#E9C0E9] text-6xl ${poppins1.className}`}>from your Instagram,</p>
          <p className={`text-[#E9C0E9] text-6xl ${poppins1.className}`}>TikTok, Twitter and</p>
          <p className={`text-[#E9C0E9] text-6xl ${poppins1.className}`}>other bios</p>
          <p className={`text-[#E9C0E9] text-xl my-10 ${poppins4.className}`}>Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.</p>
          <div className="input flex gap-5">
            <button onClick={() => { createTree() }} className={`bg-purple-300 hover:bg-purple-800 text-xl text-slate-800 cursor-pointer rounded-full p-4 px-10 ${poppins4.className}`}>Get started for free</button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mr-[10vw]">
          <img src="/section/section3.png" alt="home1" />
        </div>
      </section>
      <section className="bg-gray-100 min-h-[125vh] grid grid-cols-2">
        <div className="flex flex-col justify-center items-center mr-[10vw]">
          <img src="/section/section4.png" alt="home1" />
        </div>
        <div className="flex flex-col justify-center mr-[10vw] gap-2">
          <p className={`text-slate-800 text-6xl ${poppins1.className}`}>Analyze your</p>
          <p className={`text-slate-800 text-6xl ${poppins1.className}`}>audience and keep</p>
          <p className={`text-slate-800 text-6xl ${poppins1.className}`}>your followers</p>
          <p className={`text-slate-800 text-6xl ${poppins1.className}`}>engaged</p>
          <p className={`text-slate-800 text-lg my-10 ${poppins4.className}`}>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
          <div className="input flex gap-5">
            <button onClick={() => { createTree() }} className={`bg-purple-300 hover:bg-purple-300 text-xl text-slate-800 cursor-pointer rounded-full p-4 px-5 ${poppins4.className}`}>Get started for free</button>
          </div>
        </div>
      </section>
      <section className="bg-purple-950 min-h-[90vh] flex flex-col items-center p-40">
        <div className={`flex p-10`}>
          <h2 className={`text-[#E9C0E9] text-4xl ${poppins1.className}`}>Jumpstart your corner of the internet today</h2>
        </div>
        <div className="flex gap-5 p-5">
          <input value={text} onChange={(e) => setText(e.target.value)} className={`rounded-lg p-5 px-5 focus:outline-green-800 text-xl ${poppins4.className}`} type="text" placeholder="linktr.ee/yourname" />
          <button onClick={() => { createTree() }} className={`bg-[#D2E823] hover:bg-lime-400 text-xl cursor-pointer rounded-full p-5 px-7 ${poppins4.className}`}>Claim your Bittree</button>
        </div>
        <div className="flex rounded-3xl p-24">
        <div className="flex rounded-3xl bg-[#E9C0E9] p-24">
          <svg className="h-32" viewBox="0 0 1176 238" title="Linktree Logo" xmlns="http://www.w3.org/2000/svg"><path d="M0 25.5326H33.7257V202.802H127.205V233.988H0V25.5326ZM160.564 25.5326C172.111 25.5326 181.642 34.469 181.642 45.9586C181.642 57.6307 172.111 66.9318 160.564 66.9318C148.833 66.9318 139.485 57.6307 139.485 45.9586C139.485 34.469 148.833 25.5326 160.564 25.5326ZM144.067 83.7103H176.51V233.988H144.067V83.7103ZM195.572 83.7103H228.015V104.501C237.546 88.6345 254.042 79.6981 275.854 79.6981C311.046 79.6981 333.041 107.054 333.041 150.46V233.988H300.598V153.378C300.598 125.292 288.318 109.425 265.956 109.425C241.579 109.425 228.015 126.021 228.015 156.113V233.988H195.572V83.7103ZM350.087 25.5326H382.53V157.39L443.016 83.8927H483.707L419.188 159.031L483.707 233.988H443.016L382.53 160.673V233.988H350.087V25.5326ZM496.354 45.4114H529.347V83.7103H567.838V110.519H529.347V187.847C529.347 197.695 535.395 203.713 544.743 203.713H566.372V233.988H540.344C512.117 233.988 496.354 217.392 496.354 187.847V45.4114ZM584.5 83.7103H614.577V102.313C622.642 88.0873 636.022 79.6981 652.519 79.6981C657.468 79.6981 660.217 79.8805 663.883 81.1571V111.249C661.683 110.702 658.384 110.155 651.786 110.155C627.958 110.155 614.761 130.034 614.761 164.503V233.988H582.318V83.7103H584.5ZM739.582 79.6981C775.324 79.6981 813.999 101.218 813.999 162.314V166.691H697.792C700.358 193.5 715.938 208.273 741.965 208.273C760.661 208.273 776.607 198.242 780.09 184.199H813.082C809.783 214.291 778.44 238 741.965 238C695.226 238 665.899 207.726 665.899 158.667C665.899 115.261 694.309 79.6981 739.582 79.6981ZM779.54 139.882C774.958 121.28 760.294 109.608 739.766 109.608C719.97 109.608 706.04 121.644 700.541 139.882H779.54ZM902.162 79.6981C937.904 79.6981 976.578 101.218 976.578 162.314V166.691H860.372C862.938 193.5 878.517 208.273 904.545 208.273C923.241 208.273 939.187 198.242 942.669 184.199H975.662C972.363 214.291 941.02 238 904.545 238C857.805 238 828.479 207.726 828.479 158.667C828.479 115.261 856.706 79.6981 902.162 79.6981ZM941.936 139.882C937.354 121.28 922.691 109.608 901.979 109.608C882.183 109.608 868.253 121.644 862.754 139.882H941.936ZM984.643 79.1509H1042.56L1001.32 40.1226L1024.05 16.9609L1063.28 57.0835V0H1097.37V57.0835L1136.59 16.9609L1159.32 40.1226L1118.08 79.1509H1176V111.431H1117.71L1159.14 151.554L1136.41 174.169L1080.14 117.815L1023.87 174.169L1001.14 151.554L1042.56 111.431H984.277V79.1509H984.643ZM1063.46 157.572H1097.55V234.17H1063.46V157.572Z"></path></svg>
        </div>
        </div>
        <div className="flex justify-center items-center gap-5 p-20">
          <p className={`flex justify-center items-center text-[#E9C0E9] text-xl w-[80vw] px-2 ${poppins4.className}`}>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066</p>
        </div>
      </section>
    </main>
  );
}


