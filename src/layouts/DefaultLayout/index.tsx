import { Outlet } from "react-router-dom";

import { Header } from "@/components/Header";

import { LayoutContent } from "@/layouts/DefaultLayout/styles";

export function DefaultLayout() {
  return (
    <div>
      <Header />

      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </div>
  );
}
