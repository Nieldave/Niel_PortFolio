
import React from 'react';
import { Code, Database, Cloud, Shield, Brain, Settings } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, color: 'from-yellow-400 to-yellow-600' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-300 to-yellow-500' },
        { name: 'TypeScript', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Java', level: 80, color: 'from-red-400 to-red-600' },
        { name: 'C++', level: 70, color: 'from-purple-400 to-purple-600' },
        { name: 'SQL', level: 88, color: 'from-green-400 to-green-600' },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React', level: 92, color: 'from-cyan-400 to-cyan-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600' },
        { name: 'Bootstrap', level: 65, color: 'from-purple-400 to-purple-600' },
        { name: 'Angular', level: 75, color: 'from-red-400 to-red-600' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-400 to-green-600' },
        { name: 'Flask', level: 90, color: 'from-gray-400 to-gray-600' },
        { name: 'Django', level: 85, color: 'from-green-500 to-green-700' },
        { name: '.NET Core', level: 70, color: 'from-blue-500 to-blue-700' },
        { name: 'Express.js', level: 82, color: 'from-gray-500 to-gray-700' },
      ],
    },
    {
      title: 'AI/ML & Data Science',
      icon: Brain,
      skills: [
        { name: 'TensorFlow', level: 90, color: 'from-orange-400 to-orange-600' },
        { name: 'PyTorch', level: 85, color: 'from-red-400 to-red-600' },
        { name: 'OpenCV', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Scikit-learn', level: 87, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Keras', level: 85, color: 'from-red-300 to-red-500' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'Docker', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'Jenkins', level: 75, color: 'from-gray-400 to-gray-600' },
        { name: 'GitHub Actions', level: 82, color: 'from-gray-700 to-gray-900' },
        { name: 'Firebase', level: 88, color: 'from-yellow-400 to-yellow-600' },
      ],
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      skills: [
        { name: 'Penetration Testing', level: 80, color: 'from-red-400 to-red-600' },
        { name: 'OWASP ZAP', level: 75, color: 'from-purple-400 to-purple-600' },
        { name: 'Burp Suite', level: 78, color: 'from-orange-400 to-orange-600' },
        { name: 'Wireshark', level: 82, color: 'from-blue-400 to-blue-600' },
      ],
    },
  ];

  const tools = [
    'Git', 'Postman', 'Selenium', 'Pytest', 'SNMP', 'Active Directory', 'Office 365', 
    'PowerShell', 'VPN', 'Remote Tools', 'Jira', 'MongoDB', 'PostgreSQL', 'MySQL'
  ];

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expertise across full-stack development, AI/ML, cybersecurity, and cloud technologies
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-4">
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-600 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg mr-4">
                <Settings size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Tools & Technologies</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-medium rounded-lg hover:from-blue-100 hover:to-blue-200 hover:text-blue-800 transition-all duration-300 transform hover:scale-105 cursor-default animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-xl animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Beginner\'s guide to Linux Kernel Development',
                'AWS Educate Introduction to Cloud (Storage, Compute, Serverless)',
                'Jira Work Management Fundamentals Badge (Atlassian University)',
              ].map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Skills;
