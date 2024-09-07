import React from "react";
import Header from "../common/Header";
import SpecialOfferCard from "../cards/SpecialOfferCard";
import { motion } from "framer-motion";
import customVariants from "@/lib/animation";

function SpecialOfferSection() {
  const data = [
    {
      imageUrl: "/images/so_1.jpg",
      location: "Lisboa, Portugal",
      description:
        "5 noites e 4 dias em um hotel 5 estrelas, café da manhã e almoço incluídos. Muito popular durante o renascimento. Passagem e visita às cidades do mundo na literatura clássica.",
      amount: "5000",
    },
    {
      imageUrl: "/images/so_2.jpg",
      location: "Atenas, Grécia",
      description:
        "5 noites e 4 dias em um hotel 5 estrelas, café da manhã e almoço incluídos. Muito popular durante o renascimento. Passagem e visita às cidades do mundo na literatura clássica.",
      amount: "8000",
    },
    {
      imageUrl: "/images/so_3.jpg",
      location: "Roma, Itália",
      description:
        "5 noites e 4 dias em um hotel 5 estrelas, café da manhã e almoço incluídos. Muito popular durante o renascimento. Passagem e visita às cidades do mundo na literatura clássica.",
      amount: "7500",
    },
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse gap-4 justify-between items-end">
        <div>
          <Header
            title="Oferta Especial"
            description="Confira nossa oferta especial e descontos"
          />
        </div>
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
      <motion.div
        variants={customVariants.cardWrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex justify-between flex-col lg:flex-row gap-4 mt-16 md:mt-[100px]"
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={customVariants.cardItem}>
            <SpecialOfferCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SpecialOfferSection;
