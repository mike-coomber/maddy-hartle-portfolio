"use client";

import { useState } from "react";
import ReactPlayer from "react-player";
import { PulseLoader } from "react-spinners";

export function VideoPlayer({ url }: { url: string }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const height = "1200px";
  const width = "1100px";

  return (
    <div className="flex flex-1 gap-2 justify-center absolute max-w-full">
      <div
        className="z-20 absolute"
        onMouseDown={(e) => setIsPlaying(!isPlaying)}
      />
      <ReactPlayer
        url={url}
        playing={isPlaying}
        onReady={() => setIsReady(true)}
        volume={0.1}
        onClick={() => setIsPlaying(!isPlaying)}
        controls={false}
        style={{ display: isReady ? "flex" : "none" }}
        loop={true}
      />
      {!isReady && (
        <div className="relative z-10">
          <PulseLoader size={20} color={"black"} />
        </div>
      )}
    </div>
  );
}
