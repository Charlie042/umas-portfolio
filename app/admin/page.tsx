import { Suspense } from "react";
import AdminPageContent from "../../components/admin/admin-content";
import { fetchFeaturedWorkData } from "@/components/apiAction";
import Image from "next/image";
import { LoadersAdmin } from "@/components/admin/components/loader";
import { BackButton } from "@/components/admin/components/backButton";

export default function AdminPage(){
    return (
        <div className="max-w-[1440px] mx-auto relative">
            <div className="flex flex-col gap-10 my-10 mx-auto h-full">
                <div className="flex justify-between items-center">
                <Image src="/umaanidi.png" alt="uma" width={100} height={100} priority />
                <BackButton href="/me" />
                </div>
                <div className="flex items-center gap-50">
                 {/* <h1 className="text-4xl text-center font-medium font-bricolage "> Hey Uma, Welcome !</h1> */}
                 <h1 className="mt-10 text-6xl font-semibold font-bricolage "> Manage <br/> your  portfolio</h1>
                 <p className="max-w-xl text-sm self-end">Hey Uma, so this is where you could change somethings and add more things because i know you would have a lot to add especially with the cards and feel free to call me incase the card are to much and needs to be design differently!</p>
                 </div>
            </div>
        <Suspense fallback={<LoadersAdmin />}>
            <AdminPageContent featuredCards={fetchFeaturedWorkData()} />
        </Suspense>
        </div>
    )
} 







