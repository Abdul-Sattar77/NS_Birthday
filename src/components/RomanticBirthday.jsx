import React, { useState, useEffect, useRef } from 'react';
import { Heart, Music, Sparkles, Volume2, VolumeX } from 'lucide-react';

const RomanticBirthday = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const audioRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    // Auto-play music when component loads
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log('Autoplay blocked by browser - will start on first interaction');
        // Try again on first user interaction
        const playOnInteraction = () => {
          audioRef.current.play();
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
          document.removeEventListener('scroll', playOnInteraction);
        };
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
        document.addEventListener('scroll', playOnInteraction);
      });
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-orange-50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Playfair+Display:wght@400;600;700&display=swap');
        
        * {
          font-family: 'Cormorant Garamond', serif;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.2); }
          50% { text-shadow: 0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3); }
        }
        
        @keyframes petal {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes rotate3d {
          0% { transform: perspective(1000px) rotateY(0deg); }
          100% { transform: perspective(1000px) rotateY(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-petal { animation: petal linear forwards; }
        .animate-heartbeat { animation: heartbeat 2s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .animate-ripple { animation: ripple 1.5s ease-out infinite; }
        .animate-slideIn { animation: slideIn 1s ease-out; }
        .animate-bounce { animation: bounce 2s ease-in-out infinite; }
        .animate-rotate3d { animation: rotate3d 20s linear infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        
        .hover-3d {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .hover-3d:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        .text-gradient {
          background: linear-gradient(45deg, #d4af37, #f59e0b, #ef4444, #ec4899);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s ease infinite;
        }
        
        .card-tilt {
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        
        .glow-border {
          position: relative;
          overflow: hidden;
        }
        
        .glow-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #f59e0b, #ef4444, #ec4899, #a855f7);
          background-size: 400% 400%;
          animation: shimmer 4s ease infinite;
          border-radius: inherit;
          z-index: -1;
          opacity: 0.6;
        }
      `}</style>

      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src="/music/love-song.mp3" type="audio/mpeg" />
      </audio>

      {/* Cursor Follower */}
      <div 
        className="fixed w-8 h-8 rounded-full border-2 border-rose-400 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePos.x - 16,
          top: mousePos.y - 16,
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Floating Rose Petals with more variety */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute text-3xl opacity-40 animate-petal z-10"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${12 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {['🌸', '🌹', '💖', '✨'][i % 4]}
        </div>
      ))}

      {/* Floating Rose Petals with more variety */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute text-3xl opacity-40 animate-petal z-10"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${12 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {['🌸', '🌹', '💖', '✨'][i % 4]}
        </div>
      ))}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-300/20 to-rose-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-rose-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="text-center space-y-8 max-w-4xl animate-fadeInUp relative z-10">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl animate-pulse"></div>
            <Sparkles className="text-amber-500 w-12 h-12 mx-auto mb-4 animate-bounce relative z-10" />
          </div>
          
          <div className="relative">
            <h1 className="text-8xl md:text-9xl font-bold text-amber-600 animate-glow relative inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="relative z-10">Meri Naila</span>
              <div className="absolute inset-0 blur-2xl bg-amber-400/20 animate-pulse"></div>
            </h1>
          </div>
          
          <div className="space-y-3 text-2xl md:text-3xl text-gray-700">
            <p className="italic animate-slideIn" style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.2s' }}>
              Meri Chaand, Meri Zindagi
            </p>
            <p className="text-xl text-gray-600 animate-slideIn" style={{ animationDelay: '0.4s' }}>It's Your Day, My Love</p>
          </div>

          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-8 animate-shimmer"></div>

          <div className="max-w-2xl mx-auto glass-effect rounded-3xl p-8 shadow-2xl border border-amber-200/50 hover-3d">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              To the woman who fills my world with light and warmth,
            </p>
            <p
               className="text-amber-700 text-2xl font-semibold mb-3 leading-loose text-center"
                style={{
                fontFamily: "'Noto Nastaliq Urdu', serif",
                direction: "rtl"
  }}
>
  حسین چہرے کی تابندگی مبارک ہو
  <br />
  تجھے یہ سالگرہ کی خوشی مبارک ہو
</p>

            <p className="text-gray-600">
              Your smile is my morning, your happiness is the purpose of my prayers
            </p>
          </div>
        </div>
      </section>

      {/* Poetry Section with card animations */}
      <section className="py-20 px-4" style={{ opacity: Math.min(scrollY / 300, 1) }}>
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-6xl text-center text-gradient mb-16 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Words from the Heart
          </h2>

          <div className="glass-effect glow-border rounded-3xl p-10 shadow-2xl space-y-8 hover-3d">
            <div className="text-center space-y-4 animate-fadeInUp">
              <div className="inline-block mb-4">
                <Heart className="text-rose-400 w-12 h-12 animate-heartbeat" fill="currentColor" />
              </div>
              <p
  className="text-2xl text-gray-800 font-semibold leading-loose text-center"
  style={{
    fontFamily: "'Noto Nastaliq Urdu', serif",
    direction: "rtl"
  }}
>
   خواب بن کر تیری آنکھوں میں سمانا ہے ❣️
  <br />
   دوا بن کر تیرا ہر درد مٹانا ہے ❣️
  <br />
   قبول ہے مجھے زمانے بھر کی نفرت ❣️
  <br />
   پر بن کر پیار تیرا تجھ کو ہی پانا ہے ❣️
</p>

              <p className="text-lg text-gray-600">
                You taught me how to live in love,<br/>
                Every moment you gave me was filled with joy
              </p>
            </div>

            <div className="h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent animate-shimmer"></div>

            <div className="text-center space-y-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <div className="inline-block mb-4">
                <Sparkles className="text-amber-400 w-12 h-12 animate-float" />
              </div>
 <p
  className="text-2xl text-gray-800 font-semibold leading-loose text-center"
  style={{
    fontFamily: "'Noto Nastaliq Urdu', serif",
    direction: "rtl"
  }}
>
  لاڙي لھجو راڻي تنھنجو،  
  تون مٺيون ڳالھيون ڪرين  
  <br />
  مان ته اتر جو آن اترادي،  
  تو جئان ڪيئن ٿيان، پرين  
  <br /><br />
  ڪيترو حيلو ھلايان مان،  
  جو تو وانگيان ٿي وڃان  
  <br />
  ڪمتري جي احساس ۾،  
  توکي مان برتر مڃان  
  <br /><br />
  آءُ نماڻو،  
  تون آن اڏاڻي—  
  <br />
  <span className="italic text-amber-700">ڪيڏو ويڇو آ…</span>
</p>

              <p className="text-lg text-gray-600">
                With you, life is colorful,<br/>
                Without you, this heart is sorrowful
              </p>
            </div>

            <div className="h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent animate-shimmer"></div>

            <div className="text-center space-y-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <div className="inline-block mb-4">
                <Heart className="text-rose-400 w-12 h-12 animate-heartbeat" fill="currentColor" style={{ animationDelay: '0.5s' }} />
              </div>
             <p className="text-2xl text-gray-800 italic leading-relaxed font-semibold">
  I have loved you in a thousand ways,<br/>
  In silence and in speech;<br/>
  In days that felt too close to touch,<br/>
  And days beyond my reach.
</p>

              <p className="text-lg text-gray-600">
                Even the moon and stars feel shy,<br/>
                When your laughter echoes in the sky
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Love Letter Section with enhanced design */}
<section className="py-20 px-4" style={{ opacity: Math.min((scrollY - 400) / 300, 1) }}>
  <div className="max-w-3xl mx-auto">
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-rose-400 to-orange-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
      <div className="relative bg-gradient-to-br from-white/90 to-amber-50/90 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-amber-200">
        <h3 className="text-4xl md:text-5xl text-center text-gradient mb-12 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
          A Letter for You
        </h3>

        <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed">

          {/* Realistic Letter */}
          <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-amber-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            My Lovely Naila, <br/>
            Today is special, so I wanted to write you a little note. You are like a light in my life — sometimes bright, sometimes soft, but always beautiful. <br/><br/>
            You don’t always talk much, and that’s completely okay. Every moment you spend with me feels precious. Even the small things, like a smile or a simple “hi,” make my day. <br/><br/>
            I really want to see you happy today and every day. Life feels a little dull without you. On your birthday, I hope you feel loved, celebrated, and surrounded by joy. <br/><br/>
            Happy Birthday, my love! You are the most special part of my life, and I promise to always try to bring little moments of happiness for you.
          </p>

          {/* Sara Teasdale Poem */}
          <div className="glass-effect rounded-2xl p-6 border-l-4 border-rose-500 hover-3d">
            <p className="text-rose-700 italic font-semibold">
              "I cannot exist without you — <br/>
              I am forgetful of everything but seeing you again. <br/>
              My life seems to stop there — <br/>
              I see no further."
            </p>
          </div>

          {/* Urdu Glass-effect Lines */}
          <div className="glass-effect rounded-2xl p-6 border-l-4 border-amber-500 hover-3d">
            <p className="text-amber-700 italic font-semibold">
              "Apke saath guzare har lamhe ko dil ne mehfooz rakha hai. Ap mere liye sirf ek ehsaas nahi, ek haqeeqat ho."
            </p>
          </div>

          <div className="h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent my-8 animate-shimmer"></div>

          <p className="text-right text-2xl text-amber-700 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
            Forever Yours,<br/>
            <span className="text-3xl font-bold">Sattar</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Memory Section with 3D cards */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl text-center text-gradient mb-16 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Cherished Moments
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, text: "Every conversation with you feels like poetry", color: "rose" },
              { icon: Sparkles, text: "Your smile lights up my darkest days", color: "amber" },
              { icon: Heart, text: "With you, I found my forever", color: "rose" }
            ].map((item, i) => (
              <div 
                key={i}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-rose-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative glass-effect rounded-2xl p-8 shadow-lg hover-3d">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 to-rose-300/30 rounded-full blur-xl animate-pulse"></div>
                    <item.icon className={`text-${item.color}-400 w-10 h-10 mx-auto mb-4 ${item.icon === Heart ? 'animate-heartbeat' : 'animate-float'} relative z-10`} fill={item.icon === Heart ? "currentColor" : "none"} />
                  </div>
                  <p className="text-center text-gray-700 italic text-lg font-medium">
                    "{item.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Section with enhanced effects */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/_LpMB1OZ53g?autoplay=1&mute=1&loop=1&playlist=_LpMB1OZ53g&controls=0&showinfo=0&rel=0"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ 
              width: '100%', 
              height: '100%',
              border: 'none',
              pointerEvents: 'none'
            }}
            allow="autoplay; encrypted-media"
            title="Fireworks Background"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="text-center space-y-8 max-w-4xl relative z-10 animate-fadeInUp">
          <div className="text-7xl mb-8 animate-bounce">🌙</div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-glow" style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 0 30px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.6), 2px 2px 8px rgba(0,0,0,0.5)' }}>
            Happy Birthday<br/>Naila
          </h1>

          <div className="flex justify-center gap-4 my-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative">
                <div className="absolute inset-0 bg-rose-300/50 rounded-full blur-xl animate-pulse"></div>
                <Heart 
                  className="text-rose-300 w-8 h-8 animate-heartbeat drop-shadow-lg relative z-10" 
                  fill="currentColor"
                  style={{ 
                    animationDelay: `${i * 0.2}s`,
                    filter: 'drop-shadow(0 0 8px rgba(251, 207, 232, 0.8))'
                  }}
                />
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-rose-400 to-orange-400 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative text-xl md:text-2xl leading-relaxed space-y-6 bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl border-2 border-amber-200">
              <p className="text-amber-700 italic text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                "Janamdin Mubarak Ho, Meri Jaan"
              </p>
              
              <p className="text-gray-800">
                May this year bring you endless joy, countless blessings, and all the love your beautiful heart can hold. You deserve the world, and I'll spend my life trying to give it to you.
              </p>

              <div className="glass-effect rounded-2xl p-6 border-l-4 border-amber-500">
                <p className="text-amber-700 italic text-xl font-semibold">
                  "Mola apko hamesha khush rakhe, yeh meri har roz ki dua hai."
                </p>
              </div>

              <p className="text-gray-600">
                May God always keep you happy, this is my everyday prayer.
              </p>

              <div className="pt-6">
                <p className="text-2xl text-amber-700 font-semibold">
                  I love you more than words can say 💕
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-white/50">
        <p>Made with endless love by Sattar | 13th January 2026</p>
      </footer>
    </div>
  );
};

export default RomanticBirthday;