
import { Fellowship, Activity, Podcast } from '../types/admin';

// Initial fellowships data
export const initialFellowships: Fellowship[] = [
  {
    id: 1,
    title: "Teach for India Fellowship",
    organization: "Teach For All network",
    about: "Teach for India Fellowship is an opportunity offered to young graduates of universities and workplaces to serve as full-time teachers to children belonging to underserved communities. Under this fellowship, the selected fellows will explore the leadership knowledge, skills and mindset required in the movement for educational equity",
    responsibilities: "Fellows are placed in classrooms for grades 1–10 and teach 40–80 students. They may be class teachers, teaching all subjects, or subject teachers and also Fellows are expected to lead students in their classrooms toward academic achievement that defies traditional expectations. They are also assigned to teach academics, values, and mindsets and to give their students the access and exposure they need to reach their personal, long-term growth and vision. daily 5-6 hrs approx work time",
    eligibility: "Indian citizen or Overseas Citizen of India, completed your bachelor's degree or final year, applying for the first time.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=740",
    stipend: "Rs.23,000/month and allowances upto 5-10k based on area of work and other allowances and insurances,",
    duration: "2 Years",
    location: "Across India",
    website: "https://apply.teachforindia.org/form"
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
