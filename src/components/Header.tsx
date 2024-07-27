import React, { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaMusic,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <Link
        href="/"
        className="text-2xl font-bold text-[#4285F4]"
        prefetch={false}
      >
        VB
      </Link>
      <nav className={`hidden md:flex items-center gap-6`}>
        <Link
          href="https://github.com/vedantabanerjee"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <FaGithub className="inline-block mr-2" /> Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/vedanta-banerjee"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <FaLinkedin className="inline-block mr-2" /> LinkedIn
        </Link>
        <Link
          href="https://medium.com/@vedantabanerjee"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <FaMedium className="inline-block mr-2" /> Medium
        </Link>
        <Link
          href="https://x.com/0xr1sh1"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <FaTwitter className="inline-block mr-2" /> Twitter
        </Link>
        <Link
          href="/music"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <FaMusic className="inline-block mr-2" /> Music
        </Link>
      </nav>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
        <span className="sr-only">Toggle navigation</span>
      </button>
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg py-2 w-48 z-50 md:hidden">
          <Link
            href="https://github.com/yourusername"
            className="block px-4 py-2 text-muted-foreground hover:text-foreground bg-white"
            prefetch={false}
          >
            <FaGithub className="inline-block mr-2" /> Github
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            className="block px-4 py-2 text-muted-foreground hover:text-foreground bg-white"
            prefetch={false}
          >
            <FaLinkedin className="inline-block mr-2" /> LinkedIn
          </Link>
          <Link
            href="/music"
            className="block px-4 py-2 text-muted-foreground hover:text-foreground bg-white"
            prefetch={false}
          >
            <FaMusic className="inline-block mr-2" /> Music
          </Link>
          <Link
            href="https://medium.com/@yourusername"
            className="block px-4 py-2 text-muted-foreground hover:text-foreground bg-white"
            prefetch={false}
          >
            <FaMedium className="inline-block mr-2" /> Medium
          </Link>
          <Link
            href="https://twitter.com/yourusername"
            className="block px-4 py-2 text-muted-foreground hover:text-foreground bg-white"
            prefetch={false}
          >
            <FaTwitter className="inline-block mr-2" /> Twitter
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

/**
 * BUGS:
 * 1. UI - The dropdown menu of the navbar links on smaller screens has a transparent background.
 */
