import { ReactNode } from "react";

/* Components */
import { Header } from "@/components/Header";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
