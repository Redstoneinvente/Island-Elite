import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User as UserIcon, ArrowRight } from 'lucide-react';
import { useAuth } from '../AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  
  const { login, signup } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, name);
        setIsLogin(true);
        setError('Account created. Please login.');
      }
      if (isLogin) onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-card relative w-full max-w-md overflow-hidden rounded-sm p-8 md:p-12"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-alabaster/40 hover:text-gold transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-8 text-center">
              <h2 className="font-serif text-3xl text-alabaster mb-2">
                {isLogin ? 'Welcome Back' : 'Join Coco Moris'}
              </h2>
              <p className="text-xs tracking-widest uppercase text-gold">
                {isLogin ? 'Access your private dashboard' : 'Begin your luxury journey'}
              </p>
            </div>

            {error && (
              <div className="mb-6 bg-red-500/10 border border-red-500/20 p-4 text-xs text-red-500 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {!isLogin && (
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-medium tracking-widest uppercase text-gold flex items-center gap-2">
                    <UserIcon size={12} /> Full Name
                  </label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-minimal w-full"
                    placeholder="John Doe"
                    required={!isLogin}
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-widest uppercase text-gold flex items-center gap-2">
                  <Mail size={12} /> Email Address
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-minimal w-full"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-medium tracking-widest uppercase text-gold flex items-center gap-2">
                  <Lock size={12} /> Password
                </label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-minimal w-full"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="btn-premium mt-4 flex items-center justify-center gap-2"
              >
                {loading ? 'Processing...' : isLogin ? 'Login' : 'Create Account'}
                {!loading && <ArrowRight size={14} />}
              </button>
            </form>

            <div className="mt-8 text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-[10px] font-medium tracking-widest uppercase text-alabaster/40 hover:text-gold transition-colors"
              >
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
              </button>
            </div>

            {/* Social Login Mock */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-[10px] text-center uppercase tracking-widest text-alabaster/20 mb-4">Or continue with</p>
              <div className="flex justify-center gap-4">
                <button className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <img src="https://www.google.com/favicon.ico" className="w-4 h-4 grayscale opacity-50" alt="Google" />
                </button>
                <button className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <img src="https://www.apple.com/favicon.ico" className="w-4 h-4 grayscale opacity-50" alt="Apple" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
