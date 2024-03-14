"use client";

import useFocus from "@/hooks/useFocus";
import {
  faMagnifyingGlass,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const listSuggets = [
  "Nâng chén tiêu sầu",
  "sau lời khước từ",
  "từng là",
  "có lẽ bên nhau à sai",
  "thủy triều",
  "thiên lý ơi",
];
const SearchBox = () => {
  const { ref, isFocus } = useFocus();
  return (
    <div className="w-[88%] relative min-h-[40px]">
      <div
        className={
          "w-full absolute top-0 left-0 group-search " +
          (isFocus ? "bg-purple-bold" : "bg-active-extra")
        }
        ref={ref}
      >
        <div className="flex items-center gap-1 search-box h-10">
          <button className="w-10">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát ..."
            className="w-[calc(100%_-_44px)] bg-transparent outline-none border-none"
          />
        </div>
        {isFocus && (
          <div className="w-full p-4 ">
            <div className="sugget-search">
              <p className="text-active font-semibold mb-1 px-1">
                Đề xuất cho bạn
              </p>
              {listSuggets.map((item, index) => {
                return (
                  <Link
                    href={`/tim-kiem/${item}`}
                    className="text-active py-2 px-1 cursor-pointer flex items-center gap-3 rounded"
                    key={index}
                  >
                    <FontAwesomeIcon icon={faArrowTrendUp} />
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
