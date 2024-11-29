import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
`;

export const Card = styled.div`
  flex: 1;

  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme["base-post"]};

  .head {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;

    margin-bottom: 1.25rem;

    h4 {
      font-size: 1.25rem;
      line-height: 1.37rem;
      font-weight: 700;
      color: ${(props) => props.theme["base-title"]};
    }

    span {
      white-space: nowrap;
      font-size: 0.87rem;
      line-height: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }
`;
