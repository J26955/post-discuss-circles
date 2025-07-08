export interface PostData {
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

export const mockPosts: PostData[] = [
  {
    id: "1",
    title: "Scientists discover breakthrough in quantum computing that could revolutionize encryption",
    content: "Researchers at MIT have developed a new quantum algorithm that demonstrates unprecedented efficiency in factoring large numbers, potentially making current encryption methods obsolete. The team published their findings in Nature Physics, showing how their approach could solve problems exponentially faster than classical computers.",
    author: "quantum_researcher",
    subreddit: "science",
    score: 8947,
    commentCount: 423,
    timeAgo: "2 hours ago",
    isText: true
  },
  {
    id: "2", 
    title: "The most beautiful libraries around the world [OC]",
    url: "https://example.com/beautiful-libraries",
    author: "book_lover_42",
    subreddit: "books",
    score: 15234,
    commentCount: 287,
    timeAgo: "4 hours ago",
    isText: false
  },
  {
    id: "3",
    title: "I spent 6 months learning to code and just got my first developer job! Here's what I learned",
    content: "After being laid off from my marketing job, I decided to completely change careers and learn programming. I focused on JavaScript, React, and Node.js. The journey was tough but incredibly rewarding. Here are the key things that helped me succeed...",
    author: "new_dev_2024",
    subreddit: "programming",
    score: 12458,
    commentCount: 892,
    timeAgo: "6 hours ago",
    isText: true
  },
  {
    id: "4",
    title: "NASA releases stunning new images from James Webb Space Telescope",
    url: "https://nasa.gov/webb-telescope-images",
    author: "space_enthusiast",
    subreddit: "space",
    score: 24671,
    commentCount: 156,
    timeAgo: "8 hours ago",
    isText: false
  },
  {
    id: "5",
    title: "My grandmother's 90-year-old sourdough starter is still going strong",
    content: "This sourdough starter has been in my family for four generations. My great-grandmother started it in 1934, and it's been fed and maintained ever since. I've been making bread with it for the past 20 years, and the flavor is incredible.",
    author: "sourdough_legacy",
    subreddit: "baking",
    score: 7823,
    commentCount: 234,
    timeAgo: "10 hours ago",
    isText: true
  },
  {
    id: "6",
    title: "Climate scientists warn of accelerating ice sheet collapse in Antarctica",
    url: "https://example.com/antarctica-ice-collapse",
    author: "climate_watch",
    subreddit: "worldnews",
    score: 18943,
    commentCount: 1247,
    timeAgo: "12 hours ago",
    isText: false
  },
  {
    id: "7",
    title: "I made a neural network that can predict my cat's mood with 94% accuracy",
    content: "Using TensorFlow and a dataset of 10,000 photos of my cat Whiskers, I trained a model that can predict whether he's happy, sleepy, or plotting world domination. The results are surprisingly accurate! GitHub repo in comments.",
    author: "ai_cat_whisperer",
    subreddit: "MachineLearning",
    score: 16789,
    commentCount: 567,
    timeAgo: "14 hours ago",
    isText: true
  },
  {
    id: "8",
    title: "This 100-year-old tree house in Oregon is now available on Airbnb",
    url: "https://airbnb.com/treehouse-oregon",
    author: "travel_seeker",
    subreddit: "travel",
    score: 9876,
    commentCount: 123,
    timeAgo: "16 hours ago",
    isText: false
  }
];