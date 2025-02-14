"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Signup() {
  const [year, setYear] = useState("");
    //testing

  return (
    <div className="min-h-screen flex px-4 md:px-auto items-center flex-col bg-white">
      <div className="flex items-center justify-between md:px-16 py-4 w-full ">
        <div className="">
          <img src="/logo.png" />
        </div>
        <Menu as="div" className="relative flex">
            <Menu.Button>
          <div className="flex items-center bg-[#F5F5F7] px-3 py-2 rounded-lg border border-gray-200">
            <img
              src="/user.png"
              alt="User"
              className="rounded-full w-10 h-10"
            />
            <div className="text-sm ml-2">
              <p className="font-semibold text-[#001857]">Alex Carry</p>
              <p className="text-gray-500 text-xs">AlexCarry@gmail.com</p>
            </div>
          </div>
            </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 top-3 z-10 mt-12 w-48 origin-top-right rounded-md bg-white py-1 drop-shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <a
                  href="/"
                  onClick={async () => {
                    // await signOut({ redirect: false, callbackUrl: "/" });
                  }}
                  className="text-gray-700 block px-4 py-2 text-sm"
                >
                  Sign out
                </a>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="bg-[#FEF6E4] flex flex-col my-10 border-2 border-[#FFCC65] items-center p-4 md:p-10 rounded-lg shadow-lg text-center w-full md:w-2/3">
        <div className="flex justify-center py-4 mb-4">
          <img src="/logo.png" className="" />
        </div>

        <h2 className="text-lg w-full md:w-1/2 font-semibold">
          Enter your first Dot! Watch your life unfold into a meaningful story,
          revealing patterns, milestones, and personal growth
        </h2>

        <p className="mt-4 text-sm py-4 font-semibold">
          Enter your date of birth
        </p>
        <div className="mt-3 flex justify-center items-center gap-3">
          <div className="flex text-xs flex-col items-start">
            <label className="text-sm text-gray-500">Year</label>
            <select
              className="border border-[#334679] px-3 py-2 rounded-md w-24"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value=""></option>
              {Array.from({ length: 10 }, (_, i) => 1997 + i).map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>
          <div className="flex text-xs flex-col items-start">
            <label className="text-sm text-gray-500">Month</label>
            <input
              type="text"
              placeholder="Month"
              className="border border-[#334679] px-3 py-2 rounded-md w-24"
            />
          </div>
          <div className="flex text-xs flex-col items-start">
            <label className="text-gray-500">Day</label>
            <input
              type="text"
              placeholder="Day"
              className="border border-[#334679] px-3 py-2 rounded-md w-24"
            />
          </div>
        </div>

        <button className="mt-6 bg-[#F692B9] w-1/2 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg">
          Next
        </button>

        <p className="mt-10 underline font-medium cursor-pointer">
          I'll do this later
        </p>
      </div>
    </div>
  );
}
