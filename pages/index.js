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
            </main>
        </>
    );
}

export default Home;
