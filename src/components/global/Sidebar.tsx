import React, { Dispatch, SetStateAction } from "react";
import { sidebarItems } from "@/assets/data/SidebarData";
import { SidebarItemTypes } from "@/types/SidebarItemTypes";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "@/store/slices/ActivePageSlice";
import { RootState } from "@/store";
import { motion } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}
export const Sidebar = ({ openSidebar, setOpenSidebar }: SidebarProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activePage = useSelector(
    (state: RootState) => state?.ActivePageSlice.active_page
  );

  const topItems = sidebarItems.slice(0, 4);
  const bottomItems = sidebarItems.slice(4);

  const handleNavigate = (item: SidebarItemTypes) => {
    dispatch(setActivePage(item.title));
    navigate(`${item?.href}`);
  };
  //ref for hambergur menu using useClickaway
  const hambergurMenuRef = useClickAway(() => {
    setOpenSidebar(false);
  });

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={` ${
          openSidebar
            ? "flex  w-[220px]  fixed inset-0 bg-black  z-20 xl:hidden"
            : "xl:absolute xl:flex hidden w-[220px] h-[100vh]  shadow-xl bg-[#0f0f0f]"
        }`}
        ref={hambergurMenuRef as any}
      >
        <aside
          className={`p-4 mobile:hidden tablet:hidden xl:visible h-full flex flex-col justify-between `}
        >
          <div className="flex flex-col justify-start ">
            {topItems.map((item: SidebarItemTypes) => (
              <button
                key={item.id}
                className={`flex gap-2 items-center p-2 my-2 ${
                  activePage === item.title ? "text-red-500" : ""
                }  ${
                  item.comingSoon
                    ? "cursor-not-allowed"
                    : "cursor-pointer hover:scale-[0.98]"
                }`}
                onClick={() => handleNavigate(item)}
                disabled={item.comingSoon}
              >
                <item.icon size={24} />
                <span>{item.title}</span>
                {item.comingSoon && (
                  <span className="rounded-full text-black text-[6px] bg-yellow-300 p-1">
                    Coming Soon
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-end">
            {bottomItems.map((item: SidebarItemTypes) => (
              <button
                key={item.id}
                className={`flex gap-2 items-center p-2 my-2  ${
                  item.comingSoon ? "cursor-not-allowed" : "cursor-pointer "
                }`}
                disabled={item.comingSoon}
              >
                <item.icon size={24} />
                <span>{item.title}</span>
                {item.comingSoon && (
                  <span className="rounded-full text-black text-[6px] bg-yellow-300 p-1">
                    Coming Soon
                  </span>
                )}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </motion.div>
  );
};
