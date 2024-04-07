"use client";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";
import { User } from "@nextui-org/user";

export default function AvatarDropdown({ user }: { user: any }) {
  return (
    <Dropdown
      radius="sm"
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger>
        <Avatar
          size={"sm"}
          showFallback
          src={user?.avatarUrl || undefined}
          className="cursor-pointer"
        />
      </DropdownTrigger>
      <DropdownMenu
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection showDivider>
          <DropdownItem
            isReadOnly
            key="profile"
            className="h-14 gap-2 opacity-100"
          >
            <User
              name={user?.firstName + " " + user?.lastName}
              description={user?.email}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "sm",
                src: user?.avatarUrl || undefined,
              }}
            />
          </DropdownItem>
          <DropdownItem key="myprofile" href={"/profile"}>
            Mój profil
          </DropdownItem>
        </DropdownSection>

        <DropdownSection>
          <DropdownItem key="logout" href={"/api/auth/logout"}>
            Wyloguj
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
