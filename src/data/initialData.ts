
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
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teach-india.org%2F&psig=AOvVaw20uySTFYDSzApkhgCESa_i&ust=1747232646700000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOiXy_vSoI0DFQAAAAAdAAAAABAK",
    stipend: "Rs.23,000/month and allowances upto 5-10k based on area of work and other allowances and insurances,",
    duration: "2 Years",
    location: "Across India",
    website: "https://apply.teachforindia.org/form"
  },
];

// Sample activities data
export const initialActivities: Activity[] = [
  {
    id: 1,
    title: "Trash to Toy",
    image: "https://youtube.com/shorts/TZbjyhPxZa8?si=hRaQvR5_oHzW8kBz",
    url: "https://youtube.com/shorts/TZbjyhPxZa8?si=hRaQvR5_oHzW8kBz"
  },
 ,
];

// Sample podcasts data
export const initialPodcasts: Podcast[] = [
  {
    id: 1,
    title: "Telugu AdTech Boys: How AdOnMo Built a ₹1000 Cr startup from Hyderabad",
    description: "Telugu AdTech Boys: How AdOnMo Built a ₹1000 Cr startup from Hyderabad | Taxis to Apartments | HRS29",
    thumbnail: "https://youtu.be/EXbBUAMrTEU?si=F0nCT7cIAeS9gB-d",
    youtubeUrl: "https://youtu.be/EXbBUAMrTEU?si=F0nCT7cIAeS9gB-d"
  },
 
];
