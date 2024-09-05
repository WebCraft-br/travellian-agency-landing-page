import React from "react";
import Header from "../common/Header";
import { cn, playFair } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function BlogSection() {
  return (
    <section>
      <div>
        <Header
          title="Nosso Blog"
          description="Uma visão sobre a experiência incrível no mundo"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-12 md:mt-[80px]">
        <div className="w-full">
          <img
            src="/images/blog.jpg"
            alt="imagem em destaque do blog"
            className="h-[500px] rounded-[26px] w-full object-cover"
          />
        </div>
        <div>
          <p
            className={cn(
              playFair.className,
              "leading-tight text-[30px] md:text-[54px]"
            )}
          >
            Bela Itália <br />
            Vamos viajar
          </p>
          <p className="py-4">
            Mas eu preciso explicar a você como toda essa ideia equivocada de
            denunciar o prazer e louvar a dor surgiu, e eu darei a você um
            relato completo do sistema e exporei os verdadeiros ensinamentos do
            grande explorador da verdade, o mestre-construtor da felicidade
            humana. Ninguém rejeita, desgosta ou evita o prazer em si, porque
            é prazer, mas porque aqueles que não sabem como buscar o prazer
            racionalmente encontram consequências que são extremamente
            dolorosas. Nem há alguém que ame ou busque.
          </p>

          <div className="text-primary flex items-center gap-3">
            Leia Mais
            <ArrowRight color="#FF7757" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
