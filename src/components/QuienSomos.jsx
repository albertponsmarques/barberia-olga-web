import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../resources/barber.svg";
import Imagen from "../resources/imagenhome.jpg";
import Barb1 from "../resources/barbera1.jpg";
import { AiFillHeart } from "react-icons/ai";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="relative bg-white overflow-hidden">
        <div className="mt-[-4rem]">
          <div className="bg:inline-block bg:m-20 bg:ml-40 md:inline-block md:m-20 md:ml-[12%]">
            <div>
              <img
                alt="Barberia Olga"
                className="h-106 rounded-2xl shadow-2xl"
                src={Barb1}
              />
              Olga
            </div>
          </div>
          <div className="bg:inline-block bg:m-20 bg:ml-40 md:inline-block md:ml-[8%]">
            <div>
              <img
                alt="Barberia Olga"
                className="h-106 rounded-2xl shadow-2xl"
                src={Barb1}
              />
              Marina
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
