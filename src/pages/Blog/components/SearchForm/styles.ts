import styled from "styled-components";

export const SearchFormContainer = styled.div`
  flex: 1;

  margin-bottom: 3.125rem;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.75rem;

    h3 {
      font-size: 1.125rem;
      line-height: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    .total {
      font-size: 0.8rem;
      line-height: 1rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 3.12rem;

  color: ${(props) => props.theme["base-text"]};

  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme["base-border"]};
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-input"]};

  &:focus {
    border-color: ${(props) => props.theme.blue};
  }

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
