import { useState } from "react";
import { Link } from "react-router-dom";
import RetroCard from "@/components/RetroCard";
import NeonButton from "@/components/NeonButton";
import RetroInput from "@/components/RetroInput";
import RetroTextarea from "@/components/RetroTextarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for form handling (replace with your endpoint)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Transmitted!",
          description: "Your message has been sent to the mainframe. We'll respond soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Network error");
      }
    } catch (error) {
      toast({
        title: "Transmission Failed",
        description: "Unable to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background scanlines */}
      <div className="scanlines fixed inset-0 pointer-events-none opacity-10" />
      
      {/* Back Navigation */}
      <div className="absolute top-8 left-8 z-20">
        <Link to="/">
          <NeonButton variant="secondary" size="sm">
            ← Back to Main
          </NeonButton>
        </Link>
      </div>
      
      {/* Contact Hero */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-retro text-5xl md:text-7xl font-black mb-8">
            <span className="neon-text-xl animate-neon-pulse">
              Get in Touch
            </span>
          </h1>
          <p className="font-mono text-xl text-muted-foreground animate-flicker">
            &gt; Establish connection to the data analytics network
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <RetroCard glowing animated className="p-8">
            <h2 className="font-retro text-3xl mb-8 text-center neon-text-lg">
              Data Connection Protocol
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <RetroInput
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                required
              />
              
              <RetroInput
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@domain.com"
                required
              />
              
              <RetroTextarea
                label="Project Details"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your data analysis needs..."
                required
              />
              
              <div className="text-center pt-4">
                <NeonButton
                  type="submit"
                  size="lg"
                  glowing
                  disabled={isSubmitting}
                  className={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
                >
                  {isSubmitting ? "Processing Data..." : "Send Message"}
                </NeonButton>
              </div>
            </form>
            
            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <h3 className="font-retro text-xl mb-6 text-center neon-text">
                Professional Network Access
              </h3>
              <div className="grid md:grid-cols-2 gap-6 font-mono text-sm">
                <div className="text-center">
                  <div className="text-neon-cyan mb-2">Email Terminal</div>
                  <div className="text-muted-foreground">analyst@dataportfolio.dev</div>
                </div>
                <div className="text-center">
                  <div className="text-neon-cyan mb-2">LinkedIn Network</div>
                  <div className="text-muted-foreground">/in/data-analyst-pro</div>
                </div>
              </div>
            </div>
          </RetroCard>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-32 left-16 w-4 h-4 bg-neon-green glow-md animate-flicker" />
        <div className="absolute top-64 right-20 w-6 h-6 bg-neon-cyan glow-md animate-flicker-slow" />
        <div className="absolute bottom-40 left-24 w-5 h-5 bg-retro-orange glow-md animate-flicker" />
        <div className="absolute bottom-20 right-16 w-3 h-3 bg-retro-purple glow-md animate-flicker-slow" />
      </section>
    </div>
  );
};

export default Contact;