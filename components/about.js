
export default function About ({childern}) {
    return (
        <section className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
            <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-1/5 md:items-start md:text-left">About Me</h2>
            <div className="md:w-4/5 md:pl-6 flex flex-wrap md:items-start md:text-left">
                <p className="leading-relaxed text-gl">
                    I started my programming journey from 2015 when I self-taught Java by learning from online resources. 
                    Then I worked as an Android Developer at a startup in China for around one year where I developed a social media Android App using Java programming language.
                </p>
                <p className="leading-relaxed text-gl">
                    Then in 2018, I moved to Canada and pursued a bachelor's degree in Computer Science at Dalhousie University. 
                    During my time at school, I built a solid foundation in Computer Science and developed practical skills (especially React and full stack) 
                    by doing Co-op works. I now have more confidence and am ready to put my skills to use.
                </p>
                <br />
            </div>
        </section>
    )
}