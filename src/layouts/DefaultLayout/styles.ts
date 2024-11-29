import styled from "styled-components";

import { media } from "@/utils/media";

export const LayoutContainer = styled.div`
  padding-bottom: 12rem;
`;

export const LayoutContent = styled.div`
  max-width: 1120px;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 5rem;

  @media ${media.tablet} {
    padding: 0 1.5rem;
  }
`;
