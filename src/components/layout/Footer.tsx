
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 py-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="text-xl font-semibold">
            <span className="text-lom-light">Less</span>
            <span className="text-lom-yellow">Of</span>
            <span className="text-lom-light">More</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Learn less and less about more and more, before learning more and more about less and less.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-4">
            <a href="https://www.instagram.com/jigneshtalasila/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={20} />
            </a>
            <a href="https://www.youtube.com/@HeadRockShow" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Youtube size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} LessOfMore.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
