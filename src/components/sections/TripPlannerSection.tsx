import React from "react";
import Header from "../common/Header";
import MainButton from "../common/MainButton";
import TripPlannerCard from "../cards/TripPlannerCard";

function TripPlannerSection() {
  const data = [
    {
      imageUrl: "/images/tp_1.jpg",
      title: "Tour Guiado",
      description: "Tour pela Cidade de Paris",
      amount: "99",
      duration: "7 Dias de tour",
    },
    {
      imageUrl: "/images/tp_2.jpg",
      title: "Tour Guiado II",
      description: "Tour pela Cidade de Paris",
      amount: "99",
      duration: "7 Dias de tour",
    },
    {
      imageUrl: "/images/tp_3.jpg",
      title: "Tour Guiado III",
      description: "Tour pela Cidade de Paris",
      amount: "99",
      duration: "7 Dias de tour",
    },
    {
      imageUrl: "/images/tp_4.jpg",
      title: "Tour Guiado IV",
      description: "Tour pela Cidade de Paris",
      amount: "99",
      duration: "7 Dias de tour",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-between items-center">
      <div>
        <Header
          title="Planejadores de Viagem"
          description="Daqui a 20 anos você estará mais desapontado com as coisas que não fez. Pare de se arrepender e comece a viajar, comece a se soltar."
        />
        <div className="relative inline-block z-10 mt-[35px]">
          <MainButton text="Ver todos os planos de viagem" classes="w-[180px]" />
          <div className="absolute -top-4 -left-4 w-[43px] h-[43px] bg-[#172432] -z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-[43px] h-[43px] bg-[#767E86] -z-10"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-16 md:mt-[100px]">
        {data.map((item, index) => (
          <TripPlannerCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default TripPlannerSection;
