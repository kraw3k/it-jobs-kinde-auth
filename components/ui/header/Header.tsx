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
          <i className="bi bi-rocket-takeoff me-2"></i>
          <p className="font-bold text-inherit">IT-PRACA</p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavLinks userRole={user?.role || "USER"} />
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
