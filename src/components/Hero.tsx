import React from 'react'
import Link from "next/link";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function Hero() {
  return (
    <div className="flex-1 px-6 py-12 md:px-10 lg:px-16">
        <section
          id="hero"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Hi, I'm Vedanta Banerjee</h1>
            <p className="text-muted-foreground text-lg">
              I'm a full-stack software engineer with a passion for building
              beautiful and functional software solutions using AI.
            </p>
            <div className="flex gap-4">
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
              src="/pfp.png"
              alt="vedantabanerjee"
              width={500}
              height={500}
              className="rounded-full w-full max-w-[300px] mx-auto"
            />
          </div>
        </section>
        <section
          id="about"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">
              I'm a full-stack software engineer building web applications. I'm
              passionate about creating user-friendly and scalable solutions
              that solve real-world problems using Software, AI, and ML.
            </p>
            <p className="text-muted-foreground mt-4 pb-3">
              In my free time, I enjoy exploring new technologies, staying
              up-to-date with the latest industry trends and make music (like music? check out my music page!)
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Education</h3>
              <p className="text-muted-foreground">
                <b>Bachelor of Technology (B.Tech)</b> in Applied Electronics
                and Instrumentation Engineering
                <br />
                Heritage Institute of Technology, Kolkata
              </p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Experience</h3>
              <p className="text-muted-foreground">
                Full-Stack Software Engineering Intern
                <br />
                <b>Advent EduTech</b> [Current]
              </p>
              <br></br>
              <p className="text-muted-foreground">
                Software Developement Engineering Intern
                <br />
                <b>Zivaka LLP</b> [Jan - March 2024]
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
                  Udemy
                </a>
                {/* <br />
                Google Cloud Certified Professional */}
              </p>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Awards</h3>
              <p className="text-muted-foreground">
                Top Contributor, Open Source Community
                <br />
                Best Hackathon Project, HackUPC 2021
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="py-12">
          <h2 className="text-3xl font-bold mb-8">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
              <CodeIcon className="w-8 h-8 text-[#4285F4] mb-2" />
              <h3 className="text-lg font-bold">Frontend</h3>
              <p className="text-muted-foreground text-sm">
                HTML, CSS, JavaScript, React, Next
              </p>
            </div>
            <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
              <ServerIcon className="w-8 h-8 text-[#4285F4] mb-2" />
              <h3 className="text-lg font-bold">Backend</h3>
              <p className="text-muted-foreground text-sm">Node.js, Python</p>
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
        </section>
        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold mb-8">My Projects</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project 1</CardTitle>
                      <CardDescription>
                        A full-stack web application built with React, Node.js,
                        and MongoDB.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/placeholder.svg"
                        alt="Project 1"
                        width={500}
                        height={300}
                        className="rounded-t-lg object-cover w-full"
                      />
                      <div className="p-4">
                        <p className="text-muted-foreground">
                          This project is a web application that allows users to
                          manage their tasks and projects. It features a modern
                          and intuitive user interface, as well as advanced
                          features such as real-time collaboration and
                          reporting.
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            View Demo
                          </Button>
                          <Button variant="outline" size="sm">
                            View Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project 2</CardTitle>
                      <CardDescription>
                        A mobile-first e-commerce application built with React
                        Native and Firebase.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/placeholder.svg"
                        alt="Project 2"
                        width={500}
                        height={300}
                        className="rounded-t-lg object-cover w-full"
                      />
                      <div className="p-4">
                        <p className="text-muted-foreground">
                          This project is a mobile-first e-commerce application
                          that allows users to browse and purchase products. It
                          features a modern and responsive user interface, as
                          well as advanced features such as real-time inventory
                          management and order tracking.
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            View Demo
                          </Button>
                          <Button variant="outline" size="sm">
                            View Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project 3</CardTitle>
                      <CardDescription>
                        A data visualization dashboard built with React, D3.js,
                        and Recharts.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="/placeholder.svg"
                        alt="Project 3"
                        width={500}
                        height={300}
                        className="rounded-t-lg object-cover w-full"
                      />
                      <div className="p-4">
                        <p className="text-muted-foreground">
                          This project is a data visualization dashboard that
                          allows users to analyze and visualize complex data
                          sets. It features a variety of interactive charts and
                          graphs, as well as advanced filtering and sorting
                          capabilities.
                        </p>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm">
                            View Demo
                          </Button>
                          <Button variant="outline" size="sm">
                            View Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <form className="grid gap-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button type="submit" className="justify-self-end">
                Send Message
              </Button>
            </form>
          </div>
        </section>
    </div>
  )
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
export default Hero