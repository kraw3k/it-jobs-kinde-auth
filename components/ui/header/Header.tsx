import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavLinks from "@/components/ui/header/NavLinks";
import AvatarDropdown from "@/components/ui/header/AvatarDropdown";
import { getUser } from "@/services/users/getUser";

export default async function Header() {
  const { getUser: getKindeUser } = getKindeServerSession();
  const kindeUser = await getKindeUser();
  const user = await getUser();

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
        <NavLinks />
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {!kindeUser && (
          <NavbarItem>
            <Button
              as={NextLink}
              color="default"
              href="/api/auth/login"
              variant="flat"
              size={"sm"}
            >
              Zaloguj
            </Button>
          </NavbarItem>
        )}
        {kindeUser && <AvatarDropdown user={user} />}
      </NavbarContent>
    </Navbar>
  );
}
