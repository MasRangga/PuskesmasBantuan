import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className=" fixed w-full z-10 text-white">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className=" text-2xl font-semibold">PusbanMuaraJawaIlir</h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Beranda
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Tentang Kami
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Layanan
            </Link>
            
            <Link
              to="pendaftaran"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Pendaftaran
            </Link>
          </nav>

          <div className=" hidden lg:flex">
            <a
              href="https://wa.me/6282251550919?text=Selamat%20datang%20di%20Puskesmas%20Bantuan%20Muara%20Jawa%20Ilir.%20Ada%20yang%20bisa%20kami%20bantu?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out inline-block"
            >
              Kontak Kami
            </a>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Beranda
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Tentang Kami
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Layanan
          </Link>
          
          <Link
            to="pendaftaran"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Pendaftaran
          </Link>

          <div className=" lg:hidden">
            <a
              href="https://wa.me/6282251550919?text=Selamat%20datang%20di%20Puskesmas%20Bantuan%20Muara%20Jawa%20Ilir.%20Ada%20yang%20bisa%20kami%20bantu?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out inline-block"
            >
              Kontak Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
