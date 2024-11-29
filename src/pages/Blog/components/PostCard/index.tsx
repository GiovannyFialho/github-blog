import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { GitHubContext } from "@/context/GitHubContext";

import {
  Card,
  PostCardContainer,
} from "@/pages/Blog/components/PostCard/styles";

export function PostCard() {
  const { issues, fetchGetAllIssues } = useContext(GitHubContext);

  useEffect(() => {
    fetchGetAllIssues();
  }, [fetchGetAllIssues]);

  return (
    <PostCardContainer>
      {issues?.items?.map((issue) => {
        const correctDate = issue.updated_at
          ? issue.updated_at
          : issue.created_at;

        return (
          <Link to={`/post/${issue.number}`} key={issue.id}>
            <Card>
              <div className="head">
                <h4>{issue.title}</h4>

                <span>
                  {formatDistanceToNow(new Date(correctDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </div>

              <p>{issue.body}</p>
            </Card>
          </Link>
        );
      })}
    </PostCardContainer>
  );
}
