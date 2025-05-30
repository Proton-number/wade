"use client";

import { Play, Pause } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { request } from "http";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRotating, setIsRotating] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const requestRef = useRef<number | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
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
    <div className="fixed bottom-0 right-0  p-4 flex items-center space-x-4">
      <div
        style={{ transform: `rotate(${isRotating}deg)` }}
        className="transition-transform"
      >
        <Image
          src="/musicPlayer/music-cover.png"
          alt="Album Cover"
          width={80}
          height={80}
          className="rounded"
        />
      </div>
      <div className="flex items-center space-x-2">
        <audio ref={audioRef} loop />
        <Button
          onClick={togglePlay}
          variant="ghost"
          size="icon"
          className="hover:bg-transparent cursor-pointer"
        >
          {isPlaying ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </Button>
      </div>
    </div>
  );
}
