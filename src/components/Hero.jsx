import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import DevProjects from "@/components/DevProjects"; // Ensure the paths are correct
import AimlProjects from "@/components/AimlProjects"; // Ensure the paths are correct
import ContactMe from "@/components/ContactMe"; // Ensure the paths are correct

const fadeInVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <div className="flex-1 px-6 py-12 md:px-10 lg:px-16 ">
      <motion.section
        id="hero"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={fadeInVariants}
      >
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Vedanta Banerjee.</h1>
          <p className="text-muted-foreground text-base">
            Digital Craftsman ( Engineer / Developer / Musician )
          </p>
          <p className="text-muted-foreground text-lg pb-5">
            Hi, I am vedanta, a software programmer, electronics engineer and
            tech enthusiast trying to turn challenges into innovative solutions
            with a touch of creativity and a dash of fun!
          </p>
          <div className="flex gap-5">
            <Link
              href="https://drive.google.com/file/d/1GCslSw7D78pT2yPCruVp4Li6Kb6X2jo_/view?usp=sharing"
              className="inline-flex items-center justify-center rounded-md bg-[#4285F4] px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#4285F4]/90 focus:outline-none focus:ring-2 focus:ring-[#4285F4] focus:ring-offset-2"
              prefetch={false}
            >
              View Resume
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              prefetch={false}
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="/hero_gif_2.webp"
            alt="GIF"
            className="rounded-full w-full max-w-[450px] mx-auto border-4 border-gray-200"
          />
        </div>
      </motion.section>
      <motion.section
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={fadeInVariants}
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Thanks for stopping by! I am a indie software developer and a
            philomath from India. Academically, currently pursuing undergraduate
            degree in electronics and instrumentation engineering. I am deeply
            passionate about computers (both hardware and software), space
            (cosmology), books and music! I like creating digital solutions that
            make a real impact - brings me joy!
          </p>
          <p className="text-muted-foreground mt-4 pb-3">
            When I am not fixing bugs or tinkering with electronics, you might
            find me indulging in my love for music, hanging out with my camera
            and guitar, or diving into a good book. The goal is to have fun
            while practicing the art of making for betterment of the world.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Education</h3>
            <p className="text-muted-foreground">
              <b>Bachelor of Technology (B.Tech)</b> in Applied Electronics and
              Instrumentation Engineering - Heritage Institute of Technology,
              Kolkata
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Latest Experience</h3>
            <p className="text-muted-foreground">
              Full-Stack Software Engineering Intern at
              <b> Advent EduTech</b>
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Certifications</h3>
            <p className="text-muted-foreground">
              Python for Data Science and Machine Learning Bootcamp
              <a
                href="https://www.udemy.com/certificate/UC-7762da0b-11d5-4dc8-9fe6-22ed716cb9f2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {" "}
                [Udemy Certificate]
              </a>
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Latest Achievements</h3>
            <p className="text-muted-foreground">
              Won $1000 as 1st runner up in the Web3 & AI Hachathon by Encode
              Club.
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="skills"
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={fadeInVariants}
      >
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
            <CodeIcon className="w-8 h-8 text-[#4285F4] mb-2" />
            <h3 className="text-lg font-bold">Frontend</h3>
            <p className="text-muted-foreground text-sm">
              HTML, CSS, React, Next
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
            <ServerIcon className="w-8 h-8 text-[#4285F4] mb-2" />
            <h3 className="text-lg font-bold">Backend</h3>
            <p className="text-muted-foreground text-sm">
              JavaScript, Node.js, Python
            </p>
          </div>
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
            <DatabaseIcon className="w-8 h-8 text-[#4285F4] mb-2" />
            <h3 className="text-lg font-bold">Databases</h3>
            <p className="text-muted-foreground text-sm">mySQL, MongoDB</p>
          </div>
          <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
            <CloudIcon className="w-8 h-8 text-[#4285F4] mb-2" />
            <h3 className="text-lg font-bold">Cloud</h3>
            <p className="text-muted-foreground text-sm">AWS,Vercel</p>
          </div>
        </div>
      </motion.section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={fadeInVariants}
      >
        <DevProjects />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={fadeInVariants}
      >
        <AimlProjects />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={fadeInVariants}
      >
        <ContactMe />
      </motion.div>
    </div>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function ServerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
export default Hero;
