
import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Projects = () => {
  const projects = [
    {
      title: 'MagicMirror²',
      subtitle: 'AI-Powered Smart Mirror',
      description: 'Modular microservices with secure facial recognition and real-time WebSocket streams. Implemented computer vision algorithms for user identification.',
      technologies: ['Flask', 'React.js', 'WebSockets', 'Gemini LLM', 'OpenCV', 'ArcFace', 'Firestore', 'Firebase Storage'],
      features: [
        'Family-based profiles storing gender, body shape, preferred styles, and wardrobe data',
        'Real-time image processing with WebSockets and OpenCV for background removal',
        'Metadata tagging, dynamic upload to Google Drive, and catalog display using Firestore',
      ],
      status: 'Featured',
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Fashion Recommendation System',
      subtitle: 'AI-Powered Style Advisor',
      description: 'Classified user body shapes with high accuracy using CNN models like VGG16, DenseNet & EfficientNet.',
      technologies: ['TensorFlow', 'PyTorch', 'EfficientNetB3', 'Flask', 'SQLAlchemy', 'MLflow', 'AWS', 'Ensemble Learning'],
      features: [
        'Virtual try-on system using ARToolkit for real-time outfit visualization',
        'Connected with AmazonAPI to dynamically fetch and recommend clothing items',
        'Keyword-based search and filtering logic for relevant fashion items',
      ],
      status: 'Production',
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      title: 'Smart Infrastructure Monitoring',
      subtitle: 'Self-Healing System',
      description: 'Built a real-time monitoring solution for enterprise systems to track resource usage, service status, and failed logins.',
      technologies: ['Python', 'PowerShell', 'Node.js', 'MongoDB', 'Docker', 'Jenkins', 'AWS CloudWatch', 'Active Directory'],
      features: [
        'Auto-remediation scripts using PowerShell and Python for self-healing',
        'Web dashboard for live alerts connected with AWS CloudWatch',
        'Secure role-based access with Active Directory integration',
      ],
      status: 'Enterprise',
      gradient: 'from-green-400 to-green-600',
    },
    {
      title: 'Cloud-Based Attendance System',
      subtitle: 'Secure Tracking Platform',
      description: 'Created secure attendance platform with microservices architecture and RBAC authentication.',
      technologies: ['Django', 'React.js', 'AWS S3/RDS', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Pytest'],
      features: [
        'Comprehensive testing framework achieving 90% code coverage',
        'Cloud-native solution automating attendance tracking',
        'Secure access and real-time updates',
      ],
      status: 'Complete',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      title: 'E-commerce Fraud Detection',
      subtitle: 'Real-time Security System',
      description: 'Engineered a real-time fraud detection platform using anomaly detection and supervised ML for transaction monitoring.',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Apache Kafka', 'PostgreSQL'],
      features: [
        'Kafka-based streaming system with feature engineering pipelines',
        'Ensemble models for accuracy',
        'PostgreSQL dashboard and Jenkins pipelines for real-time alerting',
      ],
      status: 'Live',
      gradient: 'from-red-400 to-red-600',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Featured': return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
      case 'Production': return 'bg-gradient-to-r from-green-400 to-green-500';
      case 'Enterprise': return 'bg-gradient-to-r from-purple-400 to-purple-500';
      case 'Complete': return 'bg-gradient-to-r from-blue-400 to-blue-500';
      case 'Live': return 'bg-gradient-to-r from-red-400 to-red-500';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500';
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Showcasing innovative solutions in AI/ML, Web Development, and Cybersecurity
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Project Info */}
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                        <span className={`px-3 py-1 text-white text-sm font-medium rounded-full ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <h4 className="text-lg text-blue-600 font-semibold mb-4">{project.subtitle}</h4>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>

                      {/* Features */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h5>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Star size={16} className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                          <ExternalLink className="mr-2" size={20} />
                          Live Demo
                        </button>
                        <button className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                          <Github className="mr-2" size={20} />
                          Source Code
                        </button>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="lg:w-1/3">
                      <div className={`bg-gradient-to-r ${project.gradient} rounded-xl p-6 text-white`}>
                        <h5 className="text-lg font-semibold mb-4">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full"
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
                Want to See More?
              </h3>
              <p className="text-gray-600 mb-6">
                Check out my GitHub for more projects and contributions to open source.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Github className="mr-2" size={20} />
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;
