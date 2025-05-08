import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import type { Fellowship } from '../types/admin';
import { fetchFellowshipById } from '../utils/apiUtils';
import { toast } from '@/hooks/use-toast';

const FellowshipDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [fellowship, setFellowship] = useState<Fellowship | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFellowship = async () => {
      if (!id) {
        setError('Invalid fellowship ID');
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const data = await fetchFellowshipById(Number(id));
        console.log('FellowshipDetail page received data:', data);
        
        if (data) {
          setFellowship(data);
          setError(null);
        } else {
          setError('Fellowship not found. Please check the CMS content.');
          toast({
            title: "Error",
            description: "Fellowship not found",
            variant: "destructive"
          });
        }
      } catch (err) {
        setError('Failed to load fellowship details. Please try again later.');
        console.error('Error loading fellowship:', err);
        toast({
          title: "Error",
          description: "Failed to load fellowship details",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    getFellowship();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 flex justify-center">
          <div className="animate-pulse space-y-4 max-w-4xl w-full">
            <div className="h-8 bg-gray-800 rounded w-3/4"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2"></div>
            <div className="h-64 bg-gray-800 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-4">{error}</h1>
          <p className="text-gray-400 mb-6">
            The fellowship you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/fellowship" 
            className="inline-block px-6 py-3 bg-lom-yellow text-lom-dark font-medium rounded-md hover:bg-opacity-90 transition-colors"
          >
            Back to Fellowships
          </Link>
        </div>
      </Layout>
    );
  }

  if (!fellowship) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs navigation */}
          <div className="flex items-center mb-6 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-300">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link to="/fellowship" className="text-gray-500 hover:text-gray-300">Fellowships</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-gray-400">{fellowship.title}</span>
          </div>
          
          {/* Fellowship Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {fellowship.title}
            </h1>
            <p className="text-xl text-gray-300">
              Offered by <span className="text-lom-yellow">{fellowship.organization}</span>
            </p>
          </div>

          {/* Fellowship Image */}
          <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <img 
              src={fellowship.image} 
              alt={fellowship.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Fellowship Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">What is it about?</h2>
                <p className="text-gray-300">
                  {fellowship.about}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">What will the fellow do?</h2>
                <p className="text-gray-300">
                  {fellowship.responsibilities}
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
                <p className="text-gray-300">
                  {fellowship.eligibility}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Fellowship Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="block text-sm text-gray-500">Duration</span>
                    <span className="font-medium">{fellowship.duration}</span>
                  </div>
                  
                  <div>
                    <span className="block text-sm text-gray-500">Stipend</span>
                    <span className="font-medium">{fellowship.stipend}</span>
                  </div>
                  
                  <div>
                    <span className="block text-sm text-gray-500">Location</span>
                    <span className="font-medium">{fellowship.location}</span>
                  </div>
                  
                  <div className="pt-2">
                    <a 
                      href={fellowship.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-lom-yellow text-lom-dark text-center font-medium py-3 rounded-md hover:bg-opacity-90 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Share</h3>
                <div className="flex space-x-4">
                  {/* Social sharing buttons */}
                  <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FellowshipDetail;
