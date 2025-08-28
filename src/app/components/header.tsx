import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  BookOpen, 
  FileText, 
  BarChart3, 
  User, 
  Settings, 
  UserCircle 
} from 'lucide-react';

interface HeaderProps {
  className?: string;
  Name?: string | null;
}

export default function Header({ className, Name }: HeaderProps) {
  return (
    <header className={`bg-slate-900 border-b border-slate-800 px-6 py-3 ${className}`}>
      <div className="flex items-center justify-between">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-white">
              Echoes
            </span>
          </Link>
        </div>
        <div>
          {/* Navigation Items */}
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <FileText className="w-4 h-4 mr-2" />
              Journal
            </Button>
            
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <BarChart3 className="w-4 h-4 mr-2" />
              Insights
            </Button>
            
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
            
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </nav>
        </div>

        {/* Right side - User Avatar */}
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800 p-2">
            <UserCircle className="w-6 h-6" />
            <h1 >{`${Name}`}</h1>
          </Button>
        </div>
      </div>
    </header>
  );
}

// Alternative version with more exact styling to match the image
export function HeaderExact({ className }: HeaderProps) {
  return (
    <header className={`bg-slate-900 border-b border-slate-700/50 px-4 py-2.5 ${className}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 p-1.5 rounded-md">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-medium text-white">
            Echoes
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="flex items-center space-x-6">
          <Link href="/journal" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Journal</span>
          </Link>
          
          <Link href="/insights" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-medium">Insights</span>
          </Link>
          
          <Link href="/profile" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">Profile</span>
          </Link>
          
          <Link href="/settings" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>

        {/* User Avatar */}
        <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
          <UserCircle className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}