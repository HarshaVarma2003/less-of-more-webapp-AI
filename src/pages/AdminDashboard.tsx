
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import EditFellowshipModal from '@/components/modals/EditFellowshipModal';
import EditActivityModal from '@/components/modals/EditActivityModal';
import EditPodcastModal from '@/components/modals/EditPodcastModal';

// Import new components
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import TabsNav from '@/components/dashboard/TabsNav';
import FellowshipsTab from '@/components/dashboard/FellowshipsTab';
import ActivitiesTab from '@/components/dashboard/ActivitiesTab';
import PodcastsTab from '@/components/dashboard/PodcastsTab';

// Import types and utilities
import { Fellowship, Activity, Podcast, TABS, TabType } from '@/types/admin';
import { getNextId, saveToLocalStorage } from '@/utils/localStorageUtils';
import { initialFellowships, initialActivities, initialPodcasts } from '@/data/initialData';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TABS.FELLOWSHIPS);
  const navigate = useNavigate();
  const { toast } = useToast();

  // State for content with localStorage persistence
  const [fellowships, setFellowships] = useState<Fellowship[]>(() => {
    const saved = localStorage.getItem('lom_fellowships');
    return saved ? JSON.parse(saved) : initialFellowships;
  });
  
  const [activities, setActivities] = useState<Activity[]>(() => {
    const saved = localStorage.getItem('lom_activities');
    return saved ? JSON.parse(saved) : initialActivities;
  });
  
  const [podcasts, setPodcasts] = useState<Podcast[]>(() => {
    const saved = localStorage.getItem('lom_podcasts');
    return saved ? JSON.parse(saved) : initialPodcasts;
  });

  // State for modals
  const [editingFellowship, setEditingFellowship] = useState<Fellowship | null>(null);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);
  const [editingPodcast, setEditingPodcast] = useState<Podcast | null>(null);
  const [isAddingFellowship, setIsAddingFellowship] = useState(false);
  const [isAddingActivity, setIsAddingActivity] = useState(false);
  const [isAddingPodcast, setIsAddingPodcast] = useState(false);

  // Save to localStorage whenever data changes
  useEffect(() => {
    saveToLocalStorage('lom_fellowships', fellowships);
  }, [fellowships]);

  useEffect(() => {
    saveToLocalStorage('lom_activities', activities);
  }, [activities]);

  useEffect(() => {
    saveToLocalStorage('lom_podcasts', podcasts);
  }, [podcasts]);

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
  const handleEditFellowship = (fellowship: Fellowship) => {
    setEditingFellowship(fellowship);
    setIsAddingFellowship(false);
  };

  const handleSaveFellowship = (updatedFellowship: Fellowship) => {
    if (isAddingFellowship) {
      const updatedFellowships = [...fellowships, updatedFellowship];
      setFellowships(updatedFellowships);
      toast({
        title: "Fellowship Added",
        description: `"${updatedFellowship.title}" has been added successfully.`,
        duration: 3000,
      });
    } else {
      const updatedFellowships = fellowships.map(f => 
        f.id === updatedFellowship.id ? updatedFellowship : f
      );
      setFellowships(updatedFellowships);
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
  const handleEditActivity = (activity: Activity) => {
    setEditingActivity(activity);
    setIsAddingActivity(false);
  };

  const handleSaveActivity = (updatedActivity: Activity) => {
    if (isAddingActivity) {
      const updatedActivities = [...activities, updatedActivity];
      setActivities(updatedActivities);
      toast({
        title: "Activity Added",
        description: `"${updatedActivity.title}" has been added successfully.`,
        duration: 3000,
      });
    } else {
      const updatedActivities = activities.map(a => 
        a.id === updatedActivity.id ? updatedActivity : a
      );
      setActivities(updatedActivities);
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
  const handleEditPodcast = (podcast: Podcast) => {
    setEditingPodcast(podcast);
    setIsAddingPodcast(false);
  };

  const handleSavePodcast = (updatedPodcast: Podcast) => {
    if (isAddingPodcast) {
      const updatedPodcasts = [...podcasts, updatedPodcast];
      setPodcasts(updatedPodcasts);
      toast({
        title: "Podcast Added",
        description: `"${updatedPodcast.title}" has been added successfully.`,
        duration: 3000,
      });
    } else {
      const updatedPodcasts = podcasts.map(p => 
        p.id === updatedPodcast.id ? updatedPodcast : p
      );
      setPodcasts(updatedPodcasts);
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
    const updatedFellowships = fellowships.filter(f => f.id !== id);
    setFellowships(updatedFellowships);
    toast({
      title: "Fellowship Deleted",
      description: "The fellowship has been deleted successfully.",
      duration: 3000,
    });
  };

  const handleDeleteActivity = (id: number) => {
    const updatedActivities = activities.filter(a => a.id !== id);
    setActivities(updatedActivities);
    toast({
      title: "Activity Deleted",
      description: "The activity has been deleted successfully.",
      duration: 3000,
    });
  };

  const handleDeletePodcast = (id: number) => {
    const updatedPodcasts = podcasts.filter(p => p.id !== id);
    setPodcasts(updatedPodcasts);
    toast({
      title: "Podcast Deleted",
      description: "The podcast has been deleted successfully.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-lom-dark">
      <DashboardHeader handleLogout={handleLogout} />

      <div className="container mx-auto px-4 py-8">
        <TabsNav activeTab={activeTab} setActiveTab={setActiveTab} />

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
            <FellowshipsTab 
              fellowships={fellowships}
              onEdit={handleEditFellowship}
              onDelete={handleDeleteFellowship}
            />
          )}

          {activeTab === TABS.ACTIVITIES && (
            <ActivitiesTab 
              activities={activities}
              onEdit={handleEditActivity}
              onDelete={handleDeleteActivity}
            />
          )}

          {activeTab === TABS.PODCASTS && (
            <PodcastsTab 
              podcasts={podcasts}
              onEdit={handleEditPodcast}
              onDelete={handleDeletePodcast}
            />
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
