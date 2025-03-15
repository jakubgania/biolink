export function TextCard({
  text
}: { 
  text: string
}) {
  return (
    <div className="flex items-center w-full rounded-2xl p-4 backdrop-blur-sm bg-slate-100 mb-4">
      <h2 className="flex flex-col w-full text-sm md:text-base text-center font-normal tracking-wide md:tracking-wider">
        { text }
      </h2>
    </div>
  )
}