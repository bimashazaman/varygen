"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  //animate-bounce hover:animate-none
  return (
    <nav className="p-4  shadow-md flex items-center justify-between transition-all duration-300">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <div className="relative h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 mr-3 lg:mr-5 hover:scale-105 transform transition-transform">
            <Image layout="fill" alt="Logo" src="/logo/logo.png" />
          </div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 dark:from-purple-400 dark:to-indigo-600 hidden lg:flex">
            VaryGen
          </h1>
        </div>
      </Link>
      {/* <div className="flex items-center gap-x-3 lg:gap-x-5">
        <div className="px-4">
          <ModeToggle />
        </div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="outline"
            className="transition-all transform hover:scale-105 active:scale-100 rounded-full lg:px-8 px-4 py-2 border-2 text-gray-800 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-500 shadow-lg"
          >
            <span className="mr-2">Get Started</span>
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-600"></span>
            </span>
          </Button>
        </Link>
      </div> */}
    </nav>
  );
};
