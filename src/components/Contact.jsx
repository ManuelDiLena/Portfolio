import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'message':
                setMessage(value);
                break
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(name)}&body=${message}`;
            window.location.href = mailtoLink;
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
        }
    };

    const validateForm = () => {
        let errors = {};
        let valid = true;

        if (name.trim() === '') {
            errors.name = 'You must enter a name';
            valid = false;
        }

        if (email.trim() === '') {
            errors.email = 'You must enter a email';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'You must enter a valid email';
            valid = false;
        }

        if (message.trim() === '') {
            errors.message = 'You must enter a message';
            valid = false;
        }

        setErrors(errors);
        return valid;
    }

    return (
        <section id='contact' className='h-screen'>
            <div className='container px-5 sm:py-20 py-16 mx-auto'>
                <div className='text-center mb-4'>
                    <AiOutlineMail className='w-10 inline-block mb-4 text-orange sm:text-4xl text-3xl'/>
                    <h1 className='sm:text-4xl text-2xl font-medium title-font text-title mb-4'>
                        Contact
                    </h1>
                    <p className='text-text leading-relaxed mx-auto sm:text-xl'>
                        Whats next?? Get in touch.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col justify-around items-center sm:w-4/5 mx-auto'>
                        <div className='sm:flex sm:justify-between w-full'>
                            <input type='text' id='name' name='name' placeholder={errors.name || 'Name'}
                                value={name}
                                onChange={handleChange}
                                className='sm:w-1/2 w-full sm:mr-4 mb-2 h-10 px-4 bg-gray border-solid border-2 border-orange rounded-md text-text sm:text-lg outline-none'  
                            ></input>    
                            <input type='text' id='email' name='email' placeholder={errors.email || 'Email'}
                                value={email}
                                onChange={handleChange}
                                className='sm:w-1/2 w-full h-10 px-4 bg-gray border-solid border-2 border-orange rounded-md text-text sm:text-lg outline-none'
                            ></input>
                        </div>
                        <textarea placeholder={errors.message || 'Message'} id='message' name='message'
                            value={message}
                            onChange={handleChange}
                            className='mt-4 px-4 h-20 w-full bg-gray border-solid border-2 border-orange rounded-md text-text sm:text-lg outline-none'
                        ></textarea>
                    </div>
                    <div className='flex justify-end sm:w-4/5 mx-auto mt-4'>
                        <input type='submit' name='send' value='Send'
                            className='w-1/4 sm:py-3 bg-orange sm:text-3xl text-xl text-black rounded-md border-0 tracking-wide transition duration-300 focus:outline-none hover:scale-105'
                        ></input>
                    </div>
                </form>
                <div className='text-center mt-16'>
                    <a href='https://github.com/ManuelDiLena/Portfolio' className='text-text leading-relaxed mx-auto sm:text-xl hover:text-orange'>
                        Designed & Built by Manuel Di Lena
                    </a>
                </div>
            </div>
        </section>
    )
};

export default Contact;