import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function StatBadge({ children, className }: StatBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn("px-6 py-3 text-base md:text-lg font-semibold", className)}
    >
      {children}
    </Badge>
  );
}
