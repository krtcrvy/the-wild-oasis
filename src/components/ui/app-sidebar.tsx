import * as React from "react";

import { Calendar, GaugeCircle, Hotel, Settings, Users } from "lucide-react";

import Logo from "@/components/ui/logo";
import NavMain from "@/components/ui/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: GaugeCircle,
    },
    {
      title: "Bookings",
      url: "/bookings",
      icon: Calendar,
    },
    {
      title: "Cabins",
      url: "/cabins",
      icon: Hotel,
    },
    {
      title: "Users",
      url: "/users",
      icon: Users,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
