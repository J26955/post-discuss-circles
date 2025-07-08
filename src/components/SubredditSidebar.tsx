import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Star } from "lucide-react";

const trendingSubreddits = [
  { name: "technology", members: "2.1M", description: "Latest tech news and discussions" },
  { name: "worldnews", members: "31.2M", description: "Breaking news from around the world" },
  { name: "programming", members: "4.8M", description: "All things programming" },
  { name: "science", members: "28.4M", description: "Scientific discoveries and research" },
  { name: "askreddit", members: "42.1M", description: "Ask and answer thought-provoking questions" },
];

const popularTopics = [
  "Artificial Intelligence",
  "Climate Change", 
  "Space Exploration",
  "Gaming",
  "Movies & TV"
];

export const SubredditSidebar = () => {
  return (
    <div className="space-y-4">
      {/* Trending Communities */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5 text-primary" />
            Trending Communities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingSubreddits.map((subreddit) => (
            <div key={subreddit.name} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-accent">r/{subreddit.name}</span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {subreddit.description}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <Users className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{subreddit.members}</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Join
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Popular Topics */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Star className="w-5 h-5 text-accent" />
            Popular Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularTopics.map((topic) => (
              <Button 
                key={topic} 
                variant="secondary" 
                size="sm" 
                className="text-xs bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {topic}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Create Community */}
      <Card className="bg-gradient-accent text-accent-foreground">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">Create a Community</h3>
          <p className="text-sm opacity-90 mb-3">
            Build and grow a community about something you care about.
          </p>
          <Button variant="secondary" className="w-full">
            Create Community
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};