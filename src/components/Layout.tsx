
import React from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, LayoutDashboard, User, Trophy, 
  Settings, Gamepad, LogOut, Sun, Moon, Bell
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const Layout = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if we're on the landing page
  const isLandingPage = location.pathname === '/';
  
  // Check if we're on auth pages
  const isAuthPage = location.pathname.startsWith('/auth');
  
  // Don't show layout for landing or auth pages
  if (isLandingPage || isAuthPage) {
    return <Outlet />;
  }

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Gamepad size={20} />, label: 'Play', path: '/game' },
    { icon: <Trophy size={20} />, label: 'Leaderboard', path: '/leaderboard' },
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  const handleLogout = () => {
    // For now, just navigate to the auth page
    navigate('/auth/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="bg-background border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
            <NavLink to="/" className="font-bold text-xl flex items-center gap-2">
              <Gamepad className="h-6 w-6 text-primary" />
              <span>3D Pong</span>
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:bg-muted'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut size={20} />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu (Hidden by default) */}
      <div id="mobile-menu" className="md:hidden bg-background border-b hidden">
        <nav className="container mx-auto px-4 py-3 flex flex-col">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-2 px-3 py-3 rounded-md text-sm font-medium transition-colors
                ${isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:bg-muted'
                }`
              }
              onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 bg-muted/30">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
