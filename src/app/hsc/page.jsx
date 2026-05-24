import Image from 'next/image';
import React from 'react';

const HscPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-gray-200 px-6 py-16 flex flex-col gap-10 md:flex-row items-center justify-center">

            <div className="max-w-3xl space-y-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400">
                    HSC Achievement
                </h1>

                {/* Main Info */}
                <p className="text-gray-300">
                    I completed my Higher Secondary Certificate (HSC) from Rajshahi Cadet College.
                </p>

                {/* Result Box */}
                <div className="border border-white/10 rounded-xl p-6 bg-slate-900">
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Academic Result
                    </h2>

                    <ul className="space-y-2 text-gray-300">
                        <li>• GPA: A+ in all subjects</li>
                        <li>• Total Marks: 1246 / 1300</li>
                        <li>• Institution: Rajshahi Cadet College</li>
                    </ul>
                </div>

                {/* Description */}
                <p className="text-gray-400">
                    This result reflects my dedication, discipline, and strong academic performance throughout my higher secondary education at Rajshahi Cadet College.
                </p>

            </div>
            <div>
                <Image src={'/assets/HSC Mark.jpg'} alt='SSC MarkSheet' width={300} height={600}></Image>
            </div>
        </div>
    );
};

export default HscPage;