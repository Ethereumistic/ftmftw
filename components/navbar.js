"use client";

import { Fragment } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { myLoader } from "@/utils/all";
import ThemeSwitch from "./themeSwitch";
import { useState } from "react";
import AuthButton from "@/components/nostr/AuthButton"; // Adjust the import according to your project structure

export default function Navbar(props) {

  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const leftmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ];

  const rightmenu = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact"
    },
    {
      label: "Solutions",
      href: "/archive"
    },
    {
      label: "Pro Version",
      href: "https://stablo-pro.web3templates.com/",
      external: true,
      badge: "new"
    },

  ];

  const menu = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
      title: 'Get to know...',
      children: [
        { label: 'Us', href: '/about/us' },
        { label: 'Bitcoin', href: '/about/bitcoin' },
      ],
    },
    
    {
      label: 'Solutions',
      href: '#',
      title:'Products',
      children: [
        { label: 'Bitcoin for the individual', href: '#' },
        { label: 'Submenu 2-2', href: '#' },
      ],
      subtitle: 'Programs',
      kids: [
        { label: 'Become a Bitcoin Business', href: '#' },
        { label: 'Submenu 2-2', href: '#' },
      ]
    },
    {
      label: 'Menu 3',
      href: '#',
    },
  ];

  const mobilemenu = [...leftmenu, ...rightmenu];

  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="-translate-x-1 -translate-y-4 
                              flex flex-wrap justify-between md:flex-nowrap md:gap-10 dark:bg-slate-700 bg-slate-400  dark:text-slate-800 
                              dark:bg-[radial-gradient(#4d4d4d_1px,transparent_1px)] 
                              bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]  rounded-full h-20">
                
                {/* <div className="order-1 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row md:justify-end">
                  {leftmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-borange dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div> */}
                <div className="ml-12 flex w-full items-center justify-between md:w-auto opacity-100">
                  <Link href="/" className="w-28 dark:hidden hover:scale-110 hover:rotate-[-21deg] transition duration-300  ">
                    {props.logo ? (
                      <Image
                        {...urlForImage(props.logo)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">
                        FTMFTW
                      </span>
                    )}
                  </Link>
                  <Link href="/" className="hidden w-28 dark:block hover:scale-110 hover:rotate-[-21deg] transition duration-300">
                    {props.logoalt ? (
                      <Image
                        {...urlForImage(props.logoalt)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">
                        FTMFTW
                      </span>
                    )}
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="ml-auto rounded-md px-2 py-1 text-gray-800 font-bold focus:text-blue-500 focus:outline-none dark:text-gray-300 md:hidden ">
                    <svg
                      className="h-6 w-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                {/* <div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row">
                  {rightmenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-red-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          <span> {item.label}</span>
                          {item.badge && (
                            <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:bg-cyan-200 dark:text-blue-800 ">
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                  <ThemeSwitch />
                  </div> */}

<div className="order-2 hidden w-full flex-col items-center justify-start md:order-none md:flex md:w-auto md:flex-1 md:flex-row ">
      {menu.map((item, index) => (
        <div
          key={`${item.label}${index}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          {item.children && item.children.length > 0 ? (
            <NavMenu
              menu={item}
              key={`${item.label}${index}`}
              items={item.children}
              title={item.title}
              subtitle={item.subtitle}
              kids={item.kids}
              isActive={activeIndex === index}
            />
          ) : (
            <Link
              href={item.href}
              key={`${item.label}${index}`}
              className="px-5 py-2 font-russo  text-gray-800 hover:text-borange  dark:text-gray-400 "
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noopener" : ""}
            >
              <span className="text-gray-800 hover:text-borange hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)] dark:text-gray-400 dark:hover:text-borange"> {item.label}</span>
              {item.badge && (
                <span className="ml-2 rounded bg-black px-2 py-0.5 text-xs font-semibold 
                              text-borange dark:bg-borange dark:text-blue-800
                              hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)]">
                  {item.badge}
                </span>
              )}
            </Link>
          )}
        </div>
      ))}
      <ThemeSwitch />
      <AuthButton />
    </div>
    
                </div>
              <Disclosure.Panel>
                <div className="order-2 -ml-4 mt-4 flex w-full flex-col items-center justify-start md:hidden">
                  {mobilemenu.map((item, index) => (
                    <Fragment key={`${item.label}${index}`}>
                      {item.children && item.children.length > 0 ? (
                        <DropdownMenu
                          menu={item}
                          key={`${item.label}${index}`}
                          items={item.children}
                          mobile={true}
                        />
                      ) : (
                        <Link
                          href={item.href}
                          key={`${item.label}${index}`}
                          className="w-full px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                          target={item.external ? "_blank" : ""}
                          rel={item.external ? "noopener" : ""}>
                          {item.label}
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  );
}

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu
      as="div"
      className={cx("relative text-left", mobile && "w-full")}>
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 rounded-md px-5 py-2 text-sm font-medium  outline-none transition-all focus:outline-none focus-visible:text-indigo-500 focus-visible:ring-1 dark:focus-visible:bg-gray-800",
              open
                ? "text-blue-500 hover:text-blue-500"
                : " text-gray-600 dark:text-gray-400 ",
              mobile ? "w-full px-4 py-2 " : "inline-block px-4 py-2"
            )}>
            <span>{menu.label}</span>
            <ChevronDownIcon className="mt-0.5 h-4 w-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 origin-top-left rounded-md  focus:outline-none  lg:absolute lg:left-0  lg:w-56",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={`${item.title}${index}`}>
                    {({ active }) => (
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex items-center space-x-2 px-5 py-2 text-sm lg:space-x-4",
                          active
                            ? "text-blue-500"
                            : "text-gray-700 hover:text-blue-500 focus:text-blue-500 dark:text-gray-300"
                        )}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

const NavMenu = ({ menu, items, title, subtitle, kids }) => {
  return (
    <div className="relative group z-[1000]">
      <span className="px-5 py-2 font-russo text-gray-800 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)] hover:text-borange dark:hover:text-borange dark:text-gray-400 cursor-pointer">
        {menu.label}
      </span>
      
      <div className="absolute left-0 hidden w-64 pt-2 group-hover:flex ">
        <div className="bg-white rounded shadow-md dark:bg-gray-800">
          {title && (
            <div className="px-4 py-2 font-russo text-gray-500 dark:text-gray-300 w-48">
              {title}
            </div>
          )}
          {items.map((subItem, index) => (
            <Link
              href={subItem.href}
              key={`${subItem.label}${index}`}
              className="block px-2 py-2 text-gray-800 hover:text-borange dark:hover:text-borange dark:text-gray-200 dark:hover:bg-gray-600"
              target={subItem.external ? "_blank" : ""}
              rel={subItem.external ? "noopener" : ""}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
        {subtitle && (
          <div className="bg-white rounded shadow-md dark:bg-gray-800 ml-4">
            <div className="px-4 py-2 font-russo text-gray-500 dark:text-gray-300 w-64">
              {subtitle}
            </div>
            {kids.map((subItem, index) => (
              <Link
                href={subItem.href}
                key={`${subItem.label}${index}`}
                className="block px-3 py-2 text-gray-800 hover:text-borange dark:hover:text-borange dark:text-gray-200 dark:hover:bg-gray-600 z-50"
                target={subItem.external ? "_blank" : ""}
                rel={subItem.external ? "noopener" : ""}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
