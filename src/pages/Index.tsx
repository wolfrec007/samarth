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
              DATA
            </span>
            <br />
            <span className="neon-text-lg animate-flicker-slow text-neon-cyan">
              ANALYST
            </span>
          </h1>
          
          <p className="font-mono text-xl md:text-2xl mb-12 text-foreground/80 animate-flicker">
            &gt; Welcome to the neon-lit world of data-driven insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NeonButton size="lg" glowing>
              View Portfolio
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
            Skill Matrix
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Data Visualization */}
            <RetroCard animated glowing className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={arcadeIcon} 
                  alt="Data Visualization" 
                  className="w-24 h-24 filter drop-shadow-[0_0_15px_rgba(0,255,0,0.6)] animate-glow-pulse"
                />
              </div>
              <h3 className="font-retro text-2xl mb-4 neon-text">
                Data Visualization
              </h3>
              <p className="font-mono text-muted-foreground">
                Transform complex datasets into stunning visual narratives using Python, Tableau, and D3.js. Creating pixel-perfect charts and dashboards that tell compelling data stories.
              </p>
            </RetroCard>
            
            {/* Statistical Analysis */}
            <RetroCard animated glowing className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={joystickIcon} 
                  alt="Statistical Analysis" 
                  className="w-24 h-24 filter drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] animate-glow-pulse"
                />
              </div>
              <h3 className="font-retro text-2xl mb-4 text-neon-cyan neon-text">
                Statistical Mastery
              </h3>
              <p className="font-mono text-muted-foreground">
                Master advanced statistical techniques, machine learning algorithms, and predictive modeling. Wielding R, Python, and SQL like classic arcade controls.
              </p>
            </RetroCard>
            
            {/* Business Intelligence */}
            <RetroCard animated glowing className="text-center">
              <div className="mb-6 flex justify-center">
                <img 
                  src={powerupIcon} 
                  alt="Business Intelligence" 
                  className="w-24 h-24 filter drop-shadow-[0_0_15px_rgba(255,165,0,0.6)] animate-glow-pulse"
                />
              </div>
              <h3 className="font-retro text-2xl mb-4 text-retro-orange neon-text">
                Business Intelligence
              </h3>
              <p className="font-mono text-muted-foreground">
                Power up business decisions with actionable insights. Specializing in KPI dashboards, performance metrics, and strategic data solutions that drive growth.
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
              Achievement Leaderboard
            </h2>
            
            <div className="space-y-4 font-mono">
              {[
                { rank: 1, name: "DATA_ACCURACY", score: "99.8%" },
                { rank: 2, name: "MODEL_PRECISION", score: "97.5%" },
                { rank: 3, name: "SQL_QUERIES", score: "10K+" },
                { rank: 4, name: "DASHBOARDS", score: "150+" },
                { rank: 5, name: "INSIGHTS_DELIVERED", score: "500+" }
              ].map((achievement) => (
                <div 
                  key={achievement.rank} 
                  className="flex justify-between items-center p-4 border border-border/50 rounded-sm hover:border-neon-green/50 transition-colors animate-flicker"
                >
                  <span className="text-neon-green">
                    #{achievement.rank}. {achievement.name}
                  </span>
                  <span className="text-neon-cyan neon-text">
                    {achievement.score}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <NeonButton variant="accent" size="lg">
                View Case Studies
              </NeonButton>
            </div>
          </RetroCard>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-retro text-4xl md:text-6xl mb-8 neon-text-xl animate-neon-pulse">
            Ready to Collaborate?
          </h2>
          <p className="font-mono text-xl mb-12 text-muted-foreground">
            Join forces with a data analyst who transforms raw information into strategic advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NeonButton size="lg" glowing>
              Download Resume
            </NeonButton>
            <Link to="/getintouch">
              <NeonButton variant="secondary" size="lg">
                Start Project
              </NeonButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;