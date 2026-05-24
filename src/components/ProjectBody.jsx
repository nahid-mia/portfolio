import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoWifi } from 'react-icons/io5';
import { SiAlmalinux } from 'react-icons/si';
import 'animate.css';
import SlideInSection from './SlideAnimation';

const ProjectBody = () => {
    return (
        <SlideInSection>
            <div className='grid mb-15 mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 animate__animated  animate__backInRight'>
                <div className='card transition-transform duration-300 hover:scale-110 hover:-translate-y-1 relative z-10 text-gray-400 backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl'>
                    <div className='card-body transition-transform duration-300 hover:scale-110 hover:-translate-y-1'>
                        <div className='text-xl font-semibold'>
                            <a
                                href="https://beef-fest.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-purple-500 hover:cursor-pointer">
                                    Beef Fest
                                </button>
                            </a></div>
                        <div>
                            A virtual Qurbani marketplace where users can browse, select, and purchase sacrificial animals for Eid-ul-Adha in a transparent and digital way.
                        </div>
                    </div>
                </div>
                <div className='card transition-transform duration-300 hover:scale-110 hover:-translate-y-1 relative z-10 text-gray-400 backdrop-blur-xl bg-white/5 border border-white/10 p-5 rounded-2xl'>
                    <div className='card-body transition-transform duration-300 hover:scale-110 hover:-translate-y-1'>
                        <div className='text-xl font-semibold'>
                            <a
                                href="https://assignment-7-henna.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-purple-500 hover:cursor-pointer">
                                    KeenKeeper
                                </button>
                            </a></div>
                        <div>
                            A unified communication platform that lets friends and relatives chat across multiple messaging services in one seamless browser interface.                        </div>
                    </div>
                </div>
                <div className='card transition-transform duration-300 hover:scale-110 hover:-translate-y-1 relative z-10 text-gray-400 backdrop-blur-xl bg-white/5 border border-white/10 p-5 rounded-2xl'>
                    <div className='card-body transition-transform duration-300 hover:scale-110 hover:-translate-y-1'>
                        <div className='text-xl font-semibold'>
                            <a
                                href="https://digi-tools-platform-2955.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-purple-500 hover:cursor-pointer">
                                    Digi-tools Platform
                                </button>
                            </a></div>
                        <div>A unified digital marketplace where users can discover, purchase, and access various digital tools seamlessly within a single platform.</div>
                    </div>
                </div>
            </div>
        </SlideInSection>
    );
};

export default ProjectBody;