"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../../../../public/images";
import { linkMap } from "@/src/util/contanst";
import { usePathname } from "next/navigation";
// import Login from "@/components/login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Login from "@/src/components/login";

const MenuLeft = () => {
  const pathName = usePathname();

  return (
    <div className="menu menu-left">
      <div className="w-full flex items-center h-spc70 px-6 border-l-4 border-transparent">
        <Link href={"/"} className="h-11">
          <Image
            src={Logo}
            width={120}
            height={40}
            alt="logo"
            className="h-10"
          />
        </Link>
      </div>
      <div>
        {linkMap.slice(0, 4).map((item, index) => {
          return (
            <Link
              key={index}
              href={item.path}
              className={
                "flex gap-4 items-center px-6 h-12 border-l-[3px] font-semibold capitalize " +
                (pathName === item.path
                  ? "text-active navlink-active"
                  : "text-link border-transparent")
              }
            >
              {item?.icon}
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="mx-7 my-1 separation"></div>
      <div className="overflow-y-auto h-auto">
        {linkMap.slice(4).map((item, index) => {
          return (
            <Link
              key={index}
              href={item.path}
              className={
                "flex items-center px-6 gap-4  h-12 border-l-[3px] font-semibold capitalize " +
                (pathName === item.path
                  ? "text-active navlink-active"
                  : "text-link border-transparent")
              }
            >
              {item?.icon}
              {item.name}
            </Link>
          );
        })}
        <Login />
      </div>

      <button className="create-playlis text-link">
        <span className="ml-1">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        Tạo playlist mới
      </button>
    </div>
  );
};

export default MenuLeft;
