
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-24 flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
        <p className="text-xl md:text-2xl mb-8">Oops! Page not found.</p>
        <p className="text-gray-400 mb-10 text-center max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/"
          className="px-8 py-3 bg-lom-yellow text-lom-dark font-medium rounded-md hover:bg-opacity-90 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
