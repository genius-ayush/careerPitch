"use client";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Particles } from "./ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Desktop from "./ui/desktop";

function Hero() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="px-4 md:px-8">
      {/* Announcement Badge */}
      <div className="flex pt-20 md:pt-32 items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Introducing CareerPitch</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>

      {/* Heading */}
      <div className="flex justify-center mt-6">
        <h1 className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-transparent dark:from-white dark:to-gray-400 w-full sm:w-4/5 lg:w-3/4">
          CareerPitch is the new way to get job referrals.
        </h1>
      </div>

      {/* Subtext */}
      <div className="flex justify-center mt-4">
        <p className="text-center font-light text-lg sm:text-xl w-full sm:w-3/4 md:w-1/2 text-gray-300">
          Beautifully designed, AI-powered messages that help you stand out and get responses from potential referrers at your dream companies.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-6 mb-16 sm:mb-24">
        <Button>Get started for free</Button>
      </div>

      {/* Desktop UI Preview */}
      <Desktop />

      {/* Particles */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}

export default Hero;
