"use client";

import React from "react";
import {
  Divider,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
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
    <main className="flex flex-col mb-8 md:mb-8 gap-4">
      <div className="flex flex-col gap-8">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-4998059744687395"
          data-ad-slot="9429353830"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <Input
          type="number"
          label="รายได้ต่อเดือน"
          labelPlacement="outside"
          radius="lg"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-black text-small">บาท</span>
            </div>
          }
          defaultValue="35000"
        />
        <Divider />
        <Input
          type="number"
          label="อายุงาน"
          labelPlacement="outside"
          radius="lg"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-black text-small">ปี</span>
            </div>
          }
          defaultValue="5"
        />
        <Divider />
        <RadioGroup label="ฐานะครอบครัว" color="primary" defaultValue="ปานกลาง">
          <Radio value="ดี/ร่ำรวย">ดี/ร่ำรวย</Radio>
          <Radio value="ปานกลาง">ปานกลาง</Radio>
          <Radio value="พอใช้">พอใช้</Radio>
        </RadioGroup>
        <Divider />
        <RadioGroup
          label="สถานที่อยู่อาศัย"
          color="primary"
          defaultValue="กรุงเทพฯ"
        >
          <Radio value="กรุงเทพฯ">กรุงเทพฯ</Radio>
          <Radio value="จังหวัดอื่นๆ">จังหวัดอื่นๆ</Radio>
        </RadioGroup>
        <Divider />
        <Select
          labelPlacement="outside"
          label="ระดับการศึกษา"
          placeholder="Select an animal"
          className="max-w-xs"
          items={educations}
          defaultSelectedKeys={["ปริญญาตรีหรือเทียบเท่า"]}
        >
          {(education) => (
            <SelectItem key={education.value}>{education.label}</SelectItem>
          )}
        </Select>
      </div>
    </main>
  );
}
