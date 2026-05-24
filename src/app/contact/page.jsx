export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-gray-200 px-6 py-16 flex items-center justify-center">

            <div className="max-w-2xl w-full space-y-10">

                {/* Title */}
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400">
                    Contact Me
                </h1>

                {/* Intro */}
                <p className="text-gray-400">
                    Feel free to reach out for collaboration, project ideas, or opportunities.
                    I’m always open to connecting and building something meaningful.
                </p>

                {/* Contact Info Box */}
                <div className="bg-slate-900 border border-white/10 rounded-xl p-6 space-y-4">

                    {/* Email 1 */}
                    <p>
                        📧 Email:{" "}
                        <a
                            href="mailto:moh.nahidmia@gmail.com"
                            className="text-cyan-300 hover:underline"
                        >
                            moh.nahidmia@gmail.com
                        </a>
                    </p>

                    {/* Email 2 */}
                    <p>
                        📧 Email:{" "}
                        <a
                            href="mailto:nahidmia.2955@gmail.com"
                            className="text-cyan-300 hover:underline"
                        >
                            nahidmia.2955@gmail.com
                        </a>
                    </p>

                    {/* Phone */}
                    <p>
                        📞 Phone:{" "}
                        <a
                            href="tel:+8801777277942"
                            className="text-cyan-300 hover:underline"
                        >
                            +8801777277942
                        </a>
                    </p>

                    {/* GitHub */}
                    <p>
                        💻 GitHub:{" "}
                        <a
                            href="https://github.com/nahid-mia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 hover:underline"
                        >
                            github.com/nahid-mia
                        </a>
                    </p>

                    {/* LinkedIn */}
                    <p>
                        💼 LinkedIn:{" "}
                        <a
                            href="https://www.linkedin.com/in/nahid-mia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 hover:underline"
                        >
                            linkedin.com/in/nahid-mia
                        </a>
                    </p>

                    <p className="text-xs text-gray-500 text-center mt-6">
                        Built while learning through{" "}
                        <a
                            href="mailto:web@programming-hero.com"
                            className="text-cyan-400 hover:text-cyan-300 transition"
                        >
                            Programming Hero
                        </a>
                    </p>

                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">

                    {/* Email Button */}
                    <a href="mailto:moh.nahidmia@gmail.com">
                        <button className="px-5 py-2 rounded-md bg-linear-to-r from-cyan-400 to-blue-500 text-white hover:opacity-90 transition">
                            Send Email
                        </button>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/nahid-mia"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="px-5 py-2 rounded-md border border-white/20 hover:bg-white/10 transition">
                            GitHub
                        </button>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/nahid-mia/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="px-5 py-2 rounded-md border border-white/20 hover:bg-white/10 transition">
                            LinkedIn
                        </button>
                    </a>

                </div>

            </div>
        </div>
    );
}