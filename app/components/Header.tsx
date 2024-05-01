import Image from "next/image";
import React from "react";
import Image1 from "../../public/airbnb-desktop.png";

const Header = () => {
  return (
    <header className="container mx-auto">
      <div className="flex justify-between items-center pt-8 ">
        <Image
          className="object-cover"
          src={Image1}
          alt="logo"
          width={100}
          height={50}
        />

        <ul className="hidden md:flex gap-6 md:gap-4 text-base font-medium list-none">
          <li>Courses</li>
          <li>About Us</li>
          <li>Teachers</li>
          <li>Pricing</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>

        <button className="bg-cyan-400 text-indigo-600 px-4 py-2 rounded-full">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
