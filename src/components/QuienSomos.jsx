import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../resources/barber.svg";
import Imagen from "../resources/imagenhome.jpg";
import Barb1 from "../resources/olga.jpg";
import Barb2 from "../resources/Marina.jpg";
import { AiFillHeart } from "react-icons/ai";
import Header from "./Header";

export default function Who() {
  return (
    <div>
      <Header />
      <div className="relative bg-black overflow-hidden">
        <div className="mt-[-4rem]">
          <div className="text-white bg:inline-block bg:m-20 bg:ml-40 md:inline-block md:m-20 md:ml-[12%]">
            <div>
              <img
                alt="Barberia Olga"
                className="h-106 rounded-2xl shadow-2xl"
                src={Barb1}
              />
              <div className="text-center">
                <a className="text-3xl">Olga</a>
              </div>
            </div>
          </div>
          <div className="text-white bg:inline-block bg:m-20 bg:ml-40 md:inline-block md:ml-[8%]">
            <div>
              <img
                alt="Barberia Olga"
                className="h-106 rounded-2xl shadow-2xl"
                src={Barb2}
              />
              <div className="text-center">
                <a className="text-3xl">Marina</a>
              </div>
            </div>
          </div>
          <div className="mt-44" />
        </div>
      </div>
    </div>
  );
}
