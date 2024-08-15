import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import NavBarP from "../components/NavBarP";
import Description from "../components/Description";
import CardProject from "../components/CardProject";
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
      delay: "375",
      reset: true,
    });
  });
  return (
    <>
      <NavBarP></NavBarP>
      <Description></Description>
      <CardDescription></CardDescription>
      <CardProject />
    </>
  );
}
