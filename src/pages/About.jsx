import React, { useState } from "react";

import List from "../components/List";
import MyTabs from "../components/AboutTabs";
import about from "../static/images/ofisi.jpg";
import TechStackIcon from "../constants/TechStackIcon";


import IconReact from "../utils/icons/IconReact";
import IconTypescript from "../utils/icons/IconTypescript";
import IconJavascript from "../utils/icons/IconJavascript";
import IconRedux from "../utils/icons/IconRedux";
import IconDjango from "../utils/icons/IconDjango";
import IconFlask from "../utils/icons/IconFlask";
import IconMysql from "../utils/icons/IconMysql";
import IconPostgresql from "../utils/icons/IconPostgresql";
import IconSass from "../utils/icons/IconSass";
import IconTailwindcss from "../utils/icons/IconTailwindcss";
import IconVuejs from "../utils/icons/IconVuejs";
import IconPython from "../utils/icons/IconPython";

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
      className="container mx-auto py-8 mt-16 border-y border-gray-400 dark:border-gray-800 sm:flex justify-between w-10/12 relative"
    >
      <div className="min-w-1/2 p-x-12">
        <h1 className="mb-5">ABOUT</h1>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pt-0">
          {title}
        </h2>

        <p class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
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
