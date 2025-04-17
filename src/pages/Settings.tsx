import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, User, Gamepad, Palette, ArrowLeft, CheckCircle2, Volume2, Monitor } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Settings = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  // Mock data for settings
  const categories = [
    { id: 'account', name: 'Account', icon: <User className="h-5 w-5" /> },
    { id: 'gameplay', name: 'Gameplay', icon: <Gamepad className="h-5 w-5" /> },
    { id: 'appearance', name: 'Appearance', icon: <Palette className="h-5 w-5" /> },
    { id: 'notifications', name: 'Notifications', icon: <Bell className="h-5 w-5" /> },
    { id: 'privacy', name: 'Privacy & Security', icon: <Shield className="h-5 w-5" /> },
  ];

  const [activeCategory, setActiveCategory] = React.useState('account');

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-between items-center mb-8"
      >
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>
        <Button>
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Settings Categories */}
        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.1 }}
          className="w-full md:w-1/4"
        >
          <Card>
            <CardContent className="p-4">
              <div className="space-y-1">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.icon}
                    <span className="ml-2">{category.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Settings Content */}
        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.2 }}
          className="w-full md:w-3/4 space-y-6"
        >
          {/* Account Settings */}
          {activeCategory === 'account' && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Username</label>
                      <Input defaultValue="PlayerOne" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input defaultValue="player@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Biography</label>
                    <textarea
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none min-h-[100px]"
                      placeholder="Tell us about yourself..."
                      defaultValue="3D Pong enthusiast from San Francisco. Been playing since 2023."
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Update your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Current Password</label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">New Password</label>
                    <Input type="password" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Confirm New Password</label>
                    <Input type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update Password</Button>
                </CardFooter>
              </Card>
            </>
          )}

          {/* Gameplay Settings */}
          {activeCategory === 'gameplay' && (
            <Card>
              <CardHeader>
                <CardTitle>Gameplay Settings</CardTitle>
                <CardDescription>Configure your game experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Game Controls</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Paddle Up</label>
                      <Input defaultValue="W" className="uppercase text-center font-mono" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Paddle Down</label>
                      <Input defaultValue="S" className="uppercase text-center font-mono" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Paddle Left</label>
                      <Input defaultValue="A" className="uppercase text-center font-mono" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Paddle Right</label>
                      <Input defaultValue="D" className="uppercase text-center font-mono" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Game Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Game Difficulty</div>
                        <div className="text-sm text-muted-foreground">Set the AI opponent difficulty</div>
                      </div>
                      <select className="bg-background border rounded-md p-2">
                        <option>Easy</option>
                        <option>Medium</option>
                        <option selected>Hard</option>
                        <option>Expert</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Game Speed</div>
                        <div className="text-sm text-muted-foreground">Adjust the game pace</div>
                      </div>
                      <select className="bg-background border rounded-md p-2">
                        <option>Slow</option>
                        <option selected>Normal</option>
                        <option>Fast</option>
                        <option>Insane</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Paddle Size</div>
                        <div className="text-sm text-muted-foreground">Change your paddle size</div>
                      </div>
                      <select className="bg-background border rounded-md p-2">
                        <option>Small</option>
                        <option selected>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Show FPS Counter</div>
                        <div className="text-sm text-muted-foreground">Display frames per second</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Audio</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Volume2 className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="font-medium">Master Volume</div>
                        <input type="range" className="w-full accent-primary" defaultValue="80" />
                      </div>
                      <span className="text-sm">80%</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Volume2 className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="font-medium">Sound Effects</div>
                        <input type="range" className="w-full accent-primary" defaultValue="90" />
                      </div>
                      <span className="text-sm">90%</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <Volume2 className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="font-medium">Music</div>
                        <input type="range" className="w-full accent-primary" defaultValue="60" />
                      </div>
                      <span className="text-sm">60%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Appearance Settings */}
          {activeCategory === 'appearance' && (
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize how the game looks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Theme</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 flex flex-col items-center space-y-2 cursor-pointer bg-background hover:bg-muted/50 transition border-primary">
                      <div className="w-full h-20 rounded-md bg-white"></div>
                      <span className="font-medium">Light</span>
                    </div>
                    <div className="border rounded-lg p-4 flex flex-col items-center space-y-2 cursor-pointer hover:bg-muted/50 transition">
                      <div className="w-full h-20 rounded-md bg-gray-900"></div>
                      <span className="font-medium">Dark</span>
                    </div>
                    <div className="border rounded-lg p-4 flex flex-col items-center space-y-2 cursor-pointer hover:bg-muted/50 transition">
                      <div className="w-full h-20 rounded-md bg-gradient-to-r from-white to-gray-900"></div>
                      <span className="font-medium">System</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Interface</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Animations</div>
                        <div className="text-sm text-muted-foreground">Toggle UI animations</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Compact Mode</div>
                        <div className="text-sm text-muted-foreground">Use a more compact UI</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Graphics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Quality Preset</div>
                        <div className="text-sm text-muted-foreground">Set the graphics quality</div>
                      </div>
                      <select className="bg-background border rounded-md p-2">
                        <option>Low</option>
                        <option>Medium</option>
                        <option selected>High</option>
                        <option>Ultra</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Resolution</div>
                        <div className="text-sm text-muted-foreground">Game resolution</div>
                      </div>
                      <select className="bg-background border rounded-md p-2">
                        <option>1280x720</option>
                        <option selected>1920x1080</option>
                        <option>2560x1440</option>
                        <option>3840x2160</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-4">
                      <Monitor className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="font-medium">Brightness</div>
                        <input type="range" className="w-full accent-primary" defaultValue="75" />
                      </div>
                      <span className="text-sm">75%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Notifications Settings */}
          {activeCategory === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage your notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Game Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Game Invites</div>
                        <div className="text-sm text-muted-foreground">Receive game invitations</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Match Results</div>
                        <div className="text-sm text-muted-foreground">Receive match result notifications</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Tournament Updates</div>
                        <div className="text-sm text-muted-foreground">Receive tournament notifications</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Social Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Friend Requests</div>
                        <div className="text-sm text-muted-foreground">Receive friend request notifications</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Messages</div>
                        <div className="text-sm text-muted-foreground">Receive message notifications</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Friend Activity</div>
                        <div className="text-sm text-muted-foreground">Updates about your friends</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Weekly Summary</div>
                        <div className="text-sm text-muted-foreground">Receive weekly activity summary</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Promotional Emails</div>
                        <div className="text-sm text-muted-foreground">Receive promotional content</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Notification Settings</Button>
              </CardFooter>
            </Card>
          )}

          {/* Privacy & Security Settings */}
          {activeCategory === 'privacy' && (
            <Card>
              <CardHeader>
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Manage your privacy and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Privacy</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Profile Visibility</div>
                        <div className="text-sm text-muted-foreground">Who can see your profile</div>
                      </div>
                      <select className="bg-background border rounded-md p-2">
                        <option>Everyone</option>
                        <option selected>Friends Only</option>
                        <option>Private</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Online Status</div>
                        <div className="text-sm text-muted-foreground">Show when you're online</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Game History</div>
                        <div className="text-sm text-muted-foreground">Show your game history</div>
                      </div>
                      <select className="bg-background border rounded-md p-2">
                        <option>Everyone</option>
                        <option selected>Friends Only</option>
                        <option>Private</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Account Security</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Two-Factor Authentication</div>
                        <div className="text-sm text-muted-foreground">Add an extra layer of security</div>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Session Management</div>
                        <div className="text-sm text-muted-foreground">Manage active sessions</div>
                      </div>
                      <Button variant="outline">View Sessions</Button>
                    </div>

                    <div className="rounded-lg border p-4 bg-muted/40">
                      <div className="font-medium mb-2">Password Security Tips</div>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Use a unique password</li>
                        <li>Include numbers, symbols, and uppercase letters</li>
                        <li>Make it at least 12 characters long</li>
                        <li>Change your password regularly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Data & Privacy</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Data Collection</div>
                        <div className="text-sm text-muted-foreground">Allow anonymous gameplay data collection</div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="rounded-lg border p-4 bg-muted/40 space-y-2">
                      <Button variant="outline" className="w-full">Download My Data</Button>
                      <Button variant="outline" className="w-full text-destructive hover:text-destructive">Delete Account</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
