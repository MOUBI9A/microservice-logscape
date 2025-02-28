
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Search, Filter, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Leaderboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState('global');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  // Mock data
  const players = [
    { id: 1, rank: 1, username: "PongLegend", score: 1850, wins: 145, losses: 23, winRate: "86%" },
    { id: 2, rank: 2, username: "MasterPaddle", score: 1720, wins: 120, losses: 30, winRate: "80%" },
    { id: 3, rank: 3, username: "GameWizard", score: 1680, wins: 110, losses: 40, winRate: "73%" },
    { id: 4, rank: 4, username: "BallMaster", score: 1650, wins: 105, losses: 45, winRate: "70%" },
    { id: 5, rank: 5, username: "ProPong", score: 1620, wins: 100, losses: 40, winRate: "71%" },
    { id: 6, rank: 6, username: "PongKing", score: 1590, wins: 95, losses: 35, winRate: "73%" },
    { id: 7, rank: 7, username: "TableTennis", score: 1560, wins: 90, losses: 40, winRate: "69%" },
    { id: 8, rank: 8, username: "TopSpin", score: 1530, wins: 85, losses: 45, winRate: "65%" },
    { id: 9, rank: 9, username: "PaddlePro", score: 1500, wins: 80, losses: 40, winRate: "67%" },
    { id: 10, rank: 10, username: "RallyChamp", score: 1470, wins: 75, losses: 35, winRate: "68%" },
    { id: 42, rank: 42, username: "PlayerOne", score: 1250, wins: 24, losses: 12, winRate: "67%" },
  ];

  const filteredPlayers = searchQuery 
    ? players.filter(player => 
        player.username.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : players;

  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return "text-yellow-500";
      case 2: return "text-gray-400";
      case 3: return "text-amber-600";
      default: return "text-foreground";
    }
  };

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1: return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Medal className="h-5 w-5 text-amber-600" />;
      default: return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
            <p className="text-muted-foreground">See how you rank against other players</p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant={currentTab === 'global' ? 'default' : 'outline'} 
              onClick={() => setCurrentTab('global')}
            >
              Global
            </Button>
            <Button 
              variant={currentTab === 'friends' ? 'default' : 'outline'} 
              onClick={() => setCurrentTab('friends')}
            >
              Friends
            </Button>
            <Button 
              variant={currentTab === 'weekly' ? 'default' : 'outline'} 
              onClick={() => setCurrentTab('weekly')}
            >
              Weekly
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="w-full md:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Top 3 Players */}
        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {players.slice(1, 2).map(player => (
            <Card key={player.id} className="border-gray-400">
              <CardHeader className="pb-2 text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800">
                    <Medal className="h-8 w-8 text-gray-400" />
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-400">2nd Place</CardTitle>
                <CardDescription className="text-lg font-medium">{player.username}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold">{player.score}</div>
                <div className="text-sm text-muted-foreground">ELO Rating</div>
                <div className="mt-2 flex justify-center gap-4 text-sm">
                  <div>
                    <span className="font-medium text-green-500">{player.wins}</span> W
                  </div>
                  <div>
                    <span className="font-medium text-red-500">{player.losses}</span> L
                  </div>
                  <div>
                    <span className="font-medium">{player.winRate}</span> Rate
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {players.slice(0, 1).map(player => (
            <Card key={player.id} className="border-yellow-500 md:transform md:-translate-y-4">
              <CardHeader className="pb-2 text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-4 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                    <Trophy className="h-10 w-10 text-yellow-500" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-yellow-500">1st Place</CardTitle>
                <CardDescription className="text-xl font-medium">{player.username}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold">{player.score}</div>
                <div className="text-sm text-muted-foreground">ELO Rating</div>
                <div className="mt-2 flex justify-center gap-4 text-sm">
                  <div>
                    <span className="font-medium text-green-500">{player.wins}</span> W
                  </div>
                  <div>
                    <span className="font-medium text-red-500">{player.losses}</span> L
                  </div>
                  <div>
                    <span className="font-medium">{player.winRate}</span> Rate
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {players.slice(2, 3).map(player => (
            <Card key={player.id} className="border-amber-600">
              <CardHeader className="pb-2 text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-4 rounded-full bg-amber-100 dark:bg-amber-900/30">
                    <Medal className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
                <CardTitle className="text-xl text-amber-600">3rd Place</CardTitle>
                <CardDescription className="text-lg font-medium">{player.username}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold">{player.score}</div>
                <div className="text-sm text-muted-foreground">ELO Rating</div>
                <div className="mt-2 flex justify-center gap-4 text-sm">
                  <div>
                    <span className="font-medium text-green-500">{player.wins}</span> W
                  </div>
                  <div>
                    <span className="font-medium text-red-500">{player.losses}</span> L
                  </div>
                  <div>
                    <span className="font-medium">{player.winRate}</span> Rate
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Full Leaderboard */}
        <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle>Rankings</CardTitle>
              <CardDescription>
                Showing {filteredPlayers.length} players
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Rank</th>
                      <th className="text-left py-3 px-4">Player</th>
                      <th className="text-right py-3 px-4">ELO</th>
                      <th className="text-right py-3 px-4 hidden md:table-cell">W/L</th>
                      <th className="text-right py-3 px-4 hidden md:table-cell">Win Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPlayers.map(player => {
                      const isCurrentUser = player.username === "PlayerOne";
                      return (
                        <tr 
                          key={player.id} 
                          className={`border-b hover:bg-muted/50 ${isCurrentUser ? 'bg-primary/10' : ''}`}
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className={`font-bold ${getRankColor(player.rank)}`}>
                                #{player.rank}
                              </span>
                              {getRankIcon(player.rank)}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                <User className="h-4 w-4" />
                              </div>
                              <span className={`font-medium ${isCurrentUser ? 'text-primary' : ''}`}>
                                {player.username} {isCurrentUser && "(You)"}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right font-bold">{player.score}</td>
                          <td className="py-3 px-4 text-right hidden md:table-cell">
                            <span className="text-green-500">{player.wins}</span>
                            <span className="mx-1">/</span>
                            <span className="text-red-500">{player.losses}</span>
                          </td>
                          <td className="py-3 px-4 text-right hidden md:table-cell">{player.winRate}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Leaderboard;
