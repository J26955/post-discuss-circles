import { Bot } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">ForexBot Pro</span>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          </div>

          <p className="text-xs text-muted-foreground text-center md:text-right max-w-sm">
            ⚠️ Trading forex carries risk. Past performance does not guarantee future results.
          </p>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} ForexBot Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
