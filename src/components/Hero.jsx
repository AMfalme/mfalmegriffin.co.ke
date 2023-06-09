import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../static/images/logo.png";
import myPortfolio from "../static/images/mfalme.png";
import axios from "axios";
import { API_URL } from "../constants";



import Title from "./Title";
import DarkModeToggle from "./DarkModeToggle";



const navigation = [
  { name: "About", href: "http://mfalmegriffin.co.ke/#About" },
  { name: "Career", href: "http://mfalmegriffin.co.ke/#Work" },
  { name: "Projects", href: "http://mfalmegriffin.co.ke/#Projects" },
  { name: 'Blog' }
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroData, setHeroData] = useState({});

  useEffect(() => {
    // const config = {
      
    //   'Content-Type': 'application/json',
    //   withCredentials: false,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*"
    //     }
    //   }
    
    axios
      .get(API_URL + 'core/hero/',
        // config
      )
      .then((response) => {
        setHeroData(response.data.results[0]);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        console.log("the axios call was executed");
      });
  }, []);

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Mfalme Griffin</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 dark:text-zinc-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-100"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <DarkModeToggle />

          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">anYour Compy</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-zinc-700 dark:text-zinc-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7text-zinc-800 dark:text-zinc-100 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7text-zinc-800 dark:text-zinc-100 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <img
          className="pt-20 w-44 h-auto md:h-auto rounded-full mx-auto"
          src={myPortfolio}
          alt=""
        />
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="m-6 text-lg leading-8 text-zinc-600 dark:text-zinc-100">
              {heroData.title}
              {/*  and transforming client vision
               into reliable perfection that will exceed your expectations. */}
            </p>
            <Title
              classes={
                "text-4xl font-bold tracking-tighttext-zinc-800 dark:text-zinc-100 sm:text-6xl"
              }
              text={heroData.paragraph}
            ></Title>
          </div>
          <div className="hidden sm:m-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 text-sm leading-6 text-zinc-600 dark:text-white ring-1 ring-white-900/10 hover:ring-zinc-900/20">
              {heroData.cta_text}{" "}
              <a href="#" className="font-semibold text-indigo-600 dark:text-white-900/10">
                <span className="absolute inset-0" aria-hidden="true" />
                Reach out <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
