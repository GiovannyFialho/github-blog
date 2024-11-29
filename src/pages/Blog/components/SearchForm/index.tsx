import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { GitHubContext } from "@/context/GitHubContext";

import {
  InputSearch,
  SearchFormContainer,
} from "@/pages/Blog/components/SearchForm/styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { issues, fetchSearchIssues } = useContext(GitHubContext);

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    fetchSearchIssues(data.query);
  }

  return (
    <SearchFormContainer>
      <div className="header">
        <h3>Publicações</h3>

        <span className="total">{issues?.total_count} publicações</span>
      </div>

      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <InputSearch
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </form>
    </SearchFormContainer>
  );
}
