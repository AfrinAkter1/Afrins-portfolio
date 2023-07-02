import { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.send(
      'service_ugz943h', // Replace with your EmailJS service ID
      'template_ffskrcl', // Replace with your EmailJS template ID
      formData,
      'me6T4bPvQKSGHS5oI' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('Email sent successfully!', response.text);
        
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

    return (
        <div>

            <h3 className="text-orange-800 text-center font-bold text-3xl my-5">Contact With Me</h3>
            <div className="hero  ">
  <form onSubmit={handleSubmit} className="hero-content gap-14 flex-col lg:flex-row-reverse">
    <div className="space-y-4">
      <p className="font-bold">Find me on Email</p>
      <p>akterafrin3600@gmail.com</p>
      <p className="font-bold">Find me on WhatsApp/Phone</p>
      <p>(+880)1846661353</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Your Name</span>
          </label>
          <input  onChange={handleInputChange} type="text" name="name" placeholder="Your Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Your Email</span>
          </label>
          <input  onChange={handleInputChange} type="text" name="email" placeholder="Your Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Subject</span>
          </label>
          <input  onChange={handleInputChange} type="text" name="subject" placeholder="Subject" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Message</span>
          </label>
        <textarea  onChange={handleInputChange} placeholder="Your Message"  className="input input-bordered" name="message" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-orange-800 text-white">Send Message</button>
        </div>
      </div>
    </div>
  </form>
</div>
        </div>
    );
};

export default Contact;