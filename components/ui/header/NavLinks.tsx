"use client";

import { Link, NavbarItem } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return path === pathname;
  };

  const pages = [
    {
      name: "Oferty pracy",
      path: "/offers",
    },
    {
      name: "Pracodawcy",
      path: "/companies",
    },
    {
      name: "Dla pracodawcy",
      path: "/employer",
    },
    {
      name: "Admin",
      path: "/admin",
    },
  ];

  return (
    <>
      {pages.map((page) => (
        <NavbarItem isActive={isActive(page.path)} key={page.path}>
          <Link
            color={isActive(page.path) ? "primary" : "foreground"}
            href={page.path}
            aria-current="page"
            as={NextLink}
          >
            {page.name}
          </Link>
        </NavbarItem>
      ))}
    </>
  );
}
