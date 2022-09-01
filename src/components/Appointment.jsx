import React from "react";
import Header from "./Header";
import Insta from "../resources/insta.png";

export default function Appointment() {
  return (
    <div className="bg-black">
      <Header />
      <div className="text-white grid h-10 place-items-center">
        <h1 className="mb-10 text-3xl">
          Pide cita a traves de nuestro instagram!
        </h1>
        <a href="https://www.instagram.com/barberiaolga/" target="_blank">
          <img src={Insta} className="h-24" />
        </a>
        <h1 className="mt-24 text-3xl">O llamanos!</h1>
        <a className="mt-10 text-4xl font-bold" href="tel:+34971381930">
          ☎ 971 38 19 30
        </a>
      </div>
    </div>
  );
}
