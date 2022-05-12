
function Tech ({src, tech, techLink}) {
    return (
        <a href={techLink} className="p-2 sm:w-full md:w-1/3 lg:w-1/4" target="_blank">
            <div className="bg-gray-100 rounded flex p-4 w-full h-full items-center ">
                <img src={src} width={50} height={50} className=""/>
                <span className="block title-font font-medium pl-2">{tech}</span>
            </div>
        </a>
    )
}

const technologies = [
    { 
        tech: "React", 
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        link: "https://reactjs.org/" 
    },
    { 
        tech: "Redux", 
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        link: "https://redux.js.org/" 
    },
    { 
        tech: "JavaScript", 
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://www.javascript.com/" 
    },
    { 
        tech: "TypeScript", 
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        link: "https://www.typescriptlang.org/" 
    },
    { 
        tech: "NodeJS", 
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
        link: "https://nodejs.org/en/" 
    },
    { 
        tech: "Express", 
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
        link: "https://expressjs.com/"
    },
    { 
        tech: "HTML5", 
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://html.com/html5/" 
    },
    { 
        tech: "CSS3", 
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        link: "https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/" 
    },
    { 
        tech: "MySQL", 
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        link: "https://www.mysql.com/" 
    },
    { 
        tech: "MongoDB", 
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        link: "https://www.mongodb.com/" 
    },
    { 
        tech: "Firebase", 
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        link: "https://firebase.google.com/" 
    },
    { 
        tech: "AWS", 
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        link: "https://aws.amazon.com/" 
    },
    { 
        tech: "Python",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        link: "https://www.python.org/" 
    }
]

export default function Skills () {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-10 text-center">Tech skills</h2>
                <div className="flex flex-wrap items-center lg:w-4/5 sm:w-full mx-auto">
                    { technologies.map(technology => (
                        <Tech key={technology.tech} tech={technology.tech} src={technology.src} techLink={technology.link}/>
                    ))}                    
                </div>
            </div>
        </section>
    )
}