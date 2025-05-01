import Layout from '../components/layout/Layout';

// Use the uploaded image for Jignesh
const jigneshImage = "/lovable-uploads/d8de94aa-94dc-4e22-af49-0906817040fa.png";

// Sample team members data
const teamMembers = [{
  name: "Rahul Sharma",
  role: "Creative Director",
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=300&h=300"
}, {
  name: "Priya Patel",
  role: "Content Strategist",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=300&h=300"
}, {
  name: "Vikram Singh",
  role: "Fellowship Coordinator",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=300&h=300"
}, {
  name: "Nisha Gupta",
  role: "Podcast Producer",
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=300&h=300"
}, {
  name: "Aditya Reddy",
  role: "Community Manager",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=300&h=300"
}, {
  name: "Kiran Desai",
  role: "Visual Designer",
  image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=300&h=300"
}, {
  name: "Raj Malhotra",
  role: "Research Associate",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=300&h=300"
}];
const About = () => {
  return <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex justify-center mb-12">
          <div className="w-56 h-56 md:w-64 md:h-64">
            <img src={jigneshImage} alt="Jignesh Talasila" className="rounded-full object-cover w-full h-full shadow-lg" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Our <span className="text-lom-yellow">Mission</span>
            </h2>
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg">
              <p className="text-gray-300 leading-relaxed">
                At LessOfMore, we believe in the transformative power of focused learning and purposeful action. 
                Our mission is to bridge the gap between knowledge and implementation, helping young professionals 
                develop skills that truly matter in the real world. By curating high-quality fellowships, activities, 
                and insightful conversations, we aim to empower the next generation of leaders to make meaningful contributions 
                to society and their chosen fields.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              The <span className="text-lom-yellow">Journey</span>
            </h2>
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg">
              <p className="text-gray-300 leading-relaxed">
                LessOfMore began with a simple observation: many young professionals struggle not from a lack of 
                information, but from an overwhelming abundance of it. Founded by Jignesh Talasila, this platform 
                evolved from informal mentoring sessions to a structured resource hub that connects ambitious 
                individuals with opportunities for growth. Our journey has been guided by the principle that 
                meaningful progress comes from deliberate practice and focused learning, rather than scattered attention 
                across too many domains.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <blockquote className="text-center px-4">
              <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-4">
                "Learn less and less about more and more, before learning more and more about less and less."
              </p>
              
            </blockquote>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
            Our <span className="text-lom-yellow">Team</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12">
            {teamMembers.map((member, index) => <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mb-4">
                  <img src={member.image} alt={member.name} className="rounded-full object-cover w-full h-full" />
                </div>
                <h3 className="font-medium text-center">{member.name}</h3>
                <p className="text-sm text-gray-400 text-center">{member.role}</p>
              </div>)}
          </div>
          
          <div className="text-center">
            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-lom-yellow text-lom-dark font-medium rounded-md hover:bg-opacity-90 transition-colors">
              Want to join our dynamic team?
            </a>
          </div>
        </div>
      </div>
    </Layout>;
};
export default About;