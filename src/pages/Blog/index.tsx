import { Profile } from "@/components/Profile";

import { PostCard } from "@/pages/Blog/components/PostCard";
import { SearchForm } from "@/pages/Blog/components/SearchForm";

export function Blog() {
  return (
    <div>
      <Profile />
      <SearchForm />

      <PostCard />
    </div>
  );
}
