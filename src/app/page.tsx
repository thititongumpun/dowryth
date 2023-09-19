"use client";

import React from "react";
import { GoogleAdSense } from "nextjs-google-adsense";
import {
  Card,
  CardFooter,
  Divider,
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Image,
} from "@nextui-org/react";

const educations = [
  { label: "สูงกว่าปริญญาตรี", value: "สูงกว่าปริญญาตรี" },
  { label: "ปริญญาตรีหรือเทียบเท่า", value: "ปริญญาตรีหรือเทียบเท่า" },
  { label: "มัธยมหรือเทียบเท่า", value: "มัธยมหรือเทียบเท่า" },
  { label: "ต่ำกว่ามัธยม", value: "ต่ำกว่ามัธยม" },
];

export default function Home() {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <h4 className="font-bold text-black text-2xl">คำนวนสินสอด</h4>
      <main className="grid grid-cols-1 lg:grid-cols-2 mb-8 md:mb-8 gap-4 border border-gray-200 p-4 md:px-6">
        <GoogleAdSense publisherId="pub-4998059744687395" debug={true} />
        <div className="flex flex-col gap-8">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4998059744687395"
            data-ad-slot="9429353830"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <Card className="h-[300px]">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-contain"
              src="male.png"
            />
            <CardFooter className="absolute bg-gray-200 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
              <div>
                <p className="text-black text-tiny">ฝ่ายชาย</p>
              </div>
            </CardFooter>
          </Card>
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
          <RadioGroup
            label="ฐานะครอบครัว"
            color="primary"
            defaultValue="ปานกลาง"
          >
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
        <div className="flex flex-col gap-8">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-4998059744687395"
            data-ad-slot="9429353830"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <Card className="h-[300px]">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-contain"
              src="female.png"
            />
            <CardFooter className="absolute bg-gray-200 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
              <div>
                <p className="text-black text-tiny">ฝ่ายหญิง</p>
              </div>
            </CardFooter>
          </Card>
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
          <RadioGroup
            label="ฐานะครอบครัว"
            color="primary"
            defaultValue="ปานกลาง"
          >
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
    </section>
  );
}
