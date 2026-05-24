import Image from 'next/image';
import React from 'react';

const DescriptionPage = () => {
    return (
        <div className="min-h-screen text-gray-200 flex flex-col-reverse md:flex-row items-center justify-center px-6 py-16 bg-linear-to-b from-slate-950 to-slate-900 gap-10">

            <div className="max-w-3xl space-y-6">

                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400">
                    About Me
                </h1>

                <p>
                    I am Nahid, a passionate learner and aspiring software engineer with a strong interest in web development and data science.
                </p>

                <p>
                    I completed both my SSC and HSC from Rajshahi Cadet College, where I achieved a GPA-5 in both examinations. My time there helped me build discipline, consistency, and a strong academic foundation.
                </p>

                <p>
                    Currently, I am studying Applied Statistics and Data Science at the University of Dhaka, where I am expanding my knowledge in data analysis, computational thinking, and real-world problem solving.
                </p>

                <div>
                    <p className="mb-2">
                        Alongside my academic journey, I have developed strong skills in full-stack web development. I enjoy building modern, responsive, and scalable web applications using technologies such as:
                    </p>

                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>HTML, CSS, JavaScript</li>
                        <li>React.js, Next.js</li>
                        <li>C, C++</li>
                        <li>MySQL, MongoDB</li>
                        <li>BetterAuth (authentication systems)</li>
                    </ul>
                </div>

                <p>
                    Beyond academics and programming, I enjoy playing chess during my free time, as it helps me improve strategic thinking and concentration.
                </p>

                <p>
                    During my college years, I was actively involved in debate and public speaking, which helped me strengthen my communication, confidence, and leadership skills.
                </p>

                <p>
                    I am passionate about combining software development with data-driven thinking, and I continuously explore new technologies to improve my skills and build impactful projects.
                </p>

                <p>
                    My goal is to grow as a full-stack developer and data science professional, contributing to meaningful real-world systems while constantly learning and improving.
                </p>

            </div>

            <div>
                <Image
                    src={'/assets/FB_IMG_1726150106958.jpg'}
                    alt='Image of Nahid'
                    width={400}
                    height={500}
                    className='rounded-full relative z-10 object-cover border border-slate-700 shadow-2xl'
                />
            </div>

        </div>
    );
};

export default DescriptionPage;