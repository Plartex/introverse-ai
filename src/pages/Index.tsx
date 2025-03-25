
import React from "react";
import Navbar from "@/components/Navbar";
import { AuthButtons } from "@/components/AuthButtons";
import GradientButton from "@/components/GradientButton";
import { ArrowRight, Check, Sparkles, Brain, Lightbulb, Users, BookOpen, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col overflow-hidden">
      <Navbar />
      
      <main className="flex-1 flex flex-col md:flex-row items-center px-6 md:px-16 py-10 max-w-7xl mx-auto w-full gap-10 md:gap-16">
        <div className="flex-1 max-w-2xl">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-4 animate-fade-in">
              Your Personal AI Assistant
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Chat with{" "}
              <span className="gradient-text">artificial intelligence</span> like a friend
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Helps with studies, work, creativity, and everyday tasks.
              Ask questions, generate texts, get recommendations, and
              find inspiration — all in one place.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-6 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <GradientButton 
                icon={<ArrowRight size={18} />}
              >
                Try for free
              </GradientButton>
              
              <AuthButtons />
            </div>
            
            <div className="pt-8 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Already trusted by{" "}
              <span className="font-medium text-gray-700">
                over 100,000 users
              </span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {[
                { feature: "Smart Responses", description: "Get intelligent answers to any question" },
                { feature: "Content Generation", description: "Create essays, stories, and more" },
                { feature: "Research Assistant", description: "Analyze and summarize information" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl border border-purple-100 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 bg-purple-100 p-1 rounded-full">
                      <Check size={14} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">{item.feature}</h3>
                      <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </div>
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
                        <span className="text-purple-600 text-xs font-bold">Me</span>
                      </div>
                      <div>
                        <p className="text-gray-700">How do I write an essay on Russian history?</p>
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
                          For writing an essay on Russian history, I recommend:
                        </p>
                        <ul className="mt-2 space-y-1">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <span className="text-gray-700 text-sm">Choose a specific period</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <span className="text-gray-700 text-sm">Research key events</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            <span className="text-gray-700 text-sm">Analyze historical sources</span>
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
      
      {/* Content-rich Promotional Section */}
      <section className="w-full bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 py-16 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhance Your Productivity with AI</h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto">
              Our AI assistant integrates seamlessly into your workflow, helping you accomplish more in less time
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Smart Learning",
                description: "Adapts to your needs and learns from interactions to provide more personalized assistance"
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Creative Inspiration",
                description: "Generate fresh ideas, overcome creative blocks, and explore new perspectives"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Team Collaboration",
                description: "Share AI-generated content with teammates and collaborate on projects more efficiently"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Knowledge Access",
                description: "Tap into vast knowledge sources to find answers and insights instantly"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-purple-500/30 p-3 rounded-lg inline-block mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-purple-100">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="h-6 w-6 text-yellow-300" />
                  <h3 className="text-2xl font-bold">What our users are saying</h3>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center flex-shrink-0 font-bold">
                    SK
                  </div>
                  <div>
                    <p className="italic text-purple-100">"This AI assistant has transformed how I write and research. I can't imagine going back to working without it!"</p>
                    <p className="text-sm mt-2 text-purple-200">Sarah K. — Content Creator</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center flex-shrink-0 font-bold">
                    MT
                  </div>
                  <div>
                    <p className="italic text-purple-100">"As a student, this tool helps me organize my thoughts and break down complex topics into manageable pieces."</p>
                    <p className="text-sm mt-2 text-purple-200">Michael T. — Graduate Student</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <div className="flex items-center gap-3 bg-purple-900/50 p-4 rounded-lg">
                  <MessageSquare className="h-8 w-8 text-purple-300" />
                  <div>
                    <div className="text-2xl font-bold">100,000+</div>
                    <div className="text-purple-200 text-sm">Happy Users</div>
                  </div>
                </div>
                
                <GradientButton 
                  icon={<ArrowRight size={18} />}
                  className="w-full md:w-auto py-3 px-8 text-lg"
                >
                  Join them today
                </GradientButton>
                
                <button className="text-white border border-white/60 hover:bg-white/10 px-6 py-3 rounded-full transition-all w-full md:w-auto">
                  See all features
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
