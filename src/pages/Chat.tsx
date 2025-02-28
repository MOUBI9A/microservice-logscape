
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Users, ChevronRight, Clock, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

// Mock data for chat messages
const mockMessages = [
  { id: 1, sender: 'Player123', content: 'Hey everyone! Anyone up for a game?', time: '2 min ago', avatar: '/placeholder.svg' },
  { id: 2, sender: 'PongMaster', content: 'I just beat the expert AI! So pumped!', time: '5 min ago', avatar: '/placeholder.svg' },
  { id: 3, sender: 'GameNinja', content: 'What arena are you all playing in? The neon one is my favorite.', time: '10 min ago', avatar: '/placeholder.svg' },
  { id: 4, sender: 'You', content: 'I'll be online for the next hour if anyone wants to play.', time: '12 min ago', avatar: '/placeholder.svg' },
  { id: 5, sender: 'PaddleQueen', content: 'Just reached level 10! The ice arena is super challenging.', time: '15 min ago', avatar: '/placeholder.svg' },
  { id: 6, sender: 'SpeedPong', content: 'Anyone know when the next tournament is?', time: '20 min ago', avatar: '/placeholder.svg' },
];

// Mock data for direct messages
const mockDirectMessages = [
  { id: 1, sender: 'Player123', content: 'Want to play a match?', time: '30 min ago', avatar: '/placeholder.svg', unread: 2 },
  { id: 2, sender: 'GameMaster', content: 'Great game yesterday!', time: '2 hours ago', avatar: '/placeholder.svg', unread: 0 },
  { id: 3, sender: 'PongKing', content: 'Check out my new high score!', time: '1 day ago', avatar: '/placeholder.svg', unread: 1 },
];

const Chat = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [directMessages, setDirectMessages] = useState(mockDirectMessages);
  const [newMessage, setNewMessage] = useState('');
  const [currentChat, setCurrentChat] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // If in a direct message chat
    if (currentChat) {
      const updatedDms = directMessages.map(dm => 
        dm.sender === currentChat 
          ? { ...dm, content: newMessage, time: 'Just now' } 
          : dm
      );
      setDirectMessages(updatedDms);
      setCurrentChat(null);
      toast({
        title: "Message sent",
        description: `Your message to ${currentChat} has been sent.`,
      });
    } else {
      // Add to global chat
      const newMsg = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
        time: 'Just now',
        avatar: '/placeholder.svg'
      };
      setMessages([newMsg, ...messages]);
    }
    setNewMessage('');
  };

  const handleDirectMessage = (sender: string) => {
    setCurrentChat(sender);
  };

  const cancelDirectMessage = () => {
    setCurrentChat(null);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-6"
      >
        <div className="flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold flex items-center gap-2"
          >
            <MessageCircle className="h-8 w-8 text-primary" />
            Chat
          </motion.h1>
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="global">Global Chat</TabsTrigger>
            <TabsTrigger value="direct">Direct Messages</TabsTrigger>
          </TabsList>
          
          <TabsContent value="global" className="space-y-4">
            <Card className="border-muted-foreground/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Global Chat</CardTitle>
                <CardDescription>Chat with other players in the 3D Pong community</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px] px-6">
                  <div className="space-y-4 pt-1 pb-6">
                    {messages.map((message) => (
                      <motion.div 
                        key={message.id}
                        {...fadeInUp}
                        className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex gap-3 max-w-[80%] ${message.sender === 'You' ? 'flex-row-reverse' : 'flex-row'}`}>
                          <Avatar>
                            <AvatarImage src={message.avatar} alt={message.sender} />
                            <AvatarFallback>{message.sender[0]}</AvatarFallback>
                          </Avatar>
                          <div className={`rounded-lg px-4 py-2 ${message.sender === 'You' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-sm">{message.sender}</span>
                              <span className="text-xs opacity-70">{message.time}</span>
                            </div>
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="border-t p-4">
                <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                  <Input 
                    placeholder="Type your message..." 
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="direct" className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">Direct Messages</CardTitle>
                <CardDescription>Private conversations with other players</CardDescription>
              </CardHeader>
              <CardContent>
                {currentChat ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-muted p-3 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" alt={currentChat} />
                          <AvatarFallback>{currentChat[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{currentChat}</p>
                          <p className="text-xs text-muted-foreground">Online</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={cancelDirectMessage}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                      <Input 
                        placeholder={`Message ${currentChat}...`} 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1"
                        autoFocus
                      />
                      <Button type="submit">
                        <Send className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {directMessages.map((dm) => (
                      <motion.div 
                        key={dm.id}
                        {...fadeInUp}
                        className="flex items-center justify-between p-3 bg-muted/40 rounded-lg hover:bg-muted cursor-pointer"
                        onClick={() => handleDirectMessage(dm.sender)}
                      >
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={dm.avatar} alt={dm.sender} />
                            <AvatarFallback>{dm.sender[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{dm.sender}</p>
                              {dm.unread > 0 && (
                                <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                                  {dm.unread}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-1">{dm.content}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{dm.time}</span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Online Players</CardTitle>
            <CardDescription>Players currently active in the game</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {['Player123', 'GameMaster', 'PongKing', 'PaddleQueen', 'SpeedPong', 'GameNinja'].map((player, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/40 rounded-lg">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt={player} />
                      <AvatarFallback>{player[0]}</AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                  </div>
                  <div>
                    <p className="font-medium">{player}</p>
                    <p className="text-xs text-muted-foreground">
                      {index % 3 === 0 ? 'In Game' : 'Online'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Chat;
