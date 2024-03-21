"use client";

import Image from "next/image";
import { PlayingCard } from "../../../public/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
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
import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { fomatCurrentTime } from "../../../util/format";
import InputElement from "@/components/InputElement";

const Footer = () => {
  const [song, setSong] = useState<any>();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPaused, setPaused] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(1);
  const getDetailSong = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3001/song/65fa8a40e27fc43a58ae3d44"
      );
      setSong(res.data.data.data);
    } catch (error) {}
  };

  const handleAudio = () => {
    if (audioRef.current) {
      const isPaused = audioRef.current.paused;
      isPaused ? audioRef.current.play() : audioRef.current.pause();
      setPaused(!isPaused);
    }
  };
  const handleRangeProgress = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const reCurrentTime = (+e.target.value / 100) * duration;
      setCurrentTime(+reCurrentTime);
      audioRef.current.currentTime = reCurrentTime;
    }
  };
  const handleChaneVolume = (e: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const currentVolume = +e.target.value;
      setVolume(currentVolume);
      audioRef.current.volume = currentVolume;
    }
  };
  const handleMute = () => {
    if (audioRef.current) {
      setVolume(volume > 0 ? 0 : 1);
      audioRef.current.volume = volume > 0 ? 0 : 1;
    }
  };
  useEffect(() => {
    getDetailSong();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef?.current?.duration ?? 0);
      });
      audioRef.current.addEventListener("timeupdate", () => {
        const currentTime = audioRef?.current?.currentTime;
        const duration = audioRef?.current?.duration;
        setCurrentTime(currentTime ?? 0);
        if (currentTime == duration) {
          setCurrentTime(0);
          setPaused(true);
          audioRef?.current?.pause();
        }
      });
    }
  }, [audioRef.current]);

  return (
    <div className="footer-player">
      <div>
        <div className="card-song-playing mr-4">
          <Image
            src={song?.thumbnail ?? PlayingCard}
            alt=""
            unoptimized
            width={64}
            height={64}
            className="w-full h-full"
          />
        </div>
        <div className="text-song-playing mr-4">
          <p className="text-active font-semibold mb-1">{song?.name}</p>
          <p className="text-xs">{song?.author.toString()}</p>
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
      <div className="gap-1">
        {song && (
          <audio ref={audioRef} className="hidden">
            <source src={song?.url ?? ""} type="audio/ogg" />
            <source src={song?.url ?? ""} type="audio/ogg" />
          </audio>
        )}
        <div className="flex items-center justify-center gap-4">
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faShuffle} />
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faForwardStep} transform={{ rotate: 180 }} />
          </div>
          <div
            className="w-10 h-10 flex items-center justify-center rounded-1/2 border"
            onClick={() => handleAudio()}
          >
            {isPaused ? (
              <FontAwesomeIcon icon={faPlay} />
            ) : (
              <FontAwesomeIcon icon={faPause} />
            )}
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faForwardStep} />
          </div>

          <div className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song">
            <FontAwesomeIcon icon={faRepeat} />
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-5">
          <div className="w-10">{fomatCurrentTime(currentTime)}</div>
          <div className="w-[calc(100%_-_80px)] flex items-center">
            <InputElement
              name="progress"
              type="range"
              className="h-[3px]"
              value={((currentTime / duration) * 100).toString()}
              onChange={handleRangeProgress}
            />
          </div>
          <div className="w-10">{fomatCurrentTime(duration)}</div>
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
          <div
            className="w-7 h-7 flex items-center justify-center rounded-1/2 handle-song"
            onClick={handleMute}
          >
            <FontAwesomeIcon icon={volume > 0 ? faVolumeHigh : faVolumeXmark} />
          </div>
          <div className="w-20 mr-5 flex items-center">
            <InputElement
              name="volume"
              type="range"
              min={0}
              max={1}
              step={0.1}
              className="h-1"
              value={volume}
              onChange={handleChaneVolume}
            />
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
