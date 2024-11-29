import * as z from "zod";

import {
  InputSearch,
  SearchFormContainer,
} from "@/pages/Blog/components/SearchForm/styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchPosts(data: SearchFormInput) {
    console.log({ data });
  }

  return (
    <SearchFormContainer>
      <div className="header">
        <h3>Publicações</h3>

        <span className="total">6 publicações</span>
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
