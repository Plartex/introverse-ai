
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const GradientButton = ({
  children,
  className,
  onClick,
  icon,
}: GradientButtonProps) => {
  return (
    <Button
      className={cn(
        "relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-full px-6 py-3 h-12 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg button-shine",
        className
      )}
      onClick={onClick}
    >
      <span className="flex items-center gap-2">
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </Button>
  );
};

export default GradientButton;
