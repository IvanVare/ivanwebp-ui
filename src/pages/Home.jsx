import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import NavBarP from "../components/NavBarP";
import Description from "../components/Description";
import CardsProject from "../components/CardsProject";
import CardDescription from "../components/CardDescription";

export default function Home() {
  const scrollR = ScrollReveal({
    distance: "150%",
    origin: "bottom",
    opacity: null,
  });

  useEffect(() => {
    scrollR.reveal(`.container-cards-group`);

    scrollR.reveal(`.container-cards-group`, {
      origin: "left",
      delay: "200",
      reset: false,
    });
  });
  return (
    <>
      <Description></Description>
      <CardDescription></CardDescription>
      <CardsProject />
    </>
  );
}
