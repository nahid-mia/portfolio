export default function BSHonoursPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-gray-200 px-6 py-16 flex items-center justify-center">

            <div className="max-w-3xl space-y-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                    BS Honours Journey
                </h1>

                {/* Intro */}
                <p className="text-gray-300">
                    I am currently pursuing my Bachelor of Science in Applied Statistics and Data Science at the University of Dhaka.
                </p>

                {/* Achievement Box */}
                <div className="bg-slate-900 border border-white/10 rounded-xl p-6 space-y-3">

                    <h2 className="text-xl font-semibold text-white">
                        Admission Achievement
                    </h2>

                    <ul className="space-y-2 text-gray-300">
                        <li>• Secured 252th position in Dhaka University admission test</li>
                        <li>• Department: Applied Statistics and Data Science</li>
                        <li>• University: University of Dhaka</li>
                    </ul>

                </div>

                {/* Current Status */}
                <div className="bg-slate-900 border border-white/10 rounded-xl p-6 space-y-2">

                    <h2 className="text-xl font-semibold text-white">
                        Current Status
                    </h2>

                    <p className="text-gray-300">
                        I am currently on the verge of completing my first year, building a strong foundation in statistics,
                        programming, and data science concepts.
                    </p>

                </div>

                {/* Closing */}
                <p className="text-gray-400">
                    My goal is to combine data science with software engineering to build impactful, real-world intelligent systems.
                </p>

            </div>
        </div>
    );
}