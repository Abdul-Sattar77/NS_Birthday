import React, { useEffect, useState,  } from "react";

const screens = [
  {
    title: "Hey Zindagi 🌙",
    subtitle: "It's Your Day!! Babe 💫",
  },
  {
    title: "I want to do something special",
    subtitle: "So I made this for you, jaan 💖",
  },
  {
    title: "I Love You So Much",
    subtitle: "Sweetheart 💕",
  },
];

const IntroScreens = ({ onFinish }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < screens.length - 1) {
        setIndex(index + 1);
      } else {
        onFinish();
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [index, onFinish]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bg-rose-500/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-500"></div>
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {['❤️', '💕', '💖', '✨', '💫', '🌟'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 px-4 animate-fadeInUp" key={index}>
        <div className="inline-block">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 bg-clip-text text-transparent animate-glow leading-tight">
            {screens[index].title}
          </h1>
        </div>
        <p className="text-2xl md:text-3xl text-pink-100 font-light tracking-wide animate-slideIn">
          {screens[index].subtitle}
        </p>

        {/* Progress dots */}
        <div className="flex gap-3 justify-center pt-8">
          {screens.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index 
                  ? 'w-12 bg-gradient-to-r from-pink-400 to-rose-400' 
                  : 'w-2 bg-white/30'
              }`}
            ></div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(255, 182, 193, 0.5),
                         0 0 40px rgba(255, 182, 193, 0.3);
          }
          50% { 
            text-shadow: 0 0 30px rgba(255, 182, 193, 0.8),
                         0 0 60px rgba(255, 182, 193, 0.5);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-30px) rotate(10deg); 
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 1s ease-out 0.3s both;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default IntroScreens;