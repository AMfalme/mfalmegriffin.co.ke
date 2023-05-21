import { Tab } from "@headlessui/react";

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
import IconMaterialUi from "../utils/icons/IconMaterialUi";
import IconHeadlessui from "../utils/icons/IconHeadlessUi";
import IconDocker from "../utils/icons/IconDocker";
import iconDRF from '../utils/icons/IconDRF.png'
import IconFirebase from "../utils/icons/IconFirebase";
import IconGithub from "../utils/icons/IconGithub";
import IconNginx from "../utils/icons/IconNginx";
import IconPerl from "../utils/icons/IconPerl";
import IconVim from "../utils/icons/IconVim";
import IconWagtail from "../utils/icons/IconWagtail";
import IconNode from "../utils/icons/IconNode";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function MyTabs() {
  let categories = [
    "Front End",
    "Back End",
    "Others"
  ]

  const isDarkMode= function (){
    const body = document.body;
    if (body.classList.contains("dark")) return 'white';
    return false;
  }

  console.log(isDarkMode)
  return (
    <Tab.Group>
      <Tab.List className="grid grid-cols-3 mb-10 border-b border-gray-300">
        {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm font-medium leading-5 outline-none text-zinc-800 dark:text-zinc-100',
                  // 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'border-b-2 text-bold dark:border-zinc-900 border-gray-900 font-black'
                    : ' hover:text-bold hover:border-gray-900 hover:font-black'
                )
              }
            >
              {category}
            </Tab>
          ))}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
        <ul
          role="list"
          className="grid  sm:grid-cols-3 sm:gap-x-1 sm:gap-y-3 xl:col-span-3"
        >
          
          <li>
            <TechStackIcon 
              icon={<IconReact height="2em" width="2em" color={isDarkMode}/>}
              name="React"
            />
          </li>
          <li>
            <TechStackIcon 
              icon={<IconVuejs height="2em" width="2em" />}
              name="VueJS"
            />
          </li>
          <li>
            <TechStackIcon 
              icon={<IconRedux height="2em" width="2em" />}
              name="Redux"
            />
          </li>
          <li>
            <TechStackIcon 
              icon={<IconJavascript height="2em" width="2em" />}
              name="JavaScript"
            />
          </li>
          <li>
            <TechStackIcon 
              icon={<IconTypescript height="2em" width="2em" />}
              name="TypeScript"
            />
          </li>
          <li>
            <TechStackIcon 
              icon={<IconSass height="2em" width="2em" />}
              name="Sass"
            />
          </li>
          <li>
            <TechStackIcon 
              icon={<IconTailwindcss height="2em" width="2em" />}
              name="Tailwindcss"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconMaterialUi height="2em" width="2em"></IconMaterialUi>}
              name="MaterialUI"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconHeadlessui height="2em" width="2em"/>}
              name="HeadlessUI"
            />
          </li>

        </ul>
        </Tab.Panel>
        <Tab.Panel>
          <ul
            role="list"
            className="grid  sm:grid-cols-3 sm:gap-x-1 sm:gap-y-3 xl:col-span-3"
  
          >
          <li>
            <TechStackIcon
              icon={<IconPython height="2em" width="2em"/>}
              name="Python"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconDjango height="2em" width="2em"/>}
              name="Django"
            />
          </li>

          <li>
            <TechStackIcon
              icon={<IconPython height="2em" width="2em"/>}
              name="Python"
            />
          </li>

          <li>
            <TechStackIcon
              icon={<IconWagtail height="2em" width="2em"/>}
              name="Wagtail"
            />
          </li>

          <li>
          <div className="
            flex 
            items-center 
            gap-x-1
            border-solid
            border
            border-slate-500
            m-1
            p-2
            rounded-md
            ">
            <img src={iconDRF} height="40px" width="40px" alt="" />
            <div>
                <h3 className="text-base font-semibold leading-7 tracking-tighttext-zinc-800 dark:text-zinc-100">
                    DRF
                </h3>
            </div>
        </div>
          </li>
          <li>
            <TechStackIcon
              icon={<IconFlask height="2em" width="2em"/>}
              name="Flask"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconMysql height="2em" width="2em"/>}
              name="MySQL"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconPostgresql height="2em" width="2em"/>}
              name="Postgresql"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconNode height="2em" width="2em"/>}
              name="NodeJS"
            />
          </li>
          
          </ul>

        </Tab.Panel>
        <Tab.Panel>
          <ul
            role="list"
            className="grid  sm:grid-cols-3 sm:gap-x-1 sm:gap-y-3 xl:col-span-3"
          >
          <li>
            <TechStackIcon
              icon={<IconDocker height="2em" width="2em"/>}
              name="Docker"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconFirebase height="2em" width="2em"/>}
              name="Firebase"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconGithub height="2em" width="2em"/>}
              name="Git"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconNginx height="2em" width="2em"/>}
              name="Nginx"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconVim height="2em" width="2em"/>}
              name="Vim"
            />
          </li>
          <li>
            <TechStackIcon
              icon={<IconPerl height="2em" width="2em"/>}
              name="Perl"
            />
          </li>
          </ul>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MyTabs;
