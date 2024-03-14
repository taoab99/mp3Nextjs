"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import {
  Imageplay1,
  Imageplay2,
  Imageplay3,
  Imageplay4,
  Imageplay5,
  Imageplay6,
} from "..//public/images";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MusicDiscovery = () => {
  const [isRunSlide, setRunSlide] = useState<boolean>(true);
  const slideRef = useRef<HTMLDivElement>(null);
  const fakeListAlbum = [
    {
      img: Imageplay1,
    },
    {
      img: Imageplay2,
    },
    {
      img: Imageplay3,
    },
    {
      img: Imageplay4,
    },
    {
      img: Imageplay5,
    },
    {
      img: Imageplay6,
    },
  ];
  const handleMoveSlide = (isPrev?: boolean) => {
    if (slideRef.current) {
      const childRef = slideRef?.current?.children;
      if (childRef && childRef.length > 0) {
        const selectedCl = childRef[2].className.includes(
          "gallery-item-selected"
        );
        const nextCl = childRef[2].className.includes("gallery-item-next");
        const addCl = childRef[2].className.includes("gallery-item-add");
        const lastCl = childRef[2].className.includes("gallery-item-last");
        const firstCl = childRef[2].className.includes("gallery-item-first");
        const previousCl = childRef[2].className.includes(
          "gallery-item-previous"
        );

        switch (true) {
          case selectedCl:
            for (let i = 0; i <= childRef.length; i++) {
              switch (i) {
                case 2:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-next");
                  } else {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-previous");
                  }
                  break;
                case 3:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-add");
                  } else {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-selected");
                  }
                  break;
                case 4:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-last");
                  } else {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-next");
                  }
                  break;
                case 5:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-first");
                  } else {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-add");
                  }
                  break;
                case 6:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-previous");
                  } else {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-last");
                  }
                  break;
                case 7:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-selected");
                  } else {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-first");
                  }
                  break;

                default:
                  break;
              }
            }
            break;
          case previousCl:
            for (let i = 0; i <= childRef.length; i++) {
              switch (i) {
                case 2:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-selected");
                  } else {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-first");
                  }
                  break;
                case 3:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-next");
                  } else {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-previous");
                  }
                  break;
                case 4:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-add");
                  } else {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-selected");
                  }
                  break;
                case 5:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-last");
                  } else {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-next");
                  }
                  break;
                case 6:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-first");
                  } else {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-add");
                  }
                  break;
                case 7:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-previous");
                  } else {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-last");
                  }
                  break;

                default:
                  break;
              }
            }
            break;
          case firstCl:
            for (let i = 0; i <= childRef.length; i++) {
              switch (i) {
                case 2:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-previous");
                  } else {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-last");
                  }
                  break;
                case 3:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-selected");
                  } else {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-first");
                  }
                  break;
                case 4:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-next");
                  } else {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-previous");
                  }
                  break;
                case 5:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-add");
                  } else {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-selected");
                  }
                  break;
                case 6:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-last");
                  } else {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-next");
                  }
                  break;
                case 7:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-first");
                  } else {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-add");
                  }
                  break;

                default:
                  break;
              }
            }
            break;
          case lastCl:
            for (let i = 0; i <= childRef.length; i++) {
              switch (i) {
                case 2:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-first");
                  } else {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-add");
                  }
                  break;
                case 3:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-previous");
                  } else {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-last");
                  }
                  break;
                case 4:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-selected");
                  } else {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-first");
                  }
                  break;
                case 5:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-next");
                  } else {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-previous");
                  }
                  break;
                case 6:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-add");
                  } else {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-selected");
                  }
                  break;
                case 7:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-last");
                  } else {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-next");
                  }
                  break;

                default:
                  break;
              }
            }
            break;
          case addCl:
            for (let i = 0; i <= childRef.length; i++) {
              switch (i) {
                case 2:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-last");
                  } else {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-next");
                  }
                  break;
                case 3:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-first");
                  } else {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-add");
                  }
                  break;
                case 4:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-previous");
                  } else {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-last");
                  }
                  break;
                case 5:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-selected");
                  } else {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-first");
                  }
                  break;
                case 6:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-next");
                  } else {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-previous");
                  }
                  break;
                case 7:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-add");
                  } else {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-selected");
                  }
                  break;

                default:
                  break;
              }
            }
            break;
          case nextCl:
            for (let i = 0; i <= childRef.length; i++) {
              switch (i) {
                case 2:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-add");
                  } else {
                    childRef[i].classList.remove("gallery-item-next");
                    childRef[i].classList.add("gallery-item-selected");
                  }
                  break;
                case 3:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-last");
                  } else {
                    childRef[i].classList.remove("gallery-item-add");
                    childRef[i].classList.add("gallery-item-next");
                  }
                  break;
                case 4:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-first");
                  } else {
                    childRef[i].classList.remove("gallery-item-last");
                    childRef[i].classList.add("gallery-item-add");
                  }
                  break;
                case 5:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-previous");
                  } else {
                    childRef[i].classList.remove("gallery-item-first");
                    childRef[i].classList.add("gallery-item-last");
                  }
                  break;
                case 6:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-selected");
                  } else {
                    childRef[i].classList.remove("gallery-item-previous");
                    childRef[i].classList.add("gallery-item-first");
                  }
                  break;
                case 7:
                  if (isPrev) {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-next");
                  } else {
                    childRef[i].classList.remove("gallery-item-selected");
                    childRef[i].classList.add("gallery-item-previous");
                  }
                  break;

                default:
                  break;
              }
            }
            break;
          default:
            break;
        }
      }
    }
  };

  const resultClass = (index: number) => {
    let className = "gallery-item-selected";
    switch (index) {
      case 1:
        className = "gallery-item-next";
        break;
      case 2:
        className = "gallery-item-add";
        break;
      case 3:
        className = "gallery-item-last";
        break;
      case 4:
        className = "gallery-item-first";
        break;
      case 5:
        className = "gallery-item-previous";
        break;
      default:
        className = "gallery-item-selected";
        break;
    }
    return className;
  };

  useEffect(() => {
    const idSlide = isRunSlide && setInterval(handleMoveSlide, 5000);
    return () => {
      idSlide && clearInterval(idSlide);
    };
  }, [isRunSlide]);
  return (
    <div
      className="gallery"
      ref={slideRef}
      onMouseOver={() => setRunSlide(false)}
      onMouseOut={() => setRunSlide(true)}
    >
      <Button
        className="btn-slide left-2"
        icon={<FontAwesomeIcon icon={faChevronLeft} size="xl" />}
        onBtn={() => handleMoveSlide(true)}
      />
      <Button
        className="btn-slide right-2"
        icon={
          <FontAwesomeIcon
            icon={faChevronLeft}
            size="xl"
            transform={{ rotate: 180 }}
          />
        }
        onBtn={handleMoveSlide}
      />
      {fakeListAlbum.map((item, index) => {
        return (
          <div className={"gallery-item " + resultClass(index)} key={index}>
            <div className={"gallery-card "}>
              <Link href={"/"}>
                <Image
                  src={item.img}
                  alt=""
                  className="w-full h-full"
                  width={200}
                  height={150}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MusicDiscovery;
