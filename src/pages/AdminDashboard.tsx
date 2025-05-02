import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Pencil, Plus, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditFellowshipModal from '@/components/modals/EditFellowshipModal';
import EditActivityModal from '@/components/modals/EditActivityModal';
import EditPodcastModal from '@/components/modals/EditPodcastModal';
import { useToast } from "@/components/ui/use-toast";

// Admin dashboard tabs
const TABS = {
  FELLOWSHIPS: 'fellowships',
  ACTIVITIES: 'activities',
  PODCASTS: 'podcasts',
};

// Extended fellowship data with additional fields
const initialFellowships = [
  {
    id: 1,
    title: "Digital Marketing Fellowship",
    organization: "DigiLearn Academy",
    about: "A comprehensive fellowship program focused on digital marketing strategies and implementation.",
    responsibilities: "Create marketing campaigns, analyze data, develop social media strategies.",
    eligibility: "Bachelor's degree in Marketing or related field. Experience with digital tools.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=740",
    stipend: "₹25,000/month",
    duration: "12 months",
    location: "Remote",
    website: "https://digilearn-academy.example.com"
  },
  {
    id: 2,
    title: "Data Science Fellowship",
    organization: "TechMinds Institute",
    about: "An intensive fellowship program focused on data science and machine learning.",
    responsibilities: "Analyze large datasets, build predictive models, present insights to stakeholders.",
    eligibility: "Master's degree in Statistics, Computer Science or related field. Experience with Python and R.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=740",
    stipend: "₹30,000/month",
    duration: "24 months",
    location: "Bangalore",
    website: "https://techminds-institute.example.com"
  },
];

// Sample activities data
const initialActivities = [
  {
    id: 1,
    title: "Morning Meditation",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=740",
    url: "https://example.com/meditation"
  },
  {
    id: 2,
    title: "Book Club Discussions",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=740",
    url: "https://example.com/bookclub"
  },
];

// Sample podcasts data
const initialPodcasts = [
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
];

// Function to get the next available ID in an array of objects
const getNextId = (items: any[]) => {
  return Math.max(0, ...items.map(item => item.id)) + 1;
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(TABS.FELLOWSHIPS);
  const navigate = useNavigate();
  const { toast } = useToast();

  // State for content
  const [fellowships, setFellowships] = useState(initialFellowships);
  const [activities, setActivities] = useState(initialActivities);
  const [podcasts, setPodcasts] = useState(initialPodcasts);

  // State for modals
  const [editingFellowship, setEditingFellowship] = useState<any>(null);
  const [editingActivity, setEditingActivity] = useState<any>(null);
  const [editingPodcast, setEditingPodcast] = useState<any>(null);
  const [isAddingFellowship, setIsAddingFellowship] = useState(false);
  const [isAddingActivity, setIsAddingActivity] = useState(false);
  const [isAddingPodcast, setIsAddingPodcast] = useState(false);

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

  // Add new item handlers
  const handleAddNew = () => {
    if (activeTab === TABS.FELLOWSHIPS) {
      const newFellowship = {
        id: getNextId(fellowships),
        title: "New Fellowship",
        organization: "Organization Name",
        about: "",
        responsibilities: "",
        eligibility: "",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=740",
        stipend: "₹0/month",
        duration: "0 months",
        location: "",
        website: ""
      };
      setEditingFellowship(newFellowship);
      setIsAddingFellowship(true);
    } else if (activeTab === TABS.ACTIVITIES) {
      const newActivity = {
        id: getNextId(activities),
        title: "New Activity",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=740",
        url: "https://example.com"
      };
      setEditingActivity(newActivity);
      setIsAddingActivity(true);
    } else if (activeTab === TABS.PODCASTS) {
      const newPodcast = {
        id: getNextId(podcasts),
        title: "New Podcast",
        description: "Podcast description",
        thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=740",
        youtubeUrl: "https://youtube.com/watch?v=example"
      };
      setEditingPodcast(newPodcast);
      setIsAddingPodcast(true);
    }
  };

  // Edit handlers for fellowships
  const handleEditFellowship = (fellowship: any) => {
    setEditingFellowship(fellowship);
    setIsAddingFellowship(false);
  };

  const handleSaveFellowship = (updatedFellowship: any) => {
    if (isAddingFellowship) {
      setFellowships([...fellowships, updatedFellowship]);
      toast({
        title: "Fellowship Added",
        description: `"${updatedFellowship.title}" has been added successfully.`,
        duration: 3000,
      });
    } else {
      setFellowships(fellowships.map(f => 
        f.id === updatedFellowship.id ? updatedFellowship : f
      ));
      toast({
        title: "Fellowship Updated",
        description: `"${updatedFellowship.title}" has been updated successfully.`,
        duration: 3000,
      });
    }
    setEditingFellowship(null);
    setIsAddingFellowship(false);
  };

  // Edit handlers for activities
  const handleEditActivity = (activity: any) => {
    setEditingActivity(activity);
    setIsAddingActivity(false);
  };

  const handleSaveActivity = (updatedActivity: any) => {
    if (isAddingActivity) {
      setActivities([...activities, updatedActivity]);
      toast({
        title: "Activity Added",
        description: `"${updatedActivity.title}" has been added successfully.`,
        duration: 3000,
      });
    } else {
      setActivities(activities.map(a => 
        a.id === updatedActivity.id ? updatedActivity : a
      ));
      toast({
        title: "Activity Updated",
        description: `"${updatedActivity.title}" has been updated successfully.`,
        duration: 3000,
      });
    }
    setEditingActivity(null);
    setIsAddingActivity(false);
  };

  // Edit handlers for podcasts
  const handleEditPodcast = (podcast: any) => {
    setEditingPodcast(podcast);
    setIsAddingPodcast(false);
  };

  const handleSavePodcast = (updatedPodcast: any) => {
    if (isAddingPodcast) {
      setPodcasts([...podcasts, updatedPodcast]);
      toast({
        title: "Podcast Added",
        description: `"${updatedPodcast.title}" has been added successfully.`,
        duration: 3000,
      });
    } else {
      setPodcasts(podcasts.map(p => 
        p.id === updatedPodcast.id ? updatedPodcast : p
      ));
      toast({
        title: "Podcast Updated",
        description: `"${updatedPodcast.title}" has been updated successfully.`,
        duration: 3000,
      });
    }
    setEditingPodcast(null);
    setIsAddingPodcast(false);
  };

  // Delete handlers
  const handleDeleteFellowship = (id: number) => {
    setFellowships(fellowships.filter(f => f.id !== id));
    toast({
      title: "Fellowship Deleted",
      description: "The fellowship has been deleted successfully.",
      duration: 3000,
    });
  };

  const handleDeleteActivity = (id: number) => {
    setActivities(activities.filter(a => a.id !== id));
    toast({
      title: "Activity Deleted",
      description: "The activity has been deleted successfully.",
      duration: 3000,
    });
  };

  const handleDeletePodcast = (id: number) => {
    setPodcasts(podcasts.filter(p => p.id !== id));
    toast({
      title: "Podcast Deleted",
      description: "The podcast has been deleted successfully.",
      duration: 3000,
    });
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
          <Button 
            className="bg-lom-yellow text-lom-dark hover:bg-opacity-90"
            onClick={handleAddNew}
          >
            <Plus className="mr-1" /> Add New
          </Button>
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
                    {fellowships.map((fellowship) => (
                      <tr key={fellowship.id}>
                        <td className="px-4 py-4 whitespace-nowrap">{fellowship.title}</td>
                        <td className="px-4 py-4 whitespace-nowrap">{fellowship.organization}</td>
                        <td className="px-4 py-4 whitespace-nowrap">{fellowship.duration}</td>
                        <td className="px-4 py-4 whitespace-nowrap">{fellowship.stipend}</td>
                        <td className="px-4 py-4 whitespace-nowrap space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-blue-400 hover:text-blue-300"
                            onClick={() => handleEditFellowship(fellowship)}
                          >
                            <Pencil className="h-4 w-4 mr-1" /> Edit
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-red-400 hover:text-red-300"
                            onClick={() => handleDeleteFellowship(fellowship.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" /> Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
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
                    {activities.map((activity) => (
                      <tr key={activity.id}>
                        <td className="px-4 py-4 whitespace-nowrap">{activity.title}</td>
                        <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">{activity.image}</td>
                        <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">{activity.url}</td>
                        <td className="px-4 py-4 whitespace-nowrap space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-blue-400 hover:text-blue-300"
                            onClick={() => handleEditActivity(activity)}
                          >
                            <Pencil className="h-4 w-4 mr-1" /> Edit
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-red-400 hover:text-red-300"
                            onClick={() => handleDeleteActivity(activity.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" /> Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
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
                    {podcasts.map((podcast) => (
                      <tr key={podcast.id}>
                        <td className="px-4 py-4 whitespace-nowrap">{podcast.title}</td>
                        <td className="px-4 py-4 truncate max-w-xs">{podcast.description}</td>
                        <td className="px-4 py-4 whitespace-nowrap truncate max-w-xs">{podcast.youtubeUrl}</td>
                        <td className="px-4 py-4 whitespace-nowrap space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-blue-400 hover:text-blue-300"
                            onClick={() => handleEditPodcast(podcast)}
                          >
                            <Pencil className="h-4 w-4 mr-1" /> Edit
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-red-400 hover:text-red-300"
                            onClick={() => handleDeletePodcast(podcast.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" /> Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit Modals */}
      {editingFellowship && (
        <EditFellowshipModal
          fellowship={editingFellowship}
          onClose={() => {
            setEditingFellowship(null);
            setIsAddingFellowship(false);
          }}
          onSave={handleSaveFellowship}
        />
      )}

      {editingActivity && (
        <EditActivityModal
          activity={editingActivity}
          onClose={() => {
            setEditingActivity(null);
            setIsAddingActivity(false);
          }}
          onSave={handleSaveActivity}
        />
      )}

      {editingPodcast && (
        <EditPodcastModal
          podcast={editingPodcast}
          onClose={() => {
            setEditingPodcast(null);
            setIsAddingPodcast(false);
          }}
          onSave={handleSavePodcast}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
