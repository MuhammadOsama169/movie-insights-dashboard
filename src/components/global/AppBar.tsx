import React, { Dispatch, SetStateAction } from "react";
import { BsList } from "react-icons/bs";
import { motion } from "framer-motion";

import { sidebarItems } from "@/assets/data/SidebarData";
import { SidebarItemTypes } from "../../types/SidebarItemTypes";

interface AppBarProps {
  pageName: string;
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}

export const AppBar = ({
  pageName,
  openSidebar,
  setOpenSidebar,
}: AppBarProps) => {
  const handelOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <main>
      <section className="flex w-full p-4">
        <button
          onClick={handelOpenSidebar}
          className="flex justify-start w-full"
        >
          <BsList size={30} />
          <span className=" font-semibold text-lg px-6">{pageName}</span>
        </button>

        {/* {openSidebar && (
          <button onClick={handleCloseSidebar} className="flex justify-end ">
            <RxCross1 size={30} color="#ffffff" />
          </button>
        )} */}
      </section>

      {openSidebar && (
        <div className={`w-[200px] h-[100vh] `}>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`flex flex-col  `}>
              {sidebarItems.map((item: SidebarItemTypes) => (
                <div
                  key={item.id}
                  className={`sidebar-item flex gap-2 items-center p-2 my-2  `}
                >
                  <item.icon size={20} />
                  <span className="text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
};
