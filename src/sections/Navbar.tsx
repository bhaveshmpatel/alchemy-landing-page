"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const NavButtons: IButton[] = [
    {
      title: "Platform",
    },
    {
      title: "Developers",
    },
    {
      title: "Solutions",
    },
    {
      title: "Company",
    },
  ];
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between w-full t-0 bg-white border-b border-gray-100 xl-backdrop-blur-md">
        <div className="relative z-30 mx-auto flex w-full flex-row items-center justify-between px-6 py-4 backdrop-blur-md md:px-12 xl:max-w-6xl xl:bg-transparent xl:px-0 xl:py-0 xl:backdrop-filter-none">
          <div className="flex w-25 justify-start xl:w-40">
            <a href="/">
              <Image src="/alchemy.png" alt="alchemy" width={280} height={60} className="h-fit w-fit" />
            </a>
          </div>
          <div className="hidden xl:flex w-full justify-between">
            <div className="w-full flex item-center gap-4">
              <div className="mx-auto w-fit flex item-center gap-4 py-5">
                {NavButtons.map((button, idx) => (
                  <NavButton key={idx} title={button.title} />
                ))}
                <TransparentButton title="Pricing" />
              </div>
            </div>
          </div>
          <div className="hidden xl:flex items-center gap-2">
            <TransparentButton title="Contact sales" />
            <GradientButton title="Sign In" />
          </div>

          <div className="z-30 flex items-center xl:hidden">
            <button onClick={() => setOpen((x) => !x)} className="size-6 font-bold text-gray-700">
              {!open ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {open && <div className="bg-white absolute inset-0 top-[54px] z-20 h-[100dvh] w-screen xl:hidden">
          <div className="flex flex-col m-6 overflow-y-scroll scroll-smooth">
            <div className="flex divide-y divide-gray-100 flex-col h-full">
              {[...NavButtons, { title: "Pricing" }].map((button, idx) => (
                <MenuNavButton key={idx} title={button.title} />
              ))}
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

interface IButton {
  title: string;
}

function NavButton({ title }: IButton) {
  return (
    <button className="group relative z-30 flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1 text-base font-[550] tracking-normal text-gray-950 transition-all hover:text-gray-500 focus:outline-none">
      <span className="rounded-md px-2 py-1 group-focus-visible:outline-2 group-focus-visible:outline-offset-0 group-focus-visible:outline-[rgba(36,0,255,0.2)]">{title}</span>
      <svg className="rotate-90 group-hover:rotate-[-90deg] ml-1 transition-transform" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6L12 10L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function TransparentButton({ title }: IButton) {
  return (
    <div className="flex items-center tracking-normal text-gray-950 bg-transparent duration-200 rounded-lg mx-auto text-nowrap px-2 py-1.5 text-base font-[550] transition-all hover:bg-gray-100">
      {title}
    </div>
  );
}

function GradientButton({ title }: IButton) {
  return (
    <div className="flex h-full flex-row items-center justify-center gap-2 rounded-lg transition-all font-semibold leading-none bg-linear-to-br from-violet-600 via-blue-700 to-cyan-500 text-white-950 hover:bg-gradient-primary-blue-hover hover:shadow-gray-lg text-sm px-4 py-3 whitespace-nowrap">
      {title}
    </div>
  );
}

function MenuNavButton({ title }: IButton) {
  return (
    <button className="flex flex-col w-full text-gray-950">
      <div className="w-full flex items-center justify-between py-4">
        <span className="text-lg">{title}</span>
        {title != "Pricing" && (
          <svg className="rotate-90 group-hover:rotate-[-90deg] ml-1 transition-transform" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 6L12 10L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </button>
  );
}

export default Navbar;
