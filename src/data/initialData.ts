
import { Fellowship, Activity, Podcast } from '../types/admin';

// Initial fellowships data
export const initialFellowships: Fellowship[] = [
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
export const initialActivities: Activity[] = [
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
export const initialPodcasts: Podcast[] = [
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
