
import React from "react";
import Navbar from "@/components/Navbar";
import { AuthButtons } from "@/components/AuthButtons";
import GradientButton from "@/components/GradientButton";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col overflow-hidden">
      <Navbar />
      
      <main className="flex-1 flex flex-col md:flex-row items-center px-6 md:px-16 py-10 max-w-7xl mx-auto w-full gap-10 md:gap-16">
        <div className="flex-1 max-w-2xl">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-4 animate-fade-in">
              Introducing AI Platform
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Experience the future of{" "}
              <span className="gradient-text">artificial intelligence</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Harness the power of AI to transform your ideas into reality. 
              Our platform provides intuitive tools for creating, exploring, and 
              implementing AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <GradientButton 
                icon={<ArrowRight size={18} />}
                className="w-full sm:w-auto"
              >
                Try for Free
              </GradientButton>
              
              <AuthButtons />
            </div>
            
            <div className="pt-8 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Already trusted by{" "}
              <span className="font-medium text-gray-700">
                2,000+ innovative companies
              </span>
            </div>
            
            <div className="flex flex-wrap gap-8 justify-center md:justify-start pt-4 opacity-70 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {["Company", "Enterprise", "Startup", "Tech Co", "Innovation"].map((company, i) => (
                <div 
                  key={i} 
                  className="text-gray-400 font-medium text-lg"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300/30 to-indigo-300/30 rounded-3xl blur-3xl animate-pulse-slow" />
            
            <div className="relative rounded-3xl overflow-hidden border border-purple-200 shadow-2xl animate-float glass-effect">
              <div className="bg-gradient-to-br from-purple-100/80 to-white/80 backdrop-blur-sm p-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                
                <div className="relative">
                  <div className="p-4 rounded-xl bg-white shadow-sm border border-gray-100 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 text-xs font-bold">U</span>
                      </div>
                      <div>
                        <p className="text-gray-700">How do I implement AI in my business?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div>
                        <p className="text-gray-700">
                          I can help you integrate AI into your business in several ways:
                        </p>
                        <ul className="mt-2 space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <span className="text-gray-700 text-sm">Custom AI solutions</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <span className="text-gray-700 text-sm">Process automation</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <span className="text-gray-700 text-sm">Data analysis</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="h-0.5 w-16 bg-gray-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -bottom-20 -right-20" />
            <div className="absolute -z-10 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl -top-10 -left-10" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
