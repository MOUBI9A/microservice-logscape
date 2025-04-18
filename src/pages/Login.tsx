
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission will be implemented later
  };

  const handleGuestLogin = () => {
    toast({
      title: "Logged in as Guest",
      description: "You're now accessing the app with limited features.",
      variant: "default"
    });
    navigate('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md"
    >
      <Card>
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Sign in to your account to continue playing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                Sign In
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                className="flex-1" 
                onClick={handleGuestLogin}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Continue as Guest
              </Button>
            </div>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button variant="outline" className="w-full" disabled>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link 
            to="/auth/reset-password"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Forgot your password?
          </Link>
          <div className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link 
              to="/auth/signup"
              className="text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Login;
