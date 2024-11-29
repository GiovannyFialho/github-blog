import { PostCard } from "@/pages/Blog/components/PostCard";
import { Profile } from "@/pages/Blog/components/Profile";
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
