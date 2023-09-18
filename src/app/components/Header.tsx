"use client"

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

type Props = {};

export default function Header({}: Props) {
  return (
    <Navbar position="static">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <Link href="/" className="font-bold">จ่ายเท่าไหร่</Link>
      </NavbarBrand>
    </Navbar>
  );
}
