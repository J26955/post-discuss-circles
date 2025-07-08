import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Clock, Award, Flame } from "lucide-react";

interface SortingTabsProps {
  onSortChange?: (sort: string) => void;
  defaultSort?: string;
}

export const SortingTabs = ({ onSortChange, defaultSort = "hot" }: SortingTabsProps) => {
  return (
    <Tabs defaultValue={defaultSort} onValueChange={onSortChange} className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-secondary">
        <TabsTrigger value="hot" className="flex items-center gap-2">
          <Flame className="w-4 h-4" />
          Hot
        </TabsTrigger>
        <TabsTrigger value="new" className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          New
        </TabsTrigger>
        <TabsTrigger value="top" className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Top
        </TabsTrigger>
        <TabsTrigger value="rising" className="flex items-center gap-2">
          <Award className="w-4 h-4" />
          Rising
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};