"use client";
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon, StarIcon } from "@heroicons/react/24/outline";

interface Name {
    course: string;
    imageSrc: string;
    profession: string;
    price: string;
    category: "Law" | "Specialized" | "Mobiledevelopment" | "Webdevelopment" | "Datascience" | "Cloudcomputing";
  }
  
  const names: Name[] = [
    // Law Courses (appear first)
    { course: "Corporate Law", imageSrc: "/assets/courses/coursesOne.svg", profession: "Learn the essentials of corporate law and regulations.", price: "100", category: "Law" },
    { course: "Intellectual Property Law", imageSrc: "/assets/courses/coursesTwo.svg", profession: "Understand patents, trademarks, and copyrights.", price: "120", category: "Law" },
    { course: "Cyber Law", imageSrc: "/assets/courses/coursesThree.svg", profession: "Study legal frameworks for cybersecurity and IT.", price: "110", category: "Law" },
    { course: "Environmental Law", imageSrc: "/assets/courses/coursesFour.svg", profession: "Explore laws related to environmental protection.", price: "90", category: "Law" },
  
    // New Courses (Specialized)
    { course: "Kisan Drone Operator", imageSrc: "/assets/courses/coursesOne.svg", profession: "Operate drones for agricultural monitoring, spraying, and data collection.", price: "50", category: "Specialized" },
    { course: "Drone Service Technician", imageSrc: "/assets/courses/coursesTwo.svg", profession: "Learn to repair and maintain drone systems for various industries.", price: "60", category: "Specialized" },
    { course: "Battery System Repair Technician", imageSrc: "/assets/courses/coursesThree.svg", profession: "Specialize in repairing battery systems across multiple applications.", price: "55", category: "Specialized" },
    { course: "Drone Technician", imageSrc: "/assets/courses/coursesFour.svg", profession: "Train in repairing and servicing UAV systems for different applications.", price: "70", category: "Specialized" },
    { course: "Solar Pump Technician", imageSrc: "/assets/courses/coursesOne.svg", profession: "Install and service solar-powered water pumping systems.", price: "65", category: "Specialized" },
    { course: "Social Media Influencer", imageSrc: "/assets/courses/coursesTwo.svg", profession: "Learn strategies to build an online presence and create impactful social media content.", price: "40", category: "Specialized" },
  
    // Web Development Courses
    { course: "HTML, CSS, JS", imageSrc: "/assets/courses/coursesOne.svg", profession: "HTML, CSS, Javascript Development", price: "40", category: "Webdevelopment" },
    { course: "Node.js", imageSrc: "/assets/courses/coursesTwo.svg", profession: "Backend with Node.js and Express.js", price: "21", category: "Webdevelopment" },
    { course: "Database", imageSrc: "/assets/courses/coursesThree.svg", profession: "Learn MongoDB with Mongoose", price: "21", category: "Webdevelopment" },
    { course: "React.js", imageSrc: "/assets/courses/coursesFour.svg", profession: "Learn React with Redux toolkit", price: "99", category: "Webdevelopment" },
  
    // Mobile Development Courses
    { course: "React Native", imageSrc: "/assets/courses/coursesOne.svg", profession: "Learn React Native with Node.js", price: "89", category: "Mobiledevelopment" },
    { course: "Swift", imageSrc: "/assets/courses/coursesThree.svg", profession: "Learn Swift from Scratch", price: "89", category: "Mobiledevelopment" },
    { course: "Flutter", imageSrc: "/assets/courses/coursesFour.svg", profession: "Flutter App Development", price: "69", category: "Mobiledevelopment" },
    { course: "Onsen UI", imageSrc: "/assets/courses/coursesTwo.svg", profession: "Learn Onsen UI with HTML, CSS", price: "69", category: "Mobiledevelopment" },
  
    // Data Science Courses
    { course: "TensorFlow", imageSrc: "/assets/courses/coursesTwo.svg", profession: "Learn TensorFlow with SQL", price: "99", category: "Datascience" },
    { course: "AWS", imageSrc: "/assets/courses/coursesFour.svg", profession: "AWS Deep Learning AMI", price: "99", category: "Datascience" },
    { course: "Bokeh", imageSrc: "/assets/courses/coursesOne.svg", profession: "Learn Bokeh with Python", price: "99", category: "Datascience" },
    { course: "Scikit", imageSrc: "/assets/courses/coursesThree.svg", profession: "Scikit with Python Development", price: "89", category: "Datascience" },
  
    // Cloud Computing Courses
    { course: "Laas", imageSrc: "/assets/courses/coursesThree.svg", profession: "Infra-as-a-Service", price: "21", category: "Cloudcomputing" },
    { course: "Iaas", imageSrc: "/assets/courses/coursesFour.svg", profession: "Info-as-a-Service", price: "29", category: "Cloudcomputing" },
    { course: "Paas", imageSrc: "/assets/courses/coursesOne.svg", profession: "Platform-as-a-Service", price: "99", category: "Cloudcomputing" },
    { course: "Saas", imageSrc: "/assets/courses/coursesTwo.svg", profession: "Software-as-a-Service", price: "58", category: "Cloudcomputing" },
  ];
  
  const categoryIcons = {
    Specialized: StarIcon,
    Webdevelopment: GlobeAltIcon,
    Mobiledevelopment: DevicePhoneMobileIcon,
    Datascience: CircleStackIcon,
    Cloudcomputing: CloudIcon,
    Law: GlobeAltIcon, // Assign an appropriate icon for law courses
  };
const categories = Object.keys(categoryIcons) as (keyof typeof categoryIcons)[];

const NamesList = () => {
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof categoryIcons>("Law");

    const selectedNames = names.filter((name) => name.category === selectedCategory);

    return (
        <div>
            <div id="courses-section" className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="sm:flex justify-between items-center pb-12">
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Popular Courses</h2>
                    <button className="bg-transparent hover:bg-purple text-purple font-medium hover:text-white py-3 px-4 border border-purple hover:border-transparent rounded">
                        Explore Classes
                    </button>
                </div>

                <div className="flex whitespace-nowrap space-x-5 rounded-xl bg-white p-1 overflow-x-auto">
                    {categories.map((category) => {
                        const Icon = categoryIcons[category];
                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`bg-white pb-2 ${
                                    selectedCategory === category ? "text-black border-b-2 border-orange" : "text-lightgrey"
                                } hidden sm:block`}
                            >
                                {category.replace(/([a-z])([A-Z])/g, "$1 $2")}
                            </button>
                        );
                    })}

                    {/* Mobile View Icons */}
                    {categories.map((category) => {
                        const Icon = categoryIcons[category];
                        return (
                            <Icon
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                width={70}
                                height={70}
                                className={`block sm:hidden ${
                                    selectedCategory === category ? "border-b-2 border-orange fill-orange" : ""
                                }`}
                            />
                        );
                    })}
                </div>

                <div>
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-12">
                            <div className="col-start-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                                {selectedNames.length > 0 ? (
                                    selectedNames.map((name, index) => (
                                        <div key={index}>
                                            <div className="text-lg sm:text-sm py-5 lg:py-0">
                                                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                    <img src={name.imageSrc} alt={name.imageSrc} className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="flex justify-between">
                                                    <div className="mt-6 block font-normal text-gray-900">{name.course}</div>
                                                    <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                                                        &#8377;{name.price}
                                                    </div>
                                                </div>
                                                <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold">
                                                    {name.profession}
                                                </p>
                                                <div className="flex justify-between border-solid border-2 border-grey500 rounded-md p-2">
                                                    <p>12 Classes</p>
                                                    <div className="flex flex-row space-x-4">
                                                        <div className="flex">
                                                            <img src={"/assets/courses/account.svg"} alt="circle" />
                                                            <p className="text-lightgrey ml-1">120</p>
                                                        </div>
                                                        <div className="flex">
                                                            <img src={"/assets/courses/Star.svg"} alt="star" />
                                                            <p className="ml-1">4.5</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No courses available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NamesList;