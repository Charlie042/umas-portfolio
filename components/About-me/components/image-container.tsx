import { cn } from "@/lib/utils"
import Image from "next/image"

export default function ImageContainer({className, borderClassName, src, containerClassName}: {className?: string, borderClassName?:string, src:string, containerClassName:string}) {
    return (
        <div className={cn("absolute",containerClassName)}>
        <div className={cn("w-[198px] h-[248px] relative", className)}>
            <div className={cn("absolute border-[4px] border-[#E00000] h-[24px]", borderClassName)}/>
            <Image src={src} width={1000} height={1000} alt="umas image" />
        </div>
        </div>
    )
}