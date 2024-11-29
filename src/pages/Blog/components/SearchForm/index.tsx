import {
  InputSearch,
  SearchFormContainer,
} from "@/pages/Blog/components/SearchForm/styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div className="header">
        <h3>Publicações</h3>

        <span className="total">6 publicações</span>
      </div>

      <form action="">
        <InputSearch type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  );
}
