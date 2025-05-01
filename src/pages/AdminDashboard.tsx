
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Admin dashboard tabs
const TABS = {
  FELLOWSHIPS: 'fellowships',
  ACTIVITIES: 'activities',
  PODCASTS: 'podcasts',
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(TABS.FELLOWSHIPS);
  const navigate = useNavigate();

  // Check for admin login status
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin-access-only');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin-access-only');
  };

  return (
    <div className="min-h-screen bg-lom-dark">
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
            <button 
              onClick={handleLogout}
              className="px-4 py-1 border border-gray-600 rounded-md hover:bg-gray-800 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="border-b border-gray-800 flex overflow-x-auto">
            <button
              className={`py-3 px-6 -mb-px ${
                activeTab === TABS.FELLOWSHIPS 
                  ? 'border-b-2 border-lom-yellow text-lom-yellow'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab(TABS.FELLOWSHIPS)}
            >
              Fellowships
            </button>
            <button
              className={`py-3 px-6 -mb-px ${
                activeTab === TABS.ACTIVITIES 
                  ? 'border-b-2 border-lom-yellow text-lom-yellow'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab(TABS.ACTIVITIES)}
            >
              Activities
            </button>
            <button
              className={`py-3 px-6 -mb-px ${
                activeTab === TABS.PODCASTS 
                  ? 'border-b-2 border-lom-yellow text-lom-yellow'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab(TABS.PODCASTS)}
            >
              Podcasts
            </button>
          </div>
        </div>

        <div className="mb-6 flex justify-end">
          <button className="bg-lom-yellow text-lom-dark px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">
            + Add New
          </button>
        </div>

        {/* Tab content */}
        <div className="bg-gray-900 rounded-lg p-6">
          {activeTab === TABS.FELLOWSHIPS && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Manage Fellowships</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Title</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Organization</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Stipend</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap">Digital Marketing Fellowship</td>
                      <td className="px-4 py-4 whitespace-nowrap">DigiLearn Academy</td>
                      <td className="px-4 py-4 whitespace-nowrap">12 months</td>
                      <td className="px-4 py-4 whitespace-nowrap">₹25,000/month</td>
                      <td className="px-4 py-4 whitespace-nowrap space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">Edit</button>
                        <button className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap">Data Science Fellowship</td>
                      <td className="px-4 py-4 whitespace-nowrap">TechMinds Institute</td>
                      <td className="px-4 py-4 whitespace-nowrap">24 months</td>
                      <td className="px-4 py-4 whitespace-nowrap">₹30,000/month</td>
                      <td className="px-4 py-4 whitespace-nowrap space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">Edit</button>
                        <button className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === TABS.ACTIVITIES && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Manage Activities</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Title</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Image URL</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Link</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap">Morning Meditation</td>
                      <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">https://images.unsplash.com/photo...</td>
                      <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">https://example.com/meditation</td>
                      <td className="px-4 py-4 whitespace-nowrap space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">Edit</button>
                        <button className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap">Book Club Discussions</td>
                      <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">https://images.unsplash.com/photo...</td>
                      <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">https://example.com/bookclub</td>
                      <td className="px-4 py-4 whitespace-nowrap space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">Edit</button>
                        <button className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === TABS.PODCASTS && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Manage Podcasts</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Title</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Description</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">YouTube URL</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap">Building a Growth Mindset</td>
                      <td className="px-4 py-4 truncate max-w-xs">Exploring strategies to develop a growth mindset...</td>
                      <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">https://youtube.com/watch?v=videoID1</td>
                      <td className="px-4 py-4 whitespace-nowrap space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">Edit</button>
                        <button className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 whitespace-nowrap">The Art of Effective Communication</td>
                      <td className="px-4 py-4 truncate max-w-xs">Understanding communication patterns that strengthen...</td>
                      <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">https://youtube.com/watch?v=videoID2</td>
                      <td className="px-4 py-4 whitespace-nowrap space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">Edit</button>
                        <button className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
