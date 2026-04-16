import { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch("https://formspree.io/f/mvzdkrvv", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });

        if (response.ok) {
          setIsSubmitting(false);
          setSubmitStatus('success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSubmitStatus(null), 3000);
        } else {
          setIsSubmitting(false);
          setSubmitStatus('error');
          setTimeout(() => setSubmitStatus(null), 3000);
        }
      } catch (error) {
        console.error("Error submitting form: ", error);
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info glass">
          <p className="contact-text">
            Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
          <div className="direct-email">
            <FiMail className="mail-icon" />
            <a href="mailto:ratnesh.09032006@gmail.com">ratnesh.09032006@gmail.com</a>
          </div>
        </div>
        
        <form className="contact-form glass" onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/mvzdkrvv" noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Your Name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="your.email@example.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              placeholder="Hello Ratnesh..."
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          
          <button type="submit" className={`btn btn-primary submit-btn ${isSubmitting ? 'sending' : ''}`} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="success-message">Message sent successfully!</div>
          )}
          {submitStatus === 'error' && (
            <div className="error-message-submit">Failed to send message. Please try again or email directly.</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
