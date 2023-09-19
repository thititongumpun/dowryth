"use client";

import React from "react";
import {
  Card,
  CardFooter,
  Divider,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Image
} from "@nextui-org/react";

type Props = {};

const educations = [
  { label: "สูงกว่าปริญญาตรี", value: "สูงกว่าปริญญาตรี" },
  { label: "ปริญญาตรีหรือเทียบเท่า", value: "ปริญญาตรีหรือเทียบเท่า" },
  { label: "มัธยมหรือเทียบเท่า", value: "มัธยมหรือเทียบเท่า" },
  { label: "ต่ำกว่ามัธยม", value: "ต่ำกว่ามัธยม" },
];

export default function TestPage({}: Props) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 mb-8 md:mb-8 gap-4">
      
    </main>
  );
}
