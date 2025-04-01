import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/user/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("response data ", data);

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Contact form submitted successfully!', data);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        // Handle error (e.g., show an error message)
        console.error('Failed to submit contact form:', data);
        alert(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-light text-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-primary-content mb-6 text-center animate-fade-in-down" style={{ animationDuration: '1s' }}>Contact Me</h2>
        <div className="max-w-md mx-auto bg-secondary rounded-lg shadow-md p-8 animate-slide-up" style={{ animationDuration: '0.8s' }}>
          <p className="text-secondary-content mb-4 text-center">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-secondary-content text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline bg-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-secondary-content text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline bg-input"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-secondary-content text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-dark leading-tight focus:outline-none focus:shadow-outline bg-input"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-accent-dark text-accent-content font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;