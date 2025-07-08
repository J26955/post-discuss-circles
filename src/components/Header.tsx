import { Search, Plus, Bell, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <span className="text-xl font-bold text-foreground">Discussit</span>
        </div>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search communities and posts..." 
              className="pl-10 bg-secondary border-border focus:border-primary transition-colors"
            />
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Bell className="w-5 h-5" />
          </Button>
          
          <Button variant="ghost" size="sm">
            <MessageSquare className="w-5 h-5" />
          </Button>
          
          <Button className="gap-2 bg-gradient-primary hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" />
            Create Post
          </Button>
          
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center ml-2">
            <span className="text-accent-foreground font-medium text-sm">U</span>
          </div>
        </div>
      </div>
    </header>
  );
};