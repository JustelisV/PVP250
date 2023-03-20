import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoChevronForward } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../App.css';
import Map from './MyMap';


const Info = () => {
  const [open1, setOpen1] = useState(false);

  
  return (
    <div
    className={`box stack-top duration-500`}>
    <section className="flex gap-6">
      <div
        className={`bg-[#3662c2] ${
          open1 ? "w-50 h-screen" : "w-10 h-20"
        } duration-500 text-gray-100 px-0 `}
      >
        <div className="py-5 flex justify-end ">
          <IoChevronForward  
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen1(!open1)}
           
          />
        </div>

      </div>

    </section>
    </div>
  );
};
const Gifts = () => {

  const [open2, setOpen2] = useState(false);
  return (
    <div
    className={`box stack-top duration-500`}>
    <section className="flex gap-6">
      <div
        className={`bg-[#c2b936] ${
          open2 ? "w-screen h-screen" : "w-10 h-20 mt-24"
        } duration-500 text-gray-100 px-0 `}
      >
        <div className="py-5 flex justify-end ">
          <IoChevronForward  
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen2(!open2)}
           
          />
        </div>

      </div>

    </section>
    </div>
  );
};

const Home = () => {
  const menus = [
    { name: "dashboard", link: "/MyMap", icon: MdOutlineDashboard },
    { name: "user", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  
    return (
    <section className="flex gap-0 main">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
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
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-100 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>

      </div>
      <div className="tabbed">
      <Gifts/> 
      <Info/>
      </div>

      


      <div className="map">
        <Map> 

        </Map>
      </div>

    </section>
  );
};

export default Home;