"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface ToppicProps {
  isActive: boolean;
  text: string;
  onSetActive: () => void;
}

const ToppicListen = ({ isActive, text, onSetActive }: ToppicProps) => {
  return (
    <div
      className={
        "w-1/2 h-6 flex items-center justify-center rounded-2xl cursor-pointer text-xs  " +
        (isActive ? "switch-btn" : "bg-active-extra")
      }
      onClick={() => onSetActive()}
    >
      {text}
    </div>
  );
};

const MenuRight = () => {
  const [isSwitch, setSwitch] = useState<boolean>(false);
  return (
    <div className="menu-right">
      <div className="h-spc70 flex flex-row flex-wrap items-center justify-around">
        <div className="w-3/4 bg-active-extra flex rounded-2xl p-1">
          <ToppicListen
            isActive={!isSwitch}
            text="Danh sách phát"
            onSetActive={() => setSwitch(false)}
          />
          <ToppicListen
            isActive={isSwitch}
            text="Nghe gần đây"
            onSetActive={() => setSwitch(true)}
          />
        </div>

        <div className="w-8 h-8 rounded-1/2 bg-active-extra cursor-pointer flex items-center justify-center">
          <FontAwesomeIcon icon={faStopwatch} />
        </div>
        <div className="w-8 h-8 rounded-1/2 bg-active-extra cursor-pointer flex items-center justify-center">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
    </div>
  );
};

export default MenuRight;
