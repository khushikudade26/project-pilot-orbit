
import { Link } from "react-router-dom";
import { Calendar, CheckSquare, Github, Globe } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Project {
  id: string;
  title: string;
  description: string;
  status: "planned" | "in-progress" | "completed";
  techStack: string[];
  tasks: {
    total: number;
    completed: number;
  };
  githubUrl?: string;
  deployUrl?: string;
  updatedAt: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="animated-card h-full overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Link 
            to={`/projects/${project.id}`}
            className="text-xl font-semibold hover:text-primary transition-colors line-clamp-1"
          >
            {project.title}
          </Link>
          <StatusBadge status={project.status} />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-2 h-12 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.techStack.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground space-x-4">
          <div className="flex items-center space-x-1">
            <CheckSquare size={14} />
            <span>
              {project.tasks.completed}/{project.tasks.total} tasks
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>
              {new Date(project.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-between">
        {project.githubUrl && (
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub repository"
          >
            <Github size={18} />
          </a>
        )}
        {project.deployUrl && (
          <a 
            href={project.deployUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Deployment URL"
          >
            <Globe size={18} />
          </a>
        )}
        {!project.githubUrl && !project.deployUrl && (
          <span className="text-muted-foreground text-sm">No external links</span>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
