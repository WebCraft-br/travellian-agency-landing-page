import React from "react";
import Header from "../common/Header";
import TestimonialCard from "../cards/TestimonialCard";

function TestimonialSection() {
  const data = [
    {
      imageUrl: "/images/t_1.png",
      review:
        "Mas eu devo explicar a você como toda essa ideia equivocada de denunciar o prazer e louvar a dor surgiu, e eu lhe darei um relato completo do sistema e exponho os reais ensinamentos do grande explorador da verdade, o mestre-construtor da felicidade humana.",
      name: "John Doe",
      position: "Contador",
    },
    {
      imageUrl: "/images/t_2.png",
      review:
        "Mas eu devo explicar a você como toda essa ideia equivocada de denunciar o prazer e louvar a dor surgiu, e eu lhe darei um relato completo do sistema e exponho os reais ensinamentos do grande explorador da verdade, o mestre-construtor da felicidade humana.",
      name: "John Smith",
      position: "Jornalista, HWO News",
    },
    {
      imageUrl: "/images/t_3.png",
      review:
        "Mas eu devo explicar a você como toda essa ideia equivocada de denunciar o prazer e louvar a dor surgiu, e eu lhe darei um relato completo do sistema e exponho os reais ensinamentos do grande explorador da verdade, o mestre-construtor da felicidade humana.",
      name: "Tamara Bellis",
      position: "Diretora Geral, JTH",
    },
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-end">
        <div>
          <Header
            title="Experiências dos Viajantes"
            description="Aqui estão alguns depoimentos incríveis de nossos viajantes"
            isLongUnderline
          />
        </div>
      </div>

      <div className="flex justify-between flex-col lg:flex-row gap-4 mt-16 md:mt-[100px]">
        {data.map((item, index) => (
          <TestimonialCard {...item} key={index} />
        ))}
      </div>

      <div className="flex justify-end mt-16 md:mt-[100px]">
        <div className="flex items-center gap-[20px]">
          <div className="hover:cursor-pointer">
            <img
              src="/images/left_icon.svg"
              className="w-[40px]"
              alt="ícone da esquerda"
            />
          </div>
          <div className="hover:cursor-pointer">
            <img
              src="/images/right_icon.svg"
              alt="ícone da direita"
              className="w-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
