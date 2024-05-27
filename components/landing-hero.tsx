"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-gray-800 font-bold lg:py-36 py-24 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1 className="text-gray-900 dark:text-gray-100">
          More Growth, More Clients.
        </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Guaranteed.
        </div>
      </div>

      <br />
      <div className="my-6">
        <Link href="#contact-us" passHref>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold bg-indigo-100 hover:bg-indigo-200 dark:text-white"
          >
            Yes, I want to grow!
          </Button>
        </Link>
      </div>
      {/* <div className="text-gray-500 dark:text-gray-300 text-xs md:text-sm font-normal">
        No credit card required.
      </div> */}
    </div>
  );
};
