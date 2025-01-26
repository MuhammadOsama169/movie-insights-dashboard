import { MdHelpOutline, MdOutlineMovieFilter } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { SidebarItemTypes } from "../../types/SidebarItemTypes";
import { FaTv } from "react-icons/fa6";
import { MdAutoGraph } from "react-icons/md";

export const sidebarItems: SidebarItemTypes[] = [
  {
    id: 1,
    title: "Insights",
    icon: MdAutoGraph,
    comingSoon: false,
    href: "/dashboard",
  },
  {
    id: 2,
    title: "Movies",
    icon: MdOutlineMovieFilter,
    comingSoon: false,
    href: "/",
  },

  {
    id: 3,
    title: "Tv Shows",
    icon: FaTv,
    comingSoon: true,
    href: "#",
  },
  {
    id: 4,
    title: "Settings",
    icon: IoSettingsOutline,
    comingSoon: true,
    href: "#",
  },
  {
    id: 5,
    title: "Help",
    icon: MdHelpOutline,
    comingSoon: true,
    href: "#",
  },
];
