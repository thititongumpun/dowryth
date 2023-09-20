"use client"

import React from "react";
import {
  Navbar,
  NavbarBrand,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  return (
    <Navbar position="sticky" isBordered>
      <NavbarBrand>
        <Image src="/sinsod.png" alt="logo" width={50} height={50} />
        <Link href="/" className="font-bold" as={NextLink}>จ่ายเท่าไหร่</Link>
      </NavbarBrand>
    </Navbar>
  );
}
