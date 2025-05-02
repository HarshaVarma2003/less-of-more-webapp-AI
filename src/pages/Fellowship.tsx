
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

interface Fellowship {
  id: number;
  title: string;
  organization: string;
  about: string;
  responsibilities: string;
  eligibility: string;
  image: string;
  stipend: string;
  duration: string;
  location: string;
  website: string;
}

// Fallback fellowships data in case localStorage is empty
const fallbackFellowships = [
  {
    id: 1,
    title: "Digital Marketing Fellowship",
    organization: "DigiLearn Academy",
    about: "A comprehensive fellowship program focused on digital marketing strategies and implementation.",
    responsibilities: "Create marketing campaigns, analyze data, develop social media strategies.",
    eligibility: "Bachelor's degree in Marketing or related field. Experience with digital tools.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=740",
    stipend: "₹25,000/month",
    duration: "12 months",
    location: "Remote",
    website: "https://digilearn-academy.example.com"
  },
  {
    id: 2,
    title: "Data Science Fellowship",
    organization: "TechMinds Institute",
    about: "An intensive fellowship program focused on data science and machine learning.",
    responsibilities: "Analyze large datasets, build predictive models, present insights to stakeholders.",
    eligibility: "Master's degree in Statistics, Computer Science or related field. Experience with Python and R.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=740",
    stipend: "₹30,000/month",
    duration: "24 months",
    location: "Bangalore",
    website: "https://techminds-institute.example.com"
  },
  {
    id: 3,
    title: "Content Creation Fellowship",
    organization: "Creative Hub",
    about: "A fellowship program designed to nurture content creators across different mediums.",
    responsibilities: "Create engaging content, collaborate with team members, meet content deadlines.",
    eligibility: "Portfolio of creative work. Knowledge of content creation tools.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=740",
    stipend: "₹20,000/month",
    duration: "6 months",
    location: "Hybrid",
    website: "https://creative-hub.example.com"
  }
];

const Fellowship = () => {
  const [fellowships, setFellowships] = useState<Fellowship[]>([]);

  // Load fellowships from localStorage when component mounts
  useEffect(() => {
    const savedFellowships = localStorage.getItem('lom_fellowships');
    if (savedFellowships) {
      setFellowships(JSON.parse(savedFellowships));
    } else {
      setFellowships(fallbackFellowships);
    }
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Fellowship <span className="text-lom-yellow">Opportunities</span>
          </h1>
          <p className="text-lg text-gray-400">
            Discover learning opportunities that can accelerate your professional growth and expand your network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fellowships.map((fellowship) => (
            <Link 
              to={`/fellowship/${fellowship.id}`} 
              key={fellowship.id} 
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img 
                  src={fellowship.image} 
                  alt={fellowship.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                  <h3 className="text-xl font-bold">{fellowship.title}</h3>
                  <p className="text-sm text-gray-300">{fellowship.organization}</p>
                </div>
              </div>
              
              <div className="p-5 space-y-4">
                <p className="text-gray-400 line-clamp-2">{fellowship.about}</p>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="block text-gray-500">Duration</span>
                    <span>{fellowship.duration}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Location</span>
                    <span>{fellowship.location}</span>
                  </div>
                  <div>
                    <span className="block text-gray-500">Stipend</span>
                    <span>{fellowship.stipend}</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-lom-yellow text-lom-dark font-medium py-2 rounded-md hover:bg-opacity-90 transition-colors">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Fellowship;
