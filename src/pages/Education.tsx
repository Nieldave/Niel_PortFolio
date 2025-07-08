
import React from 'react';
import { GraduationCap, Award, Trophy, Medal } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Education = () => {
  const achievements = [
    {
      title: 'Silver Medalist – IndiaSkills Regional 2021',
      category: 'Industrial Control',
      icon: Medal,
      color: 'from-gray-400 to-gray-500',
      description: 'Recognized for excellence in industrial automation and control systems',
    },
    {
      title: '6th Place – IndiaSkills National 2022',
      category: 'Industrial Control',
      icon: Trophy,
      color: 'from-orange-400 to-orange-500',
      description: 'National level competition showcasing technical expertise',
    },
    {
      title: 'Gold Medalist – Karnataka Skills State 2021',
      category: 'Industrial Control',
      icon: Award,
      color: 'from-yellow-400 to-yellow-500',
      description: 'State champion in industrial control and automation',
    },
    {
      title: '8th Place – Kalpana Hackathon',
      category: 'Innovation',
      icon: Trophy,
      color: 'from-purple-400 to-purple-500',
      description: 'Developed a disaster tracking and resource coordination system',
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
                Education & Achievements
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Academic excellence and competitive achievements
            </p>
          </div>

          {/* Education Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12 animate-fade-in">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-4">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Education</h2>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                B.Tech in Computer Science Engineering
              </h3>
              <p className="text-blue-600 font-semibold mb-2">
                PES University, RR Campus, Bengaluru
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600">
                <span>Jan 2023 – Present</span>
                <span className="font-semibold">CGPA: 7.73/10</span>
              </div>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Pursuing comprehensive education in computer science with focus on software engineering, 
                algorithms, data structures, and emerging technologies. Active participant in coding 
                competitions and technical projects.
              </p>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Competitive Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-lg flex-shrink-0`}>
                      <achievement.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {achievement.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
                        {achievement.category}
                      </span>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Academic Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">7.73</div>
                <div className="text-gray-700">Current CGPA</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
                <div className="text-gray-700">Awards Won</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-gray-700">Years Study</div>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-xl animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Academic & Career Goals</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Currently focused on completing my B.Tech degree while gaining practical experience through internships 
                and personal projects. My academic journey has been complemented by hands-on work in industry settings.
              </p>
              <p>
                Looking forward to pursuing advanced studies in AI/ML or Cybersecurity while continuing to build 
                innovative solutions that address real-world challenges.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Short-term Goals</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Complete B.Tech with distinction</li>
                    <li>• Gain industry certifications</li>
                    <li>• Contribute to open source</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <h4 className="font-semibold text-gray-800 mb-2">Long-term Vision</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pursue advanced degree</li>
                    <li>• Lead tech innovation</li>
                    <li>• Mentor next generation</li>
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

export default Education;
