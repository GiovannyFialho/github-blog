import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "@/layouts/DefaultLayout";

import { Blog } from "@/pages/Blog";
import { Post } from "@/pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/post/:issueNumber" element={<Post />}></Route>
      </Route>
    </Routes>
  );
}
