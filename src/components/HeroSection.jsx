'use client'
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <div className="relative px-20 py-10 items-center justify-center  flex flex-col md:flex-row gap-10">
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute w-90 h-180 bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 p-5 rounded-2xl">
                <div className='w-10/12 py-10 mx-auto'>
                    <h1 className='text-xl text-semibold text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400'>Hi, I’m Nahid</h1>
                    <TypeAnimation
                        sequence={[
                            'Data Science student at University of Dhaka & Full-Stack Developer\nI build modern web applications using React, Next.js, MongoDB, and MySQL.\n I enjoy turning ideas into real products and constantly learning new technologies.',
                        ]}
                        speed={50}
                        className="text-gray-200"
                        style={{
                            whiteSpace: 'pre-line',
                            height: '195px',
                            display: 'block',
                        }}
                        repeat={0}
                    />
                </div>
            </div>
            <div>
                <Image src={'/assets/FB_IMG_1726150106958.jpg'} alt='Image of Nahid' width={400} height={500} className='rounded-full relative z-10'></Image>
            </div>
        </div>
    );
};

export default HeroSection;