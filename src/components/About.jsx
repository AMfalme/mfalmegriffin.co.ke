import React, { useState } from 'react'

import List from './List'

import about from '../static/images/ofisi.jpg'

export default function About() {

  const [title,  setTitle] = useState("I design software that transforms ideas into an elegant solution.");
  const [descriptionList, setDescriptionList] = useState([
    "As a software craftsman, I am fueled by my passion to create solutions to real world problems with a passion for Python and JavaScript. I specialize in creating high-performance web and distributed systems using cutting-edge frameworks. ",

    " With a global mindset and a strong team spirit, I thrive on collaborating with colleagues and clients to achieve the best possible results. Always seeking to maximize efficiency and optimize resource usage, I constantly strive to improve the performance of every application I work on. Let's work together to create something truly exceptional"
  ]);

  return (
    <div id="About" class="container mx-auto columns-2 hidden py-8 mt-16 border-y border-gray-400 dark:border-gray-800 sm:flex justify-between w-10/12">
        <img src={about} alt=""class="min-w-1/2 h-full" />
        <div class="min-w-1/2 p-12">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900 p-3 pt-0">
              {title}
            </h2>
            <List items={descriptionList}>
            </List>
        </div>
    </div>
  )
}
