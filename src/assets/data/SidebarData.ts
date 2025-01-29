import { MdHelpOutline, MdOutlineMovieFilter } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { SidebarItemTypes } from "../../types/SidebarItemTypes";
import { FaTv } from "react-icons/fa6";
import { MdAutoGraph } from "react-icons/md";
import { TbWorldStar } from "react-icons/tb";

export const sidebarItems: SidebarItemTypes[] = [
  {
    id: "dashboard",
    title: "Insights",
    icon: MdAutoGraph,
    comingSoon: false,
    href: "/dashboard",
  },
  {
    id: "movies",
    title: "Top Movies",
    icon: TbWorldStar,
    comingSoon: false,
    href: "/top-movies",
  },
  {
    id: "trending_movies",
    title: "Trending Movies",
    icon: MdOutlineMovieFilter,
    comingSoon: false,
    href: "/",
  },
  {
    id: "tv_shows",
    title: "Tv Shows",
    icon: FaTv,
    comingSoon: true,
    href: "#",
  },
  {
    id: "settings",
    title: "Settings",
    icon: IoSettingsOutline,
    comingSoon: true,
    href: "#",
  },
  {
    id: "help",
    title: "Help",
    icon: MdHelpOutline,
    comingSoon: true,
    href: "#",
  },
];
