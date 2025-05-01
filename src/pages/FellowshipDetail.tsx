
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

// Sample fellowship data (expanded)
const fellowships = [
  {
    id: 1,
    title: "Digital Marketing Fellowship",
    organization: "DigiLearn Academy",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=740",
    stipend: "₹25,000/month",
    duration: "12 months",
    location: "Mumbai, Delhi, Bangalore",
    about: "This fellowship is designed to provide hands-on experience in digital marketing strategies. Fellows will work with industry experts to develop and implement marketing campaigns across various digital platforms.",
    responsibilities: "Fellows will manage social media accounts, develop content strategies, analyze campaign performance data, and collaborate with creative teams to produce engaging content for target audiences.",
    eligibility: "Bachelor's degree in Marketing, Communications, or related field. Proficiency in digital marketing tools and social media platforms. Good analytical and creative skills.",
    website: "https://example.com/digilearn"
  },
  {
    id: 2,
    title: "Data Science Fellowship",
    organization: "TechMinds Institute",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=740",
    stipend: "₹30,000/month",
    duration: "24 months",
    location: "Pune, Hyderabad, Chennai",
    about: "A comprehensive data science program where fellows get to work on real-world projects using advanced analytics and machine learning techniques. The program focuses on developing both technical and business acumen.",
    responsibilities: "Fellows will analyze large datasets, develop predictive models, create data visualization dashboards, and present insights to stakeholders to drive business decisions.",
    eligibility: "Master's degree in Statistics, Computer Science, or related quantitative field. Experience with Python, R, and SQL. Strong mathematical and statistical knowledge.",
    website: "https://example.com/techminds"
  },
  {
    id: 3,
    title: "Content Creation Fellowship",
    organization: "Creative Hub",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=740",
    stipend: "₹20,000/month",
    duration: "6 months",
    location: "Remote, Flexible",
    about: "This fellowship focuses on developing skills in creating engaging content across different formats including writing, video, and audio. Fellows will learn modern content strategies that drive audience engagement.",
    responsibilities: "Fellows will produce written articles, script and shoot video content, record and edit podcast episodes, and manage content distribution across multiple platforms.",
    eligibility: "Background in journalism, communications, or media production. Portfolio demonstrating creative work. Familiarity with content management systems and basic editing tools.",
    website: "https://example.com/creativehub"
  },
  {
    id: 4,
    title: "Business Analytics Fellowship",
    organization: "Business Insights Co.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=740",
    stipend: "₹35,000/month",
    duration: "18 months",
    location: "Gurgaon, Bangalore, Hyderabad",
    about: "This fellowship provides intensive training and experience in business analytics, helping fellows translate data into actionable business insights. Fellows work directly with senior analysts on high-impact projects.",
    responsibilities: "Fellows will conduct market research, develop financial models, perform competitor analysis, and create executive presentations with strategic recommendations.",
    eligibility: "MBA or equivalent business degree with strong analytical focus. Proficiency in Excel, PowerBI or Tableau. Experience with business case analysis.",
    website: "https://example.com/businessinsights"
  }
];

const FellowshipDetail = () => {
  const { id } = useParams<{ id: string }>();
  const fellowship = fellowships.find(f => f.id === Number(id));

  if (!fellowship) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Fellowship not found</h2>
          <Link to="/fellowship" className="text-lom-yellow hover:underline">
            Return to Fellowship Directory
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <Link to="/fellowship" className="text-lom-yellow hover:underline flex items-center">
            ← Back to Fellowship Directory
          </Link>
        </div>
        
        {/* Image moved to top, full width and square aspect ratio */}
        <div className="mb-8 w-full">
          <div className="aspect-square w-full">
            <img 
              src={fellowship.image} 
              alt={fellowship.title} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <h1 className="text-3xl font-bold mb-2">{fellowship.title}</h1>
            <p className="text-xl text-gray-400 mb-6">Offered By: {fellowship.organization}</p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-lom-yellow">What is it about?</h2>
                <p className="text-gray-300">{fellowship.about}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-lom-yellow">What will the fellow do?</h2>
                <p className="text-gray-300">{fellowship.responsibilities}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3 text-lom-yellow">Eligibility</h2>
                <p className="text-gray-300">{fellowship.eligibility}</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-900 p-6 rounded-lg sticky top-24">
              <h3 className="text-xl font-semibold mb-6 text-lom-yellow">Fellowship Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Duration</p>
                  <p className="font-medium">{fellowship.duration}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Stipend</p>
                  <p className="font-medium">{fellowship.stipend}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="font-medium">{fellowship.location}</p>
                </div>
                
                <div className="pt-4">
                  <a 
                    href={fellowship.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block w-full py-3 bg-lom-yellow text-lom-dark font-medium text-center rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Visit Website
                  </a>
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
