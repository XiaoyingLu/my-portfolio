import GitHubIcon from '../components/icons/gitHub'
import Layout from '../components/layout'
import Image from 'next/image'

function ProjectCard ({project}) {
    return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 rounded-lg">
            <a href={project.website}>
            <Image className="p-1 bg-white border rounded-lg max-w-sm" alt={project.name} src={project.imgSrc} width="720" height="400" />
                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" /> */}
            </a>
            <div className="lg flex items-stretch space-between px-6">
                <h2 className="text-lg text-gray-900 font-medium title-font ">{project.name}</h2>
                <a className="self-center ml-auto" href={project.gitHub}>
                    <GitHubIcon width={24} height={24} />
                </a>
            </div>
            <p className="leading-relaxed text-base p-6 text-left">{project.description}</p>

        </div>
      </div>
    )
}

const projects = [
    {
        name: "My Portfolio",
        imgSrc: "/portfolio.jpg",
        description: "A website that shows my background and skills, and displays a collection of my professional projects.",
        gitHub: "https://github.com/XiaoyingLu/my-portfolio",
        website: "https://my-portfolio-rust-eight.vercel.app/"
    },
    {
        name: "Yelp Camp",
        imgSrc: "/yelpCamp.jpg",
        description: "A platform where users can create and post reviews to campgrounds.",
        gitHub: "https://github.com/XiaoyingLu/YelpCamp",
        website: "https://yelp-camp-2022-grounds.herokuapp.com/"
    },
    {
        name: "Pomodoro Timer",
        imgSrc: "/pomodoro.jpg",
        description: "A time management tool that helps you stay focused on any task you are tackling.",
        gitHub: "https://github.com/XiaoyingLu/pomodoro-timer",
        website: "https://pomodoro-timer-alpha.vercel.app/"
    }
]
const Projects = props => {
    return (
    <Layout>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Projects I've Worked On</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
            </div>
            <div className="flex flex-wrap -m-4">
                {
                    projects.map(proj => (
                        <ProjectCard project={proj} key={proj.name}/>  
                    ))
                }
            </div>
        </div>
        </section>
    </Layout>
    )}

export default Projects