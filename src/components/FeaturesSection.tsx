import { Bot, Shield, Globe, FlaskConical, Clock, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: Bot, title: "Automated Trading", description: "Fully automated entries and exits based on proven algorithmic strategies." },
  { icon: Shield, title: "Stop Loss & Take Profit", description: "Built-in risk management with configurable SL/TP for every trade." },
  { icon: Globe, title: "Multi-Currency Support", description: "Trade EUR/USD, GBP/USD, USD/JPY and 15+ other major pairs." },
  { icon: FlaskConical, title: "Backtested Results", description: "Verified performance across 10+ years of historical market data." },
  { icon: Clock, title: "24/7 Trading", description: "Never miss an opportunity — the EA trades around the clock on your VPS." },
  { icon: Settings, title: "Easy Setup", description: "Install in under 5 minutes on MT4 or MT5 with our step-by-step guide." },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything You Need to <span className="text-primary">Trade Smarter</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional-grade features built into a single Expert Advisor.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <Card key={f.title} className="bg-card border-border hover:border-primary/40 transition-colors">
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
