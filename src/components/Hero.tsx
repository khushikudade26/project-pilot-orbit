
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-gradient max-w-3xl">
            Track Your Projects with Purpose and Precision
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            A powerful yet simple project tracking tool built specifically for solo developers
            and indie hackers. Stay focused, organized, and ship faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="px-8 rounded-full">
              <Link to="/dashboard">
                Get Started <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 rounded-full">
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-20 bottom-0 top-auto"></div>
          <div className="glass-card rounded-xl overflow-hidden border border-primary/20 shadow-lg shadow-primary/10 animate-slide-up">
            <img 
              src="/placeholder.svg" 
              alt="ProjectPilot Dashboard" 
              className="w-full h-auto object-cover rounded-lg" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
