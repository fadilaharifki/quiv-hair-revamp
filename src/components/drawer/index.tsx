import { CircleX } from "lucide-react";
import React, { useState } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  colorCloseIcon?: string;
}

const FullScreenDrawer = ({
  isOpen = false,
  onClose = () => {},
  children,
  colorCloseIcon = "#ffffff",
}: DrawerProps) => {
  const toggleDrawer = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
          onClick={toggleDrawer}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 bg-white z-[1000] w-screen duration-300 transform transition-transform ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute right-0 cursor-pointer p-2 duration-300 hover:scale-125"
          onClick={toggleDrawer}
        >
          <CircleX color={colorCloseIcon} />
        </div>
        <div className="overflow-auto">{children}</div>
      </div>
    </>
  );
};

export default FullScreenDrawer;
