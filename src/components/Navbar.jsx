'use client'
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const openPopover = (id, e) => {
        const pop = document.getElementById(id);
        const rect = e.currentTarget.getBoundingClientRect();

        pop.style.position = "absolute";
        pop.style.top = `${rect.bottom + window.scrollY}px`;
        pop.style.left = `${rect.left + window.scrollX}px`;
    };

    return (
        <div className='shadow-sm px-20 sm:px-25 py-12 text-white sm:text-xl font-bold'>

            <div className='container mx-auto flex items-center justify-between'>

                <div className='text-2xl text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 font-bold'>
                    <Link href={'/'}>MNM Labs</Link>
                </div>

                <div className='lg:hidden '>
                    <button
                        className="btn  text-transparent bg-clip-text rounded-md  bg-linear-to-r from-fuchsia-500 to-indigo-500 hover:opacity-90"
                        onClick={(e) => openPopover("education-popover", e)}
                        popoverTarget="education-popover"
                    >
                        Education Qualifications
                    </button>

                    <ul
                        popover="auto"
                        id="education-popover"
                        className="menu shadow p-2 rounded-box w-52 text-white"
                        style={{ background: "transparent" }}
                    >
                        <li><Link href={'/ssc'}>SSC</Link></li>
                        <li><Link href={'/hsc'}>HSC</Link></li>
                        <li><Link href={'/bs-honours'}>BS. Honours</Link></li>
                    </ul>
                </div>

                <div className='lg:hidden'>
                    <button
                        className="btn  text-transparent bg-clip-text rounded-md bg-linear-to-r from-fuchsia-500 to-indigo-500 hover:opacity-90"
                        onClick={(e) => openPopover("mobile-popover", e)}
                        popoverTarget="mobile-popover"
                    >
                        Menu
                    </button>

                    <ul
                        popover="auto"
                        id="mobile-popover"
                        className="menu shadow p-2 rounded-box w-52 text-white"
                        style={{ background: "transparent" }}
                    >
                        <li><Link href={'/description'}>Description</Link></li>
                        <li><a
                            href="https://github.com/nahid-mia?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="btn hover:cursor-pointer">
                                Projects
                            </button>
                        </a></li>
                        <li><Link href={'/contact'}>Contact me</Link></li>
                    </ul>
                </div>

                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal flex items-center gap-4">
                        <li><Link href={'/description'}><button className='hover:cursor-pointer'>Description</button></Link></li>

                        <li>
                            <button
                                className="btn hover:cursor-pointer text-transparent bg-clip-text rounded-md bg-linear-to-r from-fuchsia-500 to-indigo-500 hover:opacity-90"
                                onClick={(e) => openPopover("desktop-popover", e)}
                                popoverTarget="desktop-popover"
                            >
                                Education Qualifications
                            </button>

                            <ul
                                popover="auto"
                                id="desktop-popover"
                                className="menu shadow p-2 rounded-box w-52 text-white bg-transparent"
                            >
                                <li className='bg-gray-700 p-1 mb-1'><Link href={'/ssc'}>SSC</Link></li>
                                <li className='bg-gray-700 p-1 mb-1'><Link href={'/hsc'}>HSC</Link></li>
                                <li className='bg-gray-700 p-1 mb-1'><Link href={'/bs-honours'}>BS. Honours</Link></li>
                            </ul>
                        </li>

                        <li><a
                            href="https://github.com/nahid-mia?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="btn hover:cursor-pointer">
                                Projects
                            </button>
                        </a></li>
                        <li><Link href="/contact" className='hover:cursor-pointer'>Contact me</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;