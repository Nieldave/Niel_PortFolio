
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Experience = () => {
  const experiences = [
    {
      role: 'Intern',
      company: 'Indian Institute of Science (IISc), Bengaluru',
      period: 'Feb 2025 – May 2025',
      location: 'Bengaluru',
      achievements: [
        'Developed "MagicMirror²", an AI-powered personalized fashion advisor using OpenCV and TensorFlow',
        'Built recommendation system for outfits based on weather, occasion, and user preferences',
        'Integrated Firebase for user authentication and Google Cloud for hosting and scalability',
        'Integrated Gemini LLM and OpenCV/ArcFace for personalized UX; set up A/B testing for behavior modeling',
        'Developed cloud-connected CI/CD pipelines',
      ],
      technologies: ['OpenCV', 'TensorFlow', 'Firebase', 'Google Cloud', 'Gemini LLM', 'ArcFace', 'CI/CD'],
      current: true,
    },
    {
      role: 'Test Engineer',
      company: 'Ducom Instruments, Bengaluru',
      period: 'Feb 2022 – Sept 2022',
      location: 'Bengaluru',
      achievements: [
        'Designed and automated data pipelines for lab instrumentation software using Python, significantly reducing manual QA effort',
        'Conducted manual and automated validation ensuring ISO/ASTM standard compliance',
        'Worked on cross-functional teams for system troubleshooting, reporting bugs, and verifying fixes',
      ],
      technologies: ['Python', 'Test Automation', 'ISO/ASTM Standards', 'QA', 'System Troubleshooting'],
      current: false,
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
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional journey and key accomplishments
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-300 to-blue-500 hidden md:block"></div>
                )}
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg flex-shrink-0">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>

                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.role}</h3>
                          <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                        </div>
                        {exp.current && (
                          <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-400 to-green-500 text-white text-sm font-medium rounded-full">
                            Current Position
                          </span>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col sm:flex-row gap-4 mb-6 text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm font-medium rounded-full hover:from-blue-200 hover:to-blue-300 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Looking for New Opportunities
              </h3>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new projects and opportunities in software development, AI/ML, and cybersecurity.
              </p>
              <a
                href="mailto:nielabhishek6265852@gmail.com"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <ExternalLink className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Experience;
