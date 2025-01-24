import { RxDashboard } from "react-icons/rx";
import { MdHelpOutline, MdOutlineMovieFilter } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { SidebarItemTypes } from "../../types/SidebarItemTypes";

export const sidebarItems: SidebarItemTypes[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: RxDashboard,
    comingSoon: false,
    href: "/dashboard",
  },
  {
    id: 2,
    title: "Browse",
    icon: MdOutlineMovieFilter,
    comingSoon: true,
    href: "/",
  },

  {
    id: 3,
    title: "Settings",
    icon: IoSettingsOutline,
    comingSoon: true,
    href: "#",
  },
  {
    id: 4,
    title: "Help",
    icon: MdHelpOutline,
    comingSoon: true,
    href: "#",
  },
];
