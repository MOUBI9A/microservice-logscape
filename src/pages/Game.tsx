
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Info, AlignLeft, Gamepad2, Settings2, ArrowLeft, Clock, Trophy, Flag, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gamePaused, setGamePaused] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {!gameStarted ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col gap-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-3xl font-bold">Game Setup</h1>
            </div>
            <Button variant="outline">
              <Info className="mr-2 h-4 w-4" />
              Game Rules
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Game Mode</CardTitle>
                  <CardDescription>Select how you want to play</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 flex flex-col items-center space-y-2 cursor-pointer bg-primary/10 hover:bg-primary/20 transition border-primary">
                      <Gamepad2 className="h-10 w-10 text-primary mb-2" />
                      <span className="font-medium">Single Player</span>
                      <span className="text-xs text-muted-foreground text-center">Play against the computer</span>
                    </div>
                    <div className="border rounded-lg p-4 flex flex-col items-center space-y-2 cursor-pointer hover:bg-muted/50 transition">
                      <Users className="h-10 w-10 text-muted-foreground mb-2" />
                      <span className="font-medium">Multiplayer</span>
                      <span className="text-xs text-muted-foreground text-center">Play against a friend</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Game Settings</CardTitle>
                  <CardDescription>Customize your game experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Difficulty</div>
                      <div className="text-sm text-muted-foreground">Set AI opponent difficulty</div>
                    </div>
                    <select className="bg-background border rounded-md p-2">
                      <option>Easy</option>
                      <option selected>Medium</option>
                      <option>Hard</option>
                      <option>Expert</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Points to Win</div>
                      <div className="text-sm text-muted-foreground">Set the victory condition</div>
                    </div>
                    <select className="bg-background border rounded-md p-2">
                      <option>3 Points</option>
                      <option selected>5 Points</option>
                      <option>7 Points</option>
                      <option>10 Points</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Power-ups</div>
                      <div className="text-sm text-muted-foreground">Special abilities during gameplay</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Match Timer</div>
                      <div className="text-sm text-muted-foreground">Time limit for the game</div>
                    </div>
                    <select className="bg-background border rounded-md p-2">
                      <option>No Limit</option>
                      <option>3 Minutes</option>
                      <option selected>5 Minutes</option>
                      <option>10 Minutes</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Arena Selection</CardTitle>
                  <CardDescription>Choose your battlefield</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition">
                      <div className="h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                        <span className="font-bold text-lg">Classic</span>
                      </div>
                      <div className="p-3">
                        <div className="font-medium">Classic Arena</div>
                        <div className="text-xs text-muted-foreground">The original pong experience</div>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition">
                      <div className="h-32 bg-gradient-to-r from-red-500/30 to-orange-500/30 flex items-center justify-center">
                        <span className="font-bold text-lg">Lava</span>
                      </div>
                      <div className="p-3">
                        <div className="font-medium">Lava Arena</div>
                        <div className="text-xs text-muted-foreground">Hot and dangerous environment</div>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition">
                      <div className="h-32 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 flex items-center justify-center">
                        <span className="font-bold text-lg">Ice</span>
                      </div>
                      <div className="p-3">
                        <div className="font-medium">Ice Arena</div>
                        <div className="text-xs text-muted-foreground">Slippery and challenging</div>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden cursor-pointer border-primary">
                      <div className="h-32 bg-gradient-to-r from-green-500/30 to-emerald-500/30 flex items-center justify-center">
                        <span className="font-bold text-lg">Neon</span>
                      </div>
                      <div className="p-3">
                        <div className="font-medium">Neon Arena</div>
                        <div className="text-xs text-muted-foreground">Futuristic and vibrant</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Game Summary</CardTitle>
                  <CardDescription>Your game configuration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4 space-y-3 bg-muted/40">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Gamepad2 className="h-4 w-4 text-primary" />
                        <span>Mode:</span>
                      </div>
                      <span className="font-medium">Single Player</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Settings2 className="h-4 w-4 text-primary" />
                        <span>Difficulty:</span>
                      </div>
                      <span className="font-medium">Medium</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Flag className="h-4 w-4 text-primary" />
                        <span>Points to Win:</span>
                      </div>
                      <span className="font-medium">5 Points</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Time Limit:</span>
                      </div>
                      <span className="font-medium">5 Minutes</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <AlignLeft className="h-4 w-4 text-primary" />
                        <span>Arena:</span>
                      </div>
                      <span className="font-medium">Neon Arena</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full text-lg" 
                    size="lg"
                    onClick={() => setGameStarted(true)}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Start Game
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col h-[calc(100vh-8rem)]"
        >
          <div className="flex justify-between items-center mb-4">
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => setGameStarted(false)}
            >
              <ArrowLeft className="h-4 w-4" />
              Exit Game
            </Button>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => setGamePaused(!gamePaused)}
              >
                {gamePaused ? (
                  <>
                    <Play className="h-4 w-4" />
                    Resume
                  </>
                ) : (
                  <>
                    <Pause className="h-4 w-4" />
                    Pause
                  </>
                )}
              </Button>
              <Button variant="outline" className="gap-2">
                <Settings2 className="h-4 w-4" />
                Options
              </Button>
            </div>
          </div>

          {/* Game Area */}
          <Card className="flex-1 flex flex-col relative">
            {/* Score Display */}
            <div className="absolute top-4 left-0 right-0 flex justify-center">
              <div className="bg-background/80 backdrop-blur-sm px-8 py-2 rounded-full flex items-center gap-8">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">You</div>
                  <div className="text-2xl font-bold">3</div>
                </div>
                <div className="text-sm text-muted-foreground">vs</div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">AI</div>
                  <div className="text-2xl font-bold">2</div>
                </div>
              </div>
            </div>

            {/* Game Canvas */}
            <div className="flex-1 flex items-center justify-center">
              {gamePaused ? (
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold">Game Paused</h2>
                  <p className="text-muted-foreground">Press Resume to continue playing</p>
                  <Button 
                    onClick={() => setGamePaused(false)}
                    className="gap-2"
                  >
                    <Play className="h-4 w-4" />
                    Resume Game
                  </Button>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-muted/20">
                  <div className="text-center p-8 bg-primary/5 rounded-lg border border-primary/20 max-w-md">
                    <p className="mb-4">This is where the 3D Pong game would be rendered.</p>
                    <p className="text-muted-foreground text-sm mb-6">The actual game implementation would require WebGL or Three.js for the 3D rendering.</p>
                    <div className="flex justify-center">
                      <Trophy className="h-16 w-16 text-primary/50" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Game Controls */}
            <div className="p-4 border-t bg-muted/20">
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">Move paddle: WASD / Arrow Keys</div>
                <div className="text-sm text-muted-foreground">Time: 2:45</div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
};

// Add a Pause icon component for the game controls
const Pause = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

export default Game;
