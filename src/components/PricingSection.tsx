import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "$50",
    description: "Perfect for getting started",
    features: ["Core EA", "1 Trading Account", "Email Support", "Basic Documentation"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$150",
    description: "Most popular for serious traders",
    features: ["Core EA", "3 Trading Accounts", "Priority Support", "Free Updates", "Advanced Settings"],
    highlighted: true,
  },
  {
    name: "VIP",
    price: "$300",
    description: "For professional traders",
    features: ["Core EA", "Unlimited Accounts", "VIP 1-on-1 Support", "Custom Settings", "Lifetime Updates", "Private Signal Group"],
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            One-time payment. No hidden fees. Also available at $30/month subscription.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col ${
                tier.highlighted
                  ? "border-primary shadow-[0_0_30px_hsl(43_96%_56%/0.15)] scale-[1.02]"
                  : "border-border"
              }`}
            >
              {tier.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <p className="text-4xl font-bold text-foreground mt-4">{tier.price}</p>
                <span className="text-sm text-muted-foreground">one-time</span>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full mt-4"
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  Get {tier.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
