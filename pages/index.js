import Link from 'next/link';

function Home() {
    return (
        <>
            <main className="max-w-2xl px-8 mx-auto my-10 lg:max-w-5xl">
                <h1 className="my-6 text-4xl font-extrabold text-gray-700 dark:text-gray-300">Hi There &#128075;</h1>
                <h2 className="mb-6 text-2xl font-extrabold text-gray-700 dark:text-gray-300">
                    I am Gauthaman Sahadevan
                </h2>
                <p className="pb-2 leading-7">
                    I am a Senior Java Developer. I hold a Master’s Degree in Computer Application from PSG College of
                    Technology, Coimbatore - India. I have a total of nine years of experience in developing
                    applications using Java and its associated technologies. Have played multiple roles – as a
                    Technology Consultant for Fortune #1 company, as a SME in the Cards and Payments domain for a
                    Netherlands based Banking Group and so on.
                </p>
                <p className="py-2 leading-7">
                    Apart from my work, I prefer to read and review technical blogs, answer questions on Stack Overflow
                    and work on projects involving Data Visualization. I enjoy creating mock up projects by reverse
                    engineering. I also like to research and implement latest features released as part of the
                    technology stack of my interest and develop personal pet projects.
                </p>

                <h2 className="my-6 text-2xl font-extrabold text-gray-700 dark:text-gray-300">Current interests</h2>
                <ul className="list-disc list-outside pl-5 leading-7">
                    <li>React</li>
                    <li>Redux</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                </ul>

                <h2 className="my-6 text-2xl font-extrabold text-gray-700 dark:text-gray-300">Projects - Frontend</h2>
                <div className="max-w-sm rounded overflow-hidden shadow-lg dark:text-indigo-100 dark:bg-gray-900 cursor-pointer">
                    <Link href="/green-plug">
                        <img className="w-full p-4" src="images/projects_green_plug.png" alt="Green Plug" />
                    </Link>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-700 dark:text-gray-300">
                            Angular + Bootstrap 5 Admin Template
                        </div>
                        <p className="text-gray-700 dark:text-gray-500 text-base">
                            Modern, Flexible and Responsive Bootstrap 5 Admin Template A professional package that comes
                            with hunderds of UI components, forms, tables, charts, dashboards, pages and svg icons. Each
                            one is fully customizable, responsive and easy to use.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            #angular12
                        </span>
                        <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            #bootstrap5
                        </span>
                        <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            #chart.js
                        </span>
                    </div>
                </div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg dark:text-indigo-100 dark:bg-gray-900 cursor-pointer">
                    <Link href="/react-tailwind">
                        <img className="w-full p-4" src="images/projects_react_tailwind.png" alt="React Tailwind" />
                    </Link>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-gray-700 dark:text-gray-300">
                            React + Tailwind Dashboard Template
                        </div>
                        <p className="text-gray-700 dark:text-gray-500 text-base">
                            A modern yet elegant dashboard built over React and Tailwind CSS. Has features likes maps,
                            charts, slide-overs, dark mode etc. Uses d3.js and chart.js for enhancing UI elements.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            #react
                        </span>
                        <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            #tailwindcss
                        </span>
                        <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            #chart.js
                        </span>
                        <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2">
                            #d3.js
                        </span>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;
