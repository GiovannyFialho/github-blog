import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { api } from "@/lib/axios";

interface ItemsIssuesProps {
  id: number;
  html_url: string;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}

interface IssuesProps {
  total_count: number;
  incomplete_results: boolean;
  items: ItemsIssuesProps[];
}

type GitHubUserData = {
  name: string;
  html_url: string;
  bio: string;
  login: string;
  company?: string;
  followers?: number;
};

interface GitHubContext {
  user: GitHubUserData | null;
  issues: IssuesProps | null;
  fetchSearchIssues: (query?: string) => Promise<void>;
}

export const GitHubContext = createContext({} as GitHubContext);

interface GitHubContextProviderProps {
  children: ReactNode;
}

export function GitHubContextProvider({
  children,
}: GitHubContextProviderProps) {
  const [user, setUser] = useState<GitHubUserData | null>(null);
  const [issues, setIssues] = useState<IssuesProps | null>(null);

  const fetchGetUser = useCallback(async () => {
    const response = await api.get("users/GiovannyFialho");

    setUser(response.data);
  }, []);

  const fetchGetAllIssues = useCallback(async () => {
    const response = await api.get("search/issues", {
      params: {
        q: `repo:GiovannyFialho/github-blog`,
      },
    });

    setIssues(response.data);
  }, []);

  const fetchSearchIssues = useCallback(async (query?: string) => {
    const response = await api.get("search/issues", {
      params: {
        q: `repo:GiovannyFialho/github-blog ${query}`,
      },
    });

    setIssues(response.data);
  }, []);

  useEffect(() => {
    fetchGetUser();
    fetchGetAllIssues();
  }, [fetchGetUser, fetchGetAllIssues]);

  return (
    <GitHubContext.Provider value={{ issues, user, fetchSearchIssues }}>
      {children}
    </GitHubContext.Provider>
  );
}
