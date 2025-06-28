import React from 'react';
import { ExternalLink, Code, Palette, Smartphone } from 'lucide-react';

const Portfolio = () => {
 const projects = [
  {
    title: "Human Rights Organization",
    category: "Web Development",
    description: "Informational website to promote human rights, share stories, and raise awareness on social justice issues.",
    image: "https://images.pexels.com/photos/8850750/pexels-photo-8850750.jpeg",
    icon: Code,
    tags: ["React", "Tailwind CSS", "Contentful"],
    link: "https://aihroei.info"
  },
  {
    title: "Creative Design Showcase",
    category: "Graphic Design",
    description: "A versatile collection of Adobe Photoshop works including marriage albums, business posters, pamphlets, logos, invitations, and marketing creatives.",
    image: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg",
    icon: Palette,
    tags: ["Photoshop", "Marriage Album", "Poster Design", "Pamphlets", "Logos", "Social Media Creatives"]
  },
  {
    title: "Broeren Administraties",
    category: "Web Development",
    description: "A professional website for a Dutch financial services firm offering bookkeeping, tax consulting, and administrative support.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: Code,
    tags: ["React", "Tailwind CSS", "Contentful"],
    link: "https://broerenadministraties.nl"
  }
];


  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Recent Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our latest projects and see how we've helped businesses succeed
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
         {projects.map((project, index) => {
  const CardContent = (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-contain mx-auto my-0 group-hover:scale-105 transition-transform duration-300 bg-white"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink className="h-5 w-5 text-gray-700" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <project.icon className="h-5 w-5 text-blue-600" />
          </div>
          <span className="text-sm font-medium text-blue-600">{project.category}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return project.link ? (
    <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    <div key={index}>
      {CardContent}
    </div>
  );
})}

        </div>
      </div>
    </section>
  );
};

export default Portfolio;