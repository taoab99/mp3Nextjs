"use client";
import { UserDefault } from "@/public/images";
import { Button } from "@/src/components/Button";
import SearchBox from "@/src/components/searchBox";
import { handleLogout } from "@/src/services/login";
import {
  faArrowRight,
  faDownload,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header">
      <div className="w-5/12 flex items-center gap-5">
        <div className="flex w-[12%] items-center gap-5">
          <button className="">
            <FontAwesomeIcon
              icon={faArrowRight}
              transform={{ rotate: 180 }}
              size="xl"
            />
          </button>
          <button>
            <FontAwesomeIcon icon={faArrowRight} size="xl" />
          </button>
        </div>
        <SearchBox />
      </div>
      <div className="flex items-center justify-end gap-4">
        <button className="h-9 flex items-center justify-center gap-3 font-bold px-6 rounded-[20px] bg-active-extra purple-color">
          <FontAwesomeIcon icon={faDownload} />
          Tải bản Windows
        </button>
        <button className="w-9 h-9 bg-active-extra rounded-[50%] flex items-center justify-center">
          <FontAwesomeIcon icon={faGear} size="lg" />
        </button>
        <Button
          className="w-9 h-9 rounded-[50%] overflow-hidden"
          onBtn={handleLogout}
          icon={<Image src={UserDefault} alt="" width={36} height={36} />}
        ></Button>
      </div>
    </div>
  );
};

export default Header;
