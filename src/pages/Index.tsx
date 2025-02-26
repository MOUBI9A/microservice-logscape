
import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Trophy, Users, Zap, Gamepad, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const { theme, setTheme } = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <Gamepad className="w-8 h-8" />,
      title: "3D Pong Gameplay",
      description: "Experience smooth, immersive gameplay powered by modern web technologies"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Competitive Online Matches",
      description: "Challenge players worldwide in real-time multiplayer matches"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Server-Side Game Logic",
      description: "Enjoy optimized performance with minimal lag through server-side processing"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Player Statistics & Rankings",
      description: "Track your progress and compete for top positions on the leaderboard"
    }
  ];

  const testimonials = [
    {
      quote: "The 3D remake brings new life to the classic Pong experience!",
      author: "Alex M."
    },
    {
      quote: "Incredibly smooth gameplay. The multiplayer is addictive!",
      author: "Sarah K."
    },
    {
      quote: "Best modern interpretation of Pong I've played.",
      author: "Michael R."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      {/* Hero Section */}
      <motion.section
        initial="initial"
        animate="animate"
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-background via-secondary/20 to-background"
      >
        <motion.h1
          {...fadeInUp}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
          Experience Classic Pong Like Never Before
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl"
        >
          Step into the future of retro gaming with our 3D multiplayer Pong experience
        </motion.p>
        <motion.button
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:scale-105 transition-transform"
        >
          Start Playing
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-secondary/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Players Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-card border border-border"
              >
                <p className="text-lg mb-4 text-muted-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-semibold">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            3D Pong
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-8">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
