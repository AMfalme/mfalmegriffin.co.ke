import React, { useState, useEffect } from "react";
import logo from "../static/images/logo-bposeats.png";
import mizizi from "../static/images/mizizi.png";
import { API_URL } from "../constants";
import axios from "axios";


export default function Work () {
  const [experiences, setExperience] = useState([]);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {    
    setEmail(event.target.value);
  };


  useEffect(() => {
    axios
      .get(API_URL+'core/careers/')
      .then((response) => {
        setExperience(response.data.results);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log("the axios call was executed");
      });
  }, []);

  return (
    <div
      id="Work"
      className="sm:px-8 mt-24 md:mt-28 mx-auto max-w-7xl lg:px-8 relative px-4 sm:px-8 lg:px-12 mx-auto max-w-2xl lg:max-w-5xl"
    >
        <h5 className="text-2xl font-bold tracking-tighttext-zinc-800 dark:text-zinc-100 mb-10">
          Career
        </h5>
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        <div className="flex flex-col gap-16">
          {experiences.map((experience) => (
            <article className="group relative flex flex-col items-start">
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    {experience.company}
                  </span>
                </a>
              </h2>
              <time
                className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                dateTime="2022-09-05"
              >
                <span
                  className="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                </span>
                {experience.start_date}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>

                {experience.end_date}
              </time>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {experience.company_descr}
              </p>
            </article>
          ))}
        </div>
        <div className="space-y-10 lg:pl-16 xl:pl-24">
          <form
            action="/thank-you"
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
          >
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="h-6 w-6 flex-none"
              >
                <path
                  d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                  className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                ></path>
                <path
                  d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                  className="stroke-zinc-400 dark:stroke-zinc-500"
                ></path>
              </svg>
              <span className="ml-3">Stay up to date</span>
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                required=""
                className="
                                min-w-0 
                                flex-auto 
                                appearance-none 
                                rounded-md border 
                                border-zinc-900/10 
                                bg-white 
                                px-3 
                                py-[calc(theme(spacing.2)-1px)]
                                shadow-md 
                                shadow-zinc-800/5
                                placeholder:text-zinc-400
                                focus:border-teal-500 
                                focus:outline-none 
                                focus:ring-4 
                                focus:ring-teal-500/10 
                                dark:border-zinc-700 
                                dark:bg-zinc-700/[0.15] 
                                dark:text-zinc-200 
                                dark:placeholder:text-zinc-500 
                                dark:focus:border-teal-400 
                                dark:focus:ring-teal-400/10 
                                sm:text-sm"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
                type="submit"
              >
                Join
              </button>
              <div
                data-lastpass-icon-root="true"
                // style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"
              ></div>
            </div>
          </form>
          <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                className="h-6 w-6 flex-none"
              >
                <path
                  d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                  className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
                >
                  <path
                    d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                    className="stroke-zinc-400 dark:stroke-zinc-500"
                  ></path>
                </path>
              </svg>

              <span className="ml-3">Work</span>
            </h2>
            <div className="mt-6 space-y-4">
              
                <div className="
                  flex 
                  gap-4 
                  relative 
                  mt-1 
                  flex 
                  h-10 
                  w-10 
                  flex-none 
                  items-center 
                  justify-center 
                  rounded-full 
                  shadow-md 
                  shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img
                    alt=""
                    loading="lazy"
                    width="28"
                    height="28"
                    decoding="async"
                    data-nimg="1"
                    className="h-7 w-7"
                    src={mizizi}
                  />
                </div>
                {/* <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Duara
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    Front End Developer
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label="2019 until Present"
                  >
                    <time dateTime="2019">2019</time>
                    <span aria-hidden="true">—</span>
                    <time dateTime="2023">Present</time>
                  </dd>
                </dl> */}
              
              
                <div
                  className="
                                        relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0
                                        "
                >
                  <img
                    alt=""
                    loading="lazy"
                    width="28"
                    height="28"
                    decoding="async"
                    data-nimg="1"
                    className="h-7 w-7"
                    src={logo}
                  />
                </div>
                {/* <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    BPOSeats
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    Product Designer
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label="2014 until 2019"
                  >
                    <time dateTime="2014">2014</time>
                    <span aria-hidden="true">—</span>
                    <time dateTime="2019">2019</time>
                  </dd>
                </dl> */}
              </div>
            <a
              className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
              href="/#"
            >
              Download CV
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
              >
                <path
                  d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
