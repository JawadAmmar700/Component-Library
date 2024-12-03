"use client";
import { useScroll } from "@/lib/hooks/use-scroll";
import React from "react";

const Page = () => {
  const { ref } = useScroll({ velocity: 1.5 });
  return (
    <div
      className="font-sans h-[100vh] overflow-y-scroll select-none"
      ref={ref}
    >
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My React Page</h1>
        <p className="text-lg">Your one-stop solution for awesome content.</p>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Features</h2>
        <ul className="space-y-4">
          <li className="text-lg">🚀 Responsive Design</li>
          <li className="text-lg">⚡ High Performance</li>
          <li className="text-lg">🎨 Easy to Use</li>
        </ul>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto">
          We are passionate developers dedicated to creating amazing user
          experiences. Our mission is to deliver high-quality applications that
          make your life easier and more enjoyable.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="text-lg">
          Reach out to us at{" "}
          <a href="mailto:info@example.com" className="text-blue-400 underline">
            info@example.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Page;
