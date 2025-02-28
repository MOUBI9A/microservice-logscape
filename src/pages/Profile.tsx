
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Edit, Trophy, Gamepad, Clock, BarChart, Medal, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  // Mock data
  const matchHistory = [
    { id: 1, opponent: "Player123", result: "Win", score: "5-3", date: "Today" },
    { id: 2, opponent: "GameMaster", result: "Loss", score: "2-5", date: "Yesterday" },
    { id: 3, opponent: "PongKing", result: "Win", score: "5-0", date: "3 days ago" },
    { id: 4, opponent: "Pong99", result: "Win", score: "5-2", date: "5 days ago" },
    { id: 5, opponent: "MasterPaddle", result: "Loss", score: "1-5", date: "1 week ago" },
  ];

  const achievements = [
    { id: 1, name: "First Victory", description: "Win your first game", date: "2 weeks ago", icon: <Trophy className="h-5 w-5 text-yellow-500" /> },
    { id: 2, name: "Winning Streak", description: "Win 5 games in a row", date: "1 week ago", icon: <Medal className="h-5 w-5 text-blue-500" /> },
    { id: 3, name: "Early Bird", description: "Play 10 games", date: "5 days ago", icon: <Gamepad className="h-5 w-5 text-purple-500" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col md:flex-row items-start gap-8 mb-8"
      >
        {/* Profile Overview */}
        <div className="w-full md:w-1/3">
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <Card className="relative">
              <Button size="sm" variant="outline" className="absolute top-4 right-4 gap-1">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
              <CardHeader className="flex flex-col items-center pt-8 pb-4">
                <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">PlayerOne</CardTitle>
                <CardDescription className="text-center">
                  Member since <span className="font-medium">April 2023</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">#42</div>
                    <div className="text-xs text-muted-foreground">RANK</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1250</div>
                    <div className="text-xs text-muted-foreground">ELO</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">67%</div>
                    <div className="text-xs text-muted-foreground">WIN RATE</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 border-t pt-4">
                <div className="grid grid-cols-2 w-full gap-4">
                  <div className="flex flex-col items-center">
                    <div className="text-xl font-bold text-green-500">24</div>
                    <div className="text-xs text-muted-foreground">WINS</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-xl font-bold text-red-500">12</div>
                    <div className="text-xs text-muted-foreground">LOSSES</div>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>36 total games</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>48 hours played</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        {/* Stats and Achievements */}
        <div className="w-full md:w-2/3 space-y-6">
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Game Statistics
                </CardTitle>
                <CardDescription>Your performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-muted/40 p-4 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground">Avg Score</div>
                    <div className="text-2xl font-bold">4.2</div>
                  </div>
                  <div className="bg-muted/40 p-4 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground">Highest Score</div>
                    <div className="text-2xl font-bold">5</div>
                  </div>
                  <div className="bg-muted/40 p-4 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground">Avg Game Time</div>
                    <div className="text-2xl font-bold">3:24</div>
                  </div>
                  <div className="bg-muted/40 p-4 rounded-lg text-center">
                    <div className="text-sm text-muted-foreground">Win Streak</div>
                    <div className="text-2xl font-bold">3</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Achievements
                </CardTitle>
                <CardDescription>Unlocked milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map(achievement => (
                    <div key={achievement.id} className="flex items-start gap-3 p-3 bg-muted/40 rounded-lg">
                      <div className="mt-0.5">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{achievement.name}</div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{achievement.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Achievements</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Match History */}
      <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gamepad className="h-5 w-5" />
              Match History
            </CardTitle>
            <CardDescription>Your recent games</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {matchHistory.map(match => (
                <div key={match.id} className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-8 rounded-full ${match.result === 'Win' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div>
                      <div className="font-medium">vs {match.opponent}</div>
                      <div className="text-sm text-muted-foreground">{match.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className={`font-semibold ${match.result === 'Win' ? 'text-green-500' : 'text-red-500'}`}>
                      {match.score}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Load More</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default Profile;
