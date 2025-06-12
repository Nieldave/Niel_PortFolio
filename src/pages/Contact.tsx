
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to a backend service
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'nielabhishek6265852@gmail.com',
      link: 'mailto:nielabhishek6265852@gmail.com',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6360701051',
      link: 'tel:+916360701051',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bangalore 560 058',
      link: '#',
      color: 'from-blue-400 to-blue-600',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: '#',
      color: 'hover:text-gray-800',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '#',
      color: 'hover:text-blue-600',
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      url: '#',
      color: 'hover:text-purple-600',
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to collaborate? Let's discuss your next project or opportunity
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center group">
                      <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                          {info.title}
                        </h3>
                        <a
                          href={info.link}
                          className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h2>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-3 bg-gray-100 rounded-lg text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  Follow me for updates on my latest projects and tech insights
                </p>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 shadow-xl animate-fade-in">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Availability</h2>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-700 font-medium">Available for new opportunities</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Currently seeking internship and full-time opportunities in software development, 
                  AI/ML, and cybersecurity roles.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </button>
                </form>

                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What to expect:</h3>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Response within 24 hours</li>
                    <li>• Detailed discussion about your requirements</li>
                    <li>• Professional consultation and project planning</li>
                    <li>• Transparent communication throughout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
