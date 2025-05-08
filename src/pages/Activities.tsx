
import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import type { Activity } from '../types/admin';
import { fetchActivities } from '../utils/apiUtils';

const Activities = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load activities from API when component mounts
  useEffect(() => {
    const getActivities = async () => {
      try {
        setLoading(true);
        const data = await fetchActivities();
        console.log('Activities page received data:', data);
        setActivities(data);
        setError(null);
      } catch (err) {
        setError('Failed to load activities. Please try again later.');
        console.error('Error loading activities:', err);
      } finally {
        setLoading(false);
      }
    };

    getActivities();
  }, []);

  const openActivity = (activity: Activity) => {
    setSelectedActivity(activity);
  };

  const closeActivity = () => {
    setSelectedActivity(null);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Loading <span className="text-lom-yellow">Activities</span>...
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-gray-800 rounded-lg"></div>
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
              <span className="text-red-500">Error</span> Loading Activities
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
            Interesting <span className="text-lom-yellow">Activities</span>
          </h1>
          <p className="text-lg text-gray-400">
            Explore diverse experiences that can enrich your personal and professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="cursor-pointer card-hover" 
              onClick={() => openActivity(activity)}
            >
              <div className="relative aspect-square">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg flex items-end p-4">
                  <h3 className="text-xl font-medium text-white">{activity.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Lightbox */}
        {selectedActivity && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeActivity}>
            <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <button 
                className="absolute top-4 right-4 text-white hover:text-lom-yellow" 
                onClick={closeActivity}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src={selectedActivity.image} 
                  alt={selectedActivity.title} 
                  className="w-full h-[50vh] object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">{selectedActivity.title}</h2>
                  <p className="text-gray-300 mb-6">
                    Detailed information about this activity would appear here. This includes description,
                    benefits, how to participate, and other relevant details.
                  </p>
                  <a 
                    href={selectedActivity.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block px-6 py-3 bg-lom-yellow text-lom-dark font-medium rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Activities;
