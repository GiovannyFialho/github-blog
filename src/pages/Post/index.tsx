import { useContext } from "react";
import { useParams } from "react-router-dom";

import { GitHubContext } from "@/context/GitHubContext";

import { PostBody } from "@/pages/Post/components/PostBody";
import { PostHeader } from "@/pages/Post/components/PostHeader";

export function Post() {
  const { issueNumber } = useParams();
  const { fetchGetIssue } = useContext(GitHubContext);

  if (issueNumber) {
    fetchGetIssue(Number(issueNumber));
  }

  return (
    <div>
      <PostHeader />
      <PostBody />
    </div>
  );
}
