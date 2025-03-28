
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AuthButtonProps {
  provider: string;
  label?: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const AuthButton = ({
  provider,
  label,
  icon,
  className,
  onClick,
}: AuthButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "flex items-center justify-center gap-2 w-12 h-12 rounded-full transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] border-[1.5px]",
        className
      )}
      onClick={onClick}
      aria-label={`Sign in with ${provider}`}
    >
      {icon}
      {label && <span className="font-medium">{label}</span>}
    </Button>
  );
};

export const AuthButtons = () => {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleYandexLogin = () => {
    console.log("Yandex login clicked");
  };

  return (
    <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <AuthButton
        provider="google"
        icon={
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
        }
        className="bg-white text-gray-700 hover:bg-gray-50"
        onClick={handleGoogleLogin}
      />
      <AuthButton
        provider="yandex"
        icon={
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12Z"
              fill="#FC3F1D"
            />
            <path
              d="M13.155 6.947H11.716C10.146 6.947 8.764 8.132 8.764 10.178C8.764 11.674 9.482 12.582 10.499 13.338L8 17.053H9.652L12.056 13.367L12.84 12.781H13.127V17.053H14.631V6.947H13.155ZM13.127 11.587H12.84C11.793 11.587 10.661 11.115 10.661 9.997C10.661 8.969 11.396 8.328 12.325 8.328H13.127V11.587Z"
              fill="white"
            />
          </svg>
        }
        className="bg-[#FC3F1D] text-white hover:bg-[#e03618]"
        onClick={handleYandexLogin}
      />
    </div>
  );
};
