
import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Auth = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Game Preview Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/20 via-primary/10 to-background items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Welcome to 3D Pong
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Experience the classic game reimagined in 3D with modern multiplayer features
          </p>
          <div className="w-full max-w-md mx-auto aspect-video bg-card rounded-lg shadow-xl">
            {/* This div will later contain a game preview or demo animation */}
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/5 via-primary/10 to-background animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Auth Forms Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
