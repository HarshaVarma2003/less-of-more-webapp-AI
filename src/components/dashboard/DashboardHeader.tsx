
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  handleLogout: () => void;
}

const DashboardHeader = ({ handleLogout }: DashboardHeaderProps) => {
  return (
    <header className="bg-gray-900 border-b border-gray-800 py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <span className="text-lom-light">Less</span>
            <span className="text-lom-yellow">Of</span>
            <span className="text-lom-light">More</span>
            <span className="text-gray-400 ml-2 font-normal">Admin Dashboard</span>
          </h1>
        </div>
        <div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="px-4 py-1 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
