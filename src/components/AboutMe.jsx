import { Link } from "react-router-dom";

const AboutMe = () => {
    return (
        <div className="w-[90%] sm:w-[70%] mx-auto mt-10">
            <h1 className="text-4xl ubuntu-bold text-center mb-6">About Me</h1>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                {/* Image Section */}
                <div className="flex-shrink-0">
                    <img
                        src="\src\components\image\profile.jpg"
                        alt="Profile"
                        className="rounded-full w-48 h-48 object-cover border-4 border-indigo-500"
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 text-center sm:text-left">
                    <p className="poppins-light text-lg leading-relaxed my-4">
                        Hello! I'm <span className="ubuntu-medium">Shubham Shah</span>, a software developer with a passion for creating efficient and innovative solutions. I love exploring the latest technologies and applying them to real-world challenges.
                    </p>
                    <p className="poppins-light text-lg leading-relaxed my-4">
                        I specialize in web development, machine learning, and software design, with a focus on delivering scalable and user-friendly solutions. When I'm not coding, you’ll find me learning about new tech trends or working on open-source projects.
                    </p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-start gap-6">
                <a
                    href="https://github.com/Shubham29op"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 text-lg gabarito-regular hover:underline flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 .5C5.798.5.5 5.798.5 12S5.798 23.5 12 23.5 23.5 18.202 23.5 12 18.202.5 12 .5zm0 22C6.253 22.5 1.5 17.747 1.5 12 1.5 6.253 6.253 1.5 12 1.5S22.5 6.253 22.5 12c0 5.747-4.753 10.5-10.5 10.5zm-1.5-8.5H6v-1h4.5v1zm5 0H13v-1h3.5v1z"></path>
                    </svg>
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/shubham-shah-37435825b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 text-lg gabarito-regular hover:underline flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zM9.5 17H7v-7h2.5v7zm-1.25-8.375A1.25 1.25 0 117 7.375a1.25 1.25 0 011.25 1.25zm10 8.375h-2.5v-3.375c0-.825-.15-1.5-1.025-1.5-.6 0-.975.4-1.125.8-.075.2-.1.475-.1.75v3.325h-2.5V10h2.5v.975h.025c.35-.65 1.025-1.025 2.075-1.025 1.5 0 2.625 1 2.625 3.15V17z"></path>
                    </svg>
                    LinkedIn
                </a>
                <a
                    href="mailto:shubham.shah@example.com"
                    className="text-indigo-500 text-lg gabarito-regular hover:underline flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M19.5 4h-15A2.5 2.5 0 002 6.5v11A2.5 2.5 0 004.5 20h15a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0019.5 4zm0 1.5v.845l-7.5 5.33-7.5-5.33v-.845h15zM4.5 18.5a1 1 0 01-1-1V8.905l8 5.69 8-5.69V17.5a1 1 0 01-1 1h-15z"></path>
                    </svg>
                    shubhamshah2908@gmail.com
                </a>
            </div>
        </div>
    );
};

export default AboutMe;
