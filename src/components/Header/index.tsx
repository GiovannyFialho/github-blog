import { ContainerHeader } from "@/components/Header/styles";

import Logo from "@/assets/images/LogoFull.svg";

export function Header() {
  return (
    <ContainerHeader>
      <img src={Logo} alt="" />
    </ContainerHeader>
  );
}
