
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Sample fellowship data
const fellowships = [
  {
    id: 1,
    title: "Digital Marketing Fellowship",
    organization: "DigiLearn Academy",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=740",
    stipend: "₹25,000/month",
    duration: "12 months",
  },
  {
    id: 2,
    title: "Data Science Fellowship",
    organization: "TechMinds Institute",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=740",
    stipend: "₹30,000/month",
    duration: "24 months",
  },
  {
    id: 3,
    title: "Content Creation Fellowship",
    organization: "Creative Hub",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=740",
    stipend: "₹20,000/month",
    duration: "6 months",
  },
  {
    id: 4,
    title: "Business Analytics Fellowship",
    organization: "Business Insights Co.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=740",
    stipend: "₹35,000/month",
    duration: "18 months",
  }
];

const Fellowship = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Fellowship <span className="text-lom-yellow">Directory</span>
          </h1>
          <p className="text-lg text-gray-400">
            Discover opportunities that align with your passion and kickstart your career journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fellowships.map((fellowship) => (
            <Link to={`/fellowship/${fellowship.id}`} key={fellowship.id} className="block">
              <div className="bg-gray-900 rounded-lg overflow-hidden card-hover">
                <div className="relative h-48">
                  <img 
                    src={fellowship.image} 
                    alt={fellowship.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{fellowship.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{fellowship.organization}</p>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      <span className="text-gray-400">Stipend:</span> {fellowship.stipend}
                    </span>
                    <span className="text-sm">
                      <span className="text-gray-400">Duration:</span> {fellowship.duration}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Fellowship;
