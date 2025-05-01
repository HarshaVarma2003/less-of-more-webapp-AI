
import { Link } from 'react-router-dom';
import { Instagram, Youtube } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { Button } from "@/components/ui/button";

// Use the uploaded image
const jigneshImage = "/lovable-uploads/d8de94aa-94dc-4e22-af49-0906817040fa.png";
const Index = () => {
  return <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <section className="flex flex-col md:flex-row items-center justify-center mb-16 mx-auto max-w-4xl">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 order-2 md:order-1">
            <div className="space-y-4 mb-8">
              <p className="text-lom-yellow text-lg md:text-xl font-light">
                "It's not what you know,"
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold">
                It's what you do
              </h1>
              <p className="text-3xl md:text-5xl font-semibold">
                with what you know.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img src={jigneshImage} alt="Jignesh Talasila" className="rounded-full object-cover w-full h-full shadow-lg animate-scale-in" />
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Featured <span className="text-lom-yellow">Content</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Fellowship Card */}
            <Link to="/fellowship" className="group">
              <div className="bg-gray-900 p-6 rounded-lg card-hover">
                <h3 className="text-xl font-semibold mb-3">Fellowship Directory</h3>
                <p className="text-gray-400 mb-4">Discover opportunities that can shape your future career path.</p>
                <div className="text-lom-yellow text-sm group-hover:underline">Explore Fellowships →</div>
              </div>
            </Link>
            
            {/* Activities Card */}
            <Link to="/activities" className="group">
              <div className="bg-gray-900 p-6 rounded-lg card-hover">
                <h3 className="text-xl font-semibold mb-3">10 Interesting Activities</h3>
                <p className="text-gray-400 mb-4">Curated selection of activities to expand your knowledge.</p>
                <div className="text-lom-yellow text-sm group-hover:underline">View Activities →</div>
              </div>
            </Link>
            
            {/* Podcasts Card */}
            <Link to="/podcasts" className="group">
              <div className="bg-gray-900 p-6 rounded-lg card-hover">
                <h3 className="text-xl font-semibold mb-3">HeadRock Show Podcasts</h3>
                <p className="text-gray-400 mb-4">Big ideas made simple, Podcasts for the curious Telugu mind</p>
                <div className="text-lom-yellow text-sm group-hover:underline">Listen Now →</div>
              </div>
            </Link>
          </div>

          {/* Subscribe button below the cards */}
          <div className="text-center mt-8 mb-4">
            <Button className="btn-primary px-8 py-3 text-lg">Subscribe</Button>
          </div>
          
          {/* Social icons below the subscribe button */}
          <div className="flex items-center justify-center space-x-6 mt-4 mb-8">
            <a href="https://www.instagram.com/jigneshtalasila/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={24} />
            </a>
            <a href="https://www.youtube.com/@HeadRockShow" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Youtube size={24} />
            </a>
          </div>
        </section>
      </div>
    </Layout>;
};
export default Index;
