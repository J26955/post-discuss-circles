import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Users } from "lucide-react";

const stats = [
  { icon: BarChart3, value: "50,000+", label: "Trades Executed" },
  { icon: TrendingUp, value: "87.3%", label: "Success Rate" },
  { icon: Users, value: "2,400+", label: "Active Users" },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-glow-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-3xl animate-glow-pulse" />

      <div className="container relative px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Automated Forex Trading{" "}
            <span className="text-primary">That Works</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our Expert Advisor trades 24/7 with proven strategies, built-in risk management,
            and backtested results across multiple currency pairs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 text-base">
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base">
              View Live Results
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <stat.icon className="w-6 h-6 text-primary mx-auto" />
              <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
