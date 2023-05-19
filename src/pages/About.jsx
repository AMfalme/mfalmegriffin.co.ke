import React, { useState } from "react";

import List from "../components/List";
import MyTabs from "../components/AboutTabs";
import about from "../static/images/ofisi.jpg";
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
      className="container mx-auto columns-2 hidden py-8 mt-16 border-y border-gray-400 dark:border-gray-800 sm:flex justify-between w-10/12"
    >
      <div className="min-w-1/2 p-12">
        <h1 className="mb-5">ABOUT</h1>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 pt-0">
          {title}
        </h2>

        <List
          items={[
            "As a software craftsman, I am fueled by my passion to create solutions to real world problems with a passion for Python and JavaScript. I specialize in creating high-performance web and distributed systems using cutting-edge frameworks. ",
          ]}
        ></List>
      </div>
      <div className="min-w-1/2 p-12">
        <ul
          role="list"
          class="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3"
        >
          <li>
            <div class="flex items-center gap-x-6">
              <IconReact height="4em" width="4em" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  React
                </h3>
              </div>
            </div>
          </li>
          {/* <li>
        <div class="flex items-center gap-x-6">
            <IconTypescript height="4em" width="4em"/>
        <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">TypeScript</h3>
            
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-x-6">
        <IconJavascript height="4em" width="4em"/>
        <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">JavaScript</h3>
            
          </div>
        </div>
      </li> */}
          <li>
            <div class="flex items-center gap-x-6">
              <IconRedux height="4em" width="4em" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Redux
                </h3>
              </div>
            </div>
          </li>
          {/* <li>
        <div class="flex items-center gap-x-6">
        <IconTailwindcss height="4em" width="4em"/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">TailwindCSS</h3>
            
          </div>
        </div>
      </li> */}
          <li>
            <div class="flex items-center gap-x-6">
              <IconSass height="4em" width="4em" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  SASS
                </h3>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <IconDjango width="4em" height="4em" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Django
                </h3>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <IconPython height="4em" width="4em" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  Python
                </h3>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <IconVuejs width="4em" height="4em" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  VueJS
                </h3>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <IconMysql width="4em" height="4em" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  MYSQL
                </h3>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <IconPostgresql width="4em" height="4em" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  POSTGRESQL
                </h3>
              </div>
            </div>
          </li>
          <li>
            <div class="flex items-center gap-x-6">
              <IconFlask width="4em" height="4em" />
              <div>
                <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                  FLASK
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
