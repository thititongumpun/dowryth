"use client"

import React from "react";
import {
  Navbar,
  NavbarBrand,
  Link,
} from "@nextui-org/react";
import NextLink from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <Navbar position="sticky" isBordered>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Link href="/" className="font-bold" as={NextLink}>จ่ายเท่าไหร่</Link>
      </NavbarBrand>
    </Navbar>
  );
}
