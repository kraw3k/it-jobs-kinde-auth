"use client";

import { Link, NavbarItem } from "@nextui-org/react";
import NextLink from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  userRole: "USER" | "EMPLOYER" | "ADMIN";
};
export default function NavLinks({ userRole }: NavLinksProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return path === pathname;
  };

  const pages = {
    USER: [
      {
        name: "Oferty pracy",
        path: "/offers",
      },
      {
        name: "Pracodawcy",
        path: "/companies",
      },
    ],
    EMPLOYER: [
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
    ],
    ADMIN: [
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
        name: "Panel administracyjny",
        path: "/admin",
      },
    ],
  };

  return (
    <>
      {pages[userRole].map((page) => (
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
