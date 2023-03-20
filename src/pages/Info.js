import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import '../App.css';
import Map from './MyMap';

const Info = (props) => {
  const menus = [
    { name: "dashboard", link: "/MyMap", icon: MdOutlineDashboard },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
    style={{
        transitionDelay: `3000ms`,
      }}
    className={`box stack-top duration-500`}>
    <section className="flex gap-6">
      <div
        className={`bg-[#3662c2] min-h-screen ${
          open ? "w-72" : "w-0"
        } duration-500 text-gray-100 px-0`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 2}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-0 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
             
            </Link>
          ))}
        </div>
      </div>

    </section>
    </div>
  );
};

export default Info;