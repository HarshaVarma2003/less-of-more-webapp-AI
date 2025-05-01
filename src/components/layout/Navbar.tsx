
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-6 px-4 md:px-8 w-full z-50">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link to="/" className="text-2xl font-semibold">
            <span className="text-lom-light">Less</span>
            <span className="text-lom-yellow">Of</span>
            <span className="text-lom-light">More</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/fellowship" className="nav-link">Fellowship Directory</Link>
          <Link to="/activities" className="nav-link">Interesting Activities</Link>
          <Link to="/podcasts" className="nav-link">HeadRock Show Podcasts</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-lom-light hover:text-lom-yellow transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 bg-black animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="nav-link px-4" onClick={toggleMenu}>Home</Link>
            <Link to="/fellowship" className="nav-link px-4" onClick={toggleMenu}>Fellowship Directory</Link>
            <Link to="/activities" className="nav-link px-4" onClick={toggleMenu}>Interesting Activities</Link>
            <Link to="/podcasts" className="nav-link px-4" onClick={toggleMenu}>HeadRock Show Podcasts</Link>
            <Link to="/about" className="nav-link px-4" onClick={toggleMenu}>About</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
