import React, { useState } from "react";
import { sidebarItems } from "@/assets/data/SidebarData";
import { SidebarItemTypes } from "@/types/SidebarItemTypes";
import { useNavigate } from "react-router-dom";
import { AppBar } from "./AppBar";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const navigate = useNavigate();
  const topItems = sidebarItems.slice(0, 2);
  const bottomItems = sidebarItems.slice(2);

  const handleNavigate = (href: string) => {
    navigate(`${href}`);
  };
  return (
    <>
      <div className="xl:absolute xl:flex hidden w-[200px] h-[100vh]  shadow-xl bg-[#282828] ">
        <aside
          className={`p-4 mobile:hidden tablet:hidden xl:visible h-full flex flex-col justify-between `}
        >
          <div className="flex flex-col justify-start ">
            {topItems.map((item: SidebarItemTypes) => (
              <button
                key={item.id}
                className=" flex gap-2 items-center p-2 my-2 "
                onClick={() => handleNavigate(item?.href)}
              >
                <item.icon size={24} />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-col justify-end">
            {bottomItems.map((item: SidebarItemTypes) => (
              <button
                key={item.id}
                className=" flex gap-2 items-center p-2 my-2"
              >
                <item.icon size={24} />
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
      {/* mobile view */}
      <section className="flex xl:hidden">
        <AppBar
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          pageName={"Home"}
        />
      </section>
    </>
  );
};
