"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 md:px-16 py-4">
        <div className="flex font-medium md:text-base text-xs items-center space-x-2 md:space-x-10">
        <img src="/logo.png" className="md:w-auto mr-2 w-6" />
        <span className="font-medium">Home</span>
        <span className="">About Us</span>
        <span className="">Contact</span>
        </div>
        
        <button onClick={()=>router.push("/signin")} className="bg-[#FFB74D] border border-[#334679] px-3 py-2 md:px-6 md:py-3 rounded-md font-medium">
          Sign in
        </button>
      </div>

      <div className="flex flex-col md:flex-row pl-4 md:pl-16 overflow-hidden pt-0 md:pt-20 pb-20 md:pb-auto gap-20">
        <div className="w-full md:w-2/3 pt-6">
          <h1 className="text-3xl md:text-5xl drop-shadow-md font-extrabold ">
            Record your days, reflect on your journey, and see the bigger
            picture —
          </h1>
          <h1 className="text-3xl md:text-5xl drop-shadow-md font-extrabold">
            one dot at a time.
          </h1>
          <p className="text-gray-600 mt-10 text-sm">
            Capture the essence of each day with a simple dot entry. Over time,
            watch your life unfold into a meaningful story, revealing patterns,
            milestones, and personal growth.
          </p>
          <button className="mt-10 bg-[#F692B8] px-6 py-3 font-semibold rounded-lg">
            Join Now
          </button>
        </div>

        {/* Right Section - Shifted Container */}
        <div className="relative border border-gray-900 bg-white p-6 rounded-md w-auto md:w-[50%] translate-x-[20%] ">
          {/* Grid Inside */}
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`w-16 h-16 rounded-full ${
                  i === 0 ? "bg-[#64D0FF]" : "bg-[#FFB74D] border border-gray-900"
                }`}
              ></div>
            ))}
          </div>

          {/* Popup Card */}
          <div className="absolute -left-10 top-24 bg-white shadow-lg rounded-lg p-4 border border-blue-400 w-80">
            <h3 className="font-semibold text-lg">Add new</h3>
            <div className="mt-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E73FF9]"></div>
              <div>
                <h4 className="font-medium ">Residence</h4>
                <p className="text-gray-500 text-xs">Getting a new home :</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-3 bg-gray-100 border border-[#334679] px-3 py-2 rounded-md text-sm">
              <img src="/calender.png" />
              <span className="text-gray-400">Week 1:{" "}</span>
              
              <span className="font-semibold text-xs">
                2000/01/01 - 2000/01/07
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
