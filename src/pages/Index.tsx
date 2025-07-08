import { Header } from "@/components/Header";
import { PostCard } from "@/components/PostCard";
import { SubredditSidebar } from "@/components/SubredditSidebar";
import { SortingTabs } from "@/components/SortingTabs";
import { mockPosts } from "@/data/mockPosts";
import { useState } from "react";

const Index = () => {
  const [currentSort, setCurrentSort] = useState("hot");
  const [posts] = useState(mockPosts);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4">
            {/* Sorting Tabs */}
            <SortingTabs onSortChange={setCurrentSort} defaultSort={currentSort} />
            
            {/* Posts Feed */}
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard 
                  key={post.id} 
                  post={post}
                  onClick={() => console.log(`Clicked post: ${post.title}`)}
                />
              ))}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SubredditSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
