import { Card } from "@/components/ui/card";
import { VoteButtons } from "./VoteButtons";
import { MessageSquare, Share, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PostData {
  id: string;
  title: string;
  content?: string;
  url?: string;
  author: string;
  subreddit: string;
  score: number;
  commentCount: number;
  timeAgo: string;
  isText: boolean;
}

interface PostCardProps {
  post: PostData;
  onClick?: () => void;
}

export const PostCard = ({ post, onClick }: PostCardProps) => {
  return (
    <Card className="overflow-hidden bg-card hover:shadow-soft transition-all duration-200 border border-border">
      <div className="flex">
        {/* Vote Section */}
        <div className="bg-secondary/50 px-2">
          <VoteButtons initialScore={post.score} />
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-4">
          {/* Subreddit and Author Info */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span className="font-medium text-accent hover:text-accent/80 cursor-pointer">
              r/{post.subreddit}
            </span>
            <span>•</span>
            <span>Posted by u/{post.author}</span>
            <span>•</span>
            <span>{post.timeAgo}</span>
          </div>
          
          {/* Title */}
          <h2 
            className="text-lg font-semibold text-foreground mb-3 cursor-pointer hover:text-primary transition-colors"
            onClick={onClick}
          >
            {post.title}
          </h2>
          
          {/* Content Preview */}
          {post.isText && post.content && (
            <p className="text-muted-foreground mb-3 line-clamp-3">
              {post.content}
            </p>
          )}
          
          {/* External Link */}
          {post.url && !post.isText && (
            <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
              <ExternalLink className="w-4 h-4" />
              <span className="truncate">{new URL(post.url).hostname}</span>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <MessageSquare className="w-4 h-4 mr-2" />
              {post.commentCount} Comments
            </Button>
            
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Award className="w-4 h-4 mr-2" />
              Award
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};