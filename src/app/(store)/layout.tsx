import { ReactNode } from "react";

/* Components */
import { Header } from "@/components/header";

/*
 Tailwind

 mx-auto: Todo conteúdo da página é centralizado horizontalmente
 grid: Aplica display grid
 min-h-screen: Faz com que a div ocupe pelo menos toda a altura da tela, se ocupar mais gera barra de rolagem
 w-full: width 100%
 max-w-[1600px]: Em telas menores, ele não gera barra de rolagem horizontal. Em telas maiores, ele usa no máximo 1600px de largura
 grid-rows-[min-content_max-content]: primeira linha do grid terá o menor tamanho possível e a segunda linha terá o maior
 gap-5: 20px de espaçamento entre o cabeçalho e o conteúdo
*/

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 p-8">
      <Header />
      {children}
    </div>
  );
}
