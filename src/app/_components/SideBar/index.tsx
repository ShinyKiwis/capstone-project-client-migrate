"use client";
import { Accordion, NavLink } from "@mantine/core";
import Image from "next/image";

import sidebarItems from "./items";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Page {
  title: string;
  href: string;
}

interface SideBarItemProps {
  Icon?: any;
  title: string;
  pages: Page[];
}

const isActivePath = (pathname: string, currentPathname: string) => {
  let titles = [];
  let found = false;
  for (const sidebarItem of sidebarItems) {
    if (found) break;
    for (const subItem of sidebarItem.pages) {
      if (subItem.href === currentPathname) {
        titles.push(sidebarItem.title);
        titles.push(subItem.title);
        found = true;
        break;
      }
    }
  }
  // console.log(titles);

  return titles.includes(pathname);
};

const SideBarItem = ({ Icon, title, pages }: SideBarItemProps) => {
  const pathname = usePathname();
  const activeTitle = isActivePath(title, pathname);
  const isActiveSubtitle = (subtitle: string) =>
    isActivePath(subtitle, pathname);
  return (
    <Accordion className="my-0 w-full" variant="fill" chevronSize={0}>
      <Accordion.Item key={title} value={title}>
        <Accordion.Control>
          <NavLink
            label={title}
            leftSection={<Icon size="1.5rem" />}
            active={activeTitle}
            variant="filled"
            className={`rounded-md px-4 py-1 text-xl font-bold ${!activeTitle ? "text-gray-400" : ""}`}
          />
        </Accordion.Control>
        <Accordion.Panel>
          {pages.map((page) => {
            return (
              <NavLink
                label={page.title}
                href={page.href}
                active={isActivePath(page.title, pathname)}
                variant={isActiveSubtitle(page.title) ? "subtle" : ""}
                className={`rounded-md font-bold ${!isActiveSubtitle(page.title) ? "text-gray-400" : ""}`}
                key={page.title}
              />
            );
          })}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

const SideBar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <div
      className={`flex h-screen flex-col items-center border-r border-gray-300 px-4 py-10 ${toggleSidebar ? "w-64" : "w-0"} duration-300`}
    >
      <button
        className="bg-blue px-2 py-1"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        toggle
      </button>
      <div className="relative h-48 w-48">
        <Image
          src="/logo.svg"
          alt="software logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {sidebarItems.map((item) => {
        return (
          <SideBarItem Icon={item.Icon} title={item.title} pages={item.pages} key={item.title}/>
        );
      })}
    </div>
  );
};

export default SideBar;
