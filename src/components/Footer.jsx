import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative mt-20 border-t border-white/10 bg-black/20 backdrop-blur-xl text-gray-300">

            {/* glow background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute bottom-0 left-1/4 h-60 w-60 bg-cyan-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-1/4 h-60 w-60 bg-purple-500/10 blur-3xl rounded-full" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-12">

                <div className="grid md:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                            MNM Labs
                        </h2>
                        <p className="mt-3 text-sm text-gray-400">
                            Full-stack developer & Data Science student at University of Dhaka.
                            Building modern, scalable web experiences.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Contact</h3>

                        <div className="space-y-2 text-sm">
                            <p>
                                📧 <a className="hover:text-cyan-300" href="mailto:moh.nahidmia@gmail.com">
                                    moh.nahidmia@gmail.com
                                </a>
                            </p>

                            <p>
                                📧 <a className="hover:text-cyan-300" href="mailto:nahidmia@gmail.com">
                                    nahidmia.2955@gmail.com
                                </a>
                            </p>

                            <p>
                                📞 <a className="hover:text-cyan-300" href="tel:+8801777277942">
                                    +8801777277942
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Quick Links</h3>

                        <div className="space-y-2 text-sm">
                            <Link href="/" className="block hover:text-cyan-300">Home</Link>
                            <a href="https://github.com/nahid-mia?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer" className="block hover:text-cyan-300">Projects</a>
                            <Link href="/description" className="block hover:text-cyan-300">About</Link>
                            <Link href="/contact" className="block hover:text-cyan-300">Contact</Link>
                        </div>
                    </div>

                </div>

                {/* bottom bar */}
                <div className="mt-10 border-t border-white/10 pt-6 flex flex-col text-center text-sm text-gray-500">

                    <p className="text-xs text-gray-500 text-center mt-6">
                        Referrer: {" "}
                        <a
                            href="mailto:web@programming-hero.com"
                            className="text-cyan-400 hover:text-cyan-300 transition"
                        >
                            Programming Hero
                        </a>
                    </p>

                    <p>
                        © {new Date().getFullYear()} MNM Labs. All rights reserved.
                    </p>


                </div>
            </div>
        </footer>
    );
}