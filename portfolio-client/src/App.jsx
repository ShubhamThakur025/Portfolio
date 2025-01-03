import Projects from "./sections/Projects"
import React, { useState } from "react"
import profileImage from "/assets/profile.jpg"
import gradCap from "/assets/grad-cap.png"
import Introduction from "./sections/Introduction"
import Skills from "./sections/Skills"
import Contacts from "./sections/Contacts"
import DarkModeToggle from "./components/DarkModeToggle"
import axios from 'axios'
import { Stats } from "./sections/Stats"

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 flex flex-col justify-center items-center p-3 lg:py-8">
      <DarkModeToggle />
      <div className="lg:absolute top-5 flex flex-col items-center justify-between">
        <img src={gradCap} className="animate-bounce w-32 lg:w-28 rounded-full lg:mt-0 top-0" alt="profile-image" />
        <img src={profileImage} className="w-52 lg:w-44 shadow border dark:border-slate-900 rounded-full" alt="profile-image" />
      </div>
      <div className="w-[90vw] mt-10 lg:mt-40 lg:w-[50vw] p-5 lg:p-8 dark:bg-gray-900 bg-white shadow rounded-xl lg:pt-20">
        <Introduction />
        <hr className="my-5 border-slate-300 dark:border-slate-600" />
        <Skills />
        <hr className="my-5 border-slate-300 dark:border-slate-600" />
        <Projects />
        <hr className="my-5 border-slate-300 dark:border-slate-600" />
        <Stats />
        <hr className="my-5 border-slate-300 dark:border-slate-600" />
        <Contacts />
        <hr className="my-5 border-slate-300 dark:border-slate-600" />
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">Shubham Thakur - <span className="text-blue-500 dark:text-blue-400">2024</span></p>
      </div>
    </div>
  )
}
export default App