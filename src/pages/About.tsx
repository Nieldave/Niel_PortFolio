
import React from 'react';
import { Code, Database, Shield, Brain } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Expert in React, Node.js, Python, and modern web technologies',
    },
    {
      icon: Brain,
      title: 'AI/ML Implementation',
      description: 'Experience with TensorFlow, PyTorch, and computer vision projects',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Penetration testing, security analysis, and vulnerability assessment',
    },
    {
      icon: Database,
      title: 'Cloud & DevOps',
      description: 'AWS, Docker, CI/CD pipelines, and microservices architecture',
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Passionate Computer Science student with hands-on experience in cutting-edge technologies
            </p>
          </div>

          {/* Professional Summary */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Computer Science Engineering student with hands-on experience in software testing, full stack development, 
              cybersecurity, and AI/ML implementations. Proven expertise in test automation, cloud-native application 
              development, machine learning model deployment, and security testing. Demonstrated ability to integrate 
              DevOps practices, implement CI/CD pipelines, and develop scalable microservices architectures across 
              diverse technology stacks.
            </p>
          </div>

          {/* Key Areas */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-4">
                    <item.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Personal Touch */}
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-xl animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What Drives Me</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I'm passionate about leveraging technology to solve real-world problems. My journey in computer science 
                has been marked by continuous learning and hands-on experience with cutting-edge technologies.
              </p>
              <p>
                From developing AI-powered applications to implementing robust security measures, I thrive on challenges 
                that push the boundaries of what's possible. My experience at prestigious institutions like IISc and 
                Ducom Instruments has shaped my understanding of industry best practices and innovation.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
