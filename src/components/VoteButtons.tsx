import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface VoteButtonsProps {
  initialScore: number;
  onVote?: (voteType: 'up' | 'down' | 'none') => void;
}

export const VoteButtons = ({ initialScore, onVote }: VoteButtonsProps) => {
  const [voteState, setVoteState] = useState<'up' | 'down' | 'none'>('none');
  const [score, setScore] = useState(initialScore);

  const handleVote = (type: 'up' | 'down') => {
    let newVoteState: 'up' | 'down' | 'none' = type;
    let newScore = initialScore;

    if (voteState === type) {
      // Remove vote if clicking same button
      newVoteState = 'none';
      newScore = initialScore;
    } else if (voteState === 'none') {
      // Add vote
      newScore = type === 'up' ? initialScore + 1 : initialScore - 1;
    } else {
      // Switch vote
      newScore = type === 'up' ? initialScore + 2 : initialScore - 2;
    }

    setVoteState(newVoteState);
    setScore(newScore);
    onVote?.(newVoteState);
  };

  return (
    <div className="flex flex-col items-center gap-1 py-2">
      <button
        onClick={() => handleVote('up')}
        className={cn(
          "p-1 rounded-md transition-all duration-200 hover:bg-secondary",
          voteState === 'up' 
            ? "text-upvote hover:text-upvote" 
            : "text-vote-inactive hover:text-upvote"
        )}
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      
      <span className={cn(
        "text-sm font-medium min-w-[2rem] text-center",
        voteState === 'up' && "text-upvote",
        voteState === 'down' && "text-downvote",
        voteState === 'none' && "text-muted-foreground"
      )}>
        {score > 999 ? `${(score / 1000).toFixed(1)}k` : score}
      </span>
      
      <button
        onClick={() => handleVote('down')}
        className={cn(
          "p-1 rounded-md transition-all duration-200 hover:bg-secondary",
          voteState === 'down' 
            ? "text-downvote hover:text-downvote" 
            : "text-vote-inactive hover:text-downvote"
        )}
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </div>
  );
};