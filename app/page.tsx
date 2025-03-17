"use client"

import Image from "next/image";
import profile from "../public/profile-3.webp"
import { useEffect } from "react";

import { LinkCard } from "./link-card";
import { TextCard } from "./text-card";

import links from './links.json';

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      let container:any = document.getElementById('container')
      container.style.opacity = 1
      container.style.filter = 'blur(0px)'
    }, 300)
  })

  return (
    <div id="container" className="animated">
      <main className="flex items-center mx-auto flex-col w-full max-w-xl my-10 md:my-16 px-8">
        <div className="flex items-center">
          <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
            <Image
              src={profile}
              alt="Avatar"
              fill
              style={{
                objectFit: 'contain',
              }}
              className="rounded-full"
            />
          </div>

          <div className="px-8">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold rounded-3xl tracking-tight">
              Jakub Gania
            </h1>
            <p className="tracking-wider text-base -mt-1 md:text-lg text-slate-300 font-medium">Software Engineer</p>
          </div>
        </div>

        <div className="flex gap-4 my-8">
          <Image
            src="/man-technologist.png"
            alt="icon"
            width={26}
            height={26}
          />
          <Image
            src="/rocket.png"
            alt="icon"
            width={26}
            height={26}
          />
          <Image
            src="/sparkles.png"
            alt="icon"
            width={26}
            height={26}
          />
        </div>

        <TextCard text="Hi! See my social media and other portals." />

        {links.map((link) => (
          <LinkCard key={link.url} {...link} />
        ))}
      </main>
    </div>
  );
}
