"use client";

import { appStore } from "@/Store/appStore";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  const { formattedDate, updateFormattedDate } = appStore();

  useEffect(() => {
    updateFormattedDate(); // Update immediately
    const timer = setInterval(updateFormattedDate, 1000);
    return () => clearInterval(timer); 
  }, [updateFormattedDate]);

  const links = [
    { href: "/collections/summer-collection", label: "Summer Collection" },
    { href: "/collections/women", label: "Women" },
    { href: "/collections/men", label: "Men" },
  ];

  const socialLinks = [
    { href: "#", alt: "Instagram", src: "/socials/instagram.png" },
    { href: "#", alt: "Twitter", src: "/socials/twitter.png" },
    { href: "#", alt: "Facebook", src: "/socials/facebook.png" },
    { href: "#", alt: "Tiktok", src: "/socials/tiktok.png" },
  ];

  return (
    <div className="relative overflow-hidden flex flex-col min-h-screen items-center px-4 sm:px-6 lg:px-12 pt-4">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] filter brightness-95"
      >
        <source src="/background/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content Container */}
      <div className="relative w-full max-w-8xl mx-auto pb-40 sm:pb-24">
        {/* Top Marquee */}
        <div className="bg-black  p-2 rounded-md shadow-lg">
          <Marquee
            className="text-xs sm:text-sm font-bold text-white"
            speed={60}
          >
            Join The WADE CLAN Today! .......................................
            Free Shipping for Orders Over $250 CAD – Because You Deserve
            It..................................
          </Marquee>
        </div>

        {/* Logo Section */}
        <Link
          href="/"
          className="block transition-transform hover:scale-105 duration-300"
        >
          <div className="w-full max-w-[100px] mx-auto my-8 mt-24">
            <Image
              src="/logo.png"
              alt="Wade Logo"
              width={150}
              height={37}
              priority
              className="w-full h-auto object-contain drop-shadow-md"
            />
          </div>
        </Link>

        {/* Date and Time */}
        <div className=" max-w-xs mx-auto text-xs text-center font-mono tracking-wider text-neutral-700 mb-8 backdrop-blur-sm py-1">
          {formattedDate}
        </div>

        {/* Navigation */}
        <nav className="max-w-xs mx-auto space-y-4">
          {links.map((link) => (
            <div
              key={link.label}
              className="group relative flex justify-center items-center overflow-hidden"
            >
              <Link
                href={link.href}
                className="relative z-10 w-full text-center"
              >
                <span className="inline-block w-full py-3 text-sm font-medium text-red-500 group-hover:text-white transition-colors duration-300 tracking-widest">
                  {link.label}
                </span>
              </Link>
              <div className="absolute inset-0 bg-red-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </div>
          ))}
        </nav>

        {/* Social Media */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          {socialLinks.map((social) => (
            <Link
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 duration-200"
            >
              <Image
                src={social.src}
                alt={social.alt}
                width={16}
                height={16}
                className="w-5 h-5 object-contain opacity-80 hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
