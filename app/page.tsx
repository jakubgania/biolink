"use client"

import Image from "next/image";
import profile from "../public/profile-3.webp"
import { useEffect } from "react";

function TextCard({ text }: { text: string }) {
  return (
    <div className="flex items-center w-full rounded-2xl p-4 backdrop-blur-sm bg-slate-100 mb-4">
      <h2 className="flex flex-col w-full text-sm md:text-base text-center font-normal tracking-wide md:tracking-wider">
        { text }
      </h2>
    </div>
  )
}

function LinkCard({
  url,
  title,
  icon
}: {
  url: string,
  title: string,
  icon: string
}) {
  return (
    <a href={url} className="group flex items-center w-full rounded-2xl p-1 bg-slate-100 mb-4 hover:bg-slate-50 transition-shadow duration-300">
      <div className="flex w-full text-center">
        <div className="flex w-11 h-11 items-center">
          <Image
            className="p-1 group-hover:-rotate-[20deg] transition-all ease-in-out duration-150"
            width={40}
            height={40}
            alt={icon}
            src={icon}
          />
        </div>
        <h2 className="flex justify-center items-center font-normal w-full text-sm md:text-base text-center tracking-wide md:tracking-wider -ml-10">
          {title}
        </h2>
      </div>
    </a>
  )
}

export default function Home() {
  const links = [
    {
      "title": "X platform",
      "url": "https://x.com/jakubgania",
      "icon": "/icons8-x-100.png"
    },
    {
      "title": "GitHub",
      "url": "https://github.com/jakubgania",
      "icon": "/icons8-github-100.png"
    },
    {
      "title": "YouTube",
      "url": "https://www.youtube.com/@jakubganiasoftware",
      "icon": "/icons8-youtube-100.png"
    },
    {
      "title": "LinkedIn",
      "url": "https://linkedin.com/in/jakubgania",
      "icon": "/linkedin.png"
    },
    {
      "title": "NeuronScale",
      "url": "https://neuronscale.com",
      "icon": "/neuronscale-logo.png"
    },
    {
      "title": "Credly",
      "url": "https://www.credly.com/users/jakub-gania",
      "icon": "/icons8-credly-100.png"
    },
    {
      "title": "DEV",
      "url": "https://dev.to/jakubgania",
      "icon": "/dev-black.png"
    }
  ]

  useEffect(() => {
    setTimeout(() => {
      let container:any = document.getElementById('container')
      container.style.opacity = 1
      container.style.filter = 'blur(0px)'
    }, 300)
  })


  return (
    <div id="container" className="animated">
      <main className="flex items-center mx-auto flex-col w-full max-w-xl mt-16 px-8 pb-12">
        <div className="flex items-center">
        <div>
        <Image
          className="rounded-full"
          alt="Avatar"
          src={profile}
          width={80}
          height={80}
        />
        </div>

          <div className="flex flex-col px-6">
            <div>
              <h1 className="text-2xl font-semibold rounded-3xl tracking-tight">
                Jakub Gania
              </h1>
            </div>

            <div>
              <p className="tracking-wider text-lg text-slate-300 font-medium">Software Engineer</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 my-8">
          <Image
            src="/man-technologist.png"
            alt="icon"
            width={28}
            height={28}
          />
          <Image
            src="/rocket.png"
            alt="icon"
            width={28}
            height={28}
          />
          <Image
            src="/sparkles.png"
            alt="icon"
            width={28}
            height={28}
          />
        </div>

        <TextCard text="Hi! See my social media and other portals." />

        {links.map((link) => (
          <LinkCard key={link.url} {...link} />
        ))}
      </main>
      <footer className="text-sm font-semibold flex gap-6 flex-wrap items-center justify-center">
        created by jakubgania
      </footer>
    </div>
  );
}
