import Image from "next/image";
import { PlayingCard } from "../../../public/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faHeart,
  faShuffle,
  faRepeat,
  faEllipsis,
  faVolumeHigh,
  faForwardStep,
  faVolumeXmark,
  faClapperboard,
  faMicrophoneLines,
} from "@fortawesome/free-solid-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-player">
      <div>
        <div className="card-song-playing mr-4">
          <Image src={PlayingCard} alt="" width={64} height={64} />
        </div>
        <div className="text-song-playing mr-4">
          <p className="text-active font-semibold mb-1">Người lạ thoáng qua</p>
          <p className="text-xs">Người lạ thoáng qua</p>
        </div>
        <div className="flex items-center">
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center gap-4">
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faShuffle} />
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faForwardStep} transform={{ rotate: 180 }} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-1/2 border">
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faForwardStep} />
          </div>

          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faRepeat} />
          </div>
        </div>
        <div className="w-full flex items-center">
          <input type="range" className="w-full h-[3px]" />
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faClapperboard} />
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faMicrophoneLines} />
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            {/* <FontAwesomeIcon icon={faVolumeXmark} /> */}
            <FontAwesomeIcon icon={faVolumeHigh} />
          </div>
          <div className="pr-5 flex items-center">
            <input type="range" className="w-20 h-1" />
          </div>
          <div className="bg-active-extra w-[1px] min-h-5"></div>
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-primary">
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
