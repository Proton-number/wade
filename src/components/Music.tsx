"use client";

import { Play, Pause } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const requestRef = useRef<number | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the audio
        cancelAnimationFrame(requestRef.current!);
      } else {
        if (!audioRef.current.src) {
          audioRef.current.src =
            "/musicPlayer/Travis Scott feat. Young Thug & M.I.A. - FRANCHISE (Official Music Video).m4a";
        }
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
        rotate();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const rotate = () => {
    requestRef.current = requestAnimationFrame(() => {
      setIsRotating((prev) => prev + 0.5); // Adjust rotation speed as needed
      rotate();
    });
  };

  useEffect(() => {
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed bottom-0 right-0 p-4 flex flex-col-reverse
     sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0"
    >
      <div
        style={{ transform: `rotate(${isRotating}deg)` }}
        className="transition-transform relative w-12 h-12 sm:w-20 sm:h-20"
      >
        <Image
          src="/musicPlayer/music-cover.png"
          alt="Album Cover"
          fill
          className="rounded object-cover"
        />
      </div>
      <div className="flex items-center">
        <audio ref={audioRef} loop />
        <button
          onClick={togglePlay}
          className="p-0 w-auto h-auto hover:bg-transparent transition-transform hover:scale-110 cursor-pointer"
          aria-label={isPlaying ? "Pause Music" : "Play Music"}
        >
          {isPlaying ? (
            <Pause className="h-8 w-8 sm:h-10 sm:w-10" />
          ) : (
            <Play className="h-8 w-8 sm:h-10 sm:w-10" />
          )}
        </button>
      </div>
    </div>
  );
}
