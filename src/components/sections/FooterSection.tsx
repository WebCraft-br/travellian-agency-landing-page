import React from "react";

function FooterSection() {
  const menus = ["Início", "Explorar", "Viajar", "Blog", "Preços"];
  const informations = [
    "Destinos",
    "Suporte",
    "Termos & Condições",
    "Privacidade",
  ];

  const contacts = [
    "+123 456 789",
    "info@travellian.com",
    "1245, Nova York, EUA",
  ];

  const socials = [
    "/images/facebook.png",
    "/images/pinterest.png",
    "/images/instagram.png",
    "/images/twitter.png",
  ];
  
  return (
    <section className="bg-[#172432] text-white pb-[140px] px-4 xl:px-[182px] flex flex-col gap-8 md:flex-row justify-between pt-[240px]">
      <div>
        <div>
          <img src="/images/footer_logo.png" alt="logo do rodapé" />
        </div>
        <p>Copyright © Travellian 2020 Todos os direitos reservados</p>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Menu</p>
        <div className="flex flex-col gap-3">
          {menus.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Informações</p>
        <div className="flex flex-col gap-3">
          {informations.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Informações de Contato</p>
        <div className="flex flex-col gap-3">
          {contacts.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-medium text-[24px] mb-2">Siga-nos em</p>
        <div className="flex gap-3 items-center">
          {socials.map((item, index) => (
            <div key={index}>
              <img src={item} alt="ícone de rede social" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
