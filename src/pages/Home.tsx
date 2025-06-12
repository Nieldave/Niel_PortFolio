
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Home = () => {
  const handleResumeDownload = () => {
    // Open the resume PDF in a new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 bg-clip-text text-transparent">
                  Niel Abhishek
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  J David
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Computer Science Engineering Student & Full Stack Developer
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Passionate about AI/ML, Cybersecurity, and building scalable applications. 
                Experienced in test automation, cloud-native development, and DevOps practices.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <button 
                onClick={handleResumeDownload}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="mailto:nielabhishek6265852@gmail.com"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"
              >
                <Mail size={24} className="text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/niel-abhishek-j-david-a81b49230"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a
                href="https://github.com/Nieldave"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-blue-50"
              >
                <Github size={24} className="text-blue-600" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/lovable-uploads/58298249-830a-4166-b881-bfb0375d3dda.png"
                  alt="Niel Abhishek J David"
                  className="w-96 h-96 object-cover rounded-2xl"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '15+', label: 'Technologies' },
            { number: '4', label: 'Certifications' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
