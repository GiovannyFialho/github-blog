import styled from "styled-components";

import { media } from "@/utils/media";

export const ProfileContainer = styled.div`
  flex: 1;

  padding: 2.5rem 2rem;
  transform: translateY(-30%);
  border-radius: 10px;
  box-shadow: 0 2px 28px #000000;
  background: ${(props) => props.theme["base-profile"]};

  @media ${media.tablet} {
    flex-direction: column;

    padding: 1rem 1.5rem;
    transform: translateY(-15%);
  }
`;

export const ProfileDetail = styled.div`
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    .backLink {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.blue};
    }

    .link {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      a {
        font-size: 0.75rem;
        line-height: 0.8rem;
        font-weight: 700;
        color: ${(props) => props.theme.blue};
        text-transform: uppercase;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .title {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};

    margin-bottom: 0.5rem;
  }

  .info-items {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media ${media.tablet} {
      flex-direction: column;
      align-items: flex-start;
    }

    &-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        font-size: 1rem;
        line-height: 1.125rem;
        font-weight: 400;
        color: ${(props) => props.theme["base-subtitle"]};
      }
    }
  }
`;
