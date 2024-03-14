import SearchBox from "@/components/searchBox";
import {
  faArrowRight,
  faDownload,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { UserDefault } from "../../../public/images";

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
        <button className="w-9 h-9 rounded-[50%] overflow-hidden">
          <Image src={UserDefault} alt="" width={36} height={36} />
        </button>
      </div>
    </div>
  );
};

export default Header;
