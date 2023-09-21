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
  Button,
} from "@nextui-org/react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { z } from "zod";

const educations = [
  { label: "สูงกว่าปริญญาตรี", value: "สูงกว่าปริญญาตรี" },
  { label: "ปริญญาตรีหรือเทียบเท่า", value: "ปริญญาตรีหรือเทียบเท่า" },
  { label: "มัธยมหรือเทียบเท่า", value: "มัธยมหรือเทียบเท่า" },
  { label: "ต่ำกว่ามัธยม", value: "ต่ำกว่ามัธยม" },
];

const schema = z.object({
  maleDowry: z.string(),
  femaleDowry: z.string(),
});

export default function Home() {
  const [dowry, setDowry] = React.useState({ dowry1: 0, dowry2: 0 });
  const { pending } = useFormStatus();

  async function onSubmit(formData: FormData) {
    const parsed = schema.parse({
      maleDowry: formData.get("maleDowry"),
      femaleDowry: formData.get("femaleDowry"),
    });

    let maleDowry =
      (Number(parsed.maleDowry) + Number(parsed.femaleDowry)) * 5;
    let femaleDowry =
      (Number(parsed.maleDowry) + Number(parsed.femaleDowry)) * 10;
      

    setDowry({ dowry1: maleDowry, dowry2: femaleDowry });
  }

  return (
    <main className="mt-12 mx-auto max-w-screen-xl md:px-8 bg-white p-2">
      <h4 className="font-bold text-black text-2xl">คำนวนสินสอด</h4>
      <p className="text-sm">คนจนมีสิทธิ์ไหมครับ</p>
      <form action={onSubmit}>
        <section className="grid grid-cols-1 lg:grid-cols-2 mb-8 md:mb-8 gap-4 border border-gray-200 p-4 md:px-6">
          <GoogleAdSense publisherId="pub-4998059744687395" debug={true} />
          <div className="flex flex-col gap-8">
            <Card className="h-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-contain hover:scale-75 transition-all"
                src="male.png"
              />
              <CardFooter className="absolute bg-gray-200 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
                <div>
                  <p className="text-black text-tiny">ฝ่ายชาย</p>
                </div>
              </CardFooter>
            </Card>
            <Input
              name="maleDowry"
              type="number"
              label="รายได้ต่อเดือน"
              labelPlacement="outside"
              classNames={{
                input: "text-blue-500 font-bold",
              }}
              radius="lg"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-blue-500 text-small">บาท</span>
                </div>
              }
              defaultValue="35000"
            />
            <Divider />
            <Input
              type="number"
              label="อายุงาน"
              classNames={{
                input: "text-blue-500 font-bold",
              }}
              labelPlacement="outside"
              radius="lg"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-blue-500 text-small">ปี</span>
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
            <Card className="h-[300px]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-contain scale-75 hover:scale-50 transition-all"
                src="female.png"
              />
              <CardFooter className="absolute bg-gray-200 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
                <div>
                  <p className="text-black text-tiny">ฝ่ายหญิง</p>
                </div>
              </CardFooter>
            </Card>
            <Input
              name="femaleDowry"
              type="number"
              label="รายได้ต่อเดือน"
              classNames={{
                input: "text-blue-500 font-bold",
              }}
              labelPlacement="outside"
              radius="lg"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-blue-500 text-small">บาท</span>
                </div>
              }
              defaultValue="35000"
            />
            <Divider />
            <Input
              type="number"
              label="อายุงาน"
              classNames={{
                input: "text-blue-500 font-bold",
              }}
              labelPlacement="outside"
              radius="lg"
              endContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-blue-500 text-small">ปี</span>
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
        </section>

        <section className="border p-1 h-full mb-2">
          <div className="flex justify-center items-center border bg-gray-200">
            <h1 className="font-bold text-gray-500">มูลค่าสินสอด</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-2 justify-evenly m-4 p-2 items-center">
            <Button
              color="primary"
              size="lg"
              type="submit"
              isLoading={pending}
              disabled={pending}
            >
              {pending ? "คำนวณ..." : "คำนวณ"}
            </Button>
            <div className="flex p-2 justify-center items-center gap-2">
              <p className="text-gray-500 text-2xl">
                {dowry["dowry1"].toLocaleString("th-TH")}
              </p>
              -
              <p className="text-gray-500 text-2xl">
                {dowry["dowry2"].toLocaleString("th-TH")}
              </p>
              <p className="text-lg font-bold text-gray-500">บาท</p>
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}
