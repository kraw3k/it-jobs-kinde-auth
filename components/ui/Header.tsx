"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import NextLink from "next/link";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@nextui-org/button";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const { user } = useKindeBrowserClient();

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
      path: "/for-employers",
    },
    {
      name: "Admin",
      path: "/admin",
    },
  ];

  return (
    <Navbar maxWidth={"full"}>
        <NavbarBrand>
      <NextLink href="/" className="flex items-center">
          <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <p className="font-bold text-inherit">IT-JOBS</p>
      </NextLink>
        </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {!user && (
          <NavbarItem>
            <Button
              as={NextLink}
              color="primary"
              href="/api/auth/login"
              variant="flat"
            >
              Zaloguj
            </Button>
          </NavbarItem>
        )}
        {user && (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                size={"sm"}
                showFallback
                src="https://images.unsplash.com/broken"
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Profile Actions"
              variant="flat"
              disabledKeys={["email"]}
            >
              <DropdownItem isReadOnly key="email" className="gap-2">
                <p className="font-semibold">Zalogowano jako</p>
                <p className="font-semibold">{user?.email}</p>
              </DropdownItem>
              <DropdownItem
                key="settings"
                onClick={() => router.push("/profile")}
              >
                Mój profil
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => router.push("/api/auth/logout")}
              >
                Wyloguj
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>
    </Navbar>
  );
}
