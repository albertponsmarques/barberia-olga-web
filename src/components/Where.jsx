import React from "react";
import Header from "./Header";
import Mapa from "../resources/mapaV2.png";

export default function Where() {
  return (
    <div>
      <Header />
      <div className="relative bg-black overflow-hidden">
        <article>
          <h1 className="text-white text-center text-4xl antialiased font-semibold">
            Dónde estamos?
          </h1>
          <div className="md:inline-flex my-10 shadow rounded w-full  justify-center">
            <a href="https://goo.gl/maps/pECVWG7tntWgZ5iKA" target="_blank">
              <img
                alt="mapa"
                className="object-none object-center h-106 "
                src={Mapa}
              />
            </a>
          </div>
          <div className="md:mt-10">
            <h2 className="text-white mb-32 text-center text-xl antialiased md:underline">
              Carrer de Sant Isidre, 46
            </h2>
          </div>
        </article>
      </div>
    </div>
  );
}
