import { SignedIn } from "@clerk/nextjs";
import { Sidebar, SidebarContent } from "../../../../../components/ui/sidebar";
import { MainSection } from "./main-section";
import { PersonalSection } from "./personal-section";
import { Separator } from "@/components/ui/separator";
import { SubscriptionsSection } from "./subscriptions-section";

export const HomeSidebar = () => {
  return (
    <Sidebar className="pt-15 z-40 border-none" collapsible="icon">
      <SidebarContent className="bg-background">
        <MainSection />
        <Separator />
        <PersonalSection />
        <SignedIn>
          <>
            <Separator />
            <SubscriptionsSection />
          </>
        </SignedIn>
      </SidebarContent>
    </Sidebar>
  );
};
