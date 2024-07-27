import React from "react";
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

function Projects() {
  return (
    <div>
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {/* PROJECT1 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
              <div className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>vBlog</CardTitle>
                    <CardDescription>
                      A full stack blog application built with ReactJS and
                      Appwrite, allowing users to register, log in, create posts
                      with rich text and images.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="/p1.png"
                      alt="vBlog"
                      className="fixed-image-size rounded-lg"
                    />
                    <div className="flex gap-5 mt-4">
                      <Button variant="outline" size="sm">
                        View Demo
                      </Button>
                      <div>
                        <Link
                          href="https://github.com/vedantabanerjee/vBlog"
                          target="_blank"
                          prefetch={false}
                        >
                          <Button variant="outline" size="sm">
                            GitHub Repo
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            {/* PROJECT2 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
              <div className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>GreenIndia</CardTitle>
                    <CardDescription>
                      Discover and learn about green energy produced across
                      India. Support sustainable energy and make responsible
                      decisions to fight climate change.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="/greenindia.png"
                      alt="GreenIndia"
                      className="fixed-image-size rounded-lg"
                    />

                    <div className="flex mt-4 gap-5 ">
                      <Link
                        href="https://greenindia.vercel.app"
                        target="_blank"
                        prefetch={false}
                      >
                        <Button variant="outline" size="sm">
                          Visit Site
                        </Button>
                      </Link>
                      <div>
                        <Link
                          href="https://github.com/vedantabanerjee/greenindia_app"
                          target="_blank"
                          prefetch={false}
                        >
                          <Button variant="outline" size="sm">
                            GitHub Repo
                          </Button>
                        </Link>
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
    </div>
  );
}

export default Projects;
