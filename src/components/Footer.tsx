"use client";

import React from "react";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Link href="/privacy" as={NextLink}>
              Privacy Policy
            </Link>
          </div>
          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            All rights reserved. &copy; {new Date().getFullYear()}.
            dowryth.vercel.app
          </p>
        </div>
      </div>
    </footer>
  );
}
