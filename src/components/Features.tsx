
import { CheckCircle, Calendar, Tag, Github, Layout, Rocket } from "lucide-react";

const features = [
  {
    title: "Project Dashboard",
    description: "Visualize all your projects at a glance with status indicators and progress tracking.",
    icon: Layout,
  },
  {
    title: "Task Management",
    description: "Create and manage task checklists for each project with status updates and priorities.",
    icon: CheckCircle,
  },
  {
    title: "Tech Stack Tagging",
    description: "Tag projects with technologies used to maintain a clear overview of your expertise.",
    icon: Tag,
  },
  {
    title: "Calendar Planning",
    description: "Plan your development schedule with a monthly calendar view for deadlines and milestones.",
    icon: Calendar,
  },
  {
    title: "GitHub Integration",
    description: "Link your projects to GitHub repositories for seamless code management.",
    icon: Github,
  },
  {
    title: "Deployment Tracking",
    description: "Track where your projects are deployed and manage environment URLs.",
    icon: Rocket,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Everything You Need, Nothing You Don't
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ProjectPilot is designed with the minimalist developer in mind, providing
            essential features without overwhelming complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg animated-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground flex-grow">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
