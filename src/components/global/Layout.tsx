import React, { useState, ReactNode } from "react";
import { Sidebar } from "@/components/global/Sidebar";
import { BsList } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const activePage = useSelector(
    (state: RootState) => state?.ActivePageSlice?.active_page
  );

  const handelOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="relative bg-[#08080a] text-white min-h-screen">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <main
        className={`flex flex-col xl:ml-[220px] overflow-y-auto h-[100vh] relative z-10 ${
          openSidebar ? "opacity-50" : "opacity-1"
        }`}
      >
        {/* hambergur icon for mobile view*/}
        <section className="flex xl:hidden w-full px-4 pt-4">
          <button
            onClick={handelOpenSidebar}
            className="flex justify-start w-full"
          >
            <BsList size={30} />
            <span className=" font-semibold text-lg px-6">{activePage}</span>
          </button>
        </section>
        {/* /end of mobile view/ */}

        {children}
      </main>
    </div>
  );
};
