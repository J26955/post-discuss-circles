import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James K.",
    result: "+42% in 3 months",
    quote: "I was skeptical at first, but ForexBot Pro has been consistently profitable. The risk management is solid and I sleep easy knowing my trades are managed.",
    stars: 5,
  },
  {
    name: "Sarah M.",
    result: "+28% in 6 weeks",
    quote: "Setup was incredibly easy. I had it running on my VPS within 10 minutes. The support team answered all my questions quickly.",
    stars: 5,
  },
  {
    name: "David O.",
    result: "+67% in 6 months",
    quote: "Best EA I've used in 5 years of forex trading. The multi-currency support means I'm always catching opportunities across different pairs.",
    stars: 4,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted by <span className="text-primary">Traders Worldwide</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real results from real traders using ForexBot Pro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="bg-card border-border">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < t.stars ? "text-primary fill-primary" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{t.quote}"</p>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="font-semibold text-sm">{t.name}</span>
                  <span className="text-xs text-accent font-medium">{t.result}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
