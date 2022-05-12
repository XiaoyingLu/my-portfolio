import ContactForm from '../components/contactForm'
import Layout from '../components/layout'

const Contact = props => (
    
    <Layout>
    <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-3/5 md:w-2/3 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="absolute inset-0" src="https://maps.google.com/maps?q=Halifax&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md content-center mx-auto">
                    <div className="lg:w-3/5 px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1">Halifax, Nova Scotia, Canada</p>
                        </div>
                    <div className="lg:w-2/5 px-6 mt-4 lg:mt-0 mx-auto">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <a className="text-blue-500 leading-relaxed" href="mailto:xy415051@dal.ca">xy415051@dal.ca</a>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    </section>
    </Layout>
)

export default Contact