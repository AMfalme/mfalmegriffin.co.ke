import React from "react";
import nyagaka from "../static/images/nyagakaandondusoadvocates.png";
import mfalme from "../static/images/mfalmegriffin.co.ke.png";
import steppingstones from "../static/images/thesteppingstoneselementaryschool.png";
const products = [
  {
    id: 1,
    name: "Mfalme Griffin Portfolio",
    href: "http://mfalmegriffin.co.ke/",
    imageSrc: mfalme,
    imageAlt: "Front of men's Basic Tee in black.",
    description: `This is a Personal porfolio website that also includes my professional blog. It has been
       developed mainly in React and Django Wagtail among other technologies.`,
    color: "portfolio website",
  },
  {
    id: 2,
    name: "Nyagaka and Onduso Advocates",
    href: "http://nyagakaandondusoadvocates.co.ke/",
    imageSrc: nyagaka,
    imageAlt: "Front of men's Basic Tee in black.",
    description: `This is a professional website giving Nyagaka and Onduso advocates a digital presence as well
        an easier and more diligent way of managing their documents and clients altogether giving them
         a mixture of a CMS based system and an ERP`,
    color: "Legal website",
  },
  {
    id: 2,
    name: "The Stepping Stones Elementary School",
    href: "https://www.thesteppingstoneselementaryschool.sc.ke/",
    imageSrc: steppingstones,
    imageAlt: "Front of men's Basic Tee in black.",
    description: `This is a professional website giving Nyagaka and Onduso advocates a digital presence as well
        an easier and more diligent way of managing their documents and clients altogether giving them
         a mixture of a CMS based system and an ERP`,
    color: "School website",
  },
  // More products...
];

export default function Projects() {
  return (
    <div className="w-10/12 m-auto dark:bg-slate-800" id="Projects">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tighttext-zinc-800 dark:text-zinc-100">
          Projects I have worked on
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:black lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href} target="_blank">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-mediumtext-zinc-800 dark:text-zinc-100">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
