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
        <p className="font-bold text-inherit">จ่ายเท่าไหร่</p>
      </NavbarBrand>
    </Navbar>
  );
}
