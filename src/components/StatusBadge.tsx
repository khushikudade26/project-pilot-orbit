
import { cn } from "@/lib/utils";

type StatusType = "planned" | "in-progress" | "completed";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const getStatusColor = (status: StatusType) => {
    switch (status) {
      case "planned":
        return "bg-status-planned/20 text-status-planned border-status-planned/30";
      case "in-progress":
        return "bg-status-in-progress/20 text-status-in-progress border-status-in-progress/30";
      case "completed":
        return "bg-status-completed/20 text-status-completed border-status-completed/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: StatusType) => {
    switch (status) {
      case "planned":
        return "Planned";
      case "in-progress":
        return "In Progress";
      case "completed":
        return "Completed";
      default:
        return status;
    }
  };

  return (
    <span 
      className={cn(
        "px-2.5 py-0.5 text-xs font-medium rounded-full border",
        getStatusColor(status),
        className
      )}
    >
      {getStatusText(status)}
    </span>
  );
};

export default StatusBadge;
