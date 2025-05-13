import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import type { Fellowship as FellowshipType } from '../types/admin';
import { fetchFellowships } from '../utils/apiUtils';
import { toast } from '@/hooks/use-toast';

const Fellowship = () => {
  const [fellowships, setFellowships] = useState<FellowshipType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch fellowships from static data when component mounts
  useEffect(() => {
    const getFellowships = async () => {
      try {
        setLoading(true);
        const data = await fetchFellowships();
        console.log('Fellowship page received data:', data);
        
        setFellowships(data);
        setError(null);
      } catch (err) {
        setError('Failed to load fellowships. Please try again later.');
        console.error('Error loading fellowships:', err);
        toast({
          title: "Error",
          description: "Failed to load fellowships",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    getFellowships();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Loading <span className="text-lom-yellow">Fellowships</span>...
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 bg-gray-800"></div>
                <div className="p-5 space-y-4">
                  <div className="h-6 bg-gray-800 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                  <div className="h-20 bg-gray-800 rounded"></div>
                  <div className="h-10 bg-gray-800 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-red-500">Error</span> Loading Fellowships
            </h1>
            <p className="text-lg text-gray-400 mb-8">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-lom-yellow text-lom-dark font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </Layout>
    );
  }

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

        {fellowships.length > 0 ? (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-400">No fellowships available. Please update the initialData.ts file.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Fellowship;
