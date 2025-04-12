
import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard, { Project } from "@/components/ProjectCard";

// Example data
const DEMO_PROJECTS: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    status: "in-progress",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    tasks: {
      total: 12,
      completed: 5,
    },
    githubUrl: "https://github.com/username/ecommerce",
    deployUrl: "https://myecommerce.vercel.app",
    updatedAt: "2023-04-10T10:30:00Z",
  },
  {
    id: "2",
    title: "Weather App",
    description: "A weather application that displays current conditions and forecasts based on location.",
    status: "completed",
    techStack: ["React", "OpenWeather API", "Tailwind CSS"],
    tasks: {
      total: 8,
      completed: 8,
    },
    githubUrl: "https://github.com/username/weather-app",
    deployUrl: "https://weather-app.vercel.app",
    updatedAt: "2023-03-15T14:20:00Z",
  },
  {
    id: "3",
    title: "Task Management API",
    description: "A RESTful API for task management with authentication and authorization features.",
    status: "planned",
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    tasks: {
      total: 10,
      completed: 0,
    },
    updatedAt: "2023-04-05T09:15:00Z",
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills with a contact form.",
    status: "completed",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    tasks: {
      total: 6,
      completed: 6,
    },
    githubUrl: "https://github.com/username/portfolio",
    deployUrl: "https://myportfolio.dev",
    updatedAt: "2023-02-20T11:45:00Z",
  },
  {
    id: "5",
    title: "Blog Platform",
    description: "A platform for creating and managing blog posts with markdown support and comments.",
    status: "in-progress",
    techStack: ["React", "GraphQL", "Apollo", "MongoDB"],
    tasks: {
      total: 15,
      completed: 7,
    },
    githubUrl: "https://github.com/username/blog-platform",
    updatedAt: "2023-04-08T16:30:00Z",
  },
  {
    id: "6",
    title: "Video Chat App",
    description: "Real-time video chat application with rooms and screen sharing capabilities.",
    status: "planned",
    techStack: ["React", "WebRTC", "Socket.io", "Node.js"],
    tasks: {
      total: 20,
      completed: 0,
    },
    updatedAt: "2023-04-12T08:00:00Z",
  },
];

const Dashboard = () => {
  const [projects] = useState<Project[]>(DEMO_PROJECTS);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.status === activeFilter;
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="container max-w-7xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="text-muted-foreground">
              {projects.length} project{projects.length !== 1 ? "s" : ""} total
            </p>
          </div>
          <Button asChild>
            <Link to="/projects/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Project
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by status:</span>
          </div>
          <TabsList>
            <TabsTrigger 
              value="all" 
              onClick={() => setActiveFilter("all")}
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="planned" 
              onClick={() => setActiveFilter("planned")}
            >
              Planned
            </TabsTrigger>
            <TabsTrigger 
              value="in-progress" 
              onClick={() => setActiveFilter("in-progress")}
            >
              In Progress
            </TabsTrigger>
            <TabsTrigger 
              value="completed" 
              onClick={() => setActiveFilter("completed")}
            >
              Completed
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeFilter} className="mt-6">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No projects found with this filter.</p>
                <Button asChild variant="outline">
                  <Link to="/projects/new">Create a new project</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
