import React from "react";
import Header from "./Header";
import Insta from "../resources/insta.png";

export default function Appointment() {
  return (
    <div className="bg-black">
      <div className=" position-relative z-50">
        <Header />
      </div>

      <div
        className="text-white grid h-10 place-items-center position-relative z-1"
        style={{ zIndex: -1 }}
      >
        <h1 className="text-xl font-bold text-center mb-8 mt-8 md:mb-10 md:text-3xl lg:mb-10 lg:text-3xl">
          Pide cita a través de nuestro instagram!
        </h1>
        <a href="https://www.instagram.com/barberiaolga/" target="_blank">
          <img src={Insta} className="h-24" />
        </a>
        <p className="mt-4 text-xs">haz click en el icono</p>
        <h1 className="mt-24 font-bold text-3xl">O llámanos!</h1>
        <a className="mt-10 text-4xl font-bold" href="tel:+34971381930">
          ☎ 971 38 19 30
        </a>
        <p className="mt-4 text-xs">haz click para llamar</p>
      </div>
    </div>
  );
}
