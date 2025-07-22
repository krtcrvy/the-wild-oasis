import {
  CalendarIcon,
  CircleGaugeIcon,
  HomeIcon,
  SettingsIcon,
  TentTreeIcon,
  UsersIcon,
} from "lucide-react";
import { Link } from "react-router";

import NavMain from "@/components/layout/nav-main";
import NavSecondary from "@/components/layout/nav-secondary";
import NavUser from "@/components/layout/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://ui.shadcn.com/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: CircleGaugeIcon,
    },
    {
      title: "Bookings",
      url: "/bookings",
      icon: CalendarIcon,
    },
    {
      title: "Cabins",
      url: "/cabins",
      icon: HomeIcon,
    },
    {
      title: "Guests",
      url: "/guests",
      icon: UsersIcon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
    },
  ],
};

function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="/">
                <TentTreeIcon className="!size-5" />
                <span className="text-base font-semibold">The Wild Oasis</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

export default AppSidebar;
