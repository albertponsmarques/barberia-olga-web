import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../resources/logotest.jpg";
import Imagen from "../resources/barb.jpeg";
import Lgbt from "../resources/lgbt.png";
import Wheel from "../resources/wheelchair.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

//https://github.com/simonneutert/google-maps-reviews

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Quienes somos", href: "/quienessomos" },
  { name: "Dónde estamos", href: "/dondeestamos" },
];

export default function Home() {
  return (
    <div className="bg-black">
      <div className="relative bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-black transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Popover>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Barberia Olga</span>
                        <img
                          alt="Barberia Olga"
                          className="h-8 w-auto sm:h-10"
                          src={Logo}
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only text-white">
                            Open main menu
                          </span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium mx-7 text-gray-200 hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    ))}
                    <a
                      href="/cita"
                      className="text-lg font-extrabold text-brb-red hover:text-brb-blue hover:animate-pulse"
                    >
                      Pedir cita
                    </a>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-black ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src={Logo}
                          alt="Barberia Olga"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only text-white">
                            Close main menu
                          </span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gray-400 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left mb-10">
                <h1 className="text-5xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
                  <span className="inline-block text-white xl:inline">
                    Barberia
                  </span>{" "}
                  <span className="inline text-white xl:inline">Olga</span>
                </h1>
                <p className="mt-8 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Una peluquería o barbería es un local donde se ofrecen varios
                  servicios estéticos, principalmente el corte de pelo, pero
                  también suelen realizarse otros como afeitado, depilado,
                  manicura, pedicura, etc. <br />
                  <br />
                  Cuando se trata de muchos servicios diferentes suele llamarse
                  salón de belleza. La referencia más antigua que se tiene sobre
                  la existencia de cuidados cosméticos en el pelo nos remite a
                  Egipto, donde se empezaron a realizar los cambios más
                  significativos en cuanto a la cosmética capilar.
                </p>
              </div>
              <div className="text-center mt-12 md:hidden bg:hidden">
                <Link to="/cita">
                  <button class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Pide cita aquí
                  </button>
                </Link>
              </div>
              <div className="mt-[20%] content-center">
                <img className="h-24 inline-block mr-[15%] " src={Lgbt} />
                <img className="h-24 inline-block" src={Wheel} />
              </div>
            </main>
          </div>
        </div>

        <div className="bg-black lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="bg-black h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={Imagen}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
