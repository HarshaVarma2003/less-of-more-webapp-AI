
import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';

interface Podcast {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  youtubeUrl: string;
}

// Fallback podcasts data in case localStorage is empty
const fallbackPodcasts = [
  {
    id: 1,
    title: "Building a Growth Mindset",
    description: "Exploring strategies to develop a growth mindset for personal and professional development.",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=740",
    youtubeUrl: "https://youtube.com/watch?v=videoID1"
  },
  {
    id: 2,
    title: "The Art of Effective Communication",
    description: "Understanding communication patterns that strengthen relationships and leadership.",
    thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=740",
    youtubeUrl: "https://youtube.com/watch?v=videoID2"
  },
  {
    id: 3,
    title: "Mindfulness in Daily Life",
    description: "Practical techniques to incorporate mindfulness into your everyday routine.",
    thumbnail: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=740",
    youtubeUrl: "https://youtube.com/watch?v=videoID3"
  },
  {
    id: 4,
    title: "Financial Independence",
    description: "Steps to achieve financial freedom and security in uncertain times.",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=740",
    youtubeUrl: "https://youtube.com/watch?v=videoID4"
  }
];

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);
  const [loading, setLoading] = useState(true);

  // Load podcasts from localStorage when component mounts
  useEffect(() => {
    // Small delay to ensure localStorage is checked after any potential updates
    const timer = setTimeout(() => {
      try {
        const savedPodcasts = localStorage.getItem('lom_podcasts');
        if (savedPodcasts) {
          setPodcasts(JSON.parse(savedPodcasts));
        } else {
          // If no data in localStorage, use fallback and save it
          setPodcasts(fallbackPodcasts);
          localStorage.setItem('lom_podcasts', JSON.stringify(fallbackPodcasts));
        }
      } catch (error) {
        console.error("Error loading podcasts:", error);
        setPodcasts(fallbackPodcasts);
      } finally {
        setLoading(false);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const formatYouTubeEmbedUrl = (url: string) => {
    // Transform YouTube watch URLs into embed URLs
    try {
      if (url.includes('youtube.com/watch')) {
        const videoId = new URL(url).searchParams.get('v');
        return `https://www.youtube.com/embed/${videoId}`;
      } else if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}`;
      }
      // If URL is already an embed URL or cannot be transformed, return as is
      return url;
    } catch (e) {
      // In case of invalid URL, return original
      return url;
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Loading <span className="text-lom-yellow">Podcasts</span>...
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg animate-pulse">
                <div className="h-48 bg-gray-800"></div>
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-gray-800 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-800 rounded"></div>
                  <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                </div>
              </div>
            ))}
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
            <span className="text-lom-yellow">Podcast</span> Series
          </h1>
          <p className="text-lg text-gray-400">
            Listen to our insightful discussions about personal growth, mindfulness, and living intentionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative cursor-pointer" onClick={() => setSelectedPodcast(podcast)}>
                <img 
                  src={podcast.thumbnail} 
                  alt={podcast.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-lom-yellow flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-lom-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{podcast.title}</h3>
                <p className="text-gray-400">{podcast.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Podcast Modal */}
        {selectedPodcast && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPodcast(null)}>
            <div 
              className="bg-gray-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 flex justify-between items-center border-b border-gray-800">
                <h2 className="text-xl font-bold">{selectedPodcast.title}</h2>
                <button onClick={() => setSelectedPodcast(null)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="aspect-video">
                <iframe 
                  src={formatYouTubeEmbedUrl(selectedPodcast.youtubeUrl)} 
                  className="w-full h-full" 
                  title={selectedPodcast.title}
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-5">
                <p className="text-gray-300">{selectedPodcast.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Podcasts;
