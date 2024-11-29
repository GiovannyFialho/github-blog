import { useContext } from "react";

import { GitHubContext } from "@/context/GitHubContext";

export function PostBody() {
  const { issue } = useContext(GitHubContext);

  return (
    <div>
      <p>{issue?.body}</p>
    </div>
  );
}
