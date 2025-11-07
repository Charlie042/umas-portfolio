import { NavigationBar, ConditionalWhatIKnow, WhatPeopleSay,Footer } from "@/components/shared-components";

export default function MainLayout({children}: Readonly<{
  children: React.ReactNode;
}>){
    return (
        <div>
         <div className="max-w-[1200px] mx-auto">
          <NavigationBar />
          <main>{children}</main>
        </div>

        <footer className="h-screen isolate">
          <ConditionalWhatIKnow />
          <WhatPeopleSay />
          <Footer />
        </footer>
        </div>
    )
}