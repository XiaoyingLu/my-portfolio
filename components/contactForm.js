import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
    const [contactInfo, setContactInfo] = useState({name: '', email: '', subject: '', message: ''});
    const [errors, setErrors] = useState(null);

    const validateForm = (contactObj) => {
        let err = {};
        let isValid = true;

        for (const property in contactObj) {
            if (contactObj[property].trim().length <= 0) {
                err[property] = true;
                isValid = false;
            }
        }
        setErrors({...err});
        return isValid;
    }
     
    const handleSubmit = async(e) => {
        e.preventDefault();

        const isFormValid = validateForm(contactInfo);
        if (!isFormValid) {
            return;
        }

        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify(contactInfo),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST"
        });

        const data = await res.json();
        console.log(data);
        if (data?.error) {
            toast.error('Error sent message!');
            return;
        }
        toast.success('Successfully sent message!');
    }

    const onInputChange = (e) => {
        setContactInfo(prevContactInfo => {
            const newContactInfo = {...prevContactInfo, [e.target.name]: e.target.value};
            if (errors) { // only validate after first clicking "send" button
                validateForm(newContactInfo);
            }
            return newContactInfo;
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Reach out</h2>
            <p className="leading-relaxed mb-5 text-gray-600">I'm currently open to work as a Full Stack Developer</p>
            <div className="relative mb-2">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input type="text" id="name" name="name" 
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={onInputChange} />
                {errors?.name && (
                    <p className="text-red-500">Name cannot be empty.</p>
                )}
            </div>
            <div className="relative mb-2">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" 
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={onInputChange} />
                {errors?.email && (
                    <p className="text-red-500">Email cannot be empty.</p>
                )}
            </div>
            <div className="relative mb-2">
                <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
                <input id="subject" name="subject" 
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={onInputChange}></input>
                {errors?.subject && (
                    <p className="text-red-500">Subject cannot be empty.</p>
                )}
            </div>
            <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" 
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    onChange={onInputChange}></textarea>
                {errors?.message && (
                    <p className="text-red-500">Message cannot be empty.</p>
                )}
            </div>
            <button type="submit" className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Send</button>
                <p className="text-xs text-gray-500 mt-3">Send me a message to get connected.</p>
        </form>
        <Toaster position="bottom-center"/>
        </>
    )
}

export default ContactForm;