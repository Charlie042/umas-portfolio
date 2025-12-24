export function Loader(){
  return (
    <div className="min-h-[500px] flex gap-4 items-center justify-center relative">
      <div className="bg-[#FF6B6B]/30 blur-xl  rounded-full w-200 h-26 flex items-center justify-center">
      </div>
      <div className="absolute">
          <div className="loader "></div>
      </div>
    </div>
  )
}