
import { Youtube } from 'lucide-react';
import Layout from '../components/layout/Layout';

// Sample podcasts data
const podcasts = [
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
    title: "Financial Intelligence for Young Professionals",
    description: "Practical advice on building financial literacy and making sound investment decisions.",
    thumbnail: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=740",
    youtubeUrl: "https://youtube.com/watch?v=videoID3"
  },
  {
    id: 4,
    title: "Navigating Career Transitions",
    description: "Strategies for successfully pivoting careers and embracing new opportunities.",
    thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=740",
    youtubeUrl: "https://youtube.com/watch?v=videoID4"
  },
  {
    id: 5,
    title: "Mindfulness in Daily Life",
    description: "Incorporating mindfulness practices for improved focus, productivity, and well-being.",
    thumbnail: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=740",
    youtubeUrl: "https://youtube.com/watch?v=videoID5"
  },
  {
    id: 6,
    title: "The Future of Work",
    description: "Exploring emerging trends and preparing for the changing landscape of work.",
    thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=740",
    youtubeUrl: "https://youtube.com/watch?v=videoID6"
  },
];

const Podcasts = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            HeadRock Show <span className="text-lom-yellow">Podcasts</span>
          </h1>
          <p className="text-lg text-gray-400">
            Thought-provoking conversations that inspire action and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcasts.map((podcast) => (
            <a 
              key={podcast.id} 
              href={podcast.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden card-hover">
                <div className="relative">
                  <img 
                    src={podcast.thumbnail} 
                    alt={podcast.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all">
                    <div className="bg-lom-yellow text-lom-dark h-12 w-12 rounded-full flex items-center justify-center">
                      <Youtube size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 line-clamp-1">{podcast.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{podcast.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Podcasts;
