import { useState } from "react";

import ContactImage from "./assets/Backgrounds/Contact-Image.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const onlyLetters = value.replace(/[^A-Za-z\s]/g, "");
      setFormData({ ...formData, [name]: onlyLetters });
    } else if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: onlyNumbers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Enter your name";
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Enter your message";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const text = `
*Holiday Water Park Inquiry*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

💬 Message:
${formData.message}
`;

    const whatsappNumber = "918141384325";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(url, "_blank");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${ContactImage})` }}
      >
        <div className="contact-overlay" data-aos="zoom-in">
          <h1>Contact Us</h1>

          <p>
            Have questions, feedback, or booking inquiries? Get in touch with
            our team and we'll help you plan the perfect water park experience.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-form-box" data-aos="zoom-in">
          <h2>Let's Connect</h2>

          <p className="contact-subtitle">
            Have questions about tickets, rides, events, or group bookings? Send
            us a message and we'll get back to you soon.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span>{errors.phone}</span>}
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>

            <div className="input-group">
              <textarea
                rows="6"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {errors.message && <span>{errors.message}</span>}
            </div>

            <button type="submit">Send WhatsApp Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
