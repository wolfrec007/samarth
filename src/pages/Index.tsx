import { Link } from "react-router-dom";
import RetroCard from "@/components/RetroCard";
import NeonButton from "@/components/NeonButton";
import heroBanner from "@/assets/hero-banner.jpg";
import joystickIcon from "@/assets/joystick-icon.png";
import arcadeIcon from "@/assets/arcade-icon.png";
import powerupIcon from "@/assets/powerup-icon.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background scanlines */}
      <div className="scanlines fixed inset-0 pointer-events-none opacity-10" />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Animated Neon Logo */}
          <h1 className="font-retro text-6xl md:text-8xl font-black mb-8">
            <span className="neon-text-xl animate-neon-pulse">
              RETRO
            </span>
            <br />
            <span className="neon-text-lg animate-flicker-slow text-neon-cyan">
              ARCADE
            </span>
          </h1>
          
          <p className="font-mono text-xl md:text-2xl mb-12 text-foreground/80 animate-flicker">
            &gt; Welcome to the neon-lit world of classic gaming
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NeonButton size="lg" glowing>
              Enter Game Zone
            </NeonButton>
            <Link to="/getintouch">
              <NeonButton variant="secondary" size="lg">
                Connect System
              </NeonButton>
            </Link>
          </div>
        </div>
        
        {/* Floating pixels decoration */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-neon-green glow-md animate-flicker" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-neon-cyan glow-md animate-flicker-slow" />
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-retro-orange glow-md animate-flicker" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-retro-purple glow-md animate-flicker-slow" />
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-retro text-4xl md:text-6xl text-center mb-16 neon-text-lg animate-glow-pulse">
            Game Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Classic Arcade Experience */}
            <RetroCard animated glowing className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={arcadeIcon} 
                  alt="Arcade Cabinet" 
                  className="w-24 h-24 filter drop-shadow-[0_0_15px_rgba(0,255,0,0.6)] animate-glow-pulse"
                />
              </div>
              <h3 className="font-retro text-2xl mb-4 neon-text">
                Classic Arcade
              </h3>
              <p className="font-mono text-muted-foreground">
                Experience the golden age of gaming with authentic 1980s arcade aesthetics and nostalgic gameplay mechanics.
              </p>
            </RetroCard>
            
            {/* Retro Controllers */}
            <RetroCard animated glowing className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={joystickIcon} 
                  alt="Retro Joystick" 
                  className="w-24 h-24 filter drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] animate-glow-pulse"
                />
              </div>
              <h3 className="font-retro text-2xl mb-4 text-neon-cyan neon-text">
                Retro Controls
              </h3>
              <p className="font-mono text-muted-foreground">
                Master the classic 8-way joystick and button combinations that defined an entire generation of gamers.
              </p>
            </RetroCard>
            
            {/* Power-ups & Bonuses */}
            <RetroCard animated glowing className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={powerupIcon} 
                  alt="Power-up Orb" 
                  className="w-24 h-24 filter drop-shadow-[0_0_15px_rgba(255,165,0,0.6)] animate-glow-pulse"
                />
              </div>
              <h3 className="font-retro text-2xl mb-4 text-retro-orange neon-text">
                Power Systems
              </h3>
              <p className="font-mono text-muted-foreground">
                Collect energy orbs and unlock special abilities to enhance your gaming experience and achieve high scores.
              </p>
            </RetroCard>
          </div>
        </div>
      </section>
      
      {/* Scoreboard Section */}
      <section className="py-20 px-6 bg-secondary/10 relative">
        <div className="max-w-4xl mx-auto">
          <RetroCard className="text-center">
            <h2 className="font-retro text-4xl md:text-5xl mb-8 neon-text-lg">
              High Score Leaderboard
            </h2>
            
            <div className="space-y-4 font-mono">
              {[
                { rank: 1, name: "NEON_MASTER", score: "999,999" },
                { rank: 2, name: "PIXEL_HERO", score: "888,888" },
                { rank: 3, name: "RETRO_KING", score: "777,777" },
                { rank: 4, name: "ARCADE_ACE", score: "666,666" },
                { rank: 5, name: "CYBER_PUNK", score: "555,555" }
              ].map((player) => (
                <div 
                  key={player.rank} 
                  className="flex justify-between items-center p-4 border border-border/50 rounded-sm hover:border-neon-green/50 transition-colors animate-flicker"
                >
                  <span className="text-neon-green">
                    #{player.rank}. {player.name}
                  </span>
                  <span className="text-neon-cyan neon-text">
                    {player.score}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <NeonButton variant="accent" size="lg">
                Challenge the Board
              </NeonButton>
            </div>
          </RetroCard>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-retro text-4xl md:text-6xl mb-8 neon-text-xl animate-neon-pulse">
            Ready to Play?
          </h2>
          <p className="font-mono text-xl mb-12 text-muted-foreground">
            Join the retro gaming revolution and experience the magic of classic arcade entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NeonButton size="lg" glowing>
              Start Game
            </NeonButton>
            <Link to="/getintouch">
              <NeonButton variant="secondary" size="lg">
                Get in Touch
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;