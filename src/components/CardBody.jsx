import React from 'react';
import { FaAppStoreIos } from 'react-icons/fa';
import { IoWifi } from 'react-icons/io5';
import { SiAlmalinux } from 'react-icons/si';
import 'animate.css';
import SlideInSection from './SlideAnimation';

const CardBody = () => {
    return (
        <SlideInSection>
            <div className='grid mb-15 mt-20 grid-cols-1 md:grid-cols-3 gap-10 animate__animated  animate__backInRight'>
                <div className='card transition-transform duration-300 hover:scale-110 hover:-translate-y-1 relative z-10 text-gray-400 backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-2xl'>
                    <div className='card-body transition-transform duration-300 hover:scale-110 hover:-translate-y-1'>
                        <div className='text-4xl'><FaAppStoreIos /></div>
                        <div className='text-xl font-semibold'>App Development</div>
                        <div>
                            I’ll handle everything from to app development process until it is time to make your project live.
                        </div>
                    </div>
                </div>
                <div className='card transition-transform duration-300 hover:scale-110 hover:-translate-y-1 relative z-10 text-gray-400 backdrop-blur-xl bg-white/5 border border-white/10 p-5 rounded-2xl'>
                    <div className='card-body transition-transform duration-300 hover:scale-110 hover:-translate-y-1'>
                        <div className='text-4xl'><IoWifi /></div>
                        <div className='text-xl font-semibold'>SEO Optimisation</div>
                        <div>
                            Your website ranking matters. My SEO services will help you get to the top of the ranks and stay there!
                        </div>
                    </div>
                </div>
                <div className='card transition-transform duration-300 hover:scale-110 hover:-translate-y-1 relative z-10 text-gray-400 backdrop-blur-xl bg-white/5 border border-white/10 p-5 rounded-2xl'>
                    <div className='card-body transition-transform duration-300 hover:scale-110 hover:-translate-y-1'>
                        <div className='text-4xl'><SiAlmalinux /></div>
                        <div className='text-xl font-semibold'>Ux Consulting</div>
                        <div>I help businesses design intuitive, user-centered digital experiences that improve usability and drive growth.</div>
                    </div>
                </div>
            </div>
        </SlideInSection>
    );
};

export default CardBody;