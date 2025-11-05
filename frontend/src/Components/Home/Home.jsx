import React from 'react';
import "./Home.css";
import Courses from '../Course/Courses';
import CardGrid from '../CardGrid/CardGrid';
import AboutSection from '../AboutSection/AboutSection';
import SemesterTable from '../NoteTable/BSCIT/SemWiseData';
const Home = () => {
    return (
        <>
            <div class="bg-white">
                <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div>
                                <p class="text-base font-semibold tracking-wider text-blue-600 uppercase">BETTER LEARNING FUTURE WITH US</p>
                                <h1 class="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-5xl">Education Is About Academic Excellence</h1>
                                <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p>
                                <a href="#" title="" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-[#ff6b6b] rounded-full lg:mt-16 hover:#ff6b6b focus:bg-[#ff6b6b]-400" role="button">
                                    Join for free
                                    <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                                <p class="mt-5 text-gray-600">Already joined us? <a href="../Login/Login" title="" class="text-black transition-all duration-200 hover:underline">Log in</a></p>
                            </div>
                            <div>
                                <img class="w-full" src="./images/home_banner.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <CardGrid />
            <AboutSection />
            <SemesterTable />
            <Courses />
        </>
    );
}
export default Home;
