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

function AimlProjects() {
  return (
    <div>
      <section id="projects" className="py-12">
        <h2 className="text-3xl font-bold mb-8">My AI & ML Projects</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {/* PROJECT1 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
              <div className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      CIFAR-10 Image Classification using Convolutional Neural
                      Networks (CNNs)
                    </CardTitle>
                    <CardDescription className="pt-3">
                      This project aims to develop a model that can classify
                      images from the CIFAR-10 dataset into one of ten
                      categories. Using convolutional neural networks (CNNs), we
                      will explore the dataset, preprocess the data, train the
                      model, and evaluate its performance.
                      <br />
                      <br />
                      More detailed information can be found in the GitHub
                      repository:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <Link
                        href="https://github.com/vedantabanerjee/cifar.cnn"
                        target="_blank"
                        prefetch={false}
                      >
                        <Button variant="outline" size="sm">
                          GitHub Repo
                        </Button>
                      </Link>
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
                    <CardTitle>
                      Car Purchase Amount Prediction using Artificial Neural
                      Networks (ANNs)
                    </CardTitle>
                    <CardDescription className="pt-3">
                      An artificial neural network model used to predict the
                      amount a customer is willing to spend on a car based on
                      different factors/features of the customer. This model
                      achieved an R2 score of 0.9892339 and can help car
                      salesmen better understand their customers.
                      <br />
                      <br />
                      More detailed information can be found in the GitHub
                      repository:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <Link
                        href="https://github.com/vedantabanerjee/car.ann"
                        target="_blank"
                        prefetch={false}
                      >
                        <Button variant="outline" size="sm">
                          GitHub Repo
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            {/* PROJECT 3 */}
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
              <div className="p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Prediction of customer behavior about paying back lended
                      funds on parameters using Machine Learning
                    </CardTitle>
                    <CardDescription className="pt-3">
                      This is a Financial Analysis project that aims to predict
                      whether a new customer will pay back the loan or not based
                      on certain parameters using Decision Trees and Random
                      Forest.
                      <br />
                      <br />
                      More detailed information can be found in the GitHub
                      repository:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <Link
                        href="https://github.com/vedantabanerjee/ML_DTandRF"
                        target="_blank"
                        prefetch={false}
                      >
                        <Button variant="outline" size="sm">
                          GitHub Repo
                        </Button>
                      </Link>
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

export default AimlProjects;
