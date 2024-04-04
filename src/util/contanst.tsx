import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faHeadset,
  faChartLine,
  faMusic,
  faPhotoFilm,
  faStar,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";

const publicPath = {
  home: "/",
  library: "thu-vien",
  zingChart: "zing-chart",
  radio: "radio",
  newRelease: "moi-phat-hanh",
  theme_toppic: "hub",
  top100: "top100",
};

const linkMap = [
  {
    name: "Thư viện",
    path: publicPath.library,
    icon: <FontAwesomeIcon icon={faPhotoFilm} />,
  },
  {
    name: "Khám phá",
    path: publicPath.home,
    icon: <FontAwesomeIcon icon={faBullseye} />,
  },
  {
    name: "Zing-chart",
    path: publicPath.zingChart,
    icon: <FontAwesomeIcon icon={faChartLine} />,
  },
  {
    name: "Radio",
    path: publicPath.radio,
    icon: <FontAwesomeIcon icon={faHeadset} />,
  },
  {
    name: "BXH mới",
    path: publicPath.newRelease,
    icon: <FontAwesomeIcon icon={faMusic} />,
  },
  {
    name: "Chủ đề & Thể loại",
    path: publicPath.newRelease,
    icon: <FontAwesomeIcon icon={faTableList} />,
  },
  {
    name: "Top100",
    path: publicPath.newRelease,
    icon: <FontAwesomeIcon icon={faStar} />,
  },
];

export { publicPath, linkMap };
