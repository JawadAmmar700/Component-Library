"use client";
import { useScroll } from "@/lib/hooks/use-scroll";
import {
  ArrowRightIcon,
  MailIcon,
  PaletteIcon,
  RocketIcon,
  ZapIcon,
} from "lucide-react";
import React from "react";

const UseScrollDemo = () => {
  const { ref } = useScroll({ velocity: 1.5 });
  return (
    <div
      className="font-sans select-none h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-y-scroll"
      ref={ref}
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Welcome to Our React Universe
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10">
            Embark on a journey of limitless possibilities and cutting-edge
            solutions.
          </p>
          <a
            href="#features"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Explore Features
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Unleash the Power of Modern Web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: RocketIcon,
                title: "Responsive Design",
                description: "Seamlessly adapt to any screen size or device",
              },
              {
                icon: ZapIcon,
                title: "High Performance",
                description:
                  "Lightning-fast load times and smooth interactions",
              },
              {
                icon: PaletteIcon,
                title: "Easy to Use",
                description:
                  "Intuitive interfaces for the best user experience",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              >
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We are a team of passionate developers dedicated to pushing the
            boundaries of web technology. Our mission is to craft extraordinary
            digital experiences that not only meet but exceed expectations,
            making the web a more beautiful and functional place, one project at
            a time.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-10">
            Ready to start your next project? We're just a message away.
          </p>
          <a
            href="mailto:hello@reactuniverse.com"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-blue-400 hover:bg-blue-300 transition duration-300 ease-in-out"
          >
            <MailIcon className="mr-2 h-5 w-5" />
            hello@reactuniverse.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default UseScrollDemo;
