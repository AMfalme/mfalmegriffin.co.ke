import React, { useState } from "react";

import MyTabs from "../components/AboutTabs";

export default function About() {
  const [title, setTitle] = useState(
    "I design software that transforms ideas into an elegant solution."
  );
  const [descriptionList, setDescriptionList] = useState([
    "As a software craftsman, I am fueled by my passion to create solutions to real world problems with a passion for Python and JavaScript. I specialize in creating high-performance web and distributed systems using cutting-edge frameworks. ",

    " With a global mindset and a strong team spirit, I thrive on collaborating with colleagues and clients to achieve the best possible results. Always seeking to maximize efficiency and optimize resource usage, I constantly strive to improve the performance of every application I work on. Let's work together to create something truly exceptional",
  ]);

  return (
    <div
      id="About"
      className="container mx-auto py-8 mt-16 border-y border-gray-400 dark:border-gray-100 sm:flex justify-between w-10/12 relative bg-white dark:bg-slate-800"
    >
      <div className="min-w-1/2 p-x-12">
        <h1 className="mb-5 text-zinc-800 dark:text-zinc-100">ABOUT</h1>
        <h2 className="text-2xl font-bold tracking-tighttext-zinc-800 dark:text-zinc-100 pt-0 text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>

        <p class="mt-10 max-w-xl space-y-8 text-base leading-7 text-zinc-600 dark:text-zinc-400 lg:max-w-none">
          <div class="relative">
            <dd class="inline text-sm">
              As a software craftsman, I am fueled by my passion to create digital
               solutions to real world problems. I take ideas and designs and craft
                them into virtual application experiences.
            </dd>
          </div>
      </p>
      </div>
      <div className="min-w-1/2 p-12">

        <MyTabs />
     
      </div>
    </div>
  );
}
