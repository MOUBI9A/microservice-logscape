
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gamepad, Trophy, Users, ChevronRight, Zap, Play } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const recentMatches = [
    { id: 1, opponent: "Player123", result: "Win", score: "5-3", date: "Today" },
    { id: 2, opponent: "GameMaster", result: "Loss", score: "2-5", date: "Yesterday" },
    { id: 3, opponent: "PongKing", result: "Win", score: "5-0", date: "3 days ago" },
  ];

  const friendsOnline = [
    { id: 1, username: "Player123", status: "In Game" },
    { id: 2, username: "GameMaster", status: "Online" },
    { id: 3, username: "PongKing", status: "Online" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold"
        >
          Dashboard
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button size="lg" className="bg-primary">
            <Play className="mr-2 h-4 w-4" />
            Quick Play
          </Button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Your Rank</CardTitle>
              <CardDescription>Global position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-4">
                <Trophy className="h-12 w-12 text-yellow-500 mr-4" />
                <div>
                  <div className="text-4xl font-bold">#42</div>
                  <div className="text-muted-foreground">Top 5%</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/leaderboard" className="w-full">
                <Button variant="outline" className="w-full">
                  View Leaderboard
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Game Stats</CardTitle>
              <CardDescription>Your performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">24</div>
                  <div className="text-muted-foreground">Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">12</div>
                  <div className="text-muted-foreground">Losses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">67%</div>
                  <div className="text-muted-foreground">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">36</div>
                  <div className="text-muted-foreground">Matches</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/profile" className="w-full">
                <Button variant="outline" className="w-full">
                  View Profile
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Game Modes</CardTitle>
              <CardDescription>Select your challenge</CardDescription>
            </CardHeader>
            <CardContent className="py-4">
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center">
                    <Zap className="mr-2 h-4 w-4" />
                    Classic Mode
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center">
                    <Gamepad className="mr-2 h-4 w-4" />
                    Tournament
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    Practice
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/game" className="w-full">
                <Button variant="default" className="w-full">
                  Create Custom Game
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Recent Matches</CardTitle>
              <CardDescription>Your latest games</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMatches.map(match => (
                  <div key={match.id} className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                    <div>
                      <div className="font-medium">vs {match.opponent}</div>
                      <div className="text-sm text-muted-foreground">{match.date}</div>
                    </div>
                    <div className="flex items-center">
                      <div className={`font-semibold ${match.result === 'Win' ? 'text-green-500' : 'text-red-500'}`}>
                        {match.score} • {match.result}
                      </div>
                      <ChevronRight className="ml-2 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Matches</Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle>Friends Online</CardTitle>
              <CardDescription>Challenge a friend</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {friendsOnline.map(friend => (
                  <div key={friend.id} className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <div className="font-medium">{friend.username}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-sm text-muted-foreground mr-2">{friend.status}</div>
                      <Button size="sm" variant="outline">
                        Invite
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Find Friends</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
