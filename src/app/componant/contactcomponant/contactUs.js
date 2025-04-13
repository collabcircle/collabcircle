'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelopeOpenText } from 'react-icons/fa';

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false); // Track if the email was sent successfully
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // Simple validation
    if (!name || !email || !phone || !message) {
      alert('Please fill all details');
      return;
    }

    setLoading(true); // Show loader while sending the email

    try {
      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setEmailSent(true); // Mark email as sent
        alert("Email Send SucessFully");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    } finally {
      setLoading(false); // Hide loader after the process is complete
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          zIndex: 9999,
        }}
      >
        <h1 style={{ fontSize: '24px', color: '#333' }}>Loading...</h1>
      </div>
    );
  }


  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #fff, #a0c4ff, #6cc0f5)',
        position: 'relative',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1200px',
          padding: '20px',
          boxSizing: 'border-box',
          flexWrap: 'wrap',
        }}
      >
        {/* Left Side - Cartoon Image with Description */}
        <div
          style={{
            flex: '1 1 45%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            animation: 'fadeInLeft 1s ease-in-out',
            paddingBottom: '20px',
          }}
        >
          <img
            src="https://www.reshot.com/preview-assets/illustrations/2NUWCM95LV/digital-communication-2NUWCM95LV-w1600.jpg"
            alt="Cartoon Image"
            style={{
              width: '80%',
              height: 'auto',
              animation: 'bounce 2s ease-in-out infinite',
            }}
          />
        </div>

        {/* Right Side - Contact Form */}
        <div
          style={{
            flex: '1 1 45%',
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            animation: 'fadeInRight 1s ease-in-out',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{
              fontSize: '36px',
              color: '#333',
              marginBottom: '20px',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              textAlign: 'center',
              letterSpacing: '2px',
            }}
          >
            Get in Touch
          </motion.h2>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div style={{ marginBottom: '15px' }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '2px solid #ccc',
                  transition: 'border-color 0.3s ease',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '2px solid #ccc',
                  transition: 'border-color 0.3s ease',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '2px solid #ccc',
                  transition: 'border-color 0.3s ease',
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '10px',
                  fontSize: '16px',
                  borderRadius: '8px',
                  border: '2px solid #ccc',
                  transition: 'border-color 0.3s ease',
                }}
              />
            </div>
            <motion.button
              type="submit"
              style={{
                padding: '15px 30px',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#fff',
                background: 'linear-gradient(to right, #6cc0f5, #a0c4ff)',
                borderRadius: '8px',
                cursor: 'pointer',
                border: 'none',
                transition: 'background 0.3s ease',
                width: '100%',
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: '#4a9eff',
              }}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
