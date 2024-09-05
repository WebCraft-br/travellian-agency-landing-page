import React from "react";
import Header from "../common/Header";
import PopularDestinationCard from "../cards/PopularDestinationCard";
import { motion } from "framer-motion";
import customVariants from "@/lib/animation";

function PopularDestinationSection() {
  const data = [
    {
      title: "Monumento de Berlim",
      location: "Berlim, Alemanha",
      imageUrl: "/images/pd_1.jpg",
    },
    {
      title: "Ponte do Milênio",
      location: "Londres, Reino Unido",
      imageUrl: "/images/pd_2.jpg",
    },
    {
      title: "Ponte Rialto",
      location: "Veneza, Itália",
      imageUrl: "/images/pd_3.jpg",
    },
    {
      title: "Ponte do Milênio",
      location: "Londres, Reino Unido",
      imageUrl: "/images/pd_2.jpg",
    },
  ];

  return (
    <section className="">
      <div className="flex flex-col md:flex-row justify-between items-end">
        <div>
          <Header
            title="Destinos Populares"
            description="Os destinos mais populares ao redor do mundo, desde lugares históricos até maravilhas naturais."
            isLongUnderline
          />
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="hover:cursor-pointer">
            <img
              src="/images/left_icon.svg"
              alt="ícone da esquerda"
              className="w-[40px]"
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-16 md:mt-[100px]"
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={customVariants.cardItem}>
            <PopularDestinationCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default PopularDestinationSection;
