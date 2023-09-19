"use client";

import {  Card, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { GoogleAdSense } from "nextjs-google-adsense";

export default function Home() {
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <GoogleAdSense publisherId="pub-4998059744687395" debug={true} />
      <div className="mt-12 grid gap-2 sm:grid-cols-1 lg:grid-cols-2">
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
      </div>
    </section>
  );
}
