// Imports
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.min.css';
import { useForm } from "react-hook-form";
import "./style.css";

const Form = () => {
    // Creating potential states for Form component
    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    // Handles user input on form submission
    const onSubmit = async (data) => {
        // Destructing parameters needed to data
        const { name, email, message } = data;

        // Used for testing local output
        // console.log('Name: ', name);
        // console.log('Email: ', email);
        // console.log('Message: ', message);

        // Try to assign input values to object
        try {
            const templateParams = {
                name, email, message
            };
            // Push data to email service
            await emailjs.send('service_thwefex', 'template_cvzz77v', templateParams, '4h6KAIdV5o-LMmyS5');
            reset();
            // If error, print error to console
        } catch (error) {
            console.log(error)
        }
    }
    // Render to page
    return(
            <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="name-section">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" {...register('name', {required: { value: true, message: 'Please enter your name'}})} className="name" tabIndex="1" placeholder="Enter your name" required />
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                </div>
                <div className="email-section">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" {...register('email', {required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})}  id="email" className="email formInput" placeholder="Enter your email" tabIndex="3" required />
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                </div>
                <div className="msg-section">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" {...register('message', {required: true})} className="message" placeholder="Put your thoughts down..." required></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                </div>
                <button type="submit" className="button button-submit">Send</button>
            </form>
    )
}

export default Form;