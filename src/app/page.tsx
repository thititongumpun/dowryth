"use client";

import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { GoogleAdSense } from "nextjs-google-adsense";

export default function Home() {
  return (
    <div className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <GoogleAdSense publisherId="pub-4998059744687395" />
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-white font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-contain"
          src="male.png"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Plant a tree
          </p>
          <h4 className="text-white font-medium text-large">
            Contribute to the planet
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-contain"
          src="female.png"
        />
      </Card>
    </div>
  );
}
