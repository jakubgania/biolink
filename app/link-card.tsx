import Image from "next/image";

export function LinkCard({
  url,
  title,
  icon,
  alt,
}: {
  url: string,
  title: string,
  icon: string,
  alt: string,
}) {
  return (
    <a href={url} target="_blank" className="group flex items-center w-full rounded-2xl p-1 bg-slate-100 mb-4 hover:bg-slate-50 transition-shadow duration-300">
      <div className="flex w-full text-center">
        <div className="flex w-11 h-11 items-center">
          <Image
            className="p-1 group-hover:-rotate-[20deg] transition-all ease-in-out duration-150"
            width={40}
            height={40}
            alt={alt}
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