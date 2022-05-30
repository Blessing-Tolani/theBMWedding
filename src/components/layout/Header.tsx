import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  HomeIcon,
  PhotographIcon,
  GiftIcon,
  RefreshIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";

const navbars = [
  {
    name: "Home",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Our Story",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/our-story",
    icon: BookOpenIcon,
  },
  {
    name: "Tit-bit",
    description: "Your customers' data will be safe and secure.",
    href: "/tit-bit",
    icon: CursorClickIcon,
  },
  {
    name: "Photos",
    description: "Connect with third-party tools that you're already using.",
    href: "/photos",
    icon: PhotographIcon,
  },
  {
    name: "Gift registry",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/gift-registry",
    icon: GiftIcon,
  },
  {
    name: "Asoebi",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/asoebi",
    icon: ViewGridIcon,
  },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <Popover className="relative bg-darkBrown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <img src="/bm-icon-2.png" className="w-16 h-16" />
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-primary focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-8 w-8 " aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            {navbars.map((item) => (
              <Link href={item.href} key={item.name}>
                <a
                  className={`text-primary hover:text-[#a97a4a] ${
                    activeTab === item.name ? "font-bold" : "font-normal"
                  }`}
                  onClick={() => {
                    setActiveTab(item.name);
                  }}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img src="/bm-icon-2.png" className="w-16 h-16" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-primary  focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navbars.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a
                        className={`text-primary hover:text-[#a97a4a] -m-3 p-3 flex items-center rounded-md hover:bg-gray-50 ${
                          activeTab === item.name ? "font-bold" : "font-normal"
                        }`}
                        onClick={() => {
                          setActiveTab(item.name);
                        }}
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-primary"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base ">{item.name}</span>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
