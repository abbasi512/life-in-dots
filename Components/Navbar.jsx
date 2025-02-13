"use client";

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "My Life in Dots", href: "/life" },
    { name: "My History", href: "/history" },
    { name: "My Journal", href: "/journal" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center md:px-20 px-4 py-4 bg-[#FFFFFF]">
        <div className="flex items-center space-x-6">
          <Link href="/">
            <img src="/star.svg" alt="star icon" width={24} height={24} />
          </Link>
          <div className="hidden md:flex text-[14px] text-[#001857] space-x-6">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`hover:font-semibold ${
                  pathname === item.href ? "font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-[#F5F5F7] px-3 py-2 rounded-lg border border-gray-200">
            <img
              src="/user.png"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="text-sm ml-2">
              <p className="font-semibold text-[#001857]">Alex Carry</p>
              <p className="text-gray-500 text-xs">AlexCarry@gmail.com</p>
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-[#001857]"
          >
            <i className="fi fi-rr-menu-burger text-2xl"></i>
          </button>
        </div>
      </nav>

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 md:hidden"
          onClose={() => setSidebarOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex w-64 flex-col justify-between bg-[#030A1A] text-white p-5">
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="text-white"
                  >
                    <i className="fi fi-rr-cross text-xl"></i>
                  </button>
                </div>

                <nav className="mt-8 space-y-4">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={`block px-4 py-2 rounded-lg transition-all ${
                        pathname === item.href
                          ? "bg-blue-600 text-white font-bold"
                          : "hover:bg-blue-500"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center bg-[#F5F5F7] px-3 py-2 rounded-lg border border-gray-200">
                  <img
                    src="/user.png"
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="text-sm ml-2">
                    <p className="font-semibold text-[#001857]">Alex Carry</p>
                    <p className="text-gray-500 text-xs">AlexCarry@gmail.com</p>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Navbar;
