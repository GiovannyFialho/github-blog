import styled from "styled-components";

import headerBG from "@/assets/images/background-header.svg";

export const ContainerHeader = styled.header`
  flex: 1;
  height: 18.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${headerBG}) no-repeat center;
`;
